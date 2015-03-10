---
layout: post
title: External Projects for the Week of 2015-03-09
summary: MyMonero adds wallet importing, and an interview with the xmr.to team
tags: [monero missives, external, usability, mymonero, accounts]
author: Riccardo Spagni (fluffypony)
forum: https://forum.getmonero.org/1/news-announcements-and-editorials/206/monday-monero-missives-25-march-9th-2015
---

<div class="text-center"><iframe style="border: none" src="//html5-player.libsyn.com/embed/episode/id/3415228/height/360/width/640/theme/standard-mini/direction/no/autoplay/no/autonext/no/thumbnail/yes/preload/no/no_addthis/no/" height="600" width="600" scrolling="no"  allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe></div>

To download the podcast directly please [use this link to the MP3](http://traffic.libsyn.com/monero/Monero_Missives_Podcast_for_the_week_of_2015-03-09.mp3), or [this link to the AAC/MP4](http://traffic.libsyn.com/monero/Monero_Missives_Podcast_for_the_week_of_2015-03-09.mp4), or [this link to the FLAC](http://traffic.libsyn.com/monero/Monero_Missives_Podcast_for_the_week_of_2015-03-09.flac).

A brief summary of the points discussed follows, a full transcription of the podcast is outstanding (can be submitted via [Github Issues](https://github.com/monero-project/monero-site/issues)).

In this week's podcast we cover external projects, with an interview with the [xmr.to](http://xmr.to) team.

1. [MyMonero](https://mymonero.com) has added existing wallet import functionality. Just use your 25 word mnemonic from simplewallet when logging in, and after paying the 10 XMR once-off fee your wallet will be available in MyMonero.

2. An interview with two members of the xmr.to team, binaryFate and Krongle, discussing some of the system's inner workings and challenges they've faced.

Until next week!

# Podcast Transcription

#### Riccardo "fluffypony" Spagni

Hello, and welcome to yet another Monero Missive podcast! I'm fluffypony, and i'm joined today by several people: Gingeropoulos,

#### Gingeropolous

Hi everyone how are you doing!

#### Riccardo

And Tom, who you may know as tewinget,

#### Tom

Hello!

#### Riccardo

And binaryFate,

#### binaryFate

Good morning

#### Riccardo

and Krongle!

#### Krongle

Hi everybody

#### Riccardo

So because of the amount of stuff that we seem to be covering in each weeks Missive podcast we obviously haven't been able to touch on external projects. A recap for everyone that doesn't know what external projects is: it's a section of the missive that deals with projects that are not entirely by the Core Team, they're by members of the community...or anyone, really, that's doing something interesting that involves Monero.

Ok, so you know mymonero seems to be growing in popularity, and obviously one of the concerns that people have had is the ability to...you know, they want to be able to use MyMonero if MyMonero explodes, and they don't want to lose access to their funds, for want of a better term. And obviously they are still in control of their funds, they're in control of their private key, but we do recognise that there is a need for simplewallet to be able to use the MyMonero style keys.

So that's something we are working on, and that's something that's something that we're quite close to, but what were happy to announce is the availability of an import wallet function. So if you have an existing simplewallet mnemonic, 25 word mnemonic, you will now be able to import your wallet into MyMonero. However, this doesn't come free - if you've ever done a wallet restore then you'll know that it is a little bit painful, because a wallet restore takes several hours, even on a snappy machine. So for us to import wallets we have to incur a cost purely from a processing perspective, and that has to be handed over to customers.

So at this initial stage we're going to be charging 10 Monero for a wallet import. It's a once-off cost, you'll never need to pay it again, and it will run from there on out with no additional fees for importing it. Obviously as time progresses, and depending on how successful this feature is, we may look at reducing the cost or whatever depending on how it scales. And one of the other things is we do support all the mnemonic languages that Monero supports, and will continue adding support for them as they increase. The ability to go the opposite route, you know to go from MyMonero into simplewallet, should be in simplewallet shortly.

Then really the last prong of this three pronged attack that we're doing is to give people the ability to create watch-only wallets...which effectively you can kinda fake now, in a way, by importing your view key with a random spend key, but we'll have proper watch only wallet functionality soon.

### Gingeropolous

Oh cool, so you just log in to check like how much you have in your account, to see if anyone has sent you anything.

#### Riccardo

Ja, and its not in a manner that can be exploited, because we wont have your spend key, and even if we try to change the JavaScript we still wouldn't have your spend key.

Ok so pretty much since we last did external projects there's a newcomer on the scene that's kinda exciting: xmr.to. And that's why today we have Krongle and binaryFate who are both from xmr.to, they're part of the team.

So to start off why don't you guys tell us a little bit about what xmr.to is, either of you?

#### Krongle

Alright, so we're a bunch of computer science researchers, in fact there's three of us - there's us the two of us and Arnuschky, who's also known. I'm the newer guy, but these other guys have been involved in crypto for a longer time, and binaryFate, I think, has been aware of the whole Monero stuff right from the beginning. He got me and Arnuschky excited about the whole space, so we've been looking to get into crypto for a while.

We've just recently started a company called CryptoSphere Systems, which is the brand that we wanna get involved with, that we wanna use. So we wanted to do something simple and quick to dip our toes in the water. So we came up with this idea, that one of the things obviously that is great and exciting about Monero is the whole anonymity, but the problem is that it's very hard to spend this stuff, whereas everyone's spending Bitcoin.

So the idea was quite a simple one...just try and enable people to spend Monero, but in Bitcoin world.

#### Riccardo

binaryFate, can you tell us a little bit about how xmr.to works from a user's perspective?

#### binaryFate

From the user perspective, it's quite simple in fact. Basically you have a friend you want to send to Bitcoin to, or you have a BitPay bill to purchase something online, you are given a Bitcoin address and you send a Bitcoin amount.

What xmr.to is doing is to be an automatic gateway to pay these bill in Bitcoin for you, and for you sending us some XMR. So in the end it boils down to the ability for the user to purchase anything with Bitcoin, while only spending Moneros.

So xmr.to gives the possibility to the end user, basically, to send Bitcoin - so to purchase any kind of goods online with Bitcoin that is now probably accepted unlike Moneros for the moment - so the user can purchase stuff with Bitcoin by only paying Monero.

#### Gingeropolous

I myself tried the thing out within, like, the first hour of you guys posting, I dunno if you recall. So yeah I was able to just plug in the Bitcoin address I had, and pay myself with Monero.

You know my question in these things is always, from the new user...you know, just pretend I'm some guy that watched the Superbowl and was like "oh Bitcoin" and then read about "oh Monero!" How secure is it? What are the processes of it where i can be sure that I'm actually sending Monero and it'll turn up as bitcoin somewhere? Again this is the whole trusting a third-party thing, so I dunno if you guys could elaborate.

#### Krongle

I think there's two different aspects to this. So one is just: do you trust any third-party, so some random person on the internet, do you trust them? I mean in a way there's not that much you can do about it...

#### Gingeropolous

Right, right

#### Krongle

...beyond just trying with a small amount, and I guess that's kind of what we've seen people doing already.

#### Riccardo

You know, when it comes down to it you've also gotta trust the company you're buying from anyway. So whether you're adding another layer to it...meh.
