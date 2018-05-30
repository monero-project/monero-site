---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2017-09-17
summary: Discussion of open PRs and issues, release schedule, 0MQ, multisig, 0MQ, unit testing, luigi1111 as maintainer, MyMonero, MRL, and miscellaneous
tags: [dev diaries, core, crypto]
author: dEBRUYNE / fluffypony
---

# Overview  

An overview can be found on [MoneroBase](https://monerobase.com/wiki/DevMeeting_2017-09-17).  

# Logs  

**\<fluffypony>** 1. Greetings  
**\<fluffypony>** 2. Brief review of what's been completed since the previous meeting  
**\<fluffypony>** 3. Code + ticket discussion / Q & A  
**\<fluffypony>** 4. Release timeline: moving releases to 3-months-before-forks or similar  
**\<fluffypony>** 5. Maintainer: migrating luigi1111 from backup maintainer to lead maintainer on GUI and site  
**\<fluffypony>** 5. Any additional meeting items  
**\<fluffypony>** 6. Confirm next meeting date/time  
**\<fluffypony>** let's start with 1  
**\<serhack>** Hi  
**\<hrumag>** Hi  
**\<shillosopher>** o/  
**\<rbrunner7>** Grüezi  
**\<rehrar>** Yo  
**\<i2p-relay> {-lightfighter}** hola  
**\<imheretolearn>** hola  
**\<msvb-lab>** hello  
**\<sarang>** yo  
**\<surae>** guten tag  
**\<luigi1111>** Oh hai  
**\<imheretolearn>** ni hao  
**\<hyc>** hi  
**\<fluffypony>** ArticMine / othe / smooth / moneromooo / tewinget / anonimal / endogenic / gingeropolous / iDunk / JacobJeweler / kenshi84 / knaccc / MoroccanMalinoi- / NoodleDoodle / papa\_lazzarou / wallet42 / vtnerd\_ / anyone I forgot  
**\<ArticMine>** Greetings  
**\<iDunk>** o/  
**\<moneromooo>** You forgot fluffypony in that list.  
**\<fluffypony>** lol  
**\<surae>** 22nd century historians are going to have a hell of a time writing books on the birth of cryptocurrency.  
**\<moroccanmalinois>** Hi  
**\<fluffypony>** pigeons sends his apologies, he let me know yesterday that he wouldn't make today's meeting  
**\<fluffypony>** so anything that is wrong we can comfortably blame on him  
**\<fluffypony>** since he isn't here to defend himself :-P  
**\<fluffypony>** ok  
**\<fluffypony>** let's move on to 2  
**\<fluffypony>** so not much has happened since the last meeting  
**\<fluffypony>** a release or something  
**\<fluffypony>** nothing major  
**\<surae>** heh  
**\<hyc>** I heard we spawned XMRclassic  
**\<fluffypony>** Monero ABC  
**\<surae>** i used XMRcash at a coffee shop, but my card was declined :(  
**\<fluffypony>** inb4 XCash  
**\<fluffypony>** on the topic of the release, and now is as good a time to talk about it as any  
**\<hyc>** oooo, I like that one  
**\<fluffypony>** as you may (or may not) have noticed this release was a little rockier than we'd hoped  
**\<rbrunner7>** Yeah  
**\<fluffypony>** we've known for a while that our testing horizons are too close  
**\<fluffypony>** a little while ago smooth suggested having MUCH further horizons and sunsets, which I tend to agree with  
**\<surae>** what are the thoughts on modifying that, then?  
**\<fluffypony>** so what we'd like to do moving forward is work our horizons of a 6 month schedule, offset from the hard forks by 3 months  
**\<fluffypony>** in other words  
**\<fluffypony>** hard forks happen March and September  
**\<fluffypony>** and code freezes happen mid-June and mid-December  
**\<fluffypony>** so practically let's look at the next year as an example  
**\<ArticMine>** ... but will we follow the code freezes?  
**\<fluffypony>** we have 3 months from now to put stuff in the code, and then we code-freeze in mid-December  
**\<imheretolearn>** will a 3 month code freeze have a side effect of slowing development?  
**\<fluffypony>** that means we branch in mid-December  
**\<serhack>** Okay and then a new release?  
**\<hrumag>** You could follow the timeline used bu ubuntu  
**\<hrumag>** by\*  
**\<fluffypony>** from mid-December we have some time to test, fix bugs, get the branch stable  
**\<fluffypony>** (and port fixes to and from master)  
**\<fluffypony>** with a view to tagging a release as soon as we think there's some stability  
**\<moneromooo>** 3 months seems maybe a bit large, but let's try it. I'm curious to see how much of a pita it'll be to have to branches.  
**\<moneromooo>** to have 2  
**\<fluffypony>** the nice thing is that the release CAN have bugs, because not everyone will upgrade until closer to the hard fork  
**\<fluffypony>** and so subsequent releases can patch bugs  
**\<serhack>** Seems good idea fluffypony  
**\<sarang>** agreed  
**\<moneromooo>** The only thing is that it only leaves 3 months to get range proof changes in... :/  
**\<fluffypony>** it also means we can have loads of small point releases up to the hard fork, because there isn't much that changes except bug fixes  
**\<moneromooo>** or 9. or 12.  
**\<hrumag>** I totally agree with fluffy  
**\<fluffypony>** moneromooo: if we don't hit the mid-December target then leave it for the next one, we have 6 months thereafter  
**\<luigi1111>** 3 months seems fine to me. The release can be out a while before the fork with no negatives really  
**\<fluffypony>** yeah exactly  
**\<luigi1111>** Besides maybe some delay in new features  
**\<fluffypony>** and it means that for 3-ish months the network is running both stable and newer versions  
**\<ArticMine>** It is a way safer approach  
**\<hrumag>** https://wiki.ubuntu.com/ArtfulAardvark/ReleaseSchedule if it can help  
**\<fluffypony>** most exchanges / pools will stick to the previous stable release  
**\<luigi1111>** Mooo we'll just have to get it done by December then:)  
**\<fluffypony>** some brave ones will upgrade early  
**\<moneromooo>** ^\_^  
**\<luigi1111>** Since like, ms is working and such  
**\<moneromooo>** -\_-  
**\<fluffypony>** the real issue is that we have to decide on a new release name within the next 3 months  
**\<fluffypony>** :-P  
**\<knaccc>** Iridium Iris  
**\<hyc>** Lithim lizard  
**\<hyc>** lithium  
**\<fluffypony>** also as pointed out this will mean that some features take a lot longer to go live in the mainnet codebase than we might hope (emergency patches / forks aside)  
**\<surae>** hypothetical helicopter?  
**\<fluffypony>** so it means we're going to have to be patient when things don't progress as rapidly as we'd like  
**\<fluffypony>** we *can* happily deploy stuff on testnet, we've had to do massive reorgs on testnet before and it handled it just fine  
**\* dEBRUYNE** grabs torches and pitchforks  
**\<fluffypony>** and iirc Snipa had some experience setting up a mini closed testnet  
**\<luigi1111>** I don't really think 2 ish months is "a lotc  
**\<msvb-lab>** Dumb question, what's the name of the current 0.11 release?  
**\<luigi1111>** "lot"  
**\<fluffypony>** msvb-lab: Helium Hydra  
**\<surae>** oh so hypothetical helicotper is right out.  :( too bad we missed the possibility for Gluttonous Ganesh?  
**\<fluffypony>** aka Hail Hydra  
**\<msvb-lab>** hyc: Then lithium wouldn't work would it? It doesn't start with 'I'.  
**\<sarang>** Irritable Ibex  
**\<imheretolearn>** i agrree knaccc iridium iris  
**\<hyc>** private testnets are easy, just takes 2 nodes pointed at each other --add-exclusive-node  
**\<fluffypony>** yarp  
**\<hyc>** release names aren't alphabetical, they're elements. periodic table.  
**\<fluffypony>** ^^  
**\<fluffypony>** there's a release naming doc in the meta repo  
**\<imheretolearn>** iridium iris will have range proofs improvements, larger ring size multi sig and encrypted payment ids. major release  
**\<luigi1111>** Ugh stop talking about release names  
**\<moneromooo>** \^  
**\<moneromooo>** Get on with it :D  
**\<fluffypony>** let's move on  
**\<fluffypony>** 3. Code + ticket discussion / Q & A  
**\<fluffypony>** I'd like to start merging in the big PRs that have been hanging around  
**\<hyc>** there's still a good number of PRs that could be merged soon. should we be planning a point release in the next month or two?  
**\<fluffypony>** sub-addresses, multisig, 0MQ, etc.  
**\<fluffypony>** hyc: yes - I had to first merge the PRs that were already merged in the branch, which I finished a couple of days ago  
**\<moneromooo>** For the record: multisig is not ready yet. It's got a DO NOT MERGE sign.  
**\<fluffypony>** ok  
**\<fluffypony>** moneromooo: is it waiting on code or MRL stuff?  
**\<luigi1111>** yes  
**\<knaccc>** I just wanted to point out, in case it had slipped through the cracks, that kenshi84 has partially implemented subaddresses in the GUI but there are wireframe mockups he wasn't able to implement because he's not used Qt much before. The mockups suggested to be implemented are here https://github.com/monero-project/monero-core/pull/793#issuecomment-314477091  
**\<moneromooo>** It's waiting on me making core tests for it, and cleaning up.  
**\<moneromooo>** And the core tests are a massive pita.  
**\<fluffypony>** moneromooo: ok cool  
**\<fluffypony>** moneromooo: is it worth looking at a different test framework?  
**\<luigi1111>** all of these things are not forking, so could be added whenever  
**\<moneromooo>** Not really, core tests are great, powerful, and I love them. I also hate them.  
**\<moneromooo>** Once they work, they're really great.  
**\<fluffypony>** knaccc: ok cool, hopefully someone can pick that work up  
**\<luigi1111>** n-1 only recently started working, so I assume it needs some testing etc  
**\<surae>** sarang and i are nearing completion on both the multisig paper, which requires new security definitions, and the sub-address paper (and that scheme looks pretty good!). the multisig stuff, if you held a gun to my head, i would say is secure, but until the proofs are written up, i don't want to say anything about it definitively  
**\<fluffypony>** knaccc: else if we need to find a QtQuick developer and pay them we can afford to do so  
**\<hyc>** so should we continue to PR to the release branch in addition to master?  
**\<surae>** we anticipate both of those papers to be done as MRL bulletins by end of November.  
**\<moneromooo>** I hope not.  
**\<fluffypony>** hyc: no  
**\<fluffypony>** release branch is for bug fixes only  
**\<fluffypony>** surae: ok great  
**\<hyc>** ok  
**\<i2p-relay> {-lightfighter}** is there a README for writing new tests? if not could one be added?  
**\<moneromooo>** No. Sure.  
**\<fluffypony>** @lightfighter no there isn't, but it's something you could tackle if you're up for it  
**\<fluffypony>** on the topic of tests  
**\<moneromooo>** But really, I start from an existing one.  
**\<fluffypony>** if anyone is unfamiliar with the codebase and wants to learn, adding tests is literally the best way  
**\<fluffypony>** there are tons of things that lack unit tests  
**\<moneromooo>** Unit tests are very easy to add.  
**\<fluffypony>** need moar test coverage plx  
**\<surae>** unit tests are. so. freaking. helpful.  
**\<moneromooo>** Though they might need API changes to expose bits and bobs.  
**\<hyc>** in that regard, might be nice to appoint a release/test manager, responsible to either run tests or collect test results from the community  
**\<fluffypony>** hyc: good idea  
**\<parasew>** will definitely start implementing tests, its in a way comforting :)  
**\<fluffypony>** I wonder if we couldn't build a little web API that people could submit test results to  
**\<i2p-relay> {-lightfighter}** fluffypony: i'd be happy to start working on test docs. is the GTest primer a good place to start?  
**\<moneromooo>** https://github.com/monero-project/monero/issues ?  
**\<vtnerd>** boost has some such framework, but I dont know much about it  
**\<parasew>** on another note: in the current gui-release, the mining has issues -- other people also reported at monero meetup.  
**\<vtnerd>** various members run machines on various processors / platforms  
**\<i2p-relay> {-lightfighter}** also agree that writing tests is best way to learn codebase (my main motivation for doing so)  
**\<fluffypony>** parasew: then they must open an issue on GitHub  
**\<dEBRUYNE>** parasew: Already reported on monero-core github repository  
**\<parasew>** fluffypony ofc, will pass that on.  
**\<parasew>** dEBRUYNE which issue?  
**\<dEBRUYNE>** https://github.com/monero-project/monero-core/issues/877  
**\<parasew>** dEBRUYNE ty, will also have a look!  
**\<fluffypony>** let's give some thought to a reportable web API that can collate test results, we'll figure out a nice way of doing it  
**\<hyc>** a web tool sounds like a great idea. I don't know of one at the moment.  
**\<dEBRUYNE>** hyc: for the GUI release I created a reddit thread with buildbot bins and compiling instructions  
**\<dEBRUYNE>** Subsequently I put up all reports on Github  
**\<dEBRUYNE>** But it'd be preferable if we have a more streamlined process  
**\<hyc>** indeed  
**\<dEBRUYNE>** (to report issues that is)  
**\<fluffypony>** agreed  
**\<rehrar>** Will look into it  
**\<fluffypony>** we'd probably have to roll our own tool for this, let's see  
**\<moneromooo>** Anyone who knows about DNS/DNSSEC btw ? We need to fix how we do that apparently, but I know nothing aobut DNS :/  
**\<moneromooo>** Thoise are the failing unit tests.  
**\<dEBRUYNE>** I suppose though that if we'd create something like that someone still has to create issues on github  
**\<surae>** sarang? know anything about DNS?  
**\<hyc>** DNSSEC in particular  
**\<sarang>** Protocol? Some. Implementations? Negatory  
**\<hyc>** we need to find out why libunbound is complaining now  
**\<moneromooo>** The complaint's likely unrelated, and due to the openssl config.  
**\<moneromooo>** (assuming you mean the "invalid algorithm" or so)  
**\<fluffypony>** could be openssl related  
**\<hyc>** yes. I've only hit that in the past with a crippled Android libssl  
**\<hyc>** so I'm surprised to see it on an up-to-date desktop build  
**\<fluffypony>** I'm also open to dumping unbound in favour of another library  
**\<fluffypony>** we literally only use it for DNS / DNSSEC  
**\<moneromooo>** Guess I'll have a look to see what libraries there are for this.  
**\<parasew>** is there an irc log online somewhere? (i came a bit late)  
**\<fluffypony>** ok let's do that, Unbound has been a PITA for a while  
**\<moneromooo>** Or... leave it till someone who knows about DNS pops in...  
**\<fluffypony>** parasew: it'll be posted up after  
**\<surae>** parasew the minutes will be posted after the meeting  
**\<fluffypony>** ok let's move on  
**\<serhack>** ;)  
**\<parasew>** thanka fluffypony, surae i just wanted to catch up now, but its ok :(  
**\<fluffypony>** 4. Release timeline: moving releases to 3-months-before-forks or similar  
**\<fluffypony>** we already covered that  
**\<fluffypony>** so moving on  
**\<fluffypony>** 5. Maintainer: migrating luigi1111 from backup maintainer to lead maintainer on GUI and site  
**\<moneromooo>** Does he agree to ? :)  
**\<fluffypony>** well, moneromooo, luigi1111 has gone full-time crypto since he's made millions from the Monero ICO  
**\<dEBRUYNE>** No we forced him :P  
**\<hyc>** lol  
**\<fluffypony>** so he can merge from atop the mountain in his Lambo  
**\<surae>** i hear Lambos work real great on mountains  
**\<rehrar>** Congrats Luigi. An example to us all.  
**\<fluffypony>** does anyone have an objection to me moving to backup maintainer on the GUI and the site, and luigi1111 moving to lead maintainer? I'd probably still do GUI releases since they're done in conjunction with the CLI  
**\<serhack>** A little fun fact  
**\<serhack>** Oh great Luigi  
**\<hyc>** Sounds like a good move  
**\<fluffypony>** or we'll do it together or something  
**\<rehrar>** Will Luigi just merge the site repo, or also put it on the server?  
**\<serhack>** Congratulations  
**\<hyc>** but that reminds me we need to move forward on deterministic builds  
**\<fluffypony>** rehrar: pulling on the site is still manual in case the repo gets compromised  
**\<rehrar>** Right.  
**\<surae>** is this marking a fundamental shift in the power dynamics of Monero?  
**\<rehrar>** So will he do that manual task too, or is that still you?  
**\<fluffypony>** which would be embarrassing, but not as embarrassing as the site being compromised via the repo  
**\<fluffypony>** rehrar: still me, but it takes me ten seconds  
**\<fluffypony>** so he'll ping me  
**\<rehrar>** K.  
**\<fluffypony>** surae: yes, we're appointing luigi1111 as CTO (Chief Trolling Officer), whilst I focus on my role as CEO (Chief Entertainment Officer)  
**\<fluffypony>** I can't do both any more, it's too much for one troll  
**\<surae>** oh man, can luigi make fancy videos of people wistfully walking through the wheat? i'm not sure if anyone can do that like you. :( (moving on...)  
**\<fluffypony>** lol  
**\<fluffypony>** ok  
**\<fluffypony>** 5. Any additional meeting items  
**\<imheretolearn>** globee or mymonero updates?  
**\<scoobybejesus>** Mooo and other FFS to fund, perhaps  
**\<hyc>** app store progress?  
**\<serhack>** Ffs?  
**\<fluffypony>** MyMonero Google account is ready  
**\<fluffypony>** waiting on our D-U-N-S number for Apple  
**\<fluffypony>** or as endogenic joked, we're waiting on our DUNCE number  
**\<serhack>** How many monero have we collected for ffs?  
**\<fluffypony>** scoobybejesus: huh?  
**\<dEBRUYNE>** I think scoobybejesus suggests to discuss the FFS proposals (if we want to)  
**\<fluffypony>** serhack: open them and check  
**\<fluffypony>** Olufunmilayo: don't ask to ask, just ask :)  
**\<scoobybejesus>** Really just bringing them to light.  Yes.  
**\<surae>** MRL is about to put out our second roadmap (which includes an update to the first one). hyc already provided some copy-editing comments. we are currently looking for 1) typos and copy-editing stuff, but more importantly 2) any projects the developers feel should be included that are not being included, and 3) any inaccuracies in the statements we've made already.  
**\<surae>** https://drive.google.com/open?id=0ByPYdEm6O54rZGpTbkcwdWMwcW8  
**\<sarang>** We'll wait while everyone reads all 12 pages  
**\<surae>** PM us with edits and comments. sarang and i both have edit access  
**\<fluffypony>** surae: only thing I'd like to add there in section 7 is a note about zk-STARKs being preferable since no trustless setup, but memory / CPU requirements are too high atm, so maybe we just stick to zk-SNARKs in the interim  
**\<moneromooo>** We'll have to decide on an ordering for merging stuff, because there's a glut again, and that means conflicts.  
**\<moneromooo>** How about 0MQ first ?  
**\<Olufunmilayo>** fluffypony, nvm, now that I typed it up and re read scroll back it has already been addressed  
**\<surae>** fluffypony: zk-starks aren't published yet and afaik only the creators have even pseudocode. currently, unless i'm wrong, zk-starks are a myth, and until i see some proofs otherwise, i'm going to pretend like they aren't available yet. but i can mention them as a "next step" under section 7  
**\<hyc>** yeah, let's go with older PRs first  
**\<hyc>** although for gdb sanity I would like threadpool to go in soon.  
**\<Jaquee>** shouldnt threadpool be added to release branch?  
**\<sarang>** On a meta-MRL note, I'd like to offer my thanks to everyone who supported the FFS to bring me aboard  
**\<msvb-lab>** moneromooo: I think it's pretty great we're integrating 0MQ, but I'm not that qualified to vote on PR arangement.  
**\<fluffypony>** surae: sounds good  
**\<fluffypony>** moneromooo: I agree - 0MQ and DRY PRs, and then threadpool?  
**\<moneromooo>** OK  
**\<hyc>** Jaquee: not sure threadpool counts as a bugfix  
**\<dEBRUYNE>** moneromooo: Did you manage to provide feedback to tewinget?  
**\<moneromooo>** Many times.  
**\<dEBRUYNE>** I think he asked for that, but you were busy with the release  
**\<surae>** also, the section on untraceability in monero... i need some opinions on that, too, but i want people's fresh impressions of that section. i had a certain intention when i was writing it and i want to see how well it came across  
**\<tewinget>** sorry, was slightly afk  
**\<moneromooo>** Is there a list of things he wanted feedback on ?  
**\<dEBRUYNE>** tewinget \^  
**\<tewinget>** saw my screen blink  
**\<fluffypony>** Jaquee: I agree with hyc - let's avoid merging anything that could be wonky if we can, release seems to be reasonably stable  
**\<Jaquee>** all right  
**\<Jaquee>** we can live with a little unresponsiveness i guess  
**\<Jaquee>** in gui ^^  
**\<moneromooo>** er... did you check it fixed your problenm in the first place ?  
**\<moneromooo>** I'm pretty sure it won't.  
**\<Jaquee>** no i havent  
**\<hyc>** it's worth checking. I also see responsiveness issues in current 0.11, monerod spawns too many threads during verification  
**\<aerbax>** With regards to the MyMonero AppStore deployments.  If Google/Android is ready, are there any ongoing issues that would prevent a release?  
**\<dEBRUYNE>** I think they want to release all platforms in conjunction  
**\<Jaquee>** are we using the same DUNS/account for monero apps?  
**\<fluffypony>** Jaquee: no, completely separate one  
**\<fluffypony>** have to have that distinction  
**\<parasew>** are there plans of putting the GUI into apple appstore?  
**\<fluffypony>** both are waiting on D-U-N-S numbers  
**\<Jaquee>** ok  
**\<fluffypony>** parasew: yes, check previous meeting logs  
**\<parasew>** fluffypony ok, will do :)  
**\<msvb-lab>** What's the main reason for one mobile platform release to wait until others are ready?  
**\<fluffypony>** Jaquee: we registered "Monero Distribution Company" as the name  
**\<serhack>** Fluffypony: I have an android phone, can I test mymonero ? Can you send me an apk?  
**\<fluffypony>** msvb-lab: on the Monero GUI side, nothing, we can push it into the Google Play store whenever  
**\<moneromooo>** Are we done with the dev stuff ?  
**\<fluffypony>** on the MyMonero side we're still busy adding some stuff  
**\<msvb-lab>** Additional meeting items: Might be worth mentioning that both mattermost.getmonero.org and taiga.getmonero.org are quite bad ans.  
**\<fluffypony>** mostly porting stuff from the iOS app to the JS app  
**\<hyc>** coming up to top of the hour  
**\<fluffypony>** thanks hyc  
**\<fluffypony>** msvb-lab: we can discuss that after  
**\<fluffypony>** ok so next meeting in 2 weeks  
**\<fluffypony>** 1st October  