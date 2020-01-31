---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-01-14
summary: Upgrade items, Research, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** But, let's begin  
**\<sarang>** The agenda, as linked above: http://paste.debian.net/hidden/4ae0abc9/  
**\<sarang>** 1. GREETINGS  
**\<sarang>** hello all  
**\<ArticMine>** hi  
**\<oneiric\_>** o/  
**\<sarang>** We have much to talk about today  
**\<sarang>** I'm going to move the Matrix item to 1.5. META  
**\<sgp\_>** hello!  
**\<suraeNoether>** howdy  
**\<sarang>** charuto asked if we could do a deeper Matrix integration of this room  
**\<suraeNoether>** what does it entail?  
**\<suraeNoether>** i'm neutral on bridges generally  
**\<sarang>** Right now AFAIK, the room is a portal in matrix, and the desire is for a plumbed room  
**\<sarang>** https://github.com/matrix-org/matrix-appservice-irc/wiki/Permissioning-in-Portal-vs-Plumbed-rooms  
**\<sarang>** This would have the side effect of allowing Matrix-side ops to exercise control over Matrix users in the room, but not on the freenode side  
**\<suraeNoether>** i'm not really grokking the benefit  
**\<sarang>** And be consistent with how other rooms (e.g. monero-community) are set up already on Matrix  
**\<sarang>** charuto: are you present?  
**\<charuto>** yeah, it would mostly not change anything IRC side, just here on this side, would allow for a more visible monero research lab matrix room and some matrix moderation options  
**\<sarang>** charuto is already matrix-side op for other monero rooms  
**\<sarang>** Provided we have another admin as well, I am not opposed to this  
**\<sarang>** However, I'll request loose consensus from the room now before enabling  
**\<serhack>** Hi everyone  
**\<charuto>** and yes, sarang is correct, it's mostly for matrix-side consistency, so matrix users can simply join #monero-research-lab:matrix.org  
**\<suraeNoether>** okay, so i'm not really following why this is fine  
**\<suraeNoether>** charuto, no offense intended, please, but  
**\<suraeNoether>** if someone comes to the matrix room and thinks you are in charge... \*shrug\*  
**\<suraeNoether>** i don't see a benefit to this  
**\<sarang>** I originally had similar concerns, but that's possible right now with the portal room  
**\<suraeNoether>** i see this as an opportunity for someone to act as a middle man to interact with me, and that makes me nervous  
**\<suraeNoether>** sarang: we can't stop someone from starting a portal room but we don't have to give them permission to plumb  
**\<suraeNoether>** i literally mean no offense, charuto, i am sure you are running the rooms responsibly but  
**\<suraeNoether>** i'm open to changing my view  
**\<suraeNoether>** if someone can explain the benefits other than consistency  
**\<charuto>** i understand your concern, suraeNoether , but the alternative would be people not even getting to the room  
**\<suraeNoether>** i thought there was already a room  
**\<suraeNoether>** that is a portal  
**\<suraeNoether>** so  
**\<sarang>** If this makes it easier to use on the matrix side, and introduces no new problems that don't potentially already exist, I am fine with it  
**\<suraeNoether>** how does that work then  
**\<charuto>** the portal room will remain, im trying to add a plumbed room  
**\<charuto>** cant remove portal rooms  
**\<suraeNoether>** then how is the alternative people not getting in?  
**\<suraeNoether>** maybe i'm confused about how matrix works  
**\<charuto>** some people dont know how portal rooms work and only join publicly listed matrix native rooms  
**\<charuto>** on other monero channels, portal rooms always have less matrix users than plumbed rooms  
**\<charuto>** it's the difference of joining #monero:matrix.org or joining #freenode\_#matrix.org  
**\<charuto>** typo, #freenode\_#monero:matrix.org  
**\<suraeNoether>** uhm  
**\<sarang>** Given that suraeNoether is an op in this room, we won't proceed at this time if he objects  
**\<suraeNoether>** so i guess my question is now reverting to a rude one: are people who can't figure out how to go to freenode.net and typing /join #monero-research-lab going to be helpful contributors in this room  
**\<sarang>** This issue will be tabled until after the meeting, so we can move on and respect attendees' time  
**\<suraeNoether>** k  
**\<sarang>** On to 2. UPGRADE ITEMS  
**\<sarang>** The block size algorithm has been discussed at length here and in -dev  
**\<hyc>** (I think that's a fair question surae)  
**\<sarang>** Loose consensus seems to be that the recommended approach, a dual median cap, is a reasonable stopgap that slows bloat, but it not a long-term solution  
**\<sarang>** ArticMine: given your deep involvement in this, can you comment?  
**\<sarang>** the proposal on the table is to cap the next block at min[ 1.4\*median(100), 50\*median(100000) ]  
**\<sarang>** (others are welcome to comment as well)  
**\<suraeNoether>** i'm happy to endorse this  
**\<suraeNoether>** Isthmus may have thoughts on simulations, but he's always super busy  
**\<sarang>** A lot of debate centered around this not being a long-term solution, and I agree  
**\<ArticMine>** Yes I can comment on this.  
**\<sarang>** What this does is stretch the time required by a lot  
**\<sarang>** ty ArticMine  
**\<ArticMine>** Fist both the original proposal that I made and smooth's latest proposal fail because they are using the entire block to scale the long term median  
**\<sarang>** smooth's proposal being... ?  
**\<ArticMine>** So either one has an exponential that scales based upon 50x my original proposal or the burst is lost  
**\<ArticMine>** smooth's proposal is above in this thread I will try to find it  
**\<ArticMine> \<smooth>** A=median of last 100 blocks  
**\<ArticMine> \<smooth>** B=median of last 100000 blocks (arbitary number, might be changed)  
**\<ArticMine> \<smooth>** maximum block size is min(max(A,300KB)\*1.4,max(B,15MB)\*1.2) (again both numbers could be changed)  
**\<ArticMine> \<smooth>** existing method is max(A,300KB)\*2  
**\<sarang>** Since code freeze is presumably drawing near, what is your endorsement ArticMine for what to include in the next fork (Boron)?  
**\<ArticMine>** Right now I am working on a solution that addresses both of the above issues  
**\<ArticMine>** Basically I does not use the whole block to scale the long term median  
**\<ArticMine>** but only that part of the block that would have been legal using the long term median  
**\<suraeNoether>** ArticMine: is there a serious flaw in using min[ 1.4\*median(100), 50\*median(100000) ] ?  
**\<sarang>** A benefit of the current approach is that it seems not too large of a fundamental change to include as a stopgap until more complex approaches can be studied more deeply  
**\<ArticMine>** the 50x factor is applied at the end  
**\<suraeNoether>** like... if we spend another week trying to come up with a better method, is that a good usage of time for the possible benefit of using a different method?  
**\<ArticMine>** Also we leave the current block scaling formual alone  
**\<ArticMine>** and instead restrict that effective median block weight to put a rolling cap on it using the long term median  
**\<suraeNoether>** ArticMine: maybe i'm not following you... what do you mean by using the entire block to scale the long term median?  
**\<suraeNoether>** and what do you mean "only that part of the block that would have been legal"?  
**\<ArticMine>** Let us say that the long term median only allows 400000 bytes for a block  
**\<ArticMine>** But the short term median allows for 500000 bytes  
**\<ArticMine>** The lock is legal under both proposals because of the 50x factor on the long term median  
**\<ArticMine>** Block  
**\<ArticMine>** Under both current proposals the whole 500000 bytes is used to scale the long term median  
**\<ArticMine>** What I am saying is that we only use 400000 bytes in that example  
**\<ArticMine>** This avoids the 50 factor in scaling the long term median that smooth was concerned about  
**\<suraeNoether>** okay, i'm still a little confused, but let me ask a follow-uyp  
**\<suraeNoether>** well its the same question i asked earlier: what is the problem with using min[ 1.4\*median(100), 50\*median(100000) ] ? I'm still not following.. :(  
**\<sarang>** You still get exponential growth over time  
**\<sarang>** it's just slowed way down  
**\<suraeNoether>** okay, i understand that part  
**\<ArticMine>** The problem is that we are incorporating the 50 facto in scaling the long term median  
**\<suraeNoether>** ArticMine: can you get us a write-up of your suggestions some time in the next few days?  
**\<suraeNoether>** something formal to look at? at least a formula or something  
**\<sarang>** We will need to make a decision ASAP on what to do  
**\<ArticMine>** That is the essence of smooth'ss concern  
**\<ArticMine>** Yes  
**\<sarang>** Right now, the only slow-growth proposal that at least has a formula and a simulated graph is the one suraeNoether mentioned above  
**\<sarang>** so I will consider that the current "best option" for now until/unless we get the same detail before freeze  
**\<sarang>** moneromooo: when should freeze be?  
**\<ArticMine>** When is freeze  
**\<sarang>** We'll move on and assume freeze is "as soon as possible, and perhaps sooner"  
**\<suraeNoether>** my concern is this: the only way to prevent a literal exponential blowup is to put in some sort of hard cap  
**\<ArticMine>** I has to be a rolling hard cap.  
**\<sarang>** In the interest of time, on to payment IDs  
**\<ArticMine>** Never a fixed hard cap  
**\<moneromooo>** Unknown. Pony wanted to have a first build end of january.  
**\<sarang>** sgp\_: you looked into usage of payment IDs by popular services  
**\<sarang>** ok ty moneromooo  
**\<sarang>** I advocate no changes to block cap that haven't been simulated  
**\<sgp\_>** yes sarang, and it's about a 50-50 split between unencrypted and encrypted  
**\<moneromooo>** If ArticMine need one more week to finish proving his idea, then I'm totally fine waiting for this.  
**\<ArticMine>** That will work very well for me  
**\<sarang>** Awesome, thanks ArticMine  
**\<sarang>** sgp\_ and others had proposed candidate timelines  
**\<sarang>** and received some feedback from wallets  
**\<sarang>** Can you explain your findings sgp\_ ?  
**\<sgp\_>** Sure. Here is where we are at right now:  
**\<sgp\_>** https://usercontent.irccloud-cdn.com/file/k06P021t/image.png  
**\<sgp\_>** Though after speaking with Justin from X Wallet, they seem interested in meeting the April timeline to remove the payment ID field when sending  
**\<sarang>** endogenic (who runs mymonero) expressed general concern about the rationale for removing encrypted IDs, particularly citing UX  
**\<sgp\_>** Cake Wallet says they will remove support once exchanges no longer use it  
**\<sarang>** Based on these timelines, there is no consensus change until fall 2019 (Carbon fork)  
**\<suraeNoether>** endogenic: can you elaborate on your concerns?  
**\<sarang>** endogenic said he'd be unlikely to be available for this meeting  
**\<selsta>** sgp\_: No soft depreciation in the GUI?  
**\<dEBRUYNE>** In my opinion, the most important goal should be to remove the long unencrypted payment IDs  
**\<sgp\_>** Let me explain the timeline a little bit more  
**\<dEBRUYNE>** They are detrimental to UX. Also, I am personally kind of ambivalent on integrated addresses versus subaddresses  
**\<sarang>** Those with -lounge history should look at those logs from earlier today to see his full remarks  
**\<sgp\_>** As sarang stated, no consensus changes until Oct 2019 (Carbon), when all payment IDs (encrypted and unencrypted) will be disallowed  
**\<dEBRUYNE>** Subaddresses are obviously better, but I am not sure how feasible it would be to get all exchanges and services to implement them  
**\<sgp\_>** In April 2019, the official GUI will no longer support sending transactions with unencrypted payment IDs, and the official CLI will force users to use annoying flags to send  
**\<suraeNoether>** hmmm, endogenic makes some interesting points about the memory requirements for subaddresses at exchanges  
**\<suraeNoether>** namely: a big exchange will have to have huge hash tables  
**\<selsta>** sgp\_: The GUI PR I did is similar to the CLI, requires enabling in settings. Why did you mark it as no support?  
**\<endogenic>** mooo points out it wont be crazy.. 8mb for a million entries?  
**\<endogenic>** (i'm half here, half not. busybusy)  
**\<sgp\_>** selsta: I thought the plan was to remove entirely. I can make it look like the CLI if that's what we want  
**\<moneromooo>** I looked, it's actually 32 bytes + 8 bytes, so 40 bytes payload. Plus the tree overhead.  
**\<dEBRUYNE>** Removing them entirely in the next version is going to lead to loads of user issues  
**\<sarang>** dEBRUYNE: them = what  
**\<dEBRUYNE>** The option to use long payment IDs  
**\<dEBRUYNE>** To add them to a transaction that is  
**\<selsta>** sgp\_: https://github.com/monero-project/monero-gui/pull/1866 Disabled by default, can be reenabled in the settings.  
**\<sgp\_>** Is this preferred? https://usercontent.irccloud-cdn.com/file/4g4NYw3q/image.png  
**\<selsta>** IMO yes.  
**\<sarang>** It at least provides consistency for our default products  
**\<sarang>** If we let encrypted pIDs stick around, there remain distinguishability problems between those txns and those w/ subaddresses and no pID  
**\<sarang>** these are mitigated somewhat by the use of a wallet-default encrypted value  
**\<moneromooo>** Those will get a 8 byte payment id (if only two outs).  
**\<sarang>** subaddress txns?  
**\<moneromooo>** Yes.  
**\<sarang>** with a default enc value  
**\<sarang>** excellent; I thought that wasn't the case  
**\<sarang>** Meaning the two choices there are: (1) ban all pIDs at Carbon fork; or (2) allow encrypted with a wallet default for \_only\_ 2-out txns at Carbon fork  
**\<sarang>** Are there other options that I'm missing here?  
**\<moneromooo>** "Carbon" is confusing.  
**\<sgp\_>** Carbon is Oct 2019  
**\<sarang>** fall fork; the element is carbon  
**\<moneromooo>** Wait. Carbon has 12 protons doesn't it ? Already there ?  
**\<sgp\_>** If exchanges and pools batch Monero transactions now with payment IDs, then they will need to change their behavior nevertheless  
**\<sgp\_>** actually wait, they can't do that. disregard  
**\<sarang>** If we are specifying a wallet default encrypted ID for subaddress transactions as well, I am less concerned about what happens if encrypted is permitted  
**\<moneromooo>** Ah, 14 protons \*and\* neutrons. Shame on me.  
**\<suraeNoether>** since we cant' enforce payids to be encrypted/can't verify that the payid has been encrypted, this new chart says to me "we aren't doing antyhing about this until october":  
**\<sarang>** What we're doing is encouraging exchanges to move off unencrypted  
**\<sarang>** and requiring it in October  
**\<suraeNoether>** \*nod\*  
**\<sgp\_>** I would much rather move totally to subaddresses to streamline this process. mandatory encrypted payment IDs seems really clunky to me  
**\<sarang>** Deciding on the fate of encrypted is important, so they know what to code  
**\<sarang>** it's not mandatory  
**\<suraeNoether>** no sarang, it looks like in october we are even deprecating the encrypted payids  
**\<sarang>** StupidWallet2.0 can always put 0  
**\<sgp\_>** even default seems clunky to me  
**\<sarang>** suraeNoether: according to sgp\_'s proposal yes, but we're discussing the consequences of what happens if encrypted is allowed to live  
**\<sgp\_>** no one should use payment IDs when sending funds to subaddresses  
**\<suraeNoether>** ah  
**\<sarang>** No, but they're important for distinguishability  
**\<moneromooo>** You can tell subaddress vs non subaddresses btw: additional tx pubkeys.  
**\<sgp\_>** For Carbon, I'd much rather remove all payment IDs to solve the distinguishability issue  
**\<moneromooo>** It's all a bit shitty isn't it.  
**\<sgp\_>** \*mitigate to the same extent  
**\<suraeNoether>** i agree with sgp. this makes me ask why we are even specifying the difference between encrypted vs. unencrypted, if the plan is to deprecate both by the october upgrade, and nothing about them is changing before october, and we can't enforce any shift away from unenc anyway  
**\<sarang>** Yes moneromooo but it doesn't give away info in the case of, say, exchange true inputs  
**\<suraeNoether>** moneromooo: lol  
**\<suraeNoether>** moneromooo: i knew a guy with a tattoo that said "life is a big shit sandwich and every day is another bite"  
**\<suraeNoether>** seems like a similar sentiment  
**\<sarang>** suraeNoether: ignoring the chart, the question at hand is what to do about encrypted: keep around, or get rid of it in fall 2019  
**\<sarang>** sgp\_ recommends nixing them in fall  
**\<sgp\_>** yes  
**\<sarang>** endogenic and dEBRUYNE suggest keeping them around  
**\<sarang>** If we keep encrypted around, the wallet needs to always include dummy values  
**\<dEBRUYNE>** Suggest might be a bit excessive  
**\<sarang>** ok  
**\<suraeNoether>** sarang: if we keep encrypted around we may as well not make any changes  
**\<dEBRUYNE>** I am just skeptical of the feasibility of forcing all exchanges to upgrade to subaddresses  
**\<suraeNoether>** because there's no way to enforce that they are encrypted  
**\<moneromooo>** I'll probably just start warning about them when used, like I did for 256 bit ones earlier.  
**\<suraeNoether>** dEBRUYNE: it's more feasible than asking everyone nicely to only encrypt their payids  
**\<sgp\_>** I think that given the timeline, we should be abitious and encourage them to update  
**\<sarang>** suraeNoether: no, but we are nixing long pIDs in fall  
**\<dEBRUYNE>** I suppose it could work if some workgroup started contacting exchanges soon  
**\<sgp\_>** This is ~9 months away  
**\<dEBRUYNE>** That provides them almost 10 months to implement stuff  
**\<sarang>** so the wallets will always encrypt whatever value the exchange tells them  
**\<sarang>** It is true that we cannot enforce legitimate encryption over random values etc  
**\<sarang>** So for the upcoming spring (Boron) upgrade,  CLI/GUI \_will\_ permit sending with long pIDs with a flag and terrifying warnings of death  
**\<sarang>** And we will have public notice that long pIDs will be consensus-denied in fall 2019  
**\<sarang>** We \_should\_ produce a decision about encrypted at the same time, so services know what to expect and start developing for  
**\<sarang>** But I am not seeing any firm agreement about the latter  
**\<sgp\_>** I argue that we should write a post including the aggressive timeline. Luckily, if there is an implementation disaster, we can always walk back with nearly no effort  
**\<suraeNoether>** fact of the matter is, either we want people using subaddresses, or not, and we certainly dont' want to keep adding mroe and more address types. usual address + unenc payid, usual address + enc payid, integrated address, subaddresses... especially since subaddresses are (1) efficient for users and (2) cover all the use cases, and since (3) we can't enforce the difference between the first three, but we can  
**\<suraeNoether>** enforce subaddresses, the way forward to me is totally clear  
**\<sarang>** moneromooo: why  
**\<sarang>** because of daemon parsing?  
**\<moneromooo>** Because it's always coming back.  
**\<moneromooo>** Yes.  
**\<sarang>** Is it more than parsing for size?  
**\<moneromooo>** I don't understand that question.  
**\<dEBRUYNE>** It has to parse tx\_extra afaik  
**\<sarang>** We're already over time, and we still need to bring up another upgrade change: commitment amount/mask changes  
**\<sarang>** Commitment masks will be generated deterministically and not included separately in the ECDH data, saving a bit of space  
**\<sarang>** Amounts will be shrunk to 8 bytes and XORed with shared-secret-hash data  
**\<sarang>** This is probably... less controversial than the other changes :/  
**\<sarang>** Any questions/comments on it?  
**\<sarang>** This was proposed by knaccc and talked about earlier here and in -dev  
**\<sarang>** moneromooo has a branch for it  
**\<suraeNoether>** yeah, sarang and i have considered it and we agree that this still provides the perfect hiding property of pedersen commitments, and commitments to amounts are as binding as they were before our proposed change  
**\<suraeNoether>** it's a small space optimization. knaccc had the idea, right? or who came up with iut?  
**\<sarang>** knaccc  
**\<sarang>** it's simple and clever  
**\<oneiric\_>** clever in a good way?  
**\<sarang>** yes  
**\<oneiric\_>** cool  
**\<dEBRUYNE>** Just in general, do you feel it's the worth the (potential) risk? Imo the size savings are not that significant  
**\<sarang>** Yes  
**\<sarang>** It doesn't leak additional information that sender/receiver didn't already hold  
**\<knaccc>** it's 56 bytes per output, but that's significant on a pruned transaction  
**\<sarang>** OK, in the interest of time, very briefly on to 3. RESEARCH  
**\<sarang>** There are now a few options on the table for refund addresses  
**\<sarang>** knaccc proposed one that involves no consensus changes  
**\<sarang>** another uses a non-interactive DLSAG approach but requires substantial overhaul to the plumbing with many subtleties, but could allow for payment channels etc.  
**\<sarang>** and another was posted (link in the agenda)  
**\<sarang>** just stuff to chew on, likely not before the upgrade IMO  
**\<sarang>** since it requires a lot of wallet fun  
**\<sarang>** moneromooo has been working on coinjoin-style fundamentals  
**\<sarang>** I'll be writing up some bulletproofs mpc for that  
**\<moneromooo>** thank you ^\_^  
**\<sarang>** I posted a few papers of interest in the agenda  
**\<suraeNoether>** ( still on the previous topic, but just a quick comment dEBRUYNE: the savings aren't that significant, but afaict, the security is concretely very similar (if not identical). It's a no-loss decision, in my mind )  
**\<sarang>** Since we're over time, any very quick updates from others? Then we'll review action items  
**\<suraeNoether>** sarang, are your comments on the matching paper complete? was our  conversation last week all your thoughts or am i waiting on more notes from you?  
**\<dEBRUYNE>** I am just warry of the change somehow being exploited later on  
**\<moneromooo>** One question about refund addresses: only one of those proposals helps with payment channels ?  
**\<sarang>** I am nearly complete, was derailed by an unrelated topic  
**\<dEBRUYNE>** Does it necessarily matter we're over time btw? I don't mind continuing :p  
**\<sarang>** for non-interactive use  
**\<suraeNoether>** i started a "linear techniques in applied cryptography" document to keep my notes on Ruffing's scheme, Schnorr signatures, Bulletproofs, and Bootle's polynomial commitments all in one neat and tidy place. i may tweak it over the next year in little ways with the long term goal of writing a book  
**\<sarang>** We don't have a concrete proposal for integrating knaccc's or Ilya's schemes into a payment channel system safely  
**\<suraeNoether>** moneromooo: DLSAG is good for payment channels... cryptonote++ or ilya's paper... i believe that is non-channel based refund addresses  
**\<sarang>** DLSAG ensures you can properly track spends  
**\<sarang>** hence the tomfuckery with key images and signature style  
**\<sarang>** So for the sake of sanity, here are the action items that are time-sensitive:  
**\<sarang>** (a) block size cap algorithm: we need a method that has been simulated in time for freeze  
**\<sarang>** (b) payment ID timeline: we need to know the fate of each address type to make a unified statement for services to use for planning  
**\<sarang>** (c) any objections to the ECDH data change are at the "speak now" phase  
**\<sarang>** Non-sensitive items:  
**\<sarang>** (d) we can talk after the meeting about the Matrix room integration  
**\<sarang>** (e) the MRL-0011 paper will be released to this group when I get my reviewing ass in gear again  
**\<sarang>** (f) refund address options should be investigated more thoroughly to decide what route(s) to take  
**\<sarang>** That's all I wanted to get through. We can open the floor now to continuation of anything and everything  
**\<sarang>** Sorry for being a hardass on time today; wanted to make sure we hit everything  
**\<suraeNoether>** in order to address (c), we should write up a formal technical note on (i) how amount commitments are currently computed, (ii) our proposal for the new computation and (iii) proofs of equal security in terms of hiding and binding properties\\  
**\<suraeNoether>** and i can work with knaccc on that this week  
**\<knaccc>** Not sure if MRL is the right place for this, bu re: the embedded Java-I2P router idea, I've almost finished it. Just need to test my scripts a bit more. Available here: https://github.com/knaccc/embedded-i2p-java-router-with-sam  
**\<sarang>** OK, have you seen the branch moneromooo has already?  
**\<sarang>** it's in code  
**\<moneromooo>** 5052  
**\<suraeNoether>** oh man  
**\<suraeNoether>** i'll check that out  
**\<suraeNoether>** thanks moneromooo  
**\<sarang>** I know moneromooo and knaccc and I have looked it over  
**\<suraeNoether>** yeah, and i recall writing up a proof of the idea and satisfying myself about it, but that was on paper  
**\<suraeNoether>** which branch?  
**\<sarang>** rctb  
**\<sarang>** https://github.com/moneromooo-monero/bitmonero/tree/rctb  
**\<oneiric\_>** knaccc: cool work on the java-i2p embedded router  
**\<zlatinb>** knaccc: let me know if you need any help with the java embedding  
**\<suraeNoether>** found it right after i asked :P thanks sarang  
**\<knaccc>** oneiric\_ zlatinb thanks, any comments or suggestions welcome  
**\<moneromooo>** Are you adding i2p/monero connectivity ?  
**\<oneiric\_>** do you know if there are any hardening flags available for jlink?  
**\<knaccc>** not sure what you mean by hardening  
**\<oneiric\_>** aslr pie stuff like that  
**\<knaccc>** i don't think those things apply to Java  
**\<oneiric\_>** no?  
**\<knaccc>** that's kinda the point of Java  
**\<knaccc>** buffer overflows etc are impossible  
**\<knaccc>** even if you're brain dead  
**\<oneiric\_>** hrm, the jvm is still in c tho no?  
**\<zlatinb>** C++  
**\<knaccc>** oh the jvm itself is hardened over 2.5 decades by Sun/Oracle, in theory  
**\<knaccc>** there are no user flags i'm aware of for hardening it further, but i'll check  
**\<zlatinb>** jlink doesn’t really “link” anything in the sense of C/C++ linking  
**\<knaccc>** correct  
**\<knaccc>** it's static linking of java stuff  
**\<oneiric\_>** so, in java dev, there is no sense of hardening outside of writing good code?  
**\<zlatinb>** not really  
**\<suraeNoether>** OH GUYS I HAD AN ANNOUNCEMENT  
**\<suraeNoether>** as some of you know, Sarang and I have started a non-profit together called MAGIC - Multidisciplinary Academic Grants in Cryptocurrencies  
**\<suraeNoether>** and we are opening up our scholarship program this month!  
**\<oneiric\_>** congrats!  
**\<suraeNoether>** we are giving out 5 $1000 USD scholarships for this fall, and we are giving out 2 $3000 USD research grants in the upcoming spring  
**\<dEBRUYNE>** moneromooo: I think that's the intention  
**\<knaccc>** congrats surae  
**\<suraeNoether>** so, by the end of this month, our application will be available on https://magicgrants.org for anyone registered at an accredited school in the US, South Africa, or the EU or EFTA nations or micronations within the EU or EU-eligible nations.  
**\<suraeNoether>** all this is made possible by a single anonymous donor so far  
**\<suraeNoether>** i know the market has screwed all of us essentially, but if anyone wants to give, there are donation links both through globee for crypto and stripe for fiat on that webpage  
**\<knaccc>** very cool suraeNoether!  
**\<suraeNoether>** thanks knaccc!  
**\<suraeNoether>** hopefully by 2022 we can start building primary schools all over the world libraries and computer labs  
**\<suraeNoether>** well, in the listed nations for now. :P  
**\<sarang>** Side update: suraeNoether is fine with the Matrix plumbed room, as am I. Unless there are objections now (this was mentioned earlier to other room ops, with no reply) we'll go ahead and allow it  
**\<suraeNoether>** ah yeah i removed my objection because i realized we can always undo the decision later. :P  
**\<suraeNoether>** and i don't think charuto is a personel risk, although having a second mod would be keen  
**\<sarang>** Block cap algo is in ArticMine's court for now, with the current proposed dual-median in the wings  
**\<sarang>** Payment ID timeline is still annoyingly up in the air  
**\<sarang>** If anything, we should figure that damn thing out  
**\<knaccc>** moneromooo just in case it's not clear, I don't know a thing about the C side of things, e.g. how to add libsam3 to the Monero C code in order to talk to the embedded i2p router via the SAM protocol. But I am able to figure out how to produce an embedded JVM/I2P binary that can be bundled with zero installation and zero dependencies  
**\<moneromooo>** OK.  
**\<suraeNoether>** do we have an issue on github yet re: replacing pay\_id with subaddresses?  
**\<suraeNoether>** it'd be helpful to have some coherent arguments laid out in all the different directions  
**\<suraeNoether>** also does anyone have thoughts on this: https://github.com/monero-project/research-lab/issues/46  
**\<sarang>** That was brought up on reddit earlier, presumably by the same  person  
**\<moneromooo>** When I see a post that has "it's going to be brushed off", I want to brush it off just because it said that. OTOH, a game theoretic analysis of this would be very nice, if possible.  
**\<sarang>** Yeah, I said that person is free to do it or put it out there for someone else to do, either volunteer or for FFS donations  
**\<moneromooo>** s/possible/not made up of mostly unknowable factors/  
**\<sarang>** ArticMine has brought up his views on supply but AFAIK they are not really documented anywhere  
**\<sarang>** and they should be  
