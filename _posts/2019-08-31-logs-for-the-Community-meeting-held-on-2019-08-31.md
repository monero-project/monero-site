---
layout: post
title: Logs for the Community Meeting Held on 2019-08-31
summary: Community highlights, CCS updates, Workgroup report, Action Items, and miscellaneous
tags: [dev diaries, crypto]
author: el00ruobuob / SamsungGalaxyPlayer
---

# Logs  


**\<sgp\_>** 0. Introduction  
**\<sgp\_>** We would like to welcome everyone to this Monero Community Workgroup Meeting!  
**\<sgp\_>** Link to agenda on GitHub: https://github.com/monero-project/meta/issues/387  
**\<sgp\_>** Monero Community meetings are a discussion place for anything going on in the Monero Community, including other Monero workgroups. We use meetings to encourage the community to share ideas and provide support.  
**\<sgp\_>** 1. Greetings  
**\<ErCiccione[m]>** Hi folks  
**\<xmrscott[m]>** Hola  
**\<sgp\_>** thanks for joining  
**\<sgp\_>** 2. Community highlights  
**\<sgp\_>** See Monero weekly highlights at https://revuo-monero.com/  
**\<sgp\_>** I was mostly off this week at the BTC2019 conference. I spoke about the dangers of transparency and the need for mandatory privacy in decentralized cryptocurrencies. I think it went well, and I can request a copy of my video recordings  
**\<sgp\_>** I used an activity which went quite well:  
**\<sgp\_>** I gave each person a notecard, which sorta represented an output. Then I asked people to trade cards, writing a record of the "transactions" on the card. Then I asked for a volunteer to be "suspicious" and finally debriefed by asking who accepted the "tainted" cards  
**\<sgp\_>** You should be able to see how it went in the recording, which I will hopefully receive soon  
**\<sgp\_>** Does anyone have community (non-workgroup) updates to share?  
**\<DiegorehrarSalaz>** Sorry. IRC issues. Matrix coming through?  
**\<ErCiccione>** Somebody is finally working on an integration Bisq-Monero, should be ready in some weeks according to the guy. See https://github.com/bisq-network/proposals/issues/110  
**\<sgp\_>** DiegorehrarSalaz: yes I see you now  
**\<sgp\_>** has niyid done any Monero work before?  
**\<kinghat>** yep, been following ErCiccione, very cool.  
**\<ErCiccione>** sgp\_: not that i'm aware of  
**\<ErCiccione>** kinghat: cool indeed. Monero and bisq are a perfect match  
**\<sgp\_>** Anything else worthy of mention before proceeding? Thanks for sharing  
**\<sgp\_>** 3. CCS updates  
**\<sgp\_>** ErCiccione posted a new idea:  
**\<sgp\_>** “ErCiccione: Installation and configuration of Weblate, the new localization platform” https://repo.getmonero.org/monero-project/ccs-proposals/merge\_requests/94  
**\<sgp\_>** thanks for being here ErCiccione to discuss it  
**\<ErCiccione>** :)  
**\<ErCiccione>** it's the proposal i made some time ago during a community meeting (after a dedicated localization workgroup meeting). Now weblate is basically ready. I only need a merged pr then we will start with the testing  
**\<ErCiccione>** within the localization workgroup, after that will be ready for anybody to use.  
**\<ErCiccione>** we will use it to translate next release, that's sure  
**\<ErCiccione>** (unless something crazy happens obviously :P)  
**\<ErCiccione>** thanks a lot to the people who already submitted their support. If anybody have questions i'm happy to answer  
**\<endogenic>** hey, all  
**\<nioc>** I have no been able to voice my support on GitLab for ErCiccione's proposal so I am doing so here  
**\<ErCiccione>** thank you nioc :)  
**\<sgp\_>** looks like a reasonable direction to me  
**\<sgp\_>** I'm going to take the silence as general agreement :)  
**\<sgp\_>** All other proposals previously in funding required are now funded :D  
**\<sgp\_>** Any final CCS comments before we move on to another section?  
**\<sgp\_>** 4. Workgroup report  
**\<sgp\_>** a. Daemon/CLI workgroup  
**\<sgp\_>** vtnerd’s Tor/i2p noise PR was recently merged  
**\<sgp\_>** moneromooo is back from vacation, and many miscellaneous bug fixes and improvements have been made since last meeting  
**\<sgp\_>** any other dev updates?  
**\<sgp\_>** b. Localization workgroup  
**\<sgp\_>** I received a full Chinese-translated copy of Mastering Monero. We’re discussing internally on how we would like to proceed with it. We want to make it available, but we need to work out the terms.  
**\<sgp\_>** We're considering options that will make PDFs available for free, but we need to determine how to handle the paid sales  
**\<ErCiccione>** isn't the book already available for free?  
**\<sgp\_>** We also need to review the translation to assess the quality  
**\<sgp\_>** ErCiccione: the English version is yes  
**\<ErCiccione>** what's the problem with publishing the translated version? the license allows it right?  
**\<sgp\_>** the license doesn't allow derivatives  
**\<sgp\_>** since we have the license, we can grant exceptions. but I just need to make sure everyone who contributed is ok with that  
**\<ErCiccione>** got it. I think make it freely translatable is extremely important  
**\<ErCiccione>** so, i hope it will happen :)  
**\<sgp\_>** we're working on it :)  
**\<sgp\_>** c. GUI workgroup  
**\<sgp\_>** dsc\_ has been working on the wallet i2p integration. It has been decided for now that the wallet will only support broadcasting transactions over i2p, not full sync. This will not impact most users' privacy a lot. The broadcast is the most important part  
**\<sgp\_>** dsc\_: does it allow i2p connections when using a remote node?  
**\<sgp\_>** I don't recall if a decision was made there yet  
**\<ErCiccione>** dsc\_ mentioned earlier he wouldn't make it for this meeting  
**\<dEBRUYNE>** dsc is afk as far as I know, but initially it will only be for tx broadcast as far as I can see  
**\<sgp\_>** oh yes, I'll need to follow up later  
**\<sgp\_>** beyond the networking settings, the design is being simplified, while adding new features including sending to multiple recipients  
**\<sgp\_>** d. Monero Research Lab  
**\<dEBRUYNE>** I think that is a good way to put it :)  
**\<sgp\_>** Sarang recently posted his monthly update: https://www.reddit.com/r/Monero/comments/cx3gxp/august\_monthly\_report\_from\_sarang\_noether/  
**\<sgp\_>** Surae has been working on matching and churning analysis. There has been some development progress. He finally has a working model to play with  
**\<sgp\_>** stop by the meeting Monday in #monero-research-lab to learn more and ask questions  
**\<sgp\_>** before open ideas time, I want to test out a new section on the fly:  
**\<sgp\_>** 5. Action Items  
**\<sgp\_>** In this section, please outline some of the tasks you would like to work on before the next meeting  
**\<sgp\_>** Here's mine for example:  
**\<sgp\_>** 1. work on the networking press release explaining what happened to Kovri and documenting the progress of i2p-zero and tini2p  2. wrap up the StackExchange moderator election  3. publish the conference talk recording I gave yesterday  
**\<sgp\_>** would anyone else like to share?  
**\<ErCiccione>** cool  
**\<ErCiccione>** i'm making some very needed changes and updates to the website, don't know what will be new for next update but i will write a post on reddit.  
**\<ErCiccione>** some of the MR still need to be reviewed, so please take a look at https://repo.getmonero.org/monero-project/monero-site/merge\_requests  
**\<ErCiccione>** i also want to introduce a labelling system i had in mind to prioritize issues.  
**\<ErCiccione>** oh, since we are all here, would be ok for everybody if the "meeting logs" link of the website shows all meting log and not just dev meetings?  
**\<sgp\_>** imo yes  
**\<sgp\_>** come on, someone else has a list of things they want to work on :)  
**\<DiegorehrarSalaz>** Busy. Sorry. :(  
**\<DiegorehrarSalaz>** Will come back after meeting for logs and action item.  
**\<sgp\_>** ok, we have 2, maybe 3 people who work on stuff :p  
**\<sgp\_>** we can move on to open ideas time  
**\<sgp\_>** 6. Open ideas time  
**\<sgp\_>** It’s open ideas time! Feel free to propose your ideas to this discussion group, and feel free to comment on others’ ideas. If you disagree with the idea, please reply with constructive criticism. Thank you!  
**\<sgp\_>** I watched a talk about customer support at the conference, and it reminded me that we have been kinda trying to get one started for some time to supplement r/monerosupport and #monero-support  
**\<sgp\_>** there are only 3 accounts in #monero-support right now, which is a testament to the fact no one uses it  
**\<sgp\_>** having a training process for volunteers to provide live support could be a great way for people to get more involved. It would teach them the main pain points people have, and it would allow them to become even more familiar with Monero and how people use it  
**\<sgp\_>** the infrastructure is something I need to talk about with Diego on though, but I'd like to keep working on this project  
**\<sgp\_>** that's my idea. does anyone have others?  
**\<midipoet>** can we discuss konferenco 2019 (europe)?  
**\<sgp\_>** sure  
**\<midipoet>** i know there was discussions at DefCon surrounding holding it in conjunction with RIAT  
**\<midipoet>** but i haven't heard anything, and was wondering if anybody else had. As it is something that will need to start planning at some point  
**\<needmonero90>** Did I miss it  
**\<sgp\_>** I have not heard much in that regard. But I think that hosting it at a university makes a LOT of sense  
**\<midipoet>** was that their plan?  
**\<sgp\_>** I don't know  
**\<midipoet>** anyway, i wanted to just say (as i mentioned potentially helping with organisation) Provenance Events were asking if there was an update from the community with regards to what they thought  
**\<sgp\_>** keep it cheap  
**\<midipoet>** so i guess i wanted to say that the offer from Provenence is still there. but i thnk that RIAT is a better first option (provided they are still interested)  
**\<needmonero90>** OK I'm caught up  
**\<needmonero90>** Hey guys, sorry for the late entrance.  
**\<midipoet>** but as surae nor anybody from RIAT is here, i guess we can't discuss much right now  
**\<needmonero90>** Ive got a few items to discuss  
**\<midipoet>** that's all from me  
**\<sgp\_>** midipoet: want to make a list of student cryptocurrency clubs in Europe? They are our best "in" to the area and would know about planning, booking rooms, etc  
**\<needmonero90>** First would be the recent rule change on /r/Monero. Minor, but should be brought up here for logging purposes.  
**\<needmonero90>** Rule 6 was modified from disallowing downvotes, to making people self-identify if they have a conflict of interest on a particular product or service  
**\<needmonero90>** Additionally, I discovered new and old reddit have discrete rulesets, and the rules between the two versions were misordered. I imagine this led to some confusion. I fixed that up, the two should show the same rulesets now.  
**\<needmonero90>** Let's see what else  
**\<needmonero90>** Oh, the community has a minecraft server we've been hanging/chatting on. That's been cool. I think this is the right place to mention it.  
**\<sgp\_>** oh that's pretty cool. I only like to play in creative though :/  
**\<sgp\_>** I like building things  
**\<needmonero90>** I can get you all the materials you need :D  
**\<needmonero90>** I strip mine  
**\<needmonero90>** Anyways  
**\<needmonero90>** Uhm what else  
**\<sgp\_>** midipoet: here is an example for the US: https://medium.com/michiganfintech/the-15-us-student-organizations-leading-fintech-movements-at-their-universities-fa2543cdcbd8  
**\<needmonero90>** Oh, xmrtrader had a rule change too  
**\<midipoet>** sgp\_: yes, i think that a Uni might be a good idea. i don't think finding a host would be difficult, but i don't want to give go ahead for planning, if RIAT are serious about hosting, as they have their own venue  
**\<needmonero90>** Altcoin talk is no longer entirely banned  
**\<needmonero90>** You can speak about the top 20 now, just keep opinion out of it. Which has really been nice  
**\<sgp\_>** midipoet: their venue is a little small for a conference setting. Great for a meetup setting  
**\<sgp\_>** finally I can shill XLM  
**\<midipoet>** sgp\_: ah, i haven't seen it. but they said they had a newer space. but i may be incorrect about this  
**\<dEBRUYNE>** midipoet, sgp\_: RIAT is Vienna right?  
**\<sgp\_>** yes  
**\<sgp\_>** We're over, so leave any final thoughts that you would like added to the logs  
**\<dEBRUYNE>** As capital of Austria it should be relatively easy to access, might want to check in advance though  
**\<dEBRUYNE>** We preferably want a city that is directly accessible for Americans too  
**\<needmonero90>** sgp\_ thanks as always for hosting, you do a fantastic job.  
**\<dEBRUYNE>** +1  
**\<dEBRUYNE>** needmonero90: How many people are on the server?  
**\<sgp\_>** "for the record, I think needmonero90 is ugly" :)  
**\<needmonero90>** :'(  
**\<midipoet>** dEBRUYNE: yes, at the moment it seems to be either Vienna (RIAT), or Dublin (Provenance Events)  
**\<needmonero90>** 6 I think that you would know  
**\<needmonero90>** Me included  
**\<needmonero90>** So far  
**\<needmonero90>** Make that 7 when lh joins today  
**\<dEBRUYNE>** Vienna in summer should be decent weather too I guess  
**\<dEBRUYNE>** Perhaps we should add a location near the sea though? May be more attractive for people  
**\<DiegorehrarSalaz>** dEBRUYNE join us!!!  
**\<dEBRUYNE> \<needmonero90>** 6 I think that you would know \<= How would I know?  
**\<dEBRUYNE>** :D  
**\<dEBRUYNE>** :-P\*  
**\<DiegorehrarSalaz>** sgp too  
**\<DiegorehrarSalaz>** And midipoet  
**\<DiegorehrarSalaz>** And erciccione  
**\<DiegorehrarSalaz>** It's just to chill and have fun.  
**\<DiegorehrarSalaz>** Which we don't do enough of.  
**\<midipoet>** minecraft?  
**\<DiegorehrarSalaz>** Yes.  
**\<needmonero90>** Yes  
**\<sgp\_>** I will do some digging this afternoon to see if there are any universities that could be open to hosting  
**\<ErCiccione>** i would, but my laptop would fry  
**\<midipoet>** can you get mincraft for Linux?  
**\<needmonero90>** We have a server sgp  
**\<needmonero90>** Oh wait  
**\<DiegorehrarSalaz>** Dude, the graphics don't require much.  
**\<needmonero90>** Dero  
**\<dEBRUYNE>** sgp\_: I guess using an university should also significantly reduce the cost?  
**\<needmonero90>** It's literally blocks  
**\<sgp\_>** ErCiccione: I've played Minecraft on laptops >5 years old  
**\<DiegorehrarSalaz>** midipoet, yes.  
**\<midipoet>** sgp\_: you can try - but i think the pressing issue is more who will organise - not where  
**\<needmonero90>** Dero = ignore me  
**\<needmonero90>** Screw autocorrect  
**\<needmonero90>** Idk how it got that out of what I typed  
**\<sgp\_>** 7. Confirm next meeting date/time  
**\<sgp\_>** The next community meeting will be in 2 weeks on 14 September at 17:00 UTC. The next Coffee Chat will be on 21 September at 16:00 UTC.  
**\<ErCiccione>** sgp\_: i have a much older 2nd hand lenovo :P  
**\<sgp\_>** 8. Conclusion  
**\<sgp\_>** That’s all! Thanks for attending this Monero Community meeting, and we hope to see you on r/MoneroCommunity and #monero-community. Take care, and know that change starts with YOU.  
