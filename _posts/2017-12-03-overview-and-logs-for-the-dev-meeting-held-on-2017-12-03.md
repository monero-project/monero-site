---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2017-12-03
summary: Discussion of open PRs and issues, Bulletproofs, Monero Research Lab, RNGs, 0MQ, and miscellaneous
tags: [dev diaries, core, crypto]
author: dEBRUYNE / fluffypony
---

# Overview  

An overview can be found on [MoneroBase](https://monerobase.com/wiki/DevMeeting_2017-12-03).  

# Logs  

**\<fluffypony>** 1. Greetings  
**\<fluffypony>** 2. Brief review of what's been completed since the previous meeting  
**\<fluffypony>** 3. Code + ticket discussion / Q & A  
**\<fluffypony>** 4. Any additional meeting items  
**\<fluffypony>** 5. Confirm next meeting date/time  
**\<fluffypony>** so 1. Greetings  
**\<fluffypony>** hi  
**\<ArticMine>** Hi  
**\<fluffypony>** luigi1111 (if you're back) / smooth / hyc / moneromooo etc.  
**\<moneromooo>** here  
**\<gingeropolous>** etc here  
**\<fluffypony>** 2. Brief review of what's been completed since the previous meeting  
**\<fluffypony>** lots of stuff  
**\<sarang>** MRL has working Java test code for complete multi-output bulletproofs  
**\<sarang>** It's being ported over to C++  
**\<moneromooo>** (not the multi output one)  
**\<sarang>** The Java part is complete  
**\<moneromooo>** Sorry, I meant just about the port ^\_^  
**\<sarang>** Discussions are ongoing about if/how the fee structure would be modified to prevent large-output txn DoS  
**\<fluffypony>** what's wrong with per-byte fees?  
**\<sarang>** You can load a txn with tons of outputs  
**\<sarang>** but verification is linear in the # of outputs  
**\<dEBRUYNE>** fluffypony: verification is linear, whilst size is log  
**\<dEBRUYNE>** basically  
**\<sarang>** So for low fees you can force the network to verify  
**\<fluffypony>** ah ok, makes sense  
**\<sarang>** So we need to incentivize the use of aggregate BPs while basically scaling the fee to the number of outputs etc.  
**\<sarang>** But things are looking good  
**\<sarang>** Verification is still quite efficient  
**\<sarang>** and with the multi-output setup, space savings are unreal  
**\<moneromooo>** In fact, the per byte fee needs to be done first, as per kB is way too coarse for this.  
**\<sarang>** Yeah a single output BP is about 704 bytes, while a 2-output BP is something like 768 bytes  
**\<sarang>** (including commitments)  
**\<sarang>** it's just too damn good  
**\<fluffypony>** nice  
**\<dEBRUYNE>** For clarification, a single output is currently \~ 6 kB, whereas a 2-output is \~ 12 kB  
**\<* hotoatmeal** was about to ask  
**\<sarang>** So we'll continue moving forward with porting and testing  
**\<manifest>** serhack here?  
**\<dEBRUYNE>** A typical Monero transaction has 2 ins + 2 outs  
**\<serhack>** yep manifest  
**\<manifest>** i was wondering who was the m8 that was gonna work on the go-library since i started on it myself a little bit swell  
**\<fluffypony>** dEBRUYNE: this would also be a major cost-saving for pool payments  
**\<fluffypony>** manifest: we're in a meeting  
**\<sarang>** For reference, the size of an M-output BP is 32\*(2\*log(64\*M)+9) bytes (this doesn't count the amount commitments)  
**\<sarang>** add 32 bytes for each of the M amount commitments if you want to include them  
**\<sarang>** (log is base 2)  
**\<rehrar>** manifest you can hop on mattermost.getmonero.org. Serhack is also there and you guys can PM and chat so as not to disrupt the meeting. Thanks. :)  
**\<ArticMine>** I have to give some thought to the fees to deal with  the verification issue  
**\<fluffypony>** ok so beyond BP is there anything else worth noting?  
**\<sarang>** We do require a power of 2 in the # of outputs  
**\<pigeons>** So sometimes you just create an additional change output, or how do you cause always a power of 2?  
**\<sarang>** We'll need to either pad with dummy outputs or split into power-of-2 proofs  
**\<ArticMine>** Split the change into two tx  
**\<pigeons>** OK  
**\<sarang>** The dummy output doesn't need to actually represent anything  
**\<sarang>** It just needs to be there for the proof  
**\<sarang>** It can be amount 0  
**\<ArticMine>** that will work also  
**\<sarang>** Anyway, that's my 3 cents  
**\<luigi1111>** Better to split  
**\<luigi1111>** Space is cheap gp  
**\<luigi1111>** Cpu is expensive\*  
**\<ArticMine>** We will have to price cpu  
**\<moneromooo>** There's a possible optimization for "filler" outs AIUI.  
**\<luigi1111>** Probably not as good as not using them :)  
**\<sarang>** There aren't any security proofs for a non-power-of-2 proof  
**\<moneromooo>** I was led to think it was not inherent in the scheme, though ?  
**\<sarang>** It is  
**\<moneromooo>** aw...  
**\<sarang>** At least for right now  
**\<sarang>** There's a recursive step that split arrays in half  
**\<ArticMine>** The issue I see is that the penalty only prices space  
**\<sarang>** The authors of the paper are looking into a generalization, but it doesn't exist yet  
**\<luigi1111>** That's interesting  
**\<fluffypony>** ok so  
**\<fluffypony>** anything else from the last two weeks worth noting?  
**\<sarang>** suraeNoether is completing review for multisig  
**\<sarang>** He is unable to be here today  
**\<Gdhhyfjjs467>** Has a code freeze date for the next for been set yet?  
**\<fluffypony>** Gdhhyfjjs467: yeah we'll be branching towards the end of the month  
**\<fluffypony>** assuming our comfort levels are ok  
**\<rehrar>** This was discussed briefly in MRL channel with the idea that if BPs are not too far off, would it be worth delaying the next hard fork by a couple months so it can be in?  
**\<dEBRUYNE>** The plan is to include multisig right?  
**\<dEBRUYNE>** \^ fluffypony  
**\<luigi1111>** Yes  
**\<fluffypony>** no need to delay the hard fork  
**\<luigi1111>** I don't think the upcoming fork does anything useful though  
**\<luigi1111>** So there's that  
**\<fluffypony>** if BP is ready it'll go into the Sept fork  
**\<dEBRUYNE>** Should we fork if there's nothing to fork for?  
**\<luigi1111>** Who knows ^\_^  
**\<fluffypony>** luigi1111: consistency, then  
**\<fluffypony>** well, that's what we committed to with the fork schedule  
**\<fluffypony>** "even if it's just bumping the block version number"  
**\<dEBRUYNE>** Sure, but didn't we also discuss slowing things down once the ecosystem got bigger?  
**\<moneromooo>** We did not commit to an exact fork schedule.  
**\<luigi1111>** And who is this we :)  
**\<moneromooo>** I, at least, did not :P  
**\<hotoatmeal>** does the wallet release schedule track the protocol fork schedule exactly?  
**\<hotoatmeal>** or do they have different cadences  
**\<moneromooo>** The wallet needs to update for a fairly large subset of consensus changes.  
**\<pigeons>** the wallet-cli and wallet-rpc are included with the daemon release that supports the fork  
**\<moneromooo>** So it's convenient to release at the same time.  
**\<fluffypony>** dEBRUYNE: I don't think we're at a point where we can go to annual  
**\<moneromooo>** Besides, the wallet and daemon rely on the same libs.  
**\<rehrar>** Isn't ZMQ also in the new release? Or has that been there for a while now?  
**\<fluffypony>** yes ZMQ is in the new release  
**\<moneromooo>** There's some of it in, but some of it's still missing.  
**\<pigeons>** there is some support for zmq over rpc, and more is comming, like tx/block notify and some changes to the existing zmq rpc  
**\<pigeons>** \*rpc over zmq  
**\<hotoatmeal>** moneromooo: yeah, mainly thinking about when I need to spend time to get those two memwipe patches (and the third I haven't written yet) reviewed/merged  
**\<pigeons>** the notify is what the people i hear from are waiting for, and tewinget told me a few weeks ago he's got the basics worked out  
**\<rehrar>** Are we still waiting on him for stuff?  
**\<moneromooo>** There's a patch waiting on changes IIRC.  
**\<moneromooo>** (for 0mq)  
**\<rehrar>** *sigh* tewinget, can you please get this stuff done? Seriously.  
**\<moneromooo>** Especially as I think some of the large pool speedups were lost.  
**\<moneromooo>** (not 100% sure)  
**\<hotoatmeal>** is there a way to detect that the network has forked, and your client hasn't gone with it?  
**\<moneromooo>** Kinda.  
**\<hotoatmeal>** my local daemon got left behind on the last one, because I forgot to update  
**\<fluffypony>** you can make an educated guess  
**\<hotoatmeal>** cue colorful headscratching  
**\<moneromooo>** Current daemon should moan if it sees blocks with a higher version than what it knows about.  
**\<fluffypony>** and there's auto-update records that notify  
**\<moneromooo>** The block verison thing is a bit vulnerable to someone mining a bad block on purpose to make you think there's been a fork though.  
**\<fluffypony>** yeah  
**\<moneromooo>** Losing 10 monero in the process or whatever it is :)  
**\<fluffypony>** ok let's move it along, then  
**\<fluffypony>** 3. Code + ticket discussion / Q & A  
**\<fluffypony>** are there any issues that could do with some input / resolution?  
**\<moneromooo>** The handful of oldest ones.  
**\<moneromooo>** The PRNG one.  
**\<moneromooo>** ones.  
**\<moneromooo>** For multisig, I think it's pretty much ready to go in, stoffu's done a lot of careful reviewing.  
**\<fluffypony>** ok - what's the blocker on switching to the Bitcoin one?  
**\<hotoatmeal>** moneromooo: what still needs doing / deciding on your part of the memwipe ones, and how can I help there?  
**\<moneromooo>** Mainly deciding whether we want to, or not.  
**\<moneromooo>** And bitcoin has two RNGs, the one I ported, and one that's closer to what we have. so there's the possibility of entropy attrition using only the "good" one.  
**\<moneromooo>** hotoatmeal: the only thing left IIRC was switching from std::vector\<char> to std::unique\_ptr\<char[]> and I feel more confident getting it right with vector.  
**\<moneromooo>** Other than that, nothing I think.  
**\<fluffypony>** moneromooo: by "good" one you mean the ported one?  
**\<moneromooo>** That can be done later by someoine who's familiar with how the refcounting works with operators though.  
**\<moneromooo>** Yes. The one that uses getrandom, etc.  
**\<fluffypony>** ok so I think if they haven't hit entropy attrition problems over the past few years it's unlikely we will - thoughts?  
**\<moneromooo>** Let me rephrase:  
**\<moneromooo>** Bitcoin has two RNGs: a good one using HW, and a... hmmm, less good ? one similar to our keccak based one  
**\<moneromooo>** Using the keccak based one does not deplete entropy nearly as fast as using the good one. Monero can use a lot of entropy (eg, range proofs).  
**\<moneromooo>** Therefore, I'm wondering whether using the good one all the time is worse than not.  
**\<hotoatmeal>** moneromooo: ok, I'll pick up the vector vs unique\_ptr part of that later this month  
**\<moneromooo>** Thanks  
**\<fluffypony>** ok so what if we used the good one for critical stuff like privkey generation  
**\<fluffypony>** and output selection  
**\<hotoatmeal>** and if you give me some pointers, can look at whatever that refcounted operators thing is in Jan  
**\<fluffypony>** and the stream one for range proofs  
**\<moneromooo>** Well, if I knew that, I'd know the answer to my question, since they're opposites.  
**\<moneromooo>** Anyway, to go back to multisig, I tihnk it's good to go now. If you haven't yet reviewed it, and want to do so, do so now.  
**\* hotoatmeal** drops out  
**\<fluffypony>** ok  
**\<fluffypony>** 4. Any additional meeting items  
**\<moneromooo>** When do we want bulletproofs on testnet ?  
**\<dEBRUYNE>** Tomorrow!  
**\<fluffypony>** hah hah  
**\<moneromooo>** A day may be a bit short to get people to update in time.  
**\<fluffypony>** are we going to wait for the multi output stuff?  
**\<sarang>** I think we should  
**\<moneromooo>** Not sure. This is not quite finished (multiple of 2 requirement), and has a non trivial impact on fees.  
**\<sarang>** Hrmm true, the fee thing  
**\<sarang>** :/  
**\<moneromooo>** And I'd really, really like to get smaller txes double plus quick.  
**\<fluffypony>** ok so how would this work  
**\<ArticMine>** A lot of people do  
**\<sarang>** In case it's relevant, every single-output proof is still a valid multiproof  
**\<moneromooo>** That's nice.  
**\<sarang>** (provided we define the Gi and Hi in the same order)  
**\<sarang>** (not sure if my extended code addressed that, will check)  
**\<moneromooo>** So, no clear votes for or against. Except me ^\_^ so that's 100% of expressed votes :P  
**\* sarang** checks the math on that  
**\<fluffypony>** moneromooo: I asked how it would work  
**\<moneromooo>** The fork ? I imagine similar to rct. Allow bulletproofs at fork f, optionally disallow borromean at f+1.  
**\<moneromooo>** (the code currently does not do that second part)  
**\<moneromooo>** That might become a bit more complicated if we start allowing aggregated proofs at f+1.  
**\<moneromooo>** But not very much.  
**\<dEBRUYNE>** so moneromooo, you'd like to start with single output right? And then eventually switch to multioutput  
**\<moneromooo>** Yes.  
**\<rehrar>** Sorry if this was answered, but is there an ETA on multioutput port from Java?  
**\<moneromooo>** No. It doesn't appear to be a lot of work though.  
**\<fluffypony>** so then txs with more than 1 output would use borromean?  
**\<moneromooo>** No. They'd use two bulletproofs.  
**\<sarang>** yup  
**\<rehrar>** Which is still a savings.  
**\<sarang>** Still great space savings  
**\<sarang>** And no DoS issues  
**\<dEBRUYNE>** 2 bulletproofs is 1.3 kb give or take right?  
**\<fluffypony>** ok  
**\<dEBRUYNE>** And we can keep our current fee structure  
**\<sarang>** dEBRUYNE: yes  
**\<moneromooo>** Most of it, in fact. Txes are ~2.2 kB.  
**\<rehrar>** I think that's worth it. And then it can be enhanced even further with multioutput later. But the immediate savings would be appreciated.  
**\<rehrar>** And gives time for the fee dislogue  
**\<fluffypony>** and what's our confidence level like in this? like is it March-fork-worthy?  
**\<rehrar>** Dialogue\*  
**\<moneromooo>** Well, we can know better if we fork in a couple days on testnet :)  
**\<ArticMine>** I have an idea on the fee issue  
**\<rehrar>** It can be deployed to testnet asap no.  
**\<rehrar>** ?  
**\<moneromooo>** That's what I'm asking about, yes.  
**\<fluffypony>** could we fork testnet this coming weekend?  
**\<moneromooo>** Works for me. Gives time for review.  
**\<rehrar>** Exciting!  
**\<sarang>** Yes and the code should definitely be reviewed by others  
**\<endogenic>** who?  
**\<endogenic>** if you had your pick  
**\<JollyMort[m]>** could someone do me a favor and send me the log of this channel from 2017-04-18?  
**\<sarang>** Ideally andytoshi since he's a paper author  
**\<moneromooo>** If I had my pick...  
**\<sarang>** suraeNoether  
**\<fluffypony>** Satoshi  
**\<endogenic>** fluffypony: on it  
**\<sarang>** Someone who digs the maths  
**\<Gdhhyfjjs467>** So Evan duffield?  
**\<dEBRUYNE>** luigi1111 I guess  
**\<endogenic>** vtnerd hyc fyi  
**\<moneromooo>** Oh yeah, luigi1111 is a good one.  
**\<rehrar>** Let's just get all hands on deck for this?  
**\<endogenic>** ok that means you too rehrar  
**\<Gdhhyfjjs467>** Lol jk. I like andytoshi idea  
**\<sarang>** I'm sure we'll find additional optimizations... I know for a fact my implementation of scalar operations into vectors could be refactored  
**\<rehrar>** I will understand none of it, but I'll look at it and either nod approvingly or cringe based on a coin toss.  
**\<sarang>** but I didn't in Java in order to keep it clean and understandable  
**\<endogenic>** i move to instate rehrar as new RNG  
**\<moneromooo>** The slice op ? Yes, but I don't think it takes much time compared to the muls.  
**\<sarang>** Random Nod Generator?  
**\<sarang>** Well and operations involving many vector ops could run a single loop per element, instead of per operation  
**\<sarang>** but they're generally fast and it makes things clean  
**\<sarang>** I'm not a huge fan of sacrificing clarity for a tiny speedup  
**\<sarang>** I'd like to chat with moneromooo post-meeting about our basepoint selection, to ease the transition into multiproofs later  
**\<sarang>** For those who want to compare code to paper, this is the paper: http://web.stanford.edu/~buenz/pubs/bulletproofs.pdf  
**\<moneromooo>** I pushed the patch as 2883 if people want to start reviewing ^\_^  
**\<rehrar>** Can I make a Reddit post calling devs to review it?  
**\<moneromooo>** Reddit.. devs ?  
**\<dEBRUYNE>** \^ that lol  
**\<rehrar>** :P nvm then  
**\<dEBRUYNE>** The people able to review it will be watching Github  
**\<endogenic>** rehrar: answer is in the question :P  
**\<fluffypony>** oh  
**\<fluffypony>** I guess meeting ~done  
**\<fluffypony>** 5. Confirm next meeting date/time  
**\<fluffypony>** Sunday the 17th  