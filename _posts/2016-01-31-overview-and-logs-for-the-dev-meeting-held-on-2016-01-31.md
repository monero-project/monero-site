---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2016-01-31
summary: Dev branch, style guide, Collective Code Construction Contract
tags: [dev diaries, core, crypto]
author: gingeropolous
---

# Summary

## Use of dev branch

First thing discussed is the dev branch. Contributors have fell back into the habbit of merging stuff to master. All hacking should be done onto dev branch.

Apparently this is because of bugs. A new point release to fix the v1/v2 stuck transaction bugs is coming.

The thing holding up general move to development branch is that CZMQ/0MQ hasn't been bundled in source, so its a pain to compile. Everyone agrees to bundle CZMQ/0MQ into dev branch. fluffypony will get it in the source tree.

There is more talk about minor tweaks that should or shouldn't go into the upcoming point release.

## Style guide

In Kovri they've been working with [a style guide](https://github.com/monero-project/kovri/blob/master/CONTRIBUTING.md#style), and fluffypony suggests implementing one in Monero. Basically, this is the way the code is formatted (human formatted).

Its agreed to use the new style with new code, and restyle-as-you-go with old code. Restyling for the sake of restyling is though to be unnecessary. Key points:

> we assume from this point on the code is indented like the majority of the code so far - 2 spaces, not tabs, not 4 spaces.

> push harder on "code should go in a .cpp not .h"

## Collective Code Construction Contract (C4)

As used in 0MQ as [described here](http://rfc.zeromq.org/spec:22)

The idea is to merge every PR as long as it doesn't break the build. Aim is to avoid PR-hell where everyone comments on a PR for days and weeks and it never gets merged, because its never "perfect." Merge-everything is done so that contributors establish a history, and they can be banned if they are repeat offenders.

In general, the idea is agreed upon. However, there is concern and uncertaintly regarding the roles of the various branches and how the contract applies to which branches. The conversation bleeds into ringCT implementation and timeframe and how the c4 would affect this process. The fact that 0MQ-dev branch is currently unusable is brought up regarding how the c4 would function. It is noted that 0MQ was pushed to dev because the original contributor couldn't continue working on it. Ultimately the 0MQ situation will not happen again.

Ultimately, this issue will be brought up at the next meeting.

## Keep hacking around things or dump stuff for things that are easier

This is a lot of meta-code stuff. The thing that was salient to me was the doxygen-compatible approach, which would allow newcomers to the code to become acquainted more efficiently.

## Thanks!

fluffypony extends his gratitude to all contributors, and everyone makes their way to the reception hall for bacon wrapped shrimp, pigs in blankets, and all other sorts of tiny foods that hover on discs.

# Logs

**\<fluffypony>**  who are we missing  
**\<fluffypony>**  tewinget / othe / warptangent / NoodleDoodle you guys around?  
**\<warptangent>**  ^  
**\<fluffypony>**  hokay  
**\<dEBRUYNE>**  smooth?  
**\<fluffypony>**  smooth and luigi1111w are around  
**\<fluffypony>**  although luigi1111w is using some other nick  
**\<fluffypony>**  luigi1112 I think  
**\<luigi1114>**  4  
**\<moneromooo>**  mario1114  
**\<fluffypony>**  lol  
**\<fluffypony>**  about a year ago we did this using TeamSpeak  
**\<fluffypony>**  I mean Mumble  
**\<luigi1114>**  for you guys  
**\<fluffypony>**  which was nice, but it isn't as fluid as typing because sometimes you can't hear that someone else is talking  
**\<binaryFate>**  Firechat? Was cool  
**\<fluffypony>**  binaryFate: no we did a couple of actual dev meetings   
**\<fluffypony>**  but it's tough to sustain  
**\<binaryFate>**  Oh ok  
**\<xmrpromotions>**  I think typing is fine too.  
**\<ArticMine>**  This is fine  
**\<fluffypony>**  agreed  
**\<fluffypony>**  plus there are people working on Monero that would prefer not to have to use a voice changer just to participate :-P  
**\<fluffypony>**  ok so there are a few things on the agenda   
**\<luigi1111>**  I'm sick so my voice is already changed  
**\<warptangent>**  the format seems to have been working well for kovri too  
**\<fluffypony>**  the first thing I think we should discuss is the dev branch   
**\<fluffypony>**  we've fallen back into the habit of merging stuff to master  
**\<moneromooo>**  That's because bugs  
**\<fluffypony>**  I know  
**\<fluffypony>**  we're going to have to do a point release to fix the v1/v2 / stuck transactions bugs  
**\<fluffypony>**  are there any bug fixes waiting in the wings, or should we do that next week?  
**\<moneromooo>**  That last commit thing, which I'll have to think about a bit more.  
**\<moneromooo>**  Also, possibly merging the per-tx bits in lmdb.  
**\<hyc>**  which?  
**\<moneromooo>**  tx_{unlocks,heights,outputs}  
**\<hyc>**  ah  
**\<moneromooo>**  And output_{keys,amounts,indices,txs}  
**\<hyc>**  DB format change, I don't think that's a bug-fix  
**\<moneromooo>**  Way more of htose than blocks  
**\<fluffypony>**  maybe we need to consider a more generalised approach to format changes   
**\<fluffypony>**  something like Laravel's migrations  
**\<fluffypony>**  it'll have to be per-DB-format anyway   
**\<fluffypony>**  per-DB-type I mean  
**\<warptangent>**  i've got schema changes i've been using for a couple months, for better use on hdd, but they aren't bug fixes.  
**\<warptangent>**  two sets of bug fixes not yet added though  
**\<fluffypony>**  ok if they're not considered crucial for 0.9.x then we can put them into dev?  
**\<hyc>**  warptangent: since I've been working on the same thing, I guess I should take a look at your stuff  
**\<warptangent>**  1. berkeleydb support for importer - almost ready, some argument usage cleanup  
**\<moneromooo>**  Once I re-merged then  
**\<hyc>**  but I don't consider anything I'm looking at now as bug-fix  
**\<fluffypony>**  (this is how we meeting https://i.imgur.com/OR5ZVoI.jpg)  
**\<warptangent>**  2. finish hf fix for importer - mostly done, pending some cleanup with bdb  
**\<fluffypony>**  hokay  
**\<hyc>**  (I have a wineglass here too, sadly empty)  
**\<warptangent>**  hyc: yes, that would be good. i think i mentioned the tx changes last month to avoid as many subdbs with tx hash keys  
**\<fluffypony>**  also I think the thing that's holding up a general move of effort to dev is that we haven't bundled CZMQ / 0MQ in source, which makes compiling a bit painful  
**\<fluffypony>**  any objections to the bundling?  
**\<luigi1111>**  how much of a pain is it to change formats?  
**\<hyc>**  I haven't even looked at dev. no objection from me  
**\<fluffypony>**  luigi1111w: mostly just requires copying data to a new table and nuking the old one  
**\<moneromooo>**  Hmm. I have a few patches to czmq, to make things build.  
**\<moneromooo>**  Not super sure whether it was me being dumb or not though.  
**\<fluffypony>**  ok well moneromooo, maybe post-bugfix do you want to do the merge from master to dev, and then plonk those patches on?  
**\<fluffypony>**  I'll get it in the source tree the meantime, and cmake-ify all of the things  
**\<moneromooo>**  I'll merge yes. Then you can add zmq to the cmake stuff :P Then I'll add my patches if they're still needed.  
**\<moneromooo>**  Great, ty  
**\<fluffypony>**  great minds think alike  
**\<fluffypony>**  ok next I'd like us to chat about a style guide  
**\<fluffypony>**  we've been working on one in Kovri that we can possibly use for Monero  
**\<fluffypony>**  https://github.com/monero-project/kovri/blob/master/CONTRIBUTING.md#style  
**\<hyc>**  oh, I do have one outstanding - tweak to BlocchainLMDB::get_estimated_batch_size - change batch_safety_factor to get blockchain_import to succeed on 32bit  
**\<fluffypony>**  not necessary to read the style guide now, just more a general sense of if everyone is comfy with *a* style guide, and if anyone has any particular preferences   
**\<smooth>**  i have no objection to any reasonable style guide but i do object to re-styling of existing code  
**\<moneromooo>**  Pages and pages of stuff ? :|  
**\<moneromooo>**  I object too, if it's only restyling for the sake of it.  
**\<fluffypony>**  ok so more of a restyle-as-you-go   
**\<moneromooo>**  That massive reindent patch already caused me grief  
**\<fluffypony>**  which is in line with our refactor-as-you-go approach  
**\<ArticMine>**  Apply the style guide to new code  
**\<smooth>**  imo the best policy is keep the style on small chages to existing code and new style on new code  
**\<smooth>**  there is probably a gray area there  
**\<warptangent>**  should we assume from this point on the code is indented like the majority of the code so far - 2 spaces, not tabs, not 4 spaces.  
**\<hyc>**  agreed  
**\<fluffypony>**  warptangent: that's the one area where we differ from Kovri, I'd lean towards yes  
**\<moneromooo>**  I tend to keep the style of whatever I'm hacking on. And I doubt I'll read all that google style guide thing. I'd prefer we use common sense.  
**\<warptangent>**  moneromooo: style on the current project though, not different styles per file, right?  
**\<moneromooo>**  Whatever code I'm modifying.  
**\<moneromooo>**  It causes the least problems.  
**\<fluffypony>**  moneromooo: don't worry about the Google style guide, the 16 points we've put in for Kovri are more what I was referring to  
**\<warptangent>**  the majority of files are one style in the codebase, with a few that became some kind of hybrid at one point  
**\<moneromooo>**  Oh OK.  
**\<moneromooo>**  With that out of the way...  
**\<fluffypony>**  ok - everyone happy with that as a general starting point? I can dump those points in and then we can take pull requests on it if anyone wants to refine / change things  
**\<warptangent>**  yes, seems good  
**\<hyc>**  I would push harder on "code should go in a .cpp not .h"  
**\<fluffypony>**  hyc: agreed  
**\<fluffypony>**  I'll make it clearer  
**\<fluffypony>**  moneromooo: did you want to raise a point, or were you saying we can move on?  
**\<hyc>**  overall it looks sane to me  
**\<moneromooo>**  I'm good.  
**\<fluffypony>**  ok   
**\<fluffypony>**  next point is also administrative in nature  
**\<fluffypony>**  we'd like to adopt the Collective Code Construction Contract that 0MQ uses, as a guide for project administrators and for contributors  
**\<fluffypony>**  http://rfc.zeromq.org/spec:22  
**\<fluffypony>**  we can discuss it more in future, but the long and the short of it  
**\<fluffypony>**  is that we merge every PR as long as it doesn't break the build  
**\<fluffypony>**  if it does something bad / dangerous we can have a follow up PR to revert  
**\<fluffypony>**  but the aim is to avoid PR-hell where everyone comments on a PR for days and weeks and it never gets merged  
**\<fluffypony>**  because it's never "perfect"  
**\<fluffypony>**  so merge, create issues on Github where something is lacking (eg. new feature, little or no tests - create issues for tests)  
**\<moneromooo>**  This PR-hell problem's never happened, has it ?  
**\<fluffypony>**  moneromooo: not in Monero yet, but Bitcoin is chock-full of it  
**\<gingeropolous>**  ^ this is for dev branch, right?  
**\<moneromooo>**  I think common sense is again a better thing than going the opposite extreme.  
**\<fluffypony>**  gingeropolous: this is in general  
**\<warptangent>**  i haven't read the zeromq document thoroughly, but does it leave room for the common sense aspect?  
**\<fluffypony>**  moneromooo: the problem is that there are lots of nuanced situations where "common sense" isn't that common :-P  
**\<smooth>**  i dont think there should be an arbitrary merge policy on master, but it is already stated by me that i dont think anything but tagged releases should go on master  
**\<moneromooo>**  Well, if it's nuanced, fine.  
**\<fluffypony>**  warptangent: it does, yes  
**\<fluffypony>**  as explained by Pieter to binaryFate and I last year  
**\<smooth>**  if the concept of only taggest releases on master is no adopted then i would oppose going even further in the other direction  
**\<smooth>**  *tagged  
**\<fluffypony>**  smooth: yes that's a given  
**\<fluffypony>**  master represents a stable, tagged release  
**\<fluffypony>**  we work in dev  
**\<fluffypony>**  anyone that submits a PR to master gets it closed and asked to submit it to dev  
**\<fluffypony>**  anyway what I wanted to say, is that Pieter explained that the reason that you want to merge-all-of-the-things and then revert something bad is that you have a historical record of the bad actor   
**\<smooth>**  there needs to be a place for bug fix releases though  
**\<binaryFate>**  I'm with you fluffypony. 0MQ founder/leader feedback on this approach was extremely valuable.  
**\<moneromooo>**  There's also the potential thing about not being able to use the 0mq version in time for the next 6-month fork. It wasn't exactly usable yet last I hacked on it.  
**\<binaryFate>**  Common sense might work now, long term with a higher market cap we'll face same issues as btc  
**\<binaryFate>**  Where common sense diverges and the code Base ossifies  
**\<xmrpromotions>**  As a non programmer smooths comment seems like the safer approach. Thank you for clarifying the master vs dev branch issue fluffy. http://rfc.zeromq.org/spec:22 sounded scary as applied to PRs sent to master before dev  
**\<fluffypony>**  smooth: it doesn't preclude it  
**\<fluffypony>**  moneromooo: as it stands we're probably going to push the fork date out a little to see if we have enough room to work on RingCT, so that's fine  
**\<binaryFate>**  What's the envisionned time scale for ringct?  
**\<smooth>**  the idea of a historical record is good  
**\<hyc>**  we have similar issues with OpenLDAP - you need 3 branches  
**\<hyc>**  one for dev, one for released code, and one for release bugfixes  
**\<smooth>**  but i would make the case then that 0MQ should be reverted since it is unusable  
**\<hyc>**  particularly when dev and release are far apart  
**\<smooth>**  im not actually proposing this because i know it would be a mess, but making a point for the future  
**\<hyc>**  like now, where dev has 0MQ and release doesn't  
**\<fluffypony>**  smooth: I agree - moneromooo and I will play around with it next week and make a decision   
**\<moneromooo>**  Reverting isn't really possible.  
**\<fluffypony>**  moneromooo: we could drop dev and re-branch  
**\<moneromooo>**  But one could add ringCT to a new branch based on master.  
**\<fluffypony>**  if it came to that, I mean  
**\<moneromooo>**  That'd be a lot of pain. I'd rather not. Much better to hack on master and merge do dev again.  
**\<fluffypony>**  ok  
**\<smooth>**  imo something like zeromq should be developed on a separate branch somewhere, until it is actually usable  
**\<moneromooo>**  s/on master/on a branch based off master/  
**\<fluffypony>**  smooth: it was usable-ish, we might have regressed some in fiddling   
**\<moneromooo>**  Yes, that.  
**\<fluffypony>**  anyway - let's evaluate and figure out  
**\<moneromooo>**  I think I added all missing RPC so it cn be used, just not by people who want it to work without problem.  
**\<dnaleor>**  **\<fluffypony> moneromooo: as it stands we're probably going to push the fork date out a little to see if we have enough room to work on RingCT, so that's fine <= I welcome this. Just wanted to say that imho it's important to have RingCT active in the september/october hard fork. Carry on. i'm watching  
**\<hyc>**  doing all new work in dev is fine, but backporting bugfixes to release will become non-trivial as more features are added to dev  
**\<fluffypony>**  hyc: I guess it depends on the importance of a bug fix  
**\<moneromooo>**  It looks to me like ring CT is going to need a lot of changes to bitmonerod/CN. September looks very close.  
**\<fluffypony>**  we'll see   
**\<fluffypony>**  I don't think we need to create a pressure-cooker for it  
**\<fluffypony>**  ok can I go on?  
**\<ArticMine>**  There are trade offs here. I see problems if dev and master deviate materially  
**\<xmrpromotions>**  it seems like 3 branches as smooth mentioned would be easiest for everyone in long run even if it requires more effort now. 1.dev 3. release and bug fixes  
**\<fluffypony>**  xmrpromotions: otoh we can backport fixes straight into master to allow for immediate testing by affected parties  
**\<ArticMine>**  With bug fixes as a transition from dev to master  
**\<fluffypony>**  again depends on the nature of the bugfix   
**\<fluffypony>**  like warptangent's work on BDB and the importer probably aren't critical enough to go into master  
**\<warptangent>**  the importer works properly when it has the hard fork support though, and that uses the bdb support  
**\<moneromooo>**  If someone wants to rewrite that hard fork code, btw, you're welcome. I don't like it, and I'm not sure how to improve it.  
**\<ArticMine>**  My concern is master deviating materially from a quasi stable dev  
**\<fluffypony>**  ArticMine: something like ringct would have to be done in both master and dev  
**\<ArticMine>**  So a project based on master would need a major rewrite after a tagged release  
**\<fluffypony>**  we did dual-PRs for a while  
**\<fluffypony>**  we can do them again  
**\<fluffypony>**  might be easier than The Grand Merge  
**\<smooth>**  something like ringct should only be in dev imo  
**\<ArticMine>**  Yes anything fundamental has to be done in parallel  
**\<smooth>**  until it gets released of course  
**\<fluffypony>**  I think let's defer further discussion of this till the next meeting  
**\<luigi1111>**  agreed to both  
**\<fluffypony>**  we don't have enough info on the ringct effort or on the state of the dev branch right now anyway  
**\<binaryFate>**  One thing I miss in discussion is what is master purpose? Do we want to encourage users to compile from it? How is master gonna diverge from tag release between them?  
**\<ArticMine>**  I agree and lets carefully review the zeromq rfc in the meantime  
**\<moneromooo>**  I think large things should go to their own branch (ie, ringct). Smaller things can share branches (to dev). Both end up being merged to master when ready.  
**\<fluffypony>**  binaryFate: no matter what we say people clone and build master  
**\<gingeropolous>**  **\<- this guy  
**\<fluffypony>**  it doesn't matter how much we encourage building a tagged release  
**\<fluffypony>**  so we made a decision ages ago that master would be stable  
**\<fluffypony>**  so that anyone pulling and building master doesn't get some hacky, broken branch  
**\<binaryFate>**  Ok  
**\<fluffypony>**  moneromooo: I don't know if we want topic branches in the main repo, but perhaps a more generalised "staging" branch, as long as anything going to that is also PRd to dev  
**\<moneromooo>**  It can be in any repo.  
**\<smooth>**  i think not in the main repo is fine  
**\<moneromooo>**  Like I was hacking on tewinget's branch for a while.  
**\<fluffypony>**  yeah that's a good point  
**\<luigi1111>**  +1  
**\<fluffypony>**  as long as that person is around and accepting PRs it's perfect  
**\<warptangent>**  then one big PR to dev when it's ready?  
**\<moneromooo>**  If we go to a dev/master setup, how does dev get merged to master anyway ?  
**\<warptangent>**  that has worked before, yes  
**\<hyc>**  yeah, keep main repo relatively clean  
**\<luigi1111>**  a new feature can get a sort of "lead dev"  
**\<fluffypony>**  moneromooo: when we release we merge from dev to master and tag master  
**\<luigi1111>**  and contributers can hack on his repo  
**\<moneromooo>**  So master becomes a copy of dev at that point ?  
**\<fluffypony>**  yes  
**\<ArticMine>**  Yes but a six month cycle could be too long  
**\<smooth>**  thats a different issue  
**\<smooth>**  how often to have major releases  
**\<fluffypony>**  we can do major releases whenever, as long as we have major fork releases every 6 months  
**\<smooth>**  also are releases time based or feature based  
**\<luigi1111>**  kinda both ?  
**\<fluffypony>**  yeah both  
**\<hyc>**  feature-based is all that makes sense to me  
**\<ArticMine>**  The merge to master may need to be more frequent than major fork releases  
**\<moneromooo>**  feature based, but the rolling hard fork also pulls time based I think.  
**\<fluffypony>**  yes  
**\<binaryFate>**  Those Dev -> Master merges would happen with what kind of tagging? Point fix? Even more frequent?  
**\<fluffypony>**  binaryFate: depends on how stable dev is  
**\<luigi1111>**  so new features thus shouldn't be in dev until they are working properly/ready for release  
**\<luigi1111>**  because of timed releases  
**\<smooth>**  time based means that if you have 6 features in progress and one doesn't work in time, you do the release anyway, without the unfinished feture  
**\<fluffypony>**  smooth, luigi1111: yes, you're both right  
**\<luigi1111>**  it works as long as the half finished feature isn't partially merged  
**\<luigi1111>**  or whatever  
**\<fluffypony>**  the only reason 0MQ got pushed to dev anyway was because oranjuice could no longer work on it, and it was basically done  
**\<fluffypony>**  but I think let's make it the last time that happens  
**\<fluffypony>**  then we avoid complication  
**\<warptangent>**  ok  
**\<moneromooo>**  tbh I'd be tempted to not really care about people building master. If it's said clearly to use a release if you don't know what you're doing, then it's your problem.  
**\<smooth>**  i agree with ArticMine that we can have releases sooner than 6 months  
**\<gingeropolous>**  ah ok. so how the 0MQ happened is not how it will be in future  
**\<binaryFate>**  Agree with moneromooo  
**\<fluffypony>**  ok guys we're running overtime, so let's drop this for now, we can pick it up again later  
**\<smooth>**  i think it is simply unnecessary to merge to master  
**\<smooth>**  er sorry, commit unreleased stuff to master  
**\<moneromooo>**  I think one of the problems with 0mq is that oranjuice kinda left  
**\<smooth>**  any developer can handle getting the latest stuff from someone ele  
**\<smooth>**  *somewhere else  
**\<moneromooo>**  So it jsut had to be merged  
**\<ArticMine>**  Let get back to this question at the next meeting  
**\<fluffypony>**  ok  
**\<fluffypony>**  last two things   
**\<smooth>**  yup  
**\<fluffypony>**  the first is that we have some major efforts coming up, besides ringCT, and things like epee, the 3 (THREE!!!) different logging systems, and a bunch of unused stuff is going to get in the way  
**\<fluffypony>**  I'd like us to decide whether we want to keep hacking around things  
**\<moneromooo>**  Does epee really get in the way ?  
**\<fluffypony>**  or if we want to spend the effort now dumping this stuff for things that are easier  
**\<hyc>**  it makes 32bit builds murder. but if we can abandon 32bit, that problem disappears too  
**\<moneromooo>**  epee does ?  
**\<hyc>**  yeah  
**\<fluffypony>**  moneromooo: yes it does; it made QoS an absolute nightmare to do  
**\<fluffypony>**  and it's still not done properly  
**\<moneromooo>**  We'd have a replace a lot of stuff.  
**\<ArticMine>**  32bit especially on windows is going to be around for a long time  
**\<dEBRUYNE>**  + TAILS  
**\<moneromooo>**  And a lot of somewhat low level stuff.  
**\<warptangent>**  the multiple logging systems situation is strange, but i don't think it's interfered with current work. is there any knowledge on rfree's likelihood of returning?  
**\<fluffypony>**  warptangent: low to impossible at the moment  
**\<fluffypony>**  I mean, we can rip and replace the logging stuff with boost::log  
**\<fluffypony>**  all the console stuff can go ncurses or similar   
**\<smooth>**  id be more in favor of specific items like that, done on feature branch  
**\<fluffypony>**  and the wire protocol can go ZMTP, since we have a 0MQ dep anyway  
**\<fluffypony>**  eventually we'll get to a point where we're no longer reliant on epee  
**\<moneromooo>**  I agree with the bit by bit approach.  
**\<warptangent>**  that sounds manageable  
**\<fluffypony>**  also then we'll actually have usable Doxygen docs  
**\<smooth>**  the thing to bear in mind is this has virtually zero end user benefit, if not actually zero  
**\<fluffypony>**  yes  
**\<fluffypony>**  on the flip side, we can plug the GUI in via 0MQ instead of monero-as-a-library  
**\<moneromooo>**  Well, the benefit is said to be for 32 bit users.  
**\<fluffypony>**  so we have a shortcut of sorts there  
**\<fluffypony>**  (in terms of users clamouring for stuff)  
**\<fluffypony>**  moneromooo: and long-term viability   
**\<fluffypony>**  we've had potential contributors ask for an architectural doc for the code, and get turned off when there isn't one  
**\<fluffypony>**  so there's scope to slowly bring the codebase in line  
**\<smooth>**  i dont believe there is anything about the current code that precludes a GUI. After all, BBR has one with basically the same code.  
**\<hyc>**  huh.. contributors that are turned off so easily ... I wouldn't expect much use out of them if they stayed  
**\<moneromooo>**  I was kinda thinking that too...  
**\<fluffypony>**  I guess, but tbh it does make the project seem significantly less mature  
**\<fluffypony>**  which I guess is fair, it's not even 2 years old  
**\<gingeropolous>**  less hurdles, more good  
**\<smooth>**  it is somewhat hard to come up to speed with the code, i would agree with that  
**\<fluffypony>**  alright  
**\<fluffypony>**  last thing so we can wrap up  
**\<fluffypony>**  I just wanted to deeply thank everyone who has contributed and who continues to contribute to Monero development, whether it is Monero's core, the website, any other peripheral projects  
**\<fluffypony>**  both on behalf of the core team, and on behalf of the community   
**\<fluffypony>**  you all do an amazing job, and we've done a truckload of work in 2014 and 2015  
**\<fluffypony>**  so here's to an amazing 2016  
**\<gingeropolous>**  hear hear! thank you fluffypony for herding the cats so good  
**\<Bassica>**  hear hear!  
**\<xmrpromotions>**  thank you!  
**\<ArticMine>**  Thanks for all the good work  
**\<fluffypony>**  thus concludes the first meeting, next one in two weeks  
**\<warptangent>**  thanks fluffypony  
**\<luigi1111>**  thanks  
**\<binaryFate>**  Thanks to you fluffy (enjoy that wine)! Thanks to all of you, awesome community.  
**\<dEBRUYNE>**  Thanks fluffypony!  
**\<hyc>**  **\<glug> thanks all  
**\<Infinite_Jest>**  is there a buffet?  
**\<fluffypony>**  Infinite_Jest: snacks will be served in The Grand Ballroom in 15 mins  
**\<Infinite_Jest>**  ok great :) but seriously thanks!  
**\<cardboardoranges>**  thanks fluffy