---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-09-23
summary: Surae work, Sarang work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** First up, GREETINGS  
**\<suraeNoether>** howdy!  
**\<sarang>** And, I suppose, ROUNDTABLE as well  
**\<sarang>** suraeNoether: care to go first?  
**\<suraeNoether>** sure, I spent all weekend working on the CLSAG paper for submission  
**\<suraeNoether>** the deadline is 5am (my time) tomorrow morning  
**\<sarang>** Some really good changes to definitions  
**\<suraeNoether>** i've been up past 2am for the past few nights trying to get it all done  
**\<sarang>** Better capturing forgeries, and cleaning up linking :D  
**\<suraeNoether>** yeah, the paper is actually v gorgeous now, and i'm excited to update the preprint after submission  
**\<suraeNoether>** also, reviewing the DLSAG paper today for submission to the same proceedings  
**\<suraeNoether>** i missed the deadline for getting thring signatures out there, but 2/3 ain't bad  
**\<suraeNoether>** once that deadline passes, i'm shifting gears back to code for a few days  
**\<sarang>** Oh well, there are other good destinations too  
**\<suraeNoether>** aaaand that's it  
**\<suraeNoether>** yes for sure  
**\<sarang>** Some with rolling deadlines, which may be much more convenient  
**\<sarang>** I've been working on a hodgepodge of items  
**\<sarang>** FC 2020 submission review  
**\<sarang>** Ongoing work with the Lelantus author on ideas and constructions for removing its sender tracing issue  
**\<sarang>** It's proving surprisingly tricky to get a Lelantus construction that admits both one-time addresses and prevents sender linking  
**\<sarang>** It has to do with how range proofs are constructed using the one-time address, since this is used directly in a commitment  
**\<sarang>** In the case without one-time addresses, the recipient generates a representation proof that assures verifiers the range proof is with respect to generators with unknown discrete log relationships  
**\<sarang>** In the case with one-time addresses, I don't know a way to achieve this  
**\<sarang>** So, work continues on it  
**\<sarang>** Finally, the RCT3 authors released an update to their preprint  
**\<sarang>** This is quite exciting... it modifies how public keys are used within spend proofs to fix a problem with a particular proof (which would otherwise lead to an exploit)  
**\<sarang>** but it also permits the use of a single log-sized proof across all spends  
**\<sarang>** So there are substantial changes to review and test  
**\<suraeNoether>** i'm eager to get further into the details of them. i'm still skirting the edges of lelantus, ringct3, etc. HALO was a surprisingly short paper, and so many recent results are showing us all how important it is to formalize our transaction protocol as a circuit...  
**\<sarang>** Halo is quite interesting, but seems to be widely misreported as something that is practically usable now for chain verification, which it is not  
**\<sarang>** There is also not a soundness proof, but there are for some of the underlying constructions (which bodes well)  
**\<sarang>** Sean (the author) thought there might be an interesting application to how Bulletproofs' inner-product arguments are batched  
**\<sarang>** so it's neat stuff  
**\<suraeNoether>** i liked the response "big if sound"  
**\<sarang>** Heh, me too  
**\<suraeNoether>** i don't know who tweeted that, but it's working it's way into my daily vocabulary.  
**\<suraeNoether>** at the grocery store, looking at humongous squashes. Knock on the squash. "Big if sound."  
**\<sarang>** -\_\_\_-  
**\<sarang>** Does anyone else have interesting work to share, or questions on anything?  
**\<mikerah>** Can you go into more details about specifying the monero transaction protocol into a circuit  
**\<suraeNoether>** its\*  
**\<defterade\_>** What are the chances of CSLAG making it in the April hardfork?  
**\<suraeNoether>** mikerah: long story short: a lot of the ZK proof systems out there rely on showing "Given an arithmetic circuit that describes a function f(-), here is y and a proof p that I know a secret x such that y = f(x)."  
**\<sarang>** Specifying transaction requirements as a language suitable for various proving systems is useful for broader application  
**\<suraeNoether>** the function f formalizes the language sarang just mentioned  
**\<sarang>** defterade\_: depends entirely on audits, which I'd like to address momentarily  
**\<suraeNoether>** it can be complicated to take a statement like "I know one of these ring members, and the associated commitment opening" and turn it into an arithmetic circuit  
**\<suraeNoether>** or, the resulting circuit could be really slow  
**\<suraeNoether>** or too large or what have you  
**\<suraeNoether>** so there's a challenge in formalizing our ring confidential transaction "statements" into an arithmetic circuit  
**\<sarang>** Well, systems like Omniring take such statements, formalize them into a language, and then construct a proving system for that language  
**\<sarang>** (albeit less generally)  
**\<mikerah>** Have there been other attempts at specifying ring signatures in arithmetic circuits  
**\<kenshamir[m]>** eprint 1076 also uses recursive proofs. The benchmarks are asymptotically equal to Marlon though.  
**\<suraeNoether>** we can exploit a lot of available proving systems out there, possibly yielding more efficient ring confidential transactions, given a description of such a circuit  
**\<sarang>** Not without trust requirements at this point  
**\<kenshamir[m]>** There was no comparison to Halo because Halo was too informalq  
**\<sarang>** Proving systems specific to particular language constructions (Bulletproofs range proofs, Omniring, RCT3, etc.) tend to be reasonably efficient for having no private setup  
**\<suraeNoether>** mikerah: not that i know of, yet... certainly not in the DDH + ROM setting without trusted setup  
**\<sarang>** As far as CLSAG goes, OSTIF informs me that one code reviewer quoted $24750 (code only, not the paper)  
**\<mikerah>** Ooh. Another research project idea!  
**\<kenshamir[m]>** \<mikerah "Have there been other attempts a"> I think you can do it, but it would not be efficient; a statement like Pubkey 1 OR pubkey2 OR ... PubkeyN  
**\<sarang>** And one math reviewer quoted $7200 (paper only, not the code)  
**\<sarang>** They are looking into it more  
**\<suraeNoether>** i have to go for a doctor's appointment; please accept my apologies for bailing early. sarang, care to take it from here?  
**\<sarang>** The math review could be completed by the end of November in this case  
**\<sarang>** sure suraeNoether, see ya  
**\<suraeNoether>** that's a decent deal for the math review tbh. who is it?  
**\<sarang>** It isn't clear if I can share that publicly before they've made a formal commitment  
**\<sarang>** but it's someone quite respected  
**\<mikerah>** If I'm going to take a guess, I think it's Dmitry Khovatovich  
**\<mikerah>** Not sure if I spelt his name correctly  
**\<sarang>** Unclear about the timeline for the code review  
**\<sarang>** OSTIF is inquiring with other groups  
**\<sarang>** Any other questions or items to share before moving on?  
**\<sarang>** All right then; on to ACTION ITEMS  
**\<sarang>** This week, I'll be completing the edits and submission for FC 2020 (and updating on IACR and MRL archive)  
**\<sarang>** and continuing review of the updated RCT3 proofs and proving system  
**\<sarang>** there's a lot of stuff to unpack with that  
**\<sarang>** Anything else before we adjourn?  
**\<defterade\_>** Do the changes made in CLSAG warrant a level of audits to the extent of RandomX? (i.e. >= 3 code reviews)  
**\<sarang>** The code changes for the basic signature scheme (and some underlying plumbing) aren't terribly complex... there are plenty of other code changes that plug it in to the rest of the codebase  
**\<sarang>** The math isn't very different from MLSAG, but is different enough to warrant a formal review... additionally, the proofs in the original MLSAG paper weren't very formal either, and we've worked to make the CLSAG definitions and proofs more extensive  
**\<sarang>** That being said, I would be surprised if 3 separate code audits would be of value in this case, depending on the scope  
**\<sarang>** Getting review of the math, whether by the usual peer-review process or a paid review, is certainly a good idea  
**\<ArticMine>** So are looking instead at one maybe two audits?  
**\<sarang>** It's not up to me  
**\<defterade\_>** But it would be fair to say the financial burden for the community is expected to be lower than RandomX?  
**\<sarang>** Given the numbers presented so far, it seems so  
**\<sarang>** The sum of the two current quotes (code and math) is $31950  
**\<sarang>** Hopefully the code quote will be reduced once the scope is more clearly (and perhaps narrowly) defined  
**\<sarang>** There's the code that produces and checks signatures, and then there's the code that integrates these into transactions etc.  
**\<defterade\_>** Has there been any discussion on changing the ring size when CLSAG goes live?  
**\<sarang>** There has been  
**\<sarang>** IIRC increasing from 11 to 13 would retain the same verification time as we have now  
**\<sarang>** Whether or not this marginal increase is "worth it" is an open question  
**\<defterade\_>** Doesn't break the prime sequence, nice  
**\<defterade\_>** Okay  
**\<sarang>** Righto, thanks to everyone for attending; logs will be posted to the GitHub issue shortly  
