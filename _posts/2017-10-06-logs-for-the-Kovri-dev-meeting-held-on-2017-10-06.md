---
layout: post
title: Logs for the Kovri Dev Meeting Held on 2017-10-06
summary: Brief review of what has been completed since last meeting, contributor FFS check-in / status, and code & open tickets discussion
tags: [dev diaries, i2p, crypto]
author: dEBRUYNE / fluffypony
---

# Logs  

**\<anonimal>** 1. Greetings  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\<anonimal>** 3. Contributor FFS check-in / status  
**\<anonimal>** 4. Code + ticket discussion / Q & A  
**\<anonimal>** 5. Any additional meeting items  
**\<anonimal>** 6. Confirm next meeting date/time  
**\<anonimal>** Hello  
**\<MoroccanMalinois>** Hi  
**\<ArticMine>** Hi  
**\<ajs>** Yo  
**\<anonimal>** ping rehrar  
**\<rehrar>** Yeah I'm here. Sorry.  
**\<rehrar>** Finishing something up with wife. Done in 2.  
**\<anonimal>** 2 what?  
**\<rehrar>** Min. Sorry.  
**\<rehrar>** Ok. You have 100% rehrar now.  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\<anonimal>** For me, in addition to the usual project work + review/collab, testnet development and a big chunk of time spent toward a complete NTCP rewrite  
**\<anonimal>** We last met on the 24th, that week was productive, last week was a very productive 60 hour week, this week was very unproductive.  
**\<anonimal>** (for me)  
**\<anonimal>** Sunday's Vegas shooting has kept me pre-occupied as well as finally getting to long-standing non-kovri personal tech things resolved.  
**\<rehrar>** I can bump docs by myself, finished the Spanish translation. First draft of Russian translation should be done tomorrow. Started new website construction. Obtained svgs of Kovri logo from FP (should I push them anywhere?) and worked on the press kit.  
**\<rehrar>** Oh, I'm all set up for Kovri twitter now also, and can ask a few questions regarding that later this meeting.  
**\<anonimal>** Yes, meta repo like we discussed. If they go on the site then kovri-site.  
**\<anonimal>** Anything else for point 2.?  
**\<erciccione\_[m]>** hi everybody  
**\<MoroccanMalinois>** Not much for me, i understand better some of the weird ssu numbers that i had, but still need more debugging  
**\<anonimal>** Ok  
**\<anonimal>** There's been a lot of new French translation work, collab between woodyjon and MoroccanMalinois. rehrar will you summarize any other team translation work?  
**\<rehrar>** Sure.  
**\<rehrar>** So the translation efforts have been, at least from my end, focused on the BTC Manager article that they put out about Kovri. We agreed it's a really good Kovri intro and we can point noobs to Kovri there for them to understand more about the project.  
**\<rehrar>** I'm taking on Spanish and Russian, and I think I found a Dutch guy who is interested in translating.  
**\<anonimal>** Ok, great  
**\<rehrar>** On another front, we are also receive awesome help from woodyjon with the French translation of the site.  
**\<rehrar>** I will start doc Russian translation also  
**\<erciccione\_[m]>** @rehrar i'm gonna make the italian translation of the article as soon as i get my stuff back (moving home)  
**\<anonimal>** rehrar: Yes, I just mentioned woodyjon. He's also working on the few bits in kovri-site?  
**\<anonimal>** erciccione\_[m]: great  
**\<rehrar>** There was a second article featuring anonimal from BTC Manager a bit ago, and anyone is free to translate it. There is a repo set up at https://GitHub.com/rehrar/monero-translations  
**\<anonimal>** 3. Contributor FFS check-in / status  
**\<rehrar>** Yeah. Woodyjon is making quick work of the site.  
**\<MoroccanMalinois>** Nothing new for me  
**\<anonimal>** I'm chugging along.  
**\<rehrar>** Majority hours are going to Monero right now. Planned on finished cranking out a huge chunk of Kovri hours for Monero in the next two days.  
**\<anonimal>** MoroccanMalinois: are you don't with your last milestone? I've lost track of how many meetings you've said you'd be done with it by now so I'm starting to get a little concerned. I know at least more than 3 meetings.  
**\<anonimal>** Is everything ok?  
**\<anonimal>** \*done  
**\<MoroccanMalinois>** unexpected professional obligations ... i prefer to submit what i already have before asking for a milestone, but it requires more debugging ...  
**\<anonimal>** Ok, but *if* you've put in the hours already then I think you should get the payout.  
**\<anonimal>** Otherwise people are wondering what you're doing (it's been at least 2 months since last milestone completion and no further info in the forum thread).  
**\<anonimal>** Does that sound fair?  
**\<ArticMine>** Maye an informal update?  
**\<ArticMine>** Maybe  
**\<MoroccanMalinois>** Sounds fair, will publish something soon  
**\<anonimal>** Ok, sounds good.  
**\* anonimal** hopes your unexpected obligations go smoothly  
**\<MoroccanMalinois>** me too :)  
**\<anonimal>** Anything else on point 3 FFS check-in?  
**\<anonimal>** 4. Code + ticket discussion / Q & A  
**\<anonimal>** One thing that wasn't mentioned in the brief review was selsta's contributions and ongoing work. We now have colored logging to console and, last I heard, selsta is working on kovri-util cpuid functionality.  
**\* anonimal** checks issue trackers for point 4  
**\<MoroccanMalinois>** One question: on testnet floodfill instances keeps indefinitely trying to build a session with themselves since they are in the reseed zip (hence number of SessionRequest that keeps increasing), should we try to skip building this session based on IP comparison ?  
**\<anonimal>** I take it you've somehow implementing something which allows only a specific number of floodfills to be created rather than every RI?  
**\<anonimal>** Or is every router still --floodfill?  
**\<selsta>** anonimal: yes cpuid is my next project. although I haven’t started yet as uni is quite challenging :/  
**\<MoroccanMalinois>** nope, that's what happens with current testnet (for my tests, i disable ntcp)  
**\<anonimal>** selsta: good to hear :)  
**\<anonimal>** MoroccanMalinois: that's a good question, I'll have to look at the code and get back to you after the meeting.  
**\<MoroccanMalinois>** k thanks  
**\<anonimal>** meta/#118 is still open, I haven't heard a chirp from pigeons in a while. pigeons is this an easy fix?  
**\* anonimal** still can't connect that machine  
**\<anonimal>** meta/#77 still hasn't been resolved, I know we talked about it with fluffypony many meetings ago.  
**\<anonimal>** Any last thoughts on meta/#113?  
**\<i2p-relay> {-fluffypony}** \<- on vacation still  
**\<rehrar>** #12 too no?  
**\<anonimal>** Ooo vacation, nice :)  
**\<rehrar>** Have a good life fluffypony  
**\<i2p-relay> {-fluffypony}** lol  
**\<rehrar>** When do you return?  
**\<anonimal>** ArticMine erciccione\_[m] rehrar last thoughts on meta/#113?  
**\<anonimal>** Can it be closed now?  
**\<rehrar>** Nothing further to add. I can close it unless anyone else has anything more.  
**\<erciccione\_[m]>** nothing from me  
**\<rehrar>** Going once.  
**\<anonimal>** serhack started? work on kovri-site/#4, how's that coming along serhack?  
**\<rehrar>** Twice?  
**\<rehrar>** Closed  
**\<serhack>** hey!  
**\<serhack>** I'm waiting for rehrar :slightly_smiling_face:  
**\<ArticMine>** Ok  
**\<rehrar>** Oh?  
**\<serhack>** :) in order to design the page :  
**\<anonimal>** Ok. Yes, that will require some collab between you two.  
**\<i2p-relay> {-fluffypony}** rehrar: Oct 15  
**\<anonimal>** Any questions about kovri-site/#4, rehrar?  
**\<rehrar>** Not super sure what all this is, or what is required of me.  
**\<rehrar>** I know it's been an ongoing conversation for a while. Do we just need to print Serhack stuff on the page?  
**\<serhack>** okay, let's explain to rehrar   
**\<serhack>** yes rehrar  
**\<rehrar>** Ok, then that shouldn't be an issue. On every page of Kovri site?  
**\<anonimal>** ...  
**\<anonimal>** No, let's talk more after the meeting.  
**\<serhack>** :( no  
**\<serhack>** don't be worried  
**\<rehrar>** Sure thing. Sorry for my misunderstanding.  
**\<anonimal>** re: meta/#87, more people should get involved with meta/#87 so we can wrap it up.  
**\<anonimal>** Should something go on reddit?  
**\<rehrar>** I'll post right after this meeting.  
**\<rehrar>** If that's what we decide.  
**\<rehrar>** There's a lot of big discussions going on right now, like the project relicensing issue, as well.  
**\<rehrar>** ArticMine, would you mind looking at that PR?  
**\<rehrar>** https://github.com/monero-project/meta/pull/87  
**\<ArticMine>** I'll take at look at #87  
**\<rehrar>** Thanks!  
**\<anonimal>** rehrar: kovri-site/#3, did a draft ever come up for a quickstart?  
**\<anonimal>** re-introducing a simple quickstart section to the readme is trivial but I don't think you had that in mind?  
**\<rehrar>** Kovri site #3 is changing the link color  
**\<anonimal>** We're running out of time, let's talk more later.  
**\<rehrar>** Ok.  
**\<anonimal>** s/kovri-site/kovri-docs/  
**\<anonimal>** oops  
**\<rehrar>** Ok. We'll talk more.  
**\<anonimal>** One last thing, the first Monero Coffee Chat is tomorrow https://github.com/monero-project/meta/issues/123  
**\<anonimal>** sgp I won't be able to make it but surely sometime in the future I can hop on the call.  
**\<serhack>** great  
**\<anonimal>** 5. Any additional meeting items  
**\<rehrar>** Nothing that can't be discussed later.  
**\<anonimal>** ^  
**\<anonimal>** 6. Confirm next meeting date/time  
**\<anonimal>** Does 20:00 work for everyone?  
**\<anonimal>** Or is 18:00 the best for everyone?  
**\<rehrar>** 20 should be fine.  
**\<MoroccanMalinois>** both ok for me  
**\<ArticMine>** 1800 is better for me  
**\<erciccione\_[m]>** both good for me  
**\<ArticMine>** but I can do 2000 if we keep it there  
**\<serhack>** 2000 is the perfect time  
**\<ArticMine>** That is on Fridays  
**\<ArticMine>** So we make it 2000 on every second Firday?  
**\<anonimal>** If that works for you.  
**\<ArticMine>** Friday  
**\<ArticMine>** Yes that works  
**\<rehrar>** Serhack explained to me. It'll be done before the end of the day.  
**\<serhack>** in italy it's the end of the day  
**\<serhack>** but I will work on it asap  
**\<anonimal>** Ok thanks everyone. Please anyone speakup/complain if the new dates and times aren't working out.  
**\<anonimal>** Next meeting Oct. 20th, 20:00 UTC.  