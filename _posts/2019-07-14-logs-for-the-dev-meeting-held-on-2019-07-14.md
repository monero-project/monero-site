---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2019-07-14
summary: Development status, Code & ticket discussion, and miscellaneous
tags: [dev diaries, core, crypto]
author: el00ruobuob / rehrar
---

# Logs  

**\<dEBRUYNE>** Guess we can start, anyone else here?  ping moneromooo, rbrunner, selsta, dsc\_, vtnerd, woodser, hyc, jtgrassie, fluffypony, luigi1111, smooth  
**\<xmrmatterbridge> \<rehrar>** Yes meeting. IRC problems. Sec.  
**\<dEBRUYNE>** probably forgot some people  
**\<fluffypony>** here  
**\<dEBRUYNE>** sarang and suraeNoether of course  
**\<moneromooo>** I am.  
**\<rbrunner>** Here of course, where else   
**\<xmrmatterbridge> \<rehrar>** Tor rejecting my login attempts.   
**\<xmrmatterbridge> \<rehrar>** But present.   
**\<dEBRUYNE>** rehrar, you may lead   
**\<moneromooo>** If ypu have a "tor account", that was some phishing site ^\_^  
**\<italocoin>** :))  
**\<xmrmatterbridge> \<rehrar>** moneromooo, it's my SASL. Broken for some reason. Will fix later.   
**\<xmrmatterbridge> \<rehrar>** Anyways. Greetings is done.   
**\<xmrmatterbridge> \<rehrar>** So 2. What's been completed since previous meeting.   
**\<jtgrassie>** woodser: inc/exc PR moneromooo mentioned https://github.com/monero-project/monero/pull/5598  
**\<xmrmatterbridge> \<rehrar>** Anyone have an update? CLI stuff? GUI stuff?  
**\<dsc\_>** This week ill work closely with Selsta on things concerning GUI  
**\<moneromooo>** More work on share-rpc. More work on banning subnets. Mostly.  
**\<rbrunner>** I had a little success today, with making Windows GUI installer builds reproducible, with several people confirming the same hash: https://old.reddit.com/r/Monero/comments/cd0snl/help\_test\_reproducible\_windows\_gui\_installer/  
**\<xmrmatterbridge> \<rehrar>** dsc\_ as opposed to other weeks when you don't work closely with selsta on things concerning GUI?  
**\<dEBRUYNE>** To add to the GUI, dsc\_ opened a few pull request to improve Tails support  
**\<italocoin>** dsc\_ i've tested GUI and works well, any known bugs?  
**\<xmrmatterbridge> \<rehrar>** rbrunner what's the time frame you want for that? I can put it in the next Revuo as a volunteer opportunity, but they come out on Thursdays.   
**\<dEBRUYNE>** xiphon made a pull request to properly store the integrated address (previously it was stored as plain address + short encrypted payment ID)  
**\<rbrunner>** Not sure what you mean about volunteers. I think confirmation is already here, see the posts in that thread  
**\<dsc\_>** italocoin: There are always some bugs but must say latest release was a solid one. For problems best to visit our issue tracker.  
**\<dsc\_>** rehrar: Yes, exactly  
**\<xmrmatterbridge> \<rehrar>** rbrunner, noted. Thanks for the info.   
**\<italocoin>** dsc\_ one thing that i think we should worok on, is that when you send yourself a payment, it should be a small note there that was sent to yourself, if not you get sent 0  
**\<dsc\_>** italocoin: this has been reported by kico earlier, I believe  
**\<italocoin>** that confuses some people  
**\<italocoin>** Oh kk  
**\<rbrunner>** I think the CLI does the same  
**\<italocoin>** true  
**\<rbrunner>** also a little confusing, at least at first  
**\<moneromooo>** It is impossible to distinguish change from non change, so if you rescan, the amount would change.  
**\<italocoin>** for regular people it is confusing for sure, my idea would be just to add a note that was sent to yourself and just show the fee or someting like that  
**\<moneromooo>** Though... stoffu made some change to the derivations when he introduced subaddresses, and it might be that they can be distinguished nowadays...  
**\<italocoin>** moneromooo: if its sent to subaddress i think you are right, but if the wallet gets rescaned or created again, the 0 its unavoidable i think  
**\<xmrmatterbridge> \<rehrar>** Alright nothing else?  
**\<xmrmatterbridge> \<rehrar>** Oops. Stupid delay.   
**\<rehrar>** from the ashes I rise  
**\<rehrar>** ok, next topic  
**\<fluffypony>** release?  
**\<moneromooo>** Oh yes please   
**\<rehrar>** sure  
**\<rehrar>** fluffypony: take it away?  
**\<moneromooo>** Are you still waiting on the bsd patch, or can that be left out for now ?  
**\<fluffypony>** I mean, it would be advantageous to have it  
**\<fluffypony>** but if it's going to take more than a few days let's just leave it  
**\<moneromooo>** IIRC TheCharlatan said it was a non trivial amount of work.  
**\<moneromooo>** Dunno how far it is though.  
**\<fluffypony>** ok maybe he comments in the next 24 hours  
**\<rbrunner>** "Release" would be already 0.14.1.1 then?  
**\<fluffypony>** yes  
**\<fluffypony>** would the GUI need a point release too?  
**\<dsc\_>** Don't think so. Selsta: ping  
**\<selsta>** yes  
**\<dsc\_>** yes?  
**\<selsta>** I mean yes GUI would need a point release too.  
**\<selsta>** We embed the daemon so all the bugs that get fixed on CLI side effects us too.  
**\<rehrar>** Ok, anything else you want for the discussion on the point release fluffypony?  
**\<dsc\_>** Ah ok, I was more thinking about any death threatening GUI bugs.  
**\<fluffypony>** moneromooo: what merges are you waiting for?  
**\<moneromooo>** I think they're all merged by luigi1111w now. The one I had been thinking about was 5363, but given I've just had to rewrite a fair bit of it, I think I'll leave it.  
**\<moneromooo>** So from my side, we have all we need.  
**\<fluffypony>** ok so just version bump?  
**\<moneromooo>** And maybe some more hashes (with a bit more slack than last time maybe).  
**\<fluffypony>** kk  
**\<rehrar>** Is it possible for us to discuss the October fork?  
**\<fluffypony>** should we set a threshold?  
**\<rehrar>** Just like, prelim stuff  
**\<fluffypony>** for hashes I mean  
**\<moneromooo>** Last time was a day IIRC, that seemed little to me.  
**\<moneromooo>** I suppose we should not see a day's reorg but still   
**\<fluffypony>** ok let's say 48 hours from the time of the commit  
**\<fluffypony>** that gives us a buffer coz it still needs to be built by a bunch of people etc  
**\<moneromooo>** OK.  
**\<rehrar>** gucci?  
**\<dEBRUYNE>** I guess once fluffypony sets the 0.14.1.1 tag, people can already start their determinisitc build processes and publish the hashes  
**\<moneromooo>** versace.  
**\<dEBRUYNE>** The more results the better  
**\<fluffypony>** yes  
**\<fluffypony>** balenciaga  
**\<dsc\_>** louie  
**\<dsc\_>** -e +s  
**\<moneromooo>** To be clear, I was talking about the embedded block hashes, not gitian hashes.  
**\<rehrar>** If so,   
**\<dEBRUYNE>** moneromooo: Yes, my comment was unrelated to that, should have clarified that   
**\<rehrar>** Do we have a rough estimate for when "code freeze" is for this upcoming fork?  
**\<rehrar>** also, I don't know if hyc is around, but with the glowing reviews of RandomX, it's looking almost positive that it's going in, yeah?  
**\<rehrar>** one more to go in regards to audits  
**\<dEBRUYNE>** Not sure about code freeze, but the general idea was to publish binaries way in advance of the fork right (e.g. 4-6 weeks)  
**\<dEBRUYNE>** As the consensus changes are soon ready and we don't have to perform last minute tweaks  
**\<rehrar>** and sarang hasn't mentioned anything about CLSAG audits, right?  
**\<rehrar>** most definitely going in the fork after this one  
**\<dEBRUYNE>** Yeah October seems too short for CLSAG  
**\<rehrar>** alright, if no other comments, are there any other meeting items?  
**\<moneromooo>** I've had people reviewing share-rpc (thanks vtnerd and stoffu), please feel free anyone else ^\_^  
**\<dEBRUYNE>** I kind of wanted to ask everyone's opinion on switching to a 12 month schedule after April 2020 (so once RandomX and CLSAG are in)  
**\<dEBRUYNE>** So we'd essentially only have one HF each year around Monero's birthday  
**\<moneromooo>** We'll only know if we have new stuff we want to add when we get to it.  
**\<sarang>** I am still in (slow) talks with potential auditors  
**\<sarang>** Nobody's biting for the math review part, only implementation  
**\<sarang>** So I am not expecting things will be ready for fall 2019  
**\<dEBRUYNE>** moneromooo: So you'd like to retain the 6 month schedule and skip a HF if there are no consensus changes basically?  
**\<dEBRUYNE>** Or if they can wait  
**\<rehrar>** RandomX will have just been implemented for six months at that part. Is that enough time to gauge it? Becasuse if not, and we move to a year schedule, then that means we wait a full year if something meh happens.  
**\<moneromooo>** I find it annoying to say in advance "we'll wait that long" when we have no clue yet whether that predefined delay will be appropriate.  
**\<rbrunner>** Er, that sounds a little too much theory. I don't think we would wait and not emergency-HF   
**\<rehrar>** it's true that it is a year away at least, so it's hard to gauge. A lot can happen in a year. But I can appreciate dEBRUYNE just putting the feelers out  
**\<moneromooo>** Oh, anyone knows of any merchant/exchange/whatever that's switched from long payment ids recently ?  
**\<rehrar>** no  
**\<dEBRUYNE>** A bit unrelated, but I plan to contact some staff from Bitfinex, Binance, and Bittrex on Reddit to have a chat with them about switching  
**\<dEBRUYNE>** Those are basically the largest 'offenders'  
**\<moneromooo>** Thanks   
**\<italocoin>** RandomX: is experimental, do we have reviews from outsiders?  
**\<moneromooo>** Yes, three.  
**\<moneromooo>** See hyc's "RandomxAudits" github repo.  
**\<rehrar>** with a fourth on the way  
**\<italocoin>** trustworthy?  
**\<moneromooo>** That's what you decide after reading them.  
**\<rehrar>** it wasn't my grandma who audited the thing, if that helps  
**\<rehrar>** either way, I think we can call it here.  
**\<italocoin>** That is great news  
**\<rehrar>** Discussion may, of course, continue after the fact.  
**\<italocoin>** hhaha rehrar  
**\<rehrar>** Thanks for attending the meeting everyone!    
**\<rehrar>** have nice lives  
