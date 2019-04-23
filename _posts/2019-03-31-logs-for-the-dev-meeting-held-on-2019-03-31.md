---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2019-03-31
summary: Point release discussions, and miscellaneous
tags: [dev diaries, core, crypto]
author: el00ruobuob / dEBRUYNE
---

# Logs  

**\<hyc>** time  
**\<dEBRUYNE>** Time to start!  
**\<dEBRUYNE>** cc hyc, fluffypony, moneromooo, jtgrassie, vtnerd, sarang, suraeNoether, and anyone else I forgot :p  
**\<sgp\_>** hello :)  
**\<rbrunner>** Hi  
**\<hyc>** hey  
**\<oneiric\_>** hio  
**\<vtnerd\_\_>** hello  
**\<dEBRUYNE>** Let's start with the main topic of this meeting, the point release  
**\<kovri-slack> \<woodser>** hello  
**\<sarang>** hi  
**\<dEBRUYNE>** moneromooo: could you perhaps tell us what basically remains to be done / merged before we can tag the point release?  
**\<fluffypony>** 5239 5287 5288 5289 5290 5291 5292 5294 5295 5297 5298 5299 5302 5303 5305 5306 5307 5308 5309 5313 5317 5318 5319 5322 5325 5326 5327 5329 5331  
**\<fluffypony>** also waiting on 5121 to be squashed, probably going to give up on that  
**\<moneromooo>** I don't think there's anything really showstopper, so it'll be whenever we drain github.  
**\<mrantrax>** hello  
**\<moneromooo>** I'd like to get the SSL changes from vtnerd\_\_, and the rpc tests if possible.  
**\<fluffypony>** gingeropolous: please rebase 5221  
**\<fluffypony>** 5320 is in "do not merge" for now  
**\<moneromooo>** Oh, and the pay for service stuff, but this might require too much review time.  
**\<fluffypony>** 5332 is still in review  
**\<moneromooo>** Actually 5352 will need to go in before the release.  
**\<moneromooo>** The 100k lookups hit HDDs hard.  
**\<fluffypony>** 100%, it's on my list  
**\<dEBRUYNE>** So we can basically tag after that list is merged  
**\<fluffypony>** dEBRUYNE: no  
**\<fluffypony>** merge + give it like a week or two for issues  
**\<dEBRUYNE>** Perhaps I should've said branch :P  
**\<fluffypony>** yeah we can branch  
**\<dEBRUYNE>** So branch after that list is merged, then test 1-2 or two weeks and merge any fixes into the branch  
**\<dEBRUYNE>** Thereafter, tag :p  
**\<moneromooo>** The list above is basically what's 10 days old.  
**\<dEBRUYNE>** Perhaps we could use Monero's birthday (April 18) as target date  
**\<fluffypony>** depends on if people review things :-P  
**\<moneromooo>** And we need to make sure the ledger stuff is all ok. I'm not 100% sure whether 5332 is all we need.  
**\<dEBRUYNE>** moneromooo: I think stoffu said he'd extensively review and test the Ledger PRs  
**\<moneromooo>** OK  
**\<dEBRUYNE>** moneromooo: Anything else you'd like to mention or discuss?  
**\<sgp\_>** Birthday would be pretty cool  
**\<moneromooo>** Just that it would be really really nice if people were to review 5357 (pay for rpc).  
**\<moneromooo>** It's possibly going to give us a noticeable hash rate boost.  
**\<moneromooo>** It's got all the incentives in the right direction I think.  
**\<moneromooo>** And if someone wanted to go add optional pay-for-service to a bittorrent client, that could be a massive thing :)  
**\<dEBRUYNE>** For anyone reading, #5357 basically allows a remote node to add a pay for service feature, where the remote node users would use hashes to pay for the remote node service  
**\<rbrunner>** Is there an outline of the basic idea somewhere?  
**\<moneromooo>** There is a long commit message.  
**\<fluffypony>** sgp\_: it's not a birthday, it's a Moneroversary :-P  
**\<rbrunner>** Ok, got that commit message, thanks  
**\<dEBRUYNE>** sarang: Do you perhaps want to give a quick update on MRL stuff?  
**\<sarang>** We wrapped up some simulations on output selection, working on a proposed ring signature scheme to make transactions smaller, among other things  
**\<sarang>** I don't know what the timeline would be on this scheme, if it was decided to implement it  
**\<rbrunner>** How much smaller?  
**\<sarang>** it would save 320 bytes per spent input  
**\<sarang>** Verification time should be a wash, or a bit faster than right now  
**\<sarang>** We're finishing up security proofs on the scheme  
**\<dEBRUYNE>** That's a significant shave of transaction size  
**\<sarang>** It is  
**\<charuto>** will return addresses make it in the next hard fork?  
**\<dEBRUYNE>** sarang: Would it be worthwhile to get some independent auditor to look at the new scheme as wel?  
**\<dEBRUYNE>** as well\*  
**\<sarang>** External audits are always beneficial  
**\<sarang>** and the scheme itself is quite straightforward  
**\<sarang>** Example code: https://github.com/SarangNoether/skunkworks/blob/clsag/clsag/clsag.py  
**\<dEBRUYNE>** Wouldn't hurt indeed  
**\<sarang>** charuto: at least one return address scheme (by knaccc) would not require a fork at all (all client side using txextra)  
**\<dEBRUYNE>** I presume the changes would need a hard fork to get activated?  
**\<sarang>** dEBRUYNE: for CLSAG? yes  
**\<dEBRUYNE>** Yeah  
**\<sarang>** It could be decided to allow both sig schemes, but that seems unnecessary if the savings are all in our favor  
**\<charuto>** is txextra what is currently used for standalone unencrypted payment ids? i've heard the suggestion of using the old paymentid field as a return address  
**\<sarang>** The dual-address DLSAG signature model would also allow for refunds, but would require a hard fork and a lot of other changes  
**\<sarang>** charuto: this is (more or less) what knaccc's idea does, but for multi-output transactions in a clever way  
**\<dEBRUYNE>** sarang: Yeah, especially if they are audited  
**\<sarang>** CLSAG != DLSAG  
**\<dEBRUYNE>** sarang: Speaking of DLSAG, is the paper set to be released soon?  
**\<sarang>** if that's what you mean  
**\<sarang>** I'm going to be checking in with our coauthors tomorrow about this. There was a rolling deadline for the paper submission  
**\<kayront>** if I may interject, any updates on that interesting return address feature that was thrown around some weeks ago?  
**\<charuto>** thanks for the info sarang , personally i think the feature is well worth the additional transaction bytes, hope it makes it sooner or later  
**\<sarang>** kayront: was that knaccc's approach?  
**\<sarang>** (there have been a few different ideas for refunds)  
**\<kayront>** don't recall sarang , i think the first time I saw it it was someone else, I remember not recognizing the nickname. not sure if there have been further refinements to the idea since  
**\<sarang>** Regardless of the eventual decision on DLSAG, I support moving to the smaller CLSAG signature scheme if/when it's deemed ready  
**\<hyc>** these are independent schemes? both can be combined?  
**\<sarang>** Possibly. There a few different architectures for CLSAG  
**\<charuto>** also, any news on the other bulletproofs implementation? multiple output bulletproofs i believe it was called  
**\<sarang>** We already have multi-output BPs charuto  
**\<moneromooo>** MPC maybe ?  
**\<sarang>** Do you mean the multiparty computation for them?  
**\<sarang>** There's example code already. Questions remain on the security guarantees if you try to reduce the rounds in the MPC  
**\<charuto>** hold on let me search a bit  
**\<charuto>** i believe it was multi-output BPs  
**\<charuto>** didnt you guys at MRL start by only looking and implementing single-output BPs?  
**\<sarang>** Oh, well those were ready when BPs were first deployed  
**\<sarang>** We started to, but the timeline worked out to do multi-output right away  
**\<sarang>** I believe it's a consensus rule to aggregate outputs, in fact  
**\<sarang>** We did recently get some additional BP verification time improvements added  
**\<charuto>** oh, so single-output BPs never made it live? we skipped them and went directly to multi-output when BPs got introduced? great  
**\<kayront>** oh, also, how's that tor integration going? haven't heard of it for some time  
**\<sarang>** but those are not consensus (purely client-side algebra changes)  
**\<sarang>** charuto: yep  
**\<dEBRUYNE>** kayront: That PR got merged recently  
**\<sarang>** the BP MPC was an idea that moneromooo was interested in for a coinjoin-style construction  
**\<kayront>** dEBRUYNE: do you have a link?  
**\<dEBRUYNE>** kayront: https://twitter.com/JEhrenhofer/status/1110942633348816896  
**\<dEBRUYNE>** sarang: Thanks for your update :) To be clear, for a standard 2 input 2 output transaction, the savings would be approximately 25-30% right?  
**\<sarang>** For CLSAG?  
**\<dEBRUYNE>** Yes  
**\<sarang>** Yes, approximately 25% savings sounds right for a 2-2 w/ encrypted pID  
**\<sarang>** Of course, this all assumes favorable verification times and completed security proofs (and any other audit/review that's desired)  
**\<sarang>** thanks to RandomRun for the clever idea on this  
**\<dEBRUYNE>** Cool!  
**\<dEBRUYNE>** dsc provided an update for the GUI yesterday in -community, which I'll just paste  
**\<dEBRUYNE> \<dsc\_>** GUI update  
**\<dEBRUYNE> \<dsc\_>** Currently I'm implementing a white theme for the GUI. Will take a while to complete (ETA: 2 weeks). I also finished a redesign of the history page, now called transactions. Not only does it perform well when the user has a lot of historic data, it's also an improvement to UX.  
**\<dEBRUYNE> \<dsc\_>** kneuffelbund, designer of the GUI, did some IRL testing with \*real\* people and made notes. He is now designing/tweaking the wizards. https://github.com/monero-project/monero-gui/issues/2040  
**\<dEBRUYNE> \<dsc\_>** Me, Selsta and rbrunner7 worked on `monero://` URI support on Windows/Linux/OSX. Selsta is working on xmr\<->fiat conversions and xiphon is afaik. working on a decentralized node-o-matic.  
**\<dEBRUYNE> \<dsc\_>** Currently we are investigating a migration to Qt 5.9.7, which should give \*some\* extra performance and allow us to use newer Qt features.  
**\<dEBRUYNE> \<dsc\_>** After next point release, I will most likely focus on either i2p/tor integrations or android support.  
**\<sgp\_>** On top of this, I've begun chatting with the gui team on how to approach the networking UI for Tor/i2p/dandelion. Still in early stages, but I have some design examples  
**\<sarang>** What UI would be needed for dandelion?  
**\<sgp\_>** for just dandelion, just an on/off toggle  
**\<sarang>** Why have the option to toggle at all?  
**\<moneromooo>** Why would you want an off toggle ?  
**\<sarang>** The dandelion++ protocol basically reverts to standard diffusion if something goes wonky (like a malicious peer)  
**\<sgp\_>** moneromooo: I believe dandelion leaks more information to the first selected node  
**\<moneromooo>** What information ?  
**\<dEBRUYNE>** The normal information. I think the difference is that in dandelion++, that node actually knows it is the first  
**\<dEBRUYNE>** Whereas normally it is a guess  
**\<sgp\_>** dEBRUYNE: exactly, yes  
**\<sarang>** It does not know it is the first, without other information  
**\<sarang>** It knows only that it's part of a stem-mode relay  
**\<sarang>** using parameters from other projects, the average stem length is 10 hops  
**\<sgp\_>** 10? I figured it was more like 2-3  
**\<sarang>** It's tuneable  
**\<sarang>** BIP and Grin use 10% fluff probability IIRC  
**\<sarang>** and the stem topology changes every 10 minutes (also tuneable)  
**\<sgp\_>** I would like to have a quick discussion on this sometime elsewhere before I agree the option for non-dandelion should be removed from expert mode, but dandelion is a minor part of the page design anyway. If it indeed doesn't leak any more information, then I agree it shouldn't be a configurable option  
**\<sarang>** Well, we don't have any concrete plans on Dandelion yet anyway :D  
**\<moneromooo>** I'm certaonly not going to be adding an off option unless you show there is leakage.  
**\<vtnerd>** I was also investigating dandelion over Tor, which separates the IP further. Although it may be "unnecessary" if other tweaks were done to p2p links, still lookign into this  
**\<moneromooo>** Ah, unless vtnerd gets there first :D  
**\<sgp\_>** Yes, I am aware of dandelion + Tor/i2p options too  
**\<dEBRUYNE> \<sarang>** It does not know it is the first, without other information \<= So thi sis not true? "that node actually knows it is the first"  
**\<dEBRUYNE>** in dandelion++  
**\<sarang>** Unless it has other network information, it only sees a relayed transaction that's marked to be in stem mode  
**\<sarang>** no data on the stem length is transmitted  
**\<dEBRUYNE>** OK  
**\<sarang>** also FWIW dandelion++ does not address targeted network-level attacks  
**\<dEBRUYNE>** Then I see no reason to turn it off :-P  
**\<vtnerd>** I dont see why the node would necessarily know that its the first, unless it was simultaneously monitoring all links from that peer (ISP level packet monitoring)  
**\<sgp\_>** I think I mostly used deduction in my analysis with only 2 stem nodes. With more, I'm more confident there is ambiguity  
**\<moneromooo>** In which case it'd also know without dandelion.  
**\<sarang>** yeah vtnerd dandelion++ is intended to mitigate against larger-scale network observation  
**\<vtnerd>** thats why I was looking into injecting noise over Tor, this makes ISP level stuff much harder  
**\<sarang>** The nice thing about dandelion is that it cares only about peer topology, and not about anything else at the network level  
**\<vtnerd>** correct, its a simple technique for making the techniques that coinbase or whatever are trying to do  
**\<sarang>** BTW I'm pretty sure the current BIP has a slightly incorrect implementation when it comes to the stem-fluff transition, that Grin recently changed away from  
**\<oneiric\_>** ntcp2 in i2p gives approximately 65kB packets to play with too, plenty of room for padding noise  
**\<vtnerd>** \*mitigate the observation that...  
**\<sgp\_>** I changed my mind. Dandelion with stem nodes >2 should be automatic imo  
**\<sarang>** The formal analysis also assumes a slow and small rollout  
**\<sarang>** so the network benefits even if only a portion of nodes upgrade to support it  
**\<sarang>** (not really as applicable for us, but good to know anyway)  
**\<vtnerd>** oneiric\_ : its a bit more inolved than simple padding, you have to be careful about "burstiness" - if the link suddenly starts sending out lots of data just before a new tx appears in the mempool, its a potential giveaway too  
**\<vtnerd>** theres a certain pattern to the epee p2p protocol chatter  
**\<sarang>** We can also discuss Dandelion++ details at tomorrow's MRL meeting if this is useful for anyone  
**\<oneiric\_>** yeah, in my test code i do uniform sample of full range  
**\<sarang>** (17:00 UTC)  
**\<vtnerd>** or should be, I have to look at some wireshark captures a bit to say more  
**\<moneromooo>** Long ago, I intended to relay txes on a fixed timer. Though it may be best to do this on a poisson timer.  
**\<sarang>** Yes, this is a good idea for diffusion mode  
**\<moneromooo>** (because then you can your tx at once, and reset a poisson delay)  
**\<moneromooo>** And relay some random tx when it fires.  
**\<sarang>** and in fact for the Dandelion++ protocol, the recommendation for a block stem txn is a random delay before a diffusion  
**\<vtnerd>** fixed timers can be iffy, I posted a link to a paper in #monero-research-lab about this. all branches need same timing or you can see which branch someone took based on the small delay of when it appears on the wire  
**\<sarang>** \*blocked  
**\<sgp\_>** vtnerd what's the status of #4139 (MyMonero compatible server)? Still need reviewers? I've had several people express to me that this PR is important for other ecosystem projects  
**\<moneromooo>** I don't think anyone reviewed yet.  
**\<vtnerd>** hmm, I missed that part sarang thats interesting. that may work nicely with some of the stuff I prposed for the tor-part2 ffs/ccs  
**\<sarang>** Yeah, it assumes both that diffusion has a random delay, and that nodes use a random timer that checks for blocked stem relays  
**\<vtnerd>** sgp\_ I posted an update that unfortunately, I will be changing the DB format to fix a bug. no one has contacted me indicating they are using it, and therefore need code to upgrade the DB, so I should push those changes out  
**\<sarang>** the call it the embargo timer  
**\<vtnerd>** it is also probably worth breaking that review into at least one other PR to make it easier to review. otherwise, after the next push I'll do, it would be considered stable if anyone was willing to run it  
**\<dEBRUYNE>** vtnerd: Talking about lightservers, have you seen knaccc's proposal to improve privacy? https://github.com/monero-project/monero/issues/5145  
**\<vtnerd>** it seems like most people won't run it until has builds \_somewhere\_, so yeah I dunno  
**\<knaccc>** it's more random thoughts than a proposal :) it's far from a perfect solution  
**\<vtnerd>** I'm not sure what knacc was proposing with that really. Limiting the leaks of subaddress info I guess?  
**\<knaccc>** it means that light-wallet servers can't know the amounts of any outputs, even if it knows which outputs the connecting user owns  
**\<knaccc>** and also can't know which outputs the user owns, if it's fully implemented  
**\<vtnerd>** that would require a hardfork protocol change  
**\<knaccc>** yes, that's one of the many reasons it's far from perfect  
**\<vtnerd>** so - just forward all txes to the frontend for scanning. Thats alwasy been a proposal, and can be done with monerujo or similar right? The only advantage is eventually coming up with a faster/"lighter" protocol format  
**\<knaccc>** well just changing the way that output amounts are encrypted so that the lightwallet can't know which users are rich would be quite good  
**\<knaccc>** it would mean light-wallet servers could not be required to report high value accounts  
**\<knaccc>** again, to be clear, i'm not proposiing people consider this seriously for implementation. it's just to spark thoughts that could lead to perhaps even better ideas  
**\<moneromooo>** Does anyone have anything they want in 0.14.1.0 that's not PRed yet ?  
**\<sarang>** Are we doing anything with output selection?  
**\<sarang>** Right now the selection algorithm selects outputs with poor weighting (relative to block density)  
**\<sarang>** this leads to, for example, overselection of coinbase  
**\<sarang>** (apologies if this already appears in a PR that I haven't seen yet)  
**\<moneromooo>** It does not. Last I knew it was waiting for more analysis.  
**\<sarang>** and I was waiting to hear what analysis people actually wanted  
**\<moneromooo>** And also there was this tantalizing comment about the numerical instability only applying to one way of doing the right thing...  
**\<sarang>** I still strongly suspect that a discrete density-weighted block selection will yield statistically the same results  
**\<moneromooo>** Well, as far as I'm concerned, it it makes things substantially better, I'm for adding it. We can always re-improve it again later.  
**\<sarang>** but I don't have an efficient and stable way of doing that right now  
**\<sarang>** OK  
**\<sarang>** I request additional eyes on the algorithm  
**\<sarang>** It's the output\_lineup method from these simulations: https://github.com/SarangNoether/skunkworks/blob/outputs/outputs/simulate.py  
**\<moneromooo>** Oh, there was also talk of making the scaling dependent on the last year or so, rather than the full chain.  
**\<sarang>** This is tuneable in the simulation  
**\<sarang>** and I agree that it's a good modification  
**\<oneiric\_>** sarang: select\_lineup? #L128  
**\<sarang>** Whoops, yes, thank you  
**\<oneiric\_>** np  
**\<sarang>** the statistics relating to output types refers to the size of the block (in outputs) from which the draw occurred  
**\<sarang>** so a type-1 output is always coinbase (but not vice versa)  
**\<sarang>** No output selection algorithm performs ideally under all possible chain conditions  
**\<sarang>** e.g. if transaction volumes plummet for an extended period  
**\<sarang>** but I believe that the lineup method does the most reasonable job under most conditions  
**\<sarang>** If someone has an efficient way to do a gamma CDF (which would allow a direct discrete weighting of block selection by their size/density) please let me know  
**\<oneiric\_>** what are the failure conditions? how bad is the failure if it happens (compared with alternatives)?  
**\<dEBRUYNE>** We're a bit over time, so I kind of want to wrap this up. Does anyone have anything else to add?  
**\<dEBRUYNE>** (discussions can of course continue after the meeting)  
**\<sarang>** oneiric\_: try the feast or famine conditions  
**\<moneromooo>** FWIW, the CDF can be calculated only every, say, 1k blocks. Then interpolation.  
**\<sarang>** I wonder how quickly that breaks down for the head and tail of the distribution  
**\<sarang>** (which would affect the ability to spend very new or very old coins)  
**\<sarang>** I am very open to a discrete CDF method if it performs better than lineup  
**\<moneromooo>** Tail, likely nothing. But yes, it probably warrants having more samples at the head.  
**\<dEBRUYNE>** Going to call the end of the meeting. Thanks all for coming and providing input!  
