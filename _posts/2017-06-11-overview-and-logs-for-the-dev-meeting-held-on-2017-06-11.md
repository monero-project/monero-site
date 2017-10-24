---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2017-06-11
summary: GUI & download page, multisig, labelbot, 0MQ, and code & open tickets discussion
tags: [dev diaries, core, crypto]
author: dEBRUYNE / fluffypony
---

# Overview  

An overview [can be found on MoneroBase](https://monerobase.com/wiki/DevMeeting_2017-06-11).  

# Logs  

**\<fluffypony>** ok  
**\<fluffypony>** 2. Brief review of what's been completed since the previous meeting  
**\<moneromooo>** Abstracted peer addresses, which will make it easier to plug I2P in later.  
**\<fluffypony>** from my side I put the GUI on the download page, and reviewed and merged PRs  
**\* fluffypony** browses merged PRs  
**\<moneromooo>** Mostly bugfixes I think, I was looking at it.  
**\<fluffypony>** yeah  
**\<fluffypony>** ok let's move on  
**\<pigeons>** arm7 bug found  
**\<fluffypony>** 3. Code + ticket discussion / Q & A  
**\<rehrar>** The new getkovri.org is live. Multi-language ready  
**\<rehrar>** Oops sorry. Too late.  
**\<fluffypony>** lol np rehrar, bring it up in 4?  
**\<rehrar>** It was just fine since last meeting.  
**\<fluffypony>** ok  
**\<serhack>** hello  
**\<serhack>** is meeting now?  
**\<fluffypony>** I'll do some merging today / tomorrow - are there any urgent PRs I must merge first?  
**\<endogenic>** serhack: yes  
**\<moneromooo>** 2078 maybe. Not really super urgent though.  
**\<moneromooo>** Oh, 2073 would be nice.  
**\<moneromooo>** 2064 would be nice too.  
**\<fluffypony>** kk  
**\<johnalan>** 1936?  
**\<fluffypony>** ok  
**\<fluffypony>** on the tickets side - pigeons how goes the ticketbot?  
**\<johnalan>** is that due to be merged?  
**\<fluffypony>** @johnalan yes, as long as there are no conflicts by the time I get to it  
**\<johnalan>** okey  
**\<moneromooo>** Is that the one with a "DO NOT MERGE" text on it ?  
**\<iDunk>** lol  
**\<johnalan>** hehehe  
**\<johnalan>** yes yes  
**\<fluffypony>** well if it says DO NOT MERGE then I'm not going to merge it  
**\<fluffypony>** :-P  
**\<pigeons>** for the ticketbot i am testing, need to make sure it only acts on authorized users' requests mainly is left  
**\<pigeons>** oh and i have only tested labeling, not removing labels or closing issues  
**\<fluffypony>** ok cool, but similar API calls for those  
**\<fluffypony>** we can test it out on meta first  
**\<pigeons>** yes  
**\<fluffypony>** ok sweet  
**\<fluffypony>** is there anyone who doesn't know what ticketbot is?  
**\<tewinget>** I suppose I don't, though I could venture a guess.  
**\<pero>** the future  
**\<pero>** ostensibly  
**\<johnalan>** I dont  
**\<fluffypony>** ok great  
**\<tewinget>** "ok great" --- fluffy was dying to tell about it, he just needed a reason.  
**\<johnalan>** Ticket Bot for IRC  
**\<fluffypony>** so then I have an announcement, which will rock the very foundations of this dev group  
**\<fluffypony>** introducing: TicketBot  
**\<johnalan>** is it huge?  
**\<fluffypony>** for too long we have languished, waiting for that fluffypony guy to close issues on GitHub  
**\<fluffypony>** or label them  
**\<fluffypony>** or remove labels  
**\<johnalan>** ^^^  
**\<fluffypony>** but now, through the power of a bot operating deep within the Monero infrastructure, we will languish NO MORE!  
**\<fluffypony>** for from \<insert future date when pigeons is done> the power of this bot will be unleashed  
**\<fluffypony>** and a group of contributors will be ordained as having Issue Privileges and/or Label Privileges  
**\<fluffypony>** and they will be able to @mention the bot on GitHub issue comments  
**\<endogenic>** i'm not 100% sure what it is  
**\<fluffypony>** and the bot will add or remove labels, or close issues, depending on that contributors privileges  
**\<johnalan>** WOW  
**\<johnalan>** thats amazing  
**\<fluffypony>** tl;dr we're providing a way around GitHub's lack of fine-grained collaborator privs  
**\<tewinget>** was just about to say...I can't believe you can't do that within github  
**\<fluffypony>** medusa was the one that pushed for it and suggested workarounds till we figured out the bot idea  
**\<fluffypony>** so thank him  
**\<ArticMine>** The bot runs here?  
**\<fluffypony>** ArticMine: no on GitHub, not on IRC  
**\<moneromooo>** Thanks medusa :D  
**\<tewinget>** well, for/with github, not on  
**\<fluffypony>** so you have to be authenticated to GitHub to comment on the issue anyway  
**\<pero>** wow this is really the future  
**\<pero>** such a thing didnt already exist?  
**\<moneromooo>** And thanks pigeons  
**\<fluffypony>** no  
**\<fluffypony>** we had to create it  
**\<fluffypony>** from scratch  
**\* endogenic** opens a barolo in medusa and the devs honor  
**\<gingeropolous>** ;)  
**\<pero>** impressive  
**\<fluffypony>** MOST IMPRESSIVE  
**\<fluffypony>** BUT YOU ARE NOT A JEDI YET  
**\* fluffypony** is inclined to say that when someone says "impressive"  
**\<tewinget>** doesn't work with your accent  
**\<rehrar>** Will we be selfish with him?  
**\<fluffypony>** it will depend from project to project, we'll keep the ACL small for the moment so that people don't argue about whether or not an issue should be closed  
**\<rehrar>** I mean he'll be open source, yeah? He can help a lot of other oss projects.  
**\<fluffypony>** oh yes absolutely  
**\<fluffypony>** we just need to figure out an Esperanto name for it, but dnaleor can be in charge of that  
**\<fluffypony>** ok - so that's tickerbot, let's move on  
**\<fluffypony>** 4. Any additional meeting items  
**\<johnalan>** Something about multisig, I think I heard someone say  
**\<moneromooo>** Kinda peripheral, but I've finished my last ffs milestone yesterday (thanks to all).  
**\<johnalan>** Congrats and well done  
**\<dternyak>** woo! moneromooo congrats  
**\<xmr-eric>** Thanks mooo  
**\<fluffypony>** well done mooo  
**\<moneromooo>** And I'm hacking on multisig yes, from luigi1113's docs and help. Not working yet though.  
**\<fluffypony>** moneromooo: are you going to do another FFS ?  
**\<johnalan>** @moneromooo you should  
**\<dternyak>** ^ +1  
**\<scoobybejesus>** ^  
**\<unknownids>** grats moo!  
**\<unknownids>** god i hope he does  
**\<moneromooo>** Not sure. I was kinda toying with quitting my day job and working more on monero, but... can't decide to just do it  
**\<gingeropolous>** waaaat  
**\<johnalan>** see how it goes for another round of ffs  
**\<4matter>** good what feels good ;)  
**\<iDunk>** O.O  
**\<johnalan>** it will get funded in no time  
**\<4matter>** do  
**\<dternyak>** yessss do it moneromooo  
**\<unknownids>** oooo. i heard you should do that  
**\<endogenic>** wow you have a day job and you work on monero?  
**\<fluffypony>** moneromooo: DO IT  
**\<unknownids>** i heard that you should do that from a few people moneromooo  
**\<thrmo[m]>** Just do it! ^^  
**\<fluffypony>** you know you can trivially get funding  
**\<4matter>** meant to say: do what feels good ;)  
**\<johnalan>** everyone will contribute  
**\<unknownids>** i have my wallet ready to donate  
**\<ArticMine>** It will get funded  
**\<johnalan>** ^  
**\<fluffypony>** and my axe  
**\<unknownids>** why wont you take my moneros already!  
**\<endogenic>** (your other axe)  
**\<moneromooo>** Thank you for the plebiscite :D  
**\<gingeropolous>** (futurama shutup and take my money meme insert here)  
**\<binaryFate>** do it dude  
**\<moneromooo>** I might. I have a nice cushion now to stay out of work for a few years if things don't work out, so...  
**\<moneromooo>** And about multisig, I'm waiting for luigi1113 to check logs and see where things are going wonky.  
**\<johnalan>** You wouldn’t be out of work, you’d be working for yourself!  
**\<moneromooo>** But the code's all there for N/N (No N-1/N yet).  
**\<johnalan>** great  
**\<unknownids>** awesome  
**\<johnalan>** thanks for your work  
**\<dternyak>** thanks moneromooo  
**\<johnalan>** I haven’t had time personally to contribute recently, but are there any updates from anyone on mobile wallet?  
**\<unknownids>** moneromooo, is that code on github anywhere yet? (not that i would understand it)  
**\<moneromooo>** Yes. Let me see..  
**\<endogenic>** i'm curious to check it out too, will learn a ton  
**\<dternyak>** johnalan it seems all thats left is certs, maybe fluffypony can comment :)  
**\<dternyak>** unless you meant official gui mobile  
**\<endogenic>** dternyak: i think he means official wallet  
**\<dternyak>** yeah  
**\<johnalan>** I am very excited about both  
**\<moneromooo>** https://github.com/moneromooo-monero/bitmonero/commits/mswip  
**\<fluffypony>** official - MyMonero isn't cool enough to have dev meetings  
**\<johnalan>** but yup I meant official  
**\<endogenic>** ^  
**\<endogenic>** lol i love your commit msgs  
**\<johnalan>** Coinomi seem to be getting there too  
**\<moneromooo>** The second commit message has luigi1113's doc about it.  
**\<4matter>** jaxx integration?  
**\<4matter>** jkjk  
**\<4matter>** lmao  
**\<johnalan>** “More”  
**\<unknownids>** thanks luigi1113 and moneromooo this is exciting stuff  
**\<moneromooo>** That's going to be rebased though. Don't mind this.  
**\<johnalan>** :)  
**\<johnalan>** so on gui/mymonero mobile - any updates?  
**\<fluffypony>** Jaquee ^^  
**\<fluffypony>** or MoroccanMalinois maybe?  
**\<xmr-eric>** I still think we need to decide on a name for the GUI. https://github.com/monero-project/monero-core/issues/674  
**\<xmr-eric>** Monero Kerna still seems fun  
**\<johnalan>** you can call it Mary if you like, I just want it  
**\<johnalan>** :)  
**\<endogenic>** not a huge fan of that  
**\<MoroccanMalinois>** I know Jaquee is working on the light wallet stuffs.  
**\<anonimal>** moneromooo: if you don't do another FFS, I'll stick my arm through these encrypted pipes, all the way to your face, and tickle your nose until you an FFS  
**\<Jaquee>** re: gui mobile. I've finally bought an android. Will try to get in running there in upcoming weeks. I'm almost finished with the lightwallet stuff (mymonero/openmonero)  
**\<endogenic>** way to go Jaquee!  
**\<moneromooo>** :)  
**\<Jaquee>** i have more time now over summer  
**\<johnalan>** well done Jaquee  
**\<xmr-eric>** :+1:  
**\<endogenic>** anonimal: sounds… kinky  
**\<dternyak>** 👍  
**\<anonimal>** lol endogenic  
**\<johnalan>** @anonimal is there a kovri meeting after this?  
**\<fluffypony>** ok so on that note  
**\<fluffypony>** 5. Confirm next meeting date/time  
**\<fluffypony>** what say ye to 2 weeks  
**\<fluffypony>** June 25th  
**\<johnalan>** :+1:  
**\<ArticMine>** Sounds good  
**\<endogenic>** aye  
**\<fluffypony>** purrrrrrfect  
**\<tewinget>** so on pero's suggestion, I've committed to having daemon rpc server and wallet rpc client done (with all major concerns addressed), and some form of {wallet,block}notify by the end of the month.  my plan is to have the daemon server rpc buttoned up by next sunday, wallet client by the following sunday, and then spend the remainder of the month further addressing comments/suggestions and working on notify things.  That precise timeline is tentative  
**\<tewinget>** , of course, but I've committed to the end of the month for the lot.  