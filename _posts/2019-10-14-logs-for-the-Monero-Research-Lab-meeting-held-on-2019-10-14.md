---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-10-14
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** GREETINGS  
**\<suraeNoether>** howdy!  
**\<sgp\_>** Hello  
**\<sarang>** Small crowd today, apparently  
**\<sarang>** Even so, we carry on  
**\<sarang>** Let's move to ROUNDTABLE  
**\<sarang>** I've been working on a few things this past week  
**\<sarang>** First is getting caught up with the usual literature review  
**\<sarang>** Second was finalizing things for World Crypto Conference and some background research associated to that  
**\<sarang>** Third was getting balance proofs working in Triptych, which is now successful  
**\<xmrmatterbridge> \<serhack>** hello  
**\<sarang>** This means that Triptych now supports a single proof showing all spends, correct key image construction, and balance  
**\<suraeNoether>** nice!  
**\<sarang>** How about you, suraeNoether?  
**\<suraeNoether>** i've been furiously debugging my matching code as my primary task. there are some persistent problems. i wanted to finish this weekend but it didn't happen  
**\<sarang>** Earlier you had indicated some known bugs... are these the same?  
**\<suraeNoether>** no... every problem i solve reveals like... a small handful of new bugs, but the newer and newer bugs are becoming less frequent and less severe  
**\<suraeNoether>** it \*feels\* like there's a single problem lurking that will cause the house of cards to stop falling down  
**\<suraeNoether>** i'm very close.  
**\<suraeNoether>** i really wanted it to be today  
**\<suraeNoether>** i'm taking a break later today to read sarang's WCC talk (sorry for the delay on that) and I am taking a break later today to work on \*literally anything else\*  
**\<suraeNoether>** i'm very frustrated with this project  
**\<sarang>** Are the known bugs documented anywhere, so others might assist you?  
**\<suraeNoether>** i'm sure a lot of community members are also frustrated, but i this is nearing completion  
**\<suraeNoether>** no  
**\<suraeNoether>** "test X not working for unknown reason" is not a helpful document to write  
**\<sarang>** Hmm ok  
**\<sarang>** Well, I selfishly hope you will take time off that project today and review my talk :D  
**\<sarang>** Perhaps it will also help you clear your head  
**\<sarang>** Does anyone else have interesting research to share as well?  
**\<sarang>** In that case, let's go ahead and discuss ACTION ITEMS first, and then any lingering questions  
**\<sarang>** First, I have an efficient verifier for the inner-product argument in IACR/944 that I've been meaning to implement in kenshamir[m]'s Rust code, which will be useful for benchmarking... that's in progress but with some algebra problems that I'm working out  
**\<sarang>** Second, Triptych needs plenty more work: key aggregation, better Fiat-Shamir challenges, and some questions on proof elements and efficiency  
**\<sarang>** Third, I want to see if it's possible to backport some of the new RCT3 changes to the older version without using spend aggregation, to check the resulting efficiency  
**\<sarang>** and that's about it for now  
**\<sarang>** suraeNoether: ?  
**\<suraeNoether>** pushing this commit once my code is flowing. reading your WCC talk. catching up on tryptychychch  
**\<sarang>** It definitely remains to be seen how efficient we can make Triptych... but as I mentioned last week, the underlying changes to the Groth proving system are very interesting regardless  
**\<sarang>** and, as before, there is no security model for it yet  
**\<sarang>** All righty, are there other questions on research?  
**\<sarang>** This meeting has gone quite quickly  
**\<sarang>** Oh, one note about what Isthmus brought up last week regarding transaction keys and subaddresses  
**\<sarang>** It is apparently still the case that transactions to only standard addresses retain a single transaction key  
**\<sarang>** Mandating separate transaction keys for all outputs would add 32 bytes to each additional output  
**\<sgp\_>** Standard = 4?  
**\<sarang>** but we're already saving > 32 bytes per output after the last change to the Pedersen mask format anyway  
**\<moneromooo>** Could there be a way to deterministically generate keypairs in such a way that the sender generates the secret keys from a seed, the recipients generate the pubkeys ? I think Bitcoin has such a scheme for generating addresses.  
**\<moneromooo>** And hopefully the seed is \<= 32 bytes :)  
**\<sarang>** Well, a big selling point of subaddresses is the efficient scanning across all addresses at once  
**\<sarang>** Isthmus: only need to read up a few lines  
**\<moneromooo>** Would such a scheme invalidate the efficient scanning ? It seems doubtful since the tx keys are currently arbitrary.  
**\<sgp\_>** How much effort is it to scan and see what proportion of transactions are only to standard addresses?  
**\<sarang>** sgp\_: to get a distribution of how common subaddresses are?  
**\<Isthmus>** @sgp\_ I think that @n3ptune accidentally did that recently  
**\<Isthmus>** Lemme see if the plots are on GitHub anywhere  
**\<sgp\_>** sarang: essentially yes  
**\<sarang>** Presumably this would be affected by which large players (like exchanges) support them  
**\<sgp\_>** Thanks Isthmus  
**\<Isthmus>** https://github.com/noncesense-research-lab/tx\_extra\_analysis/blob/master/tx\_extra\_viz.ipynb  
**\<sarang>** 404  
**\<Isthmus>** Oh, private repo. Lemme grab the juicy parts  
**\<Isthmus>** This might be the relevant one  
**\<Isthmus>** https://usercontent.irccloud-cdn.com/file/LgrrzOIS/image.png  
**\<Isthmus>** I suspect the diagonal is transactions that include a subaddress, while the horizontal bands are primary-only  
**\<Isthmus>** Though I'm open to alternate interpretations  
**\<moneromooo>** Oh I get it. The fast lookup would still exist, but verifiers would have to generate pubkeys, and \*that\* might be slow.  
**\<sgp\_>** Thanks  
**\<Isthmus>** If that is the case, then I can slide a window over time and calculate fraction of transactions that appear to include no subaddresses  
**\<sgp\_>** I'm not the one who can say yes or no to that :/  
**\<sarang>** Probably worth bringing up at the next dev meeting to see what others think of it  
**\<moneromooo>** It is trivial to know whether >= 1 subaddress was used as an output in a tx.  
**\<moneromooo>** If that was the question...  
**\<moneromooo>** Oh wait. Maybe not, there's some funky going on with change being treated differently...  
**\<sgp\_>** A more meta question: how did this happen? What could have been done differently to help prevent this from happening?  
**\<sarang>** That's probably a question for someone like stoffu who was more directly involved in the code  
**\<sarang>** I suspect space saving was one consideration  
**\<sgp\_>** knaccc too?  
**\<sarang>** but it's quite minor for the most part  
**\<Isthmus>** @sgp\_ meta answer: we rolled out a new feature that:  
**\<Isthmus>** 1) you could tell use from blockchain as external observer  
**\<Isthmus>** 2) was optional  
**\<Isthmus>** Either one of those alone is ok, but together we end up in this situation.  
**\<sgp\_>** I always assumed 1 wasnt the case. I was very misinformed and thus misinformed others  
**\<Isthmus>** Yeah, I think we're all just putting 2+2 together on that now  
**\<sarang>** OK, something to discuss at next dev meeting, then  
**\<sarang>** Are there any other topics to discuss for this meeting?  
**\<Isthmus>** Oh yea, lemme grab a link  
**\<Isthmus>** The CryptoEconSec paper by hasu and all is very interesting, and parts are relevant to both Monero and our lock time conversation  
**\<Isthmus>** \*et al  
**\<Isthmus>** I definitely recommend reading it. Very approachable.  
**\<Isthmus>** Here's the writeup: https://uncommoncore.co/research-paper-a-model-for-bitcoins-security-and-the-declining-block-subsidy/  
**\<Isthmus>** And here is my analysis: https://twitter.com/Mitchellpkt0/status/1183581226357014528  
**\<Isthmus>** I won't rehash it all here. Just take a pass through on your next commute. :- )  
**\<sarang>** Thanks Isthmus   
**\<sarang>** Any last questions before we adjourn and continue discussions?  
**\<sarang>** Righto, thanks to everyone for attending!  
