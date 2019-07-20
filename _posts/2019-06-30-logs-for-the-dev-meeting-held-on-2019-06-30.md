---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2019-06-30
summary: Development status, Code & ticket discussion, and miscellaneous
tags: [dev diaries, core, crypto]
author: el00ruobuob / rehrar
---

# Logs  

**\<rehrar>** hey guys  
**\<rehrar>** it's time for a meeting  
**\<rehrar>** as always, we'll try not to drag and make this longer then it needs to be.  
**\<rehrar>** 1. Greetings  
**\<sarang>** Hi  
**\<rbrunner>** Hi!  
**\<vtnerd\_\_>** Hi  
**\<kinghat>** shalom  
**\<rehrar>** Alright. 2. What's been completed since last meeting.  
**\<rehrar>** Anyone have an update on stuff?  
**\<rehrar>** dsc\_ selsta dEBRUYNE for GUI people?  
**\<rehrar>** moneromooo TheCharlatan CLI?  
**\<dsc\_>** thecharlatan working on reproducible builds for GUI  
**\<rehrar>** fluffypony luigi1111 smooth for Core Team?  
**\<dsc\_>** I'm working on better tails integration  
**\<dEBRUYNE>** GUI v0.14.1.0 is around the corner   
**\<rbrunner>** Ah, that corner?   
**\<dsc\_>** I've updated https://autonode.xmr.pm/ to show more remote nodes  
**\<moneromooo>** I did some more work on share-rpc, seeing someone's started reviewing.  
**\<moneromooo>** It would be nice if more people reviewed, and if someone did something with it   
**\<sarang>** moneromooo: do you consider the CLSAG implementation branch suitable for PR/review (not to merge yet, just for review)  
**\<moneromooo>** Yes.  
**\<moneromooo>** It doens't have your latest changes though.  
**\<sarang>** Right, and I plan to update 5707 (and its CLSAG equivalent) again soon  
**\<sarang>** those are pretty minor overall  
**\<moneromooo>** Then it might not be be ready.  
**\<luigi1111>** I don't have an update  
**\<dsc\_>** thanks for the update luigi1111  
**\<rehrar>** luigi1111: you can update us on the brand of soda the core team drinks as the relax in the lounge  
**\<dEBRUYNE>** With respect to a timeline for CLSAG, is October too optimistic? We must also take into account third party wallet providers, which will have to make changes too  
**\<rehrar>** thanks everyone for the updates  
**\<rehrar>** dEBRUYNE: this is going to be unpopular to say, as it's been discussed before, but if we're "right on the edge" with CLSAG, then why not just push the fork back a month?  
**\<sarang>** dEBRUYNE: No final word from potential reviewers yet... I reached out again  
**\<sarang>** So I do not have a timeline for CLSAG review  
**\<rehrar>** 25% savings in ring sigs is kind of cool and nice to have.  
**\<dEBRUYNE>** rehrar: So push the October fork back to November?  
**\<rehrar>** if it'd give us the breathing room that would make enough people more comfortable with the timing, then yes  
**\<sarang>** Why not wait until spring?  
**\<rehrar>** Ah, wait no. we want RandomX in ASAP, huh?  
**\<vtnerd\_\_>** This is 25% savings just for the ring sigs portion, not the entire tx, right? I don't see the reason for the push  
**\<rehrar>** so pushing it back maybe isn't great  
**\<sarang>** vtnerd\_\_: a 2-2 txn shrinks by 25% overall  
**\<sarang>** not just sigs  
**\<sarang>** (ring sigs themselves shrink by approx 50%)  
**\<rehrar>** oof  
**\<rbrunner>** My gut feeling tells me that RandomX and those CLSAG thing together will be a bit too much ...  
**\<vtnerd\_\_>** Hmm need to read the paper then, didn't realize it dropped that much  
**\<sarang>** you save 320 bytes per spent input  
**\<sarang>** and about 20% on sig verification time  
**\<vtnerd\_\_>** They are separate things entirely  
**\<vtnerd\_\_>** They are either ready independently or not  
**\<sarang>** And to clarify, there's working code already that anyone is free to review  
**\<sarang>** (verification code will be tweaked a bit still)  
**\<vtnerd\_\_>** Yeah the issue was a math review though ... ?  
**\<sarang>** Yes, and a formal code review  
**\<sarang>** But getting early internal review would be useful  
**\<rehrar>** even though waiting on bulletproofs was a good idea, it was still painful to have that six months of big big transactions  
**\<vtnerd\_\_>** Oh you wanted both for this too? Ok  
**\<rehrar>** that we forever carry  
**\<sarang>** vtnerd\_\_: it's important enough that I think both math/code review are important  
**\<sarang>** esp. since MLSAG never got a formal audit  
**\<vtnerd\_\_>** I mean its either that or risk an entire blow up of the coin  
**\<vtnerd\_\_>** In response to rehrar  
**\<dEBRUYNE>** sarang: I'd be fine with spring, that at least gives third wallet providers plenty of time to work on it  
**\<luigi1111>** I think spring yes  
**\<luigi1111>** for clsag  
**\<rehrar>** yes, but my suggestion was pushign back a month for audits  
**\<rehrar>** which lessens chance of coin blow up   
**\<sarang>** Well, I can let everyone know when I hear back from our potential reviewers  
**\<sarang>** OSTIF are also putting out feelers  
**\<dEBRUYNE> \<rehrar>** yes, but my suggestion was pushign back a month for audits \<= Can you elaborate?  
**\<dsc\_>** Has anyone heard from fluffy regarding GUI release?  
**\<dsc\_>** Has he arrived home yet?  
**\<rehrar>** if someone could see into the future, we can both see the outcome of the audits as well as save money by not paying for them  
**\<rbrunner>** If we wait with CLSAG until spring, will there be time to build something nice on top of it until then in addition?  
**\<sarang>** Also: earlier internal code review may reveal bugs that we can fix before sending code off to the reviewers  
**\<sarang>** rbrunner: ?  
**\<rehrar>** dEBRUYNE: it's just pushing this fall fork back one month to give some breathing room to get some CLSAG audits in  
**\<rbrunner>** Like those famous atomic swaps, or whatever  
**\<rehrar>** but as I said I see reasons not to do that. It was more in response to vtnerd\_\_  
**\<dEBRUYNE>** dsc\_: https://www.reddit.com/r/Monero/comments/c6y542/any\_news\_on\_the\_gui\_release/esc02my/  
**\<sarang>** DLSAG's key image issue makes it unsuitable for implementation just yet, IMO  
**\<sarang>** CLSAG is basically ready without such (known) problems  
**\<dEBRUYNE>** rehrar: Seems like a bit of a slippery slope  
**\<dEBRUYNE>** Seems safer and more prudent to wait six months  
**\<dEBRUYNE>** In the grand scheme of things six months isn't that much anyway   
**\<rehrar>** I don't disagree, dEBRUYNE  
**\<rehrar>** proving alternative viewpoints  
**\<rehrar>** although how long six months is in tech and blockchain relatively is much bigger  
**\<sarang>** It's pretty moot at this point anyway  
**\<sarang>** Until we hear about audits  
**\<rbrunner>** Well, I think that "blockchain relative time" has slowed considerably lately   
**\<rehrar>** true. So maybe move on.  
**\<sarang>** It's a moo point. Like a cow's opinion  
**\<rehrar>** rbrunner: not with fireice and ryo nipping at our heels.  
**\<sarang>** Doesn't matter  
**\<rbrunner>** Lol  
**\<rehrar>** Pretty soon we'll be doing coordinated, organized attacks out of fear  
**\<rehrar>** alright, moving on  
**\<rehrar>** 3. Code/Ticket discussion  
**\<rbrunner>** I have used the Go RPC bindings: https://github.com/monero-ecosystem/go-monero-rpc-client  
**\<rbrunner>** My 2 PR's to improve on that were just merged today.  
**\<rbrunner>** Can confirm that the bloody thing works.  
**\<dEBRUYNE>** rbrunner: Have you spent any work (or chatted with the team about it) on OB lately?  
**\<rbrunner>** Yes, and the ball is definitely in their court now: https://github.com/OpenBazaar/openbazaar-go/issues/1638  
**\<moneromooo>** That sounds like a lot of nice work there.  
**\<rehrar>** much applause!  
**\<rehrar>** Is that something Revuo worthy, you think?  
**\<rehrar>** Go RPC stuffs?  
**\<rbrunner>** Ah, hmmm, maybe not yet the OpenBazaar stuff, quite early yet.  
**\<rbrunner>** RPC is of course ok to mention, maybe other people will use it  
**\<rehrar>** Alright, if there's nothing else we can move on  
**\<dEBRUYNE>** Nice work rbrunner  
**\<rbrunner>** Thanks!  
**\<rehrar>** I'm assuming in "Old Business" we don't need to continue discussion on Payment IDs?  
**\<dsc\_>** very nice rbrunner  
**\<moneromooo>** Only if there are new arguments.  
**\<rehrar>** going once  
**\<rehrar>** going twicee  
**\<dEBRUYNE>** rbrunner: "and no support for moderation" \<= Is that even feasible at this point?  
**\<rehrar>** hearing none, I think we can move on from PIDs  
**\<rbrunner>** Doubtful, unfortunately.  
**\<rehrar>** Ok, any other meeting items?  
**\<rehrar>** Just as kind of announcement. People going to Vegas for Defcon, some of us are going a couple days early (starting monday the 5th) to hang out and chill. All are invited and welcome.  
**\<dEBRUYNE>** rbrunner: I guess they could apply a similar process as bisq for moderation  
**\<dEBRUYNE> \<rehrar>** I'm assuming in "Old Business" we don't need to continue discussion on Payment IDs? \<= I think the rough consensus was that we should start with a full software removal first  
**\<dEBRUYNE>** (please correct me if I am wrong)  
**\<rbrunner>** Don't remember exactly, isn't Bisq multisig-based as well?  
**\<dEBRUYNE>** Partly (for the BTC part)  
**\<rehrar>** dEBRUYNE: every core team member that spoke up (in the issue) was very against that. Smooth, ArticMine, binaryFate  
**\<moneromooo>** I'll keep the parsing code with an opt-in flag in monerod I think.  
**\<rbrunner>**  to hang out and chill \<- is that even allowed for Monero people?  
**\<dEBRUYNE>** rehrar: No?  
**\<rehrar>** ohhhh wait  
**\<rehrar>** never mind, I'm speaking of PID removal in general  
**\<rehrar>** not long  
**\<dEBRUYNE>** They were against parsing tx\_extra / temporary ban  
**\<rehrar>** I got confused cuz you said "software removal 'first' "  
**\<rehrar>** and thought you were hinting at the reversal later  
**\<rehrar>** my bad  
**\<dEBRUYNE>** Hmm no  
**\<dEBRUYNE>** As far as I know, no one was against a full software removal  
**\<rehrar>** cool  
**\<dEBRUYNE>** There were people opposed against (i) temporary banning the tx\_extra field, (ii) permanently banning the tx\_extra field, (iii) parsing the tx\_extra field to disallow long payment IDs  
**\<rehrar>** then we gucci  
**\<sarang>** Define "full software removal" for clarity, plz?  
**\<sarang>** As in, no GUI option to add one for outgoing?  
**\<rehrar>** as I understand, Isthmus says he has some very interesting research going on about "treasures" found in th tx\_extra field  
**\<rehrar>** I'd like to see that research when it happens, and we can discuss the pros and cons afterwards  
**\<rbrunner>** Huh? Really?  
**\<moneromooo>** In fact, I already made that code. I have shitloads of stuff that's not being PRed just because it conflicts due to merging being stalled now   
**\<rbrunner>** That does not sound too good ...  
**\<dEBRUYNE>** moneromooo: Do you have a list for luigi that he can merge?  
**\<moneromooo>** Yes.  
**\<dEBRUYNE>** Could you post it here too?  
**\<moneromooo>** Sure. One moment...  
**\<dEBRUYNE>** sarang: removal from both CLI and GUI  
**\<sarang>** With no option to enable via flags?  
**\<moneromooo>** 5647/5666, 5650/5651, 5663/5664, 5668/5669, 5675/5676, 5678/5684 (there's more)  
**\<dEBRUYNE>** That was my idea kind of  
**\<moneromooo>** and 5690/5694, 5681/5708.  
**\<sarang>** Note that this could cause some exchanges/services to recommend specific wallets (that do continue to support) to their users  
**\<sarang>** which could be good or bad, depending on the wallets  
**\<dEBRUYNE>** That's a potential risk, yes  
**\<dEBRUYNE>** I deem it more likely that they will simply switch though  
**\<moneromooo>** I could keep the --enable-paymend-id-bad-for-privacy, and instead of enabling them, it prints "lolno".  
**\<dEBRUYNE>** moneromooo: Will send luigi the list in PM as a reminder  
**\<moneromooo>** Oh I did   
**\<rehrar>** dEBRUYNE sarang this is all one big experiment. I'd say let's try it this way and see how the exchanges react  
**\<moneromooo>** I just don;t want to annoy him too much.  
**\<rehrar>** if they don't do as we hope, then we learn from that next time we have to make a  decision like this  
**\<rehrar>** but this is all hypothetical at this time. Let's see what happens.  
**\<rbrunner>** I really doubt that the exchanges have time on their hands to work against the community, but who knows  
**\<rehrar>** well, we do have LiveCoin  
**\<moneromooo>** If they recommend other wallets, I won't have any regret in breaking those in next fork ^\_^  
**\<rehrar>** either way  
**\<rehrar>** 4. Any last meeting items?  
**\<sarang>** 5707 speeds up MLSAG, and will be sped up a bit more  
**\<moneromooo>** Does anyoine want to review share-rpc ? Or did I mention that already...  
**\<sarang>** review will be welcome  
**\<dEBRUYNE>** rehrar: Should we perhaps discuss v0.14.1.1?  
**\<dEBRUYNE> \<rehrar>** dEBRUYNE sarang this is all one big experiment. I'd say let's try it this way and see how the exchanges react \<= Yes  
**\<dEBRUYNE>** To be fair, it is mostly the big ones that are remaining that we need to get on board  
**\<rehrar>** moneromooo: I'll put it in the REvuo volunteer opportunities (for all the good that will do)  
**\<moneromooo>** AFAIK it's waiting for a freebsd patch from TheCharlatan.  
**\<dEBRUYNE>** Bittrex, Bitfinex, and Binance  
**\<rehrar>** moneromooo: can you PM me a link to it  
**\<vtnerd\_\_>** moneromooo: I will look at it this week  
**\<moneromooo>** https://github.com/monero-project/monero/pull/5357  
**\<moneromooo>** Thanks  
**\<rehrar>** thank you  
**\<rehrar>** dEBRUYNE: what do you want to discuss regarding 0.14.1.1?  
**\<rehrar>** the floor is yours  
**\<dEBRUYNE>** Timeline kind of, what do the devs prefer?  
**\<dEBRUYNE>** We can move a bit faster now that we have deterministic builds  
**\<moneromooo>** As soon as the bsd patch is in.  
**\<moneromooo>** (and the patches above)  
**\<rehrar>** I may be getting confused because of the numbers, but didn't pony do builds already?  
**\<rehrar>** or this is new? what's going into it?  
**\<moneromooo>** The BSD patch and the patch list above.  
**\<rehrar>** ah, k  
**\<dEBRUYNE>** moneromooo: All right. Does this need a release v0.14 equivalent? https://github.com/monero-project/monero/pull/5705  
**\<dEBRUYNE>** rehrar: new release  
**\<moneromooo>** I dunno, ask TheCharlatan about this one.  
**\<dEBRUYNE>** All right  
**\<rehrar>** ok, anything else to discuss about this release?  
**\<moneromooo>** The GUI I suppose ^\_^  
**\<rehrar>** by all means, moneromooo. Take it away.  
**\<moneromooo>** I don't have anything to say about it.  
**\<dEBRUYNE>** GUI will follow CLI for v0.14.1.1  
**\<dEBRUYNE>** First have to wait for pony to finish the v0.14.1.0 builds though   
**\<moneromooo>** There are missing builds for .0 ? I didn't even realize...  
**\<rehrar>** pony is traveling again  
**\<rehrar>** he does that  
**\<dEBRUYNE>** Yes  
**\<dEBRUYNE>** Also we kind of had to retag, which has delayed the release a bit  
**\<moneromooo>** Gonna run out of places to go soon.  
**\<rehrar>** he's running from the community methinks.  
**\<vtnerd\_\_>** Me? Lol I'm in a car on lte so I dropped service once and hit leave once stupidly  
**\<dEBRUYNE>** rehrar: He provided an update yesterday  
**\<dEBRUYNE>** Anyway, vtnerd\_\_ I wanted to ask you if you had already started some work on dandelion++ ?  
**\<rehrar>** dEBRUYNE: link?  
**\<dEBRUYNE>** https://www.reddit.com/r/Monero/comments/c6y542/any\_news\_on\_the\_gui\_release/esc02my/  
**\<rehrar>** alright, if there's nothign else, I think we can call it here.  
**\<rehrar>** discussion can obviously continue after the fact  
**\<vtnerd\_\_>** I started to look into it. At this point my ffs pt 2 is hopefully going to make that transition easier (but it won't be a complete d++ implementation)  
**\<rehrar>** Two weeks from now is the 14th of July. Same time.  
