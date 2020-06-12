---
layout: post
title: Logs for the MRL Meeting Held on 2020-02-19
tags: [dev diaries, crypto, research]
author: asymptotically / Sarang
---

# Logs

**\<sarang\>** OK, let's get started with the meeting  
**\<sarang\>** GREETINGS  
**\<sgp\_\>** hello :)  
**\<n3ptune\>** Hello  
**\<needmonero90\>** I caught the meeting!  
**\<needmonero90\>** I would like to note that the meetings are not listed in the calendar  
**\<needmonero90\>** idk if thats intentional  
**\<sarang\>** Which calendar?  
**\<UkoeHB\_\>** Hi  
**\<sarang\>** And how are meetings applied to it?  
**\<ArticMine\>** Hi  
**\<sarang\>** Meeting times/agendas are always listed as meta repo github issues  
**\<sarang\>** Anyway, does anyone wish to begin the ROUNDTABLE with research topics of interest?  
**\<UkoeHB\_\>** Yes  
**\<sarang\>** Take it away UkoeHB\_  
**\<UkoeHB\_\>** I finished designing an escrowed marketplace 'protocol' which hopefully solves issues encountered by rbrunner in his openbazaar integration analysis. Also, multisig and txtangle have been finalized.  
**\<UkoeHB\_\>** https://www.pdf-archive.com/2020/02/19/zerotomoneromaster-v1-0-28/zerotomoneromaster-v1-0-28.pdf  
**\<sarang\>** Neat  
**\<UkoeHB\_\>** Finally, I had an idea for reducing minimum fee variability, and likewise for putting antispam directly in the protocol instead of relying on minimum fee  
**\<sarang\>** Are you seeking analysis on those?  
**\<UkoeHB\_\>** Which is issue #70  
**\<UkoeHB\_\>** They are open for comments any time anywhere  
**\<UkoeHB\_\>** Ah and sarang provided a draft for a tx knowledge proof chapter  
**\<sarang\>** aye  
**\<UkoeHB\_\>** (not really my research :p)  
**\<sarang\>** Heh, it's more of a summary of what's in the codebase (and some changes)  
**\<sarang\>** I look forward to reading the update draft you linked  
**\<UkoeHB\_\>**  A number of topics here are lonely and want attention btw https://github.com/monero-project/research-lab/issues  
**\<UkoeHB\_\>** \end  
**\<sarang\>** Thanks UkoeHB\_  
**\<sarang\>** Any questions or comments on those topics from anyone?  
**\<ArticMine\>** Yes  
**\<sarang\>** Please go ahead!  
**\<ArticMine\>** I have taken a look at issue 70  
**\<ArticMine\>** It actually has serious implications  
**\<ArticMine\>** When the LT medium increases substantially  
**\<ArticMine\>** I do have an idea for a solution  
**\<ArticMine\>** Very preliminary at this stage  
**\<ArticMine\>** As for an interim fix  
**\<ArticMine\>** The est is to pay the high or at least normal fee for escrows that are expected to last past the next hard fork  
**\<ArticMine\>** I will have comments on the issue in the next two weeks  
**\<ArticMine\>** end  
**\<sarang\>** Thanks ArticMine  
**\<sarang\>** Any other questions/comments from the topics presented by UkoeHB\_?  
**\<sarang\>** Righto  
**\<sarang\>** I'll share a few things  
**\<sarang\>** First, the Stanford Blockchain Conference is happening right now (and the next couple of days), and has streaming available: https://cbr.stanford.edu/sbc20/  
**\<sarang\>** Second, I did some math/code related to multiparty stuff for next-gen protocols  
**\<sarang\>** Third, I worked on code and write-ups for transaction proofs, both for an updated PR and for inclusion in Zero to Monero for better documentation  
**\<sarang\>** Fourth, I used chain data from n3ptune and friends to do better estimates of the cumulative effects of next-gen protocols  
**\<sarang\>** both in chain growth and verification time  
**\<sarang\>** Major caveat: these assume the same input/output distribution as the current chain, and are \_estimates\_only\_  
**\<sarang\>** and apply to post-bulletproof chain data only  
**\<sarang\>** https://usercontent.irccloud-cdn.com/file/ijaEAI7m/size.png  
**\<sarang\>** ^ this link shows the total chain growth estimates for various protocols with varying ring size  
**\<sarang\>** namely, from 16 to 1024 in powers of 2 (lines for visual aid only)  
**\<UkoeHB\_\>** Sarang would you mind adding an indicator for MLSAG and CLSAG at the 11 ring size 'point'? For reference  
**\<sarang\>** Sure, let me grab that data from my spreadsheet  
**\<sarang\>** hold please  
**\<UkoeHB\_\>** Or the super steep slope from 11 to 20 lol that goes off that chart  
**\<sarang\>** Heh, I had that data but didn't include it since it's crazy linear  
**\<sarang\>** I'm running the N=11 code for MLSAG/CLSAG, which I don't have handy   
**\<sarang\>** Anyway, I'll pull up the time data while we wait  
**\<sarang\>** https://usercontent.irccloud-cdn.com/file/T7uWoFEp/time.png  
**\<sarang\>** ^ verification time estimate for \_group\_operations\_only\_ at varying ring sizes  
**\<UkoeHB\_\>** I think it's interesting that all these protocols/signature schemes are similar size on the small end  
**\<sarang\>** All the verification times are linear (up to a logarithmic term due to multiexp)  
**\<UkoeHB\_\>** Where is tryptich multi hiding?  
**\<sarang\>** It's underneath Triptych-single  
**\<sarang\>** They're essentially indistinguishable  
**\<selsta\>** Does Triptych single have advantages over multi?  
**\<sarang\>** RCT3-multi suffers due to input padding requirements that still have a linear verification effect  
**\<sarang\>** selsta: a complete soundness proof :)  
**\<sarang\>** Update on MLSAG/CLSAG size estimates...  
**\<UkoeHB\_\>** Could you make a smaller graph from 0 to 128 ring size? Since those large ones seem pretty unreasonable  
**\<sarang\>** At N=11, MLSAG for that chain range is 7.84 GB, while CLSAG is 5.84 GB  
**\<sarang\>** (the actual size of that chain range is 7.9 GB)  
**\<sarang\>** https://usercontent.irccloud-cdn.com/file/DFhClmEe/time-small.png  
**\<sarang\>** ^ same time data, zoomed in  
**\<UkoeHB\_\>** Perfect thanks :) are time estimates for CLSAG/MLSAG available?  
**\<sarang\>** Heh, just writing that out  
**\<sarang\>** I have very early estimates on that, which are tricky since multiexp doesn't apply, and hashing is nontrivial  
**\<sarang\>** MLSAG N=11 estimate is 29.9 hours for that chain range (but I have \_not\_ double-checked it)  
**\<ArticMine\>** What hardware was used for the verification time calculations?  
**\<sarang\>** It's a single core on a 2.1 GHz Opteron machine, with a bonkers amount of RAM  
**\<sarang\>** I would rely on the timing data only for comparisons, not absolute values  
**\<ArticMine\>** age of CPU?  
**\<sarang\>** I am still in the process of getting CLSAG data, which requires additional test code  
**\<sarang\>** It's a gen-3 Opteron, if that's what you mean  
**\<UkoeHB\_\>** Is there a way others could run the same tests?  
**\<sarang\>** Again, only estimates using performance test code  
**\<sarang\>** For next-gen protocols, it's quite easy  
**\<ArticMine\>** Yes great it does give an idea thanks  
**\<sarang\>** Well, somewhat easy  
**\<sarang\>** You need to get multiexp performance timing data and use a linear interpolation that you plug into the simulator  
**\<sarang\>** For MSLAG/CLSAG you need to run more operation performance data  
**\<sarang\>** This is the simulator, which is still WIP: https://github.com/SarangNoether/skunkworks/blob/sublinear/estimate.py  
**\<Isthmus\>** https://usercontent.irccloud-cdn.com/file/HuPcfLdT/image.png  
**\<sarang\>** But again, it's tricky to do comparisons between MLSAG/CLSAG and the next-gens  
**\<Isthmus\>** (drive by data)  
**\<sarang\>** Wow, that's quite low  
**\<Isthmus\>** Oh yeah, the numbers are one thing. But moreso, we should all be more alarmed that analyzing something like this is possible for an outside observer  
**\<Isthmus\>** ;-)  
**\<sarang\>** Yep, and has certainly been a topic of interest!  
**\<Isthmus\>** It's a privacy risk to use subaddresses right now...  
**\<Isthmus\>** Anyways, I gotta bounce, sorry to spam n run  
**\<sarang\>** OK thanks for sharing the data Isthmus  
**\<sarang\>** Another good reminder that I/O structure reveals some information about subaddress use  
**\<sarang\>** Since Isthmus had to leave, were there other questions/comments on the data that I shared above?  
**\<sarang\>** UkoeHB\_: if you want to run tests as well, let me know after the meeting and I can let you know how to get the numbers you'll need  
**\<UkoeHB\_\>** My computer is quite weak, was just asking for viewers :)  
**\<sgp\_\>** sarang: can you remind us on the plans to fix this subaddress thing?  
**\<sarang\>** ah ok  
**\<sarang\>** Requiring separate tx keys per output is a good idea, but IIRC didn't have a huge amount of support when last brought up  
**\<sarang\>** FWIW the size data that I presented for next-gens assumes a separate tx key per output  
**\<UkoeHB\_\>** Is that necessary for the protocols?  
**\<sarang\>** For the proving systems, you mean? No, not at all  
**\<sarang\>** They don't care how you get signing keys  
**\<UkoeHB\_\>** Can you estimate the amount of additional pub key data? Num outs \* 32 and num tx \* 32?  
**\<sgp\_\>** sarang: why did it not get support now? complexity? size? verification time?  
**\<sarang\>** My numbers for MLSAG/CLSAG include separate tx keys too!  
**\<sarang\>** Also: n3ptune's dataset includes the pubkey counts  
**\<sarang\>** So I could run that separately for a more direct count  
**\<UkoeHB\_\>** With only 3% subaddress adoption, the difference is likely on the order of 100MB  
**\<UkoeHB\_\>** Or 2% of total size I think  
**\<sarang\>** that's probably a good order-of-magnitude estimate  
**\<sarang\>** But IIRC scanning requires checking all pubkeys  
**\<sarang\>** So either there needs to be a specified correlation, or there's added complexity in scanning  
**\<UkoeHB\_\>** I think it costs ~1GB for 30mill pub keys btw  
**\<sarang\>** I think moneromooo had a better idea of the impacts, when it was brought up earlier  
**\<sarang\>** FWIW I think it's a good idea unless it's very compelling not to due to complexity  
**\<sarang\>** OK, we're running up to the one-hour mark...  
**\<sgp\_\>** obviously without this change, the impacts are quite negative for network privacy........  
**\<sarang\>** It's differentiated data, but it doesn't leak \_which\_ outputs are subaddress-destined  
**\<sarang\>** (not that I'm saying that's a good reason to keep the current approach)  
**\<UkoeHB\_\>** It's quite a lot of unused data, I'm a bit skeptical  
**\<sgp\_\>** just reveals "one of this outputs goes to a subaddres?"  
**\<sarang\>** UkoeHB\_:?  
**\<UkoeHB\_\>** A lot of dummy data  
**\<sarang\>** sgp\_: it reveals the number of subaddress outputs  
**\<UkoeHB\_\>** sarang all it reveals is at least one of the outputs must be to a subaddress  
**\<sarang\>** Doesn't it reveal the total number of sub outs?  
**\<UkoeHB\_\>** No  
**\<sarang\>** orly  
**\<UkoeHB\_\>** How would it?  
**\<UkoeHB\_\>** Number of additional pub keys always equals number of outs  
**\<UkoeHB\_\>** Even if nonsubaddress  
**\<UkoeHB\_\>** How is the CLSAG paper going?  
**\<sarang\>** Hmm, for some reason I thought otherwise; noted  
**\<sarang\>** I'm still waiting for suraeNoether  
**\<sarang\>** He wanted to continue working on his ideas for the security model  
**\<sarang\>** So unfortunately I am not the one to ask  
**\<sarang\>** OK, is there anything else of interest to share?  
**\<sarang\>** (Would be a good idea to continue discussing this after meeting, or on an issue, to keep it alive)  
**\<sgp\_\>** definitely need an issue for it  
**\<sarang\>** All righty then; thanks to everyone for attending today  
**\<sarang\>** We are adjourned!  
