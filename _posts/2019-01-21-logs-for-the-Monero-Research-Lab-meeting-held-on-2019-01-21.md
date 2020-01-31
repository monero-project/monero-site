---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-01-21
summary: Ongoing work, New work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / surae
---

# Logs  

**\<sarang>** FYI meeting begins shortly  
**\<sarang>** Current agenda: https://github.com/monero-project/meta/issues/301  
**\<sarang>** Shall we begin?  
**\<suraeNoether>** sure  
**\<sarang>** Greetings, everyone  
**\<suraeNoether>** letsdothis.gif  
**\<oneiric\_>** o/  
**\<sarang>** I dislike mass pings, but given certain topics, a special ping to sgp\_ ArticMine moneromooo knaccc  
**\<sarang>** First, ONGOING WORK  
**\<ArticMine>** Hi  
**\<sarang>** Much discussion about payment ID deprecation has occurred  
**\<sarang>** sgp\_ is holding an open meeting to discuss this, on 25 January: https://github.com/monero-project/meta/issues/299  
**\<sarang>** THe current proposal intends to discuss is a deprecation of unencrypted pIDs at next upgrade, followed by a ban on all payment IDs in fall  
**\<sarang>** The main source of contention at this point seems to be whether keeping encrypted pIDs around, whether or not the wallet supports them by default, is necessary or desired  
**\<sarang>** Unless there's something important to talk about regarding this, and its relationship to the upcoming fork, we can table it until sgp\_'s meeting  
**\<suraeNoether>** i think it's wise to table the discussion until the meeting  
**\<sarang>** moneromooo has been working on wallet handling of payment IDs, as well as the use of default payment IDs for transaction indistinguishability  
**\<sarang>** ok!  
**\<sarang>** Next is block size scaling  
**\<sarang>** ArticMine recently posted a new proposal \\  
**\<sarang>** So the two on the table right now are the dual-median option (presented last time) and ArticMine's new one  
**\<ArticMine>** I can go over the details and answer questions  
**\<sarang>** ty ArticMine  
**\<sarang>** Here is the paste on this idea, linked earlier: http://paste.debian.net/hidden/50f142a6/  
**\<lurkinandlearnin>** To confirm, the old proposal is this? https://github.com/noncesense-research-lab/Blockchain\_big\_bang/blob/master/models/Isthmus\_Bx\_big\_bang\_model.ipynb  
**\<ArticMine>** The key part of  my proposal is to separate the block weight into a long term portion LongTermBlockWeight and the balance  
**\<ArticMine>**  LongTermBlockWeight - BlockWeight  
**\<sarang>** lurkinandlearnin: look at notebook line [3]  
**\<ArticMine>** LongTermBlockWeight does not include the burst potion that can go up to 50x  
**\<ArticMine>** So the LongTermMedianBlockWeight does not compound at 50x  
**\<suraeNoether>** fwiw for the folks in the audience: one of the reasons block size based on medians is a difficult question is the way medians behave...  
**\<suraeNoether>** most equations that have been proposed here introduce an effective time delay between how max block size is responding to previous block sizes... and it's a difference equation... and introducing time delay to difference equations can introduce very strange behavior like chaos.  (example: https://advancesindifferenceequations.springeropen.com/articles/10.1186/s13662-015-0374-1 )  
**\<suraeNoether>** chaos is bad  
**\<suraeNoether>** so most of these proposals are most easily analyzed with simulations, which provide no guarantee that things won't go crazy. i've been looking into mean-based appraoches instead of median-based approaches; this introduces the possibility that outliers become disproportionately important, but it removes chaos from the equations, so we may be able to design a globally stable approach.  
**\<suraeNoether>** in addition to evaluating articmine's proposal  
**\<ArticMine>** This is the key difference with the prior proposal that compounds the LongTermMedianBlockWeight using the entire block  
**\<ArticMine>** the  
**\<sarang>** Including the simple two-median approach, right ArticMine ?  
**\<ArticMine>** Yes the simple two median approach fails  
**\<suraeNoether>** i'm still not clear on the properties we want out of max block size adjustments  
**\<ArticMine>** Since it either compounds the 50x burst (my initial version) or kills the burst over time (smooth's version)  
**\<sarang>** ArticMine: is that paste complete as written?  
**\<suraeNoether>** beyond "ability to go 50x over a slow day to accommodate a christmas day, and to not allow a big bang"  
**\<ArticMine>** Yes  
**\<sarang>** Isthmus and I plan to work this in to our existing simulations  
**\<sarang>** His is more complete, but I am doing one for my own education and as a separate check  
**\<sarang>** We shall need to make a decision by freeze time  
**\<sarang>** ArticMine: there are a few subtleties that I'll want to ask you about later  
**\<sarang>** But I also would like to hear the answer to suraeNoether's question  
**\<nioc>** I did not see any response to smooth's comment.....  
**\<nioc>** you can avoid any sort of consensus issues on \*1.4 by making it 1.375 which is adding 3/8  
**\<nioc>** 10:50 PM or some such, but that should be close enough  
**\<nioc>** 10:56 PM overall looks good to me at first reading  
**\<nioc>** 11:02 PM i guess 4/10 is fine too, just slower (but not significant)  
**\<sarang>** that was a rounding issue, I suppose  
**\<moneromooo>** If people will fuck up with 1.4, they will fuck up with 1.375.  
**\<moneromooo>** For interested people, the amp branch has ArticMine's change (untested).  
**\<suraeNoether>** we should just pick a number that can be represented exactly in a computer  
**\<moneromooo>** (just the top patch)  
**\<moneromooo>** Better to pick one that can't. You don't want people to use floating point and think they did it right bevause the number was chosen to make things look right.  
**\<sarang>** branch link: https://github.com/moneromooo-monero/bitmonero/commit/f1ee51c55963d05a78db916d41da7dc5948bb05a  
**\<suraeNoether>** representing 1.4 in a computer is inexact and will cause floating point rounding problems in different pieces of software, but i think 1.375 can be represented in binary exactly and so there is no roundoff problem in that regard...  
**\<sarang>** also, hot dang that was fast moneromooo  
**\<suraeNoether>** one of the things i, personally, would like out of the block size adjustment is this  
**\<ArticMine>** smooth's comment would e an improvement if the BlockWeight were a factor of 8 in bytes, but it is not. So in reality it is not a material change  
**\<suraeNoether>** moneromooo: that's a strong argument actually  
**\<suraeNoether>** so, i think block size adjustment can benefit from: forcing the marginal cost of adding an additional transaction in terms of block reward penalty to be greater than the standard fees gained by including that transaction  
**\<suraeNoether>** even if we pick some exotic max\_block\_size calculation, we should also be changing the block reward penalty this way  
**\<ArticMine>** Still I see as an improvement. As per suraeNoether comment above. So we can make the change from 1.4 to 1.375  
**\<suraeNoether>** of course, if the block is nearly full and the block reward is almost zero, adding almost any transaction fees will make up for it  
**\<suraeNoether>** ArticMine: moneromooo just made a strong argument \*against\* that  
**\<suraeNoether>** so this marginal cost approach will be most effective when block sizes are nowhere near the big bang levels  
**\<suraeNoether>** which is good: providing an incentive to stay reasonable when they are already reasonable  
**\<ArticMine>** No When block weight is close to big bang levels LongTermBlockWeight is << BlockWeight  
**\<suraeNoether>** i'm not talking about your block size proposal; i'm talking about block reward penalty as a function of block size  
**\<lurkinandlearnin>** Has any thought been given towards an incentive for miners to create smaller blocks when transaction volume is low? To slow blockchain growth  
**\<suraeNoether>** that's what i was just talking about lurkinandlearnin  
**\<pigeons>** lower blockchain growth is probably less important than quicker validation and propogation but the same point applies  
**\<sarang>** lurkinandlearnin: all txns get added eventually if the fee market allows  
**\<suraeNoether>** something isthmus brought up to me: there are only about 150,000 blocks between us and the next hard fork. with the \*simple\* two-median method will forbid a blowup before the next hard fork.  
**\<suraeNoether>** woops i mean between March and October hard forks  
**\<moneromooo>** Yes, starting the penalty before 100% (idea from smooth).  
**\<suraeNoether>** we should consider implementing the simple method \*first\* and spending time thinking about a more optimal solution, rather than trying to go for broke  
**\<lurkinandlearnin>** moneromooo: that sounds like a great idea  
**\<suraeNoether>** moneromooo: yep, smooth had the initial idea of sub-100%-median block penalty; my idea is to make the drop-off nonlinear so that it's more expensive to push block sizes larger in the absence of a healthy fee market  
**\<sarang>** Well, simulations will shortly be done for ArticMine's proposal compared to the current approach and the simple two-median  
**\<sarang>** Presumably the next upgrade will do one of the two options  
**\<suraeNoether>** okay, i don't think we're going to come to any conclusions on this, but it's been a good update  
**\<suraeNoether>** let's move past scaling  
**\<sarang>** Sure thing. We'll talk after simulation data are available  
**\<sarang>** Next is transaction size reduction, for which there is a PR from moneromooo  
**\<sarang>** AFAIK there are no new updates on this otherwise  
**\<sarang>** unless moneromooo you wish to say anything about it?  
**\<moneromooo>** I'd just like one of you Noethers to review the code before it goes in.  
**\<moneromooo>** suraeNoether said he'd have a look.  
**\<suraeNoether>** sarang let's do that \*together\* tomorrow morning? we can do it over a vidchat since we were going to meet tomorrow anyway  
**\<sarang>** Roger; the math looked correct to me, but I may have neglected to add a comment  
**\<sarang>** ok suraeNoether can do  
**\<suraeNoether>** fun  
**\<suraeNoether>** as for the semi-final point on the agenda... what's the deal with bulletproofs, anyway? seinfeld.gif  
**\<sarang>** lol  
**\<suraeNoether>** DID YOU GUYS MAKE THINGS FASTER AGAIN  
**\<sarang>** Only a brief update that some BP verifier optimizations didn't make it into the 0.13 release  
**\<sarang>** a very unscientific test on my box resulted in a 64-batch of 2-proofs verifying 60% faster  
**\<sarang>** kudos to moneromooo for continuing to squeeze speed out of those suckers  
**\<lurkinandlearnin>** holy smokes  
**\<lurkinandlearnin>** 60% faster than current impl or than pre-BP?  
**\<sarang>** than the 0.13 release code  
**\<suraeNoether>** jeez  
**\<sarang>** that is, 0.13 vs master  
**\<sarang>** as of a few days ago  
**\<suraeNoether>** where did this speedup come from?  
**\<sarang>** Folding in some multiexponentiation operations, as well a host of other voodoo moneromooo can dooo  
**\<sarang>** So we can brag about the next release making txns smaller and faster again :D  
**\<moneromooo>** I did not keep track of which change sped up by how much. I think sarang's single multiexp change is probably the biggest one though.  
**\<sarang>** Let's now discuss NEW WORK  
**\<suraeNoether>** cool!  
**\<sarang>** suraeNoether: your personal updates?  
**\<suraeNoether>** personally, this past week was largely a konferenco administration week for me, contacting speakers and vendors and getting my bank compliant with me  
**\<suraeNoether>** i did research on bulletproofs, linear algebra in cryptography, and our matching paper  
**\<sarang>** I'm sooper excited for this conference  
**\<suraeNoether>** but a lot of my work this week was contacting possible speakers  
**\<sarang>** sounds like we'll have some big names joining us  
**\<suraeNoether>** yes, it's pretty great so far; we are adding more names this week  
**\<sarang>** Any updates on the matching paper suraeNoether ?  
**\<suraeNoether>** my simulations aren't passing unit tests  
**\<suraeNoether>** once they do, i'm making a commit  
**\<suraeNoether>** and then collecting data  
**\<suraeNoether>** so: it's moving forward  
**\<sarang>** excellent  
**\<sarang>** Any questions for suraeNoether ?  
**\<sarang>** OK, I'll go next  
**\<suraeNoether>** oh i had one more thing to bring up  
**\<suraeNoether>** sorry sarang, i don't want to interrupt  
**\<sarang>** np go ahead  
**\<lurkinandlearnin>** is there a list of speakers for the conference?  
**\<suraeNoether>** i found all those old Monero Protocol Standards documents I started writing last year, and I'm wondering if folks still want me to compose the v0.1 versions of these rather short text documents into something to put up on our github  
**\<lurkinandlearnin>** or not official yet?  
**\<suraeNoether>** lurkinandlearnin: check out konferenco.xyz  
**\<suraeNoether>** the benefit of having the standards instead of a single big zero-to-monero document is this:  
**\<suraeNoether>** we can update each one piecemeal and only update it if something has changed. this reduces overhead work on documentation. and if it's on github, anyone can update them, we don't have to go find kurt magnus or koe  
**\<sarang>** FWIW the ZtM doc is on github and can be PRed  
**\<sarang>** but I see the point about modularity  
**\<sarang>** My pessimistic side worries that updates would fall behind, as they already have on ZtM  
**\<lurkinandlearnin>** What aspects of the protocol are covered? Could be something useful to incorporate into the often neglected wiki  
**\<lurkinandlearnin>** as they both sound modular  
**\<suraeNoether>** lurkinandlearnin: essentially similar to the cryptonote standards they released after i reviewed their whitepaper years ago, like this: https://cryptonote.org/cns/cns006.txt  
**\<suraeNoether>** (my whitepaper review would have been moderately better if they wrote those standards before the whitepaper, but hey)  
**\<suraeNoether>** sarang your points are valid  
**\<suraeNoether>** which is why i'm not sure if it's a good idea to devote time to it  
**\<Isthmus>** Wiki is a good idea, specs are a good idea. Having experience as a book editor, people making random PRs is a huge nightmare to text style and continuity and often took 4x as long to polish then if SerHack and I had written ourselves.  
**\<suraeNoether>** okay, how about this  
**\<sarang>** Whatever is made available, whether ZtM or wiki or standards, keeping up to date is the most important aspect IMO  
**\<sarang>** I cringe at "text-rendered math" though...  
**\<Isthmus>** Maybe we should pick one to be the "reference" documentation and the others follow suite?  
**\<sarang>** Who's responsible for maintenance of each one?  
**\<lurkinandlearnin>** Well as long as the version at time of writing is very clear keeping it updated is not so critical  
**\<suraeNoether>** sarang who's responsbile for maintaining anything around here?  
**\<sarang>** lurkinandlearnin: I disagree  
**\<suraeNoether>** how about i just post what i have after making it a little more readable, and if someone wants to run with it they can  
**\<lurkinandlearnin>** nice, but not disastrous. If anything having info about how things used to work out there is also useful.  
**\<suraeNoether>** i can post it on my personal github to avoid cluttering the primary\\  
**\<sarang>** suraeNoether: I think that'd be useful, to get a better sense of scope of audience  
**\<suraeNoether>** sarang: we can always label them clearly DEPRECATED AND NOT USEFUL. but i think it'd be better to have them out there  
**\<sarang>** good point  
**\<suraeNoether>** okay handing it back to sarang  
**\<sarang>** As long as it's clear what can be considered "closer to canonical"  
**\<sarang>** So I've had some testing and minor optimizations to BPs for the next release, as mentioned earlier  
**\<sarang>** Minor work on simulating block size changes to confirm work by Isthmus on scaling etc.  
**\<sarang>** Recording of new Breaking Monero episodes with sgp\_  
**\<sarang>** The usual new lit and project review  
**\<sarang>** and some work on a safe MPC protocol for Bulletproofs for future use  
**\<sarang>** as well as a lot of back-and-forth administrivia on the topics for the Boron upgrade  
**\<sarang>** I am personally in favor of either Boron Betelgeuse or Boron Bellatrix  
**\<sarang>** (as far as names go)  
**\<sarang>** and of course the math for graph matchings, which has been passed back to suraeNoether for simulation data that he is obtaining  
**\<lurkinandlearnin>** Betelgeuse will lead to a schism in the community over pronounciation  
**\<sarang>** precisely  
**\<sarang>** It's like the naming of iPhone X... by making it hard to get right, it forces you to think it's better than you are  
**\<sarang>** humbles us all  
**\<lurkinandlearnin>** "It gets the people going!"  
**\<sarang>** Any questions for me?  
**\<lurkinandlearnin>** what's the next breaking monero topic?  
**\<moneromooo>** Hmm... Lightning network things ?  
**\<sarang>** moneromooo: what questions on that?  
**\<Isthmus>** "Boron borealis" ?? I think there's a Harry Potter character called Bellatrix, which could get confusing with all the HP-themed MimbleWimble names.  
**\<sarang>** lurkinandlearnin: we have several topics in the lineup, to be arranged  
**\<Isthmus>** Also, Breaking Monero = awesome, thanks for all the time going into that series :- D  
**\<moneromooo>** Was anything done or thought about recently about anything monero needs for LN or LN style system ?  
**\<sarang>** moneromooo: some of it was an efficient and fungible way to handle protocol aborts, a la noninteractive refunds  
**\<sarang>** that was quietly tabled as several proposals for interactive refunds were thrown around  
**\<moneromooo>** Ah yes. It would be nice to see a list of things that are needed in monero as building blocks. In terms of parenthesized AND/OR. I always forget. Or never knew.  
**\<sarang>** That's a good point. Having a well-considered status update will be useful for longer-term planning  
**\<sarang>** Does anyone else have updates to share, before we adjourn?  
**\<sarang>** righto  
**\<sarang>** Thanks to everyone for joining  
**\<sarang>** Our current action items:  
**\<sarang>** (a) simulation data for block size proposals, to make a decision before freeze  
**\<sarang>** (b) final review of transaction size reduction PR  
**\<sarang>** (c) meeting to decide on payment ID deprecation (PLEASE attend or comment on github issue if you have an opinion on this, with justification/data)  
**\<sarang>** at ease, soldiers    
