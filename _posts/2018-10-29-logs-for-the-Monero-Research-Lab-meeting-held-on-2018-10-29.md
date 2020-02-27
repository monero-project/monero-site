---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-10-29
summary: Surae work, Sarang work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** Greetings to everyone, and welcome to our meeting, which will likely go pretty quickly  
**\<sarang>** Pipe in if you're here!  
**\<sarang>** To start with, let's review happenings over the last week or so  
**\<sarang>** suraeNoether: care to begin?  
**\<hyc>** pipe  
**\<sarang>** |  
**\<suraeNoether>** Gosh sure  
**\<lurkinandlearnin>** I'm tuning in  
**\<suraeNoether>** This past week, I've been working on my graph-theoretic security paper  
**\<suraeNoether>** calling it a security paper now because i'm pretty sure that my main contribution is formalizing a couple of security games, using graph theory  
**\<sarang>** I like the idea of using known graph theory to establish bounds on identifying possible spend histories  
**\<hyc>** absolutely. what else is it besides a graph problem  
**\<sarang>** those bounds, coupled with a goal for an "acceptable" number of alternate histories, is a neat approach to practical fungibility  
**\<sarang>** for sure  
**\<suraeNoether>** other than that, I've been chatting with folks about preparing for Monero Konferenco, and having meetings on my non-profit MAGIC (PM me if interested). i also spent some time last week working on a constant sized ring signature scheme, and i'm like, 50/50 on whether or  not i found a problem with it. :P  
**\<sarang>** To what extent can we extract churn practices from this?  
**\<sarang>** I consider that to be an important open question  
**\<msvb-lab>** Hello.  
**\<suraeNoether>** it's the first step in a long process; all i've confirmed using this message is that at least one churn for paranoid users is probably wise. i'm honestly not sure if there \*is\* a good answer to that question, sarang, and i'm not sure if htere's a good way to formalize \*the lack of an answer\*  
**\<suraeNoether>** hello msvb-lab   
**\<hyc>** what's the goal? EABE attack establishes that 1 churn minimum is always required  
**\<suraeNoether>** s/message/method  
**\<sarang>** I would like us to be able to give semi-quantifiable results to avoid unnecessary churn  
**\<sarang>** and churn that might harm fungibility if done badly  
**\<sarang>** (and would also bloat the chain)  
**\<suraeNoether>** hyc well, first and primary goal is to have a document to point at when folks start talking about ring intersection attacks in the future. secondary goal is to lay the groundwork for future security work. third goal is to have a nice publication come out of MRL, imo  
**\<hyc>** ^ great  
**\<sarang>** It'll be a nice extended complement to our previous tech note on spends  
**\<hyc>** btw, I have done a bad churn recently. did a sweep with multiple outputs, then received another exchange withdrawal.  
**\<suraeNoether>** if we can get some quantifiable results on churn or ring size, that's great, but my hidden secret opinion is that: any choice we make in that regard is more or less arbitrary and informed by magic numbers being selected for convenience, not necessarily real security, and this is a fundamental problem with ring signatures  
**\<hyc>** then did another sweep.  
**\<hyc>** but the multiple outputs from the previous sweep are all obviously from the same block...  
**\<sarang>** Right, and having something to back up that negative answer will be just as useful  
**\<sarang>** So yeah, I look forward to the continuation of this work  
**\<sarang>** I'll be reading over the current stuff today or tomorrow suraeNoether  
**\<suraeNoether>** it's ... research. jerks and starts, i don't know everything yet or hte paper would already be written :D  
**\<sarang>** Questions on this? Going once...  
**\<lurkinandlearnin>** Sorry to divert the conversation but quick question: Are ring signatures not constant sized now? What difference would this make?  
**\<sarang>** They are not constant  
**\<sarang>** They grow linearly with the # of inputs/fakes  
**\<sarang>** All existing constant methods suffer huge drawbacks, usually in terms of trust  
**\<sarang>** Going twice...  
**\<sarang>** OK, suraeNoether, another topic of your interest?  
**\<suraeNoether>** lurkinandlearnin: ring sigs are linearly sized now, we are looking at a logarithmic scheme. the smaller our signatures are, making some qualifying assumptions about verificaiton times, the lower the cost for  a node to join our network  
**\<suraeNoether>** uhm i'm just going ot pass it onto sarang for now and if anyone wants to chat about other topics later today, i'll be here all day  
**\<sarang>** OK!  
**\<sarang>** We've been examining output selection since our recent switch to a gamma distribution  
**\<lurkinandlearnin>** Thanks for the answers. I'll be sure to read up on this.  
**\<sarang>** Previously, there was a heuristic about assuming the newest ring member was the spender (but it can't be proven)  
**\<sarang>** So we moved to a distribution that mirrors expected spend patterns  
**\<sarang>** However, we choose blocks and then txns within those blocks, and the appearance of more empty blocks due to Bulletproofs, and in general the distribution of txns per block, means the selection has bias  
**\<sarang>** You can read about this on reddit, or on the many high-quality outlets that report on reddit posts  
**\<sarang>** Long term, we need a better strategy for handling coinbase outputs  
**\<sarang>** Short term, we're tweaking the algorithm to select from a small group of blocks to mitigate against this  
**\<suraeNoether>** "on the many high-quality outlets that report on reddit posts" <--- lulz  
**\<sarang>** I predict it will cut the number of coinbase per ring in half from what we see now  
**\<sarang>** This is part of the 0.4 release  
**\<sarang>** and is not consensus  
**\<suraeNoether>** i think there's a strong argument to be made that coinbase-only is used in coinbase transactions, but i'm concerned about provably spent sets amongst coinbase transactions becoming an issue  
**\<sarang>** It's subtle  
**\<sarang>** and public pools that broadcast mined outputs and payout txns make it trickier  
**\<sarang>** There is not a silver bullet to this  
**\<sarang>** But we have a mitigating fix in the wings, and are certainly open to more data that can help inform the decision of how best to handle this  
**\<lurkinandlearnin>** Is just not selecting from empty blocks not an option?  
**\<sarang>** It would be great if pools didn't broadcast payouts like this, and if we also had data on hand for coinbase spend patterns  
**\<sarang>** lurkinandlearnin: then you could never spend coinbase  
**\<sarang>** they'd be instantly identified  
**\<lurkinandlearnin>** aha  
**\<sarang>** So while what we have now is not the final answer to this, our current selection algo is arguably a big improvement over previous iterations  
**\<sarang>** and is getting better  
**\<sarang>** Having bigger rings is also a built-in mitigation  
**\<sarang>** Now you are all equipped to handle the flood of posts we'll be getting on this  
**\<lurkinandlearnin>** The work Justin did on showing that blackballing is no longer necessary thanks to bigger rings was very cool  
**\<sarang>** you mean "spent output analysis" =p  
**\<sarang>** blackballing sounds dangerous and non-deterministic, which it isn't  
**\<sarang>** the MRL-0007 tech note has a nice table about this  
**\<lurkinandlearnin>** I had no idea where the term came from haha  
**\<sarang>** motto: modern transactions are fine  
**\<sarang>** counterpoint: but about all those papers that were published  
**\<sarang>** response: modern transactions are fine  
**\<lurkinandlearnin>** They keep quoting the same old papers  
**\<sarang>** Moving on from this, work continues on the StringCT optimizations from our Bulletproofs plumbing  
**\<IsthmusCrypto>** Ooh wait one last question on that  
**\<IsthmusCrypto>** Speaking of "modern transactions are fine" does anybody know about code for generating Plot 5 in Malte Möser?  
**\<sarang>** sure  
**\<IsthmusCrypto>** https://usercontent.irccloud-cdn.com/file/EH9Lwt8u/Screen%20Shot%202018-10-29%20at%2010.11.42.png  
**\<IsthmusCrypto>** It seems like the best antiFUD would be extending this plot to present time  
**\<sarang>** They didn't release their code (unfortunately far too common) AFAIK  
**\<sarang>** You could get it from a modification to the spent-output tool  
**\<sarang>** but the MRL-0007 table basically covers it  
**\<IsthmusCrypto>** Cool, it'd be nice anti-FUD to use an extended Moser paper to keep people from stressing about Moser :- )  
**\<sarang>** Using single-chain analysis, there are exactly 5 post-ct outputs that are known spent using our methods  
**\<sarang>** and those were from a research paper that generated them on purpose for testing  
**\<IsthmusCrypto>** Awesome, is MRL-007 in the repo? I'll check it out and let meeting conversation move along 👍  
**\<sarang>** It's on my repo, will PR it to the main site once I make a gitlab account and set that up  
**\<sarang>** https://github.com/SarangNoether/research-lab/tree/master/publications/bulletins/MRL-0007-spent  
**\<sarang>** So yeah, StringCT optimizations show promise and we'll continue looking into them as we get more data on optimal ring sizes  
**\<sarang>** Its signature scheme is being updated at suraeNoether's suggestion to harden against key cancellation  
**\<sarang>** No definite plans on changing CT schemes yet, mind you, just preliminary stuff in the wings  
**\<lurkinandlearnin>** Diversion #2: I'd be interested to know what you guys think about the traceability arising from visible fees. And if it is a threat, what is the best way to mitigate it?  
**\<sarang>** Any questions on RingCT schemes, output selection, or spent-output analysis?  
**\<notmike>** y  
**\<sarang>** lurkinandlearnin: restricting fee amounts  
**\<sarang>** it's been suggested  
**\<sarang>** as it could be a fingerprinting method in theory  
**\<suraeNoether>** sarang: "Using single-chain analysis, there are exactly 5 post-ct outputs that are known spent using our methods" <-- there exists a better method, but we have not deemed it important enough to code up rigorously enough to catch any larger sets, fwiw  
**\<sarang>** yes  
**\<suraeNoether>** lurkinandlearnin: visible fees are technically a concern, technically  
**\<sarang>** statistically it's very unlikely to get set union problems with our large rings  
**\<suraeNoether>** we have these dynamic fees, and so if you sign a transaction well before it's broadcast, the fee computed will be linkable back to the height when it was signed  
**\<sarang>** notmike: you had a question also?  
**\<moneromooo>** The fee is based on weight and the time at which it is made. Harly much of a fingerprinting thing.  
**\<moneromooo>** Admittedly, there's also the size of the txpool at the time though.  
**\<suraeNoether>** this gives a route for linkability to identify cold signers  
**\<moneromooo>** (one bit)  
**\<sarang>** moneromooo: yeah, not necessarily very useful, but still one of those things that isn't mandated  
**\<sarang>** I'm not particularly concerned about it  
**\<moneromooo>** And both weight and time of tx are already essentially public.  
**\<suraeNoether>** but overall encrypting fees has a whole bunch of engineering headaches associated with it that are not worth the security risk that the unencrypted fees represent, imo  
**\<suraeNoether>** basically the worst thing that can happen is someone identifies that a transaction was signed on an airgapped computer and a significant delay in broadcasting occurred  
**\<sarang>** suraeNoether: there's encrypting fees, and then there's mandating set options  
**\<suraeNoether>** i shouldn't say worst, because there's always something worse  
**\<suraeNoether>** yeah, i personally would prefer 3 fee values, low medium and high  
**\<suraeNoether>** but transparent  
**\<suraeNoether>** or just low and high  
**\<lurkinandlearnin>** Yes set transparent values seems sensible  
**\<moneromooo>** With the gamma selection, you can already tell, because there's a fairly hard right wall.  
**\<IsthmusCrypto>** "this gives a route for linkability to identify cold signers" < decoy ages does this  
**\<IsthmusCrypto>** Oh, yea, exactly @moneromooo  
**\<IsthmusCrypto>** Agree with @suraeNoether - fixed & plaintext  
**\<lurkinandlearnin>** So the risks of transaparent fees are strictly timing/delay based and not related to what service/wallet was used to make a transaction?  
**\<sarang>** Well a wallet can choose whatever it wants  
**\<sarang>** if Sarangwallet always chooses a bonkers fee value...  
**\<lurkinandlearnin>** I.e are all big services using the same method of dynamic fees?  
**\<moneromooo>** I don't think it's selectable now unless you do some surgery on the wallet.  
**\<moneromooo>** Not 100% sure though. Do check if you want to know for sure.  
**\<hyc>** right, anyone can always tweak their own copy of wallet code and do whatever  
**\<IsthmusCrypto>** I think the lowest-hanging privacy detriments will be wallet software and exchanges that use fixed or non-standard fee calculations  
**\<lurkinandlearnin>** But for example if a service were compromised and was forced to use some unique fee structure, this would be a subtle way of making users traceable?  
**\<IsthmusCrypto>** @lurkinandlearnin Yes. Compromized or just lazy  
**\<IsthmusCrypto>** Hah, in addition to KYC we should start talking about MYC (mark your customer)  
**\<sarang>** Making it consensus could mitigate  
**\<sarang>** as has been discussed before  
**\<sarang>** To ensure time is respected, were there questions or comments on other topics discussed so far? We can certainly fee talk afterward  
**\<suraeNoether>** IsthmusCrypto: actually... yeah  
**\<IsthmusCrypto>** I'll hold other fee thoughts until after the meeting  
**\<sarang>** I will be stepping out in about 5 minutes for an unrelated meeting  
**\<sarang>** but that's all I have to discuss personally  
**\<lurkinandlearnin>** Output selection also is not consensus of course, right?  
**\<sarang>** correct  
**\<suraeNoether>** does anyone have any topics they want us to chat about today?  
**\<lurkinandlearnin>** Maybe another potential for the newly invented MYC threat haha  
**\<sarang>** You can't enforce it in any good way  
**\<lurkinandlearnin>** Yes it seems clear that would be much harder than doing it for fees  
**\<sarang>** But if you don't trust whomever is doing your transactions with your keys, you're hosed in many ways  
**\<sarang>** it's all about the threat model  
**\<moneromooo>** It (if a service were compromised and was forced to use some unique fee structure) would be stupid, as you don't get more info than getting a view of the service's output txes.  
**\<moneromooo>** Unless someone can show something more :)  
**\<sarang>** I must unfortunately take off for an hour now  
**\<suraeNoether>** ok, let's call this meeting good  
**\<suraeNoether>** good job, sarang  
**\<suraeNoether>** but we can just continue talking at our leisure. :P </meeting>  
