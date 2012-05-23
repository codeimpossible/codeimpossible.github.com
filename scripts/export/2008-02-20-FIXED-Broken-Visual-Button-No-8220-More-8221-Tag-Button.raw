---
layout: post
status: publish
title: 'FIXED: Broken Visual Button &amp; No &#8220;More&#8221; Tag Button'
slug: FIXED-Broken-Visual-Button-No-8220-More-8221-Tag-Button
---
# FIXED: Broken Visual Button &amp; No &#8220;More&#8221; Tag Button
## 

So recently <a href="http://wordpress.org/support/topic/148796" target="_blank">I had some issues with my wordpress installation</a> and <a href="http://www.pistalwhipped.net/bl/og/2008/02/04/what-a-battle-switcheditors-is-not-defined-in-wordpress/" target="_blank">was forced to go through some pretty insane steps to rectify the problems</a> I was having. The main issues were that my "Split post with More tag" button was missing and the "Code" tab in the MCE no longer worked. I fixed both of these issues by performing the following edits:

<!--more-->

1. look for a line that equals:
<blockquote>&lt;?php
$my_drafts = get_users_drafts($user_ID);</blockquote>
2. Just before this line paste:
<blockquote>&lt;script src="&lt;?php echo get_option('siteurl') ?&gt;/wp-includes/js/tinymce/plugins/wordpress/editor_plugin.js" type="text/javascript"&gt;&lt;/script&gt;</blockquote>
This fix, apparently, only solved my problems for posting a new article. When I saved a draft and later brought it up for editing my previous problems reared their ugly heads once again. This is due to wordpress using different pages for editing drafts and starting a new article, which seems like an odd choice to me.  Why wouldn't you save these kinds of hassles by using one page to handle both requests? Okay, I'm starting to ramble, back to the problem.

In order to fix the same problems I was having in my post-new.php file in the post.php file the edits are essentially the same (one additional new line must be added) they just occur in different areas.

1. In the post.php file locate the line that reads:
<blockquote>case 'edit':</blockquote>
2. After that line locate a line that reads:
<blockquote>wp_enqueue_script('prototype');</blockquote>
3. just after that line paste:
<blockquote>wp_enqueue_script('interface');</blockquote>
4. after the line you just pasted locate a line that looks like:
<blockquote>require_once('admin-header.php');</blockquote>
5. paste the following code after the line above:
<blockquote>?&gt;
&lt;script src="&lt;?php echo get_option('siteurl') ?&gt;/wp-includes/js/tinymce/plugins/wordpress/editor_plugin.js" type="text/javascript"&gt;&lt;/script&gt;
&lt;?php</blockquote>
Now save the files and upload them to your wp-admin directory and you should now be able to edit via the MCE problem free. I am not sure why these edits must be made and also why this isn't something that others have had to encounter as well. My search on WordPress.org's support site yielded few results so if anyone out there has had these problems and solved them another way please drop a comment.

<em><strong>Update:</strong></em> I completely missed the Page.php and Page-New.php files. Here are the steps to correct the problems with those files.

For the Page.php file:

1. find the line that equals:
<blockquote>require_once('admin-header.php');</blockquote>
2. after this line paste:
<blockquote>?&gt;
&lt;script src="&lt;?php echo get_option('siteurl') ?&gt;/wp-includes/js/tinymce/plugins/wordpress/editor_plugin.js" type="text/javascript"&gt;&lt;/script&gt;
&lt;?php</blockquote>
For the Page-New.php file:

1. find the line that equals:
<blockquote>&lt;?php if ( (isset($_GET['posted']) &amp;&amp; $_GET['posted'])  || isset($_GET['saved'])  ) : ?&gt;</blockquote>
2. before this line paste:
<blockquote>&lt;script src="&lt;?php echo get_option('siteurl') ?&gt;/wp-includes/js/tinymce/plugins/wordpress/editor_plugin.js" type="text/javascript"&gt;&lt;/script&gt;</blockquote>