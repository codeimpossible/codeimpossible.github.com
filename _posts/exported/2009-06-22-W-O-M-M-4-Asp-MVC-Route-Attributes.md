---
layout: post
status: publish
title: 'W.O.M.M. #4 - Asp MVC Route Attributes'
slug: W-O-M-M-4-Asp-MVC-Route-Attributes
---
# W.O.M.M. #4 - Asp MVC Route Attributes
## 

<a href="http://www.box.net/shared/1q4bq5scuz" target="_blank">Download the source code mentioned in this blog post.</a>

<img class="alignleft" title="works-on-my-machine-starburst" src="http://wpup.codeimpossible.com/2009/06/works-on-my-machine-starburst.jpg" alt="works-on-my-machine-starburst" />

A few weeks ago <a href="http://itc.conversationsnetwork.org/audio/download/ITC.SO-Episode54-2009.05.20.mp3">on the StackOverflow podcast</a>, something Jeff said got me thinking. Jeff was discussing how the stackoverflow team implemented their route mappings:

<em>
Those routes are... the way we implemented them are actually like decorators. Attributes on the methods. <cite>- Jeff Atwood (stackoverflow episode #54)</cite>
</em>

This instantly piqued my interest and I completely zoned out for the rest of the podcast: caught up in working out the details of how I could do this for my own Asp.net MVC projects. 

Coming up with the actual attribute code was easy; writing the code to set up all the Routes using only data defined in by the attribute was tricky.

Being new to attributes, and reflection in general, it took me a few hours until I had a very basic demo working. However, I was really starting to like where it was going.

<p class="right side-note callout-green">
As a side note: There are lot of "helper" classes and objects in the route attribute project (it feels cluttered to me) and the reason I did this was to make the code in AssemblyExtensions.GetRoutes() easier to read.
</p>

After a few nights of <a href="http://twitter.com/digitalBush/status/2121662803" target="_blank">Mtn Dew and convenience-store cherry-pie</a> I finished the rough code, tests and demo project (included in this blog post) and I was starting to realize that:

<ol>
	<li>Using the attributes is more declaritive and it feels cleaner</li>
	<li>Having your route information right above your actions is incredibly useful</li>
	<li>I had no more need to switch back and forth between your controller and the Global.asax.cs</li>
</ol>

<h2>How does it work?</h2>
All of the real work for the RouteAttribute is done in the AssemblyExtensions class. This class uses extension methods to augment the System.Reflection.Assembly class with two methods: GetControllers() and GetRoutes().

GetRoutes is the only method that is used by other classes, I made GetControllers public for unit testing.

<h3>GetRoutes()</h3>
GetRoutes' first order of business is to make a list of data that it will need to build out all the routes for the assembly it was passed. After thats done GetRoutes will loop through the collected route data, build up each route and add it to the dictionary that will eventually be returned.

<pre class="prettyprint"><code>
namespace CodeImpossible.Mvc.Routing
{
    public static class AssemblyExtensions
    {

        public static BindingFlags ActionFlags = 
            BindingFlags.Instance | 
            BindingFlags.Public |
            BindingFlags.DeclaredOnly;

        public static IList&lt;ControllerMetaData&gt; GetControllers(this Assembly assembly)
        {
            var controllers = assembly.GetTypes().ToList().FindAll(type =>
            {
                var isValidController = type.IsClass &&
                    type.IsPublic &&
                    type.IsSubclassOf&lt;Controller&gt;();

                var hasValidActions = type.GetMethods(ActionFlags).ToList().Any(m =>
                {
                    var valid = false;
                    if (m.ReturnParameter != null && m.ReturnParameter.ParameterType == typeof(ActionResult))
                    {
                        valid = m.GetAttributesOfType&lt;RouteAttribute&gt;().Count > 0;
                    }

                    return valid;
                });

                return isValidController && hasValidActions;
            }).Select&lt;Type, ControllerMetaData&gt;((t) => new ControllerMetaData(t)).ToList();

            return controllers;
        }

        public static IDictionary&lt;string, Route&gt; GetRoutes(this Assembly assembly)
        {
            var Routes      = new Dictionary&lt;string, Route&gt;();

            var data = (from c in assembly.GetControllers()
                        from a in c.GetActions()
                        from r in a.Data
                        select new
                        {
                            ControllerName = c.Name, 
                            ActionName = a.Name, 
                            RouteData = r, 
                            RouteParams = a.Params
                        }).ToList();

            foreach (var r in data)
            {
                var route               = new Route(r.RouteData.RoutePath, new MvcRouteHandler());
                route.Constraints       = new RouteValueDictionary();
                route.Defaults          = new RouteValueDictionary(new { 
                    controller = r.ControllerName, 
                    action = r.ActionName 
                });

                if (r.RouteData.RequireRouteParams && r.RouteParams.Count() == 0)
                {
                    throw new MissingRouteParameterException("Unknown", r.RouteData.RoutePath);
                }

                var missingParams = new List&lt;ParameterMetaData&gt;();

                if (r.RouteData.RequireRouteParams)
                {
                    missingParams = (from p in r.RouteParams
                                     where r.RouteData.RoutePath.IndexOf("{" + p.Name + "}") == -1
                                     select p).ToList();
                }

                if (missingParams.Count > 0)
                {
                    var param = missingParams.First();
                    throw new MissingRouteParameterException(param.Name, r.RouteData.RoutePath);
                }

                foreach (var param in r.RouteParams)
                {
                    if (param.Data != null)
                    {
                        if (param.Data.DefaultValue != null)
                        {
                            route.Defaults.Add(param.Name, param.Data.DefaultValue);
                        }

                        if (param.Data.Constraint != null)
                        {
                            route.Constraints.Add(param.Name, param.Data.Constraint);
                        }
                    }
                }

                Routes.Add(r.RouteData.Name ?? r.RouteData.RoutePath, route);
            }

            return Routes;
        }
    }
}
</code></pre>

<h2>Getting the Routes into the RouteTable</h2>
Slapping route attributes onto your classes and methods is all well and good but it doesn't mean anything unless we can get those routes into the RouteTable object easliy. Originally I had the code to add the routes looking something like
<pre class="prettyprint"><code>
var routes = Assembly.GetCurrentExecutingAssembly().GetRoutes();

routes.ForEach(r => RouteTable.Add(r));
</code></pre>

This, although pretty easy, wasn't as readible as I wanted. So I added some extension methods to the RouteTable class:
<pre class="prettyprint"><code>
RouteTable.Routes.IncludeRoutesFromAssembly();
</code></pre>

I think both of these are much clearer than doing:
<pre class="prettyprint"><code>
RouteTable.Routes.MapRoute("Root",
    "",
    new { controller = "Test", action = "GetItem", id = 1 });

RouteTable.Routes.MapRoute("Search",
    "Search/{id}",
    new { controller = "Test", action = "Search", id = 1 });
//.. SNIP ...
</code></pre>

<h2>Using the RouteAttribute and RouteParamAttribute</h2>
In the controller "TestController" below there are three actions: Index, FindByText, and GetItem. Using the RouteAttribute and RouteParamAttribute makes it pretty clear that the routes for FindByText and GetItem are the same but use different RouteContraints. 

So a request for /Test/Search/Hello will go to FindByText while /Test/Search/1 will go to GetItem. Also notice how GetItem has a default value of 2 for the id argument.
<pre class="prettyprint"><code>
public class TestController : Controller
{

    [Route(RoutePath = "Test")]
    public ActionResult Index()
    {

        return View();
    }

    [Route(RoutePath = "Test/Search/{query}")]
    public ActionResult FindByText(
        [RouteParam(Constraint="[a-zA-Z]{1,}")]
        string query)
    {

        return View();
    }

    [Route(RoutePath = "Test/Search/{id}")]
    public virtual ActionResult GetItem(
        [RouteParam(Constraint=@"\d{1,}", DefaultValue=2)]
        int id)
    {

        return View();
    }
}</code></pre>
There is support for binding multiple routes to the same action; just add another Route attribute:
<pre class="prettyprint"><code>
[Route("Products/Search/{id}")]
[Route("Products/{id}")]
public ActionResult GetProductById(int id)
{
    return View();
}
</code></pre>

<h2>Downsides or things I haven't gotten to yet</h2>
Just some gotchas that I think people might raise issue with.

<strong>All of your controllers must inherit from the System.Web.Mvc.Controller class</strong>
This isn't really a big deal because if you are using Asp.net MVC then you really should inherit from the Controller class, but for those of you using FubuMVC or another MVC framework this should be easy to change.

<strong>Attributes can be ugly</strong>
I know a few people out there are against attributes but I think that this is a more than acceptable use because it made the code much easier to understand.

<strong>Reflection can be slow</strong>
Honestly, when I first started working on this demo I was sort of turned off by the use of Reflection myself. After weighing the possible performance loss against the gains in both readability and maintenance I decided this was definitely worth it. I haven't performance tested this code so, as always YMMV.

As always, if I screwed up or there is a better way to do this, please let me know in the comments.

<a href="http://www.box.net/shared/1q4bq5scuz" target="_blank">Download the source code mentioned in this blog post.</a>