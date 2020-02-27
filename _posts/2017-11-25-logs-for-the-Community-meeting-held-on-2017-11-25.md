---
layout: post
title: Logs for the Community Meeting Held on 2017-11-25
summary: Community highlights, Forum Funding System updates, RFC-HWALLET-1, Monero integrations, Malware Response Workgroup, Monero Coffee Chat, and miscellaneous
tags: [dev diaries]
author: dEBRUYNE / fluffypony
---

# Logs  

**\<sgp>** We would like to welcome everyone to this Monero Community Meeting!  
**\<sgp>** Link to agenda on GitHub: https://github.com/monero-project/meta/issues/137  
**\<sgp>** Monero Community meetings are a discussion place for anything going on in the Monero Community. We use meetings to encourage the community to share ideas and provide support.  
**\<sgp>** 1. Greetings  
**\<rehrar>** What up kids?  
**\<cryptochangement>** hey all!  
**\<ErCiccione>** Hi!  
**\<sgp>** Don't be shy :)  
**\<msvb-lab>** Hello.  
**\<sgp>** 2. Community highlights  
**\<sgp>** For a great weekly summary, please read the Monero Observer: http://monero-observer.com/  
**\<sgp>** 3. FFS updates  
**\<sgp>** To those who haven't heard of the FFS before, it stands for the "Forum Funding System"  
**\<sgp>** a. RFC-HWALLET-1 project progress  
**\<sgp>** msvb-lab: do you have any updates you want to talk about?  
**\<serhack>** hii :)  
**\<msvb-lab>** Sorry, delay...  
**\<msvb-lab>** We had a great Munich Monero meeting, where we mostly talked about forming a local group, regular meetings, the (nearby) Vienna event(s) of December, and the hardware team's efforts (with a few boards passed around.)  
**\<msvb-lab>** As far as hardware goes, there's nothing organised to say. Lots of ordering of parts and waiting for them to arrive, some porting of designs to the EDA CAD application we're using.  
**\<msvb-lab>** Laser cutter considerations, and so on.  
**\<msvb-lab>** Any questions about hardware wallets?  
**\<msvb-lab>** We have three designs being worked on in parallel, I could talk an hour but will spare the bore.  
**\<ErCiccione>** the local group with regular meetings sounds great  
**\<msvb-lab>** It's important for whoever would like to test a real device in their hands to sign up as a team member by clicking 'Contact the project' on the site:  
**\<msvb-lab>** https://taiga.getmonero.org/project/michael-rfc-hwallet-1-implementation/  
**\<msvb-lab>** ErCiccione: We had about twenty people there, and passed around artwork from Deborah.  
**\<msvb-lab>** So we've definitely reached critical mass in Munich, Berlin was there long ago.  
**\<serhack>** great, this is Monero community  
**\<sgp>** msvb-lab: learning about these three designs would be a good read. If you want to work with me on writing something about these, I think the community would appreciate it  
**\<cryptochangement>** yes we would :)  
**\<serhack>** sgp: ;)  
**\<msvb-lab>** A good place to put the informatino about the various device types is:  
**\<msvb-lab>** https://taiga.getmonero.org/project/michael-rfc-hwallet-1-implementation/wiki/protos  
**\<msvb-lab>** So one is called 'MCUDev' (now renamed to 'Monezor'), another is 'Breakneck', we need a name for the device that resembles Ledger Blue's design.  
**\<msvb-lab>** ...and so on.  
**\<serhack>** nice  
**\<sgp>** Ok, good to know  
**\<sgp>** Anything else on the hardware wallet front?  
**\<msvb-lab>** Not from me.  
**\<sgp>** b. Monero Integrations  
**\<sgp>** cryptochangement, want to take it from here?  
**\<cryptochangement>** serhack, you wanna go first?  
**\<serhack>** yes, thanks  
**\<cryptochangement>** ok cool  
**\<serhack>** okay guys, the latest update before today was 1 month ago so more surprise are coming  
**\<serhack>** first of all we have redesigned the payment box  
**\<cryptochangement>** serhack: im actually pretty sure i talked about that last meeting ;)  
**\<serhack>** second, a helpful security engineer have helped them in order to fix a potentially sql injection on payment id  
**\<serhack>** (I mean on reddit, it seems only few people read community meeting cryptochangements)  
**\<cryptochangement>** thats fair :p  
**\<serhack>** https://imgur.com/a/MUV72  
**\<serhack>** this is the new payment box  
**\<serhack>** third, I have already contacted OpenBazaar team for implementing Monero  
**\<serhack>** We should wait for multisig  
**\<serhack>** that's all from me, go cryptochangements :)  
**\<cryptochangement>** Okay so good news here  
**\<cryptochangement>** Our second milestone, the Magento plugin is finished and ready to be used by merchants!  
**\<cryptochangement>** Its all on GitHub here: https://github.com/monero-integrations/moneromagento  
**\<sgp>** hooray!  
**\<cryptochangement>** and here is a screenshot of the checkout: https://taiga.getmonero.org/media/attachments/6/0/a/5/72f4eb66138e7efd76c4abd6e7d52df16806cdc441788e61c3c8e20ec676/improvedmagento.png  
**\<serhack>** yeah, cool announcement cryptochangements!!  
**\<cryptochangement>** i should also mention that you can track a lot of our progress on taiga: https://taiga.getmonero.org/project/serhack-monero-integrations/  
**\<rehrar>** Yay Taiga!!  
**\<cryptochangement>** rehrar ive actually became rather fond of it :p  
**\<cryptochangement>** thats pretty much all, unless there are any questions  
**\<msvb-lab>** Which of these technologies resembles Bitpay most?  
**\<msvb-lab>** There are ten repositories besides magento.  
**\<serhack>** I think we should mark a thing  
**\<msvb-lab>** So if I'm a vendor who wants to be able to 'Bitpay' with XMR, which github should I look at?  
**\<serhack>** no offense to you msvb lab  
**\<cryptochangement>** msvb-lab: they all have the same design/setup they are just for different cms  
**\<serhack>** The goal of Monero integrations is removing the middleman  
**\<msvb-lab>** Oh, that makes sense.  
**\<cryptochangement>** globee is actually close to bitpay... because they actually use bitpay  
**\<msvb-lab>** I thought there was a more complex architecture. So for three different vendors with three different CMSs, they will be served by referring to the correct implementation.  
**\<msvb-lab>** That's quite good.  
**\<serhack>** yeah, msvb-lab, different e-shops but they are using the same methods in order to accept monero  
**\<sgp>** Exactly msvb-lab  
**\<sgp>** They all provide the same functionality for different systems  
**\<msvb-lab>** Is it still forbidden to talk about Globee (are there still secrets?)  
**\<cryptochangement>** the main difference between us and globee is that we dont deal with fiat. all funds go directly to your wallet with no 3rd party  
**\<msvb-lab>** Seems it would be relevant to this chapter of our meeting?  
**\<serhack>** I don't know anything about the Globee secret project  
**\<cryptochangement>** idk fluffy isnt here so you probably dont want to go spilling all of his secrets :p  
**\<rehrar>** Globee can be talked about freely. The secret project being done by Globee is best kept under wraps for now.  
**\<msvb-lab>** Okay, fine if the Globee deal or technology is still (partly) secret.  
**\<msvb-lab>** rehrar: They probably need some time still to get the design done.  
**\<sgp>** Any other updates cryptochangement/serhack? Can you remind me what integration is next?  
**\<endogenic>** well, it's just not out yet, so please don't spread confidential info  
**\<serhack>** the next is opencart  
**\<cryptochangement>** next is opencart, which is in the works  
**\<cryptochangement>** and now i think we can pass the baton  
**\<sgp>** Cool  
**\<serhack>** yes  
**\<sgp>** Thanks cryptochangement and serhack  
**\<serhack>** your welcome  
**\<sgp>** Does anyone else have a FFS update?  
**\<ErCiccione>** i wanted to say a couple of yhings  
**\<sgp>** Go ahead ErCiccione  
**\<endogenic>** also have a quick update  
**\<endogenic>** after you ErCiccione  
**\<ErCiccione>** i'll be quick endogenic  
**\<endogenic>** no need, we have 30 mins :P  
**\<ErCiccione>** I just wanted to say my FFS is in the process of being moved from Ideas to funding required, thanks to all the community for the support!  
**\<sgp>** It's a very worthy proposal imo  
**\<sgp>** From the other community feedback, it seems that other people think so too  
**\<msvb-lab>** What is the URL?  
**\<serhack>** serhack is going to donate  
**\<msvb-lab>** I can't find it.  
**\<ErCiccione>** 1 sec  
**\<ErCiccione>** https://forum.getmonero.org/6/ideas/89232/coordinator-for-localization-group-various-maintenance  
**\<ErCiccione>** it's still under ideas,but the pony said he is going to move it tonight/tomorrow  
**\<rehrar>** I have something to say about FFS in general that the people here really need to be involved with. I'll speak after ErCiccione and endogenic  
**\<ErCiccione>** thanks serhack :) and thanks sgp  
**\<endogenic>** +1 rehrar  
**\<sgp>** @ErCiccione is that all?  
**\<sgp>** Go ahead endogenic  
**\<ErCiccione>** no 1 sec  
**\<ErCiccione>** also I reorganized the Taiga of the localization project, now is easier to add a translation (there also a quick guide "how to translate the GUI")  
**\<ErCiccione>** https://taiga.getmonero.org/project/erciccione-monero-localization/  
**\<ErCiccione>** Will integrate it soon with github  
**\<ErCiccione>** that's all from me  
**\<sgp>** Great thanks  
**\<ErCiccione>** endogenic, your turn  
**\<endogenic>** so i've been speaking with sgp and some members of the monero research lab about educational hackathons, and we think a corporate sponsored kovri hackathon could be brilliant (basically, you must build something using kovri plus one or more of the libraries from the sponsors)  
**\<endogenic>** so I'd like to encourage everyone in the Monero community who is interested in getting involved with kovri or hackathons to get in touch with sgp and/or the noethers and chat with them about how you'd like to be involved  
**\<endogenic>** doesn' have to be corp sponsored but it's probably a good idea  
**\<endogenic>** they buy the food too :P  
**\<endogenic>** and they supply venue, often  
**\<endogenic>** unless it's done at a library or a school like NYU  
**\<endogenic>** who has hosted such things before  
**\<endogenic>** that is all  
**\<sgp>** Ok endogenic. We can discuss this more during the open ideas time  
**\<endogenic>** oops  
**\<sgp>** Rehrar?  
**\<sgp>** No worries :)  
**\<rehrar>** Yay. My turn.  
**\<serhack>** go rehrar, make this community cool  
**\<rehrar>** Ok, as the Community workgroup, our job is several things (as you all may know). We want to make the community a good, educational, friendly place to be. And many of us head our own smaller workgroups and stuff.  
**\<rehrar>** I think we need to add something onto the goals, specifically regarding the FFS  
**\<rehrar>** The community workgroup needs to brainstorm ways that we can increase FFS giving involvement, and rely less on individuals that donate large sums.  
**\<rehrar>** There was a large push on Surae's FFS, and it was awesome to see. It's slowed down a bit, which is totally fine, and I'm sure one final Reddit post would finish it up.  
**\<rehrar>** We need to aim for getting community involvement with the FFS. Something like 0.1 XMR per person.  
**\<rehrar>** We can find ways to incentivize if we'd like, but that's not the only way.  
**\<rehrar>** We can discuss this in open ideas time, but building a culture of generosity and giving within the community should be a large priority, since the project relies on donations.  
**\<rehrar>** end  
**\<sgp>** Thanks rehrar  
**\<endogenic>** what is the cause that sarang's proposal was quickly funded while surae's was not?  
**\<rehrar>** a large donation  
**\<cryptochangement>** 0.1 XMR per person would be a dream  
**\<sgp>** I can make discussion groups for the hackathon and FFS projects in Mattermost  
**\<endogenic>** rehrar: not quite my question  
**\<endogenic>** why sarang and not surae?  
**\<rehrar>** ah, ok then  
**\<endogenic>** was there a difference in the quality of the proposals?  
**\<sgp>** @endogenic it may have been as simple as sarang's being listed first in a Reddit post or something  
**\<cryptochangement>** sgp thats what i was thinking  
**\<serhack>** I have a little idea rehrar  
**\<rehrar>** we can discuss it serhack. :)  
**\<rehrar>** Meeting continue?  
**\<endogenic>** rehrar: is your point up for further debate?  
**\<sgp>** Yeah, I would like to make sure we finish the next point  
**\<endogenic>** ok  
**\<rehrar>** I'm thinking Open Ideas time of this meeting we can discuss further  
**\<rehrar>** but of course we can debate it  
**\<sgp>** I would like to discuss rehrar's ideas later in the meeting  
**\<sgp>** 4. Discuss formation of Malware Response Group  
**\<sgp>** Fluffypony and tuckerpreston asked me to reserve some time to discuss the response to malware and botnets.  
**\<sgp>** Is anyone here to speak about this now?  
**\<mattcode>** yeah  
**\<sgp>** @mattcode great! Go ahead  
**\<mattcode>** lots of angry administrators come into #monero-pools complaining that their servers have been compromised by a miner  
**\<mattcode>** and they get even more upset when they're told that a monero address can't easily be traced back to an individual  
**\<serhack>** oh, I didn't know anything about that, mattcode  
**\<mattcode>** i don't really think that there's a solution to that  
**\<mattcode>** and the other issue is websites getting hacked and web miners being silently inserted, which again there's nothing we can do about that  
**\<serhack>** yes, it's like "someone stealed my monero. my email address pass is 1234"  
**\<mattcode>** if monero didn't exist, the hacked servers and websites would just be used for spam/ddos/stealing passwords instead  
**\<serhack>** +1 mattcode  
**\<msvb-lab>** mattcode: And your or Fluffy's idea about a task force should serve as a support center, right?  
**\<mattcode>** maybe there could be a page on the website explaining the harsh truth to administrators that have been hacked  
**\<DaveyJones>** also isnt it a SysAdmins job to keep his security top of the state? :D  
**\<sgp>** I think there's definitely room for a more formal response to web/server admins  
**\<mattcode>** but a task force isn't too useful because they're just going to end up saying "sorry, there's nothing we can do to help. re-image your server and fix your vulnerabilities"  
**\<sgp>** Ultimately it's up to them to fix/secure their stuff as we should say, but there could still be a page about it  
**\<sgp>** Like "here's what you can do with the mining pool and address. Try contacting them. Otherwise, check your logs"  
**\<rehrar>** I wonder if there's any way we can turn this into a net positive  
**\<msvb-lab>** mattcode: So you believe having a group of support crew is not effective, but maybe a specially labeled web page right?  
**\<serhack>** yep  
**\<mattcode>** yeah I think that would be better. right now they end up in #monero-pools and just end up getting ignored or abused  
**\<DaveyJones>** i think thats a solution  
**\<serhack>** why should we spend efforts on websites when the default password is admin ?  
**\<sgp>** It's good to at least have something serhack. Some of these attacks are more complex, or from an internal employee  
**\<ErCiccione>** Honestly i don't like the idea of the page on the website, i prefer the idea of the team  
**\<mattcode>** rehrar: the positive is that monero has a high network hashrate that doesn't dip when the price dips. i don't have any numbers but when ETN became (briefly) more profitable to mine than XMR, the XMR net hash barely dropped  
**\<serhack>** yep, we should setup a tutorial/website  
**\<rehrar>** I mean turning the third-party server getting hacked into a positive for the administrator. I mean obviously it's not a positive thing...  
**\<rehrar>** but through education and stuff  
**\<rehrar>** We can have ready-made resources (written, video, or otherwise) to hand off to people who experience this  
**\<rehrar>** because this may apply to individual users too, not just servers  
**\<rehrar>** that way, we are not taking responsibility for these people's security, but we are giving tools and resources that people can take hold of their own security  
**\<sgp>** I can write something up as an example and see if it's a good draft. I'll link it in this channel  
**\<serhack>** okay, good sgp  
**\<sgp>** Mattcode, do you want to help me with this?  
**\<mattcode>** most desktop antiviruses pick up the miners and delete them, so i don't think it's too much of an issue for desktop individuals  
**\<ErCiccione>** yeah, much better this way  
**\<sgp>** rehrar that's what I'm thinking  
**\<rehrar>** The task force team can be working on this instead of on-demand support  
**\<rehrar>** This is very in the spirit of The Monero Project, which is all about providing tools and resources for people to take back what's theirs  
**\<sgp>** I just think on-demand support is overkill. It would literally tell people the info on the page we would make  
**\<mattcode>** I don't think we should be writing things like cleanup guides, because all of the different pieces of malware and server configurations make that impossible.  
**\<sgp>** Oh, you want to provide that level of support?  
**\<mattcode>** also organisations usually have their own procedures for when things get compromised  
**\<pigeons>** the support they are looking for is please pool, don't payout to this address etc  
**\<rehrar>** lel  
**\<pigeons>** yes  
**\<rehrar>** they can redirect payment to me instead  
**\<mattcode>** I think the best thing would just be explaining that it's not the Monero project, the pool operator or the miner developer that has hacked your server.  
**\<sgp>** mattcode, are you happy with me making a Mattermost workgroup chat so that we can discuss this further after the meeting?  
**\<pigeons>** yes help them waste less time  
**\<mattcode>** sgp: sure  
**\<sgp>** Great  
**\<serhack>** +1 sgp  
**\<sgp>** Anything else you want to discuss during the meeting?  
**\<sgp>** We are going over today, sorry  
**\<sgp>** 5. Monero Coffee Chat  
**\<sgp>** The next Monero Coffee Chat will be next Saturday on 2 December https://github.com/monero-project/meta/issues/139  
**\<sgp>** During the Coffee Chat, we will go through Taiga so that people become more aware and more familiar with it.  
**\<sgp>** It would be nice if the website is refreshed before then so that the Mattermost/Taiga announcement gets published.  
**\<sgp>** Beyond this, the format of the Monero Coffee Chat will be about the same. If anyone would like to participate, please send me a PM. Otherwise, you can always join us on YouTube.  
**\<rehrar>** Twas lonely last time with just me and sgp and fp (for a bit)  
**\<sgp>** Skipping open ideas time for now, but of course #monero-community can always function as open ideas time even outside meeting time  
**\<sgp>** Yes, it was a bit lonely :)  
**\<serhack>** okay, sgp  
**\<sgp>** We need more volunteers  
**\<sgp>** 7. Confirm next meeting date/time  
**\<sgp>** The next meeting will two weeks from today on 9 December at 17:00 UTC.  
**\<sgp>** 8. Conclusion  
**\<sgp>** That’s all! Thanks for attending this Monero Community meeting, and we hope to see you on /r/MoneroCommunity and #monero-community. Take care, and know that change starts with YOU.  
**\<sgp>** Now, we can continue conversations from endogenic, mattcode, and rehrar  
**\<rehrar>** endogenic watchoo wanna debate?  
**\<endogenic>** well so just about the kovri thing real quick  
**\<endogenic>** i remember on the coffee open hours thing there was discussion about kovri needing a good testing ground  
**\<endogenic>** less life or death than monero would be good. plus more exposure for kovri would be good  
**\<endogenic>** as for the FFS thing…  
**\<mattcode>** just to add onto the botnet thing, i don't think pool ops ever ban addresses after somebody has claimed that their server has been hacked. it would be too easy to fabricate. they only seem to ban big botnets, but only because they place a heavy load on the server :p  
**\<endogenic>** people naturally won't donate to something they consciously think is bad…  
**\<serhack>** +1  
**\<endogenic>** and they tend to donate to things they feel are good for them  
**\<endogenic>** even charity donation for example is thought to return to oneself  
**\<sgp>** mattcode can you create an account on Mattermost please? https://mattermost.getmonero.org  
**\<endogenic>** in monero, it's just supposed to be a little more concrete  
**\<cryptochangement>** now that we are in open tiem, i should probably mention that i posted our FFS update to reddit too so people can see it there: https://www.reddit.com/r/Monero/comments/7fgl4o/monero_integrations_update_12/  
**\<sgp>** #monero-vulne-response  
**\<endogenic>** one thing at at time guys  
**\<cryptochangement>** sgp: vulne or vuln?  
**\<serhack>** vulne  
**\<serhack>** on mattermost  
**\<rehrar>** XD  
**\<sgp>** vulne. It's only on MM now, not IRC  
**\<endogenic>** so if people are not made to undrestand what a proposal is important  
**\<endogenic>** how can you expect them to donate to it?  
**\<sgp>** Sorry  
**\<cryptochangement>** ah ok. i just thought vulne sounded funny ^\_^  
**\<endogenic>** you guys seem to be talking about something else anyway… :P rehrar feel free to ping me  
**\<cryptochangement>** sorry endogenic  
**\<sgp>** You can discuss this now. I'll wait  
**\<sgp>** @endogenic I also made #monero-hackathons on Mattermost  
**\<sgp>** @rehrar on second thought, I think we should have the discussion about the FFS crowdfunding initiative here. Do we need another channel for this?  
**\<ErCiccione>** sgp i think it would be better to talk about it here, much many possible inputs  
**\<sgp>** It's important for the community to survive with small donations, rather than a few wealthy individuals  
**\<sgp>** Of course, having a few people who can help out is both convenient and very generous  
**\<sgp>** But if for some reason these people lost interest, the community should be able to raise significant money from many small donors  
**\<ErCiccione>** i read somwhere the idea of a mining pool managed by the community, where a percent go to the FFS project. doesn't sound too crazy if there's somebody willing to manage everything  
**\<msvb-lab>** ErCiccione: Don't forget promoting the Monero donation address, which could make the third leg of the tuple (many|wealthy|donation.)  
**\<msvb-lab>** Like Kovri does at the bottom of their website.  
**\<msvb-lab>** That could be instrumental for folks that generally appreciate Monero and would donate but don't hang out enough to stay informed.  
**\<serhack>** a "donate now" popup box before downloading?  
**\<sgp>** Most mining pools who donate  do so to the Monero project itself  
**\<sgp>** Which in turn often donates to FFS projects  
**\<ErCiccione>** sgp sure, but with a pool you can give the choice to reserve part of your hashrate and decide to put it directly tu support ffs (maybe with subaddresses might be possible to choose the single ffs)  
**\<sgp>** Perhaps  
**\<ErCiccione>** msv-lab: true, but that is mostly everywhere (wallet, website, reddit ecc)  
**\<sgp>** We could change how/when Monero asks for donations  
**\<ErCiccione>** what happens if somebody makes a donation directly to the address of the FFS wallet with no payment id? because if it's possible to evenly distribute that amount to all the actives ffs, we could just spread that address if people doesn't care of the proposal itself, but would like to contribute  
**\<ErCiccione>** an ipothetical 'community pool' could point to that address, distributing equally the mined moneros  
**\<mattcode>** doesn't money from the general development fund make its way into FFS requests?  
**\<ErCiccione>** mattcode: yes, sgp pointed that early, but with a pool you move that choice directly to whom is willing to donate (i mean to send the money directly to fund community's proposals)  
**\<ErCiccione>** s/proposals/FFS  
**\<monerobux>** ErCiccione meant to say: mattcode: yes, sgp pointed that early, but with a pool you move that choice directly to whom is willing to donate (i mean to send the money directly to fund community's FFS)  
**\<ErCiccione>** so nice of you monerobux  
**\<ErCiccione>** :)  
**\<rehrar>** Sorry, out of the house atm. But we need to remember two factors. One, some people like to choose which proposals their XMR goes to. This ensures that Monero evolves in the way they desire.  
**\<rehrar>** These people will not like the General Fund option, as the General Fund is managed by the Core Team to spend on whatever they see fit that benefits Monero (obviously coming to consensus within themselves)  
**\<rehrar>** There are some people who prefer to choose things themselves, and not trust anyone, even the Core Team. And that's fine.  
**\<rehrar>** We're not trying to get everyone to donate to EVERY proposal.  
**\<rehrar>** We're trying to get people to donate to what they believe in.  
**\<rehrar>** So if someone agrees with funding Surae and not myself, they need to have the freedom to not give to me without shame  
**\<rehrar>** but the cultural ideal should be, if you believe in a proposal, you should seriously consider donating something small to it  
**\<ErCiccione>** rehrar: yes, totally agree, that can be solved using subadresses instead of payment's id. could be even better, you would be able to choose the project to contribute to directly from the pool  
**\<ErCiccione>** this is for me a good way to give also to people who cannot afford it, a way to donate, but require the use of subadresses, are they stable right now?  