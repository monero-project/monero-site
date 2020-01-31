---
layout: post
title: Logs for the Bulletproofs Meeting Held on 2018-01-21
summary: Bulletproofs, fees, hardforks, and miscellaneous
tags: [dev diaries, crypto, research]
author: dEBRUYNE / fluffypony
---

# Logs  

**\<rehrar>** heyo everyone! Meeting time.  
**\<rehrar>** https://github.com/monero-project/meta/issues/161  
**\<rbrunner>** Hi, was already afraid nobody around or wrong time :)  
**\<rehrar>** this meeting is all about Bulletproofs, and discussing when/how, audit stuff, finance stuff, and more  
**\<rehrar>** fluffypony smooth ArticMine luigi1111 luigi1111w hyc (said he can't be here though) moneromooo gingeropolous endogenic anonimal  
**\<rehrar>** binaryFate sarang suraeNoether stoffu  
**\<sarang>** this channel?  
**\<rehrar>** and feel free to ping anyone else  
**\<rehrar>** oh, we doing it in MRL?  We can if that's what we want.  
**\<sarang>** Either. I couldn't recall which  
**\<sarang>** Your pick  
**\<rehrar>** The Github issue says #monero-dev  
**\<sarang>** k  
**\<rehrar>** and more people can see in Slack and Mattermost since MRL is not relayed  
**\<sarang>** roger  
**\<rehrar>** so first order of business, as always, is 1. Greetings.  
**\<rehrar>** If you're here, say hi. :)  
**\<sarang>** yo  
**\<rbrunner>** Hi  
**\<sgp>** Hi  
**\<dsc>** Hi  
**\<pigeons1[m]>** Hi  
**\<geozdr>** hi  
**\<rehrar>** well, that's a decent group so far. Perhaps a few others will join as time passes.  
**\<rehrar>** dEBRUYNE, Jaquee, vtnerd  
**\<dEBRUYNE>** I am here  
**\<rehrar>** In the meantime, let's begin discussion.  
**\<rehrar>** Does MRL have an update for us regarding audit outreach?  
**\<sarang>** Yes  
**\<suraeNoether>** howdy  
**\<sarang>** So  
**\<rehrar>** and I know hyc isn't here atm, but does someone know about how the mailing list outreach went also?  
**\<rehrar>** (sorry, go ahead sarang)  
**\<sarang>** There are three groups to whom we are reaching out  
**\<sarang>** One is professional auditing/security roups  
**\<sarang>** \*groups  
**\<sarang>** Second is targeted individuals who know the material  
**\<sarang>** Third is volunteers without necessarily any particular credentials, but who want to help the project  
**\<sarang>** All are valuable  
**\<Maxithi>** Perhaps a few others will join as time passes. \<= Joined  
**\<sarang>** Let's start with targeted individuals  
**\<sarang>** Benedikt Buenz is an author on the original paper. He may be available  after Feb 20 and has shown interest but not a commitment yet  
**\<sarang>** Jonathan Bootle is another author. He is unavailable but will pass on word to his colleagues  
**\<sarang>** I reached out to Greg Maxwell who's newly independent, and haven't heard back  
**\<sarang>** It was assumed that we would offer compensation to these individuals for their time, with no details on amount  
**\<sarang>** Next up is volunteers  
**\<sarang>** I've heard from ~5 people who'd like to help out  
**\<sarang>** I'm setting them loose with as much information as I can  
**\<sarang>** This would be on a volunteer basis, but we'd credit them publicly for their help  
**\<sarang>** Finally is the pro groups  
**\<sarang>** fluffypony put me in touch with one group that has given me a quote of $40K  
**\<sarang>** Downsides: it'd be for internal-only reports, but obviously any changes would become public right away  
**\<sarang>** We also couldn't credit them by name  
**\<sarang>** I'm having them check with their attorneys on exactly what we could share  
**\<sarang>** OSTIF works with a lot of different groups, and has been in contact with several, quotes pending  
**\<sarang>** OSTIF's policy is only to work with groups that allow public disclosure  
**\<sarang>** They are also willing to accept XMR (which they transfer to the groups in their currency of choice) and has agreed not to take a cut  
**\<sarang>** Any questions from the group on this wall of info?  
**\<suraeNoether>** were we also not contacted in a cold-call situation?  
**\<sarang>** Yes, one pro group did a cold-call. Turns out OSTIF was in contact with them too, so I'm lumping them in with OSTIF  
**\<sarang>** That cold-call group's rough estimate was $25-35K  
**\<suraeNoether>** oh ok  
**\<rbrunner>** Is that USD 40K in the right ballpark for work like that, from a "pro group"?  
**\<sarang>** So I had expected less, but only because of the limited scope of the BP code; it's relatively small and self-contained  
**\<sarang>** But the quotes are reasonably consistent with each other  
**\<suraeNoether>** rbrunner: it's in line with similar quotes obtained back when we pushed ringct, which was around 50k iirc. so somewhere between 40 and 50k is sort of what i expected, personally... the 25-35k was a little bit of a surprise  
**\<sarang>** and assumes $1-2K per person-day  
**\<rbrunner>** Ok  
**\<sarang>** The timeline would be between 10-25 work days once it starts  
**\<sarang>** Again, OSTIF is still waiting on additional quotes and will report to me when they have them  
**\<rehrar>** So there is at least some interest being generated.  
**\<sarang>** So for now, assume that we definitely have options for pro audits in the range of $25-40K  
**\<sarang>** I also love the idea of getting Buenz or Maxwell to audit individually  
**\<sarang>** but there are no commitments from them, and may not be. They have a lot going on  
**\<sarang>** But  
**\<sarang>** We need to know how to fund this shiz  
**\<rehrar>** alright, and this doesn't include hyc's outreach stuff too, correct?  
**\<suraeNoether>** i believe that's the case rehrar.  
**\<Maxithi>** How did BP get funded?  
**\<sarang>** hyc's outreach to the list has generated a few contacts within the groups I mentioned  
**\<Maxithi>** \*RCT  
**\<rehrar>** ok, great  
**\<suraeNoether>** Maxithi: I believe we chose to not do the audit back then  
**\<sarang>** The RingCT audit didn't happen, IIUC  
**\<rehrar>** maybe MRL can do RingCT audit? :P What would you guys quote us?  
**\<rbrunner>** That about RingCT is ... surprising  
**\<suraeNoether>** rbrunner the math was a lot more straightforward for original RingCT  
**\<rehrar>** Wasn't that one of the reasons for bad blood with Shen?  
**\<rehrar>** anyways, off-topic.  
**\<sarang>** It was suggested that perhaps some general funding might be available, but otherwise an FFS  
**\<suraeNoether>** i think it would be nice to get buenz, but since he's on the late-feb timeline, that conflicts with our hard fork  
**\<rehrar>** I think we should try to raise the full amount with FFS, and anything that is not covered in reasonable time can be covered with the General Fund  
**\<sarang>** We'd be cutting it close to March with any group  
**\<sarang>** And there's no guarantee of an immediate start  
**\<rehrar>** suraeNoether it only conflicts if we try to roll out BP in March, no?  
**\<suraeNoether>** rehrar yes  
**\<rehrar>** I think this info gives strong pushes to rolling out in September  
**\<sarang>** Also, in terms of scope I've asked them to only review the multi-BP code  
**\<rehrar>** Because we also need the time to raise the requested funds  
**\<dEBRUYNE>** \<rehrar> Wasn't that one of the reasons for bad blood with Shen? \<= No.  
**\<suraeNoether>** IMO, if we can't reasonably expect an audit to be completed before the march hard fork  
**\<rehrar>** \<dEBRUYNE> \<rehrar> Wasn't that one of the reasons for bad blood with Shen? \<= No. \<= K. Thanks.  
**\<dEBRUYNE>** We should just put the "include it in the March HF" out of our heads tbh  
**\<suraeNoether>** dEBRUYNE: +1  
**\<rehrar>** agreed  
**\<suraeNoether>** in that case, I think we should just go with Buenz and Maxwell  
**\<suraeNoether>** and/or  
**\<sgp>** Unless there is a strong reason to hardfork in March, why not delay it until whenever the review is ready?  
**\<suraeNoether>** continue to try to talk to them  
**\<suraeNoether>** sgp: because delaying hard forks sets a very disagreeable precedent  
**\<sarang>** Keep in mind there's no guarantee that Buenz and Maxwell are even going to be available to do it  
**\<sarang>** We'll have professional options available for sure  
**\<suraeNoether>** sarang: ok, if they turn us down then we go with one of the other options: what you are saying is that no one has committed, so that statement is not really helpful for any of our optiosn rihgt now. :P  
**\<sarang>** Heck, I have a contract from the non-public group already  
**\<rbrunner>** You mean ready to sign?  
**\<dEBRUYNE>** \<suraeNoether> sarang: ok, if they turn us down then we go with one of the other options: \<= Imo should just take on multiple options  
**\<rehrar>** non-public group doesn't sound quite so useful tbh. But maybe I just don't understand how these things work. But they're like: "We can't share hardly anything publicly." So what's the point?  
**\<dEBRUYNE>** re: funding, the general dev fund could kickstart it and then the community could fund the remainder  
**\<sgp>** @surae RingCT warranted moving the fork. I'd hate to have the review done in May but have to wait until September to include this important code  
**\<sarang>** rbrunner: they're ready to sign if/when we are, but we're under no obligation with them  
**\<suraeNoether>** dEBRUYNE: i'm fine with that too, assuming we have infinite funding available  
**\<dEBRUYNE>** rehrar: they can still disclose vulnerabilities privately  
**\<dEBRUYNE>** and we can fix them  
**\<rehrar>** ah, k. Don't know why that didn't cross my mind. :P  
**\<suraeNoether>** rehrar: we can share whether they have recommended changes, and if they do recommended change, we will end up communicating all of them to the community. they just don't want their company name or the report itself to be made public afaik?  
**\<sarang>** dEBRUYNE: rehrar: the changes are all public, and we can likely discuss the vulnerabilities  
**\<sarang>** just not release their review  
**\<Maxithi>** What I fear with internal report is that the community would be less willing to support it as they haven't any view on how the funds were used.  
**\<sarang>** And we can't say who did the review. They can do a more public audit but they said it'd be a lot more $ and time  
**\<dEBRUYNE>** assuming we have infinite funding available \<= not infinite, but if the community can raise 450k $ for globee, I am sure we can raise a few hunderd k $ for this too  
**\<sarang>** Again, I'm working with them and their lawyers to get as much public as possible  
**\<rehrar>** And it gives 'poking power' to naysayers of Monero who say that we don't release the name of people who did the audit. It could have been Joe Schmoe  
**\<rbrunner>** Why do they work so secretly? In a few words ...?  
**\<sarang>** Fortunately all of the OSTIF quotes will be for fully public audits  
**\<sarang>** rbrunner: it's not working in secret  
**\<sarang>** It's not wanting to be seen as an endorsement  
**\<sarang>** They do either internal audits (like this one), or much more comprehensive public-facing ones  
**\<pigeons1[m]>** Do they not want to be blamed for what they miss?  
**\<sgp>** pigeons I'm sure that's part of it  
**\<rehrar>** I see the not wanting to be viewed as an endorsement unless they are adequately compensated for that  
**\<sarang>** Fortunately they won't be the only option, just the first to prepare a quote and contract  
**\<suraeNoether>** sgp: moving HF dates is not on the table, in my mind. 6 months of data on the blockchain is marginal in the long run; delaying HFs sets an unfortunate precedent.  
**\<sarang>** I think the community will appreciate the openness of an OSTIF group  
**\<rehrar>** but because Monero always prides itself in doing most things in the open, I think we should try the other more public options first  
**\<sarang>** and/or Buenz and/or Maxwell  
**\<sarang>** rehrar: I agree  
**\<rbrunner>** Agree also  
**\<Maxithi>** Agree  
**\<suraeNoether>** rehrar sarang +1  
**\<sarang>** We should get a sense of how much we think is reasonable to raise in funds  
**\<sarang>** since that determines how many groups/peeps we can get  
**\<rehrar>** well, it should also be said that perhaps we should raise a 'vetting pool' of funds for not just BP, but any future work that needs to be looked at  
**\<suraeNoether>** rehrar great minds, buddy  
**\<suraeNoether>** i was just thinking about that  
**\<rehrar>** could be managed by MRL how they see fit, and reported to the community  
**\<Maxithi>** That would be great!  
**\<rehrar>** suraeNoether, in Russia the saying is: "Two fools are of the same mind."  
**\<sarang>** We have the bounty funds, but those can't be used for reviews  
**\<sarang>** So this would need to be separate  
**\<suraeNoether>** rehrar: I don't know about MRL being exclusively in control of vetting funds... i think multisig would be a better option :P  
**\<sarang>** But any reported flaws could be bountied  
**\<rehrar>** The stipulations of the pool would be that MRL manages, gets counsel from the Core Team, and reports spending to the community  
**\<rehrar>** or something along those lines anyways  
**\<suraeNoether>** right  
**\<sarang>** I'm sure someone will complain "isn't review what MRL is for????!?!?111!?"  
**\<rehrar>** I think reported flaws would go through the HackerOne bounty system, and the pool would be for formal review compensation  
**\<sarang>** But you can't do first-person peer review =p  
**\<sarang>** rehrar: yes  
**\<suraeNoether>** sarang +1  
**\<suraeNoether>** i was wondering what a good snappy response to that should be  
**\<suraeNoether>** thank you for that. :P it's been on my mind  
**\<sarang>** I like to think of it as belt and suspenders  
**\<rehrar>** Raise half a million. Increase as necessary. Sound good?  
**\<Maxithi>** isn't review what MRL is for????!?!?111!? \<= Nope, the R stands for Research not Review  
**\<rbrunner>** Somebody always complains :)  
**\<sarang>** and that I've had spinach caught in my teeth and not noticed for hours  
**\<geozdr>** maybe not set public targets for raising funds before you get all the quotes? that would hurt our negotiating position.  
**\<suraeNoether>** geozdr +1 also  
**\<Maxithi>** Can you have "private funding" on the forum?  
**\<sarang>** We certainly don't have numbers for paying targeted individuals  
**\<rehrar>** geozdr, but not all funds will be for BP, so we can internally set a 'BP budget' that is not advertised to potential reviewers  
**\<suraeNoether>** they'll also have to provide us with a quote sarang imo  
**\<sarang>** Yes, and I asked Buenz about thi  
**\<sarang>** \*this  
**\<sarang>** didn't hear back yet  
**\<rehrar>** just because we raise a public amount, doesn't mean all of that amount is available for Bulletproof review, and if anyone tries to negotiate based on total amount raised, we push back with that fact, and that BP has a budget  
**\<rehrar>** *cracks knuckles* and I'll let those tech nerds know that we like our money here, and it will not be easily parted with  
**\<rehrar>** what about andytoshie, wasn't he approached about review also?  
**\<rehrar>** \*andytoshi  
**\<suraeNoether>** sarang do you think that since andytoshi sort of helped with the development, he falls into the "self-peer-review" category  
**\<suraeNoether>** ?  
**\<sarang>** andytoshi has provided useful guidance on bulletproofs but I don't believe he's available for a formal audit  
**\<suraeNoether>** ah, that answers that question  
**\<sarang>** He's also expressed that he doesn't necessarily want to be seen as endorsing particular projects, but I don't want to put words into his mouth  
**\<rehrar>** So...since it's pretty much unanimously agreed that BP should not be in March, do you think MRL can put together a formal little news bulletin (I can help), explaining that and why?  
**\<rehrar>** It'd be helpful to the community, and could help with explaining to some grumblers the benefits and reasons for waiting  
**\<rbrunner>** Other "heavyweights" are known to be against March?  
**\<rbrunner>** Not present now  
**\<rehrar>** luigi and ArticMine both come to mind  
**\<suraeNoether>** rbrunner: I have a text message from fluffypony describing his position on it, but that's hearsay without a PGP signature. :P  
**\<rehrar>** I think smooth as well, but don't quote me on that  
**\<suraeNoether>** so, it seems like there is a weak consensus here that we should start an FFS to fund up a general "new scheme and code" auditing fund. either for MRL to spend as we feel we need to (with as much transparency as possible) or with several core members on board with distribution of those funds also.  
**\<rbrunner>** Yes, and with a catchy name  
**\<rehrar>** Yes.  
**\<sarang>** Setting up a more general fund is also really good optics against the naysayers  
**\<rbrunner>** as this review stuff is quite dry :)  
**\<suraeNoether>** if we are going to assume the march HF is out the window, then we can spend another few weeks working out the details on that  
**\<pebx>** suraeNoether I think we trust you that you don't fake a message from fluffy...  
**\<sarang>** It shows that we have a plan for BPs, and also for future big changes that need audits  
**\<rehrar>** Monero Auditing Interest Department So Audits Frequently get Done or MAIDSAFE for short  
**\<rbrunner>** Monero security fund, or so  
**\<Maxithi>** MAIDSAFE lol  
**\<rehrar>** oops, fail on that last letter though  
**\<suraeNoether>** pebx: heh, well he basically said we shouldn't worry about the optics of pushing it back or about the added blockchain space. in the long run, those things become quite marginal  
**\<rbrunner>** Did you come up with that right now? Wow  
**\<sgp>** @rehrar is now a good time to discuss the hard fork schedule? I want to express some dissenting opinion  
**\<suraeNoether>** fluffypony \^  
**\<rehrar>** of pushing back March hardfork you mean?  
**\<rehrar>** oh, of pushing back BPs  
**\<rehrar>** sgp, speak my child.  
**\<rehrar>** (So Audits Frequently Execute, there's the E)  
**\<sgp>** I'm totally fine not including BPs in the March hard fork since it seems a review will not be completed yet. I get that  
**\<sgp>** If people want to stick with the March harkfork for precedent reasons, I'm fine with that too  
**\<sgp>** But I really think it's a bad idea to wait until September to add the BP code once it has passed review  
**\<sarang>** Why?  
**\<sgp>** There are many practical reasons to have another hardfork  
**\<sarang>** Blockchain waste?  
**\<sgp>** Smaller transaction sizes, smaller fees, smaller blockchain  
**\<rehrar>** Sumokoin will implement, then we're screwed  
**\<sgp>** Yes, basically  
**\<sgp>** And I think the precedent argument is pretty weak. Last year, the community agreed upon moving the date of one hardfork and adding another  
**\<gingeropolous>** y are we screwed?  
**\<rehrar>** I was joking  
**\<gingeropolous>** :)  
**\<rehrar>** thought of another name for the fund btw, but I'll save it for after meeting  
**\<rbrunner>** rehrar, MAIDSAFE is great  
**\<medusa>** initially it was planned to use the general dev fund for reviews afaik  
**\<pebx>** I'm totally with sgp  
**\<medusa>** if there is no money left we can run an ffs, but that should be checked first in my opinion  
**\<sgp>** So my vote is to either have another hardfork after the BP review, or to push back the March hardfork if there's no real reason to have a hardfork in March for another feature  
**\<pebx>** as far as i know there is no other feature which needs a hard fork actually  
**\<rehrar>** rbrunner, not as good as Ze Cryptography Auditing Software Hoard Foundation  
**\<rbrunner>** Might not be a bad idea, with so many thing into service waiting  
**\<sarang>** -\_-  
**\<sgp>** @pebx exactly, unless there was consensus on a larger ringsize or something  
**\<rbrunner>** I know, some things do not technically need a hard fork, but a hard fork forces updates, which is nice  
**\<medusa>** we use hardforks to force ppl to upgrade the software..this has an effect on support work on redit, relegram etc. thats the main reason  
**\<sgp>** Which I don't think will happen  
**\<suraeNoether>** "And I think the precedent argument is pretty weak. Last year, the community agreed upon moving the date of one hardfork and adding another" \<-- you just used precedent to demonstrate that precedents don't matter?  
**\<suraeNoether>** and btw this is exactly the discussion that we wanted to avoid with the HFs...  "So my vote is to either have another hardfork after the BP review, or to push back the March hardfork if there's no real reason to have a hardfork in March for another feature" \<--- we hard fork twice a year, how much is enough?  
**\<pebx>** i can say you as of telegram: people are really expecting BP or at least lower fees... but lowering the fees manually is in my opinion some kind of doctoring around without a real scop  
**\<sgp>** I'm saying your argument of needing to stick with precedent should be more flexible  
**\<pebx>** \*scope  
**\<rbrunner>** Well, the reaction on the Monero subreddit in face of a move into September was surprisingly subdued  
**\<rehrar>** delaying until September has other benefits not related to the Monero implementation  
**\<suraeNoether>** sgp and you are using precedents of previous moving HF schedules to show why it's not a big deal to move HFs... but the entire point is *these precedents need to be avoided*  
**\<rehrar>** it lets the BP paper itself have more time in existence  
**\<sarang>** And the audits specifically are not testing the BP math/paper  
**\<rehrar>** and there may be some people interested in reviewing the paper itself (Without carin about the Monero implementation) that would be useful to us  
**\<sarang>** It's way out of scope for those groups  
**\<sgp>** Why? If there's a legitimate reason to, what's the harm?  
**\<suraeNoether>** just the code  
**\<sarang>** sgp:  you mean why are they not reviewing the math?  
**\<sarang>** Because it's an entirely different kind of review, altogether  
**\<suraeNoether>** i think sgp means "why not have three HFs this year  
**\<sgp>** No, not that  
**\<sarang>** k  
**\<pebx>** but let's be realistic: probably most interested people start to look into it only 1-2 weeks before it will be implemented anyway  
**\<sgp>** If we don't add another hardfork, we're committing at least 12 GB of extra blockchain data, assuming transaction volume stays the same  
**\<rehrar>** that was the argument before pebx, yes  
**\<pebx>** i would rather prefer to move the hard fork to april or may with BP than hard forking in march just for the case  
**\<rehrar>** but now there is demonstrated interest in getting the reviews done for financial compensation  
**\<suraeNoether>** sgp: we have to freeze the code 3+ weeks before each HF and begin implementation. HFing monero to implement BPs is not simple as creating a new email account.  
**\<suraeNoether>** think of each HF as rolling out a new year/model of car.  
**\<sgp>** I understand that surae  
**\<sgp>** But you could easily schedule a hardfork a month after you felt comfortable with the review  
**\<suraeNoether>** and if that happens to be August  
**\<suraeNoether>** does that mean we then HF immediately again in September, or also put that one off?  
**\<suraeNoether>** etc  
**\<suraeNoether>** etc  
**\<sarang>** So to move this talk forward... really the question is between (a) doing March and then BP when it's ready, (b) doing no fork until BP is ready, or (c) doing March and waiting on BP until Sept  
**\<sgp>** Then don't add another one in that case  
**\<sgp>** But it seems like from your estimate the review should take less than a month  
**\<pebx>** sarang i'm for b  
**\* iDunk** likes how MRL is making sense  
**\<suraeNoether>** sarang no, this is not the question  
**\<pebx>** i really don't see a need for the march hard fork  
**\<suraeNoether>** not to mention  
**\<suraeNoether>** screwing with HF schedules  
**\<suraeNoether>** completely BLOWS for HW wallet developers  
**\<iDunk>** Postpones subaddresses  
**\<suraeNoether>** sarang: we had a weak agreement, even sgp agreed... that the March HF should go forward, and BPs should probably not be included.  
**\<rehrar>** suraeNoether, you say that the best thing for new cryptography is time  
**\<medusa>** C is the only option  
**\<rehrar>** correct?  
**\<suraeNoether>** agreed with medusa  
**\<suraeNoether>** rehrar: always yes  
**\<sgp>** I've expressed my support for A or B  
**\<rehrar>** then C is the only option  
**\<rbrunner>** Maybe the least bad  
**\<thrmo>** second B  
**\<rehrar>** we are responsible for people's money, freedom, and lives, remember?  
**\<iDunk>** I'm for C.  
**\<suraeNoether>** any concerns about getting BPs implemented *quickly* are not thinking about what Monero is going to look like in 2022  
**\<Maxithi>** Mind to make a quick run up to explain in one sentence A, B and C?  
**\<thrmo>** suraeNoether, B doesn't have to be quickly  
**\<sarang>** The real downside in a March/Sept is the blockchain size  
**\<thrmo>** Maxithi, **\<sarang>** So to move this talk forward... really the question is between (a) doing March and then BP when it's ready, (b) doing no fork until BP is ready, or (c) doing March and waiting on BP until Sept  
**\<sarang>** if that's something you care about  
**\<pebx>** i somehow miss smooth, moneromoo and fluffypony in this discussion... i know, i have been late today but what's their opinion?  
**\<suraeNoether>** fluffypony is in Miami right now iirc, so he's probably sleeping on a pile of money and hookers  
**\<endogenic>** sarang: without bps coming along we wouldnt hve been able to avoid that  
**\<Maxithi>** thrmo Thx  
**\<pebx>** sarang the real downside in september is the community which is expecting it  
**\<pebx>** even more after fluffy announced it on twitter  
**\<iDunk>** Why are they expectiong it ?  
**\<pebx>** to be in march  
**\<medusa>** that not an argument rly  
**\<medusa>** ofc they want it  
**\<iDunk>** Who told them it would be in March ?  
**\<endogenic>** i want 0kb transactions and i want them now  
**\<rbrunner>** It was "word on the street" for a long time  
**\<sgp>** It just means we need a press release saying why the decision changed  
**\<rehrar>** I'm sure they also want other things asap.  
**\<suraeNoether>** sgp: we never announced any decisions on bulletproofs  
**\<rehrar>** hence my suggestion for MRL to put out a little news bulletin with a formal recommendation to wait  
**\<thrmo>** Without BP what consensus rules changes NEED an hardfork by march?  
**\<sarang>** We said March if it was ready  
**\<sarang>** We should do a press thing, yes  
**\<dEBRUYNE>** \<rbrunner> It was "word on the street" for a long time \<= Not really  
**\<pebx>** iDunk fluffy announced it to be implemented in march hard fork. that's also the reason why i miss him in the whole discussion  
**\<suraeNoether>** so our bulletin announcemennt that rehrar suggested will be the *first* formal announcmenet about BPs coming from monero.  
**\<sarang>** regardless of our choice  
**\<rehrar>** if community whines, we point to the bulletin  
**\<rbrunner>** Pushing people to update needs a hardfork in any case, IMHO  
**\<iDunk>** Well, fluffypony jumped the gun then.  
**\<rehrar>** if they REALLY disagree, I'm sorry to say, they can fork :P  
**\<dEBRUYNE>** fluffypony strongly favors adherence to the schedule fwiw  
**\<suraeNoether>** pebx: where did he announce that? can you send me a link?  
**\<pebx>** one second, i have to search on twitter...  
**\<thrmo>** dEBRUYNE, the schedule was never meant to be set in stone  
**\<gingeropolous>** was double blob brought up at all as an option? or am i just chasing windmills  
**\<thrmo>** It will eventually be changed, maybe now would be a good time to do it.  
**\<rbrunner>** double blob?  
**\<dEBRUYNE>** thrmo: need a source on that  
**\<iDunk>** You are chasing windmills :)  
**\<suraeNoether>** gingeropolous: not brought up at all. care to explain how that would work?  
**\<suraeNoether>** one thing i want to make perfectly clear to everyone in this room  
**\<endogenic>** thrmo: what necessitates breaking the existing schedule?  
**\<thrmo>** dEBRUYNE, fluffy mentioned it several times iirc (and others) that eventually the scheduled would be changed and the rate of HFs diminished.  
**\<Maxithi>** Double Blob https://github.com/monero-project/monero/issues/3154  
**\<gingeropolous>** u make a transaction with a borromean and a bullet proof. You only work with the borromean for n months. Eventually, bulletproofs are trusted. You can then prune the borromean from the chain.  
**\<dEBRUYNE>** thrmo: Then we'd change to once a year probably  
**\<dEBRUYNE>** and either march or september would be thrown out  
**\<suraeNoether>** gingeropolous: ah, there could be some security issues with that  
**\<endogenic>** thrmo: he mentioned that in the context of monero stabilizing in the future didnt he  
**\<rehrar>** thrmo, this is true when we get to a point that Monero has so many users that HFs become more and more difficult to pull off, not as a result of new tech as I understand it  
**\<thrmo>** endogenic, unnecessary blockchain growth for one, and why exactly do we NEED to hardfork in march?  
**\<gingeropolous>** in various conversations it seems that the issues aren't as severe as they seem.  
**\<endogenic>** thrmo: a hard fork causes blockchain growth?  
**\<rehrar>** to force upgrades to newer, more stable software is as good a reason for me as any  
**\<thrmo>** endogenic, adopting BPs later rather than sooner.  
**\<suraeNoether>** gingeropolous: it would take more time for us to vet the double blob technique than it would for us to audit the BP code alone and push it. :P  
**\<rehrar>** suraeNoether, what did you want to make perfectly clear?  
**\<thrmo>** rehrar, why do you need to fork for that?  
**\<suraeNoether>** so what i wanted to make clear: if you are hoping to get BPs implemented before September in order to get a price bump, or to avoid a price crash in Monero...  
**\<gingeropolous>** suraeNoether, perhaps.. but here I tried to fully explain it: https://github.com/monero-project/monero/issues/3154  
**\<medusa>** we usually use the fork to roll out cleints, so we just have 1 version to support  
**\<gingeropolous>** and furthermore, this isn't going to be the last time some amazing tech comes through to reduce transaction size  
**\<endogenic>** thrmo: changing the existing schedule needs to be justified more than not doing so in the absence of a problem making it necessary, and people agree that bulletproofs and its implementation needs to be audited right?  
**\<thrmo>** medusa, i know, it doesn't need to be that though.  
**\<rehrar>** can I speak bluntly?  
**\<gingeropolous>** so it'd be great if we had a mechanism to transition to fresh tech without wondering if the whole thing'll come crashing down  
**\<suraeNoether>** then your logic is already flawed... if you think Monero will hit 10,000 USD faster if we get BPs implemented in June instead of September, you are... well, i can't say for sure that you are wrong, but your logic circuits may need some dusting.  
**\<endogenic>** agree surae  
**\<endogenic>** also fees  
**\<thrmo>** endogenic, I do agree too, I just don't think that adherence to the schedule is as a big thing as it's been portrayed.  
**\<suraeNoether>** fees are going to be changing in this HF either way  
**\<sgp>** @surae please, I've been in the community for several years. I don't care about the price nearly as much as I care about the practical benefits of lower transaction fees and reduced blockchain bloat  
**\<endogenic>** if they are lowered at the expense of monero's security  
**\<endogenic>** what's even the point  
**\<gingeropolous>** ^^  
**\<suraeNoether>** sgp: *good* but our fees are going to be reduced anyway, and blockchain bloat is literally going to be marginal as time goes on  
**\<rehrar>** this is a moot conversation honestly, and it's silly that we are having it. Again, the responsibility on our shoulders is very large. Money, freedom, and lives. And if the best thing for this new crypto is time, then the LEAST we can do is give it an extra six months.  
**\<thrmo>** I couldn't care less about the price either.  
**\<endogenic>** i dunno thrmo imo it's a matter of what precedent we implicitly accept by agreeing to an action even if we arent aware of the consequences  
**\<endogenic>** people will use that precedent for their own reasons  
**\<endogenic>** just my two cents :p  
**\<sgp>** @rehrar we would be at the point though where the review(s) would have already been completed  
**\<suraeNoether>** sgp: and please don't take my comment as accusing you of being only interested in monero's price, i know that you are a long-time member of the community and we have had several good discussions in the past. i value your opinion  
**\<rehrar>** again sgp, it's not just the code that needs time to be  
**\<rehrar>** it's also the paper of BP itself  
**\<suraeNoether>** i just wanted to make that clear to anyone who ends up reading the logs later, or any lurkers who are thinking "but oh man i could totally get rich if they push this in June."  
**\<rehrar>** what if there is an exploitation in the crypto itself that has gone unnoticed at this point in time  
**\<rehrar>** the reviews will review our code implementation, not the paper  
**\<suraeNoether>** *nod* similar to the ASNL ring signatures in the original ringct paper  
**\<rehrar>** the crypto itself needs time to breathe  
**\<thrmo>** endogenic, there are some costs for "unnecessary" hardforks too, even if they are on schedule.  
**\<suraeNoether>** \*which wasn't caught until after the paper was published, put through peer review, and after I believe we had gone live with code.\*  
**\<rehrar>** this itself is an argument to wait  
**\<rehrar>** as I said before, there may be third parties that will review the BP paper itself (not our implementation of it) for their own reasons  
**\<iDunk>** It was live on testnet, not in mainnet.  
**\<rehrar>** and we can benefit from that  
**\<thrmo>** Hard forks momentarily weaken the security of the network, so doing it because of no other good reason than schedule seems silly to me.  
**\<endogenic>** thrmo to say they are technically unnecessary only speaks to part of the hypothetical necessity which must be evaluated. that's everything i'm saying  
**\<pigeons1[m]>** The code was only live on testnet  
**\<sarang>** We're definitely not the only ones interested in BPs, so there will be good  eyes on it going forward  
**\<thrmo>** as rehrar pointed above, money, freedom and lives are at stake.  
**\<sgp>** We discussed this in previous meetings. There's always an argument to wait. If the community wants more review on the math, we should get an audit of that too  
**\<gingeropolous>** \<thrmo> Hard forks momentarily weaken the security of the network \<= what?  
**\<thrmo>** gingeropolous, Node count drops, hashrate drops, etc  
**\<suraeNoether>** thrmo we are modifying fees in the next hf so its not merely to accommodate schedules  
**\<sgp>** If we knew of researchers in the process of looking at the math I would agree with you, but it seems odd to wait in hopes someone is looking at it  
**\<rehrar>** sorry sgp, but the argument is not to wait indefinitely, it's to wait until September  
**\<rehrar>** it was mentioned in a previous meeting  
**\<gingeropolous>** and what if there aren't any reviews by then?  
**\<rehrar>** if we wait until September, that more than doubles the time that the BP paper has been in existence  
**\<dEBRUYNE>** sgp: Waiting until August / September literally triples the time the paper has been out in existence  
**\<dEBRUYNE>** That's a convex pay off   
**\<pebx>** https://twitter.com/fluffypony/status/945706717421195266  
**\<rehrar>** dEBRUYNE is more right than me \^ :P  
**\<pebx>** sorry took me longer than i thought, twitter search is unfortunately not the best  
**\<rehrar>** although I guess triples is technically "more than doubles"  
**\<thrmo>** pebx, fluffypony doesn't decide the community does.  
**\<rehrar>** also, the second time me and dEBRUYNE said remarkably similar things. Just a thought.  
**\<dEBRUYNE>** rehrar: :P  
**\<rbrunner>** Yes, but that was word on the street :)  
**\<gingeropolous>** nonsense! He is our god! Such blasphemy!  
**\<pebx>** i know, but the community expects this now... that's why i miss fluffy in the discussion  
**\<sgp>** He was just finding the tweet that others asked for  
**\<dEBRUYNE>** Whether the community expects BP in March is at most ambigous imo  
**\<rehrar>** ok, let's end this conversation with one question  
**\<suraeNoether>** pebx thanks for finding that. He shouldn't have said that, number one  
**\<dEBRUYNE>** at best\*  
**\<rehrar>** MRL: what is your formal recommendation to us at this point?  
**\<iDunk>** That tweet was unfortunate.  
**\<pebx>** suraeNoether that's the thing i'm talking about...  
**\<endogenic>** the code IS merged though  
**\<endogenic>** to master  
**\<sarang>** single output  
**\<pebx>** he is still some kind of project leader, but he missed last sunday's discussion and now too  
**\<iDunk>** And is live on testnet :)  
**\<rbrunner>** Yes, and live on Testnet  
**\<sarang>** multi is not yet  
**\<sarang>** and that's what we want audited  
**\<endogenic>** yes but aside from tagging an old commit  
**\<endogenic>** does this raise the issue of whether it should have been merged?  
**\<suraeNoether>** rehrar: Sarang, correct me on this if need be: our formal recommendation to pay an OSTIF group to audit the code, funded through a new acronym, and to include BPs in September.  
**\<dEBRUYNE>** I wouldn't confine the audit to the OSTIF group  
**\<rehrar>** sarang? you second this?  
**\<suraeNoether>** dEBRUYNE: just my recommendation based on what we've seen and heard so far. if another group feels more right, we can goi with them instead.  
**\<sarang>** I don't have a particular opinion on September vs pushing the March, since there are many other parties involved and I don't work closely enough with them to fully appreciate their needs  
**\<sarang>** I agree on the rest from a research perspective  
**\<rehrar>** ignoring needs of others for the time being, just think of the crypto  
**\<suraeNoether>** the delay of HF schedules, etc, this is all not even really MRL's job to make decisions about. the quesiton is: will BPs be implemented in the next scheduled HF for May? And I dont' think the answer to that is yes, from either me or sarang  
**\<suraeNoether>** and by "will" i mean "should"  
**\<sarang>** I consider the crypto pretty independent from the fork schedule  
**\<gingeropolous>** and by may u mean march  
**\<suraeNoether>** yeah the one starting with "ma"  
**\<rehrar>** and by dont', you mean "don't"  
**\<sarang>** Using the double blob method would be a good way to mitigate issues  
**\<sarang>** but we haven't used it before  
**\<suraeNoether>** sarang do you have expectations of security if two range proofs for the same masked amount are provided? because I can imagine at least two different ways that could go wrong if done incorrectly.  
**\<suraeNoether>** but that's highly dependent on the algebra and boosting negligible event probabilities into more likely events.  
**\<sarang>** suraeNoether: I am not worried about the two-proof method in that way  
**\<dEBRUYNE>** suraeNoether: we can go with multiple groups as well  
**\<suraeNoether>** sarang: ok we should talk more about it later then i guess  
**\<sarang>** yes  
**\<rehrar>** well, hard fork times aside, it's agreed it shouldn't be in March, and that's enough for the time being  
**\<sarang>** yes  
**\<rehrar>** good updates on the audit front  
**\<rbrunner>** But a HF in March is not entirely agreed, it seems to me ...  
**\<sarang>** But he means BPs will not be in March  
**\<sarang>** Too many audit steps before then  
**\<suraeNoether>** rbrunner: this meeting was never about HF schedules  
**\<sarang>** I'll keep everyone updated in #monero-research-lab on the OSTIF quotes  
**\<pebx>** sarang what's a real timeframe to be ready with audits?  
**\<rehrar>** MRL, let's talk about the Z.C.A.S.H (name pending) fund later today?  
**\<sarang>** Once the funds are raised and the group has a start date? A month, maybe 25 biz days  
**\<sarang>** But start dates depend on the groups' availabilities  
**\<pebx>** okay, so i'm still for delaying the hf to april or may but then with bp  
**\<rehrar>** last question, should we still have dev meeting next week, or push to three weeks from now?  
**\<pebx>** otherwise some sumo will have it before monero  
**\<janeropicasso>** Hi guys I'm new been reading along. I'd just like to say one thing. I think keeping an eye on the long term view is much better than any short term benefits unless the situation is dire. In my experience hard deadlines on things never work. Security, Privacy and Untraceability is what separates Monero high tx fees can wait.  
**\<iDunk>** I don't see this as a dev meeting.  
**\<pebx>** i would be for a dev meeting next week, but who i am...  
**\<rehrar>** alright, I'll make an issue for it on the Githubz  
**\<rbrunner>** Meet again next week, I would say, in any case.  
**\<dEBRUYNE>** janeropicasso: There will be a partial solution for fees in the next release  
**\<iDunk>** Next week is the normal schedule.  
**\<rehrar>** just don't want burnout  
**\<rbrunner>** Critical times  
**\<pebx>** rbrunner this.  
**\<rehrar>** Alright. Anything anyone else wants to say on this?  
**\<rehrar>** dEBRUYNE, can we get the logs for this too?  
**\<dEBRUYNE>** Sure  
**\<dEBRUYNE>** No ETA though :P  
**\<sgp>** I suppose I'd like to hear a bit more about fees  
**\<gingeropolous>** so, just throwing it out there - could we get one of the clones to implement? Then there's a worthy target to exploit ..  
**\<rehrar>** sgp outside the scope of this meeting I think?  
**\<rbrunner>** Yes, I don't fear Sumo implementing it at all  
**\<rbrunner>** Our fall guys :)  
**\<endogenic>** janeropicasso: i do wonder what people will prioritize. history is scary  
**\<sgp>** "Bulletproof/fees meeting" lol  
**\<rehrar>** Ah, good point.  
**\<rbrunner>** Just think that currencies normally work within time frames of decades  
**\<pebx>** rbrunner well it's some kind of an issue if someone will implement monero developed code before monero does...  
**\<sarang>** That's part of what we're trying to avoid  
**\<pebx>** at least for observers  
**\<sgp>** @dEBUYNE can you speak about what you meant by "partial fix"?  
**\<sgp>** @dEBRUYNE  
**\<rbrunner>** pebx: Reminds me of my Windows installer and the X12 coin :)  
**\<gingeropolous>** pebx, what do u mean by observers?  
**\<dEBRUYNE>** So the wallet will use low priority by default when there's no or low backlog and the last N blocks are below X size  
**\<dEBRUYNE>** Then switch to the old default once activity picks up  
**\<dEBRUYNE>** And we reasonably assume miners are going to expand the blocksize  
**\<dEBRUYNE>** It's still a bit crude and there's no perfect solution, but at least we got something going  
**\<rbrunner>** Throwing people a bone  
**\<sgp>** @dEBRUYNE, ok cool. Just curious if there was something else I missed  
**\<dEBRUYNE>** Some talk about whether we should lower the unimportant level, because it's arbitrary anyway  
**\<sarang>** So any action items before next meeting?  
**\<sarang>** Besides carry on w/ audit and start to plan funding?  
**\<sarang>** We'll need more input from core folks about the role of general funds  
**\<pebx>** gingeropolous people out of the community and people trying to attack monero and spreading disinformation...  
**\<rehrar>** hmmmm...  
**\<pebx>** i am moderating the groups on telegram so i see the "normal people talk"  
**\<rehrar>** nothing else from me on this meeting?  
**\<rehrar>** sarang even with availability of general funds, I'd like to try at least some with FFS. It's just good 'marketing'.  
**\<pebx>** but i wouldn't like to rush it either into march if it's not ready to be released...  
**\<rehrar>** Monero raises grassroots money for review  
**\<sarang>** In that case we should at least set a goal amount for this review fund  
**\<pebx>** that's a good point rehrar  
**\<sgp>** Is $50k a good goal?  
**\<rehrar>** So much is said in that Monero crowdfunds two full time researchers, two full time coders, and other stuff  
**\<rehrar>** I think add a zero to that sgp  
**\<rehrar>** if this will be used for multiple reviews over multiple years  
**\<sarang>** $50K would fund a pro audit and maybe one individual  
**\<sgp>** Ok, thought that was initial goal scope  
**\<suraeNoether>** rehrar i think if we shoot for 75-100k, and we have to pay, say, 50k this year... well... that's 25k in monero that could be worth several extra zeros by the next time we need an audit going  
**\<rehrar>** or could be worth several less zeros :P  
**\<pebx>** 500k is quite a figure... but if we can raise that for some merchandise stores to accept monero, it should be possible to do so for the tech  
**\<suraeNoether>** yeah, we can always FFS again to refresh the fund  
**\<suraeNoether>** pebx +1  
**\<sgp>** I think 100k is manageable. 500k is unrealistic to start imo. GloBee is an exception, not the norm  
**\<rehrar>** but if we think 100k is good enough to start, we can shoot for that  
**\<gingeropolous>** f'real  
**\<suraeNoether>** sgp: +1 also on that  
**\<suraeNoether>** if we need to re-up, we can  
**\<rehrar>** it can also be like the HackerOne fund  
**\<rbrunner>** Yes, it's not sexy enough for 500K  
**\<rehrar>** the goal has been met and extended a few times  
**\<sarang>** OK, I'm out for now but will keep everyone informed on audit progress  
**\<rehrar>** ok, thanks sarang  
**\<rehrar>** thanks everyone for coming. Was fairly productive I think.  
**\<pebx>** thanks sarang!  
**\<rbrunner>** Certainly interesting. Thanks!  
**\<suraeNoether>** rehrar shoot me an email at my protonmail address and cc sarang on it and we'll start talking about a review fund and the FFS post for it  
**\<rehrar>** sure thing  
**\<sarang>** or in the MRL IRC if you want it public  
**\<rehrar>** I prefer sneaking behind closed doors  
**\<suraeNoether>** hmm. i was thinking its not totally on topic for #monero-research-lab but maybe it is...  
**\<dEBRUYNE>** 100k seems a bit on the lower end, whereas 500k seems a bit on the high end  
**\<rehrar>** the research lounge  
**\<dEBRUYNE>** Perhaps something in between would be best  
**\<rehrar>** discuss it over a vape  
**\<sarang>** $133,700  
**\<rehrar>** $250k? dEBRUYNE?  
**\<pebx>** 222.222  
**\<rehrar>** sarang: and fifty two cents  
**\<rbrunner>** Don't we have any nice prime number somewhere there?  
**\<pebx>** however, why are we talking in fiat?  
**\<dEBRUYNE>** rehrar: something like that  
**\<sarang>** pebx because The Man has taught me to think in fiat  
**\<rehrar>** wonder how many of these reviewers would accept XMR directly  
**\<suraeNoether>** the OSTIF accepts crypto apparently  
**\<suraeNoether>** but they pay the groups in fiat  
**\<sarang>** OSTIF will do the exchange for us fee-free  
**\<suraeNoether>** that's nice  
**\<sarang>** and OSTIF agreed to take no cut themselves if we credit them  
**\<rehrar>** they want the Monrus  
**\<sarang>** they want to drum up publicity for a larger upcoming audit  
**\<pebx>** 727 XMR would be a prime number ;)  
**\<rehrar>** alright friends, Imma kick rocks. Catch you all later.  
**\<manifest>** there probably isnt a tool for monero where you could monitor and control multiple wallets easily for testing purposes  
**\<fluffypony>** pebx: I was arguing with a BCash shill, and it was at a time when we were more confident about March  
**\<sarang>** We can still present the delay positively  
**\<sarang>** We're trailblazing but doing it correctly  
**\<fluffypony>** was there a reasonable sense of consensus on the way forward wrt the HF schedule?  
**\<Maxithi>** fluffypony Not really, there are two main options and we didn't find an global agreement.  
**\<fluffypony>** we're starting to run tight on time  
**\<Maxithi>** fluffypony Yeah, however everyone did agree that by postponing BP we still have 2-3 weeks to find a consensus on the HF.  
**\<fluffypony>** in situations like this the best thing to do is the thing that isn't controversial, which means not including it until it's ready  
**\<fluffypony>** we wanted to do code freeze at the end of Dec / beginning of Jan  
**\<fluffypony>** so not really  
**\<iDunk>** Is there going to be a new branch for the new release ?  
**\<Maxithi>** Main arguments were PRO: HF forces community to update software. AGAINST: No protocol update requires HF.  
**\<fluffypony>** yes  
**\<Maxithi>** And then the fact that HF are "supposed" to be on a regular basis (based on HF history).  
**\<Maxithi>** And again some Pro and Against  
**\<fluffypony>** we've always maintained that the HF should happen even if there's no protocol update  
**\<fluffypony>** to keep active versions in line  
**\<fluffypony>** and prevent things like the Bitcoin leveldb / bdb bug  
**\<Maxithi>** @fluffypony: we've always maintained that the HF should happen even if there's no protocol update \<= No one brought that argument up, would have been a good one.  
**\<iDunk>** In this case, using subaddresses and multisig will require using the new release.  
**\<endogenic>** yes i did :P  
**\<iDunk>** And having people be forced to upgrade avoids support nightmares.  
**\<fluffypony>** yep  
**\<fluffypony>** I mean, unless there's a strong reason NOT to do a March fork we should go ahead with it  
**\<Maxithi>** endogenic: yes i did :P \<= Than it is my mistake. Didn't understand that it was stated as a previous consensus. I read it rather as a habbit.  
**\<endogenic>** Maxithi: i was just being more socratic about it :P  
**\<endogenic>** Maxithi: since i dont know what i know yet  
**\<Maxithi>** endogenic You should have been more straight forward.  
**\<fluffypony>** and then leave it open-ended for Bulletproofs  
**\<endogenic>** Maxithi: i was  
**\<endogenic>** Maxithi: i was responding to someone else and he understood and agreed with me  
**\<Maxithi>** Why hasn't this been written down already? We should put up these kind of consensus rules and drop them on git to prevent future disagreements.  
**\<Maxithi>** endogenic My bad, didn't catch that through the lines.  
**\<endogenic>** Maxithi: arent consensus rules derived from people not documents  
**\<endogenic>** besides who wants to prevent discussion  
**\<fluffypony>** it's a good idea to at least write down how we generally feel things should be handled  
**\<fluffypony>** almost like a doctrine, not really a list of rules  
**\<Maxithi>** endogenic Agree but this could prevent from turning 1 meeting into 4  
**\<Maxithi>** Doesn't mean we can't change it ;) Only that we take what we previously achieved and discuss on top of that  
**\<endogenic>** now that BPs have been merged, can a new release which excludes BPs be done?  
**\<endogenic>** single output , if specificity is needed  
**\<fluffypony>** endogenic: they're merged but dormant  
**\<endogenic>** ah, of course, that makes sense  
**\<rbrunner>** But we probably new a second, non-BP testnet  
**\<fluffypony>** yes I agree on the testnet / devnet thing  
**\<rbrunner>** Ah, yes, those were the proposed names  
**\<fluffypony>** I think the real problem here is that Bulletproofs doesn't have a cool name  
**\<fluffypony>** I mean, it's reasonably cool  
**\<fluffypony>** but how can we compete with VVraith Protocol?  
**\<rbrunner>** :)  
**\<chachasmooth>** is wraith the guy who claimed to be satoshi?  
**\<fluffypony>** chachasmooth: no, it's the stealth addresses thing that Verge is doing  
**\<chachasmooth>** oh, right. both are shit, that's what I remember  
**\<chachasmooth>** wraith is still not implemented?  
**\* fluffypony** shrugs  
**\<chachasmooth>** fluffypony what happened to the majority of forum posts? did you take them offline on purpose?  
**\<fluffypony>** censored by Blockstream  
**\<fluffypony>** kidding, we disabled them because of the spam, I'll fiddle with the settings so that they're still visible  
**\<Maxithi>** fluffypony About spam, the forum has some https://forum.getmonero.org/6/ideas/89759/advice-for-you-to-get-free-600m-swtor-credits-cheap-on-swtor2credits-jan-17  
**\<Maxithi>** Who can remove these?  
**\<fluffypony>** tks  
**\<fluffypony>** any of the mods  
**\<fluffypony>** but I'm pretty much the only one active  
**\<Maxithi>** I'm sure your schedule is empty and you love handling this kind of stuff ;)  
**\<fluffypony>** lol  
**\<rbrunner>** Just checked: Wraith is really, finally online, but seems to have some teething problems: https://steemit.com/bitcoin/@siddm96/verge-hardfork-for-stealth-transaction-3a0509e274618  
**\<rbrunner>** See? Other coins can hardfork just like that. Why can't we?  
**\<rbrunner>** Was checking about 30 transactions on the Verge blockchain and did not encounter a single one with stealth addresses. Roaring success, it seems  
**\<fluffypony>** lol  
**\<iDunk>** Imagine if subaddresses were being without a hard fork :)  
**\<iDunk>** Major clusterfuck.  
**\<rbrunner>** That's my opinion: We need the March hardfork just to force lazy people to update their software  
**\<iDunk>** Exactly.  
**\* sgp** sent a long message: https://matrix.org/_matrix/media/v1/download/matrix.org/BarHGxHdPoPajSqUqUpcKEFm  
**\<gingeropolous>** thanks matrix  
**\<bibble>** lol  
**\<bibble>** guess #3 would mean more pumps, more money ??  
**\<sarang>** That's not quite correct. We aren't planning on having single-output audited  
**\<sarang>** If there's a pressing need for single, we restrict transactions to a single-output proof within the multi code  
**\<sarang>** A single-output proof is just the degenerate case of a multi-output  
**\<chachasmooth>** what benefits do regular hard forks bring?  
**\<jorko>** regular upgrades. avoids the Bitcoin clusterfuck where consensus = no protocol upgrades, ever.  
**\<gingeropolous>** it also helps improve the software, because everyone is running the same thing. So we all have the same bugs if they are present.  
**\<sgp>** @sarang my apologies, I didn't know that  
**\<sgp>** I'll have to think harder about this  
**\<sarang>** When we think about single vs multi output proofs from now on, we should consider that they're really different cases of the same final code  
**\<sarang>** The difference is really in whatever we decide to do for the corresponding fee structure  
**\<sarang>** Yes, the original "single only" code is on testnet, but moneromooo has the multi code worked up now  
**\<sgp>** @sarang once the multi-output code has been reviewed, is there a reason to add it separately from single-output, or would you feel comfortable adding both at the same time?  
**\<sarang>** The multi code completely replaces the single code  
**\<sarang>** development was done separately in case we finished single first and wanted to deploy sooner  
**\<sarang>** a single-output proof is just a multi-output proof with one output  
**\<sgp>** So realistically the community has decided that single-output is a waste of time because multi-output is basically done and the community wants it audited  
**\<sarang>** Given the desire for an audit, it makes sense to jump straight to multi and have the fee discussion surrounding it  
**\<sgp>** Ok, makes sense  
**\<sgp>** So it's basically just a question of whether Monero hardforks soon after the code is complete and reviewed or in September  
**\<sgp>** For some reason I still thought single and multi-output would be rolled out separately  
**\<sarang>** Single doesn't require that the fee structure be switched away from size-based, but that's about it  
**\<sarang>** Might as well pay for only one audit  
**\<sgp>** I understand skipping single-output bulletproofs  
**\<sarang>** What it does mean is that the BP code on testnet is NOT the code that will be audited or eventually deployed  
**\<sarang>** for whatever that's worth  
**\<sarang>** Multi is here: https://github.com/moneromooo-monero/bitmonero/tree/bp-multi/src/ringct  
  