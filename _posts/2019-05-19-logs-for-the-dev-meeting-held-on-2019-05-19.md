---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2019-05-19
summary: Development status, Code & ticket discussion, and miscellaneous
tags: [dev diaries, core, crypto]
author: el00ruobuob / rehrar
---

# Logs  

**\<xmrmatterbridge> \<rehrar>** Meeting!!  
**\<ferretinjapan>** rehrar, o/  
**\<moneromooo>** rehrar: btw, did you get any new info from purism ?  
**\<jwinterm>** \\o  
**\<xmrmatterbridge> \<rehrar>** Yes. Will update. Did update in -community  
**\<hyc>** time  
**\<xmrmatterbridge> \<rehrar>** Hello guys. Let's start the meeting.  
**\<xmrmatterbridge> \<rehrar>** 1. Greetings  
**\<ErCiccione>** Hi  
**\<rbrunner>** Hi  
**\<vtnerd>** hi  
**\<hyc>** hi  
**\<jwinterm>** so long rbrunner  
**\<rbrunner>** Connection problems ... back again  
**\<rehrar>** Alright  
**\<rehrar>** 2. What's been done since previous meeting?  
**\<rehrar>** right, well, let's jump to that then. It's what we're all anxious to hear about anyways.  
**\<hyc>** OK, so we have 4 SoWs from audit teams, we had an unexpected bonus from Arweave.org agreeing to pay for the TrailofBits audit  
**\<hyc>** the vote on auditor selection is closed and tallied, Kudelski is the clear first choice  
**\<hyc>** Quarkslab and X41 nearly tied for 2nd choice but QL slightly ahead  
**\<hyc>** and majority voted for 3 choices, so it seems we are going to submit all 3 in CCS  
**\<hyc>** randomX integration in monerod is mostly there, we have some bug with reorg handling at the moment  
**\<rehrar>** What's the cost of all three, hyc?  
**\<hyc>** but otherwise the patch has all the functionality we seem to need, including support for mining RPCs so pools and solo miners can work  
**\<tevador>** ~$120K  
**\<hyc>** rehrar, let me get back to you in a few minutes. move on to next topic till I tally  
**\<hyc>** ^^ there you go  
**\<rehrar>** ok  
**\<rehrar>** Standard CCS concerns, since Defcon will be putting up a couple of CCS stuff too here not so far from now  
**\<rehrar>** I'll contact Outreach workgroup to try to do something to get everyone on board and donating, but sure.  
**\<rehrar>** Anything else on that hyc?  
**\<hyc>** I would structure it in priority order, and if we don't get full funds, we just omit the last choice  
**\<hyc>** I think that covers it for me, yeah  
**\<rehrar>** awesome, thanks for all of your guys' work on this. It's exciting stuff.  
**\<rehrar>** Anyone else have anything that's been done past couple of weeks?  
**\<moneromooo>** monerod can now sync on big endian ^\_^  
**\<hyc>** woohoo!  
**\<rbrunner>** Wow. Is that still a thing?  
**\<hyc>** IBM POWER, Fujitsu / oracle SPARC  
**\<hyc>** big datacenter boxes, sure  
**\<rbrunner>** Nice to have anyway!  
**\<rehrar>** the improvements that really matter  
**\<rehrar>** :P anyways, I can also give an update regarding Purism if desired.  
**\<rehrar>** I had a meeting with Todd, the CEO a few days ago.  
**\<rbrunner>** Please do  
**\<rehrar>** They're still just as excited about Monero. They aren't really interested in other cryptocurrencies, because only Monero has the ideology of privacy by default, similar to them. They're still very excited about integrating Moenro into Librem Pay  
**\<rehrar>** so one can theoretically pay using Monero anywhere at any merchant, and merchant settles in fiat.  
**\<rehrar>** still want to ship Monero by default on all of their systems, mobile and desktop.  
**\<rehrar>** They don't have any available dev kits for the Librem5 phone for the devs to mess around with, but they are going to get me emulators for their PureOS stuffs.  
**\<rehrar>** And we can start playing with the GUI and stuff on there and make it adaptive, if possible, and the like  
**\<rehrar>** They're willing to do a matching thing on a CCS proposal that we do  
**\<rehrar>** As in, if we raise x amount of money, they'll put in x as well (up to some upper limit for them) for a dev to work on this stuff.  
**\<jtgrassie>** By "ship Monero by default", do they mean ship with full-node + wallet?  
**\<rehrar>** dsc\_ has expressed a willingness, but I'm not going to put words in his mouth, so you can talk to him for more info  
**\<rehrar>** jtgrassie: that's for us to figure otu  
**\<rehrar>** \*out  
**\<rehrar>** the Librem5 phone is indeed a phone, but you will be able to connect it to a monitor and use it as a desktop also, as the OS itself will be adaptive.  
**\<rbrunner>** Nice that things seem to get moving, they seem excited already for quite some time ...  
**\<rehrar>** So we can choose how we want the GUI to be put on there.  
**\<vtnerd>** yeah the light-wallet-server setup is probably more appropriate, but people have synced the chain to their phone  
**\<rehrar>** Obviously, since there is the idea that you can do whatever you want on their phone with no abritrary restrictions, the idea that someone can theoretically run a full node on their phone should not be overlooked  
**\<hyc>** are they using a micro-HDMI port, or just something like chromecast to use external monitor? just curious, not important  
**\<jtgrassie>** Having purism simply accept Monero as a payment method first would be nice  
**\<vtnerd>** the issue might be storage on that sucker, I dont see sd card listed ... ?  
**\<moneromooo>** They do.  
**\<moneromooo>** Or did, at least.  
**\<rehrar>** jtgrassie: they do accept Monero  
**\<jwinterm>** hyc: it looks like it will go usb-c to hdmi or display port (tbd)  
**\<jtgrassie>** moneromooo: not an option at checkout  
**\<jtgrassie>** rehrar: ^  
**\<hyc>** jwinterm thanks  
**\<rehrar>** there is "Cryptocurrencies" option  
**\<jtgrassie>** Oh, my bad, Globee  
**\<rehrar>** and it's done via Globee  
**\<rehrar>** anyways, that's it from me. I'll ping them in this upcoming week about the emulators  
**\<rehrar>** and discussion may pop up from time to time in -gui  
**\<rehrar>** and maybe here  
**\<rehrar>** we'll be in contact with you mooo, if things need to happen on the core side  
**\<rehrar>** but PureOS is Debian-based, so I don't think anything crazy will need to happen  
**\<hyc>** rehrar tell them they need a -Pro model with landscape aspect slideout qwerty keyboard  
**\<rehrar>** I'll see what I can do to pass that along. :P  
**\<jtgrassie>** I guess shipping the wallet by default would be nice. Easy to do.  
**\<rbrunner>** Hmmm, yes, like Psion 5mx  
**\<rehrar>** Yes, that's the plan. It's one of the default softwares on their phone  
**\<endogenic>** hi all  
**\<rehrar>** \*it'd be  
**\<rehrar>** anyone else have something to report or talk about?  
**\<ErCiccione>** I have a quick update. The Monero Ecosystem has a new member: go-monero-rpc-client. The repo is not transferred yet, but it has been approved: https://github.com/monero-ecosystem/meta/issues/35. We didn't have anything in golang before, so i think it's cool to have it.  
**\<rehrar>** That's pretty neat.  
**\<hyc>** I wonder if the RandomX repo should be in Ecosystem  
**\<rehrar>** I would think it'd be better suited for Monero Project?  
**\<ErCiccione>** hyc: it would be more than welcome  
**\<hyc>** I guess it's up to tevador to decide where he wants it to live  
**\<rehrar>** Ecosystem is typically Monero-only things, and while RandomX is be built by Monero for Monero  
**\<rehrar>** it should be agnostic in theory, no?  
**\<rehrar>** as in, other coins can adopt it?  
**\<hyc>** and we already have a 3rd party Arweave planning to use it  
**\<rehrar>** Similar to OpenAlias in that respect.  
**\<rehrar>** So my suggestion to tevador would be in the Monero Project set of repos  
**\<hyc>** ok  
**\<ErCiccione>** Well, was created by monero developers for Monero. I think hosting it on a Monero "place" is apropriate  
**\<rehrar>** on the "new" repo.getmonero.org  
**\<rehrar>** Alright, any code discussion to happen as a 3 or 4 or whatever?  
**\<rehrar>** If not, we can adjourn and go to markets to speculate on the rise of the market.  
**\<rehrar>** unless someone had other meeting items?  
**\<hyc>** anything more to say on next point release?  
**\<rehrar>** ooooh yes plz  
**\<hyc>** moneromooo ?  
**\<moneromooo>** Waiting on pony to build binaries AFAIK.  
**\<ErCiccione>** core is branched and GUI is waiting for core. Translations for GUI are being submitted, but we are having a lot less contributors than the last release  
**\<sarang>** When is freeze for the Carbon Crab update?  
**\<rehrar>** \*Crap  
**\<sarang>** MRL is feverishly working on CLSAG  
**\<endogenic>** an MRL workshop is occurring this week. any requests as to topics of discussion  
**\<moneromooo>** Lightning/Bolt building blocks ^\_^  
**\<sarang>** Fo sho  
**\<rehrar>** so....  
**\<rehrar>** we gucci?  
**\<sarang>** When is the freeze?  
**\<sarang>** For Carbon  
**\<moneromooo>** Whenever we're done :)  
**\<sarang>** Lol  
**\<rehrar>** I think it's quite dependent on the audits  
**\<rehrar>** no?  
**\<rehrar>** if we're planning on getting them in, that is  
**\<sarang>** For randomx?  
**\<hyc>** freeze for October hardfork you mean?  
**\<sarang>** Goal is to finish by July IIRC  
**\<sarang>** Ya  
**\<sarang>** If we choose to get CLSAG audited that adds time  
**\<rehrar>** Monero is technically made of money  
**\<rehrar>** so I don't see a huge problem  
**\<endogenic>** it's people  
**\<rehrar>** so, question answered then?  
**\<rehrar>** regardless of how unsatisfactory  
**\<sarang>** Not really, but ok  
**\<endogenic>** how about, when will we know when the freeze will be?  
**\<rbrunner>** In the two years I am here now I never saw a real freeze happen :)  
**\<rbrunner>** Only attempts ...  
**\<rbrunner>** Not that there was a real problem with this  
**\<ErCiccione>** so true.. i've been begging for one for a long time  
**\<hyc>** one could say the code is currently in a frozen state, since nothing can be merged until fluffy resurfaces  
**\<rbrunner>** lol  
**\<sarang>** What a time to be alive  
**\<ErCiccione>** hyc: luigi got the power now. HE is the leader of Monero afterall  
**\<ErCiccione>** at least according to wikipedia  
**\<hyc>** oho  
**\<rehrar>** alright, I think we're pretty much done then. :)  
**\<hyc>** sounds like it  
**\<hyc>** adios  
**\<rehrar>** Two weeks from now? The second?  
**\<rehrar>** cya guys  
