---
layout: post
title: Logs for the MRL Meeting Held on 2019-12-09
tags: [dev diaries, crypto, research]
author: asymptotically / Sarang
---

# Logs

**\<sarang\>** Let's go ahead and get started with GREETINGS  
**\<kinghat\>** o/  
**\<sgp\_\>** hello  
**\<sarang\>** That's long enough!  
**\<sarang\>** Let's move to ROUNDTABLE  
**\<sarang\>** suraeNoether: what up with you  
**\<suraeNoether\>** i'm terribly ill this morning, so my update will be very brief.  my work in this past week has involved three incomplete tasks:  
**\<suraeNoether\>** 1) CLSAG linkable anonymity proof required some thought. sarang and i have thought about it and we have a strategy to finish writing the proof. sarang: do you want to make the changes to our LA definition or do you want i should?  
**\<sarang\>** suraeNoether: I have a writeup for LA in my notebook that I'm transcribing to TeX  
**\<suraeNoether\>** and proof\* not just the definition  
**\<sarang\>** it works just fine  
**\<sarang\>** On that note  
**\<sarang\>** Do you have any thoughts on linkability (not LA)  
**\<sarang\>** I don't particularly like the Backes definition  
**\<suraeNoether\>** uh one sec  
**\<sarang\>** Triptych has a version of linkability+non-frameability that I like better  
**\<suraeNoether\>** is there soemthing wrong with the definition we proposed initially?  
**\<suraeNoether\>** iirc that one's from bender  
**\<sarang\>** It's not formalized quite enough, in the apparent opinion of the reviewer  
**\<sarang\>** I think it needs just minor work  
**\<sarang\>** Triptych formalizes it a tad more IMO  
**\<sarang\>** I can add that to the writeup if you like  
**\<suraeNoether\>** well  
**\<suraeNoether\>** for the sake of the audience, can you describe the 3 different definitions you want to consider? or 2, assuming you want to bail on backes'  
**\<sarang\>** Backes requires the following for an LRS: completeness, linkable anonymity, linkability, non-frameability  
**\<sarang\>** Right now we combine linkability and non-frameability with non-standard terminology  
**\<sarang\>** Backes uses a particular linkability definition: can the adversary use `q` keys to generate `q+1` non-linking signatures?  
**\<sarang\>** Where `q` is scaled via the security parameter  
**\<sarang\>** I don't particularly like this definition over the "usual" one about producing two linking signatures, but I think it's important to frame the definition as a challenger-player interaction  
**\<sarang\>** Our current method does this very informally  
**\<sarang\>** I propose a combined linkability definition in my Triptych writeup that's a slight formalization of what CLSAG has now  
**\<sarang\>** (it could easily be split into linkability and non-frameability)  
**\<suraeNoether\>** hmmmm q scaling with the security parameter is the weird part to me: if the security parameter goes up, so does q... and so this means, for example, the adversary can't produce 3 signatures using 2 keys without some linking occurring. this feels \*weaker\* than the statement "can't produce two signatures using the same key without them being linked"  
**\<sarang\>** Yeah, which is why I don't really like it  
**\<sarang\>** didn't sit well with me  
**\<suraeNoether\>** and we want the property with q=1 anyway to prevent double-spending  
**\<sarang\>** So I am proposing not using the Backes definition, but simply formalizing what we have now, a la Triptych  
**\<sarang\>** then it's more clear what the linkability player has access to in terms of keys etc.  
**\<suraeNoether\>** okay, i'm going to read more deeply into that this afternoon  
**\<sarang\>** IMO it's a pretty straightforward formalization  
**\<sarang\>** doesn't affect much in practice  
**\<suraeNoether\>** backes' definition with q=1 seems to me to imply backes' definition with greater q, but it's possible that it doesn't technically reduce the way it seems. i'll think more about it  
**\<sarang\>** That definition doesn't make assumptions about linking tags being equal AFAICT  
**\<sarang\>** Whereas ours does  
**\<sarang\>** I think that's part of it  
**\<sarang\>** Anyway, you were talking about work you'd been doing, before I barged in =p  
**\<suraeNoether\>** moving along, my next incomplete task is reviewing triptych's security proofs more deeply, which dovetails with this :P  
**\<sarang\>** Yeah, a nice tie-in  
**\<suraeNoether\>** finally, i'm working on matching simulations today. i'm experiencing a data management and presentation issue, but i hope for the end of the day a nice graph displaying performance of Eve as a function of ring size and churn length  
**\<sarang\>** Nice!  
**\<suraeNoether\>** this will come along with a push to my repo with all the code used to generate that, and explanations so people can replicate it  
**\<sarang\>** word  
**\<suraeNoether\>** that's it, if i had presented in the other order then your "barging" would have been a great segue into \*your\* work for the week :P  
**\<sarang\>** We can pretend otherwise  
**\<sarang\>** I have completed a draft of the Triptych preprint, which is now in suraeNoether's hands  
**\<sgp\_\>** suraeNoether: I'm really looking forward to that chart  
**\<sarang\>** it includes my proposed linkability+non-frameability definition  
**\<sarang\>** Figured out the CLSAG linkable anonymity definition, which is not as strong as Backes, but does the job IMO  
**\<sarang\>** I've also been working with Aram from Zcoin on some related Groth proving system stuff  
**\<sgp\_\>** what's the shortfall on the linkable anonymity definition, even if there's no practical difference?  
**\<sarang\>** There will be a neat paper coming out from them on that shortly, which they graciously provided to me in advance  
**\<sarang\>** sgp\_: Backes permits key corruption, which doesn't work with our DDH hardness assumption  
**\<sarang\>** Instead, we assume the adversary can obtain key images  
**\<sarang\>** And that the adversary can pack rings with their own malicious keys  
**\<sgp\_\>** sarang: thanks  
**\<sarang\>** (which you can assume are trivially corrupted)  
**\<sarang\>** This is already stronger than the existing definition that was used  
**\<sarang\>** Otherwise, I also wish to update the DLSAG paper (which will appear next year in conference proceedings) with the CLSAG security model, since they are structurally extremely similar  
**\<sarang\>** So overall, a lot of tedious (but still interesting) stuff involving formal definitions and proofs  
**\<sarang\>** When suraeNoether finishes his review of the Triptych preprint, it'll go to the IACR archive  
**\<sarang\>** and presumably any CLSAG/DLSAG updates as well  
**\<suraeNoether\>** hmm Backes' linkability definition is a puzzle i have very little intuition about: should it be harder or easier to present 2 signatures from the same key without linking the signatures than it should be to present 201 signatures from 200 different keys without any of them linking? \*taps chin\*  
**\<sarang\>** The adversary picks which keys IIRC, right?  
**\<suraeNoether\>** yeah, adversary can use KeyGen or any other way of selecting the verification keys  
**\<suraeNoether\>** may not even know the secret key, so it's genuinely adversarial  
**\<sarang\>** ya  
**\<sarang\>** The adversarial generation isn't really a big deal, since soundness implies the adversary's choice of keys satisfy the verification equations  
**\<sarang\>** and then you rely on the one-way mapping  
**\<suraeNoether\>** actually, it's not clear; each verification key needs to be in \mathcal{VK}, and it's not specified where that comes from, i'm assuming from the challenger  
**\<suraeNoether\>** in which case the adversary has to pick challenge keys to break linkability, it's not enough for the adversary to pack all rings with fake pubkeys  
**\<sarang\>** Backes even notes that generating `q` such signatures is trivial, since you simply use separate keys  
**\<sarang\>** Fake pubkeys should be acceptable  
**\<sarang\>** since the adversary does all this offline, or otherwise generates the pubkeys in its own (seemingly) valid transactions  
**\<sarang\>** The `q=1` case feels like some kind of targeted linking attack, where the general `q` case seems like a broader "hope for a collision somewhere" attack  
**\<sarang\>** suraeNoether: thoughts?  
**\<suraeNoether\>** nothing concrete. the way this definition is written feels very very counter-intuitive to the way you and i have discussed linkability in the past.  
**\<sarang\>** Yeah, and I haven't seen it anywhere else  
**\<sarang\>** Again, I don't feel any particular need to use it  
**\<sarang\>** But getting the existing definition more formalized in a challenger-player sense seems wise  
**\<suraeNoether\>** agreed  
**\<sarang\>** roger  
**\<sarang\>** OK, that's my update  
**\<sarang\>** Does anyone else have interesting (or uninteresting) research to share?  
**\<suraeNoether\>** ok, dude, i think i know the problem here  
**\<suraeNoether\>** with that definition  
**\<suraeNoether\>** or at least my problem with it  
**\<sarang\>** Ooh, go on  
**\<suraeNoether\>** linkability is a property that has a "correctness" component and a "soundness" component. to correctly link two things means to link them when they should be linked. to soundly link two things is to \*only\* link them when they should be linked  
**\<suraeNoether\>** you called this positive and negative linkability at some point  
**\<suraeNoether\>** i feel like this definition is mashing the two together  
**\<suraeNoether\>** or attempting to  
**\<suraeNoether\>** anyway, my thoughts don't go deeper than that yet  
**\<sarang\>** Backes uses non-frameability to show that you can't make signatures that \_appear\_ to link without knowing/using the same key  
**\<sarang\>** and linkability to mean that you can't make sigs with the same key(s) but different tag(s)  
**\<sarang\>** The reviewer didn't like the CLSAG paper's use of positive/negative/soundness in linkability  
**\<suraeNoether\>** hmm  
**\<suraeNoether\>** okay, that's going to require more thought  
**\<suraeNoether\>** anywya, now i'm done. :P  
**\<sarang\>** A lot of this is simply getting the right terminology for the definition(s) of choice  
**\<sarang\>** I happen to like using linkability to refer to both  
**\<sarang\>** since that's typically what you want  
**\<sarang\>** but it's two different concepts  
**\<sarang\>** OK, we can move on to any other research  
**\<sarang\>** or to the next topic, QUESTIONS  
**\<suraeNoether\>** i have a pretty general observation  
**\<suraeNoether\>** which may be relevant in terms of independent interest  
**\<suraeNoether\>** a property like linkability applies to all ZK proofs. for example, our ring signatures are ZK proofs of knowledge of a secret key. but they are \*linkable\* proofs of knowledge, so that if the same witness data (keys) are used for two different proofs (signatures), then an observer can link them.  
**\<suraeNoether\>** so just like ZK proofs have a property of correctness (if you know a witness, the proof is valid) and a property of soundness (if you don't know a witness, your proof is invalid), a linkable ZK proof is going to have a dual pair of notions for linkability  
**\<suraeNoether\>** i bring this up so that the next version of snarks has an L floating around  
**\<sarang\>** There's a related-ish property in sigma protocols, quasi-unique responses  
**\<sarang\>** But that relates to responses to the verifier challenge  
**\<suraeNoether\>** more reading to do :\  
**\<sarang\>** There's probably a subtle relationship to (SHV)ZK  
**\<sarang\>** and therefore witness indistinguishability  
**\<sarang\>** (which follows from SHVZK)  
**\<suraeNoether\>** anyway  
**\<sarang\>** Normally, providing two proofs should not reveal distinguishing information about the witnesses  
**\<suraeNoether\>** right  
**\<sarang\>** Hopefully you will enjoy the Triptych paper, which builds a linkable construction on top of a sigma protocol :)  
**\<suraeNoether\>** i enjoyed it the last time i read it, and the tiem before that. it takes awhile to digest :P  
**\<suraeNoether\>** ok, i gotta bounce, i'm not feeling well; my list of 3 unfinished tasks is also my list of action items today  
**\<sarang\>** roger  
**\<sarang\>** My ACTION ITEMS are getting these new definitions and proofs typeset and finalized, determining their DLSAG applicability, a few other organizational issues on the CLSAG paper to prepare it for resubmission, and getting Triptych submitted on review  
**\<sarang\>** Any other final thoughts, comments, or questions before this meeting ends?  
**\<moneromooo\>** I have an unrelated question.  
**\<sarang\>** ?  
**\<moneromooo\>** I was wondering whether atomic swaps between two cryptonotes with hte same curve etc (ie, not the general case) is possible now.  
**\<moneromooo\>** Well, assuming the tooling was there of course, which it isn't.  
**\<moneromooo\>** In theory I mean.  
**\<sarang\>** I don't know of a good way that retains indistinguishability as well as DLSAG does, and that still has the tracing issue  
**\<sarang\>** If you were willing to accept and mitigate the tracing issue, then its method could do it  
**\<sarang\>** its = DLSAG's  
**\<moneromooo\>** What is the tracing issue already ?  
**\<sarang\>** The fixed basepoint used for dual-address key images allows determination of unwanted signature linking  
**\<sarang\>** It isn't clear how to do a DLSAG-type construction with the variable-basepoint key images used currently  
**\<sarang\>** I should more precisely say, the use of a fixed basepoint and having output private keys used as the corresponding key image discrete log (this doesn't exist in more recent constructions that use a fixed basepoint but in a different way)  
**\<sarang\>** Oh, suraeNoether: do you think it's useful in the LA definition to include the linking tag oracle separately from the signature oracle?  
**\<sarang\>** The player can get the linking tag oracle result simply by querying the signature oracle on a public key by using a random ring and message (and ignoring everything but the returned linking tag)  
**\<sarang\>** Having a separate oracle only really serves to make it clear that the player doesn't necessarily need to convince a user to sign messages, but can obtain linking tags otherwise  
**\<sarang\>** (although in this security model, it can do both)  
