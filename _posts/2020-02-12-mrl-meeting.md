---
layout: post
title: Logs for the MRL Meeting Held on 2020-02-12
tags: [dev diaries, crypto, research]
author: asymptotically / Sarang
---

# Logs

**\<sarang\>** Greetings!  
**\<ArticMine\>** Hi  
**\<UkoeHB\_\>** Hiya  
**\<n3ptune\>** Hello  
**\<UkoeHB\_\>** Thanks selsta I'll look  
**\<sarang\>** I suppose we can move to roundtable discussion  
**\<sarang\>** Who wishes to share interesting research?  
**\<sgp\_\>** hello  
**\<n3ptune\>** Something quick from NRL  
**\<n3ptune\>** We've been looking at some results regarding the extra field in transactions.  We have one thing to share today  
**\<n3ptune\>** Here is an analysis of Payment id usage since v10 when unencrypted payment ids were deprecated:  
**\<n3ptune\>** https://usercontent.irccloud-cdn.com/file/Xf1uZRsZ/image.png  
**\<n3ptune\>** (Sorry there is an uncorrected typo: "Unencrypted Included x Encrypted Absent" should be 232980 (not 232972) and "Unencrypted Absent x Encrypted Included" should be 1904765)  
**\<sarang\>** ^ moneromooo etc.  
**\<UkoeHB\_\>** It's actually not 'mandatory', just part of the core wallet's behavior  
**\<UkoeHB\_\>** As jtgrassie liked to insist :p  
**\<sarang\>** Nothing stops a wallet from simply including a fixed default value either  
**\<sarang\>** (can't enforce "uniformly random" in that way)  
**\<sarang\>** Once again touches on the idea of extra parsing/enforcement  
**\<sarang\>** Are there other indications of what non-standard software it might be?  
**\<sgp\_\>** 17% is a good amount that didn't update properly  
**\<sgp\_\>** do they save slightly on fees?  
**\<n3ptune\>** That's a good question, we didn't look into the transactions but there may be other things going on that make more of a fingerprint  
**\<sarang\>** Thanks n3ptune  
**\<n3ptune\>** Thanks! Just sharing these numbers today  
**\<sgp\_\>** if the fees are lower, I can see someone setting it up this way if they process many transactions  
**\<moneromooo\>** Looking at long payment id usage since 1.7e6 is a bit pointless. What is it from 1.98e6 ?  
**\<n3ptune\>** I can check  
**\<UkoeHB\_\>** n3ptune: the core wallet only creates encrypted payment IDs for all 2-output tx, would you mind looking into the distinction (proportion encrypted IDs with 2-output and \>2 output)\>  
**\<UkoeHB\_\>** moneromooo: was the dummy encrypted payment ID also since 1.98e6?  
**\<n3ptune\>** Another good question  
**\<moneromooo\>** I think before.  
**\<moneromooo\>** It was merged late january 2019.  
**\<moneromooo\>** Yes, it was included in the release for that height.  
**\<Isthmus\>** I don't think we looked at long PID  
**\<Isthmus\>** Sorry, here is the updated figure  
**\<Isthmus\>** https://usercontent.irccloud-cdn.com/file/t5ozuruh/image.png  
**\<n3ptune\>** ?  Long PID = Unencrypted PID, yes  
**\<moneromooo\>** Yes.  
**\<Isthmus\>** Oh, I was thinking integrated  
**\<Isthmus\>** Sorry, on 4 hours of sleep, no coffee, and in presentations at a crypto compliance company all morning  
**\<Isthmus\>** But they're cool with me being half in MRL, obviously they've been pretty supportive of my research over the past year :- )  
**\<sarang\>** How ominous  
**\<UkoeHB\_\>** it might just mean more significant implementations exist than just core, which might be good news also  
**\<sarang\>** Well, not if the result is fingerprinting  
**\<UkoeHB\_\>** n3ptune: also, afaik coinbase transactions do not use payment IDs (a round 200k tx over that period)  
**\<n3ptune\>** The numbers should be for non-coinbase only  
**\<sarang\>** Well, in the interest of time, shall we continue? Hopefully we can get more detailed data, which can help any future decisions about parsing  
**\<sarang\>** Thanks for the data Isthmus and n3ptune  
**\<n3ptune\>** Thx, I'll check out those questions  
**\<sarang\>** Other research to discuss or share?  
**\<sarang\>** UkoeHB \_ ?  
**\<sarang\>** suraeNoether ?  
**\<sarang\>** OK, I can discuss a few short items  
**\<UkoeHB\_\>** ok, I sketched out a light node proposal https://github.com/monero-project/research-lab/issues/69 pls leave your thoughts there if interested  
**\<sarang\>** Ah ok, nvm  
**\<sarang\>** go ahead UkoeHB\_  
**\<UkoeHB\_\>** ZtM2 I got through multisig and the draft of that chapter is done, started working on escrowed marketplace chapter which will be done by next meeting https://www.pdf-archive.com/2020/02/12/zerotomoneromaster-v1-0-25/zerotomoneromaster-v1-0-25.pdf  
**\<UkoeHB\_\>** thats all from me  
**\<Isthmus\>** @UkoeHB\_ just scoped that proposal last night, looks like great stuff  
**\<sarang\>** Looks to be similar to SPV structure?  
**\<UkoeHB\_\>** possibly, idk anything about SPV  
**\<sarang\>** I worked out data storage inside RCT3 proofs (both single- and multi-input) as well as storage in multi-input Triptych  
**\<sarang\>** Finished code and tests for new transaction proofs  
**\<sarang\>** did some Dandelion++ review  
**\<gingeropolous\>** yay triptych!  
**\<sarang\>** Wrote some code to demo spend/non-spend status proofs that have been discussed previously  
**\<sarang\>** and overhauled the Omniring/RCT3/Triptych key image multisig construction protocol  
**\<ArticMine\>** Any size indications for triptych?  
**\<sarang\>** Individual transactions? Sure, that's been available for some time  
**\<sarang\>** https://github.com/SarangNoether/skunkworks/blob/sublinear/triptych.md  
**\<sarang\>** Now that I have I/O structure data from n3ptune, I can run some chain-wide estimates based on that  
**\<sarang\>** since different tx protocols imply different tradeoffs as I/O structure changes  
**\<ArticMine\>** It seems to me a move in the reference tx size from 3000 bytes to 4000 bytes would be needed  
**\<ArticMine\>** Which is very reasonable given the mixin privacy gains  
**\<UkoeHB\_\>** why increase?  
**\<sarang\>** It depends on what protocol (if any) is chosen, what parameters used, etc.  
**\<UkoeHB\_\>** ah i see, for 1024 ring size  
**\<ArticMine\>** I am saying with N = 512 or 1024  
**\<gingeropolous\>** what are the hurdles for tryptich? besides me wanting to spell it wrong all the time  
**\<ArticMine\>** If this goes through, by the time it makes it to the main chain the drop in block reward would easily cover the fee increase  
**\<ArticMine\>** If we increase the penalty free block weight to 400000 bytes  
**\<sarang\>** gingeropolous: no peer review yet  
**\<sarang\>** I also need to know the practical drawbacks to the more complex multisig operations  
**\<sarang\>** especially on lower-powered devices  
**\<sarang\>** They'd need to support Paillier encryption/decryption for multisig with any of the sublinear protocols  
**\<ArticMine\>** We must also keep in mind this is less than a year of Nielsen's Law of Internet Bandwidth  
**\<gingeropolous\>** ugh. what, for those silly hardware wallets?  
**\<sarang\>** Well, anything that would need to participate in multisig  
**\<sarang\>** The process involves doing peer-to-peer Paillier operations, some Schnorr and commitment stuff, etc.  
**\<UkoeHB\_\>** would multi-tryptich work with any kind of join protocol?  
**\<sarang\>** Unclear. It's still in the early stages  
**\<UkoeHB\_\>** before this meeting gets wrapped up, I am curious about the state of discussion around Monero's difficulty algorithm; zawy12 seems to have done a lot of research on the topic of difficulty algos https://github.com/zawy12/difficulty-algorithms/issues/50  
**\<UkoeHB\_\>** and suraeNoether was at one point doing research on that area  
**\<UkoeHB\_\>** apparently Monero's algorithm is quite bad, relatively speaking  
**\<sarang\>** Interesting; I had seen some of their earlier work, but not this summary  
**\<sarang\>** The conclusion seems to be that the potential oscillations would be of much greater importance for uses with large mining variance  
**\<sarang\>** (which isn't really part of the design choice)  
**\<sarang\>** Worth a read, now that we have the link  
**\<sarang\>** UkoeHB\_: did you want to discuss extra sorting, given its relationship to the information from n3ptune and Isthmus?  
**\<UkoeHB\_\>** I feel Ive made my case for it, although Isthmus says they are working on a big comprehensive report so at that time I may recapitulate  
**\<sarang\>** Fair enough. Trying to enforce better uniformity and order is a good idea, so I agree  
**\<sarang\>** It may come down to questions of efficiency and "someone needs to write it", but who knows  
**\<UkoeHB\_\>** enforcing it should be less than 100 lines of code IMO  
**\<sarang\>** Sounds like someone is volunteering :D  
**\<sarang\>** Anyway, there is a Konferenco meeting starting presently, so any final comments or thoughts before adjourning?  
**\<sarang\>** Righto; thanks for attending, everyone  
