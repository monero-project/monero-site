---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2019-03-10
summary: March 9th HF feedback, Point release discussions, and miscellaneous
tags: [dev diaries, core, crypto]
author: el00ruobuob / rehrar
---

# Logs  

**\<hyc>** ding  
**\<rbrunner>** dong  
**\<rehrar>** oyo  
**\<moneromooo>** The witch.  
**\<rehrar>** 1. Greetings  
**\<el00ruobuob\_[m]>** Hi guys!  
**\<ArticMine>** hi  
**\<endogenic>** sup y'all  
**\<rbrunner>** Hi  
**\<ErCiccione[m]>** Hi  
**\<rehrar>** 2. Fork Discussions  
**\<rehrar>** Is there anything that anyone present would like to discuss regarding the previous fork? We'll get to next point release items soon.  
**\<hyc>** looks like all quiet  
**\<rehrar>** it all went smooth as a baby's skin  
**\<rehrar>** Yay. It looks like this meeting will be short indeed.  
**\<rbrunner>** Just the first block was a real cliffhanger, right?  
**\<el00ruobuob\_[m]>** it's been a long first block, besides that all's fine  
**\<ErCiccione[m]>** I take advantage of the quietness to say that i hope we will introduce a strict(er) release cycle for next release  
**\<sarang>** At some point the goal is to move to a longer cycle, no?  
**\<hyc>** maybe we should focus on making reproducible builds work  
**\<ErCiccione[m]>** i recently took a look at how nextcloud does, they release every 4 months, so it's somehow usable for us  
**\<ErCiccione[m]>** hyc: solid +1 for that  
**\<ErCiccione[m]>** sarang: i hope so, afaik we never really had a proper discussion about that  
**\<sarang>** As long as PoW tweaks are in the cards, I presume we'll stick to 6 months though  
**\<WoomyZoomy>** Why the use of "goto" in bulletproof\_PROVE instead of more common flow controls?  
**\<sarang>** that's a question for moneromooo  
**\<moneromooo>** Ah, simplicity.  
**\<rehrar>** 3. Upcoming point release discussions  
**\<ErCiccione[m]>** sarang: sure, i was just pointing out that the timing is similar, so we could look at their system for inspiration. I can't find the page right now, but it was very solid, with planty of time for development, freeze and RC releases  
**\<moneromooo>** They presumably don't have to have misc other software update in sync.  
**\<WoomyZoomy>** Thanks  
**\<rehrar>** I know I had some questions, and the community at large is a little confused what is coming in the next point release, and if we have a timeline for that or not  
**\<moneromooo>** Everything that's on master, probably all/most of what's currnetly PRed and that's not super old.  
**\<moneromooo>** Except maybe the 128 bit diff change.  
**\<hyc>** \* current master crashes  
**\<moneromooo>** Well, nohting says we can't add \*more\* fixes :)  
**\<ErCiccione[m]>** (nextcloud's release schedule: https://docs.nextcloud.com/server/stable/admin\_manual/release\_schedule.html)  
**\<rehrar>** because I know some features people are excited about (like Trezor, no?) are coming out with that?  
**\<rehrar>** we just going with "soon"?  
**\<sarang>** Better faster stronger bulletproofs :D  
**\<el00ruobuob\_[m]>** not too soon, we need a proper code freeze for this point release  
**\<ErCiccione[m]>** I would love to just have that week of freeze for the GUI this time  
**\<el00ruobuob\_[m]>** yeah me too  
**\<moneromooo>** Did the GUI not choose to do a full release already ?  
**\<rbrunner>** Should be easier now, with the threat of ASIC domination gone  
**\<hyc>** yeah, it would be simpler if it was only the monero project. but we have to coordinate with exchanges/mining pools/3rd party miner developers/ etc  
**\<rbrunner>** I think so, GUI was fully released  
**\<ErCiccione[m]>** moneromooo: yes, but would be good to have always that week for every release. I really need it to sync translations  
**\<sarang>** Is the intention to have new output selection for the point release?  
**\<moneromooo>** If you and suraeNoether are happy with the details, sure.  
**\<sarang>** It would be nice to have a rough deadline for freeze set  
**\<sarang>** (and we can discuss output selection at tomorrow's MRL meeting 17:00 UTC)  
**\<rehrar>** unfortunately hard to do without core?  
**\<rbrunner>** Maybe also depends on when master will be able to work with the 3 Monero nets again, because basically testing can start only then  
**\<rehrar>** Alright, was there any other meeting items that someone wanted to discuss?  
**\<rehrar>** now that we at the other side?  
**\<rbrunner>** The second hardfork will hardly give any problems, being rather trivial, right?  
**\<moneromooo>** Likely.  
**\<sarang>** If this is a good avenue for it, I'd like any opinions on output selection since it is likely to change at the next point release (non consensus, of course)  
**\<sarang>** We've discussed in MRL at length  
**\<pigeons>** oh the point release will be a hardfork also?  
**\<rbrunner>** No, I mean the second hardfork in what, 2 hours or so?  
**\<pigeons>** when was the first?  
**\<moneromooo>** Yesterday.  
**\<rbrunner>** er .. yesterday  
**\<el00ruobuob\_[m]>** most likely 22h rbrunner   
**\<pigeons>** ok i see i thought i was reading things wrong  
**\<rbrunner>** Ah, ok, 2 days  
**\<hyc>** more than 2 days, at the current rate  
**\<ArticMine>** 0.9 days based upon 2 min blocks  
**\<ArticMine>** We are more like 15 in blocks now  
**\<ArticMine>** 15min  
**\<rbrunner>** But with nicely falling difficulty  
**\<moneromooo>** If someone can get the master daemon to crash in debug mode with log level 2 and a core, that'd be great :)  
**\<rehrar>** does anyone have any comments for sarang?  
**\<moneromooo>** Because mine ain't.  
**\<el00ruobuob\_[m]>** is it the output selection about coinbase transactions highlight by sgp\_ ?  
**\<hyc>** took quite a while for my debug build to crash but it eventually did. before I removed the ssl patches  
**\<sarang>** el00ruobuob\_[m]: it will help to address that, but in a more general sense  
**\<moneromooo>** Did you have a better stack trace, and logs showing what was being done in other threads ?  
**\<sarang>** where output selection is poorly weighted by block "density"  
**\<hyc>** moneromooo: I gave you the stack trace, didn't check other threads unfortunately. I can try spinning that up again.  
**\<el00ruobuob\_[m]>** i have to confess i don't understand very well this subject sarang  
**\<moneromooo>** Logs will help here.  
**\<rehrar>** sarang, maybe discuss tomorrow at the MRL meeting  
**\<moneromooo>** If another thread deleted some object, it might not show up on the stack trace if it's already done.  
**\<rehrar>** I think we can end here and business as usual can commence if that's alright with everyone.  
**\<rehrar>** Next weeks is community meeting, and we want to be desynced from them, so next meeting two weeks?  
**\<hyc>** rehrar: sounds good  
**\<rehrar>** thanks for coming, and everyone was here with the new time (stupid DST)  
**\<rbrunner>** Over here in Europe we will soon stop that DST nonsense  
**\<el00ruobuob\_[m]>** thank you all!  
**\<rbrunner>** Maybe last change next year  
**\<rbrunner>** Likewise!  
