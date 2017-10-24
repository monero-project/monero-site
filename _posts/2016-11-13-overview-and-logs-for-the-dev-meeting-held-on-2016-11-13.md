---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2016-11-13
summary: Meta repository, Fluffy Blocks, and official GUI
tags: [dev diaries, core, crypto, 0mq]
author: dEBRUYNE / fluffypony
---

### Overview  

An overview [can be found on Hello Monero](https://hellomonero.com/article/monero-dev-meeting-note-highlights-2016-11-13).  

### Logs  

**\<@ArticMine>** Hi  
**\<+moneromooo>** Oh hi  
**\<@fluffypony>** oh and pigeons  
**\<Softich>** allright boys, get it started :P  
**\<@fluffypony>** and tewinget  
**\<medusa_>** Jaquee ping too  
**\<pigeons>** hi  
**\<@fluffypony>** ok so let's start with an infrastructure update  
**\<Jaquee>** hi!  
**\<@fluffypony>** pigeons: how goes it  
**\<pigeons>** good  
**\<@fluffypony>** pigeons: do you want to tell people about the new repo we're using for issues?  
**\<pigeons>** github.com/monero-project/meta  
**\<Softich>** https://github.com/monero-project/meta  
**\<_Slack> \<nanoakron>** Please explain?  
**\<Softich>** for the lazy  
**\<pigeons>** for stuff realted to build machines, build infrastructure, etc  
**\<pigeons>** anonimal has been using it some to get things setup for kovri needs  
**\<pigeons>** so feel free  
**\<luigi1112>** I got some emails about issues  
**\<luigi1112>** I was like cool  
**\<@fluffypony>** ok so  
**\<@fluffypony>** please use /meta for organisational issues   
**\<@fluffypony>** "organisational" as in something that isn't project specific  
**\<_Slack> \<nanoakron>** Roger  
**\<pigeons>** there is also an empty repo there now, i'll check in some build infrastructure settings there and vm templates  
**\<i2p-relay> {-anonimal}** pigeons: can I PM you on Irc2p or are you AFK from that instance?  
**\<pigeons>** yes i'm online there  
**\<i2p-relay> {-anonimal}** \* has to leave soon  
**\<@fluffypony>** ok so  
**\<_Slack> \<nanoakron>** Ha  
**\<_Slack> \<nanoakron>** Ja  
**\<@fluffypony>** we've had quite a few PRs merged in the last 2 weeks  
**\<@fluffypony>** some big things like "fluffy blocks" that need testing and fiddling to check for edge cases  
**\<_Slack> \<nanoakron>** Can I run a testnet client in parallel with my main net one from the same box?  
**\<@fluffypony>** yes I do  
**\<@fluffypony>** on my laptop   
**\<iDunk>** i also do  
**\<_Slack> \<nanoakron>** Could you make some details public, maybe in the readme?  
**\<_Slack> \<nanoakron>** I mean instructions  
**\<iDunk>** what details?  
**\<@fluffypony>** @NanoAkron for running testnet and mainnet?  
**\<_Slack> \<nanoakron>** Yes please  
**\<@fluffypony>** ./monerod --testnet   
**\<@fluffypony>** ./monerod  
**\<iDunk>** start moderod normally for mainnet  
**\<@fluffypony>** in two different windows  
**\<_Slack> \<nanoakron>** And they're happy to play together?  
**\<iDunk>** and monerod --testnet for testnet  
**\<medusa_>** yes very happy  
**\<pero>** needs annotated screenshots imho  
**\<luigi1112>** they play separately  
**\<medusa_>** like 2 small pupies  
**\<_Slack> \<nanoakron>** Ok cool.  
**\<_Slack> \<nanoakron>** Will get that up and running when I'm home next week.  
**\<iDunk>** you also need to start monero-wallet-cli --testnet  
**\<iDunk>** for a testnet wallet  
**\<_Slack> \<nanoakron>** Are there any decisions on making the whole network fluffy at the next hardfork?  
**\<+moneromooo>** Veto.  
**\<@fluffypony>** I think they're already enabled by anyone running a node that supports it  
**\<iDunk>** it is not necessary  
**\<luigi1112>** not next like jan  
**\<luigi1112>** and it doesn't need a fork?  
**\<gingeropolous>** right. it doesn't need a fork.  
**\<@fluffypony>** the fork would only have been done to avoid old nodes showing weird error messages  
**\<iDunk>** client that support fluffy blocks talk fluffy  
**\<@fluffypony>** but honestly it's not a big deal  
**\<iDunk>** and those that don't, don't afaik  
**\<_Slack> \<nanoakron>** But to make it compulsory. Reducing block sizes would also help obfuscation.  
**\<+moneromooo>** It kind of is. If there's a nasty bug once close to 100% of the nodes switched, boom.  
**\<iDunk>** there is no block size reduction  
**\<dEBRUYNE>** \<pero> #58 is not fixed \<= apologies, should be reopened then  
**\<_Slack> \<nanoakron>** There's no block size reduction? I think you're mistaken  
**\<@fluffypony>** @NanoAkron it doesn't reduce block size, just reduces traffic   
**\<+moneromooo>** He is not.  
**\<iDunk>** nonaoakron: i am nitz  
**\<iDunk>** not*  
**\<iDunk>** lol  
**\<@fluffypony>** ie. you have the transactions already in the mempool, so no need to re-send them  
**\<@fluffypony>** but the block size stays the same  
**\<+moneromooo>** Hi nitz.  
**\<_Slack> \<nanoakron>** Yes ok I wasn't precise enough  
**\<iDunk>** :)  
**\<+moneromooo>** hi  
**\<_Slack> \<nanoakron>** It reduces block transmission and reduplication, reducing overall network traffic and 'burstiness'  
**\<@fluffypony>** yes  
**\<_Slack> \<nanoakron>** Thereby improving obfuscation efforts ;)  
**\<@fluffypony>** ok   
**\<_Slack> \<nanoakron>** And kovri  
**\<_Slack> \<nanoakron>** Should also benefit  
**\<+moneromooo>** Can we leave that till after we're done with the meeting though ?  
**\<_Slack> \<nanoakron>** Due to packet size reduction and traffic reduction. Good reasons to make it compulsory at some point in the future.  
**\<gingeropolous>** ^^  
**\<_Slack> \<nanoakron>** Ok will leave it now.  
**\<@fluffypony>** @NanoAkron it *is* compulsory   
**\<@fluffypony>** ok so  
**\<_Slack> \<nanoakron>** Ja  
**\<@fluffypony>** Jaquee / medusa_ could you give us a GUI update, based on the stuff that's been done in the past 2 weeks ?  
**\<Jaquee>** yeah  
**\<Jaquee>** We've made great progress last couple of weeks. A lot of great contributions and inputs from new people. Great to see!  
**\<Jaquee>** All critical issues i know of are fixed and we have a very good looking, working gui with all basic functionality in place.  
**\<Jaquee>** I believe next step is building binaries to make it possible for more people to test it  
**\<@fluffypony>** ok  
**\<Jaquee>** Since the 0.10 daemon isnt compatible with gui we also need to make sure we have a working monerod build to release with the gui.  
**\<@fluffypony>** we'll try couple that with a new 0.10 point release  
**\<Softich>** nice, can you give us an ETA for the download? :)  
**\<Jaquee>** sounds good  
**\<@fluffypony>** so it will take a couple of days to wrap up a point release too  
**\<Jaquee>** ok. makes sense  
**\<_Slack> \<nanoakron>** Can I ask about translations/localisation?  
**\<Jaquee>** yes  
**\<@fluffypony>** sure  
**\<Jaquee>** i haven't worked on those parts very much though. but i can try to answer your questions.  
**\<_Slack> \<nanoakron>** Is there an easy way I could try to translate some stuff for you - I speak a bit of Malay. Is there a transifex or maybe a way to scan the transifex of another coin (ahem) and pull in their translations?  
**\<Jaquee>** i think dEBRUYNE is planning to publish the translation files somewhere.  
**\<dEBRUYNE>** I've been intending to put the strings up on transifex, but I have spent the time that I had on testing in the last few weeks  
**\<dEBRUYNE>** And it's a bit of a pita to get the strings out  
**\<_Slack> \<nanoakron>** Makes more sense to test right now anyway  
**\<maitscha>** today I tried to update german translations, but there seems to be a bug choosing the language (at least under macos)  
**\<Jaquee>** maitscha: i'm not sure if translations are fully implemented yet  
**\<medusa_>** yes we took them out basically  
**\<_Slack> \<nanoakron>** Some wizard could probably whip up a way to pull translations from another coin... ;)  
**\<medusa_>** to get it as stable a spossible for now  
**\<maitscha>** ok, I think the translation stuff needs some fixes to get it working. should we open a ticket?  
**\<Jaquee>** maitscha: yes please  
**\<Jaquee>** speaking of issues...  
**\<Jaquee>** the issue page is hard to grasp sometimes. Labels would help out alot. is that possible somehow?  
**\<@fluffypony>** yes  
**\<@fluffypony>** we have a small issue with that in that only collaborators can add labels  
**\<@fluffypony>** and GitHub aren't adding fine-grained permissions for non-collaborators   
**\<Jaquee>** ok. and collaborator = write access right?  
**\<@fluffypony>** yes  
**\<@fluffypony>** so it's too much of a security risk to hand out  
**\<Jaquee>** yes. ofc  
**\<@fluffypony>** my suggestion is that we have a Google Docs spreadsheet  
**\<@fluffypony>** with a column for each label  
**\<@fluffypony>** and then issue number -> mark the appropriate columns   
**\<@fluffypony>** and I'll go and add labels   
**\<medusa_>** personally i think we should increase the circel of caloborators by at least 1  
**\<@fluffypony>** medusa_: the entire Core Team have access  
**\<medusa_>** it seemed to me it is hard to keep track, at least this week  
**\<medusa_>** also for core?  
**\<@fluffypony>** the issue is that the people that can manage issues != the people that can be responsible for merging code  
**\<Jaquee>** yeah. how is your work load currently fluffypony? would it make sense to have more ppl doing merges in the future?  
**\<@fluffypony>** (most of the time anyway)  
**\<medusa_>** im fine with that, just make sure those people capable can also merge to monero-core in case we have a small "merge jam"  
**\<@fluffypony>** Jaquee: my work load is fine when the in-laws aren't visiting   
**\<medusa_>** haha  
**\<Jaquee>** fluffypony: lol ok  
**\<_Slack> \<nanoakron>** I think it would be reasonable to give mooo merge access as a paid major contributor who has demonstrated talents  
**\<_Slack> \<nanoakron>** Lol FP...I know the feeling  
**\<@fluffypony>** I'm trying to let PRs sit for a while so that other people review them besides me  
**\<medusa_>** yes but sometimes if we are active that causes issues  
**\<Jaquee>** makes sense. there were a lot of code conflicts last week that could have been avoided  
**\<medusa_>** or can cause issues  
**\<@fluffypony>** medusa_: merging stuff rapidly is a bad idea, we need eyes on code   
**\<Jaquee>** \*merge conflicts  
**\<+moneromooo>** I asked for PRs to stay open for a while so I have a change to see htem and review (monero repo anyway).  
**\<@fluffypony>** which means small PRs, that multiple people have looked at  
**\<@fluffypony>** I know it means that some PRs have to be rebased 3 times (sorry moneromooo)  
**\<medusa_>** i agree the right balance isnt easy, im sure we get the balance again  
**\<@fluffypony>** but it's better than stuff slipping in to the code  
**\<medusa_>** normally it also wroks well  
**\<+moneromooo>** No worries, it's less work than making them in the first place usually :)  
**\<medusa_>** this week was pretty extreme in all forms  
**\<@fluffypony>** medusa_: the QML stuff is pretty rough in terms of merge conflicts too  
**\<endogenic>** maybe there can be a structure where the required reviewers are identified by the master maintainer, notified, and must sign off before the thing can be merged ?  
**\<_Slack> \<nanoakron>** I agree that issues should sit and ferment  for a while, but sometimes there are hotfixes required like with fluffy blocks  
**\<@fluffypony>** endogenic: too structured; has a bus factor  
**\<gingeropolous>** is dev branch happening?  
**\<@fluffypony>** gingeropolous: no not atm  
**\<Jaquee>** ok. security first. i'm sure it works ok most of the time. 2 last weeks was extreme.  
**\<@fluffypony>** indeed  
**\<Jaquee>** but we could keep this in mind and evaluate further on?  
**\<medusa_>** yes you stay on watch ;-)  
**\<Jaquee>** :D  
**\<@fluffypony>** Jaquee: yes absolutely   
**\<gingeropolous>** would the dev branch approach be a way to get around the merge "bottleneck" ? i assume its still complicated b/c of zeromq..  
**\<gingeropolous>** or are u talking about core. (i will shut up now)  
**\<_Slack> \<nanoakron>** What's the plan if something horrible happens to you FP, like going on holiday for a month without internet access?  
**\<proxmr>** Hello guys  
**\<@fluffypony>** gingeropolous: no, you still can't have fine-grained collaborators on a per-branch basis  
**\<endogenic>** nanoakron: dead pony switch?  
**\<_Slack> \<nanoakron>** Lol. Yeah :) (also :( )  
**\<endogenic>** yeah  
**\<endogenic>** :’(  
**\<Jaquee>** but you can have branch specific permissions right?  
**\<Jaquee>** not sure if it would help though.  
**\<maitscha>** "protected branches"  
**\<@fluffypony>** Jaquee: you can, and it might be worth fiddling with later on  
**\<Jaquee>** all right  
**\<Jaquee>** imo we can leave this subject for now.  
**\<Jaquee>** any more questions regarding the gui?  
**\<asdef>** irc logs anywhere? for people who came too late  
**\<proxmr>** Is the gui coming in 2 days ?  
**\<maitscha>** Jaquee: how can I start the GUI under MacOS and get the console output?  
**\<@fluffypony>** proxmr: no, that's not how software development works  
**\<Jaquee>** maitscha: one sec  
**\<maitscha>** Jaquee: that would help debugging ...  
**\<Jaquee>** maitscha: build/release/bin/monero-core.app/Contents/MacOS/monero-core  
**\<asdef>** any screenshots already existing? so we can see an be happy?  
**\<Jaquee>** in monero-core dir  
**\<proxmr>** Sorry, some guy just told me on some forum, so i came to check. i appologize  
**\<maitscha>** ah ok  
**\<iDunk>** maitscha: doesn't it give outout when started from the command line like on linux?  
**\<medusa_>** asdef: check reddit  
**\<_Slack> \<nanoakron>** No worries.  
**\<maitscha>** I always started it with the finder  
**\<dEBRUYNE>** Please don't interrupt the dev meeting  
**\<Jaquee>** iDunk: yes. but it's not that easy to find the binary  
**\<Jaquee>** it's in the .app package  
**\<iDunk>** ok  
**\<maitscha>** Jaquee: works, thanks  
**\<Jaquee>** yw  
**\<Jaquee>** all right.  
**\<Jaquee>** more gui related?  
**\<_Slack> \<nanoakron>** None here  
**\<maitscha>** there are at least 2 people who would like to make a style guide  
**\<_Slack> \<nanoakron>** That's a good idea  
**\<maitscha>** should this be coordinated?  
**\<medusa_>** i think the best place to discuss specific stuff is either on github or here in the channel  
**\<Jaquee>** yes. that would be good. not sure how. but i can ask them to get in contact with each other to start  
**\<vertp>** Can we discuss an issue freeze for the beta release? I think we have all the features we need for an "MVP" and there doesnt seem to be any major outstanding bugs.  
**\<maitscha>** or at least a place where people can post design/ux-related improvements?  
**\<@fluffypony>** github  
**\<Guest5849>** Confused ... ? Quote: \<@fluffypony> so it will take a couple of days to wrap up a point release too. Does that not relate to the GUI being released?  
**\<_Slack>** **\<tfi_charmers>** Yes, styleguide, one was me. I’m still able to help.  
**\<@fluffypony>** Guest5849: a beta, yes  
**\<medusa_>** vertp: the features are basically freezed, we just change what we think is worth changing (and the treshold for that goes up each day)  
**\<@fluffypony>** vertp: "freezing" things doesn't really work for a fluid open-source project  
**\<_Slack> \<nanoakron>** Where's the best place to coordinate a style guide? A new Git repo or a wiki?  
**\<medusa_>** always considering risk reward ofc  
**\<@fluffypony>** people open issues, they get fixed, eventually you hit enough milestones / new features for a new release  
**\<vertp>** I mean freeze in the sense that of course you allow new issues to be open, but the work is prioritized based on existing issues and bugs  
**\<@fluffypony>** vertp: can't really force someone to work on anything  
**\<maitscha>** vertp: you can't stop people from working on features ;)  
**\<@fluffypony>** so if people want to work on new features instead of tackling bugs that's their prerogative   
**\<vertp>** I agree, I mean more for illya and jaquee  
**\<pero>** generally an 'issue freeze' is a bad idea  
**\<@fluffypony>** can't force them either ;)  
**\<medusa_>** vertp: we have to always allow people opening issues. their feedback is very valuable  
**\<pero>** a feature freeze is an entirely different thing and is already somewhat implemented  
**\<vertp>** I agree medusa_  
**\<Jaquee>** vertp: me and ilya are more or less frozen for the moment. :P  
**\<@fluffypony>** yes  
**\<Jaquee>** as in agreed on that current version can be released as beta  
**\<_Slack> \<nanoakron>** Vertp: we just follow a simple alpha -> beta -> release methodology, keeping in mind that even point releases are beta software under constant development  
**\<vertp>** Awesome, thats what I was going for Jaquee  
**\<vertp>** I just feel that its stable enough at this point to justify a beta without doing any additional feature dev. Thats what I meant by issue freeze  
**\<vertp>** Which I think we all agree on  
**\<Jaquee>** yes  
**\<vertp>** great!  
**\<medusa_>** yes wa try to be very pragmatic  
**\<_Slack> \<nanoakron>** This has side tracked us slightly. Where's the best place to coordinate a style document?  
• moneromooo: eyes this suspiciously  
**\<@fluffypony>** Github has this new thing called Projects  
**\<iDunk>** wat  
**\<Jaquee>** nanoakron. not sure. github best place for the moment  
**\<@fluffypony>** aI want to play with it and see if it's suitable for that  
**\<_Slack> \<nanoakron>** Cool  
**\<Jaquee>** fluffypony: sounds interesting.  
**\<Jaquee>** tfi_charmers: can you sync with that other ux guy?  
**\<_Slack> \<nanoakron>** Does sound interesting  
**\<Jaquee>** so you don't end up working on the same issues  
**\<@fluffypony>** ok - can we call this meeting done?  
**\<_Slack>** **\<tfi_charmers>** @jaquee can do.  
**\<Jaquee>** great  
**\<Jaquee>** fluffypony: yes  
**\<@fluffypony>** ok tks  
**\<+moneromooo>** Just one thing before: when does someone else do the builds ?  
**\<_Slack> \<nanoakron>** I was going to raise the issue of databases if hyc, fp and mooo are in the same room  
**\<iDunk>** hyc is roaming belfast  
**\<_Slack> \<nanoakron>** A veritable vipers nest of opinions ;)  
**\<iDunk>** anyway, i'm with fluffypony and moneromooo on the db issue  
**\<_Slack> \<nanoakron>** Why do we need the ability to iterate and test the database back end in production code?  
**\<_Slack> \<nanoakron>** And aren't we effectively overruling our resident database expert, hyc?  
• moneromooo: facepalms  
**\<iDunk>** ^  
**\<gingeropolous>** where's this discussion? i totally missed this one. not that I can do anything.  
**\<_Slack> \<nanoakron>** It's a PR of mine  
**\<_Slack> \<nanoakron>** Mooo, why the facepalm? When or where are we going to need to change the database away from LMDB in the future in such a way that we need the selection code?  
**\<_Slack> \<nanoakron>** As it stands we're shipping code thats never run, with requirements that are never used.  
**\<+moneromooo>** Because being an expert in databases does not extend to having an expert opinion on whether a selection system in a particular project is best or not.  
**\<+moneromooo>** And not knowing the particulars of a future db implementation does not by itself imply any groundworks should be dismantled at once.  
**\<gingeropolous>** and the prebuild binaries are all LMDB, right? so its not like anything's being shipped...  
**\<gingeropolous>** \*prebuilt  
**\<+moneromooo>** The current ones all are, yes.  
**\<dogecoinsarefun>** fluffyblocks still LMDB too right?  
**\<+moneromooo>** Unrelated.  
**\<dogecoinsarefun>** ok sorry  
**\<+moneromooo>** I mean, this was an obvious appeal to authority, in a context where the authority is only tangential.  
**\<+moneromooo>** I find it counterproductive to remove a useful thing, if its removal will make it a lot easier to break the ability to add another db. It's not like it's a lot of code I think.  
**\<iDunk>** agreed  
**\<+moneromooo>** There was a all RAM db being worked on, though I'm not sure it still is.  
**\<_Slack> \<nanoakron>** So has the compiler been smart enough to strip the selection stuff or is there still bloat and overhead that could be trimmed?  
**\<_Slack> \<nanoakron>** Appeal to authority is only a fallacy when the authority is not relevant to the issue at hand  
**\<@ArticMine>** There was at one point the idea that Monero could use different databases in the future.  
**\<+moneromooo>** You actually might make a good argument by removing it all and see whether performance figures support you bloat claim.  
**\<_Slack> \<nanoakron>** I'll try that  
**\<+moneromooo>** Now, the threshold where an improvement becomes larger than the loss of generality is pretty subjective too.  
**\<_Slack> \<nanoakron>** As for the PR - would you reject it for stripping out the Berkeley DB selection in CMakeLists.txt, or is that acceptable because we're not going back to BDB?  
**\<gingeropolous>** is it just for compiling performance?  
**\<+moneromooo>** IIRC, I said keep the selcetion code, just remove the bdb option.  
**\<_Slack> \<nanoakron>** I'm happy to keep the selection code in the main body, but are you happy with the structure of the current PR wrt stripping BDB from CMakelists.txt? There wasn't a selector in there afaik  
**\<+moneromooo>** Basically, you should be able to add another db by duplicating the lmdb bits. Anything that's shared needs to stay for this to be useful.  
**\<_Slack> \<nanoakron>** I'm happy to leave the selector alone in the main code  
**\<+moneromooo>** In the details ? I'll have to go read the code to know for sure.  
**\<+moneromooo>** And I'm busy debugging some cold signing stuff now, so that'll be later.  
**\<_Slack> \<nanoakron>** Understood. Please have a look at the PR and what's been stripped wrt BDB when you can. If that's still to much then I'll close and amend. By the time we get to using additional databases the CMakeLists file will have been changed many more times anyway.  
**\<_Slack> \<nanoakron>** And the final thing I wanted to ask today was whether FP could keep killing cold issues ;)  
**\<_Slack> \<nanoakron>** Tis all from me  