---
layout: post
title: Logs for the Kovri Dev Meeting Held on 2017-07-09
summary: Brief review of what has been completed since last meeting, discussion of meta issues, and code & open tickets discussion
tags: [dev diaries, i2p, crypto]
author: dEBRUYNE / fluffypony
---

# Logs  

**\<anonimal>** 1. Greetings  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\<anonimal>** 3. Contributor FFS check-in / status  
**\<anonimal>** 4. Open Meta issue review https://github.com/monero-project/meta/issues  
**\<anonimal>** 5. Code + ticket discussion / Q & A  
**\<anonimal>** 6. Any additional meeting items  
**\<anonimal>** 7. Confirm next meeting date/time  
**\<anonimal>** Hello! :)  
**\<MoroccanMalinois>** hi  
**\<rehrar>** Yo  
**\<ArticMine>** hi  
**\<anonimal>** Hi MoroccanMalinois rehrar ArticMine  
**\<anonimal>** fluffypony too?  
**\<i2p-relay> {-fluffypony}** yes  
**\<anonimal>** Hi fluffypony  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\<anonimal>** On my end: testnet development and related collab with MoroccanMalinois and lazygravy + SSU/Ident collab/PR review with MoroccanMalinois (and related research/development), rehrar collab for his site related work, some collab with serhack/ericcion Italian translations for kovri-site, email + PR collab + R&D with rbrunner on the windows InnoSetup installers, Monero project work (monero svn to git for  
**\<anonimal>** unbound), work with pigeons on setting up kovri.i2p (now online!), answer various IRC/reddit Q&A + related collab.  
**\<rehrar>** This past week was launching the Monero website. Now that's basically done.  
**\<anonimal>** Some various things here and there, I2P/Tor family node research and more.  
**\<anonimal>** Some French + Russian kovri-site translations are in the works, they are in the PR pit.  
**\<anonimal>** Same with kovri repo, I have yet to review the new MM PR's.  
**\<anonimal>** Did we miss anything else?  
**\<anonimal>** 3. Contributor FFS check-in / status  
**\<anonimal>** I'm here, checked-in! MoroccanMalinois is here. Yay!  
**\<MoroccanMalinois>** i will be ok with a milestone in next meeting if last PR's get merged :)  
**\<anonimal>** Excellent, I'm sure they will.  
**\<anonimal>** re: FFS check-in, MoroccanMalinois is doing great. I can't review myself, anyone else on point 3.?  
**\<anonimal>** Well, I *can* review myself, but that wouldn't be fair now would it? ;)  
**\<MoroccanMalinois>** lol  
**\<i2p-relay> {-fluffypony}** lol  
**\<i2p-relay> {-fluffypony}** leave it to the community to review  
**\<anonimal>** With the exception of this intermittent week, point 2 shows that I've been active and busy, that I can say the least.  
**\<anonimal>** Alright, moving on. 4. Open Meta issue review https://github.com/monero-project/meta/issues  
**\<anonimal>** Starting from the top down, #80  
**\<anonimal>** rehrar, any news on that front?  
**\<anonimal>** #77 and #78, fluffypony what do you think?  
**\<i2p-relay> {-fluffypony}** checking  
**\<rehrar>** Sorry. Afk 2 min  
**\<i2p-relay> {-fluffypony}** what's a topic  
**\<i2p-relay> {-fluffypony}** lol  
**\<i2p-relay> {-fluffypony}** anonimal: won't web hooks for -site and -docs be too distracting?  
**\<rehrar>** This week is all Kovri for me.  
**\<rehrar>** I'll be writing the brief tomorrow and presenting it  
**\<anonimal>** fluffypony: well, not for me: it would be helpful because of the sometimes very large notification lists I get in github.  
**\<rehrar>** I'll also be importing the tech from the new Monero website to Kovri. That which is applicable.  
**\<anonimal>** Awesome rehrar  
**\<anonimal>** fluffypony: is it too much?  
**\<i2p-relay> {-fluffypony}** I don't mind activating it, it's your call :)  
**\<anonimal>** Can we give it a trial run?  
**\<anonimal>** (e.g., do it until too many people complain)  
**\<serhack>** Hey anonimal  
**\<serhack>** How are you?  
**\<anonimal>** fluffypony: re: topics, quick link https://help.github.com/articles/classifying-your-repository-with-topics/  
**\<anonimal>** Hi serhack  
**\<i2p-relay> {-fluffypony}** tks  
**\<anonimal>** serhack: sono stanco, ma we can chat more after the meeting  
**\<ArticMine>** On 4 there is Project licensing #85 impacts kovri  
**\<serhack>** Oh okay  
**\<ArticMine>** Was opened to get feedback  
**\<rehrar>** Kovri doesn't have to have the same license as Monero, right?  
**\<anonimal>** ArticMine: I took a quick look at that earlier this week, will look again now.  
**\<i2p-relay> {-fluffypony}** rehrar not necessarily, but might be better if we did  
**\<moneromooo>** kovri's library part will be used by monero at some point.  
**\<i2p-relay> {-fluffypony}** I don't see a reason to have different licenses  
**\<anonimal>** BSD-3, yes I believe so.  
**\<anonimal>** re: licensing, no matter what, we'd need to adhere to the licenses of all bundled dependencies, right?  
**\<ArticMine>** Yes  
**\<ArticMine>** That is part of the issue in 85  
**\<ArticMine>** I2P is effectively GPL v2  
**\<moneromooo>** "I2P" ? The Java router ?  
**\<ArticMine>** Yes java  
**\<anonimal>** Huh? Java I2P?  
**\<ArticMine>** java makes I2P GPL v2  
**\<anonimal>** I don't see how that applies to us as we're not using any of their code.  
**\<anonimal>** And most of the important bits are "free (adj.): unencumbered; not under the control of others", whichever license that equates to.  
**\<ArticMine>** Not directly to kovri  
**\<anonimal>** Open specification is different than implementation in terms of licensing, right?  
**\<ArticMine>** but that is why 5 was opened to deal with this discussion  
**\<ArticMine>** 85  
**\<anonimal>** If monero goes dual-license, then we must?  
**\<ArticMine>** Not necessarily  
**\<anonimal>** Ok. I'll need more thought on this. I can add to the next agenda too. Does anyone have any strong feelings on this now?  
**\<ArticMine>** I think it is best if we discuss it on Github under 85  
**\<ArticMine>** Then we can look at it in the next meeting  
**\<rehrar>** I have strong feelings to go proprietary.  
**\<moneromooo>** er, we would not do that.  
**\<rehrar>** But aside from that let's move on.  
**\<rehrar>** I kid.  
**\<anonimal>** ArticMine: ok.  
**\<anonimal>** re: #63, rehrar did you figure out your git branching issue?  
**\<rehrar>** Web launch took priority.  
**\<rehrar>** We've been feverishly working on it and it is done for now. I've been reading into branches yes.  
**\<rehrar>** Sorry, also headed to Mexico atm. :/ So my replies will be intermittent.  
**\<rehrar>** Should be resolved in the next two days.  
**\<anonimal>** I haven't made any new contributions to it yet so I don't think it's done for now ;)  
**\<rehrar>** No, I meant the website  
**\<rehrar>** Working in the website and the site is done for now.  
**\<anonimal>** Ok  
**\<anonimal>** re: #46, fluffypony are we still scheduled for the 20th?  
**\<i2p-relay> {-fluffypony}** I have no idea - I don't have it in my calendar, has someone checked with Shay?  
**\<anonimal>** Eek, I thought he sent an email after he posted in #46  
**\* anonimal** will ping him right now  
**\<i2p-relay> {-fluffypony}** tks  
**\<anonimal>** I have a feeling he may have been waiting for more responses.  
**\<anonimal>** #43, hmm  
**\<rehrar>** This week. ;)  
**\<rehrar>** First step is to nail down #80 imo  
**\<rehrar>** Because then I can start producing some material.  
**\<anonimal>** I think rehrar had thoughts on that area. Sounds like everyone is at max capacity at the moment though.  
**\<anonimal>** Ok  
**\<anonimal>** fluffypony, is #12 still applicable?  
**\<i2p-relay> {-fluffypony}** checking  
**\<i2p-relay> {-fluffypony}** yes - label bot took precedence  
**\<i2p-relay> {-fluffypony}** but we'll pick that up after it's deployed  
**\<rehrar>** Spoke to @fluffypony, could be resolved as early as next week  
**\<rehrar>** Over one year ago. :P  
**\<i2p-relay> {-fluffypony}** lol  
**\<i2p-relay> {-fluffypony}** we had to choose a mail provider  
**\<i2p-relay> {-fluffypony}** that took multiple face-to-face meetings  
**\<anonimal>** Oh neat, label bot is online  
**\<rehrar>** Can we give him a better name?  
**\<i2p-relay> {-fluffypony}** only in meta right now  
**\<moneromooo>** Oooh, where is the documentation ?  
**\<anonimal>** Oh lol, I see, rehrar quoted my kovri comment from March 16th, 2016, heh X)  
**\<anonimal>** fluffypony: so #12 is applicable but not finished?  
**\<i2p-relay> {-fluffypony}** yes  
**\<anonimal>** Ok  
**\<i2p-relay> {-fluffypony}** @rehrar ask pigeons  
**\<rehrar>** Will do.  
**\<anonimal>** #9 #19 #29 #30 are pigeons territory I believe.  
**\<anonimal>** Anything else on this point (meta issue review)?  
**\<anonimal>** #24 #26 #27 will be useful. ajs waits patiently on #27. We can eventually make a big move on #27 when the time comes. That should be fun.  
**\<anonimal>** Out of time, 5. Code + ticket discussion / Q & A  
**\<anonimal>** Nothing pressing at the moment aside from the open PR's which will be reviewed.  
**\<anonimal>** Anything else on 5.?  
**\<anonimal>** 6. Any additional meeting items  
**\<anonimal>** Nothing from me at the moment. ArticMine how urgent was meta #85 in terms of coming to a resolution?  
**\<rehrar>** I think we gucci.  
**\<ArticMine>** I would give it at least two weeks  
**\<ArticMine>** Once we see discussion / comments  
**\<rehrar>** K. Going to be crossing soon, so I'm out for now. Cya all Kovri Peeps.  
**\<ArticMine>** It was promoted by a Monero dependency going to a copyleft  
**\<anonimal>** Ok  
**\<anonimal>** 7. Confirm next meeting date/time  
**\<anonimal>** Same time, two weeks from now?  
**\<anonimal>** rehrar will you be back by then?  
**\<rehrar>** It's a day trip.  
**\<rehrar>** I live like right next to the border.  
**\<rehrar>** Ill be back before my day is over, and right to work tomorrow.  
**\<anonimal>** Oh, alright, then we'll keep the usual meeting date/time.  
**\<anonimal>** Thanks everyone :)  
**\<endogenic>** thanks anonimal :)  