---
layout: post
title: Logs for the MRL Meeting Held on 2020-03-04
tags: [dev diaries, crypto, research]
author: asymptotically / Sarang
---

# Logs

**\<sarang\>** Let's start the meeting!  
**\<sarang\>** First, GREETINGS  
**\<sarang\>** hello  
**\<sgp\_\>** hi  
**\<sgp\_\>** [meta] I added the MRL meetings with reminders to the Google Calendar I have if you are ok using Google: https://calendar.google.com/calendar/embed?src=itmaraubkfoe4aq2oquoaogsuk%40group.calendar.google.com&ctz=UTC  
**\<sarang\>** Does using that link leak any information to you? (presumably it leaks IP information to Google)  
**\<sgp\_\>** not to me, just Google  
**\<sarang\>** roger  
**\<sarang\>** OK, continuing on  
**\<sarang\>** Next up is the ROUNDTABLE  
**\<UkoeHB\_\>** hi  
**\<sarang\>** I've been getting the multi-input version of Triptych updated for posting to the IACR preprint archive  
**\<sarang\>** as well as minor edits to the original preprint as I come across them  
**\<sarang\>** Posting to IACR (with suitable caveats about non-standard cryptographic hardness assumptions) can increase the visibility of the idea, and hopefully encourage feedback  
**\<sarang\>** It's pretty slow going, but progressing well  
**\<sarang\>** Any particular questions on that before I pass the baton?  
**\<sarang\>** OK, next up!  
**\<sarang\>** Does anyone else have research of interest to share and discuss?  
**\<Isthmus\>** Yo  
**\<sarang\>** Hello Isthmus  
**\<sarang\>** Did you wish to share anything, or just observing?  
**\<Isthmus\>** I’ve been pretty busy in meatspace, sadly no time for data spelunking  
**\<sarang\>** OK, no problem! Simply checking  
**\<sarang\>** It's a fairly quiet day today anyway  
**\<sarang\>** UkoeHB\_?  
**\<sarang\>** suraeNoether?  
**\<sarang\>** Others?  
**\<Isthmus\>** Oh yes, actually  
**\<sarang\>** ah ok  
**\<sarang\>** carry on Isthmus  
**\<Isthmus\>** Wait there’s too much traffic for voiced text, let me look back pewter in four minutes  
**\<sarang\>** roger  
**\<sarang\>** Someone else, then?  
**\<UkoeHB\_\>** need about 10mins  
**\<sarang\>** OK, in that case, let's pause the meeting for 10 minutes or so; I show the time is 18:12, so let's reconvene at 18:22 or so  
**\<sgp\_\>** sarang: want to talk about Triptych naming at some point?  
**\<sarang\>** That seems like a suitably off-topic idea during this break =p  
**\<sarang\>** Right now, the multi-input Triptych preprint uses the name "Triptych-2"  
**\<sarang\>** this is boring and not descriptive  
**\<sarang\>** I am open to better naming ideas  
**\<sarang\>** Note that I can revise the older paper if that's helpful (this has been done to add features and fix errors)  
**\<hyc\>** what part of the original "triptych" is triple?  
**\<sarang\>** The benefits of Triptych-2 are using a single proof for all spends (instead of separate proofs with commitment offsets), and handling balance assertions directly within the proof  
**\<sgp\_\>** I originally recommended Triptyzk as a half joke, but part of me thinks it's a good idea  
**\<hyc\>** Polyptych  
**\<sarang\>** The idea was that the three parts to Triptych are signing keys, commitment keys, and linking tags  
**\<sarang\>** Heh, a polyptic sounds like something a surgeon would remove :/  
**\<UkoeHB\_\>** lmao  
**\<sarang\>** FWIW there's basically no change to the SHVZK property or proof between the two versions  
**\<sarang\>** They're almost identical  
**\<sgp\_\>** that's partially why adding "zk" now makes no sense. It's more about proactively naming for the Twitter trolls/idiots  
**\<UkoeHB\_\>** B-Triptych and E-Triptych for basic and extended   
**\<sarang\>** Triptych Classic and New Triptych  
**\<hyc\>** Triptych and Antikythera :P  
**\<sarang\>** Just what we need; something equally hard to pronounce =p  
**\<moneromooo\>** Technology so old nobody remembers how it works.  
**\<hyc\>** yes... and indecipherable, and considered too advanced for its time  
**\<kinghat\>** i havent been paying that close attention but have we "shelved" CLSAG?  
**\<sarang\>** suraeNoether just told me he's now happy with the revised security model for CLSAG  
**\<sarang\>** Nothing has changed with the algorithms themselves, apart from a small change to hash function inputs  
**\<UkoeHB\_\>** it sounded like suraeNoether was considering advocating to skip CLSAG and go directly to next-gen in a year or two  
**\<sarang\>** I disagree  
**\<sarang\>** CLSAG is a straightforward change that's well understood  
**\<kinghat\>**   
**\<sarang\>** Anyway, he made very recent updates that I'll review (more on this during ACTION ITEMS) for IACR posting  
**\<sarang\>** Anyway  
**\<sarang\>** UkoeHB\_ and Isthmus both wanted to share some work  
**\<selsta\>** Will CSLAG require a paid review?  
**\<sarang\>** Nothing "requires" paid review  
**\<selsta\>** for you to be comfortable with it  
**\<sarang\>** But it's probably a good idea :)  
**\<sarang\>** I'm very comfortable with the math  
**\<Isthmus\>** Hm, upon more consideration, discussing it today might be the wrong order of operations  
**\<Isthmus\>** Nothing pressing or dangerous  
**\<sarang\>** The total estimate for math+code review by Teserakt was ~$15000 USD, which is quite reasonable IMO  
**\<sarang\>** Isthmus: how so?  
**\<sarang\>** Now you have everyone intrigued  
**\<UkoeHB\_\>** happy to announce a final proofreading draft of ZtM2 is ready. Note that I decided not to go into Bulletproofs since it's frankly way too much detailed math to be worth it. Anyone who wants to learn bulletproofs should just read the original paper. https://www.pdf-archive.com/2020/03/04/zerotomoneromaster-v1-1-0/zerotomoneromaster-v1-1-0.pdf  
**\<Isthmus\>** A poorly-framed thought experiment is worse than no thought experiment at all   
**\<sarang\>** UkoeHB\_: great!  
**\<sarang\>** Will this be renamed to 2.0 after review?  
**\<sarang\>** Or will the title be incremented to "One to Monero" :D:D:D  
**\<UkoeHB\_\>** Ill make a reddit post asking for proofreaders, and if anyone knows someone who wants to proofread go ahead and pass it around. Not much is likely to change between now and publication in ~1.5-2months. The proofreading period is 3 weeks.  
**\<UkoeHB\_\>** I think Ill just remove the version number  
**\<UkoeHB\_\>** maybe  
**\<midipoet\>** UkoeHB\_: fair play  
**\<sarang\>** Name them based on the most recent Monero version name?  
**\<sarang\>** Anyway, great to hear the update is nearing completion  
**\<hyc\>** Zero to Monero, Hero Edition  
**\<UkoeHB\_\>** yes I want to meet the hero who reads the whole thing :)  
**\<hyc\>** the more -ero suffixes in the title, the better :P  
**\<sarang\>** Does anyone else wish to share research of interest?  
**\<sarang\>** OK, we can move on to ACTION ITEMS, then  
**\<sarang\>** I am completing the Triptych-2/NewTriptych/E-Triptych/etc. preprint for IACR posting  
**\<sarang\>** and reviewing the (hopefully final) changes to CLSAG that I received from suraeNoether  
**\<sarang\>** Anyone else?  
**\<UkoeHB\_\>** proofreading, and listening to proofreader feedback if and when it appears; starting now will probably spend a lot less time with Monero as this project wraps up  
**\<sarang\>** I think a reddit post is a great idea to encourage readers to take a look  
**\<sarang\>** ZtM is such a valuable resource  
**\<sarang\>** Short meeting today! But that's fine  
**\<sarang\>** Any other questions, comments, etc. as we wrap up?  
**\<sarang\>** All right! Let's adjourn  
**\<sarang\>** Thanks to everyone for attending  
**\<sarang\>** Logs will be posted shortly to the GitHub issue  
