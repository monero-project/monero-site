---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2017-07-23
summary: Discussion of open PRs and issues, 0MQ, MyMonero/OpenMonero daemon integration, Surae's research, multisig, and miscellaneous
tags: [dev diaries, core, crypto]
author: dEBRUYNE / fluffypony
---

# Overview  

There is no overview for this week.  

# Logs  

**\<serhack>** Oh  
**\<serhack>** Where is meeting? Here?  
**\<pigeons1[m]>** Should be yea  
**\<Jaquee>** anyone else noticed a memory leak in monerod from master?  
**\<balambala>** Hello there  
**\<moneromooo>** erikd did.  
**\<serhack>** Jaquee: oh, is memory leak dangerous?  
**\<moneromooo>** If you have hints, they're welcome.  
**\<rehrar>** so...  
**\<tewinget>** talkaboutdangedol...yo, man  
**\<Jaquee>** no hints unfortunately.  got an OOM crash after running for an hour or two. could've been something else  
**\<Jaquee>** i will find out soon enough  
**\<rehrar>** fluffypony ArticMine luigi1111 othe luigi1114 moneromooo hyc anonimal tewinget pigeons Jaquee  
**\<Jaquee>** did i hear meeting?  
**\<Jaquee>** o/  
**\<ArticMine>** Hi  
**\<rbrunner>** Grüezi mitenand  
**\<rehrar>** it seems fluffypony isn't here to run the meeting, or he's on his way. Anyone heard from him?  
**\<tewinget>** negative  
**\<rehrar>** well, I'm obviously not a dev, so I can't help with the conversation, but the agenda is here: https://github.com/monero-project/meta/issues/97 it's pretty normal  
**\<vtnerd>** fluffypony is in las vegas according to his tweets  
**\<rehrar>** right, he's at defcon  
**\<rehrar>** probably gambling  
**\<vtnerd>** or no wait, was a few days ago have kept up with that  
**\<rehrar>** I'm obviously not qualified to facilitate the things in this meeting, but I can just put each item to discuss, unless someone wants to volunteer  
**\* pero** volunteers moneromooo   
**\<rehrar>** do it!  
**\<tewinget>** I would, but I've tried and I'm shite at it \>\_\>  
**\<tewinget>** pero: didn't you say you wouldn't be present for the meeting?  
**\<vtnerd>** moneromooo is usually the backup bot  
**\<pero>** yea but my plans changed  
**\<moneromooo>** So.... ladies and gentlemen... let's start with...  
**\<moneromooo>** tewinget  
**\<moneromooo>** :)  
**\<tewinget>** lol, ok  
**\<moneromooo>** 0MQ's kinda ready now, right ?  
**\<tewinget>** the daemon's rpc server stuff should be ready to merge, yes  
**\<serhack>** Hello  
**\<pero>** what's still outstanding if that's ready?  
**\<tewinget>** it's not perfect, but "the great is the enemy of the good" and I've structured it such that it doesn't affect anything if something's wonky unless it's crashy...which I haven't seen any evidence of  
**\<serhack>** Point 1? Greetings?  
**\<moneromooo>** That's good. Can you put a "how to start monerod with 0MQ RPC" in the PR ?  
**\<unknownids>** lol serhack  
**\<tewinget>** I still need to do testing on the wallet modifications and the rpc client interface.  
**\<tewinget>** moneromooo: if it builds, it runs the server :)  
**\<tewinget>** the cli flags are self-explanatory  
**\<moneromooo>** Ah, then "how to start monerod with original RPC" :)  
**\<tewinget>** also the same  
**\<tewinget>** hence it's fine to merge  
**\<moneromooo>** It runs both at once ?  
**\<tewinget>** yes.  
**\<moneromooo>** Cool. OK.  
**\<tewinget>** this is to avoid really really messy backwards compatibility  
**\<tewinget>** later there may be a translation process that can receive old rpc requests and translate/forward them, but for now I think this is good.  
**\<moneromooo>** And the missing bits and bobs are fixed (for example, random stuff in getinto) ?  
**\<tewinget>** yeah, there's one thing I needed to get clarity on, but it's not a big deal  
**\<moneromooo>** Shoot.  
**\<tewinget>** that's the get peers bit, as you seemed to imply that this should be changed, but afaict I've mirrored the old/existing RPC in this and it hasn't changed.  I mean, I haven't implemented the call anyway, but the struct for the RPC message is what I'm talking about.  
**\<tewinget>** may as well have that be what it should in case some intrepid young lad gets bored and wants to add that call.  
**\<tewinget>** I've focused on the calls that the wallet uses for now, hence that one's been left for later.  
**\<moneromooo>** Ah, peers used to be uint32\_t (IP) and uint16\_t (port) but they're not something (host) and uint16\_t (port).  
**\<moneromooo>** OK, sounds good. The missing calls can be added later, that's fine.  
**\<pero>** so wallet mods/client interface are largely done too?  
**\<tewinget>** right, but if you look at the GET\_PEERS call in the old RPC it's still using uint32\_t IP and uint16\_t port, unchanged.  
**\<tewinget>** pero: yeah, it's "done" but I found an issue with synching a testnet wallet around block 900k or so, so there's a bit of debugging to do  
**\<tewinget>** but the code is in place, just needs testing.  
**\<tewinget>** #2044 doesn't need *as* much testing before merge (just make sure it doesn't crash the daemon) because it only adds optional functionality, it doesn't change any existing functionality  
**\<tewinget>** but #2185 needs more testing because I completely refactored how the wallet uses the RPC  
**\<moneromooo>** OK, I will check the old GET\_PEERS.  
**\<tewinget>** that's why I structured the PRs the way I did :)  
**\<Jaquee>** there's some fuckery going on around 900k on testnet  
**\<Jaquee>** lots of reorgs  
**\<tewinget>** Jaquee: yeah, I noticed that, and one of the chunks of blocks during sync seemed to break things.  It'll take me a good bit of time to track it down because it's such a weird bug.  
**\<tewinget>** what I really need to do is figure out how to configure gdb to actually print things...I hate it when shit's inlined so gdb can't print it.  or optimized out (I need to verify that debug builds are -O0)  
**\<pero>** would zmq even be responsible for a sync-related bug?  
**\<tewinget>** pero: no, the wallet on that branch bugs out in synching using the old RPC  
**\<tewinget>** it's something related to my refactor of how it uses the rpc.  
**\<pero>** gotcha  
**\<sgp>** Any other questions or should we move on?  
**\<tewinget>** oh  
**\<pero>** yes i'd like to know what the next steps are here  
**\<tewinget>** right  
**\<pero>** i was alarmed to see that 10 days passed without zmq-related github activity  
**\<tewinget>** so I think merging #2184 and then #2044 now would be good.  
**\<tewinget>** #2185 will follow as soon as it's tested and working.  all the code is "done" just gotta test it.  
**\<moneromooo>** Anyone wants to ask anything else about 0MQ ?  
**\<moneromooo>** Next: Jaquee ?  
**\<tewinget>** if anyone has questions in the future, just ask whenever  
**\<Jaquee>** what?  
**\<tewinget>** well, after the dev meeting.  carry on :)  
**\<moneromooo>** Anything about the GUI or light wallet you want to talk about ?  
**\<Jaquee>** ah =)  
**\<pero>** does zmq have impact to the gui?  
**\<tewinget>** pero: the refactor of how the wallet uses the rpc does  
**\<Jaquee>** well. i've been working  on openmonero support the last days. making the wallet compatible with both mymonero and openmonero  
**\<Jaquee>** there are a lot of new commits in the lightwallet PR  
**\<pero>** thats outside of your scope too, i believe, tewinget  
**\<Jaquee>** haven't squashed them yet  
**\<moneromooo>** Yeah, all this reviewing is starting to kill me, there's a lot of stuff :D  
**\<Jaquee>** understandable  
**\<moneromooo>** Good stuff though.  
**\<moneromooo>** Especially that lovely subaddress stuff...  
**\<pero>** there will be a new gui release for september hardfork, Jaquee ?  
**\<Jaquee>** the cli and gui releases are supposed to be aligned, so yes.  
**\<tewinget>** remind me after the meeting, there's one other thing that we'll need to think about before merging #2044 but we can talk about it later.  
**\<pero>** i am wondering if zmq making it into the cli codebase has been identified as work effort for the gui  
**\<pero>** potential work effort*  
**\<endogenic>** Hey guys, fluffy got caught by timezone difference. Think he may be slammed at the moment but he may pop in to say what's up. Just fyi  
**\<pero>** and if some attention needs to be paid into that as the clock is ticking down  
**\<endogenic>** Did not mean to interrupt you  
**\<endogenic>** Pero  
**\* tewinget** gives fluffypony some hair of the dog  
**\<pero>** s'ok :)  
**\<Jaquee>** i haven't really looked at tewingets new stuff, but afaik it shouldnt affect the gui that much.  
**\<serhack>** Hey, I'm developing prestashop plugins  
**\<Jaquee>** there are some rpc stuff in wallet api, but most of it arent used  
**\<pero>** ok cool just putting it out there  
**\<serhack>** I dont know if after that I will write another ffs  
**\<tewinget>** I've refactored those bits as well :)  
**\<Jaquee>** great =)  
**\<moneromooo>** anything else, Jaquee ?  
**\<Jaquee>** yes. but i guess i need fluffy to answer it  
**\<Jaquee>** i was thinking about mobile release and testing  
**\<moneromooo>** OK, we'll be back to you when/if he's around then ?  
**\<Jaquee>** if someone is working on apple store and play store stuff  
**\<Jaquee>** yes. i'll ping him  
**\<moneromooo>** OK. Thanks.  
**\<Jaquee>** ok. that's all  
**\<moneromooo>** serhack: so, tell us more about what you're doing and what's your progress :)  
**\<Jaquee>** oh. one more thing. sorry  
**\<moneromooo>** Sure  
**\<moneromooo>** one minute serhack please :)  
**\<Jaquee>** vtnerd: what's the status on the openmonero/mymonero integration?  
**\<Jaquee>** in monerod  
**\<Jaquee>** do we have a plan for that?  
**\<vtnerd>** not yet really  
**\<Jaquee>** ok  
**\<vtnerd>** other than I would like to have multiple processes for this for security purposes  
**\<vtnerd>** which is what the backend is doing, but I need to make IPC between them easy  
**\<Jaquee>** sounds like a good idea  
**\<Jaquee>** iirc fluffy said in then january meetup that the backend was going to be open sourced. Any timeline for that?  
**\<vtnerd>** not at all, that has not been my direct focus  
**\<vtnerd>** I suppose whenever the backend is in better shape :/  
**\<Jaquee>** all right. thanks =)  
**\<Jaquee>** moneromooo: done  
**\<vtnerd>** more recently I've been working on the serialization explosions  
**\<Jaquee>** sounds fun  
**\<Jaquee>** :P  
**\<vtnerd>** so I'll have to make a push to start encoding a version in the archive header so we dont have this issue again  
**\<moneromooo>** Would be nice to get them fixed, or at least ensure they're not exploitable, since cold wallet comms use that.  
**\<vtnerd>** and try to convince the serialization author to merge something before the 1.65 release  
**\<vtnerd>** eh, thats the issue I would to see corrected with serialization. I dont see another way to handle it  
**\<vtnerd>** basically with better versioning in the header we get less bug defects, but crafting a file is problematic without changes within boost  
**\<Jaquee>** i've missed this. what's the issue?  
**\<moneromooo>** Crafting would likely not be defeated by versioning though.  
**\<moneromooo>** Jaquee: a crash in boost loading a serialized file.  
**\<vtnerd>** https://svn.boost.org/trac10/ticket/9370  
**\<Jaquee>** ah. thanks  
**\<vtnerd>** our situation is very similar, except its boost::multi\_index is doing it internally. a change by moo on 5/27 changed the serialization type  
**\<vtnerd>** moneromooo : that sentence was worded similar. if you meant that its still possible to craft a file if we reject \_newer\_ versions, then I agree  
**\<vtnerd>** \*worded strangely  
**\<moneromooo>** I just meant a crafted file would claim whatever version leads to the exploit, which is likely whjayt you also meant.  
**\<vtnerd>** right you can pretty much do whatever if you can modify the file being read  
**\<moneromooo>** OK, we're done on this ?  
**\<Jaquee>** yes  
**\<moneromooo>** serhack: go ahead then, tell is about your plugins work :)  
**\<vtnerd>** as far as mymonero goes, the focus is not yet open sourcing but since its on my mind during the refactor it shouldnt be hell  
**\<vtnerd>** hopefully  
**\<endogenic>** Vtnerd... a silent hero of monero...  
**\<moneromooo>** Hmm, he seemed keen, but also seems not around now.  
**\<moneromooo>** endogenic: do you have something you want to talk about ?  
**\<endogenic>** Nah not as yet. Soon(tm)  
**\<moneromooo>** Alright, thank you.  
**\<sgp>** @serhack can always talk about it later, but I know he may want to discuss a way of covering plugin maintenance costs  
**\<endogenic>** Really pleased about the lightwallet support  
**\<moneromooo>** So, mooo now:  
**\<Jaquee>** endogenic: is the mymonero backend issues holding back the mobile/desktop releases currently  
**\<Jaquee>** that can wait. go moo  
**\<endogenic>** Nah it's not  
**\<Jaquee>** k  
**\<moneromooo>** I worked on faster/leaner node sync (sync branch) as well as multisig (multisig2 branch right now)  
**\<moneromooo>** Both welcome testing :)  
**\<moneromooo>** multisig2 has RPC, but that's not been tested much yet, so don't really expect it to work. Wallet commands are what's ready.  
**\<moneromooo>** Next... who could have somehting to say...  
**\<moneromooo>** Anyone ?  
**\<rbrunner>** I have something  
**\<rbrunner>** Is something planned already about putting the Windows installer for the GUI wallet into service i.e. at the end offering the Setup.exe as a download on getmonero.org?  
**\<moneromooo>** knaccc: kenshi84 ?  
**\<Jaquee>** rbrunner: yes, most likely in next release  
**\<rbrunner>** September then, right?  
**\<Jaquee>** which will happen somewhere between now and hardfork  
**\<Jaquee>** yes, around sept  
**\<rbrunner>** Ok. I hold my breath :)  
**\<Jaquee>** :D  
**\<pero>** does the mooning network hash warrant any discussion  
**\<moneromooo>** If you have something to say about it... sure.  
**\<pero>** eh  
**\<pero>** was hoping someone else might have some insight  
**\<pero>** :)  
**\<Jaquee>** i've noticed the block time has been pretty inconsistent lately  
**\<Jaquee>** was thinking it was because the variance in hash  
**\<Jaquee>** lot's of 5-10 mins gaps  
**\<pero>** it seems to me that botnets could very well be pricing out 'regular' miners  
**\<moneromooo>** As long as it's several distinct ones...  
**\<pero>** right  
**\<pero>** can we tell how centralized the mining is? real centralization could be obfuscated by pools  
**\<sgp>** @pero ideally the discovered botnets can have the addresses searched in the pools to determine the hashrate  
**\<moneromooo>** Pools might be able to tell, since they know source IPs (unless proxied). You'd have to trust the pools to tell you the truth though :)  
**\<pero>** yea...food for thought i guess...  
**\<tewinget>** dammit, now I have thought for food...  
**\<moneromooo>** Though if hash is from a botnet, IPs don't really give you much.  
**\<sgp>** One question: the release is in September. What window do you want to give everyone to upgrade?  
**\<moneromooo>** I'd been wondering whether some non-profit oriented large miner might want to crowd out miners.  
**\<sgp>** \*hardfork  
**\<moneromooo>** Undecided yet. But hopefully more than a week :/  
**\<knaccc>** not sure if this is the right time to suggest it, but in preparation for subaddresses, the GUI and CLI should probably recognize the subaddress and integrated subaddress prefixes and display a message that subaddresses are not supported yet, and that they need to upgrade to send to such addresses  
**\<moneromooo>** There's not much that needs to go in next fork, so that should not be much trouble.  
**\<sgp>** Did we ever agree on the new minimum ringsize?  
**\<moneromooo>** That's not a bad idea at all.  
**\<moneromooo>** No.  
**\<moneromooo>** kenshi84: do you want to make a preliminary patch for this ? It'd include your existing parsing changes, plus error messages on use.  
**\<moneromooo>** I don't think kenshi84's around now.  
**\<moneromooo>** suraeNoether: what about you ? Tell us about your research.  
**\<suraeNoether>** ah, well, good timing actually  
**\<sgp>** How should we actually reach consensus on the new minimum number? Running out of time to decide.  
**\<sgp>** @surae I don't mean to interrupt you though, carry on :)  
**\<suraeNoether>** np, as far as minimum ring size goes, and mitigating EABE... a lot of this would be solved with efficient ring signatures and range proofs.  
**\<suraeNoether>** today, I'm coding up some examples of O(sqrt(n)) ring sigs and some efficient range proof algorithms to compare sizes with current set-ups  
**\<suraeNoether>** the idea is, if we can manage to fit a ring size of, say, 150, in with each transaction, I don't care how much computing power you have, you're going to be spending a lot of time analyzing monero's blockchain  
**\<sgp>** 150? Wow  
**\<moneromooo>** Kovri meeting starting in #kovri-dev for those who want to follow both.  
**\<suraeNoether>** i would prefer orders of magnitude  
**\<suraeNoether>** i would *prefer* a quarter million or more signatories per transaction  
**\<ArticMine>** any idea on the trade off ring size, range proof efficiency  vs tx size?  
**\<moneromooo>** All depends on the constants, doesn't it :)  
**\<knaccc>** \o/  
**\<suraeNoether>** that's what i'm looking into today, arcticmine and moneromooo, there's a cost to everything  
**\<vtnerd>** lol @ that compute time  
**\<pigeons1[m]>** Similarly I'm interested in exploring potential privacy drawbacks of not having a fixed uniform ring size  
**\<suraeNoether>** so, I have some attack models for EABE. First order estimates suggest a min ring size of like 30 is necessary with 7 churns. Second order estimates suggest as low as 15 is good with a single churn. my third order estimate looks to be somewhere between those two? possibly with more in the ring size.  
**\<suraeNoether>** pigeons1[m] this is absolutely something i'm also looking into  
**\<suraeNoether>** i like the idea of a uniform ring size if the ring size is very large, say more than 10^2  
**\<suraeNoether>** in a world where choices are allowable, a random (with minimum) ring size is preferable to any other given strategy  
**\<Jaquee>** disrupting with a question: how do i run monerod with valgrind? i'm getting an "invalid argument" error on startup.  
**\<sgp>** @surae do you think a ringsize of 10 is far too low? I didn't expect to consider a jump from 5 to 150/100  
**\<Jaquee>** src/blockchain\_db/lmdb/db\_lmdb.cpp:71 Failed to open lmdb environment: Invalid argument  
**\<Jaquee>** trying: valgrind /path/to/monerod  
**\<Jaquee>** no args. blockchain in default location  
**\<moneromooo>** Should work that way.  
**\<Jaquee>** that's what i thought too  
**\<JollyMort[m]>** in lieu of more research, enforcing some min. in the upcoming HF would be beneficial, no? 5 or 10?  
**\<Jaquee>** moneromooo: https://paste.fedoraproject.org/paste/liZxIo25sun2z8d9YTDLbw/raw  
**\<suraeNoether>** sgp : in terms of security alone, min ring size 10 would be "safe" for a year or two. but would have *how much* cost on the blockchain, and how much cost in terms of adoption? in lieu of more research, a larger ringsize is only preferably in terms of security, not necessarily in terms of adoptions  
**\<pero>** we already enforce a minimum i believe  
**\<suraeNoether>** yep, 2  
**\<JollyMort[m]>** 3, no? "mixin of 2" iirc  
**\<suraeNoether>** oh ringsize 3, mixin 2  
**\<suraeNoether>** sorry, terminology  
**\<sgp>** @surae do you have any major current concerns with 10? Do you think it is reasonable for now pending research?  
**\<suraeNoether>** my concerns come from the cost to the size of the blockchain  
**\<suraeNoether>** and hence adoptoin  
**\<suraeNoether>** adoption\*  
**\<sgp>** afaik the difference between 10 and 5 is very small  
**\<suraeNoether>** i advocated large ring sizes years ago, but there is a cost to the blockchain, a huge cost  
**\<suraeNoether>** we aren't discussing 10 vs. 5 we are discussing 10 vs. 2  
**\<pigeons1[m]>** Better to wait for research instead of arbitrary change  
**\<suraeNoether>** er. 3 i suppose  
**\<sgp>** Ok, still between 10 and 3 is small  
**\<JollyMort[m]>** when the whole discussion started the first idea was to increase to 5 iirc  
**\<JollyMort[m]>** so might as well make it 5 vs 3 :)  
**\<suraeNoether>** i think the security gain from 3 to 5 is not huge. the security gain from 3 to 10 is much more measurable  
**\<endogenic>** I'm with pigeons in that one  
**\<endogenic>** On  
**\<moneromooo>** You're on pigeons in that one ?  
**\<endogenic>** Yeah  
**\<pigeons1[m]>** Oh baby  
**\<endogenic>** I'm one with pigeons on that too  
**\<endogenic>** Two\*  
**\<unknownids>** ( ͡° ͜ʖ ͡°)  
**\<pero>** will there be a security hit if we enforce 10 for a while and then switch to random?  
**\<pero>** random as in potentially \<10  
**\<suraeNoether>** i'm in agreement with pigeons1[m] and endogenic ... especially if these O(sqrt(n)) signatures end up being nice. because knaccc was talking about n=30 ringsize being relatively reasonable in terms of cost to the blockchain today, and i know the max ringsize demonstrated so far is around 10^3. for the same cost, we could get 900 to 10^6 signatories per ring signature if O(sqrt(n)) hits the shelves, and i'll  
**\<suraeNoether>** tell you what: in that scenario, i'd absolutely advocate a minimum 150, and let users decide above and beyond that  
**\<endogenic>** There may be a public education issue with switching all around w/o research too  
**\<suraeNoether>** pero when i say random i mean "random above a certain minimum"  
**\<pero>** gotcha  
**\<knaccc>** yeah if a ring size 400 transaction is the same size as a ring size 20 transaction, that'd be incredible  
**\<suraeNoether>** right now, the best hope for anonymity is simply more efficient ring sigs, and this set-up is extremely extremely promising  
**\<endogenic>** Not that you didnt research it jolly  
**\<suraeNoether>** actually we've researched the crap out of htis  
**\<endogenic>** Btw jolly i guess that means i have to bump "ringsize" on the mm tx details page by 1 :p  
**\<suraeNoether>** we just haven't come up with a formal model of security yet that provides a tractable answer "go with 17, child"  
**\<endogenic>** Need more tea leaves  
**\<gingeropolous>** well in september we'll at least get ringsize = 5  
**\<moneromooo>** Make sure to list any extra crypto assumptions over what monero already assumes.  
**\<sgp>** Right now I'm most concerned what we will do for September  
**\<suraeNoether>** i'm not totally concerned. i'm... really... really excited about small ring sizes  
**\<suraeNoether>** okay, i'll be back later, i'm really glad i could hop in with such good timing on this  
**\<moneromooo>** thanks suraeNoether  
**\<moneromooo>** anyone else ?  
**\<gingeropolous>** oh is it meeting time?  
**\<moneromooo>** kovri's  
**\<ArticMine>** So next meeting in two weeks?  
**\<serhack>** Moneromoo  
**\<serhack>** Sorry  
**\<serhack>** I was eating  
**\<serhack>** Okay  
**\<serhack>** Then  
**\<moneromooo>** np, go ahead :)  
**\<serhack>** My progress are: wordpress plugin is almost completed, I'm developing the verifying (if transaction is okay), I'm also starting the development of Prestashop plugins  
**\<serhack>** After that, I will write another FFS (I will request like 40 xmr or less)  
**\<serhack>** I would create some stickers based on https://m.imgur.com/QcdyyWn  
**\<serhack>** I will publish plugins on codecanyon.com, every funds will be helpful for Monero Project  
**\<serhack>** What do you think moneromoo?  
**\<moneromooo>** Cool, thanks for the overview  
**\<pero>** dEBRUYNE: was it codecanyon.com you blacklisted from the subreddit? ;p  
**\<dEBRUYNE>** .net I think, but that probably doesn't matter haha  
**\<serhack>** Your welcome, moneromoo  
**\<dEBRUYNE>** I can unblacklist it   
**\<serhack>** Everyone should know Monero Community  
**\<serhack>** Fantastic community!  
**\<gingeropolous>** opinions? If I could even figure out how to code into monero a "remote node" support flag, would it be merged? it would be a daemon load flag that would do the appropriate rpc stuff and also modify some p2p metadata to essentially broadcast its openness  
**\<serhack>** Cheers!  
**\<serhack>** Please pm me for more information on slack or mail me support@monerointegrations.com  
**\<Jaquee>** so, "valgrind /path/to/monerod" works for everyone else except me?  
**\<moneromooo>** Worked for me last time I tried. Try running with strace too, see what syscall barfs.  
**\* iDunk** can't run valgrind because of TBM in his CPU.  
**\<moneromooo>** Too Big Munchkins ?  
**\<iDunk>** Trailing Bit Manipulation, IIRC :)  
**\<iDunk>** One of AMD's FMA additions, I think.  
**\<pero>** so...follow up q...will there be a period of time during which gui master will be broken because of zmq  
**\<endogenic>** iDunk: is that similar to a FML addition?  
**\<pero>** tewinget Jaquee ^  
**\<tewinget>** pero: there shouldn't be.  
**\<moneromooo>** tewinget says the daemon runs both 0MQ and JSON/HTTP server, so shouldn't be.  
**\<pero>** thx  
**\<tewinget>** won't merge the zmq rpc wallet stuff until it's tested working, and at that point the gui wallet will be unaffected  
**\<Jaquee>** speaking of testing. is someone working on fixing the failed tests on buildbot builds?  
**\<Jaquee>** pigeons1[m]: ^  
**\<Jaquee>** and if you're around pigeons1[m]. How's the tagging bot coming along?  
**\<pigeons1[m]>** Bot is working in meta repo. I'll talk with fluffy and we'll add it to gui repo.  
**\<moneromooo>** What failing tests ? The DNS ones ?  
**\<moneromooo>** pigeons1[m]: does it do closes yet ? :)  
**\<pigeons1[m]>** I was tracking down lots of my own bugs so switched to an opensource bot i linked to in the meta issue. Seems to work well  
**\<pigeons1[m]>** Yes +resolved on a line by itself by someone authorized closes the issue  
**\<moneromooo>** Great, thanks :)  
**\<pigeons1[m]>** And moo yes i think he means the dns ones  
**\<moneromooo>** I've looked at the DNS stuff today, but I'm still flummoxed.  
**\<moneromooo>** Redoing manually what libunbound is supposed to do seems... not right :/  
**\<moneromooo>** Not to mention a huge amount of work.  
**\<moneromooo>** And if libunbound's not doing it right, surely it'd be best to fix it, not do it manually.  
**\<moneromooo>** I feel like I'm missing something here :/  
**\<moneromooo>** We don't have a coder who knows about DNS already, do we ? :)  
**\<tewinget>** I don't know your exact headache, but I remember when I first implemented that shit using libunbound.  Just about the only lib I could find that would serve our purposes, but...not without pain.  
**\<moneromooo>** Mine is to first find the algorithm to verify a chain. Just that seems to be a lot of cases.  
**\<pigeons1[m]>** Dnssec validation locally instead of trusting the server response is part of the pain i think tewinget  
**\<moneromooo>** But libnubound claims to do validation.  
**\<tewinget>** pigeons1[m]: yeah...I seem to remember that being one of the pain points.  
**\<moneromooo>** (and it fails to do so if I give it a bad key, which seems to confirm)  
**\<pigeons1[m]>** Yeah we're missing something...  
**\<tewinget>** well I gotta afk for a bit.  The last step before merging #2044 is to make sure it builds properly on all the things where it needs to, including deciding how to deal with the zmq dependency itself.  I hesitate to make a decision there, as I'm ambivalent.  
**\<moneromooo>** Probably a submodule.  