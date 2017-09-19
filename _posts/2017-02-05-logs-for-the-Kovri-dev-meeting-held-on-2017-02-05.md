---
layout: post
title: Logs for the Kovri Dev Meeting Held on 2017-02-05
summary: Brief review of what has been completed since last meeting, Salti, and code & open tickets discussion
tags: [dev diaries, i2p, crypto]
author: dEBRUYNE / fluffypony
---
  
### Logs  

**\<anonimal>** 1. Greetings  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\<anonimal>** 3. Code + ticket discussion / Q & A  
**\<anonimal>** 4. Any additional meeting items  
**\<anonimal>** 5. Confirm next meeting date/time  
**\<anonimal>** 1.  
**\<anonimal>** Hello  
**\<i2p-relay> {-olark}** greetings  
**\<anonimal>** 'Hola' as hyc would say right now  
**\<Slack> [endogenic]** Hi!  
**\<i2p-relay> {-guzzi}** hi  
**\<meeting-bot> [i2p-relay] {-ArticMine}** Hi  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\<anonimal>** Our last meeting was on November 27th, 2016 so, nothing can be "brief" about a review.  
**\<anonimal>** There were holidays, etc, so there was a leave of absence but development is going strong.  
**\<anonimal>** All I can say is if anyone is really interested, we have git-log and github (kovri + meta), my fork, and https://forum.getmonero.org/9/work-in-progress/86967/anonimal-s-kovri-full-time-development-funding-thread for any TL;DR  
**\<anonimal>** I'm also have uncommitted work, finishing up the crypto impl refactor + testing for this new exception dispatcher.  
**\<anonimal>** JFTR: of the thousands of lines of code that we forked from, almost none of it handled exceptions. All this spaghetti code, and that guy did not even have a basic grasp of design with exception handling in mind. Literally, much of the core code is still stringed together with the hope that it won't fail. I hate it. It's always been like walking on glass, but a real fix will take time. So, I've started in  
**\<anonimal>** that direction at least in terms of getting exceptions handled or handled better.  
**\<anonimal>** We have two new contributors: MoroccanMalinois and Chris Barry (lazygravy), and EinMbyte and olark have returned.  
**\<anonimal>** At this point I think a Q&A for "brief review" would be best.  
**\<hyc>** that summary is pretty scary  
**\<anonimal>** lol  
**\<anonimal>** Good scary, I hope?  
**\<hyc>** ;)  
**\<anonimal>** :)  
**\<hyc>** it points in a good direction  
**\<anonimal>** Good, I hope so!  
**\<DaveyJones>** sounds like bytecoin code :D  
**\<i2p-relay> {-olark}** The i2pd situation was interesting to say the least :p  
**\<anonimal>** Or more aptly titled: "why2pd".  
**\<Slack> [endogenic]** Total kovri noob here. Not looked at the code yet. Is there any significant future use case for kovri libraries? Is it worth doing upfront? *sits back down*  
**\<anonimal>** Monero. That's the biggest future use-case so far.  
**\<i2p-relay> {-olark}** I would like to see a future where kovri would be the go to i2p router for implementing into applications  
**\<i2p-relay> {-olark}** Instead of tor  
**\<i2p-relay> {-olark}** blegh  
**\<i2p-relay> {-olark}** Monero obviously first though ;)  
**\<hyc>** makes sense. tor was created for the gov't after all  
**\<i2p-relay> {-olark}** Yep  
**\<DaveyJones>** if it will do good for cash/monero i guess those use cases will follow by time  
**\<anonimal>** Everyone seems to be ecstatic about libkovri but I must stress that this is a sensitive network so, the lib should be used with that in mind.  
**\<anonimal>** Tor doesn't have this issue. All that work is upon the relays.  
**\<i2p-relay> {-olark}** True  
**\<anonimal>** Simply shutting down the router when it's most convenient has a negative impact on the network and anonymity. The API needs to take this into consideration as will any applications.  
**\<anonimal>** I can get into details, not meeting worthy. endogenic I don't think I answered your question well enough, I hope I can do better after the meeting.  
**\<anonimal>** Any questions about "brief review"?  
**\<i2p-relay> {-olark}** Hang around in #kovri endogenic  
**\<i2p-relay> {-olark}** Basically we are close to nightlies right?  
**\<anonimal>** ^ #kovri-dev is more informative  
**\<meeting-bot> [i2p-relay] {Slack} [endogenic]** i’m here   
**\<i2p-relay> {-olark}** :)  
**\<anonimal>** Yes, nightlies are technically available https://build.getmonero.org/waterfall  
**\<anonimal>** *but*  
**\<anonimal>** pigeons and I are working out packaging details.  
**\<i2p-relay> {-olark}** ok  
**\<anonimal>** Right now they *all* run a hacked makeself installer. So, download -> chmod +x -> run the installer.  
**\<anonimal>** Windows requires msys2, this is silly so I think we can do a windows installer method (I posted details in the meta repo)  
**\<i2p-relay> {-olark}** nice  
**\<meeting-bot> [EinMByte]** Hi, sorry for being late  
**\<Slack> [needmultisig90]** oh its being relayed  
**\<Slack> [needmultisig90]** neat  
**\<anonimal>** needmultisig90 wants to head up the packaging front. needmultisig90: if you aren't watching the meta repo, I highly recommend that.  
**\<Slack> [needmultisig90]** link pls  
**\<anonimal>** https://github.com/monero-project/meta  
**\<anonimal>** If you review the issues, you'll see where are on packaging.  
**\<anonimal>** where we are  
**\<Slack> [needmultisig90]** Added, will do  
**\<anonimal>** I don't want to shortchange the work that's been done since the last meeting, any more Q&A before moving onto the next point?  
**\* anonimal** thinks too  
**\<anonimal>** Oh, yes, another new contributor alvinjoelsantos (I don't know if he's around)  
**\<meeting-bot> [i2p-relay] {Slack} [needmultisig90]** ajs is cool  
**\<meeting-bot> [i2p-relay] {Slack} [needmultisig90]** @ajs  
**\<meeting-bot> [i2p-relay] {Slack} [needmultisig90]** he appears to be online  
**\<anonimal>** Oh, *that's* ajs, excellent.  
**\<i2p-relay> {-olark}** Good to have new blood :)  
**\<anonimal>** ajs wanted to work on the website too, IIRC?  
**\<meeting-bot> [i2p-relay] {Slack} [needmultisig90]** he's working with me on /r/moneromarket  
**\<meeting-bot> [i2p-relay] {Slack} [needmultisig90]** I believe so  
**\<meeting-bot> [i2p-relay] {Slack} [needmultisig90]** he has a background in law  
**\<anonimal>** "I am the law!"  
**\<meeting-bot> [i2p-relay] {Slack} [needmultisig90]** and was working with OpenBazaar on drafting up arbitration agreements IIRC  
**\<Slack> [jollymort]** also on the monero stealth addresses script : )  
**\<meeting-bot> [i2p-relay] {Slack} [needmultisig90]** he can correct me  
**\<anonimal>** Have him take a look at /r/Kovri  
**\<bigreddmachine>** does the website exist? i'm happy to help add content and such  
**\<anonimal>** bigreddmachine: we all need to tackle fluffypony because he's been coveting the website idea since we started  
**\<anonimal>** "MY PRECIOUS!"  
**\<meeting-bot> [fluffypony]** bigreddmachine: yes  
**\<meeting-bot> [fluffypony]** I moved laptops and so now half my stuff lives on my old one  
**\<meeting-bot> [fluffypony]** I'll try consolidate and push it up this week  
**\<bigreddmachine>** okay, just wanted to make sure i hadn't missed something. i'll watch the repo - going under getmonero.org or as a separate repo/site?  
**\<anonimal>** Last call for point 2. "brief review"  
**\<anonimal>** bigreddmachine: while you're here, we did make some progress on Salti. Any news from upstream on their API?  
**\<meeting-bot> [fluffypony]** bigreddmachine: same design, new content, linked from the getmonero menu bar  
**\<meeting-bot> [EinMByte]** Progress on salti?  
**\<anonimal>** EinMByte: yes, have you read some of the conversation in the open salti issue?  
**\<bigreddmachine>** anonimal: i've been tracking the open tickets but everything got held during holidays. nothing there yet, but i might make a proof of concept for chromium if there'd be interest  
**\<meeting-bot> [EinMByte]** "some of" yes, that sounds about right  
**\<anonimal>** bigreddmachine: sounds great  
**\<anonimal>** EinMByte: most of the collaboration was in IRC, not in issue.  
**\<bigreddmachine>** it would be easy enough to port to firefox + tbb once they finish webrequests.proxy  
**\<anonimal>** bigreddmachine: will you open FFS for this? I think it's worth it.  
**\<bigreddmachine>** for the chromium part? or ff/tbb?  
**\* anonimal** shrugs  
**\<bigreddmachine>** i don't feel comfortable proposing something that at the moment isn't possible and relies on mozilla dev community before it can get started...  
**\<anonimal>** Ok  
**\<anonimal>** Chromium PoC sounds good none-the-less.  
**\<bigreddmachine>** but i will FFS it once i think it's doable  
**\<meeting-bot> [i2p-relay] {-ArticMine}** I would be careful with Chrome / Chromium since unlike Firefox there is no no option to disable DRM  
**\<meeting-bot> [i2p-relay] {-ArticMine}** The DRM could be an attack vector  
**\<meeting-bot> [EinMByte]** Anything that relies on mozilla sounds bad to me  
**\<meeting-bot> [i2p-relay] {-ArticMine}** Firefox and clones are fine  
**\<bigreddmachine>** ArticMine - DRM isn't included in chromium afaik. chromium is only open source code.  
**\<bigreddmachine>** ... at least that's always been my understanding.  
**\<meeting-bot> [EinMByte]** Firefox is fine, of course, and preferably we should use Firefox (or at least that was the initial idea)  
**\<bigreddmachine>** anyway, we can discuss details after the meeting if there's interest. don't want to hold up anonimal  
**\<meeting-bot> [EinMByte]** but relying on mozilla to move... probably not going to happen  
**\<meeting-bot> [i2p-relay] {-ArticMine}** https://bugs.chromium.org/p/chromium/issues/detail?id=686430  
**\<pigeons>** no  chromium is even binary blobs download at compiletime  
**\<meeting-bot> [i2p-relay] {-ArticMine}** The DRM in Chrome is currently an issue in Chromium  
**\<anonimal>** bigreddmachine: this is technically "3. Code + ticket discussion / Q & A" so we can chrome-it-up if needed.  
**\<anonimal>** Any other comments on Salti?  
**\<bigreddmachine>** okay - maybe a chromium POC would need to stay just that, a POC, and never production.  
**\<anonimal>** Something to play with at least, I'm up for that.  
**\<bigreddmachine>** "Any other comments on Salti?" --> just that i'll keep trying webRequests.proxy  
**\<anonimal>** Ok, thank you. That sounds ideal AFAICT.  
**\<anonimal>** Onto other code + ticket discussion:  
**\<anonimal>** Since I have no questions for myself, any Q&A?  
**\<anonimal>** Open PR from guzzi, ETA for completion?  
**\<Slack> [moroccanmalinois]** hi guys, guzzi are you interested in #399 ? i may give it a shot if you are not  
**\<anonimal>** Oooo #399, my favourite.  
**\<i2p-relay> {-guzzi}** \* anonimal, this week on PR  
**\<i2p-relay> {-guzzi}** \* checks 399  
**\<anonimal>** moroccanmalinois: ironically, I highly encouraged guzzi to get started on that after we merged his PR.  
**\<meeting-bot> [olark]** I'll leave what I have to say for after.  
**\<meeting-bot> [olark]** Unless there are no questions people have about kovri  
**\<anonimal>** moroccanmalinois: but now that he will be funded, I would ask him to contribute partly to that and help me with many other areas instead  
**\<Slack> [moroccanmalinois]** @anonimal "easiest" one i find  
**\<i2p-relay> {-guzzi}** sounds like a plan.  
**\<anonimal>** I mean, I can't speak for either of you; please do it!  
**\<anonimal>** Ok, so moroccanmalinois is on #399 now?  
**\<Slack> [moroccanmalinois]** my pleasure if guzzi is fine with it  
**\<meeting-bot> [EinMByte]** Do we still have important SSU issues open?  
**\<meeting-bot> [EinMByte]** Might take a look in the next week  
**\<i2p-relay> {-guzzi}** but converting .jar to c is a great way to learn  
**\<i2p-relay> {-guzzi}** we an decide away from the meeting.  
**\<anonimal>** #399 is actually great for various reasons, one of which would introduce a new dev to the purpose of libkovri-client and libkovri-core  
**\<Slack> [moroccanmalinois]** cool  
**\<anonimal>** EinMByte: yes, the same ones I believe since you left though I may have resolved one or two but not closed (I don't know)  
**\<anonimal>** guzzi: we wouldn't be converting .jar to c  
**\<anonimal>** I'll give details after the meeting  
**\<anonimal>** olark did you mean monero question for after the meeting or kovri question?  
**\<meeting-bot> [EinMByte]** Alright. Might do some additional refactoring, since I never completely finished that  
**\<i2p-relay> {-guzzi}** oh i see just skimmed  
**\<i2p-relay> {-olark}** Not so much a question but a new development that pertains to both kovri and monero :)  
**\<i2p-relay> {-olark}** Something I have been thinking about while I was looking at Monero's ring signatures.  
**\<anonimal>** EinMByte: that sounds great  
**\* anonimal** will look at issue tracker after meeting  
**\<anonimal>** Ok, anymore on 3. Code + ticket discussion / Q & A ?  
**\<anonimal>** Lots of TODO's. I'm adding them like spice to bland soup.  
**\<i2p-relay> {-olark}** I'll mention it in 4.  
**\<anonimal>** Once I get these two branches merged, maybe someone can pick some of them up. We'll see.  
**\<meeting-bot> [i2p-relay] {-ArticMine}** I will bring up an item in 4  
**\<anonimal>** 30 seconds until 4.  
**\<i2p-relay> {-guzzi}** i like todos  
**\<anonimal>** 4. Any additional meeting items  
**\<anonimal>** Floodgates opened!  
**\<anonimal>** Fashion, food, travel: anything goes!  
**\<meeting-bot> [i2p-relay] {-ArticMine}** Yes https://www.myhackerhouse.com/windows_drm_vs_torbrowser/  
**\<meeting-bot> [i2p-relay] {-ArticMine}** DRM used to attack tor in Windows  
**\<anonimal>** lol  
**\<meeting-bot> [i2p-relay] {-ArticMine}** Cost to get Windows to trust this attack 10,000 USD  
**\<anonimal>** Thanks ArticMine, looks like a great read.  
**\<anonimal>** bigreddmachine: ^  
**\<meeting-bot> [i2p-relay] {-ArticMine}** Should also work against i2p  
**\* anonimal** will read more after meeting  
**\<anonimal>** fluffypony: are you gpg verifying the kovri subscription that's hosted on github?  
**\<bigreddmachine>** okay, so i'll go ahead and say that i won't officially ever support a chrome version of Salti then.  
**\<i2p-relay> {-olark}** I'll let ArticMine go first  
**\* anonimal** wanted to ask that in monero's meeting on the topic of github security  
**\<moneromooo>** "subscription" ?  
**\<meeting-bot> [EinMByte]** By the way, if anyone needs access to the salti repo, please tell me  
**\<anonimal>** moneromooo: https://github.com/monero-project/kovri/blob/master/pkg/client/address_book/hosts.txt  
**\<meeting-bot> [i2p-relay] {-ArticMine}** My take is that any browser / OS that supports DRM is vulnerable to an attack against anonymity / IP obfuscation  
**\<meeting-bot> [EinMByte]** As with many features like DRM, it's best that they're just enabled  
**\<moneromooo>** Thanks.  
**\<meeting-bot> [EinMByte]** \*disabled LOL  
**\<anonimal>** lol EinMByte  
**\<anonimal>** moneromooo: the only reason I'm signing it is because fp is pulling directly from github  
**\<meeting-bot> [i2p-relay] {-ArticMine}** So i2p on such a platform may create a very dangerous sense of false security  
**\<anonimal>** ArticMine: much like anything Windows  
**\* anonimal** now windows fan  
**\<anonimal>** \*not  
**\<meeting-bot> [i2p-relay] {-ArticMine}** Yes  
**\<anonimal>** olark: 10 minutes left  
**\<anonimal>** Tick tock tick tock!  
**\<anonimal>** fluffypony: in addition to my ping above, is there any kovri-related news related to your conference circuit?  
**\<i2p-relay> {-olark}** Salti is a good solution for now  
**\<i2p-relay> {-olark}** In the future we could have our own dedicated browser  
**\<i2p-relay> {-olark}** Not sure when that is viable though  
**\<i2p-relay> {-olark}** ok  
**\<i2p-relay> {-olark}** sorry got really bad tunnel lag  
**\<i2p-relay> {-olark}** I have been thinking about how LN or something similar would work with monero  
**\<meeting-bot> [fluffypony]** anonimal: just generally good chats  
**\<meeting-bot> [fluffypony]** Nothing mind blowing  
**\<i2p-relay> {-olark}** Once kovri gets implemented into nodes and wallets this opens the doors to some really great developments  
**\<meeting-bot> [fluffypony]** Some good talk on Tor failure modes  
**\<i2p-relay> {-olark}** Since we would have access to i2p for routing  
**\<meeting-bot> [fluffypony]** A few people at 33c3 said that i2p was a prescient choice  
**\<pero>** kovri - the prescient choice for online anonymity  
**\<i2p-relay> {-olark}** It would need to be a plugin for kovri  
**\* anonimal** wants Kovri's I3P technology. Trademarked, stamped, hah!  
**\<meeting-bot> [fluffypony]** Hah  
**\<anonimal>** I3P, your cover of choice.  
**\<i2p-relay> {-olark}** Could have a client tunnel for LN functionality in wallets  
**\<i2p-relay> {-olark}** Use kademlia DHT so the other "lightning" nodes know of each other  
**\<i2p-relay> {-olark}** Would be able to route around centralized troublesome nodes  
**\<meeting-bot> [fluffypony]** Can I shut meeting-bot down, anonimal  
**\<i2p-relay> {-olark}** Fixes a lot of problems the current LN development is trying to fix  
**\<anonimal>** fluffypony: 3 minutes left?  
**\<meeting-bot> [fluffypony]** Kk  
**\<i2p-relay> {-olark}** Don't need to build routing from scratch  
**\<i2p-relay> {-olark}** Anyway it is still way to early to really till this could be possible  
**\<anonimal>** olark: sounds interesting. I'd need more info to have a comment.  
**\<Snipa>** moneromooo - I'll work on the isolated testnet in a bit.  I apparently need to rebuild all of my monerod's w/o libunwind, or it crashes trying to init a new blockchain.  So I'll have it tested a bit later today.  
**\<i2p-relay> {-olark}** But there is good potential  
**\* anonimal** swats Snipa  
**\<moneromooo>** Cool, thanks Snipa  
**\<anonimal>** Ok, one minute left. 5. Confirm next meeting date/time  
**\<anonimal>** Same time, two weeks from now?  
**\<bigreddmachine>** february 19? i can do that  
**\<i2p-relay> {-olark}** Sounds good  
**\<anonimal>** Ok, I'll post on meta repo.  
**\<anonimal>** Thanks everyone!  