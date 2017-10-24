---
layout: post
title: Logs for the Kovri Dev Meeting Held on 2016-06-19
summary: Brief review of what has been completed since last meeting, C++ specific discussion, closed and open issues
tags: [dev diaries, i2p, crypto]
author: dEBRUYNE / fluffypony
---

### Logs

**\<fluffypony>** ok I guess we move on to Kovri - anonimal, the floor is yours  
**\<meeting-bot> [anominal]** From agenda https://github.com/monero-project/kovri/issues/192  
**\<meeting-bot> [anominal]** 17:00 (UTC)  
**\<meeting-bot> [anominal]** 1. Greetings  
**\<meeting-bot> [anominal]** 2. Brief review of what's been completed since the previous meeting  
**\<meeting-bot> [anominal]** 3. C++ specific discussion (carried over from June 5th meeting)  
**\<meeting-bot> [anominal]** 4. Review open tickets (assigned and/or unassigned): status, code ideas (if applicable), etc.  
**\<meeting-bot> [anominal]** 5. Discuss any pertinent TODO's  
**\<meeting-bot> [anominal]** 6. Any additional meeting items  
**\<meeting-bot> [anominal]** 7. Confirm next meeting date/time  
**\<meeting-bot> [anominal]** 1. Greetings  
**\<meeting-bot> [anominal]** Hi  
**\<meeting-bot> [anominal]** EinMByte: present?  
**\<fluffypony>** there's 2x greetings?  
**\<fluffypony>** best meeting ever  
**\<meeting-bot> [anominal]** lol  
**\<meeting-bot> [anominal]** Well, EinMByte is here but not present.  
**\<fluffypony>** k  
**\<meeting-bot> [anominal]** Moving on,  
**\<meeting-bot> [anominal]** 2. Brief review of what's been completed since the previous meeting  
**\<meeting-bot> [anominal]** A somewhat productive two weeks in contrasting areas. Highlights include:  
**\<meeting-bot> [anominal]** - New --log-levels runtime feature  
**\<meeting-bot> [anominal]** - Security fix in Garlic/ElGamal  
**\<meeting-bot> [anominal]** - New user-agent scrubber  
**\<meeting-bot> [anominal]** - Bump to 0.9.26  
**\<meeting-bot> [anominal]** - Coverity coverage via travis-ci (though problematic, see #209)  
**\<meeting-bot> [anominal]** - Design refactoring, misc. refactoring, code documentation  
**\<meeting-bot> [anominal]** 6 closed issues  
**\<meeting-bot> [anominal]** 2 new standing issues  
**\<meeting-bot> [anominal]** fluffypony: have you had a chance to complete anything since previous meeting?  
**\<fluffypony>** anonimal: like 80%-ish done with the Kovri page on the site, per the info you gave me + the docs  
**\<fluffypony>** s/page/section  
**\<meeting-bot> [anominal]** Great, I'm looking forward to it.  
**\<meeting-bot> [anominal]** Do you think it will be finished before next meeting?  
**\<fluffypony>** yes definitely  
**\<meeting-bot> [anominal]** Yay, sounds exciting.  
**\<meeting-bot> [anominal]** Anything else on 2.?  
**\<meeting-bot> [anominal]** Going once... going twice...  
**\<meeting-bot> [anominal]** 3. C++ specific discussion (carried over from June 5th meeting)  
**\<meeting-bot> [anominal]** Well, I was hoping to merge this in with 4. and chat with EinMByte since he said he'd be here.  
**\<fluffypony>** is this wrt the C++ standard ?  
**\<fluffypony>** or the style guide stuff?  
**\<meeting-bot> [anominal]** Anything C++, I imagined.  
**\<meeting-bot> [anominal]** I was hoping to focus on C++ related to #187, but I haven't looked at #187 since it was opened.  
**\<meeting-bot> [anominal]** Have any bitmonero devs taken an interest in Kovri yet?  
**\<meeting-bot> [anominal]** Its quite the beast, and needs much taming.  
**\<fluffypony>** I don't think anyone has yet  
**\<tewinget>** anonimal: passing interest at best for me  
**\<meeting-bot> [anominal]** Ok, good to know.  
**\<tewinget>** I more or less know what it is, but I haven't looked into tinkering with it yet.  
**\<moneromooo>** I think the problem is that the time I'd spend hacking on anything, I wouldn't spend on monero anymore :)  
**\<fluffypony>** s'true  
**\<meeting-bot> [anominal]** I totally understand.  
**\<fluffypony>** there will be a bleed area between the two when integration happens  
**\<meeting-bot> [anominal]** That makes, so patience and persistence seems to be the key.  
**\<meeting-bot> [anominal]** \*makes sense  
**\<meeting-bot> [anominal]** Well, anonymity has a certain taste too. Maybe I'm one of the few fanatics who enjoy working on it ;)  
**\<fluffypony>** I think most of us are here because we're pro-privacy  
**\<meeting-bot> [anominal]** Anyway, I look forward to the meeting of the minds, I like what I've seen in bitmonero dev.  
**\<meeting-bot> [anominal]** Yes, good point.  
**\<fluffypony>** which is awesome :)  
**\<meeting-bot> [anominal]** Anything else on 3.? Any questions?  
**\<meeting-bot> [anominal]** Alrighty, moving on,  
**\<meeting-bot> [anominal]** 4. Review open tickets (assigned and/or unassigned): status, code ideas (if applicable), etc.  
**\<meeting-bot> [anominal]** Let's see,  
**\<fluffypony>** anonimal, also, if EinMbyte can't make the meeting maybe we must collate stuff and raise it on his behalf ?  
**\<meeting-bot> [anominal]** How so?  
**\<fluffypony>** like if he just adds to the agenda then we can discuss it without him needing to be here  
**\<meeting-bot> [anominal]** Ok, well he's welcome to do that.  
**\<meeting-bot> [anominal]** But he and I are great at bouncing ideas off each other and getting to core issues, so I wish he would be present more often.  
**\<meeting-bot> [anominal]** I see, so we'll send him a note to add to the agenda regardless of his attending?  
**\<fluffypony>** yes I think that would help, he lacks time at the moment  
**\<meeting-bot> [anominal]** Ok.  
**\<meeting-bot> * anonimal** back to 4.  
**\<meeting-bot> [anominal]** #210 might be an easy fix, if any bitmonero devs want to take a peek.  
**\<fluffypony>** once you go Kovri you never go...uh...something that rhymes with Kovri  
**\<meeting-bot> [anominal]** lol  
**\<meeting-bot> [anominal]** That's a tough one....  
**\<fluffypony>** https://github.com/monero-project/kovri/issues/210 <- for reference  
**\<meeting-bot> [anominal]** Remaining tickets are mostly all hard-core. I'll see what I can get into before the next meeting. Obviously the big ones would be nice if I can make the time.  
**\<meeting-bot> [anominal]** I may pick at #191 or #187 because I get irritated with severely broken things.  
**\<meeting-bot> [anominal]** Or who knows what, the world is full of mysterious and discovery.  
**\<fluffypony>** lol  
**\<meeting-bot> [anominal]** *mystery  
**\<meeting-bot> [anominal]** lol  
**\<fluffypony>** invent a time machine !  
**\<meeting-bot> [anominal]** pffffffffff  
**\<meeting-bot> [anominal]** That would be fun.  
**\<fluffypony>** :-P  
**\<meeting-bot> [anominal]** Does anyone here work with Debian Jessie often?  
**\<fluffypony>** tewinget is an Arch user  
**\<fluffypony>** moneromooo wrote his own OS from scratch I'm sure  
**\<fluffypony>** osensei maybe  
**\<fluffypony>** but he's not around atm  
**\<moneromooo>** I use a pretty common one nowdays actually.  
**\<meeting-bot> [anominal]** Ok just curious. Arch here so #210 will probably take more than a few moments.  
**\<fluffypony>** moneromooo: Windows XP ?  
**\<meeting-bot> [anominal]** ^ Windows 98  
**\<moneromooo>** Good point. I guess it's not that common. I forgot about windows.  
**\<meeting-bot> [anominal]** 95 was better at breaking.  
**\<meeting-bot> [anominal]** Ok, well re: 4., fluffypony have you see #209?  
**\<fluffypony>** probably  
**\<meeting-bot> [anominal]** 50% yay because we solved the coverity/travis issue!  
**\<fluffypony>** oh yes the Coverity thing  
**\<fluffypony>** ok so plz update me - Travis builds are now work  
**\<fluffypony>** *working  
**\<fluffypony>** but Coverity isn't triggering ?  
**\<meeting-bot> [anominal]** No, we are \*finally\* triggering, but now coverity says build is failing on their end.  
**\<meeting-bot> [anominal]** So, travis says "we're fine", coverity says "you're not fine but neither is most of my site".  
**\<meeting-bot> [anominal]** Because they really do have some issues there and support is... meh.  
**\<fluffypony>** LOL  
**\<fluffypony>** considering how long it took for their site to pick Travis up I'm not even surprised  
**\<fluffypony>** do we wait until they've fixed it, or keep pushing  
**\<meeting-bot> [anominal]** Seriously, and their "community" site is still offline despite "we'll be back in early 2016!".  
**\<meeting-bot> [anominal]** It's June already...  
**\<meeting-bot> [anominal]** Good question,  
**\<meeting-bot> [anominal]** I can review \*why\* they think our build failed, I could even try to do it manually.  
**\<meeting-bot> [anominal]** I may have to do it manually just to get things going \*or\*, it could be another travis/coverity issue (or just pure coverity).  
**\<fluffypony>** maybe we must switch to manual Coverity  
**\<fluffypony>** and just do it once every two weeks  
**\<meeting-bot> [anominal]** Sounds fair, I'll give it shot before next meeting.  
**\<meeting-bot> * anonimal** before I forget, opens https://github.com/monero-project/kovri/issues/assigned/fluffypony  
**\<meeting-bot> [anominal]** fluffypony: Any updates on #27?  
**\<meeting-bot> * anonimal** knows you've been busy, simply curious  
**\<fluffypony>** anonimal: no - also, we're switching providers  
**\<meeting-bot> [anominal]** Ok.  
**\<fluffypony>** debating Zoho vs. FastMail  
**\<fluffypony>** ProtonMail doesn't do multiple users on a domain, unfortunately  
**\<meeting-bot> [anominal]** Hmmm...  
**\<meeting-bot> [anominal]** Pros/Cons so far re: providers?  
**\<fluffypony>** well they're mostly doing forwarding and SMTP, so it's pretty open  
**\<fluffypony>** part of the decision making is cost, part is also reliability and if they feature reasonable web interfaces for those inevitable users that don't want to use a mail client  
**\<fluffypony>** will wrap that up soon, it's on my short list  
**\<meeting-bot> [anominal]** Ok, good to know.  
**\<meeting-bot> [anominal]** I don't have an opionion so far. If I do I'll be sure to chip in.  
**\<meeting-bot> [anominal]** Is xmrpromotions there? re: #105  
**\<fluffypony>** no not online atm  
**\<fluffypony>** I'll prod them for that when I see them next  
**\<meeting-bot> [anominal]** K.  
**\<meeting-bot> * anonimal** typing  
**\<meeting-bot> [anominal]** I'll most likely take a look at bitmonero's 0MQ work too before next meeting (thinking of #53).  
**\<meeting-bot> [anominal]** Other than that, I may just grab some low hanging fruit before next meeting and work on the mingw build and other smaller tickets.  
**\<tewinget>** anonimal, feel free to direct any 0mq questions at ~~fluffypony~~ me  
**\<meeting-bot> [anominal]** Thanks tewinget.  
**\<fluffypony>** oh yeah speaking of  
**\<tewinget>** sad that my IRC client doesn't support strikeout...hoping someone else's does  
**\<fluffypony>** the Windows test box is borked  
**\<fluffypony>** msys2 decided to give up the ghost  
**\<fluffypony>** so doing a complete reinstall of it  
**\<meeting-bot> [anominal]** Yeah, so what happened? Any idea?  
**\<fluffypony>** no clue  
**\<meeting-bot> [anominal]** (very strange)  
**\<tewinget>** On a scale from 1 to I hate compiling anything on Windows: I hate compiling anything on Windows.  
**\<tewinget>** it's a binary scale.  
**\<meeting-bot> [anominal]** Oh windows, you never cease to disappoint me.  
**\<meeting-bot> [anominal]** Anything else on 4.?  
**\<meeting-bot> * anonimal** quick reviewing  
**\<meeting-bot> [EinMByte]** Hi, I'm late sorry  
**\<meeting-bot> [anominal]** EinMByte! Welcome back.  
**\<fluffypony>** wb EinMByte  
**\<fluffypony>** still 15 minutes left :)  
**\<meeting-bot> [anominal]** With 15 minutes or so to spare, any input? (much backlog)  
**\<meeting-bot> [EinMByte]** Something about #210 maybe: I'll provide some more information  
**\<meeting-bot> [anominal]** EinMByte: before I forget and while you're here: what is your preferred/most-reliable public contact method?  
**\<meeting-bot> [EinMByte]** public as in to put on a website or so, or as in where you guys can contact me  
**\<meeting-bot> [anominal]** So we can contact you.  
**\<meeting-bot> [anominal]** And would you be interested in leaving agenda TODO's/notes in meeting tickets in case you can't make a meeting that you'd hope to make?  
**\<meeting-bot> [EinMByte]** Well I'll be on IRC, or else einmbyte@mail.i2p or github  
**\<meeting-bot> [anominal]** Ok.  
**\<meeting-bot> [EinMByte]** sure  
**\<meeting-bot> [anominal]** fluffypony: did I word that correctly?  
**\<meeting-bot> [anominal]** EinMByte: we're still on point 4. "reviewing tickets", etc.  
**\<meeting-bot> [anominal]** Is there anything you wanted to add re: SSU?  
**\<meeting-bot> * anonimal** knows you just got back to working on it  
**\<fluffypony>** yes I think so  
**\<meeting-bot> [EinMByte]** Well I can give you a quick status update  
**\<meeting-bot> [anominal]** Awesome.  
**\<meeting-bot> [EinMByte]** So SSUSession.cpp is now using the new parsing code, except for the fragments  
**\<meeting-bot> [EinMByte]** (I have the code to parse data packets, just not using it yet)  
**\<meeting-bot> [EinMByte]** I am slowed down right now due to a bug, with the header I suspect  
**\<meeting-bot> [anominal]** Grrr... bugs...  
**\<meeting-bot> [EinMByte]** (Rekey options being set etc when this shouldn't happen, I think it's all related)  
**\<meeting-bot> [EinMByte]** Well, I'll try to fix it in the next days  
**\<meeting-bot> [anominal]** bitmonero devs: FYI, SSU is the ugly High School girl standing in the corner of the dance hall that no one will dance with because she is awkward and is a very mean person.  
**\<fluffypony>** lol  
**\<meeting-bot> [anominal]** In other words, SSU has needed much love and I'm glad EinMByte has tackled the challenge.  
**\<meeting-bot> [EinMByte]** Hah, nice comparison - although it does make me seem quite desperate :P  
**\<meeting-bot> [anominal]** lol, oops. Sorry EinMByte, I didn't mean it that way :(  
**\<meeting-bot> [EinMByte]** Once the parsing part is done, I'll do something similar to build the packets  
**\<meeting-bot> [anominal]** Sounds great.  
**\<meeting-bot> [anominal]** How about, EinMByte dances with her because he is a leader and willing to show great sympathy to those who need it most.  
**\<meeting-bot> [EinMByte]** I'll write some tests, but don't expect full coverage just yet. I don't think that's a priority right now.  
**\<meeting-bot> [anominal]** And turns down the more promising dancers to make SSU work well.  
**\<meeting-bot> [EinMByte]** (I want to get the API started too)  
**\<meeting-bot> * anonimal** sorry, I'm getting carried away  
**\<meeting-bot> [anominal]** Ok.  
**\<meeting-bot> [anominal]** Do you have an idea of schedule coming up?  
**\<meeting-bot> [anominal]** (as in availability)  
**\<meeting-bot> [EinMByte]** anonimal: You're making a lot of assumptions about my gender here :). But let's see how well that dance turns out  
**\<meeting-bot> [anominal]** I know, again my apologies.  
**\<meeting-bot> [EinMByte]** Yes, next week I'll be mostly available (several hours per day)  
**\<meeting-bot> [anominal]** Ok. I'll check my IRC more frequently then.  
**\<meeting-bot> [anominal]** Anything else on 4.?  
**\<meeting-bot> [EinMByte]** Well as I said I'll put up more info for #210  
**\<meeting-bot> [anominal]** Ok.  
**\<meeting-bot> [EinMByte]** Seems like 2 tests are failing  
**\<meeting-bot> [anominal]** Since we're out of time, I don't see much on 5. except for a couple of quirky core ones that I may get to before next meeting.  
**\<meeting-bot> [anominal]** Any comments on 5.?  
**\<fluffypony>** EinMByte: well you can dance with SSUzy regardless of your gender  
**\<meeting-bot> [anominal]** SSUzy, lol.  
**\<meeting-bot> [EinMByte]** fluffypony: or my ability to dance :p  
**\<fluffypony>** everyone can dance, it's just a matter of how badly (or well)  
**\<meeting-bot> [anominal]** Paraplegics?  
**\<meeting-bot> * anonimal** doesn't do off-topic very often, quite the release.  
**\<meeting-bot> [anominal]** Ok so if no thoughts on 5.,  
**\<fluffypony>** LOL  
**\<fluffypony>** nobody is going to attend the Kovri meeting in future :-P  
**\<meeting-bot> [anominal]** LMAO  
**\<meeting-bot> * anonimal** watches ship sailing away, burning in the distance  
**\<meeting-bot> [EinMByte]** See you all next time in #dancing  
**\<meeting-bot> [anominal]** Ok, last call for 5. Discuss any pertinent TODO's  
**\<fluffypony>** I think that's it from my side  
**\<fluffypony>** lol EinMByte  
**\<meeting-bot> [anominal]** lol, or #dancing-dev  
**\<meeting-bot> [EinMByte]** Well, for 5: If anyone wants to start on the API, you're welcome  
**\<meeting-bot> [EinMByte]** This also applies to all (any?) monero people reading this  
**\<meeting-bot> [anominal]** Good point, that's another big item to tackle.  
**\<meeting-bot> [EinMByte]** Since you're going to be the people using the API, making up a list of requirements would be nice  
***\<fluffypony>** kk  
**\<meeting-bot> [anominal]** 6. Any additional meeting items  
**\<meeting-bot> [anominal]** Just one from me, briefly,  
**\<fluffypony>** I think we've already discussed EinMByte's dancing enough, so nothing more from me on 6  
**\<meeting-bot> [anominal]** Forum Funding. I plan on writing up some proposals within the next month or so.  
**\<fluffypony>** kk  
**\<meeting-bot> [anominal]** EinMByte: if you were crowdfunded on FFS, would you be able to devote any more dev time?  
**\<meeting-bot> [EinMByte]** I've already told fluffypony, not really  
**\<meeting-bot> [anominal]** Ok.  
**\<meeting-bot> [EinMByte]** If you can build me a time machine, yes  
**\<meeting-bot> * anonimal** was planning proposals to fund my work  
**\<meeting-bot> [anominal]** Funny, fluffypony mentioned that earlier (time machine).  
**\<fluffypony>** lol  
**\<meeting-bot> [anominal]** We should invest in one. The writing is on the wall.  
**\<meeting-bot> [anominal]** Last call for 6.  
**\<fluffypony>** new project for the Monero Research Lab to tackle  
**\<meeting-bot> [EinMByte]** But, as I've also told fluffypony, please do fund other programmers  
**\<meeting-bot> [anominal]** Agreed.  
**\<meeting-bot> [EinMByte]** Apparently you first need the programmer (before getting the money) so let's go find some C++ programmers  
**\<meeting-bot> [anominal]** fluffypony: ^ we should devote an entire meeting to that IMHO sometime within the next few months.  
**\<fluffypony>** yeah definitely  
**\<grimpants>** would love to see a FFS proposal for kovri/i2p dev  
**\<fluffypony>** grimpants: we've had open-ended stuff before, the funds just sit there and no dev comes along - we need to first find someone interested that can price in their work, even if it's on a full time commitment for X long  
**\<meeting-bot> [EinMByte]** By the way, we don't need only expert C++ programmers  
**\<fluffypony>** and then we can raise funds accordingly  
**\<grimpants>** i see  
**\<grimpants>** been a while since ive check tbh  
**\<meeting-bot> [EinMByte]** We can use people who just write documentation / tests too  
**\<meeting-bot> [anominal]** ^ which is a great way for newcomers to learn the codebase.  
**\<fluffypony>** this may not be an honourable line of thought, but I've been wondering if there's any fall-out from the issues Tor are facing that might lead to some new contributors looking at Kovri  
**\<meeting-bot> [anominal]** Good concern, I think that's very plausible.  
**\<meeting-bot> [anominal]** But the devoted C person usually scoffs at C++ and turn their nose at Java.  
**\<fluffypony>** like hyc :-P  
**\<meeting-bot> [anominal]** I've become spoiled with STL so, I can't vouch for C devotees on more complex apps like Kovri.  
**\<meeting-bot> [anominal]** But bigger point:  
**\<meeting-bot> [anominal]** The world needs more options, so if Tor starts to burn, another ship will be ready.  
**\<meeting-bot> [anominal]** Some great minds there, so I'm not concerned about the near future.  
**\<meeting-bot> [anominal]** But that was a hefty loss on their end with the one who shall remain nameless.  
**\<fluffypony>** yeah, and the larger loss is how much emotional damage it did to people during the time it was kept hidden  
**\<fluffypony>** as a community I hope we can learn from that and call people out when they're out of line  
**\<meeting-bot> [anominal]** Yeah, everyone involved seems to have taken a loss.  
**\<meeting-bot> [anominal]** So, regarding that in relation to ship-jumpers: I think we should continue on our track of availability, professionalism, quality, code correctness and maintainability,  
**\<fluffypony>** 100%  
**\<meeting-bot> [anominal]** But,  
**\<meeting-bot> [EinMByte]** let's first get some people :)  
**\<meeting-bot> [anominal]** devs can be strong in their ways, so being malleable is also important (but that's a given). Constant ebb and flow.  
**\<meeting-bot> [anominal]** Anything else on 6.?  
**\<fluffypony>** that's it from my side  
**\<meeting-bot> [anominal]** 7. Confirm next meeting date/time  
**\<meeting-bot> [anominal]** Same time in two weeks?  
**\<meeting-bot> [EinMByte]** Nothing else from me  
**\<fluffypony>** yes same time in two weeks  
**\<meeting-bot> [anominal]** Alright. A million thanks to everyone.  
**\<fluffypony>** taking meeting-bot down