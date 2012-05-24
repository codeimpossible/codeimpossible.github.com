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

            private static string xml = @"<?xml version=""1.0"" encoding=""UTF-8""?> 
    <kml xmlns=""http://earth.google.com/kml/2.0"">
      <Document>
      <Placemark>
       <name>my office</name>
       <LookAt>
          <longitude>8.853193712983327</longitude>
          <latitude>53.10919982492059</latitude>
          <range>500000</range><tilt>0</tilt><heading>0</heading>
       </LookAt>
       <Point>
         <coordinates>8.853193712983327,53.10919982492059,10</coordinates>
       </Point>
      </Placemark>
     </Document>
    </kml>
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
