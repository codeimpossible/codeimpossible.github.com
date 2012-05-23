---
layout: post
status: publish
title: 'Test everything.'
slug: Test-everything-
---
# Test everything.
## 

I learned a lot about backups and DR last night. I was uploading about 10gb of ISO images to our file server at home and I started to notice a lot of dialog boxes appearing in my RDP window (the server is a headless box).

The messages were saying that Windows couldn't read XXXX file because the file or folder was corrupt.

I waited for my transfers to finish and tried to run chkdsk. No luck. Chkdsk couldn't initialize on the drive in question. Uh oh. I rebooted and crossed my fingers.

After a while the server came back online and I went back in over RDP. I immediately noticed that 80gb of data had been cleared from the drive! Now I was starting to panic. The 80gb of data included almost everything we use including:

 
<ul>
	<li>Software Downloads</li>
	<li>Our in-house SVN Repository</li>
	<li>Code files from years past (not in SVN)</li>
	<li>All of our Music</li>
	<li>All of our Pictures</li>
	<li>Various Documents (tax documents, important medical stuff etc)</li>
</ul>
 

<span> </span>

Basically everything you wouldn't want to lose right? 

<em>"No problem"</em>, I thought. I've been meaning to wipe this machine and get back to a fresh install for a while. So I reformatted the main drive and began re-installing Windows.

While this was going on I downloaded our backups from Mozy Home, retrieving our documents, pictures, music, everything. Or so I thought.

After Windows was done I started by re-creating all the shares on the cleared drive. I began installing SVN from scratch, setting up our repositories again and getting ready to re-check-in my code from my main pc.

During this process I started moving directories around on my main pc and got confused about what folders had what in them and I eventually ended up deleting all the code on that machine in one key stroke. I immediately knew what I had done but I kept my cool.

<em>"It's still cool. I have the backups. I'll be a day behind but I'll have my code"</em>.

So I restore the backup from the Mozy download and start browsing the repository from my main pc. One problem though, I'm not seeing any code newer than 12/07/2008. This can't be. I wrote a nightly backup script!

After checking the script I realized my problem. Yes, I had written the backup script to run nightly and yes, it was running every night but it wasn't overwriting the old backup data because the files were protected. 

Now at this point I am beyond devastated. I've just committed the cardinal sin in computers. I assumed my backups would work and never fully tested them. I am, for lack of a better term, completely screwed.

Since then I've run a whole slew of data recovery tools on both machines with no luck. My data is gone. A good month and a half of up-till-4am coding sessions completely gone.

Test all the time and test everything. Don't just assume things will work because they most likely won't when you need them the most.

 

Update: I thought this was really pretty funny: <a href="http://stackoverflow.com/questions/84556/whats-your-favorite-programmer-cartoon/110481#110481">http://stackoverflow.com/questions/84556/whats-your-favorite-programmer-cartoon/110481#110481</a>