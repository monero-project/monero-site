---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2017-05-07
summary: Sub / disposable addresses, smart mining GUI, 0MQ, and MyMonero-in-tree discussion
tags: [dev diaries, core, crypto]
author: dEBRUYNE / fluffypony
---

### Overview  

An overview [can be found on MoneroBase](https://monerobase.com/wiki/DevMeeting_2017-05-07).  

### Logs  

**\<fluffypony>** 1. Greetings  
**\<fluffypony>** 2. Brief review of what's been completed since the previous meeting  
**\<fluffypony>** 3. Code + ticket discussion / Q & A  
**\<fluffypony>** 4. MyMonero-in-tree discussion  
**\<fluffypony>** 5. Any additional meeting items  
**\<fluffypony>** 6. Confirm next meeting date/time  
**\<fluffypony>** so let's start with 1. Greetings (aka roll call)  
**\<fluffypony>** hi  
**\<johnalan>** hi  
**\<vtnerd>** present  
**\<sgp>** hello!  
**\<fluffypony>** tewinget apologises, he'll be late  
**\<ajs>** Sup  
**\<endogenic>** o/  
**\<rehrar>** Yo  
**\<fluffypony>** hyc / luigi1111 / ArticMine / othe / smooth / anonimal / binaryFate / dEBRUYNE / dnaleor / gingeropolous / iDunk / IPGlider / Jaquee / jwinterm / kenshi84 / knaccc / luigi1112 / luigi1115 / NoodleDoodle / papalazzarou / pigeons / RedLion[m] / redlion  
**\<Jaquee>** hhelo  
**\<pigeons>** :)  
**\<vtnerd>** also me  
**\<Jaquee>** medusa  
**\<fluffypony>** anyone I forgot  
**\<iDunk>** o/  
**\<vtnerd>** oh those are not present whoops  
**\<fluffypony>** lol vtnerd  
**\<fluffypony>** ok so  
**\<fluffypony>** 2. Brief review of what's been completed since the previous meeting  
**\<fluffypony>** merged a bunch PRs  
**\<fluffypony>** kenshi84's GPG key changed  
**\<fluffypony>** I've confirmed it via sidechannel  
**\<fluffypony>** we have a new sweepbelow function in the CLI, which you may find useful  
**\<fluffypony>** we also have a new heavier bias in output selection towards newer outputs  
**\<fluffypony>** moneromooo can fill us in on that  
**\<ArticMine>** Hi  
**\<othe>** oi  
**\<fluffypony>** smart mining is enabled in the GUI  
**\<fluffypony>** as in the selection box  
**\<moneromooo>** Hmm, I just twiddled the settings for the recent output selection, really. To match some data in the Miller et al paper.  
**\<fluffypony>** which is pretty cool  
**\<sgp>** indeed  
**\<fluffypony>** also Jaquee has done some work on getting iOS back on track after it borked (visually)  
**\<fluffypony>** well iOS / mobile  
**\<fluffypony>** which brings us to  
**\<fluffypony>** 3. Code + ticket discussion / Q & A  
**\<Jaquee>** yes. and there's some new translations added to gui  
**\<fluffypony>** we have a number of open PRs  
**\<fluffypony>** when tewinget is off his bus he can update us on 0MQ  
**\<fluffypony>** which I'd REALLY like to move forward with ASAP  
**\<fluffypony>** it's been sitting in a holding pattern for ages  
**\<fluffypony>** Snipa: also if you're around maybe you can update us on the testing on that ?  
**\<moneromooo>** I'd like it to be optional, so it can be merged (and thus tested), without causing massive breakage if it does break.  
**\<fluffypony>** afaik that was the case  
**\<Jaquee>** sounds like a good idea  
**\<fluffypony>** also disposable addresses is still hanging around - I think that's pending a review from one of the luigis?  
**\<moneromooo>** AFAIK yes. Also RandomRun had an idea to make it better.  
**\<fluffypony>** I don't think there's a problem with that hanging around and being improved  
**\<fluffypony>** as long as the parallel MRL write-up is there  
**\<fluffypony>** I'd like to discuss 1998  
**\<fluffypony>** the PR, not the year  
**\<fluffypony>** https://github.com/monero-project/monero/pull/1998  
**\<fluffypony>** at this point in time I'm still swaying towards prevent-user-stupidity-by-default  
**\<fluffypony>** at the slight inconvenience for a power user / sysadmin who might go "omg really" and then add the flag  
**\<fluffypony>** I know vtnerd feels the same way, which is why he added it in the first place  
**\<fluffypony>** I'd be interested in strong arguments for removing the flag  
**\<Jaquee>** wouldnt a text disclaimer be enough?  
**\<Jaquee>** i don't have a strong opinion  
**\<fluffypony>** Jaquee: if you try bind externally and start it without the --confirm-external-bind flag then it refuses to start  
**\<fluffypony>** and it tells you why  
**\<Jaquee>** ok. apparently hyc started the discussion. Are you around?  
**\<fluffypony>** I know hyc doesn't like it  
**\<fluffypony>** vtnerd: has anyone else expressed disdain for it?  
**\<vtnerd>** AFAIK, just the people on that PR and the one referenced  
**\<vtnerd>** and possibly one person in IRC, but they seemed to be questioning why it was necessary (I think)  
**\<vtnerd>** its somewhat low effort to get around it, so most people just add the flag I thnk  
**\<vtnerd>** no one has privately contacted me about it for any reason if that was the question  
**\<fluffypony>** ok  
**\<fluffypony>** unless hyc comes in I move to close the PR, we can always re-open it later  
**\<Jaquee>** ok with me  
**\<fluffypony>** ok next PR for discussion is 2011  
**\<fluffypony>** moneromooo had concerns that it was touching consensus critical issues  
**\<fluffypony>** so/issues/part of the code  
**\<moneromooo>** Yes, but it turns out it's actually bypassed when a tx comes from a block. The patch is fine.  
**\<moneromooo>** I OK'd it since.  
**\<fluffypony>** ah ok'  
**\<moneromooo>** Well, wait.  
**\* fluffypony** stops...hammer time  
**\<moneromooo>** It's really uneeded (only the wallet bit was wanted). But it's not forkworthy. That said...  
**\<moneromooo>** Older wallets *might* create txes which aren't relayed by newer daemons.  
**\<moneromooo>** That's fairly unlikely, since my code targets 2/3 of max size, but the size approximation is not very precise.  
**\<moneromooo>** That said, I think it's fine to merge.  
**\<hyc>** hey. just popped in. reading history  
**\<fluffypony>** hi hyc !  
**\<dEBRUYNE>** Re: 2011, perhaps it also should be dependent on the fee priority level used  
**\* fluffypony** plays elevator hold music  
**\<hyc>** ok, if n0b0dy else cares about that external bind thing then whatever. to me it's redundant  
**\<fluffypony>** ok  
**\<hyc>** since you had to explicitly request a non-localhost address already  
**\<fluffypony>** sure, but you'd be surprised how few people know that 0.0.0.0 exposes everything :-P  
**\<endogenic>** ^  
**\<hyc>** it d0esn't protect against typos/accidents. it only pisses off people who expect the computer to do as it's told  
**\<fluffypony>** hyc: view it like a weak password warning  
**\<fluffypony>** you can't just expect the computer to accept 1234 as a password  
**\<hyc>** yeah, ok...  
**\<moneromooo>** Well, I would...  
**\<fluffypony>** lol  
**\<fluffypony>** moneromooo is the exception to every rule :-P  
**\<fluffypony>** now on the GUI side, the only thing I wanted to bounce around is 688  
**\<fluffypony>** tooltips are fine, but if we're going to do some sort of unified help then I would veer towards an overlay that shows once the first time you enter a screen, and can be re-called by clicking the [?] button on the taskbar  
**\<fluffypony>** https://s-media-cache-ak0.pinimg.com/originals/c1/e1/bf/c1e1bfd7fb2770f6745d95af8bf89865.jpg  
**\<johnalan>** like that style  
**\<fluffypony>** https://s-media-cache-ak0.pinimg.com/originals/43/6e/74/436e746b35142f41d5f9bb8e765963e4.jpg  
**\<fluffypony>** http://eyeviewportal.com/filecache/b38/73d/85-cropped-w545-h409-of-1-FFFFFF-evappguiguidecontentimage002.jpg  
**\<fluffypony>** like that  
**\<hyc>** sounds good  
**\<johnalan>** :+1:  
**\<Jaquee>** problem is [?] is not around if you use native title bar  
**\<fluffypony>** Jaquee: where else could we add a help button? bottom left?  
**\<endogenic>** one suggestion i'd make for that is to make it c lear to the user they can recall it easily by doing "X" so that they don't fret about having to memorize everything before it's closed  
**\<endogenic>** recall it -> the help screen  
**\<Jaquee>** i think ^ is good as a start  
**\<moneromooo>** Where is it on the title bar then, since it's not a WM thing ?  
**\<fluffypony>** endogenic: agreed  
**\<moneromooo>** s/Where/Why/  
**\<Jaquee>** but some buttons could need longer desriptions  
**\<Jaquee>** like sweepunmixable and paymentid for example  
**\<fluffypony>** Jaquee: there's enough space in the help overlay, we can use a smaller font to explain them  
**\<redlion>** how breadwallet on ios handles it when setting up is quite good  
**\<fluffypony>** or move the help to somewhere where there's space  
**\<fluffypony>** and use an arrow  
**\<Jaquee>** yeah. we could find a place for that help button  
**\<fluffypony>** ok - any other PRs that need discussion or can we move on? there's general Q&A shortly  
**\<sgp>** I'd like to merge 261 on monero-site  
**\<fluffypony>** sgp: there's a website meeting after the Kovri one  
**\<fluffypony>** so we can discuss it then  
**\<sgp>** ok  
**\<fluffypony>** ok so  
**\<fluffypony>** 4. MyMonero-in-tree discussion  
**\<fluffypony>** so basically this is about nose-covering and making sure I'm not abusing my position as a maintainer and member of the Monero Core Team  
**\<fluffypony>** currently MyMonero has a working API (largely unspecced to be sure), two client implementations (website and app), two server implementations (the live backend and OpenMonero), with a third one coming  
**\<fluffypony>** I'd like to make sure there is general acceptance and buy-in that the API can be implemented as the general API for lightweight wallets (ie. wallet that use remote viewkey scanning)  
**\<hyc>** is it carved in stone now  
**\<hyc>** if we need to tweak it we can still do that?  
**\<redlion>** is the license unrestricted?  
**\<fluffypony>** and that MyMonero-written or MyMonero-derived code is generally acceptable to be merged into the source tree (ie. the open-source backend implementation that vtnerd is working on)  
**\<fluffypony>** redlion: BSD 3-clause  
**\<fluffypony>** hyc: as long as mWo12 changes it, and we match the changes in the live backend and the new backend then yse  
**\<fluffypony>** yes  
**\<fluffypony>** we can make any changes, and we WILL make changes to make it smarter  
**\<moneromooo>** If it's beneficial to monero and it works fully by itself without needing proprietary gunk, then I'm OK with it.  
**\<fluffypony>** eg. tx history comes in raw, instead of paginated  
**\<fluffypony>** so that needs to change  
**\<hyc>** +1 moneromooo  
**\<fluffypony>** moneromooo: yeah the new backend will use LMDB instead of mysql  
**\<fluffypony>** so it will be unencumbered in the source  
**\<ArticMine>** As long as there are no proprietary dependencies I am fine  
**\<hyc>** I like it even more now ;)  
**\<johnalan>** I think it beneficial too  
**\<moneromooo>** Maybe a separate repo (similar to monero-core) might be best, but that's details.  
**\<johnalan>** \*its  
**\<moneromooo>** it's  
**\<iDunk>** it's  
**\<jollymort>** can't wait to run a mymonero node myself!  
**\<vtnerd>** also the current "primary" wrapper around the DB is actually C, so theres that for you guys  
**\<fluffypony>** moneromooo: I thought about that, but it's a single daemon that *should* exist in the repo alongside the wallet RPC etc.  
**\<hyc>** doesn't it supersede wallet-rpc?  
**\<fluffypony>** now  
**\<fluffypony>** hyc: no  
**\<fluffypony>** wallet-rpc is good for integration, this isn't  
**\<johnalan>** there is obviously an element of centralisation, but it’s nearly impossible to avoid  
**\<fluffypony>** also on this topic  
**\<fluffypony>** Jaquee has begun working on client integration in the CLI and GUI  
**\<moneromooo>** "client integration" ?  
**\<vtnerd>** you mean for light-wallets?  
**\<fluffypony>** that will mean that both CLI and GUI will be able to run in lightweight / remote-scanner / MyMonero mode  
**\<fluffypony>** moneromooo: as opposed to implementing the server protocol  
**\<hyc>** sounds good  
**\<moneromooo>** Oh, mymonero client integration ?  
**\<fluffypony>** moneromooo: let's call it something else  
**\<moneromooo>** That went pretty damn fast :D  
**\<fluffypony>** "lightweight wallet"  
**\<jollymort>** it's not really centralization if any `monerod` acts as a server  
**\<hyc>** but I'm still missing why we need old wallet-rpc if this mymonero api exists  
**\<jollymort>** it's literally my monero :)  
**\<fluffypony>** hyc: wallet-rpc is completely different  
**\<johnalan>** so the core GUI will be able to interact with MyMonero backend too?  
**\<vtnerd>** for people that want to run VPS node but keep their viewkey ?  
**\<moneromooo>** Yes, would be nice to see what bits are needed where, and the actual API (even if roughly).  
**\<fluffypony>** it provides an API for integrators  
**\<fluffypony>** @johnalan yes  
**\<fluffypony>** so basically  
**\<johnalan>** is this needed with the MyMonero Desktop wallet?  
**\<ArticMine>** With what as the backed / server  
**\<moneromooo>** That can be posted later though, :49 now.  
**\<ArticMine>** monerod?  
**\<fluffypony>** lightweight wallets will have 3 server options:  
**\<fluffypony>** 1. OpenMonero  
**\<fluffypony>** 2. the new in-source backend that vtnerd is working on  
**\<fluffypony>** 3. the live MyMonero backend  
**\<fluffypony>** it will also have multiple client options:  
**\<hyc>** afaik the main difference btw an ordinary wallet and mymomero is you tell mymonero your viewkey  
**\<fluffypony>** 1. OpenMonero's web wallet (clone of the current MyMonero web wallet)  
**\<hyc>** and the ordinary wallet has all your keys  
**\<fluffypony>** 2. the MyMonero applications  
**\<fluffypony>** 3. monero-wallet-cli  
**\<fluffypony>** 4. monero-wallet-rpc  
**\<fluffypony>** 5. the Monero GUI  
**\<fluffypony>** hyc: monero-wallet-rpc can still use this on the backend  
**\<fluffypony>** so it's unrelated  
**\<hyc>** ok  
**\<ArticMine>** ok  
**\<jollymort>** about #2011 - you could modify it to (median)+0.6% for it to be mine-worthy, or even have the wallet check for fee setting and then it would be matched like 1: +0.6%, 2: +2.4%, 3: +12%, 4:+100%  
**\<fluffypony>** also this will mean that the GUI / CLI may end up supporting the MyMonero 13-word seed derivation by virtue of the integration effort  
**\<fluffypony>** does anyone have a fundamental issue with that ?  
**\<ArticMine>** no  
**\<fluffypony>** I mean, I do, because I don't want to be abusing my position, but it is what it is :-P  
**\<jollymort>** didn't you deprecate 13-word?  
**\<moneromooo>** Did you not say the 13 word seed was going to be obsoleted ?  
**\<endogenic>** jollymort: working on it  
**\<johnalan>** no  
**\<endogenic>** but client still needs to be able to read 'em  
**\<redlion>** electrum/mycelium support a few different seed lengths iirc  
**\<redlion>** works well  
**\<jollymort>** also luigi was playing around with an idea for 17-word, integrating creation height in it etc  
**\<fluffypony>** moneromooo: it's import only  
**\<fluffypony>** not create  
**\<endogenic>** https://github.com/mymonero/mymonero-app-js/issues/77  
**\<knaccc>** doesn't it put a huge load on mymonero when someone asks it to scan the blockchain from zero with their view key? How long does mymonero take to scan the entire blockchain?  
**\<moneromooo>** Anyway, I'm fine with that as presented.  
**\<hyc>** that all sounds like a win to me. people have been whining about not being able to import their 13-word seed into regular CLI wallet  
**\<shuannelson>** so monero-wallet-cli/monero GUI will not be able to create light-wallets?  
**\<fluffypony>** knaccc: yes it does - about 10 minutes  
**\<jollymort>** yeah import only sounds lovely  
**\<ArticMine>** If we are setting the stage for a competitive market based upon FLOSS then I am fine with it  
**\<vtnerd>** I do have the ASM code working, so hopefully that will tighten up some too (altough there is something else blocking that)  
**\<fluffypony>** shuannelson: yes they will  
**\<fluffypony>** but with 25 word seed, not 13  
**\<fluffypony>** we have 7 minutes left - so I'd like to move on to the last item  
**\<shuannelson>** awesome!  
**\<fluffypony>** we can discuss MyMonero more after the meeting  
**\<redlion>** @shaunnelson, I think it's just that the CLI/GUI won't create 13-word seeds, but will accept already created ones  
**\<hyc>** yeah sounds fine  
**\<fluffypony>** 5. Any additional meeting items  
**\<knaccc>** 10 mins is quite a speedup vs downloading the entire blockchain, so sounds awesome.  
**\<jollymort>** any thoughts on future of penalty/blocksize? i kind of left the research open-ended  
**\<hyc>** ^^ get a faster CPU and it'll be quicker ')  
**\<redlion>** Does anyone have a working monero-core or mymonero build on ios currently? I've been fiddling around and I can't seem to get either properly functional on the sim/device, though I may be missing something  
**\<fluffypony>** lol hyc  
**\<endogenic>** redlion: pls come join #mymonero but yes i do :)  
**\<Jaquee>** redlion: i have. it has some nasty bugs but it's running  
**\<redlion>** ok thanks, I'll talk to you after this  
**\<hyc>** btw iOS still limits process VM size to 4GB so we won't be running monerod native on iOS any time soon  
**\<fluffypony>** @jollymort let's discuss it after the meeting, or maybe next week - there are 2 more meetings to go tonight :)  
**\<fluffypony>** and that's a large topic  
**\<jollymort>** sure, another time  
**\<redlion>** thanks jaquee, are there any build instructions or a (sort of) working build posted somewhere?  
**\<fluffypony>** 6. Confirm next meeting date/time  
**\<fluffypony>** May 21  
**\<fluffypony>** day before Consensus  
**\<hyc>** cool  
**\<hyc>** oh. this week I expect to have wolf miner fully ported to Android, with GPU support too  
**\<fluffypony>** endogenic can come to my hotel and we can do the meeting together :-P  
**\<endogenic>** oooh  
**\<tewinget>** anyway, I have the daemon's side of the code rebased and *nearly* ready to PR and merge.  I mean, it could be merged now, but I should clean it up a little/address a few more of the comments on the existing PR first.  
**\<tewinget>** the wallet side of things will be based on that, and won't take too long.  I just thought it made sense to separate it into two PRs (and rebase while I'm at it because why not?)  
**\<fluffypony>** suweet  
**\<fluffypony>** just check the meeting logs for the bit from moneromooo about it  
**\<tewinget>** (the wallet stuff is still "done already", but as with the daemon side there are comments/suggestions to address as I rebase it as well.)  
**\<tewinget>** at any rate, I plan today to finish with the cleanup of the daemon side of things, close the existing PR, and open a new one for the daemon that should be mergeable.  
**\<fluffypony>** great stuff  
**\<fluffypony>** pigeons: did you see the 96boards thing?  
**\<tewinget>** fluffypony: sorry I didn't respond right away to your pinging on the github PR, but when I said it was already rebased I meant on a different branch, as I'm leaving that branch up (and separate) until I finish rebasing.  
**\<fluffypony>** ok cool  
**\<moneromooo>** tewinget: is the 0MQ stuff deselectable if needed (so if it somehow breaks, you can run the wallet with the existing JSON comms) ?  
**\<moneromooo>** wallet/daemon  
**\<tewinget>** moneromooo: I'll make it so when I rebase the wallet side of things.  
**\<moneromooo>** Excellent, thank you :)  