---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-08-20
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** OK, let's get started with our meeting  
**\<sarang>** Agenda here: https://github.com/monero-project/meta/issues/383  
**\<sarang>** Logs posted there afterward  
**\<sarang>** GREETINGS  
**\<sarang>** hello  
**\<suraeNoether>** howdy  
**\<gingeropolous>** heya  
**\<sarang>** It's been two weeks since the last meeting... plenty to discuss!  
**\<sarang>** In the spirit of fairness and teamwork, I'll go first :D  
**\<sarang>** The DEF CON village, despite having a poor location, was well attended  
**\<sarang>** I did a talk, a workshop, a CTF, and a panel discussion  
**\<suraeNoether>** how did the attendance compare to last year?  
**\<sarang>** I would estimate higher  
**\<suraeNoether>** nice!  
**\<sarang>** I've written up a brief spacetime analysis of Omniring in its current form: https://github.com/SarangNoether/skunkworks/blob/sublinear/omniring.md  
**\<sarang>** It does not presently support batching, but the authors have a couple of ideas on how to do so safely that are forthcoming  
**\<sarang>** I'll be discussing with them this week  
**\<sarang>** On a related note, the RCT3 construction has a flaw that would be exploitable in practice  
**\<sarang>** The authors of that paper, I'm told, also have a fix forthcoming that may relate to the Omniring batching enhancement  
**\<sarang>** Made a quick PR to fix a bias in Schnorr signatures: https://github.com/monero-project/monero/pull/5807  
**\<endogenic>** o/  
**\<sarang>** Cleaned up an MLSAG improvement PR: https://github.com/monero-project/monero/pull/5707  
**\<sarang>** Made some updates to Zero to Monero (see topic branches): https://github.com/SarangNoether/zero-to-monero/  
**\<sarang>** And I'm working on getting CLSAG and thring sigs submitted to conference proceedings (a tiresome and lengthy process)  
**\<sarang>** That's my two cents  
**\<endogenic>** damn, son  
**\<suraeNoether>** yeah, that was a damn mic drop brother  
**\<sarang>** Anything to share with the class, suraeNoether ?  
**\<suraeNoether>** as for me, I've been on vacation and just got back. I'm still going to be only half-on today because I have some personal business I have to attend. it was an eventful vacation. for one thing, I was able to prove a few theorems for my graph matching paper that are necessary for publication. based on a conversation I had with sgp\_ right before I left, I spent a lot of time thinking about experimental  
**\<suraeNoether>** design, and I'm starting to discuss this with sarang.  
**\<suraeNoether>** in addition to that, I was contacted by Astral, the team working on bullet-proof monero-mining drones, re: an unfortunately urgent funding matter.  
**\<luigi1111w>** sarang what happened to reusing existing functions or adding it as a function instead of inline?  
**\<luigi1111w>** not that it matters that much I guess  
**\<sarang>** There were some silly issues with includes and having access to the right underlying functions  
**\<sarang>** It seemed simpler to do it as is  
**\<suraeNoether>** i would urge folks in the audience to watch OhGodAGirl\_\_'s talk from teh Konferenco here (https://www.youtube.com/watch?v=jDSKIr5EPiU ) or Leah's interview wiht monerotalk https://www.youtube.com/watch?v=jl1w6VDEWq4 to refresh themselves on the project  
**\<endogenic>** meaning they need funding?  
**\<suraeNoether>** if anyone is interested in assisting Astral in composing a CCS, I've been pinging some ideas back and forth with Leah  
**\<suraeNoether>** yes, and some of the funding needs are rather urgent; I spoke with OhGodAGirl\_\_ and OpenSourceress about this in person at the Konferenco and we have been kicking some ideas around  
**\<suraeNoether>** i anticipate a vigorous discussion on the matter, because the community funding sources, in my mind, should be a source of funding of last resort  
**\<suraeNoether>** the folks who contribute to the monero community are people who care about privacy and they want to see the project advance in a healthy direction, and without them, all of this falls apart  
**\<sarang>** Probably a good discussion for -community?  
**\<sarang>** Unless there's a technical/research component to it?  
**\<suraeNoether>** well, it's a nascent funding request for a hardware project with a timeliness component that recently presented at our conference, but going into further detail during the meeting is certainly unnecessary  
**\<sarang>** got it  
**\<suraeNoether>** and full disclosure: i am not yet in any way financially linked with Astral, although that may eventually change  
**\<suraeNoether>** i.e. this isn't for me  
**\<sarang>** Anyone else wish to share research work of interest?  
**\<sarang>** I'm excited to take a look at the current state of the matching simulations suraeNoether   
**\<suraeNoether>** that's all I have for the round table this week, but I'll also be playing catch-up on the lelantus vs. omni vs. rct3 cage match that's been going on these past few weeks  
**\<gingeropolous>** may eventually change? hamster.gif  
**\<sarang>** OK, so after the brief ROUNDTABLE is GENERAL QUESTIONS... anyone?  
**\<sarang>** I have a general question  
**\<suraeNoether>** i have one, too  
**\<sarang>** The proceedings/journals under consideration for CLSAG (thanks also to some outside advice) are Financial Cryptography, PETS, ACM TOPS, and ANCS  
**\<sarang>** Any other suggestions that I may have missed, that could be in scope?  
**\<sarang>** It's tough in the CLSAG case since it's an improvement over earlier work, but not earth-shattering  
**\<sarang>** and that always seems to be a tricky place to be in the publishing world  
**\<sarang>** I plan to highlight the improvements and generalize it a bit for submission  
**\<suraeNoether>** are you strictly considering conference proceedings or are you open to journal-only suggestions?  
**\<sarang>** Journals are fine too (ACM TOPS, e.g.)  
**\<sarang>** But since submissions are typically one-at-a-time, there's no real rush to add to the list  
**\<sarang>** But obviously prioritizing is useful to avoid submitting for delayed rejections  
**\<suraeNoether>** fair enough. I thought ACM TOPS was a conference, silly me. :P  
**\<sarang>** Anyway, that's my question  
**\<sarang>** suraeNoether: yours?  
**\<suraeNoether>** some of the biggest improvements that have come out of MRL this year have involved efficiency improvements, ranging from bulletproofs optimizations to compressed signature schemes. Only some of these improvements will carry on to the "next version" of monero, especially if we end up having to migrate our transaction model to something like one of the Big Three...  
**\<dEBRUYNE>** suraeNoether: Don't they have other options than to tend to the CSS?  
**\<dEBRUYNE>** I genuinely think this is not appropriate for it  
**\<suraeNoether>** so my question is: what sort of improvements would you like to see from the Monero Research Lab in the next year, keeping in mind that we will want to migrate to a different scheme sooner or later?  
**\<suraeNoether>** dEBRUYNE: i'll start a conversation about this over in -community  
**\<rehrar>** I would definitely like some research into ring sig alternatives.  
**\<sarang>** That's very much in progress rehrar   
**\<suraeNoether>** do you mean ring confidential transactions?  
**\<rehrar>** from the ground plebs, we're never quite sure how much progress and when and why and stuff  
**\<suraeNoether>** because lelantus, omni, and rct3 are each replacements for ring sigs  
**\<suraeNoether>** in a certain sense  
**\<suraeNoether>** but they are still ring confidential transaction schemes  
**\<sarang>** Yeah, my analyses try to give a reasonable spacetime estimate for those protocols  
**\<rehrar>** I wonder if a bimonthly MRL bulletin would be helpful to the masses  
**\<rehrar>** or a monthly one  
**\<rehrar>** I can assist in getting it out  
**\<dEBRUYNE>** suraeNoether: OK  
**\<sarang>** Any other general questions?  
**\<suraeNoether>** sarang, do you have an answer to my question?  
**\<suraeNoether>** rehrar answered and this was something i was happy to see  
**\<suraeNoether>** usually it's the noethers talking at everyone else during these meetings :D  
**\<suraeNoether>** but i am curious  
**\<sarang>** I think determining the real viability of newer transaction protocols is a priority for my research  
**\<suraeNoether>** okay. my personal white whale has always been to replace linearly-sized RCT with something sublinear but sufficiently fast to not drag down the network, so i'm happy to have such an embarassment of schemes to work through  
**\<suraeNoether>** anywya, no other questions from me  
**\<sarang>** Yeah, once the RCT3 fix and Omniring batch issues are solved, there will be a much clearer view of what's reasonable IMO  
**\<sarang>** Anyway, on to ACTION ITEMS  
**\<sarang>** I'll be discussing protocol details with some other researchers this week, to gain some better information on these changes  
**\<sarang>** Getting the preprints sorted out for edits and submission  
**\<dEBRUYNE>** If any of you feels like leaving a brief comment here btw -> https://www.reddit.com/r/Monero/comments/ct29nx/spectre\_protocol\_update/  
**\<sarang>** and catching up on a backlog of other preprints that have come out  
**\<sarang>** suraeNoether: ?  
**\<suraeNoether>** working with you on matching code and experimental design, and backlog reading on the work Sarang has done over the past 2 months comparing these three sublinear protocols  
**\<sarang>** neat  
**\<sarang>** OK, any final questions or comments before adjourning?  
**\<sarang>** going once  
**\<sarang>** going twice  
**\<sarang>** Adjourned! Logs will be posted shortly  
