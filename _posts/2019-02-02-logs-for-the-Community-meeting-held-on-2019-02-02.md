---
layout: post
title: Logs for the Community Meeting Held on 2019-02-02
summary: Community highlights, Forum Funding System updates, Workgroup report, and Code of Conduct discussion
tags: [dev diaries, crypto]
author: el00ruobuob / rehrar
---

# Logs  

**\<rehrar>** alright, let's start this meeting a bit earl  
**\<Osiris1>** hey hey hey!!!  
**\<rehrar>** so we can get on with our lives a bit early, eh?  
**\<sarang>** plz  
**\<oneiric\_>** uhazlyfe?  
**\<rehrar>** 1. Greetings  
**\<rehrar>** anyone else out there who didn't say hi?  
**\<dsc\_>** hi  
**\<midipoet>** Hey  
**\<el00ruobuob\_[m]>** lo  
**\<ErCiccione[m]>** o/  
**\<xmrscott[m]>** Hola  
**\<rehrar>** Looks like the gang's all here.  
**\<rehrar>** 2. Community highlights  
**\<rehrar>** We got added to Exodus Wallet  
**\<rehrar>** that's fun  
**\<xmrmatterbridge> \<serhack>** Hi!  
**\<needmoney90>** Oh, I'm here  
**\<rehrar>** the new FFS is completely done and ready. We're just waiting on fluffypony to not be traveling to he can put it up on the server. All back and front end coding are done.  
**\<sarang>** NICE  
**\<oneiric\_>** very legit!  
**\<needmoney90>** I believe it's just the MFS now  
**\<needmoney90>** No more forum  
**\<xmrmatterbridge> \<learninandlurkin>** I, too, am here.  
**\<rehrar>** there is a name change, yes  
**\<rehrar>** and it will be announced when it is live  
**\<needmoney90>** About time  
**\<needmoney90>** It took far too long, FFS  
**\<rehrar>** but if someone slips me a couple XMR it might be leaked  
**\<xmrmatterbridge> \<learninandlurkin>** So we can't confuse people with the acronym anymore? FFS  
**\<sarang>** Uses subaddresses, right?  
**\<sarang>** and QR?  
**\<sarang>** and Slick Fancy Design?  
**\<rehrar>** subaddresses and QR  
**\<dsc\_>** API?  
**\<rehrar>** VFD  
**\<needmoney90>** eXtra Monero Requisition  
**\<sarang>** Spam protection?  
**\<rehrar>** It's handled through git, so yes, spam protection built in  
**\<midipoet>** spam was half the fun  
**\<rehrar>** hopefully the current forum will just be frozen  
**\<rehrar>** no more posts allowed  
**\<sarang>** Or will we continue to see plenty of requests for skin creams and boner pills?  
**\<rehrar>** the rest of the stuff can stay for posterity  
**\<needmoney90>** Where else will I find online pharmacies if the forum shuts down  
**\<rehrar>** I will personally open those requests on the new system so it still seems familiar  
**\<oneiric\_>** lol  
**\<rehrar>** Huge, gigantic thanks to Xiphon for his PHP work. He made it all come together.  
**\<rehrar>** Everyone. Hats off to him.  
**\<needmoney90>** Thanks Xiphon, it looks amazing  
**\<rehrar>** tilt your neckbeard fedoras  
**\<el00ruobuob\_[m]>** thanks to both of you!  
**\<xmrmatterbridge> \<learninandlurkin>** But I'd just got together enough XMR to fund the boner pill proposal :(  
**\<oneiric\_>** great work xiphon  
**\<rehrar>** Alright, anything else interesting this past couple weeks?  
**\<rehrar>** We had another impromptu meeting yesterday about PIDs  
**\<rehrar>** you can look over the logs for that  
**\<rehrar>** #monero-research-lab is now relayed to Mattermost, so there's no reason why you all shouldn't be there  
**\<needmoney90>** I will be uploading a Year In Review dEBRUYNE and I wrote/edited to github some time in the next day or two.  
**\<xmrmatterbridge> \<learninandlurkin>** Yeah thanks for that, rehrar  
**\<needmoney90>** So, preannouncement  
**\<rehrar>** Oh, that's fun.  
**\<rehrar>** sgp is off giving a presentation in NYC tonight  
**\<rehrar>** and I and midipoet will be going to Tabconf this month for another presentation and stuffs  
**\<needmoney90>** I'm also open sourcing the /r/Monero and /r/xmrtrader subreddits, TBD. Having some gitlab Auth issues, or it would be done already.  
**\<rehrar>** Alright, we done with this one.  
**\<rehrar>** needmoney90: did you sign in with Github on our Gitlab?  
**\<sarang>** Regarding -lab, please note that while we like to enjoy ourselves, I ask that participants keep discussion there relevant to Monero research  
**\<rehrar>** there's a weird bug where those people can't make repos or something like that  
**\<needmoney90>** I used github, I made a gitlab separate account yesterday  
**\<needmoney90>** Because weirdness  
**\<rehrar>** sarang, it is also noted internally that if the bridge is abused, it will be taken down  
**\<rehrar>** Alrighty!  
**\<rehrar>** 3. FFS updates  
**\<sarang>** Excellent, thank you. Glad we can bring more people in  
**\<midipoet>** Eli5 the move to GitHub?  
**\<sarang>** I have a brief FFS update  
**\<rehrar>** Anyone got an outstanding FFS thing to report?  
**\<rehrar>** ye, sarang?  
**\<sarang>** (apologies for the latency, which is causing me to interrupt often)  
**\<ErCiccione[m]>** My FFS very ready to be completely funded, but it's not, yet  
**\<sarang>** surae and I participated in the SBC 2019 conference at Stanford, which was generously funded  
**\<sarang>** My thanks to the community for their help. It was an extremely valuable experience  
**\<rehrar>** midipoet: we're moving from Github to Gitlab. Github got purchased by Microsoft, and is itself closed-source. We are moving slowly everything to Gitlab, which is partially open sourced. Not their Gitlab, but we took the code and deployed our own, which can be found at repo.getmonero.org  
**\<ErCiccione[m]>** (My FFS: https://forum.getmonero.org/8/funding-required/91261/erciccione-coordinator-of-the-localization-workgroup )  
**\<oneiric\_>** get this funded ^  
**\<midipoet>** rehrar: yeah, I get that, but is that what needmoney90 was talking about re Reddit forums?  
**\<ErCiccione[m]>** there are still some problems with repo.getmonero tho, i will open an issue (like SSH)  
**\<rehrar>** sarang, I'm glad you MRL guys had a good time.  
**\<ErCiccione[m]>** thanks oneiric\_ :)  
**\<oneiric\_>** np :)  
**\<needmoney90>** Midipoet: the resources and markdown and CSS will be uploaded to separate repo.getmonero.org repos.  
**\<rehrar>** Rumor has it that we will be opening a proposal for you guys to go to a spa resort sometime soon.  
**\<midipoet>** needmoney90: ah I get it now  
**\<el00ruobuob\_[m]>** My FFS is still under the radar, so i hope the MFS will be out soon (https://forum.getmonero.org/8/funding-required/91269/el00ruobuob-january-to-march-part-time-for-a-new-quarter)  
**\<rehrar>** yes, el00ruobuob\_[m] I was going to tell you to remake it, and we'll move it to FR right away  
**\<rehrar>** it will be out very soon (pending pony)  
**\<el00ruobuob\_[m]>** PM me once it's ready then rehrar   
**\<rehrar>** Alright, let's move on.  
**\<rehrar>** 4. Workgroup report  
**\<oneiric\_>** i would like to talk about a future mfs  
**\<rehrar>** ok, what's up oneiric\_ ?  
**\<oneiric\_>** given the long kovri history, and my projects development status, i am slightly hesitant to request funding  
**\<oneiric\_>** i would like to get community feedback on funding tini2p development  
**\<el00ruobuob\_[m]>** i would like to help funding this ^  
**\<oneiric\_>** thanks el00ruobuob\_[m] :)  
**\<sarang>** oneiric\_: what are your thoughts about an additional node routing layer (e.g. Dandelion++), in part to help those who decide to operate over clearnet?  
**\<oneiric\_>** sarang: i'm still familiarizing myself with Dandelion++ (still going through original paper). from what i've read so far, it looks awesome, and very symbiotic with anonymity networks  
**\<rehrar>** Well oneiric\_ the best thing to do would probably be to make the proposal anyways and explain why it's needed and stuff. If community doesn't like it, it won't be moved.  
**\<sarang>** excellent re: dandelion  
**\<rehrar>** any workgroup wants to report?  
**\<oneiric\_>** thanks rehrar, will do.  
**\<rehrar>** If not we'll move on the Code of Conduct discussion  
**\<ErCiccione>** o/  
**\<rehrar>** go boi  
**\<oneiric\_>** < after ^  
**\<rehrar>** go other boi  
**\<midipoet>** ^ I would also help fund tini2p development. I think it's important to remember with leading edge tech, some projects will encounter issues, and even fail. That doesn't mean those that worked on them should be discredited for future work. This is evolutionary tech. People should be forgiving.  
**\<ErCiccione>** so, from the Localization workgroup  
**\<ErCiccione>** A lot of new translations will be soon available for the website: German (already merged, need to be uploaded on the server), Chinese, Brazilian Portuguese and Dutch  
**\<ErCiccione>** Dutch and Portuguese only need to be reviewed  
**\<ErCiccione>** These are huge works that took months, A huge thanks to these guys  
**\<ErCiccione>** also, in the next days i will start to migrate all translation-related work of the main monero repository  
**\<ErCiccione>** as already did with the GUI. First thing will be to give the possibility to translate the CLI in the same languages available for the GUI  
**\<ErCiccione>** so, to translate the CLI contributors will just able to use pootle  
**\<el00ruobuob\_[m]>** Great!  
**\<oneiric\_>** congrats on all the hard work  
**\<ErCiccione>** No more big news, but if somebody speak any of the languages above, pplease contact me, we really need reviewers  
**\<ErCiccione>** thanks!  
**\<ErCiccione>** if anyone have questions...  
**\<sarang>** ErCiccione: is any semi-automated checking of translations done?  
**\<sarang>** e.g. does someone throw them into a translator to check they aren't obvious spam?  
**\<ErCiccione>** sarang: translators can only suggest new strings. I review every submission one by one to make sure they are not obvious spam, anyway before getting merged to the code all strings will be reviewed many times by other translators  
**\<ErCiccione>** anyway soon we will have a translation memory, to make everything even easier  
**\<sarang>** ty  
**\<oneiric\_>** translation memory?  
**\<vp11>** ErCiccione, shigutso started doing a formal portuguese revision on the website this week  
**\<vp11>** so we got at least that  
**\<vp11>** I'm trying to find more people to help  
**\<ErCiccione>** oneiric\_: yes, it's a program that records the terminology used in past translations for the same language, to keep work consistent and help with very technical words  
**\<ErCiccione>** vp11: yes, i've seen it, i asked somebody else as well, once he is done i will review the technical side  
**\<oneiric\_>** oh wow, that sounds amazing  
**\<el00ruobuob\_[m]>** ErCiccione, are pootle suggestions based on this history? i found them very accurate  
**\<ErCiccione>** yes, it's pretty cool and the same team of pootle is also developing a translation memory syistem that should integrate just fine, it's still alpha tho iirc  
**\<rehrar>** that sounds pretty neat  
**\<rehrar>** alright, any other questions, or can oneiric\_ go?  
**\<ErCiccione>** what do you mean for "this history" el00ruobuob\_?  
**\<el00ruobuob\_[m]>** s/history/memory/  
**\<monerobux>** el00ruobuob\_[m] meant to say: ErCiccione, are pootle suggestions based on this memory? i found them very accurate  
**\<el00ruobuob\_[m]>** but as it is not yet integrated, it's just pootle that is awsome in its sugestions  
**\<ErCiccione>** no, not yet. If they are available, translators use the glossaries on github.com/monero-ecosystem/monero-translations. I will start to look properly into the translation memory probably after the fork  
**\<ErCiccione>** yes, pootle has already a project named "terminology", which mimic a translation memory. Maybe i could use that option a bit more  
**\<rehrar>** alright, oneiric\_ go  
**\<oneiric\_>** danke  
**\<oneiric\_>** over the last ~month i've made a fair amount of progress on tini2p  
**\<oneiric\_>** originally, my plan was to simply implement an ntcp2 transport to plug into kovri  
**\<oneiric\_>** now, there is no option for kovri integration, and i feel much more productive working on tini2p  
**\<oneiric\_>** most of the ntcp2 transport is finished, currently working on session management + networking (sockets, listeners, etc)  
**\<oneiric\_>** i started two irc channels #tini2p & #tini2p-dev for those interested  
**\<ErCiccione>** I think the best option would be to create a FFS and then discuss it during a dev meeting  
**\<oneiric\_>** right, that's what i was getting to  
**\<oneiric\_>** will be a dev meeting this thursday (~1800 UTC?)  
**\<rehrar>** a tini2p dev meeting  
**\<oneiric\_>** yes  
**\<oneiric\_>** bad taste in my mouth still from last kovri meeting  
**\<ErCiccione>** yeah don't tell me about it  
**\<oneiric\_>** so fresh goodness in the new channels  
**\<oneiric\_>** yeah...  
**\<rehrar>** cool  
**\<oneiric\_>** anyway, that's basically it. will be lurking in both those channels, and pushing stuff to https://github.com/tini2p/tini2p  
**\<oneiric\_>** have gitlab too, but active one is github for now  
**\<oneiric\_>** thanks for the time, if anyone has any questions  
**\<rehrar>** any questions for Mr. Oneiric the Third?  
**\<xmrmatterbridge> \<learninandlurkin>** I saw some stuff about a pretty sweet GUI for I2p-zero. Is the goal to have something similar for tini2p?  
**\<oneiric\_>** so far away from a GUI right now lol  
**\<oneiric\_>** if one was built, it would be part of the client family of modules  
**\<rehrar>** alright, we're running short on time. We have to move on because there's a big discussion coming up  
**\<xmrmatterbridge> \<learninandlurkin>** I only ask because I don't know if the whole "baked in" i2p concept makes sense with a separate GUI  
**\<rehrar>** That ok oneiric\_?  
**\<oneiric\_>** the design is to be as modular as possible, so things can be developed in parallel independently  
**\<oneiric\_>** rehrar, yeah that's great  
**\<xmrmatterbridge> \<learninandlurkin>** Very cool.  
**\<rehrar>** ok, we're on 5. Code of Conduct now  
**\<rehrar>** here's the dealio everyone  
**\<rehrar>** recently, there has been an individual who has been very abrasive and has sent messages (public and private) with the intention of inflicting harm  
**\<rehrar>** sgp banned this individual, and there was some flak that this individual was banned  
**\<rehrar>** as Monero isn't int he habit of banning people  
**\<rehrar>** (banned from this channel only)  
**\<rehrar>** the feedback has been heard and this ban has since been reversed, but sgp\_ has discussed with me about the possibility of adopting a code of conduct for this community workgroup, wherein it can be somewhat formalized when and for what reasons we might bans someone in the future  
**\<sarang>** Are there any good arguments \_against\_ having a reasonable code of conduct?  
**\<oneiric\_>** banning sounds a bit dangerous  
**\<rehrar>** It's important to distinguish the monero community, and the Monero Community Workgroup here, because this would obviously only apply to the workgroup  
**\<oneiric\_>** who enforces the coc?  
**\<midipoet>** I am not sure about formalising things.  
**\<sarang>** IMO there should be extremely little tolerance for direct attacks on people  
**\<oneiric\_>** who interprets the coc?  
**\<needmoney90>** Sarang: I have some concerns, personally.  
**\<rehrar>** this workgroup is run by sgp and myself  
**\<dsc\_>** GUI workgroup will not adopt any CoC  
**\<dsc\_>** If I can speak for multiple people, that is.  
**\<sarang>** Why not?  
**\<oneiric\_>** little tolerance = mute the person  
**\<midipoet>** It just gives a point of deflection for uncomfortable situations that usually have roots in something other than the actual manifestation  
**\<rehrar>** It is perfectly fine for different workgroups to adopt different structures  
**\<oneiric\_>** this is the internet sarang  
**\<sarang>** So?  
**\<rehrar>** oneiric\_: the answer to both of those questions would be sgp and myself  
**\<oneiric\_>** so, it's text on a screen until real-world action is taken  
**\<sarang>** A public park is a public place, but you can't repeatedly take a dump on the grass and expect not to be asked to leave  
**\<dEBRUYNE>** In my opinion, we don't need a code of conduct to properly moderate something  
**\<rehrar>** I'm fairly neutral to whether it would be adopted or not, but I would hate to see people who contribute nothing, drive away people who contribute much, just because they can say what they want and make the environment sucky for contributors  
**\<dEBRUYNE>** Heuristics typically work fine  
**\<needmoney90>** I have serious misgivings for any code of conduct that polices off-platform behavior. It enables digging into people's past and personal lives in order to discredit or censure them from contribution.  
**\<sarang>** I am interested only in on-platform behavior specific to that part of the platform  
**\<midipoet>** There should be little tolerance, but I would like to think that we as a community can regulate this. We are a string community imo  
**\<oneiric\_>** so setting up yourselves as arbiters for membership in the community workgroup? arguably the most public of workgroups  
**\<rehrar>** agreed needmoney90, this would apply only to on-platform stuff as I understand  
**\<needmoney90>** What is a PM?  
**\<sarang>** midipoet: regulate how?  
**\<needmoney90>** IRC explicitly offers an ignore function  
**\<rehrar>** midipoet: this is a nice thought, but doesn't work with someone who is intent on being destructive  
**\<sarang>** I hate that idea  
**\<rehrar>** oneiric\_: let me set a timeline for you, real fast  
**\<midipoet>** well, 90+ % of us can see when someone is stepping over a line. And we should tell that person when that is  
**\<rehrar>** before rehrar there was no community workgroup. Then I had the idea and discussed with sgp and made it.  
**\<needmoney90>** Rehrar, as I see it, the current structure of the proposed code of conduct is too broad  
**\<rehrar>** since that time, he has taken over most leadership duties, which I'm fine with, but without myself and him, this wouldn't be here.  
**\<needmoney90>** For the same reasons it was controversial in Linux  
**\<rehrar>** Anyone is free to make their own community workgroup  
**\<rehrar>** needmoney90: on this I agree 100% with ou  
**\<azy>** got an example of the words said which were intended to inflict harm?  
**\<rehrar>** \*you  
**\<rehrar>** about the proposed COC  
**\<midipoet>** If that doesn't help, then efforts should be made to try and change behaviour, especially when the gregarious behaviour is coming from a community member.  
**\<rehrar>** this person was warned several times over several periods midipoet.  
**\<needmoney90>** If adopted, I would like to see it neutered significantly with regards to off platform behavior, including private messages  
**\<needmoney90>** That's my biggest concern  
**\<rehrar>** needmoney90: we can either amend the proposed COC to restrict power, or find another one  
**\<oneiric\_>** rehrar i'm not disputing your leadership role, but that's different than codifying and legitimizing banning people  
**\<dEBRUYNE>** but without myself and him, this wouldn't be here. <= That, imo, does not give you the authority to adopt a code of conduct without discussion  
**\<rehrar>** this is a concern I share with you,and proposed to sgp as well, needmoney90  
**\<rehrar>** I too thought it was too broad  
**\<dEBRUYNE>** or find another one <= Or not have one  
**\<dEBRUYNE>** It worked fine in the past  
**\<sarang>** The idea that people step in when things are out of line is, to put it frankly, a little BS  
**\<rehrar>** ^  
**\<sarang>** I've seen people be attacked and the statements just brushed aside  
**\<midipoet>** rehrar: I get that. But did anybody try and approach the person and ask them if they were ok? Like actually try and help them. It seemed to me the person was stressed, angry, resentful, and in all honesty needed help and empathy. A ban isn't that  
**\<rehrar>** nice thought. doesn't happen in practice  
**\<oneiric\_>** attacked in what way sarang?  
**\<midipoet>** sarang: I was here for a meeting, and people did step in  
**\<sarang>** Openly insulted, had intimidating statements made about a person and their family, etc.  
**\<rehrar>** dEBRUYNE: I can see your point, how the Monero Community workgroup has evolved way past myself and sgp, so I also am sympathetic to the fact that the current workgroup is very probably outside of our authority  
**\<oneiric\_>** like the "im going to call you offensive names" or "i'm going to slander and bully you into submission and disrepute"?  
**\<sarang>** I also did not step in, and regret it  
**\<rehrar>** at least, we cannot exercise the authority without compromising what it has become  
**\<sarang>** Also, just because I can't define where "the line" is does not mean that there aren't things that are absolutely unacceptable  
**\<oneiric\_>** if you're referring to anonimal calling out sgp family for military/gov ties, yeah bad look  
**\<dEBRUYNE>** My point is that the community work group is larger than just the two of you and by suddenly adopting a certain coc you are essentially deciding for them too  
**\<rehrar>** it's actually not anonimal ;)  
**\<midipoet>** Of course. Nobody here is disputing that unacceptable behaviour shouldn't be tolerated.  
**\<midipoet>** It's how it should be policed  
**\<sarang>** OK, but what does "not tolerated" look like  
**\<rehrar>** ok, question to those who disagree with the COC then  
**\<rehrar>** can you give a practical, tangible way to handle these people?  
**\<el00ruobuob\_[m]>** dEBRUYNE, as long as the coc content and concept is discussed, what's wrong?  
**\<dEBRUYNE>** It wasn't discussed  
**\<oneiric\_>** encourage people to mute/disregard them  
**\<dEBRUYNE>** It was swiftly adopted  
**\<xmrmatterbridge> \<learninandlurkin>** A channel can't exist without mods. Mods can ban people. A CoC seems somewhat like a useless abstraction. If people don't like what's happening, they will leave a community regardless of whether what happens is justified by a codified Coc.  
**\<midipoet>** personal control over muting is one method  
**\<oneiric\_>** freedom of speech is not freedom to force me to listen  
**\<el00ruobuob\_[m]>** quoting the reddit post "We are still discussing how to handle appeals."  
**\<dEBRUYNE> \<rehrar>** can you give a practical, tangible way to handle these people? <= Use heuristics to determine what is out of line and what isn't  
**\<needmoney90>** Rehrar: a code of conduct for behavior in the rooms in question is perfectly fine. If behavior occurs off platform, it shouldn't be policed - IRC has a /ignore function  
**\<ErCiccione>** I personally don't like the idea of a COC, especially this one. I don't think we need a piece of text to give authority to stop abrasive situations. It's just the basic internet rule "be cool or get out"  
**\<dEBRUYNE>** Also, you can use ignore / mute features  
**\<needmoney90>** If behavior happened in the room, enforce it if it's in violation of the coc  
**\<msvb-mob>** What do other active Freenode groups do about applying and enforcing a code, is there a template that works well?  
**\<dEBRUYNE>** We should not forget that this particular coc sparked huge controversy in the Linux community  
**\<dEBRUYNE>** msvb-mob: Almost all monero channels use heuristics  
**\<sarang>** Asking someone to mute and let everyone else listen to bullshit is a terrible way to handle this, IMO  
**\<ErCiccione>** FWIW, i won't adopt a COC for the Localization Workgroup  
**\<needmoney90>** Sarang: I'm actually in favor of a code of conduct for behavior within a room  
**\<azy>** how about keeping a record of such behaviour?  
**\<dEBRUYNE> \<el00ruobuob\_[m]>** quoting the reddit post "We are still discussing how to handle appeals." <= Appeals to decisions made in line of the coc  
**\<dEBRUYNE>** Which means the coc was already adopted  
**\<sarang>** needmoney90: I agree  
**\<midipoet>** sarang: if it happens irl. What would people do? Put the person in another room? Ban them from the area?  
**\<el00ruobuob\_[m]>** oh yeah, i see  
**\<el00ruobuob\_[m]>** sorry dEBRUYNE   
**\<oneiric\_>** why, if everyone else is ok with listening to what you consider bullshit  
**\<rehrar>** if I may be so bold, for all the talk of 'self-policing', 'standing up for each other', and more, it never happens.  
**\<el00ruobuob\_[m]>** i'm catching up with the reddit and coc itself  
**\<sarang>** midipoet: if you create a space and host a party there, and someone pisses in your punchbowl and insults people, you ask them to leave  
**\<oneiric\_>** should you be the judge of what others consider trash or treasure?  
**\<rehrar>** Which means in practice, either people are too big of cowards to say anything  
**\<rehrar>** or don't actually care  
**\<rehrar>** this might be a different discussion if we have stood up for each other in the past  
**\<rehrar>** but that hasn't happened  
**\<midipoet>** rehrar: it might happen more if it was part of a code of conduct ;-)  
**\<needmoney90>** ^  
**\<needmoney90>** Exactly what I'm suggesting, but only for on platform stuff  
**\<rehrar>** So here's the other question. If monero community workgroup adopted a COC, and people disagreed, wouldn't they be able to make their own workgroup that does a similar thing that doesn't have one?  
**\<midipoet>** sarang: but this isn't my house, nor yours. It's ours, and it's public  
**\<xmrmatterbridge> \<learninandlurkin>** It's not like a code of conduct would be trustless. Whether there is/isn't one you still fundamentally have to decide whether you trust the people who have the banhammer.  
**\<sarang>** You can't do anything you want in public spaces  
**\<sarang>** That's the point of balancing of rights  
**\<ErCiccione>** midipoet: it might happen more if it was part of a code of conduct <-- i don't really think so, humans don't work like that  
**\<midipoet>** sarang: but what's acceptable is usually socially constructed and/or the law  
**\<rehrar>** ErCiccione: so if it happens more or less with or without a CoC, the fact of the matter is, nobody does anything.  
**\<rehrar>** So this gives some power to some few who will do something about it.  
**\<rehrar>** Which delves into the depths of philosophy of government to begin with  
**\<sarang>** midipoet: sure, but if that means in this situation that you can be insulting and abrasive and an asshole and get away with it, that's not a community I will be a part of  
**\<oneiric\_>** sarang its where that balance falls that's hard to get right. protect people from abuse and ensure their right to free speech, hard mix  
**\<sarang>** I would not hesitate to leave  
**\<sarang>** Free speech means free from government restriction  
**\<sarang>** We are not the government  
**\<sarang>** You are not guaranteed a platform  
**\<rehrar>** dEBRUYNE: for what it's worth, both sgp and I have taken our counsel and reined back a bit to have this discussion.  
**\<midipoet>** So basically it's coc or you leave?  
**\<azy>** Is this not all predicated on someone else feeling bad? Personally you couldn't make me upset via text  
**\<oneiric\_>** are you not supportive of the ideal of free expression?  
**\<rehrar>** We were definitely a bit hasty, to not listen to community feedback.  
**\<ErCiccione>** rehrar: Exactly, but i don't think the coc is necessary, who moderates the room have the responsability of keeping the space civil  
**\<sarang>** Free expression is not a guarantee of a platform  
**\<rehrar>** ErCiccione: and how would the mods do that ErCiccione ?  
**\<midipoet>** Nobody is disputing that behaviour should be respectful.  
**\<rehrar>** Through bans and silencing.  
**\<oneiric\_>** it is a guarantee against censorship however  
**\<sarang>** If some of the situations I've seen in other rooms happened in -lab, there would be a single warning and then a ban, without question  
**\<rehrar>** And having a CoC means that we have rules for who gets banned and how  
**\<midipoet>** But silencing what are in reality hurt/confused/angry/lost people is not the answer  
**\<sarang>** oneiric\_: we are not the government  
**\<ErCiccione>** rehrar: you can give warnings, silence and ultimately ban (yes, i think bans are good in extreme situations)  
**\<rehrar>** in fact, the CoC is in many ways protection for the people themselves  
**\<midipoet>** There are people behind the typing. If they are trying to hurt someone, they are usually hurt themselves  
**\<sarang>** midipoet: I don't give a shit how angry or lost someone is. Being an asshole becuase of that is an explanation, not an excuse  
**\<rehrar>** for example, a person was banned for a PM from moenro-community  
**\<oneiric\_>** sarang but we are a privacy and liberation friendly community no?  
**\<rehrar>** if we have a CoC that says you can only be banned for on-platform nonsense, then that prevents that from happening  
**\<oneiric\_>** rehrar it prevents from being justified by a document  
**\<midipoet>** right. Ok  
**\<xmrmatterbridge> \<learninandlurkin>** Can mue/silence be done on a timed basis whereby the user is notified? That is if you have ignored a warning or two you get a message "You have been muted for 24 hours"  
**\<rehrar>** It's important to remember that this is a deep, nuanced, and potentially heated discussion where people hold different opinions. It's ok to disagree, and important that we navigate these discussions well.  
**\<rehrar>** Even if you're "disgusted" by one side or the other's viewpoints, ultimately we are all talking about how to make the Monero community workgroup (and in general) better  
**\<oneiric\_>** why build all this liberating tech if the community behind it becomes tyrannical?  
**\<rehrar>** we just have different ideas on how to do so  
**\<dsc\_>** oneiric\_: :)  
**\<rehrar>** oneiric\_: it's one workgroup that decides on a more formalized leadership structure  
**\<rehrar>** it's not the community  
**\<sarang>** There's a certainly tyranny with being able to control people or a room by bad-faith behavior done repeatedly  
**\<sarang>** \*certain  
**\<rehrar>** and there is an uncertain tyranny of those who can do and speak how they choose  
**\<rehrar>** without consequence  
**\<rehrar>** once again, if someone who contributes nothing is destructive in such a way that causes someone who actually contributes to leave  
**\<rehrar>** then we have lost much, and gained nothing by keeping the miscreant with us  
**\<oneiric\_>** well, that's understandable too. a truly abusive, toxic figure should be minimized. like a person actively spreading lies, libel, slander, making physical threats, etc  
**\<rehrar>** whereas if the reverse happens, we ban the miscreant, we keep much, and lose nothing  
**\<oneiric\_>** free speech doesn't mean without consequence  
**\<oneiric\_>** free to speak and suffer the consequences  
**\<azy>** Why not take a vote on each occurrence?  
**\<sarang>** What a way to DoS a room  
**\<rehrar>** Perhaps the compromise of needmoney90 of a CoC that is very restrictive, particularly to only on-platform conduct, is noted for consequence, could be a thing  
**\<oneiric\_>** what i'm arguing is how severe the consequences are, and who has the authority to dole them out  
**\<xmrmatterbridge> \<learninandlurkin>** Well people aren't going to wait for 100% voter turnout before they ban a spammer  
**\<midipoet>** I just don't like the idea of a formalised COC panel, and a formalised COC review board, and process, etc.  
**\<midipoet>** Monero was supposed to move away from that formalisation, command and control. IMO  
**\<rehrar>** Goodness gracious, you people.  
**\<rehrar>** monero is STILL moving away from formalization  
**\<needmoney90>** Midipoet it's not a panel or board  
**\<needmoney90>** It's just the rules the admins enforce  
**\<rehrar>** an workgroup is doing something different  
**\<xmrmatterbridge> \<learninandlurkin>** I don't understand how there would be a "panel" or "process" when the reality is there are just two dudes doing the modding  
**\<needmoney90>** Codified for people in the rooms  
**\<midipoet>** ok. So what if someone wants to appeal?  
**\<midipoet>** What do they do?  
**\<ErCiccione>** bigger the project will be, more it will need some burocracy midipoet, but in this situation i agree with you  
**\<needmoney90>** Same as you appeal most bans, PM mods or contact other facets of the community  
**\<needmoney90>** Theres a wide variety of mods on the various platforms, no one person controls them all  
**\<ErCiccione>** <learninandlurkin: +1  
**\<midipoet>** and what if one mod was the person you insulted?  
**\<azy>** what stops a banned user from just returning with a different ip and nick?  
**\<midipoet>** There are two mods.  
**\<midipoet>** Odds are slim  
**\<el00ruobuob\_[m]>** "One person's freedom ends where another's begins." Anyone is free to not been insulted or harassed. So any form of formalizing this is ok to me.  
**\<ErCiccione>** I think we are discussin a problem that doesn't exist  
**\<oneiric\_>** one is not free to not be insulted  
**\<xmrmatterbridge> \<learninandlurkin>** The CoC would in reality only serve as a justification, not as an actual mechanism  
**\<rehrar>** ErCiccione: it obviously does exist. Just because you weren't the one insulted, doesn't mean it's not real  
**\<midipoet>** so mods across platforms make decisions regarding a coc on one distinct platform?  
**\<needmoney90>** https://en.m.wikipedia.org/wiki/Paradox\_of\_tolerance  
**\<needmoney90>** Just as some light reading material to think about.  
**\<dEBRUYNE> \<midipoet>** I just don't like the idea of a formalised COC panel, and a formalised COC review board, and process, etc. <= Me neither. We don't need a coc to moderate a room  
**\<xmrmatterbridge> \<learninandlurkin>** And if the mods do something that the community feels needs justification, they can do it with their own arguments without a CoC  
**\<ErCiccione>** rehrar: you misunderstood, i'm talking about the "burocratization" of monero.  
**\<sarang>** FWIW if another anonimal or notmike situation happened here, and there was not some kind of definite action, I will not hesitate to leave this room and say good riddance  
**\<sarang>** I wouldn't choose to be part of such a community that allows its members to be treated that way  
**\<sarang>** You can all do what you want  
**\<rehrar>** ah, ok  
**\<rehrar>** ^ lose much, gain nothing  
**\<rehrar>** some of us just don't have time for bullshit  
**\<rehrar>** we have work to do  
**\<oneiric\_>** sarang: it's that kind of action i 100% support.  
**\<rehrar>** and then the ones who suffer are those left in the room oneiric\_  
**\<rehrar>** the collective IQ and quality of discussion will drop each time this happens  
**\<dEBRUYNE> \<rehrar>** some of us just don't have time for bullshit <= You can still issue a temporary ban if someone misbehaves  
**\<oneiric\_>** if it really degrades that badly, then that person is inflicting real harm, and should be removed  
**\<dEBRUYNE>** All we are saying is that you don't need a code of conduct for that  
**\<sarang>** Fine. Set a statement of expectation that we all hold ourselves to  
**\<rehrar>** OK, so let's say we don't adopt a CoC  
**\<rehrar>** and then someone is being disruptive, and the mods ban  
**\<ErCiccione>** dEBRUYNE: +1  
**\<xmrmatterbridge> \<learninandlurkin>** If people kick up a fuss and make some post somewhere about being "censored" in the Monero community, the readers of that post (and the OPs) will not care whether there was a CoC in place  
**\<rehrar>** then people will be upset that they were singled out and have no process for coming back  
**\<rehrar>** that's EXACTLY WHAT HAPPENED this past time  
**\<dEBRUYNE>** Yeah because sgp banned him indefinintely  
**\<rehrar>** ok, so what determines how long the ban be for?  
**\<dEBRUYNE>** The way to properly handle such a situation is -> temporary ban of x days  
**\<rehrar>** what determines days?  
**\<ErCiccione>** I agree temporary ban would solve any possible controversy  
**\<dEBRUYNE>** 2nd time, ban of x+x days  
**\<rehrar>** what determines excessive days?  
**\<dEBRUYNE>** Use heuristics  
**\<midipoet>** But what stops them just  logging in under a different name?  
**\<dEBRUYNE>** Temporary could be a few days  
**\<dEBRUYNE>** Second offense could be 1-2 weeks  
**\<sarang>** midipoet: nothing  
**\<dEBRUYNE>** Third offense could be permenant  
**\<rehrar>** the funny thing is, that not adopting a CoC actually puts MORE trust in the mods, not less  
**\<midipoet>** So it's whack a mole?  
**\<sarang>** yes  
**\<rehrar>** you're basically saying sgp and I can ban as we see fit, using heuristics and with little oversight  
**\<dEBRUYNE>** You'd easily notice if someone came back under a different nic though  
**\<sarang>** But what do you think Monero research feels like? Whack-a-mole with privacy. But we still do it because it's the right thing to do  
**\<rehrar>** whereas with a CoC at least you acn point to that and say "hey you guys aren't following the thing you say you will follow."  
**\<midipoet>** dEBRUYNE: is writing a COC on the fly  
**\<oneiric\_>** rehrar: your oversight is community lash back on a bad decision, like this last time  
**\<rehrar>** fair  
**\<rehrar>** alright, I say the following sincerely  
**\<rehrar>** thank you all for taking part in this discussion  
**\<oneiric\_>** appealing to the coc of an org you feel wronged you may only win in the court of public opinion  
**\<rehrar>** I know for sure that I am not perfect. Far from it. And I don't always have the best ideas.  
**\<xmrmatterbridge> \<learninandlurkin>** Yeah the backlash would probs never be "You didn't follow the CoC!". It would be "In my opinion, you guys have been jerks".  
**\<xmrmatterbridge> \<learninandlurkin>** But ruder  
**\<rehrar>** So we'll review all of this discussion and the different viewpoints, and see what the next step is.  
**\<oneiric\_>** if they violated the coc, why care about appeals?  
**\<midipoet>** can I be on the appeal board  
**\<sarang>** In the words of John Mulaney: "because I am often wrong"  
**\<midipoet>** First counselling session is free  
**\<midipoet>** I'll charge thereafter  
**\<dEBRUYNE>** Like I said before, this stuff caused huge controversy in the Linux community  
**\<rehrar>** a big thank you for midipoet dEBRUYNE sarang oneiric\_ learninandlurkin, needmoney90, and ErCiccione and el00ruobuob\_[m] for weighing in  
**\<needmoney90>** DEBRUYNE they are speaking of a coc generally  
**\<needmoney90>** Not the CCCC  
**\<needmoney90>** Big difference  
**\<rehrar>** ^  
**\<dEBRUYNE>** But sgp and rehrar decided to adopt the cccc for community workgroup  
**\<rehrar>** Even if the CoC was very simple, like what dE made  
**\<needmoney90>** The CCCC being a controversial coc, but not all cocs being controversial  
**\<needmoney90>** dEBRUYNE: they walked it back already  
**\<needmoney90>** And are in discussion of neutering the controversial parts  
**\<rehrar>** If we come back with a much more even-handed and restricted CoC, could we discuss it at a future meeting?  
**\<sarang>** Please  
**\<rehrar>** using what dEBRUYNE suggested as a base  
**\<rehrar>** three strike policy, type thing.  
**\<dEBRUYNE>** Sure, but it's pretty apparent a lot of people are of the opinion no coc is needed at all  
**\<needmoney90>** Yes, I am happy to discuss the merits and drawbacks of any proposed coc  
**\<rehrar>** understood  
**\<xmrmatterbridge> \<learninandlurkin>** How about: anyone who is banned gets made the mod of a automatically generated channel "monero-community(n)" and that community can exist on its own merit  
**\<needmoney90>** The sidebar on /r/Monero is a coc  
**\<needmoney90>** For example  
**\<rehrar>** and it's also apparent that a lot of people are of the opposite opinion dEBRUYNE  
**\<needmoney90>** I'm against an absence of codified rules  
**\<rehrar>** so if we do nothing, we are appeasing one and not the other, and vice versa  
**\<dEBRUYNE>** If there is no consensus, normally one sticks to the status quo, which is no coc  
**\<needmoney90>** We do have one though  
**\<rehrar>** even doing nothing is a decision  
**\<needmoney90>** Saying we have no coc ignores our codified rules  
**\<rehrar>** this is the case of a blockchain  
**\<rehrar>** but this workgroup is not a blockchain  
**\<midipoet>** Well then have one universal COC  
**\<dEBRUYNE>** needmoney90: Imo that's vastly different than an extensive coc  
**\<rehrar>** Anyways, we are way past time, so anyone who wants to split, please feel free. Meeting officially over.  
