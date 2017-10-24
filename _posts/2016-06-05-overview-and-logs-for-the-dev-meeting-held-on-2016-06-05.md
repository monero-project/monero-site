---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2016-06-05
summary: introduction to C4 by Yurii Rashkovski, brief update on Ring CT and 0MQ
tags: [dev diaries, core, crypto, 0mq]
author: dEBRUYNE / fluffypony / Aerbax
---

### Overview

An overview [can be found on Hello Monero](https://hellomonero.com/article/monero-bi-weekly-dev-meeting-note-highlights-2016-06-05)

### Logs

**\<fluffypony>** everyone ready to start? smooth / tewinget / dEBRUYNE / ArticMine / luigi1111w / luigi1112 / luigi1114 / NoodleDoodle / gingeropolous etc.  
**\<ArticMine>** yes  
**\<fluffypony>** hyc is excused, as he is at Pieter Hintjen's wake  
**\* dEBRUYNE** slaps othe, moneromooo   
**\<dEBRUYNE>** did we forget anyone? :p  
**\<fluffypony>** don't think so  
**\* dEBRUYNE** pages redfish  
**\<dEBRUYNE>** Think that covers it  
**\<fluffypony>** ok cool  
**\<moneromooo>** Traditional Dutch greeting ?  
**\<fluffypony>** lol  
**\<fluffypony>** traditional Dutch greeting = "hallo"  
**\<fluffypony>** so to start this meeting off I wanted to introduce yrashk, Yurii Rashkovskii  
**\<fluffypony>** he's our special guest for today  
**\<moneromooo>** o/  
**\<fluffypony>** a little bit of background: as everyone is aware we've been looking at formally adopting C4, the Collective Code Construction Contract  
**\<fluffypony>** which 0MQ uses  
**\<yrashk>** hey hey  
**\<fluffypony>** forgot to start meeting-bot, sorry  
**\<fluffypony>** ok  
**\<fluffypony>** so  
**\<fluffypony>** with Pieter passing the mantel on to others one of the things that has happened is that yrashk has split some of these "soft skills" things off into something called Unprotocols  
**\<fluffypony>** and what I wanted is for yrashk to tell us a little bit about C4 and COSS, and talk a bit about how C4 differs from the dreaded CoC - because adopting a CoC is simply not going to happen, but adopting C4 is a much better option  
**\<fluffypony>** yrashk: the floor is yours  
**\<yrashk>** fluffypony: thanks for the intro!  
**\<yrashk>** yeah, actually Pieter has passed the unprotocols.org domain to me as well to play with the idea of extracting C4 and COSS (and more protocols in the future) into a separate domain from ZeroMQ and Digistan projects.  
**\<yrashk>** as a side node, I think that action itself was very much in the spirit of C4 — it was a quick decision when I confirmed the fact that I want to volunteer, and the domain was passed over.    
**\<yrashk>** what actually has drawn me to C4 was 1) its simplicity and 2) the rules that seemed to lead to less tension between people  
**\<yrashk>** it's hardly possible to eliminate those, of course, but it's easy to create "hot spots" unintentionally  
**\<yrashk>** I was thinking a lot about situations when things got heated before and when I myself got an urge to say things I later regretted  
**\<yrashk>** and I saw that it was often over a value judgement  
**\<yrashk>** ("do we need a feature X?" "do we implement it this or that way?" etc.)  
**\<yrashk>** on the other hand, I had two arguments against CoC  
**\<yrashk>** one was the Opalgate (https://github.com/opal/opal/issues/941), second one was a tad more complex... it felt like it's just a tool to punish or eject people... a guillotine. something not focused on the positive but rather on handling the negative stuff.  
**\<fluffypony>** 100% agreed  
**\<yrashk>** with C4, the main rules of the game were pretty simple: maintainers can't hold up your patch because of your value judgement  
**\<yrashk>** even if it is stupid  
**\<yrashk>** by the contract, everybody has a right to contribute  
**\<yrashk>** the contributions must get merged in quickly (possibly after passing some sanity tests, like travis ci or a quick glance — that said, Pieter says, merge anything — you'll get a permanent record of trolls as well)  
**\<yrashk>** so instead of having a hierarchy of contributors (maintainers' opinion being more important than others' by default), it's rather a flat space where maintainers' role is rather administrative, to enforce the process.  
**\<yrashk>** if they (like anyone else) have a value judgment, they can express it either as another PR, or they comment on the patch after the patch got merged in.  
**\<yrashk>** no bike shedding, no gatekeeping  
**\<yrashk>** everything is record. anything can be easily reverted.  
**\<yrashk>** is recorded*  
**\<yrashk>** there's, however, an important philosophical principle behind. My current thesis (after conversing with different people) is that those who believe in individual intelligence (as opposed to aggregate group intelligence) have a harder time accepting C4.  
**\<yrashk>** I met people who strongly believe that their experience and intelligence justify them being gatekeepers  
**\<yrashk>** Pieter does talk about this in his books... basically arguing that individual intelligence applied to a particular work  is rather a product of luck, not a systematic thing  
**\<yrashk>** another important aspect of C4 that helps justifying just about every incoming PR, is that they are REQUIRED to contain a problem-solution statement (http://rfc.unprotocols.org/spec:1/C4/,section  2.3.7)  
**\<fluffypony>** 'A patch commit message MUST consist of a single short (less than 50 characters) line stating the problem ("Problem: ...") being solved, followed by a blank line and then the proposed solution ("Solution: ...").'  
**\<yrashk>**  if a patch solves a particular problem instead of doing something that "might be helpful" or a "nice thing to do", it's easier to form your own opinion about the patch and see if any corrective measure should be taken  
**\<yrashk>** (should I send a reverting PR if it is a total and utter BS? should I help improving this? etc.)  
**\<yrashk>** I guess this braindump is good for starters. I'll take questions, if any?  
**\<fluffypony>** ok so my first questions when I read C4 was about how it deals with people who are disruptive  
**\<moneromooo>** Do you end up with a pile of crap in git, making view diffs a pain, bisect impossible, and generally having to waste time with crap ?  
**\<fluffypony>** how does it do so in a non-guillotine manner ?  
**\<yrashk>** (also, my short article on the subject https://blog.eventsourcing.com/productive-welcoming-vs-code-of-conduct-656b1571ddd6)  
**\<yrashk>** fluffypony: first important thing, the way I understand it, is getting everything logged. merge disruptive people's commits. this way you get a permanent log of their behaviour.  
**\<yrashk>** fluffypony: the rest is no different from other approaches: discuss the situation, if a correction can't happen, ban/eject  
**\<fluffypony>** yeah I gathered the focus was on people self-correcting instead of being forced to correct  
**\<yrashk>** moneromooo: you tell me https://github.com/zeromq/czmq/commits/master (as an example) — but basically, at least in my rationalization behind this, with great powers come great responsibilities  
**\<yrashk>** when you treat people like adults, they tend to behave more like adults  
**\<yrashk>** resulting in better ORs  
**\<yrashk>** PRs*  
**\<fluffypony>** I think the worst case scenario is someone submits a PR that intentionally introduces a backdoor, or intentionally breaks things  
**\<yrashk>** I see this "optimistic" merge strategy as a way to treat people like adults  
**\<fluffypony>** in which case the reverted PR is a black mark against them  
**\<moneromooo>** You assume good faith, and a single bad faith person can throw a lot of crap in.  
**\<yrashk>** fluffypony: exactly, a permanent record (as opposed to a rejected PR, which might be lost over time)  
**\<fluffypony>** moneromooo: the issue is that doing it the *other* way means a bad faith person can waste everyone's time  
**\<yrashk>** moneromooo: just like anybody can throw a lot of crap in, it can be thrown own the same way  
**\<moneromooo>** But why would we want a permanent record of spam patches in the first place ?  
**\<ArticMine>** So the concept is it is easy to undo / revert damage while leaving a cleat and objective trail for community accountability  
**\<moneromooo>** yrashk: I'm worried about the history here, not the snapshot.  
**\<yrashk>** moneromooo: because that helps identifying the bad actors at a later point ("yup, known spammer")  
**\<moneromooo>** I imagine someone wanting to DoS us would not use the same email over and over again. They're good at sock puppets.  
**\<yrashk>** it's a bit like a TSA thing — assume any passenger can be a terrorist and check everybody or do the intelligence work to single out bad actors.  
**\<moneromooo>** Appeal to emotion.  
**\<yrashk>** moneromooo: I guess it is highly dependent on the nature of the project — how many bad actors are actually interested to disrupt the project  
**\<fluffypony>** moneromooo: consider it this way - if I'm compiling every-single-PR on every-single-platform and then testing-each-platform that's like an 2-3 hours per PR  
**\<fluffypony>** so how easy is it to waste my time :-P  
**\<yrashk>** that's actually a worse DoS  
**\<moneromooo>** Do you do that ?  
**\<yrashk>** time is the most valuable thing  
**\<yrashk>** well, any PR review takes time  
**\<yrashk>** and delays releases further  
**\<fluffypony>** moneromooo: not since we've introduced that brief-code-review process, I just merge based on a visual inspection or a review by some known contributor  
**\<fluffypony>** someone will compile it and see it's broken, and that someone doesn't have to be me  
**\<yrashk>** C4 doesn't actually say the code should not be reviewed  
**\<moneromooo>** I think there are a large number of possible positions between "compile every single PR and test on all platforms" and "rubber stamp everything". For instance, "have a look and reject if it doesn't pass the smell test".  
**\<yrashk>** it's just done after the merging  
**\<fluffypony>** moneromooo: we'll still have smell tests  
**\<moneromooo>** That seems good to be ("I just merge based on a visual inspection or a review by some known contributor").  
**\<moneromooo>** (and I try to review those fwiw)  
**\<fluffypony>** also the action AFTER a failed smell test is important  
**\<fluffypony>** ie. do we then have a long, drawn-out convo on github  
**\<fluffypony>** or do we merge and revert, then explain to the person why that happened  
**\<moneromooo>** As for building, you said you'd like a build bot IIRC. That'd help a lot there.  
**\<moneromooo>** But the things I'm worried about are not held off by a build check.  
**\<yrashk>** I use travis-ci so I can quickly see if PR breaks existing tests  
**\<fluffypony>** yeah a build check solves a small subset of issues, 100% moneromooo  
**\<moneromooo>** Maybe I'm paranoid, but I totally see part of the BCT jerks spamming our tree just because.  
**\<yrashk>** do they do this right now?  
**\<moneromooo>** Not to my knowledge.  
**\<fluffypony>** moneromooo: it's MUCH easier to deal with that if we merge-and-revert than if we analyse and have long github discussions  
**\<yrashk>** one of the main ideas behind C4 is to incentivize the positive contributors to get their stuff in quickly, without painless waiting and discussions  
**\<yrashk>** I've beed in a situation where it just becomes so painful to abide by all the maintainers' wants to get something in  
**\<fluffypony>** https://github.com/bitcoin/bitcoin/pull/5905  
**\<fluffypony>** that PR is over a year old  
**\<yrashk>** or when the maintainers are busy with other projects, or don't care about a particular problem enough to get my stuff in quickly  
**\<yrashk>** without painful waiting*  
**\<fluffypony>** and there are lots like that - full of discussion, "concept ACKs" and so on  
**\<dEBRUYNE>** \<moneromooo> As for building, you said you'd like a build bot IIRC. That'd help a lot there. <= Zcash has a build bot afaik, might want to look into that   
**\<fluffypony>** we use travis on Kovri  
**\<moneromooo>** What are the problems now, beyond fluffypony's time ?  
**\<fluffypony>** but hoping for a more OS-complete buildbot  
**\<yrashk>** the other way to look at it — with C4, you have *all contributors* as reviewrs  
**\<yrashk>** not just a handful of maintainers  
**\<yrashk>** because everybody can initiate a corrective action  
**\<fluffypony>** moneromooo: the main problem is that we don't want to become exclusionary, where only a handful of special contributors actually have successful PRs  
**\<moneromooo>** That would not happen if there is a large enough numbers of people who can review and ack something.  
**\<moneromooo>** And doing so would not need so muvch time from you either.  
**\<yrashk>** yet another way to look it, if you have gatekeepers, they *would* have biases of different kind when looking at a patch, conscious or subconscious; C4 helps making project more diverse as value judgement or more subtle biases don't affect the input.  
**\<yrashk>** (speaking of C4 vs CoC)  
**\<moneromooo>** What is CoC ?  
**\<yrashk>** Code of Conduct  
**\<fluffypony>** moneromooo: Bitcoin has significant numbers of people that can review and ACK, yet there are 102 open PRs stuck in PR-review-hell  
**\<yrashk>** CoC is about prohibiting certain types of behaviours and topics  
**\<moneromooo>** This may be so, but I do not believe a free for all is better.  
**\<yrashk>** in the name of attracting a more diverse  set of contributors  
**\<moneromooo>** (or at least, not before we have that problem)  
**\<yrashk>** while removing gatekeeping/biases from reviews gets diverse opinions in proactively  
**\<yrashk>** at least that's the hypothesis  
**\<fluffypony>** moneromooo: ok so consider this: what would we do if a PR was submitted from an unknown person that increases the block time to 4 minutes  
**\<moneromooo>** Bias is a fair point, but if there are many reviewers, then that should not matter much, iunless they all have the same ones. And if they do, maybe there is a good reason.  
**\<merkaba>** (I know you guys are in the middle of other stuff. don't mind me. If there is anything I can help with I am ruby developer)  
**\<moneromooo>** That'd probably fork at once.  
**\<yrashk>** moneromooo: many projects are started by very small teams that are likely to be less diverse. therefore original maintainers might have similar biases.  
**\<fluffypony>** moneromooo: I mean, would we merge the PR, or not ?  
**\<fluffypony>** hi merkaba, and welcome :)  
**\<yrashk>** I think in the case of this PR (block time), first important thing to consider is "does it have a valid problem/solution statement"  
**\<moneromooo>** I'd hope not, but you're not allowed to then magic other assumptions after I said that :)  
**\<yrashk>** maybe there's a problem nobody thought about?  
**\<merkaba>** fluffypony, thank you  
**\<ArticMine>** Then the question becomes is the problem valid?  
**\<moneromooo>** If there's a problem nobody thought about, surely a reviewer would ack it ?  
**\<fluffypony>** moneromooo: so the only difference under C4 is that we merge-and-revert and then tell the committer that they have to at least discuss something that controversial on the forum or on reddit or in dev meetings or something  
**\<moneromooo>** So, same result, except a spammed git history ?  
**\<moneromooo>** I *do* use git history :/  
**\<fluffypony>** but spammed for a reason  
**\<fluffypony>** a revert won't affect git bisect / git blame, I don't think ?  
**\<moneromooo>** It will affect blame I think. It will certainly affect bisect time.  
**\<moneromooo>** Regardless, I object to it for other grounds anyway (it seeming like shooting ourslves in the foot).  
**\<fluffypony>** I think that maybe extreme examples like "change the block time" are bad for what I'm trying to illustrate  
**\<moneromooo>** If/when there is a problem with people's patches being held up, and this causing contributors to become dissatisfied, we can talk about it again.  
**\<moneromooo>** But then, the solution *should* consider something not totally at the extreme of "let's merge anything".  
**\<fluffypony>** but moneromooo, I think we can do the opposite of "possibly causing dissatisfied contributors" - I think we can be extremely welcoming to contributors  
**\<ArticMine>** Is a middle ground possible here?  
**\<moneromooo>** That'd seem to be a great idea. I find monero very welcoming tbh.  
**\<fluffypony>** well the current pitch is "let's merge everything once it's been reviewed by a known contributor"  
**\<redfish>** what is the goal of introducing a new contribution guideline? what problem is being addressed here? attracting potential contributors? treating dissatisfied contributors?  
**\<fluffypony>** so we still have that firewall  
**\<fluffypony>** redfish: it's about establishing protocol that will survive through to when we have 500+ contributors  
**\<moneromooo>** Do you mean "we'd still have" ?  
**\<fluffypony>** moneromooo: yes I do  
**\<fluffypony>** I hate the idea of "dev worship", where a single contributor is lorded over others, or viewed as being able to cure cancer  
**\<moneromooo>** Then I agree. I was iunder the impression that there'd be no review by a known contributor. Sorry about that :D  
**\<fluffypony>** to the exclusion of newcomers  
**\<yrashk>** C4 kind of helps addressing the "problem of elders"  
**\<redfish>** a newcomer can be dissuaded by review-block, but the newcomer should really have thicker skin  
**\<redfish>** be careful of working with a strawmen for a newcomer contributor  
**\<moneromooo>** 17:35 \<@fluffypony> moneromooo: not since we've introduced that brief-code-review process, I just merge based on a visual inspection or a  review by some known contributor  
**\<expez>** Code review on github is often about increasing code quality.  Most contributors aren't cpp experts.  If you just merge everything the code quality in the project will gradually decrease until changes become very hard.  Or the regular contributors will have to cleanup the area they want to change prior to doing the work the actually wanted.  This means a few bad apples will slow everyone down.  
**\<redfish>** the attitute of "you don't want my patch? then, fuck you all" should not be encouraged  
**\<moneromooo>** Then:  
**\<moneromooo>** 17:53 \<@fluffypony> well the current pitch is "let's merge everything once it's been reviewed by a known contributor"  
**\<moneromooo>** And:  
**\<moneromooo>** 17:54 \< moneromooo> Do you mean "we'd still have" ?  
**\<moneromooo>** 17:54 \<@fluffypony> moneromooo: yes I do  
**\<moneromooo>** So I don't see what would change, then.  
**\<expez>** If there's no discussion, just accept or revert, only the experts will make contributions whereas with some guidance a lot more would've been able to.  
**\<moneromooo>** Currently: an ack by a known contributor.  
**\<fluffypony>** expez: so by the same token every technical / scientific / medical article on Github should have declining quality until it's illegible garbage :-P  
**\<expez>** fluffypony: I can't speak to that.  I haven't seen any articles written by acretion.  
**\<fluffypony>** I jest - I'm not suggesting the code be written by Wikipedia contributors  
**\<fluffypony>** but let me use a practical example  
**\<fluffypony>** a new contributor submits a new feature, but it breaks the Windows build and also doesn't include unit tests  
**\<fluffypony>** option 1 is that we back-and-forth on his PR until he has it "perfect" by some undefined definition of perfection  
**\<fluffypony>** this leads to ANY contributor being frustrated, because they've put in effort and maybe they don't even have a Windows box to work on  
**\<fluffypony>** if, instead, we merge the PR and then create an issue for the broken Windows build + issues for the lack of tests, then ANYONE can fix those  
**\<fluffypony>** not just the original contributor  
**\<yrashk>** I think you really nailed it here: "undefined definition of perfection"  
**\<moneromooo>** Dude. Why do you always present the alternative as the other extreme ? This is also a problem, but we don't have it right now.  
**\<redfish>** anyone can push commits on top of a PR branch  
**\<fluffypony>** redfish: yes they can, but until when ?  
**\<redfish>** until the build is fixed and the unit tests pass  
**\<meeting-bot> [anonimal]** Kovri meeting starts now but everyone is on a roll - and I'd like to read this huge backlog :)  
**\<fluffypony>** moneromooo: sure, but that's like saying we shouldn't adopt any sort of governance structure because we're "too small for governance"  
**\<moneromooo>** Not really. Maybe a bit.  
**\<yrashk>** fluffypony: I decided to adopt C4 at eventsourcing.com before it's actually needed — the later you are the harder it is to change the governance  
**\<fluffypony>** ^^  
**\<moneromooo>** OK, that is a fair point.  
**\<fluffypony>** literally the only change from a contributor perspective is you have to include a Problem...Solution statement  
**\<moneromooo>** But we could adopt a governance that's not as seemingly footgun.  
**\<fluffypony>** nothing else changes  
**\<moneromooo>** Not the merge it all and revert at once ?  
**\<fluffypony>** that affects those with push rights, not contributors as a whole  
**\<fluffypony>** and because we're small we'll probably not even follow that to the letter all the time  
**\<fluffypony>** BUT we'll have a documented process which contributors will be able to find and understand  
**\<ArticMine>** There is a difference between a controversial change to the social covenant and failure to build for a particular OS  
**\<yrashk>** in fact, C4 adds a review layer of a sort for "proven" maintainers as you can't push to master directly  
**\<fluffypony>** ArticMine: agreed  
**\<fluffypony>** http://oss-watch.ac.uk/resources/governancemodels <- this is a good read  
**\<yrashk>** but other maintainers have to merge your PR in  
**\<fluffypony>** from that article:  
**\<lpaalp1>** hello  
**\<moneromooo>** hi  
**\<fluffypony>** "It is never too soon to define a suitable governance model. Without one, the chances of third parties wishing to contribute are considerably reduced. This is for a number of reasons:  
**\<fluffypony>** - potential contributors will not know how to contribute  
**\<fluffypony>** - they will not be sure what will happen to their contribution  
**\<fluffypony>** - the project will not look serious about engaging with third parties  
**\<fluffypony>** - there is no visible assurance that contributions will be managed in such a way that they will remain of value to the original contributor  
**\<fluffypony>** Since you never know when a contributor might stumble upon your project, it is important to be ready from the earliest possible date."  
**\<moneromooo>** "the project will not look serious about engaging with third parties" sounds like bullshit.  
**\<fluffypony>** you'd be surprised by how many people who code for a living are afraid to submit a PR, moneromooo  
**\<moneromooo>** The rest, OK.  
**\<fluffypony>** we have fluffy ponies and cows and all sorts, not everyone wants to be in the middle of a farmyard  
**\<moneromooo>** That may be so, but the sentence doesn't really mention that.  
**\<redfish>** this quote assumes strawman for a contributor  
**\<fluffypony>** hi lpaalp1 :)  
**\<redfish>** imho, the danger from a troll newcomer is greater than a danger from a biased old-timer  
**\<fluffypony>** redfish: C4 provides options to deal with trolls that don't self-correct  
**\<moneromooo>** I'm totally fine with having a CONTRIBUTING file, or HTML page somewhere, etc, fwiw.  
**\<fluffypony>** and it does so in a way that is least disruptive to the community as a whole  
**\<moneromooo>** Well, I do not agree with this, since the harm to history has already been done.  
**\<moneromooo>** (assuming we're back to merge-first, rather htan wait for an ack from a well known contributor)  
**\<fluffypony>** no we're not back to that, lol  
**\<fluffypony>** the review-first model still stays, we're just bolting C4 on top of that  
**\<fluffypony>** at any rate, we've gone significantly over time, and we've only had one point for discussion, lol  
**\<moneromooo>** OK. I feel like I'm being lied to here for some reason...  
**\<fluffypony>** I think let's bounce this around over the next two weeks  
**\<moneromooo>** Maybe because the discussion about it months ago was merge first.  
**\<fluffypony>** and then at the next dev meeting we can make a decision if everyone is comfortable  
**\<fluffypony>** moneromooo: that hasn't changed, we've just added the eyeball-review bit per the discussion with smooth ages ago  
**\<moneromooo>** OK. Thanks.  
**\<ArticMine>** Yes this needs a lot more thought and discussion before a decision is made  
**\<fluffypony>** yes absolutely  
**\<fluffypony>** so before we move on to Kovri  
**\<fluffypony>** two quick things  
**\<fluffypony>** 1. moneromooo - can you give us a brief update on how the RingCT stuff is going  
**\<fluffypony>** and 2. dEBRUYNE wanted to discuss 0MQ briefly  
**\<fluffypony>** also thanks for attending yrashk - much to think about and discuss :)  
**\<moneromooo>** Well, I'm getting to know it. I'm hacking on bits at a time, so I get to learn bits of it at a time.  
**\<yrashk>** fluffypony: thanks for having me!  
**\<moneromooo>** It's progressing anyway.  
**\<dEBRUYNE>** re: 0MQ -> tewinget is going to pick that up (i.e. continue). I am drafting the FFS proposal on his behalf and hope to put it out soon (probably at latest by monday/tuesday).   
**\<fluffypony>** moneromooo: do you need any extra help, or are you ok with things at the moment ?  
**\<moneromooo>** Rewrite, not contunue, AFAIK.    
**\<moneromooo>** I'm ok with it, but I'll have questions for shen, most certainly.    
**\<fluffypony>** kk    
**\<fluffypony>** ok so I think let's move on to Kovri - anonimal, the floor is yours    
**\<dEBRUYNE>** \<moneromooo> Rewrite, not contunue, AFAIK. <= Correct. Rewrite is in a sense also continue right? :P    
