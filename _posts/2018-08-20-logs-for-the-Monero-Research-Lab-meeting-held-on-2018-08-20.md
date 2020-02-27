---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-08-20
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / surae
---

# Logs  

**\<sarang>** lets begin  
**\<suraeNoether>** fluffypony: knaccc luigi1111 sarang ajs[m] andytoshi anonimal ArticMine binaryFate chachasmooth dEBRUYNE endogenic gingeropolous hyc iDunk isthmuscrypto john\_alan jwinterm knaccc kerber m2049r[m] moneromooo MoroccanMalinois needmoney90 nioc philkode pigeons rehrar[m] rrol[m] scoobybejesus sgp\_1 sgp\_[m] smooth sneurlax stout stoffu UkoeHB unknownids vtnerd waxwing   
**\<suraeNoether>** let's hang out for 2 minutes and we'll start  
**\<sarang>** careful, mass mentions can get you autobanned  
**\<sgp\_1>** hello  
**\<iDunk>** hi  
**\<suraeNoether>** sarang i've been doing it for a year. \*shrug\* you mean from freenode? or from this channel?  
**\<sarang>** freenode IIRC  
**\<sarang>** due to all the recent spam  
**\<scoobybejesus>** hi  
**\<suraeNoether>** hi everyone  
**\<sneurlax>** Hey, I have the code to provide mining-pool-reused outputs in the format moneromooo requested up at github.com/sneurlax/xmreuse. I don't know if or how there's a way to add to the blackball database from GET/HTTP calls but that's what I was asked for. I need to update the outputs, I think, and add more pools over the next few days, but it's pretty straightforward...  
**\<sneurlax>** The repo is private at the moment if I recall correctly. Drop github names to invite or I'll make it public whenever y'all say to  
**\<MoroccanMalinois>** hi  
**\<suraeNoether>** Welcome to the first post-defcon MRL research meeting. Agenda today is simple. 1) Greetings (done!) 2) Does anyone have any items they want to add to the agenda? 3) Let's catch up on what everyone is doing.   
**\<sneurlax>** Sorry to dump and I have to have an afk meeting now but I'll catch up on what I missed after.  
**\<suraeNoether>** sneurlax: great, thanks!  
**\<sgp\_1>** sneurlax I would like to be invited if possible. I'm added to xmreuse-firebase but not xmreuse  
**\<suraeNoether>** okay, as far as stuff \*i\* am doing/want to do: depending on contact from one person, we'll be putting multisig up on IACR. in the meantime we can publish it as MRL-7 or whatever we like as a technical note, or as an author version or something like that...  
**\<suraeNoether>** but that depends on whether the journal we decide upon is greedy and has a concurrent publication policy  
**\<sneurlax>** Absolutely. Anyone that wants to can be, or just let me know to flip it public. Later tho  
**\<endogenic>** weww  
**\<suraeNoether>** my first priority is to publish the multisig paper as a peer reviewed document. send, as an MRL bulletin. why? MRL (from my point of view) isnt' interested in drifting toward the publiccation world yet. :P and getting more peer reviewed articles published under the MRL \*name\* is more important than publishing our own articles without review  
**\<suraeNoether>** my second priority this week is sarang's DLSAG paper and some research on side channel stuff  
**\<sarang>** I'll look forward to the DLSAG review; we can push it as an MRL once internally reviewed  
**\<suraeNoether>** my tertiary priorities this week are: discussions about an MRL research assistantship program, and work on the MAGIC non-profit stuff.  
**\<suraeNoether>** i already read it once and i saw no troubles with it, but this time i'm looking at it more closely  
**\<sarang>** What side channel stuff are you researching?  
**\<sarang>** that's a broad area  
**\<sgp\_1>** ooh, let me know if I can help with the assistant research program  
**\<suraeNoether>** the whole \*waves hand\* broad side of the area on \*waves hands more\* this side of the area  
**\<stout>** that assistant research program sounds intriguing by name  
**\<suraeNoether>** so, the MRL research assistantship program... \*sigh\* so like, look  
**\<suraeNoether>** we, as a crowd-sourced open source project, have a fundamental problem with funding things in crypto  
**\<suraeNoether>** and that is: if anyone wants to do anything organizational in nature, they eat the taxes  
**\<suraeNoether>** if i want to host a job search for MRL, for example, well.. we aren't a company, someone needs to hold the cash, and spend it, for making websites and putting up job postings, etc  
**\<suraeNoether>** if it's an individual, it's all individual income, capital gains and losses... it's insane to try to do it that way legally  
**\<sarang>** Not really, just annoying  
**\<sarang>** that's how we operate  
**\<suraeNoether>** well, the hiring example isn't a good example, but hosting a conference \*is\* a good example  
**\<sarang>** yes  
**\<suraeNoether>** that's tens of thousands of dollars worth of liability, possibly hundreds depending on size  
**\<suraeNoether>** in general, though, there are lots and lots of little things that all add up to "SOMEONE SHOULD START A FREAKING COMPANY HERE JUST TO DIRECT FUNDING THROUGH." and that ... is... i'm a math phd, i'm not a business dude. it's not appealing to me  
**\<suraeNoether>** so something like a research assistantship program is an idea that i've been kicking around with sarang and fluffypony  
**\<suraeNoether>** and some others  
**\<suraeNoether>** where we invite graduate students from across the country to apply. the core team and MRL go through applications and short list us down to 3-5 candidates. then each of those candidates starts their own FFS  
**\<suraeNoether>** and either the FFS sends funding directly to the students, or sends it directly to their university, leaving all the liability on the student and/or the school  
**\<stout>** doesn't sound like a solution for the conference problem, but I like the step nonetheless  
**\<suraeNoether>** this way, grad students who were in the same position sarang and i were in when we first srtarted at MRL can apply, get some funding, and become monero fanatics who will volunteer their time and blood forever. :P  
**\<suraeNoether>** no, not a solution to the conference problem  
**\<sarang>** For the conference, outside groups have come forward and expressed interest in managing/funding  
**\<suraeNoether>** yeah, i think fluffypony is attempting some solutions to that in a roundabout way  
**\<suraeNoether>** but, again, we're kicking ideas around  
**\<sarang>** yep  
**\<stout>** Any way we can help, specifically in the research assistant thing?  
**\<sarang>** I also have it on good authority that a research assistant FFS would have no trouble being funded  
**\<suraeNoether>** well, one thing we could use is a secure survey/application system.  
**\<sarang>** stout: I think good resources for job postings would be helpful too  
**\<suraeNoether>** google forms is criticized as being ... google, obviously  
**\<sarang>** Cast a wide net for quality applicants  
**\<suraeNoether>** surveymonky allegedly leaks IP addresses, etc  
**\<suraeNoether>** my understanding is that thunderosa on reddit has made secure survey software for monero before, so that'd be interseting to look into  
**\<endogenic>** use blockchain  
**\<sgp\_1>** When using Google you give the info to Google, but only form info is shared with the owner  
**\<suraeNoether>** as far as advertising and finding sources for job postings, that part is easy. we can literally just send out an advertising email to every single computer science and math department in the US and europe. no problem. that's not hard, and there are lists for things like that.  
**\<sarang>** "to every single department" o\_0  
**\<suraeNoether>** why not?  
**\<sarang>** it sounds tough  
**\<suraeNoether>** there are list-servs for it  
**\<sarang>** hmm  
**\<suraeNoether>** clemson got spammed constantly by such advertisements  
**\<suraeNoether>** except it wasn't really spam  
**\<suraeNoether>** it was legit grant and scholarship application stuff  
**\<suraeNoether>** besides: i don't want to spend time narrowing down which schools to advertise to, for a bunch of reasons  
**\<sarang>** https://www.youtube.com/watch?v=yDbvVFffWV4  
**\<sarang>** righto  
**\<suraeNoether>** yeah, that's ... surprisingly how clemson was. so many students were like "GOSH DUDE I NEED LIKE 3 MORE SEMESTERS TO GRADUATE, LEAVE ME ALONE!"  
**\<suraeNoether>** but it was all industry jobs. :P  
**\<suraeNoether>** anyway  
**\<suraeNoether>** the thing is about google forms  
**\<suraeNoether>** 90% of grad students already have to use google and their products  
**\<sgp\_1>** Yeah, I think Google Forms is totally fine  
**\<suraeNoether>** i don't want to discourage people who are very privacy-centric from applying by using google forms, but i also know that most of our applicants really won't care too much  
**\<sarang>** I use it for anonymous student feedback all the time  
**\<stout>** Not a fan.  
**\<sarang>** OK, they can email the info to us as an alternative  
**\<sarang>** ?  
**\<sgp\_1>** good  
**\<suraeNoether>** they can always drop an encrypted blob into the google form, tbh, but then we have to decrypt it in a virtual box or something, things get annoying fast. :P  
**\<sarang>** let's not complicate things too much  
**\<sarang>** if we can help it  
**\<stout>** Yeah, I feel google forms or not is just a minor point right now.  
**\<stout>** Might be wrong, of course.  
**\<sarang>** anyway, any other big info along these lines to share?  
**\<suraeNoether>** wait, just to be clear: does that mean we have a weak consensus for this first round of applicants that google forms should be good enough, but if folks want to apply in a more private way they should try to arrange to do so with our protonmails or something like that? is everyone chill with that, even if you aren't a google fan?  
**\<sarang>** It really comes down to how you end up storing data, IMHO. If you put the PM data into a Google sheet, the applicants gain nothing  
**\<suraeNoether>** true. that.  
**\<suraeNoether>** the most vocal statement so far about this is stout saying "not a fan" so i'm guessing everyone's pretty chill with this approach in general for now  
**\<suraeNoether>** we'll leave the discussion open about this for a week or so, then we'll start designing the application i guess  
**\<suraeNoether>** i got nothing else on the MRL RAP   
**\<sarang>** roger  
**\<stout>** Offering an alternative to google always finds my vote, and protonmail is great. I don't object.  
**\<sarang>** I was asked to be on the OSTIF advisory council, so that's a bit of news  
**\<sarang>** gave a local talk on privacy  
**\<sarang>** some lit review  
**\<sarang>** BP follow-up  
**\<suraeNoether>** wow  
**\<sarang>** polynomial stuffs  
**\<suraeNoether>** def do the advisory council  
**\<sarang>** Yeah we had a video meeting last night  
**\<sarang>** It helps them prioritize and set their goals openly  
**\<sarang>** they're doing good work  
**\<suraeNoether>** is OSTIF a non-profit?  
**\<suraeNoether>** IT IS  
**\<suraeNoether>** dude  
**\<sarang>** yes  
**\<suraeNoether>** as a board member of MAGIC i strongly encourage you to network :D  
**\<sarang>** One of the duckduckgo leads is on the board, among others  
**\<sarang>** a good group  
**\<stout>** Are you going to take the offer?  
**\<stout>** And congrats, of course :)  
**\<sarang>** It's an informal group, but yeah  
**\<suraeNoether>** cool. anyone have any other topics to talk about?  
**\<sarang>** It's good to get our name out there as positive contributors to the bigger community  
**\<suraeNoether>** yes  
**\<sarang>** One topic that came up  
**\<sarang>** over def con  
**\<sarang>** was the idea of "outgoing view key" functionality  
**\<suraeNoether>** ohhh yeah, still thinking about that, but my last attempt did not work the way i wanted it to. did you have ideas?  
**\<sarang>** I am still thinking about ways to do it with the new language afforded by the RuPol scheme  
**\<sarang>** I don't have any solid answers yet  
**\<sarang>** I think it's important to consider this and other topics that may become more relevant as Monero increases in adoption  
**\<sarang>** things like exchange blacklisting, outgoing view, etc.  
**\<sarang>** I also considered accumulator-based schemes off-chain for the view functionality, but you need to still prove that an output was generated correctly  
**\<sarang>** Not that a "me too" attitude matters, but it's clear that Zcash is introducing this to encourage exchange adoption  
**\<sarang>** I need to read up on their Sapling circuit to better understand their approach (I admit to knowing zero about it)  
**\<sarang>** That's all the news I have atm  
**\<sarang>** any thoughts on this would be appreciated  
**\<stout>** I remember some voices on reddit saying that all private keys should be kept private at all times, especially including the view key.  
**\<stout>** I don't necessarily agree with this, just some input.  
**\<sarang>** Yeah and that might be the primary opposition to the idea  
**\<sarang>** The broader question about the nature of our optional transparency  
**\<sarang>** Of course, higher ring sizes counter the effects of known spends  
**\<sarang>** and those are easier now that we're saving space  
**\<stout>** And another counterargument is that if you are forced to give up some privacy, at least have it granular.  
**\<stout>** Else whoever is trying to get info will just straight up force you to give up all private keys.  
**\<sarang>** One original motivation was the idea that an exchange might require account balance information for some clients  
**\<sarang>** as a condition of use  
**\<sarang>** a la bitlicense  
**\<sarang>** I personally am fine with users having the choice of transparency, provided this doesn't harm other users  
**\<sarang>** and provided they can do so with understanding of the consequences  
**\<stout>** I think it's a discussion worth having in a broader scope.  
**\<sarang>** absolutely  
**\<sarang>** and it motivates specific discussions based on particular implementation ideas  
**\<sarang>** Anyone else care to share their recent work?  
**\<sgp\_1>** Not much. I've been working on the blackball tool for the past few days and adding to the fixed ringsize Github issue  
**\<sgp\_1>** I just applied to speak at the NDSU conference next month, so hopefully I am selected  
**\<sarang>** Nice!  
**\<sarang>** Ring sigs?  
**\<sgp\_1>** more general privacy tech  
**\<sarang>** how so?  
**\<sgp\_1>** What privacy technologies are available, what are their use-cases, etc  
**\<sarang>** Nice, broad zero-knowledge systems vs. mixers vs. our approach?  
**\<sgp\_1>** I don't want to talk too much more about mixers since that's told news, but things like tumblebit, CT, ring sig, zkSNARK, etc  
**\<sarang>** Cool, I'd be interested to know what specifically you'll discuss related to snarks  
**\<sgp\_1>** zkSNARKs make sense for "private blockchains" (I hear your complaints) since they are already running in a trusted environment  
**\<sarang>** are you gonna discuss how they operate specifically? scaling w/ circuit size etc?  
**\<sgp\_1>** No, this is a more business-focused audience  
**\<sarang>** got it  
**\<sarang>** I'd say we can adjourn the meeting, but sgp\_1 what are your views on "private blockchains" as they relate to trusted participation?  
