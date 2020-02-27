---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-03-12
summary: BP audit, Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / surae
---

# Logs  

**\<suraeNoether>** So, greetings everyone!  
**\<MoroccanMalinois>** Hi  
**\<iDunk>** Hi  
**\<sarang>** yo  
**\<suraeNoether>** Agenda today is 1) hello, 2) BP audit update 3) other stuff Sarang has been reading/working on, 4) stuff I've been working on, 5) obligatory update on MAGIC, 6) anything anyone else wanna talk about?  
**\<suraeNoether>** oh, I also want to talk about: how to educate our users about proper key usage and proper privacy practices  
**\<ArticMine>** hi  
**\<endogenic>** o/  
**\<suraeNoether>** so, sarang: BP audit update? you gave us a brief one earlier  
**\<suraeNoether>** but let's recap for folks who weren't here  
**\<sarang>** sure thing  
**\<sarang>** We have raised funds for 3 audits: Benedikt Bunz, QuarksLab, Kudelski  
**\<sarang>** I'm finalizing contracts with them  
**\<sarang>** We will likely need to do supplemental funding later due to market tomfoolery  
**\<sarang>** I will be working with the groups during their audits, which will take place between this months and June  
**\<sarang>** That's the brief version  
**\<endogenic>** may i ask a question regarding our auditing efforts in general?  
**\<sarang>** plz  
**\<endogenic>** or should i wait til end?  
**\<sarang>** fire away  
**\<endogenic>** so i'm also wondering about vulnerabilities in the code in general - i know we have the bounty system for that but it's not got quite the same incentive system  
**\<endogenic>** just wondering if it makes sense to apply this model to other parts of the code  
**\<sarang>** Hiring auditors, you mean?  
**\<endogenic>** yeah  
**\<sarang>** I'm seeing more and more support for it, yes  
**\<endogenic>** or an FFS for an auditor  
**\<suraeNoether>** endogenic: so there is this clever idea  
**\<sarang>** At least for components of the code, like multisig or BPs that have a defined scope  
**\<suraeNoether>** that greg maxwell and blockstream are using for their libsecp256k1 library  
**\<suraeNoether>** which has a badass test suite  
**\<endogenic>** sarang: right i suppose i'm thinking more from the security and cracking standpoint .. like, can we confirm what % of data input fuzzing we've done and where / if / how the code fails  
**\<endogenic>** etc  
**\<suraeNoether>** where they aren't providing bug bounties for the actual library, but for the unit test suite: if you can upload a new unit test that the current system fails, and yet still passes all current unit tests, you get the bounty  
**\<sarang>** That's more of a question for moneromooo I think  
**\<endogenic>** that sounds interesting surae  
**\<suraeNoether>** it incentivizes things very nicely  
**\<suraeNoether>** but it requires a really great test suite  
**\<sarang>** yes indeed  
**\<moneromooo>** I don't think we can easily determine a percentage of inputs for fuzzing.  
**\<endogenic>** well that was just one example  
**\<endogenic>** i cant take responsibility to define all the jobs an expert cracker would do :P  
**\<suraeNoether>** if we are going to start putting money into auditors, then we should consider putting a proportion of that toward beefing up our test suites. perhaps require that auditors propose new unit tests, or something along those lines, in addition to a thumbs up/down and a list of recommended changes  
**\<endogenic>** yeah  
**\<endogenic>** i mean we want to record the work which was done  
**\<endogenic>** and tests can be nice way to do that  
**\<sarang>** yes  
**\<suraeNoether>** and that way, perhaps after a year or two, we will have a test suite sufficiently beefy to incentivize properly  
**\<suraeNoether>** i know its' kind of a long-term plan  
**\<sarang>** Too bad it's sexier to run an FFS for an auditor than for writing test suites :(  
**\<suraeNoether>** short of paying some smart people to audit our whole lie-berry and come up with test suites across the board  
**\<suraeNoether>** yeah, no kidding  
**\<endogenic>** sarang it can be pitched in the same way  
**\<endogenic>** they audit by the very activity  
**\<rehrar>** do unit tests require coding? (sorry if this is a stupid question)  
**\<endogenic>** yep  
**\<sarang>** yes  
**\<rehrar>** blerg  
**\<endogenic>** it's not that bad tho rehrar  
**\<endogenic>** it's more about understanding what you are testing for  
**\<sarang>** The goal is to have complete scope  
**\<rehrar>** it is when my coding is 1/10 :D  
**\<sarang>** Any questions on the current audit that anyone has?  
**\<sarang>** Kudelski will be the first to go  
**\<moneromooo>** When does the C++ based one start ?  
**\<sarang>** They're available this month  
**\<moneromooo>** More precisely ?  
**\<sarang>** TBD once we sign with them, but I can check on more specific dates if you need them  
**\<sarang>** Anything in particular?  
**\<suraeNoether>** ok, well  
**\<ArticMine>** are all the audits going through ostif?  
**\<sarang>** Two of them are  
**\<sarang>** Benedikt will be paid directly in XMR  
**\<suraeNoether>** ArticMine: I believe Buenz is independent  
**\<suraeNoether>** ^  
**\<sarang>** OSTIF's role is just to handle the payment  
**\<sarang>** They'd appreciate being thanked in our materials for helping to organize the groups and handle the exchange  
**\<suraeNoether>** okay, if there are no more questions on BPs  
**\<sarang>** So this will be an ongoing process over the next few months  
**\<sarang>** expect little news until someone finishes  
**\<suraeNoether>** Sarang: what else have you been reading/doing?  
**\<sarang>** I've been reviewing the latest multisig draft from suraeNoether  
**\<suraeNoether>** ok in that case we will stop bringing it up every meeting for 3 weeks or so  :P  
**\<sarang>** prepping a submission for defcon china  
**\<suraeNoether>** that's cool  
**\<sarang>** prepping a talk in portland on monero security  
**\<sarang>** reading up on some papers involving mixing and ring representations  
**\<sarang>** hoping to get back to some math shortly for pippenger's algorithm  
**\<sarang>** for speedier multiexp  
**\<sarang>** more administrative work lately, unfortunately  
**\<sarang>** I submitted a monthly report recently that details other efforts  
**\<sarang>** linky linky https://forum.getmonero.org/9/work-in-progress/89005/funding-for-sarang-at-mrl-for-q1-2018?page=&noscroll=1#post-94324  
**\<suraeNoether>** any other questions for sarang?  
**\<suraeNoether>** I'd like to remind the crowd that sarang's FFS funding round I believe has been posted, although I'm not sure if it's moved to Funding Required yet  
**\<rehrar>** There's quite a few things that need to be moved to funding required  
**\<rehrar>** we should all poke fluffypony and luigi1111  
**\<sarang>** Mine is still in Open and not in Funding yet  
**\<sarang>** There hasn't been much activity regarding it anyway  
**\<sarang>** Not a huge rush. I write them in advance to allow for discussion if needed  
**\<sarang>** How about suraeNoether? Your turn  
**\<suraeNoether>** 4) Stuff I've been working on. Multisig paper, formal documentation work for monero, and a formal description of EABE attacks.  
**\<suraeNoether>** For the multisig paper, I just received notes from sarang and I'll be composing a draft for review by someone outside of MRL.   
**\<sarang>** suraeNoether: I'll have remaining notes added to your doc this afternoon  
**\<suraeNoether>** right now I need to copy-paste some intro/notation stuff from a previous version of the paper, fix some references, stuff like that, and then take sarang's changes into account  
**\<suraeNoether>** great thanks  
**\<suraeNoether>** Once the document is a little less ugly, i'll link to it again  
**\<sarang>** Now on to MAGIC per the agenda?  
**\<suraeNoether>** I've been attempting to write up a formal description of the statement being proven in a given monero ringCT authentication, for two reasons. For one thing, I think that our approach for threshold multisig could be generalizable in a way that may make it fun to publish. But I'm not sure if this description has appeared before in the literature, so I'm looking around and contacting some folks  
**\<suraeNoether>** For another reason, because I haven't seen it written out explicitly before.  
**\<suraeNoether>** And the EABE attack is concerning enough to me to be writing up some statistical arguments about churn (sgp\_[m] ping)  
**\<suraeNoether>** i'll be linking all these documents in the next week  
**\<suraeNoether>** so far it looks like 3 sketches of possible papers for publication, even if not as peer reviews, as whitepapers  
**\<suraeNoether>** after multisig is running  
**\<suraeNoether>** anyway, onto MAGIC  
**\<suraeNoether>** i feel like folks have a lot of questions about MAGIC, so I'll ask if anyone has any questions  
**\<sarang>** Question I've seen is: what types of things will it fund, and how will they be determined?  
**\<luigi1111w>** sarang moved  
**\<luigi1111w>** moneromooo ready for funding  
**\<rehrar>** thanks luigi  
**\<sarang>** ty luigi1111w  
**\<suraeNoether>** Good question. The overall scope will be: 1) scholarships to undergraduates in the US 2) grants to graduate students in the US, 3) grants to researchers in the US, 4) grants to schools globally with an emphasis on secondary and tertiary education  
**\<suraeNoether>** how much of that we can actually do depends on our funding  
**\<suraeNoether>** oh 5) sponsoring tehcnical conferences in cryptocurrencies is also on that list  
**\<sarang>** suraeNoether: why restrict scholarships and grad grants to US?  
**\<suraeNoether>** so our first year, my goal is to provide a few scholarships, sponsor the first monero conference, and fix up a school in south africa  
**\<rehrar>** what other ways of funding are you searching for besides FFS stuff?  
**\<endogenic>** do you have any criteria to decide what is good research that gets funded?  
**\<suraeNoether>** sarang: because i feel like we already are going to have lots of applications  
**\<endogenic>** will decision making ever get delegated?  
**\<sarang>** The org will need established principles for determining its choices  
**\<sarang>** to stay transparent and accountable to its donors  
**\<suraeNoether>** rehrar: we'll be soliciting funding and grants from as many places as possible. one delightful property of non-profits in america: anything they spend that isn't on overhead must go to charitable purposes or other non-profits. so non-profits like the bill & melinda gates foundation give lots of money to other non-profits.  
**\<sarang>** rehrar: I mentioned the kernel of this idea to some fund managers, who said their groups were interested in supporting nonprofits; this may lead to new funding avenues  
**\<rehrar>** that's pretty awesome  
**\<suraeNoether>** endogenic: I haven't started thinking about the research end of MAGIC yet because i'm assumign the first year we won't necessarily get enough money to manage to give out substantial research grants  
**\<endogenic>** sorry replace research with project  
**\<endogenic>** i misspoke  
**\<sarang>** Sounds like there would be a clear delineation between scholarships and grants  
**\<suraeNoether>** ah yeah well in general, like sarang says, we need established principles for determing our choices, and this is something that needs to be discussed at our board meetings. we want to be very public, and i want to make our board meetings available as youtube videos or whatever... pending agreement by the other board members (some of whom have not yet been picked)  
**\<suraeNoether>** sarang yes  
**\<sarang>** Grants would have the expectation of deliverables  
**\<sarang>** Scholarships are to increase the talent pool and help perhaps underrepresented student groups become involved in the space  
**\<suraeNoether>** scholarships for undergrads, it is my intention, to mainly be aimed at folks in law or economics or computer science or math. Not exactly the traditional STEM mix. however, i don't want an undergrad to worry about losing their money if they decide to study graph theory instead of bitcoin  
**\<suraeNoether>** sarang ^ yep  
**\<suraeNoether>** i kind of want the schoalrships nearly strings-free  
**\<sarang>** However, the devil's in the details  
**\<suraeNoether>** as far as funding goes, though, i'm matching up to 5% of donations up to 50 XMR for this venture. If we manage to get 1000 XMR, I donate 50 XMR to the cause and we'll have 1050 XMR for the first year  
**\<sgp\_[m]>** suraeNoether a little late to chime in, but I would love to help you with the EAE paper if there's any way I can  
**\<suraeNoether>** sgp\_[m]: PM me  
**\<suraeNoether>** and if we can manage that much XMR the first year, we can pay for like 5 scholarships for undergrads, 2 grad student grants, fix up a school or two in ZA, and host the first monero conference (with no entry fee)  
**\<sarang>** This is an interesting pilot project that could take many different directions  
**\<suraeNoether>** and still have some XMR leftover for the next year  
**\<sarang>** I think it'll important to keep the scope balanced between too narrow and too broad  
**\<suraeNoether>** my primary concern right now is determining criteria for handing out scholarships  
**\<sarang>** An established mission is gonna be essential to establishing and maintaining this direction  
**\<suraeNoether>** personally i think the best students are the ones who sucked the first year or three and then completely turn around, but that's just rewarding students with a past similar to myself  
**\<rehrar>** how many board members and who is under consideration?  
**\<rehrar>** will you guys need a website?  
**\<suraeNoether>** yes  
**\<sarang>** You'll need to use the application process to determine who is excited about the crypto space and not just eager to hop on a money train  
**\<rehrar>** msvb-lab will get mad at me if I talk about other people's websites before I finish Kastelo  
**\<sarang>** I wouldn't expect the model student to know everything about this space, but I want to ensure that the recipients are those with a strong desire to succeed in it for good reasons  
**\<msvb-lab>** rehrar: Yes, very mad. It's our nature.  
**\<suraeNoether>** me, sarang, the operations manager from Globee, my advisor at Clemson university (Jim Coykendall), my wife are going to be the first board members.  
**\<sarang>** rehrar: we'll advertise with hip videos on FaceSpace and SnapTime and InstantGram where students like to hang  
**\<suraeNoether>**  if anyone has an issue with my wife on the board, MAGIC was partly her idea, she has 7 years experience teaching in higher education, and she isnt' being paid  
**\<sarang>** Should there be broader representation?  
**\<suraeNoether>** I'd be happy including more board members  
**\<sarang>** Or is this sufficient?  
**\<rehrar>** I'm a Mexican if we need diversity :P  
**\<sarang>** I'm not leaning one way or another, just wondering if it is  
**\<suraeNoether>** rehrar:  you are also in NM yeah?  
**\<rehrar>** I am  
**\<suraeNoether>** and NM has liiiike some serious education problems  
**\<suraeNoether>** iirc  
**\<rehrar>** Come down and we'll have a party trip to Juarez  
**\<rehrar>** yes  
**\<rehrar>** we really do  
**\<suraeNoether>** WELCOME ABOARD REHRAR  
**\<rehrar>** I'm working on this myself actually in my free time  
**\<rehrar>** We're like the second worst in the nation  
**\<suraeNoether>** cool email me at surae@getmonero.org so I can get you on a list  
**\<suraeNoether>** okay, lastly  
**\<rehrar>** I'm on a lot of NSA lists already, but sure.  
**\<endogenic>** yes NM does  
**\<endogenic>** rehrar is the only beacon  
**\<rehrar>** endogenic came here and saw the people sobbing in the streets  
**\<suraeNoether>** okay, lastly: I wanted to talk about how to educate the community about key safety with MoneroV and best practices (currently, I'm not convinced churn is non-negligibly helpful under a very specific threat model)  
**\<rehrar>** What about a short one minute video?  
**\<suraeNoether>** would be very convenient to link to  
**\<rehrar>** We can put it on our soon-to-come media.getmonero.org as well as youtube and stuff  
**\<suraeNoether>** i've been thinking about starting whiteboard youtube videos explaining how cryptocurrencies work. this could be the first one.  
**\<rehrar>** suraeNoether, talk with me later about Privacademy.  
**\<nioc>** something that would allow an idiot like me to know exactly what to do  
**\<sarang>** Just paste your private keys here. We'll print them out and put them in a safe for you  
**\<Osiris1>** ;)))  
**\<sarang>** OR DON'T  
**\<Osiris1>** nice  
**\<nioc>** thx  
**\<ArticMine>** My concern with this is that we do not end up protecting MoneroV from the claws of the bear  
**\<suraeNoether>** nioc, looks to me like you're a pretty smart fella, if the past few years have shown us anything about anticipating change. :P ok. Does nayone have any questions, concerns, comments? I'll be posting my next funding request this afternoon. I have a hard time gauging the mood of an IRC chat room  
**\<suraeNoether>** ArticMine: care to elaborate?  
**\<endogenic>** i heard nioc is a cabbage  
**\<endogenic>** literally  
**\<sarang>** I don't have a good sense for how many users will fall for V  
**\<ArticMine>** Basically i see MoneroV as an economic attack. If nobody claims their MoneroV then it price will be significantly inflated  
**\<ArticMine>** So we need a process for people to claim, their MoneroV safely and without impacting their own and other's privacy and to be blunt at the appropriate time dump the MoneroV on the market  
**\<ArticMine>** That is where the claws of the bear come in  
**\<sarang>** What do you mean ArticMine? Spending an existing output on the V chain with random ring is immediately deanon  
**\<sarang>** and contributes to the eventual deanon of your ringmates  
**\<rehrar>** I see what he's saying though. If not a lot of people claim theirs, then it's a lot of immediate 'holders' which might artificalily inflate the price  
**\<ArticMine>** The only way I can see this working is a spend on both chains with a significant number of overlapping rings  
**\<rehrar>** which in turn, might make it seem like MoneroV was somewhat successful  
**\<rehrar>** which also in turn might make other people try to do something similar with Monero  
**\<ArticMine>** If the price of MoneroV crashes then this becomes a powerful deterrent for the future  
**\<suraeNoether>** ArticMine: i disagree. airdrops are designed to crash like that  
**\<sarang>** Tough part is that a given user might not care about their transaction being deanon. But it's convincing them that it contributes to others that's trickyy  
**\<suraeNoether>** they aren't designed for egalitarian long-term pegs  
**\<Olufunmilayo>** sarang, I thought (mind you I am late to the party), that spending a output on both chains with the same ring was theoretically "safe-ish" to some extent  
**\<suraeNoether>** Olufunmilayo: only if all your ringmates do the same, and all their ringmates, etc  
**\<sarang>** And their code needs to support it  
**\<ArticMine>** It is but trike to do  
**\<sarang>** they've shown they don't GAF  
**\<ArticMine>** Then we will have to release a patched Monerov  
**\<ArticMine>** It does not have to be "official"  
**\<sarang>** One idea I like is making it easier to fork the Monero codebase and blockchain safely  
**\<rehrar>** \*shrug\* I may be thinking a bit casually here, but since this is the first time something like this is happening, and we're already going to be getting our upped ringsize before the fork, I think we can somewhat safely wait this one out and see how it plays  
**\<sarang>** So for future attempts, they'd have to actively break that safety  
**\<sarang>** and then we can give them bad publicity for actively hurting users  
**\<suraeNoether>** i wonder if they doubly-hash their key images. so you check if pHp(P) is in the key image set or if pHp(pHp(P))  
**\<suraeNoether>** or if they could rather  
**\<ArticMine>** By the way the network effect is less because of spent RingCT ouputs that will not be compromised  
**\<rehrar>** Alright, I gotta split. Thanks for the meeting. Catch you guys later  
**\<Olufunmilayo>** ArticMine, what good would a patched monerov be if the core team is not behind monerov? Also, suraeNoether, time would also be a factor yes? both have to be done simultaneously  
**\<ArticMine>** The trouble is that the same keys are used on both chains  
**\<ArticMine>** It will allow those who wish to claim and sell their MoneroV to do so safely.  
**\<suraeNoether>** oh no the double hash doesn't work unless all previous ring sigs do it that way. bah.  
**\<ArticMine>** Not all but enough to provide a good mix  
**\<ArticMine>** and that means pre fork mixins will only work  
**\<Olufunmilayo>** ArticMine, you will then have two competing versions of monerov competing against each other. I do see the benefit but \*shrug\*  
**\<suraeNoether>** okay, well, unless folks have more questions or suggestions, i think our best bet is simply to put out a video that says "don't claim your MoneroV, here is why."  
**\<ArticMine>** No the patch can be compatible with the MoneroV consensus  
**\<suraeNoether>** because the math to patch monerov or to protect monero isn't obvious to me right now  
**\<ArticMine>** I am not sure if there is a solution  
**\<iDunk>** It's mooo's code to make it use the ringdb, AFAIUI.  
**\<Olufunmilayo>** suraeNoether, only other thing would be to I guess track monerov tx's to see just how bad it is haha  
**\<sarang>** We will  
**\<suraeNoether>** Okay, well  
**\<suraeNoether>** good meeting everyone  
**\<suraeNoether>** 1h10 minutes, not too bad  
**\<suraeNoether>** OH OH   
**\<sarang>** oh  
**\<hyc>** oh?  
**\<suraeNoether>** anyone want to volunteer to make PRs to my github with meeting logs? I'm literally never going to do it  
**\<suraeNoether>** i intend to every week, but i think i need to practically accept that it's not going to happen. :P  
**\<sarang>** https://www.youtube.com/watch?v=ZXsQAXx\_ao0  
**\<suraeNoether>** ok  
**\<suraeNoether>** fine  
**\<suraeNoether>** lol  
**\<suraeNoether>** \\meeting  
**\<sarang> \</meeting>**  
**\<suraeNoether>** https://github.com/b-g-goodell/research-lab/tree/master/meta/research-meeting-logs  
**\<suraeNoether>** just started a folder called meta rather than cloning the meta repo for The Monero Project.  
**\<suraeNoether>** i suppose i should clone it and make pushes appropriately  
**\<suraeNoether>** but i'll dot hat later  
**\<suraeNoether>** ack its not complete  
**\<suraeNoether>** ok there we go: https://github.com/b-g-goodell/research-lab/blob/master/meta/research-meeting-logs/ResMeetLogs-12-Mar-2018.txt  
**\<suraeNoether>** bbl yall~  
