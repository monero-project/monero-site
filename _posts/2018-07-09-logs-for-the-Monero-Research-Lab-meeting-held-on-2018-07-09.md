---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-07-09
summary: MRL work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<knaccc>** hey  
**\<sarang>** Our pal suraeNoether is unavailable today, so this inmate will be running the asylum today  
**\<sarang>** Let's go around the room and mention any present or ongoing work of interest to the group  
**\<sarang>** In the spirit of fairness, I'll go first  
**\<rrol[m]>** hi  
**\<sarang>** Waiting on reports from our reviewers, all of which are finalizing with a few delays due to last-minute checks  
**\<sarang>** (on BPs, that is)  
**\<sarang>** There was a delightful twitteresearcher who pointed out lack of small-subgroup checking  
**\<sarang>** Reviewers also noted this, but were unable to identify an exploit  
**\<ArticMine>** hi  
**\<sarang>** Regardless, this is now included in the code  
**\<hyc>** reviewers clearly lack imagination of twitterati  
**\<sarang>** As always, we welcome external research but appreciate responsible disclosure (the lack of which makes a researcher ineligible for hackerone moneyz)  
**\<sarang>** Relating to the audit, there was some work on other aspects of the BP code, like generator specifications, fixes to multiexp, etc  
**\<sarang>** I posted some code and other materials to my research-lab repo, including notes from my summer course  
**\<sarang>** I'll be giving a talk in Portland on fungible digital assets, and another at defcon  
**\<sarang>** I got a recent email from someone with an idea for including a transaction-specific subaddress within transactions, which could be used for (among other things) refunds  
**\<sarang>** or returns for misdirected funds to exchanges  
**\<sarang>** Finally, I've been working through additional sublinear ring sig material and some math on non-power-of-2 bulletproofs (a future thing)  
**\<hyc>** why NPO2?  
**\<sgp\_[m]>** Hello everyone. Sorry I'm late  
**\<knaccc>** does that subaddress email come with the condition of restricted circulation?  
**\<sarang>** hyc: NPO2 gives better verification efficiency, which is relevant for any later work involving larger circuits  
**\<hyc>** ah cool  
**\<sarang>** knaccc: I can share the info if desired  
**\<sarang>** just need to check if the researcher wants their name released  
**\<knaccc>** yes a fedorapaste or something, with name redacted, would be interesting for discussion  
**\<sarang>** Yeah, he's been emailing me just before the meeting. When I hear back I'll make a paste of the info  
**\<sarang>** Anyway, that's my work this week  
**\<sarang>** Move on to others, or questions on my stuff?  
**\<hyc>** sounds good  
**\<sarang>** I know suraeNoether has been working on nonprofit stuff and also recently on some churn analysis. We really need information on output depth, which a few folks said they were interested in coding  
**\<moneromooo>** What is output depth ?  
**\<sarang>** Oh, link to my repo with that material: https://github.com/SarangNoether/research-lab  
**\<sarang>** The distribution of coinbase outputs tracked back through the spend tree of a transaction  
**\<sarang>** It's useful as parameters for churn analysis  
**\<moneromooo>** Is this something that's been pending for a while ?  
**\<moneromooo>** Kinda rings a bell...  
**\<sarang>** yup  
**\<moneromooo>** If it's a few folks that siad they would, then flaked out, I can do it. If it's a few folk that recently said so and are doing it, I won't.  
**\<sarang>** Not sure if flaked, or busy, or what  
**\<sarang>** I have little experience in lmdb, or I'd jump on it  
**\<sarang>** clearly moneromooo sits around all day doing... very little =p  
**\<moneromooo>** Well, remind me whenever you feel like you waited enough :)  
**\<sarang>** lol ok  
**\<sarang>** I can give more details after meeting  
**\<sarang>** ty  
**\<hyc>** if you want to poke and prod at the blockchain before writing actual code, I suggest the CLI in py-lmdb  
**\<sarang>** hyc: I thought our implementation was non compatible?  
**\<hyc>** eh? you point the python module at out liblmdb, no problem  
**\<hyc>** at our  
**\<sarang>** Ah ok, I had tried a while back to no avail, and had read that we were using too new a version or something  
**\<hyc>** py-lmdb itself works great  
**\<hyc>** with any recent version of liblmdb  
**\<sarang>** great  
**\<sarang>** I'll revisit it then  
**\<sarang>** Who else wishes to share anything of group interest?  
**\<hyc>** on the subject of LMDB, I've been doing a bunch of benchmarking on $secret $systems lately  
**\<sarang>** orly  
**\<hyc>** point of interest - common filesystems today are all journaling filesystems - they log FS ops before they perform them  
**\<hyc>** to give them crash resilience. With LMDB such logging is superfluous. turns out you can creatae Linux ext4 filesystems without journals  
**\<hyc>** which gives a nice performance boost  
**\<hyc>** also, I've got a patch that lets LMDB use a raw device directly, without any filesystem at all  
**\<hyc>** on a bulk load test (loading records sequentially, as fast as possible) this is 2x faster than ext4 with no journal  
**\<sarang>** oh wow  
**\<hyc>** it turns out you spend a lot of time just growing the file, on a filesystem  
**\<hyc>** that's what I can share at the moment. actual results/numbers are under NDA  
**\<ArticMine>** So LMDB on a dedicated GNU / Linux partition  
**\<hyc>** yes  
**\<spaced0ut\_>** very cool  
**\<knaccc>** is there a way to ask an commonly used filesystems to just allow raw access to some regions?  
**\<ArticMine>** With way faster sync for Monero  
**\<knaccc>** any\*  
**\<sarang>** Throwback time... here's the email regarding subaddys: https://paste.fedoraproject.org/paste/KTgF84V-pHPL-dO8V8mAjw  
**\<hyc>** knaccc: unfortunately not  
**\<knaccc>** doh  
**\<hyc>** you create a filesystem, it owns all that space  
**\<sarang>** Researcher asked to be identified as "that Russian dude"  
**\<hyc>** won't give it to you :P  
**\<knaccc>** haha  
**\<moneromooo>** BTW, iDunk reported much faster sync on HDD with some particular options.  
**\<scoobybejesus>** i think it was sneurlax who was writing up spend tree code in python  
**\<moneromooo>** Just needs... a lot of data points. To fix a new default.  
**\<rrol[m]>** re: churn, i have been planning to put together a 'best practices' infographic that collects some of surae's findings, as well as other usage guidelines, but work keeps eating my headspace. if ppl want to help maybe reach out and we can coordinate together  
**\<sarang>** scoobybejesus: righto, didn't see any final product, unless there is and I don't know about it  
**\<sarang>** rrol[m]: that'll be great; just waiting on some final numbers  
**\<oneiric\_>** is there a way to setup a partition without root? then on make install, partition sets up automatically?  
**\<hyc>** oneiric\_: I think it always requires root access  
**\<sneurlax>** soon™ -- do you want the mining pool traceability analysis first or the generalized spend tree code first?  
**\<oneiric\_>** damn, very cool work hyc  
**\<moneromooo>** Kinda loses the point of a fs, which is to allow files to live in parallel. So you have to preallocate loads of space to your raw partition.  
**\<hyc>** thanks. I guess mostly theoretical for now, impractical for most people to deploy  
**\<sgp\_[m]>** rrol sarang: I also want to see what's known about churning for my Defcon talk  
**\<sarang>** sneurlax: getting the distribution of output depths (back to coinbase) for a given txn sample will be the most relevant right now  
**\<sarang>** sgp\_[m]: righto  
**\<hyc>** oh, and like sarang, I'll be giving a talk at defcon. unlike sarang's.  
**\<ArticMine>** I am not so sure this is impractical to deploy  
**\<spaced0ut\_>** i think thats really exciting you're giving a talk about fungibility at defcon. from what i've seen, people change their mind on that topic fairly easily once presented with some evidence  
**\<spaced0ut\_>** "people" == people that think btc is fungible  
**\<sarang>** Yeah, I think it'll be really relevant at the Portland event too, which is attended by a very nontechnical audience  
**\<sarang>** I'm shifting my language from private to fungible more and more  
**\<hyc>** ^good  
**\<oneiric\_>** less overtones/baggage?  
**\<sarang>** Telling people how much it would suck if your salary wasn't exchangeable because of some ransomware crap you had nothing to do with  
**\<sarang>** oneiric\_: easier to explain why people should care  
**\<ArticMine>** My favorite paying for a meal with two $20 bills  
**\<ArticMine>** In the US  
**\<knaccc>** fungibility requires a weaker form of untraceability than privacy though  
**\<sarang>** sure  
**\<spaced0ut\_>** knaccc, in cryptocurrency though?  
**\<sarang>** and I still talk about privacy too  
**\<knaccc>** so as long as it's not an admission of defeat :)  
**\<hyc>** knaccc: weaker, how so?  
**\<sarang>** I assume knaccc means breaking links between outputs  
**\<sarang>** not necessarily identities of use  
**\<hyc>** I use physical coinsas my example, since they have no serial numbers (as opposed to paper bills)  
**\<knaccc>** privacy can be exposed after the fact  
**\<spaced0ut\_>** weaker is fine for something like cash imo. there are serial numbers so it may only be 99.9999% fungible. with cryptocurrency its either private or extremely public  
**\<knaccc>** fungibility counts in the moment more  
**\<spaced0ut\_>** very good point  
**\<ArticMine>** In many countries fiat is fungible by law  
**\<sarang>** A fun topic, but to keep us on track...  
**\<sarang>** Are there other research topics on anyone's plate?  
**\<sarang>** (I'd love to continue talking fungibility afterward)  
**\<unknownids>** ArticMine, as in no serial numbers on bills?  
**\<knaccc>** I was interested to know if anyone thought that a 38% reduction in wallet output scanning time was significant enough to justify altering the one-time output public key construction. UkoeHB and vtnerd had some interesting comments which I've incorporated into this: https://paste.fedoraproject.org/paste/h069cKbPYUC3ixgVJIPVYw/raw  This is very low priority of course  
**\<sarang>** I need to think more about changes to any security properties by removing the hash and replacing with a sum in this way  
**\<knaccc>** yes, I'm sure it would need a thorough security analysis. That's why I was wondering specifically if people thought 38% was enough to bother looking into it  
**\<moneromooo>** To decide whether it's worth it, you'd need to give actual speedup, not speedup for a particular step.  
**\<smooth>** /win/win1  
**\<knaccc>** moneromooo true, I'm sure there are other factors that I'm not taking into account  
**\<sarang>** Seems the topics are winding down a bit, but interesting on all counts  
**\<sarang>** Well, thanks to all for attending today, and let's continue the discussions now that the meeting is formally concluded!  
**\<knaccc>** ^^  
**\<oneiric\_>** thanks everybody :)  
