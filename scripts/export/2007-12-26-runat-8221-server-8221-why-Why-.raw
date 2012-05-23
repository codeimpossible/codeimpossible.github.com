---
layout: post
status: publish
title: 'runat=&#8221;server&#8221; why??? Why!?!'
slug: runat-8221-server-8221-why-Why-
---
# runat=&#8221;server&#8221; why??? Why!?!
## 

<p style="text-align:center;"><img src="http://www.pistalwhipped.net/up/loads/2007/12/frustration2-thumb.jpg" alt="copyright (c) www.esl-lesson-plan.com 2007" height="287" width="354" /></p>
I know I'm not the first .net programmer to ask this question and I don't think I'll be the last. Why, oh why must we constantly include the runat="server" attribute in our custom and pre-compiled web control declarations? To me it seems like this is unnecessary bloat that could be re-tooled to save developers more time and reduce headaches caused by forgetting it's inclusion.<!--more-->

I'm not asking for the runat="server" attribute to be removed. Not at all. I'm just stating that I think it was implemented in an inconvenient way and should be re-thought and re-designed. A blogger named <a href="http://www.mikeschinkel.com/" target="_blank">Mike Schinkel</a> posed <a href="http://www.mikeschinkel.com/blog/whyrunatserverforaspnet/" target="_blank">the same question</a> and a commenter replied:
<blockquote>I understand your point, but the importance of [runat="server"] is more for consistency and extensibility. If the developer has to mark some tags some ways (ie an "asp:" prefix) and in other cases using runat, then it creates more confusion. Also, this simplifies what is sent directly to the user agent as a Response.Write and what needs to be parsed by the ASP.NET engine. What if some user agent of the future has a name collision with one of the ASP.NET tags, it would be difficult otherwise to tell ASP.NET to ignore a tag.</blockquote>
<strong>"..is more for consistency and extensibility."</strong>
<blockquote>"Consistency is the last refuge of the unimaginative."
- Oscar Wilde</blockquote>
I'm not sure why this person chose to argue consistency as one of his main points but it's a poor choice. He may as well have just said "it is just done this way". The runat attribute is required on all custom, pre-compiled or otherwise included web controls so why must it be specifically declared? Think about it in programming terms. If you have a literal string or integer littered throughout a class or function how likely would it be for you to replace that with a declared variable? I would do it 99% of the time.

<strong>"...this simplifies what...needs to be parsed by the ASP.NET engine."</strong>

Okay, apparently they (Microsoft) have never heard of Regular Expressions? Why must we specifically tell the ASP.NET engine which controls are server controls when the work is already done via the Page\Controls section of the web.Config when we include a control library? This seems overly redundant to me and reeks of poor implementation. The runat="server" attribute is more like a legacy feature from 1.0 that for one reason or another (probably it's deep integration with the compiler and rendering engine) has not been removed yet.