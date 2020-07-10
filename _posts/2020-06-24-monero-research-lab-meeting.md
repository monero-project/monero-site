---
layout: post
title: Logs for the MRL Meeting Held on 2020-06-24
tags: [dev diaries, crypto, research]
author: asymptotically / Sarang
---

# Logs

**\<sarang\>** First, GREETINGS  
**\<ArticMine\>** Hi  
**\<I3^RELATIVISM\>** 0/  
**\<Isthmus\>** Greetings  
**\<sarang\>** All right, on to ROUNDTABLE, where anyone is welcome to share research of interest  
**\<sarang\>** Who would like to go first?  
**\<sarang\>** Isthmus:?  
**\<Isthmus\>** Heyo  
**\<Isthmus\>** Update on quantum audit, here is our preliminary analysis existing vulnerabilities. (Results subject to change as research progresses!)  
**\<Isthmus\>** https://usercontent.irccloud-cdn.com/file/RKKVcmGZ/image.png  
**\<Isthmus\>** https://usercontent.irccloud-cdn.com/file/ZPskux3i/image.png  
**\<Isthmus\>** It's kind of a mixed bag, tbh.  
**\<sarang\>** To be expected, I suppose  
**\<sarang\>** There are many components of interest  
**\<Isthmus\>** Our reliance on DLP is the biggest weak spot right, as expected  
**\<sarang\>** ya  
**\<Isthmus\>** That's all on that, any Q's?  
**\<sarang\>** By "ring signatures" I assume you mean a quantum adversary identifying signing indices via key images?  
**\<Isthmus\>** Yea (or via any mechanism)  
**\<Isthmus\>** Oh, one thing that we started wondering about  
**\<Isthmus\>** If you're creating a multisig transactions and one of the signers has a quantum computer, can they gain any extra information about their co-signers  
**\<sarang\>** Well, you can just derive the whole private key  
**\<sarang\>** if that's what you mean  
**\<Isthmus\>** Yea. I need to sit down with ZtM2 to figure out what's passed around, and what should be unknown, just crossed my mind yesterdy  
**\<sarang\>** That's a good point  
**\<sarang\>** I don't think anyone had specifically mentioned the multisig process during the planning stages of your analysis  
**\<Isthmus\>** Yea, we just added it. Will probably realize 1 or 2 more aspects to check throughout the next few weeks  
**\<Isthmus\>** Keep dropping us your ideas :- )  
**\<sarang\>** Are there particular assumptions made about whether or not the adversary has a public key already?  
**\<sarang\>** e.g. the adversary suspects a particular address as a destination  
**\<Isthmus\>** I'm assuming that the adversary is a co-signer on the multisig transaction. They would know the public key with or without a quantum computer, right?  
**\<Isthmus\>** [erm, well we can consider the adversary both ways, this is just what I had been wondering about yesterday]  
**\<sarang\>** I mean in general, sorry  
**\<sarang\>** Not specific to multisig  
**\<Isthmus\>** Ah yea, quantum computer with your public key and quantum computer without your public key are two adversary models that are considered separately.  
**\<Isthmus\>** Though TBH the first one is pretty (sadly) easy  
**\<Isthmus\>** Public key --\> [shor's algorithm] --\> private key --\> init wallet --\> game over  
**\<sgp\_\>** sorry I'm late  
**\<sarang\>** And not even "your" public key  
**\<sarang\>** But just looking at a given transcation on chain  
**\<sarang\>** If the adversary's goal is to identify as much as possible about keys, addresses, etc.  
**\<sarang\>** Sending wallet address, receiving wallet address, etc.  
**\<Isthmus\>** Yea, if an outside observer plucks a transaction at random from the blockchain, with no further knowledge, what can they ascertain about 1) the sender, 2) the transaction, 3) the recipient  
**\<sarang\>** Right. And then what can they learn if they have an idea of possible addresses  
**\<Isthmus\>** Bingo  
**\<sarang\>** I assume that there is (or will be) a more specific write-up with details on what relates to this chart?  
**\<UkoeHB\_\>** Earlier I argued you could brute force output amounts if the DLP is broken (assuming recipient address is unknown), however I'll retract that. Output amounts are information-theoretically secure.  
**\<Isthmus\>** Gotcha  
17:23:44 \* Isthmus makes a note  
**\<Isthmus\>** Yeah, this will all be in the research writeup, and more intuitive parts will be included in the general audience writeup  
**\<sarang\>** Anything else to consider about your analysis at this point Isthmus?  
**\<Isthmus\>** We were thinking about some medium articles throughout, just for good measure  
**\<Isthmus\>** Nope, that's all on the quantum end for now  
**\<sarang\>** OK great!  
**\<Isthmus\>** I started going down a rabbit hole of subliminal channels this morning, but will save those thoughts for later  
**\<sarang\>** Did anyone else wish to present research of interest?  
**\<UkoeHB\_\>** This means even if both DLP and hash preimage are broken, there should not be a way to extract the recipient's address from an output.  
**\<Isthmus\>** That's a huge relief, or else we could recursively apply Shor's algorithm and move forward through the transaction tree breaking everybody's wallets  
**\<sarang\>** I'll share a few things  
**\<sarang\>** Here's a time-windowed CDF of spend age: https://usercontent.irccloud-cdn.com/file/5EccXpmE/cdf\_window.png  
**\<sarang\>** Still tracks the gamma distribution pretty well, but there are differences over time (pre-CT)  
**\<sarang\>** Related to this, I posted my tracing code: https://github.com/SarangNoether/skunkworks/tree/tracing  
**\<sarang\>** It now supports iterative updates, which may be useful  
**\<sarang\>** Unrelated to this, I'm still working with the CLSAG auditors  
**\<sarang\>** I rewrote the proof for Theorem 1 that relates unforgeability to non-slanderability, and it now addresses the auditors' suggestions  
**\<sarang\>** There are a bunch of other non-security-related updates to it  
**\<sarang\>** and I'm now in the process of overhauling the linkability anonymity proof to use a better hardness assumption and method, which is a tedious process  
**\<sarang\>** but I think that will address their comments and be a stronger result  
**\<sarang\>** The auditors' conclusion is that the construction seems secure, and that the security model seems appropriate to the use case  
**\<sarang\>** This was the overall goal of the audit; suggestions relating to presentation, formality, etc. are very useful for later submission, but don't appear security-related  
**\<UkoeHB\_\>** Sounds like the audit is moving along well  
**\<sarang\>** It is! The code review portion has not begun yet, but there are no changes in code to be made as a result of the preprint audit at this point  
**\<sarang\>** Any questions on these research topics?  
**\<sarang\>** OK, did anyone else have anything to share before we move on?  
**\<sgp\_\>** nope  
**\<sarang\>** If not, we can move on to ACTION ITEMS for the coming week  
**\<sarang\>** I will be finishing up this linkable anonymity overhaul and incorporating it into the preprint, which will complete the updates needed for the auditors  
**\<sarang\>** Once that's done, I'll get the preprint in a submittable state  
**\<sarang\>** Anyone else?  
**\<sgp\_\>** I'll be opening a GitHub issue for segregating coinbase outputs into coinbase-only rings  
**\<sarang\>** It's a good time to discuss this, with an upcoming network upgrade for CLSAG at some point  
**\<sgp\_\>** yeah I think so too  
**\<sarang\>** especially given the spend-age data  
**\<sarang\>** I'd still love to see the corresponding data for bitcoin  
**\<sarang\>** but I don't have that dataset  
**\<sarang\>** all the Monero data is necessarily pre-CT because of deducibility  
**\<sarang\>** and any post-CT deducible data spends old funds and is therefore basically useless for those kinds of distributions  
**\<sgp\_\>** I've been pretty clear that I think this BTC data would be nice but isn't necessary to make this change  
**\<sarang\>** understood  
**\<sarang\>** OK, anything else before we adjourn?  
**\<UkoeHB\_\>** Isthmus I have to walk back my walkback (sorry for the interruption sarang). You can definitely brute force it if the DLP and hash preimage are broken. Information-theoretic security means nothing in the face of brute forcing all possibilities (64 bits worth). You'd 1) get the DLP of generator H and the commitment C, 2) pick an amount, 3) compute the possible derivation to scalar, 4) get its hash preimage,  
**\<UkoeHB\_\>** 4a) use the key sequence of bits from the preimage to test the encoded amount and only continue if it matches the guessed amount (very unlikely to match if the guessed amount isn't correct) 5) use the key sequence of bits from the preimage to compute the one time address derivation to scalar, 6) subtract it from the one time address private key to get the nominal private spend key, 7) get the DLP of the  
**\<UkoeHB\_\>** preimage key with respect to the tx pub key to get the nominal private view key, 8) test if the spend key can produce the view key directly (normal address) or if any reasonable sub address index can be used to extract a spend key that produces the view key,  9) repeat 2-8 until you get a match (step 4a will probably catch most mistaken guesses). Let's blame this  mishap on a stray synapse.  
**\<sarang\>** hmm  
**\<Isthmus\>** ohhhhhh  
**\<sarang\>** IIRC preimage on keccak is something like O(2^100) or so  
**\<sarang\>** but I'd have to check on that  
**\<Isthmus\>** Unrelated: Does ZtM2 talk about variable types or just math? Trying to figure out if fees are uint64 or what  
**\<UkoeHB\_\>** They are varints, which I mention in section 6.3 footnote iirc  
**\<Isthmus\>** Ah, perfect. Thanks!  
**\<sarang\>** Righto, let's go ahead and adjourn since it's now 18:00 UTC  
**\<sarang\>** Thanks to everyone for participating!  
