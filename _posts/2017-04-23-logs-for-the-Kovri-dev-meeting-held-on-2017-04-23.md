---
layout: post
title: Logs for the Kovri Dev Meeting Held on 2017-04-23
summary: Brief review of what has been completed since last meeting, Monero HackerOne Bounty, 96boards OpenHours showcase, Github repo privilege discussion, website discussion, and code & open tickets discussion
tags: [dev diaries, i2p, crypto]
author: dEBRUYNE / fluffypony
---  

### Logs  

**\<anonimal>** 1. Greetings  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\<anonimal>** 3. More preparation for [96boards.org OpenHours showcase for Kovri / Monero](https://github.com/monero-project/meta/issues/46) (@fluffypony @danrmiller location status, @anonimal "de-anon consideration" status)  
**\<anonimal>** 4. Status (again) of [Monero HackerOne umbrella and bounty](https://github.com/monero-project/meta/issues/39). [hackerone.com/monero](https://hackerone.com/monero) is online but we need to resolve FFS funding before inviting researchers. VRP status for all projects + bounty status  
**\<anonimal>** 5. Website status (@rehrar @bigreddmachine @alvinjoelsantos @danrmiller)  
**\<anonimal>** 6. Code + ticket discussion / Q & A  
**\<anonimal>** 7. Any additional meeting items  
**\<anonimal>** 8. Confirm next meeting date/time  
**\<anonimal>** Hello. It looks like fluffypony is MIA.  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\<anonimal>** https://github.com/monero-project/kovri/pulse/monthly \<-- #615 to #629, in particular #627  
**\<anonimal>** Anything else before we move onto 3.?  
**\<anonimal>** 3. More preparation for [96boards.org OpenHours showcase for Kovri / Monero](https://github.com/monero-project/meta/issues/46) (@fluffypony @danrmiller location status, @anonimal "de-anon consideration" status)  
**\<anonimal>** fluffypony is MIA, I think pigeons is MIA, I'm not de-anoning for the time being.  
**\<anonimal>** Anything else on 3.?  
**\<guzzijones12>** on 2 i am working on removing the global client context.  
**\<anonimal>** Whatever your strategy is, the same strategy *should* apply to core context, just FYI.  
**\* anonimal** we can talk more in 6.  
**\<anonimal>** 4. Status (again) of [Monero HackerOne umbrella and bounty](https://github.com/monero-project/meta/issues/39). [hackerone.com/monero](https://hackerone.com/monero) is online but we need to resolve FFS funding before inviting researchers. VRP status for all projects + bounty status  
**\<anonimal>** fluffypony needs to move this to funding required https://forum.getmonero.org/6/ideas/87597/monero-bounty-for-hackerone  
**\<anonimal>** We can't move forward until that happens.  
**\<anonimal>** I've submitted a VRP to monero/#1995  
**\<moneromooo>** luigi1112: is that something you have privs to do ?  
**\<moneromooo>** (also surae's).  
**\<anonimal>** Once #1995 is fleshed out, I'll submit to the core repo and the website with relevant adjustments (as we discussed in previous meeting(s))  
**\* anonimal** not sure if luigi is around, anything else on 4.?  
**\<moroccanmalinois>** Before the alpha release, if i find a bug that can, for example, crash a router, should i go through the process or is it cool to just PR ?  
**\<anonimal>** moroccanmalinois: PR. We probably won't even apply our VRP until we are in beta, btw.  
**\<anonimal>** We should add a note if that will be the case.  
**\<moroccanmalinois>** ok  
**\<anonimal>** 5. Website status (@rehrar @bigreddmachine @alvinjoelsantos @danrmiller)  
**\* anonimal** has nothing on 5., will await any response  
**\<anonimal>** Alright, more no-shows AFAICT :/  
**\<anonimal>** 6. Code + ticket discussion / Q & A  
**\<guzzijones12>** like you said move to the other contexts after client context for me.  
**\<anonimal>** moroccanmalinois: re: #624, I received a response saying that he'll look into the issue.  
**\<moroccanmalinois>** ok  
**\<anonimal>** guzzijones12: you can PR the client one first before moving onto core. There may be related issues to resolve anyway.  
**\<anonimal>** (as long as it works)  
**\<guzzijones12>** yes ok.  
**\<anonimal>** Anything else on 6.? Questions?  
**\<anonimal>** 7. Any additional meeting items  
**\<anonimal>** None from me. Anyone else?  
**\<guzzijones12>** i am good.  
**\<ArticMine>** I am good  
**\<anonimal>** 8. Confirm next meeting date/time  
**\<anonimal>** Two weeks, same time.  
**\<anonimal>** Thanks everyone. In under 20 minutes!  
**\<rehrar>** Sorry here.  
**\<rehrar>** Lel. I was expecting meeting at 1.  
**\<johnalan>** tumbleweeds  
**\<johnalan>** ;)  
**\<johnalan>** hows the Kovri site?  
**\<johnalan>** any news on that end?  
**\<rehrar>** Well, I showed the design for it, which was based off of the chosen Monero design.  
**\<rehrar>** I've been making Monero wires.  
**\<rehrar>** The Kovri site should be easier since there's not as much info.  
**\<johnalan>** cool - great work  
**\<rehrar>** Because of that, I'd like to make custom pages for each Kovri page based on the same CSS framework that will be developed for Monero.  
**\<rehrar>** The goal for both sites is to make upkeep and adding/editing pages as simple as possible. As simple as copy and pasting out of a HTML/css assets document to construct the blocks of pages.  
**\<johnalan>** fab  
**\<johnalan>** sounds good my man  
**\<rehrar>** If you'd like to take a look at the wires, let me know.  
**\<rehrar>** I'm still toying with the garlic logo when I feel inclined. :P  
**\<johnalan>** :)  
**\<johnalan>** got a link to the latest wires?  
**\<guzzijones12>** hard to make the logo and make it look garlic with those colors. imo  
**\<rehrar>** Sure. I'll PM them to you.  
**\<luigi1112>** sorry afk. will be around later, ping again if you think about it  
**\<anonimal>** luigi1112: can you move this to funding required? fp said he would do it soon after the last meeting IIRC https://forum.getmonero.org/6/ideas/87597/monero-bounty-for-hackerone  
**\<luigi1112>** I probably can, not at computer right now though  
**\<anonimal>** k  
**\<anonimal>** moroccanmalinois: new proposal open. #630  
**\<ajs>** 5. Website status: @pigeons got the site I worked on up and running on a server, but I guesss we will go with @rehrar design since it is better  
**\<needmultisig90>** as far as the deanon goes, I actually like that our figurehead working on Kovri is anonymous  
**\<needmultisig90>** just food for thought  
**\<needmultisig90>** Perhaps I'm in the minority, but I think it's both prudent (from a rubber hose attack perspective) and aligns with the ethos of the project.  
**\<needmultisig90>** @anonimal  
**\<anonimal>** Sounds fair.  