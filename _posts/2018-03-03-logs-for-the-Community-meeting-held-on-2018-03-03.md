---
layout: post
title: Logs for the Community Meeting Held on 2018-03-03
summary: Community highlights, Forum Funding System updates, RFC-HWALLET-1, Localization workgroup, Bulletproof audit discussion, MoneroV discussion, and miscellaneous
tags: [dev diaries, crypto]
author: el00ruobuob / SamsungGalaxyPlayer
---

# Logs  

**\<sgp\_>** 0. Introduction  
**\<sgp\_>** We would like to welcome everyone to this Monero Community Meeting!  
**\<sgp\_>** Link to agenda on GitHub: https://github.com/monero-project/meta/issues/186  
**\<sgp\_>** Monero Community meetings are a discussion place for anything going on in the Monero Community. We use meetings to encourage the community to share ideas and provide support.  
**\<sgp\_>** 1. Greetings  
**\<serhack>** Hello!  
**\<erciccione\_[m]>** Hi  
**\<msvb-loc>** Hello  
**\<sgp\_>** 2. Community highlights  
**\<sgp\_>** XMR.RU has translated many important articles into Russian: https://www.reddit.com/r/Monero/comments/81owe8/xmrrureport_february/   
**\<monerobux>** [REDDIT] XMR.RU-report (February) (self.Monero) | 8 points (91.0%) | 4 comments | Posted by TheFuzzStone | Created at 2018-03-03 - 09:06:46  
**\<sgp\_>** The Ledger team posted their latest update a little over a week ago: https://www.reddit.com/r/Monero/comments/7zez0g/ledger_hardware_wallet_monero_integration_some/   
**\<monerobux>** [REDDIT] Ledger Hardware Wallet - Monero integration : some news #7 (self.Monero) | 368 points (96.0%) | 56 comments | Posted by cslashm | Created at 2018-02-22 - 13:45:50  
**\<sgp\_>** There is an important Core Team announcement. binaryFate will replace tacotime as a Core Team member: https://getmonero.org/2018/03/01/core-team-announcement.html   
**\<sgp\_>** Here is a discussion regarding the bulletproof audit request: https://forum.getmonero.org/7/open-tasks/89993/bulletproofs-audit   
**\<sgp\_>** The date of the hardfork is still not set. There will developer meetings every Sunday until the hardfork, including tomorrow.   
**\<sgp\_>** Does anyone else have any updates I missed?  
**\<sgp\_>** (other than FFS ones of course)  
**\<rehrar>** you didn't think I'd miss this meeting  
**\<serhack>** sgp_ : https://www.reddit.com/r/Monero/comments/7zet99/serhack_updates/  
**\<monerobux>** [REDDIT] SerHack updates (self.Monero) | 85 points (99.0%) | 38 comments | Posted by serhack | Created at 2018-02-22 - 13:19:02  
**\<sgp\_>** How's Mastering Monero coming along serhack?  
**\<serhack>** The cover : https://i.imgur.com/woJmssA.jpg I think I must mark the help from the community members  
**\<serhack>** Anyway I'm going very good at writing, some users (cryptochangements, 4matter, sarang .. ) helped me with solid feedbacks  
**\<serhack>** At the moment, there is a little draft: https://masteringmonero.com/book/monero.pdf :) It's not finished of course  
**\<sgp\_>** That's great to hear! Are you still pushing the latest updates to Taiga?  
**\<serhack>** I am going to abandon the Taiga Wiki because I think it's better to have a github repo , anyway some contents will remain to Taiga :)  
**\<serhack>** I am doing all best in order to have both Taiga and Github  
**\<sgp\_>** Just skimmed it (EXTREMELY quickly of course) and it's looking awesome! A lot has changed since the last time I checked  
**\<msvb-loc>** The book looks very good, well organized and comprehensive.  
**\<sgp\_>** It looks like a great tool people can use to learn more about Monero. Great job!  
**\<serhack>** yes, I think it's about 60% . I would like to mark I don't want to take all credits.  
**\<serhack>** This community is awesome because we have awesome users!  
**\<serhack>** Thank you guys!  
**\<sgp\_>** :)  
**\<sgp\_>** Anyone else have any news?  
**\<erciccione\_[m]>** thanks for this serhack  
**\<rehrar>** Yeah, I do.  
**\<sgp\_>** Go ahead rehrar  
**\<rehrar>** For those who don't know, I've been working on a thingy to teach the community about open source, with the goal being that the open source vision really sets the stage for the Monero vision  
**\<rehrar>** and it's hard to 'get' one without understanding the other  
**\<rehrar>** The past week or so I've directed anyone who would listen to this pad: https://public.etherpad-mozilla.org/p/thegoodxmrpad  
**\<rehrar>** where they can share their favorite open source projects  
**\<rehrar>** A good list has been compiled so far, although it's only scratched the surface.  
**\<rehrar>** I'm ready to do a launch on the initiative, and will be making a post today.  
**\<sgp\_>** Great! I look forward to it  
**\<rehrar>** I'll probably be holding a livestreamed mini-conference before the weekend is over for anyone who wants to come  
**\<rehrar>** just talk about open source and chill  
**\<sgp\_>** We mentioned earlier when you first introduced this initiative that it's important for people to understand the merits of open-source  
**\<xmrmatterbridge> \<cryptochangements>** I'd be sure to watch it ;)  
**\<sgp\_>** All right, post it in r/MoneroCommunity and I'll hop on  
**\<rehrar>** that's it for me  
**\<sgp\_>** All right, time to move to FFS updates! If anyone has other items, we can get to them later  
**\<sgp\_>** 3. FFS updates   
**\<sgp\_>** There are several Forum Funding System updates.   
**\<sgp\_>** a. RFC-HWALLET-1 project progress   
**\<sgp\_>** @msvb-loc  
**\<msvb-loc>** The latest prototype 'Prime Platine' design is a few hours from being finished.  
**\<msvb-loc>** A board rendition is complete:  
**\<msvb-loc>** taiga.getmonero.org/project/michael-rfc-hwallet-1-implementation/  
**\<msvb-loc>** It will go to press in a couple days and I hope to have PCBs in a week, then assemble them.  
**\<msvb-loc>** Last week I visited the Embedded World (largest embedded hardware conference in the world) and spoke to manufacturers and IC chip vendors all day.  
**\<msvb-loc>** The most important thing (since we otherwise have all bases covered) is to get a stable and high quality display (OLED) supplier, so that's what I was working on.  
**\<msvb-loc>** Are there any questions about the state of Monero hardware? I have no more comments.  
**\<sgp\_>** How hard do you think it will be to get an OLED supplier?  
**\<rehrar>** You guys decided on a secure element?  
**\<msvb-loc>** sgp_: Not too hard to get a supplier, it might mean we need to buy quantities or plan way ahead (since they can only deliver with 6 weeks lead time.)  
**\<msvb-loc>** rehrar: We're still intent on trying for Microchip CEC1702 secure MCU, and if that fails a Nordic nRF52840.  
**\<msvb-loc>** We will have Atmel secure elements on top of those things regardless.  
**\<msvb-loc>** Last night I met with WolfSSL and a local hardware engineer. They are partnering with Infineon on their secure elements, but it's not a good deal. Very closed, secretive, and they don't like small (OSH) groups like ours.  
**\<msvb-loc>** They are doing TPM.  
**\<msvb-loc>** rehrar: What do you think, any suggestions or opinions about this?  
**\<rehrar>** I don't have the expertise to have an opinion, but I remember it's been a point of great discussion on previous hardware meetings.  
**\<rehrar>** So I thought I'd ask.  
**\<msvb-loc>** I'm really shorting the story of course. I met with Samsung as well, because they now have low powered IoT modules with TPN and crypto inside, quite cheap. But that would divert our resources too much, because it's a radically different architecture.  
**\<rehrar>** There's nothing to say that the first Kastelo schematic released needs to be the last ;)  
**\<msvb-loc>** Ha, yes the schematic is here:  
**\<msvb-loc>** https://taiga.getmonero.org/media/attachments/1/c/7/0/857dcae1517fe27c1988443ef7da48e2570af956d34ba7957f6b542c2a95/breakneck-sch.png  
**\<msvb-loc>** sgp_: Thanks.  
**\<sgp\_>** Thanks msvb-loc. Always interesting to see what's going on on the hardware side of things.  
**\<sgp\_>** b. Localization workgroup Q&A   
**\<sgp\_>** @erciccione_[m]  
**\<sgp\_>** I've noticed that you have been very busy lately :)  
**\<erciccione\_[m]>** that's me :)  
**\<erciccione\_[m]>** yes a lot of new contributors, and that's extremely good  
**\<erciccione\_[m]>** also, people started using Taiga for coordination within communities of translators and i'm very happy about that  
**\<erciccione\_[m]>** i've no particular updates, except for the fact that my FFS proposal will expire on the 7th  
**\<erciccione\_[m]>** i'm already writing another one hoping in the support of the community. it will be out tomorrow :)  
**\<sgp\_>** Sweet, you already answered my question  
**\<erciccione\_[m]>** anybody has questions?  
**\<rehrar>** When Italian site? :D  
**\<rehrar>** looking forward to a complete language  
**\<erciccione\_[m]>** in the new FFS there will also be a resume of what have been achived durign this 3 months  
**\<sgp\_>** Thanks erciccione. I look forward to reading it  
**\<erciccione\_[m]>** rehrar: i hope soon, the PR is there and it's ready to be merged, but i've been doing a lot of support this week i couldn't dedicate much time to it  
**\<rehrar>** cool  
**\<sgp\_>** Does anyone else have a FFS update?   
**\<rehrar>** I do  
**\<erciccione\_[m]>** i hope i can push some more pages next week  
**\<rehrar>** I've got an active FFS with Kovri that's ongoing.  
**\<rehrar>** Unfortunately, on a personal level, February was a difficult and stressful time for me, and I completed about 15 out of 40 hours  
**\<rehrar>** so obviously I will not accept any payment, and will instead accept for March since things have quieted down for me  
**\<rehrar>** just an update for the community  
**\<sgp\_>** Thanks for the update  
**\<rehrar>** so yeah, Jan, Feb and March will simply become Jan, March, April  
**\<sgp\_>** cool, makes sense  
**\<sgp\_>** 4. Bulletproof audit discussion   
**\<sgp\_>** Let’s spend a little time discussing the bulletproof code audit proposal. As mentioned earlier, the proposal is here: https://forum.getmonero.org/7/open-tasks/89993/bulletproofs-audit   
**\<sgp\_>** MRL’s overview and suggestions are here: https://github.com/b-g-goodell/research-lab/blob/master/audits/BP/README.pdf   
**\<serhack>** yea :) rehrar  
**\<sgp\_>** Does anyone have any feedback that sarang and surae can use as they prepare the FFS request to be moved to Funding Required?   
**\<rehrar>** does suraeNoether or sarang have anything to say regarding this? :D  
**\<sgp\_>** They're probably doing more important things  
**\<sgp\_>** They just had another research paper dropped on their desk  
**\<msvb-loc>** What does SoW stand for, Securing of Work?  
xwerter6 left the room (quit: Ping timeout: 260 seconds).  
**\<sgp\_>** msvb-loc, where do you see SoW?  
**\<rehrar>** Scope of Work, I believe  
**\<msvb-loc>** sgp_: SoW is the prefix to many of the bids on:  
**\<msvb-loc>** https://github.com/b-g-goodell/research-lab/tree/master/audits/BP/  
**\<sgp\_>** ah, I see now. see rehrar's answer  
**\<sgp\_>** Anyway, I'm happy that the review of bulletproofs should be happening soon  
**\<sgp\_>** If there are no further comments, I'll move on  
**\<Randolf>** Hmm, SoW means Scope of Work and not Stake of Work? Hmm.  
**\<Randolf>** I guess the computer industry is a bit of a victim of acronym overuse sometimes. :)  
**\<sgp\_>** 5. MoneroV discussion  
**\<sgp\_>** The community needs to stay vigilant for the upcoming MoneroV fork, which poses a threat on Monero. I have seen an increasing number of news articles that reference this fork without referencing any of the possible harms. I have also seen more people think that simply using a temporary wallet removes all the risk.   
**\<sgp\_>** Let’s spend some time recommending ways the community can address chain splits. How can we handle the social, community aspect of it?   
**\<sgp\_>** ie: how can we effectively get the message across, even to those with no idea how Monero works?  
**\<Randolf>** Is MoneroV specifically intended to cause harm to Monero? (Sort of like how Roger Ver created the BCash fork of Bitcoin and seems to be trying to destroy Bitcoin?)  
**\<ArticMine>** We will need to provide the users with options and the long term effects  
**\<sgp\_>** @Randolf it is most likely just someone trying to get rich quick, but who knows?  
**\<Randolf>** sgp_: As seems to be the case with many forks.  
**\<xmrmatterbridge> \<cryptochangements>** Your video on it I think helped a lot... but most people are too lazy to watch a 20 minute video smh  
**\<Randolf>** Is this the first time that Monero has been forked?  
**\<ArticMine>** I do not think MoneroV was deliberately designed to hurt Monero  
**\<Randolf>** That's good, at least.  
**\<ArticMine>** It is the first time we have an "air drop"  
**\<serhack>** If sgp agreed with me , I could try to reach some users by writing a solid article in my blog.  
**\<xmrmatterbridge> \<cryptochangements>** No, it's just the first time people are trying to participate in a scammy airdrop  
**\<sgp\_>** serhack sure, the more exposure the better  
**\<erciccione\_[m]>** guys i have to go. Will catch you tomorrow  
**\<serhack>** bye erciccione_[m]  
**\<Randolf>** So, referring to it as "yet another fork" could be helpful.  
**\<Randolf>** That way it keeps Monero in the "driver's seat" so-to-speak.  
**\<xmrmatterbridge> \<cryptochangements>** Perhaps we could put something about it in the daily discussion thread on reddit? Yesterday I spent way too much time explaining to people that it's a scam and bad for their own privacy  
**\<sgp\_>** I recommend writing a comprehensive guide on /r/xmrtrader that is stickied. But I would still like some feedback regarding what to include to best get the message across to those who think this is just another opportunity to make money  
**\<ArticMine>** Yes but will that be enough? I mean XMR at 100,000 USD and scammy XMV at 0.5% market cap or 50 USD x10?  
**\<ArticMine>** That would put MoneroV at a larger market cap than Monero today  
**\<ArticMine>** This is the kind of long term risk that I have to be concerned about  
**\<xmrmatterbridge> \<cryptochangements>** I wanna know who is actually going to be buying these coins tho... literally everyone I have spoken to about it just wants to dump them  
**\<sgp\_>** I think over 95% of people see this as an opportunity to dump  
**\<msvb-loc>** sgp_: Dump what?  
**\<ArticMine>** So I am in the camp of safely splitting of the XMV by using the same mixing on both chains  
**\<sgp\_>** The XMV  
**\<sgp\_>** In regards to ArticMine's comments, I have some news  
**\<sgp\_>** Moneromooo and stoffu have been hard at work on a tool that could be used to mitigate the impact of hardforks. You can see my comment on the issue, where it provides three key features: https://github.com/monero-project/monero/pull/3322   
**\<Randolf>** As an end-user, if it's a hard-fork then I naturally see that as a benefit to me because it means that my holdings increase. The question becomes, do I keep my hard forked holdings, or do I sell them (e.g., for Monero or something else)?  
**\<sgp\_>** Before you get overly excited that someone has created a tool, keep in mind this tool only works if many people use it. If only about 20% of people claiming their MoneroV use this sort of tool, then about 42% of those who use the tool will still have their transactions revealed immediately after the fork. This is still better than 100% of transactions. Furthermore, using a tool when some number of transactions exist after the fork will have significant benefits.   
**\<ArticMine>** Yes I am very much aware of their work. It provides some very critical tools  
**\<ArticMine>** To do what I am suggesting  
**\<Randolf>** My perspective, as an end-user, is that Monero is the de facto base or fallback that I can always depend on.  
**\<Randolf>** s/My/From my/  
**\<monerobux>** Randolf meant to say: From my perspective, as an end-user, is that Monero is the de facto base or fallback that I can always depend on.  
**\<sgp\_>** The problem is that, with ringsize 5, we need to get over 2/3 of MoneroV claimers to use a tool like this, at least initially  
**\<ArticMine>** Ringsize will likely be a topic ant the dev meeting  
**\<ArticMine>** at  
**\<sgp\_>** For those using the tool to feel reasonably comfortable  
**\<sgp\_>** Yeah, I'm taking about MoneroV though  
**\<ArticMine>** But yes increasing ringsize is part of the mitigation  
**\<sgp\_>** We can have forks in the future that advertise themsevles as "MoneroLight" with mandatory 0-mixin transactions  
**\<sgp\_>** rendering tools like these useless  
**\<sgp\_>** So yes, the best thing Monero can do (tool or not) is to increase its own ringsize. I advocated at the last meeting for 7  
**\<ArticMine>** Actually such a 0 mixin fork does not pose a threat to the exixting chain  
**\<ArticMine>** Since ti does not compromise prior outputs  
**\<ArticMine>** it  
**\<sgp\_>** ArticMine yes, because it reuses the same key image on both  
**\<sgp\_>** thus the input is still compromised  
**\<dEBRUYNE>** A 0 mixin fork would even be worse  
**\<dEBRUYNE>** Because there aren't any mitigations you can use such as using the same ring  
**\<sgp\_>** it's as if you sent a 0-mixin transaction in Monero directly  
**\<ArticMine>** but only affects those who use the fork  
**\<dEBRUYNE>** True  
**\<dEBRUYNE>** Uh no  
**\<dEBRUYNE>** wait  
**\<dEBRUYNE>** Not if your output is used as decoy  
**\<sgp\_>** Well, the inputs still impact the Moenro blockchain  
**\<sgp\_>** yes debruyne  
**\<sgp\_>** I can walk you through it later ArticMine if you want  
**\<sgp\_>** For the sake of this meeting though, I just want to make people aware that this tool now exists, and that we can consider options to convince people to use something like this  
**\<ArticMine>** Yes I see because they are exposed as real  
**\<ArticMine>** or spent to be correct. So they cannot be used in the future  
**\<ArticMine>** as decoys  
**\<dEBRUYNE>** It would reduce the ring size with 1  
**\<dEBRUYNE>** If they are used as decoy, because they are provably spent  
**\<sgp\_>** If anyone would like to help me create posts telling uninformed people about MoneroV and what to do, I would really love your help. Send me a PM and we can get a workgroup together. Since this is a social problem, I'd rather not try and handle it myself  
**\<sgp\_>** We don't really have much time left for open ideas time, but is there anythign else people want to add quickly?  
**\<ArticMine>** Yes that is the issue. But for post fork txs one has to use only post fork mixins as a defense to such a 0 mixin air drop  
**\<sgp\_>** ArticMine yes, that is one of the protections included in the tool  
**\<sgp\_>** Which means the negative impact wears off very quickly fortunately  
**\<msvb-loc>** Anyone have an idea of a stopgap service to run a website on kastelo.org or getkastelo.org?  
**\<sgp\_>** Good question msvb-loc that I wish I had the answer to  
**\<msvb-loc>** Is there something like Hotmail for websites, that allows an idiot to create a single page site in 5 minutes?  
**\<rehrar>** what's stopgap?  
**\<msvb-loc>** rehrar: Until we can get a real website in 1-2 months.  
**\<rehrar>** msvb-loc, you don't need an idiot to create a web page in 5 minutes  
**\<rehrar>** I'm a web developer  
**\<rehrar>** .............remember?  
**\<msvb-loc>** rehrar: Yes, and you are already doing twenty things.  
**\<msvb-loc>** I know that.  
**\<rehrar>** well make it 21  
**\<sgp\_>** github bootstrap template?  
**\<msvb-loc>** rehrar: Then the problem is solved, thank you very very very much.  
**\<rehrar>** I'll see if I can't get you a single page as a temp within the week  
**\<rehrar>** make a Taiga thing with all the info you want to be on it  
**\<msvb-loc>** rehrar: Okay, I'll do that.  
**\<sgp\_>** Any other last-minute thoughts? Now's your last chance  
**\<sgp\_>** 7. Confirm next meeting date/time   
**\<rehrar>** Happy Valentine's Day!  
**\<sgp\_>** The next community meeting will be two weeks from today on 17 March. The Coffee Chat will be next Saturday on 10 March.   
**\<sgp\_>** 8. Conclusion   
**\<xmrmatterbridge> \<cryptochangements>** No open ideas?  
**\<sgp\_>** That’s all! Thanks for attending this Monero Community meeting, and we hope to see you on /r/MoneroCommunity and #monero-community. Take care, and know that change starts with YOU.   
**\<rehrar>** meeting 'officially' over  
**\<rehrar>** but 'unofficial' open ideas time starts now  
**\<sgp\_>** @cryptochangements we ran out of time, but I'm happy to still discuss them here  
**\<xmrmatterbridge> \<cryptochangements>** Ok cool  
**\<xmrmatterbridge> \<cryptochangements>** Someone mentioned on reddit the other day doing an AMA on r/IAmA to answer questions that people who might not really know that much about cryptocurrency might have. It could also be a chance to promote why we need financial privacy. Good idea? Bad idea?  
**\<sgp\_>** Good idea imo  
**\<sgp\_>** But we need to convince those at AMA why  
**\<phx[m]>** I don't feel like Reddit is the right platform tbh  
**\<sgp\_>** phx[m] I still think it would be more helpful than harmful  
**\<sgp\_>** The interesting part will be who they would accept. They typically need to have some formal position afaik  
**\<defterade>** I don't see an AMA producing high quality questions.  
**\<defterade>** I think it will be met with a lot of uninformed skepticism and misinformation.  
**\<defterade>** I can already see the highest upvoted comment being an essay moaning about energy consumption.  
**\<defterade>** Followed by an attempt to explain the merits of PoW, which the average /r/IAMA vistor will not understand anyway.  
**\<sgp\_>** I still think it's good to answer these questions  