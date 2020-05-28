---
layout: post
title: Logs for the Kovri Dev Meeting Held on 2016-10-30
summary: Brief review of what has been completed since last meeting, Kovri Logo, Salti, and code & open tickets discussion
tags: [dev diaries, i2p, crypto]
author: dEBRUYNE / fluffypony
---  

### Logs  

**\<fluffypony>** alright anonimal, the floor is yours  
**\<meeting-bot> [anonimal]** Proposed meeting items:  
**\<meeting-bot> [anonimal]** 1. Greetings  
**\<meeting-bot> [anonimal]** 2. Brief review of what's been completed since the previous meeting  
**\<meeting-bot> [anonimal]** 3. @fluffypony's request for finished logo  
**\<meeting-bot> [anonimal]** 4. ∫alti as Monero project  
**\<meeting-bot> [anonimal]** 5. [libqtoopie](https://github.com/EinMByte/qtoopie/issues/1)  
**\<meeting-bot> [anonimal]** 6. Preparing for pre-alpha release  
**\<meeting-bot> [anonimal]** 7. Code + ticket discussion / Q & A  
**\<meeting-bot> [anonimal]** 8. Any additional meeting items  
**\<meeting-bot> [anonimal]** 9. Confirm next meeting date/time  
**\<meeting-bot> [anonimal]** Hi  
**\<meeting-bot> [EinMByte]** Hi  
**\<meeting-bot> [i2p-relay] {-moneromooo}** Hi  
**\<meeting-bot> [i2p-relay] {-pero}** hi  
**\<meeting-bot> [olark]** Greetings.  
**\<boomlol23>** hi  
**\<fluffypony>** ola  
**\<meeting-bot> [i2p-relay] {-ArticMine}** hi  
**\<maoam>** hi  
**\<meeting-bot> [anonimal]** 2. Brief review of what's been completed since the previous meeting  
**\<meeting-bot> [anonimal]** Lots of refactoring, some fixes.  
**\<meeting-bot> [anonimal]** New contributor olark/olarks!  
**\<meeting-bot> [anonimal]** Welcome olark!  
**\<meeting-bot> [olark]** o/  
**\<fluffypony>** welcome olark  
**\<meeting-bot> [anonimal]** Anything else on 2.?  
**\<meeting-bot> [anonimal]** (olark has been doing great work + tackling a huge learning curve. very cool)  
**\<fluffypony>** olark  
**\<meeting-bot> [olark]** lots of refactoring ;)  
**\<fluffypony>** maybe you can give us a brief background on you  
**\<meeting-bot> [i2p-relay] {-Slack} \<nanoakron>** How’s the documentation looking to make that learning curve more shallow for future developers?  
**\<meeting-bot> [anonimal]** (e.g., favourite book, long walks on the beach, etc.)  
**\<meeting-bot> [anonimal]** nanoakron: moneropedia. We can talk more about that at the end of the meeting too.  
**\<meeting-bot> [olark]** Have been programming for the last 3-4 years on and off. Just getting back into C++ have followed Monero and Kovri for the last year or so and figured I should stop procrastinating and help move things forward.  
**\<fluffypony>** olark: https://i.imgur.com/9AQYqBr.png  
**\<meeting-bot> [olark]** Also long time i2p user, so I know what's up.  
**\<meeting-bot> [anonimal]** lol, badge of honor.  
**\<meeting-bot> [anonimal]** Alright, well we're glad to have more hands on deck.  
**\<meeting-bot> [anonimal]** Anything else before moving onto 3.?  
**\<meeting-bot> [olark]** Haha thanks fluffypony  
**\<meeting-bot> [anonimal]** 3. fluffypony's request for finished logo  
**\<meeting-bot> [anonimal]** fluffypony: ^  
**\<fluffypony>** yes  
**\<fluffypony>** ok this logo has taken WAY too much time  
**\<fluffypony>** I know that logos are kinda-permanent, but it's holding other stuff up  
**\<boomlol23>** why are all msgs going through meetingbot..  
**\<fluffypony>** boomlol23: because we're spread out over multiple networks  
**\<meeting-bot> [anonimal]** fluffypony: what's the best solution for now?  
**\<boomlol23>** ok  
**\<fluffypony>** I'd like to have the logo by the end of the meeting  
**\<fluffypony>** if colours are an issue let's just stick with the original colours  
**\<fluffypony>** we can ALWAYS change it later  
**\<meeting-bot> [EinMByte]** Wait, we still haven't decided on the logo?  
**\<fluffypony>** EinMByte: we have  
**\<fluffypony>** but then there were font and kerning and colour changes  
**\<ontario>** new monero logo?  
**\<meeting-bot> [anonimal]** ontario: kovri logo  
**\<fluffypony>** ontario: no Kovri logo, we're in the Kovri meeting now  
**\<ontario>** k sry  
**\<meeting-bot> [anonimal]** Ok, can pero send you the finished work then?  
**\<fluffypony>** np :)  
**\<fluffypony>** yes please  
**\<sornros>** may I ask if I understood correctly that the i2p code will be rewritten in c++?  
**\<meeting-bot> \* anonimal** has to move onto next item....  
**\<fluffypony>** either uploading somewhere or ric@getmonero.org  
**\<pero>** i thought i 'submitted' the final one last weekend - i'd like to make one tiny half pixel change if i can  
**\<meeting-bot> [anonimal]** sornros: we can answer more after the meeting  
**\<fluffypony>** sornros: it already is being - https://github.com/monero-project/kovri  
**\<pero>** i'll email it to both fluffypony and anonimal shortly  
**\<meeting-bot> [anonimal]** Anything else on 3.?  
**\<sornros>** thanks  
**\<pero>** with the monero colors  
**\<fluffypony>** no that's anonimal, tks  
**\<pero>** http://imgur.com/a/xCaZV fyi  
**\<fluffypony>** that's it  
**\<meeting-bot> [anonimal]** 4. ∫alti as Monero project  
**\<fluffypony>** pero: ok perfect - if you can send it to me after the pixel change  
**\<meeting-bot> [EinMByte]** sure  
**\<pero>** half-pixel :P  
**\<meeting-bot> [anonimal]** EinMByte: I had some thoughts unless you wanted to dive into anything first  
**\<sornros>** thats a nice logo, I like the font too  
**\<meeting-bot> [EinMByte]** anonimal: No go ahead  
**\<meeting-bot> [anonimal]** We've moved on sornros.  
**\<meeting-bot> [anonimal]** EinMByte: since I haven't spent any time researching webextensions, can we *for sure* do what we want to achieve with XUL/XPCOM?  
**\<meeting-bot> [anonimal]** I'm thinking we consider brushing aside the deprecation issue for now and someone can pick it up in the future?  
**\<PowerFlower>** hi sorry for being late -_- I hope its not too late. Simple question: Will be the GUI released before the next XMR core release in ?Januaray?  
**\<meeting-bot> [EinMByte]** It depends what exactly we want to achieve  
**\<meeting-bot> [anonimal]** If we *can* do that now, we could move it into monero-project and it will gain more attention.  
**\<fluffypony>** PowerFlower: this is the Kovri meeting, you'll have to hold that question for later  
**\<PowerFlower>** okay :)  
**\<meeting-bot> [anonimal]** EinMByte: well, the easy stuff for starters re: profile. We can do that, right?  
**\<meeting-bot> [EinMByte]** anonimal: If we accept that the user will have to use the plugin with a separate profile, then we can do everything we need with webextensions I guess  
**\<meeting-bot> [EinMByte]** Can we create the profile using webextensions? Probably not  
**\<meeting-bot> [EinMByte]** Then again, people are apparently smart enough to run TBB, so if necessary we can create a script to create the firefox profile  
**\<meeting-bot> [anonimal]** I think that was what we were going for  
**\<meeting-bot> [EinMByte]** Problem with XUL is that 1) it's deprecated so development will only get worse for us 2) harder to port to other browsers (contrary to webextensions)  
**\<meeting-bot> [EinMByte]** It seems like a bad idea to start creating a plugin with deprecated technology  
**\<meeting-bot> [anonimal]** Where's the definite deprecation date though?  
**\<meeting-bot> [EinMByte]** There is none (very vague, IIRC)  
**\<meeting-bot> [EinMByte]** It's also not clear if e.g. it will be deprecated for firebird  
**\<meeting-bot> [EinMByte]** (in fact, does anyone know if firebird itself is (going to be) deprecated?)  
**\<meeting-bot> \* anonimal** doesn't know  
**\<meeting-bot> [anonimal]** So, we are in a good position to influence webext development: they are still taking feature requests, etc. If we get *something* going now, there is a far better likely hood of a webdev coming along to contribute than if we have a mostly empty repo.  
**\<meeting-bot> [anonimal]** And I can't find a date for deprecation, should we really base a great idea on what-if's?  
**\<meeting-bot> [EinMByte]** Yes, I agree. My spare time does not though  
**\<meeting-bot> [anonimal]** I know, nor mine, but I've semi-frequently seen people popping in and out of #monero-dev wanting to contribute to non-c++ projects.  
**\<meeting-bot> [EinMByte]** Well, we know for sure it will be deprecated. Just not when. That sounds bad to me, so better try and do it with webext imho  
**\<meeting-bot> [anonimal]** Ok, so maybe what we should do now then is write a definite roadmap/readme that will give others a better understanding of wth we are talking about.  
**\<meeting-bot> [i2p-relay] {-ArticMine}** I have to leave  
**\<meeting-bot> [anonimal]** s/definite/definitive/  
**\<meeting-bot> [anonimal]** EinMByte: I think we can easily do that for now. Then, once we are more certain about our webext strategy, bring up this topic at another meeting?  
**\<meeting-bot> [anonimal]** If roadmap is too much, at least improve our readme.  
**\<meeting-bot> [EinMByte]** anonimal: That's probably a good idea.  
**\<meeting-bot> [EinMByte]** Sure.  
**\<meeting-bot> [EinMByte]** I agree that we should first see if we can actually do what we want to do, so for example: can we change all of the necessary settings  
**\<meeting-bot> [anonimal]** Ok, sounds great. Anything else on 4.?  
**\<maoam>** a short readme would be nice  
**\<realsony>** EinMbyte may i ask for your GIT repository name i couldn't find it  
**\<meeting-bot> [EinMByte]** realsony: EinMByte/salti  
**\<meeting-bot> [anonimal]** 5. [libqtoopie](https://github.com/EinMByte/qtoopie/issues/1)  
**\<realsony>** ty  
**\<meeting-bot> [anonimal]** EinMByte: did you get a chance to review #1?  
**\<meeting-bot> [EinMByte]** I read it  
**\<meeting-bot> [EinMByte]** Not sure if I can agree with converting it to a library  
**\<meeting-bot> [EinMByte]** It should be the other way around, IMHO  
**\<meeting-bot> [EinMByte]** qtoopie is based on I2PControl, with the idea of making it router-agnostic  
**\<meeting-bot> [anonimal]** As it, you don't think it's possible or don't think it *should* be done or don't want it to be done?  
**\<meeting-bot> [anonimal]** So what part would you rather see as the lib?  
**\<meeting-bot> [anonimal]** If monero's gui needs it's own i2pcontrol then that's fine; I'm just trying to avoid repetition.  
**\<meeting-bot> [EinMByte]** It depends on what we want: if we want to build a router-agnostic GUI, I think I2PControl is the best option. In that case we could simply bundle qtoopie + kovri router and release this as an easy-to-use router package  
**\<meeting-bot> [EinMByte]** If we want to build a GUI specifically for kovri, then we can rely on the (currently not existing) kovri API (libcore/libclient)  
**\<meeting-bot> [EinMByte]** But in that case too, it would not really make sense for it to be a library. Instead, it would be comparable to what kovri-app currently is, except that it would be a GUI rather than CLI  
**\<meeting-bot> [anonimal]** re: API, that's what the monero gui will be using, but where could we eliminate redundancy if the API and i2pcontrol would also do some of the more basic things that i2pcontrol provides?  
**\<fluffypony>** I2PControl would be able to control Kovri + Java i2p etc. right?  
**\<meeting-bot> [EinMByte]** My original idea for qtoopie is that it would fork for all exiting I2P routers that support I2PControl.  
**\<fluffypony>** oh I missed the "based on"  
**\<fluffypony>** ok makes sense  
**\<meeting-bot> [EinMByte]** So the redundancy is not eliminated at the level of the kovri implementation, but instead at all implementations (no need for a specific GUI)  
**\<meeting-bot> [anonimal]** EinMByte: Ok, that I understand. But there's really no way to create libqtoopie so the monero gui can use it *now* (even in it's current state)?  
**\<meeting-bot> [anonimal]** Why create extra monero gui code and i2pcontrol impl when that's already done?  
**\<meeting-bot> [anonimal]** This doesn't change the functionality of qtoopie. I'm just basing this off what you said when I brought up the lib idea a while ago.  
**\<meeting-bot> [EinMByte]** Sure, monero can use qtoopie directly  
**\<meeting-bot> [anonimal]** If it's more work than not, and adversely effects qtoopie, then I understand.  
**\<meeting-bot> [EinMByte]** at least in the sense "you can display the windows defined in the qtoopie project"  
**\<meeting-bot> [EinMByte]** I guess that would classify as a library.  
**\<meeting-bot> [EinMByte]** The question is why you would want to bundle it like that  
**\<meeting-bot> [EinMByte]** (you could also just provide the executable with the monero executables, and then open this from the monero GUI, there would be little difference to the end use)  
**\<meeting-bot> [anonimal]** To save redundant code so people don't have to install qtoopie to use qtoopie; and so it's integrated with the monero gui.  
**\<fluffypony>** can't we have our own controls in the GUI  
**\<fluffypony>** with bindings to libqtoopie functions ?  
**\<meeting-bot> [anonimal]** fluffypony: own controls to API, sure.  
**\<meeting-bot> [anonimal]** fluffypony: libqtoopie, EinMByte would know; I imagined yes.  
**\<meeting-bot> [EinMByte]** By the way, for reference on i2pcontrol: http://zzz.i2p/topics/2030-proposal-bundle-i2pcontrol, http://zzz.i2p/topics/1942-i2pcontrol-for-generic-user-interfaces  
**\<meeting-bot> [EinMByte]** If you want to have your own controls, there's not much point in using all of qtoopie  
**\<meeting-bot> [EinMByte]** then you just need to use i2pcontrol  
**\<meeting-bot> [EinMByte]** (which is very simple to implement; or you could use the part of qtoopie that deals with this)  
**\<meeting-bot> [anonimal]** EinMByte I think you're missing the point but I'm probably not explaining my intentions well.  
**\<meeting-bot> [anonimal]** So, libqtoopie: not needed. qtoopie: agnostic but will not be in library form.  
**\<meeting-bot> [anonimal]** We will create our own controls that use the API  
**\<meeting-bot> [EinMByte]** qtoopie is an end-user program, hence why I'd say "not in library form"  
**\<meeting-bot> [anonimal]** I know EinMByte, I'm just trying to save time and code.  
**\<meeting-bot> [EinMByte]** We could take some of the code in qtoopie and put it in a library "libi2pcontrol-client"  
**\<meeting-bot> [EinMByte]** This library could then be used by e.g. monero  
**\<meeting-bot> [anonimal]** i2pcontrol is insanely overrated, seriously overrated in relation to as much time as we're talking about it.  
**\<meeting-bot> [EinMByte]** But this is assuming that monero would be using i2pcontrol at all  
**\<meeting-bot> [anonimal]** I don't see the point if there are API's in place.  
**\<meeting-bot> [anonimal]** And i2pcontrol is limited in its own right.  
**\<meeting-bot> [EinMByte]** Yes, i2pcontrol has severe limitations  
**\<meeting-bot> [anonimal]** So, unless that entire spec is worked on, I have nothing more to say on the subject for now.  
**\<meeting-bot> [EinMByte]** (even the proposed version 2)  
**\<meeting-bot> [anonimal]** Ok, so we'll learn from the mistakes of others and try not to make our own.  
**\<meeting-bot> [anonimal]** fluffypony: does that makes sense? anyone need a tl;dr?  
**\<fluffypony>** yes it does  
**\<fluffypony>** tl;dr for the log  
**\<meeting-bot> [anonimal]** tl;dr qtoopie is great. We won't be using qtoopie in lib or bundled form because of severe limitations in i2pcontrol. We will be using GUI controls via the kovri API(s).  
**\<meeting-bot> [EinMByte]** What is important to understand is that I2PControl is intended to create high-level control programs  
**\<meeting-bot> [EinMByte]** It isn't designed to deal with lower-level configuration that monero might need  
**\<meeting-bot> [anonimal]** Anything else on 5.?  
**\<meeting-bot> [EinMByte]** One of the main limitations, in case anyone is wondering, is that i2pcontrol has to serialize everything and send it over the network  
**\<meeting-bot> [EinMByte]** There's no possiblity of handlers or anything like that too  
**\<meeting-bot> [EinMByte]** (you have to continuously request updates)  
**\<meeting-bot> [anonimal]** yes.  
**\<meeting-bot> [anonimal]** Ok, 8 minutes  
**\<meeting-bot> [anonimal]** 6. Preparing for pre-alpha release  
**\<meeting-bot> [EinMByte]** For a simple GUI, that's probably good enough but it doesn't work when you want to integrate kovri with something like monero  
**\<meeting-bot> [anonimal]** Yay! Nov. 1st pre-alpha will not happen, nooo way. I've been busy this month with non-code work; only recently with more code.  
**\<meeting-bot> [anonimal]** EinMByte has been very busy too.  
**\<meeting-bot> [EinMByte]** :|  
**\<fluffypony>** no problemo - let's get it right instead of getting it rushed :)  
**\<meeting-bot> [anonimal]** EinMByte: realistically, I think we should push the date to Dec. 1st or later.  
**\<meeting-bot> [anonimal]** It's never going to perfect in my eyes, but...  
**\<meeting-bot> [EinMByte]** Sure  
**\<meeting-bot> [EinMByte]** dont' expect more activity from me though  
**\<meeting-bot> [anonimal]** You mean ever or temporary?  
**\<meeting-bot> \* anonimal** hopes temporary  
**\<meeting-bot> [EinMByte]** I mean before december the first  
**\<meeting-bot> [anonimal]** Ok. I'll set a tentative date for dec. 1st; no later than 33c3.  
**\<meeting-bot> [anonimal]** (which is not dec. 1st of course)  
**\<meeting-bot> [anonimal]** I'll have to adjust the milestone date on github and roadmap etc.  
**\<meeting-bot> [anonimal]** Any other thoughts on 6.?  
**\<meeting-bot> [anonimal]** This coming month should be far more productive code-wise than in october.  
**\<meeting-bot> [anonimal]** We'll see what we can knock-out before december.  
**\<meeting-bot> [anonimal]** 2 minutes to spare  
**\<meeting-bot> [anonimal]** Skipping 7. Code + ticket discussion / Q & A unless anyone wants to say something?  
**\<meeting-bot> [anonimal]** 8. Any additional meeting items  
**\<fluffypony>** nope that's it from my side  
**\<fluffypony>** glad to see the refactoring efforts  
**\<fluffypony>** will make stuff easier to work on later on  
**\<meeting-bot> [iDunk]** head works now, thanks anonimal  
**\<PowerFlower>** oberservers can now ask questions?  
**\<meeting-bot> [anonimal]** fluffypony: yes indeedy  
**\<meeting-bot> [anonimal]** iDunk: you're welcome, thanks for the notice and for actively testing :)  
**\<meeting-bot> [iDunk]** np :)  
**\<meeting-bot> [anonimal]** PowerFlower: kovri questions, yes  
**\<fluffypony>** ok let's close up the Kovri meeting and then PowerFlower can ask their Monero question :-P  
**\<meeting-bot> [anonimal]** Oh, those kinds of questions.  
**\<meeting-bot> [anonimal]** Ok, 9. Confirm next meeting date/time  
**\<meeting-bot> [anonimal]** Same time, two weeks?  
**\<meeting-bot> [olark]** Sounds good.  
**\<fluffypony>** yes  
**\<meeting-bot> [anonimal]** Alright, thank you EinMByte and everyone else here for making the meeting.  
**\<fluffypony>** meeting bot going down to switch back to the Monero stuf  
**\<meeting-bot> [anonimal]** Thanks fluffypony  
