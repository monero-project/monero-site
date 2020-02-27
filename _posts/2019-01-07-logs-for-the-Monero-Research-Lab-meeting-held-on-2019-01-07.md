---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-01-07
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / surae
---

# Logs  

**\<suraeNoether>** okay everyone  
**\<suraeNoether>** time for our Monday research meeting  
**\<suraeNoether>** before we get going, let's open up the meeting to questions! i like questions  
**\<moneromooo>** I want to know whether knaccc's propose change to the ecdh mask is good/safe, so I can code it early enough for the fork.  
**\<suraeNoether>** is knaccc around? i'm still unclear enough on the details of \*what exactly\* is being proposed. in terms of security, picking a mask from the same set as the value to be hidden is fine to do, but the devil is in the details  
**\<sarang>** Right, so the idea was to make the ECDH amount mask deterministic from the shared secret  
**\<suraeNoether>** i thought it was to select the mask from a smaller set so we can describe it with fewer bytes  
**\<sarang>** e.g. mask = H('mask',z,i) for example  
**\<sarang>** There was a separate idea to shrink the size of the encrypted amount data type  
**\<sarang>** making the mask deterministic means you shave 32 bytes off each output  
**\<suraeNoether>** ah, i see. and the question is "will this be good enough entropy because z itself is hashed?"  
**\<sarang>** The only thing to consider, I think, is that outputs with the same index and shared secret share a mask  
**\<suraeNoether>** if we are concerned with loss of entropy, we can use HMACs. they don't lose entropy after iteratively hashing in the same way... oh  
**\<suraeNoether>** what if we add an additional nonce that indicates the index among the outputs, assuming the output keys are lexicographically ordered?  
**\<sarang>** From an MLSAG perspective, we care only that the mask is uniformly distributed and known only to the sender/recipient  
**\<sarang>** that's what the proposal includes  
**\<suraeNoether>** ie H(m,z,i,j) where j = j^th output  
**\<suraeNoether>** oh  
**\<suraeNoether>** i'm clearly catching up on this. :P i didn't know this was written up, can I get a link?  
**\<sarang>** I don't believe that was written up AFAIK  
**\<suraeNoether>** oh, then i feel a little less bad  
**\<suraeNoether>** wait quick question  
**\<suraeNoether>** H('mask',z,i,j)... z is the amount being masked here?  
**\<sarang>** No, z is the shared secret; z=arG in the standard address case  
**\<sarang>** The encrypted amount is still included elsewhere in the ecdh data  
**\<suraeNoether>** yeah, looks fine to me. my only concern is that an adversary gets some partial control over z  
**\<sarang>** How?  
**\<suraeNoether>** but that's taken care of by CDH  
**\<suraeNoether>** sender picks r  
**\<suraeNoether>** recipient picks a  
**\<suraeNoether>** they both have a little control  
**\<sarang>** Well previously we used a random mask and used z to encrypt that  
**\<sarang>** So anyone who got z could compute the mask anyway  
**\<sarang>** The difference here is that the mask is now completely deterministic  
**\<oneiric\_>** is there a "known-best" algorithm, or set of algorithms, for generating a bounded random distribution?  
**\<suraeNoether>** oneiric\_: you mean a uniform distribution on a bouned set or...?  
**\<suraeNoether>** that's true, sarang, but ...  
**\<sarang>** ...  
**\<suraeNoether>** there's a difference here, and i need to figure out how to express it. one moment.  
**\<sarang>** The way I see it, the difference is only that the mask is now deterministic but still limited to the view of sender/recipient  
**\<sarang>** It's reused if the same shared secret is used elsewhere with identical index  
**\<oneiric\_>** suraeNoether: mean like, obfs4 generates random padding for dpi resistance. they bin based on common tor packet sizes. would like to know if there are particular mutations should perform on sampled, binned sizes to get a good random distribution  
**\<suraeNoether>** okay, so the difference here is that \*partial adversarial control over this z\* is being combined with using z as input for a one-way function that is allegedly masking some secret information.  
**\<suraeNoether>** the sender presumably wants to protect their own amount  
**\<suraeNoether>** the recipient could just reveal their own private view key if they want to be a jerk  
**\<suraeNoether>** so control over view key a isn't a big deal  
**\<sarang>** Our use of hash functions is about as uniform as you can expect (slight bias with H\_s)  
**\<sarang>** Again, keep in mind that anyone who can compute the shared secret (e.g. view key) can \_already\_ decrypt the mask now  
**\<suraeNoether>** right, the only fix i can think of would be computing H('mask', HMAC(z), i, j), which would sort of ensure that the security reduces to \*revealing z,\* following the strength of hmacs  
**\<sarang>** and thereby reconstruct the amount commitment  
**\<suraeNoether>** and i'm not sure what would be "fixed"  
**\<suraeNoether>** other than, in general, i like avoiding using any adversarially controlled data as input for protecting a secret  
**\<sarang>** Pro: shave off 32 bytes per output; commitments themselves are not deterministic  
**\<sarang>** whoops, that was for the con list  
**\<sarang>** Only downsides I see in practice relate to reuse of shared secrets  
**\<suraeNoether>** well, if it's two separate transction,, the sender should select two distinct random keys  
**\<sarang>** Sure, but they don't have to  
**\<suraeNoether>** but what if a sender maliciously selects the same random transaction keys on purpose? what happens? the mask is the same for two different transactions.  
**\<suraeNoether>** right  
**\<suraeNoether>** but the sender already knows the amounts  
**\<sarang>** In any case, it only leaks information that the two parties had already  
**\<knaccc>** if you use the same r or s with the same recipient twice, i don't think that's a security breach  
**\<knaccc>** it's a linkability breach though  
**\<sarang>** But it was already  
**\<knaccc>** yes  
**\<suraeNoether>** knaccc: if i'm an observer and i know two transactions use the same mask, i can figure out which transaction is larger and i can compute the \*difference in amounts\* between those two transactions  
**\<suraeNoether>** so i suppose this could be a way for a sender to surreptitiously leak transaction amounts to exterior parties without ever revealing anything to them directly  
**\<sarang>** suraeNoether: that was already possible  
**\<knaccc>** suraeNoether yes i agree  
**\<knaccc>** right yes, they could always set the same mask twice  
**\<knaccc>** now there is only one random variable to not screw up :)  
**\<suraeNoether>** on the other hand, the problem can be avoided by computing the mask as H('mask', z, i, P\_output) where P\_output is the output key being masked.  
**\<sarang>** Not even that... the encrypted amounts already use the shared secret  
**\<suraeNoether>** why not H('mask', z, i, P)?  
**\<knaccc>** sarang lol yes good point  
**\<sarang>** In fact, encrypted amounts should also use P  
**\<suraeNoether>** okay, so including P seems to be a good way to avoid the lex ordering above too  
**\<knaccc>** holw on, what's z? the shared secret?  
**\<suraeNoether>** heck, you could include as much crap in that hash as possible, like the signing ring and everything public  
**\<sarang>** Oh heh, including P really does nothing  
**\<suraeNoether>** knaccc: yeah, rA = aR  
**\<sarang>** it's determined from z entirely  
**\<sarang>** d'oh  
**\<suraeNoether>** oh hehe  
**\<sarang>** Reusing this to the same full address will gain you nothing  
**\<sarang>** So: the motto is basically not to reuse shared secrets, or you're already being bad to yourself  
**\<suraeNoether>** and you may be being bad to your recipients  
**\<knaccc>** suraeNoether do you really mean Hs(aR||i)?  
**\<suraeNoether>** knaccc: yes  
**\<suraeNoether>** i think  
**\<knaccc>** cool just checking  
**\<suraeNoether>** \*thumbs up\*  
**\<knaccc>** cos it's only the per-output shared secret that is ever used anywhere  
**\<suraeNoether>** okay, moneromooo sarang  
**\<suraeNoether>** oh wait  
**\<sarang>** ...  
**\<suraeNoether>** okay i agree, re-using transaction keys r is the root of all evil.  
**\<suraeNoether>** but we need some way to order these keys for multiple outputs at least  
**\<moneromooo>** So since money is the root of all evil... you make money by reusing transaction keys ?  
**\<knaccc>** suraeNoether the ||i in the per-output shared secret does that, right?  
**\<suraeNoether>** heh  
**\<sarang>** yes  
**\<suraeNoether>** yes  
**\<suraeNoether>** yeah, that's a good way to deterministically derive masks  
**\<suraeNoether>** i like it  
**\<suraeNoether>** okay, moving along: do we have any further questions?  
**\<sarang>** There was the question of a reduced amount ecdh size  
**\<moneromooo>** I'd like to get that written out with details ^\_^  
**\<oneiric\_>** just the one about random distributions...  
**\<moneromooo>** The final "this is good, safe and vetted" version if you will.  
**\<suraeNoether>** oneiric\_: i need a little bit more detail on your question  
**\<moneromooo>** I thought the amount size one was already vetted ?  
**\<knaccc>** very non-urgent, but there is the refund scheme. https://paste.fedoraproject.org/paste/lpM4dWKuV7KKCeAPn~P4Fw/raw  
**\<suraeNoether>** knaccc: yeah i started reading that right before the meeting  
**\<sarang>** Regarding the 64-bit amounts, I know it was discussed earlier but thought it best to bring up in meeting for a final thumbs-up  
**\<oneiric\_>** suraeNoether: what more information do you need?  
**\<suraeNoether>** oneiric\_: " they bin based on common tor packet sizes. would like to know if there are particular mutations should perform on sampled, binned sizes to get a good random distribution" <--- do you mean you have a histogram and you need to pick a random number from that histogram as if it were a probability distribuiton? i'm not sure what you mean yet.  
**\<oneiric\_>** picking from a histogram sounds pretty close to what i want to do, or close to what obfs4 does  
**\<suraeNoether>** sarang: let's collaborate on an ascii one-sheet for moneromooo on both amounts and masks for moneromooo  
**\<suraeNoether>** oneiric\_: oh then the answer is: hells yes  
**\<suraeNoether>** i'm not sure if this is sufficiently on-topic for the room  
**\<oneiric\_>** ok, will keep looking elsewhere. thanks suraeNoether  
**\<sarang>** Can we confirm people's thoughts on reducing ecdh amount size?  
**\<suraeNoether>** oneiric\_: nah, i got you in PM  
**\<sarang>** Right now encrypted\_amount = amount + H(z)  
**\<oneiric\_>** :)  
**\<sarang>** all are 32 bytes as usual  
**\<sarang>** the proposal was to reduce amount to 8 bytes, take the bottom 8 bytes of H(z) and XOR  
**\<sarang>** thereby keeping that data type down to 8 bytes  
**\<knaccc>** moo has reimplemented that as encrypted\_amount = keccak("amount" || shared secret)  
**\<knaccc>** mooo\*  
**\<sarang>** Sure, that's even better  
**\<sarang>** Er, wait  
**\<sarang>** that's the final encrypted amount sent to the recipient?  
**\<knaccc>** oops i left out tons. i meant encrypted\_amount = 8 byte amount XOR 8 bytes of keccak("amount" || shared secret)  
**\<sarang>** aha  
**\<sarang>** yes  
**\<sarang>** I seem to remember suraeNoether had much to say about this earlier when it was first brought up?  
**\<knaccc>** i think surae might have been thinking about what would happen if there was an auth tag or something to check brute force attempts against  
**\<suraeNoether>** nope, i never should have brought auth into the discussion becuase it was aside the main point  
**\<sarang>** Is output index also considered in this hash construction?  
**\<suraeNoether>** so the main thing my concern was  
**\<knaccc>** yes the entire thing is encrypted\_amount = 8 byte amount XOR 8 bytes of keccak("amount" || Hs(8aR||i))  
**\<suraeNoether>** hiding an N-bit number with an N-bit number, mod 2^N  
**\<suraeNoether>** why 8aR? aR is guaranteed to be on the curve if A and R are both on the curve...  
**\<sarang>** Recipient can't guarantee anything about R  
**\<knaccc>** yes, but instead of checking if R is in the subgroup of G, we just mul8 so no check is required  
**\<knaccc>** everywhere you see people talking about aR, they really mean 8aR  
**\<knaccc>** that's something people don't discover usually until they read the code  
**\<knaccc>** because it's always ommitted for brevity  
**\<suraeNoether>** oh fantastic, that's fine  
**\<suraeNoether>** i usually only think about it when computing hash-to-piont  
**\<suraeNoether>** point\*  
**\<suraeNoether>** that's bad of me  
**\<moneromooo>** When people tell me aR, I compute aR...  
**\<sarang>** Hence writing up details on this as requested  
**\<knaccc>** moneromooo well in the ecdh case, you were using a shared secret that was based on 8aR  
**\<suraeNoether>** so, short answer on whether it's safe to just use 8 bytes of keccak to mask an 8 byte number  
**\<suraeNoether>** is yeah, it should be fine  
**\<knaccc>** partaay!  
**\<suraeNoether>** although rather than only xor'ing the first 8 bytes  
**\<suraeNoether>** you could break keccak(stuff) into 8 byte blocks and xor all of them  
**\<knaccc>** lol  
**\<sarang>** ?  
**\<sarang>** there's nothing to be gained from that  
**\<moneromooo>** Can I take this as a vote of non confidence in keccak ? :P  
**\<suraeNoether>** 8 byte amount XOR first 8 bytes of keccak XOR next 8 bytes of keccak XOR ...  
**\<suraeNoether>** no, it's simply using all the entropy from the output of keccak  
**\<knaccc>** it's pretty standard practice when you have a csprng to just xor the stream against the plaintext  
**\<sarang>** yes  
**\<suraeNoether>** yeah, it is  
**\<knaccc>** and you don't need more than 64 bits of entropy to encrypt 64 bits  
**\<sarang>** moneromooo: sure, replace keccak with the identity function for simplicity  
**\<moneromooo>** There is a pointless keccak you mean ?  
**\<knaccc>** i don't know what sarang means either  
**\<suraeNoether>** i'm just mentioning it's an option. if the first 8 bytes are indistinguishable from uniform, then great, but reducing the output of keccak to the first 8 bytes does a lot to hurt 2nd pre-image resistance.  
**\<moneromooo>** Hmm. OK. There's a few places where that's done. Like the payment id stuff.  
**\<moneromooo>** I think some subaddress stuff too.  
**\<knaccc>** right, so the question is whether the first 8 bytes of keccak are indistinguishable from uniform, which I think it is  
**\<knaccc>** otherwise it'd be a terrible hash  
**\<sarang>** I was only joking :/  
**\<knaccc>** hehe  
**\<sarang>** Yes, a subset of the hash output is uniform  
**\<suraeNoether>** i need to think about exactly how much 2nd pre-image resistance is even important here, though  
**\<sarang>** Keep in mind that the recipient does a commitment reconstruction too  
**\<sarang>** So any mismatch between encrypted amounts (which the sender can always just make up) and the commitment will be detected  
**\<sarang>** We should always assume that the sender is lying about the amount  
**\<suraeNoether>** even if we find two R, R' such that keccak("amount" || Hs(8aR||i)) is identical, we send two transactions to whoever controls the view key a, and the encrypted amount has the same xor mask... but so what? even if you took those two encrypted amounts and xor'd them together, you would cancel the mask, but then you just have two xor'd amounts... i don't know.  
**\<suraeNoether>** anyway, we can avoid the problem of 2nd pre-image resistance by XOR'ing all the blocks  
**\<suraeNoether>** i'm just not convinced it's important here  
**\<knaccc>** i think keccak is immune  
**\<suraeNoether>** keccak is pre-image resistant. truncations of keccak are not necessarily. easy example, the \*first bit\* of keccak is \*not\* second pre-image resistant  
**\<moneromooo>** So something like this ? https://paste.debian.net/hidden/38907823/  
**\<moneromooo>** (not tested yet)  
**\<knaccc>** if the first bit was not 2ndpreimageresistant, then it would not be a decent hash  
**\<suraeNoether>** moneromooo: that looks to do what i think it should do, yeah... but that's assuming sarang and others agree with me  
**\<moneromooo>** Well, it can't hurt, even if it's pointless.  
**\<suraeNoether>** knaccc: technically it's pre-image resistant \*asymptotically.\* but in the concrete sense of security, i can break 2nd pre-image resistance for the first bit in an astonishingly short period of time  
**\<knaccc>** it only helps if the randomness in the hash is not evenly distributed  
**\<suraeNoether>** moneromooo: yeah, the cost is a few milliseconds when signing. \*shrug\*  
**\<knaccc>** suraeNoether maybe you'll have to spell out how you'd do that, but i don't think that's possible if the first bit is uniformly distributed  
**\<suraeNoether>** knaccc: okay check it out  
**\<suraeNoether>** pick a random number x  
**\<suraeNoether>** compute keccak(x)  
**\<suraeNoether>** select the first bit  
**\<suraeNoether>** i have a 50% chance that your bit matches the first bit of keccak(0), and a 50% chance it matches keccak(1), and a 50% chance it matches keccak(2), and so on  
**\<knaccc>** yes  
**\<suraeNoether>** finding a 2nd pre-image for your bit is as rapid as finding a heads up fair coin  
**\<sarang>** this seems... pedantic  
**\<knaccc>** maybe i need to re-read the definition of 2nd pre-image resistance and why it matters in this scenario  
**\<sarang>** for the level we're working with (2^64) it should not  
**\<suraeNoether>** it is. i'm just saying truncating a secure hash function according to whatever security property we are talking about... in general.... doesn't result in a secure hash function.  
**\<suraeNoether>** ^ it is \*pedantic\*  
**\<suraeNoether>** knaccc the answer you are looking for perhaps is this: i have to try, in expectation, as many pre-images as there are possible outputs, before finding a 2nd pre-image  
**\<suraeNoether>** so asymptotically with a security parameter that gives you the ridiculous 1-bit case, it's still technically a secure hash function, i guess  
**\<suraeNoether>** it's just not practically one  
**\<suraeNoether>** anyway  
**\<suraeNoether>** sarang: how about you tell us about your work for the past week or so, and then i'll give my update, and anyone else doing any other work can chime in  
**\<suraeNoether>** and we'll wrap it up  
**\<knaccc>** suraeNoether ah sorry i know what you mean by 2nd pre-image resistance now, for some reason i was confused on terms. so yes, there is certainly a 2nd pre-image resistance issue at 64 bits  
**\<knaccc>** but not in a way that actually matters  
**\<sarang>** This past week has basically been a sandstorm of proposals to consider and review  
**\<sarang>** Payment IDs  
**\<sarang>** Refund addresses  
**\<sarang>** Block size and penalty structure  
**\<sarang>** and so on  
**\<sarang>** as well as the release of the second episode of Breaking Monero  
**\<knaccc>** oh yes i loved one of your metaphors in that vid  
**\<suraeNoether>** knaccc: right, finding a 2nd pre-image at 64 bits itself takes a long time. it's not cryptographically long periods of time short of 80 bits... but i can't really think of what such a pre-image would gain an attacker, either, so like I said i'm not sure how much it's necessary  
**\<knaccc>** can't remember what it was now  
**\<sarang>** Was it burning the envelope as a heuristic?  
**\<knaccc>** it was eating the envelope and walking away  
**\<sarang>** heh  
**\<knaccc>** i lolled like crazy on that  
**\<sarang>** The current loose consensus seems to be that a two-median approach to block size cap is reasonable but not ideal  
**\<sarang>** as it will at least slow the bloat  
**\<sarang>** For payment IDs there is less consensus about the timeline  
**\<suraeNoether>** my work this past week included: 1) some coding simulations for the matching paper, 2) working on the monero konferenco website, which should be up and running before jan 15, which is when i'm going to put out a formal call for papers (although i've already heard back from a few folks). 3) refund proposal by charuto (I think it was charuto?) and 4) block size stuff. i was going to participate in breaking  
**\<suraeNoether>** monero this week but I got caught up on the block size stuff, unfortunately... it appears to me like the problem with the blocksize debate boils down to this: we don't necessarily know what we want from our own dynamic blocksize adjustment methods  
**\<suraeNoether>** we know some loose ideas about what we want, like adapting for rapid short-term growth that handles, for example, the holiday season, and we want block sizes to stay small unless it's needed  
**\<suraeNoether>** but the details of what behavior is considered malicious and which should be adapted for ... these aren't totally clear to me. so i've been thinking about those things, too.  
**\<suraeNoether>** oh, and 5) fees. i've been thinking about fee strucutre. but that ties in with 4).  
**\<suraeNoether>** i just have not had time to get into the payment ID discussion :(  
**\<knaccc>** timelines are really about politics more than tech  
**\<sarang>** yes  
**\<sarang>** and the timelines for applications and users of pIDs  
**\<suraeNoether>** sarang: since pay\_id isn't necessarily a security issue, but they are so freaking annoying, where do you stand on timeline for deprecation?  
**\<sarang>** Well, they can be a problem if not enforced  
**\<sarang>** Most complete option is full deprecation of unenc/enc, which I support doing all at once  
**\<sarang>** probably fall 2019  
**\<sarang>** at the very least, remove unenc and enforce enc (to the extent possible) with wallet default  
**\<suraeNoether>** okay, guys, i want to continue some of these discussions for sure, but let's call it for the official meeting time  
**\<suraeNoether>** sarang, thank you  
**\<sgp\_>** Should I re-write my post to say all payment IDs are disallowed in the Fall 2019 upgrade?  
**\<sarang>** sgp\_: you were interested in learning who uses unenc, right?  
**\<sarang>** To get a better sense of who needs to switch over and for what uses  
**\<moneromooo>** Shapeshift does.  
**\<knaccc>** thanks guys  
**\<oneiric\_>** thanks all for the meeting  
