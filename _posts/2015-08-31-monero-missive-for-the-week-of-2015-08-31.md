---
layout: post
title: Monero Missives for the Week of 2015-08-31
summary: Contributing to, and building, the Monero website
tags: [monero missives, usability]
author: Riccardo Spagni (fluffypony)
forum: https://forum.getmonero.org/1/news-announcements-and-editorials/2368/monday-monero-missives-31-august-31st-2015
---

<div class="text-center"><iframe style="border: none" src="//html5-player.libsyn.com/embed/episode/id/3775209/height/360/width/640/theme/standard-mini/direction/no/autoplay/no/autonext/no/thumbnail/yes/preload/no/no_addthis/no/" height="600" width="600" scrolling="no"  allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe></div>

To download the podcast directly please [use this link to the MP3](http://traffic.libsyn.com/monero/Monero_Missives_Podcast_for_the_week_of_2015-08-31.mp3), or [this link to the AAC/MP4](http://traffic.libsyn.com/monero/Monero_Missives_Podcast_for_the_week_of_2015-08-31.mp4), or [this link to the FLAC](http://traffic.libsyn.com/monero/Monero_Missives_Podcast_for_the_week_of_2015-08-31.flac).

In this week's episode we discuss the website content, and how everyone can contribute to making the Monero website a more complete and useful resource for newcomers.

Until next week!

# Podcast Transcription

#### Riccardo "fluffypony" Spagni

Hello everyone and welcome to another Monero Missive. I am Riccardo, fluffypony, and again unsurprisingly today I have gingeropolous

#### Gingeropolous

Good morning everyone, this is Gingeropolous. How are you doing? But it is not morning. It could be afternoon for you, I keep forgetting that.

#### Riccardo

Could be evening

#### Gingeropolous

Ya

#### Riccardo

Could be middle of the night. So a lot have people seen the website and for example they have seen that parts of the website are complete and have content and other parts don't. We often get questions from people who want to help and they can’t necessarily contribute to Monero core, and they don’t have funds to contribute to the dev donation fund, so they prefer in some other way. They don’t want to create peripheral projects of their own.

#### Riccardo

One of the key areas that does need attention and will always need attention is the website. So what we wanted to do is chat a little bit about what is needed on the website right now and what will be needed on the website in the future and how you can get involved in helping us make the Monero website even better than it is.  Because it is meant to be a repository of terminal knowledge about Monero. That is what we want to it to be.

#### Gingeropolous

Indeed, time to fill up a lot of these, such as the “knowledge base” and  “user guides”. Just fill it up.

#### Riccardo

Just make it

#### Gingeropolous

I have come across these works in progress and I just wonder, how to get words on the page. I know the github version of these pages exist. But when I get to github I just wonder how do I make a commit? I don’t know

#### Riccardo

So lets talk very briefly about the technology of the Monero website. It is not important to know all the ins and outs, just as long as you know how to work on it. The website does not use something like wordpress or any of the common content management systems, it uses a system called Jekyll. Jekyll takes the content we write using a system called markdown and it turns it into HTML. So essentially the entire site is this flat static thing and we never need to worry about getting hacked with a SQL injection or anything like that. Its also very nice from a performance perspective.

#### Gingeropolous

I don’t know what a SQL injection is. Let us assume that those that know what a SQL injection is are happy. Moving on...

#### Riccardo

The long and the short of it is that it is not a point and click system. Markdown is a pretty easy system to work with for performing simple operations. If you are doing things that are more complex, it takes some figuring out. The parts of the website that need work and have close to nothing in them essentially all are “knowledge base” sections. Primarily there are 4 main sections that have next to nothing in them and those are:

1. About Monero

2. Moneropedia

3. User Guides

4. Developer Guides

Those are the 4 areas in where we need assistance.  About Monero is not an area where are particularly concerned about getting much assistance because it is just a one pager. Although we would like some animations or videos explaining the inner workings, this is not a massive priority.

Moneropedia on the other hand is something that needs a lot of work. On the website with the Moneropedia link there is a list of things we already have definitions for. Many of these are just one liners. They are used for providing definitions when you hover over the words elsewhere on the Monero website. The definition of “account” (first entry in Moneropedia) has been done completely with lots of detail. That is what we would like to see in Moneropedia for every single term, including the terms we are now missing. Not every term will be able to have more than a couple of lines. We need to flush out definitions for both newcomers and those who have been around crypto currencies for a while

#### Gingeropolous

Okay so the account page is basically the template of what we are looking for

#### Riccardo

Yes, this is what we would like things to look like. Now behind this page is not a bunch of HTML it is a markdown file. Om github you can see the account markdown file and get a good idea just by looking at the example. We will add some functionality to the site over the next week so that people can click and see and suggest changes easier. Now if you are not familiar with github and you don’t care to take the time to learn how to use git and directly contribute by making pull requests, then you can go to the right hand side of the Monero site github to submit a new issue. You can literally just type your suggestion in plain text into that area and suggest that. Then we can take that content, and properly format it into markdown and so on. This way people can help without having to spend time learning how to use markdown or github. The fastest way to get there is https://github.com/monero-project/monero-site

#### Gingeropolous

Easy enough

#### Riccardo

Now the same thing goes for developer guides and user guides. We have had a lot of people complain about a lack of documentation. They say I want to use the wallet API or daemon API but say “oh there is no documentation”. Someone needs to build the documentation. Its not always something the developers can tackle. Now those that have built things on top of Monero, please right down what you have learned. This way new developers do not need to spend days on IRC trying to muddle through it.

#### Gingeropolous

It is as easy as writing down content and an issue on github so that it can be added to the website. For example on the github page you can find he transcription of 3/19/15 missive which was transcribed by a community member who took the time to write it down. It is easily done

#### Riccardo

We are trying to make it easy for people to submit content. It is important to have a certain quality in terms on quality and grammar and spelling. Good flow and a consistent feel is also important. But frankly if you write a guide or any other content, someone else can come along to make changes and edits to assist with that. Its just a matter of getting content up there in the first place

#### Gingeropolous

It is much easier to edit something that create it. If you are inspired to create something don't be worried about needing some sort of polished gem that is worthy of being on our beautiful Monero website. Just make something happen and we will all work together to make it website worthy.

#### Riccardo

Now a lot of people have expressed some interest in helping with translations.  We are almost at the stage where we are ready to switch over to translated version of the website. Please if you can help do so, the front being the most important. In the next weeks we will be ready to switch over to the multi- language version and move some things over to Transifex. This will make it easily for people to assist with translations

#### Gingeropolous

Someone recently made a post stating that we found out Transifex is free for open source developers.

#### Riccardo

The nice thing about Transifex as well is that if someone submits a translation, someone else can always come along better to make edits to make better translations. Hopefully not only the content but also the intent of the website and posts in the translation.

#### Gingeropolous

So in general this call for content and help for edits is a reminder that Monero is not your typical cryto-currency where the devs do everything. This is our coin, its a community coin. Don’t sit around screaming at the website yelling “why is there no content”. Do something!

#### Riccardo

Just make it! Just to reiterate Monero is starting to achieve a level of visibility that is really outstripping its usability to some degree. People are become ever more interested in it while we are still working on the fundamentals.  Having a website that is easy to navigate, that has content, terms and explains to people how to get going is critical. We have done a lot of that but there is tons more. When it comes to translation, we should not use terms that are too technical. When we do need to use technical terms we should make sure there is a Moneropedia entry (even a short one) to define that so there is no confusion.

#### Gingeropolous

Well thank you fluffypony for the conversation and thank you listeners for tuning in. Until next week
