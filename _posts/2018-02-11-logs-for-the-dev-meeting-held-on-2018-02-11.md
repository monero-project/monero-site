---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2018-02-11
summary: Discussion of open PRs and issues, Bulletproofs and auditing, March HF, slight PoW tweak, dedicated Monero hardware wallet, and miscellaneous
tags: [dev diaries, core, crypto]
author: dEBRUYNE / fluffypony
---

# Logs  

**\<rehrar>** ArticMine luigi1111 luigi1111w fluffypony smooth hyc moneromooo anonimal vtnerd pigeons endogenic ErCiccione  
**\<vtnerd>** present  
**\<ArticMine>** Hi  
**\<msvb-mob>** Hello.  
**\<ErCiccione>** hi folks  
**\<vtnerd>** jtgrassie  
**\<sgp>** Hi  
**\<rehrar>** Agenda: https://github.com/monero-project/meta/issues/174  
**\<rehrar>** Jaquee medusa dsc  
**\<rehrar>** kenshi84 MoroccanMalinois anyone else?  
**\<MoroccanMalinois>** hi  
**\<rehrar>** We've already kind of start on 1. Greetings  
**\<rehrar>** If you're still hanging out in the peanut gallery, throw a hello on by to us.  
**\<rehrar>** Heck, if you don't plan on participating, but just want to watch, we'd still appreciate a hello. :)  
**\<Vespco>** Hello  
**\<endogenic>** hello  
**\<endogenic>** this is dog  
**\<rehrar>** As you guys probably see, it's not 17 UTC. We're trying out an hour earlier by request of last meeting. We can decide today whether it was a good idea or not.  
**\<pigeons>** hi  
**\<rehrar>** suraeNoether sarang  
**\<rehrar>** 2. Brief review of what's been completed since the previous meeting  
**\<rehrar>** Anyone have anything to report?  
**\<moneromooo>** DB crash fix. Misc minor fixes found by coverity. Pool max size. Fluffy blocks on by default. I think that's the main ones.  
**\<moneromooo>** And I just PR'd my "store prunable and unprunable data separately" patch.  
**\<moneromooo>** Oh, and the --testnet-xxx options are gone now. No more duplication.  
**\<moneromooo>** None of that is merged yet, but nothing got merged in two weeks I think.  
**\<rehrar>** Thanks moneromooo! You are a shining star. Take a bow.  
**\<rehrar>** Anyone else have anything to report? If not we can move on.  
**\<moneromooo>** Not all by me.  
**\<vtnerd>** I guess I will report for jtgrassie, who looked at the echo off permanently issue with the wallet  
**\<rehrar>** a bow for your presentation ;)  
**\<vtnerd>** he has a fix that is similar to moneromooo 's patch, but does trigger immediate shutdown on ctrl-c still  
**\<luigi1111>** Does that need a resync?  
**\<vtnerd>** there are still underlying issues in the signal handler, and if I can't figure out a way to unbreak that code easily we may have to go with the somewhat-hack approach until that gets worked out  
**\<iDunk>** luigi1111: It will convert the db from v1 to v2, AFAIU.  
**\<moneromooo>** no resync  
**\<luigi1111>** Perfect  
**\<vtnerd>** and I'm still interested in wallet scanning perf (as usual), and figure out how to do atomic swapping ... if anyone has thoughts on the latter let me know privately for now  
**\<vtnerd>** or what this is the whats been completed section, whoops  
**\<endogenic>** i have a question for later rehrar  
**\<rehrar>** ok  
**\<rehrar>** Alright, we ready to push forward?  
**\<sarang>** Hullo, sorry for delay, was filing taxes :/  
**\<rehrar>** Any dev stuff to report for the last two weeks?  
**\<rehrar>** sarang \^  
**\<sarang>** It's just about the most fun you can have while still wearing pants  
**\<sarang>** Yes, a few quick thing  
**\<sarang>** The BP paper was massively updated to reflect a lot of the optimizations we've been including  
**\<sarang>** I'm running final checks against that paper (and made a few corrections to the updated paper that have been sent to the authors)  
**\<moneromooo>** Oh good point, I forgot about more BP stuff ^\_^  
**\<sarang>** I had also worked up a BP technical note, but the paper update makes that obsolete  
**\<endogenic>** mooo same  
**\<sarang>** However,  I think we've made all the optimizations that we want  
**\<sarang>** On the audit front, OSTIF groups are slow to provide SoW but apparently that's happening early this week  
**\<sarang>** Benedikt Buenz (BP author) wants to review as well  
**\<sarang>** Thoughts on how much to offer Benedikt?  
**\<sarang>** Having both him and an audit group review will be good: he'll confirm our math, and the audit group will check our final code for holes  
**\<rehrar>** Make him an offer he can't refuse  
**\<sarang>** lol  
**\<sgp>** I don't really know what the right amount is  
**\<endogenic>** no pony heads though pls  
**\<sarang>** I'm thinking a rate of 800 USD per day would be competitive if it only takes him \~5 days or so  
**\<sarang>** He's the most qualified person to do this  
**\<endogenic>** then that's cheap  
**\<endogenic>** we're lucky  
**\<ErCiccione>** that's less than i expected  
**\<sarang>** Yeah, I'd go higher if no objections  
**\<sarang>** I asked what his rate is, and am waiting to hear back  
**\<ArticMine>** It is on the low end  
**\<endogenic>** well ErCiccione do keep in mind we benefit from addtl reviewers  
**\<endogenic>** so frugality is useful there  
**\<rehrar>** 20 XMR bam  
**\<sarang>** So I'll do a combined FFS once we've confirmed the OSTIF rate and Benedikt's rate  
**\<endogenic>** thanks sarang :)  
**\<sarang>** Separarely, I've been working with suraeNoether on some multisig developments from BPASE  
**\<sarang>** curriculum development for 3-week summer course  
**\<sarang>** Will be speaking at a Portland crypto conference about privacy (funded by the organizers, no FFS needed)  
**\<sarang>** and the paper on PHANTOM (related to SPECTRE) just came out, so I'm on top of that  
**\* sarang** is done talking now  
**\<rehrar>** woohoo, sounds awesome  
**\<sarang>** questions welcome  
**\<endogenic>** awesome  
**\<sarang>** read the new BP paper if it interests you  
**\<rehrar>** alright let's jump into the big one: 3. March hardfork items + code freeze  
**\<rehrar>** So... code freeze has been "close" for a couple months now  
**\<rehrar>** when is it? :P  
**\<moneromooo>** When we pushed all we need,  
**\<moneromooo>** We need pony back, so we can't discuss this if we don't know that.  
**\<moneromooo>** One thing we need to discuss before we do though:  
**\<moneromooo>** We discussed changing PoW slightly, and periodically, in order to further our goal of decentralization - to deter ASIC creation some more.  
**\<moneromooo>** So we're planning to change PoW before the fork, if the community agrees.  
**\<rehrar>** before March?  
**\<moneromooo>** Yes. We're still planning on a march fork.  
**\<pigeons>** i would expect changing the PoW before this fork to be at least slightly controversial  
**\<rehrar>** This seems a bit sudden and soon  
**\<moneromooo>** Emphasis on *slightly* btw. It's still mostly Cryptonight.  
**\<rehrar>** ah, makes more sense  
**\<sgp>** I would like to hear a lot more about the changes and what they mean  
**\<rehrar>** \^  
**\<rehrar>** can you explain moneromooo?  
**\<endogenic>** what deters ASICs?  
**\<ErCiccione>** sgp: +1  
**\<iDunk>** Is this about the parameters tweaks othe suggested ?  
**\<pigeons>** endogenic: having the work and investment they put in invalidated  
**\<moneromooo>** Just a few more simple ops in the inner loop. They mean... different hashes.  
**\<endogenic>** pigeons: how to detect their work?  
**\<ArticMine>** It keeps ASIC developers off balance  
**\<endogenic>** or what is it :p  
**\<moneromooo>** endogenic: it doesn't need to. I have patches for most miners ready.  
**\<moneromooo>** Those (software) miners just update. Any ASIC can't.  
**\<endogenic>** even if it's modular?  
**\<moneromooo>** What is a modular ASIC ?  
**\<endogenic>** it -> asic  
**\<msvb-mob>** pigeons moneromooo: We in the hardware team are onboard with PoW changes but cannot recall all hardware wallets worldwide to swap chips.  
**\<endogenic>** modular hardware  
**\<moneromooo>** You have hardware mining ?  
**\<pigeons>** msvb-mob: I wouldn't expect hardware wallets to need to mine or validate PoW  
**\<msvb-mob>** Not to make the debate a can of worms, but if anybody has a strategy idea for us hardware folks, let's please consider the probloem offline.  
**\<pigeons>** just sign i would think  
**\<rehrar>** msvb-mob, why does a hardware wallet need to do anything with PoW?  
**\<msvb-mob>** pigeons: Okay, but changing the Cryptonote PoW wouldn't that mean changing transaction operations as well?  
**\<moneromooo>** No.  
**\<pigeons>** transactions don't use PoW  
**\<pigeons>** bundling them in blocks do  
**\<msvb-mob>** pigeons rehrar moneromooo: Okay, that's the answer I wanted to hear, thanks.  
**\<rehrar>** you sign the tx and broadcast them to the network, then the miners (separate entities) mine and put them in blocks  
**\<rehrar>** so you're good, unaffected :)  
**\<rehrar>** well then, it seems we don't have a lot to discuss on point 3 without the horsey  
**\<rehrar>** seeing as how Core Team has more or less delegated to him to handle releases and stuff  
**\<rehrar>** though I hope he may show up soon, as....it's getting close to March  
**\<rehrar>** Any final thoughts on 3?  
**\<endogenic>** we could just ask him lol  
**\<endogenic>** that usually works  
**\<moneromooo>** I did. It didn't.  
**\<endogenic>** "we" :p  
**\<luigi1111>** He should be home by now  
**\<moneromooo>** Might still think 5 GMT though.  
**\<endogenic>** fluffypony:  
**\<rehrar>** I let him know yesterday about the time change  
**\<moneromooo>** Did he reply ? He's been mostly AFK for days.  
**\<rehrar>** and he responded. Got the message.  
**\<rehrar>** "ok cool"  
**\<rehrar>** we can break that down and analyze that sentence if we want  
**\<rehrar>** Alright, maybe he'll show up and we can come back to this  
**\<rehrar>** meantime, let's move on to 4. Code + ticket discussion / Q & A  
**\<endogenic>** ooh me me  
**\<rehrar>** go endogenic  
**\<endogenic>** no sorry my mistake  
**\<endogenic>** ticket discussion first?  
**\<endogenic>** i would step on that otherwise  
**\<rehrar>** yeah, if you don't mind. Next is 'any other meeting items'  
**\<rehrar>** and you can go crazy there :)  
**\<endogenic>** well i thought it was q&a but yeah  
**\<rehrar>** ah, I see. I thought it was unrelated.  
**\<rehrar>** *shrug* for lack of other people piping up with discussion, go ahead  
**\<endogenic>** hah ok  
**\<endogenic>** so i want to beef up our code review capabilities  
**\<endogenic>** the reason is that i found some code got merged without it really having been verified  
**\<endogenic>** which in some cases is necessary  
**\<endogenic>** i mean it's not in everyone's interest to verify every single special case code branch  
**\<endogenic>** except  
**\<endogenic>** when it becomes a problem for the codebase  
**\<endogenic>** problem is  
**\<endogenic>** we cant just say "who is the best reviewer... vtnerd... you are now responsible for reviewing all code"  
**\<endogenic>** first no one man can take responsibility for that  
**\<endogenic>** for everyone  
**\<endogenic>** second what if something happens .. bus effect etc  
**\<endogenic>** so i wanted to ask. can we figure out a system for this? like sarang's work but we must understand imho he has to be involved to vet the vetter  
**\<endogenic>** or it would be the blind leading the blind  
**\<endogenic>** in a manner of speaking  
**\<moneromooo>** You just need people to review, don't you. So review, or find people to review.  
**\<endogenic>** no  
**\<moneromooo>** To the first part ?  
**\<rehrar>** It's tough on an open source project. People do many stuff in their free time and aren't getting paid. Perhaps it would be beneficial to get an FFS proposal by some volunteer coders (two or three) to review all PRs?  
**\<endogenic>** basically. but to both... it is not able to be the solution  
**\<ErCiccione>** i think the problem here is the same the GUI has. We need more people...  
**\<endogenic>** we have people  
**\<endogenic>** they exist  
**\<endogenic>** do they have the incentives?  
**\<rehrar>** this is true  
**\<endogenic>** rehrar sort of in that direction  
**\<endogenic>** but there needs to be a mediator who is technically qualified imo  
**\<endogenic>** and there are other problems  
**\<endogenic>** vtnerd just pinged me privately with one  
**\<endogenic>** imo we have to sort of standardize the effort  
**\<endogenic>** working group?  
**\<endogenic>** that's one part  
**\<vtnerd>** whoa, standardize? not something I would make claims to. I've never seen an effective way to do that  
**\<endogenic>** that's not what i mean  
**\<rehrar>** what we also need to realize and people and incentives, is that throwing money at people doesn't always make them want to do something  
**\<rehrar>** If they work full time, they may not want to come home and be obligated to continue working (as opposed to contributing when they want)  
**\<endogenic>** we ourselves already have the right incentives  
**\<endogenic>** but disinterested parties may just gloss over lines of code  
**\<endogenic>** which look innocent  
**\<endogenic>** when i say standardize i mean we should take the fact that such problems exist and make them visible to the community  
**\<vtnerd>** ahh ok, interesting.  
**\<rehrar>** Well, there is a Skepticism Sunday going on right now  
**\<endogenic>** no  
**\<endogenic>** we want a working group with a document of problems that happen such as what i mentioned above  
**\<rehrar>** Ah, I see.  
**\<rehrar>** Would you be willing to head this group then?  
**\<endogenic>** i cant rn  
**\<rehrar>** Well, you and I can talk later after the meeting, and I'll see what I can do.  
**\<endogenic>** vtnerd might be  
**\<endogenic>** he is an expert  
**\<rehrar>** I'll be down to give whatever help I can to whoever heads up this group.  
**\<endogenic>** and he\*  
**\<endogenic>** i appreciate that :)  
**\<rehrar>** I think everyone agrees that more thorough review of the code can only be a good thing, it's just a matter of people, time, and actually getting it done  
**\<rehrar>** Alright, msvb-mob wanted some time for a few hardware things if that's ok with everyone.  
**\<msvb-mob>** Yes please, but just short.  
**\<rehrar>** floor is yours  
**\<msvb-mob>** I'll be advertising planning work for the Las Vegas events of August once in a while, anyone interested can look at:  
**\<msvb-mob>** https://taiga.getmonero.org/project/michael-vegas-august-2018  
**\<msvb-mob>** m2049r[m] made a more or less incredible contribution to the greater Monero community by a first release (today) of a Monerujo-hw firmware.  
**\<msvb-mob>** https://github.com/m2049r/monerujo-hw/  
**\<rehrar>** woohoo!  
**\<msvb-mob>** We want to do the most we can with the firmware (on our own self grown hardware) and a few questions are arising about how far we can take a testnet approach to new users.  
**\<msvb-mob>** New hardware users, that is. Since we can't recommend using the wallet for real funds.  
**\<msvb-mob>** So if it would be okay to recommend trading testnet funds for a free t-shirt at events, for example.  
**\<msvb-mob>** The last question on my agenda, is if anybody knows of the chance to insert a hardware wallet request to the group making videos (Savandra.)  
**\<msvb-mob>** That's all for me.  
**\<msvb-mob>** fluffypony focused discussion on a vulnerability mitigation group last meeting, is that a topic we want to follow up on?  
**\<ArticMine>** Yes  
**\<msvb-mob>** ArticMine: Yes to which question?  
**\<ArticMine>** To the vulnerability mitigation group  
**\<rehrar>** As far as I know, savandra's last video is focusing on the community and that ends his FFS. We can ask him if he'd be willing to do another FFS to make another video for Hardware.  
**\<rehrar>** alright, any last minute meeting items?  
**\<rehrar>** alright, next meeting time  
**\<moneromooo>** No talk about the vulnerability mitigation group ?  
**\<rehrar>** oh, sorry. I may have misread all that  
**\<rehrar>** I thought it was a simple question/answer  
**\<rehrar>** To follow up on that topic, the Vulnerabliity Mitigation Group is headed by sgp and is on mattermost  
**\<moneromooo>** What does this do ?  
**\<rehrar>** sgp, you around?  
**\<moneromooo>** Try to devise workarounds till a fix is in, etc ?  
**\<sgp>** Yeah, but are you sure this is the same? Ours is the "malware response workgroup"  
**\<rehrar>** I think....this is the same, yes.  
**\<rehrar>** But....maybe not? :P  
**\<ArticMine>** It is a different issue  
**\<rehrar>** then disregard me completely  
**\<rehrar>** who is qualified to speak on that?  
**\<msvb-mob>** sgp: The 'malware response workgroup' is what I meant when contorting the words above.  
**\<sgp>** The scope of "my" workgroup is to help those whose computers have been exploited for mining or ransomware  
**\<msvb-mob>** sgp: Sounds like most primary things about the workgroup have been decided then, good work.  
**\<endogenic>** sgp: i've been curious about the personal network security consequences of operating a monero node too. would be nice to talk with you about that sometime  
**\<rehrar>** Alright. We're over the designated time. So let's confirm next day:  
**\<rehrar>** February 25th. Did this new time work for people?  
**\<rehrar>** we were short dEBRUYNE and gingeropolous today. :'(  
**\<rehrar>** but it may be for other reasons  
**\<rehrar>** We can keep 16 UTC for next meeting unless there are great objections.  
**\<rehrar>** If not, meeting over. :) Thanks everyone for coming.  
**\<ArticMine>** I would suggest also keeping it through the time changes  
**\<msvb-mob>** rehrar: Most excellent moderation, thank you.  
**\<sgp>** Not really meeting-worthy, but I would like to add the Monero Coffee Chats to the getmonero website  
**\<msvb-mob>** rehrar: If possible, would you please fork and pull request your source logos to the /documents/graphics/logo/ directory?  
**\<msvb-mob>** rehrar: Logo sources, as long as their formats are Opensource we don't need bitmaps.  
**\<rehrar>** Ok, I'll get to that as soon as I can  
**\<sgp>** Are people against me uploading compressed versions of the coffee chats to the site? Or are people concerned they will be too large  
**\<rehrar>** an hour is kind of long and would make having a fork on your local machine a big pain  
**\<rehrar>** especially as there will be more and more of them  
**\<rehrar>** Perhaps links would be better?  
**\<msvb-mob>** sgp: Same consideration we have with large promotional photos of PCBs, which don't belong in revision control for obvious reasons.  
**\<vtnerd>** articmine : canada does that crap too (arbitary timezone changes)?  
**\<vtnerd>** ahh they do too, I hate timezones altogether actually, as stated previously  
**\<sgp>** @rehrar does the website allow me to embed YouTube videos, or would I have to do a simple link?  
**\<ArticMine>** Different countries do it at different times in the year . Even within a country there a all sorts of differences  
**\<ArticMine>** So for something where there are people all over the world it is best to stick with one time at UTC  
**\<rehrar>** I don't see why not an embedded video  
**\<rehrar>** except that people with javascript shut down won't be able to see it  
**\<rehrar>** I think we should keep the website free from the necessity to turn on Javascript for anything, so I would advocate for a link, but that's just me.  