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

A brief summary of the points discussed follows, a full transcription of the podcast is below that and was kindly transcribed by goin2mars. You can donate to him for his transcription efforts: 4AzncXEK71uEtNtSKJjaX845XnJr9s7onXYNSBPTB2AGNnPbTjaN5W72qo8YgSSYsLGcr5pTBQkjnE7ADn6XbbHG2CTvvU1

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

Ok, so you know MyMonero seems to be growing in popularity, and obviously one of the concerns that people have had is the ability to...you know, they want to be able to use MyMonero if MyMonero explodes, and they don't want to lose access to their funds, for want of a better term. And obviously they are still in control of their funds, they're in control of their private key, but we do recognise that there is a need for simplewallet to be able to use the MyMonero style keys.

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

#### Krongle

This is the same as what everything on the internet before the community as well so you see that people have had positive experiences and the thing hits a critical mass and then you can be fairly confident that it works. you will feel the first couple of users that its just this weird black box that you don't know whats coming out the other end

#### Gingeropolous

Yeah just to mention that as you said its something that we witness anywhere in general because we are to trust the merchant or we are to trust bitpay to actually act as a gateway and not to keep your bitcoin so its just one layer that people i think are quite used to


yeah i think the most important thing for me to mention is that there is absolutely no trust involved for anything that is um privacy related so you spend your Monero and we dunno anything more than that.

Gingeropolus
mhm

#### binaryFate

because Monero is not traceable back so we can really the only information that we know about you is your ip address but if you reach xmr.to through some um anonymous networks like tor i2p then there is not much that we can do even if we were some really bad guys we would like to we couldn't do anything basically which is very nice

Gingeropolus
yeah

#### binaryFate

no problem for the user

#### Riccardo

i think the one key advantage as well is um most of the you know a lot of the losses that have occurred when in crypto wen people have had to trust third parties have been things like exchanges with they've left money on the exchange and with you guys its straight through you dump Monero in and out pops the bitcoin and there's not really much of an interval in between where things can go wrong

#### binaryFate

yeah

and on that front one of the things we've tried to the do on the user interface is to make it very responsive so that basically you can always see that something is happening so we actually spent like a bit of extra time um on it with a bit of extra development effort monitoring the transaction pool rather than just waiting for confirmation which is our first attempt we realized we were quite keen

that the user gets the sense that things are happening snappily so that you don't feel that oh I've sent my money into the void, whats going on. but you get in fact very quickly get back some sort of notification saying okay we're seeing that somethings going on here what were doing about it and we've tried to make that user experience so right from the moment you send your money to the moment that the bitcoin appears that the other end yourself always being notified in real time whats happening so you don't just get left with this sinking feeling of oh god


Gingeropolus

hah hah hah hah yea i did enjoy that part of the experience like i sent my Monero there and all of a sudden you had the screen change and there's was a tracking number and i was like oh OK something is happening

#### binaryFate

nice to know that the effort was noticed. appreciated.

Gingeropolus
i have a couple of questions about that whole process

#### binaryFate

yeah

Gingeropolus
for one um, there are some merchant services i believe bitpay and coinbase being two of them i think they have roughly ten minute timeouts on a transaction so if you start a transaction then that amount of bitocin they want you to send is valid for only ten minutes to deal with the volatility a bit. do you wait for enough confirmations from Monero from the blockchain and if so is it within that limit would i have a problem with that?

so basically withing that fifteen minutes i have to send Monero to you. it has to get enough confirmations or you guys to mark it as safe and then you have to send the bitocin and so what toms asking is what are the chances of missing that window


#### binaryFate

so what we do is to give the user five minutes time window but what matters and what needs to happen within this time window is just that we actually see the transaction on the peer to peer network. if you send the transaction on time there is literally zero chance that you miss this time window. if you are just connected to the Monero network. and as soon as we actually witness the transaction on the network we stop the timer and we just wait for one confirmation before sending the bitocin. we think that for now one confirmation is way enough and we can take the risk especially because we're still dealing with very small amounts. but because we don't need the confirmation to happen in the time window but only to witness the transaction on the network its very safe for the user because you're practicality no chance to miss it

but in terms of missing the second timeout like the lock on time amount of whoever you're paying in bitocin its quite unlikely if you're snappy on your end as an end users i think that were just benefiting form the fact that the Monero confirmations clock in much faster than the bitcoin confirmations

Gingeropolus
it sounds like waiting for one confirmation is plenty small time.

even if we eventually want to up that to two or three you're still within, you can get 2 or 3 Monero confirmation well before even one bitocin confirmation so no one in bitcoin world is gonna set their timeout so small because of the slow confirmations

#### binaryFate

if in the future this becomes an issue say bitpay suddenly decides to change this countdown to five minutes instead of fifteen what we could do on our side is to accept a zero confirmation transation which is exactly what bitpay is doing. based on some rules you judge whether the transation is highly likely to be spend and for now its really do it and see for our needs but its something we could do int he future.


Gingeropolus
now if i could ask just one other question. i don't know this one that you probably might not want to answer but I'm curious how does this work on the back end. like can you give any sort of like brief synopsis of that. because I'm curious like do you take the xmr and then go and buy the bitcoin like where does the bitcoin come from in this i guess is the question.

#### Krongle

yeah well, uh, in a way i think its important for the user to know at least one thing this thing is that we don't buy the equivalent of bitcoin right away because that would be possibly weakening the privacy right because you could make some time correlations because poloniex could do for instance we would use poloniex to change the Moneros immediately. for the same amount that was just sent to us. that would be an issue. so we don't do that. we are not sure how in the future how we are going to change them but for now i think  we do it like once a week. so yeah for now in a way .....? and we are still figuring out what the best way for us to go financially speaking but yeah whats important to know is we don't change them back right away.

and the other thing important for the end user to know is we set our maximum based on how much bitcoin we have in our funds so we will never accept an order we cant fulfill basically. if were running low on funds.


#### Riccardo

your risk tolerance is based on how much you got in reserve

#### binaryFate

yeah so were exposing ourselves to exchange fluctuations at the moment we just take on that risk and as Jeremy says we need to come up with a plan where we protect ourselves against that.

#### Riccardo

thanks very much for the chat guys and well see everyone next week

Gingeropolus
yeah thanks for hanging out guys

#### Tom

cheers guys see ya

#### binaryFate

thinks for having us bye

Gingeropolus
thank you all for joining it was quite a big crowd today, very awesome. thanks all for listening and tune in next week and here's bob with sports.