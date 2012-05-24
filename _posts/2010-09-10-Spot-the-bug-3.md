---
layout: post
status: publish
title: 'Spot the bug #3'
slug: "Spot-the-bug-3"
---
Two coworkers and I fought with this for a bit earlier this week. Facing a nearing deadline and since the code only needed to run once to populate a database table, we ended up using the ugly method.

I made an example of the piece of code that was giving us trouble. Why  will `coordinates` always be null yet `coordinatesUgly` always gets the correct node?

    class Program
    {

            private static string xml = @"&lt;?xml version=""1.0"" encoding=""UTF-8""?&gt; 
    <kml xmlns=""http://earth.google.com/kml/2.0""&gt;
      &lt;Document&gt;
      &lt;Placemark&gt;
       <name>my office&lt;/name&gt;
       &lt;LookAt&gt;
          <longitude>8.853193712983327&lt;/longitude&gt;
          <latitude>53.10919982492059&lt;/latitude&gt;
          <range>500000</range><tilt>0</tilt><heading>0&lt;/heading&gt;
       &lt;/LookAt&gt;
       &lt;Point&gt;
         <coordinates>8.853193712983327,53.10919982492059,10&lt;/coordinates&gt;
       &lt;/Point&gt;
      &lt;/Placemark&gt;
     &lt;/Document&gt;
    </kml&gt;
    ";

        static void Main ( string[] args )
        {
            var xdoc = new XmlDocument ();
            xdoc.LoadXml ( xml );

            var coordinatesUgly = xdoc.DocumentElement
                .FirstChild
                .FirstChild
                .ChildNodes[2]
                .FirstChild;

            var coordinates = xdoc.SelectSingleNode ( "//coordinates" );

            Console.WriteLine ( "The Ugly Way: " + coordinatesUgly.InnerText );
            Console.WriteLine ( "With Xpath: " + (
                coordinates == null ? "NULL" : coordinates.InnerText) );

            Console.ReadLine ();
        }
    }
