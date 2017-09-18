---
layout: post
title: Logs for the Kovri Dev Meeting Held on 2017-08-06
summary: Brief review of what has been completed since last meeting, discussion of meta issues, and code & open tickets discussion
tags: [dev diaries, i2p, crypto]
author: dEBRUYNE / fluffypony
---

# Logs  

**\<anonimal>** Alright, meeting time.  
**\<anonimal>** 1. Greetings  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\<anonimal>** 3. Contributor FFS check-in / status  
**\<anonimal>** 4. Code + ticket discussion / Q & A  
**\<anonimal>** 5. Any additional meeting items  
**\<anonimal>** 6. Confirm next meeting date/time  
**\<serhack>** Greetings  
**\<serhack>** Hello  
**\<anonimal>** Hi  
**\<anonimal>** Hello serhack  
**\<ArticMine>** hi  
**\<serhack>** hi ArticMine, hi Anonimal  
**\<i2p-relay> {-pigeons}** howdy  
**\<anonimal>** Hi ArticMine, hi pigeons  
**\<anonimal>** 1.a: how's everyone doing?  
**\<rehrar>** Well weren't there some things to go over regarding that ffs pr?  
**\<rehrar>** Oh. We'll talk bout it later.  
**\<rehrar>** In the meeting.  
**\<rehrar>** Taking care of wife. We both doing ok.  
**\<anonimal>** Good I hope.  
**\<rehrar>** And hi.  
**\<rehrar>** How're you anonimal?  
**\<anonimal>** I wish her a speedy recovery.  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\<rehrar>** How's your transition going?  
**\<anonimal>** lol, funny how you use the word "transition" (inside defcon joke, ping endogenic)  
**\<anonimal>** I'm doing fine, thank you.  
**\<rehrar>** Not much to report this past while cuz of the surgery. I'll be making up the time this week.  
**\<anonimal>** re: 2., I spent most of the past two weeks AFK; busy with fedcon25 and the #monerola meetup (prep/travel/etc.)  
**\<anonimal>** So busy with kovri promotion/discussion. As for repo work, I've been able to do documentation and site-related work.  
**\<rehrar>** We missed thee.  
**\<anonimal>** I'm also way past my milestone hours so I'll need to submit a milestone report to the FFS.  
**\<serhack>** Anonimal: I have a lot of question about Kovri, I will connect to irc  
**\<anonimal>** What else has been completed since the previous meeting?  
**\<anonimal>** Yay, willkommen.  
**\<anonimal>** rehrar have you been able to work on any kovri things?  
**\<endogenic>** lol wait… transition?  
**\<rehrar>** See my above comment.  
**\<anonimal>** rehrar: oops, I just read your line (didn't see it)  
**\<anonimal>** endogenic: Oh, I think it was more a pwrcycle inside joke. Nm. It was re: "Janet".  
**\<anonimal>** But no, I'm not in transition, lol  
**\<anonimal>** 3. Contributor FFS check-in / status  
**\<endogenic>** ohhh  
**\<rehrar>** I meant from anonymous to not.  
**\<endogenic>** that makes sense  
**\<endogenic>** lolo  
**\<moneromooo>** Ah, I first thought the same, then talk of surgery, so I wasn't sure.  
**\<endogenic>** yeah anonimal  
**\<endogenic>** can imagine how concerned everyone was  
**\<rehrar>** Nah. Surgery is my wife. She had some surgery on her eyes this week.  
**\<endogenic>** dang  
**\<endogenic>** everything ok?  
**\<rehrar>** Ye. Her eyes strained at the computer where she works, so we got her Lasik.  
**\<endogenic>** ohh  
**\<anonimal>** re: 3., like I mentioned, I'll submit a milestone report. I use Kimai to keep detailed logs, down to the second, of all my billable activity. I'd like to submit those instead of writing TL;DR's but on the other hand I don't want all my time publicly tracked. I'll keep TL;DR's for the forum but have timesheets available for core team review if requested.  
**\<serhack>** :O  
**\<anonimal>** MoroccanMalinois is AFK I don't have an update on his FFS status.  
**\<anonimal>** He did say he's submit something soon though.  
**\* anonimal** shrugs  
**\<anonimal>** rehrar: any kovri FFS plans?  
**\<moneromooo>** FWIW, I was keeping track at 5 minute increments, then keeping it to myself. Never been a problem. It only would be with slackers I expect.  
**\<rehrar>** Ummm FFS plans?  
**\<anonimal>** k  
**\<anonimal>** Yes, to have one if needed.  
**\<rehrar>** alright, I'm here on IRC sorry for the delay.  
**\<anonimal>** 4. Code + ticket discussion / Q & A  
**\<anonimal>** re: point 4, and also going back to point 2, I did do a lengthy review of MoroccanMalinois' open PR #684.  
**\<anonimal>** But other than that, I don't have any comments on point 4. Any questions?  
**\<anonimal>** I did notice that the issue-helper on the meta repo appears to be in full swing and is looking good, pigeons.  
**\<anonimal>** 5. Any additional meeting items  
**\<anonimal>** Anyone interested in discussing quantum entanglement as a solution to nullifying the Alice/Bob relationship in order to eliminate the possibility of Eve?  
**\<ArticMine>** Any reference on this?  
**\<anonimal>** Not that I know of. It was something I started talking about while at fedcon25.  
**\<anonimal>** But I need much more information.  
**\<moneromooo>** wat  
**\<moneromooo>** Wouldn't that need custom hardware that's nowhere near everyday buyers ?  
**\* anonimal** is not a quantum specialist  
**\<ajsantos>** so would that mean Eve is both Alice and Bob at the same time  
**\<anonimal>** Probably, and probably a custom science too.  
**\<anonimal>** What I mean is, AFAICT it's the only way to eliminate Eve and until then, anonymity will always have the potential to be broken.  
**\<anonimal>** ajsantos: I don't know  
**\* anonimal** will need to brush up on entanglement  
**\<anonimal>** But if two points are guaranteed to only exist as a single unified point, I would imagine that Eve could not be Alice or Bob.  
**\* anonimal** shrugs, #monero-future-futures  
**\<ArticMine>** Ok Alice + Trump Bob = Jong-un Eve = ?  
**\<ArticMine>** Alice = Trump  
**\<anonimal>** Oh, one more thing, we'll have the 96boards.org podcast on August 17th.  
**\<anonimal>** Details in meta/#46  
**\<anonimal>** Anything else or shall we wrap the meeting up early?  
**\<rehrar>** nothing for me, sorry. I've got a lot going down atm, so I'm in and out intermittently  
**\<anonimal>** Yes, Alice would = Bob so their state would be agreed upon at any given moment so long as they become entangled.  
**\<anonimal>** Whether passive observation at that point is even possible, I don't know.  
**\<moneromooo>** The only use of qe I know about is for Alice to send a message to Bob (ostensibly a key), in a way that Eve cannot eavesdrop on it without Bob being able to detect it.  
**\<moneromooo>** (only use for crypto)  
**\<anonimal>** I remember seeing a talk about that a while ago. re: anonmymity, I don't know if the concept of "hops" would apply though, and I don't know if "building a network of entangled points" would be an accurate solution to creating an anonymity set.  
**\<anonimal>** So many questions!  
**\<moneromooo>** AFAICT, the use of this would be to strengthen the crypto, which is already likely well armoured.  
**\<moneromooo>** It wouldn't do anything for traffic analysis.  
**\<moneromooo>** But then maybe there's more stuff qe can be used for...  
**\<moneromooo>** You'd need to pre-share a LOT of bits if you did not want only the key to be sent, though.  
**\<moneromooo>** And QE is EASY to collapse.  
**\<moneromooo>** Actually, I don't know anything about this, ignore me.  
**\<ArticMine>** It is a possible research topic at this point as far as I can see  
**\<anonimal>** I'm not a huge fan of PQ discussion because of the number of everyday issues we're currently tackling but for some reason I am intrigued about this area.  
**\<anonimal>** Yes, I would like to do more research and write something if needed.  
**\<anonimal>** i.e., if it's not already been written.  
**\<anonimal>** My FFS could cover it under "Research improving I2P and overlay-network security" and "Opening new proposals".  
**\<anonimal>** Though I had imagined something more near-future tangible. We'll see.  
**\<anonimal>** Eek, out of time. 6. Confirm next meeting date/time  
**\<anonimal>** Same time, two weeks (August 20th)?  
**\<anonimal>** Ok, thanks everyone :)  