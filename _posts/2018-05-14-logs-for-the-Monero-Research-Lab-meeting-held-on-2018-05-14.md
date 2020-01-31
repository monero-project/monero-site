---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-05-14
summary: MRL work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** andytoshi anonimal binaryFate ArticMine dEBRUYNE endogenic gingeropolous moneromooo sgp\_[m] smooth stoffu UkoeHB etc  
**\<ArticMine>** Hi  
**\<dEBRUYNE>** Kind of present :P  
**\<sarang>** close enough!  
**\<sarang>** an informal meeting today, probably fairly short  
**\<endogenic>** not present  
**\<sarang>** 1. Greetings  
**\<sarang>** yo  
**\<sarang>** 2. Updates all around  
**\<sarang>** Our pal suraeNoether is on holiday  
**\<sarang>** that lucky bastard  
**\<sarang>** I've been continuing to work with the Purdue researchers on noninteractive refunds  
**\<sarang>** which would be much more of a hassle than an interactive refund  
**\<sarang>** But it brings up some really interesting new ideas that we're formalizing to publish  
**\<sarang>** Aside from that, there was some good Zcash anonymity research in the spirit of the monerolink stuff  
**\<sarang>** It has good lessons about the importance of mandatory privacy  
**\<sarang>** Another paper pointed out some flaws in the MuSig paper that suraeNoether had been working with  
**\<sarang>** not in terms of attacks, but in terms of security proofs unfortunately  
**\<sarang>** The second BP round went through, and we'll be getting that funding to OSTIF as soon as I can talk with a Core Team member about funding release (send them my way if you find them today!)  
**\<sarang>** Anything else from the peanut gallery?  
**\<binaryFate>** will get in touch with OSTIF again tomorrow  
**\<sarang>** binaryFate! Perfect, thanks  
**\<sarang>** Please release it all to lock in the exchange rate; your help is appreciated as always  
**\<sarang>** Any unused amount will be return to us by OSTIF  
**\<binaryFate>** Yes I understand there is some freaking out about exchange rate around :) Will do  
**\<sarang>** It seems to be a quiet day today, not sure if anyone else has anything to share  
**\<sarang>** Or something they've run across lately  
**\<dEBRUYNE> \<sarang>** not in terms of attacks, but in terms of security proofs unfortunately <= What does this entail?  
**\<sarang>** They had done away with a precommitment phase of their key preparation  
**\<sarang>** and this led to a flaw in the proof that would be fixed by adding this step (more communication)  
**\<sarang>** it would also make it secure up to discrete log, as opposed to one-more discrete log as it is now  
**\<sarang>** I had a brief chat w/ andytoshi about it earlier  
**\<dEBRUYNE>** So it's not a showstopper, but would preferably be implemented right?  
**\<sarang>** Right. I don't know of any big projects that were immediately applying MuSig directly, but suraeNoether was curious about using some of the ideas to reduce communication  
**\<dEBRUYNE>** All right  
**\<sarang>** The "upgrade" to DL security is good too IMHO  
**\<sarang>** Consensus is live streaming, as mentioned earlier... so that's a source of infotainment for anyone interested  
**\<sarang>** They're having Zooko interview Whit Diffie about privacy  
**\<sarang>** that'll be a good watch  
**\<sarang>** For this week, I plan to incorporate some suggestions from the Purdue folks into the writeup of noninteractive refunds and get that out  
**\<sarang>** and look more precisely at interactive refunds and what's needed  
**\<sarang>** Whelp, it looks like slim pickings today for updates, so  
**\<sarang>** 3. Tearful goodbyes  
**\<sarang>** Keep up the good work, and be well  
**\<sarang>** We'll never forget the good times and memories  
**\<sgp\_[m]>** Did anyone have a chance to look at my research on mining pool outputs?  
**\<sarang>** Yes! Can we talk about that openly in here?  
**\<sarang>** I don't recall if you had publicly released it  
**\<sgp\_[m]>** Just the mitigation strategies  
**\<sgp\_[m]>** This is what I worked on: https://1drv.ms/b/s!AjOt8D-0YjBHgco6O7TRnzm91YACUw  
**\<sarang>** My only lingering question was regarding the suggestions for churn  
**\<sarang>** since that work is still ongoing to determine the optimal behavior  
**\<sgp\_[m]>** I think we should discourage churning as much as possible since it harms the network, but it can be used effectively to preserve the integrity of outputs. Even if it only adds plausible deniability  
**\<sarang>** What's your view on it harming the network specifically?  
**\<ArticMine>** Yes there is also the issue of pool transparency  
**\<sgp\_[m]>** Just blockchain bloat. Imagine if we recommended every mining pool churn after each payout lol  
**\<ArticMine>** Any proprietary in mining is a potential danger  
**\<sgp\_[m]>** Note that I've only looked at publicly-available information. Many mining pools also publish the transaction amount, which could allow a recipient to remove certain decoys that are known to be under the sent value. I haven't thoroughly looked into this yet  
**\<ArticMine>** Maybe we need to find a way to  blackball these outputs for future rings and leave the churning to the recipient  
**\<sarang>** The recipient is also likely the one with greater incentive to do so, no?  
**\<sgp\_[m]>** ArticMine one option is for mining pools to be extremely transparent about all outputs they have controlled, and clients blackball these. I think there's a high risk of clients not doing this though  
**\<ArticMine>** but can the blackballing not be done by the pool  
**\<sarang>** We also have a broader issue of the blacklist being slow to implement  
**\<sgp\_[m]>** I recommend my "third best" solution for pools that still want to make everything transparent, which involves a different selection algorithm  
**\<sgp\_[m]>** It doesn't really matter that pools would use a different algorithm, since they publish a list of transactions anyway  
**\<sgp\_[m]>** And they could adapt their algorithm to include payout outputs in a single ring signature  
**\<sarang>** That relies entirely on pools voluntarily complying, right?  
**\<sgp\_[m]>** I have diagrams in slides 11-15 of the deck I shared  
**\<ArticMine>** My take is that we should be actively discouraging pools from being anything but totally transparent  
**\<sgp\_[m]>** sarang yes, it relies on pools complying. Pools have the potential to cause a lot of harm to outputs in the status quo  
**\<ArticMine>** It is a related but different issue that is impacted here. Namely overall transparency in mining.  
**\<sarang>** yeah  
**\<sarang>** One of the reasons I was intrigued by the FruitChains paper was the idea of reducing the incentives to pool at all  
**\<ArticMine>** A voluntary way for pools to flag these outputs as to not be used in mixins may be the best way  
**\<sgp\_[m]>** If a user thinks pools are malicious, they should absolutely churn individually to the extent research shows. However, I'm talking more about the pools removing the entropy of these outptus in this transparency. We can have transparent pools while still preserving the integrity of these outputs  
**\<sgp\_[m]>** If people feel comfortable mining to a pool that doesn't even publish coinbase history, that would be the best for the network. However, that is unrealistic  
**\<ArticMine>** It is best for the network from the point of view of privacy but no from the point of view of mining integrity  
**\<sarang>** ArticMine: in what way  
**\<ArticMine>** For starters how does one determine the size of the pool?  
**\<ArticMine>** Independently?  
**\<ArticMine>** Or how much of a take the pool is getting  
**\<ArticMine>** It is a special situation one step above coinbase outputs  
**\<ArticMine>** Pools are in a unique position of power which is why transparency must at least be encourages and ideally enforced  
**\<sarang>** But my understanding is that pools can simply not give all this information  
**\<sarang>** so it'll all still based on voluntary goodwill  
**\<sarang>** as in, information from self-selecting entities  
**\<ArticMine>** This is true but there is a market pressure to give out this information  
**\<ArticMine>** and this is very healthy  
**\<sgp\_[m]>** Well, even if they don't povide an easy blackball list, someone can realtively trivially put one tegether from the complete transaction history  
**\<moneromooo>** sneurlax made one such tool (or may still be making one).  
**\<ArticMine>** That is actually a backup answer  
**\<ArticMine>** But ideally we should encourage the pools to give a blackball list  
**\<sarang>** What do you think the general thoughts are about the blackball list being checkpointed and supplied non-locally?  
**\<sgp\_[m]>** I recommend we instead encourage them to use a different selection process so a blackball list is unnecessary  
**\<sarang>** Because the local generation seems pretty intense  
**\<ArticMine>** sgp\_[m] So if I understand correctly these pool outputs could then be easily identified and not included in mixins  
**\<ArticMine>** That of course would work very well  
**\<sgp\_[m]>** I believe you are explaining the blackball process ArticMine  
**\<ArticMine>** Yes  
**\<ArticMine>** So I am not clear how a different selction process would work  
**\<rehrar>** oy, missed the meeting?  
**\<sarang>** Most folks were away, but we're still chatting  
**\<sarang>** whats the good word  
**\<sgp\_[m]>** I recommend that pools instead take the outputs in a published transaction and use all these outputs in a single ring signature. Then, outsiders don't know which outputs are paid to miners and which are change returned to the pool  
**\<sarang>** Yeah I liked this approach  
**\<sarang>** I didn't see any immediate downsides  
**\<sarang>** It makes sense since the pools are known entities  
**\<ArticMine>** but normally almost all of these outputs are paid to miners  
**\<moneromooo>** It still needs someone to volunteer to maintain a blackball list, and so far nobody has so this code is left unused :)  
**\<sgp\_[m]>** The goal is to make the outputs returned to the pool look the same in a random transaction decoy as how they look when miners make transactions with their payouts  
**\<rehrar>** can we replace ring sigs already? that is all  
**\<sarang>** That'll be our big MoneroCon unveil  
**\<sgp\_[m]>** This is difficult to explain, so I'm sorry I'm not doing it very well  
**\<rehrar>** oh, also that article on PoW (which I'm sure had to have been discussed at this meeting). Something else.  
**\<sarang>** "MoneroCon: Monero is  a con!"  
**\<ArticMine>** So one is obfuscating the change output among the payouts  
**\<sarang>** sgp\_[m]: I think I get the point you're making  
**\<ArticMine>** That I understand  
**\<sgp\_[m]>** ArticMine yes that's the goal, so that the outputs controlled by the pools (these change outputs) no longer need to be blacklisted  
**\<sgp\_[m]>** \*blackballed  
**\<sgp\_[m]>** even if the transaction history is published  
**\<ArticMine>** Yes that would work.  
**\<sgp\_[m]>** hmm actually on second thought, pools should need to still churn the coinbase outputs (not just the very first one), or they need to be blackballed. My slide 14 is incorrect  
**\<sarang>** sgp\_[m]: Suppose you get some fraction of pools to comply, but some don't... you'd still need to monitor for the blacklist, no?  
**\<serhack>** hi :)  
**\<sarang>** hullo  
**\<sgp\_[m]>** Yes, an end user should still blacklist as much as possible  
**\<sgp\_[m]>** I want to limit this as much as possible though, in case users don't go through this process  
**\<sarang>** Unless we more broadly support a non-local blacklist integration  
**\<sarang>** but that has its own issues  
**\<ArticMine>** There may be a different approach. What if we were to limit the number of ring members comprising of these troublesome outputs to say 2 fakes  
**\<ArticMine>** that would include coinbase and tx outputs a certain number of steps above coinbase  
**\<sarang>** What's the advantage to this?  
**\<rehrar>** what if we blacklisted all of the outputs in existence  
**\<ArticMine>** Ensure the ring has a minimum unexposed number of fakes  
**\<sgp\_[m]>** I would have to see the math before saying it would be effective. Coinbase outptus are already the minority, and they could still be revealed as decoys anyway. Would potentially limit impact to extend of all decoys compromised but hard to say  
**\<ArticMine>** In my I idea I would include the real output if it was one of the gray outputs so actually two members of the ring as opposed to two fakes  
**\<ArticMine>** I believe the way to deal with exposed outputs is to limit their number in a ring to two or possibly three rather than exclude them altogether  
**\<sgp\_[m]>** Why not exclude them? They are known to be fake  
**\<ArticMine>** If they are known spent yes, but if they are known unspent then no  
**\<ArticMine>** that is the key difference  
**\<ArticMine>** A coinbase tx for example is a known unspent output  
**\<ArticMine>** Once it is included in a ring it can become unclear if it is unspent or not  
**\<sgp\_[m]>** Not if a pool lists it on the site though  
**\<ArticMine>** They make it a known unspent  
**\<ArticMine>** by listing it  
**\<ArticMine>** If they make the coinbase a known spent then it should be ideally blackballed; however if this cannot be easily automatically determined then simply including it in the limit I suggested becomes an option  
**\<ArticMine>** Centralized blackball lists can also becomes an issue  
**\<sarang>** ArticMine: yes, and that's why I wonder what they'll look like broadly  
**\<ArticMine>** Which is why creating entropy around the exclusion of "blackballed" outputs may have some merit  
**\<ArticMine>** Then it would also be impossible to as rehrar said blacklist "all of the outputs in existence"  
**\<ArticMine>** It is an interesting attack by a centralized blackball list  
