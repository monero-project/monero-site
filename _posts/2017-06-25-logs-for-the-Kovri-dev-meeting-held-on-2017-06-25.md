---
layout: post
title: Logs for the Kovri Dev Meeting Held on 2017-06-25
summary: Brief review of what has been completed since last meeting, creating formalized FFS process, website discussion, 96boards OpenHours showcase, and code & open tickets discussion
tags: [dev diaries, i2p, crypto]
author: dEBRUYNE / fluffypony
---

# Logs  

**\<anonimal>** 1. Greetings  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\<anonimal>** 3. Status of [96boards.org OpenHours showcase for Kovri / Monero](https://github.com/monero-project/meta/issues/46)  
**\<anonimal>** 4. Contributor FFS check-in / status  
**\<anonimal>** 5. Community's progress with addendum / revision to https://github.com/monero-project/meta/issues/63  
**\<anonimal>** 6. Open Meta issue review https://github.com/monero-project/meta/issues  
**\<anonimal>** 7. Code + ticket discussion / Q & A  
**\<anonimal>** 8. Any additional meeting items  
**\<anonimal>** 9. Confirm next meeting date/time  
**\<anonimal>** Tick tock, like clock work. Hello :)  
**\<sgp>** Hey!  
**\<MoroccanMalinois>** Hi  
**\<rehrar>** yo yo  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\* anonimal** typing  
**\<anonimal>** For me: PR review/development + collaboration across various repos, kovri-site collab, code collab with MoroccanMalinois, finished up VRP's for all monero subprojects.  
**\<anonimal>** 5th tranche completed http://forum.getmonero.org/9/work-in-progress/86967/anonimal-s-kovri-full-time-development-funding-thread?page=&noscroll=1#post-91187  
**\<anonimal>** MoroccanMalinois rehrar: any words for the brief review?  
**\<MoroccanMalinois>** Still digging in my private testnet  
**\<MoroccanMalinois>** It's getting better, one mini baby step at a time  
**\<anonimal>** Awesome  
**\<rehrar>** hold up, sorry  
**\<anonimal>** Sidenote: I just now realized that our previous meeting was *two* weeks ago and not a week ago... My forum post also covers the work done between our last meeting and now.  
**\<rehrar>** I'm literally with endogenic right now, he's in my houes  
**\<anonimal>** Hi endogenic  
**\<rehrar>** brief review for me  
**\<endogenic>** lol hi anonimal :)  
**\<rehrar>** I finished the Monero website, so we can start identifying features we want ported to the Kovri website  
**\<rehrar>** with Monero website mostly done (and hopefully up soon) I will shift focus to Kovri website  
**\<rehrar>** so we can start having a discussion in-depth about things we want  
**\<rehrar>** I know I mentioned porting the FAQ tech from the Monero website to Kovri and I think it was received ok  
**\<anonimal>** Ok. Note: I think we should continue to try and keep as many features/ideas/bugs in the issue tracker.  
**\<rehrar>** will do  
**\<rehrar>** I'll put my web ideas up there  
**\* anonimal** same here  
**\<anonimal>** Ok, thanks. Anything else on 2.?  
**\<i2p-relay> {-pigeons}** I'm going to talk with anonimal after the meeting about some questions about i2p tunnels and kovri.i2p will be up soon  
**\<anonimal>** Excellent :)  
**\<anonimal>** 3. Status of [96boards.org OpenHours showcase for Kovri / Monero](https://github.com/monero-project/meta/issues/46)  
**\<anonimal>** It looks like we're officially scheduled for July 20th, 16:00 UTC  
**\<anonimal>** I haven't seen the official confirmation email yet, and no word from FP, but I'm suspecting that we'll be go-for-launch.  
**\<anonimal>** I'll post details in the open issue as they come.  
**\<anonimal>** Anything else on 3.?  
**\<sgp>** 90% sure I can make it.  
**\<anonimal>** Ok, I hope you'll be able to make it.  
**\<anonimal>** For anyone who hasn't seen an episode of openhours: https://www.youtube.com/watch?list=PL-NF6S9MM_W1QBjUc2B5Pg502bz7qslxk&v=s3nuVJmf9B0  
**\<rehrar>**  Can we put item 5 before 4 please? :)  
**\<rehrar>** nah never mind forget it  
**\<anonimal>** 4. Contributor FFS check-in / status  
**\<anonimal>** As I posted above, my 5th tranche was completed several days ago. Started the new tranche with some brief SSU collab with MoroccanMalinois and related work, but was AFK yesterday.  
**\<rehrar>** Congratulations anonimal!!  
**\<anonimal>** Thanks rehrar.  
**\<anonimal>** MoroccanMalinois has been pumping out \<insert great adjective here> work since he took over guzzi's unfinished FFS.  
**\<MoroccanMalinois>** :) thanks  
**\<moneromooo>** go go MoroccanMalinois ^\_^  
**\<rehrar>** this kid ^^  
**\<anonimal>** MoroccanMalinois: any thoughts/comments on point 4.?  
**\<MoroccanMalinois>** Nope. Maybe i should be ready for a milestone in next meeting :)  
**\<anonimal>** Awesome, ok.  
**\* anonimal** notes 100% fluidity in workflow from MoroccanMalinois. No snags, no conflicts, very helpful code  
**\<anonimal>** I don't mean to put you on the spot, I'm just trying to give a sense of your presence IMHO for the log / posterity.  
**\<anonimal>** Any other thoughts on 4.?  
**\<MoroccanMalinois>** :) thanks. I enjoy how it's going on so far  
**\<anonimal>** Good to hear.  
**\<anonimal>** 5. Community's progress with addendum / revision to https://github.com/monero-project/meta/issues/63  
**\<rehrar>** I'm on that this week. Tomorrow actually.  
**\<rehrar>** I've been writing extensive documentation for the new website, and that's pretty much all done.  
**\<rehrar>** So I will be drafting documentation for FFS including terms, formatting, and theory.  
**\<rehrar>** I'll update the issue when it's done for review  
**\<anonimal>** Interesting. Which repo will you be working in?  
**\<rehrar>** Well I plan to have a Forum Funding System section in the User Guides page  
**\<rehrar>** http://45.32.161.183/resources/user-guides/  
**\<rehrar>** so I thought I'd just put it in there from the get-go, but I can start it off in the meta repo  
**\<rehrar>** there's already one in the meta repo  
**\<rehrar>** https://github.com/monero-project/meta/blob/master/FFS  
**\<rehrar>** So I'll probably start working in there  
**\<rehrar>** and then port to the User Guides once it's done  
**\<rehrar>** done = approved  
**\<anonimal>** Ok. Maybe after that's done, we can remove it from the meta repo to avoid redundancy.  
**\<rehrar>** Sounds good.  
**\<anonimal>** We'll see how it goes.  
**\<rehrar>** I'll use the current one as a base and get into specifics regarding licensing and community expectations  
**\<anonimal>** Cool, that all sounds good rehrar. Anyone else on 5.? I have not looked/worked on the document since I created this meeting item.  
**\<rehrar>** if there's anything that anyone thinks is important, throw it up on the issue  
**\<anonimal>** Moving on, 6. Open Meta issue review https://github.com/monero-project/meta/issues  
**\* anonimal** was hoping FP was around for #77, #78  
**\<rehrar>** Shot a message to FP regarding new Kovri logo, waiting for response  
**\<rehrar>** #80  
**\<anonimal>** Ok. pigeons rehrar do you know if we own getkovri.net?  
**\<rehrar>** I don't. Sec.  
**\<anonimal>** FP and I talked about that a looong time ago, not sure if he bought it though.  
**\<rehrar>** checking to see if it's taken  
**\<moneromooo>** The monero site is getmonero.org, if you're trying for the same template.  
**\<rehrar>** we have the .org but he's thinking to get .net and have it redirect to .org  
**\<rehrar>** it's available btw, so nobody has it  
**\<anonimal>** moneromooo: yep. It was instinct for me to type getkovri.net because of geti2p.net  
**\<moneromooo>** Cool. Ignore me then ^\_^  
**\<anonimal>** fluffypony ^ getkovri.net?  
**\<rehrar>** I'll find a domain name seller and ask them to take Monero  
**\<anonimal>** Ok  
**\* anonimal** looks through open issues  
**\<rehrar>** regarding https://github.com/monero-project/meta/issues/43 I will be working on an action plan this week  
**\<rehrar>** it will probably a Monero and Kovri hybrid  
**\<rehrar>** but I'll make specific sections for each  
**\<rehrar>** there's tons of fun ideas spinning around in my mind  
**\<rehrar>** I'll probably lean towards a Kovri focus since I think it needs more help than Monero  
**\<anonimal>** Awesome awesome. I'd love to see what you come up with.  
**\<ArticMine>** I would get kovri.org  
**\<ArticMine>** before it gets taken  
**\<anonimal>** If anyone here gets it now, I'm sure they can be reimbursed.  
**\<rehrar>** I'll buy. But are the domains owned by a Monero specific account that I should transfer to?  
**\<serhack>** I think I can get getkovri.net  
**\<rehrar>** if there isn't would it be wise to have an accounts@getmonero.org type of email that the domains and other things can be attributed to? or would that be too centralized?  
**\<rehrar>** the Core team would have the password to it, ofc. I don't know what the current setup is.  
**\* anonimal** shrugs, all out of my jurisdiction, wishing FP was here  
**\<anonimal>** luigi1113: do we have a centralized accounts address?  
**\<anonimal>** rehrar serhack: if either of you can buy the domain now, that was be exquisite  
**\<serhack>** okay  
**\<serhack>** let me check  
**\* anonimal** stays out of this one  
**\<rehrar>** serhack, you can nab them and get reimbursed with Monero, as I know you're trying to get some more (afaik)  
**\<rehrar>** both getkovri.net and kovri.org if available  
**\<ArticMine>** Just registered kovri.org  
**\<anonimal>** ajs: I haven't forgotten about you! https://github.com/monero-project/meta/issues/27  
**\<rehrar>** ArticMine is boss  
**\<anonimal>** Thank you ArticMine  
**\<Olufunmilayo>** might I suggest also .com so to have all 3 top levels for each domain name? this would aid in preventing someone setting up .com and serving malicious code or ..ect  
**\<rehrar>** good point  
**\<rehrar>** but I think kovri.com is taken  
**\<anonimal>** lol, actual russian kovri  
**\<ArticMine>** Yes it is and is used in an unrelated business in Russia  
**\<rehrar>** it's a russian rug store  
**\<Olufunmilayo>** well where possible that is  
**\<rehrar>** I speak Russian  
**\<rehrar>** I can reach out to them to see their willingness to sell  
**\<serhack>** can you confirm me getkovri.net ?  
**\<serhack>** anonimal  
**\<rehrar>** ye that's the one  
**\<anonimal>** Huh? What do you need from me?  
**\<anonimal>** Yes, getkovri.net  
**\<serhack>** okay, done  
**\<anonimal>** Yay, grazie il mio amico  
**\<rehrar>** ok so in Russian Ковер is a rug  
**\<serhack>** :) you are trying to speak italian!! :)  
**\<rehrar>** and the plural is Ковры  
**\<rehrar>** which is Kovri in English  
**\<serhack>** there is a free who-is privacy :)  
**\<rehrar>** So literally, for the, the site is rugs.com  
**\<anonimal>** Ya znaiu, rehrar  
**\<rehrar>** which I could imagine is a pretty premium domain for Russia  
**\<rehrar>** D:  
**\<rehrar>** anonimal: the master of all language  
**\<iDunk>** I was wondering about that the other day.  
**\<iDunk>** There was an odd "Me too" :)  
**\<iDunk>** anonimal starting to deanon? :D  
**\<anonimal>** rehrar: maybe they'll be interested in kovri software  
**\<serhack>** anonimal: where can I talk with you privatly?  
**\<anonimal>** iDunk: ah!  
**\<serhack>** irc?  
**\<rehrar>** at the very least, we can ask that they accpet Monero  
**\<rehrar>** I will purchase their rugs with Monero  
**\<anonimal>** serhack: for secure privacy, yes: use OTR on IRC.  
**\<anonimal>** rehrar: lol yes do it!  
**\<anonimal>** ajs: if you're around, I'll be happy to talk more about #27  
**\<rehrar>** serhack, if you need some help putting OTR for IRC I can show what I did  
**\<serhack>** rehrar: yeah, I need some help  
**\<anonimal>** Thank you for helping, rehrar  
**\<rehrar>** alright, no worries man.  
**\<rehrar>** no worries other man  
**\<anonimal>** rehrar: what do you think of this https://github.com/monero-project/meta/issues/24  
**\<anonimal>** How effective do you think it would be?  
**\<rehrar>** I was just looking at that. I know nothing about GNU social  
**\<rehrar>** I'll give it some research this week  
**\<rehrar>** and I'll get back to you on viability and pros/cons  
**\<rehrar>** let's get all the issues closed :D  
**\<anonimal>** We had a test run a long while ago. Someone started hosting a test server but then seemed to abandon it. The service didn't catch on for our community but then again I think no one knew about it.  
**\<anonimal>** Ok, sounds good.  
**\<anonimal>** Any thoughts on #81?  
**\<anonimal>** needmultisig90: https://github.com/monero-project/meta/issues/81  
**\<anonimal>** Well, we're running out of time. Any other comments/questions about open meta issues?  
**\<rehrar>** Nah. Not for now.  
**\<anonimal>** 7. Code + ticket discussion / Q & A  
**\<anonimal>** MoroccanMalinois and I started a discussion around 01:00 UTC Saturday. I think we can continue anytime after the meeting.  
**\<anonimal>** Anything else on 7.?  
**\<anonimal>** 8. Any additional meeting items  
**\<anonimal>** rbrunner will be working on some new windows installers. I'm very happy to hear this :)  
**\<rbrunner>** Thanks :)  
**\<rehrar>** Woo!  
**\<rbrunner>** My little contribution to the revolution  
**\<anonimal>** I'll respond to your message a.s.a.p, rbrunner, then I think the rest will be straightforward.  
**\<rbrunner>** By mail?  
**\<anonimal>** Hehe, a very welcome contribution.  
**\<anonimal>** Sure, just to keep continuity. Then more IRC if you're comfortable with that.  
**\<rbrunner>** Ok.  
**\<anonimal>** Any other meeting items from anyone?  
**\<anonimal>** 9. Confirm next meeting date/time  
**\<anonimal>** Two weeks, same time?  
**\<rehrar>** No  
**\<rehrar>** Jk yes.  
**\<MoroccanMalinois>** lol  
**\<anonimal>** haha  
**\<anonimal>** Ok, thanks everyone. :)  
**\<anonimal>** Fruitful meeting. I could taste the nectar.  