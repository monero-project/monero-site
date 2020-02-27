---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-12-03
summary: Surae work, Sarang work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** OK, it's time to begin our meeting  
**\<sarang>** ping suraeNoether and others (mass ping sucks)  
**\<endogenic>** i am self-pinging  
**\<serhack>** ping serhack  
**\<serhack>** Hey!  
**\<suraeNoether>** howdy everyone  
**\<sarang>** If everyone pings three others, eventually the whole world is pinged  
**\<sarang>** pinged? pung?  
**\<suraeNoether>** multi-level pinging schemes  
**\<suraeNoether>** consider myself punged  
**\<sarang>** definitely pung  
**\<suraeNoether>** it's like the purge, but pingier  
**\<endogenic>** pang\*  
**\<sarang>** I have several items on my provisional agenda today, as well as a round-the-horn to see what folks wish to share  
**\<sarang>** First, the Lab landing page https://getmonero.org/resources/research-lab/ has been updated to add new papers  
**\<endogenic>** very nice!  
**\<sarang>** translations are welcome, now that we support them  
**\<sarang>** I only added English abstracts  
**\<sarang>** Second, suraeNoether and I will be posting new FFS requests for Q1 2019 shortly  
**\<sarang>** We've been discussing, as we often to, the correct way to assess the amount  
**\<sarang>** This ties in with discussions elsewhere about how best to approach multi-month funding on FFS  
**\<serhack>** Whoa, translating abstracts to Italian? it would a pleasure for me  
**\<sarang>** serhack: yass  
**\<suraeNoether>** Given the 50% contraction each of the past two quarters, we are trying to decide the best way to price our next quarters. whether we should switch to monthly funding, etc.  
**\<sarang>** The current FFS system doesn't allow for non-escrow payments, so we're stuck with whatever the market does  
**\<sarang>** I've been traditionally using a 14-day EMA or 30-day EMA  
**\<suraeNoether>** Last time, I tried to take trendline into account and I received some pushback, which is very understandable. so we wanted to open up the discussion to get some ideas.  
**\<sarang>** Yeah, what are the group's thoughts on this?  
**\<sarang>** (We'd be requesting through Mar 2019)  
**\<endogenic>** could you make the question a little more concrete?  
**\<endogenic>** for clarity  
**\<sarang>** We could do shorter periods, like monthly, but that opens to donor fatigue  
**\<sarang>** endogenic: what's the fairest exchange rate computation?  
**\<suraeNoether>** i'm generally opposed to using moving averages: in an uptrend, the community ends up paying more and we receive disproportionately more than \*that\* by the time our paychecks come around... so we are arguably unfairly overcompensated... and in the downtrend, the opposite occurs, where donor cash doesn't go as far, and we still receive disproportionately less than \*that\* by the time our paychecks come around  
**\<endogenic>** imo ideally you all shouldnt have to worry about that as you really want to have your compensation targeted for the currency you have to pay rent, taxes, etc in  
**\<endogenic>** so it's whatever allows you not to have to worry about it  
**\<endogenic>** i think it's a real issue though as a source of stress  
**\<sarang>** Well, discussions of how to structure FFS in the future are good ones, but right now it is what it is  
**\<suraeNoether>** endogenic:  what if we list our desired salaries in USD and donating to pay our salaries could be a rolling thing; at the end of each month, we take a 48-hour average or something based on Kraken or whatever, and we dip into that fund according to that instantaneous exchange rate? it seems more fair to both donors and us to use a method like that  
**\<endogenic>** that's interesting  
**\<sarang>** It might encourage donors to delay donations  
**\<sarang>** until they know the actual value being dispersed  
**\<suraeNoether>** that may actually work out to everyone's benefit  
**\<suraeNoether>** people see their XMR hit our account at much closer to their desired exchange rate  
**\<suraeNoether>** or rather, we gain control over it at a more reasonable rate  
**\<sarang>** Any big opposition to investigating this further? We'd need a decision very quickly  
**\<suraeNoether>** so people's money isn't wasted on volatility and we get what we need to pay rent, etc  
**\<suraeNoether>** fluffypony luigi1111w any thoughts?  
**\<sarang>** ping binaryFate or luigi1111 or fluffypony  
**\<suraeNoether>** ArticMine and binaryFate too  
**\<sarang>** jinx  
**\<endogenic>** when atomic pings  
**\<suraeNoether>** cross-client atomic pings via SMS relayed by telegram (the literal wire, not the app)  
**\<suraeNoether>** (not wire the app either)  
**\<endogenic>** make it so  
**\<suraeNoether>** anyway, let's put that on the back burner until we get feedback, hopefully in the next day or so  
**\<sarang>** Anyway, until Core Team arrive, let's move on  
**\<suraeNoether>** yep  
**\<endogenic>** wow are you guys twins or something  
**\<sarang>** suraeNoether: want to give your updates?  
**\<cjd>** https://github.com/cjdelisle/RandomHash  
**\<sarang>** hello  
**\<cjd>** howdy  
**\<cjd>** experimentation on randomized hash function  
**\<suraeNoether>** well, recently I've been working on three things  
**\<suraeNoether>** cjd thanks for the contribution  
**\<suraeNoether>** first thing i've been working on is the matching paper, which i've handed off to sarang  
**\<suraeNoether>** i had some ideas over the weekend on how to quantify some churn length methodology  
**\<suraeNoether>** which is a step in the right direction  
**\<suraeNoether>** the second thing i've been working on is reading more about accumulators and zero knowledge proofs of membership and nonmembership  
**\<suraeNoether>** this is surae. this is surae catching up on large-anon-set-authentication-without-trusted-setups-to-replace-ring signatures. see surae cry.  
**\<binaryFate>** Rolling fund sounds good  
**\<suraeNoether>** binaryFate +1 thanks for the feedback :D  
**\<suraeNoether>** the third thing I've been working on is mapping certain discrete-log-based crypto schemes over into a module-theoretic setting and constructing examples. this is a fun hobby for me that is brand new and sarang and i are going to write a paper on it  
**\<suraeNoether>** i've also been working on non-research stuff related to the monero konferenco, and we just got back from our monero workshop in nashville, where we met up to do some research and brainstorming face to face  
**\<suraeNoether>** oh, and i've been making some final edits to the thring sig paper before submitting for peer review  
**\<suraeNoether>** and that's it  
**\<suraeNoether>** oh, i started reading silur's verifiable shuffle  
**\<sarang>** Any specific questions on suraeNoether's recent work?  
**\<sarang>** going once, twice  
**\<sarang>** OK, I'll make my update  
**\<sarang>** suraeNoether has passed on the current draft of the graph matching paper to me for additional work; this is some really cool shit that will be worth everyone's time  
**\<sarang>** I'm finalizing a tech note on discrete logs, reviewing several other papers by other researchers, and also finishing up some re-review of a ring representation paper from Matt Green's team from a while back  
**\<sarang>** My goal is get the tech note, graph matching paper, etc. out the door as efficiently as possible  
**\<sarang>** I want next quarter to focus more heavily on ringct replacements, as does suraeNoether  
**\<sarang>** Any specific questions for me or for suraeNoether on these fast updates?  
**\<sarang>** chirp chirp  
**\<sarang>** Isthmus was unavailable but wanted me to share the following update (one sec):  
**\<sarang>** https://www.irccloud.com/pastebin/UGzuSz5P/  
**\<sarang>** sgp\_ was looking at pool output data to give more information that could lead to changes in how we handle pool and coinbase outputs  
**\<endogenic>** very cool sgp\_  
**\<sarang>** The upcoming Stanford Blockchain Conference has its free registration open now: https://cyber.stanford.edu/sbc19  
**\<sarang>** Both suraeNoether and I applied to speak, but I have not heard back on this  
**\<sarang>** An FFS to fund our presence was successful, but the market has been... unkind in the meantime  
**\<endogenic>** as it is  
**\<sarang>** Hopefully at least one of us is accepted, to offset those costs. It's an exceptionally worthwhile event  
**\<sarang>** Does anyone else have work of interest to share with the group?  
**\<suraeNoether>** sarang thanks for the link to SBC, i just registered :P  
**\<h4sh3d>** I have worked on an atomic swap BTC/XMR https://github.com/GuggerJoel/XMR-BTC-atomic  
**\<endogenic>** h4sh3d: did you see the feedback you got to that?  
**\<moneromooo>** Worthy goal.  
**\<h4sh3d>** endogenic: I didn't see feedback on IRC  
**\<sarang>** Doesn't that scheme require knowledge of the same scalar across groups?  
**\<endogenic>** h4sh3d: "vtnerd> h4sh3d the paper still has a magic zkp step. How are these values zkp'ed ?"  
**\<sarang>** correct me if wrong  
**\<sarang>** if so, that's a subtle step that is nontrivial  
**\<h4sh3d>** Knowledge of a scalar on ed25519 (i.e. mod l) only  
**\<h4sh3d>** and the SHA256 of the scalar  
**\<sarang>** a proof of that equality in zero knowledge?  
**\<h4sh3d>** that's the magic zkp needed, but with Bulletproofs it is possible to prove these constraints  
**\<sarang>** Yeah, other proposals have had the same issue  
**\<h4sh3d>** > a proof of that equality in zero knowledge?  
**\<h4sh3d>** yes  
**\<suraeNoether>** hey guys i have to go a bit early  
**\<sarang>** np  
**\<suraeNoether>** i'll be on for most of the day  
**\<endogenic>** see you  
**\<h4sh3d>** I started to write a proposal to work on that scheme, what do you think?  
**\<sarang>** h4sh3d: I need to re-read your paper to remind myself of a few details, but does the sender on one chain guarantee return of funds if the protocol fails?  
**\<h4sh3d>** sarang: yes if it fails Alice (XMR) get her XMR back and Bob (BTC) get his BTC baCK  
**\<h4sh3d>** If Bob disappears Alice gains the BTC  
**\<sarang>** High level: why does Alice get her XMR back?  
**\<sarang>** Delayed signing and posting by Bob?  
**\<h4sh3d>** Ok, what do you mean by "fail"? The zkp or after the firsts transactions on-chain?  
**\<sarang>** why not either  
**\<sarang>** Under whatever circumstances Alice is not guaranteed the BTC  
**\<h4sh3d>** If after locking the BTC/XMR on-chain Bob does not follow the protocol anymore  
**\<h4sh3d>** can be because Bob disappear or act malicious  
**\<sarang>** So what transaction is posted to the XMR chain, and why can Alice get her funds back if it's posted and Bob disappears or pulls other shenanigans?  
**\<sarang>** Proposals around refund transactions can take advantage of that new construction, but not with this proposal  
**\<h4sh3d>** In this scheme the first XMR transaction move funds into the address controlled w/ (a,x) private key, where x is half controlled by Alice and half by Bob  
**\<sarang>** OK, if Bob disappears, Alice can recover the key?  
**\<h4sh3d>** no, but she can get the BTC  
**\<sarang>** Does she wait until Bob has posted the BTC transaction before posting the XMR transaction?  
**\<h4sh3d>** so if Bob disappears, Bob loose  
**\<sarang>** (I'm being purposefully socratic to help me understand better)  
**\<h4sh3d>** np  
**\<h4sh3d>** https://github.com/GuggerJoel/XMR-BTC-atomic/blob/master/whitepaper/xmr-btc.pdf  
**\<h4sh3d>** page 4  
**\<sarang>** Yep, I read that. I want to ensure I understand the nature of protocol failure by asking you that question  
**\<h4sh3d>** Yes, Alice waits enough conf before sending XMR tx  
**\<sarang>** OK, and Bob takes advantage of BTC timelock in case of Alice's disappearance  
**\<h4sh3d>** In fact we can say that Alice or Bob will "sell" half of the key in the Bitcoin tx  
**\<h4sh3d>** Yes, exactly  
**\<sarang>** My spidey sense tells me that someone else had a similar idea at some point, but I don't recall specifically  
**\<sarang>** Even so, at face value a neat idea  
**\<sarang>** made possible by bulletproofs (tm)  
**\<sarang>** To what extent is knowledge of the ed25519 scalar as a hash preimage on the BTC chain group-specific?  
**\<h4sh3d>** I've not finished my journey into Bulletproof, but I'm pretty sure that it's feasible with zkp tech today  
**\<sarang>** h4sh3d: yes  
**\<sarang>** bulletproofs can support this  
**\<sarang>** verification isn't trivial and the circuit is ugly  
**\<sarang>** But yeah, any time you're using values across groups, you have to account for how they are used  
**\<h4sh3d>** Not sure that I understand the question about preimage on the BTC chain group-specific  
**\<sarang>** ed25519 != secp256k1  
**\<moneromooo>** None o that goes onto the chain though, right ?  
**\<moneromooo>** (except the tx)  
**\<sarang>** That's my question  
**\<h4sh3d>** Yea I know but the x is not used with secp256k1  
**\<sarang>** I obviously need to do deeper diving onto the guts of hash timelocks  
**\<h4sh3d>** x\_0 or x\_1 is reveal into the unlock script in bitcoin  
**\<rehrar>** sometimes I think you guys just make up words and terms to sound smart  
**\<sarang>** What groups are those scalars in?  
**\<sarang>** Is there any algebraic requirement beyond "throw it into a hash function as a byte string"?  
**\<endogenic>** rehrar: you're not wrong  
**\<h4sh3d>** I dont think so  
**\<sarang>** h4sh3d: if there are no algebraic assumptions on the scalars and it's purely a matter of byte representation, that's one thing  
**\<sarang>** otherwise you'd have to be very careful about crossing groups (we dealt with this recently do a discrete log equality proof across curves)  
**\<sarang>** Anyway, we should continue to discuss this... but does anyone else have a short item to bring up, before we hit the end of our meeting time?  
**\<sarang>** If not, we can adjourn and continue existing discussions  
**\<sarang>** OK, officially adjourned  
