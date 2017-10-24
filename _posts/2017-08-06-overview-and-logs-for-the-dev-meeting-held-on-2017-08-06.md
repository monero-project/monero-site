---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2017-08-06
summary: Discussion of open PRs and issues, minimum / default ring size, mobile wallets, and miscellaneous
tags: [dev diaries, core, crypto]
author: dEBRUYNE / fluffypony
---

# Overview  

An overview can be found on [MoneroBase](https://monerobase.com/wiki/DevMeeting_2017-08-06).  

# Logs  

**\<rehrar>** The usual: https://github.com/monero-project/meta/issues/99  
**\<rehrar>** Btw, pony has asked me to make the meeting issues from now on cuz he forget. :)  
**\<hyc>** ok cool  
**\<Fymiywtfbtcxmr>** 1st Issue should be min ring size  
**\<Fymiywtfbtcxmr>** Time to decide before code freeze  
**\<gingeropolous>** From my viewpoint, the issue stands at this: there's consensus to move it to ringsize 5, and there's some support to make it more than that. But I don't think there's any scientific reason for any particular number greater than 5  
**\<hyc>** right.  
**\<johnalan>** yes 5 is optimal  
**\<hyc>** I expressed a preference for 8 because I like powers of 2.  
**\<johnalan>** lol  
**\<gingeropolous>** so the question is whether we should go greater than 5 just based on a gut feeling that more is better  
**\<gingeropolous>** or wait until we have some valid reason with some maths backing it  
**\<ArticMine>** The case for more than 5 is two mix sets  of 5 recent and random  
**\<hyc>** I think the question is what does it do to min tx size  
**\<hyc>** and min tx fee  
**\<ArticMine>** Yes that is very important  
**\<endogenic>** so, more research?  
**\<rehrar>** \^  
**\<dEBRUYNE>** hyc: increasing mixin from 2 to 10 increases the tx size with ~ 1 kB  
**\<dEBRUYNE>** assuming 2 in 2 out transactions  
**\<hyc>** yeah, 5 for now. more research for additional changes.  
**\<gingeropolous>** should we bump the wallet default?  
**\<dEBRUYNE>** Perhaps leave it at 4 for uniformity?  
**\<dEBRUYNE>** 5\*  
**\<endogenic>** fwiw we use 9 in new mymonero apps currently (ringsize of 10)  
**\<endogenic>** but we also turned off our tx fees due to ringct tx size et al  
**\<endogenic>** temporarily…  
**\<hyc>** endogenic: have you also changed output selection algo?  
**\<endogenic>** in what way?  
**\<ArticMine>** We have to raise min blocksize if we go over 15k tx size  
**\<Fymiywtfbtcxmr>** Ring size 10 for uniformity  
**\<Fymiywtfbtcxmr>** All apps and wallets just like mymonero  
**\<endogenic>** personally i would love to hear Surae's input on this as well regarding whether we should do this now before making confirmations  
**\<Fymiywtfbtcxmr>** Tx size not that much larger  
**\<endogenic>** heck it would be nice to hear from Sarang as well :P  
**\<rehrar>** Well friends, in the interest of the meeting, can we go to item 2? :) Brief review of what's been completed since the previous meeting.  
**\<Fymiywtfbtcxmr>** Range proof reductions coming  
**\<rehrar>** Oops. After this discussion is done.  
**\<endogenic>** hyc feel free to ping me later  
**\<vtnerd>** hyc endogenic : mymonero does not use the wallet selection algo currently  
**\<vtnerd>** its just random selection over the set of possible outputs  
**\<endogenic>** yes i can confirm that  
**\<ArticMine>** JollyMort[m] did the simulations but as I recall we are ok if the 2/2 tx size is below 15K  
**\<ArticMine>** for min blocksize  
**\<ArticMine>** So ring 10 may work  
**\<moneromooo>** mixin 14 would still be ok, 19 not. I have no data for 15-18.  
**\<gingeropolous>** so r we increasing it or waiting for more research?  
**\<ArticMine>** I am ok up to 10  
**\<moneromooo>** I'm keeping it to 5 unless a number of people like smooth, ArticMine, luigi1111, surae, knaccc think it's best to increase now.  
**\<ArticMine>** Sounds good to me  
**\<hyc>** cool  
**\<moneromooo>** Maybe we make a vote with those people :)  
**\<gingeropolous>** yeah. i propose we push this to core team for final decision. seems to fit the bill of that scenario in the governance structure thingy  
**\<endogenic>** vtnerd: any thoughts?  
**\<Jaquee>** sounds good. when is testnet HF?  
**\<moneromooo>** Tomorrow. If pony merges in time \^\_\^  
**\<Jaquee>** :D  
**\<vtnerd>** on mandatory ring size ? not really  
**\<endogenic>** kk  
**\<knaccc>** moneromooo I'm fine with 5 until further research is done  
**\<vtnerd>** other than I recall at least 4 being useful, based on the way research paper I saw  
**\<Fymiywtfbtcxmr>** Pony drinking wine  
**\<luigi1111>** I vote 5 because reasons  
**\<moneromooo>** And that guy has 1111 votes ^  
**\<hyc>** I vote 8 because we need drama and dissent.  
**\<moneromooo>** And because winning a vote with 100% would feel a bit too dictatorship.  
**\<moneromooo>** I vote for someone to summon the pony.  
**\<ArticMine>** At the point 5 and continue the research  
**\<ArticMine>** this  
**\<hyc>** yeah  
**\<endogenic>** rehrar?  
**\<rehrar>** Ye?  
**\<endogenic>** may be time for next item  
**\<vtnerd>** also moving mymonero to the standard wallet output selection needs a todo somewhere  
**\<rehrar>** K. Well I say we jump to 2 as I said above. :) Brief review of what's been completed since the previous meeting. I'd love to hear from Jaquee and even you regarding mymonero  
**\<endogenic>** issue exists on mymonero-app-js  
**\<endogenic>** at least in terms of using the official lib  
**\<vtnerd>** the mymonero front is probably a crappy but decent place to mark that  
**\<vtnerd>** endogenic : ok good  
**\<endogenic>** def important to me  
**\<pigeons>** maybe moneromooo repeat the list of PRs you've asked fluffypony to merge?  
**\<Jaquee>** i'm currently rebasing the huge GUI lightwallets/mobile PR to exclude the lightwallets parts  
**\<moneromooo>** I don't have a backlog.  
**\<Jaquee>** because #2109 (the wallet2 parts of the lightwallet support) wont make it to the release.  
**\<Jaquee>** but i still want to have the mobile and remote node parts from that PR in next release.  
**\<Jaquee>** I'd say both ios and android version is ready for alpha/beta testing. But it's being blocked by lack of app store accounts.  
**\<Jaquee>** At least the ios version.  
**\<Jaquee>** For android we could just build apk on buildbot, but unfortunately there's not enough space on the linux box for that. Pigeons is working on that afaik.  
**\<moneromooo>** I'm wary of the changes that affect the normal wallet tx making operations. The rest could be merged if needed.  
**\<Jaquee>** yeah. i'm totally ok with that.  
**\<Jaquee>** but hopefully we don't need to wait another 6 months for next release after hf  
**\<rehrar>** We can launch a little campaign for Android testers? Get the Community workgroup to front that, no?  
**\<moneromooo>** If it's like last time, we'll have to wait just a few days \^\_\^  
**\<Jaquee>** Fluffy said a couple of months back that he was working on app store accounts for us, but i don't know what the status is. Anyone from core team have more info on that?  
**\<pigeons>** android versions. you need one for each architecture  
**\<endogenic>** Jaquee he was traveling and needed info which was at home in SA  
**\<endogenic>** got back a day ago i think  
**\<Jaquee>** endogenic: that was for mymonero accounts afaui. are we using the same for monero apps+  
**\<Jaquee>** ?  
**\<endogenic>** nah  
**\<endogenic>** separate, as i suggested  
**\<johnalan>** I have an accoutn and can add 100 team members  
**\<rehrar>** Endogenic, you wanna give an update on your fun things?  
**\<johnalan>** you’re welcome to use it  
**\<endogenic>** unless you guys really want to hop on the MEA bandwagon  
**\<hyc>** for android, you can get by with just 32bit binaries  
**\<johnalan>** but for prod, better to have MEA account  
**\<endogenic>** everyone should be using MEAT tokens  
**\<endogenic>** lol johnalan MEA was just a joke :P  
**\<johnalan>** oh I know  
**\<endogenic>** oh hehe  
**\<johnalan>** :)  
**\<Jaquee>** johnalan: biggest issue is trust. core team need to build and distribute  
**\<johnalan>** yes with Apple code signing  
**\<hyc>** not sure if we care to support android x86. that userbase is tiny.  
**\<johnalan>** you need an account  
**\<Jaquee>** otherwise noone will download =)  
**\<Jaquee>** hopefully ...  
**\<johnalan>** look at how Signal etc do it  
**\<johnalan>** they have the code online open src  
**\<pigeons>** so mainly armv8?  
**\<johnalan>** but you have to trust the binary on the store  
**\<johnalan>** not much you can do  
**\<endogenic>** johnalan: Apple's acting as the authority there  
**\<johnalan>** \@endogenic on the my Monero iOS app, are you close to beta test?  
**\<endogenic>** certainly are  
**\<luigi1111>** fluffypony fluffypony fluffypony  
**\<johnalan>** great!  
**\<endogenic>** fluffypony fluffypony fluffypony  
**\<luigi1111>** *fingers crossed*  
**\<moneromooo>** \`fluffupoony \`fluffupoony \`fluffupoony  
**\<endogenic>** lol  
**\<ArticMine>** The pony is in the "land of the free temporarily"  
**\<endogenic>** snoozetown, south africa  
**\<ArticMine>** He is back  
**\<hyc>** we we can still release iOS without waiting for apple account https://inojb.net/  
**\<ArticMine>** On jailbreak?  
**\<johnalan>** yuck  
**\<johnalan>** not keen  
**\<hyc>** no jailbreak required  
**\<ArticMine>** html5?  
**\<johnalan>** I think it’s OTA for their store/repo  
**\<johnalan>** and then you install thru that  
**\<Jaquee>** lol. that page doesn't look serious  
**\<Jaquee>** have you tried it hyc?  
**\<johnalan>** but after all the work for iOS, it’s paramount to have it on the store natively  
**\<hyc>** there are many other alternatives http://www.iphonetopics.com/how-to-install-cydia-without-jailbreak-iphone-ipad/  
**\<hyc>** and no, I haven't tried it, I own no Apple crap.  
**\<johnalan>** but we’d still need to distrubute a binary through Cydia  
**\<johnalan>** it wouldn’t be on the ‘App Store’  
**\<johnalan>** so that’s where it would be suboptimal  
**\<endogenic>** anything else completed since last mtg?  
**\<johnalan>** people need to be able to take a new iphone, open the store and type ‘Monero’  
**\<hyc>** that can come later. if we want people to beta test now, this is the fast route.  
**\<johnalan>** fair enough I guess  
**\<johnalan>** we can just use test flight  
**\<endogenic>** hockeyapp is good too  
**\<endogenic>** but then it's a certs question again  
**\<johnalan>** you can invite 1K testers  
**\<johnalan>** 10K  
**\<johnalan>** https://developer.apple.com/testflight/  
**\<Jaquee>** yeah. hockey/testflight would be nice  
**\<endogenic>** 1 million testers *puts pinky to mouth*  
**\<johnalan>** lol  
**\<johnalan>** anyway we need to stay tight to the iOS ecosphere on this  
**\<johnalan>** native native native  
**\<moneromooo>** You have a limit to the number of testers when you code an apple program ?  
**\<johnalan>** Yes, but it’s very elegant  
**\<endogenic>** moneromooo: not exactly  
**\<johnalan>** and when your app is on the store  
**\<serhack>** Hello  
**\<endogenic>** anyone can install the app on their device  
**\<serhack>** Is meeting finished?  
**\<Jaquee>** no  
**\<hyc>** stil; requires a corporate registration first  
**\<serhack>** Nice  
**\<johnalan>** you can move through betas simultaneosly  
**\<endogenic>** serhack: nah we need to go over code/ticktets/Q&A  
**\<johnalan>** @hyc yup thats true  
**\<endogenic>** and confirm next mtg  
**\<serhack>** Okay  
**\<endogenic>** moneromooo: https://developer.apple.com/testflight/  
**\<endogenic>** it used to be 100 lol  
**\<endogenic>** and they didn't used to have testflight  
**\<moneromooo>** Sorry, I was not really interested, just dumbfounded.  
**\<johnalan>** its very cool  
**\* moneromooo** shuts up  
**\<johnalan>** @endogenic  would you use testflight or hock for the mymonero ios app?  
**\<endogenic>** either. honestly want to just launch the damn thing  
**\<Jaquee>** ^^  
**\<Jaquee>** so, fluffy is back, and hopefully we can have app store accounts soon\^rm?  
**\<hyc>** PRs (17:53:15) moneromooo: 2132 2141 2147 2148 2151 2153 2182 2188 2189 2191 2195 2196 2197 2198 2200 2201 2203 2206 2210 2211 2214 2215 2216 2219 2220 2222 2223 2226 2230 2231 2232 2234 2236 2239 2242 2243 2244  
**\<Jaquee>** to merge?  
**\<endogenic>** soon™  
**\<moneromooo>** Those were the easy merges.  
**\<herch>** for what it's worth, I have doubt if apple will ever approve the app. I wish I am wrong here.  
**\<endogenic>** herch: i'm not worried about that  
**\<serhack>** Hyc: a lot  
**\<endogenic>** pretty sure they would rather have official apps than scam apps  
**\<endogenic>** after all their priority is user experience  
**\<endogenic>** plus we heard through Jaxx that they contacted an apple rep who said it would be ok  
**\<serhack>** +1 endogenic, scam users will try to scam us with their fucking apps  
**\<endogenic>** but then again do we listen to them? :P  
**\<Jaquee>** these are also "easy" merges #2254 #2247 #2233 #2138  
**\<rehrar>** Post #25 this week: Hey so I downloaded freewallet and put all my XMR on there. It's gone. Help?  
**\<Jaquee>** endogenic: lol. i wouldn't trust jaxx on that information  
**\<endogenic>** Jaquee: well /you/ know that… :)  
**\<Jaquee>** :D  
**\<Jaquee>** anyway. let's move on  
**\<hyc>** I missed a question back there - on Android we could release ARMv7 (32bit) wallet. it would work fine on ARMv8 (64bit).  
**\<pigeons>** sounds good  
**\<hyc>** majority of ARMv8 devices on the market today are still running 32bit OS.  
**\<serhack>** Amazing  
**\<serhack>** Is there any apk that I can test? I have an android smartphone  
**\<hyc>** I think you have to compile for yourself for now  
**\<endogenic>** i actually sent a self signed apk to nm90 a long time ago. ppl could still test like that i bet  
**\<endogenic>** if you trust them… :P  
**\<Jaquee>** i also have one  
**\<serhack>** :0  
**\<Jaquee>** https://github.com/monero-project/monero-core/pull/780  
**\<serhack>** Thanks jaquee  
**\<Jaquee>** 5 minutes left... i'm wondering about that memory leak in monerod. do we have any clue yet?  
**\<moneromooo>** I don't think there's really one.  
**\<moneromooo>** (modulo small bits and bobs I already fixed)  
**\<hyc>** schrodingers leak  
**\<Jaquee>** really? my daemon keeps on OOM crashing  
**\<Jaquee>** on a 2GB vps  
**\<moneromooo>** Well, run it with mleak, and kill it with SIGPROF from time to time, and send me those logs.  
**\<moneromooo>** mleak is on hyc's github repo.  
**\<Jaquee>** ah. i'll do that  
**\<moneromooo>** But for me, memory usage was constant modulo short term noise.  
**\<hyc>** https://github.com/hyc/mleak  
**\<Jaquee>** thanks  
**\<moneromooo>** hyc: the RSS differences are from the OS deciding when to swap in/out the mmapped pages, right ?  
**\<moneromooo>** (for lmdb, I mean)  
**\<hyc>** yeah  
**\<hyc>** the SHARED number should be relatively constant, growing when the map is resized  
**\<hyc>** RSS should fluctuate with other memory pressure  
**\<hyc>** s/SHARED/SHM/  
**\<moneromooo>** Jaquee: sorry, missing a step: a couple seconds after SIGPROF, do: mdump ml.{data,info} > "monerod.log-`date`"  
**\<moneromooo>** Jaquee: sorry, missing a step: a couple seconds after SIGPROF, do: mdump /path/to/monerod ml.{data,info} > "monerod.log-`date`"  
**\<serhack>** The app is nice but I noticied a lot of graphical glitch  
**\<serhack>** UX must be a prority  
**\<hyc>** probably OpenGL crap  
**\<rehrar>** Jaquee, did you see that UX guys' thing?  
**\<Jaquee>** no?  
**\<rehrar>** Sec  
**\<serhack>** @krokbaltsar is a UX designer  
**\<rehrar>** Monero UX - Persona and Mobile Wallet Concept  https://www.reddit.com/r/Monero/comments/6qkw8e/monero_ux_persona_and_mobile_wallet_concept/  
**\<rehrar>** This one.  
**\<serhack>** https://www.gustafgarnow.com/monerowallet/  
**\<serhack>** ^^ best design  
**\<serhack>** Oh, maybe same person @rehrar ;)  
**\<rehrar>** Anyways, it's past time.  
**\<rehrar>** Confirm next meeting time?  
**\<rehrar>** Hopefully FP will come to that one.  
**\<hyc>** 2 weeks  
**\<hyc>** (TM)  
**\<rehrar>** Boom. Done.  
**\<serhack>** Okay!  
  