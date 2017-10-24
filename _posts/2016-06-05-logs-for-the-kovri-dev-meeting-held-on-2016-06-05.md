---
layout: post
title: Logs for the Kovri Dev Meeting Held on 2016-06-05
summary: I2P StackExchange update, website content, Coverity issues, GNU social
tags: [dev diaries, i2p, crypto]
author: dEBRUYNE / fluffypony
---

### Logs

**\<fluffypony>** ok so I think let's move on to Kovri - anonimal, the floor is yours  
**\<meeting-bot> [anonimal]** Thanks fluffypony, I need about 30-60 seconds.  
**\<fluffypony>** ok whilst you're doing that, there are two committers to the Monero StackExchange proposal that are just shy of 200+ rep on the Bitcoin StackExchange  
**\<fluffypony>** so they need some upvotes if you have rep on the BTC StackExchange  
**\<meeting-bot> [anonimal]** https://github.com/monero-project/kovri/issues/179  
**\<meeting-bot> [anonimal]** 17:00 (UTC)  
**\<fluffypony>** http://bitcoin.stackexchange.com/users/35760/dontmindme  
**\<meeting-bot> [anonimal]** 1. Follow up on I2P StackExchange  
**\<meeting-bot> [anonimal]** 2. Follow up on fluffypony's website content review  
**\<fluffypony>** http://bitcoin.stackexchange.com/users/35975/jun-li  
**\<meeting-bot> [anonimal]** 3. Follow up on Coverity  
**\<meeting-bot> [anonimal]** 4. Review assigned open tickets: status, code ideas (if applicable), etc.  
**\<meeting-bot> [anonimal]** 5. Any additional meeting items  
**\<meeting-bot> [anonimal]** 6. Confirm next meeting date/time  
**\<meeting-bot> [anonimal]** Point 1. is open to all.  
**\<fluffypony>** i2p StackExchange is doing well: http://area51.stackexchange.com/proposals/99297/i2p  
**\<meeting-bot> [anonimal]** Where do we stand?  
**\<fluffypony>** 29% committed  
**\<fluffypony>** 34/100 committers with 200+ offsite rep  
**\<fluffypony>** but considering the small number of total committers (78/100) that's pretty impressive  
**\<moneromooo>** I will have 200 tomorrow, probably. 1% more.  
**\<fluffypony>** I would like to encourage anyone that has committed to the i2p and Monero proposals to please try drum up 200+ rep on one of the other Stacks by asking and answering questions  
**\<meeting-bot> [anonimal]** Good, I was about to ask what else we could do.  
**\<meeting-bot> [anonimal]** I'll start banging.  
**\<fluffypony>** it's REALLY easy to get that much rep, the fastest way I've found is answering questions  
**\<fluffypony>** but pick ONE StackExchange, as the rep isn't cumulative across Stacks  
**\<meeting-bot> [anonimal]** Ok, anything else for point 1?  
**\<fluffypony>** yes just a small thing  
**\<xmrpromotions>** How do you feel about reaching out to leaders in the Tor community to request support? Some may be curious about I2P and active Tor SE users will really help us with activity requirements after launch  
**\<fluffypony>** the deep web StackExchange proposal has failed due to lack of follow-through on commitments, so the i2p one is more necessary than before  
**\<meeting-bot> [anonimal]** Hmm, tricky.  
**\<fluffypony>** xmrpromotions: that's certainly a possibility, but the Tor community is going through a bit of a difficult time at the moment, it may be prudent for us to wait it out  
**\<meeting-bot> [anonimal]** How do I say this quickly,  
**\<fluffypony>** anonimal: by typing fast? :-P  
**\<meeting-bot> [anonimal]** I have a strong impression that Tor does not care about I2P.  
**\<meeting-bot> [anonimal]** Nothing personal, just different technologies.  
**\<xmrpromotions>** If you are talking about the applebaum allegation I agree the timing is not great. I plan to largely ignore that news for now since the evidence is not even public  
**\<meeting-bot> [anonimal]** I agree with fluffypony for now.  
**\<meeting-bot> [anonimal]** I'd like to come back to that idea though in the future.  
**\<xmrpromotions>** Okay. I wont make any aggressive outreach efforts to the Tor community at this time  
**\<meeting-bot> [anonimal]** Ok, anything else on 1.?  
**\<fluffypony>** nothing from my side  
**\<meeting-bot> [anonimal]** 2. fluffypony, last meeting we talked about website content,  
**\<meeting-bot> [anonimal]** I sent a draft. Status?  
**\<fluffypony>** I have a content dump from anonimal - I've started with a page to the Monero site, and hope to have it PR'd by next weekend  
**\<fluffypony>** I go to Berlin on Tue and then back to Amsterdam on Wed, and then back to Johannesburg on Thur, so there will be plenty of bored-in-the-plane opportunities to work on it  
**\<meeting-bot> [anonimal]** Ok, I hope to get a chance to review anything because what I sent really was a 'dump' ;)  
**\<fluffypony>** oh yeah definitely, plus you can always PR changes to the site, we merge everything there :-P  
**\<meeting-bot> [anonimal]** lol  
**\<meeting-bot> [anonimal]** Ok, anything else on 2.?  
**\<xmrpromotions>** does 2 include gnu social or just the website?  
**\<meeting-bot> [anonimal]** Free-for-all.  
**\<meeting-bot> [anonimal]** xmrpromotions: any updates on gnu social?  
**\<xmrpromotions>** Well I read up on GNU Social and really like the idea (I had not heard of it before) but I am worried about the time commitment it will involve to do well  
**\<meeting-bot> [anonimal]** Could it be done 'good enough'?  
**\<xmrpromotions>** Any suggestions for volunteers eager to help with that sort of thing that have extra free time right now  
**\<meeting-bot> [anonimal]** I can help when the time comes.  
**\<xmrpromotions>** I guess it depends what good enough means. I have never used GNU software but assume it will require many contributors providing good content in order to attract many users  
**\<meeting-bot> [anonimal]** I've ran an instance in the past (personal, not public).  
**\<fluffypony>** dEBRUYNE: is anyone on the social media team available to assist ?  
**\<merkaba>** what is it about? I have some free time but I am not sure what this is  
**\<merkaba>** if I have the skills required..  
**\<fluffypony>** merkaba: oh I have a special job for you if you want to flex your Ruby skills ;)  
**\<merkaba>** btw I am stefioan from reddit  
**\<merkaba>** cool  
**\<dEBRUYNE>** fluffypony: I am running out of free time currently, so hopefully someone else could pick it up (e.g. xmrpromotions and/or merkaba)  
**\<nobbynoob>** what exactly is needed as help in the gnu social thing?  
**\<meeting-bot> * anonimal** was just about to ask that  
**\<xmrpromotions>** People to provide quality content and invite users is needed the most IMHO  
**\<xmrpromotions>** I am not an expert and had not heard of it until 2 weeks ago  
**\<nobbynoob>** so no coding or stuff, but posting content about xmr, its development etc?  
**\<xmrpromotions>** here is the example someone gave me: https://quitter.se/social details here: https://gnu.io/social/about/  
**\<meeting-bot> [anonimal]** Can twitter posts be cross-posted?  
**\<xmrpromotions>** we are talking about Kovri now but yes we could use it for Monero too  
**\<fluffypony>** maybe not automatically, anonimal, but certainly manually  
**\<meeting-bot> [anonimal]** "If you build it, they will come".  
**\<meeting-bot> [anonimal]** Why not baby steps for now: get it up and running, and we'll get on it and start using it?  
**\<fluffypony>** agreed  
**\<meeting-bot> [anonimal]** xmrpromotions: ETA on when it can be physically online?  
**\<fluffypony>** xmrpromotions: shout if you need me to host it on one of the Monero infrastructure servers  
**\<meeting-bot> * anonimal** side-channels fluffypony for preparations of 3. https://scan.coverity.com/projects/monero-project-kovri?tab=overview  
**\<xmrpromotions>** I have not made any efforts to do that yet but my impression is pretty quick. All I did since last meeting was read the basic description of it and look at a few examples of how it has been deployed  
**\<meeting-bot> [anonimal]** Can it be up by next meeting?  
**\<xmrpromotions>** I think that is realistic.  
**\<xmrpromotions>** It sounds like others will be willing to help provide content.  
**\<meeting-bot> [anonimal]** Excellent.  
**\<meeting-bot> [anonimal]** I'll start using it once its up.  
**\<meeting-bot> [anonimal]** Anything else on point 2.?  
**\<fluffypony>** nein  
**\<meeting-bot> [anonimal]** Ok moving on to 3.  
**\<meeting-bot> [anonimal]** "No builds were successfully analyzed yet."  
**\<meeting-bot> [anonimal]** So, it looks like more Coverity setup issues.  
**\<xmrpromotions>** thank you. I just dont want to spread myself too thin. The Deep web SE shutting down concerned me. We need to learn from that and ensure I2P and Monero SE metrics are all continually high enough during private beta  
**\<fluffypony>** anonimal: argh. it's like they're trying to irritate me.  
**\<meeting-bot> [anonimal]** xmrpromotions: good point, I will work on my rep.  
**\<meeting-bot> [anonimal]** fluffypony: seriously, I have no idea why its so problematic.  
**\<fluffypony>** anonimal did you see the hello world example ?  
**\<meeting-bot> [anonimal]** Directions were followed to the T.  
**\<meeting-bot> [anonimal]** fluffypony: Maybe, a long while ago. Link?  
**\<fluffypony>** https://github.com/daksheshvyas/MyHelloWorld/  
**\<fluffypony>** https://travis-ci.org/daksheshvyas/MyHelloWorld/  
**\<fluffypony>** maybe check if there's not something they do there that we haven't done  
**\<meeting-bot> [anonimal]** I remember those.  
**\<meeting-bot> [anonimal]** Nope, our config checks out AFAICT.  
**\<fluffypony>** https://scan.coverity.com/faq#frequency  
**\<fluffypony>** we're way under teh frequency limits  
**\<meeting-bot> [anonimal]** Is yrashk still on that side? Maybe he uses coverity/travis-ci?  
**\<fluffypony>** he's already hopped offline afaik  
**\<fluffypony>** it's nearly 1am his time  
**\<meeting-bot> [anonimal]** I've also done several merges to branch coverity_scan to 'trigger' it, but to no avail.  
**\<meeting-bot> [anonimal]** fluffypony: Any ideas on solutions? They really don't make it easy to contact them for troubleshooting.  
**\<fluffypony>** hmmm anonimal  
**\<fluffypony>** "You'll need to manually fill in your project specifics, including build_command_prepend and build_command."  
**\<fluffypony>** we don't have the build_command_prepend  
**\<fluffypony>** could that be a requirement ?  
**\<meeting-bot> [anonimal]** I highly doubt it.  
**\<fluffypony>** nothing would surprise me at this stage :-P  
**\<tewinget>** saw my mention, will be available in...10 min or so if anyone needs me or wants my input on something.  Otherwise, hello everyone and enjoy the meeting or whatever.  
**\<fluffypony>** anonimal: so "branch_pattern: coverity_scan" means it'll only build changes to the branch named coverity_scan, noto the master branch  
**\<meeting-bot> [anonimal]** Yes.  
**\<fluffypony>** ok  
**\<meeting-bot> [anonimal]** And last merge into coverity_scan was May 29th.  
**\<fluffypony>** maybe we should just include a build_command_prepend  
**\<fluffypony>** something like cd build && make clean  
**\<meeting-bot> [anonimal]** But what would we put? exporting variables?  
**\<fluffypony>** the example has:  
**\<fluffypony>**     build_command_prepend: "./configure; make clean"  
**\<fluffypony>**     build_command:   "make -j 4"  
**\<fluffypony>** maybe add a && cd ..  
**\<meeting-bot> [anonimal]** Which doesn't make sense if the VM is fresh before every build.  
**\<meeting-bot> [anonimal]** The build_command is sound, it would literally be a matter of splitting that up.  
**\<fluffypony>** anonimal: yet the example has "make clean", so maybe they don't have a fresh VM each time ?  
**\<meeting-bot> [anonimal]** so build_command_prepend: export CC=gcc-${GCC_VERSION} CXX=g++-${GCC_VERSION} && cd build  
**\<fluffypony>** that could work if we're 100% sure it's a fresh VM  
**\<meeting-bot> [anonimal]** It is. You can see it in all the travis build logs.  
**\<fluffypony>** and Coverity runs on the Travis VM right ?  
**\<meeting-bot> [anonimal]** Apparently?  
**\<meeting-bot> [anonimal]** So, we could keep tinkering and hope for a result or email scan-admin@coverity.com  
**\<meeting-bot> [anonimal]** Thoughts?  
**\<merkaba>** guys I am leaving. if I can be help on any task feel free to contact me on reddit (/u/stefioan)  
**\<fluffypony>** merkaba: will do, thanks  
**\<meeting-bot> [anonimal]** Thanks merkaba.  
**\<merkaba>** you are welcome  
**\<fluffypony>** anonimal: I think let's try including a build_command_prepend, failing that I'll have to try reach out to Coverity  
**\<fluffypony>** seeing as how they were so helpful last time  
**\<fluffypony>** :-P  
**\<xmrpromotions>** thanks merkaba. lets talk more about gnu social later  
**\<meeting-bot> [anonimal]** merkaba:  
**\<meeting-bot> [anonimal]** Isn't diaspora written in ruby?  
**\<meeting-bot> * anonimal** checks  
**\<fluffypony>** anonimal: he already left unfortunately  
**\<meeting-bot> [anonimal]** xmrpromotions: if you see them again, https://github.com/diaspora/diaspora  
**\<meeting-bot> [anonimal]** Ok fluffypony, I'll make the change and we'll see what happens.  
**\<meeting-bot> [anonimal]** Anything else on 3.?  
**\<fluffypony>** nope  
**\<meeting-bot> [anonimal]** Alright, 4. Review assigned open tickets: status, code ideas (if applicable), etc.  
**\<meeting-bot> * anonimal** quickly pulls up  
**\<meeting-bot> [anonimal]** Ok, 4 new tickets opened since last meeting. All by yours truly.  
**\<meeting-bot> [anonimal]** Joyous #187 and #191.  
**\<meeting-bot> [anonimal]** Would any of the talented Monero devs be interested in diving into Kovri?  
**\<meeting-bot> [anonimal]** I think those two tickets would be a great intro into the project (not being sarcastic).  
**\<fluffypony>** lol @ 191  
**\<fluffypony>** "but that is not the real problem"  
**\<meeting-bot> [anonimal]** lol  
**\<xmrpromotions>** https://diasporafoundation.org/ looks interesting! Should we consider that as an alternative to GNU social?  
**\<xmrpromotions>** In some ways it sounds better, but does a lack of Windows support hurt us significantly? https://wiki.diasporafoundation.org/Installation  
**\<meeting-bot> [anonimal]** xmrpromotions: I personally wouldn't as its harder to maintain and I don't believe it is anonymity friendly (if we host a pod)  
**\<meeting-bot> [anonimal]** Diaspora simply crossed my mind since that ruby dev popped in.  
**\<meeting-bot> [anonimal]** Anyway, re: 4.,  
**\<xmrpromotions>** okay. fair enough. I will keeped focused on gu social then  
**\<xmrpromotions>** gnu  
**\<meeting-bot> [anonimal]** fluffypony: I can't see who is on that side. Are any c++ devs online?  
**\<fluffypony>** hmmm  
**\<fluffypony>** not sure if any of them are in front of their keyboards atm, let's leave that open-ended  
**\<fluffypony>** if anyone wants to do an FFS proposal for it that's a great option  
**\<fluffypony>** since it's easily measurable and challenging in a fun way  
**\<meeting-bot> [anonimal]** I'm leaning towards a proposal or two.  
**\<meeting-bot> [anonimal]** Ok, I'll see what I can propose before the next meeting.  
**\<meeting-bot> [anonimal]** The tickets just keep piling up, help would be nice.  
**\<meeting-bot> [anonimal]** Actually, more than nice.  
**\<fluffypony>** yeah we're definitely feeling a bit shy on warm bodies on both fronts, will have to shake the ol' C++ cage and see who falls out  
**\<meeting-bot> [anonimal]** At some point we'll have to have a meeting dedicated to dev awareness.  
**\<meeting-bot> [anonimal]** I understand. I see everyone doing their best so what else could we ask for.  
**\<fluffypony>** yup yup  
**\<meeting-bot> [anonimal]** Anything else on 4.?  
**\<fluffypony>** nope  
**\<meeting-bot> [anonimal]** fluffypony: Do you have any formal ideas on #159?  
**\<meeting-bot> [anonimal]** s/ideas/strategies  
**\<fluffypony>** I had a meeting with Richard Kohl from Bitcoin Wednesday and it came up, I need to think through some of his suggestions and then we can discuss it  
**\<tewinget>** anonimal: what about C++ devs online?  
**\<tewinget>** fluffypony: what's meeting-bot connecting to?  
**\<fluffypony>** tewinget: irc2p  
**\<fluffypony>** most C++ devs online want full time work, or overstate their abilities  
**\<meeting-bot>** [anonimal] tewinget: ^  
**\<meeting-bot>** [anonimal] Or are not really interested but want a payout.  
**\<fluffypony>** yup  
**\<meeting-bot> [anonimal]** But everyone isn't bad.  
**\<meeting-bot> [anonimal]** But we also don't have enough awareness yet, but we're working on that.  
**\<tewinget>** Hey, I'm only like 2 out of 3 there!  
**\<fluffypony>** yesh  
**\<fluffypony>** we'll get there  
**\<meeting-bot>** [anonimal] tewinget have you played with Kovri yet?  
**\<tewinget>** anonimal: I can't even remember off the top of my head what Kovri is...  
**\* tewinget** does a quick google search  
**\<tewinget>** oh, that.  Not yet, why?  
**\<meeting-bot> [anonimal]** lol because that's what the meeting is for :)  
**\<tewinget>** I just got up not long ago, haven't had time to read all the scrollback  
**\<tewinget>** :)  
**\<meeting-bot> [anonimal]** Alright, moving onto 5. Any additional meeting items  
**\<meeting-bot> * anonimal** thinking  
**\<fluffypony>** nothing off the top of my head  
**\<meeting-bot> [anonimal]** Me neither. I'm out of energy but I feel like there was more to discuss.  
**\<fluffypony>** we'll push stuff forward, we can discuss anything urgent in the week, else we let it fall to the next meeting  
**\<fluffypony>** which will be the 19th, by my calendar  
**\<meeting-bot> [anonimal]** Ok. I was hoping to talk more code but devs seem to be away.  
**\<meeting-bot> [anonimal]** C++ nerd stuff. Boost enthusiasts.  
**\<meeting-bot> [anonimal]** alla Monero.  
**\<fluffypony>** let's flip it around for next meeting and do that first  
**\<meeting-bot> [anonimal]** Anyway, next time then or during the week.  
**\<meeting-bot> [anonimal]** Ok, sounds great.  
**\<meeting-bot> [anonimal]** So point 6.,  
**\<meeting-bot> [anonimal]** June 19th? 17:00 UTC?  
**\<xmrpromotions>** Do you think many people in this group would be interested in I2P or kovri? http://area51.stackexchange.com/proposals/82234/open-source  
**\<fluffypony>** anonimal: yup  
**\<tewinget>** anonimal: if there's anything specific you can point to as far as C++ goes you can ping me  
**\<fluffypony>** xmrpromotions: hard to canvas on an SE propsal  
**\<xmrpromotions>** they could use more activity right now in public beta. If we encourage monero and i2p users to participate in their open beta maybe some of them will support us  
**\<xmrpromotions>** they lack of ability to direct message makes it harder but some leaders use their real names  
**\<fluffypony>** ok meeting is over, killing meeting-bot  