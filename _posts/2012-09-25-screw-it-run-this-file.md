---
layout: post
title: 'Screw it! Run this file!'
slug: "screw-it-run-this-file"
published: false
tags: "development, devx, developer-experience, practices"
---
## Ever experienced a nightmarish environment setup and thought "If this project is this hard to setup, how hard is it going to be to work on?". Yeah, me too.

Every open source project needs a single file that new people can run to do all of the uncool, awful setup tasks that the project requires. Things like installing and configuring dependencies or creating and seeding a database.

The Rails community has had this for years and we take it totally for granted. In most cases, pulling a project out of github to do some work is painless.

    $ bundle install
    $ rake db:migrate
    $ rake test

And you're off and running. I've talked to a few Rails devs about development in .Net and when I mention things like "then we have to configure a third-party tool to sync database changes" they just stare at me like I've got three eyes.

The difference? The Rails community cares very much about developer experience. DevX is a very real concern of mine. I've worked on a lot of projects where the developers didn't think enough (or even at all) about how they might on-board a new person into their project.

You can get the sense for this when you're presented with a huge 4 page document on how to setup your environment when you start at company or when you see a "Getting Started" wiki page that has about 100 sections on it.

### Screw it! Run this File!

This is a concept that I felt really strongly about when I wrote [Artigo](http://github.com/codeimpossible/Artigo) (my blog platform that is no more). Yeah no one used it and it never went anywhere but if you pull Artigo out of github today, there is only one rake command you need to run:

    $ rake artigo:first_time

BOOM. You're setup. The `artigo:first_time` task cleans your db, migrates it, seeds it and then *runs the test suite*. If your project isn't this simple to get up and running then nobody is going to work on your stuff.

When making a service-oriented website your UX dev will suggest making registration "painfully obvious and simple" so that more people will register. What developer is going to bother with a 100 step setup guide just so they can submit a patch to your project?

### The story for .Net devs

Good news everyone! Dev experience for .Net developers is getting a lot better. With Nuget and it's new(er) feature to auto-download dependencies on build dev experience is getting pushed to the foreground.

But there is still more to be done. Add unit tests to your projects, take the time to write a [single powershell script to setup IIS](http://mikefrobbins.com/2012/05/15/create-a-new-iis-website-with-powershell/) and migrate your database with [RoundhousE](http://github.com/chucknorris/roundhouse).

Your future contributors/teammates will thank you for it!
