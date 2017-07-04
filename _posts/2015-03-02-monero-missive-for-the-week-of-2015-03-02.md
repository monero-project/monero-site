---
layout: post
title: Dev Diaries for the Week of 2015-03-02
summary: BlockchainDB progress update, performance considerations, and rationale; RPC->0MQ communication change progress update
tags: [monero missives, dev diaries, core, blockchaindb, rpc, 0mq]
author: Riccardo Spagni (fluffypony)
forum: https://forum.getmonero.org/1/news-announcements-and-editorials/195/monday-monero-missives-24-march-2nd-2015
---

<div class="text-center"><iframe style="border: none" src="//html5-player.libsyn.com/embed/episode/id/3399146/height/360/width/640/theme/standard-mini/direction/no/autoplay/no/autonext/no/thumbnail/yes/preload/no/no_addthis/no/" height="600" width="600" scrolling="no"  allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe></div>

To download the podcast directly please [use this link to the MP3](http://traffic.libsyn.com/monero/Monero_Missives_Podcast_for_the_week_of_2015-03-02.mp3).

A brief summary of the points discussed follows, and a full transcription of the podcast is below (currently being completed, and it will be updated as it progresses).

In this week's podcast we restart dev diaries, and focus on two things:

1. Updates on blockchainDB, including rationale, performance considerations, and future steps

2. Moving away from the old RPC system for talking to the daemon, to a 0MQ-based IPC system

Technical note: in order to make this Missive a little more accessible, given its technical nature, we have taken some liberties in using the term "RPC" to refer to the JSON RPC API 2.0 over HTTP system used when currently communicating with the daemon, and "IPC" to refer to a complete replacement of that subsystem with 0MQ subsystem based on their Router/Dealer pattern, using the zmq_tcp transport for compatability.

External Projects has moved to be covered next week. Until then!

# Podcast Transcription

#### Riccardo "fluffypony" Spagni

Hello! And welcome to our second Monero Missives podcast. I'm Riccardo, fluffypony.

#### Gingeropolous

And I'm Gingeropolous!

#### Riccardo

Over the past week we've had some feedback on the Missive Podcast, we've had some feedback on the website. We're not going to talk much about the website - or at all. Instead, what we wanted to do, is get back to Dev Diaries, because obviously with the raw amount of content in last week's Missive we weren't able to talk about Dev Diaries at all.

So Dev Diaries is a Missive feature - a long-running Missive feature - where we discuss the more technical commits or things that have happened in the past week. First and foremost on everyone's mind: the move to BlockchainDB is something that seems to be a little bit misunderstood, especially in terms of where things are right now.

Just to clarify: the vast majority of the work on BlockchainDB has been completed. In fact, it was completed towards the end of last year. Plenty of us have been running BlockchainDB, or LMDB, instances of Monero for the almost two months now.

#### Gingeropolous

I can confirm that. I've been running the database version for a while now - I actually have a 2gb Linux box, it's just this crappy little old computer that I've managed to run the database build on for a while now. So it definitely works with low memory.

#### Riccardo

No exactly, and it does compile on the various platforms that we support. So there's no problem with platform support, there's no holdup with anything, the main issue we've had over the past month or so has got to do with two things.

Firstly, with sync speed, so in other words...if you're catching up, maybe your @node has been down for a couple of days, or you're catching up from scratch, from the Genesis block. And the second issue that we've had to deal with is conversion. So you've got the current, in-memory @blockchain saved on disk, and you upgrade to the database version and you want to convert what you've got on disk - you don't need to sync up from scratch when you're pretty much caught up with the network.

So this really has to do with the speed at which we write to the embedded database. It's not really a performance issue in terms of the database that we're using, but it's really a product of the fact that the entire @blockchain, for example, needs to be kept in RAM and then you have to have the database version whilst it's dumping. Or, when you're syncing up from scratch, there's all these extra components in the database, like indexes, that need to get written as it's busy dumping @blocks and @transactions down as it verifies them.

It has been quite challenging to figure out ways of improving this, and the bulk of the really clever thinking and clever work has been done by warptangent, and we've had a lot of really good input from the LMDB author, Howard Chu. Without input from him I think it would've been a lot more challenging, a lot more difficult, to figure out how to take advantage of LMDB's speed.

But at the moment it's really coming along nicely, and I reckon we are no more than a couple of weeks away from a point at which we can merge it into upstream and it can be pulled out into a release, into 0.8.8.7, and then we'll be able to at least get a feel on a wider basis as to how things are performing.

#### Gingeropolous

So regarding the database, I've been watching the forums, and it's been mentioned that other CryptoNote coins have utilised other methods to get around the whole @blockchain being in memory. Is there a reason that we didn't choose to just clone those methods, or "why use LMDB?" I guess is the main question...why sink all this time into making something new vs taking something that works.

#### Riccardo

That's a good question. So one of the things that we...one of the challenges that we faced is, when we really started going down the BlockchainDB route, there was some code added to the CryptoNote reference code, I believe Bytecoin added it initially. It was a version of the swapping between disk and memory that your operating system already does.

So just to explain what happens: if you've got a 1gb file, and a program needs to access that 1gb file, but it only needs to access a small portion in the middle...there's no point, generally, in loading the entire thing into memory. But because most programs have to deal with files of all sorts of size and shape and colour they can't say "oh, I only need this portion in the middle" preemptively. So what they'll do is they'll request the entire file to be loaded into memory.

But because the operating system knows that it only needs this portion at the beginning, and then later on this portion in the middle when it's requested, it won't actually load the whole thing into memory, but it'll page it into a temporary storage area on disk and then load portions into memory. So that's effectively what some of the other CryptoNote coins have used, this swapping.

We felt that there was limited value in doing the swapping that the operating system is doing already...in a manner that may not be as efficient as the operating system. And that's not a knock on the piece of code that's been written, we just felt that it was better to abstract the @blockchain class out, and to create something that is more performant and more extensible.

Obviously we had to balance that with the fact that the @blockchain was growing, and it was growing to a point where it was excessively big for many, and so we knew that there was this limited time that we had where we either had to get the database done, or we would have to fall back to some other solution. And we're still within that timeframe, and the database, as you know and as we've discussed, is pretty much done.

So using that other fake-swap system wouldn't have had value, and wouldn't have solved the problem, and at worst it would've made us lazy to finish the database because there would've been no pressure.

#### Gingeropolous

One of the things that I saw mentioned on IRC is that LMDB works best - or only? I dunno - on a 64-bit system. So how will we address users that have 32-bit systems if the database is now using LMDB?

#### Riccardo

Ok, so there's two things that we're doing. The first is that LMDB has a branch that is 32-bit specific, called vl-32, and we will have that in the codebase. Outside of that, later on we do need a greater solution to something like ARM. If we want to run, and we are working on getting Monero running efficiently on a Raspberry Pi for example, it's not going to play well with the 64-bit version of LMDB because LMDB requires such a large MMAP space.

#### Gingeropolous

For those that aren't familiar, what fluffypony is talking about with ARM is a microarchitecture, a computer architecture, that is mainly used on mobile phones. So your Android device has ARM processors, whereas your computer has x86...or whatever it's called. So the goal here is to make sure that the database also works potentially on smaller, mobile, more efficient devices.

#### Riccardo

That's exactly it. It's one thing to have the ability to run a full @node on a computer...what about something smaller...something like a Raspberry Pi? What about the ability to have, almost like an appliance-level device, where you plug it into your network and that's it...that's your Monero @node. It syncs up to the network, if you need to access the @blockchain, or send @transactions, or receive @transactions, you don't need to then run another instance of the daemon because you've already got it running on that little appliance.

#### Gingeropolous

Oh nice!

#### Riccardo

This is the sort of thinking, as a longer-term prospect, which necessitates having multiple database implementation options, because that's really one of the sticking points, or one of the pain points. So LMDB...great, vl-32 branch...awesome, the vl-32 branch will probably, and we haven't tested this yet, will probably play quite nicely with Raspberry Pi. But even beyond that we're going to, at a slightly later stage, once we've got a little time in a couple of months, we're going to be adding BerkleyDB support.

Now BerkleyDB is a slightly more pedestrian embedded database. It uses a different approach than the one that LMDB uses, and it means that it's not quite as performant as LMDB, but it's also a lot more forgiving when it comes to what architecture it can run on. And it also doesn't need as much MMAP space, for example...well it doesn't need MMAP space at all, really.

#### Gingeropolous

Whatever MMAP space is!

#### Riccardo

It's one of JSON's friends

#### Gingeropolous

Oh...that's where he lives...MMAP...it's what he uses to get places!

#### Riccardo

You know, we use Google Maps, he uses MMAP!

Ok, so that really should give all our listeners an indication as to what the current state of the database is, the painpoints we've faced and have had to overcome, and what we're going to be doing in future...not only to make Monero run on multiple platforms, but to make it run smoothly and efficiently on the smallest of devices.

So that's the database, I think that's the bulk of what we wanted to chat about about the database, unless there's anything else you'd like to add.

#### Gingeropolous

I think next on the list for the Dev Diaries is...

#### Riccardo

Is JSON...well, JSON's friend...RPC.

#### Gingeropolous

Going into acronym land!

#### Riccardo

Yeah we are a little bit!


### Incomplete, Work in Progress
