---
layout: post
title: Logs for the Community Meeting Held on 2019-10-12
summary: Community highlights, CCS updates, Workgroup report, and miscellaneous
tags: [dev diaries, crypto]
author: el00ruobuob / SamsungGalaxyPlayer
---

# Logs  


**\<sgp\_>** yes indeed  
**\<sgp\_>** 0. Introduction  
**\<sgp\_>** We would like to welcome everyone to this Monero Community Workgroup Meeting!  
**\<sgp\_>** Link to agenda on GitHub: https://github.com/monero-project/meta/issues/400  
**\<sgp\_>** Monero Community meetings are a discussion place for anything going on in the Monero Community, including other Monero workgroups. We use meetings to encourage the community to share ideas and provide support. Fun fact: we’ve been doing these since issue #79.  
**\<sgp\_>** 1. Greetings  
**\<OsrsNeedsF2P>** I like fun facts  
**\<el00ruobuob>** Hi!  
**\<rottensox>** o/ the rottenest sox present.  
**\<rehrar>** here'  
**\<needmonero90>** Hey all  
**\<sgp\_>** welcome everyone  
**\<sgp\_>** 2. Community highlights  
**\<sgp\_>** See Monero weekly highlights at https://revuo-monero.com/  
**\<sgp\_>** Reminder that 0.15 is expected on October 31, with the scheduled protocol upgrade on November 30: https://web.getmonero.org/2019/10/01/announcement-release-0-15.html  
**\<sgp\_>** There's a help thread in https://reddit.com/r/monero if you need assistance or have specific questions  
**\<sgp\_>** Monero Talk interviewed Brad Mines, Daniel Krawisz, and spesmonerujo in the past two weeks: https://youtube.com/c/monerotalk  
**\<monerobux>** [ Monero Talk - YouTube ] - youtube.com  
**\<sgp\_>** Are there any outstanding questions regarding the upcoming update, or does anyone have community (non-workgroup) updates to share?  
**\<OsrsNeedsF2P>** I'm planning on releasing a 1.0 version of MoneroTipsBot soon  
**\<needmonero90>** I'm curious which exchanges are still in limbo wrt subaddresses  
**\<OsrsNeedsF2P>** Oh u first ^  
**\<needmonero90>** as usual, I would like an updated listing of who needs contacting, so we can rally people to shoot off pings  
**\<needmonero90>** As the network upgrade approaches, this becomes more and more important :)  
**\<sgp\_>** indeed. needmonero90, want to take the initiative? :)  
**\<needmonero90>** I already am with binance actually  
**\<needmonero90>** I've been keeping in contact with them regarding the deadline  
**\<sgp\_>** Polo is good I know. What about Kraken? Shapeshift? MorphToken?  
**\<needmonero90>** debruyne any idea who is left?  
**\<rottensox>** TradeOgre. :-)  
**\<mooman12>** tradeogre don't use unencrypted payment id do they?  
**\<rottensox>** .shrug  
**\<monerobux>** ¯\\\_(ツ)\_/¯  
**\<ErCiccione[m]>** Hi  
**\<needmonero90>** hi  
**\<sgp\_>** not sure about Bitfinex either  
**\<sgp\_>** maybe a thread on r/xmrtrader is best for this honestly  
**\<needmonero90>** I heard the mods there are really strict  
**\<needmonero90>** (I'll make a post)  
**\<sgp\_>** like ~~we~~ others do a thread for mining pools on r/moneromining  
**\<OsrsNeedsF2P>** ^\_^  
**\<needmonero90>** Ok, on to osrs's question. I'll make an exchange post on xmrtrader today.  
**\<sgp\_>** yeah I think that's best  
**\<mooman12>** Snipa: does supportxmr still have anyone mining to an address with payment id?  
**\<sgp\_>** oh that's a good question  
**\<sgp\_>** could email them and tell them to stop if they are registered  
**\<rottensox>** sgp\_: https://imgur.com/cLtds0r.png  
**\<rottensox>** Bitfinex still does have payment ID. Took it from my account right now.  
**\<sgp\_>** yuck. add one to the list to pester  
**\<sgp\_>** thanks rottensox  
**\<mooman12>** are they even solvent? :v  
**\<rottensox>** Anytime.  
**\<Snipa>** Probally, I can pull the logs and check.  We need to make a deprecation message, but the mining clients don't usually allow for it.  
**\<sgp\_>** Snipa: let us know if there's some way to help out there. It's a clever way to reach people in a way that we typically don't  
**\<Snipa>** Traditionally, M5M and I will update the main pool page with notices/announcements of this nature.  
**\<rottensox>** sgp\_: Morph has it too - https://imgur.com/HzaBl7I.png  
**\<sgp\_>** anything else on this topic?  
**\<el00ruobuob>** Kraken seems to use integrated addresses  
**\<sgp\_>** rottensox: that's optional for refund, so I think it's not quite as important. It's more important when depositing Monero  
**\<rottensox>** okie.  
**\<sgp\_>** el00ruobuob: yeah, I believe they do  
**\<sgp\_>** I can send a quick message to Morph to make sure they know  
**\<sgp\_>** endogenic: is MyMonero pulling payment ID support in the wallet? (he can answer later if not here)  
**\<sgp\_>** Anything else on this topic?  
**\<sgp\_>** summary: check r/xmrtrader for a list soon^TM  
**\<Snipa>** If there's anything else we can do on the pool side, let me know.  
**\<sgp\_>** thanks Snipa, great to see you around here :)  
**\<Snipa>** RandomX is throwing some bigger wrenches into the original pool designs, so everyone's sort of working things out still, but notifications are something we can sort-of do.  
**\<sgp\_>** 3. CCS updates  
**\<sgp\_>** There are no new proposals in ideas or funding required. Any CCS comments before we move on?  
**\<sgp\_>** I'll take the silence as a no  
**\<sgp\_>** 4. Workgroup report  
**\<sgp\_>** a. Daemon/CLI workgroup  
**\<sgp\_>** luigi1111w merged a considerable number of changes the past few weeks to substantially improve Monero’s stability. vtnerd submitted new mempool code that handles i2p transaction broadcasts.  
**\<sgp\_>** b. Localization workgroup  
**\<sgp\_>** ErCiccione[m]: you have the floor  
**\<ErCiccione[m]>** yep  
**\<ErCiccione[m]>** Not much to report, Weblate is finally online and translators already started to work. Everything seem to work without issues and contributors seem to appreciate the new platform.  
**\<ErCiccione[m]>** see: translate.getmonero.org  
**\<ErCiccione[m]>** i encourage everybody who can to help translate release 0.15 of GUI and CLI  
**\<ErCiccione[m]>** Also,  
**\<ErCiccione[m]>** while preparing weblate for GUI and CLI i tested it for the website. We can use it. Not for the complete website but at least for the main part (the LANG.yml files)  
**\<ErCiccione[m]>** i will make some more testing on my private instance and see how it works out, but i'm optimist. It will make much more easier to maintain the existen translations, but won't have much inpact about adding a new one. Still a big improvement.  
**\<ErCiccione[m]>** i think that's it  
**\<el00ruobuob>** Great!  
**\<sgp\_>** thanks ErCiccione[m]  
**\<ErCiccione[m]>** for more info about how weblate works and the feature it has. there's the guide: https://github.com/monero-ecosystem/monero-translations/blob/master/weblate.md  
**\<sgp\_>** very helpful  
**\<ErCiccione[m]>** i would like to say a couple of things about the website, even if it's not technically a workgroup, if it's ok, sgp\_  
**\<sgp\_>** sure  
**\<sgp\_>** thanks for taking on that initiative btw, it's hugely important  
**\<ErCiccione[m]>** my pleasure! :P  
**\<ErCiccione[m]>** btw  
**\<ErCiccione[m]>** moneromooo proposed to change the header of the website adding "A Reasonably" before "Private Digital Currency  
**\<ErCiccione[m]>** "  
**\<ErCiccione[m]>** see: https://repo.getmonero.org/monero-project/monero-site/merge\_requests/1136  
**\<rehrar>** down  
**\<ErCiccione[m]>** the thing is that that particular header was discussed quite a lot before it was chosen, so i thought was best to discuss that here  
**\<sgp\_>** I'm also ok with "a reasonably private digital currency for all"  
**\<ErCiccione[m]>** i like it too  
**\<el00ruobuob>** i like it too  
**\<rehrar>** i like it too  
**\<ErCiccione[m]>** ooow \<3  
**\<OsrsNeedsF2P>** In the privacy world, phrases like that are super popular, for instance I2P really drills in a similar idea  
**\<OsrsNeedsF2P>** But it looks absolutely terrible to the uneducated user, and IMO, drives them to a less safe alternative  
**\<sarang>** Terms like "private" and "untraceable" claim a lot  
**\<rottensox>** ^  
**\<needmonero90>** Private^[1] Digital Currency  
**\<sarang>** and depend highly on risk and threat models  
**\<sgp\_>** "xyc coin says it's more private," but they will say that anyway  
**\<OsrsNeedsF2P>** But what about terms like "The most private [cryptocurrency]", @sarang  
**\<rehrar>** we really  need to remove untraceable  
**\<rottensox>** no?  
**\<rottensox>** lol.  
**\<needmonero90>** thats arguable even, osrs  
**\<needmonero90>** "but muh piratechain has mandatory zksnarks"  
**\<sgp\_>** that's why I like the focus on "for all" for marketing's sake  
**\<Mochi101>** Did you two make up and become lovers now?  
**\<sgp\_>** it's the only privacy-focused option someone can reasonably use right now  
**\<sgp\_>** from a UX perspective  
**\<rehrar>** and even that is questionable :D  
**\<sgp\_>** so overall, changing this phrasing is more accurate, and shills are going to shill other stuff regardless of what it says  
**\<Mochi101>** obfuscated ?  
**\<rehrar>** yeah, but how does the word "reasonably" look on the website?  
**\<rehrar>** I'll give it a look  
**\<rehrar>** in terms of spacing and stuff  
**\<Mochi101>** private and obfuscated transactions  
**\<rottensox>** https://twitter.com/xmranon/status/1179771671303065600  
**\<monerobux>** [ xmranon on Twitter: ""Bitcoin is so much easier to use than #Monero" is such a bullshit argument. ios.cake android.monerujo web.mymonero" ] - twitter.com  
**\<sgp\_>** imo, obfuscated means nothing to non-cryptrocurrency-focused people  
**\<rehrar>** in other news, I am almost done with a Monero pumpkin picture that sarang requested  
**\<sarang>** That's fantastic rehrar !  
**\<el00ruobuob>** rehrar, it looks bad with the video that large.  
**\<sgp\_>** what about the Monero pumpkin carving?  
**\<rehrar>** it will be available for purchase for recurring payment of 0.1 XMR for monthly licensing  
**\<sgp\_>** for the sake of time, we should move on from this specific topic. Thanks for mentioning it ErCiccione[m]  
**\<sgp\_>** Do you have anything else to talk about related to the website?  
**\<rehrar>** el00ruobuob: opinions need to be justified  
**\<sgp\_>** el00ruobuob: screenshot + comment on Gitlab please :)  
**\<rehrar>** oh wait  
**\<rehrar>** you mean the changed version, not the version as is  
**\<rehrar>** got it, I'll check  
**\<ErCiccione[m]>** sgp\_: yes, user guides and dev guides need to be updated. I would totally support a CCS with that goal  
**\<sgp\_>** oh for sure  
**\<ErCiccione[m]>** or anybody who wish to pick up some of the issues labelled help needed: https://repo.getmonero.org/monero-project/monero-site/issues?label\_name%5B%5D=%E2%9B%91%EF%B8%8F++help+needed  
**\<el00ruobuob>** done sgp\_   
**\<ErCiccione[m]>** that's basically it. Please comment on mooo's issue about that header, because if we want to change it completely, that should be an entire different discussion  
**\<sgp\_>** Thanks ErCiccione[m]  
**\<sgp\_>** I'll pay more attention to GitLab  
**\<sgp\_>** c. GUI workgroup  
**\<sgp\_>** xiphon made improvements to remove long payment IDs and to better handle nodes in simple mode.  
**\<sgp\_>** d. Monero Research Lab  
**\<sarang>** Hi  
**\<sgp\_>** hello sarang, take it away!  
**\<sarang>** There's been a lot of work on transaction protocols from me, and on graph analysis frameworks from suraeNoether  
**\<sarang>** I'll be joining rehrar and Daniel Kim at a developer conference later this month, where I'll talk about transaction protocols and how fungibility and privacy come into play  
**\<rottensox>** :-D  
**\<sarang>** I'm happy to answer particular questions, but don't want to bore with details on protocol design here  
**\<rehrar>** oof. More Vegas.  
**\<sarang>** Looking forward to speaking to a develop audience  
**\<sarang>** \*developer  
**\<sarang>** Of note is that RCT3 was updated fairly recently, as was Lelantus  
**\<sarang>** and rockstart contributor RandomRun had an idea on extending a particular Groth proof that I've been working on  
**\<sarang>** we're calling that protocol-in-progress Triptych  
**\<sarang>** (no security model for it yet, though)  
**\<sgp\_>** thanks sarang, anything else?  
**\<sarang>** Those are the broad topics of research interest lately  
**\<nioc>** catching up, I thought bittex was also using unencrypted PIDs  
**\<nioc>** bittrex  
**\<sarang>** shapeshift still uses them too, afaik  
**\<rottensox>** We moved on, but I can quickly log in and check.  
**\<sgp\_>** any final updates? we will skip over open ideas for time  
**\<sgp\_>** last comments  
**\<rehrar>** ne  
**\<sgp\_>** was a good meeting everyone :)  
**\<sgp\_>** 6. Confirm next meeting date/time  
**\<sgp\_>** The next community meeting will be in 2 weeks on 26 October at 17:00 UTC. The next Coffee Chat will be on 19 October at 16:00 UTC.  
**\<sgp\_>** Stick around after the meeting for a new initiative! We’re playing 0 A.D., an open-source, real-time strategy game. This event helps promote the community by focusing on something other than Monero. We hope you join us and have fun watching us mess around! https://www.youtube.com/watch?v=DqIJmY3cOO4  
**\<monerobux>** [ 0 A.D. Territory Rush with the Monero Community - YouTube ] - www.youtube.com  
**\<sgp\_>** 7. Conclusion  
**\<sgp\_>** That’s all! Thanks for attending this Monero Community meeting, and we hope to see you on r/MoneroCommunity and #monero-community. Take care, and know that change starts with YOU.  
