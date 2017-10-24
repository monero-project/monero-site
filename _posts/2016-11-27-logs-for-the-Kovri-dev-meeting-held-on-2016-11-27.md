---
layout: post
title: Logs for the Kovri Dev Meeting Held on 2016-11-27
summary: Brief review of what has been completed since last meeting, Alpha release, and code & open tickets discussion
tags: [dev diaries, i2p, crypto]
author: dEBRUYNE / fluffypony
---    

### Logs  

**\<i2p-relay> {-fluffypony}** ok anonimal  
**\<i2p-relay> {-fluffypony}** Kovri meeting start, all yours  
**\<i2p-relay> {-meeting-bot} [anonimal]** 1. Greetings  
**\<i2p-relay> {-meeting-bot} [anonimal]** 2. Brief review of what's been completed since the previous meeting  
**\<i2p-relay> {-meeting-bot} [anonimal]** 3. Status of alpha release preparations - https://github.com/monero-project/kovri/issues?utf8=%E2%9C%93&q=is%3Aopen%20is%3Aissue%20milestone%3A0.1.0-alpha%20  
**\<i2p-relay> {-meeting-bot} [anonimal]** 4. Code + ticket discussion / Q & A  
**\<i2p-relay> {-meeting-bot} [anonimal]** 5. Any additional meeting items  
**\<i2p-relay> {-meeting-bot} [anonimal]** 6. Confirm next meeting date/time  
**\<i2p-relay> {-meeting-bot} [anonimal]** Hi  
**\<i2p-relay> {-meeting-bot} [anonimal]** 1.  
**\<i2p-relay> {-fluffypony}** hi  
**\<i2p-relay> {-guzzi}** hi  
**\<i2p-relay> {-fluffypony}** asl?  
**\<ArticMine>** Hi  
**\<i2p-relay> {-iDunk}** hi  
**\<i2p-relay> {-olark}** Greetings  
**\<moneromooo>** Hi  
**\<i2p-relay> {-meeting-bot} [anonimal]** Hi fluffypony guzzi olark iDunk ArticMine moneromooo  
**\<i2p-relay> {-meeting-bot} [anonimal]** EinMByte is idling as are the others, afaict.  
**\<i2p-relay> {-meeting-bot} [anonimal]** 2. Brief review of what's been completed since the previous meeting  
**\<binaryFate>** late greetings. watching.  
**\<i2p-relay> {-meeting-bot} [anonimal]** I'll keep it generic: bug fixes (many were difficult bugs) + refactoring, mentoring, and research.  
**\<i2p-relay> {-meeting-bot} [anonimal]** *Poof!* done.  
**\<i2p-relay> {-meeting-bot} [anonimal]** Anything else on 2? :)  
**\<i2p-relay> {-fluffypony}** can I add to 2?  
**\<i2p-relay> {-meeting-bot} [anonimal]** git log and github are available for details.  
**\<i2p-relay> {-meeting-bot} [anonimal]** Of course fluffypony  
**\<i2p-relay> {-fluffypony}** I'd like to congratulate anonimal on completing his first milestone, even if he won't admit to it yet :-P  
**\<i2p-relay> {-fluffypony}** first full-time FFS "employee", first milestone :)  
**\<i2p-relay> {-meeting-bot} [anonimal]** Grr! Well, thank you fluffypony.  
**\<i2p-relay> {-guzzi}** and thanks for mentoring.  
**\<i2p-relay> {-fluffypony}** and we didn't even need to blockchain it!  
**\<i2p-relay> {-olark}** Good work. ;)  
**\<i2p-relay> {-meeting-bot} [anonimal]** Because of the large amount of non-code work, I hadn't felt comfortable with a payout yet. I'll get to that this week.  
**\<i2p-relay> {-fluffypony}** I think everyone here will attest to the amount of work you do  
**\<i2p-relay> {-guzzi}** no doubt.  
**\<i2p-relay> {-meeting-bot} [anonimal]** No problem guzzi, thank *you* for your great progress.  
**\<i2p-relay> {-fluffypony}** "anonimal made me the man I am today" - fluffypony, 2016  
**\<i2p-relay> {-olark}** He's called anonimal for a reason haha  
**\<i2p-relay> {-fluffypony}** olark: coupled with my quote I think that's one for the history books  
**\<i2p-relay> {-meeting-bot} [anonimal]** lol oh you guys, thanks for acknowledgements. I'm glad to be here with you all.  
**\<i2p-relay> {-meeting-bot} [anonimal]** I'd love to dwell on the work accomplished over the past two weeks but I think we can move on, any objections?  
**\<i2p-relay> {-guzzi}** onward  
**\<i2p-relay> {-fluffypony}** let's move on  
**\<i2p-relay> {-meeting-bot} [anonimal]** 3. Status of alpha release preparations - https://github.com/monero-project/kovri/issues?utf8=%E2%9C%93&q=is%3Aopen%20is%3Aissue%20milestone%3A0.1.0-alpha%20  
**\<i2p-relay> {-meeting-bot} \* anonimal** clicks  
**\<i2p-relay> {-meeting-bot} [anonimal]** Ok, don't be alarmed, but it's actually not a lot if you look carefully.  
**\<i2p-relay> {-meeting-bot} [anonimal]** Some of these can even be moved to next milestone if needed.  
**\<i2p-relay> {-meeting-bot} [anonimal]** fluffypony: can you give a status on 33c3 and your thoughts on a release (like we spoke about earlier)?  
**\<i2p-relay> {-fluffypony}** yes  
**\<i2p-relay> {-fluffypony}** so our original plan was to co-host an assembly with i2p at 33C3  
**\<i2p-relay> {-fluffypony}** basically hosting an i2p + Monero table  
**\<i2p-relay> {-fluffypony}** and then have the Kovri alpha ready by then  
**\<i2p-relay> {-fluffypony}** unfortunately this year's congress ticketing setup has been a mess  
**\<i2p-relay> {-fluffypony}** through no fault of their own, this is the most popular CCC ever  
**\<i2p-relay> {-fluffypony}** we tried to book 10+ tickets at all 3 of the public booking dates  
**\<i2p-relay> {-fluffypony}** and got nothing  
**\<i2p-relay> {-meeting-bot} [anonimal]** Wow, that's insane.  
**\<i2p-relay> {-fluffypony}** I managed to get tickets for myself and othe, after the fact  
**\<i2p-relay> {-fluffypony}** but it's not enough to man a table - we'd have needed 8+ community members for htat  
**\<i2p-relay> {-fluffypony}** that  
**\<i2p-relay> {-fluffypony}** in view of the foregoing, we're no longer obligated to hit our alpha release date  
**\<i2p-relay> {-meeting-bot} [anonimal]** Ok, well that's great to hear you at least got two tickets.  
**\<i2p-relay> {-fluffypony}** this doesn't mean we won't stick to it, but it means we can choose how we want to plan it  
**\<i2p-relay> {-meeting-bot} [anonimal]** Ok, well here are my thoughts on the reality of the situation, I'll try to choose my words wisely:  
**\<i2p-relay> {-meeting-bot} [Jake__]** Is their any news on the GUI beta binaries.  
**\<i2p-relay> {-meeting-bot} [fluffypony]** Jake__: this is the Kovri meeting  
**\<i2p-relay> {-meeting-bot} [fluffypony]** you can ask later  
**\<i2p-relay> {-meeting-bot} [Jake__]** Nvm  
**\<i2p-relay> {-meeting-bot} [Jake__]** My mistake  
**\<i2p-relay> {-meeting-bot} [anonimal]** even with all milestone issues resolved, the release wouldn't be a spectacular one, and frankly may have more negative consequences than positive.  
**\<i2p-relay> {-meeting-bot} [anonimal]** I mean, sure, I can most likely get everything done in time, but is it really worth it?  
**\<i2p-relay> {-fluffypony}** anonimal: that's fair  
**\<i2p-relay> {-meeting-bot} [anonimal]** The packaging aspect alone will be 'fun' to deal with, *especially* come upgrade time.  
**\<i2p-relay> {-fluffypony}** are we auto-upgrading ala Java i2p?  
**\<i2p-relay> {-meeting-bot} [anonimal]** And really, an auto-updater would be great on that front - and that's not terribly hard to do now that more work has been done elsewhere.  
**\<i2p-relay> {-meeting-bot} [anonimal]** We wouldn't if we released this month unless I dropped other higher priority issues.  
**\<i2p-relay> {-meeting-bot} \* anonimal** thinking  
**\<i2p-relay> {-fluffypony}** look  
**\<i2p-relay> {-fluffypony}** zzz2 will attest to the fact that part of i2p's network stability is due to the auto-updater  
**\<i2p-relay> {-fluffypony}** so let's not rush something out that doesn't have that  
**\<moneromooo>** Do I understand code that will fetch more code and run it on the user's machine ? Unprompted ?  
**\<moneromooo>** Or merely tell the user there's an update to install at their earliest convenience ?  
**\<i2p-relay> {-fluffypony}** moneromooo: it's opt-out, yes  
**\<moneromooo>** That;s not nice.  
**\<i2p-relay> {-fluffypony}** moneromooo: you could do a decaying prompt  
**\<moneromooo>** What is this ?  
**\<i2p-relay> {-fluffypony}** prompt the user, if after 15 days they haven't installed it, then install it for them  
**\<i2p-relay> {-meeting-bot} [anonimal]** The current UI does not provide any useful control to an end-user.  
**\<moneromooo>** I suppose that's less nasty.  
**\<i2p-relay> {-fluffypony}** moneromooo: there's just been a spate of bannings on the network, of old clients that aren't updated  
**\<i2p-relay> {-fluffypony}** if there's data leakage on older clients it can compromise newer ones  
**\<i2p-relay> {-fluffypony}** so it's not something to be taken lightly  
**\<i2p-relay> {-meeting-bot} [anonimal]** So, we could fix that first and then focus on release imho. Really who benefits from a release? Will it be developers? Will developers suddenly become more interested in kovri? Or is it purely for the end-user's benefit?  
**\<i2p-relay> {-fluffypony}** end users  
**\<i2p-relay> {-fluffypony}** do we even have a stable API for devs?  
**\<i2p-relay> {-guzzi}** realease implies end users imo.  
**\<i2p-relay> {-meeting-bot} [anonimal]** Nope, more router issues to fix first.  
**\<i2p-relay> {-fluffypony}** ok so then end users :)  
**\<i2p-relay> {-meeting-bot} [anonimal]** I agree with guzzi, but I still like the idea of feeling accomplished with a release by the end of the year.  
**\<i2p-relay> {-meeting-bot} [anonimal]** I guess anything called "release" will hold a certain weight,  
**\<i2p-relay> {-meeting-bot} [anonimal]** Maybe we can compromise, find a middle-ground somehow.  
**\<i2p-relay> {-fluffypony}** true  
**\<i2p-relay> {-meeting-bot} [anonimal]** I'd like to work with pigeons on nightly releases, that could be a start.  
**\<i2p-relay> {-meeting-bot} [anonimal]** I don't think we'll have the website done in time (will we?)  
**\<i2p-relay> {-meeting-bot} [anonimal]** As for "release", I can simply throw the bundle together in nightly releases.  
**\<i2p-relay> {-meeting-bot} [anonimal]** I think what people really want is something that "feels" released.  
**\<i2p-relay> {-meeting-bot} [anonimal]** The title means nothing really.  
**\<i2p-relay> {-fluffypony}** we can couple nightlies with the Monero nightlies  
**\<i2p-relay> {-meeting-bot} [anonimal]** Sounds fair.  
**\<i2p-relay> {-fluffypony}** on the list of alpha issues  
**\<i2p-relay> {-fluffypony}** we've made progress on the Zoho setup  
**\<i2p-relay> {-fluffypony}** it's been a bit of a PITA, but pigeons has figured most of it out  
**\<i2p-relay> {-fluffypony}** we'll be moving getmonero.org over in the next week or so, and then we can do Kovri emails too  
**\<i2p-relay> {-meeting-bot} [anonimal]** Ok, sounds good.  
**\<i2p-relay> {-meeting-bot} [anonimal]** So, nightly releases for kovri would be slightly different that monero because we have to bundle certificates and other things along with a static binary.  
**\<i2p-relay> {-meeting-bot} [pigeons]** I beleive you said currently the make system doesnt have an option yet for a static build, right?  
**\<i2p-relay> {-meeting-bot} [anonimal]** I could consider it a fair compromise if, instead of both nightly release and official alpha release, to stick focus more on ensuring reliable nightly releases (which would also give me more time to work on more important issues).  
**\<i2p-relay> {-meeting-bot} [MEATPLOW]** im here for the free food  
**\<i2p-relay> {-meeting-bot} [anonimal]** pigeons: for kovri? No, we can build static.  
**\<i2p-relay> {-meeting-bot} [fluffypony]** MEATPLOW: we have snacks and beer after the meetings  
**\<i2p-relay> {-meeting-bot} [pigeons]** wow i thought thats why you told me to remove the build uploads  
**\<i2p-relay> {-iDunk}** win builds are not realy static  
**\<i2p-relay> {-meeting-bot} [anonimal]** pigeons: no, I said we need to bundle files or else the static build is useless (people will download, run it, and it won't get to reseed).  
**\<i2p-relay> {-meeting-bot} [pigeons]** OK  
**\<i2p-relay> {-meeting-bot} [anonimal]** iDunk: if there are windows static issues then that would be another thing we could focus on for a solid nightly build  
**\<i2p-relay> {-iDunk}** win64 is not static at all, win32 looks static but still requires dlls from msys2  
**\<i2p-relay> {-meeting-bot} [anonimal]** fluffypony: so final verdict for alpha release: focus on getting nightly releases ready in place of a single release?  
**\<i2p-relay> {-fluffypony}** yes  
**\<i2p-relay> {-meeting-bot} [anonimal]** (at least for this month)  
**\<i2p-relay> {-fluffypony}** make pigeons work  
**\<i2p-relay> {-meeting-bot} [anonimal]** lol  
**\<i2p-relay> {-fluffypony}** :-P  
**\<i2p-relay> {-iDunk}** :)  
**\<i2p-relay> {-meeting-bot} [anonimal]** Ok, how does that sound to everyone? Yay? Nay?  
**\<i2p-relay> {-iDunk}** Yay  
**\<moneromooo>** Sounds good to this member of the peanut gallery  
**\<i2p-relay> {-olark}** Nightly builds are a good compromise imo.  
**\<i2p-relay> {-olark}** Yay  
**\<i2p-relay> {-meeting-bot} [anonimal]** Awesome. guzzi, any thoughts?  
**\<i2p-relay> {-guzzi}** sounds awesome  
**\<i2p-relay> {-meeting-bot} [anonimal]** He may be AFK.  
**\<i2p-relay> {-guzzi}** excited  
**\<i2p-relay> {-meeting-bot} [anonimal]** Oh there you are, ok great.  
**\<i2p-relay> {-guzzi}** this will be motivating  
**\<i2p-relay> {-meeting-bot} [anonimal]** Excellent! Moving on,  
**\<i2p-relay> {-meeting-bot} [anonimal]** 4. Code + ticket discussion / Q & A  
**\<i2p-relay> {-meeting-bot} [anonimal]** Focusing on those milestone issues,  
**\<i2p-relay> {-meeting-bot} [anonimal]** fluffypony: I've seen someone pop into #monero-dev from time to time offering webdev, did anything come of that?  
**\<i2p-relay> {-fluffypony}** no, they're mostly put off when they get told they can't use Javascript  
**\<i2p-relay> {-fluffypony}** :-P  
**\<i2p-relay> {-meeting-bot} [anonimal]** lol  
**\<i2p-relay> {-meeting-bot} [anonimal]** Ok, so once zoho is resolved then the site (server) can come online?  
**\<i2p-relay> {-meeting-bot} [anonimal]** And the rest is a matter of code/content?  
**\<i2p-relay> {-fluffypony}** yes  
**\<i2p-relay> {-fluffypony}** well two things actually  
**\<i2p-relay> {-fluffypony}** Zoho is for email  
**\<i2p-relay> {-fluffypony}** the new hosting infrastructure is for site  
**\<i2p-relay> {-fluffypony}** both are running parralel-ish  
**\<i2p-relay> {-fluffypony}** parallel-ish  
**\<i2p-relay> {-meeting-bot} [anonimal]** https://github.com/monero-project/kovri/issues/46#issuecomment-242990742  
**\<i2p-relay> {-meeting-bot} [vertp]** Is there a new site going up to replace getmonero?  
**\<i2p-relay> {-meeting-bot} [anonimal]** lol, time will fly.  
**\<i2p-relay> {-meeting-bot} [vertp]** Oh, kovri. sorry  
**\<i2p-relay> {-meeting-bot} [anonimal]** vertp: good question, fluffypony is getmonero getting work done too?  
**\<i2p-relay> {-fluffypony}** no  
**\<i2p-relay> {-fluffypony}** same deal  
**\<i2p-relay> {-fluffypony}** every time someone says "WE MUST REDESIGN THE WEBSITE"  
**\<i2p-relay> {-fluffypony}** then I go "ok, make sure to design the forum to match, and you must have non-JS fallbacks"  
**\<i2p-relay> {-fluffypony}** and they slink off into the distance  
**\<i2p-relay> {-meeting-bot} [pero]** website is fine imo  
**\<i2p-relay> {-meeting-bot} [anonimal]** hahaha  
**\<i2p-relay> {-meeting-bot} [vertp]** I think getmonero is perfectly fine as is for the record, just was wondering what "this" site was in reference to  
**\<i2p-relay> {-meeting-bot} [ferretinjapan]** :)  
**\<i2p-relay> {-fluffypony}** I'm going to write a garbage collector daemon called Waste  
**\<i2p-relay> {-fluffypony}** and the binary will be wasted  
**\<i2p-relay> {-meeting-bot} [anonimal]** muh js  
**\<i2p-relay> {-meeting-bot} [pero]** it has a refreshing aura of authenticity  
**\<i2p-relay> {-fluffypony}** and the website will be getwasted.org  
**\<i2p-relay> {-meeting-bot} [hyc]** lol  
**\<i2p-relay> {-meeting-bot} [MrWatcher]** he  
**\<i2p-relay> {-meeting-bot} \* anonimal** lol, hears drum rimshot  
**\<moneromooo>** So... next time someone asks about the website, I've got a ready made answer: "slink off"  
**\<i2p-relay> {-fluffypony}** "slink you too, buddy!"  
**\<i2p-relay> {-meeting-bot} [anonimal]** I think the rest of the issues speak for themselves. One question though,  
**\<i2p-relay> {-meeting-bot} [anonimal]** Can anyone reproduce #434 on their armv7 device?  
**\<i2p-relay> {-fluffypony}** the only arm device I have access to right now is the one under my sleeve device  
**\<i2p-relay> {-fluffypony}** but I'll try it when I'm back home  
**\<i2p-relay> {-guzzi}**  
**\<i2p-relay> {-meeting-bot} [anonimal]** lol, more drum rimshots, fluffypony is on a roll.  
**\<i2p-relay> {-meeting-bot} [anonimal]** guzzi olark: anything on point 4 "Code + ticket discussion / Q & A"?  
**\<i2p-relay> {-olark}** All good ;)  
**\<i2p-relay> {-meeting-bot} [anonimal]** guzzi is probably at the beach again.  
**\<i2p-relay> {-olark}** Slurping up a margarita.  
**\<i2p-relay> {-meeting-bot} [anonimal]** hah  
**\<i2p-relay> {-meeting-bot} [anonimal]** Ok, moving on. 5. Any additional meeting items  
**\<i2p-relay> {-fluffypony}** the glamorous life of a Kovri contributor  
**\<i2p-relay> {-fluffypony}** nothing from my side  
**\<i2p-relay> {-fluffypony}** * eyes his beer  
**\<i2p-relay> {-meeting-bot} [_Slack] \<nanoakron>** Beer? Sacrilege for a South African…although I hear there’s a good craft scene developing.  
**\<i2p-relay> {-meeting-bot} [anonimal]** Quite glamorous indeed.  
**\<moneromooo>** I'll mention again that I reaaally hate software that will take it upon itself to download/run stuff.  
**\<i2p-relay> {-meeting-bot} [anonimal]** Nothing additional from me.  
**\<i2p-relay> {-fluffypony}** moneromooo I know, but think about the average Kovri user  
**\<i2p-relay> {-fluffypony}** (in the future, not now)  
**\<moneromooo>** The average kovri user may well be prompted.  
**\<i2p-relay> {-meeting-bot} [taushet]** moneromooo, so no 30-day trial from McAfee with the Kovri binaries then?  
**\<i2p-relay> {-fluffypony}** LOL  
**\<i2p-relay> {-meeting-bot} [iDunk]** LOL  
**\<i2p-relay> {-olark}** Now that fluffypony brang up using TweetNaCl in the monero meeting. Are there any boundaries for Kovri using TweetNaCl functions where possible?  
**\<i2p-relay> {-fluffypony}** and a personal introductory video from McAfee himself ?  
**\<i2p-relay> {-olark}** I just have recently been fascinated with TweetNaCl, Salsa20 etc that it seems Kovri could benefit from some of those functions.  
**\<i2p-relay> {-olark}** A compact crypto library for a compact i2p router. Am I right? ;D  
**\<i2p-relay> {-meeting-bot} [anonimal]** moneromooo: me too. I think as long as it's optional we should be ok.  
**\<moneromooo>** Excellent. So opt-in :)  
**\<moneromooo>** (and banned until upgraded is fine as a protection)  
**\<i2p-relay> {-olark}** Just spitballing anyway.  
**\<i2p-relay> {-guzzi}** all good for me on #4. i am learning a ton. as fast as I am able to.  
**\<i2p-relay> {-fluffypony}** olark: yeah definitely  
**\<i2p-relay> {-meeting-bot} [anonimal]** cryptopp has salsa20.  
**\<i2p-relay> {-fluffypony}** I think the important thing is identifying where TweetNaCl's correctness is useful  
**\<i2p-relay> {-fluffypony}** because it sacrifices performance for verifiable correctness  
**\<i2p-relay> {-olark}** Right.  
**\<i2p-relay> {-olark}** Salsa20 is faster than AES256, but ya in general because of the conciseness of the code it is not as effecient as it could be. Favouring it being easy to audit.  
**\<i2p-relay> {-olark}** etc  
**\<i2p-relay> {-meeting-bot} [anonimal]** I'd want to review before jumping on the tweenacl train.  
**\<i2p-relay> {-meeting-bot} [anonimal]** If it can't replace supercop then I don't see much of a point.  
**\<i2p-relay> {-meeting-bot} [anonimal]** *If*.  
**\<i2p-relay> {-olark}** Taking advantage of TweetNaCl's verifiable correctness I think is more valuable then the slight downside of mildly less effecient operations.  
**\<i2p-relay> {-olark}** TweetNaCl has ed25519 signing operations.  
**\<i2p-relay> {-olark}** Is the most recent paper afaik  
**\<i2p-relay> {-olark}** https://tweetnacl.cr.yp.to/tweetnacl-20140917.pdf  
**\<i2p-relay> {-fluffypony}** TweetNaCl is the successor to SUPERCOP in many ways  
**\<i2p-relay> {-meeting-bot} [anonimal]** Release dates not being one of them if latest tweetnacl was 2014.  
**\<i2p-relay> {-fluffypony}** they're not adding functions  
**\<i2p-relay> {-fluffypony}** so there aren't new releases except to fix bugs  
**\<i2p-relay> {-olark}** It is the original 25 NaCl functions.  
**\<i2p-relay> {-fluffypony}** and given its conciseness there haven't been many of those  
**\<i2p-relay> {-meeting-bot} [anonimal]** Needs more research on our end. We also use other functions from supercop.  
**\<i2p-relay> {-meeting-bot} [anonimal]** 18:00, out of time, I'll be around after the meeting.  
**\<i2p-relay> {-fluffypony}** kk  
**\<i2p-relay> {-meeting-bot} [anonimal]** 6. Confirm next meeting date/time  
**\<i2p-relay> {-fluffypony}** meeting bot going down  
**\<i2p-relay> {-olark}** I agree. TweetNaCl is definitely something to consider. Will take more consideration, but I think could be very useful for both Kovri and Monero.  
**\<i2p-relay> {-meeting-bot} [anonimal]** Same time, two weeks?  
**\<i2p-relay> {-fluffypony}** oh after 6  
**\<i2p-relay> {-olark}** Sounds good.  
**\<i2p-relay> {-meeting-bot} [anonimal]** fluffypony: 17:00 ok? Same time?  
**\<i2p-relay> {-guzzi}** ok with me  
**\<i2p-relay> {-fluffypony}** ok  
**\<i2p-relay> {-fluffypony}** done and dusted  
**\<i2p-relay> {-olark}** Good talk everyone :D  
**\<i2p-relay> {-fluffypony}** meeting bot off  