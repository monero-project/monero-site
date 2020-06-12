---
layout: post
title: Logs for the MRL Meeting Held on 2019-12-30
tags: [dev diaries, crypto, research]
author: asymptotically / Sarang
---

# Logs

**\<suraeNoether\>** welcome everyone, to the last MRL research meeting of the year  
**\<suraeNoether\>** if i had thought about it, i'd have something more in-depth prepared but it just occurred to me ;P  
**\<suraeNoether\>** let's start with 1) GREETINGS  
**\<endogenic\>** o/  
**\<sarang\>** hi  
**\<suraeNoether\>** good and you, oh not so bad  
**\<suraeNoether\>** isthmus was here mere moments ago  
**\<Isthmus\>** Kind of. Splitting headache. Looking at screen intermittently.  
**\<sarang\>** yikes  
**\<endogenic\>** :(  
**\<Isthmus\>** C'est la vie.  
**\<suraeNoether\>** okay, well; go away isthmus and come back when you're healthy  
**\<suraeNoether\>** you'll get us all sick with headaches left and right  
**\<endogenic\>** i have a headache now  
**\<Isthmus\>** See, we should just ban headaches at the protocol level  
**\<Isthmus\>** Not just in the wallet.  
**\<suraeNoether\>** no your headache now  
**\<suraeNoether\>** before we move onto 2) ROUNDTABLE I would like to bring up a single administrative issue  
**\<suraeNoether\>** i would like to propose that we consider switching meeting times; we selected 17 UTC mondays essentially at random about 2 years ago  
**\<sarang\>** ?  
**\<sarang\>** What's a preferred time?  
**\<suraeNoether\>** nowadays, not all of our participants easily are able to attend that time, so often it's just sarang and i  
**\<suraeNoether\>** so while i don't have a lot of time constraints, i wanted to hear from folks like isthmus who oftentimes have meetings at around the same time  
**\<suraeNoether\>** and open the room up for general discussion about timing for meetings  
**\<Isthmus\>** ty  
**\<suraeNoether\>** i know this is boring, but it's been on my mind for more than a month now  
**\<sarang\>** Suggestions on a better time?  
**\<endogenic\>** an hr fro  
**\<Isthmus\>** I'm normally on Pacific time so Monday 1700 UTC is early and right when I'm getting swamped at the office  
**\<endogenic\>** m now?  
**\<endogenic\>** nm  
**\<Isthmus\>** I'm just here now cuz on holiday & EST  
**\<sarang\>** How about 18:00 or 19:00 UTC?  
**\<endogenic\>** Weds?  
**\<Isthmus\>** Weds at 18 or 19 would be better  
**\<Isthmus\>** In that case, I think I could block it on my work calendar as a recurring event  
**\<sarang\>** We could always try a new datetime out and see how it goes  
**\<suraeNoether\>** i second wednesdays at 18-19 UTC provisionally for the first month of the year just to see how it works out re: participation  
**\<sarang\>** I make sure the topic bar shows the meeting datetime  
**\<Isthmus\>** +1  
**\<sarang\>** OK, Wednesday at 18:00 UTC it is  
**\<Isthmus\>** Thanks! Will be very helpful for me.  
**\<suraeNoether\>** okay, neato burrito  
**\<suraeNoether\>** onto 2) ROUNDTABLE  
**\<suraeNoether\>** since the holidays were last week, maybe we can make this not just a "here's what I did last week" thing but also a "here's what we did this year" thing, but that could end up being a... surprisingly long list  
**\<suraeNoether\>** but we don't have to go in-depth  
**\<suraeNoether\>** sarang or isthmus, do you guys want to begin? wait, no, isthmus: go away and treat your headache  
**\<sarang\>** I finished up a draft MPC for the aggregated version of RCT3 this past week  
**\<sarang\>** And am currently in the weeds with some Omniring stuff that has been puzzling  
**\<sarang\>** Additionally, my funding request is open: https://ccs.getmonero.org/proposals/sarang-2020-q1.html  
**\<suraeNoether\>** i strongly recommend that everyone donate to sarang's funding request  
**\<suraeNoether\>** well, i mean, whatever you are comfortable with  
**\<sarang\>** and I'm on pins and needles for any comments from suraeNoether on CLSAG or Triptych preprint updates  
**\<suraeNoether\>** what i mean to say is: this is a valuable request, and if you have been considering donating to the CCS but don't know where your money will have a big impact, sarang's fund is a high priority ticket imho  
**\<sarang\>** Much appreciation for all the support  
**\<sarang\>** I'm eager to see what the next year holds in the research space, particularly relating to transaction protocols  
**\<Isthmus\>** Yea, what's our research theme for 2020  
**\<Isthmus\>** I'll obviously continue to be a huge PITA about information leaks  
**\<sarang\>** yes plz  
**\<sarang\>** "2020: zero knowledge, infinite heart"?  
**\<Isthmus\>** Ring size 2020?  
**\<Isthmus\>** Oh wait, it's not a prime number  
**\<sarang\>** People are going to think there's a technical reason for having prime-number ring sizes :/  
**\<sarang\>** Interestingly, for some protocols, you specifically \_can't\_ have a prime number size!  
**\<suraeNoether\>** for any merkle-tree based approach, you have to stick with powers of 2  
**\<suraeNoether\>** for 2020, a few things i'd like would be a formal protocol specification for a tryptich-based protocol, using ristretto, going down to the nitty gritty details of optimized arithmetic, tor integration, etc  
**\<suraeNoether\>** thing is, i think we are eventually going to need to abandon the DL setting for efficiency and security reasons; either switching to multilinear pairings may be necessary for efficiency, but still boils down to computational security. on the other hand, switching to other hardness assumptions like RLWE, which are believed to be quantum-secure, is an area of active research. that assumption also has a  
**\<suraeNoether\>** very different profile for use in cryptocurrencies because key sizes and signature verification speeds are very different in the new setting  
**\<suraeNoether\>** my roundtable contribution from this past week: i got flu-like symptoms after xmas, so all I could do was sit around and be grumpy, so I ... copy-edited triptych and clsag  
**\<suraeNoether\>** (best thing to do when grumpy is to grade papers???)  
**\<sarang\>** Looking forward to your notes on those  
**\<suraeNoether\>** should be before 3PM today  
**\<sarang\>** Hooray!  
**\<sarang\>** It's a Festivus miracle!  
**\<suraeNoether\>** i'll be switching back to matching simulation stuff literally next year  
**\<suraeNoether\>** festivus miracles involve being able to use the aluminum pole on your grievances  
**\<endogenic\>** i dont get that reference but i will google  
**\<sarang\>** I'll be continuing a deep-dive into some Omniring stuff this week, to determine if an issue I ran into presents a problem with any of the proofs  
**\<Isthmus\>** My roundtable is still plotting, but should be rendered shortly  
**\<suraeNoether\>** after recovering from the flu, or whatever i had, though, i have to say: i feel like a million bucks and i'm super excited to finish off triptych today  
**\<suraeNoether\>** endo and isthmus and sarang can all attest to the number of times per year i say i feel like a million bucks  
**\<Isthmus\>** :- )  
**\<endogenic\>** 1/4 times per year so far  
**\<suraeNoether\>** when the moon hits your eye like a big pizza pie, thatsa N=1  
**\<Isthmus\>** Ah, here we go  
**\<endogenic\>** i feel for the transcription translators who do these logs  
**\<Isthmus\>** https://usercontent.irccloud-cdn.com/file/ntGPLKhz/image.png  
**\<Isthmus\>** ^ non-coinbase TXNs as of late  
**\<suraeNoether\>** oh my fkn god  
**\<Isthmus\>** I zoomed in on lower values there, there are some absurd outliers  
**\<Isthmus\>** https://usercontent.irccloud-cdn.com/file/Uz5uJDlS/image.png  
**\<suraeNoether\>** so i like the idea of having an adjustable unlock time for smart contract reasons. ...  
**\<endogenic\>** for m'kids  
**\<suraeNoether\>** hey, sarang: think the range proof technique for the trigger block height in DLSAG could be janked around to hide \*all unlock times\*?  
**\<Isthmus\>** https://usercontent.irccloud-cdn.com/file/xS32XCWP/image.png  
**\<Isthmus\>** ^ All from the last few months  
**\<Isthmus\>** Excluding the giant ones  
**\<sarang\>** I believe it could  
**\<Isthmus\>** Apparently unlock\_time supports both unix timestamps and height... There are 13 transactions that used UNIX time and the rest are height-based  
**\<sarang\>** unix timestamps? did not know that  
**\<Isthmus\>** There's one transaction whose outputs will unlock in the year 46000, lol  
**\<suraeNoether\>** hmmmm  
**\<suraeNoether\>** i can't think of a good reason to allow unix timestamps  
**\<endogenic\>** who uses unlock time currently?  
**\<suraeNoether\>** costs of hiding all unlock times is a new range proof, but that can be batched with bulletproofs... and variable unlock times are desirable for smart contracting...  
**\<Isthmus\>** @endogenic apparently 8 different sets of people, and they all use it differently  
**\<Isthmus\>** xD  
**\<endogenic\>** lol  
**\<suraeNoether\>** the DLSAG connection is strong with this  
**\<endogenic\>** surae is one of them  
**\<Isthmus\>** https://xmrchain.net/search?value=2c2762d8817ea4d1cb667752698f2ff7597a051d433043776945669043d908b5  
**\<Isthmus\>**   "unlock\_time": 1420722551128,  
**\<suraeNoether\>** i'm \*really\* bad at monero  
**\<sarang\>** Not only batched, but aggregated for logarithmic size benefits  
**\<suraeNoether\>** can anyone think of a good reason to keep unlock time in plaintext?  
**\<endogenic\>** auditability  
**\<sarang\>** It's also smaller  
**\<endogenic\>** forgive me monero gods  
**\<sarang\>** Otherwise you have to put it into a commitment  
**\<Isthmus\>** What is the point of unlock time?  
**\<Isthmus\>** Serious question.  
**\<Isthmus\>** I need to understand the intended use cases to figure out how we should handle it  
**\<moneromooo\>** A reason to use UNIX timestamps is to not depend on block time changes.  
**\<endogenic\>** (unreclaimable) vesting period; force-hodl  
**\<sarang\>** that's a fair point  
**\<Isthmus\>** If the unlock time is plaintext, then how can the hodl be forced?  
**\<Isthmus\>** Erm  
**\<Isthmus\>** \*if is encrypted, how enforced  
**\<sarang\>** There's a range proof included, showing that the current block height exceeds the committed lock period  
**\<moneromooo\>** Can't you easily brute force it ?  
**\<sarang\>** The goal is to reduce heuristics around expected spends  
**\<suraeNoether\>** endogenic: auditability in this case would be the same security/threat model as our confidential transactions, so that wouldn't reduce our auditability... not to mention, for the folks in the audience, monero balances are guaranteed by the unforgeability property of our signatures; if anyone is capable of cheating the monero system with our confidential transactions, they can also forge signatures with  
**\<suraeNoether\>** elliptic curves, which breaks a lot more than just monero.  
**\<Isthmus\>** I second mooo's question  
**\<sarang\>** moneromooo: the lock time is in a Pedersen commitment  
**\<endogenic\>** suraeNoether: was joke :)  
**\<sarang\>** which is perfectly hiding  
**\<suraeNoether\>** isthmus: early cross-chain swap models require unlock times to elapse to use SPV  
**\<endogenic\>** but how does recipient easily verify time til unlock isnt ridiculous through only range proof?  
**\<suraeNoether\>** endogenic: it's a joke, but like a making a math joke in a math class, it's always followed up by a serious discussion of why it's funny. #mathteacherlife  
**\<sarang\>** That needs to be communicated to the recipient endogenic   
**\<endogenic\>** suraeNoether: one-up'd  
**\<sarang\>** The range proof is included at spend time  
**\<sarang\>** not at output generation time  
**\<Isthmus\>** Ohhhh  
**\<moneromooo\>** So a verifier gets a yes/no, and at some point a no becomes a yes.  
**\<suraeNoether\>** moneromooo: can't brute force due to sarang's observation about perfect hiding  
**\<moneromooo\>** Right ?  
**\<sarang\>** not quite  
**\<endogenic\>** sarang: out of band?  
**\<sarang\>** When you generate the output, you specify an unlock time commitment, and transfer the plaintext version to the recipient either encrypted or out of band  
**\<moneromooo\>** I mean, from a verifier's perpective, they will need to either reject a spend, or ok it.  
**\<Isthmus\>** -\_-  
**\<sarang\>** When the output is spent, a range proof is generated using a particular time offset against the commitment, to show the lock time has been exceeded relative to the current block height  
**\<moneromooo\>** When they stop getting a verification failure, there's no other reason (currently) other than that, no ?  
**\<sarang\>** The method is a bit unintuitive until you write it out, TBH  
**\<moneromooo\>** Oh. I see. Thanks.  
**\<sarang\>** but it's included in the DLSAG preprint  
**\<moneromooo\>** er.  
**\<suraeNoether\>** moneromooo: you wouldn't be able to construct a range proof on [0, ..., N] with time offset -3  
**\<suraeNoether\>** it wouldn't be a valid proof  
**\<suraeNoether\>** the trickiness is in realizing how the DLSAG construction actually captures the offset  
**\<moneromooo\>** So you include the block hash at currnet block then ?  
**\<suraeNoether\>** let me pull it up  
**\<sarang\>** But moneromooo, it's important to note that you can't simply brute-force the verification at each successive block until it succeeds  
**\<suraeNoether\>** for the audience members: https://eprint.iacr.org/2019/595  
**\<sarang\>** The signer generates the proof once, at spend time  
**\<moneromooo\>** OK, that's good enough for me. Thanks.  
**\<sarang\>** There's some subtlety in choosing the offsets and such, to reduce heuristics, but the method makes sense  
**\<suraeNoether\>** bottom of page 10, left hand column  
**\<sarang\>** Cost would be replacing plaintext lock times with commitments, and extending bulletproofs to include the lock proof  
**\<suraeNoether\>** this would be the first step toward "private" smart contracts that depend on dev-selected unlock times  
**\<suraeNoether\>** in a sense it's more basic than DLSAG, almost an independent component used in DLSAG. it should have occurred to me before that it was basically it's own construction...  
**\<sarang\>** It is an independent component... you can do DLSAG with plaintext trigger heights  
**\<suraeNoether\>** \*nod\*  
**\<sarang\>** but it's probably a bad idea to do so  
**\<endogenic\>** i have to step out y'all  
**\<suraeNoether\>** which means it has its own stand-alone security definitions. in this case, the definitions rely on some adversarially generated blockchain, yadda yadda  
**\<Isthmus\>** I think that would be worthwhile to switch to unlock time commitments... Right now an adversary can partition (/fingerprint) the blockchain into ~20 different anonymity puddles based on unlock time alone.  
**\<Isthmus\>** When I first plotted it I was expecting a few Easter eggs, not heuristic info bleeding everywhere.  
**\<endogenic\>** keep killin it Isthmus   
**\<suraeNoether\>** okay, anyone else want to present any research or thoughts at our roundtable?  
**\<moneromooo\>** If you guys are looking at making unlock time a commitment, maybe this is a good time to look at a possible semantics change for unlock time to ease future things like atomic swaps etc.  
**\<Isthmus\>** ^ ooooh  
**\<sarang\>** How so?  
**\<suraeNoether\>** yeah, please go on  
**\<Isthmus\>** Ok, my head is figuratively literally splitting in half, so I'mma peace out. Thanks y'all.  
**\<Isthmus\>** gg  
**\<moneromooo\>** By... er... thinking of the requirements you know of for atomic swaps etc, and what semantics would best match those.  
**\<sarang\>** See ya Isthmus; feel better  
**\<sarang\>** also see ya endogenic  
**\<moneromooo\>** I'm thinking in particular of the fact monero's unlock\_time semantics do not match bitcoin's, and bitcoin's used for more fancy things like atomic swaps.  
**\<sarang\>** Ah ok  
**\<Isthmus\>** Oh but before I go, huge shoutout to @n3ptune who curated the data set  
**\<Isthmus\>** Ok ciao!  
**\<suraeNoether\>** moneromooo: yeah, we need to nail down specific examples of usual atomic swaps with bitcoin and how the masked unlock times in monero will play with the unmasked lock times in bitcoin...  
**\<suraeNoether\>** for sure  
**\<suraeNoether\>** isthm and i are having a video call about it after he feels better. i'll take notes and we'll draft an issue.  
**\<suraeNoether\>** allrighty, we are coming up on an hour  
**\<sarang\>** Action items, I suppose?  
**\<suraeNoether\>** indeed  
**\<suraeNoether\>** Mine: sending comments to sarang re: triptych and clsag, consulting with isthm about masking unlock times... which maybe we should do over IRC instead of a video call... to make a donation to sarang's funding request...  
**\<sarang\>** I'll be continuing that Omniring issue, editing CLSAG/Triptych based on suraeNoether's reviews, and a few odds and ends relating to code libraries and MPC  
\< does anyone have any last questions?  
**\<sarang\>** Nay  
**\<sarang\>** I suppose we can adjourn then  
**\<gingeropolous\>** when ringsize a bajillion  
**\<sarang\>** Soon (tm)  
**\<gingeropolous\>** :)  
**\<sarang\>** Or the Futurama answer: "Soon enough." "That's not soon enough!"  
