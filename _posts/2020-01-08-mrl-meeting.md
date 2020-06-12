---
layout: post
title: Logs for the MRL Meeting Held on 2020-01-08
tags: [dev diaries, crypto, research]
author: asymptotically / Sarang
---

# Logs

**\<sarang\>** GREETINGS to everyone  
**\<almutasim\>** Hi.  
**\<binaryFate\>** hi hi  
**\<sarang\>** Let's start with ROUNDTABLE  
**\<sarang\>** The preprint for Triptych, a new linkable ring signature construction that can be extended for use in transactions, is on the IACR archive  
**\<sarang\>** Link: https://eprint.iacr.org/2020/018  
**\<sarang\>** CoinTelegraph just released an article about it (but note there are some errors in the data presented there, that I'm told will be fixed)  
**\<sarang\>** I plan to make an update on the size and time data, to properly account for batch verification and ensure fair comparison  
**\<sarang\>** More work was done on the multi-index version of Triptych, fixing soundness in exchange for a separate proof relation that we need to show is equivalent to another proof relation  
**\<sarang\>** This would allow even better performance  
**\<sarang\>** I worked out an MPC for that version of Triptych as well, which would be useful for multisig  
**\<sarang\>** And I'm presently working on some questions relating to Omniring math that I've brought up with that paper's authors  
**\<sarang\>** Does anyone else wish to share interesting research work?  
**\<almutasim\>** When the time is right, at a key juncture, we could have a press release on Triptych. Monero Outreach could support that. Maybe when it is established that it is going into a release.  
**\<sarang\>** To be clear, there are no guarantees that Triptych, or any presently-known construction, is fit for deployment  
**\<almutasim\>** Right.  
**\<Isthmus\>** I've got some fingerprinting stuff, and n3ptune just completed a pretty cool network analysis  
**\<sarang\>** Ooh  
**\<sarang\>** Isthmus: what sort of data have you uncovered?  
**\<Isthmus\>** Ah my fingerprinting notes are nothing new or exciting, just an idea that might make data presentation more intuitive. So, I tend to think about wallet fingerprinting in a kind of abstract way - every transaction sits at some corner of a hypercube in a high-dimensional space made of different heuristics yadda yaddaaa yadda  
**\<Isthmus\>** So even though I work with sets of boolean features on the backend, wanted a good way to show results  
**\<Isthmus\>** This is my first attempt: https://mitchellpkt.github.io/fingerprint.html  
**\<sarang\>** What, you can't accurately present visualizations of high-dimensional hypercubes? =p  
**\<Isthmus\>** llol  
**\<Isthmus\>** This is somewhat by @suraeNoether adding human-interpretable output to the graph matching  
**\<sarang\>** I like the idea of enumeration like that  
**\<Isthmus\>** thanks! It figure it's also an easy way to pass around data in a 2-column CSV chart, and researchers can do substring matching on portions that they find relevant to a given analysis  
**\<suraeNoether\>** Ack sorry! I'm here! Time change got me unawares  
**\<sarang\>** Isthmus: is there anything to share about the network analysis you mentioned?  
**\<n3ptune\>** Re: questions on block propagation timing asked last month, I've collected and analyzed block receipt timing data from our global nodes recorded during the past 6 months  
**\<sarang\>** Nice!  
**\<sarang\>** What conclusions?  
**\<n3ptune\>** Isthmus has notes about interpretation and I have more to write but you can look at the graphs here https://github.com/noncesense-research-lab/archival\_network/wiki/Block-propogation-time  
**\<Isthmus\>** This was RE a question that @moneromooo asked, right?  
**\<Isthmus\>** Units are size in bytes and timestamps in milliseconds, right?  
**\<suraeNoether\>** that was my question ^  
**\<n3ptune\>** we used this formula where NRT is Node Received Timestamp:  prop\_time\_lower\_bound(h) = MAX[NRT(h,1), NRT(h,2), NRT(h,3)] - MIN[NRT(h,1), NRT(h,2), NRT(h,3)]  
**\<sarang\>** What are the changing indices there?  
**\<sarang\>** Different nodes?  
**\<sgp\_\>** hello  
**\<n3ptune\>** yeah, that goes up to 3 but there are 4 nodes total  
**\<sarang\>** got it  
**\<suraeNoether\>** so block prop time is reliably at least 0.1s. interesting.  
**\<Isthmus\>** Oh scatter heatmap is height from dark=old to light=new  
**\<Isthmus\>** ^ color scale  
**\<sarang\>** And those are the differences between the miner-reported timestamp and the node's wall clock upon receipt?  
**\<Isthmus\>** Miner reported timestamps are not considered anywhere in this study  
**\<Isthmus\>** But we did that elsewhere  
**\<suraeNoether\>** hm then what is being measured for prop time?  
**\<sarang\>** So these are blocks only passed between your nodes?  
**\<sarang\>** Where you look at local times on send and receipt?  
**\<Snipa\>** ^ Was going to ask that, as the min propogation time seems particularly low, as 100msec is quite low in our experience to cross the globe.  
**\<sarang\>** Or better question: how is NRT computed  
**\<n3ptune\>** it's the difference in timing between different nodes receiving the same blocks  
**\<sarang\>** Ah, ok  
**\<Isthmus\>** Yea, not passing between our nodes, but passing through our nodes  
**\<n3ptune\>** NRT is recorded from the node system time when a block arrives  
**\<sarang\>** Independent of the peer from which they receive  
**\<sarang\>** (which would differ)  
**\<sarang\>** Seeing the difference between miner-reported time (which could be inaccurate) and wall-clock receipt time would also be interesting  
**\<suraeNoether\>** hmmmm  
**\<endogenic\>** o/  
**\<Isthmus\>** https://usercontent.irccloud-cdn.com/file/brPsQyeU/image.png  
**\<Isthmus\>** @sarang just for you  
**\<sarang\>** So what we're really seeing here is not propagation time directly, but variability in one layer of propagation time  
**\<sarang\>** here = the initial plots, not this one  
**\<Snipa\>** I'll have to check pool log data, as I might be able to give some extra data points if you're interested.  We started to log the time in which a pool node finds a block, versus when that block is stored into our database, which means it's been processed by the local node, as we skip all monerod timings on the pool itself.  
**\<suraeNoether\>** oooop  
**\<suraeNoether\>** that's cool  
**\<sarang\>** Very high times  
**\<Isthmus\>** @Snipa very nice!  
\< can you elaborate?  
**\<suraeNoether\>** isthmus well it's how long it takes for the block to propagate from one of your nodes to another of your nodes; not time it takes to propagate from a miner to one of your nodes  
**\<sarang\>** I mean that for the initial plots you showed, you can't directly interpret the time for the block to reach your node after it's mined  
**\<sarang\>** suraeNoether: no  
**\<suraeNoether\>** no?  
**\<Isthmus\>** Yea, we very deliberately labeled all of the axes "prop time lower bound" for that reason  
**\<Isthmus\>** Also, we could always posit that there is an old PC on dialup somewhere in Nebraska with a 4 minute prop time, but that's not meaningful  
**\<sarang\>** suraeNoether: it's looking at the difference in receipt time, whichever path the block took in total propagation  
**\<Snipa\>** Hrm, auctually, I can provide a data stream of our global block propgations, as every node has a local reporter that we can hook.  
**\<Isthmus\>** @Snipa yes please!  
**\<suraeNoether\>** sarang that's true also  
**\<n3ptune\>** that data would be awesome to work with  
**\<Isthmus\>** I'll posit something that might be wrong:  
**\<Isthmus\>** It's a hacky data science way of thinking -  
**\<Snipa\>** Hit me up a bit later and we can discuss how to get it to you, and go over data formats.  
**\<Isthmus\>** Shoot, I gotta get off the bus  
**\<suraeNoether\>** isthmus: you have two sensors set up to detect propagation time. but you need 3 to triangulate, ala seismic detection of epicenters  
**\<sarang\>** Don't leave us with that cliffhanger Isthmus!  
**\<suraeNoether\>** i'm on the edge of my seat  
**\<suraeNoether\>** i spilled my tea  
**\<suraeNoether\>** i'm so upset at isthmus right now i could just light myself on fire  
**\<sarang\>** Stay on the bus Isthmus... it'll loop back around to your stop eventually  
**\<sarang\>** In the meantime, any other interesting tidbits on this work?  
**\<sarang\>** This is very interesting data  
**\<suraeNoether\>** while we are waiting on Isthmus, I'll give my super-brief update: after some discussions with endo, my matching code has been made significantly more efficient, easy to understand, and easier to debug; i'll be making a push later today. my two categories of work today are re-reviewing CLSAG and working on matching  
**\<n3ptune\>** that's it for now, we will update  
**\<endogenic\>** his pseudocode now fits onto one sheet of notepad paper..  
**\<suraeNoether\>** isthmus and i also technically had a conversation about writing up a proposal to encrypt and enforce all lock times, but we haven't gotten details worked out yet  
**\<sarang\>** You mean using DLSAG-style commitments?  
**\<sarang\>** We'd discussed it earlier in a meeting  
**\<suraeNoether\>** yep, last meeting iirc. but i actually had a call with isthmus about it. i view this move as a very good boost in privacy in the sense that it covers up a source of non-randomness in the large data sets that isthmus likes to comb through.  
**\<sarang\>** I can work out the size and time implications on that if you like  
**\<suraeNoether\>** i'm not convinced it is worth the additional cost to our txn sizes, but we'll see how it shakes out  
**\<sarang\>** Since it could be bundled into the existing bulletproof  
**\<suraeNoether\>** ^ ah  
**\<sarang\>** Yeah, size is not the issue here due to the logarithmic scaling  
**\<suraeNoether\>** yeah, and verification times are speedy as a cheetah's balls  
**\<suraeNoether\>** pardon me, this is a public meeting, i should be less vulgar. please accept my apologies.  
**\<sarang\>** Right... there's a linear increase in verification time, but with the benefits of multiexp that's reduced a bit  
**\<sarang\>** CoinTelegraph has updated their article: https://cointelegraph.com/news/moneros-triptych-research-could-vastly-improve-its-anonymity  
**\<sarang\>** Thanks to the author for taking care of that so quickly  
**\<almutasim\>** A press release could get more coverage, when and if it is desired.  
**\<sarang\>** suraeNoether: interestingly, due to bulletproof padding, for many transactions there would be no size increase aside from the space taken up by the commitment data  
**\<suraeNoether\>** good on cointelegraph  
**\<sarang\>** (as opposed to a smaller plaintext representation)  
**\<suraeNoether\>** sarang: could a similar approach be used to include a ciphertext of a message?  
**\<suraeNoether\>** ie moneroMail  
**\<Isthmus\>** Sorry somebody got in a fight with the bus driver right before my stop  
**\<sarang\>** Not really... there's some spare space in bulletproofs that could hold something 1-2 proof elements of arbitrary data by controlling randomness (I'd need to check the details)  
**\<Isthmus\>** Sigh San Francisco  
**\<sarang\>** Welcome back Isthmus  
**\<Isthmus\>** Ok lemme whiteboard some stuff 1 sex  
**\<Isthmus\>** n3ptune: do you want to share the padding?  
**\<Isthmus\>** In the blocks  
**\<n3ptune\>** sure  
**\<suraeNoether\>** sarang so enough for a key exchange but unlikely enough for a ciphertext?  
**\<sarang\>** Well, you're limited by space  
**\<n3ptune\>** Is there a known purpose for the null padding tag in tx\_extra?  
**\<sarang\>** I don't remember if Poelstra and friends found 32 or 64 bytes of space  
**\<sarang\>** n3ptune: good question for moneromooo et al.  
**\<sarang\>** While we await Isthmus' continued update, anything else of interest to share?  
**\<sarang\>** Or ACTION ITEMS, according to the agenda?  
**\<suraeNoether\>** i want to provide final comments to you on clsag but i'm very unlikely to get that finished today  
**\<suraeNoether\>** but it's on my mind for this week  
**\<Isthmus\>** Back  
**\<suraeNoether\>** Front  
**\<sarang\>** Mine are to get CLSAG submitted (after review), to hopefully nail down this Omniring issue and pass it to the authors, work on a few EC curve library updates for proof of concept code, and get preprint stuff taken care of via monero-site MR  
**\<sarang\>** Isthmus: please go ahead  
**\<sarang\>** (oh, and update the Triptych preprint performance data with better clarity)  
**\<Isthmus\>** https://usercontent.irccloud-cdn.com/file/gAM3VbDV/1578508953.JPG  
**\<sarang\>** wat dis  
**\<Isthmus\>** So let's say that we have 100 of n3ptune/NRL's archival nodes running  
**\<Isthmus\>** If we have only 2 nodes, then our propagation envelope will have a lot of variability, be topology dependent (assume archival nodes don't connect to each other), and just t\_second - t\_first  
**\<Isthmus\>** As we add a 3rd node, it has the possibility of increasing the measured prop time (since it could hear before or after) but can't decrease the prop time since it's max-min  
**\<Isthmus\>** As we get up to 100 nodes, the variability will probably smooth out and we approach the true reasonable prop time (from miner to global nodes with broadband internet)  
**\<sarang\>** Doesn't prop time depend on max/min among all nodes? So the third node could fall outside the envelope of the other two and affect the value?  
**\<Isthmus\>** Yeah, that's the point  
**\<sarang\>** OK, I must have misinterpreted  
**\<sarang\>** Oh, can't \_decrease\_  
**\<sarang\>** nvm  
**\<Isthmus\>** Painting very broadly, when we adad the 3rd node there's a 2/3 chance that it'll fall outside the N=2 and increase the prop time, and a 1/3 chance that it'll be between the first 2 nodes.  
**\<Isthmus\>** Sorry, I'm giving a kind of scattered description cuz I just realized this on the bus  
**\<almutasim\>** Max-Min is a very sensitive metric, sensitive to outliers.  
**\<Isthmus\>** Hmm lemme ponder on that  
**\<Isthmus\>** Skipping over that for now  
**\<Snipa\>** How're you pulling the time in which the block is received?  Tweaked monerod/using it's logs or polling on the RPC interface to determine when it's auctually viably added to the box?  
**\<Isthmus\>** That's a n3ptune question, they do all the DevOps and data engineering. All ended up in a SQL database by the time I got to it  
**\<n3ptune\>** tweaked monerod  
**\<Snipa\>** On P2P receive then?  
**\<Isthmus\>** So for each height we have epsilon (green line) which our many-node approximation of global prop time  
**\<n3ptune\>** you can also use monerod --block-notify, if you point that to a shell script that writes the timestamp  
**\<Snipa\>** --block-notify waits until the block is committed, which is why I ask, because nodes that do not use NVMe have much slower propagation times in general, as you're waiting on disks to write.  
**\<n3ptune\>** i like that better because then you can use the stock daemon. but we don't use that yet  
**\<sarang\>** OK, so using the max-min metric, assuming relatively even node placement across the network topology?  
**\<Isthmus\>** Yeah, though after @almutasim I'm considering a few other less sensitive metrics  
**\<Isthmus\>** slap all those epsilons into a histogram, and that's the plot on the right.  
**\<sarang\>** The outliers being nodes close to the miner and far from it, topologically  
**\<Isthmus\>** Uhm, the outlier might be only 2 hops away but one of the hops is really slow  
**\<n3ptune\>** P2P Receive:  no it happens when it adds it to the blockchain, after it determines whether or not it's an alt block.  this was because we had another original goal to capture alt blocks data.  the daemon patch is shared here https://github.com/neptuneresearch/monerod-archive  
**\<Isthmus\>** @sarang so it depends if topological distance definition is just the p2p connectivity graph or takes into account time between vertices  
**\<sarang\>** right  
**\<Isthmus\>** And that epsilon plot is basically what n3ptune shared earlier except instead of "max-min with 4 nodes" it is "asymptotic approximation of global prop time"  
**\<Isthmus\>** ^talking about x-axis of histogram  
**\<n3ptune\>** --block-notify waits until the block is committed \>\>   oh then i guess this method of doing it in blockchain::add\_new\_block() at least occurs before block-notify would.  but yes it isn't \*immediately\* on receive  
**\<sarang\>** Since we're just about out of time, any last bits of information before adjourning (discussion can of course continue) for log purposes?  
**\<Isthmus\>** Oh yea  
**\<Isthmus\>** just a quick note that tx\_padding is used in the wild, but unclear why  
**\<Isthmus\>** In the scatter plot showed earlier, the vertical bands from left to right are empty blocks and then N=1,2,3... transaactions  
**\<sarang\>** That's a question for someone like moneromooo  
**\<Isthmus\>** Of course there's variability in the horizontal width of the vertical bands due to transaction size differences, but the variability in coinbase-only blocks was straange  
**\<Isthmus\>** https://xmrchain.net/tx/acdf8eac41a7a76fd899e09640db34023abff66b3ae2c9ea86e49f19c0720af4  
**\<Snipa\>** Not really, coinbase only blocks are quite common due to pool design.  
**\<Isthmus\>** No no, the size\*variability\* in coinbase-only was strange  
**\<Isthmus\>** Turns out some (now fingerprinted) miners are using lots of null padding, check out the tx\_extra for this coinbase  
**\<sarang\>** gadzooks  
**\<Snipa\>** Not super surprising.  
**\<Isthmus\>** Looks like bloat to me  
**\<Isthmus\>** Bunch of blocks waste space with nulls in tx\_extra  
**\<Snipa\>** Possibly, it's also something that can be requested by a pool.  
**\<Snipa\>** As that's the block padding that we use for extra nonce storage space.  
**\<Isthmus\>** "As that's the block padding that we use for extra nonce storage space." block nonce or transaction nonce? This is padding in the coinbase transaction  
**\<Snipa\>** Oh sorry, txn, my bad.  
**\<Isthmus\>** Do you know why some miners use the padding and some don't?  
**\<Snipa\>** Lemme look through some of my decoding code I wrote for that.  
**\<Isthmus\>** I'd been comparing:  
**\<Isthmus\>** https://xmrchain.net/search?value=1988283  
**\<Isthmus\>** and  
**\<Isthmus\>** https://xmrchain.net/search?value=1985042  
**\<Isthmus\>** Since they seem to be exactly the same besides different padding  
**\<Isthmus\>** Anyways, thanks for letting me ramble and shifting meeting time  
**\<Snipa\>** For quick reference: The block's CB TXN contains an "extras" section, which is requested from Monerod as the extra space in which arbitary data can be written.  This data is used by pool implementations to implement the per-pool nonces as well as any custom nonce data used by more advanced techniques.  
**\<Isthmus\>** "extra space in which arbitrary data can be written"  
**\<Snipa\>** You can use this data in a number of ways, particularly with knowledge of pool design, as the two main pool implementations use this space similarly, but have different sizes based on various addon support.  
**\<Isthmus\>** Ooh, what are the current use cases?  
**\<Snipa\>** You also can identify what pool instances are submitting blocks, as pools use unique identifiers in particular bytes.  
**\<Isthmus\>** (I have no knowledge of pool design)  
**\<Snipa\>** https://github.com/Snipa22/nodejs-pool/blob/master/lib/coins/xmr.js#L115  
**\<suraeNoether\>** For those of you who are interested in helping out with Monero Kon 2020 in Berlin, there is a meeting happening right now for prospective volunteers. This is research related, but otherwise off-topic, so I'm just dropping this here.  
**\<Snipa\>** ^ is the implementation you'll find on pools that support the XNP extensions I wrote awhile ago.  
**\<sarang\>** Yeah, we can formally adjourn the meeting, but carry on the conversation  
**\<sarang\>** Thanks to everyone for attending  
