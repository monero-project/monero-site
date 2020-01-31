---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-02-05
summary: Bulletproofs, dedicated Monero conference, increasing minimum ring size, making ring size static, and miscellaneous
tags: [dev diaries, crypto, research]
author: dEBRUYNE / fluffypony
---

# Logs  

**\<suraeNoether>** meeting in a few minutes  
**\<sgp>** Thanks for the ping  
**\<suraeNoether>** we'll be casual about it today  
**\<suraeNoether>** np sgp  
**\* moneromooo** adds "surae said there would be casualties today" to the minutes.  
**\<suraeNoether>** floggings will continue until... the floggings continue  
**\<sarang>** So, what shall we cover?  
**\<sarang>** I'm writing up a technical note on our BP stuff, for addition to the MRL paper library  
**\<suraeNoether>** 1: greetings, 2: your work since our last meeting, c) my work since our last meeting, and iv: what you and i just discussed i guess  
**\<sarang>** it should help reviewers with notes of where we are different from the original whitepaper  
**\<sarang>** ah ok, I'm getting ahead of myself  
**\<suraeNoether>** hehe  
**\<suraeNoether>** but i think greetings are too formal, etc  
**\<suraeNoether>** you go ahead  
**\<suraeNoether>** are our implementations of bulletproofs so novel that we need an MRL-XXXX ? or is this more of a monero standards-thing?  
**\<sarang>** Sure  
**\<sarang>** So moneromooo and I worked on getting batch verification added to BPs  
**\<sarang>** which will significantly speed up initial operations for new nodes  
**\<sarang>** It lets you lump together verification of multiple proofs from as many transactions as you want  
**\<sarang>** Still linear time, but the scaling factor is less when you batch  
**\<sarang>** I'm writing up a technical note that discusses the rationale for our switch to BPs, and talks about the math behind the changes we made from the whitepaper  
**\<sarang>** These may be included in andytoshi's update to the whitepaper, but the timeline on that isn't clear  
**\<sarang>** This will help out the review process by explaining what we did and why we did it  
**\<sarang>** as well as beef up the MRL paper library =p  
**\<sarang>** It will NOT be a full review of all the BP algorithms, which would be horrifically redundant  
**\<suraeNoether>** this still makes me nervous, fwiw, because you can interpret a range proof as a ring signature with a private key from the set [0, 1, ..., 2\^N], and ruffing's theorem on verification of ring signatures implies you can't batch several of them  
**\<sarang>** It's still linear  
**\<sarang>** All we're doing is combining multiexp operations using linear combinations of the scalars  
**\<sarang>** And keep in mind it's batching independent proofs  
**\<suraeNoether>** yeah, but that's like verifying multiple signatures simultaneously  
**\<sarang>** If one proof requires g\^a + h\^b = 0  
**\<sarang>** \* not \+  
**\<sarang>** and another requires g\^c\*h\^d = 0  
**\<suraeNoether>** thing is, my reasoning is faulty for a few reasons. the first one is that just because we used borromean ring sigs to build range proofs that does not imply that all range proofs can be interpreted as ring signatures. and these range proofs are from arithmetic circuits, yeah?  
**\<sarang>** You can check g\^(Aa+Cc)h\^(Bb+Dd) = 0, where the capital letters are randomly selected by the verifier  
**\<suraeNoether>** ooooh  
**\<suraeNoether>** hmm  
**\<sarang>** Since the weights aren't deterministic, the prover can't cleverly produce proofs designed to fool this  
**\<suraeNoether>** yeah and that's pretty specific to commitments, too  
**\<suraeNoether>** cool, sorry for interrupting, please go on  
**\<sarang>** So again, still linear, but replacing expensive curve ops with scalar ops, and only doing 1 multiexp  
**\<sarang>** It's technically possible to do this for every part of the verification, but moneromooo said there could be caching issues  
**\<sarang>** So we might just stick to one particular batch operation, which would be the most expensive one anyway  
**\<sarang>** Also  
**\<sarang>** You can do this for proofs of different aggregation levels  
**\<sarang>** Now, andytoshi and benedikt have also figured out a way to allow ANY number of outputs in a single proof, and not just a power of 2  
**\<sarang>** but this would require a significant overhaul and may not be worth it (they were interested for AC applications)  
**\<sarang>** I say we just stick with power of 2  
**\<sarang>** it'll make for easier review  
**\<sarang>** This will all be discussed in the technical note  
**\<suraeNoether>** well hold on though  
**\<sarang>** ?  
**\<suraeNoether>** i'm okay with the idea of sticking with powers of 2 but is there an efficiency reason to avoid the more general approach?  
**\<suraeNoether>** is the primary reason to avoid the general # of bulletproofs because the overhaul to the code would be significant, or would it be because the gains in efficiency aren't worth it (in terms of proof size and proof verification time?)  
**\<sarang>** The overhaul to the code is quite a bit  
**\<sarang>** For proof size it's irrelevant  
**\<sarang>** The scaling is logarithmic so it's a minor gain  
**\<sarang>** But verification time is linear  
**\<suraeNoether>** yeah, it always is, and always will be, but do the constants change?  
**\<sarang>** If you have 9 outputs, you either pack with dummies to a 16-proof, or do an 8-proof and a 1-proof  
**\<sarang>** no  
**\<suraeNoether>** oh, then forget it, keep it at powers of 2 and i'm fine with that  
**\<sarang>** Yeah, our numbers are small enough  
**\<sarang>** andytoshi et al. were testing with giant ACs where it would matter a lot more  
**\<suraeNoether>** yeah, i imagine the flexibility of the construction is important for their purposes  
**\<sarang>** 16-proof is more space efficient, but 8+1 is more time efficient  
**\<sarang>** slightly  
**\* sarang** will stop talking now  
**\<suraeNoether>** and it will also be important for our purposes later on, but for range proofs right now, we can save on fees and blockchain space and new node sync time, it's a no-brainer  
**\<suraeNoether>** cool, thanks sarang  
**\<sarang>** If we decide to switch later, it would change the proof structure  
**\<sarang>** for what it's worth  
**\<suraeNoether>** anyone else have any questions about bulletproofs and sarang's documentation of the work on bulletproofs into an MRL-XXXX?  
**\<sarang>** I'm ready to be done with these!  
**\<sarang>** Fun project, lots of crazy optimizations, but it's time to get this baby born  
**\<suraeNoether>** For my work, I'm working on multisig, and working on incorporating some of the ideas from musig into our key merging. https://eprint.iacr.org/2018/068  
**\<sarang>** Yeah, cool work discussed at BPASE  
**\<suraeNoether>** there are some issues with our current key merging, although I think everything else is pretty much good to go  
**\<sgp>** No more questions from me on bulletproofs  
**\<sarang>** Another reason that conference was a great investment  
**\<suraeNoether>** oh, and holy crap  
**\<suraeNoether>** i have to thank the community  
**\<sarang>** As do I  
**\<suraeNoether>** for freaking sending me all over the world twice in two weeks  
**\<sarang>** From the exotic shores of Switzerland to the exotic shores of... Palo Alto?  
**\<suraeNoether>** this has been one of the most enlightening and fun weeks of my life, meeting such smart people with such great ideas  
**\<suraeNoether>** but we'll get back to that later, I suppose  
**\<sarang>** We can make many things virtual, but conferences are not currently one of them  
**\<suraeNoether>** back to multisig: basically, the naive, first way anyone has ever done key merging/key aggregation is to simply sum keys  
**\<suraeNoether>** so if A, B, and C want to make a multisignature wallet, they compute A+B+C as their public key  
**\<suraeNoether>** this has two drawbacks. one of them is that keys can't be re-used securely, and another is that A can try to pick a key of the form A\* - B - C and get a public key A\*. this way, A can make signatures without the input of B and C  
**\<sarang>** (I'll be AFK for about 10 min, sorry)  
**\<dEBRUYNE>** Wasn't the latter attack discussed here a while ago too? I think luigi1111 retorted it.  
**\<dEBRUYNE>** I might be conflating stuff though  
**\<suraeNoether>** if so, i'm not sure where it is  
**\<suraeNoether>** this goes back to the original criticisms of the ASNL ring sigs back when we first did ringct  
**\<suraeNoether>** so other methods would instead of computing the simple sum A + B + C would compute a linear combination c1\*A + c2\*B + c3\*C where each c1,c2,c3 is a random challenge based on the associated key  
**\<suraeNoether>** first methods tried something like c1 = H(A), but the problem became an issue where all the public keys A, B, C have to be revealed to verify a signature  
**\<suraeNoether>** which brings us to another drawback of A+B+C which is that it's distinguishable from other keys: if you suspect some users have formed an N-of-N wallet and you know their public keys, it's trivial to check if a key is a multisig key  
**\<suraeNoether>** the key aggregation in the musig paper computes c1 = H(A, {A,B,C}), c2 = H(B, {A,B,C}), and c3 = H(C,{A,B,C})  
**\<suraeNoether>** and this one little trick (!) of the hash function makes it verifiable with only the total aggregated key  
**\<suraeNoether>** long story short, it's a simple change from computing keys as a simple sum(key) to sum( H(key, list\_of\_keys)\*key)  
**\<suraeNoether>** and this sounds great  
**\<suraeNoether>** but then your heart falls when you find out that they use a novel and somewhat complicated proof technique with a nonstandard discrete log assumption  
**\<suraeNoether>** so, i'm going through an MLSAG ring signature extremely carefully and making sure that I can substitute these keys into the proof without changing the underlying security properties of the MLSAG  
**\<suraeNoether>** I don't want to make any recommendations about changes, yet, though, because of their proof technique and their strange security assumption  
**\<suraeNoether>** also, fwiw, if users always roll fresh keys for their multisig wallets, we could simply insert a commit-to-keys and an opening-of-commitments  set of steps in key merging, and instruct users to always roll fresh keys for each new multisig construction  
**\<suraeNoether>** so there is a route for preventing this rogue key attack in both cases. i just want to take this new proof seriously  
**\<suraeNoether>** any questions about multisig?  
**\<luigi1111>** Yes but not now  
**\<luigi1111>** I'm not really here  
**\<suraeNoether>** ok we can put that on hold for now  
**\<suraeNoether>** in addition to that, Sarang and I are starting to throw the first roadmap of the year together. We are taking a little bit extra time because other projects like BP and multisig are more urgent.  
**\<suraeNoether>** Sarang also has a three-week cryptography course planned this summer, maybe when he gets back he can tell us about that  
**\<sarang>** back  
**\<sarang>** Yes  
**\<suraeNoether>** good timing  
**\<sgp>** Yes, sarang made this course sound pretty interesting. I'd like to hear more about it  
**\<sarang>** So there was desire expressed that educational outreach is a Good Thing  
**\<sarang>** And who knows, maybe eventually we can run an independent program, or team up with other projects for this  
**\<sarang>** But that's time-consuming and very expensive  
**\<sarang>** There's an offer this summer to do a 3-week intensive course through Duke or JHU  
**\<sarang>** It costs the community nothing  
**\<sarang>** and is a good opportunity to pilot a cryptocurrency-focused modern crypto course for gifted high school students  
**\<sarang>** Disclaimer: I'd get paid a pittance to teach it, based on their existing pay structure, so I wouldn't request any FFS during that time  
**\<suraeNoether>** pittances invested in cryptocurrencies become old toyota tacomas  
**\<sarang>** Ha, it's paid in boring US currency  
**\<sarang>** Any questions on it?  
**\<sarang>** Course materials would be released fo free  
**\<sarang>** Lectures can't be videotaped  
**\<suraeNoether>** oh, i was speaking with you, Sarang, and one of fluffypony's friends about making educational youtube videos, white-board-style, that explain how bitcoin and monero work, and how ethereum smart contracts will destroy the whole ecosystem  
**\<suraeNoether>** (ahem)  
**\<suraeNoether>** i mean how smart ethereum smart contracts are  
**\<sgp>** Course materials include slides?  
**\<suraeNoether>** sarang: do you usually use slides or are you a chalk talk sort of man  
**\<suraeNoether>** ?  
**\<sarang>** I've moved some of it to slides for easier reuse  
**\<sarang>** But not entirely  
**\<sarang>** I also have a lot of it in book form now  
**\<sarang>** Over 100 pages of classical and some modern material, with exercises  
**\<suraeNoether>** that's pretty sweet actually. you following the footsteps of your adviser, writing your own textbook one semester at a time?  
**\<sarang>** Only out of laziness  
**\<sarang>** I've taught classical crypto courses before and got sick of rewriting everything  
**\<suraeNoether>** the best motivator for keeping detailed notes  
**\<sarang>** So anyway, comments/questions welcome  
**\<sarang>** especially on the scope  
**\<sarang>** This will basically be a pilot program run under the existing structure of an established program  
**\<sarang>** which removes all the hassle of recruiting students, housing people, etc.  
**\<suraeNoether>** neato burrito  
**\<sarang>** For reference though, this doesn't mean that JHU or Duke are endorsing Monero in any way... I'd be teaching it as an unaffiliated seasonal employee  
**\<sarang>** oh, sgp yes that would include slides  
**\<suraeNoether>** One last time, I would like to thank the community for their amazing generosity in general, and in particular these past few weeks.  
**\<sarang>** everything except for video lectures (can't release those since students are minors)  
**\<sarang>** Notes also include a cool section on Enigma that includes a paper simulator you can build yourself  
**\<suraeNoether>** if anyone has found any interesting papers or ideas recently, please share them! I saw that hyc spoke at a fosdem  
**\<suraeNoether>** does anyone know if his talk is available anywhere?  
**\<suraeNoether>** i hear he serenaded the crowd with his violin  
**\<sarang>** Well I heard about this crazy new coin! It uses a DAG! And it's like a hive with fast payments and it has secure!  
**\<sgp>** I would also like the link if possible  
**\<suraeNoether>** is instant?  
**\<sarang>** Probably!  
**\<suraeNoether>** probabilistically instant?  
**\<sarang>** I've turned into this huge Eeyore among local groups  
**\<sarang>** They keep posting their favorite new shitcoin, and I keep telling them the whitepaper has zero crypto, protocols, or math  
**\<sarang>** =p  
**\<sarang>** Then they get mad  
**\<sgp>** @sarang that's a great way of putting it  
**\<suraeNoether>** gotta be a good red team  
**\<suraeNoether>** gotta *have* a good red team  
**\<sarang>** This isn't being a red team, it's being able to read  
**\<suraeNoether>** okay, so there's also this idea that Sarang and I have been kicking around  
**\<suraeNoether>** about hosting a Monero conference next spring in Denver, CO  
**\<diego[m]>** Meeting = missed. :(  
**\<suraeNoether>** eh, not really  
**\<suraeNoether>** tail end anyway  
**\<suraeNoether>** i've spoken with a few different possible speakers, and everyone seems to be receptive to the idea. i've costed it out, and i am astounded, btw. a conference like consensus charges huge $$ to get in, but from the numbers i'm seeing, we can break even for between 50-100 bucks a ticket  
**\<suraeNoether>** if we run an FFS, it could just be free  
**\<suraeNoether>** well, free except for the donors  
**\<suraeNoether>** well  
**\<suraeNoether>** i mean free to attendees  
**\* suraeNoether** *flustered*  
**\<gingeropolous>** thats because they look to profit  
**\<suraeNoether>** gingeropolous: +1  
**\<sarang>** It'd be funny to have a "donors" section of the program with a bunch of blacked-out names  
**\<anonimal>** Venue picked out?  
**\<suraeNoether>** anonimal: i have a few in mind, i ahve a spreadsheet of possibilities  
**\<sarang>** He can prove it's at one of several possible venues  
**\<diego[m]>** We should milk attendees for all they're worth.  
**\<diego[m]>** Conference be Monero specific? Not privacy? Not open source? (Just some questions)  
**\<sarang>** diego[m]: provide free milk?  
**\<suraeNoether>** i want this to be a 1 or 1.5 day thing filled with technical talks. investors and venture capitalists shoudl be bored out of their minds  
**\<anonimal>** In Denver or surrounding area?  
**\<suraeNoether>** diego[m]: i'm open to most privacy-enhancing technology based talks  
**\<suraeNoether>** anonimal: yeah, if you want i can send you a list of some places i found  
**\<anonimal>** That'd be great, thanks.  
**\<suraeNoether>** we can go super super cheap and go for a university if we don't want to have a cool industrial-style brewery all to ourselves  
**\<anonimal>** I do miss those hills.  
**\<sarang>** Orrrr we could do brewery  
**\<sgp>** Have you talked with any universities? May be much cheaper and easier to host a conference there than a hotel or similar  
**\<sarang>** suraeNoether: you've been talking with an event planner, yes?  
**\<suraeNoether>** yep  
**\<anonimal>** Any boulder connections? IIRC bigreddmachine is there.  
**\<sarang>** and the zcash folkz  
**\<diego[m]>** ajs and I had a similar idea a while back, so if you need any help from Monero Community, We can see what we can do. Maybe come early to decorate. :P  
**\<suraeNoether>** she's organized conferences for pharma companies and doctors and stuff like that before, and she's chatting with me pro bono about it  
**\<suraeNoether>** anonimal: zcashco world headquarters is in boulder. :P heh.  
**\<suraeNoether>** mike from the moneromonitor podcast is out there too  
**\<sarang>** I always pictured them having their headquarters in a mountain  
**\<suraeNoether>** anyway, i'm glad to see such positive responses  
**\<sarang>** or a lighthouse or something  
**\<anonimal>** oh my  
**\<suraeNoether>** i've been watching venture brothers. spiderskull island ftw  
**\<sarang>** I'm telling ya, buy a Monero jet and I'll fly all the attendees there  
**\<diego[m]>** Why don't we have it at a resort? :D  
**\<suraeNoether>** sarang has a pilot's license, he isn't kidding.  
**\<anonimal>** lol aspen  
**\<sarang>** Denver is a resort... THE LAST RESORT  
**\<sarang>** burn  
**\<suraeNoether>** diego[m]: actually if we do summer, i was considering estes park  
**\<suraeNoether>** it's a summer town in the middle of the mountains and there is a YMCA there that hosts huge huge conventions eveyr year  
**\<suraeNoether>** but the cabins don't have good wifi, and i feel like that's a really really big requirement  
**\<suraeNoether>** they *do* have wifi  
**\<suraeNoether>** just not *great* wifi  
**\<sarang>** Is it encrypted wifi? Or is it like the Stanford conference?  
**\<sgp>** Gigabit ethernet #1 consideration lol  
**\<anonimal>** We could do black hawk but don't get me gambling...  
**\<sarang>** Which for some reason had insecure wifi that sucked ass  
**\<suraeNoether>** sarang: it's far less secure than the stanford. :P  
**\<suraeNoether>** anyway, i'm super happy to see this sort of response  
**\<anonimal>** We could turn black hawk into the next defcon  
**\<sgp>** @surae I I would go well out of my way to go to a Monero conference  
**\<anonimal>** ...  
**\<anonimal>** X)  
**\<sarang>** We should settle on a date sooner rather than later  
**\<sarang>** Or at least a couple of options so people can plan  
**\<suraeNoether>** sarang: we'll try to get that hammered out before the end of the month  
**\<suraeNoether>** one thing, though  
**\<anonimal>** Is summer an option?  
**\<suraeNoether>** i just don't want it to overlap any big known conferences, and i want to avoid late september-through-december  
**\<sarang>** righto  
**\<diego[m]>** Sounds fun.  
**\<sarang>** We should also talk about the scope of talks, so folks from other projects have a good sense of what they'd be in for  
**\<anonimal>** Let's do it after defcon.  
**\<gingeropolous>** line by line presentation of the monero code  
**\<diego[m]>** We're not talking for this year, though, right?  
**\<sarang>** Have it scrolling in the background  
**\<anonimal>** People will already be out in the U.S.  
**\<sarang>** like the Matrix  
**\<sarang>** Yeah not this year  
**\<suraeNoether>** diego no, 2019  
**\<suraeNoether>** OH MY GOD i just checked my protonmail after BPASE, i'm swamped  
**\<suraeNoether>** ok, this meeting is either over or can continue without me  
**\<suraeNoether>** peace out brothers\~!  
**\<suraeNoether>** if anyone has any questions, please email me at suraeNoether@Protonmail.com (I'll be there for the rest of the day apparently)  
**\<sgp>** I couldn't find the recording, but here's hyc's slides https://fosdem.org/2018/schedule/event/monero/attachments/audio/2585/export/events/attachments/monero/audio/2585/20180204_FOSDEM_Monero.pdf  
**\<sarang>** cheers  
**\<sgp>** Only one thing from me. After the chaos of bulletproofs and multisig calms down, I would like to encourage future research in the impact of ringsize and churning. Either these need more research, or we need better ways of communicating these concerns to people https://www.reddit.com/r/Monero/comments/7v601j/skepticism_sunday_february_04_2018/dtq9tnt/  
**\<sarang>** I agree  
**\<sgp>** Also we're discussing increasing the minimum ringsize without really knowing what the tangible benefits are  
**\<sarang>** Fortunately we have good space savings we can use to our advantage  
**\<sarang>** if we decide to move there  
**\<suraeNoether>** sgp: I agree, and actually I've been thinking about that.  
**\<dEBRUYNE>** I think the discussion doesn't pertain to whether it has tangible benefits  
**\<dEBRUYNE>** It's whether it's significantly outweighs the trade-offs  
**\<suraeNoether>** \^  
**\<dEBRUYNE>** it significantly\*  
**\<sarang>** soon STARKs will save us all  
**\<dEBRUYNE>** I think an increase to 10 + making it static is worth the trade-off though  
**\<sarang>** Having a tested model will be essential  
**\<sarang>** Otherwise we'd just be pulling numbers out of our ass  
**\<dEBRUYNE>** What should be tested?  
**\<dEBRUYNE>** I mean, which variables  
**\<sarang>** Well I think we need to be able to quantify what we consider the weaknesses or attack vectors, couple that with some cost function, and work from there  
**\<sarang>** I don't have the answer  
**\<sarang>** But I think it's the approach we should take if possible  
**\<sarang>** Oh one quick addition  
**\<sarang>** One of the non-OSTIF audit groups checked with their lawyers  
**\<sarang>** They won't let us publish their name or statement of work in advance  
**\<sarang>** I think that's far enough outside of our philosophy for this review that it takes them out of the running, unfortunately  
**\<anonimal>** +1  
**\<sarang>** Once we've formally turned them down, I can say who they are  
**\<sarang>** Process on the other groups is moving forward, albeit delightfully slowly  
**\<sarang>** More details as I get them  
**\<sarang>** Although I'm not too worried, since we just added batch verification anyway, and that needs to go into the technical paper that the reviewers will get  
**\<dEBRUYNE>** \<sarang> They won't let us publish their name or statement of work in advance \<= Can you elaborate on this?  
**\<sarang>** So, I told all the prospective groups that we want to publicly discuss all SoWs and prices prior to funding, so we can make an informed decision  
**\<sarang>** As well as share the results of the audit(s)  
**\<sarang>** SoWs being important since they explicitly outline the scope of the review  
**\<sarang>** https://www.irccloud.com/pastebin/RAEbSR24/  
**\<sarang>** This is the email from their rep  
**\<sgp>** @dEBRUYNE I totally agree that we should weigh the benefits and cons. We just need more justification than "10 is a larger number than 5"  
**\<dEBRUYNE>** sarang: I see. Was this group favored qualitively? If so, perhaps we can think about a work around.  
**\<sarang>** They're a well-established group  
**\<sarang>** I have no doubt that they would do a thorough and correct review  
**\<dEBRUYNE>** Ok. Let me put some thoughts into this  
**\<sarang>** But I don't like the idea that I'm the only one (or part of a non-public group) that decides this  
**\<sarang>** Once I get final word from all OSTIF prospects, we'll have a better idea of any differences in scope  
**\<sarang>** What they care about more than absolute price estimates is their rates  
**\<sarang>** FWIW  
**\<suraeNoether>** on a slightly different note, all the slides and videos of the talks at BPASE this year are online here: https://cyber.stanford.edu/bpase18 \<--- I highly recommend @roasbeef's talk, but slow it down to 50% speed  
**\<sarang>** lol  
**\<sarang>** it's true  
**\<sarang>** He would make a fantastic auctioneer  
**\<anonimal>** What you're asking for is completely within the realm of open source principles. How can they call themselves OSTIF.  
**\<sarang>** anonimal: the group I linked was not an OSTIF group  
**\<sarang>** It was a group recommended by fp  
**\<anonimal>** Oh, "non-OSTIF", I see now, thanks.  