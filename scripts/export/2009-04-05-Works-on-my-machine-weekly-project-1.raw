---
layout: post
status: publish
title: 'Works on my machine weekly project #1'
slug: Works-on-my-machine-weekly-project-1
---
# Works on my machine weekly project #1
## 

<a href="http://www.box.net/shared/hacsh3b3s4" target="_blank">Download the source code mentioned in this blog post.</a>

 

<img class="alignleft" title="works-on-my-machine-starburst" src="http://wpup.codeimpossible.com/2009/06/works-on-my-machine-starburst.jpg" alt="works-on-my-machine-starburst" />I'm a hopeless code junkie. I love to write code. Most people do one thing for work and then another for their hobby. My girlfriend for instance works as an IT / Systems Engineer  and her other thing is photography.

<em>My</em> other thing is writing <strong>more</strong> code. I never did this with any of my previous jobs (save dish washer... I did wash dishes when I was at home but I wasn't trying out new, cooler ways to wash them).

... So where was I? Oh, right code junkie. So, I really like to write code and what I've decided to do is start a new small project each week and try to use some new chunk of .Net or a new library and I'll post the end results of my efforts here for you all.

All of these projects will be offered under the CodeImpossible "works on my machine" code quality guarantee. But I'll never post something that flat-out doesn't work.

Sound good? Cool, let's kick it off - as the first entry into this space I'd like to present <strong>TweetCommander</strong>.

TweetCommander is a small .Net v3.5 console application that lies in wait, watching a twitter account for any new Direct Messages from another user (we'll call this person the "owner").

When a direct message from the owner is found, TweetCommander will check to see if it contains certain text, and depending on that text, will perform a series of actions on the machine it is running on.

TweetCommander will support three commands: "current_screenshot", "exit", and "set_interval".
<ul>
	<li>Sending "current_screenshot" will tell TweetCommander to take a screen capture of the Windows desktop, upload it to TwitPic, and then send the url for that image to the owner user in a Direct Message.</li>
	<li>Sending "exit" will cause TweetCommander to exit</li>
	<li>The "set_interval" is followed by a number that represents the number of seconds TweetCommander should wait between requests for new direct messages from twitter. This is more to avoid the API limit than anything else.</li>
</ul>
<strong>Settings</strong>
TweetCommander will need to store the Twitter ID for the last successfully processed Direct Message somewhere so we aren't constantly processing the same commands over and over again. The end user won't need to be aware of this value but it's worth mentioning anyway.

We'll also need to store the wait interval so we don't lose this information if we need to restart TweetCommander for whatever reason.

Okay, so here is the settings file I have so far:

<img class="aligncenter size-full wp-image-348" title="tweet_mon_console_settings" src="http://wpup.codeimpossible.com/2009/04/tweet_mon_console_settings.jpg" alt="tweet_mon_console_settings" width="473" height="170" />

<strong>Working with Twitter</strong>
All right so now we need to be able to interact with Twitter. Now, I don't want to write my own API library so I'll <a href="http://code.google.com/p/tweetsharp" target="_blank">go out and get the latest copy of TweetSharp</a> which will give me a nice, readable interface to twitter's API. After getting this built I'll be able to get the most recent direct messages using the following code:

<pre class="prettyprint"><code>
var directMessages = FluentTwitter.CreateRequest()
	.AuthenticateAs(
		TWITTERACCOUNT_USERNAME,
		TWITTERACCOUNT_PASSWORD)
	.DirectMessages()
	.Received()
	.Since(Properties
		.Settings
		.Default
		.LastProcessedCommandID)
	.AsJson()
	.Request()
	.AsDirectMessages();
</code></pre>

Thats pretty freakin' sweet I must say. Tweet# really takes the brain work out of working with twitter and there is no way to look at that code and <strong>not</strong> understand what it is doing immediately. Epic win.

To get this running on your machine, just<a href="http://www.box.net/shared/hacsh3b3s4" target="_blank"> grab the source from my box.net folder</a>, and change these values at the top of the Program.cs file:

<pre class="prettyprint"><code>
// this is our "owner account" we will only act upon direct messages
// send from this user
private static string TWITTEROWNER  = "codeimpossible"; 

// this is our listener accounts username
private static string TWITTERACCOUNT_USERNAME = "someuser";

// this is our listener accounts password
private static string TWITTERACCOUNT_PASSWORD = "somepassword";
</code></pre>

<em>Note: The solution file for this contains a reference to a compiled version of  the Tweet# library that contains </em><a href="http://code.google.com/p/tweetsharp/issues/detail?id=36"><em>a quick patch I made for an issue that affects uploading an image to Twitpic</em></a><em>. However this issue has been fixed officially in the most recent source.</em>