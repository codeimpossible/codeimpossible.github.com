---
layout: post
status: publish
title: 'Dear Sql management studio, just let me save my database table!!'
slug: Dear-Sql-management-studio-just-let-me-save-my-database-table-
---
# Dear Sql management studio, just let me save my database table!!
## 

If you're like me, you recently upgraded to Sql Server 2008 (or just installed the Management Studio). If you're really like me you found the "Saving changes is not permitted" dialog that pops up every time you try to save a modified table annoying. 

You may not have found it annoying enough to investigate but I sure did. I don't remember Management Studio 2005 complaining when I changed a table and saved it. Why the change in 2008?

Well, anyway, here's your chance to get rid of that dialog once and for all.

In Sql Management Studio, go to <b>Tools</b> -> <b>Options</b>, expand down the <b>Designers</b> node, and select <b>Table and Database Designers</b>. In the <b>Table Options</b> section uncheck <b>Prevent saving changes that require table re-creation</b> and you're done! 

You can now change your database tables hassle free!