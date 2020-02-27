---
layout: post
title: Logs for the Community Meeting Held on 2018-01-20
summary: Community highlights, Forum Funding System updates, RFC-HWALLET-1, Kasisto, open ideas, and miscellaneous
tags: [dev diaries, crypto]
author: dEBRUYNE / fluffypony
---

# Logs  

**\<rehrar>** For newcomers, or those who don't know. The community meeting is a place where individuals or groups interested in making the Monero community a better, more helpful, more welcoming, and fun place can congregate and throw ideas around.  
**\<rehrar>** We've already sort of gone through 1. Greetings, but if there is anyone else out there in the peanut gallery that wants to say 'hi' and show your presence, by all means do so.  
**\<keledoro>** Heya!  
**\* ErCiccione** here but sick and getting worse, not going to be very communicative :(  
**\<rehrar>** you probably caught it from anonimal :/  
**\<vdo>** hi  
**\<suraeNoether>** howdy y'all  
**\<rehrar>** 2. Community highlights  
**\<vdo>** on mobile but here  
**\<rehrar>** You can see the Monero Observer for a good breakdown of what's happened in the past two bits of time since we've had our last meeting.  
**\<ErCiccione>** rehrar: lol. yeah, that germ spreader  
**\<rehrar>** But is there anything anyone wants to highlight in particular about the past couple weeks in regards to cool stuff our community (not necessarily just this workgroup) has done?  
**\<msvb-mob>** The Monero Observer is where? It sounds like revuo but is not.  
**\<rehrar>** http://monero-observer.com/  
**\<rehrar>** Observer is here, and covers more the day to day of Monero  
**\<serhack>** We are going to reach 100k subreddit users :O  
**\<cryptochangements>** the new Cake Wallet is out, and the dev intends to release source so that's exciting  
**\<rehrar>** The Revuo is coming! Promise. Just had to push back a bit since anonimal has been sick, but we're working on the Kovri part (the last part) this weekend hopefully.  
**\<rehrar>** Yes, I invited the Cake Wallet guys to the community meeting here when I chatted with him yesterday  
**\<rehrar>** hopefully he'll show :) He got on the mattermost  
**\<suraeNoether>** the community sent me to attend the conference RealWorldCrypto in Zurich, where I met up with Fluffypony, andytoshi, Peter Wuille (spelling?)  
**\<suraeNoether>** and is sending me and sarang to BPASE18 next week, too  
**\<onetwo22>** http://monero-observer.com/Monero%20Observer%20-%20Vol%2001%20No%2020.html  
**\<rehrar>** brief four sentences on your time in Zurich suraeNoether?  
**\<suraeNoether>** which is a really fantastic thing our community has done  
**\<monerodesigns>** oh, I'm featured in the Monero Observer :) nice. didn't even know this exists. cool project  
**\<rehrar>** oyoy, alright, we'll move on then :)  
**\<suraeNoether>** I attended Andrew Poelstra's talk (andytoshi) on MimbleWimble and scriptless scripts, which was the first talk of the conference that had any serious math in it, terrifying the venture capitalists. Fluffypony and I met up with several of the team members at Digital BitBox, a hardware wallet company that is doing some truly fantastic work, as well as the Operations Manager from Globee. The week was  
**\<suraeNoether>** productive, as andytoshi and I were able to discuss in person at least one idea I had for a rather crude refund transaction mechanism that could work in Monero. It was an honor to meet so many members of the cryptocurrency community, and it was fantastic to make new friends!  
**\<rehrar>** \^ thank you so much suraeNoether  
**\* suraeNoether** thumbs up  
**\<dEBRUYNE>** suraeNoether: BitBox is a hw wallet right? Did they have any intention to add Monero?  
**\<msvb-mob>** Shift Devices is now local to Zurich.  
**\<serhack>** cool suraeNoether!  
**\<suraeNoether>** dEBRUYNE: yes, monero stickers everywhere~  
**\<emesik>** transaction refund? sounds interesting  
**\<rehrar>** 3. FFS updates  
**\<msvb-mob>** dEBRUYNE: They want to add Monero and have no plans to add Monero (at the same time.)  
**\<rehrar>** Start with hardware wallet? msvb-mob, you wanna give us a thing or two?  
**\<msvb-mob>** Okay.  
**\<suraeNoether>** msvb-mob +1 yep exactly  
**\<msvb-mob>** We've made considerable progress in Firmware.  
**\<msvb-mob>** And USB logic, including obtaining Product IDs (provisionary.)  
**\<msvb-mob>** Work is ongoing to test a more anonymous distribution system (poste restante.)  
**\<monerodesigns>** nice  
**\<msvb-mob>** And another edition of BTC Manager is coming out reporting on us.  
**\<msvb-mob>** Bunch of stuff I found in China, like visiting a factory.  
**\<msvb-mob>** And we're planning a third hardware team meeting this week:  
**\<msvb-mob>** ...wait for it.  
**\<msvb-mob>** https://doodle.com/poll/c8hg5gs8kuvt92dp  
**\<msvb-mob>** rehrar: Thanks.  
**\<msvb-mob>** Any questions?  
**\<rehrar>** will we pull this off? or are we just a bunch of kids trying to play with the big boys?  
**\<rehrar>** but that may be for another time  
**\<rehrar>** serhack, my man. You wanted to speak a few words about Mastering Monero?  
**\<serhack>** oh, I thought about monero integrations too  
**\<rehrar>** do both  
**\<serhack>** Anyway for monero integrations, I am still working with cryptochangements for opencart gateway payment  
**\<rehrar>** you and cryptochangements  
**\<cryptochangements>** idk if there is much to say yey, but sure ;)  
**\<cryptochangements>** \*yet  
**\<serhack>** okay, let's talk about mastering monero now  
**\<cryptochangements>** sounds good  
**\<serhack>** I asked for FFS about Mastering Monero https://forum.getmonero.org/6/ideas/89797/mastering-monero-ffs  
**\<serhack>** At the moment, I have two chapters finished and the third is almost finished (exactly 47 pages)  
**\<serhack>** if you wanna tl;dr : Mastering Monero will be a book about the Monero world  
**\<serhack>** from Kovri to RingCT, mastering monero will have the answer for your questions about Monero!  
**\<serhack>** https://masteringmonero.com  
**\<serhack>** any questions?  
**\<rehrar>** You looking for illustrators?  
**\<rehrar>** for both infographics as well as general Monero illustrations?  
**\<serhack>** At the moment, I have baltsar as designer  
**\<zbert>** How many chapters are planned for now?  
**\<rehrar>** ok  
**\<msvb-mob>** Great choice, Baltsar makes super graphics. And nice to see a EPUB edition from the start.  
**\<serhack>** At the moment I planned about 7-8 chapters https://taiga.getmonero.org/project/serhack-mastering-monero/wiki/summary  
**\<serhack>** thanks msvb-mob  
**\<zbert>** serhack: thanks  
**\<serhack>** yw  
**\<monerodesigns>** who is the target audience?  
**\<monerodesigns>** everyman? or a crypto geek?  
**\<emesik>** from the summary it looks like addressing a broad audience  
**\<serhack>**  expect the audience to be a mix of new, non-technical users and people who are more familiar with Monero and more technically advanced.  
**\<serhack>** I \*  
**\<rehrar>** alright, further questions can be fielded to serhack after the meeting, we've got more updates people  
**\<serhack>** emesik: sure!  
**\<monerodesigns>** a difficult target audience. great work so far!  
**\<serhack>** thanks a lot! :)  send me a pm for questions  
**\<rehrar>** Now, it's time for: the man! the legend! amiuhle!!! *woooo* So tell us about Kasisto?  
**\<serhack>** go rehrar  
**\<amiuhle>** lol  
**\<amiuhle>** Kasisto in 22 seconds: https://imgur.com/a/aLFB3  
**\<serhack>** amiuhle the king whoaa!  
**\<amiuhle>** I'm done with Milestonen 1 / Alpha 2. Just wrapping things up with better documentation / overview in the README and technical details on how to set up the server  
**\<keledoro>** Awesome!  
**\<cryptochangements>** oh I havent yet got a chance to test out kasisto but that looks dope  
**\<serhack>** very good amiuhle! it's a perfect point of sale system  
**\<amiuhle>** I'll put that in the README. Maybe I'll do it again because it's a bit blurry  
**\<sarang>** That kasisto is faaaast  
**\<amiuhle>** Well to be fair, it's the same remote node  
**\<amiuhle>** So if it has to propagate through the network first it might be a bit slower  
**\<amiuhle>** Is anyone running a public v6 testnet node?  
**\<amiuhle>** binaryFate maybe?  
**\<emesik>** If there's a need for such node, I could set up one  
**\<amiuhle>** And Kasisto was tested at the last Berlin meetup and as I understand it's a permanent payment method there now  
**\<cryptochangements>** thats pretty awesome  
**\<amiuhle>** I think it'd be good to have a few of those, yes  
**\<vdo>** i'm running one  and I'm organizing Barcelona meetup next wed  
**\<serhack>** For the new users, here it's kasisto : https://github.com/amiuhle/kasisto  
**\<vdo>** but the owner  wants to use mobile wallet monerujo for now  
**\<rehrar>** dude, this is one of the things I am the most excited about.  
**\<phx[m]>** Yea very cool  
**\<amiuhle>** vdo: Have a testnet wallet ready so you can show the owner while you're there..  
**\<vdo>** yeah ok  
**\<amiuhle>** cool  
**\<vdo>** i need to explain view only wallets and such  
**\<rehrar>** alright, thanks so much!  
**\<rehrar>** Alright guys, let's sit back and relax. Take a breather. Put your thinking caps on.  
**\<amiuhle>** I'm hoping to wrap it all up and push the latest changes today / tomorrow and then I'll update the FFS post  
**\<rehrar>** Because it's time for 4. TBA  
**\<emesik>** wait  
**\<rehrar>** And we need to think what sgp wanted to put there  
**\<rehrar>** :P  
**\<rehrar>** what's up emesik?  
**\<emesik>** an update on python module FFS  
**\<serhack>** TBA  ? The big algorithm? LoL  
**\<emesik>** so, basically the code for first release is almost ready  
**\<rehrar>** oh perfect. I'm so sorry. Go for it.  
**\<emesik>** I'm writing the docs, both API and tutorial  
**\<emesik>** I think the first release will be available in early february  
**\<rehrar>** awesome!  
**\<emesik>** it will already allow to read wallet data, retrieve list of transactions (in and out), and of course send them  
**\<emesik>** for sending I already have two ways, simple transfer by the wallet  
**\<emesik>** or retrieving a blob to be posted to daemon directly  
**\<emesik>** I'd be happy to add payment proofs to the first release  
**\<emesik>** but will see if time allows for that  
**\<emesik>** anyway, the development won't stop with the FFS milestone completed  
**\<emesik>** there's a lot of things to do further on  
**\<emesik>** multisig for example, or libwallet  
**\<emesik>** the code is here: https://github.com/emesik/monero-python  
**\<amiuhle>** Good to see a tests folder there :+1:  
**\<emesik>** and good news, the module is going to be ahead of Monero itself, already handling accounts and subaddresses  
**\<emesik>** any questions?  
**\<rehrar>** this conglomerate of passionate individuals is honestly the most inspiring thing. It may even inspire me to get involved and do something.  
**\<rehrar>** thank you emesik for the update!  
**\<rehrar>** Just a fun FFS to look at. If you liked the Monero Cat comics, the guy who made them opened a FFS proposal to make more (bigger): https://forum.getmonero.org/6/ideas/89764/i-d-like-to-develop-a-new-webcomic-series-starring-monerocat-and-the-justice-league-of-crypto  
**\<rehrar>** feel free to read it through and comment on it  
**\<rehrar>** Alright, we can move into 5. Open ideas time  
**\<rehrar>** This is a time where we as a community workgroup put our heads together and throw ideas out there about how to improve Monero, the community, and more.  
**\<rehrar>** So, have at it. Any ideas or things you want to say?  
**\<monerodesigns>** ok, i don't know if this is the best time, I just wanted to say hi... I'm the guy behind the Monero Designs wallpapers and those pizzaboy images...  
**\<monerodesigns>** and I just wanted to say thanks to everyone for the cool feedback and everything  
**\<serhack>** Hi monerodesigns and welcome to Monero community!  
**\<monerodesigns>** I have a couple of new ideas in the works... if there's ever anyone that wants to reach out or anything, I'm very excited about monero... been following the project since january last year  
**\<serhack>** I would like to mark a little thing: Mastering Monero is basically a Monero Marketing Campaign by a book  
**\<serhack>** so if you have any ideas about marketing, please let us know!  
**\<emesik>** #dontbuymonero stickers on your local ATM ;)  
**\<monerodesigns>** anyway, just wanted to say that what made me start doing this was a reddit post a couple of months ago about how there aren't any posters like there are for bitcoin  
**\<monerodesigns>** that's it, rant over :)  
**\<emesik>** monerodesigns: coul you paste a link to your works, please?  
**\<monerodesigns>** i think what the community is doing now is the best thing it can be doing... just making others aware of this awesome project, without any hype or anything  
**\<cryptochangements>** gingeropolous made this reddit post https://www.reddit.com/r/Monero/comments/7rn6el/moneroworld_remote_nodes_geo_lists/?utm_source=reddit-android about moneroworld remote nodes. in there he mentions funding powerful servers for nodes. It looks like the general donation fund on moneroworld.com is where we can direct donations for anybody thay wants to.  
**\<monerodesigns>** monerodesigns.com (the website is a mess... this is just something I'm doing on the side... lol)  
**\<emesik>** monerodesigns: thx!  
**\<emesik>** I like them!  
**\<monerodesigns>** i liked that whole "run your own node." campaign by the bitcoin community. i think that's a good thing... it was what made me start a monero node a couple of months ago  
**\<monerodesigns>** (ironically, it was the bitcoin posters that made me start my monero node lol)  
**\<rehrar>** I'm thinking of holding another mini-privacy conference over youtube like I did before. I think most everyone missed it because it the circumstances around it were...different. :P  
**\<monerodesigns>** @michalthanks!  
**\<cryptochangements>** more personal nodes totally helps oit the network, but unfortunatly remote nodes that new users use is kinda centralized at the moment  
**\<monerodesigns>** where are they located?  
**\<rehrar>** I just pop online and talk about privacy and get to do my infamous 'rehrar rants' without any interruption. Most people don't know how hard real privacy is in this day and age, and they think it's as easy as using one or two tools or doing one or two things  
**\<monerodesigns>** or are there just not enough?  
**\<cryptochangements>** rehrar i missed that! you got a link?  
**\<miziel>** there will be a need for some poster/sticker campaign after the new slogan  will be "forged"  
**\<keledoro>** I'd watch it @rehrar. Make sure to announce it a couple of days before you're going to livestream it  
**\<monerodesigns>** I run my node on my miner, and it barely takes away any hashrate... i think if lots of miners ran their nodes...  
**\<rehrar>** link to last one: https://www.youtube.com/watch?v=GRZzyvN_gS0  
**\<emesik>** monerodesigns: Opposite here. I had to buy a bigger VPS to accommodate the blockchain. As result I got 3 spare cores that are hashing right now :)  
**\<phx[m]>** monerodesigns: good to see some memes. People tend to underestimate their power  
**\<vdo>** scaleway.com is working quite well for me  
**\<rehrar>** alright, if there's not that much more to discuss, then maybe we can call it early, unless someone wants to share an idea  
**\<vdo>** at a reasonable price for ssd  
**\<keledoro>** With the latest increase in merchants adoption, how about we setup a new fancy, "browsable" directory instead of listing all merchants on one page (getmonero.org/community/merchants)? Making it possible to browse by product category, type of service etc. Also making it easier to add new merchants, because right now you need a github acc. in order to add a new one  
**\<keledoro>** What do you guys think?  
**\<rehrar>** moneromerchants.com?  
**\<serhack>** why not updating css style on https://forum.getmonero.org/ rehrar?  
**\<vdo>** there's one list at monero.how  
**\<rehrar>** it's supposed to be replaced serhack with getmonero.org/forum-funding-system  
**\<keledoro>** just had to check if moneromerchants.com is a thing :D  
**\<rehrar>** waiting on fp for a couple things for this to move forward, and I can't move forward without it  
**\<rehrar>** someone can buy moneromerchants.com if it's not taken already  
**\<rehrar>** and the community can throw together something like that. I'd be willing to help contribute as a web dev  
**\<serhack>** moneromerchants.com is taken :/  
**\<monerodesigns>** yeah, thanks... I have a couple of ideas in the works at the moment... It's just hard to get some of the nuance of fungibility across in a short meme-like format  
**\<cryptochangements>** i think that's a good idea to clean it up, but I think it should still be done by github PRs if youre gonna use getmonero otherwise it will just get filled with spam  
**\<amiuhle>** Does anyone know who runs dis.gratis? I'd like to have a clone for the v6 testnet  
**\<rehrar>** monerodirectory.com?  
**\<emesik>** amiuhle: how actually can we choose the testnet version right now?  
**\<emesik>** if I understand, there are 2 forks  
**\<amiuhle>** Depends on the binary you're running  
**\<emesik>** always latest master  
**\<keledoro>** Would be available  
**\<amiuhle>** Release binaries with --testnet is the v6 fork, master build is v7  
**\<emesik>** ok!  
**\<keledoro>** Well, anyway I just wanted to start a conversation about having a more organized merchants directory  
**\<keledoro>** Maybe it's a bit too early, since it all still fits on one page  
**\<amiuhle>** I like the idea, could come with a map for POS  
**\<monerodesigns>** @keledoro I think it's a good idea  
**\<emesik>** keledoro: Merchants are precious now, we should take care to promote them  
**\<monerodesigns>** @michal I agree!  
**\<vdo>** is something like xmr.to with LN support planned?  
**\<emesik>** btw, do you think we should mention darknet markets accepting monero on the official project pages?  
**\<rehrar>** no  
**\<amiuhle>** no  
**\<monerodesigns>** no :)  
**\<emesik>** ok :D  
**\<rehrar>** alright everyone, I think we'll call it  
**\<rehrar>** so, next meeting date/time  
**\<rehrar>** two weeks from now  
**\<rehrar>** the third of Febz  
**\<rehrar>** Thanks for coming by the meeting. It's good to hear all the progress that's being made.  
**\<monerodesigns>** same time yeah?  
**\<rehrar>** Ye.  
**\<keledoro>** See you around!  
**\<rehrar>** Meeting over. Have good lives.  
**\<monerodesigns>** (i wont be able to attend, but see around at the next one)  
**\<emesik>** see you!  
**\<amiuhle>** See you guys!  
**\<monerodesigns>** see ya  
**\<cryptochangements>** see y'all  
**\<serhack>** Bye  
**\<vdo>** bye  