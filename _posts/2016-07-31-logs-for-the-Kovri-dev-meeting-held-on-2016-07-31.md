---
layout: post
title: Logs for the Kovri Dev Meeting Held on 2016-07-31
summary: Brief review of what has been completed since last meeting, and Kovri Logo
tags: [dev diaries, i2p, crypto]
author: dEBRUYNE / fluffypony
---

### Logs

**\<anonimal>** ping fluffypony we missed you in #monero-dev  
**\<anonimal>** I'll proceed with the meeting as planned but the bulk of the agenda is picking on your assigned issues.  
**\<anonimal>** https://github.com/monero-project/kovri/issues/216  
**\<anonimal>** Meeting Agenda: Sunday, July 31st, 17:00 UTC  
**\<anonimal>** 1. Greetings  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\<anonimal>** 3. Discuss Kovri logo  
**\<anonimal>** 4. Closing #271   
**\<anonimal>** 5. Closing #226   
**\<anonimal>** 6. Closing #105   
**\<anonimal>** 7. Closing #46   
**\<anonimal>** 8. Closing #27   
**\<anonimal>** 9. Any additional meeting items  
**\<anonimal>** 10. Confirm next meeting date/time  
**\<anonimal>** Hi.  
**\<i2p-relay> {-needmoney90}** * walks into the room and sits in the nearest available seat  
**\<i2p-relay> {-needmoney90}** Just watching for today  
**\<anonimal>** Is anyone freenode side? This meeting is not being relayed to #monero-dev. I'll hop onto slack to see if the relay is working.  
**\<i2p-relay> {-_Slack} \<needmoney90>** It appears so  
**\<i2p-relay> {-_Slack} \<needmoney90>** I2P, Slack, and IRC are all relaying  
**\<anonimal>** K, thanks.  
**\<anonimal>** Onto point 2.  
**\<anonimal>** $ git log --no-merges --pretty=oneline --since=1.month | wc -l  
**\<anonimal>** 72  
**\<anonimal>** Code highlights include:  
**\<anonimal>** - Mem leak fixes  
**\<anonimal>** - New constant-time comparison for ed25519  
**\<anonimal>** - Two new contributors: moneromooo and rakhimov  
**\<anonimal>** (hopefully will see more from both devs)  
**\<anonimal>** - regex fix, clang fixes  
**\<anonimal>** - A whole lot of build/repo work  
**\<anonimal>** - We officially build with clang  
**\<anonimal>** - We officially build on OSX again  
**\<anonimal>** - Two new submodules: cpp-netlib, cryptopp  
**\<anonimal>** - New URI parsing implementation courtesy of cpp-netlib  
**\<anonimal>** - New clang-format config (still in development)  
**\<anonimal>** - Updated style guide + building instructions + docs  
**\<anonimal>** - Upstream bug hunting/fixing (huge time-suck)  
**\<anonimal>** - Coverity's website finally works (for me)  
**\<anonimal>** - Misc fixes, enhancements  
**\<anonimal>** Project highlights include:  
**\<anonimal>** - Kovri End-User Documentation Proposal - #256  
**\<anonimal>** - 9 new opened issues, 7 new closed issues  
**\<anonimal>** - Creation of @kovri@quitter.se  
**\<anonimal>** - I've also spent some time with bitmonero/monero-project  
**\<anonimal>** That's all from me for 2. Anyone else?  
**\<anonimal>** Ok, guess not.  
**\<anonimal>** fluffypony fluffypony fluffypony fluffypony   
**\<i2p-relay> {-needmoney90}** * summons fluffypony from the depths  
**\<anonimal>** 2nd meeting in a row he's missed. I hope he's alive.  
**\<i2p-relay> {-needmoney90}** D:  
**\<anonimal>** I know this is opensource and volunteer but I'm getting a bit irritated.  
**\<anonimal>** Being stood up is not very respectful.  
**\<i2p-relay> {-needmoney90}** oh he isnt in this room  
**\<i2p-relay> {-needmoney90}** summoning wont work from here  
**\<anonimal>** lol needmoney90  
**\<i2p-relay> {-needmoney90}** He isn’t even on IRC it seems  
**\<i2p-relay> {-needmoney90}** hm  
**\<i2p-relay> {-needmoney90}** thats strange, Im used to him being always on/ide  
**\<i2p-relay> {-needmoney90}** idle  
**\<anonimal>** He's on irc2p side.  
**\<anonimal>** Is dEBRUYNE on freenode side? Is this meeting even being logged?  
**\<i2p-relay> {-needmoney90}** Well, Slack is certainly logging it  
**\<i2p-relay> {-needmoney90}** and my client possibly is  
**\<i2p-relay> {-needmoney90}** havent checked logging settings  
**\<Zenified>** so is my client  
**\<anonimal>** Ok.  
**\<anonimal>** Moving on to 3.  
**\<anonimal>** "Discuss Kovri logo"  
**\<anonimal>** Who did Monero's logo?  
**\* anonimal:** asked in #monero-dev, no response  
**\<anonimal>** Any thoughts on a logo for Kovri?  
**\<anonimal>** How about a nude porn star holding a letter 'K'?  
**\<i2p-relay> {-needmoney90}** I've been thinking about it  
**\<i2p-relay> {-needmoney90}** and….I don’t think that will get us corporate/mainstream usage  
**\<i2p-relay> {-needmoney90}** then again, maybe it will  
**\<i2p-relay> {-needmoney90}** keep it on the backburner  
**\<anonimal>** lol  
**\* anonimal:** was joking  
**\<i2p-relay> {-needmoney90}** I’ve been thinking some kind of K made of nodes (like the Ethereum Classic logo), but fading out on half  
**\<i2p-relay> {-needmoney90}** though its probably too complex  
**\<i2p-relay> {-needmoney90}** https://camo.githubusercontent.com/eec95efca3ae789116e4557656898ab52ca74cba/687474703a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f312a6e4955617a775f75334b436843583839664c674c44672e706e67  
**\<anonimal>** Sounds cool.  
**\<anonimal>** DaveyJones pointed this out https://99designs.de/logo-design/contests/monero-mro-cryptocurrency-logo-design-contest-382486  
**\<anonimal>** needmoney90: could that url get any longer?...  
**\<anonimal>** Ah, I see. Interesting idea needmoney90  
**\<anonimal>** Maybe we should hold a contest and reward the winner with XMR?  
**\<i2p-relay> {-needmoney90}** Sorry about the URL length, I copypasta’d without minifying  
**\<anonimal>** Np.  
**\<anonimal>** Where would be a good place to host a Kovri logo contest?  
**\<anonimal>** (XMR friendly place)  
**\<anonimal>** I'll open a ticket and we can deal with it later  
**\<anonimal>** Points 4-8 are all fluffypony   
**\<anonimal>** 9. Any addition meeting items  
**\<i2p-relay> {-needmoney90}** None here  
**\<anonimal>** EinMByte is MIA. SSU still not finished. From what I've worked on, debugging the rest to get it merged will require motivation on my part.  
**\<i2p-relay> {-needmoney90}** SSU?  
**\<anonimal>** No shows at meetings + no pay != motivation for me to do lifting beyond what I'm doing.  
**\* anonimal:** grabs link for needmoney90  
**\<anonimal>** needmoney90: #140  
**\<i2p-relay> {-needmoney90}** tanks  
**\<anonimal>** I'll make myself available for the next 30 minutes and then paste a link to the meeting log in #216  
**\<i2p-relay> {-needmoney90}** I’m really curious where fluffy got off to..  
**\<anonimal>** We were chatting about an hour before monero's meeting was supposed to start  
**\<anonimal>** Maybe he simply forget. This has happened several times in the past.  
**\<i2p-relay> {-needmoney90}** :(  
**\<i2p-relay> {-_Slack} \<anonimal>** needmoney90: is there a way to easily export channel logs here?  
**\<i2p-relay> {-_Slack} \<needmoney90>** hrmmm  
**\<i2p-relay> {-_Slack} \<needmoney90>** I just exported  
**\<i2p-relay> {-_Slack} \<needmoney90>** should have the logs (from all channels) in my email soon  
**\<i2p-relay> {-_Slack} \<needmoney90>** barring that, someone's IRC client logs will work  
**\<i2p-relay> {-_Slack} \<anonimal>** Nice. Would it be easy to fpaste a private paste of just our meeting? e.g., do they do any formatting or just lump everything into an email?  
**\<i2p-relay> {-_Slack} \<needmoney90>** no idea  
**\<i2p-relay> {-_Slack} \<needmoney90>** ill let you know  
**\<i2p-relay> {-_Slack} \<anonimal>** Thanks. For the time being I'll just do a quick format of my logs to takeout timestamps and paste the meeting.  
