---
layout: post
title: Logs for the MRL Meeting Held on 2020-06-03
tags: [dev diaries, crypto, research]
author: asymptotically / Sarang
---

# Logs

**\<sarang\>** OK, let's get started!  
**\<sarang\>** First, GREETINGS  
**\<sarang\>** hello  
**\<ArticMine\>** Hi  
**\<dEBRUYNE\>** hi  
**\<hyc\>** hey  
**\<Isthmus\>** Heyo  
**\<sarang\>** Next up, ROUNDTABLE, where anyone is welcome to share research of general interest  
**\<sarang\>** I have a few topics of interest  
**\<sarang\>** The recent preprint from CMU student researchers on transaction tracing has been updated to reflect suggestions and corrections: https://eprint.iacr.org/2020/593  
**\<binaryFate\>** hello  
**\<sarang\>** The researchers still claim that a small but nonzero number of post-changeover (i.e. the RingCT protocol switch) transactions were traceable, which didn't correspond with other numbers I'd found  
**\<sarang\>** So I decided to independently run the same analysis and compare  
**\<sarang\>** I ran updated numbers that account for all transactions up to the beginning of this week  
**\<sarang\>** If you run a full chain-reaction-type analysis, there are 7303 transactions after the changeover containing at least one deducible input  
**\<sarang\>** However  
**\<sarang\>** All of those transactions spend pre-changeover outputs  
**\<sarang\>** So if you filter out all transactions that aren't CT-in-CT-out, there are still precisely 0 deducible transactions/inputs  
**\<sarang\>** But wait, there's more!  
**\<sarang\>** The preprint also tries to determine how effective the guess-newest age heuristic is against modern transactions  
**\<sarang\>** Unfortunately, it uses those 7303 (or however many were in their block range) deducible post-changeover transactions as ground truth  
**\<sarang\>** and assumes that holds for all post-changeover transactions  
**\<binaryFate\>** huh that's pretty dumb  
**\<sarang\>** I wouldn't say it's dumb; it just failed to account for transaction types  
**\<ArticMine\>** So the key here is RingCT  
**\<sarang\>** Because there are "full-CT" transactions post-changeover that are deducible, the entirety of their ground-truth data set is based on spends of old funds, for which the modern selection algorithm does not apply  
**\<sarang\>** But there is an interesting twist  
**\<dEBRUYNE\>** To be clear, it concerns transactions were non-RingCT outputs are essentially converted to RingCT outputs, right?  
**\<sarang\>** Among that ground-truth data set, the researchers find those transactions are \_still\_ twice as good against guess-newest from Miller et al.!  
**\<sarang\>** dEBRUYNE: yes, or that aren't converted to CT at all  
**\<sarang\>** (very limited cases involving single inputs)  
**\<moneromooo\>** \> Because there are "full-CT" transactions post-changeover that are deducible,  
**\<moneromooo\>** Forgot a no, right ?  
**\<sarang\>** Correct, thank you  
**\<sarang\>** because there are NO full-CT post-changeover that are deducible (typo)  
**\<dEBRUYNE\>** sarang: Thanks, I guess those are dust outputs then that first have to be converted to standardized outputs  
**\<dEBRUYNE\>** dust or non-mixable  
**\<sarang\>** So the conclusions presented in the paper about transaction counts aren't wrong, but don't differentiate between type, which I think is very important  
**\<sarang\>** The conclusions about guess-newest are only valid for their ground-truth set, and cannot be extrapolated to CT transactions  
**\<binaryFate\>** The wallet warns you when you spend old outputs that privacy is lessen and it's known you should churn in that case. It should absolutely be mentioned in their paper that these transactions are particular and users are fully informed of the risk  
**\<sarang\>** I'm drafting an email to the authors to let them know of this, should they wish to revise again  
**\<sarang\>** They were very prompt in responding to my earlier email, and very quickly revised, which was great  
**\<sarang\>** Now that I have a complete deduced data set, I'm checking their results on effective anonymity sets of non-deduced transactions  
**\<sarang\>** I want to separate those by transaction type as well  
**\<sarang\>** Even though the preprint had errors, I'm glad they did the research  
**\<sarang\>** We should encourage student researchers  
**\<binaryFate\>** I'm unclear on the guess-newhest on this dataset  
**\<sarang\>** How so?  
**\<binaryFate\>** Since this dataset is specifically about real output being old, shouldn't that give very specific results when seeing how the heuristic performs, that can't be extended to other transactions?  
**\<sarang\>** Yes  
**\<sarang\>** That's what I was saying earlier  
**\<sarang\>** They assumed their ground-truth post-changeover dataset was representative of all post-changeover transactions, which is entirely false  
**\<UkoeHB\_\>** pre-ringCT inputs could be used in rings just like modern coinbase outputs are, which makes me sad  
\<= Yes, because uninformed readers may infer that it concerns full RingCT transactions  
**\<binaryFate\>** IIRC the decoy selection algorithm is very different for these transactions, only selecting non-ringct. Since all of them are very old, they are old on the tail of the gamma distribution, very different from recent one  
**\<moneromooo\>** Using pre-ringct outs as fake outs would help shortly after ringct, but would otherwise introduce a number of known spent outs in rings.  
**\<binaryFate\>** \*they are all  
**\<sarang\>** When I finish the effective anonymity data, it should give a much more clear picture of the status of modern transactions (before and after ring increases too)  
**\<sarang\>** The code still needs some cleanup to make it easier for others to run this analysis, either now or in the future  
**\<UkoeHB\_\>** interesting point moneromooo  
**\<sarang\>** thanks to gingeropolous for the use of a fast machine for this analysis  
**\<sarang\>** If the researchers choose not to revise, I can always write a new preprint that presents this data  
**\<sarang\>** but I strongly suspect the researchers will revise again, since they did a very prompt first revision  
**\<binaryFate\>** super cool that you checked all these results  
**\<hyc\>** sounds great  
**\<sarang\>** I can also post the raw data for the post-changeover deducible transactions, in case anyone wants to specifically analyze them  
**\<hyc\>** super cool that their work is pulblicly reproducible  
**\<sarang\>** Again, I'm really glad they did the analysis  
**\<sarang\>** Yeah, I didn't end up using their Java code though  
**\<sarang\>** I wanted some extra data they didn't provide, so I rewrote  
**\<sarang\>** but kudos to them for making all their code public, for sure  
**\<UkoeHB\_\>** I'd like to see if the code can be adapted to a certain analysis I have in mind, so I'm looking forward to it  
**\<moneromooo\>** Not really. More like negative kudos for those that don't.  
**\<sarang\>** What analysis is that UkoeHB\_?  
**\<hyc\>** moneromooo: yes but that still tends to be the majority these days  
**\<moneromooo\>** Papers without it are really hearsay. Should never be published.  
**\<UkoeHB\_\>** getting data on ring loops, and comparing to a purely randomly generated ring db  
**\<sarang\>** Define ring loop  
**\<hyc\>** moneromooo: agreed  
**\<moneromooo\>** A ring is a circular construct. A loop is.... a.......  
**\<UkoeHB\_\>** e.g. two outputs are owned by the same person, a loop is when their descendents intersect in the same tx  
**\<sarang\>** Oh, output merging  
**\<sarang\>** ?  
**\<moneromooo\>** Can happen by chance too (from fake outs).  
**\<sarang\>** yes  
**\<UkoeHB\_\>** yeah basically, so I want to see the probability of given loop sizes happening randomly  
**\<sarang\>** I think the question is how likely it is to occur in practice vs not  
**\<Isthmus\>** @UkoeHB\_ important research. Results will be probably be depressing :- (  
**\<moneromooo\>** If it was super fast, it'd be nice for the wallet to try and pick fake outs that generate "false positives".  
**\<sarang\>** There's code that will do forms of merge analysis, and it's something I have to add specifically to my check code  
**\<sarang\>** The graphs involved are likely quite large, so it isn't clear what the complexity of this is  
\<   
**\<sarang\>** FWIW the early analysis on output merging used deducible transactions only  
**\<UkoeHB\_\>** right, I have some ideas about limiting the output range to first estimate exactly how long such analysis would take; can also limit the maximum loop size considered  
**\<Isthmus\>** UkoeHB\_: to generate random data set, will have to select guesstimates for parameters like number of transactions per wallet. (really, would be a distribution, not single value)  
**\<sarang\>** yes  
**\<Isthmus\>** The interesting thing is that we may be able to establish statistical estimates of these parameterss based on the real blockchain data  
**\<UkoeHB\_\>** Isthmus we can just use the transactions that already exist, but make the input rings randomly selected; this provides a direct comparison with the real ring db  
**\<Isthmus\>** Especially if rare "natural" occurrence, i.e. low false positive rate  
**\<sarang\>** This sort of analysis was considered as a major part of the churn framework as well  
**\<UkoeHB\_\>** and do the randomly generated analysis multiple times for variance  
**\<Isthmus\>** Makes sense  
**\<sarang\>** Anyway, I've taken up a lot of time on that  
**\<sarang\>** Was there other research of interest to discuss from anyone?  
**\<Isthmus\>** I'll be interested in seeing plots where x-axis is # of txns made within a given wallet, and y-axis is statistical measures, like precision/accuracy/etc  
**\<Isthmus\>** I have a few quick updates  
**\<Isthmus\>** I’ve been doing some p2p network scalability research, creating some testing suites, etc. Still very early reading/planning, but hopefully will have some actionable insights for Monero.  
**\<UkoeHB\_\>** yes it's a big project and might be worthy of a paper if it goes somewhere, we will see; I also want to see how well the gamma distribution is working by subtracting the theoretical distribution from what we have in reality  
\< YES PLEASE  
**\<Isthmus\>** @UkoeHB\_ I have some algorithms floating around GitHub to identify and filter txns that use uniform decoy selection instead of correct algo. If you don't strip those out, it will introduce a bias in your results towards older oututs  
**\<Isthmus\>** I'll dig those up and send links  
**\<UkoeHB\_\>** cool thanks  
**\<sarang\>** Yeah, trying to exclude old software will be important  
**\<sarang\>** since there's no consensus enforcement  
**\<UkoeHB\_\>** I think ring analysis is too scary for anyone to tackle alone, so a collaborative and incremental effort seems reliable  
**\<Isthmus\>** Software can't be any older than the last ring size change, right?  
**\<sarang\>** Sorry, I meant software using old/incorrect methods  
**\<sarang\>** "nonstandard" is a better term  
**\<sarang\>** A big reason why deterministic input sets are intriguing is because they're likely to contain many outputs from the same transactions  
**\<sarang\>** and therefore are included as a "standard feature" of all rings  
**\<binaryFate\>** "see how well the gamma distribution is working by subtracting the theoretical distribution from what we have in reality" I was doing stuff in that direction too, exciting!  
**\<UkoeHB\_\>** I think I missed the last meeting. The Janus proposal was updated a week ago (https://github.com/monero-project/monero/issues/6456), and now the Janus mitigation is to encode the tx private key for recipients. For 2-out tx where there will only be 1 tx pub key, the 'change output' would use a 'hidden tx pub key' derived from the non-change recipient's encoded tx private key. An alternative would be for the  
**\<UkoeHB\_\>** change output to use a unique 'derivation to scalar', however I am concerned that affects too much protocol-level code (could be wrong).  
**\<binaryFate\>** What happens where there is a 2-out tx but none of them is change?  
**\<Isthmus\>** I think you have to make a 3  
**\<Isthmus\>** 3-output then?  
**\<UkoeHB\_\>** The proposal is to enforce 1 tx pub key for 2-outs, and 1 key per output for \>2-outs. All tx with no change output would have to be \>2-out, even if it means adding a dummy output.  
**\<moneromooo\>** A 0 change is automatically added \*only\* if there's one output otherwise.  
**\<UkoeHB\_\>** Right, and following the proposal there would be a very rare case of 2 non-change outs needing a dummy  
**\<Isthmus\>** It's an edge case, so I perceive this as a reasonable solution  
**\<UkoeHB\_\>** Originally encoding the tx private key was disregarded since current tx share tx pub keys, but since we'd start enforcing more tx pub keys that problem is solved.  
**\<UkoeHB\_\>** i.e. as a solution for Janus\*  
**\<UkoeHB\_\>** Well, the hidden tx pub key might be unnecessary now that I think about it.. anyway that's my dusty update.  
**\<ArticMine\>** but does this means that a 2 out tx always has change real or dummy  
**\<UkoeHB\_\>** yes  
**\<ArticMine\>** Can this then be attacked?  
**\<UkoeHB\_\>** the idea that there is always a change output in 2-out tx? that assumption can be made today already  
**\<Isthmus\>** Oh no wait, it would just move the issue to n+1  
**\<sarang\>** Sorry, connection problems; back now  
**\<ArticMine\>** but not with 100% certainty  
**\<UkoeHB\_\>** well the shenanigans around 2-out tx are mostly to optimize scanning and tx sizes, since 2-out tx are ~95% of tx  
**\<UkoeHB\_\>** that's true ArticMine  
**\<luigi1111w\>** one can assume with high certainty that every transaction contains a change output. I don't understand why that's a significant observation.  
**\<Isthmus\>** Most txns. Churn doesn't, for example.  
**\<sarang\>** ^  
**\<moneromooo\>** Why does it not ?  
**\<sarang\>** Doesn't have to  
**\<sarang\>** And would affect output merging later  
**\<moneromooo\>** Well, that's circular reasoning then.  
**\<Isthmus\>** Churning with change creates the loops UkoeHB\_ mentioned earlier  
**\<luigi1111w\>** churn has two change outputs, no?  
**\<ArticMine\>** It can  
**\<luigi1111w\>** or one and a fake one  
**\<UkoeHB\_\>** churn has an 'output to yourself' and a 'change output'; change outputs are handled differently in the code  
**\<luigi1111w\>** sure but this is from a network perspective  
**\<UkoeHB\_\>** yeah  
**\<ArticMine\>** Or a split 2 separate wallets under the control of one person  
**\<ArticMine\>** It introduces uncertainty  
**\<luigi1111w\>** but why does it matter?  
**\<ArticMine\>** because even a small bias can grow.  
**\<sarang\>** Given the time, is there other research that needs to be brought up before adjourning?  
**\<Isthmus\>** I've got 2 updates, will keep brief for sake of time:  
**\<Isthmus\>** Our CCS for researching Monero’s post-quantum security is sooooooo close. Only 7% left, less than 40 XMR needed. https://ccs.getmonero.org/proposals/research-post-quantum-monero.html  
**\<Isthmus\>** If that could get topped off today, we’ll dive in immediately and have our first update at next week’s MRL meeting. :- )  
**\<Isthmus\>** Unrelated - I also have one of Insight’s DistSys engineers buildling “speedup” networks, i.e. highly-connected peers with high bandwidth to propagate blocks/txns through the ad hoc network faster than organic propagation. Main goal is to eliminate the long tail in block propagation times.  
**\<Isthmus\>** The codebase is very modular with Terraform/ansible deployment and control scripts, so could be configured to spin up a Monero speedup network in the future.  
**\<Isthmus\>** That's all from me.  
**\<sarang\>** Nice!  
**\<sarang\>** I suppose I should mention that I welcome/request comments/questions/emoji on my funding proposal as well, so a decision can be made whether to open it: https://repo.getmonero.org/monero-project/ccs-proposals/-/merge\_requests/148  
**\<luigi1111w\>** thanks for opening it well in advance  
**\<sarang\>** OK, I suppose we can formally adjourn for the sake of logging  
**\<sarang\>** Thanks to everyone for joining in today  
**\<sarang\>** Discussion can of course continue!  
