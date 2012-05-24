---
layout: post
status: draft
title: 'Straight forward javascript'
slug: "Straight-forward-javascript"
---

## Write 2-3 sentences to grab your readers' attention. The ending should act as an introduction into your main body.


Here is some "straight forward" javascript:


    function hasUrl(text) {
      return (/https?://[\w+\.]*\.\w{2,}/i).match(text);
    }


We have a function that takes an argument and checks to see if it contains a url. Awesome. We can test this using a test like this:


    blockyTest.addTest( "should return true for http://www.google.com", function() {
      this.shouldBeEqual( true, hasUrl('http://www.google.com') );
    });


Note, in order to pimp my own stuff a bit, I&#39;m using my javascript testing library [BlockyTest][1] , but you could use [Qunit][2] &nbsp;or [JSunit][3] .


  [1]: https://bitbucket.org/codeimpossible/blockytests/wiki/Home
  [2]: http://docs.jquery.com/QUnit
  [3]: http://www.jsunit.net/
