---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2016-05-08
summary: Clarification on ringCT next steps, 0MQ, discussion of open PRs
tags: [dev diaries, core, crypto]
author: dEBRUYNE / fluffypony
---

# Logs

**\<fluffypony>** hyc, moneromooo, smooth, luigi1111w, luigi1112, luigi1114, ArticMine, NoodleDoodle, tewinget: meeting starting  
**\<hyc>** hey  
**\<fluffypony>** and othe  
**\<fluffypony>** just waiting for the relay to come up  
**\<fluffypony>** there we go  
**\<luigi1112>** Not here  
**\<fluffypony>** hello, and welcome to the 75th annual hunger games  
**\<bigreddmachine>** crap, luigi1112's not here.  
**\<fluffypony>** luigi1112 is literally a ghost  
**\<fluffypony>** ok so we have a couple of PRs hanging around  
**\<bigreddmachine>** is that why there are always 2-3 of him?  
**\<fluffypony>** bigreddmachine: exactly :)  
**\<luigi1112>** Hoooooo can say  
**\<fluffypony>** I've reviewed #831 and it's ready for merge  
**\<fluffypony>** same with 827  
**\<fluffypony>** has anyone had further thoughts on 818 or are we ok with merging that functionality in its current form ?  
**\<fluffypony>** bearing in mind that this will haunt us basically forever  
**\<fluffypony>** and we pretty much can't change it ever again  
**\<fluffypony>** no pressure or anything  
**\<fluffypony>** (just kidding, we can definitely version it)  
**\* fluffypony** waaaaaits  
**\<hyc>** I haven't looked at 818, it's a crypto question still  
**\<fluffypony>** yeah I think shen looked at it  
**\<fluffypony>** ok we'll put a peg on that pending input from moneromooo and smooth  
**\<ArticMine>** What are shen's thoughts on 818?  
**\<MRL-Relay>** {-shen} I took a glance at it, but if desired I can look deeper  
**\<MRL-Relay>** {-shen} at glance looked ok  
**\<fluffypony>** shen: I think take a closer look if you can, given how we \*are\* stuck with it forever we may as well try get it right off the bat  
**\<MRL-Relay>** {-shen} ok I will budget some time today or tomorrow  
**\<fluffypony>** ok cool  
**\<fluffypony>** then with the performance branch (794) we found an issue with the initial migration, messed up a global index on some txos  
**\<luigi1112>** Is that the sig thing?  
**\<fluffypony>** this appears to be fixed with the new / faster migration  
**\<fluffypony>** luigi1112: yes  
**\<luigi1112>** Ok  
**\<fluffypony>** luigi1112: also I think if you have a second do you want to glance at the output format, maybe we need to give it a version prefix and a suffix of some sort  
**\<fluffypony>** ok so performance is ready for merge, unless anyone has an objection  
**\<hyc>** sounds good to me  
**\<fluffypony>** then 810, I'm still unclear as to whether we're dropping that idea or we're merging it  
**\<hyc>** given the increased locking requirements I'm against it.  
**\<fluffypony>** ok  
**\<hyc>** and as said before, I think fixing the pool code to use cheaper queries is better  
**\<fluffypony>** I'm onboard with that  
**\<fluffypony>** so now that we're getting the performance branch out the way  
**\<fluffypony>** the next two major things on the radar are 0MQ and ringct  
**\<fluffypony>** at the moment we have that stall in the dev branch, not sure whether it's time to nuke it and start the new one  
**\<fluffypony>** I'll wait for input from moneromooo on that  
**\<fluffypony>** and then ringct - hyc, did you say you were going to do some of that? I can't even remember  
**\<hyc>** I looked into it but no, moneromooo should take lead  
**\<fluffypony>** ok  
**\<fluffypony>** shen  
**\<hyc>** I can do whatever DB additions are needed  
**\<fluffypony>** what's the status of your implementation code ?  
**\<dEBRUYNE>** perhaps hyc can assist with the DB stuff  
**\<dEBRUYNE>** oh he was quicker than me already  
**\<MRL-Relay>** {-shen} Should be ready for test net at least  
**\<fluffypony>** ok  
**\<fluffypony>** it's time for a testnet fork anyway, so we can work towards that  
**\<fluffypony>** basically everything else requires moneromooo and smooth, so we can put a peg in them till next meeting  
**\<fluffypony>** speaking of which  
**\<fluffypony>** next one on the 22nd  
**\<dEBRUYNE>** perhaps they will show up within the next 30 minutes :-P Just page them 3 times!  
**\<fluffypony>** hah hah  
**\<dEBRUYNE>** Btw fluffypony, will the performance branch be used for a new point release?  
**\<fluffypony>** dEBRUYNE: yes  
**\<dEBRUYNE>** All right  
**\<dEBRUYNE>** Btw, if moneromooo and smooth show up later tonight and have a chat about 0MQ we could just add that to the dev logs  
**\<fluffypony>** ok  
**\<bigreddmachine>** q: for the next point release... will it include arm7 binaries? 0.9.4 does not  
**\<fluffypony>** it should  
**\<bigreddmachine>** okay. unreleated, probably for hyc... you mentioned that simplewallet now only needs to sync ~30 MB instead of 3 GB with the new improvements. What was the savings? was there just a lot of data being shared that was unnecessary?  
**\<luigi1112>** fluffypony: I'll think about that  
**\<hyc>** bigreddmachine: sync of irrelevant blocks, only needed to use hashes  
**\<bigreddmachine**> kk, thats what i figured  
**\<bigreddmachine>** now just syncing block headers?  
**\<hyc>** up to a given refresh height it only syncs hashes  
**\<fluffypony>** moneromooo: we can carry on chatting about the bits you missed after the kovri meeting, if that's ok ?  
**\<moneromooo>** Sure.  
**\<fluffypony>** ok back to the Monero side  
**\<fluffypony>** moneromooo: have you had a chance to read the meeting backlog ?  
**\<moneromooo>** I did.  
**\<fluffypony>** ok - thoughts on 0MQ / dev branch?  
**\<fluffypony>** if you have the dev branch on your fork we can nuke it and reset  
**\<moneromooo>** I think you can nuke the dev branch.  
**\<moneromooo>** As for 0mq... whenever I get to start it, it's going to be a largeish amount of work at once I think.  
**\<fluffypony>** ok  
**\<moneromooo>** I happen to be not super motivated to code these days, after day job spent debugging stuff.  
**\<fluffypony>** sometimes you gotta take a break and work on fun stuff  
**\<dEBRUYNE>** perhaps Ring CT qualifies as fun stuff, perhaps not :-P  
**\<moneromooo>** What's more important btw, 0mq or ringct ?  
**\<fluffypony>** I would think ringct  
**\<dEBRUYNE>** I'd say Ring CT too  
**\<dEBRUYNE>** Iirc ring CT needs to be some time on testnet too anyway  
**\<moneromooo>** And we can ask the "did nobody test this ?" peanut gallery in to test it :D  
**\<fluffypony>** awesome  
**\<moneromooo>** One other thing I wanted to do, which is interesting from a user's point of view, is to allow the wallet to see/decode pool txes.  
**\<moneromooo>** That's probably not too much work.  
**\<dEBRUYNE>** lol moneromooo   
**\<dEBRUYNE>** Btw moneromooo, in case you hadn't read it yet hyc can assist you with the DB stuff  
**\<dEBRUYNE>** More specifically -> \<hyc> I can do whatever DB additions are needed  
**\<moneromooo>** I saw that. It's good so I don't break it all.  
**\<dEBRUYNE>** Btw fluffypony, I forgot to ask earlier. Not sure if he is here, but any plans to opensource NoodleDoodle's trezor code soon^tm?  
**\<fluffypony>** you'd have to ask NoodleDoodle that  
**\<dEBRUYNE>** all right, perhaps he responds :-P  
**\<moneromooo>** Oh: about reviewing the signature patch, IIRC smooth said that code was only used for the debug commands, so the CN people might not have make it so resistant to misuse or something. So might be worth looking at its internals (I expect it uses the same building blocks as ring signatures, but I don't really know).  
**\<dEBRUYNE>** Also, regarding #810, a pool op commented the following: "Adding this to the current HEAD 8b0d22a reduces CPU by an order of magnitude on a pool wallet: 80% usage on a core down to 8%. Seems like a significant performance win to me." Since there is a mixed feeling about the PR itself I figured perhaps just close it and send the pool ops a mail that they could possibly apply the code/patch to their own code if they want to do so. I could   
**\<dEBRUYNE>** gather email addresses and setup a standardized mail.  
**\<dEBRUYNE>** ^ fluffypony   
**\<moneromooo>** Changing the pool code to call getinfo and check top hash would also drop CPU usage a lot.  
**\<fluffypony>** shen, see above ^^  
**\<fluffypony>** (before the pool code stuff)  
**\<MRL-Relay>** {-shen} ok  
**\<MRL-Relay>** {-shen} good point  
**\<dEBRUYNE>** moneromooo: I see, well then it's more up to the pool ops instead of the contributors/developers imo  
**\<moneromooo>** Up to whoever gets his butt in gear to do it, as usual :D