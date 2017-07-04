---
layout: post
title: Monero Missive for the Week of 2015-02-23
summary: New website, moved from monero.cc to getmonero.org, MRL-0004 released, Monero design and development goals published
tags: [monero missives, research, usability]
author: Riccardo Spagni (fluffypony)
forum: https://forum.getmonero.org/1/news-and-announcements/161/monday-monero-missives-23-february-23rd-2015
---

We are moving to a new Missive format, it is now in the form of a podcast!

<div class="text-center"><iframe style="border: none" src="//html5-player.libsyn.com/embed/episode/id/3381043/height/600/width/600/theme/standard-mini/direction/no/autoplay/no/autonext/no/thumbnail/yes/preload/no/no_addthis/no/" height="600" width="600" scrolling="no"  allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe></div>

To download the podcast directly please [use this link to the MP3](http://traffic.libsyn.com/monero/Monero_Missives_Podcast_for_the_week_of_2015-02-23.mp3).

A brief summary of the points discussed follows, and a full transcription of the podcast is below.

1. The release of the new website, and the move to [the getmonero.org domain](https://getmonero.org/)

2. The publication of [MRL-0004, Improving Obfuscation in the CryptoNote Protocol](https://lab.getmonero.org/pubs/MRL-0004.pdf)

3. Monero's [design and development goals](http://getmonero.org/design-goals/)

Dev Diaries and External Projects will resume being covered from next week. Until then!

# Podcast Transcription

#### Riccardo "fluffypony" Spagni

Hello and good morning or evening to you wherever you are I am Riccardo, fluffypony, and with me today I have Gingeropolous...say hi!

#### Gingeropolous

Hello everyone!

#### Riccardo

And this is the start of a new type of Monero Missive, because we realized as a core team that preparing a full Monero Missive with all its bits and pieces was taking up a lot of time and soaking up a lot of effort that would have been spent elsewhere. And more importantly we also realized that a lot of people just weren't getting through the content of the Missives that we were putting out, hence this new format.

So, Gingeropolous you are reasonably well known already, why don't you tell us a little bit about you and your involvement in the Monero community.

#### Gingeropolous

Oh sure, I watch the Monero community on the forums and as there was no Missives coming out people were like "hey, why aren't there any Missives," and I was like all right I will go ahead and make a version of them to sort of sum up what I saw happen in the community. So that's where that whole digest came from and I guess that digest caught the eye of the actual core developers, and they contacted me like "hey, do you want to do this podcast?" And I guess my sort of role or function is to bridge the gap between those that actually know what [Jason](https://en.wikipedia.org/wiki/JSON) is doing and those that either don't know what Jason is doing, cause Jason is very popular.

#### Riccardo

Yeah and you've never even met him!

#### Gingeropolous

No I haven't, you know he always calls a lot. His buddy RPC, and API, API is a good guy.

#### Riccardo

So you're the community liaison let's call it that. So today were going to forego the normal bits that we do at the end of the Missive, we're going to skip the Dev Diary and skip External Projects, because there are 3 major things we need to talk about. Now for our listeners who are not English-speaking and may struggle to understand this, we are asking the community in their own time when they get a chance to transcribe some of the podcast content into written form so that it can be understood better and eventually translated. But obviously that's not high priority, and at your earliest convenience if you have some time and feel like transcribing it the first one out the gate is always a winner. 

So what we'd like to concentrate on are 3 things and the first thing were going to talk about is the new website which has only been like a year in production. There's been a great deal of effort that we've put into this and as everyone knows we started with a design that we built quite early on which is been available in the forum for quite some time. But one of the things we wanted to do is really create a website that was accessible not just a hard-core Monero fans or existing users, but to new people that wanted to know what is Monero; what does it do; how can I use it; how can I do simple things...how can I accept payments with Monero; how can I use Monero; how can I run a @node...once I eventually understand what a node is. And so we created this website, and along with the creation of the website we also felt it prudent to move away from the monero.cc domain, which has served us well, but it's time for us to move to something that is a little better suited. So we are moving to getmonero.org which has a long-standing tradition in open source community, Firefox when it first launched also didn't have firefox.org, and so they ran with getfirefox.org for very long time before they eventually started to get other domains that were donated to them. So it's the same with this: the monero.cc domain will forward to getmonero.org, so nothing will change if you have old links or subdomains that are on monero.cc, carry on using them, it will automatically forward you through.

#### Gingeropolous

Fantastic

#### Riccardo

There are a couple of things that we've done in this website I'd like to just point out. The first thing is where we use terms that are confusing or technical, or perhaps what's the word I'm looking for terms that are unfamiliar to new users...

#### Gingeropolous

Like jargon.

#### Riccardo

Ja jargon, something like @blockchain or @transaction. Transaction has a familiarity to us because we use cryptocurrency, but a transaction like a credit card transaction is very different to a transaction in digital or cryptocurrency terms. So you can't, we can't make assumptions about what people know. So part of this is we've created something called a Moneropedia, which obviously is like Wikipedia but for Monero. There are still a lot of room to grow in terms of content, there's a lot of continent needs to be added, but you'll notice that certain things like even on the front page, those 3 green blocks that explain the secure, private, and untraceable nature of Monero, you'll notice that there are some words that have got slightly darker text, and when you hover over them or if you're on a mobile device when you tap on them it actually gives you little summary of that term. So hover over "@consensus" or "@accounts" or "@mnemonic-seed" or "@blockchain" or "@transactions", it explains the term to you. So we are trying to create something that is accessible and that people don't get overwhelmed with tons of information.

We've created a lot of content especially in the getting started section that's pretty much done, which means that people who would want to accept Monero payments, either by hand or programmatically, there is plenty of information there. And in the knowledge base there is still a lot of stuff we are working on in terms of content, but Moneropedia we've already started filling in a lot of that. And the [source code for the website is in a Github repository](https://github.com/monero-project/monero-site) so you can take a look at it, you can look at the way everything is put together. It's all Markdown, processed through a system called Jekyll, which is what Github pages uses. So you can take a look at the existing Moneropedia entries, and you can take a look at the Moneropedia entry for account and see how we structured everything in the Markdown. And if you want to contribute content, by adding entries or correcting mistakes we've made, please, please do so.

#### Gingeropolous

So there's a way for the community to contribute to this, that's awesome.

#### Riccardo

Exactly, so along with that there's also we haven't forgotten about internationalization, you notice that when we hit the website for the first time you have to choose a language and at the moment the only language is English. And the reason that we haven't bolted another language just yet is we want to first flesh out the English content, and everything is pretty much ready for us to start adding other languages, but we just want to get English sorted of first and then we will do a call for translations, and will have strings up on Transifex so that people can translate.

So on the monero-project Github there is a [monero-site](https://github.com/monero-project/monero-site) repository, and if you notice any issues, if you notice dead links or anything like that, you can open an issue on Github. If there's anything you want to change or add or whatever, then you can clone the repository and fix it on your side and then submit a pull request, which is the same way we work with all of the other projects.

So one of the reasons that we went this road instead of going for more traditional wiki where anyone can edit it and so on is because the git, and github by extension, format for dealing with changes is just a lot more geared toward consensus, at least that's what we feel. So, for example, if somebody wanted to make a change to an article in Moneropedia, they would make the change and submitted it as a Pull Request, and then in the comments section the community can back and forward and say "I think this sentence should be done that way," or "you forgot to highlight the word here so it gets flagged and linked to its definition in Moneropedia," and so on. And there can be a general feeling that the change is good or bad. So it just sort of lends itself more towards a community driven project than the one where, like with Wikipedia where it just ends up being refined purely by brute force almost.

Let's go on to [MRL 4](https://lab.getmonero.org/pubs/MRL-0004.pdf)!

#### Gingeropolous

We're done with the website?

#### Riccardo

We're done with the website. So the Monero Research Lab may have seemed quiet for the past few months and that's because [MRL 4](https://lab.getmonero.org/pubs/MRL-0004.pdf) has been quite a hefty thing to put together. Basically it has been an exercise in trying to pick magic numbers which normally ends badly. But as everyone is aware, or should be aware, our very first Monero Research Lab bulletin revealed a weakness in the CryptoNote protocol.

Obviously Monero is very grateful for the effort that CryptoNote put into the initial cryptography, we are taking this further. And one of the key things we are doing is fixing this massive gaping hole in the CryptoNote protocol. So Gingeropolous, you've read [MRL 4](https://lab.getmonero.org/pubs/MRL-0004.pdf), why don't you tell us a little bit about what you understood and what your take aways were.

#### Gingeropolous

Well I did read it a week ago, from what I recall the main sort of meat of [MRL 4](https://lab.getmonero.org/pubs/MRL-0004.pdf) was the whole concept of how anonymous is the actual CryptoNote protocol, and the main thing I think was the take-home was it has to do with the amount of mixins that you put in your transfers. I'm sort of rambling here.

#### Riccardo

You are spot on...there are two different aspects to privacy in Monero and that is the unlinkability and the untraceability of transactions. Now when we say unlinkability we are talking about the dual-key stealth addressing that addresses that component; but untraceability is another thing entirely. So, the untraceability is dealt with by ring signatures. As [MRL 1](https://lab.getmonero.org/pubs/MRL-0001.pdf) pointed out there is a potential compromise, and a cascading compromise, to the ununtraceable nature of CryptoNote transactions.

Just to sort-of explain it quite simply: if I create a bunch of transactions, and in each transaction I have my signature along with your signature...so just by chance I happen to mix with your signature, and it's the same denomination I put every single time. And then in 6 months' time you go and spend that output at a mixin 0. Suddenly what you're effectively doing is you are invalidating all of the times that output was used previously. Which means that all of the transactions where you and I, where I used your signature as a ring signature on it, is suddenly like...well, anybody looking can go "hey, this ring signature is part of an output that was spent, and so therefore the other one must be the correct one." So that revelation becomes dangerous especially when owning a certain number of outputs, and the knowing that you control those outputs leads to a cascade or a snowball.

So what we're really trying to move away from his instead of having "unspent" outputs that we mix with, just having outputs that we mixed with and they should always be unspent; it should be impossible to tell if an output has actually been spent on the blockchain or not.

Now the reason that we might need 0 mix transactions, or mixin 0 transactions, is because traditionally in Monero there is dust. And dust, when you are using it as an input, will never have anything, or will most likely, not have anything it can mix with. So it presented an interesting problem for us and for the rest of the members of the Monero Research Lab. Because not only did we have to devise a scheme that just disallowed mixin 0 transactions, but we also needed to figure out a way to get dust out the system, to maybe do this in a way that dust eventually comes of the system instead of having some sort of magical destroyer of dust go through the blockchain, which is impossible.

So [MRL 4](https://lab.getmonero.org/pubs/MRL-0004.pdf) is something that people can read in their own time, but basically the long and the short of it is that we're going to be moving quite soon to a minimum mixin of 2, and we are going to programmatically lock in that within the next 3 to 5 years that minimum mixing is going to move to 4.

#### Gingeropolous

And by minimum mixin you mean something that is hardcoded into the actual protocol, or is this in the wallet, or payment...?

#### Riccardo

This will be a hardfork, and it will mean that anyone trying to send anything with a mixin of 0 or 1, their transaction is going to be rejected by the network.

#### Gingeropolous

Okay I got you.

#### Riccardo

And obviously any miner that mines a block with mixin 0 transactions, their block is going to be rejected by the network. The one key, or little thing at the end, which is how to deal with dust, is the way it is proposed in [MRL 4](https://lab.getmonero.org/pubs/MRL-0004.pdf), and this is the way were going to be implementing, it is to allow mixin 0 transactions only under a special set of circumstances. So the protocol will allow mixin 0 @transactions if it uses an input that has nothing else it can mix with, so a dust input essentially, and in its' output it does not create new outputs that cannot be mixed with. So the idea is the wallet  software already picks dust up as it creates transactions, and what we might do is try and prioritize that a little bit to try and flush dust out faster. But over time, and I don't think it's going to take too long, but over a period of time there will be a smattering of a mixin 0 transactions that will be taking dust out of the system but not creating new dust, so eventually they'll be no more dust.

#### Gingeropolous

Just so any completely new people to cryptocurrency are wondering, dust is like when you have like 0.0013...a bunch of random numbers out of Monero that you are trying to send, and so it has to break apart your transaction into pieces and that little 0.00-whatever is very unique and it can't mix with anything so that's why the dust is the problem. Did I get that right?

#### Riccardo

That's correct.

So there are a couple other text that are detailed in the paper, things like association by use attacks and so on, and so one of the small things we are going to be adding is every 6 to 8 weeks, if you are using the wallet regularly...every 6 to 8 weeks if there is a certain number of blocks that are being added to the block chain, 6 to 8 weeks' worth since you last received any transfers to your Monero wallet, it is going to flash you a little warning, and it's going to encourage you to send some funds to yourself. Just send it out and back to yourself, which means you are sending it back to yourself as the recipient. And some of the changes like that, it's not hardfork changes, it is just encouraging certain behaviors. It is really just to prevent certain attacks, and the reality is a lot of these attacks are edge cases. Some of them do require a certain level of skill, prowess, money, power, whatever of an attacker, but it is just a really trim down those edge cases so that the risks, the edge case risks, are reduced even more with the Monero.

#### Gingeropolous

And so is there going to be like a recommendation from your wallet software, or just sort of hardcoded in there like "oh you haven't done anything in 2 months...I'm going to send half of your wallet to yourself?"

#### Riccardo

Well one of the reasons that we can't do that is because we can't force people to spend the money in fees, that's the first thing. So we can't have a protocol that's living on the @blockchain or living on @nodes that spends money or spends funds without the user's involvement because they control the fees. Now the nature of things is that not everyone keeps their wallet open all the time even if they are running a @full-node and that node is connected to the network. So it's not really suitable to doing stuff in an automated fashion. It is just something where thre would have to be some cognizance on the user side where they will see the warning and they will go "oh dear, I've got to send out to myself," and on the GUI side maybe we'll add a big fat button that they can just click on and off it goes. And a lot of it is to reduce things like association by usage problems and so on.

And one of the things is age-based association as well, which is something which, quite literally, the Monero Research Lab spend about 3 or 4 weeks discussing at length. Now the age-based association problem is quite simple. If, and I will use Bitcoin is an example, if Satoshi suddenly reappeared and touched some of the early blocks, some of the Bitcoins that were generated in the very early blocks, there would be this mass panic because people would be like "oh...why is he moving his Bitcoin, is a suddenly cashing out?" Now that sort of thing is a product of knowing exactly what happens within that very obvious and transparent @blockchain. Now in Monero there is kind of a similar thing that can happen and it's not quite, I mean the consequences are a little bit different.

Let's say you receive funds today...you received 100 Monero and that's an output that gets created. Now in 20 years' time you haven't touched that, and you suddenly decide to go and spend it. Now there is a temporal association problem because, over time, the 100 Monero has been chosen by, or should be chosen by, people to mix with. And in 20 years' time when you go along and actually spend it, because of the nature of how outputs are chosen to mix with it could be that your spend becomes obvious. Because, for the most part, maybe by virtue of the way outputs are chosen, the distribution of outputs, that statistically that output would not likely be selected for ring signature. And so now there can be an analysis that happens where somebody can say with reasonable certainty that of the signatures in this 100 Monero input in this transaction, they are fairly certain this 20 year old output is used to sign with it is the real one.

So this is something, this age-based association problem, is something that is really tricky to deal with, and is not something that were going to deal with on a protocol level. We are not going to prevent people or force people to mix in a certain way. Instead what we're going to be doing is we are going to be monitoring the way the way outputs are selected of a period of time, and monitoring the distribution. And we're going to sort-of get a feel for it, and get some data, and then we are going to be able to say "okay, based on that we are going to recommend this sort of distribution...Poisson distribution," or whatever it is, in order to reduce the risk of age-based or temporal associations.

So that's something that's not quite as critical as the minimum mixin thing; the minimum mixin thing is really like ground zero for fixing the CryptoNote protocol at its rawest level, and then everything else is bolting on top of that to reduce very low-risk, very edge case issues.

#### Gingeropolous

Gotcha.

#### Riccardo

So that's basically...the long and short of it is that minimum mixin is going to be implemented on a wallet level quite quickly, and the hard fork will be planned and will happen later.

Okay, so we spoke about the new website, we've spoken about [MRL 4](https://lab.getmonero.org/pubs/MRL-0004.pdf), and now we're going to kinda jump back just to something on the website. Now if you are on getmonero.org and you go to the Knowledge Base menu you will see the section called [Design and Development Goals](https://getmonero.org/design-goals). Now design and developing goals is something will be updating from time to time, but of particular interest to people, and of particular interest to us as well because we created it, are really the things that were going to be doing in the future.

Now we are not what to discuss it in this Missive, because otherwise it really would end up being a 4, 5, 6 hour missive, and frankly...who's got the time for that, ain't nobody got time for that! But there's some key things that were going to be doing, and I think what is quite nice, especially on the development side, is it does show the flow to important things like what needs to be done before we get to the GUI, what needs to be done before we get to IPC. That's not to say this is the absolute order of things, it's just to show some of the fundamentals that need to be put in place.

Same with the research goals, there are some fundamentals and need to be put into place, there are some things we are working on, but there's some next-level, next-generation stuff that we think will blow people out of the water and we think will really put Monero in a position where it is eminently useful and usable.

#### Gingeropolous

You mean there's more things that have to happen before the GUI comes out?

#### Riccardo

Yip...there's a lot of stuff that's "almost there", but there are some essential components and...there's a lot of stuff, I'll give you just one example: refactoring everything out into library form so that we have common libraries for Monero @accounts and @wallets, we have a library for the daemon...the connection to the network, we have a library for @consensus, so verifying and checking validity of @transactions and @blocks and @signatures and @ring-signatures, and we also have a library for RPC interfaces.

Having that, and having those library functions and library APIs documented and available, might seem like stuff that we don't need to do to get the GUI out, but it is important because it means that from a QT side we will be able to plug into that library quite easily. And the other up-shot is once we have that done it will open the way to really good third-party implementations, so being able to use those libraries on an iOS or Android wallet means that there's just really cool stuff that can be done without needing to reimplement stuff, you know.

#### Gingeropolous

Well I don't know...when you say refactoring things into libraries I'm sort of...I'm putting together like right now...the Monero code exists as this big old chunk of stuff and re-factoring into libraries means you've got to break it up so you can call things and say "hey...let's do this stuff together!" I don't know.

#### Riccardo

Kind of...I mean, I think that over the next while we will take some time in future Missives, especially when it's been a quieter week, when we can do some of the stuff and talk about why it's necessary, what it does, and why we did it at all. It's not a matter of us being perfectionists, as has being mentioned, or us wanting Monero to be enterprise grade. It's true, we are working very slowly on making Monero incredibly robust and incredibly extensible, but a lot of the stuff it's kind of like...if we don't do it now it's never going to be done or it will be done...maybe...in like 10 years.

So...that's our first Missive podcast: [new website](https://getmonero.org); [MRL 4](https://lab.getmonero.org/pubs/MRL-0004.pdf); [design and development goals](https://getmonero.org/design-goals).

#### Gingeropolous

For those tuning in I think that, at the end of that, the sense was that fluffypony and I will have a lot more to talk about, so stay tuned...tune your dial back to wherever this is going to end up...because I have a lot to learn about all these inter-workings, and if you are interested in hearing me question fluffypony incessantly about random things then you can tune in and hear about it.

#### Riccardo

Thanks very much for the chat...and back to Fred with the weather!
