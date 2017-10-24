---
layout: post
title: Logs for the Kovri Dev Meeting Held on 2016-11-13
summary: Brief review of what has been completed since last meeting, prepration of Alpha release, and code & open tickets discussion
tags: [dev diaries, i2p, crypto]
author: dEBRUYNE / fluffypony
---

### Logs  

**\<i2p-relay> {-anonimal}** Proposed meeting items:  
**\<i2p-relay> {-anonimal}** 1. Greetings  
**\<i2p-relay> {-anonimal}** 2. Brief review of what's been completed since the previous meeting  
**\<i2p-relay> {-anonimal}** 5. Code + ticket discussion / Q & A  
**\<i2p-relay> {-anonimal}** 3. Preparing for alpha release  
**\<i2p-relay> {-anonimal}** 4. Moving meeting agenda issues from monero-project/kovri to monero-project/meta  
**\<i2p-relay> {-anonimal}** 6. Any additional meeting items  
**\<i2p-relay> {-anonimal}** Hi  
**\<i2p-relay> {-anonimal}** 7. Confirm next meeting date/time  
**\<i2p-relay> {-anonimal}** JFTR for the log: people think the meeting is at 19:00 when it is actually at 17:00 so we may be a bit shorthanded today  
**\<i2p-relay> {-anonimal}** 2. Brief review of what's been completed since the previous meeting  
**\<i2p-relay> {-anonimal}** The general focus of the past two weeks has been "escaping comfort zone" work:  
**\<i2p-relay> {-anonimal}** i.e., pursuing a few long-standing issues that I've avoided because they weren't fun:  
**\<i2p-relay> {-anonimal}** Build:  
**\<i2p-relay> {-anonimal}** - Builds builds builds! All builds are now in the GREEN!  
**\<i2p-relay> {-anonimal}** - ARMv7/8 and Win32/64 builds are now online! Static builds online!  
**\<i2p-relay> {-anonimal}** - Win32/64 run-time is now available after patching an upstream issue  
**\<i2p-relay> {-anonimal}** - ARMv7 has a non-Kovri runtime issue, ARMv8 box still needs testing  
**\<i2p-relay> {-anonimal}** - Much build-related work with pigeons, partly noted in monero-project/meta  
**\<i2p-relay> {-anonimal}** - Setup kovri per-platform IRC clients for testing, say hi to them in #kovri-dev  
**\<i2p-relay> {-anonimal}** Code:  
**\<i2p-relay> {-anonimal}** - Resolved all Coverity defects (details in #263)!  
**\<i2p-relay> {-anonimal}** - Bug fixes in addressbook + shutdown, https on windows  
**\<i2p-relay> {-anonimal}** - Design and planning: global refactoring, study, and testing  
**\<i2p-relay> {-anonimal}** - SSU Server testing (nothing merge-able at the moment)  
**\<i2p-relay> {-anonimal}** - Debugging, attending to open milestone issues  
**\<i2p-relay> {-anonimal}** - Mentoring: working with other contributors to "Make Kovri Great Again"  
**\<i2p-relay> {-anonimal}** - guzzi doing his civic duty while also working on http proxy (WIP)  
**\<i2p-relay> {-anonimal}** - olark providing great netdb/socks proxy documentation and refactoring  
**\<i2p-relay> {-anonimal}** Misc:  
**\<i2p-relay> {-anonimal}** - 7z/installer research for platform-agnostic bundling of data-dir with static binary  
**\<i2p-relay> {-anonimal}** - README/Doc updates, misc. project maintenance  
**\<i2p-relay> {-anonimal}** - Too many other things to mention here or things that I've simply forgotten  
**\<i2p-relay> {-anonimal}** Note: confirmed earlier: run-time is online on ARMv8!  
**\<i2p-relay> {-anonimal}** Anything else on point 2.?  
**\<i2p-relay> {-olark}** Sums up the past 2 weeks well.  
**\<i2p-relay> {-anonimal}** Side-note, JFTR: slack relay is not working and fluffypony isn't running meeting relay to #monero-dev  
**\<i2p-relay> {-anonimal}** Ok, moving on,  
**\<i2p-relay> {-anonimal}** 3. Preparing for alpha release  
**\<guzzi>** Here fyi  
**\<i2p-relay> {-anonimal}** Oh good, hi guzzi (I PM'd you earlier)  
**\<guzzi>** Ok  
**\<i2p-relay> {-anonimal}** So, 3. looking at https://github.com/monero-project/kovri/issues?q=is%3Aopen+is%3Aissue+milestone%3A0.1.0-alpha  
**\<i2p-relay> {-anonimal}** A few of these can be moved to next milestone (they aren't urgent),  
**\<i2p-relay> {-anonimal}** If I can't resolve the rest by Dec 1st. in addition to everything else that needs attention, then maybe Dec. 14th at the latest.  
**\<i2p-relay> {-anonimal}** Really there are only a few key issues that *must* be resolved for an alpha release and they are, IMHO:  
**\<i2p-relay> {-anonimal}** #375 and #119 <-- at an absolute bare minimum  
**\<i2p-relay> {-anonimal}** because they *really* can get in the way.  
**\<i2p-relay> {-anonimal}** But that's a bare-minimum not-ideal scenario and I know we can get more done by then.  
**\<i2p-relay> {-anonimal}** Any thoughts?  
**\<i2p-relay> {-olark}** Yeah those are the big ones. I'll go over the addressbook and add/remove the destinations that don't work.  
**\<guzzi>** 119 looks easy for u. I dont disagree  
**\<guzzi>** Sorry i meant 375  
**\<i2p-relay> {-anonimal}** Well, it looks straightforward, we'll see what it really looks like when the time comes :)  
**\<i2p-relay> {-anonimal}** olark: re: destinations, which issue # is this?  
**\<i2p-relay> {-olark}** Keep it a small list.  
**\<i2p-relay> {-olark}** Some are just dead.  
**\<i2p-relay> {-olark}** So we have a small list of eepsites that do work and may be useful for a new user.  
**\<i2p-relay> {-olark}** Not in the milestone I believe.  
**\<guzzi>** Agree on the eepsite list actually containing valid sites  
**\<guzzi>** 119 looks like a critical fix for sure.  
**\<i2p-relay> {-olark}** re: subscription file  
**\<i2p-relay> {-olark}** Not high priority but maybe something nice to have for the first release.  
**\<i2p-relay> {-anonimal}** olark: oh that, well that's very low priority but if it's an issue than ok, but how can you confirm if they are dead? Were some removed in the .27 java i2p release?  
**\<i2p-relay> {-olark}** Just some of them never connect ever.  
**\<i2p-relay> {-olark}** I'll go over them again in the coming days.  
**\<i2p-relay> {-anonimal}** Ok, sounds good.  
**\<i2p-relay> {-anonimal}** guzzi: well, I wouldn't say critical because it doesn't effect all routers and it certainly hasn't effect the OSX instances  
**\<guzzi>** Ok understood  
**\<i2p-relay> {-anonimal}** And there's always the option to disable ssu at run-time, but yes I think it should be resolved.  
**\<i2p-relay> {-anonimal}** fluffypony hinted at *not* having a release before 33C3 but he may be trying to get out of https://github.com/monero-project/kovri/issues?q=is%3Aopen+is%3Aissue+milestone%3A0.1.0-alpha+assignee%3Afluffypony  
**\* guzzi** needs to find out what ssu is before i  
**\<i2p-relay> {-anonimal}** ;)  
**\* guzzi** open my mouth  
**\<i2p-relay> {-olark}** Semi-Secure UDP  
**\<guzzi>** Thanks  
**\<i2p-relay> {-anonimal}** guzzi: checkout the new Moneropedia entries I made that are now live on the website  
**\<i2p-relay> {-anonimal}** guzzi: link is in README.md  
**\<i2p-relay> {-anonimal}** (on current HEAD)  
**\<guzzi>** Awesome  
**\* guzzi** Todo tonight  
**\<i2p-relay> {-anonimal}** So, re: release,  
**\<i2p-relay> {-anonimal}** Let's keep hacking away for the next two weeks and see where we stand.  
**\<i2p-relay> {-anonimal}** Any objections?  
**\<guzzi>** Ok i will read your pm when i get back  
**\<i2p-relay> {-olark}** Keep on hacking away ;)  
**\<guzzi>** On phone now  
**\<i2p-relay> {-anonimal}** The difference between a Dec. 1st alpha release and Dec. 14th alpha release IMHO will be noticeable to an end-user. Neither is useful without package resolution nor more monero input/participation; so I want to wait for a final decision until fluffypony speaks up. We can talk more this coming week.  
**\<guzzi>** I agree boss.  
**\<i2p-relay> {-anonimal}** lol guzzi  
**\<i2p-relay> {-anonimal}** My biggest concern is that for reasons not of my doing, a release doesn't happen before 33c3, and I really hate having to change dates like this.  
**\<i2p-relay> {-anonimal}** But I'll have to be flexible for now because there are many moving parts.  
**\<i2p-relay> {-anonimal}** Anything else on point 3.?  
**\<guzzi>** No  
**\<i2p-relay> {-anonimal}** olark: ?  
**\<i2p-relay> {-olark}** We can keep moving along.  
**\<i2p-relay> {-anonimal}** 4. Moving meeting agenda issues from monero-project/kovri to monero-project/meta  
**\<i2p-relay> {-anonimal}** So, as this meeting has proven, no one else in Monero looks at the meeting agendas I prepare for every meeting :)  
**\<i2p-relay> {-anonimal}** With the creation of monero-project/meta, I think it would be better to not clutter the kovri repo with meeting agendas.  
**\<guzzi>** Agree 100%  
**\<i2p-relay> {-anonimal}** I would hope that more monero people get inolved with meeting agenda preparation and start using the meta repo too.  
**\<i2p-relay> {-anonimal}** I'd like to move agendas to meta from now on. guzzi is on board. Anyone else?  
**\<i2p-relay> {-olark}** Sounds good to me.  
**\<i2p-relay> {-anonimal}** Alright, I'll start doing that.  
**\<i2p-relay> {-anonimal}** Moving on,  
**\<i2p-relay> {-anonimal}** 5. Code + ticket discussion / Q & A  
**\<i2p-relay> {-iDunk}** i built kovri on win64 successfully but the build failed on linking for win32  
**\<i2p-relay> {-anonimal}** We've basically covered this in point 3, but I did add some new notes to #187  
**\<i2p-relay> {-iDunk-kovri-win64}** hiii  
**\<i2p-relay> {-anonimal}** For #187 not sure if EinMByte is around.  
**\<i2p-relay> {-anonimal}** Yay, hi iDunk-kovri-win64 :)  
**\<i2p-relay> {-iDunk-kovri-win64}** :)  
**\<guzzi>** Do we care about 32  
**\<i2p-relay> {-anonimal}** iDunk: can you paste error after the meeting?  
**\<i2p-relay> {-iDunk}** will do  
**\<i2p-relay> {-anonimal}** iDunk guzzi: our win32 build is working with buildbot https://build.getmonero.org/waterfall  
**\<guzzi>** Ok so it is isolated  
**\<i2p-relay> {-anonimal}** Yep, most likely, we'll see.  
**\<i2p-relay> {-anonimal}** Anyone have any questions/comments on open/closed issues?  
**\<guzzi>** Nice work idunk thank you  
**\<guzzi>** None here. You know where i am at  
**\<i2p-relay> {-iDunk}** np  
**\<i2p-relay> {-anonimal}** lol, sipping up a pina colada I imagine  
**\<guzzi>** Lol yes.  
**\<i2p-relay> {-anonimal}** olark: any questions/comments on open/closed issues?  
**\<guzzi>** I also had meant you know where i am at code wise  
**\<i2p-relay> {-olark}**  All good ;D  
**\<i2p-relay> {-anonimal}** Oh, haha!  
**\<i2p-relay> {-anonimal}** * glances over issues  
**\<i2p-relay> {-olark}** re: APIs  
**\<i2p-relay> {-olark}** How is that coming along?  
**\<i2p-relay> {-olark}** #351 and #350  
**\<i2p-relay> {-anonimal}** Once more client/router work is completed, they will be easier to implement.  
**\<i2p-relay> {-anonimal}** So that first, API second.  
**\<i2p-relay> {-olark}** Ya, still got a little ways to go. Haven't written APIs in a while so could be a good place to refresh myself ;)  
**\<i2p-relay> {-anonimal}** I'm getting a better idea of how I'd like to implement but I'd like to compare notes with EinMByte when he returns before moving on anything.  
**\<i2p-relay> {-anonimal}** (because he has strong opinions on the matter and he has great experience)  
**\<i2p-relay> {-olark}** Yeah his input is very valuable.  
**\<i2p-relay> {-olark}** Well known in the i2p community.  
**\<_Slack> \<nanoakron>** Lol  
**\<i2p-relay> {-anonimal}** I'll continue to comment in those tickets as other work progresses.  
**\<i2p-relay> {-anonimal}** I always keep the APIs in mind when doing other work,  
**\<i2p-relay> {-anonimal}** which always leads to more work that needs to be resolved before returning to APIs  
**\<i2p-relay> {-olark}** Yep  
**\<i2p-relay> {-anonimal}** (etc. etc.)  
**\<i2p-relay> {-anonimal}** Ok, anything else on this point?  
**\<i2p-relay> {-anonimal}** If not we can talk more about it later this week.  
**\<i2p-relay> {-olark}** That is all on my side.  
**\<i2p-relay> {-olark}** Ok.  
**\<guzzi>** None here  
**\<i2p-relay> {-anonimal}** 6. Any additional meeting items  
**\<i2p-relay> {-anonimal}** Nothing from me. We have a clear plan, we're executing the plan as planned.  
**\<guzzi>** None here. You will be busy. I will try to correspond efficiently s possible the next two weeks  
**\<_Slack> \<nanoakron>** Slight general question about i2p - if I'm running kovri in the future, would a malicious agency be able to detect that?  
**\<i2p-relay> {-olark}** ISPs can figure out you are using i2p.  
**\<i2p-relay> {-anonimal}** nanoakron: that depends on the agency  
**\<moneromooo>** A malicious one.  
**\* moneromooo** runs  
**\<_Slack> \<nanoakron>** Lol  
**\<i2p-relay> {-anonimal}** nanoakron: good question, I think that was one of the SE questions I bookmarked to answer  
**\<_Slack> \<nanoakron>** Are there any loose thoughts on the step beyond kovri? Steganographic encoding within normal router traffic?  
**\<i2p-relay> {-anonimal}** Now that moneropedia is merged, I'll answer them.  
**\<i2p-relay> {-olark}** I would like to explore better ways to obscure i2p traffic in with regular clearnet traffic, but that is for future research.  
**\<_Slack> \<nanoakron>** Of course  
**\<i2p-relay> {-olark}** SSU is pretty resistant to DPI and kovri already takes some countermeasure to hide the fact i2p is being used.  
**\<i2p-relay> {-anonimal}** Stego obfuscation within encryption? That makes as much sense as encrypting the encryption more than it is already encrypted.  
**\<i2p-relay> {-olark}** But there are lots of avenues to explore.  
**\<i2p-relay> {-olark}** Packet size I believe is the biggest giveaway among others.  
**\<i2p-relay> {-anonimal}** nanoakron: do you have any research on that?  
**\<i2p-relay> {-anonimal}** (proving any effectiveness?)  
**\<_Slack> \<nanoakron>** Sadly not :(  
**\<_Slack> \<nanoakron>** It's just something I heard being discussed between two more technical people where I work a while ago.  
**\<i2p-relay> {-anonimal}** nanoakron: it would probably me more effective to simply add another layer of encryption (but that isn't really necessary)  
**\<_Slack> \<nanoakron>** Stego to hide bitcoin  
**\<i2p-relay> {-anonimal}** (but maybe I'm not understanding your point exactly)  
**\<i2p-relay> {-anonimal}** Oh, well that makes sense.  
**\<i2p-relay> {-anonimal}** They're not dealing with layered encryption like we do.  
**\<_Slack> \<nanoakron>** At the router level  
**\<i2p-relay> {-anonimal}** (afaik)  
**\<i2p-relay> {-anonimal}** I'm not sure how effective that would be for us, but nanoakron if you get more info please feel free to send to #kovri-dev  
**\<_Slack> \<nanoakron>** How easy would it be for the North Korean government to shut down all i2p traffic for example. Anyway...it's highly theoretical stuff right now.  
**\<_Slack> \<nanoakron>** Of course!  
**\<i2p-relay> {-anonimal}** nanoakron: and olark pointed out important overlay-network facts  
**\<_Slack> \<nanoakron>** Yep  
**\<i2p-relay> {-anonimal}** North Korea? Can't they basically do whatever they want whenever they want to on any network level?  
**\<i2p-relay> {-olark}** North Korea has no internet infrastructure aside from government use afaik.  
**\<_Slack> \<nanoakron>** That would be the worst case scenario. For example if our governments decided to ban all non-fiat currencies.  
**\<i2p-relay> {-olark}** But if it is any indication, I2P can be run in China.  
**\<i2p-relay> {-anonimal}** Doesn't their "internet" exist entirely in a class C subnet?  
**\<_Slack> \<nanoakron>** Anyway, I'm just spitballing  
**\<i2p-relay> {-olark}** It is important to keep those things in mind though.  
**\<i2p-relay> {-anonimal}** Spitball all you want, we have 7 minutes left :)  
**\<_Slack> \<nanoakron>** ;)  
**\<guzzi>** Lol. True  
**\<_Slack> \<nanoakron>** Something for the monero research lab  
**\<guzzi>** We should at least worry about packet sizes.  
**\<guzzi>** In the future  
**\<guzzi>** We are going to add user agent options  
**\<_Slack> \<nanoakron>** Deterministic packet sizes to prevent fingerprinting and sniffing  
**\<_Slack> \<nanoakron>** ?  
**\<i2p-relay> {-olark}** Blending in with SSL traffic is the ideal scenario.  
**\<_Slack> \<nanoakron>** Ah yes  
**\<_Slack> \<nanoakron>** Will my little Odroid C2 node (ARMv8) be able to run kovri alongside monero in its final embodiment?  
**\<i2p-relay> {-anonimal}** NTCP2 is addresses TCP packet length obfuscation.  
**\<i2p-relay> {-anonimal}** olark: blending in with SSL, I don't see how that would be ideal, what do you mean?  
**\<i2p-relay> {-olark}** To fly under the radar more.  
**\<i2p-relay> {-anonimal}** nanoakron: I'm running kovri on ARMv8 linaro right now  
**\<_Slack> \<nanoakron>** Neat  
**\<i2p-relay> {-olark}** If I am a mouse my best bet is to sneak in with all the other rats into the kitchen right? ;)  
**\<i2p-relay> {-olark}** Hoping no one realizes I am a mouse.  
**\<i2p-relay> {-anonimal}** olark: they'll tend to shutdown SSL connections before detecting NTCP/UDP signatures, I'm pretty sure of that.  
**\<_Slack> \<nanoakron>** Yes, not true stego but mimickry.  
**\<guzzi>** Agree.  
**\<guzzi>** Any other doomsday senerios?  
**\<_Slack> \<nanoakron>** Lol  
**\<guzzi>** 1 min?  
**\<i2p-relay> {-anonimal}** Btw: a TLS transport is still an open draft proposal from 2009 https://geti2p.net/spec/proposals  
**\<i2p-relay> {-anonimal}** TLS/SSL makes it's case but I'm not strongly in favor. We can talk more about that at the next meeting if anyone wants to, just add a note in the agenda.  
**\<i2p-relay> {-anonimal}** Moving on,  
**\<i2p-relay> {-anonimal}** 7. Confirm next meeting date/time  
**\<i2p-relay> {-anonimal}** moneromooo: will next meeting be 18:00 for #monero-dev?  
**\<i2p-relay> {-olark}** Hmmm  
**\<i2p-relay> {-anonimal}** Or 17:00?  
**\<i2p-relay> {-fluffypony}** oh  
**\<i2p-relay> {-fluffypony}** sorry anonimal  
**\<i2p-relay> {-anonimal}** Thanks for understanding fluffypony.  
**\<i2p-relay> {-fluffypony}** my apologies  
**\<i2p-relay> {-fluffypony}** I must've misunderstood the timing discussion  
**\<i2p-relay> {-anonimal}** fluffypony: apologies accepted! Are #monero-dev meetings now at 17:00 or 18:00  
**\<i2p-relay> {-anonimal}** (fluffypony: we're idling on 7. Confirm next meeting date/time)  
**\<i2p-relay> {-fluffypony}** anonimal: let's update after the Monero meeting  
**\<i2p-relay> {-anonimal}** Alright, I'll start with 17:00  
**\<i2p-relay> {-anonimal}** Meeting in two weeks.  
**\<i2p-relay> {-anonimal}** Thanks everyone!  
**\<i2p-relay> {-olark}** Good talk everyone :D  