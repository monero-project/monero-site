---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2017-10-01
summary: Discussion of open PRs and issues, Monerujo Android wallet, MRL, Forum Funding System redesign, licensing, Monero & CCC (34C3), Purism, and miscellaneous
tags: [dev diaries, core, crypto]
author: dEBRUYNE / fluffypony
---

# Overview  

An overview can be found on [MoneroBase](https://monerobase.com/wiki/DevMeeting_2017-10-01).  

# Logs  

**\<rehrar>** Here's the agenda for today: https://github.com/monero-project/meta/issues/122  
**\<endogenic>** to get you present  
**\<rehrar>** 1. Greetings  
**\<DaveyJones>** vtnerd it's just so people that might be interested don't miss it on a lazy sunday ^ ^  
**\<vtnerd>** yeah, ok thats what I thought, so ahead of the game then  
**\<parasew[m]>** hi all!  
**\<rehrar>** heyo everyone!  
**\<endogenic>** naturally  
**\<tewinget>** I'm here-ish, but the only input I have is that the thing that's been taking up most of my time is finished now.  >**\_>**  
**\<msvb-lab>** Hello.  
**\<serhack>** hey  
**\<serhack>** Hi  
**\<rehrar>** Bit of a small crowd today, but that's fine.  
**\<rehrar>** 2. Brief review of what's been completed since the previous meeting  
**\<rehrar>** Anyone care to give an update?  
**\<parasew[m]>** haxx0r put a ruby-library online, its at https://github.com/krtschmr/monero ( i am helping also)  
**\<surae>** howdy  
**\<rehrar>** I don't see tons of activity in the repos, it could be that everyone is working on super secret projects?  
**\<john\_alan>** The MRL has been busy from the updates I read  
**\<john\_alan>** impressive stuff  
**\<john\_alan>** Any update there?  
**\<moneo>** hey guys, I started developing a small monero client, and stumbled upon a problem: trying to manually fetch some jobs with the getjob method, I only get empty jobs as a respond  
**\<surae>** MRL put out our 2nd quarter roadmap, Sarang and I are working in person together for the next few days. we are nearing completion on multisig paper, subaddress paper  
**\<surae>** sarang has been working on a new format for the MRL bulletin  
**\<moneo>** I'm querying xmrpool.net, an implementation from Snipa  
**\<rehrar>** moneo: we're in a dev meeting right now man, you're welcome to join. It ends in about an hour.  
**\<john\_alan>** \@surae sounds impressive, is that ruffCT multisig?  
**\<serhack>** monero integrations are going well  
**\<rehrar>** sarang if you need help with formatting, shoot me a message. I'm down to get involved  
**\<sarang>** rehrar I'll definitely do that  
**\<sarang>** It's basically down to proper author/affiliation format  
**\<ferretinjapan>** rehrar, o/  
**\<vtnerd>** I posted this in #monero-research-lab yesterday -\> https://gist.github.com/vtnerd/0337f7daf71b33d945a984171c478bca  
**\<vtnerd>** its a utility for comparing various wallet-scanning performance improvement techniques and crypto libs  
**\<moneo>** sorry rehrar, will ask later in that case.  
**\<vtnerd>** it was part for mymonero stuff, part for MRL info on using curve25519  
**\<surae>** vtnerd, you are absolutely awesome  
**\<bigreddmachine>** moneo -  try #monero-pools  
**\<rehrar>** no problem moneo, thanks for understanding  
**\<vtnerd>** the most interesting result is trying to get spend-public decompression into mainline - it should improve wallet performance without any crypto lib changes  
**\<vtnerd>** amd64-51-30k (crypto lib not in mainline) improves by ~12%, I will know shortly how much ref10 (monero mainline) improves with this technique  
**\<vtnerd>** unfortunately this would require a re-arrangement of code in src/crypto, but the changes should be easy to audit  
**\<vtnerd>** (the amd64-51-30k variant requires not changes to src/crypto)  
**\<surae>** what's interesting about that, is there is a non-linear trade-off in verification time and blockchain space  
**\<vtnerd>** and thats probabyl the end of relevant material for this meeting ...  
**\<surae>** that 12% improvement might allow us some non-trivial ring size boosts  
**\<vtnerd>** well the point de-compression is separate from curve25519  
**\<vtnerd>** so we could actually do both  
**\<surae>** yeesh  
**\<bigreddmachine>** vtnerd, I thought amd64-51-30k is built into both supercop and nacl, and that Monero uses supercop?  
**\<vtnerd>** basically for every output we currently decompress (y, xbit) into -\>(x,y,z,t)  
**\<vtnerd>** that only needs to be done once  
**\<vtnerd>** monero does not use supercop, its all embedded. its some re-arranged version of ref10 from supercop  
**\<bigreddmachine>** ahhh okay.  
**\<bigreddmachine>** so it selected pieces from supercop. makes sense.  
**\<vtnerd>** I have a PR which uses two amd64 variants from supercop with minimal changes (to work with position independent binaries)  
**\<vtnerd>** fluffypony created a separate repo for this to track changes to the crypto separate from our usage  
**\<bigreddmachine>** i see, thanks.  
**\<vtnerd>** so that PR needs updating to reflect that, plus this benchmark utility (with the curve25519 removed) will get rolled into that so users can determine which is faster on their machine easily  
**\<vtnerd>** oh! and curve25519 has neon implementations for arm ... so theres that too! probably just for hyc though haha  
**\<msvb-lab>** vtner: We're interested in MCU hardware implementations of dh25519 and curve25519 in case you come across any.  
**\<msvb-lab>** Fat chance though.  
**\<rehrar>** Thanks vtnerd! Anyone else have anything to report of the last couple of weeks?  
**\<sarang>** I put out my monthly report (less of a dev thing, more of a research update), and plan to post the subaddress paper today w/ surae once we have the formatting all purdy  
**\<sarang>** Also researching new developments in aggregate signatures  
**\<surae>** oh, sarang and I are experiencing trouble with the forums still  
**\<bigreddmachine>** Not something I did, but the Monerujo Android Wallet left beta. Anyone know if anyone's audited the codebase?  
**\<sarang>** Yes, true. After posting a comment to my original FFS post, it no longer works  
**\<surae>** makes it hard for funding posts, etc... and we were hoping that MRL could get a suite of e-mail addresses or something  
**\<endogenic>** hm i wonder if it's related to what just happened  
**\<parasew[m]>** surae:  sarang  - why not post to MRL github and then link it in /r/monero for now?  
**\<sarang>** I put the direct text into r/monero just now due to the FFS failure  
**\<parasew[m]>** the good thing about putting it into the github would be that people can subscribe and get research updates  
**\<sarang>** That's a good point  
**\<sarang>** surae ran his in r/monero in the same way  
**\<parasew[m]>** also there was a forum-update (or remake) planned, no?  
**\<rehrar>** Forum to be scrapped  
**\<rehrar>** FFS is going to be integrated into the site proper  
**\<rehrar>** you can get a preview at getmonero.org/forum-funding-system for how it's going to look  
**\<surae>** ok, we'll just keep pestering rehrar behidn the scenes  
**\<rehrar>** Serhack and I will be looking at getting that finished up hopefully in the next month  
**\<parasew[m]>** although it's technically not 'forum funding' anymore :)  
**\<rehrar>** Forum still works I think, based off the definition  
**\<msvb-lab>** Was down for a bit this week wasn't it?  
**\<sarang>** rehrar that new update looks extremely legit  
**\<serhack>** rehrar yeah!  
**\<parasew[m]>** austria monero workgroup can also help w site updates (@serhack, @rehrar)  
**\<sarang>** I just creamed my design pants looking at it =p  
**\<serhack>** great parasew[m]  
**\<rehrar>** I'll contact you parasew[m]  
**\<serhack>** I come to austria every year   
**\<sarang>** Maybe rename it something like "community funding system" to stress the group nature of it  
**\<rehrar>** Alright, can we move on to the next point? It may not take super long because of the absences, but we'll see. We'  
**\<parasew[m]>** sarang: very good idea imho, also points more to community efforts  
**\<rehrar>** Oops.  
**\<ArticMine>** I have an item https://github.com/monero-project/meta/issues/85  
**\<ArticMine>** Project licensing. This needs input from devs and the community  
**\<parasew[m]>** wow, this is a rather huge topic  
**\<ArticMine>** It is about informing So the conversation can take place in GitHub  
**\<rehrar>** Thanks ArticMine. Super important for sure.  
**\<sarang>** fluffypony brings up a good point about relicensing and the work it takes to contact contributors  
**\<ArticMine>** That is one of the issues  
**\<moneromooo>** There is no relicensing AFAIK.  
**\<moneromooo>** LMDB itself is relicensing. Not monero.  
**\<ArticMine>** But it impact Monero  
**\<moneromooo>** And monero can use the same licence as it used before.  
**\<rehrar>** Right, so the conversation has since turned into a couple different questions:  
**\<rehrar>** 1. Should Monero relicense to a dual license?  
**\<rehrar>** 2. Should Monero have dependencies that are not completely permissive  
**\<sarang>** ah ok  
**\<rehrar>** as is my understanding anyway  
**\<moneromooo>** 2 is leading.  
**\<sarang>** So the LMDB switch would not require contacting contribs?  
**\<ArticMine>** It is more complex than that, if the dependencies affect consensus code  
**\<rehrar>** ah yes. Good clarification ArticMine. Sorry about that.  
**\<ArticMine>** This is a critcal part of smooth's concerns  
**\<ArticMine>** Way to complex to deal with here  
**\<rehrar>** Right, so give it a read if you haven't already and make your opinion known. :)  
**\<rehrar>** Let's move on to: Code + ticket discussion / Q & A  
**\<ArticMine>** exactly  
**\<rehrar>** Again, with not so many people around, this may not be a huge topic of discussion, but it's there if someone wants to discuss something.  
**\<rehrar>** No? Alright. Then we can move on to the next point: Purism integration  
**\<rehrar>** This is something that's happened recently that's very exciting that I wanted to share with you all and get dev opinions on.  
**\<rehrar>** for those who don't know, https://puri.sm is a company that sells open source laptops (hardware and software) and is currently doing a crowdfunding campaign for mobile phones also  
**\<rehrar>** a member of the Reddit community contacted them asking if they would accept Monero for their goods (they accept BTC now)  
**\<rehrar>** and they were pretty enthusiastic about the idea. I followed up with them, and spoke with the founder and CEO, Todd, and had a video conference with him  
**\<xmrmatterbridge> \<sgp>** Awesome!  
**\<rehrar>** he is not only interested in accepting Monero for their laptops and phones, but also integrating Monero into their Debian based operating system (PureOS) by default  
**\<endogenic>** nice  
**\<rehrar>** we spoke at length about different cryptos, and he believes that Monero aligns the closest with Purism beliefs of digital privacy rights  
**\<parasew[m]>** very nice!  
**\<rehrar>** He also says that many of his devs also push to Debian, so he had discussed with me that if they integate Monero into PureOS, they would see about trying to push into Debian as well  
**\<ArticMine>** This is excellent. The one thing to watch is that Monero as a software dependency can become stale real fast  
**\<ArticMine>** So we have to work very closely with out downstream on this  
**\<endogenic>** that's a great point  
**\<ferretinjapan>** sweet!  
**\<rehrar>** Yes, I've spoken with ArticMine about these things, and have since emailed Todd about the concerns. Waiting to hear back from him.  
**\<rehrar>** Sometime soon he is hoping to make a Purism press release about the Monero integration. I'll be helping with that, so be looking out for it.  
**\<rehrar>** It would be helpful from anyone in the community with PureOS to test the Monero GUI on it and see if there's any issues.  
**\<rehrar>** https://pureos.net/  
**\<ArticMine>** Unfortunately I have to leave early today  
**\<sarang>** This is a great development  
**\<rehrar>** Bye ArticMine! Thanks.  
**\<bigreddmachine>** rehrar, i'll try to spin up a VM with pureos this week and let you know how it goes.  
**\<rehrar>** Thanks bigreddmachine!  
**\<rehrar>** Their mobile offering is still more than half a year away (it's being crowdfunded right now)  
**\<rehrar>** but atm our GUI is (As far as I understand it) functional on mobile phones, but not optimized for it.  
**\<rehrar>** But that's for Android, right?  
**\<rehrar>** (their phones will also have PureOS)  
**\<moneromooo>** That answers why they didn't use Qubes...  
**\<rehrar>** Qubes is 'partnered' with them and guaranteed to work on their systems  
**\<rehrar>** https://www.qubes-os.org/news/2015/12/09/purism-partnership/  
**\<unknownids>** if you order from them you can choose a USB with qubes on it  
**\<rehrar>** well, one of their systems anyways  
**\<timothy>** qubes is "strange"  
**\<timothy>** it stil uses xen  
**\<rehrar>** Well, that's all from me about that. If anyone has any other things to say about it, we can discuss it after. Let's wrap up. :)  
**\<rehrar>** 5. Any additional meeting items  
**\<rehrar>** I'll leave this open for a couple of minutes.  
**\<bigreddmachine>** anyone know how many eyes have looked at monerujo? wondering if it's been audited or anything, as I've seen people start recommending it  
**\<moneromooo>** Probably an even number.  
**\<parasew[m]>** just as a final note: 2 events in december - "Monero Month" in Vienna with the preparations of ccc and monero meetup, monero vienna workgroup ( seperately discussed in #monero-ccc )  
**\<bigreddmachine>** :)  
**\<parasew[m]>** and CCC itself: we need a prototype programm for the 34C3, planned is to create a joint larger meta-assemby with bitcoin-assembly and riat-assembly.  
**\<parasew[m]>** if anyone cares to help plan, etc. also in #monero-ccc  
**\<moneromooo>** If anyone want to test the multisig stuff, feel free. It's about a half dozen PRs from the earliest one on github.  
**\<moneromooo>** Or review.  
**\<msvb-lab>** bigreddmachine: Monerujo is available on the Google Play Store, since this week I think.  
**\<bigreddmachine>** msvb-lab, yes, I know  
**\<msvb-lab>** That's probably why you're asking. I have the same curiosity in any case.  
**\<xmrmatterbridge> \<sgp>** Can we have all the IRC channels relayed to Mattermost? Only a handful are  
**\<rehrar>** What other channels do you want?  
**\<dEBRUYNE>** \<rehrar> But that's for Android, right? \<= iOS too and we can probably make it work with other operating systems.  
**\<rehrar>** Awesome dEBRUYNE! Thanks. :)  
**\<rehrar>** Alright we need to wrap up.  
**\<rehrar>** 6. Confirm next meeting date/time  
**\<xmrmatterbridge> \<sgp>** @rehrar I made a list on Taiga. Can't remember on the top of my head  
**\<rehrar>** October 15th, same time?  
**\<rehrar>** ok, thanks sgp  
**\<rehrar>** Ok. That's it guys. Thanks so much! :) Have a good weekend. No Kovri meeting (they're moving to Fridays)  