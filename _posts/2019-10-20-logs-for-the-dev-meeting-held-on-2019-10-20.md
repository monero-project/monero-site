---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2019-10-20
summary: Development status, 0.15 release discussion, Network upgrade naming, and miscellaneous
tags: [dev diaries, core, crypto]
author: el00ruobuob / rehrar
---

# Logs  

**\<rehrar>** Alright everyone. 17 UTC.  
**\<rehrar>** Meeting time.  
**\<rehrar>** 1. Greetings  
**\<hyc>** hey  
**\<rbrunner>** Hi  
**\<kinghat>** \\o/  
**\<rehrar>** small crowd today?   
**\<sech1>** hi  
**\<rehrar>** well, perhaps people will trickle in.  
**\<rehrar>** Two weeks ago I was at HCPP, so I wasn't able to be here for a meeting. Was there one?  
**\<dEBRUYNE>** I am here  
**\<rbrunner>** No, neither 1 week ago  
**\<dEBRUYNE>** I think we decided to postpone it  
**\<rehrar>** ok, so  
**\<rehrar>** 2. What's been completed since the previous meeting (a month ago)  
**\<hyc>** a lot of PRs got merged  
**\<hyc>** has the v12 forkheight been merged?  
**\<moneromooo>** You can now sync off pruned nodes.  
**\<moneromooo>** Not yet.  
**\<dEBRUYNE>** I think that will probably be on the last merge list before we branch  
**\<dEBRUYNE>** ^ rehrar  
**\<moneromooo>** vtnerd\_\_: do you intend your latest network changes to go in for the fork ?  
**\<vtnerd\_\_>** the one that is up for review, yes that would be the hope (provided its determined to be ready)  
**\<vtnerd\_\_>** its not needed for the hardfork, so if you feel it should wait, then my recommendation would be to wait for a point release  
**\<vtnerd\_\_>** the problem is that re-testing some of your recommendations are likely to take up time before the upcoming branch, but I will try  
**\<moneromooo>** I think that and pay-for-service are the only large ones left.  
**\<moneromooo>** Oh, and the defer tx verification one. Not huge either but a bit substantial.  
**\<rehrar>** are either of those expected to be in?  
**\<moneromooo>** Hopefully all of them.  
**\<moneromooo>** pay-for-service goes next, I've kept it waiting for long enough.  
**\<hyc>** sounds good  
**\<rbrunner>** Did I get that right that a PR is waiting in that batch that will cause testnet to reorg back to some much earlier blockheight?  
**\<hyc>** not that I've seen  
**\<hyc>** ?  
**\<rbrunner>** Maybe I misunderstood then, while reading something up here  
**\<moneromooo>** I said so, but I was wrong. The rules are different, but actually coincide in practice.  
**\<rbrunner>** Surprising  
**\<rbrunner>** All the better  
**\<moneromooo>** They'll stop conciding whe nthe block size shoots up.  
**\<rbrunner>** So we only need some seed nodes working for testnet ... caugh ... caugh  
**\<moneromooo>** gingeropolous added one, that'll be merged soon.  
**\<rbrunner>** Nice  
**\<hyc>** dEBRUYNE: didn't you get hold of fluffypony regarding seed nodes?  
**\<dEBRUYNE>** He posted an update here 1-2 days ago  
**\<dEBRUYNE> \<fluffypony>** re: testnet nodes, I've been having some issues with the boxes I run, but there are other people running testnet nodes besides me  
**\<hyc>** ah, I missed that. ok  
**\<rbrunner>** Especially nice that stagenet gets a third seed node, with the only two so far probably just sitting side-by-side and offering zero redundancy  
**\<rbrunner>** well, not zero, but you get what I mean ...  
**\<rehrar>** Anything else of note to discuss on what's been done this past month?  
**\<hyc>** sounds like not  
**\<rehrar>** Alrighty.  
**\<rehrar>** 3. Fork related things  
**\<rehrar>** is there anything that is needed, desired, wanted, or otherwise needs to be discussed regarding the upcoming fork.  
**\<tevador>** FYI, there will be probably RandomX 1.1.5 with some OpenBSD-related fixes  
**\<tevador>** but best if 1.1.4 is merged first (1.1.5 doesn't need any changes in monero code)  
**\<hyc>** that's PR#5980 for v1.1.4  
**\<tevador>** yes  
**\<rehrar>** ok, no other fork related topics? If not we can move on.  
**\<rehrar>** Zipping through this meeting.  
**\<rehrar>** is anyone from GUI here? dsc\_ selsta  
**\<selsta>** yes we only had bug fixes recently  
**\<selsta>** GUI is ready for v0.15  
**\<rehrar>** ok  
**\<rehrar>** 4. Any Ticket/PR related questions?  
**\<rbrunner>** By the way, is there already a final name for the release? I could use it for adjusting the Windows installer. Is it now crab something?  
**\<hyc>** carbon crab?  
**\<hyc>** I don't recall a final name decision  
**\<rbrunner>** Yeah, that one  
**\<rehrar>** Where was the discussion?  
**\<rbrunner>** Me neither, that's why I ask for sure  
**\<rehrar>** We can make a decision here.  
**\<rbrunner>** I think there was some chatter in a Reddit thread once  
**\<hyc>** I think some names got tossed around in this channel a few weeks ago. but nothing decided.  
**\<moneromooo>** camelopardalis is satifyingly complicated.  
**\<rehrar>** you guys want to decide now? Or not urgent?  
**\<hyc>** oh yeah, that was my suggestion   
**\<moneromooo>** I think pony likes to leave it for a reddit vote where people can't break things   
**\<hyc>** we can do it now, there seems to be enough people present  
**\<hyc>** ah  
**\<dEBRUYNE>** Pony usually makes a Github thread and links that to reddit iirc  
**\<rbrunner>** I would also prefer a Reddit thread, more fun for the fans, so to say  
**\<dEBRUYNE>** (re: name)  
**\<rbrunner>** But why not soon, e.g. tomorrow   
**\<tevador>** does the 24th Oct code freeze still apply?  
**\<tevador>** (it should)  
**\<hyc>** there was a mention of name on reddit https://www.reddit.com/r/Monero/comments/d884zt/preliminary\_information\_thread\_regarding\_the/f2zfmr1/  
**\<hyc>** but pretty sure that was just relaying a suggestion from here on IRC  
**\<rehrar>** I can make a meta issue and link to it on the Reddit  
**\<hyc>** cool  
**\<rbrunner>** Yeah that was me, but I forgot where I got that Carbon Crab  
**\<rbrunner>** Yes, do go ahead  
**\<dEBRUYNE>** rehrar: should I ask pony first if he wants to uphold the tradition?  
**\<hyc>** (I have the previous discussion in chat logs, was in this channel a couple weeks ago)  
**\<moneromooo>** Callisto alliterates nicely too fwiw.  
**\<rehrar>** sure  
**\<rbrunner>** Hmm, yes indeed  
**\<rbrunner>** "Crab" is very short  
**\<rehrar>** Is there anything else to discuss besides the naming?  
**\<rehrar>** Kind of a free for all time.  
**\<hyc>** that's always the hardest problem in computing...  
**\<rbrunner>** So it looks surprisingly good for this code-freeze  
**\<rehrar>** it's because we extended it out an extra month?   
**\<rehrar>** Alright, well if there's nothing else to discuss, then we can go ahead and break. Doughnuts are on the table on your way out.  
