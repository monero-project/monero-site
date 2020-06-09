---
layout: post
title: Logs for the MRL Meeting Held on 2020-02-05
tags: [dev diaries, crypto, research]
author: asymptotically / Sarang
---

# Logs

**\<sarang\>** OK, let's get started  
**\<sarang\>** Logs from this meeting will be posted to the agenda issue shortly after the meeting  
**\<sarang\>** First, GREETINGS  
**\<sarang\>** hello  
**\<sgp\_\>** hello  
**\<suraeNoether\>** good mroning  
**\<UkoeHB\_\>** hiya  
**\<sarang\>** On to ROUNDTABLE, where anyone is free to share interesting research  
**\<sarang\>** I'll go first, since I have a small assortment of things  
**\<sarang\>** I worked up code and examples for doing hidden data storage within Bulletproofs and Triptych, suitable only for the prover  
**\<Isthmus\>** I,m kinda here, but on a conference call  
**\<sarang\>** Several ongoing projects/issues have been moved to monero-project/research-lab issues for comment and discussion  
**\<sarang\>** The CLSAG code on my monero fork (clsag-plumbing branch) has been cleaned up; thanks to UkoeHB\_ for helpful suggestions and comments  
**\<sarang\>** It includes, among other things, hash function domain separation that we hope to roll out elsewhere for a more robust overall codebase  
**\<sarang\>** There is also CLSAG Python sample code showing how to do signer index extraction in a clever way, which I assume UkoeHB\_ may wish to discuss when he shares  
**\<sarang\>** I've written up material for ZtM about transaction proofs/assertions  
**\<sarang\>** And have worked up some new C++ code that updates transaction in/out proofs to have correct Schnorr challenges  
**\<sarang\>** (still need to write tests for this)  
**\<sarang\>** That's my update; any particular questions before the baton is passed?  
**\<suraeNoether\>** quick question: iirc you had done work on encrypted timelocks  
**\<sarang\>** yes  
**\<suraeNoether\>** i've been chatting with both isthmus and TheCharlatan about them  
**\<suraeNoether\>** do you have any notes prepared any place for later reading?  
**\<sarang\>** On what in particular?  
**\<suraeNoether\>** alternatively: can we schedule a discussion in this room that will end up in the logs for later this week?  
**\<sarang\>** Sure  
**\<sarang\>** Let's table for now, and address at the end  
**\<suraeNoether\>** if we implement them regardless of if we are using mlsag, clsag, or triptych, there's going to be a cost. i want to see how it's all going to fit into future monero dev  
**\<suraeNoether\>** word, word, i can go next  
**\<sarang\>** OK, go ahead suraeNoether  
**\<suraeNoether\>** last week i spent a lot of time on CLSAG and linkable ring signatures security definitions  
**\<suraeNoether\>** there are a lot of definitions out there and they don't all relate to each other in a clean taxonomy, and it wasn't clear which ones we needed to use, and so on  
**\<suraeNoether\>** so i started writing this rather large technical note summarizing all this with the intention of writing a second paper about it, but sarang and i have decided to merge the two into a new draft  
**\<suraeNoether\>** the reason is that even definitions of unforgeability miss absolutely critical stuff becuase they are taken from "ring signatures" and mapped over to "linkable ring signatures" wholesale without regard for linking properties  
**\<suraeNoether\>** so now the paper will be proposing a new definition of unforgeability specifically for linkable ring signatures that subsumes more than one security definition, and this is going to set the standard for a few years on how unforgeability is considered for all applications of linkable ring signatures.  
**\<suraeNoether\>** this is good news(tm) for MRL  
**\<Isthmus\>** sweet  
**\<UkoeHB\_\>** congrats :)  
**\<suraeNoether\>** thanks :D  
**\<sarang\>** It makes the preprint all the more valuable  
**\<suraeNoether\>** In addition to that, I have been preparing my talk for the Blockchain Tech Symposium at the Fields Institute in two weeks, and debugging my matching code.  
**\<suraeNoether\>** i'm extremely grateful to the peer reviewer who "gently" pointed us towards the backes' paper actually  
**\<sarang\>** Having both improvements to security models \_and\_ a new construction seems to be the gold standard these days  
**\<suraeNoether\>** they did us more of a favor than maybe they realized  
**\<suraeNoether\>** my work for the week will include finishing up this new draft of CLSAG, and to begin large-scale data collection on matching  
**\<sarang\>** Thanks suraeNoether  
**\<sarang\>** Any questions for suraeNoether?  
**\<UkoeHB\_\>** if you want more CLSAG work, it's possible to increase the number of linkable keys up to the total number of pub keys considered :p  
**\<sarang\>** Sure, but that's not useful for our particular application  
**\<sarang\>** which is why we didn't consider it  
**\<UkoeHB\_\>** I believe there was an earlier question from nioc about matching  
**\<UkoeHB\_\>** for suraeNoether  
**\<nioc\>**� my question is, what is the status of the matching project and how will is be used going forward to help select an appropriate ringsize?  
**\<sarang\>** ^ was the question  
**\<suraeNoether\>** ah, great question: the matching project is \*what appears to be\* a single-line bug away from correctly generating simulated ledgers. it already appears to generate correct confusion matrices; once this bug is cleared up, it's a matter of executing a big block of code for a large period of time to get all the sample data, and then analyzing the data that's dumped to file.  
**\<suraeNoether\>** so... if this bug, just like all the others, is a hydra, then I don't have a good answer, but i suspect i've narrowed down the problems to the source  
**\<UkoeHB\_\>** Is the purpose of the matching project to produce the ledgers?  
**\<suraeNoether\>** there are several purposes, but here's the main thing  
**\<suraeNoether\>** we want to estimate how well an adversary can do at finding the "real" history of a monero ledger, given some hints (like it's a KYC exchange)  
**\<suraeNoether\>** i have a method of computing a maximum likelihood estimate of the real history given some obscured ledger, and all that code works  
**\<suraeNoether\>** and i have a method of taking an estimate and comparing it to the ground truth, producing a confusion matrix, and all that code works  
**\<suraeNoether\>** i have a simulator that generates simulated ledgers, and the vast majority of that simulator is working just fine, too  
**\<suraeNoether\>** the origin of the project came from the idea of developing a game-theoretic description of traceability on the monero ledger: you hand me an obscured ledger and some hints, I hand back to you my best guess, and then success is judged by you comparing the best guess to the ground truth you kept from me the whole time  
**\<suraeNoether\>** so, the hope is: graph performance against ring size, and see if getting larger than 11 is a waste of space/time or not  
**\<suraeNoether\>** in the meantime, we hope to also get good data for zcash-style ledgers, so that we can actually rigorously compare the two ledgers against each other, instead of tweeting at each other about fragility  
**\<suraeNoether\>** but that last bit is farrrrr down the line  
**\<Isthmus\>** Oh yea, I just remembered that ginger and I talked about generating synthetic blockchains forever ago https://github.com/insight-decentralized-consensus-lab/CryptoNote-Blockchain-GAN/issues/1  
\<  
**\<sarang\>** OK, any follow-up questions on this?  
**\<suraeNoether\>** unfortunately, i've not worked on matching since mid-January because CLSAG's security models are critically important  
**\<sarang\>** and CLSAG needs to get out the door  
**\<sarang\>** Anything else to share, suraeNoether?  
**\<sarang\>** Does anyone else wish to share relevant or interesting research?  
**\<Isthmus\>** I'm taking a break from blockchain logs analysis to do some chat log analysis, analyzing recurring logical fallacies in this space  
**\<suraeNoether\>** Nope  
**\<suraeNoether\>** isthmus lol really?  
**\<sarang\>** ?  
**\<Isthmus\>** Yeah, actually doing a formal analysis  
**\<suraeNoether\>** Isthmus: if you are, i have a friend to hook you up with at the university of exeter  
**\<sarang\>** This channel in particular?  
**\<sarang\>** Or more broadly in cryptography?  
**\<Isthmus\>** Somewhat broady  
**\<Isthmus\>** There's 7 common ones that show up in -lab  
**\<sarang\>** go on...  
**\<Isthmus\>** But they break down into combinations of red herrings and something that is \*similar\* to the slippery slope argument, but not quite the same and I'm still nailing down its technical logical structure  
**\<suraeNoether\>** dude, please elaborate  
**\<Isthmus\>** Like when we're debating fixing a tractable privacy leak, and somebody points out that there are other privacy leaks  
**\<UkoeHB\_\>** :O  
**\<suraeNoether\>** ah yeah  
**\<suraeNoether\>** or comparing everything to 50% attack costs  
**\<Isthmus\>** Another one is the hashrate code control fallacy  
**\<suraeNoether\>** ?  
**\<Isthmus\>** Confusing a 51% attack on longest chain with a 51% attack on the code  
**\<Isthmus\>** This came up a few weeks ago actually  
**\<suraeNoether\>** aaaah  
**\<suraeNoether\>** i smell some medium articles  
**\<Isthmus\>** Like why should we bother working on the protocol and code, when one day, somebody might run their own version on a bunch of their own miners  
**\<sarang\>** Based on what you've analyzed so far, any particular recommendations to avoid such flaws in discussion/thinking?  
**\<Isthmus\>** That one can be disproven by contradiction  
**\<Isthmus\>** If 50% of BTC hashrate moved to BCH, does that make BCH the official bitcoin?  
**\<suraeNoether\>** "why should we patch little leaks in info here and there" styled privacy nihilism/despair  
**\<Isthmus\>** Oh shit, I gotta be in a meatspace meeting  
**\<Isthmus\>** ciao!  
**\<sarang\>** -\_\_-  
**\<sarang\>** Very interesting stuff  
**\<Isthmus\>** Erm, not by contradiction. I mean by example demonstrating absurdity  
**\<sarang\>** We have plenty of time left... does anyone else wish to share anything?  
**\<UkoeHB\_\>** lol   
**\<suraeNoether\>** lol "i'm going to use machine learning to watch all of your conversations and find out who repeats fallacies most zealously BAIII GOTTA GO GRAB A FREE SLIZE OF 'ZZA FROM THE CORPORATE OVERLORDS" amiright  
**\<UkoeHB\_\>** Here's mine. Worked on write-ups of different ideas -\> now Research repo Issues, with good feedback from sarang improving viewspent approach. TxTangle (aka my monero coinjoin protocol) is mostly done and just needs questions answered about network-layer anonymity. Current draft of ZtM2 is here https://www.pdf-archive.com/2020/02/05/zerotomoneromaster-v1-0-23/zerotomoneromaster-v1-0-23.pdf and current  
**\<UkoeHB\_\>** ‘koe’s Ideas’ is here https://www.pdf-archive.com/2020/02/05/moneroideaskoe020520/moneroideaskoe020520.pdf  
**\<sarang\>** Yeah, the original view/spent idea was broken, but there's a better approach  
**\<sarang\>** It ties in with the CLSAG index extraction that I mentioned earlier  
**\<sarang\>** If the signer generates all non-signing scalars via a PRNG `s\_i := H(seed,i)` (with appropropriate seed data), then it can be asserted privately what the signing index is  
**\<sarang\>** It removes the need to add anything to the chain, and hence is good for indistinguishability  
**\<sarang\>** I dig it, provided the UX is sufficient for reasonable use cases  
**\<UkoeHB\_\>** yeah if view key can regenerate those scalars, it can know when an output has been spent with certainty  
**\<UkoeHB\_\>** of course, it only works if tx author generates scalars like that  
**\<sarang\>** The problem is still that it's opt-in, so even an accidental use of a non-participating wallet ruins the account balance computation for good  
**\<sarang\>** So you'd have to be super-clear about presenting that to the user  
**\<sgp\_\>** hmm  
**\<sarang\>** Of course, a wallet could be doing that right now for all we know  
**\<sarang\>** it's non-consensus and can't be detected if done properly anyway  
**\<UkoeHB\_\>** it does leave open questions about data stored by nodes, since signature scalars are pruned; perhaps only full nodes, or view-spent enabled nodes can be used  
**\<sarang\>** IMO that's a completely reasonable trade-off  
**\<sgp\_\>** sounds reasonable to me too  
**\<UkoeHB\_\>** it also may greatly increase data transmitted to view-only wallets by remote nodes  
**\<sarang\>** Bloating the network for optional functionality benefitting only a single user seems unnecessary  
**\<sarang\>** But this approach means you can run a full node (good for the network) and have the functionality for your wallets safely  
**\<sgp\_\>** UkoeHB\_: I think that's a good thing to point out but probably isn't a showstopper  
**\<UkoeHB\_\>** might need to receive a gigabyte of data to read through a year's worth of tx  
**\<suraeNoether\>** hmmm  
**\<suraeNoether\>** i'm a little worried about this in the following sense  
**\<sgp\_\>** I still think that is okay for view-only wallets  
**\<suraeNoether\>** you are selecting the non-signing scalars deterministically from a PRNG  
**\<sgp\_\>** anyone using them for critical stuff, or viewing multiple wallets, should run their own node  
**\<suraeNoether\>** one thing we all know about schnorr signatures is that if nonces are selected deterministically, it's possible to extract the private keys  
**\<suraeNoether\>** at least, under certain constraints  
**\<sarang\>** suraeNoether: yes, which is why seed selection is very important  
**\<suraeNoether\>** so my question is  
**\<sarang\>** UkoeHB\_ and I discussed this a bit already earlier  
**\<suraeNoether\>** if the seed is chosen from a high entropy distribution and kept secret, it's computationally hard to detect that these are computed deterministically  
**\<suraeNoether\>** i would prefer a method that is more than computationally hard  
**\<sarang\>** Presumably the seed is a combination of the view secret key, the index, the key image, etc.  
**\<sarang\>** suraeNoether: how would that even work?  
**\<sarang\>** Data extraction requires that only the designated parties be able to construct the "expected" output value  
**\<suraeNoether\>** pfeh, we use PRNGs because statistical RNGs don't really exist :P so ... it wouldn't  
**\<sarang\>** Well, right now we operate on the assumption that the user has access to something behaving as an RNG  
**\<sarang\>** this moves to an honest-to-goodness PRNG  
**\<sarang\>** (and has to)  
**\<sarang\>** You can't do data extraction with a true RNG AFAICT  
**\<suraeNoether\>** that... is... true.  
**\<sarang\>** Anyway, this is an interesting topic that could be useful for a future release  
**\<sarang\>** but has subtle aspects to seed selection and UX that need further review  
**\<sarang\>** Let's move on, for the sake of time  
**\<sarang\>** Any other topics you wish to share, UkoeHB\_?  
**\<UkoeHB\_\>** well, I hope people can leave feedback on the repo issues  
**\<sarang\>** Yes, please do  
**\<sarang\>** Much easier than only doing IRC comments =p  
**\<UkoeHB\_\>** sorted TLV is probably most important for next hardfork  
**\<sarang\>** TBH that's probably going to be better for -dev discussion  
**\<sarang\>** More of an engineering question than a math question :)  
**\<UkoeHB\_\>** true  
**\<sarang\>** I'd bring it up at a dev meeting, or just in -dev whenever  
**\<sarang\>** Get a sense of the work involved  
**\<UkoeHB\_\>** ok  
**\<sarang\>** I know people have brought up tx\_extra parsing before, and it's a hot topic  
**\<sarang\>** Does anyone else wish to discuss other research topics?  
**\<UkoeHB\_\>** ah, CLSAG section was added to ZtM2 for anyone curious  
**\<sarang\>** excellent  
**\<suraeNoether\>** uh i saw vtnerd's push on dandelion++  
**\<sarang\>** Yes  
**\<sarang\>** Most excellent  
**\<sarang\>** It's on my list to review later this week  
**\<sarang\>** Speaking of which  
**\<sarang\>** Let's briefly move to ACTION ITEMS to respect everyone's time  
**\<sarang\>** I'll be reviewing the D++ PR, working through some additional transaction assertion/proof stuff, updating sublinear tx protocol MPCs, and writing up examples of RCT3 hidden data storage  
**\<suraeNoether\>** yes. Mine: Finish CLSAG, start collecting matching data. Also, of primary importance: provide updates twice or three times a day in here until both of these are finished.  
**\<sarang\>** As well as getting tests written for the new tx in/out proofs  
**\<suraeNoether\>** i'll be reviewing the D++ pr also once those are both off my plate  
**\<sarang\>** Yes, looking forward to the CLSAG stuff (will review when ready)  
**\<sarang\>** Anyone else have action items planned for the week?  
**\<UkoeHB\_\>** To do: focus on multisig all week, hopefully finish txtangle (need a network anonymity expert for advice, any takers?)  
**\<sarang\>** The most knowledgeable person is probably vtnerd  
**\<sarang\>** I hear if you say his name 3 times, he gets 3 separate notifications...  
**\<sarang\>** =p  
**\<sarang\>** Any last-minute items, questions, etc. before we formally wrap up?  
**\<sarang\>** (I'm happy to discuss timelocks after we adjourn)  
**\<sarang\>** Going once...  
**\<sarang\>** twice...  
**\<sarang\>** Adjourned! Thanks to everyone for attending; logs will be posted shortly on the agenda issue  
