---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-10-22
summary: Surae work, Sarang work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** OK, welcome to our meeting everyone  
**\<sarang>** GREETINGS  
**\<kovri-slack1> \<oneiric>** hiyo  
**\<sarang>** There is much to discuss today, but I'll try to dwell on particular topics too long  
**\<sarang>** FIRST, congrats to everyone on the network upgrade  
**\<endogenic>** oneiric btw i have a kovri thing to chat about but couldn't PM you  
**\<sarang>** BPs, bigger and better rings, and a host of other fixes are a benefit to our community  
**\<kovri-slack1> \<oneiric>** yeah, lost access to clearnet irc temporarily  
**\<sarang>** Related to this, the final BP audit report is out: https://github.com/SarangNoether/research-lab/blob/master/audits/bulletproofs/Report-QuarksLab.pdf  
**\<sarang>** It was delayed to wait for a bugfix at the time of upgrade  
**\<kovri-slack1> \<oneiric>** ^ halfway thru first read, great work by QuarksLabs  
**\<sarang>** Yeah, they did an outstanding job, catching things outside of BPs too (hence the delay)  
**\<sarang>** On to more things now...  
**\<sarang>** There was earlier discussion about making it clear to researchers how to contact us and such, to avoid low-quality repetitive research on old shit  
**\<sarang>** I propose an addition to the main project readme: http://paste.debian.net/hidden/6d3a8964/  
**\<sarang>** Related to that, and to talks and papers given over the past year-ish relating to "OMG old ringz are bad and everyone is ded", I think a blag post is called for, summarizing all the work we've done to mitigate against ring attacks: http://paste.debian.net/hidden/6d3a8964/  
**\<sarang>** Correction, this link is to the blag post: http://paste.debian.net/hidden/ea43fad6/  
**\<suraeNoether>** back  
**\<sarang>** Neither of these is live, but I'd like to post them soon. They take into account several good comments that were received last week about them  
**\<sarang>** If there are no comments over the next day or so, I'll PR them / send to the correct peeps to post  
**\<sarang>** Related to the upgrade, it was noted that our output selection has a bit of a bias, in that it selects blocks according to time, and then picks fakes equiprobably within them  
**\<sarang>** This is skewed a bit, since some blocks are full and other are empty  
**\<suraeNoether>** regarding blackballing/dead txn outputs: there is a very efficient algorithm I'm interested in benchmarking to revisit the question of whether it's worth the lab or the core team maintaining a live deadout list  
**\<sarang>** I recommend that we introduce a windowing, where transactions in the chosen block \_and\_ a small number on either side are equiprobably chosen  
**\<sarang>** suraeNoether: I now agree with your earlier sentiments that this would be a waste of time  
**\<sarang>** especially given our ring increase  
**\<suraeNoether>** why not use a rule like "pick block height h, go down to the first non-empty block of height h\* <= h and up to the first non-empty blcok of height h' >= h, and pick from the (inclusive) range [h\*, h']?   
**\<suraeNoether>** eh, i suppose details are unimportant for the meeting. :P  
**\<suraeNoether>** sarang i'll have some specific numbers to \*prove\* it's a waste of time, though. :P  
**\<sarang>** excellent  
**\<sarang>** But yeah, it's reasonably easy to mitigate against that bias, and we should  
**\<suraeNoether>** cool  
**\<selsta>** I have a question about that blog post  
**\<sarang>** selsta: go  
**\<sarang>** s/blog/blag  
**\<selsta>** Is it a good idea to write that we know about an upcoming research paper? Maybe other researchers would stop disclosing research that is in progress to us.  
**\<netg>** https://eprint.iacr.org/2018/990 < old?  
**\<suraeNoether>** selsta: we've communicated with them about that paper, and they didn't ask for any particular confidentiality or anything. in the past, researchers have contacted us with a paper and asked for confidentiality until publication, and we've kept those promises  
**\<suraeNoether>** netg i will read this carefully  
**\<selsta>** suraeNoether: okay :)  
**\<suraeNoether>** ok, i have two things i want to chat about: firstly, the churn analysis, and second, the monero konferenco  
**\<sarang>** May I say one thing first?  
**\<suraeNoether>** but i don't want to interrupt sarang's   
**\<suraeNoether>** yep  
**\<sarang>** Then I believe I'm finished  
**\<sarang>** ty  
**\<suraeNoether>** np didn't even finish typing  
**\<sarang>** I have two paper drafts, one on dual-key signatures and one on spent output sets, that are sitting in no-man's land right now. I'd like us to move those to the official MRL publication list  
**\<suraeNoether>** i thought we already had for DLSAG  
**\<sarang>** We had not  
**\<suraeNoether>** i'm fine with that, and we can reformat the thring signature paper and put them out at the same time with sequential numbers  
**\<suraeNoether>** or... we should wait till we find out about a journal for thring  
**\<sarang>** Cool, we can arrange PRs later for this  
**\<sarang>** selsta: about your comment  
**\<suraeNoether>** can you make both links available for the folks who are attending?  
**\<sarang>** I also didn't provide details on anything that hasn't already been discussed here publicly and known before those peeps contacted us  
**\<sarang>** I'll look up links to the compiled PDFs while suraeNoether discusses  
**\<suraeNoether>** okay, coolio  
**\<suraeNoether>** so, at our research meeting two weeks ago, i guess it was Oct 1  
**\<suraeNoether>** rehrar, sgp, sarang, and others asked for a formalization of the EAE + churn problem  
**\<suraeNoether>** in the ensuing two weeks, I've come up with some... disappointing results. and some hopeful results. sort of contradictory  
**\<suraeNoether>** not a literal contradiction, or i wouldn't be coming to the community about it  
**\<suraeNoether>** so, essentially, i have \*nearly\* formalized a game i'm calling the linkability game, and a specific implementation of this game could be called the fungibility game  
**\<suraeNoether>** this quantifies the complexity an adversary faces when trying to link monero transactions  
**\<suraeNoether>** compare this to the naive anonymity set questions we began with... "if we churn 7 times with ring size 5, does that mean we have an effective anonymity set of 5^7? who knows!"  
**\<suraeNoether>** well, now i have a formal, quantifiable way of assessing the time required for an adversary to find a plausible transaction history that is optimal with respect to some model chosen by the adversary: that is to say, if the adversary thinks they have come up with a new heuristic, I can answer the question "how long does it take to find the most plausible transaction history, according to this heuristic?"  
**\<sarang>** It sounds like the counter to the adversary's work is "how many other transaction histories are possible along with the true spends?"  
**\<suraeNoether>** the answer to that question confirms previous results from linkability studies: it doesn't take long. Even in a world with \*lots and lots\* of plausible transaction histories, it is fairly quick to find the \*optimally plausible ones\* where plausible is defined by the adversary's model  
**\<suraeNoether>** ^ good observation, sarang, they are related questions, but here's what's funny  
**\<suraeNoether>** if an adversary wants to find an \_approximately\_ optimal transaction history among N keys with ring size R using some model, they can find it in O(R\*N) time  
**\<suraeNoether>** if they want to find an \_exactly\_ optimal trnasaction history, they can do it in O(R\*N^1.5) time  
**\<suraeNoether>** this is sort of bad news and sort of good news: this is says "it is never worse than O(R\*N^1.5) time to find these histories, and so the time required is proportional to ring size, and gets more annoying as the blockchain gets bigger"  
**\<sarang>** What are the takeaways for this group?  
**\<suraeNoether>** oh gosh sorry, yeah  
**\<suraeNoether>** sorry, getting lost in the weeds  
**\<suraeNoether>** so, bad news: it's fast and efficient to find an optimally plausible solution. good news: the total number of solutions can be made \*really really massive\*  
**\<suraeNoether>** even if someone can find the optimally plausible solution in a short period of time, \*all the other possible solutions\* are also plausible  
**\<suraeNoether>** so, I asked myself "okay, how can we make it so that there are so many plausible transaction histories that it's unreasonable to decide on any one of them?"  
**\<wow-discord> \<sgp>** yes  
**\<suraeNoether>** even if you have a great heuristic and you can find the optimally plausible one very quickly, you are vulnerable to \*not\* catching someone who uses your heuristics to greedily make their transactions as invisible as possible  
**\<suraeNoether>** so, for example, there are at least a billion transaction histories that are \*plausible\* if you deposit 16 outputs with a ring size of 10   
**\<suraeNoether>** there are 10^81 plausible trnasaction histories if you deposit 52 outputs at ring size 100  
**\<sarang>** So the question becomes "what number is acceptable"?  
**\<wow-discord> \<sgp>** how are 10, 81, 52, and 100 related?  
**\<sarang>** (not from a theory perspective, from a practical one)  
**\<suraeNoether>** so: time complexity to find \*any\* solution is linearly related to ring size, and the total number of possible transaction histories can be computed precisely using this formula: (((R-1)^(R-1))/(R^(R-2)))^k where k = # of outputs deposited  
**\<suraeNoether>** sgp\_[m]: merely related according to that formula  
**\<wow-discord> \<sgp>** thanks, gives me some context  
**\<suraeNoether>** i picked 10 and 100 ring members respectively as examples that are one order of magnitude apart, and i picked a billion (10^9) and big (10^81) essentially just to look at the behavior, at a glance  
**\<suraeNoether>** so, this actually demonstrates a few things  
**\<suraeNoether>** firstly: someone who is making only a few deposits, say 3, with no churn whatsoever, at a ring size of 11 is like ... dealing with 76 or so possible transaction histories  
**\<suraeNoether>** which is unnaceptable for someone whose safety depends on Monero  
**\<suraeNoether>** this means people transacting with untrusted 3rd parties should be using at least one churn between transactions  
**\<moneromooo>** What do you call "transaction history" ?  
**\<suraeNoether>** moneromooo: a plausible transaction history is a matching between key images and one-time output keys. there is only one "true" transaction history, which corresponds to "which key was used to compute this key image?"  
**\<suraeNoether>** if some signatures are mutually incompatible, you end up not getting a matching  
**\<moneromooo>** Thanks.  
**\<suraeNoether>** np  
**\<sarang>** (e.g. from the graph representation we talked about a while ago)  
**\<suraeNoether>** yep  
**\<sarang>** I assume it also goes without saying that churns should follow spend timing patterns  
**\<sarang>** but this is a separate issue from the idea of transaction matchings  
**\<suraeNoether>** yes  
**\<suraeNoether>** so, the second thing this demonstrates is the power of plausible deniability, which really only matters for a court-of-law sort of situation as opposed to a more nefarious type who is trying to literally hunt or track down people using the monero blockchain  
**\<suraeNoether>** another thing: this same approach can be used to link commitments and nullifiers in zcash; the goodness of your linking is dependent upon your heuristics (like timing as people leave and enter the shielded pool, or like amount-matching with the transparent-pool trnasactions) just like in monero. the primary difference is that the total number of edges to match is much much higher in zcash, at least whenever  
**\<suraeNoether>** the shielded pool is big enough  
**\<suraeNoether>** so it takes a lot longer, and there is less information to base heuristics on  
**\<sarang>** In the interest of time, what are our next steps?  
**\<sarang>** These are excellent results  
**\<suraeNoether>** i think a priority of MRL should be to seek out replacements for ring signatures  
**\<sarang>** of course  
**\<suraeNoether>** i think writing a paper on the topic will 1) do Monero a world of good in the long run but 2) will be FUDbait in the short run  
**\<suraeNoether>** sort of like my MRL-0001 paper  
**\<sarang>** Our users want to know what churn should look like  
**\<sarang>** And before we replace ring sigs, understanding the benefits to increasing ring size is also important  
**\<suraeNoether>** well, that's a good question: my results suggest that churning is helpful, but far less important than \*diluting your deposits.\* let me give you an example  
**\<sgp\_>** yeah, I agree churning and ringsize should be the high priority since we have them right now  
**\<sarang>** IMO we should write up the relevant portions of these results and give some insights into churn behavior and how ring size affects it  
**\<sarang>** and then best practices can be built from that  
**\<sarang>** formalization and generalization to other projects could come after  
**\<sgp\_>** sarang please yes :) it's the material the community can best understand  
**\<suraeNoether>** if you are depositing more than 155 outputs at our current ring size, the adversary has more possible transaciotn histories than the number of fundamental particles in the universe.  
**\<sarang>** sure  
**\<suraeNoether>** and that has no information about churn in it whatsoever  
**\<sarang>** ok  
**\<suraeNoether>** but we can re-interpret it: instead of 155 outputs, say we have 1 output we churn 154 times. same answer  
**\<sarang>** what security level should we strive for?  
**\<suraeNoether>** i have no clue, especially since this is a heuristic approach; if we shoot for 10^120, i'm pretty sure we'll be good to go  
**\<sarang>** I'm not sure 2^256 is necessary for these kinds of plausible deniability  
**\<sarang>** For rings we only have 11 options =p  
**\<suraeNoether>** let's say we want to obscure 6 outputs by churning 6 times each. that's 216 keys in total. at ring size 10, there are 10^127 transaction histories  
**\<suraeNoether>** oh no that's 36 keys. :P  
**\<suraeNoether>** let's say 14 keys 14 times. that gives us 10^114 transaction histories  
**\<sarang>** Cool, let's get a table like this into a tech note, along with the relevant results  
**\<suraeNoether>** i don't have a good way of saying "here, churn 7 times at ring size 11"  
**\<suraeNoether>** ok cool  
**\<sarang>** and it'll be a great contribution  
**\<sarang>** excellent work suraeNoether on this  
**\<moneromooo>** I still hate churning though.  
**\<suraeNoether>** moneromooo same same  
**\<sarang>** due to bloat?  
**\<sarang>** which it certainly does  
**\<moneromooo>** Yes. It encourages people to shit on everyone's else resources.  
**\<sarang>** suraeNoether and I had discussed that earlier too, that we need to provide answers about reasonable threat models that minimize bloat  
**\<sarang>** and obv different user types have different requirements for their privacy/safety  
**\<suraeNoether>** long story short: don't use KYC/AML exchanges, and if you do, make sure you churn at least once before your deposits... and more often if you plan on making many deposits that you suspect are "marked..." and dilute your deposits with other outputs as much as possible.  
**\<sarang>** it's the "as much as possible" and "at least" that this note should attempt to quantify  
**\<sgp\_>** yes, thanks  
**\<sarang>** cool  
**\<suraeNoether>** except i don't think it's directly quantifiable :( if we say "a cryptographic number of plausible transaction histories, so 10^88 or bigger, or so", this is essentially arbitrarily chosen  
**\<suraeNoether>** but we'll chat more about it later  
**\<sarang>** Well, whatever we do (or don't do) eventually needs to be distilled to best practices  
**\<sarang>** or users will just do whatever they think is helpful  
**\<sarang>** and that might just lead to bloat with no benefit  
**\<sarang>** Anyway, let's move on for now  
**\<sarang>** Any other quick news suraeNoether ?  
**\<sarang>** (10 min officially remain)  
**\<suraeNoether>** the second thing i wanted to talk to everyone about is the monero konferenco. in order to move forward in the funding process, please leave ANY COMMENT, positive, negative, or neutral, in this thread: https://forum.getmonero.org/6/ideas/90909/surae-noether-first-denver-monero-konferenco-spring-2019   
**\<suraeNoether>** Please keep in mind that things like booking the event  or inviting speakers... these are unlikely to happen before funding begins, and the longer we wait, the less likely it is we can get all the things we want to get   
**\<sarang>** ^  
**\<sarang>** There's been informal speaking interest from some top-quality folks  
**\<suraeNoether>** yes, several  
**\<sarang>** (won't put names out there yet)  
**\<suraeNoether>** also, I conferred with fluffypony re: timing for next year  
**\<suraeNoether>** due to the lateness of the year, the coincidence with consensus, etc, we decided on the weekend of June 22nd  
**\<suraeNoether>** unless booking goes weird, in which case we will shoot for June 15th as a back-up date  
**\<sarang>** sweet  
**\<suraeNoether>** I know i was mentioning April 27 last week, but that's 1) too close to consensus and graduation, and 2) pushing it back earlier seems unwise.  
**\<sarang>** To wrap up, I have some action-item links to list here  
**\<suraeNoether>** excellente  
**\<sarang>** The dual-key signature paper, which will be pushed to main MRL page unless there are comments: https://v2.overleaf.com/read/vcyxgpntfsgz  
**\<sarang>** The spent-output paper, same deal: https://v2.overleaf.com/read/xtbwpvqvtqmm  
**\<sarang>** The proposed addition to the readme, that discusses research contacts: http://paste.debian.net/hidden/6d3a8964/  
**\<sarang>** The proposed blag post responding to ring attacks: http://paste.debian.net/hidden/ea43fad6/  
**\<kovri-slack1> \<rehrar>** Oh shoot! None of my comments have relayed.  
**\<kovri-slack1> \<rehrar>** I have been talking this whole time.  
**\<sarang>** Action will be taken on all those links if I hear no comments or suggestions  
**\<kovri-slack1> \<rehrar>** And thought everyone has been ignoring me cuz they hate me.  
**\<sarang>** And of course, suraeNoether's FFS on the conference would like comments: https://forum.getmonero.org/6/ideas/90909/surae-noether-first-denver-monero-konferenco-spring-2019  
**\<kovri-slack1> \<rehrar>** I have many many comments on Brandon's work.  
**\<sarang>** rehrar[m]: hullo  
**\<sarang>** We can chat about all of this once we adjourn!  
**\<kovri-slack1> \<rehrar>** Ok.  
**\<sarang>** Any other last-minute wrap-up?  
**\<suraeNoether>** i'm very eager to see what rehrar[m] had to say  
**\<suraeNoether>** :P  
**\<sarang>** Yes! OK, lets adjourn and continue discussion  
**\<sarang>** Thanks to all  
**\<sarang>** hullo rehrar[m] !  
**\<binaryFate>** sarang title "Sets of spent notes" is ambiguous wording  
**\<kovri-slack1> \<oneiric>** same, thanks for the meeting  
**\<binaryFate>** maybe +Notes on "Sets of spent"+    
