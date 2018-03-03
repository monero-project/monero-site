---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2016-07-31
summary: Monero Project repository, and brief update on Ring CT
tags: [dev diaries, core, crypto]
author: dEBRUYNE / fluffypony
---

### Overview 

-

### Logs

**\<fluffypony>** time for meeting to start   
**\<i2p-relay> {-anonimal}** Are we not having a meeting?  
**\<ArticMine>** I was wondering the same thing  
**\<i2p-relay> {-anonimal}** Kovri meeting at 17:00. I thought we were meeting at 16:00.  
**\<i2p-relay> {-anonimal}** fluffypony: ^  
**\<ArticMine>** For Monero  
**\<i2p-relay> {-anonimal}** Yes  
**\<i2p-relay> {-anonimal}** * disappointed  
**\<luigi1112>** Maybe he died  
**\<luigi1112>** We could meet without him if people have stuff to say :-)  
**\<moneromooo>** Well, I have one thing to say: who wants to join the testnet and try random stuff to see if they can get it to break ?  
**\<moneromooo>** Preferably corner cases.  
**\<ArticMine>** How many testnet nodes are there?  
**\<moneromooo>** I think three.  
**\<i2p-relay> {-anonimal}** I would but I don't have a reliable VPS at the moment.  
**\<ArticMine>** I can set at testnet node. What are the stiings  
**\<ArticMine>** settings  
**\<moneromooo>** bitmonerod --add-exclusive-node 176.9.17.19:28080 --testnet  
**\<moneromooo>** And you need to have built with my rct-private-fork branch.  
**\<moneromooo>** And make sure you backup your db and wallet first, as they won't be compatible with "normal" version once you run rct code.  
**\<moneromooo>** https://github.com/moneromooo-monero/bitmonero/tree/rct-private-fork is the branch to use.  
**\<moneromooo>** Actually, use https://github.com/moneromooo-monero/bitmonero/commit/58ea23fa144b9eaec506461f96649d0c7b4b3914  
**\<moneromooo>** Latest has an incompatible comms change.  
**\<ArticMine>** Great I will give this a try. Is there a test net db or sync from scratch  
**\<moneromooo>** If you don't have a testnet db already, you will have to sync.  
**\<i2p-relay> {-anonimal}** #903 has gotten some momentum. Is it too soon to come to an agreement?  
**\<moneromooo>** Can't hurt I think.  
**\<i2p-relay> {-anonimal}** So we need a name. moneromooo any thoughts?  
**\<_Slack> \<needmoney90>** Bond. James Bond.  
**\<moneromooo>** I've seen two names proposed already. I don't have a better idea.  
**\<_Slack> \<needmoney90>** (What are we naming again?)  
**\<moneromooo>** A repo, AFAICT.  
**\<i2p-relay> {-anonimal}** neemoney90: #903  
**\<_Slack> \<needmoney90>** Repo-y McRepoface  
**\<i2p-relay> {-anonimal}** luigi1112 any thoughts?  
**\<i2p-relay> {-anonimal}** ArcticMine ^  
**\<_Slack> \<needmoney90>** My thoughts submitted  
**\<ArticMine>** monero-organization for #903  
**\<moneromooo>** That sounds good.  
**\<i2p-relay> {-anonimal}** Ooo, I like that best.  
**\<i2p-relay> {-anonimal}** ArcticMine will you comment in issue or I can copy/paste?  
**\<ArticMine>** You can copy past, I may comment.  
**\<ArticMine>** copy/paste  
**\<i2p-relay> {-anonimal}** K, done. I also like monero-project/organization.  
**\<ArticMine>** That is also good  
**\<i2p-relay> {-anonimal}** Kovri end-user documentation proposal is in open tasks  
**\<ArticMine>** Actually better than my original idea  
**\<i2p-relay> {-anonimal}** https://forum.getmonero.org/7/open-tasks/2592/create-end-user-kovri-documentation  
**\<i2p-relay> {-anonimal}** The problem with the forum is that its somewhat obscure and I don't get emailed notifications.  
**\<i2p-relay> {-anonimal}** So obscurity = less funding. No notifications = more babysitting.  
**\<i2p-relay> {-anonimal}** An org repo can help with things like this, imho.  
**\<redfish>** maybe monero-project/org  
**\<ArticMine>** org can be confused with .org Just a thought  
**\<i2p-relay> {-anonimal}** Agreed. How about https://github.com/monero-project/community  
**\<i2p-relay> {-anonimal}** Or is that too vague?  
**\<ArticMine>** I thing community is too broad.  
**\<i2p-relay> {-anonimal}** Kovri meeting in 3 minutes.  
**\<i2p-relay> {-anonimal}** I'm hopping over to #kovri-dev  
**\<i2p-relay> {-anonimal}** I wish the relay bot was online.  
**\<ArticMine>** One could say organizational  
**\<i2p-relay> {-anonimal}** I would say have it here but I don't know who is freenode side.  
**\<i2p-relay> {-anonimal}** If anyone is interested in talking about a logo for Kovri, could you please hop over to #kovri-dev?  
**\<i2p-relay> {-anonimal}** I don't know if dEBRUYNE is logging our meeting so I or slack will be taking care of it.  
