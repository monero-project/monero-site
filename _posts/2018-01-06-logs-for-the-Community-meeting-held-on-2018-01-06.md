---
layout: post
title: Logs for the Community Meeting Held on 2018-01-06
summary: Community highlights, Forum Funding System updates, RFC-HWALLET-1, Rehrar's Kovri proposal, Serhack's integrations, Fondajo, community materials, and miscellaneous
tags: [dev diaries, crypto]
author: dEBRUYNE / fluffypony
---

# Logs  

**\<sgp>** 0. Introduction  
**\<sgp>** We would like to welcome everyone to this Monero Community Meeting!  
**\<sgp>** Link to agenda on GitHub: https://github.com/monero-project/meta/issues/155  
**\<sgp>** Monero Community meetings are a discussion place for anything going on in the Monero Community. We use meetings to encourage the community to share ideas and provide support.  
**\<sgp>** 1. Greetings  
**\<rehrar>** oy  
**\<ErCiccione>** Hi folks  
**\<ordtrogen>** yo  
**\<xmrscott[m]>** Salutations  
**\<Xil3>** hello  
**\<sarang>** yo  
**\<msvb-lab>** Oops, I was on the wrong channel. Hi folks.  
**\<sgp>** 2. Community highlights  
**\<sgp>** For a great weekly summary, please read the Monero Observer: http://monero-observer.com/  
**\<sgp>** 3. FFS updates  
**\<sgp>** There are several FFS updates.  
**\<sgp>** a. RFC-HWALLET-1 project progress  
**\<sgp>** @msvb-lab, your turn 😅  
**\<ArticMine>** Hi  
**\<msvb-lab>** Cool.  
**\<msvb-lab>** The Monero Hardware had a nice meeting yesterday of our own.  
**\<msvb-lab>** We chatted on #monero-hardware for about an hour on seventeen topics.  
**\<msvb-lab>** Highlights of the past couple weeks are:  
**\<msvb-lab>** Our hardware wallet GitHub repository 'sekura' will be renamed to 'kastelo'.  
**\<msvb-lab>** That's with a 'elo' not 'kastratelo'.  
**\<msvb-lab>** ;)  
**\<msvb-lab>** We delivered about thirty (?) holiday divident prototype boards.  
**\<msvb-lab>** Via post and face to face meetings, like for example at 34C3 in Leipzig.  
**\<msvb-lab>** ...and are working on the next prototype(s) design now.  
**\<msvb-lab>** That's about all, any questions?  
**\<msvb-lab>** A firmware effort is underway, I guess we'll have a more unique device than planned.  
**\<msvb-lab>** There is a lot of interest in the group to attract more people that know cryptography and can code.  
**\<msvb-lab>** Volunteers?  
**\<msvb-lab>** Crickets.  
**\<rehrar>** I can neither code, nor know cryptography well  
**\<msvb-lab>** sgp: Next topic.  
**\<sarang>** MRL remains available with any questions that come up  
**\<rehrar>** but I'll jump right on it  
**\<msvb-lab>** sarang: That's excellent, very generous as usual of MRL.  
**\<sgp>** Thanks msvb-lab  
**\<sgp>** b. Monero Integrations  
**\<sgp>** Serhack and cryptochangements posted an update: https://www.reddit.com/r/Monero/comments/7o3rx6/serhack_updates_for_the_ebook_and_integrations/  
**\<sgp>** Do any of them want to speak about this now?  
**\<cryptochangements>** oh crap im late  
**\<cryptochangements>** is serhack here?  
**\<rehrar>** doesn't seem so. It's all you cryptochangements  
**\<sgp>** I haven't seen him here today  
**\<sgp>** Is there anything you want to mention cryptochangements?  
**\<cryptochangements>** ok, pretty much all I have to say is that the opencart plugin, the third milestone, is being worked on and is on it's way  
**\<sgp>** Great, thanks for your work  
**\<cryptochangements>** you can see the code here: https://github.com/monero-integrations/monerocart  
**\<sgp>** Anything else cryptochangements?  
**\<cryptochangements>** nope, that's all  
**\<sgp>** c. Rehrar’s Kovri proposal  
**\<sgp>** Rehrar’s Kovri proposal has moved to funding required: https://forum.getmonero.org/8/funding-required/89677/rehrar-s-2018-q1-kovri-proposal  
**\<sgp>** Anything to add rehrar?  
**\<rehrar>** fudn it  
**\<rehrar>** \*fund  
**\<rehrar>** *bows* thank you  
**\<rehrar>** jk, thing is, I'm working on Kovri regardless, so work is not slowing in any capacity  
**\<rehrar>** even while this waits for funding  
**\<sgp>** Thanks rehrar. It means a lot for the project  
**\<sgp>** Does anyone else have a FFS update?  
**\<ErCiccione>** nothing from me but if anybody has question, here to answer about localizations  
**\<sgp>** I'll proceed then onto the next topic  
**\<ordtrogen>** I have a comment on localization, when topic's up  
**\<ordtrogen>** *the topic*  
**\<sgp>** @ordtrogen you can ask it now  
**\<ErCiccione>** sure, go ahead ordtrogen  
**\<ordtrogen>** (pasting some pre-written text ...)  
**\<ordtrogen>** I've only recently gotten more involved in translation/localization but pretty quickly I have discovered a couple of issues with the localizable strings, both in the CLI and GUI project. So I think it needs some polishing to look proper. (I am filing issues as we speak)  There also doesn't seem to exist much in the way of help documentation. I know there is some texts on getmonero.org, but I'd argue there should fir  
comes with the installation, such as a man file for unix and maybe some other formats for Mac and Windows.  Which makes me think we should spend a little more time on the "foundations" of the texts we write. Like improving the UI English.  While @ercicciones work on the localization project obviously is fantastic, I'm thinking, what quality can the translations have unless the source (en) is correct?  
**\<rehrar>** Agree wholeheartedly.  
**\<rehrar>** As I work on the website here and there, most of the text is not written by me, except for the newer pages (and even that should be reviewed). Some of the copy does not read well, or is over flowery in some places, or other issues.  
**\<ErCiccione>** yes, a lot of good points. the source file has been polished not a month ago, but would be great to have a clean and reviewed text to work on  
**\<sgp>** I think most people agree documentation needs to be improved across the board  
**\<ErCiccione>** about documentation  
**\<ordtrogen>** I'm thinking a man file for monerod would be in order. Need not be too extensive  
**\<ordtrogen>** (linux)  
**\<ordtrogen>** And I'm not sure, what is displayed by $monerod --help    is not localizable, right?  
**\<ErCiccione>** i'm working in creating a wiki with everything necessary for a translator, it can be found here https://taiga.getmonero.org/project/erciccione-monero-localization/wiki/home it need some improving, but following translators can take days some times, and i actually have no time, would be great to have some help on that side  
**\<ErCiccione>** @ordtrogen it is actually, you can find the references to the code in the  .ts files  
**\<ordtrogen>** ok. I just wanted to bring up the issue. As soon as I have to write something, I will.  
**\<ErCiccione>** iirc a man file was partially done few days ago, but yes, there  
**\<ordtrogen>** Will try to finish the testing and issue reporting first  
**\<ErCiccione>** \* there is needing of a lot of clean documentation, thank you for bringing that up  
**\<ordtrogen>** Oh, a man file is somewhere in the repos?  
**\<ordtrogen>** CLI or GUI`?  
**\<dEBRUYNE>** Just dropping this here: https://www.reddit.com/r/Monero/comments/7nl38w/technical_documentation_for_monero/ds2nkfu/  
**\<ordtrogen>** Oh, great  
**\<ordtrogen>** I don't have time to follow r/monero too much  
**\<ErCiccione>** dEBRUYNE, uh that looks very good  
**\<sgp>** Anything else we need to discuss on this topic?  
**\<dEBRUYNE>** Perhaps reach out to the owner to collaborate  
**\<ordtrogen>** Oh, man, That site looks great!  
**\<sgp>** Ok, I'm going to move on. Thanks @dEBRUYNE @ErCiccione  
**\<sgp>** 4. Fondajo  
**\<sgp>** After months of progress, I am pleased to announce that I am proceeding with a 501(c)3 nonprofit cryptocurrency foundation called “Fondajo”. I have a great workgroup of people who are helping organize all the documents.  
**\<sgp>** This cryptocurrency nonprofit will promote education, research, and development. One of its values will be to promote privacy projects. The foundation will still be completely separate from Monero.  
**\<sgp>** When the nonprofit is officially incorporated, I will hand over the responsibilities of this workgroup to rehrar. I’m sure that we can use some help from other members who have been active these past several months.  
**\<sgp>** To be clear, this is not a Monero-specific foundation, but it will support many of Monero'  
**\<sgp>** \*many of Monero's projects  
**\<ArticMine>** This is a US base non profit?  
**\<sgp>** Yes, US-based  
**\<sgp>** Which will allow people in the US to make tax-deductible donations  
**\<ordtrogen>** TAlk about the name Fondajo  
**\<ordtrogen>** (now I see the meaning in espreanto)  
**\<sgp>** If you are interested in helping with the nonprofit, let me know in PM  
**\<sarang>** What are the practical types of projects/goals related to the mission?  
**\<sarang>** or some examples?  
**\<sgp>** Any published research in cryptocurrencies is fair game  
**\<sgp>** Educational outreach is prioritized for grants too  
**\<sgp>** I'm still seeing what can be done for development, but I'd like to support this as much as possible  
**\<sarang>** Nice, so it'd issue grants from its asset pool of donations?  
**\<sgp>** Exactly  
**\<sarang>** Excellent  
**\<dEBRUYNE>** As long as it doesn't end up like the Bitcoin foundation lol  
**\<sarang>** I assume the nonprofit status might make it easier to help support students as well  
**\<sgp>** It will be very different from the Bitcoin Foundation, even by registration  
**\<sgp>** Bitcoin Foundation is not a 501(c)3  
**\<dEBRUYNE>** I am just talking about their endeavors etc.  
**\<sgp>** Since this is a 501(c)3, the focus will be entirely on education, research, and (hopefully) development  
**\<cwcopz>** "Fondajo" sounds like an intersting project. Is there more information available? Is there a official homepage?  
**\<sgp>** I think it will really help raise money for projects that can benefit Monero and other privacy projects  
**\<sarang>** I know suraeNoether has toyed around with the idea of a nonprofit too, so I'll page him here  
**\<rehrar>** Privacy advocacy!  
**\<sgp>** cwcopz I have the domain but haven't made a website yet  
**\<rehrar>** Monero is just one tool in the opsec of a privacy focused person  
**\<cwcopz>** Is there a way to stay up to date? I would like to donate to this project as well.  
**\<sgp>** Any other questions?  
**\<sgp>** I want to assure everyone that Fondajo will remain completely separate from Monero itself  
**\<ordtrogen>** Did you get the  .co  domain?  
**\<dEBRUYNE>** Is anyone getting paid?  
**\<sgp>** @cwcopz I'll put all major updates in /r/Monero and /r/MoneroCommunity  
**\<cwcopz>** Okay, thanks. Sounds promising!  
**\<sgp>** @dEBRUYNE it's likely there will be overhead for some positions, but I want to keep it minimal  
**\<dEBRUYNE>** I am personally not a fan of people getting paid in a nonprofit, it should be done altruistically  
**\<sarang>** I think it depends on the level of work. If it's your full-time job, you should get compensated  
**\<sarang>** peeps gotta eat  
**\<sgp>** @dEBRUYNE it's sometimes better to be able to pay people to allow them to spend all their time working on improving the cryptocurrency ecosystem  
**\<rehrar>** what if they are paid in love?  
**\<sarang>** Will my landlord accept love as rent?  
**\<sarang>** That might be illegal  
**\<rehrar>** well, as in crypto, consensus is mandatory  
**\<rehrar>** moving on :P  
**\<ordtrogen>** Can't an organization be non-profit as a whole but still pay for services?  
**\<sgp>** Ok sarang, you're up  
**\<sarang>** 501(c)(3) orgs can pay their staff  
**\<sarang>** I thought I'd mention one FFS that's sorta kinda community related  
**\<sarang>** It was suggested that we send a couple of folks to some academic conferences for knowledge gains and community representation  
**\<sarang>** suraeNoether and I wish to attend the BPASE18 conference at Stanford later this month  
**\<sarang>** and suraeNoether plans to attend the RWC conference in Zurich with fluffypony  
**\<sarang>** So we have an open FFS for the usual expenses  
**\<rehrar>** 5 star hotel, caviar every night, the works  
**\<sarang>** I'm mainly looking for input from the group about how important y'all feel conferences are for the Monero group  
**\<sarang>** and if FFS should be the preferred way of sending folks to conferences that we agree are worthwhile  
**\<dEBRUYNE>** sgp, sarang: Let's discuss that another time :P  
**\<dEBRUYNE>** sarang: conferences are one of the main ways to network  
**\<sarang>** OK, wasn't sure if this was a good place for that discussion  
**\<dEBRUYNE>** As long as they aren't detrimental for day-to-day work  
**\<dEBRUYNE>** i.e. it leaves no time to work on "normal" stuff  
**\<rehrar>** To answer the first question: extremely important  
**\<rehrar>** The Monero Project needs to be a part of a larger conversation  
**\<sarang>** dEBRUYNE: the conference schedules are usually pretty packed, but BPASE is only 3 days  
**\<rehrar>** a conversation about privacy, human rights, cryptography, and more  
**\<rehrar>** going to these conferences is a way for representatives of The Monero Project to be a part of that conversation  
**\<rehrar>** I think The Monero Project has a unique voice, and unique things to add to such conversations as well, and our perspective will be helpful  
**\<ErCiccione>** sarang: link of the FFS?  
**\<sarang>** OK thanks for this perspective  
**\<rehrar>** https://forum.getmonero.org/8/funding-required/89695/funding-for-noether-brothers-to-attend-stanford-bpase18-conference  
**\<sarang>** We used a single FFS but listed the separate costs for reference: https://forum.getmonero.org/8/funding-required/89695/funding-for-noether-brothers-to-attend-stanford-bpase18-conference  
**\<ErCiccione>** uw... double, nice. Thanks guys  
**\<sarang>** I agree with rehrar that this should be part of a larger discussion about our involvement in the broader academic community  
**\<sarang>** I recommend interested persons take a look at the conference schedules and programs. Lots of excellent talks  
**\<sgp>** Anything else sarang? I have no issue with this FFS proposal  
**\<sarang>** Nope, just wanted to open the broader conversation  
**\<sarang>** Appreciate the insights from all of you  
**\<sgp>** 5. Community materials  
**\<sgp>** This section of the meeting was inspired by this post: https://www.reddit.com/r/Monero/comments/7obquf/wake_up_we_need_better_marketing_and_better/  
**\<sgp>** Let’s discuss how the Monero community can better market itself to others and what materials could be beneficial to newcomers.  
**\<sgp>** Anyone want to begin?  
**\<cryptochangements>** yesterday i saw a youtube ad for Bitcoin. I think we need one for monero with fluffypony in a lambo  
**\<cryptochangements>** \s  
**\<ordtrogen>** I keep seeing them for Dash!!!  
**\<ordtrogen>** yuck  
**\<Guest93332>** I want to know why is this community not communicated more on the official channels? i only heard about it as an comment on an reddit thread? This here should be more public.  
**\<sarang>** I find it interesting to watch the top coins by cap... so many that seem to rely on marketing  
**\<Guest93332>** \*this community chat not ..  
**\<sgp>** @guest93332 this is a workgroup. You can see what it does in /r/MoneroCommunity  
**\<rehrar>** It's on the Hangouts page and the Footer of the website also  
**\<sgp>** You're right though that we should probably encourage more people in /r/Monero and elsewhere to participate  
**\<Guest93332>** yeah for example - it should be on r/monero  
**\<rehrar>** like...the Community meeting announcement should be on /r/monero?  
**\<sgp>** I still think the best marketing is good documentation and beginner resources  
**\<sgp>** At least for now  
**\<cryptochangements>** well as people have discussed before, if we are going to market monero it has to be based on education. not stupid hype  
**\<rehrar>** agree cryptochangements, but we all have to recognize one thing  
**\<rehrar>** we can't tell anyone what to do, so if one person was to start a 'hype' focused marketing thing, we can't stop them  
**\<cryptochangements>** fair enough  
**\<rehrar>** And the clock is ticking until some initiative-filled person will do it  
**\<rehrar>** so the best way to prevent it  
**\<Guest93332>** i have another question, for beginners it is very hard to find out about irc and that stuff. could the whole communication change from irc to discord or is it like monero is for the cryptogeeks?  
**\<rehrar>** is to get a marketing team together that will focus on education and awareness  
**\<rehrar>** that way, when said initiative-filled person comes in  
**\<rehrar>** we can funnel him into the already underway marketing effort  
**\<rehrar>** and his/her skills will be with the community  
**\<rehrar>** the longer we wait for some form of marketing workgroup, the more likely it is that somebody that doesn't believe what we do about hype and education will start it  
**\<msvb-lab>** Guest93332: Discord would be nice to have. My impression is that the folks moderating the dozen or so current channels and bridges to channels aren't able to keep up.  
**\<cryptochangements>** Guest93332: can this be discussed after the meeting in open discussion in a few minutes?  
**\<msvb-lab>** There may not be a volunteer to configure and moderate Discord.  
**\<rehrar>** Guest93332: we have slack and mattermost connections also  
**\<rehrar>** mattermost.getmonero.org  
**\<Guest93332>** ok  
**\<ErCiccione>** and riot/matrix  
**\<rehrar>** believe me, I'm not a geek. :P Which is why I worked on getting other non-IRC things up here also so people like me could participate  
**\<cryptochangements>** i remember a r/moneromarketing did exist at one point, but then turned into monerocommintu  
**\<sgp>** Formalizing an actual marketing campaign is a topic for another day, but how can we encourage people to make these helpful user guides, videos, infographics, etc?  
**\<rehrar>** I still own it cryptochangements  
**\<cryptochangements>** and then the marketing ideas all kinda got shunned  
**\<sarang>** There's a saying that it's orders of magnitude harder to refute BS than to spew it  
**\<sarang>** We'll always have that working against us for hype  
**\<rehrar>** I think if we get some Monero merch  
**\<rehrar>** and have some giveaways based on competition of content creation  
**\<rehrar>** then that'd be a fun way to both engage the community, get some Monero marketing type merch out there, and incentivize quality content creation  
**\<cryptochangements>** sgp: i think we have to figure out what kind of marketing we want to encourage before we can start encouraging marketing at all  
**\<cryptochangements>** ooo good idea rehrar  
**\<sgp>** @rehrar I like that idea  
**\<ErCiccione>** I don't know if i like it, it's not ideal to compensate people for something they should do because they believe in it  
**\<sgp>** I think a Monero webcam cover is a good incentive. People seem to love them  
**\<rehrar>** ErCiccione this is indeed the balance of initiative-based projects  
**\<rehrar>** people with the most initiative will be (usually) people who believe in the project  
**\<cwcopz>** sgp Agree. Would buy one as well.  
**\<rehrar>** this will mean that the 98% who are on board for other reasons will rarely do something that requires their own initiative  
**\<cryptochangements>** ErCiccione a t-shirt or some webcam covers isnt like a fat cash prize. people who participate would still probably do it bc they like Monero. the incentives just kinda get the ball rolling and make it a little bit more fun  
**\<rehrar>** and make no mistake, while I do think Monero has a higher number of idealists, as the days pass, and more people join, Monero will be overrun by people who don't see the vision  
**\<cwcopz>** I've created a homepage to show some monero artwork. Can I post the link? It is WIP and at the moment a little bit outdated.  
**\<rehrar>** in a sense, we have to woo those people to the vision. In part by being a friendly-community and making them want to stick and around and stay, and the more they stay, the more they listen, the more they listen, the more they learn  
**\<sgp>** Sure  
**\<cwcopz>** WIP https://monero.gallery/  
**\<ErCiccione>** cryptochangements: yes, in those terms sounds fair, but i don't love it anyway :P  
**\<rehrar>** community engagement is the start of the process I just described  
**\<cwcopz>** Focus: Art, what is monero?, speading the word, privacy ...  
**\<cwcopz>** Do you think it is worth to work on in the future?  
**\<rehrar>** *shrug* we never know what will grab the community  
**\<ErCiccione>** rehrar: yes, but i want to make sure we don't push monero engagement giving for granted a future downfall of its community  
**\<rehrar>** I think it'd be a fun way for designers to hop on board, so why not cwcopz?  
**\<sgp>** @ErCiccione I obviously prefer if everyone does something for free, but if all they need is a free little piece of merch to contribute, it's probably worth it  
**\<cryptochangements>** unfortunatly rehrar is right. with the huge price pumps most people are here for the money, not the ideals. but im gonna share a secret: I found monero bc it was easy to mine and i was gonna convert it all to BTC. but once i found out monero is way better than BTC i kept my monero and eventually got more involved in the community. Like rehrar said, you kinda gotta woo people over to the id  
**\<ErCiccione>** i agree @sgp i only want to avoid it becomes a strategy, when we can also make promotional video to ask people to contribute, hackatons and stuff like that  
**\<rehrar>** there are human elements to the Monero community, and I realize the ideal is that we won't hvae to play to those human elements and the technology will speak for itself  
**\<rehrar>** this is honestly a kind of thinking that conveys a lack of understanding and appreciation for the intricacies of handling the social part of a project  
**\<cwcopz>** @rehrar I think the same. I am not a coder but possible a way to contribute to monero at all  
**\<rehrar>** many great projects break down for social reasons  
**\<sgp>** Does anyone else have marketing-specific discussion, or should I open it to the broader open ideas time?  
**\<rehrar>** we've kind of melded the two :P  
**\<sgp>** Ok, let's continue with open ideas time  
**\<sgp>** What does everyone think of the Coffee Chats? We often have a hard time getting enough people to join  
**\<cwcopz>** Coffee Chats?  
**\<cryptochangements>** I think that it is an awesome idea. But I don't think enough people know about them  
**\<rehrar>** these things start and gain momentum slowly  
**\<sgp>** https://www.youtube.com/watch?v=EcKgnjqSXpA&list=PLsSYUeVwrHBnzudI3KSSW4aVa_4Ty1Kew  
**\<cryptochangements>** they usually have great discussion, but have a turnout of like 60 viewers  
**\<Guest93332>** thats the problem. we need more commuication penetration in all activities  
**\<rehrar>** keep a schedule, and they will grow. imo, even if we help bring just one person closer to the vision, it was well worth it :D  
**\<cwcopz>** Thanks for the link. Didnt know that this exists.  
**\<sgp>** Since the next one is on the 20, how should I promote it differently to attract more viewers?  
**\<cryptochangements>** sgp: the coffechat seems like something r/cryptocurrency would go nuts over  
**\<Guest93332>** you should use all officials account with social media  
**\<sarang>** Remind me, are they advertised on places like r/monero or r/xmrtrader?  
**\<sgp>** I typically post on /r/monero yes  
**\<sgp>** I haven't posted about it in /r/xmrtrader before  
**\<ErCiccione>** sgp: i think it needs some more scheduled advertising, like 24 hours earlier and then a couple of hours before starting. And a massive use of social accounts a couple of hours before the chat  
**\<cryptochangements>** Personally, i think the coffechats are something that should be advertised everywhere  
**\<rehrar>** sarang: you should join up on this one  
**\<sgp>** We had the most views when fluffypony posted it on his Twitter  
**\<sarang>** Sure, I'd be glad to  
**\<Guest93332>** or the official @monerocurrency account  
**\<cryptochangements>** who is in the lineup for this next one?  
**\<sarang>** Oh yeah, an fp twitter post would be great  
**\<sgp>** @cryptochangements any active community member who wants to participate can  
**\<cryptochangements>** ok cool  
**\<rehrar>** the more the better. We just hang out and be losers together  
**\<cryptochangements>** sounds lit 👍  
**\<sgp>** Ok, I'll try to make sure the event has more 24 hr exposure  
**\<Guest93332>** who controls the official accounts? its all about being present and penetration. Especially in crypto - you have to be heard  
**\<sgp>** How much of the time should be dedicated to audience Q&A?  
**\<ordtrogen>** What about inviting a known guest  
**\<cryptochangements>** tbh i think it should just depend on audience turnout/how many questions people actually have  
**\<ordtrogen>** Like brighton36  
**\<sgp>** @ordtrogen I'm open to that idea  
**\<ordtrogen>** Or someone else favorable to our cause  
**\<rehrar>** alright, I gotta split  
**\<rehrar>** talk to you guys later :)  
**\<ErCiccione>** @sgp: i'd say as much as it takes, once you understand the discussion is not "spicy" anymore. I also like @ordtrogen idea, but i think sarang's presence will catch a lot of interest, if advertised before  
**\<sarang>** aw shucks  
**\<sarang>** I'm just a simple guy with a simple message  
**\<sarang>** https://media.giphy.com/media/A7WK7FddTxKfu/giphy.gif  
**\<ordtrogen>** my idea came just now. no thinking thru  
**\<sgp>** Thanks for the input everyone. I'd like to leverage this as much as possible  
**\<ordtrogen>** but maybe that person would bring part of her/his audience along?  
**\<sgp>** @ordtrogen let's come up with a list of possible people after the meeting  
**\<ordtrogen>** ok  
**\<sgp>** I imagine they would bring some of their audience on, yes  
**\<ErCiccione>** sarang: you are a monero research lab master! deal with it! lol for the gif  
**\<sgp>** 7. Confirm next meeting date/time  
**\<sgp>** The next community meeting will be two weeks from today on 20 January. The next Coffee Chat will be next week on 13 January: https://github.com/monero-project/meta/issues/156  
**\<sgp>** 8. Conclusion  
**\<sgp>** That’s all! Thanks for attending this Monero Community meeting, and we hope to see you on /r/MoneroCommunity and #monero-community. Take care, and know that change starts with YOU.  
**\<sgp>** I hope eveyone was ok with a longer meeting this time. People were open to it in previous meetings  
**\<sarang>** sgp: please send me a reminder for the chat =p  