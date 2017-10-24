---
layout: post
title: Logs for the Kovri Dev Meeting Held on 2016-10-16
summary: Brief review of what has been completed since last meeting, Kovri API discussion, Kovri Logo, and code & open tickets discussion
tags: [dev diaries, i2p, crypto]
author: dEBRUYNE / fluffypony
---

### Logs

**\<i2p-relay> {-anonimal}** 17:00!  
**\<moneromooo>** Go go go!  
**\<ArticMine>** Let's start  
**\<i2p-relay> {-anonimal}** I can't copy/paste as quickly as usual so here's in bits:  
**\<i2p-relay> {-anonimal}** 1. Greetings  
**\<i2p-relay> {-anonimal}** 2. Brief review of what's been completed since the previous meeting  
**\<i2p-relay> {-anonimal}** 3. libclient API discussion (#351)  
**\<i2p-relay> {-anonimal}** 4. logo  
**\<i2p-relay> {-anonimal}** 5. Code + ticket discussion / Q & A  
**\<i2p-relay> {-anonimal}** 6. Any additional meeting items  
**\<i2p-relay> {-anonimal}** 7. Confirm next meeting date/time  
**\<i2p-relay> {-EinMByte}** Hi  
**\<i2p-relay> {-anonimal}** Hello  
**\<i2p-relay> {-anonimal}** 2. Brief review of what's been completed since the previous meeting  
**\<i2p-relay> {-anonimal}** Very little on the codebase work this period because I've been busy with getting the full-time prop ready/funded and working on the documentation prop:  
**\<i2p-relay> {-anonimal}** - Tons of work on #256 (see my monero-site fork for details)  
**\<i2p-relay> {-anonimal}** - Minor AES-NI impl fixes/refactor  
**\<i2p-relay> {-anonimal}** - Client fix to allow saving privates when behind a transproxy  
**\<i2p-relay> {-anonimal}** - Bump dependency versions in submodules  
**\<i2p-relay> {-anonimal}**   (the issue is probably *when client doesn't have everything it wants when router expects inbound peers*)  
**\<i2p-relay> {-anonimal}** - REMOVED TRAVIS-CI! YAY! We now have all-platform build support thanks to pigeons  
**\<i2p-relay> {-anonimal}** - Minor things and some doc fixes  
**\<i2p-relay> {-anonimal}** - New contributor dadude (welcome, dadude)  
**\<i2p-relay> {-anonimal}** One more note:  
**\<i2p-relay> {-anonimal}** My full-time funding proposal was fully funded in a record ~2-3 days https://forum.getmonero.org/9/work-in-progress/86967/anonimal-s-kovri-full-time-development-funding-thread  
**\<i2p-relay> {-anonimal}** Absolutely unbelievable and I'm so thankful and proud to be a part of this community. The latest reddit thread I think is here https://www.reddit.com/r/Monero/comments/579t3a/kovri_dev_funded_congrats_everyone/  
**\<i2p-relay> {-anonimal}** Huge note: this doesn't mean we don't need more contributors, so please let's continue to get the word out there about kovri and get more people on board so we can grow stronger.  
**\<i2p-relay> {-anonimal}** Anything else on 2.?  
**\<_Slack>** Action: anonimal sees dadude typing  
**\<_Slack> {dadude}** thank you. And congrats on that anonimal! that's actually pretty amazing.  
**\<imans>** reading...  
**\<i2p-relay> {-anonimal}** Thanks dadude, its really the community to thank; such a great crowd.  
**\<i2p-relay> {-EinMByte}** Good to see you're funded now, anonimal  
**\<_Slack> {dadude}** yep! and 'by word out there about kovri' you mean in monero community  or just more people in general?  
**\<i2p-relay> {-EinMByte}** That gives me a good excuse to do little development :)  
**\<i2p-relay> {-anonimal}** s/saving privates/saving private keys/ \<-- lol, oops  
**\<i2p-relay> {-anonimal}** Thanks EinMByte. If an FFS would help you put more time in, I'll be the first to donate (or will try to be unless someone else beats me to it).  
**\<i2p-relay> {-anonimal}** dadude: all humans on the planet if possible (preferably with internet availability)  
**\<_Slack> {dadude}** got it :slightly_smiling_face:  
**\<i2p-relay> {-anonimal}** Anything else on 2. or dare we dive into API chat?  
**\<sdgsdug9sd>** whats the expected date for release of i2p?  
**\<i2p-relay> {-anonimal}** sdgsdug9sd: checkout our roadmap  
**\<sdgsdug9sd>** link?  
**\<i2p-relay> {-anonimal}** github.com/monero-project/kovri/wiki \<--something like that, whatever wiki url is  
**\<i2p-relay> {-anonimal}** We set a date of nov. 1st for first pre-alpha release. I'd rather push the date to the 0.1.1 release and move 0.1.1 to next year.  
**\<_Slack> {dadude}** https://github.com/monero-project/kovri/wiki/Roadmap  
**\<ArticMine>** https://github.com/monero-project/kovri/wiki/Roadmap  
**\<i2p-relay> {-anonimal}** (like I said, barely any codebase work in 2 weeks)  
**\<i2p-relay> {-anonimal}** Ok, let's move to 3. and we can add other items/open questions to 6.  
**\<i2p-relay> {-anonimal}** 3. libclient API discussion (#351)  
**\<i2p-relay> {-anonimal}** moneromooo: did you get a chance to research my question(s)?  
**\* moneromooo** suddenly appears very busy with somehting else  
**\<moneromooo>** ... no. Sorry...  
**\<moneromooo>** Many bugs...  
**\<sdgsdug9sd>** lol is this real? i hardly believe those target dates  
**\<imans>** seems codebase is very weak at this time. Needs of lot of testing I think  
**\<i2p-relay> {-anonimal}** Guys, we're on API discussion now, we'll chat more later in the meeting.  
**\<imans>** okay  
**\<i2p-relay> {-anonimal}** moneromooo: I'll try to rephrase then  
**\<moneromooo>** There is talk of switching the P2P API to zmtp too (I know nothing about it).  
**\<moneromooo>** Should still be mostly streaming thoug.h  
**\<i2p-relay> {-anonimal}** moneromooo: I'm betting most of my questions can be answered with more research on my end  
**\<moneromooo>** OK, I think maybe ask questions here, and I will try to answer with what I can.  
**\<i2p-relay> {-anonimal}** moneromooo: where can I get a good tl;dr of how monero handles timeouts?  
**\<moneromooo>** From what I can tell, it uses boost's asio system for this.  
**\<moneromooo>** Then you get a callback with a "cancelled" state IIRC.  
**\<i2p-relay> {-anonimal}** by 'handle' I mean internally (if something needs to get to blockchain but doesn't quickly enough)  
**\<moneromooo>** (from boost)  
**\<i2p-relay> {-anonimal}** That's too obvious moneromooo :) I mean purely internally  
**\<moneromooo>** to blockchain ? I'm talking avbout the P2P comms here.  
**\<moneromooo>** Hmm, well, I don't know more about timeouts, sorry.  
**\<i2p-relay> {-anonimal}** I'll try to rephrase again, if a node's internet connection is unreliabe, is behaviour undefined?  
**\<imans>** it will not get a proper sync simple  
**\<moneromooo>** Hopefully not. Connections to a peer are dropped if "weird" stuff is received, but to what extent this is pervasive, I'm not sure.  
**\<moneromooo>** There's a query/reply system, with a handful of possible messages IIRC.  
**\* pero** will brb 5min - knows he's next up on agenda  
**\<moneromooo>** This seems rather high level though.  
**\<i2p-relay> {-anonimal}** \* is thinking ahead, wants to know how a node will deal with dropped tunnels on a noticeable scale  
**\<i2p-relay> {-EinMByte}** anonimal: backup tunnels like java i2p could work  
**\<moneromooo>** Well, it should be resistant to that. If it's not, we'll have to make it.  
**\<moneromooo>** I2P can keep a tunnel for a few minutes reliably enough, right ?  
**\<i2p-relay> {-anonimal}** EinMByte: good point.  
**\<i2p-relay> {-EinMByte}** But AFAIK, we still aren't sure that monero actually needs connections?  
**\<i2p-relay> {-anonimal}** moneromooo: technically, any tunnel and blow at any moment IIRC  
**\<i2p-relay> {-anonimal}** s/and/can/  
**\<moneromooo>** At any moment is fine, but monero would need to be at least one of high enough duration to reveive a chunk of blokcs when syncing.  
**\<i2p-relay> {-anonimal}** If Joe shuts off his router unexpectedly, we have to wait to build a new tunnel from the pool (IIRC)  
**\<i2p-relay> {-anonimal}** How big are those chunks usually?  
**\<moneromooo>** Again, this is fine. As long as we can get a minute of comms at one point.  
**\<moneromooo>** Currently, 200 times the size of a block, which is... hmm... from 250 bytes to 60 kB.  
**\<moneromooo>** That 200 can be changed when running with kovri if needed.  
**\<i2p-relay> {-anonimal}** moneromooo: ok, scenario question: what if we *can* get a reliable connection but syncing has to wait for it but will be notified "try again in X minutes". Will that break monero?  
**\<i2p-relay> {-EinMByte}** with streaming it doesn't really matter  
**\<i2p-relay> {-EinMByte}** datagrams are limited in size, though  
**\<ArticMine>** but does this set a limit on the blocksize in Monero?  
**\<moneromooo>** I think that, for now, that connection will be dropped, and another attempted. But that doesn't seem too hard to change.  
**\<moneromooo>** ArticMine: no, the 200 is the number of blocks. Though if one block is 100 MB in the future... I guess it needs to be downloaded without interruption.  
**\<i2p-relay> {-EinMByte}** dropping and re-attempting sounds like a good strategy  
**\<moneromooo>** The re-attempt would be to another random peer.  
**\<i2p-relay> {-anonimal}** \* eek  
**\<moneromooo>** (currently anyway)  
**\<i2p-relay> {-anonimal}** Ok, well what I'm poking at I think is for more in the future (and based on passing thoughts this week).  
**\<i2p-relay> {-anonimal}** \* was not prepared for API chat this week because of point 2.  
**\<i2p-relay> {-anonimal}** EinMByte: any other questions/thoughts?  
**\<i2p-relay> {-anonimal}** ^ moneromooo  
**\<moneromooo>** Not from me.  
**\<i2p-relay> {-EinMByte}** Just that I don't think disconnections would be that much of an issue  
**\<i2p-relay> {-anonimal}** I have been envisioning more of the API on our end though, but purely in my head.  
**\<i2p-relay> {-EinMByte}** but let's move on  
**\<ArticMine>** I have to leave now.  
**\<i2p-relay> {-anonimal}** * one more thing  
**\<i2p-relay> {-anonimal}** Actually, nevermind because I don't want to put dadude on the spot and it's probably unrelated  
**\<_Slack> {dadude>}** well if I left the node on and the connection is bad, I wouldn't want it to stop, as bad as mightbe. I'll probably be thinking that its syncing. So what about an timed retry till the network gets back on? If it is very bad, then you can set up an option like --retry x-times  
**\<i2p-relay> {-anonimal}** dadude if you have API questions as related to torrenting, now's the chance  
**\<_Slack> {dadude>}** Oh, I  
**\<i2p-relay> {-anonimal}** (no rush, there are plenty more meetings to be had)  
**\<_Slack> {dadude>}** I'll read up on how vuze does it and get back to you guys if I have any questions  
**\<i2p-relay> {-anonimal}** dadude: good point, I'm sure the API will cover that  
**\<i2p-relay> {-anonimal}** dadude: we can explain how vuze does it after the meeting if you'd like  
**\<moneromooo>** A torrent based syncing process was suggested before. It'd be quite a departure from what we have now, but would be a good thing I guess.  
**\<i2p-relay> {-anonimal}** Ok, nothing else on 3.?  
**\<_Slack> {dadude>}** thanks. unrelated: How does relay handle edits to a post here on slack  
**\<i2p-relay> {-anonimal}** dadude: let's save that until later in the meeting  
**\<moneromooo>** (for initial sync anyway)  
**\<_Slack> {dadude>}** Oh I wasn't talking about to sync the blockchain, I was talking about torrenting inside the i2p netowkr  
**\<i2p-relay> {-anonimal}** moneromooo: is there a post or link re: that proposal?  
**\<moneromooo>** It was mentioned in one of the MRL papers IIRC. No details, but I can find you the one.  
**\<i2p-relay> {-anonimal}** Thank you moneromooo.  
**\<i2p-relay> {-anonimal}** * would navigate but you know MRL better than I  
**\<i2p-relay> {-anonimal}** Ok, moving on  
**\<i2p-relay> {-anonimal}** 4. logo  
**\<i2p-relay> {-anonimal}** pero: all you if you're here!  
**\<pero>** yes hi  
**\<pero>** ok so we're down to 2 fonts  
**\<i2p-relay> {-anonimal}** Let's decide now then  
**\<pero>** each came with 6-8 weights and i've cut that down to 2 for exo2 and 3 for lato  
**\<pero>** https://a.pomf.cat/gyzaxi.png  
**\<pero>** 1b and 1c are the same weight with different kerning  
**\<pero>** the 'garlic-integrated' variants are interesting but will require rework of the garlic  
**\<pero>** for record keeping purposes this is v8  
**\<i2p-relay> {-anonimal}** Ok, we're throwing out the garlic as 'o' idea because: 1. doesn't look like garlic 2. doesn't look like an 'o' 3. not intended for that purpose  
**\<i2p-relay> {-anonimal}** Any objections?  
**\<moneromooo>** My subjective opinion is that the "garlic as dot in the i" is too small to not feel weird.  
**\<i2p-relay> {-anonimal}** \* agreeing with moneromooo, it looks like a flame  
**\<pero>** yes i agree - is viable but needs rework  
**\<imans>** instead put garlic for o kovri  
**\<moneromooo>** I thought the flame thing was intended :P  
**\<i2p-relay> {-anonimal}** imans: see my comment above  
**\<_Slack> {dadude}** just a small question. wait, so are we 1. pushing kovri as a 'project' on its own (apart from geti2p.net) or 2. just an alternative router to the java i2p one. Because if it is 2, shouldn't it way only 'garlic router'? and not add the project?  
**\<imans>** okay  
**\<i2p-relay> {-anonimal}** dadude: 1.  
**\<pero>** imans - the problem with that is that the garlic wasn't intended for such usage  
**\<pero>** and makes the text imbalanced  
**\<i2p-relay> {-anonimal}** Alright, everyone pick their favorite font now please (we need to decide on logo today, final decision this week - not waiting until next meeting)  
**\<imans>** fine. pero  
**\<pero>** e.g., the space between the upper portion of the K and the black part of the garlic is smaller than the whitespace on the right side  
**\<pero>** and the small lines at the bottom and top of garlic aren't optimal  
**\<imans>** I see it there    
**\<imans>** My choice is the 6th one  
**\<imans>** for font  
**\<moneromooo>** I'd pick one of the ones on the right, just because they're fatter, and so easier to read.  
**\<imans>** and bold  
**\<i2p-relay> {-EinMByte}** I'd go for lato  
**\<i2p-relay> {-EinMByte}** (b1?)  
**\<pero>** yea i'm in the lato camp as well  
**\<i2p-relay> {-anonimal}** pero: I like lato, X coord 1, Y coord b  
**\<imans>** seems everyone picks up the second  
**\<i2p-relay> {-anonimal}** Ok, 3 votes for b1, 1 vore for 'the 6th one' (I have no idea what that is)  
**\<_Slack> {dadude}** yep b1  
**\<pero>** i'm either b2 or b3  
**\<pero>** 6th one was b3  
**\<i2p-relay> {-anonimal}** Alright, 4 votes b1, 2 for b3, 1 for b2  
**\<moneromooo>** If I had to choose one, I'd say bottom right, but there's really not much difference and I might pick another one tomorrow :)  
**\<i2p-relay> {-anonimal}** b1 one is the winner, any objections?  
**\<i2p-relay> {-anonimal}** lol  
**\<pero>** well that's for b3 now ;p  
**\<pero>** 3  
**\<moneromooo>** Ignore me :)  
**\<i2p-relay> {-anonimal}** \* looks different depending on mood  
**\<i2p-relay> {-EinMByte}** 3/3, let's toss a coin  
**\<i2p-relay> {-anonimal}** pero: also, let's try steching that subtext all the way to the left  
**\<i2p-relay> {-anonimal}** to the end of the garlic  
**\<i2p-relay> {-anonimal}** Does that effect your decision?  
**\<pero>** yea that variant was included before - it was just a time saving consideration to not include it  
**\<i2p-relay> {-anonimal}** \* wonders how to coin toss over IRC  
**\<moneromooo>** There were some with that system on one of the previous images. It looked odd. Maybe instead scale the garlic up to go tho the bottonm of the subtext.  
**\<pero>** as a rule of thumb you want heavier type for the logo  
**\<pero>** moneromooo that looked even weirder :)  
**\<moneromooo>** So there's no hole, but it doesn't also feel like the subtext is running away from the main text.  
**\<i2p-relay> {-anonimal}** b2 b3 looks overpowering compared to that logo IMHO  
**\<moneromooo>** Hmm, ok.  
**\<i2p-relay> {-anonimal}** We have 7 minutes to decide, I'd like to save room for other topics.  
**\<i2p-relay> {-anonimal}** 6 minutes now  
**\<imans>** I stick with the last one on the right  
**\<pero>** i think you should be focusing on the largest variant  
**\<pero>** and the variant with only the garlic on the left  
**\<pero>** when deciding  
**\<endogenic>** lol you valuable guys/gals are spending too much time on it imo and may end up getting sucked down a depth first search rather than seeing the whole picture. this is just my humble opinion but it's better to find a designer to own it (and prevent design by committee)  
**\<pero>** don't worry about the others  
**\<endogenic>** but i might regret having opened my mouth :P  
**\<pero>** endogenic - this is how the 'design process' works  
**\<i2p-relay> {-anonimal}** pero: 5 minutes, why?  
**\<moneromooo>** They all look so similar anyway.  
**\<pero>** this is 'client feedback'  
**\<i2p-relay> {-anonimal}** I like the balance of b1  
**\<pero>** you don't just present a finished logo to a client and say 'here, take this'  
**\<i2p-relay> {-anonimal}** b2 b3 are too strong  
**\<imans>** okay  
**\<i2p-relay> {-EinMByte}** I though we were going to toin coss  
**\<endogenic>** http://www.logodesignlove.com/next-logo-paul-rand  
**\<i2p-relay> {-EinMByte}** \*thought  
**\<moneromooo>** I vote for toin coss.  
**\<i2p-relay> {-anonimal}** Who has the coin?  
**\<endogenic>** but i'm not disagreeing that market research is important  
**\<endogenic>** talking to users is basically #1 next to building  
**\<i2p-relay> {-anonimal}** And is that coin CSPRNG, lol  
**\<i2p-relay> {-EinMByte}** Let's do this right and use a bit commitment scheme  
**\<i2p-relay> {-anonimal}** 3 minutes  
**\<i2p-relay> {-EinMByte}** (unfortunately we don't have secure timestamping available for the commitment scheme)  
**\<pero>** yea ok pay someone 100k and after 6 months they'll narrow it down to 1 almost scientifically  
**\<i2p-relay> {-anonimal}** 2 minutes  
**\<moneromooo>** OK, so, if the number of letters in "anonimal" is even, b1, if it's odd then b3. OK ?  
**\<pero>** i'm in the not b1 camp  
**\<i2p-relay> {-anonimal}** \* bribes moneromooo behind closed doors  
**\<pero>** mostly because it looks close to just regular text  
**\<i2p-relay> {-anonimal}** I think b2 b3 are ugly, I don't want to see this everytime I look at the readme  
**\<i2p-relay> {-anonimal}** \* don't forget the devs  
**\<moneromooo>** A graphical README ?  
**\<i2p-relay> {-anonimal}** 1 minute to flip coin  
**\<pero>** just bigger and with tighter kerning  
**\<i2p-relay> {-anonimal}** \* will pull executive order if someone can't flip a coin  
**\<i2p-relay> {-iDunk}** we can pick anything as long as it's b1 :)  
**\<moneromooo>** SOLD!  
**\<i2p-relay> {-anonimal}** pero: will b2 look better when subtext is streched across to the left  
**\<i2p-relay> {-anonimal}** \* trusted pero so far, no reason to stop trusting  
**\<i2p-relay> {-iDunk}** btw, i'm also for b3  
**\<pero>** well i'd show you but i'm in wayland atm with no screenshot support  
**\<i2p-relay> {-anonimal}** I'd like EinMByte to be the tie-breaker if he's up for it  
**\<i2p-relay> {-EinMByte}** With iDunk's vote, let's say the choice is b3  
**\<pero>** but no it doesn't look any better than it does now  
**\<i2p-relay> {-anonimal}** b3 it is!  
**\<i2p-relay> {-anonimal}** Congrats to b3  
**\<i2p-relay> {-iDunk}** \* hides from anonimal  
**\<i2p-relay> {-anonimal}** \* says eww but oh well  
**\<i2p-relay> {-anonimal}** lol iDunk  
**\<moneromooo>** eww well  
**\<i2p-relay> {-anonimal}** \* looking forward to a kovri PR from iDunk some day  
**\<i2p-relay> {-iDunk}** :D  
**\<i2p-relay> {-anonimal}** Moving on,  
**\<imans>** congrats  
**\<i2p-relay> {-anonimal}** 5. Code + ticket discussion / Q & A  
**\<imans>** ask  
**\<i2p-relay> {-anonimal}** 8 minutes left, I want to actually move to 6.  
**\<i2p-relay> {-anonimal}** Any objections?  
**\<imans>** no  
**\<i2p-relay> {-EinMByte}** No objections  
**\<i2p-relay> {-anonimal}** 6. Any additional meeting items  
**\<i2p-relay> {-anonimal}** {-imans} seems codebase is very weak at this time. Needs of lot of testing I think  
**\<i2p-relay> {-anonimal}** imans: have you spent time with this codebase?  
**\<imans>** Just trying to install  
**\<imans>** My ubuntu is hanging. I have to try another time.  
**\<i2p-relay> {-EinMByte}** \* afk  
**\<i2p-relay> {-anonimal}** Ok, so you haven't then.  
**\<i2p-relay> {-anonimal}** {-sdgsdug9sd} lol is this real? i hardly believe those target dates  
**\<imans>** yes  
**\<i2p-relay> {-iDunk}** i installed it yesterday and it seemed to run just fine until a few hours ago  
**\<moneromooo>** That's for "kovri runs and does things", not "monero uses kovri", fwiw.  
**\<i2p-relay> {-anonimal}** sdgsdug9sd: then you probably wouldn't believe that what we forked from actually had a release and you should be thankful we've not repeated that same mistake  
**\<moneromooo>** What was the mistake ?  
**\<i2p-relay> {-anonimal}** sdgsdug9sd: also, see pre-alpha https://en.wikipedia.org/wiki/Pre-alpha  
**\<i2p-relay> {-anonimal}** moneromooo: calling that router a year ago "releaseable"  
**\<moneromooo>** Ah...  
**\<i2p-relay> {-iDunk}** i got disconnected from irc, couldn't connect any more, tried to exit from kovri but had to kill it  
**\<i2p-relay> {-iDunk}** restarted and it runs fine again  
**\<i2p-relay> {-anonimal}** 2 minutes. Any questions/comments/new items?  
**\<i2p-relay> {-anonimal}** imans sdgsdug9sd: ^  
**\<imans>** I will ask more in next meeting. I need to brainstorm myself  
**\<moneromooo>** anonimal: https://lab.getmonero.org/pubs/MRL-0004.pdf -- the torrent suggestion was not about initial sync actually, but about sending new txes.  
**\<moneromooo>** (I had misremembered)  
**\<i2p-relay> {-anonimal}** I'm available for tech support after the meeting  
**\<i2p-relay> {-anonimal}** 2 weeks, same time?  
**\<i2p-relay> {-anonimal}** moneromooo: ah, ok, thanks I'll give it a read  
**\<i2p-relay> {-anonimal}** imans: if you need help just ask in #kovri or #kovri-dev after the meeting  
**\<i2p-relay> {-anonimal}** 7. Confirm next meeting date/time  
**\<i2p-relay> {-anonimal}** \* moving on  
**\<i2p-relay> {-anonimal}** No objections? 2 weeks same time then.  
**\<imans>** Okay anonimal. I'm in another stuff I will get in technical touch tomorrow  
**\<i2p-relay> {-iDunk}** yep  
**\<imans>** so, the date and time is?  
**\<i2p-relay> {-anonimal}** Thank you everybody. Thank you dEBRUYNE for logging these meetings :)  