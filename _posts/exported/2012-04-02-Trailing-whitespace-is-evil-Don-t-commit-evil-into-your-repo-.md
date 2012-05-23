---
layout: post
status: publish
title: 'Trailing whitespace is evil. Don't commit evil into your repo.'
slug: Trailing-whitespace-is-evil-Don-t-commit-evil-into-your-repo-
---
# Trailing whitespace is evil. Don't commit evil into your repo.
## Lately, I've beeen working on a lot of projects with different people/languages/editors, most of us were new git'ers and each project had a real problem with trailing whitespace.

<h2>
	Fred and Tim</h2>
<p>
	It all starts out innocently enough. Fred, a mid-level developer at InfoTech Systems opens up his IM client and fires off a chat to a co-worker: &quot;Hey Tim, can you check out my pull request? I&#39;m done with the ratings feature and think we should merge it in&quot;.</p>
<p>
	Tim, a Senior Software Developer, has been writing code since the mid 80&#39;s. He originally started out contributing to the Gnome project and then bounced around the corporate world, Lotus, Microsoft, Oracle but now works with Fred at a small startup where they and five other developers are trying to build the next great cat-picture rating website - CatR.</p>
<p>
	&quot;Ok, let me CR it&quot;, CR is the teams short-hand for Code Review. Even though most of the team are experienced programmers every feature and bug fix commit must be reviewed by another developer.</p>
<p>
	Fred is the &quot;new guy&quot; on the team, this is his third day at InfoTech and he&#39;s submitting his first feature enhancement. Even though Fred has 8 years of coding under his belt, he still gets a little nervous when someone reviews his code.</p>
<p>
	&quot;Hmmmmm&quot; Tim types back. <em>Ugh, This can&#39;t be good</em> Fred thinks.</p>
<p>
	&quot;This git diff looks weird. How many lines did you change in the main stylesheet?&quot;</p>
<p>
	&quot;Only 2 why?&quot; Fred types back, starting to get a bit defensive. He takes a few quick, deep breaths and calms down.</p>
<p>
	&quot;The diff is lighting up like a christmas tree. Check your diff locally.&quot;</p>
<p>
	Fred opens up a terminal and does a quick check to see what Tim is talking about:</p>
<pre>
<code>git diff master product-ratings-feature
</code></pre>
<p>
	<em>&quot;Crap!&quot;</em> the word jumps instantly into Freds mind. He can see immediately what Tims talking about. There a bunch of lines where the only thing different is the whitespace at the beginning or end of the line.</p>
<p>
	&quot;Ugh, yeah I see it&quot; Fred types back.</p>
<p>
	&quot;Well, we can&#39;t pull this in yet dude, we only want to have diffs show what we actually changed so if something goes south in the future we&#39;re not scratching our heads looking at a all whitespace commit. Go back and check your whitespace settings, re-save and let me know when I can review it again.&quot;</p>
<p>
	&quot;Great, guess I&#39;ve got some more work to do&quot; Fred says to himself. He lets out a fairly audible sigh, opens up Visual Studio and starts typing away at the keyboard.</p>
<h2>
	The moral of the story</h2>
<p>
	Trailing whitespace issues can cause a lot of problems when they get into your repository. It leads to falsey diffs which claim lines have been changed when in fact the only thing that changed was spacing.</p>
<p>
	This can make finding what actually changed in a file later on in the development cycle next to impossible. Most open source project leads know this and a lot of them will reject pull requests that fail to trim whitespace (or have other</p>
<p>
	A lot of IDEs and text editors have options to configure trailing whitespace (SublimeText make this insanely easy) but Visual Studio, amazingly, has no option for this.</p>
<h3>
	How to Remove Trailing Whitespace on save in Visual Studio</h3>
<ol>
	<li>
		Open visual studio (yep)</li>
	<li>
		In the menu select Tools -&gt; Macros -&gt; Macros IDE (yeah, we&#39;re opening <strong>another</strong> IDE)</li>
	<li>
		Expand &quot;My Macros&quot; in the Project Explorer (usually in the right-hand side of the window)</li>
	<li>
		Double-Click the EnvironmentEvents module (yep, it&#39;s VBA in all it&#39;s glory)</li>
	<li>
		Paste the code below just after the &quot;Automatically generated code&quot; region</li>
</ol>
<pre>
<code>Private Sub DocumentEvents_DocumentSaved(ByVal document As EnvDTE.Document) _
    Handles DocumentEvents.DocumentSaved
    Dim fileName As String
    Dim result As vsFindResult

    Try
        &#39; Remove trailing whitespace
        result = DTE.Find.FindReplace( _
            vsFindAction.vsFindActionReplaceAll, _
            &quot;{:b}+$&quot;, _
            vsFindOptions.vsFindOptionsRegularExpression, _
            String.Empty, _
            vsFindTarget.vsFindTargetFiles, _
            document.FullName, _
            &quot;&quot;, _
            vsFindResultsLocation.vsFindResultsNone)

        If result = vsFindResult.vsFindResultReplaced Then
            &#39; Triggers DocumentEvents_DocumentSaved event again
            document.Save()
        End If
    Catch ex As Exception
        MsgBox(ex.Message, MsgBoxStyle.OkOnly, &quot;Trim White Space exception&quot;)
    End Try
End Sub
</code></pre>
<p>
	Now save your new macro and whenever you save a file in Visual Studio this will run and trim all the trailing whitespace.</p>
<h3>
	How to Remove trailing whitespace on save in Sublime Text 2</h3>
<ol>
	<li>
		In Sublime Text, open up the preferences menu and select &quot;File Settings - User&quot;
		<ul>
			<li>
				this is important because if you use the &quot;Default&quot; settings, they may be overwritten when you update Sublime Text to a new version.</li>
		</ul>
	</li>
	<li>
		Scroll down until you see <code>&quot;trim_trailing_white_space_on_save&quot;</code>, set this option to <code>true</code></li>
	<li>
		Save</li>
	<li>
		Profit</li>
</ol>
<h3>
	Get Git to help you out</h3>
<p>
	In the example above Fred could have saved himself a lot of time if he ran one command:</p>
<pre>
<code># run in the root of your repo directory
mv .git/hooks/pre-commit.sample .git/hooks/pre-commit
</code></pre>
<p>
	This file has a check (on the last line) that will fail any commit when there are whitespace errors. It&#39;s not enabled by default so you have to remove the <code>.sample</code> from the file name to get git to run it.</p>
<h2>
	After all this, what should I do next?</h2>
<p>
	High-five Yourself!!!</p>
<p align="center">
	<img src="http://dl.dropbox.com/u/6291954/MnEIl.gif" /></p>
