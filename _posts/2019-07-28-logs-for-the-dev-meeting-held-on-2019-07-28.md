---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2019-07-28
summary: Development status, Code & ticket discussion, Moving off GitHub, and miscellaneous
tags: [dev diaries, core, crypto]
author: el00ruobuob / rehrar
---

# Logs  

**\<rehrar>** Alright, it's time to start ladies and gentlemen.  
**\<rehrar>** 1. Greetings  
**\<rehrar>** Anybody out there?  
**\<rbrunner>** Nope. All people on holiday.  
**\<rbrunner>**   
**\<vtnerd\_\_>** yes  
**\<rehrar>** well, the three of us can have a grant ol time then  
**\<rehrar>** just pinging hyc moneromooo dsc\_ selsta and dEBRUYNE  also  
**\<rehrar>** maybe a luigi1111 and fluffypony in the mix too, who knows  
**\<rehrar>** either way  
**\<rehrar>** 2. What's been completed since last meeting?  
**\<dsc\_>** dont ping me broooo  
**\<rehrar>** \_csd  
**\<rehrar>** there, I took it back  
**\<dEBRUYNE>** CLI v0.14.1.2 has been released  
**\<dEBRUYNE>** Which is mostly bug fixes I guess  
**\<dEBRUYNE>** mooo is holding a vacation, but he provided me a list of stuff that is ready to be merged  
**\<dEBRUYNE>** So I am working with luigi to get the merge queue relatively empty   
**\<kinghat>** 🙏  
**\<rehrar>** ah, did not know mooo was on vacation  
**\<rehrar>** I hope he ignores my ping then. Sorry!  
**\<dEBRUYNE>** For the GUI, we tagged 0.14.1.2 and we're waiting on pony to finish the builds  
**\<dsc\_>** I'm more than half way into integrating i2p-zero and tor into GUI  
**\<dEBRUYNE>** Main new feature is optimized Tails support  
**\<dEBRUYNE>** Perhaps dsc\_ can share a bit more detail  
**\<dsc\_>** Sure thing.  
**\<rehrar>** dsc\_: that's actually super exciting  
**\<dsc\_>** So Tails integration is a collection of improvements that improve user experience for our Tails users  
**\<dsc\_>** You would be suprised how big the audience is there  
**\<dsc\_>** So, starting from 0.14.1.2 it will be very easy to use GUI on Tails  
**\<dsc\_>** As for i2p-zero, I need a couple of days then that's done too  
**\<dsc\_>** I suggest to package i2p-zero with the GUI release  
**\<dsc\_>** Which can pose problems for our reproducible build efforts  
**\<dEBRUYNE>** I don't see much harm in packaging it with the GUI, especially if the user first has to check a checkbox to turn it on  
**\<dsc\_>** but that's a problem for later  
**\<dsc\_>** That also   
**\<rbrunner>** Shouldn't the CLI pack it also then?  
**\<dEBRUYNE>** I think most CLI users are able to download the package themselves  
**\<dEBRUYNE>** And get it running (especially given the instructions present on Github)  
**\<dEBRUYNE>** By contrast, GUI users need a checkbox and not tons of steps   
**\<rbrunner>** Ok, makes sense, more or less ...  
**\<dsc\_>** The fact we package i2p-zero is a convienence feature. I'm also 'integrating' support for Tor but we wont be packaging that. That's basically running Tor and using socks proxy at :9050  
**\<rehrar>** we GUI people are scrubs  
**\<xmrmatterbridge> \<xmr-romine>** is there already some doc about running monerod over tor ?  
**\<dsc\_>** https://github.com/monero-project/monero/blob/master/ANONYMITY\_NETWORKS.md  
**\<dEBRUYNE>** https://github.com/monero-project/monero/blob/master/ANONYMITY\_NETWORKS.md & https://github.com/monero-project/monero#using-tor  
**\<xmrmatterbridge> \<xmr-romine>** thanks guys  
**\<rehrar>** hyc any update on randomx audit?  
**\<rehrar>** The last one?  
**\<dsc\_>** One more thing regarding i2p-zero.. It can take up to 1-2 minute(s) for the local socks proxy to become 'active' which means, if the user has i2p-zero enabled and starts up the GUI to create a quick tx ... might have to wait a minute or two  
**\<dsc\_>** This is related to how i2p-zero works  
**\<dsc\_>** so beware of that limitation  
**\<rbrunner>** So it's i2p-two, from "two minutes"?  
**\<kinghat>** can it check if i2p is currently running?  
**\<dsc\_>** rbrunner: haha   
**\<rehrar>** it's how i2p works in general, no? Getting bootstrapped into the network, I mean.  
**\<dsc\_>** rehrar: most likely  
**\<dsc\_>** kinghat: it can  
**\<rehrar>** under bad circumstances it can take even longer  
**\<rehrar>** I wonder if there can be some kind of notification to let users know this  
**\<vtnerd\_\_>** tor should have similar issue iirc, building circuits isn't immediate  
**\<kinghat>** also, are we still going to do the beta builds for the gui?  
**\<dsc\_>** vtnerd\_\_: Sure, but not 1-2 minutes?  
**\<dsc\_>** kinghat: yes  
**\<kinghat>** 👌  
**\<vtnerd\_\_>** I think it might be longer than that, at least it seemed like forever yesterday when I was testing  
**\<vtnerd\_\_>** actually no, I've run tails once before, it takes some amount of minutes, just don't remember the exact time frame  
**\<dsc\_>** vtnerd\_\_:  
**\<dsc\_>** $ time (sudo service tor restart && sleep 2 && torify curl icanhazip.com)  
**\<dsc\_>** 171.25.193.77  
**\<dsc\_>** real0m2.759s  
**\<vtnerd\_\_>** if your not using outbound connections tor destroys the circuits and goes into an idle mode too, which isn't a problem if "noise" is enabled (because its always sending)  
**\<rehrar>** there goes dsc\_ bragging about his internet again  
**\<dsc\_>** yes, my internet.  
**\<vtnerd\_\_>** it keeps state in a file that it might re-use, so you'd have to a cold restart  
**\<dsc\_>** vtnerd\_\_: fair enough  
**\<rehrar>** alright, anything else?  
**\<dEBRUYNE>** vtnerd\_\_: I was wondering if you intend to pick this up somewhere in the future? https://github.com/monero-project/monero/pull/2317  
**\<vtnerd\_\_>** see https://github.com/monero-project/supercop/pull/2  
**\<vtnerd\_\_>** this one and the next one after that PR is a bit rough because its x86 ASM  
**\<rehrar>** that was a hilarious conversation to witness  
**\<rehrar>** person 1: i was wondering if git link  
**\<rehrar>** person 2: Well you see it's like git link  
**\<dEBRUYNE>** Thanks  
**\<vtnerd\_\_>** Im also not certain that having a separate repo for this is beneficial, but I guess some other project could make use of the custom hooks  
**\<vtnerd\_\_>** my original code should need some re-working since the device/ledger stuff got slammed in, but I look at recently and I think its possible to rebase/update that without crying  
**\<vtnerd\_\_>** Im also not certain whether that supercop repo should be an external git thing, or something that you manually have to do  
**\<vtnerd\_\_>** I'm thinking the latter, since people are blasted without another submodule  
**\<vtnerd\_\_>** \*are not  
**\<dEBRUYNE>** I see, seems like a thing that warrants more in depth discussion in a future dev meeting  
**\<rehrar>** With more attendees?  
**\<rehrar>** serious question  
**\<rbrunner>** And maybe some more background info to prepare  
**\<rehrar>** who should be present for such a discussion?  
**\<rehrar>** we can add it to next meeting as an item and try to ping the people to be there  
**\<vtnerd\_\_>** the background is either the supercop code goes as a submodule and it must be synced by every person  
**\<vtnerd\_\_>** or only those that which to accelerate wallet scanning drop the repo into a folder and toggle a cmake bit  
**\<rbrunner>** So that's not something for the normal, general release then?  
**\<vtnerd\_\_>** its not needed for testing, unless you need to test the feature specifically  
**\<vtnerd\_\_>** no, likely it would be in the normal general release, but I suppose it doesn't have to be  
**\<vtnerd\_\_>** this came up because ryo recently added support for basically the same thing, and it should cut wallet-scanning time in half  
**\<vtnerd\_\_>** although its probably dependent on your HD speeds too  
**\<rehrar>** alright, any more discussion on this?  
**\<hyc>** re: randomx audit, Quarkslab are finalizing their report, said we may get it by middle of next week  
**\<rehrar>** nice!  
**\<rehrar>** does anyone have anything else that they want to discuss?  
**\<hyc>** since they've been opening github issues as they arose, there's not likely to be anything in the report we haven't already seen  
**\<ErCiccione>** yep! https://github.com/monero-project/meta/issues/236#issuecomment-515669422  
**\<ErCiccione>** GitHub is starting to censor people coming from countries under US sanctions, we should definitely migrate away  
**\<ErCiccione>** i don't know how the core team feel about it  
**\<rehrar>** do people here have any thoughts about the Github/Gitlab thing, especially in light of the recent Github things?  
**\<vtnerd\_\_>** those countries listed probably require some vpn/tor/i2p opsec to contribute anyway ... ? I'm certainly not attempting to stop a switch to a self-hosted gitlab, but meh  
**\<rbrunner>** If such a switch was so easy it would probably have happened already, I think, after the Microsoft acquisition ...  
**\<vtnerd\_\_>** or maybe not, but they would have to after that hammer that was thrown  
**\<rbrunner>** With all submodules still on GitHub, for example  
**\<vtnerd\_\_>** the support team for the gitlab instance are probably the most relevant for this  
**\<ErCiccione>** rbrunner: the point was to test monero-site on the self-hosted gitlab first, and then see what to do with the other repos. But has been almost an year now  
**\<hyc>** I've always favored moving to self-hosted gitlab and away from github  
**\<rbrunner>** Yeah, I remember. But I think the site is a particularly simple case  
**\<vtnerd\_\_>** I mean most devs should have a copy of the code and history luckily, but its the discussions that can get purged if not backed up properly  
**\<hyc>** but this particular issue only affected private, paid github accts  
**\<hyc>** (i.e., github closing off accts from sanctioned countries)  
**\<ErCiccione>** hyc: i guess that depends by how they are forced to enforce the sanctions  
**\<hyc>** https://twitter.com/natfriedman/status/1155533738278699008  
**\<hyc>** https://twitter.com/natfriedman/status/1155311121038864384  
**\<hyc>** they're splitting some hairs I guess. trade sanctions only affect commerce. if you paid for a private acct, you're affected.  
**\<rbrunner>** Has any other notable cryptocurrency team already made such a switch?  
**\<hyc>** if you're on a public/free acct, you're not affected  
**\<rehrar>** rbrunner: define notable?  
**\<rbrunner>** I mean, some "interesting" team. Top 100 coin, maybe? Sizeable community, I mean  
**\<ErCiccione>** thanks for the links. it's still a very precarious situation.  
**\<ErCiccione>** rbrunner: sia  
**\<rbrunner>** And complexity of the code  
**\<hyc>** ErCiccione: agreed. as I already said, I'm in favor of moving off.  
**\<kinghat>** i think ppl are worried about contributions after moving off github. i dont think it would make a difference.  
**\<hyc>** again, just my perspective: the OpenLDAP Project maintains our own repo. we only mirror to github, because it seems you're not a real project these days if you're not on github  
**\<hyc>** out github mirror is read-only  
**\<hyc>** our\*  
**\<ErCiccione>** kinghat: i agree.  
**\<dsc\_>** I keep repeating myself but I question people whose first thought is 'gitlab' when thinking of a git alternative  
**\<dsc\_>** There is more! Noooo.. Yes!!  
**\<dsc\_>** Consider it...   
**\<hyc>** gitea?  
**\<dsc\_>** for example, yep  
**\<hyc>** I don't really care which alternative is used. all I care is self-hosted.  
**\<ErCiccione>** iirc gitea was considered  
**\<hyc>** you could make an argument that being off github adds a barrier to entry - people don't like having to create accounts just to interact with another project  
**\<rehrar>** In favor of gitea  
**\<dsc\_>** Even more so when considered gitlab is a company, enterprise, they have funding, maybe they have shareholders - and capitalism is evil. Therefor, gitea  
**\<rehrar>** hyc which is why I am arguing for a federated git ecosystem  
**\<rehrar>** open issues on another git based project management site from yours, etc  
**\<ErCiccione>** let's not forget that we already have half repos on github and half on gitlab. That's not ideal  
**\<hyc>** rehrar: agree, federated identity would be preferable  
**\<rehrar>** let's build it  
**\<rehrar>** we can have it out by Wednesday at the latest  
**\<hyc>** +1  
**\<dsc\_>** ok sounds good  
**\<ErCiccione>** i want 2  
**\<rehrar>** that'll take an extra day   
**\<hyc>** this could be a long conversation, but totally - we need to rethink the notion of accounts and identities  
**\<rehrar>** But for reals though  this is an ongoing discussion and...  
**\<rehrar>** ^ hyc  
**\<rehrar>** we have the issue open about this that ErCiccione  
**\<rehrar>** although that one is about moving to gitlab, I think  
**\<rehrar>** so maybe another one can be opened for discussion on which platform?  
**\<dsc\_>** +1 for centralized authentication service  
**\<dsc\_>** (hosted by monero)  
**\<rbrunner>** Oh the added complexity  
**\<dsc\_>** rbrunner: for whom?  
**\<rbrunner>** The system in general, I mean.  
**\<dsc\_>** It could simplify things  
**\<hyc>** not quite centralized authent. just public key based.  
**\<rbrunner>** Something more that can go wrong  
**\<ErCiccione>** rehrar it is yes, as hyc says for me the important is to move away from a centralized place. I think gitlab is the best choice because we have been testing it for an year, but sure let's discuss alternatives  
**\<hyc>** we could use monero wallet addresses as our identities  
**\<rehrar>** hyc I've been thinking of using Monero signatures as password alternatives  
**\<dsc\_>** thats a cool idea  
**\<rehrar>** public key as ID  
**\<rehrar>** signature from private key as password  
**\<kinghat>** does that work with subaddys or am i missing something?  
**\<rehrar>** but then losing your seed is even a bigger deal  
**\<rehrar>** or getting it stolen  
**\<hyc>** good point  
**\<rehrar>** as long as there are standard ways of resetting or something  
**\<rehrar>** it's no more annoying than losing or getting your regular password stolen  
**\<hyc>** having a reset facility implies a centralized admin authority  
**\<dsc\_>** Call the Monero helpdesk and provide them your miaden name, your first car brand and your date of birth  
**\<hyc>** ^  
**\<rehrar>** enforced 2/3 MFA then  
**\<hyc>** should we wrap up the mtg before continiung this conv?  
**\<rehrar>** but yeah, we'll call it here  
**\<rehrar>** unless anyone has any last minute things?  
**\<vtnerd\_\_>** I hope to finally issuing some PRs related to the i2p/tor white noise stuff, took some time to architect this bt hopefully. nothing else needs to be reported by that really other than look for more stuff to review   
**\<rehrar>** cool deal!  
**\<rehrar>** well everyone, thanks for making the time today.  
**\<rehrar>** You're all free to disperse. Coffee on the little table outside the meeting room.  
