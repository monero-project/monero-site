---
layout: post
title: Logs for the Kovri Dev Meeting Held on 2017-06-11
summary: Brief review of what has been completed since last meeting, FFS for MoroccanMalinois, FFS for Rehrar , 96boards OpenHours showcase, website discussion, and code & open tickets discussion
tags: [dev diaries, i2p, crypto]
author: dEBRUYNE / fluffypony
---

# Logs  

**\<anonimal>** 1. Greetings  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\<anonimal>** 3. Status of [96boards.org OpenHours showcase for Kovri / Monero](https://github.com/monero-project/meta/issues/46)  
**\<anonimal>** 4. Moving `anonimal/kovri-site` and `anonimal/kovri-docs` to `monero-project` #74  
**\<anonimal>** 5. Resolve FFS RFC for @moroccanmalinois  
**\<anonimal>** 6. Code + ticket discussion / Q & A  
**\<anonimal>** 7. Any additional meeting items  
**\<anonimal>** 8. Confirm next meeting date/time  
**\<anonimal>** Hi  
**\<ArticMine>** hi  
**\<rehrar>** Hi!!  
**\<johnalan>** hi  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\<rehrar>** Sorry. Slack being stupid.  
**\<MoroccanMalinois>** Hi  
**\<rehrar>** The one last week? Is this a mini-meeting?  
**\<anonimal>** Yes, but it should go as long as it needs  
**\<anonimal>** I was busy dealing with more guzzi drama and dis-information, so I haven't been able to prepare for 2  
**\<anonimal>** This week was very busy though:  
**\<i2p-relay> {-fluffypony}** sorry I missed 1. - I'm in and out, getting changed and need to get food desperately  
**\<anonimal>** much preparing for 96boards (which ended up being canceled), kovri-site dev / collaboration, kovri-docs created, PR review/merges  
**\<anonimal>** rehrar doing great work, MoroccanMalinois doing great work  
**\<i2p-relay> {-fluffypony}** anonimal doing great work  
**\<anonimal>** Everyone around doing great work. elopio pigeons and every other contributor this past week.  
**\* anonimal** blushes, thank you  
**\<anonimal>** #653 was interesting, still not sure what his issue was before he closed it.  
**\<anonimal>** In all a very collaborative and active IRC week. Did I miss anything?  
**\<anonimal>** Oh, yes, guzzi quit and left his FFS unfinished. MoroccanMalinois is stepping up to finish his FFS work (we'll talk more in point 5).  
**\<anonimal>** Moving on to 3.?  
**\<anonimal>** 3. Status of [96boards.org OpenHours showcase for Kovri / Monero](https://github.com/monero-project/meta/issues/46)  
**\<anonimal>** I think we're rescheduled (or will be) for July 20th or 27th  
**\<anonimal>** I'll keep everyone apprised.  
**\<anonimal>** Details are in the meta issue.  
**\<anonimal>** I think everyone was informed about fluff's flight delay. Did anyone not get that info / reschedule notice?  
**\* anonimal** posted in the reddit thread too  
**\<i2p-relay> {-fluffypony}** yeah stupid fire  
**\<i2p-relay> {-fluffypony}** Robert indicated that next month would suit  
**\<anonimal>** Ok  
**\<anonimal>** Anything else on 3.?  
**\<anonimal>** 4. Moving `anonimal/kovri-site` and `anonimal/kovri-docs` to `monero-project` #74  
**\<i2p-relay> {-fluffypony}** I can create empty repos for that now before I leave  
**\<anonimal>** fluffypony: what do you think about this? ^ https://github.com/monero-project/meta/issues/74  
**\<i2p-relay> {-fluffypony}** I think that's good  
**\<rehrar>** Sorry. Here. Checking backlog. I'm out and a guy I know decided to give me a 15 minute talk on WW2  
**\<anonimal>** fluffypony: alright, cool  
**\<anonimal>** Anything else on 4.?  
**\<johnalan>** um  
**\<johnalan>** at the risk of asking a stupid q  
**\<johnalan>** is there anything that needs to be done on making Kovri Ipv6 ready  
**\<johnalan>** one example is port fowarding  
**\<johnalan>** on ipv6 consumer routers you can’t do that  
**\<johnalan>** as all devices have public IP  
**\<anonimal>** johnalan: ipv6 is supported, let's talk more at point 7.  
**\<johnalan>** ok  
**\<johnalan>** no probs  
**\<johnalan>** sorry  
**\<anonimal>** 5. Resolve FFS RFC for @moroccanmalinois https://forum.getmonero.org/9/work-in-progress/87082/proposal-for-kovri-dev?page=&noscroll=1#post-91048  
**\<MoroccanMalinois>** Just a few words before this point: I am bad at social things. I don't do politics/drama. Not a funny guy, don't feels comfortable with english, but i am happy to answer technical questions when i can. I already feel honored by the support i have received so far and whatever happens with the FFS, i am OK with it and it won't change anything to the work i am going to do or not do in the next months.So just wanted to say a big  
**\<MoroccanMalinois>** THANKS !  
**\<anonimal>** Woo!  
**\<anonimal>** I've seen no negative responses to the RFC. Did anyone say anything in the reddit thread?  
**\* anonimal** checks  
**\<i2p-relay> {-fluffypony}** MoroccanMalinois: your English has been excellent, you mustn't worry about that :)  
**\<MoroccanMalinois>** :)  
**\<moneromooo>** MoroccanMalinois == good guy to have  
**\<moneromooo>** (or gal)  
**\<anonimal>** https://www.reddit.com/r/Monero/comments/6g1q8b/request_for_replacement_assistant_kovri_developer/  
**\<anonimal>** Nothing but positive reviews it seems.  
**\<MoroccanMalinois>** Thank u very much mooo  
**\<anonimal>** So, everyone is in agreement?  
**\* anonimal** yes  
**\<johnalan>** yes  
**\<moneromooo>** yes  
**\<johnalan>** delighted to have him  
**\<johnalan>** her  
**\<johnalan>** whatev  
**\* MoroccanMalinois** blushing   
**\<serhack>** yes  
**\<anonimal>** Sold! Congrats to MoroccanMalinois. You've always been aboard so saying "welcome aboard" is redundant.  
**\<anonimal>** Welcome aboard  
**\<anonimal>** lol  
**\<anonimal>** On this note, I'd like to point out one thing:  
**\<anonimal>** We spent more time vetting MoroccanMalinois as a replacement for guzzi then we did vetting guzzi to receive an FFS in the first place.  
**\<anonimal>** palexander had some great questions. In general, how can we better vet FFS proposals?  
**\<anonimal>** Is this possible? If so, how?  
**\<moneromooo>** I think the key is to have people contribute enough to get a feel of how it works. I don't know how much guzzi contributed at start though.  
**\<endogenic>** one thing i'd like to mention is that if someone is getting paid, they should know something, and be able to ship at least what they say they know w/o reliance on others  
**\<endogenic>** if that's not able to be kept then i'd say that's grounds for renegotiation or something  
**\<endogenic>** aside from that, i think it's important to be careful with whether teaching someone becomes a codependency sort of situation  
**\<endogenic>** not that i'm saying you wanted that at all anonimal, obviously  
**\<anonimal>** I think moneromooo and endogenic hit that nail on the head HARD!  
**\<anonimal>** moneromooo: to be brutally honest, guzzi contributed very little; even less AFTER he started his FFS.  
**\<anonimal>** The value of the work was on par to the amount.  
**\<anonimal>** He should've spent his time taking an online course or going to a community college instead of, endogenic so elegantly put it, used me as a co-dependent.  
**\<anonimal>** Though the dependency was not mutual.  
**\* anonimal** typing  
**\<MoroccanMalinois>** :) Dear community, Thanks very much  
**\<anonimal>** For guzzi to take 4 months to complete 40 hours of work, get many free hours of tutelage from me, complain about not understanding how to program c++, attack me and discredit other contributors, quit, then continue to attack the project: I don't think anyone could've predicted this would happen.  
**\* anonimal** grabs meta link for FFS sticky  
**\<endogenic>** lol anonimal as to the last sentence you may find it can be noticed much earlier  
**\<i2p-relay> {-fluffypony}** anonimal: I've created the repos and given you access  
**\<i2p-relay> {-fluffypony}** or invited you anyway  
**\<i2p-relay> {-fluffypony}** on that note I have to take my leave, chat later  
**\<anonimal>** Thanks fluffypony. Godspeed.  
**\<anonimal>** endogenic: lol alright, you have a point ;)  
**\<anonimal>** https://github.com/monero-project/meta/issues/63  
**\<anonimal>** So, ^ create formalized FFS process  
**\<i2p-relay> {-fluffypony}** o/  
**\<endogenic>** \o fp!  
**\<anonimal>** It's already in meta. endogenic moneromooo not to prod your brain too much, but does a sentence or two come to mind that could be added/revised?  
**\<anonimal>** gingeropolous: ^ thanks  
**\<endogenic>** may be good to put rigorous criteria to "disappears"  
**\<endogenic>** taking vacation at improper times, etc, imo, is akin to abandonment  
**\<rehrar>** Ok. I'm sorry for the second disappearance. O vote aye for @moroccanmalinois  
**\<endogenic>** obviously that's super strict and not applicable directly to a FOSS context  
**\<moneromooo>** "improper" ?  
**\<endogenic>** but my point is that if someone just pops in every now and then to say "hey i'm still alive" but is dragging their heels then that may be a sticking point where you would have wanted to define what disappears means  
**\<endogenic>** moneromooo: "improper" as in let's say they committed to doing something but then decided to put a vacation there  
**\<moneromooo>** Maybe there could be a rough show of hands as to whether something needs fixing, then.  
**\<anonimal>** Good point I think.  
**\<anonimal>** fp and I had repeatedly - repeatedly - over the course of months had asked him to show up to meetings; yet he still wouldn't do it reliably. MoroccanMalinois was better at attending meetings and no one asked him to!  
**\<endogenic>** moneromooo: yeah i believe it has to be judged case-by-case, anyway  
**\<endogenic>** anonimal: yep  
**\<anonimal>** So, maybe we should add something to the regular meeting agenda? "X. contributor / FFS check-in, status"?  
**\<endogenic>** anonimal: there are so many good people who would want to work on kovri  
**\<johnalan>** anonimal: good idea  
**\<endogenic>** that actually sounds like a great idea  
**\<moneromooo>** Yep  
**\<anonimal>** And then add something to the FFS document which *enforces* something  
**\<anonimal>** That's the tricky part I think.  
**\<endogenic>** the contract can't enforce things per se imo  
**\<endogenic>** but can give paper trail to agreement  
**\<endogenic>** so imo the question is what matter needs addressing  
**\<anonimal>** Ok, so make this more of a per-issue/per-person/per-meeting check-in resolution?  
**\<johnalan>** its not to make it difficult or hard on the FFS contributor, just a status update. If that’s not much in a given week or two no problem  
**\<anonimal>** Instead of a global catch-all?  
**\<endogenic>** well it could probably be couched in general terms  
**\<rehrar>** I think status updates are healthy accountability. They are hired by the community after all.  
**\<johnalan>** ^^^  
**\<rehrar>** As long as they are done unilaterally without preference (so anonimal too and other higher ups) then it's a good thing.  
**\<endogenic>** but it's basically to have them indicate they understand that they are working for the community, not the other way around  
**\<anonimal>** johnalan rehrar: I believe I've been doing that for every meeting since 2015. In the eyes of a problem contributor, any response is a good response because "it's a response and that's all I need to give"  
**\<johnalan>** ok  
**\<rehrar>** I'm not pointing fingers at you, bud. Just saying as long as everyone is held to a similar standard, I think it's healthy and ensures something like this doesn't happen again.  
**\<johnalan>** good point  
**\* anonimal** is questioning the validity / quality of the response as it pertains to the FFS  
**\<johnalan>** fair  
**\<anonimal>** rehrar: I didn't think that nor am I implying that. I'm not attacking you or johnalan. This is purely information relay.  
**\<rehrar>** Part of a formalized FFS should include updates on a regular basis, and if this minimum thing isn't kept up, it's fair to question whether or not the person has the committment to fulfill the project  
**\<rehrar>** if they can't even be bothered to give updates, how can they be bothered to complete the assigned tasks?  
**\<anonimal>** Indeed  
**\<rehrar>** Even if they can't make it to a meeting, they can write something up before hand and have a proxy give it on their behalf.  
**\<rehrar>** It's honestly a bare minimum as far as standards go, and I'm all for it. :)  
**\<anonimal>** So how can we write this into an FFS standard?  
**\<johnalan>** measurable goals  
**\<rehrar>** I think that's a big of a longer conversation that should involve more people if we're talking about the FFS at large, and is outside the scope of this meeting.  
**\<rehrar>** \*bit of a longer  
**\<moneromooo>** tbh, I'd keep it fairly generic, and keep in mind some FFSes aren't coding.  
**\<rehrar>** if we're just talking about FFS's for Kovri, then sure, let's talk  
**\<rehrar>** I wouldn't mind writing up a draft and presenting it to everyone. :)  
**\<anonimal>** rehrar: https://github.com/monero-project/meta/blob/master/FFS  
**\<johnalan>** sorry gents gotta dash (no pun intended)  
**\<rehrar>** I'll fork and do some amends for review.  
**\<ArticMine>** I would prefer this to be applied to FFS across the Monero project, not just Kovri  
**\<anonimal>** ^  
**\* anonimal** was just typing that  
**\<rehrar>** This is actually pretty important for me, as I'm designing the new FFS interface for the new website. Have a meeting with Fluffy on Monday about some technical aspects, but getting this hammered down too would be very helpful.  
**\<anonimal>** I've been hoping for this discussion for a long time now; before I even opened up my first FFS. I'm glad to see we finally have the time/space to get to this.  
**\<rehrar>** It's possible to launch the new website without the redesigned FFS for the short term, and roll out the new one once this discussion has been hammered out.  
**\<rehrar>** I used hammered something twice. Slap me.  
**\<anonimal>** Lots of good input. I'll need to give this more thought too.  
**\<anonimal>** Anything else on this point?  
**\* anonimal** will add to the next meeting agenda  
**\<rehrar>** Nah, but it may be a good thing to add the the next #monero-dev agenda also  
**\<anonimal>** ^ fluffypony  
**\<anonimal>** 6. Code + ticket discussion / Q & A  
**\<anonimal>** 6 minutes left. Any questions/comments?  
**\<anonimal>** MoroccanMalinois: I'd like to add your testnet bash script to /contrib. What do you think?  
**\<MoroccanMalinois>** I'll wait for it to work :)  
**\<anonimal>** lol, ok  
**\<MoroccanMalinois>** Pretty sure it doesn't work related to the config  
**\<MoroccanMalinois>** External IP Detection seems completely broken  
**\<anonimal>** Which config?  
**\<MoroccanMalinois>** But it works perfectly on mainnet  
**\<anonimal>** I'll talk more with you about that after the meeting.  
**\<MoroccanMalinois>** Sure  
**\<anonimal>** Anything else on 6.?  
**\<anonimal>** 7. Any additional meeting items  
**\<rehrar>** I have something. So I've discussed with anonimal what it would be like for me to put in a FFS as a 'general staffer' of Kovri. There's a lot of work that needs to be done that isn't coding related. Website maintenance, reddit moderation and theme design, trying to get other developers interested, etc. I'd like some feedback from others on what the thoughts of something like this are instead of FFS for each project. Basically, bei  
**\<rehrar>** from moneromooo and others as well since there's a possibility of me doing something like this for Monero as well (I had a discussion with dEBRUYNE who supported the idea)  
**\<moneromooo>** This got cut: "Basically, bei [...] from moneromooo".  
**\<rehrar>** sec  
**\<rehrar>** Basically, being paid on a per hour basis 10ish/wk  
**\<rehrar>** 10ish hours I mean  
**\<ArticMine>** Maybe doing the FFS for Monero as a whole including Kovri  
**\<rehrar>** that's what I was thinking yes. 10 hours/wk for Monero and 10 for Kovri or something like that in one FFS  
**\<rehrar>** I would outline the goals for each project  
**\<rehrar>** Would this be something that would be useful? Creating content for Monero (like the reddit posts and helping people get plugged in) is something that's super fun for me and I love to do  
**\<rehrar>** and I would love to be able to devote dedicated time for it  
**\<endogenic>** the reddit posts could be something of a black hole  
**\<rehrar>** and Kovri, well, it's my favorite and the reason I'm here  
**\<endogenic>** if it were to be funded, it might be good to formalize the plan for making posts  
**\<moneromooo>** Reddit, I dunno, but website content curating would be useful, for example.  
**\<endogenic>** rather than it being, purely for example, contacting specific people who might not know about kovri  
**\<rehrar>** understood, content can be different  
**\<rehrar>** and yeah, web maintenance for both projects is definitely one thing I had in mind  
**\* anonimal** notes we don't have a formalized way of reporting completed work. Even I'm ad-hoc'ing it. Sidenote: I think we should give this more thought with FFS re-write work  
**\<ArticMine>** I looked at you work for https://getkovri.org/ it is rock solid  
**\<anonimal>** rehrar knows I'm on-board with the idea.  
**\<rehrar>** thanks so much ArticMine :)  
**\<ArticMine>** This kind of material is needed across the whole project  
**\<anonimal>** General question: would having a single person in charge of this much be questionable in terms of de-centralization?  
**\<ArticMine>** Posting in my opinion is secondary  
**\<endogenic>** well they could fall into the same accountability/status update stuff  
**\<endogenic>** anonimal:  
**\<rehrar>** ArticMine: on slow weeks with not many updates to be made, the time can be filled with more user guides and stuff, which are desperately needed. :)  
**\<rehrar>** Anyways, a discussion for another time. There's tons of ideas.  
**\<anonimal>** Ok, we're in over time. So I see no objections to rehrar's proposal?  
**\<endogenic>** yeah i would be happy to see rehrar working on that stuff  
**\<anonimal>** Is this in the FFS ideas section?  
**\<rehrar>** I haven't made it yet, no.  
**\<rehrar>** I'd have questions on what people think a fair price would be, but that can be for after the meeting. :)  
**\<anonimal>** In the future I think it's better to post there first and link here because of the amount of people not on IRC.  
**\<rehrar>** Ok. Sorry.  
**\<anonimal>** No problem, I just hope the word gets out better that's all. We are but a small a group.  
**\<anonimal>** I have one thing to add to this last agenda item:  
**\<endogenic>** preannouncement??  
**\* anonimal** slams fist on table, plan foiled by endogenic  
**\<endogenic>** lolol  
**\* anonimal** typing  
**\<ArticMine>** anonimal: General question: would having a single person in charge of this much be questionable in terms of de-centralization? \<--- Not a major concern if the contend is licensed under a sharealike license CC /GNU etc  
**\<ArticMine>** Since it can always be forked  
**\<anonimal>** One last thing: it seems like some people have been misinterpreting my language. Some people seem to think I'm attacking them when I am not. I don't know why. Maybe I'm being direct / honest / too the point / curt?  
**\<anonimal>** I do point out ideas, and question ideas, but I don't consider that attacking.  
**\<anonimal>** I do that to my own ideas. Even if I attack an idea, I wouldn't take it personal.  
**\<anonimal>** I'm bringing this up because I've seen this since the beginning; but the issues were 99.9% with problem contributors who have no gone to the wayside.  
**\<anonimal>** \*now gone to  
**\<i2p-relay> {-pigeons}** sometimes in pursuit of efficiency engineers can ignore little customs and manners that make people comfortable in communication  
**\<endogenic>** imo honesty has the function of keeping things simple, clear, and bright - but ppl tend to follow what they feel instead of their rational understanding, which is why too-blunt yet frank criticism of a person who has some self-esteem or self-worth issues usually ends up not working out - so imo it's a question of how people are led and managed  
**\<i2p-relay> {-pigeons}** people online are from all different backgrounds, its hard to know their communication style, so a little extra care probably helps  
**\<endogenic>** on one hand, you probably (definitely) could have been more strict with guzzi early on but didn't want to based on some shred of idealism about him  
**\<endogenic>** what i've had to learn is that people only take what they're ready to take from a teaching  
**\<endogenic>** i.e. ppl hear what they want  
**\<endogenic>** so pragmatism kind of means living with that reality and operating as if not being able to rely on others - i think it causes others to have to step up and behave like adults  
**\<rehrar>** I find two things contribute here. Text is horrible for conveying meaning, and coders are not always (there are exceptions, don't kill me) super socially adept :D  
**\<rehrar>** but mostly the first  
**\<rehrar>** seriously, being in person has its advantages  
**\<endogenic>** let's all move to the Monero Corporate Headquarters  
**\<anonimal>** endogenic: you whacked me across the face with an epiphany stick with "could have been more strict with guzzi early on but didn't want to based on some shred of idealism about him"  
**\<endogenic>** in Beverly Hills  
**\<endogenic>** anonimal: i keep getting whacked by the same stick and hope that i get it into my thick skull one of these days :P  
**\<anonimal>** pigeons I think you have great points, but how does one bring extra care if care means something different to everyone?  
**\<ArticMine>** I think there is a balance here  
**\<anonimal>** rehrar: I completely agree about text as it relates to IRC  
**\<rehrar>** I don't think guzzi was malicious, and everyone has a different viewpoint. There are two sides to every story. We just have to be a little more careful on making sure our meanings are understood because of the text-based environment.  
**\<rehrar>** But aside from that, what's done is done, and we can move forward with a great new contributor under FFS  
**\<rehrar>** it'd be wise for all of us to move on from this and focus on what needs to be done to push Kovri forward  
**\<rehrar>** learning lessons along the way about communication, of course.  
**\<anonimal>** Indeed.  
**\<anonimal>** I have to point out that I know how dry and straightforward I can be most of the time. I've done this to avoid any emotional misinterpretation. Maybe some people interpret this as "mean"?  
**\<rehrar>** I think at its core, it's a bit of a fault of the FFS at large. A similar thing happened with FireIce as I recall  
**\<endogenic>** anonimal: if only we could see your smiling face… :)  
**\<rehrar>** defacto expectations by community and contributors that are not fulfilled in some way  
**\<anonimal>** Nows the time for anonimal bashing! Get those sticks, bats, golf clubs, or weapons of choice!  
**\<rehrar>** is it a smile or a grimace? :P  
**\<endogenic>** lol  
**\<rehrar>** that's why I'm saying. One night at the club for all of us and we'll all be on the same page. :D  
**\<rehrar>** flash a few moneros and pick up a few honeys, BAM! comraderie  
**\<rehrar>** anyways, end of meeting?  
**\* endogenic** opens a barolo in your and the devs honor  
**\<anonimal>** rehrar: hopefully we can improve the FFS process  
**\<anonimal>** endogenic: yes, a smiling face would help  
**\<endogenic>** lol anonimal just meant your face  
**\<endogenic>** i.e. on a podcast or something - ribbing you for being anon  
**\<endogenic>** and also wondering what effect that would have…  
**\<anonimal>** I think we should talk more about that at another meeting.  
**\<endogenic>** yeah i had no conscious intention to bring it up again  
**\<endogenic>** sry  
**\<anonimal>** Right now I'm curious for any last words about my character as it relates to communication.  
**\<anonimal>** Not to be narcissistic, but I have to keep myself in check too.  
**\<rehrar>** I am not qualified to comment. I was not here for the majoirty of exchanges between you and guzzi  
**\<anonimal>** And if I'm pissing all you off, I'd like to hear about it.  
**\<rehrar>** in regards to myself, I have no issues with you. Say it like it is, and I'll do the same and we gucci  
**\<anonimal>** rehrar: ok. I must say that bad apples come and go, and I can't take blame for that reality.  
**\<anonimal>** Ok, thanks everyone for the overtime  
**\<rehrar>** time to watch fresh prince  
**\<anonimal>** Great meeting :) Thank you all  
**\<anonimal>** lol rehrar, I can totally imagine you watching that show X)  
**\<anonimal>** Thanks for the great input everyone  
**\<ArticMine>** Next meeting time?  
**\<anonimal>** Ooops! Sorry, thanks ArticMine  
**\<anonimal>** 8. Confirm next meeting date/time  
**\<anonimal>** Same time, two weeks from today?  
**\<serhack>** okay  
**\<anonimal>** Same as monero's?  
**\<ArticMine>** After the Monero meeting  