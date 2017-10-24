---
layout: post
title: Logs for the Kovri Dev Meeting Held on 2017-05-07
summary: Brief review of what has been completed since last meeting, Monero HackerOne Bounty, 96boards OpenHours showcase, website discussion, and code & open tickets discussion
tags: [dev diaries, i2p, crypto]
author: dEBRUYNE / fluffypony
---

### Logs  

**\<anonimal>** 1. Greetings  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\<anonimal>** 3. More preparation for [96boards.org OpenHours showcase for Kovri / Monero](https://github.com/monero-project/meta/issues/46) (@fluffypony @danrmiller location status)  
**\<anonimal>** 4. Status (again) of [Monero HackerOne umbrella and bounty](https://github.com/monero-project/meta/issues/39). [hackerone.com/monero](https://hackerone.com/monero) is online but we need to resolve FFS funding before inviting researchers. VRP status for all projects + bounty status  
**\<anonimal>** 5. Open forum for https://github.com/monero-project/kovri/issues/630  
**\<anonimal>** 6. Website status (@rehrar @bigreddmachine @alvinjoelsantos @danrmiller)  
**\<anonimal>** 7. @EinMByte ...where is he? Github repo privilege discussion  
**\<anonimal>** 8. Code + ticket discussion / Q & A  
**\<anonimal>** 9. Any additional meeting items  
**\<anonimal>** 10. Confirm next meeting date/time  
**\<anonimal>** Hello  
**\<moroccanmalinois>** hi  
**\<sgp>** hey!  
**\<endogenic>** o/  
**\<ajs>** Here  
**\<iDunk>** \o  
**\<i2p-relay> {-fluffypony}** hi!  
**\<rehrar>** Here for a bit, then gone, then back.  
**\<anonimal>** Yay, enough people for a party.  
**\<Heretoobserve>** Hello  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\<rehrar>** 3...2...1... KOVRI!!!  
**\<ArticMine>** hello  
**\<anonimal>** For me, see http://forum.getmonero.org/9/work-in-progress/86967/anonimal-s-kovri-full-time-development-funding-thread?page=&noscroll=1#post-90900  
**\<anonimal>** moroccanmalinois can fill us in on his work.  
**\<moroccanmalinois>** i've been playing with fuzz testing  
**\<i2p-relay> {-fluffypony}** nice  
**\<anonimal>** I've looked through the PR's, looks like fun.  
**\<moroccanmalinois>** it's the beginning. More tests to come  
**\<anonimal>** Any questions/comments on point 2?  
**\<i2p-relay> {-fluffypony}** and guzzi ?  
**\<anonimal>** guzzi is not here, ...again...  
**\<anonimal>** He says he's doing work but I haven't seen a commit or question from him in over 7 weeks, AFAICT.  
**\<anonimal>** I think he's trying to separate the contexts from the singleton. At least that's the end goal.  
**\<i2p-relay> {-fluffypony}** guzzi: when you read this, please make an effort to attend meetings  
**\<i2p-relay> {-fluffypony}** I know you're around at other times, but meetings are important  
**\<anonimal>** Yes, please.  
**\<anonimal>** Ok, anything else on 2.?  
**\<i2p-relay> {-fluffypony}** no  
**\<anonimal>** 3. More preparation for [96boards.org OpenHours showcase for Kovri / Monero](https://github.com/monero-project/meta/issues/46) (@fluffypony @danrmiller location status)  
**\<anonimal>** Is pigeons still in Africa? This point was moved from last meeting.  
**\<i2p-relay> {-pigeons}** i returned yesterday  
**\<moneromooo>** Are you suggesting pigeons migrate ?  
**\<i2p-relay> {-pigeons}** i saw rock doves  
**\<anonimal>** fluffypony? How's it going?  
**\<i2p-relay> {-fluffypony}** anonimal: it's a podcast, right?  
**\<anonimal>** https://www.96boards.org/openhours/, there are videos too.  
**\<i2p-relay> {-fluffypony}** ok well I'm ready whenever  
**\<i2p-relay> {-fluffypony}** I don't really prepare for stuff like this  
**\<bigreddmachine>** sorry i'm late!  
**\<anonimal>** Ok well what time/date works for you?  
**\<anonimal>** fluffypony ^  
**\<i2p-relay> {-fluffypony}** anonimal: my PA would have to schedule it - probably best to get my PA to schedule myself and pigeons and them  
**\<i2p-relay> {-fluffypony}** she's good at that  
**\<i2p-relay> {-fluffypony}** it's literally her job :-P  
**\<i2p-relay> {-pigeons}** I was thinking ask hyc if he's interested, he's been playing with arm and monero i think  
**\<i2p-relay> {-fluffypony}** cool  
**\<i2p-relay> {-fluffypony}** hyc is a beautiful man  
**\<bigreddmachine>** +1 Ric's PA. She was great when i wanted to schedule a podcast  
**\* anonimal** pinged him in #monero-dev  
**\<anonimal>** Ok well at this point, IMHO, fluffypony I think it would be good for you to touch base / introduce yourself to sdrobertw in #OpenHours on freenode.  
**\<anonimal>** I think I can only play the middleman for so long.  
**\<i2p-relay> {-fluffypony}** email is better for Shay, I don't think I can teach her IRC :-P  
**\<anonimal>** Contact info? I have none.  
**\<i2p-relay> {-fluffypony}** for them?  
**\<i2p-relay> {-fluffypony}** didn't we reach out to them via email first?  
**\<i2p-relay> {-fluffypony}** \* can't remember  
**\<anonimal>** For Shay  
**\<anonimal>** No, not via email, all IRC.  
**\<i2p-relay> {-fluffypony}** oh lol  
**\<i2p-relay> {-fluffypony}** pa@spagni.net  
**\<anonimal>** Alright, anything else on this point before moving on?  
**\<anonimal>** 4. Status (again) of [Monero HackerOne umbrella and bounty](https://github.com/monero-project/meta/issues/39). [hackerone.com/monero](https://hackerone.com/monero) is online but we need to resolve FFS funding before inviting researchers. VRP status for all projects + bounty status  
**\<anonimal>** I've sent a VRP to monero, it's been merged. I believe we're funded at ~500 XMR, which is great.  
**\<anonimal>** Any questions?  
**\<anonimal>** We just need to launch after submitting VRP to the GUI (and site?)  
**\<anonimal>** Sound good?  
**\<bigreddmachine>** Is the bounty held in xmr or something else?  
**\<anonimal>** Yes. Link to FFS in the meta issue.  
**\<ArticMine>** https://forum.getmonero.org/8/funding-required/87597/monero-bounty-for-hackerone It was funded to 500 XMR and then increased to 1000 XMR for further funding  
**\<bigreddmachine>** ty  
**\<anonimal>** I think we can start now before funding is at 1000.  
**\<anonimal>** (it won't mean we'll find researchers immediately anyway)  
**\<anonimal>** Any questions/comments before moving onto next point?  
**\<i2p-relay> {-fluffypony}** yrah  
**\<i2p-relay> {-fluffypony}** agreed  
**\<i2p-relay> {-fluffypony}** we can continue to increase it as necessary  
**\<anonimal>** Ok. Moving on,  
**\<anonimal>** 5. Open forum for https://github.com/monero-project/kovri/issues/630  
**\<anonimal>** Comments needed before we move on this.  
**\<i2p-relay> {-fluffypony}** I agree with MoroccanMalinois, but I think it's manageable if we set a severity  
**\<i2p-relay> {-fluffypony}** and some caveats  
**\<moneromooo>** Maybe a strict validity domain definition would do good (ie, "we only accept vulns in the following categories").  
**\<moneromooo>** And then expand the list as stuff matures.  
**\<bigreddmachine>** moneromooo - why would we restrict?  
**\<moneromooo>** To prevent known problems from being reported, or problems in stuff that is known to be unfinished.  
**\<i2p-relay> {-pigeons}** because the code has a bunch of legacy mess and is early state with low hanging fruit that is just later on the to fix when that section gets refactored  
**\<anonimal>** Yes. So, with that said, I don't know what categories we could even have.  
**\<anonimal>** *at this stage*  
**\<anonimal>** moneromooo: did you have any ideas on categories for this stage?  
**\<moneromooo>** No. I've not really looked at kovri yet, despite saying I would (sorry).  
**\<i2p-relay> {-pigeons}** i2p consensus related issues  
**\<i2p-relay> {-pigeons}** if we implement like X we might cause incompatibility  
**\<i2p-relay> {-pigeons}** maybe those but again maybe those are known and will be fixed when those sections are given love  
**\<moneromooo>** Anything which can leak keymat. Good starting point.  
**\<moneromooo>** Ideally you'd start giving bounties when you know you've done what you could, and the bounty to find bugs is less than what your time is worth looking at it :)  
**\<anonimal>** pigeons: Well, then I think that's java I2P's problem because they would then have to keep up with us. What we could do now though is start with a research-related category for general specifications?  
**\<moneromooo>** So it's a bit subjective.  
**\<anonimal>** moneromooo: indeed, and this is border-lining on simply hiring a new dev too with the funds available.  
**\<moneromooo>** Well, the draw is that the bounty ensures results for the money.  
**\<moneromooo>** So expert time.  
**\<anonimal>** What if we opened bounty for non-implementation research? I know this is an MRL area though.  
**\<anonimal>** Or we could open more categories for implementation but the payout is smaller because code is Alpha?  
**\<moneromooo>** For finding bugs in the theory, definitely worth doing so (for monero anyway, I expect kovri's following established research already).  
**\<anonimal>** (then they would risk waiting to beta to 0day to get bigger payout?)  
**\<rehrar>** what up kids? I'm here.  
**\<anonimal>** I think monero's research is more vetted than I2P's, even though I2P has been around longer. Simply because there are less moving parts.  
**\<moroccanmalinois>** +1 for bounty for non-implementation research  
**\<moneromooo>** Interesting.  
**\<anonimal>** Just my opinion. I've read the I2P papers available, I'm not blown away but it's better than nothing.  
**\<anonimal>** And not like I'm in a position to drop everything to do purely research so...  
**\<anonimal>** We'll add categories for bounty? One obvious one being research. Maybe crypto implementation sooner than later since that's a big one.  
**\<anonimal>** Sound fair?  
**\<moneromooo>** From a relative outsider, it seems like a sensible start.  
**\<bigreddmachine>** yes. is "leaked info" too broad of a category?  
**\<moroccanmalinois>** yes for me  
**\<anonimal>** Yes because a leak would cover too much code that hasn't been vetted.  
**\<anonimal>** \* could cover  
**\<anonimal>** Ok, I'll get that going then.  
**\<anonimal>** Moving on. 6. Website status (@rehrar @bigreddmachine @alvinjoelsantos @danrmiller)  
**\<i2p-relay> {-pigeons}** I need to talk with fluffypony about a potential dns thing  
**\<rehrar>** aight, so just in case somebody hasn't seen the Kovri web design here it is: http://imgur.com/a/An8K8  
**\<rehrar>** it's the top one  
**\<i2p-relay> {-pigeons}** then the demo of ajs' site should be up  
**\<i2p-relay> {-fluffypony}** I got msgs about it  
**\<i2p-relay> {-fluffypony}** will look at it tomorrow  
**\<rehrar>** it's based on the same framework as the getmonero.org website, so once the custom framework is made for one, it is easy to make pages for the other  
**\<rehrar>** my update is that we're making the framework even now, and it's coming along well, I should be able to make a few experimental Kovri pages soon  
**\<rehrar>** The question is content.  
**\<anonimal>** I think the "It's I2P, but in C++" phrase should go; we should use our standard "A secure, private, untraceable C++ implementation of the [I2P anonymous network](https://getmonero.org/knowledge-base/moneropedia/i2p)"  
**\<ajs>** I will work with rehrar to write up some content, but need direction on what should be included.  
**\<rehrar>** that's fine. Copy is not indicative. :)  
**\<bigreddmachine>** My past month has been packed getting ready for my phd comprehensive exam (1 step before the defense). So I haven't looked at the site yet, but talked briefly with ajs about it and plan to get more involved now that that's done.  
**\<anonimal>** Other than that, can we move this item to the website meeting in #monero in 10 minutes?  
**\<rehrar>** sure, that sounds alright.  
**\<moneromooo>** It looks nice (says the cow who's got no clue about design).  
**\<ajs>** K  
**\<anonimal>** bigreddmachine ajs: will you be around in 10 minutes in #monero?  
**\<ajs>** Yes  
**\<bigreddmachine>** yeah, i'm also editing tonight's podcast episode so i may take a minute to reply  
**\<anonimal>** rehrar: yes, what moneromooo said, looks nice  
**\<rehrar>** cool. If people have ideas for content that are not on the demo site  
**\<anonimal>** Ok, moving on. 7. @EinMByte ...where is he? Github repo privilege discussion  
**\<rehrar>** let me know  
**\<rehrar>** I'd like to have a simple website for alpha release :)  
**\<anonimal>** fluffypony: so... his last commit was from Septemeber 19th, he's not responded to 99% of my pings since then...  
**\<bigreddmachine>** i haven't seen him since i started getting involved in Jan  
**\<anonimal>** I speak highly of him and his work, I think he's a great contributor and wish he was around more.  
**\<bigreddmachine>** could be a legal issue?  
**\<anonimal>** The problem is he's not around anymore, he has assigned issues of which I've had to assign myself since he's not around to do them.  
**\<anonimal>** And he has repository push access. If something happened to him and his account is compromised, we could be left in an embarrassing trolling situation where someone deletes the repo.  
**\<anonimal>** I don't want to send any wrong signals but I also think access privileges should be on an as-needed basis.  
**\<bigreddmachine>** i think that's fair. can always be re-established if he comes back and he can be verified  
**\<bigreddmachine>** in that vein, should things like Salti tracking be moved to another place?  
**\<anonimal>** I don't know, we'll have to bring that up at the next meeting I think since we're running out of time.  
**\<anonimal>** fluffypony: any thoughts about this? Will you remove EinMByte's github push access privileges?  
**\<moneromooo>** I think it's fair to revoke for inactivity and failure to reply to pings. Reinstate when back.  
**\<bigreddmachine>** okay, can we add #619 to next meeting's agenda?  
**\<moneromooo>** I'd also want to remove warptangent's key (unlikely to be back to use it) and a few others.  
**\<anonimal>** bigreddmachine: oh, sure I guess, more research/info needed.  
**\<bigreddmachine>** k i'll just reply to the issue and talk about it there for now. sorry to jump into other discussion about that.  
**\<anonimal>** No problem  
**\<anonimal>** Since we're running out of time, 8. Code + ticket discussion / Q & A  
**\<bigreddmachine>** last update from me — mozilla work continues with the proxy stuff, but not ready yet. i don't have a good feel for how long  
**\<anonimal>** Anything pressing? Questions/comments that can't be answered on github or after the meeting?  
**\<anonimal>** Ok, thanks bigreddmachine  
**\<rehrar>** not from me, I'll be in contact :(  
**\<rehrar>** :)  
**\<anonimal>** 9. Any additional meeting items  
**\<bigreddmachine>** none. thanks anonimal!  
**\<anonimal>** Nothing from me, other than I need to AFK rehrar so, bigreddmachine ajs pigeons if you want to talk more about kovri-site then I'll have to read backlog  
**\<rehrar>** aight, thanks.  
**\<sgp>** Now over to monero!  
**\<ajs>** K  
**\<anonimal>** Thank you all if you keep the torch burning for the site, awesome.  
**\<anonimal>** 10. Confirm next meeting date/time  
**\<anonimal>** 2 weeks, same time?  
**\<rehrar>** indeed  
**\<anonimal>** Ok. Thanks everyone :)  