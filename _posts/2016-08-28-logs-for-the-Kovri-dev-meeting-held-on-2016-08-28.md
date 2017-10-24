---
layout: post
title: Logs for the Kovri Dev Meeting Held on 2016-08-28
summary: Brief review of what has been completed since last meeting, Kovri Logo, code & open tickets discussion
tags: [dev diaries, i2p, crypto]
author: dEBRUYNE / fluffypony
---

### Logs

**\<fluffypony>** anonimal: all yours  
**\<tewinget>** in the meantime, for those not interested (or relevant to) the kovri meeting, anyone wanna help me test the zmq wallet<->daemon interactions?  
**\<meeting-bot> [anonimal]** Proposed meeting items:  
**\<tewinget>** oh  
**\<tewinget>** shit  
**\<meeting-bot> [anonimal]** 1. Greetings  
**\<meeting-bot> [anonimal]** 2. Brief review of what's been completed since the previous meeting  
**\<meeting-bot> [anonimal]** 3. Code + ticket discussion / Q & A  
**\<meeting-bot> [anonimal]** 4. Discuss #282  
**\<meeting-bot> [anonimal]** 5. Closing #226  
**\<meeting-bot> [anonimal]** 6. Closing #105  
**\<meeting-bot> [anonimal]** 7. Closing #46  
**\<meeting-bot> [anonimal]** 8. Closing #27  
**\<meeting-bot> [anonimal]** 9. Any additional meeting items  
**\<meeting-bot> [anonimal]** 10. Confirm next meeting date/time  
**\<meeting-bot> [anonimal]** btw, twinget, you are \*all\* relevant to the meeting and you \*ALL\* should be interested.  
**\<meeting-bot> [anonimal]** Its that kind of attitude that is preventable advancing kovri development within monero.  
**\<fluffypony>>** +100  
**\<meeting-bot> [anonimal]** 1. Greetings  
**\<meeting-bot> [anonimal]** Hi, I'm here.  
**\<meeting-bot> [fluffypony]** me three  
**\<tewinget>>** anonimal (I'm not relevant in the sense that I have no context, need to learn more about it :))  
**\<i2p-relay> {-solmar}>** we need all the help we can get  
**\<meeting-bot> [fluffypony]** EinMByte ?  
**\<ArticMine>>** I will stay for another 20 min then I have to leave.  
**\<meeting-bot> [fluffypony]** tks ArticMine  
**\<meeting-bot> [anonimal]** Hi ArticMine.  
**\<ArticMine>>** Hi  
**\<meeting-bot> [anonimal]** Hi solmar, EinMByte, fluffypony.  
**\<meeting-bot> [anonimal]** 2. Brief review of what's been completed since the previous meeting  
**\<meeting-bot> [anonimal]** $ git checkout master && git log --pretty=oneline --no-merges --since=2016-07-31 | wc -l  
**\<meeting-bot> [anonimal]** 55  
**\<meeting-bot> [anonimal]** - Lots of build work  
**\<meeting-bot> [anonimal]** - Reinstate FreeBSD build  
**\<meeting-bot> [anonimal]** - Reinstate Clang support  
**\<meeting-bot> [anonimal]** - New config features  
**\<meeting-bot> [anonimal]** - New logging features  
**\<meeting-bot> [anonimal]** - Implemented SNI (part of cpp-netlib)  
**\<meeting-bot> [anonimal]** I'm doing work in branch fix-305, not detailed here.  
**\<meeting-bot> [anonimal]** We have a new member onbard, 'solmar'. guzzi is back with us too.  
**\<meeting-bot> [anonimal]** rakhimov is becoming more active, all great.  
**\<meeting-bot> [anonimal]** I hope EinMByte's travels have been well and has returned.  
**\<meeting-bot> [solmar]** hey all ;)  
**\<meeting-bot> [anonimal]** Did I miss anything for point 2.?  
**\<fluffypony>** well  
**\<fluffypony>** is it worth discussing #325 now?  
**\<meeting-bot> [solmar]** the quality assurance document is note worthy but i think you got everything  
**\<meeting-bot> [anonimal]** fluffypony: no not yet.  
**\<fluffypony>** ok  
**\<meeting-bot> [anonimal]** solmar: thanks, good point. Yes solmar and I reworked #58 and introduced it into a tangible guide.  
**\<meeting-bot> [anonimal]** Anything on 2. before moving onto 3.?  
**\<fluffypony>** nothing more on 2  
**\<meeting-bot> [anonimal]** Before 3., did solmar want to formally introduce themself?  
**\<meeting-bot> [solmar]** sure i can quickly introduce  
**\<meeting-bot> [solmar]** you guys may have seen me kicking around the various monero-related channels in the past few weeks. monero has peaked great interest in me and moving forward will be quite powerful  
**\<meeting-bot> [i2p-relay] {-moneromooo}** Welcome :)  
**\<meeting-bot> [solmar]** i am switching focus to kovri because of how unmanned the team is but in the next week i would gladly help test ringct code on the testnet  
**\<meeting-bot> [fluffypony]** +1  
**\<tewinget>** s/peaked/piqued/ <-- fuck English sometimes  
**\<meeting-bot> [solmar]** in the meantime i will continue to learn the kovri code to hopefully in the near future begin to make tangible contributions to the code  
**\<meeting-bot> [fluffypony]** awesome, everyone should dabble in both  
**\<meeting-bot> [solmar]** any interest and help with kovri is greatly appreciated  
**\<meeting-bot> [solmar]** i think we can move along to 3. now thanks anominal ;)  
**\<meeting-bot> [anonimal]** Alright, thanks solmar.  
**\<meeting-bot> [anonimal]** 3. Code + ticket discussion / Q & A  
**\<meeting-bot> [anonimal]** I'll open  
**\<meeting-bot> [fluffypony]** some of the design decisions in Kovri were influenced by Monero, so no getting away from it, Monero devs ;)  
**\<meeting-bot> [anonimal]** Question: WHEN WILL MONERO DEVS START TAKING KOVRI SERIOUSLY?  
**\<meeting-bot> [anonimal]** 10 months in now since our november 1st meeting,  
**\<meeting-bot> [i2p-relay] {-moneromooo}** Define "taking seriously" ? Send patches ?  
**\<tewinget>** anonimal: I take it just as seriously as, say, RingCT, I just haven't had/taken the time to dig into either yet :)  
**\<meeting-bot> [anonimal]** As a whole, if I could quantify contributions, I'd say kovri is getting ~5% attention to what bitmonero and ecosystem is getting.  
**\<meeting-bot> [anonimal]** moneromooo: anything.  
**\<meeting-bot> [i2p-relay] {-moneromooo}** OK, fair enough. A new codebase appearing like that is going to be not so easy to jump back and forth for coders. But I hear your point.  
**\<meeting-bot> [i2p-relay] {-moneromooo}** I will try to get into kovri a bit once rct is all done.  
**\<meeting-bot> [anonimal]** I understand all the arguments, and I know what sacrifices would need to be made, so I question when and if they will be made.  
**\<meeting-bot> [anonimal]** Thanks moneromooo.  
**\<meeting-bot> [fluffypony]** the easiest way to get hyc involved it for us to use LMDB for storage of something :-P  
**\<meeting-bot> [i2p-relay] {-moneromooo}** (and feel free to remind me of it if I don't :P)  
**\<meeting-bot> [i2p-relay] {-moneromooo}** Nah, use liblber for network.  
**\<meeting-bot> [anonimal]** fluffypony: this goes for you too, as we'll see with the remaining agenda items.  
**\<meeting-bot> [i2p-relay] {-moneromooo}** Make us fast and secure comms!  
**\<tewinget>** fluffypony: in the same way as with hyc, the easiest way to get me involved is something needing refactored >\_>  
**\<meeting-bot> [anonimal]** Anyone else over there have a response beside moneromooo and tewinget?  
**\<meeting-bot> [anonimal]** If not, we should move onto other Q & A.  
**\<meeting-bot> [fluffypony]** is this still the ticket discussion part?  
**\<meeting-bot> [anonimal]** Point 3.  
**\<meeting-bot> [fluffypony]** yes - but I mean ticket discussion is part of Q&A or can I bring up a ticket now?  
**\<meeting-bot> [anonimal]** I have library questions I would want to debate with EinMByte but I don't think he's around.  
**\<meeting-bot> [anonimal]** Sure but that's least priority at the moment.  
**\<meeting-bot> [anonimal]** And should be 9.  
**\<meeting-bot> [anonimal]** I'd rather move onto 4. if no one has any questions.  
**\<meeting-bot> [fluffypony]** kk  
**\<meeting-bot> [anonimal]** 4. Discuss #282  
**\<meeting-bot> [fluffypony]** ok so  
**\<meeting-bot> [i2p-relay] {-moneromooo}** There was a designer guy asking whether help was wanted. He seemed to be after paid work though.  
**\<meeting-bot> [fluffypony]** with the Monero logo we used 99designs  
**\<meeting-bot> [i2p-relay] {-moneromooo}** eherdesign in #monero  
**\<meeting-bot> [fluffypony]** moneromooo: I looked at his stuff, it wasn't mind-blowing  
**\<meeting-bot> [fluffypony]** I'd like to move to use 99designs again  
**\<meeting-bot> [fluffypony]** ref: https://99designs.com/logo-design/contests/monero-mro-cryptocurrency-logo-design-contest-382486  
**\<meeting-bot> [fluffypony]** I'm happy to put the $500 up for that, and then use the FFS to get it back  
**\<meeting-bot> [fluffypony]** unless anyone feel we must go for a higher 99designs reward  
**\<othe>** i would also sponsor that  
**\<meeting-bot> [i2p-relay] {-moneromooo}** * hopes it won't be some shady looking concept  
**\<meeting-bot> [i2p-relay] {-ArticMine}** It worked very well for Monero so I say yeas with the same package  
**\<meeting-bot> [i2p-relay] {-ArticMine}** yes  
**\<meeting-bot> [solmar]** maidsafe also appears to be having success with 99designs so i think it is a good idea  
**\<meeting-bot> [fluffypony]** ok - I'll set that up now - do we have any ideas as to what we want to convey?  
**\<meeting-bot> [i2p-relay] {-ArticMine}** Well I have to leave now  
**\<meeting-bot> [fluffypony]** do we want it to be inspired by the Monero logo, like the MRL logo is?  
**\<meeting-bot> [i2p-relay] {-moneromooo}** The essential qualities of garlic.  
**\<meeting-bot> [fluffypony]** (ref: https://lab.getmonero.org/logo.png)  
**\<meeting-bot> [i2p-relay] {-moneromooo}** ^ great logo  
**\<groeg>** (noob here ...) A podcast I follow have a promo code för 99designs. Interesting?  
**\<meeting-bot> [fluffypony]** groeg: yes plz, can you PM it to me?  
**\<cjd>** you'll want to pm it to fluffypony, not to the bot  
**\<cjd>** he's in this irc  
**\<meeting-bot> [i2p-relay] {-moneromooo}** Actually... you could rotate the Monero logo 90% clockwise and arrange colors a bit so it looks like a K. With kind of a hidden M.  
**\<groeg>** newbie using IRC, looking up how to pm ...  
**\<meeting-bot> [i2p-relay] {-moneromooo}** groeg: /query NICKHERE  
**\<meeting-bot> [fluffypony]** thanks groeg, got it  
**\<meeting-bot> [solmar]** conveying a "veil"-ish esque style to it could be interesting, since kovri means veil in esperanto afaik  
**\<meeting-bot> [i2p-relay] {-moneromooo}** 90 degrees, not %, of course -\_-  
**\<meeting-bot> [fluffypony]** solmar that's pretty much what I was thinking, something along the lines of a network, but it's private  
**\<meeting-bot> [fluffypony]** or something  
**\<meeting-bot> [fluffypony]** doesn't have to be a "veil" in the literal sense  
**\<meeting-bot> [solmar]** ya  
**\<meeting-bot> [solmar]** i agree  
**\<meeting-bot> [solmar]** ya exactly  
**\<meeting-bot> [anonimal]** Sorry, unexpected AFK emergency, unavoidable.  
**\<meeting-bot> * anonimal** reading  
**\<meeting-bot> [anonimal]** moneromooo: cool idea, maybe someone can run with that.  
**\<meeting-bot> [fluffypony]** anonimal: the rotated K thing?  
**\<meeting-bot> [fluffypony]** I can suggest that in the 99designs description  
**\<meeting-bot> [anonimal]** Yeah, but maybe not literally, just an artistic motive I guess.  
**\<meeting-bot> [fluffypony]** yeah  
**\<meeting-bot> [anonimal]** But also garlic is a good point as solmar pointed out.  
**\<meeting-bot> [fluffypony]** isn't garlic very Tor?  
**\<meeting-bot> [anonimal]** So a rotated K inside a garlic clove  
**\<meeting-bot> [anonimal]** No, they're onion.  
**\<meeting-bot> [fluffypony]** oh yes  
**\<meeting-bot> [fluffypony]** my bad  
**\<meeting-bot> [anonimal]** onion router similar to garlic routing.  
**\<meeting-bot> [anonimal]** Meh, its practically the same vegetable.  
**\<meeting-bot> [fluffypony]** lo  
**\<meeting-bot> [fluffypony]** lol  
**\<meeting-bot> [fluffypony]** we should go wild and create spinach routing  
**\<meeting-bot> [anonimal]** lol  
**\<meeting-bot> [anonimal]** "Kovri provides essential iron and vitamins"  
**\<meeting-bot> [fluffypony]** http://paulkieschedesign.com/blog/wp-content/uploads/2011/12/shandong-logo.jpg <- perfect  
**\<meeting-bot> [anonimal]** "Eat kovri today"  
**\<meeting-bot> [fluffypony]** the name, not the logo  
**\<meeting-bot> [fluffypony]** so for a previous April 1 we renamed Monero to DarkFlarb, so I move that for next year April 1 we rename Kovri to Shandong  
**\<meeting-bot> [fluffypony]** ShanDong  
**\<meeting-bot> [anonimal]** The ShanDong I2P Router project... hmm...  
**\<meeting-bot> [anonimal]** fluffypony: how do we keep track of #282?  
**\<meeting-bot> [fluffypony]** lol  
**\<meeting-bot> [fluffypony]** anonimal: othe and I will set it up and update in-ticket  
**\<meeting-bot> [anonimal]** fluffypony: thanks.  
**\<meeting-bot> [anonimal]** Anything else on #282?  
**\<meeting-bot> [fluffypony]** nada  
**\<meeting-bot> [anonimal]** If we use a dog somewhere in there, and Shandong, we should go with a pug.  
**\<groeg>** shandong = 山东 = mountain east  
**\<meeting-bot> [fluffypony]** TIL  
**\<meeting-bot> [anonimal]** The eastside rugged pug.  
**\<groeg>** (literal meaning of the characters)  
**\<meeting-bot> [fluffypony]** east mountain pugs unite  
**\<meeting-bot> * anonimal** see dog flip gang symbol with fingers  
**\<meeting-bot> [fluffypony]** DogeI2P  
**\<meeting-bot> [anonimal]** Here we go, lol  
**\<meeting-bot> [anonimal]** Ok, 5. Closing #226  
**\<meeting-bot> [anonimal]** This is useful when: 1) i2p-relay is down 2) slack is not available or people aren't signed up nor want to sign up  
**\<meeting-bot> [anonimal]** I've registered the channels and am idling.  
**\<meeting-bot> [fluffypony]** ok so  
**\<meeting-bot> [fluffypony]** are we happy running this under the core relay and not the community relay?  
**\<meeting-bot> [anonimal]** By community you mean the one in #monero/#monero-dev?  
**\<meeting-bot> [fluffypony]** the community one is the one that needmoney90 runs, to Slack / Telegram etc.  
**\<meeting-bot> [fluffypony]** the core one is i2p-relay  
**\<meeting-bot> [fluffypony]** anonimal: is there a #tahoe-lafs on OFTC?  
**\<meeting-bot> [fluffypony]** because I don't want to take tahoe-lafs out the relay list, necessarily  
**\<meeting-bot> [anonimal]** fluffypony: yes, with 4 people, no channel topic. Doesn't look official.  
**\<meeting-bot> [fluffypony]** ok then I'll just relay it, tough for them  
**\<meeting-bot> [anonimal]** They will probably enjoy it.  
**\<meeting-bot> [fluffypony]** indeed  
**\<meeting-bot> [fluffypony]** ok I'll do that right now  
**\<meeting-bot> [anonimal]** So this would be for i2p-relay?  
**\<meeting-bot> * anonimal** so many relays, so confused  
**\<meeting-bot> [fluffypony]** lol  
**\<meeting-bot> [i2p-relay] {-moneromooo}** What's #tahoe-lafs relation with kovri btw ?  
**\<meeting-bot> [anonimal]** moneromooo: Nothing really aside from an i2p plugin available to use with tahoe-lafs, AFAIK  
**\<meeting-bot> [anonimal]** fluffypony: if you're doing it right now, I'll wait.  
**\<meeting-bot> [fluffypony]** moneromooo: they asked me to run a relay, as their relay has disappeared  
**\<meeting-bot> [anonimal]** Damn, it's been an hour. Do we continue?  
**\<meeting-bot> [fluffypony]** yes - we started late  
**\<meeting-bot> [i2p-relay] {-moneromooo}** I think it's mostly up to you, the main kovri person.  
**\<meeting-bot> * anonimal** didn't want to stop on necessary bitmonero business  
**\<meeting-bot> [anonimal]** fluffypony: do you have to restart the relay? Is #226 resolved?  
**\<meeting-bot> [fluffypony]** the bouncer is connected  
**\<meeting-bot> [fluffypony]** sec  
**\<theRelay__> \<fluffypony@OFTC>** testing  
**\<fluffypony>** testing back  
**\<meeting-bot> [fluffypony]** and from here  
**\<meeting-bot> [fluffypony]** meeting-bot might be interfering with it a little, so I'll fiddle with it after I've killed meeting-bot  
**\<meeting-bot> [anonimal]** It's only me and the bot on OFTC  
**\<meeting-bot> [anonimal]** Is fluffypony@OFTC actually fluffypony@Freenode ?  
**\<meeting-bot> [fluffypony]** no I don't know - I need to check if it's relaying between all 3, and can't do that with meeting-bot online  
**\<meeting-bot> [fluffypony]** coz meeting bot is also relaying  
**\<meeting-bot> [anonimal]** Ok, can we quickly review the remaining items?  
**\<meeting-bot> [fluffypony]** sure  
**\<meeting-bot> [anonimal]** 6. Closing #105  
**\<meeting-bot> [anonimal]** Hmm, tricky.  
**\<meeting-bot> [fluffypony]** sorry internet is slow  
**\<meeting-bot> [fluffypony]** ok so  
**\<meeting-bot> [fluffypony]** the moneroworld instance is up  
**\<meeting-bot> [anonimal]** https://social.moneroworld.com went online but admin has not responded to anything in a month  
**\<meeting-bot> [fluffypony]** hmmm  
**\<meeting-bot> [anonimal]** There were multiple issues, probably still are, that would need to be resolved before we go officially public.  
**\<meeting-bot> [fluffypony]** ok then I think leave it open  
**\<meeting-bot> [anonimal]** But it's not kovri-related.  
**\<meeting-bot> [anonimal]** That's what annoys me. We have a forum post open for it.  
**\<meeting-bot> [anonimal]** And there's also that /bitmonero ticket open  
**\<meeting-bot> * anonimal** fetches  
**\<meeting-bot> [anonimal]** #903  
**\<DaveyJones>** gingeropolous aint that your site?  
**\<meeting-bot> [fluffypony]** anonimal: do we want a common gnu-social for the two?  
**\<meeting-bot> [fluffypony]** or separate?  
**\<gingeropolous>** wut?  
**\<meeting-bot> [anonimal]** I thought it would be an umbrella instance, more of a 'pro-decentralization' initiative not specific to kovri or bitmonero.  
**\<meeting-bot> [i2p-relay] {-moneromooo}** https://social.moneroworld.com  <-  your site ?  
**\<gingeropolous>** oh, DaveyJones , no... i just pay for the domain name and put it on afraid.org so anyone can create subdomains for free  
**\<meeting-bot> [anonimal]** I've already signed up for @kovri and @anonimal at quitter.se in case this issue was never resolved.  
**\<meeting-bot> [i2p-relay] {-moneromooo}** Oh, that's nice idea.  
**\<meeting-bot> [fluffypony]** ok  
**\<meeting-bot> [fluffypony]** let's leave it open and prod the guy again  
**\<meeting-bot> [fluffypony]** if we hear nothing by next dev meeting we re-host from scratch  
**\<meeting-bot> [anonimal]** quitter.se is nice aside from the psychopath/bot with the sickle and hammer avatar that spams the feed like there is no tomorrow.  
**\<meeting-bot> [anonimal]** Ok, I'll make a note.  
**\<meeting-bot> [anonimal]** 7. Closing #46  
**\<meeting-bot> [fluffypony]** I'm moving registrars for all critical domains, including getkovri.org  
**\<meeting-bot> [fluffypony]** which is affecting that and the other one  
**\<meeting-bot> [fluffypony]** (the increased attention means an increase of people poking at our infrastructure, hence the move)  
**\<meeting-bot> [anonimal]** Ah, ok. How is content coming along? Did you get that rough draft finished?  
**\<meeting-bot> [fluffypony]** should be done by next meeting, and I'll push the Kovri page to the Monero website in the next week so that we can open it up to the community to work on it  
**\<meeting-bot> [fluffypony]** it's in a sub-section of its own  
**\<meeting-bot> [fluffypony]** so it can have as much content as required  
**\<meeting-bot> [EinMByte]** nice, didn't know we were getting a website  
**\<meeting-bot> [anonimal]** Alright, I'll make a note.  
**\<meeting-bot> [fluffypony]** EinMByte: I was going to do it in Geocities, but anonimal convinced me not to  
**\<meeting-bot> [EinMByte]** (then again, I probably missed a lot)  
**\<meeting-bot> [fluffypony]** snow flake mouse cursors are the bomb  
**\<meeting-bot> [anonimal]** Yeah, fluffypony has yet to learn the finer points of 90's webdev.  
**\<meeting-bot> [fluffypony]** fo sho  
**\<meeting-bot> [anonimal]** We're working on that.  
**\<meeting-bot> [fluffypony]** Backstreet Boys backgrounds everywhere  
**\<meeting-bot> [anonimal]** Once we get a logo, the site should look snazzy.  
**\<meeting-bot> [anonimal]** 'Kovri's back, alright!'  
**\<meeting-bot> [fluffypony]** hah hah  
**\<meeting-bot> [anonimal]** Ok, 8. Closing #27  
**\<meeting-bot> [anonimal]** Ah, looks like we've had some activity there lately.  
**\<meeting-bot> [anonimal]** Looks like two issues now. So, 1) updates on zoho? 2) should we ever have a mailing list?  
**\<meeting-bot> [fluffypony]** can't proceed with Zoho till the domain move is done, but that's basically setup  
**\<meeting-bot> [fluffypony]** I don't think mailing lists are necessary  
**\<meeting-bot> [fluffypony]** we already have stuff scattered everywhere, another avenue will just make dissipate it more  
**\<meeting-bot> [anonimal]** Agreed.  
**\<meeting-bot> [EinMByte]** ever ? maybe, now ? no  
**\<meeting-bot> [anonimal]** fluffypony: ETA on domain move completion (or did you already say?... /me reads)?  
**\<meeting-bot> [fluffypony]** anonimal: by next meeting  
**\<meeting-bot> [fluffypony]** if it's done sooner then great  
**\<meeting-bot> [anonimal]** Ok, great. Once that's resolved we can resolve the HackerOne issue.  
**\<meeting-bot> [anonimal]** Which will be another avenue for more attention.  
**\<meeting-bot> [anonimal]** I'll make a note in #27.  
**\<meeting-bot> [anonimal]** Anything else on #27?  
**\<meeting-bot> [fluffypony]** nope that's it for now  
**\<meeting-bot> [anonimal]** 9. Any additional meeting items  
**\<meeting-bot> [anonimal]** EinMByte, how goes it?  
**\<guzzi>** present fgi  
**\<meeting-bot> [anonimal]** Hi guzzi.  
**\<meeting-bot> [anonimal]** guzzi: anything you wanted to add to the meeting?  
**\<guzzi>** glad to be a back. learning a lot.  
**\<meeting-bot> [EinMByte]** anonimal: Hopefully some work on SSU soon  
**\<meeting-bot> [anonimal]** EinMByte: I had thoughts and questions on library design if you're around after the meeting  
**\<meeting-bot> [EinMByte]** Sure  
**\<guzzi>** looking to focus more on kovri since it has the least devs and is more easy to peneatrate into development.  
**\<guzzi>** still getting up to speed.  
**\<meeting-bot> [anonimal]** EinMByte: nice, I look forward to the day we merge that branch.  
**\<meeting-bot> [EinMByte]** guzzi: If you're looking for easy stuff to get used to the code, tests and documentation are very much needed so that might be a good idea  
**\<meeting-bot> [anonimal]** guzzi: ok, if you have any questions, feel free to shout out.  
**\<meeting-bot> [anonimal]** solmar: ^ what EinMByte said too if interested.  
**\<guzzi>** EinMByte, thanks on it.  
**\<guzzi>** i will look for todos.  
**\<guzzi>** an prs on that  
**\<meeting-bot> [anonimal]** fluffypony: you wanted to talk about #325?  
**\<meeting-bot> [fluffypony]** oh - not necessarily, it was more to find out if it needed discussion  
**\<meeting-bot> [solmar]** i'll check it out thanks ;)  
**\<meeting-bot> [anonimal]** fluffypony: I think #325 is more of a 'po-tey-to' 'po-tah-to' kind of issue  
**\<meeting-bot> [anonimal]** and a possible solution is 'let's call the whole thing off'.  
**\<meeting-bot> [anonimal]** I'll figure itself out.  
**\<meeting-bot> [anonimal]** Anything else on 9.? Any more meeting items?  
**\<meeting-bot> [anonimal]** With organizational things out of the way, the next meeting can be far more codebase-orieted.  
**\<meeting-bot> [anonimal]** *oriented  
**\<meeting-bot> [fluffypony]** kk  
**\<meeting-bot> [anonimal]** 10. Confirm next meeting date/time  
**\<meeting-bot> [fluffypony]** https://99designs.com/logo-design/contests/create-beautiful-logo-kovri-privacy-enhancing-open-source-652257/entries  
**\<meeting-bot> [fluffypony]** https://99designs.com/logo-design/contests/create-beautiful-logo-kovri-privacy-enhancing-open-source-652257/brief that thing  
**\<meeting-bot> [anonimal]** fluffypony: nice  
**\<meeting-bot> [fluffypony]** k next meeting, same time, same place, 2 weeks  
**\<meeting-bot> [anonimal]** Where's the 'optional dog' button?  
**\<meeting-bot> [fluffypony]** Two Weeks (tm)  
**\<meeting-bot> [anonimal]** Do we have to do 2 weeks?  
**\<meeting-bot> [fluffypony]** you want to do longer?  
**\<meeting-bot> [fluffypony]** or shorter?  
**\<meeting-bot> [anonimal]** I mean, I guess it depends on who is involved. If it's the usual, then I'd say 1 month.  
**\<meeting-bot> [fluffypony]** guzzi / solmar / EinMByte - thoughts ?  
**\<meeting-bot> [EinMByte]** We can discuss some of the more technical things separately  
**\<guzzi>** 1 mo fine.  i will be on irc for technical things.  still playing catch up.  
**\<meeting-bot> [fluffypony]** ok  
**\<meeting-bot> [fluffypony]** then we do it in 4 weeks, same time as the meeting after next Monero dev meeting?  
**\<meeting-bot> [solmar]** 1 month is fine  
**\<meeting-bot> [solmar]** i'll be around as often as i can  
**\<meeting-bot> [anonimal]** Same time is fine with me.  
**\<meeting-bot> [fluffypony]** thankyouverymuch!  
**\<meeting-bot> [anonimal]** Ok, thanks everyone.  
**\<meeting-bot> [fluffypony]** can I kill meeting-bot?  
**\<meeting-bot> [anonimal]** fluffypony: swift and painless if possible.  
**\<meeting-bot> [anonimal]** She need not suffer.  
