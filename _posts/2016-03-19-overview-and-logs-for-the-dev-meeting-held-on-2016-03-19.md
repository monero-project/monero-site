---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2016-03-19
summary: Open PRs, GUI commits, app/add-on infrastructure, versioning
tags: [dev diaries, core, crypto]
author: dEBRUYNE / fluffypony
---
  
# Logs

**\<dEBRUYNE>** dev meeting in 5 min, FYI  
**\<hyc>** dingdong  
**\<gingeropolous>** hello  
**\<dEBRUYNE>** fluffypony, smooth, othe, ArticMine, luigiw, NoodleDoodle, tewinget, moneromooo  
**\<floofypony>** there we go  
**\<dEBRUYNE>** did I forget anyone?  
**\<tewinget>** oh, hello  
**\<luigi>** is warptangent around?  
**\<ArticMine>** Hello  
**\<hyc>** he's been fighting a flu last we heard  
**\<moneromooo>** hi  
**\<NoodleDoodle>** Hello. I'm here but I'm fighting the apocalypse.  
**\<NoodleDoodle>** of flus.  
**\<luigi>** keep doing it  
**\<luigi>** wait you're alive that's good to hear  
**\<dEBRUYNE>** fluffypony seems ded  
**\<fluffypony>** sorry  
**\<fluffypony>** was eating  
**\<fluffypony>** welcome everyone  
**\<fluffypony>** so as you know we pushed out 0.9.2  
**\<fluffypony>** however, there are some nagging issues from the ReadTXN work  
**\<fluffypony>** hyc has nailed a major one as of a few hours ago  
**\<fluffypony>** so we'll probably do a point release on Monday or so  
**\<fluffypony>** also that means that the way we use LMDB has changed a bit  
**\<fluffypony>** hyc can you tell us briefly how we should wrapping access to LMDB, both read and write operations?  
**\<hyc>** Are you talking about the CRITICAL\_REGION stuff?  
**\<fluffypony>** yes, and the cursors vs. txns stuff  
**\<hyc>** ok, the critical\_region stuff actually is not a change at all.  
**\<hyc>** basically, when you're setting up to do a write, you need exclusive access to the DB  
**\<hyc>** this appears to have been a long-standing bug, unrelated to the readtxn changes  
**\<hyc>** so as for reads - there is now a long-lived read txn per thread  
**\<hyc>** and a set of read cursors to go with each  
**\<hyc>** the TXN\_PREFIX\_RDONLY macro sets that up in a particular function, grabbing the thread-local-storage for it  
**\<hyc>** and RCURSOR(dbname) sets up a read cursor for a particular DB  
**\<hyc>** these are analogous to the CURSOR(dbname) macro for getting a write cursor to a DB  
**\<hyc>** the point of all this is to avoid a bunch of malloc/free/seek when accessing a DB  
**\<hyc>** the old code was allocating a readtxn and cursors inside each function  
**\<hyc>** likewise for writes  
**\<hyc>** by reusing the same cursors acros a set oof functions we get a pretty good performance gain  
**\<hyc>** ok?  
**\<fluffypony>** neat  
**\<fluffypony>** also on the topic of stuff-hyc-did-lately  
**\<fluffypony>** if anyone missed it, we now have a win environment guide up on forum.getmonero.org  
**\<dEBRUYNE>** ^ https//forum.getmonero.org/5/support//building-monero-v0-9-2-on-winMonero  
**\<fluffypony>** so that should get us all on the same page with testing etc.  
**\<hyc>** and one success story replied to it already ;)  
**\<fluffypony>** we've also dropped support for BDB as the default database, and switched to LMDB as the default  
**\<fluffypony>** including on -bit and ARM  
**\<fluffypony>** BDB will remain supported for the moment, primarily as a mechanism for contributors to understand how to build out DB support  
**\<fluffypony>** krongle)  
**\<fluffypony>** shew we have the entire xmr.to team here today, that's awesome  
**\<binaryFate>** fluffypony good memory P  
**\<fluffypony>** we shared a podcast together, binaryFate -P  
**\<krongle>** yes - impressive nick-name recollection  
**\<fluffypony>** hah hah  
**\<fluffypony>** while we have you guys here, are you guys doing anything cool you want to talk about?  
**\<binaryFate>** we're doing many cool things, but nothing we can talk about at this stage  
**\<fluffypony>** hah hah  
**\<fluffypony>** it does lead to an interesting point of conversation  
**\<binaryFate>** seriously considering btc -> xmr direction  
**\<fluffypony>** plugins  
**\<iam6yearsold>** If NobleSir or xmr.to team could talk more about xmr.to integration at MiniNero that would be great.... also are 2 way conversions coming to xmr.to soon?  
**\<fluffypony>** iam6yearsold Shen's offline at the moment, I'll ask him to update the Reddit thread with some info )  
**\<fluffypony>** re plugins, we've spoken briefly about options for the GUI  
**\<dEBRUYNE>** iam6yearsold There is a bit of info here -> https//imgur.com/a/HZL7k  
**\<binaryFate>** iam6yearsold for MiniNero integration you'd have to see with NobleSir. The API doc is at http//xmrto-api.readthedocs.org/en/latest/  
**\<fluffypony>** but I guess we could have "plugins", of a sort, that add functionality  
**\<fluffypony>** like xmr.to or shapeshift integration right in wallet2 / wallet2\_api  
**\<dEBRUYNE>** I think we should be fairly strict on which plugins to allow  
**\<binaryFate>** fluffypony we wanted to discuss that plugin integration soon in fact )  
**\<arnuschky>** we're quite interested to all secondary  questions related to plugins  
**\<fluffypony>** I guess the major question becomes  
**\<arnuschky>** so plugin repository/db, packaging, distribution etc  
**\<fluffypony>** do we allow "permissionless" plugin development, or do we just have a central repo that we git submodule in?  
**\<ArticMine>** The main question I see with plugins is trust  
**\<fluffypony>** ArticMine exactly  
**\<arnuschky>** yes. It puts quite a bit responsibility on the dev team  
**\<gingeropolous>** well no ones going to trust anything that doesn;t come from core  
**\<tewinget>** \<fluffypony> we shared a podcast together, binaryFate -P  <-- wasn't I there for that?  
**\<fluffypony>** considering the recent Google Chrome Bitcoin stealing malware I think that premissionless plugins are dangerous  
**\<gingeropolous>** as we've seen with 3rd party GUIs  
**\<luigi>** you obviously can't stop permissionless dev, you can discourage users from trusting it I guess  
**\<hyc>** we can start signing binaries, ohjoy  
**\<dEBRUYNE>** I would prefer the latter  
**\<fluffypony>** luigi I mean permissionless within core  
**\<luigi>** oh  
**\<luigi>** I think no  
**\<arnuschky>** it's related to how plugins are written. If it's binary blobs, it's a) hard to build, distribute etc, and b) hard to examine  
**\<binaryFate>** fluffypony I'd see both possible all together. Unpermissioned scale and central repo for a selected subset would ease experience and trust for user  
**\<arnuschky>** so if plugins are interpreted (eg python), things become a whole lot easier  
**\<iam6yearsold>** for the record I hated the twittter plugin idea I saw a while back  
**\<ArticMine>** My take permissionless has to be allowed. The end user has to be made aware who is signing and if to trust the plugin  
**\<fluffypony>** well the Electrum model works well  
**\<moneromooo>** I agree with ArticMine  
**\<arnuschky>** (inspection in case of central repo, but also self-distribution by plugin devs)  
**\<fluffypony>** ThomasV will merge basically any plugin, as long as it's not malicious  
**\<fluffypony>** and plugins are part of the core code, effectively just in a subfolder  
**\<fluffypony>** I think it's a testament to Electrum that they haven't had a malicious plugin ever  
**\<arnuschky>** how do they deal with the upgrade/maintenance workload? Or do they just disable broken plugins?  
**\<dEBRUYNE>** Is there a way to make a subfolder in the subfolder? i.e. (1) signed and approved by core-team, (2) optional  
**\<fluffypony>** arnuschky yeah they just disable broken plugins, and eventually they get deprecated out  
**\<ArticMine>** We should allow self distribution with appropriate warning  
**\<fluffypony>** ArticMine anyone can compile their own build, which would be the same thing  
**\<arnuschky>** are you planning for compiled plugins or interpreted ones? that's quite a differens IMHO  
**\<fluffypony>** arnuschky so  
**\<arnuschky>** self-distribution is a mess for compiled ones...  
**\<fluffypony>** I was thinking we have a repo, say it's called monero-plugins  
**\<arnuschky>** audit as well  
**\<fluffypony>** and then anyone can PR to that repo  
**\<fluffypony>** and that repo is pulled into the main Monero source as a git submodule  
**\<fluffypony>** there are two advantages to this  
**\<fluffypony>** 1. as it gets bigger and harder to deal with, we can step back and other known members of the community can manage that repo  
**\<fluffypony>** 2. if we come up with a standard set of functionality hooks, then other projects can pull that same repo in  
**\<fluffypony>** eg. jwinterm's lightwallet  
**\<fluffypony>** also it means that the compiled Monero binaries have those plugins baked in, and you can't add extra plugins post-compile  
**\<fluffypony>** so no need to deal with interpreted code and securing that on disk and in memory  
**\<hyc>** baked in means no dynamic loading?  
**\<tewinget>** \<fluffypony> so no need to deal with interpreted code and securing that on disk  <-- if securing an interpreted plugin on disk became an issue, securing the binary would be an issue anyway, so I don't know of that bit matters  
**\<binaryFate>** Sounds all good to us. If distribution is done through official channels it's great.  
**\<fluffypony>** hyc yes  
**\<fluffypony>** no dynamic loading  
**\<hyc>** cool  
**\<fluffypony>** tewinget I mean we can't secure it in the path from random-site-on-the-web down to random-download-folder and eventually into secure-disk-location  
**\<arnuschky>** fluffypony that would be really great.  
**\<fluffypony>** ok - I think next steps would be to consider some of the hooks we need to provide to add functionality  
**\<fluffypony>** we can use the Monero wikia as a collaboration area for that  
**\<ArticMine>** It is a good balance for plugins  
**\<fluffypony>** and then we'll just update the Monero Slack  
**\<arnuschky>** well securing the plugins can always happen by signature - no matter if interpreted or binary  
**\<fluffypony>** I'm kidding, we don't have a Slack  
**\<fluffypony>** we're not that cool  
**\<aerbax>** Would these plugins allow for interpreted languages like Lua or Python?  
**\<arnuschky>** :)  
**\<fluffypony>** aerbax I don't see why not, individual CMake files in each plugin folder that allow it to produce a library fix everything  
**\<binaryFate>** We could financially support development of plugin architecture if xmr.to is the first instanciation of those plugins.  
**\<fluffypony>** if it spits out a .so / .a / .dll with the right hooks then it's fine  
**\<tewinget>** fluffypony> tewinget I mean we can't secure it in the path from random-site-on-the-web down to random-download-folder and eventually into secure-disk-location  <-- and yet, we provide binary downloads...so "random site on the web" could be managed the same as said binary downloads  
**\<tewinget>** just like any random site on the web can offer binaries for download and we can't secure that either  
**\<tewinget>** caveat emptor has to come into play at some point, I think  
**\<fluffypony>** the binaries present a single attack surface, and there's GPG-signed hashes  
**\<fluffypony>** if we have to do GPG-signed hashes for a bunch of .py files I think I'll go mad -P  
**\<tewinget>** I'm not saying I think it should be one way or another, I'm merely pointing out flaws in your argument P  
**\<fluffypony>** fair enough  
**\<fluffypony>** binaryFate I think the stumbling block will be that somebody needs to champion this and run with it, and I won't be able to lead it due to travelling in a week  
**\<ArticMine>** As long as people can compile their own version with non permissioned plugins this can work  
**\<luigi>** they can always do that  
**\<fluffypony>** yep  
**\<fluffypony>** and in fact that would be the testing model  
**\<luigi>** we're not apple )  
**\<fluffypony>** fork the repo, and build a binary to test your new plugin  
**\<iam6yearsold>** asking noobs to compile will limit adoption  
**\<ArticMine>** luigi Exactly  
**\<fluffypony>** iam6yearsold why would noobs be writing their own plugins?  
**\<gingeropolous>** for security  
**\<dEBRUYNE>** lol gingeropolous  
**\<fluffypony>** lol  
**\<arnuschky>** fluffypony championing the first plugin or the whole infrastructure?  
**\<tewinget>** What about a curated repo of plugins (as suggested) but with those plugins written in python/lua?  Someone modifying the python/lua on a target's disk is the same as someone modifying the binary anyway, and python/lua plugins would be far easier to develop and audit I think  
**\<fluffypony>** arnuschky championing the design, I guess  
**\<arnuschky>** tewinget I would prefer that.  
**\<iam6yearsold>** how about 1 version with binaries and gpg sig and no plugins? caveat emptor for the rest  
**\<arnuschky>** mostly due to auditing, and there's no build/distribution mess attached  
**\<fluffypony>** I would prefer we remain language agnostic  
**\<fluffypony>** iam6yearsold that's what we already have  
**\<tewinget>** fluffypony language-agnostic is fine, but...well, how do you imagine that will work out?  
**\<iam6yearsold>** thanks pony. I like the current situation then  
**\<fluffypony>** tewinget read up  
**\<arnuschky>** ah even language agnostic. I thought up to now it's supposed to be a C++ only API  
**\<tewinget>** as in, how do we become language-agnostic so that we can remain so?  
**\<fluffypony>** []  \<aerbax>        Would these plugins allow for interpreted languages like Lua or Python?  
**\<fluffypony>** []  \<fluffypony>   aerbax I don't see why not, individual CMake files in each plugin folder that allow it to produce a library fix everything  
**\<fluffypony>** ^^  
**\* smooth** is here  
**\<fluffypony>** also what if a plugin wants to call a function in the core crypto library, for instance?  
**\<arnuschky>** design-wise, that's sounds like a nightmare, no?  
**\<moneromooo>** Oh, so linked directly ? I kinda assumed it was gointg to be RPC based.  
**\<fluffypony>** ok well I think we're getting into an implementation discussion that's outside of the scope of this meeting  
**\<arnuschky>** I mean, if you don't have a small and defined API, every bigger change in the wallet will break plugins  
**\<arnuschky>** true )  
**\<fluffypony>** after the dev meeting we can continue this conversation if you guys want  
**\<fluffypony>** but let's first circle back around  
**\<luigi>** this deserves some kind of design thread like ringct imo  
**\<moneromooo>** Oh, link ?  
**\<fluffypony>** moneromooo: "this deserves"  
**\<fluffypony>** so nothing yet  
**\<moneromooo>** "like ringct"  
**\<fluffypony>** oh  
**\<fluffypony>** I see what you were asking  
**\<luigi>** oh  
**\<moneromooo>** Oh  
**\<fluffypony>** OH  
**\<luigi>** "like ringct is supposed to get"  
**\<moneromooo>** Fair enough.  
**\<fluffypony>** so basically this is all luigi's fault  
**\<luigi>** warp was gonna go it!@  
**\<gingeropolous>** its true. i mis-called out luigi on that one  
**\<fluffypony>** warptangent is off sick at the moment  
**\<luigi>** yes  
**\<luigi>** so I blame that  
**\<fluffypony>** I blame Canada  
**\<fluffypony>** ok back on track  
**\<fluffypony>** since the last meeting the bulk of the PRs have been bug fixes  
**\<fluffypony>** and changes to the way we access the DB as discussed at the beginning  
**\<fluffypony>** we also had a huge discussion about how to handle mixins below the minimum in the RPC call  
**\<fluffypony>** which was then implemented in #715  
**\<fluffypony>** I'm also going to try to personally spend some time on the text that users see, things like the level 0 logging output and the CLI flag help  
**\<luigi>** oh I was gonna do that  
**\<luigi>** but then I didn't  
**\<fluffypony>** luigi we can do it together  
**\<luigi>** awwww  
**\<fluffypony>** I can show you the world, shining shimmering splendid  
**\<gingeropolous>** take you wonder by wonder  
**\<fluffypony>** lol  
**\<fluffypony>** also #728 was a little contentious  
**\<fluffypony>** so we created a company called Mixinstream that has hired all the contributors  
**\<palexander>** heh heh  
**\<fluffypony>** and gingeropolous has launched Monero Classic  
**\<gingeropolous>** ( sorry )  
**\<fluffypony>** -P  
**\<fluffypony>** ok so #728 is Ilya's work as part of the GUI effort  
**\<dEBRUYNE>** Can I launch unlimited?  
**\<fluffypony>** he was struggling with wallet2, and decided to break it out into something more logical and usable  
**\<fluffypony>** (to him at any rate)  
**\<ArticMine>** What makes it contentious?  
**\<fluffypony>** ArticMine I'll get to that now  
**\<fluffypony>** he's unintuitively called it wallet2\_api, which is a little confusing  
**\<fluffypony>** but basically a lot of it is a wallet2\_api call which then does little additional logic, and mainly just passes stuff back to wallet2  
**\<fluffypony>** and there's a lot of DRY-violating code because of it  
**\<fluffypony>** obviously there was some push back, not to prevent merging it  
**\<fluffypony>** but more to understand the thought process  
**\<moneromooo>** Define DRY ?  
**\<iam6yearsold>** DRY violating scares the shit out of me  
**\<gingeropolous>** https//en.wikipedia.org/wiki/Don%t\_repeat\_yourself  
**\<gingeropolous>** maybe  
**\<fluffypony>** yes  
**\<fluffypony>** iam6yearsold DRY violations are just where you have a piece of code in two places  
**\<fluffypony>** so any changes have to happen in both  
**\<fluffypony>** we can treat the DRY-violating code as a temporary issue, though  
**\<iam6yearsold>** two places = more opportunity for error  
**\<fluffypony>** as we're going to wait until Ilya is done with it  
**\<ArticMine>** Which makes maintenance much harder  
**\<fluffypony>** and then we'll either drop wallet2 and replace it with the new wallet API  
**\<fluffypony>** (ie. replace the simplewallet calls as well)  
**\<fluffypony>** or if it's just a pointless layer we'll have to go the opposite route  
**\<fluffypony>** and change his Qt callers to use wallet2  
**\<fluffypony>** as it stands it's kinda undecided and we'll have to see how Ilya goes  
**\<ArticMine>** Is Ilya aware of the concern?  
**\<fluffypony>** ArticMine yes, we had some discussion on the PR, and othe has also spoken to him afaik  
**\<fluffypony>** he was responsive on the PR comments, but this isn't Bitcoin  
**\<fluffypony>** we don't ACK NACK utACK for years before merging somethingm  
**\<fluffypony>** aintnobodygottimeforthat.gif  
**\<luigi>** utNACK  
**\<fluffypony>** luigi #networknerd  
**\<moneromooo>** utACK was not a typo ?  
**\<luigi>** no  
**\<luigi>** means untested  
**\<luigi>** conceptACK or similar  
**\<fluffypony>** yeah  
**\<fluffypony>** moneromooo https//lists.linuxfoundation.org/pipermail/bitcoin-dev/-December/71.html  
**\<fluffypony>** if you're interested  
**\<hyc>** crap  
**\<fluffypony>** LOL  
**\<fluffypony>** PasteGate 2.0  
**\<gingeropolous>** internets  
**\<othe>** ur pasting skills suck  
**\<dEBRUYNE>** Hahah  
**\<fluffypony>** othe pasting is a scam  
**\<hyc>** that's how I write all my patches  
**\<fluffypony>** I just copy-and-paste code from StackExchange  
**\<gingeropolous>** thats my job  
**\<fluffypony>** heh  
**\<fluffypony>** ok so anyone who can reproduce the 0.9.2 segfault please try latest master  
**\<fluffypony>** and if you're still segfaulting let us know  
**\<fluffypony>** else we're going to do a point release on Monday  
**\<fluffypony>** 0.9.3, I guess?  
**\<luigi>** hrm  
**\<fluffypony>** or 0.9.2.1  
**\<luigi>** we're gonna run out of numbers at this rate  
**\<fluffypony>** yeah we are  
**\<luigi>** oh wait  
**\<hyc>** 0921  
**\<luigi>** we have 0.10  
**\<luigi>** nevermind  
**\<iam6yearsold>** will there be multiple devs in IRC at time of hard fork this week just in case? I see a few pools still on old cold and probably a few users too  
**\<fluffypony>** yes we just do a Bitcoin  
**\<moneromooo>** No chance, there's an infinity of those.  
**\<fluffypony>** 0.11  
**\<fluffypony>** iam6yearsold yes, and we've reached out to as many of them as we can  
**\<luigi>** is 0.10 supposed to be for next hard fork?  
**\<fluffypony>** luigi fork that  
**\<fluffypony>** when warptangent is back we'll see how it goes on ringCT  
**\<fluffypony>** and make a more concrete decision as to the timing of the next fork  
**\<dEBRUYNE>** iam6yearsold The hardfork will approximately take place at 13:00 UTC, so both US and Europe will probably be awake  
**\<dEBRUYNE>** and Asia of course  
**\<luigi>** everyone will be awake  
**\<fluffypony>** even me  
**\<dEBRUYNE>** hawaii will probably be asleep  
**\<dEBRUYNE>** -P  
**\<fluffypony>** heh  
**\<dEBRUYNE>** fwiw!  
**\<luigi>** wat  
**\<Wolf\`>** lol  
**\<smooth>** we should also consider what else we should go in the next major version besides ringct (doesn't need to be discussed now)  
**\<dEBRUYNE>** uh I meant  UTC btw  
**\<dEBRUYNE>** you muricans with AM/PM  
**\<Wolf\`>** who got drunk and posted about a party in #monero-dev  
**\<luigi>** oh  
**\<luigi>** then america won't be up  
**\<moneromooo>** The db reorg seems like a good candidate.  
**\<luigi>** oh well  
**\<fluffypony>** smooth agreed  
**\<dEBRUYNE>** east coast will right?  
**\<luigi>** sure ish  
**\<dEBRUYNE>** You better set your alarm luigi  
**\<dEBRUYNE>** :-P  
**\<fluffypony>** Surae is also going to be picking up MRL-6 in the summer  
**\<fluffypony>** he has some ideas about how to complete that  
**\<dEBRUYNE>** MRL-6 is multisig?  
**\<iam6yearsold>** I will party hard if fork happens with no drama  
**\<fluffypony>** dEBRUYNE: no  
**\<fluffypony>** https//github.com/monero-project/research-lab/tree/master/publications/MRL-%-%Difficulty%Adjustment%Algorithms%in%Cryptocurrency%Protocols  
**\<dEBRUYNE>** oh cool, thanks  
**\<moneromooo>** How do get cmake to tell you the commands it's running ?  
**\<luigi>** we have diff, we have db stuff, we have fee stuff  
**\<fluffypony**> moneromooo: I normally make VERBOSE=1  
**\<moneromooo>** Thanks, I was trying V=1  
**\<luigi>** I like my V=2  
**\<fluffypony>** ok - any last things to add  
**\<fluffypony>** or can we call it?  
**\<luigi>** call it  
