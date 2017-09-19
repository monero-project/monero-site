---
layout: post
title: Logs for the Kovri Dev Meeting Held on 2017-04-09
summary: Brief review of what has been completed since last meeting, Monero HackerOne Bounty, website discussion, and code & open tickets discussion
tags: [dev diaries, i2p, crypto]
author: dEBRUYNE / fluffypony
---

### Logs  

**\<anonimal>** 1. Greetings  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\<anonimal>** 3. Preparation for [96boards.org OpenHours showcase for Kovri / Monero](https://github.com/monero-project/meta/issues/46)  
**\<anonimal>** 4. Status of [Monero HackerOne umbrella and bounty](https://github.com/monero-project/meta/issues/39)  
**\<anonimal>** 5. Code + ticket discussion / Q & A  
**\<anonimal>** 6. Any additional meeting items  
**\<anonimal>** 7. Confirm next meeting date/time  
**\<anonimal>** Hellloooo  
**\<i2p-relay> {-olark}** Hello party people  
**\<i2p-relay> [gingeropolous]** howdy!  
**\<guzzi>** Hello  
**\<moroccanmalinois>** hi  
**\<rehrar>** Hi (observing excitedly)  
**\<i2p-relay> {-iDunk}** Hi  
**\* moneromooo** greets again  
**\<i2p-relay> [endogenic]** no excitement allowed rehrar  
**\<bigreddmachine>** hi  
**\<rehrar>** I'll see myself out then.  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\<anonimal>** For me, the past two weeks have spent focusing on 4 things: fixing the OpenBSD dynamic build, PR review/fixes/collaboration, NTCP, and RI (router info).  
**\<anonimal>** a. Jeff at crypto++ has not been responsive lately so my CMake fix for their dynamic OpenBSD is still sitting in PR hell.  
**\<anonimal>** b. Both moroccanmalinois and rakhimov have been PR'ing some great work  
**\<anonimal>** c. Over time I've done bits and pieces of work on the NTCP implementation but hadn't had the chance to do a full study in java I2P's implementation until recently.  
**\<anonimal>** Combined with more spec review (forunately, the spec is small) I've come up with 33 questions/TODOs specifically about, and for, our implementation.  
**\<anonimal>** Once that was done, it turned out that I couldn't move forward until I worked out any potential RI issues.  
**\<anonimal>** d. That lead me to the unmaintainable mess of our forked RI implementation, which has been neglected, so now at a minimum I'm working on a RI parser/reader/writer refactor. From there, unit-test *and then* back to NTCP so I can close that damn milestone issue >:|  
**\<anonimal>** So, that's just on my end. Anyone else?  
**\<anonimal>** I know guzzi is doing study for RAII refactoring.  
**\<bigreddmachine>** Salti's holding pattern for webextensions in FF is making progress  
**\<anonimal>** Oooo cool  
**\<anonimal>** How are they doing on that front?  
**\<bigreddmachine>** 1 of two issues i'm tracking are finished, second is still a ways off  
**\<guzzi>** Review client context implimenting raii  
**\<bigreddmachine>** and no dev docs yet  
**\<moroccanmalinois>** Looking at reload server tunnels https://github.com/monero-project/kovri/blob/master/src/client/context.cc#L321  
**\<anonimal>** Excellent, that all sounds good. Anything else before we move onto 3.?  
**\<i2p-relay> {-olark}** I have been slowly evaluating what will be needed to replace supercop with tweetnacl  
**\<anonimal>** (well, I'm hoping FF will move faster but it sounds like they're at least *moving*)  
**\<i2p-relay> {-olark}** Can rip out all the ecdsa sig types at the same time to work towards the identity refactor work  
**\<bigreddmachine>** anonimal: yes. progress is progress.  
**\<anonimal>** olark: ok this is for #485, sounds good. Would you be able to resolve #345 in the mean time?  
**\<i2p-relay> {-olark}** For EdDSA  
**\<i2p-relay> [fluffypony]** major thunderstorm here, so if I don't respond it's because I've been struck by lightning (or my house has)  
**\<anonimal>** Eeek! No charred pony!  
**\<i2p-relay> {-olark}** anonimal: Sure  
**\<anonimal>** fluffypony can you see the meeting or is internet intermittent?  
**\<anonimal>** olark: nice!  
**\<anonimal>** Ok, moving forward,  
**\<i2p-relay> {-olark}** I will find the time. I have been neglecting kovri :(  
**\<anonimal>** Yes, come back soon ;)  
**\<anonimal>** 3. Preparation for [96boards.org OpenHours showcase for Kovri / Monero](https://github.com/monero-project/meta/issues/46)  
**\<anonimal>** Speaking of neglecting, I hope we don't let this opportunity slip by ^  
**\<anonimal>** Does anyone know of any effect voice masking software? Military grade (if there is such a thing).  
**\<anonimal>** \*effective  
**\<i2p-relay> [fluffypony]** anonimal: nothing I know of, but I also don't know if that would be worthwhile or weird  
**\<i2p-relay> \* fluffypony** tries to convince anonimal to come out the pseudonymous closet  
**\<i2p-relay> {-pigeons}** yeah its annoying as hell to listen to  
**\<i2p-relay> {-pigeons}** mouthful of marbles works ok though  
**\<anonimal>** I hear that Barry Manilow recently came out of the closet.  
**\<guzzi>** Pennies  
**\* anonimal** not that I'm a fan, nor am I in that sort of closet  
**\<anonimal>** Well, I'm curious to hear the public's opinion on whether I should de-anon. Thoughts?  
**\<i2p-relay> [endogenic]** yes!  
**\<anonimal>** moneromooo ^ #monero-dev  
**\<i2p-relay> [endogenic]** i will be your bodyguard  
**\<anonimal>** lol awesome! X)  
**\<i2p-relay> [fluffypony]** anonimal: only reason I suggest it is because Kovri does need a voice, but ultimately it's your call  
**\<i2p-relay> [gingeropolous]** weren't you already on the monero missives?  
**\<i2p-relay> [fluffypony]** gingeropolous: no, that was jeff  
**\<moneromooo>** What ? What's in #monero-dev ?  
**\<i2p-relay> [endogenic]** anonimal: just think… we can hang out at meetups and such :)  
**\<i2p-relay> {-olark}** Ultimately your choice anonimal.  
**\<i2p-relay> {-olark}** Don't feel pressured to come out becuase people want you to ;)  
**\<sgp>** ^ seconded  
**\<anonimal>** gingeropolous: ^ not Jeff at crypto++, Jeff a former problem contributor who, as he said, has family in U.S. intelligence.  
**\<i2p-relay> [gingeropolous]** he's satoshi.  
**\<anonimal>** moneromooo I meant 'what's your opinion if any?'  
**\* anonimal** and also threw question at #monero-dev in same line, sorry  
**\<i2p-relay> [gingeropolous]** my apologies. I obviously know whos who here.  
**\<moneromooo>** Of whether you should de-anon ? I wouldn't want to influence you to.  
**\<anonimal>** Oh np, just clarifying since I said "Jeff" earlier.  
**\<moneromooo>** My view is that the more people actively keep their privacy, the less the massive pressure on everyone else to shed their privacy is.  
**\<anonimal>** Hmm, good point.  
**\<moneromooo>** Not really related to this particular case, but having 99% of people not care about their privacy means that companies and everyone can just screw privacy and not get any noticeable blowback.  
**\<i2p-relay> [endogenic]** think only anonimal's in the position anonimal's in as kovri lead tho  
**\<moneromooo>** So I use Tor for random run off the mill browsing partly for that reason too.  
**\<i2p-relay> [fluffypony]** moneromooo: yes, but this is about his status as a contributor and maintainer  
**\<i2p-relay> [fluffypony]** after all, things get really boring if I'm the only one talking at conferences  
**\<moneromooo>** Well, his choice, and I don't want to interfere in it. But thanks for asking :)  
**\<i2p-relay> [endogenic]** \<3  
**\<i2p-relay> [endogenic]** i wouldn't go that far fluffy  
**\<i2p-relay> [gingeropolous]** you could just "hire" a spokesperson to be your IRL talking head  
**\<i2p-relay> [gingeropolous]** and they *just* happen to know a *whole* lot about everything  
**\<i2p-relay> [endogenic]** rent-a-body  
**\<anonimal>** Ok, so I'm hearing that if I de-anon I get a free(?) bodyguard and can freely promote more-so than what I can do now. I'm also hearing that no one wants to put that kind of pressure of a decision on me.  
**\<anonimal>** I have to say though, I'm wearing more than 1 cap at any given time. Maybe one-too-many? It was a relief to finally sit down and write some code this week. It had been way too long since I've done that and I'm ALWAYS HERE working on kovri!  
**\<iDunk>** I think gingeropolous suggested you should invent an alter ego for public appearances :)  
**\<i2p-relay> [endogenic]** you can choose when to do talks and when to reply to ppl imo  
**\<i2p-relay> [endogenic]** and i bet others will jump in to help  
**\<i2p-relay> [fluffypony]** "I'm fluffy...errrr...fluffynonimal, and I'm a Kovri developer"  
**\<i2p-relay> [endogenic]** just a question of letting us know how we can help  
**\<i2p-relay> {-pigeons}** even if you do come out, still consider the marbles for talks  
**\<i2p-relay> [gingeropolous]** well iDunk now its ruined  
**\<iDunk>** Damn  
**\<anonimal>** lol, I'll just show up with marbles in my mouth.  
**\<anonimal>** I must say that, adding public-relations, I love the thought, but I do also love writing code.  
**\<anonimal>** And people love targets, so that's always something to concern myself with.  
**\<sgp>** You can still do both. Choose the proportion you want  
**\<anonimal>** "just a question of letting us know how we can help" \<-- thanks endogenic. I think what will help are 2 things:  
**\<anonimal>** sgp good point  
**\<i2p-relay> [fluffypony]** anonimal: I think that there's probably less scope to talk about Kovri at conferences right now anyway, but it would be nice for someone to do some podcasts etc. in future  
**\<i2p-relay> [endogenic]** podcasts are a great idea. i honestly doubt most ppl who want to use something like tor even know tor needs an alternative  
**\<i2p-relay> [endogenic]** and i'd enjoy learning more about the kovri tech in that format  
**\<anonimal>** What would help: 1. more people get more familiar with kovri technology so they can answer questions and promote too. And 2. maybe everyone present can give me a solid "yes" or "no" on if they want me to de-anon (i.e., putting aside any other thoughts and responding purely on instinctual feelings)  
**\<anonimal>** bigreddmachine: ^ re: podcast, my decision sooner than later will effect that  
**\<i2p-relay> [gingeropolous]** just go full Mr. Robot. Loose touch with reality, veer into psychosis, and then even *you* don't know who you are.  
**\<anonimal>** lololol gingeropolous X)  
**\<sgp>** I just started watching that show. 1 season in. No spoilers please!  
**\<ArticMine>** To de-anon should be  personal chice in my opinion  
**\<anonimal>** Ok I'd say we're on a tangent for point 3 but this kind of needs to be done IMHO.  
**\<ArticMine>** choice  
**\<anonimal>** All in favor of me de-anoning: yay or nay?  
**\* anonimal** don't be shy!  
**\<i2p-relay> [endogenic]** i personally agree it must be personal too. sry to be difficult. there are tradeoffs for sure  
**\<sgp>** Pros: can talk about it more openly, attract new talent with greater outreach, better inform community about developments. Cons: more likely to be a target, maybe you're really ugly  
**\<i2p-relay> [endogenic]** it's a kind of burden i think  
**\<sgp>** (just kidding on second con)  
**\<i2p-relay> [fluffypony]** anonimal: I don't know if we should vote for that, it's your call  
**\<anonimal>** lol sgp maybe I'm missing a face entirely...  
**\<anonimal>** fluffypony ok  
**\<anonimal>** So resolving 3., fluffypony + pigeons, how's your schedule lately?  
**\<i2p-relay> [fluffypony]** pigeons is down my side of the world for a couple of weeks, so we can make time around that  
**\<anonimal>** Oh neat! Should I contact Robert to schedule a definitive date now?  
**\<i2p-relay> [fluffypony]** well it depends on if you want to do me + pigeons or you + pigeons  
**\<bigreddmachine>** anonimal: soory, was afk. re the podcast bit, if you do decide to de-anon yourself, i'd be happy to host your coming out of the closet party! but garbling voice is doable too.  
**\<i2p-relay> [fluffypony]** or all 3 of us  
**\<anonimal>** fluffypony: I would think either all 3 (or at minimum just you 2). bigreddmachine I'd like to hear/learn more about any garble tech available, even if it's annoying.  
**\<i2p-relay> [fluffypony]** anonimal: ok let's talk afterwards, and we can schedule it with them  
**\<anonimal>** Ok will do  
**\<anonimal>** bigreddmachine: I'll PM you later too  
**\<anonimal>** Anything else on 3.?  
**\<moneromooo>** Voice garbling sounds very reversible (unless it's voice recogniation plus text to speech).  
**\<bigreddmachine>** TTS certainly would work.  
**\* anonimal** considered TTS, maybe I should learn to type faster first  
**\<anonimal>** (or prepared statements?)  
**\<anonimal>** (defeats the fun of interviews/speeches/conferences?)  
**\<anonimal>** Ok, we'll talk more later.  
**\<i2p-relay> [endogenic]** hehe seems a little creepy  
**\<anonimal>** 4. Status of [Monero HackerOne umbrella and bounty](https://github.com/monero-project/meta/issues/39)  
**\<moneromooo>** Copy and "paste" words from movies, paste them one by one to make up sentences. Like the old words cut off from a newspaper :D  
**\<anonimal>** lol moneromooo, not serial-killer-like in any way whatsoever...  
**\<anonimal>** re: 4. We have hackerone.com/monero !  
**\<i2p-relay> [fluffypony]** anonimal: has anything for 4. been written up in the style of an FFS proposal or not yet?  
**\* anonimal** grabs only FFS for 4.  
**\<anonimal>** Links is in the meta issue, one moment.  
**\<anonimal>** https://forum.getmonero.org/6/ideas/87597/monero-bounty-for-hackerone  
**\<anonimal>** Is that what you mean?  
**\<i2p-relay> [fluffypony]** ok - do you want me to move that to Funding Required in its current form?  
**\<anonimal>** Eek, I should update?  
**\<anonimal>** The prop looks unclear as-is  
**\<i2p-relay> [fluffypony]** probably worthwhile  
**\<anonimal>** We decided on 500 to start  
**\<anonimal>** Ok, I'll edit after the meeting or do you need me to do that now?  
**\<i2p-relay> [fluffypony]** no after is fine  
**\<anonimal>** Ok  
**\<anonimal>** So for 4, I still have to PR VRP's to the various repos.  
**\<anonimal>** Also invite the appropriate people to H1. But fluffypony I think you'll want to do that?  
**\<i2p-relay> [fluffypony]** sure  
**\<anonimal>** moneromooo is already in there. luigi is not yet though.  
**\<anonimal>** Alright. From there we should raise the funds first and *then* start inviting hackers on H1.  
**\<anonimal>** Any agreements/disagreements?  
**\<sgp>** I agree  
**\<anonimal>** Btw, many hackers are already *on* H1, by invite I mean invite to start looking at our projects.  
**\<anonimal>** Ok. Anything else on 4.?  
**\<anonimal>** 5. Code + ticket discussion / Q & A  
**\<i2p-relay> [fluffypony]** nothing else from my side on 4  
**\* anonimal** takes peek  
**\<anonimal>** re: website issue, is ajs here?  
**\<ajs>** present  
**\<anonimal>** Hi!  
**\<anonimal>** Any news the website front?  
**\<i2p-relay> {-pigeons}** No I am the holdup there  
**\<anonimal>** Ok. ETA on resolving any holdups?  
**\<bigreddmachine>** shoot, i was just about to ask about that. didn't realize we had monero-project/kovri-site. how can i help?  
**\<ajs>** have backed up work that has been done and waiting for access to a server  
**\<anonimal>** Btw rehrar popped in recently and said him and/or his wife would give a try a logo redesign.  
**\<rehrar>** Hi. Yes. :D  
**\<i2p-relay> {-pigeons}** i'll try to set something up in 24 hours or so  
**\<anonimal>** Wow, that fast? Cool.  
**\<i2p-relay> [pero]** so what happened to the logo i did  
**\<anonimal>** pero: it was NACK'ed. This was clearly stated in github issue that I posted in the previous meeting.  
**\<rehrar>** I'd also like to give the Kovri website a go, pending on the logo and branding. :)  
**\<i2p-relay> [pero]** why?  
**\<anonimal>** pero: I don't have the files though if that's what  you mean.  
**\<anonimal>** fluffypony: ^  
**\<i2p-relay> [pero]** you were sent the files  
**\<i2p-relay> [pero]** so as i see it, a contributor contributed a bunch of time and spiffied up the previous logo  
**\<anonimal>** Not anymore. Tis' the magic of deleted emails.  
**\<i2p-relay> [pero]** the community was involved too...  
**\<i2p-relay> [pero]** then it unilaterally 'nack'd'  
**\<anonimal>** Yes. This was all clearly stated in the github PR.  
**\<anonimal>** Where is your logo work PR?  
**\<i2p-relay> [pero]** wow what a shitty way to waste contributor's time  
**\<anonimal>** You PR'd nothing. Community opinion does not equal final decision.  
**\<anonimal>** Off you go pero, the resident troll.  
**\<i2p-relay> [pero]** lol?  
**\<anonimal>** You knew from the start that fluffypony and I would make a final decision. Do I really need to bring up logs from months ago?  
**\<i2p-relay> [pero]** the logo assets were emailed to you and pony  
**\<i2p-relay> [pero]** there was no request to pr anything  
**\<ajs>** rehrar bigreddmachine - I made a very basic Jekyll site.. files at: https://github.com/anonimal/kovri-site  
**\<i2p-relay> [pero]** the request was for the files to be emailed  
**\<i2p-relay> [pero]** and your 'troll' remark is uncalled for and rude?  
**\<i2p-relay> [pero]** wtf is that  
**\<anonimal>** pero you have two options: 1. being kicked from this channel for disrupting a meeting or 2. venting into https://github.com/monero-project/kovri/pull/488 for all the world to see.  
**\<i2p-relay> [bigreddmachine]** ty ajs. will this be affected by the re-design that rehrar is doing?  
**\<rehrar>** Well, I think ideally the redesign that is done for getmonero.org should have an influence on the Kovri website (just influence, not dictate)  
**\<rehrar>** and the logo redesign I will propose (just a proposal) I think definitely should have a larger influence on the website  
**\<i2p-relay> [pero]** whats so hard about contacting the person that did the work?  
**\<anonimal>** rehrar: that sounds good  
**\<rehrar>** So before I start working on anything Kovri website related, we're going to try to get a logo to you guys before this week is over.  
**\<rehrar>** I'll drop it on here and the Kovri repo as an issue to look over when it's done.  
**\<rehrar>** And it is obviously open to suggestions or tweaks when we show it  
**\<i2p-relay> [bigreddmachine]** ty rehrar - but from a content standpoint, the re-design is sort-of content agnostic, right? as in, i could write a page and the formatting might change but if it's in a markdown file jekyll will just ingest it and reformat, right?  
**\<rehrar>** for Kovri, not getmonero.org, right?  
**\<anonimal>** Did you have any plans to re-use material from monero site (as to save time, etc.)?  
**\<i2p-relay> [bigreddmachine]** well, both i suppose, but kovri specifically  
**\<ajs>** bigreddmachine: site design is rudimentary and could be easily changed if need be  
**\<rehrar>** The content is going to be restructured for getmonero.org, I'm not going to do a lot of work on copy, unless people think it's really needed.  
**\<i2p-relay> [bigreddmachine]** (sorry, i got us off topic)  
**\* anonimal** whatever is easiest to maintain IMHO  
**\<rehrar>** Pages will be shuffled around, and some things within pages will be shuffled around (all of this will be submitted in designs prior to everything being built)  
**\<rehrar>** as for Kovri, it won't have nearly as much content yet, so I don't think it'll be a huge issue.  
**\<rehrar>** does that answer your question?  
**\<rehrar>** If not, the short answer is yes, it should be content agnostic, and I will work with you guys in the rare cases where it is not.  
**\<i2p-relay> [bigreddmachine]** not entirely but close enough, thanks.  
**\<i2p-relay> [bigreddmachine]** ahh, yeah that last bit helps  
**\<rehrar>** great!  
**\<anonimal>** Question:  
**\<anonimal>** rehrar: IMHO, from the work of yours I've seen, since you're an actual designer/creator/implementer, I'm wondering if you, bigreddmachine, ajs and pigeons would consider being the 'website team' to get this up-and-running. I can move the repo when we're online. Does this sound fair or something of interest?  
**\<anonimal>** It sounds like you're already doing that, I'm just wondering for my own piece of mind (e.g. do I need to re-schedule my work load for website work, etc.)  
**\<i2p-relay> [endogenic]** But not both!  
**\<rehrar>** That sounds fine with me. Pardon me for my ignorance, but what will be bigredmachine, ajs, and pigeons roles?  
**\<i2p-relay> [bigreddmachine]** i'm happy to help with some content, as i am trying to learn about the tech anyway so documenting it is an obvious step.  
**\<anonimal>** endogenic too, hop on the site train!  
**\<rehrar>** if you can focus more on Kovri, I would do it.  
**\<anonimal>** rehrar: re: bigreddmachine ajs and pigeons, let's chat after the meeting since we're out of time  
**\<i2p-relay> [bigreddmachine]** design-wise, i can give my two cents but i'd like to be hands off there. just more of a feedback guy, like "hey, this isn't intuative" or whatever  
**\<rehrar>** I don't think any of us have a problem bugging you if we need something.  
**\<rehrar>** I'm not able to stick around for much longer, actually.  
**\<rehrar>** We can set up a meeting time for alter this week?  
**\<rehrar>** \*later  
**\<anonimal>** rehrar: just pop in anytime if you want to make an official website meeting  
**\<rehrar>** sounds good  
**\<rehrar>** gotta split. Seeya homes.  
**\<i2p-relay> [bigreddmachine]** i can't, but just summarize discussions on github issue and tag me  
**\<anonimal>** bigreddmachine: that's right, you're not always irc'able.  
**\<i2p-relay> [fluffypony]** Can I take the bot down? I'm in a YouTube show mow  
**\<i2p-relay> [fluffypony]** Now  
**\<i2p-relay> [bigreddmachine]** anonimal: i try to stay off during week to stay focused on my job.  
**\<i2p-relay> [endogenic]** anonimal: oh no not me, i was just trolling about "fair or of interest"  
**\<i2p-relay> [bigreddmachine]** meow\*  
**\<anonimal>** Ok, moving on 6. Any additional meeting items  
**\<anonimal>** None from me. guzzi said like 2 lines.  
**\<i2p-relay> [endogenic]** I think pero could be of help on the site too as i think he has lots of exp there  
**\<anonimal>** 7. Confirm next meeting date/tim  
**\<i2p-relay> [bigreddmachine]** just that i'll keep tracking FF proxy and looking for alternatives.  
**\<i2p-relay> [bigreddmachine]** 23 Apr?  
**\<anonimal>** Yes, same time in two weeks.  
**\<i2p-relay> [fluffypony]** Yep  
**\<anonimal>** Thank you everybody!  