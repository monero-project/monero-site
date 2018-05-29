---
layout: post
title: Logs for the Kovri Dev Meeting Held on 2017-09-24
summary: Brief review of what has been completed since last meeting, contributor FFS check-in / status, moving meeting date/time, website reorganization and code & open tickets discussion
tags: [dev diaries, i2p, crypto]
author: dEBRUYNE / fluffypony
---

# Logs  

**\<anonimal>** 1. Greetings  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\<anonimal>** 3. Contributor FFS check-in / status  
**\<anonimal>** 4. Moving meeting date/time  
**\<anonimal>** 5. Website reorganization  
**\<anonimal>** 6. Code + ticket discussion / Q & A  
**\<anonimal>** 7. Any additional meeting items  
**\<anonimal>** 8. Confirm next meeting date/time  
**\<anonimal>** Hello  
**\<xmrmatterbridge> \<ajs>** hi  
**\<MoroccanMalinois>** Hi  
**\<ErCiccione>** Hi folks  
**\<xmrmatterbridge> \<sgp>** Hi  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\<anonimal>** What's covered in here https://forum.getmonero.org/9/work-in-progress/86967/anonimal-s-kovri-full-time-development-funding-thread?page=&noscroll=1#post-92168 which was submitted last week.  
**\<anonimal>** For this week, continuation of what was covered in that link. I also happened to make an appearance in a BTC manager interview the other day. Jaime at BTC manager interviewed Michael and I re: the hardware wall  
**\<anonimal>** etc.  
**\<anonimal>** \*wallet  
**\<xmrmatterbridge> \<sgp>** Is that released yet?  
**\<anonimal>** The hardware wallet?  
**\<xmrmatterbridge> \<sgp>** Nop the interview  
**\<anonimal>** Oh, I don't know, I haven't checked.  
**\* anonimal** wasn't given a release date either  
**\<anonimal>** Anything else on point 2? I know everyone's been busy with kovri-related work so speak up if you'd like!  
**\<rehrar>** My stuff can be discussed in the designated time. :)  
**\<anonimal>** This is a review of the past though, not future immediate/future developments.  
**\<ErCiccione>** quick update about localization of kovri?  
**\<anonimal>** re: 2., rehrar was funded and has began https://forum.getmonero.org/9/work-in-progress/88390/assistant-for-kovri-project-management  
**\<anonimal>** re: 2, sgp has contributed to kovri script development and has made plans to meet a professor of his to discuss kovri  
**\<rehrar>** Ah, ok. I've been working hard on structuring out the new website, testing ideas in Jekyll, and how all of it fits in with the current Docs.  
**\<anonimal>** Yes ErCiccione, please  
**\<rehrar>** Yay! Thanks anyone who reads this now or in the future via logs for the chance to work with Kovri like this  
**\<ErCiccione>** Ok, we started to localize Kovri in #monero-translation, i also added kovri related files in our todo list: https://taiga.getmonero.org/project/erciccione-monero-localization/kanban i'd like to keep this updated so please let us know (directly to me or in #monero-translations) if there is something we should care about  
**\<anonimal>** Ok great  
**\<ErCiccione>** that's it :)  
**\<anonimal>** Anything else on review for point 2?  
**\<anonimal>** 3. Contributor FFS check-in / status  
**\<anonimal>** I'm here. Made my check-in, gave link during the brief review.  
**\<anonimal>** MoroccanMalinois: how's it going?  
**\<MoroccanMalinois>** Been traveling, but next week should be a productive one  
**\<MoroccanMalinois>** If it goes as planned, i should complete the milestone for the next meeting  
**\<anonimal>** Excellent  
**\* anonimal** notes that, not mentioned in point 2, MoroccanMalinois was able to do some contributing between now and the last meeting  
**\<rehrar>** I'm FFS now too, so my update is that this week made me want to strangle Git, but I'm on my merry way.  
**\<anonimal>** And rehrar's made huge git progress, so that's great.  
**\<MoroccanMalinois>** Congrats rehrar :)  
**\<anonimal>** Anything else on point 3.?  
**\<rehrar>** I managed to stump several pro git people, so I feel somewhat proud  
**\<serhack>** hey  
**\<serhack>** *missed meeting*  
**\<anonimal>** Hi serhack. We're still moving along.  
**\<anonimal>** 4. Moving meeting date/time  
**\<serhack>** :) great!  
**\<anonimal>** We need to move the Sunday meeting to another day/time.  
**\<anonimal>** I simply can't spend 6 to 7 days a week working at this point in time.  
**\<anonimal>** I'd prefer to have meetings on Monday or Friday, and am flexible with the time of day/night.  
**\<anonimal>** What is everyone's ideal meeting day/time?  
**\<rehrar>** I'm pretty much good on Mondays and Fridays anytime. I'm in Mountain Standard Time, so anytime where I should be sleeping would be a preferred no, but I can make stuff work if need be.  
**\<anonimal>** Alright, anyone else?  
**\<MoroccanMalinois>** For me just not between 5h-13h GMT  
**\<anonimal>** Ok, so we can keep 18:00.  
**\<rehrar>** Fine with me. Monday or Friday?  
**\<anonimal>** Friday.  
**\<MoroccanMalinois>** Fine with me  
**\<ErCiccione>** ok  
**\<rehrar>** Alright.  
**\<anonimal>** Great. Any objections?  
**\* anonimal** waits 1 more minute  
**\<anonimal>** Yay, thanks everyone.  
**\<anonimal>** 5. Website reorganization  
**\<rehrar>** Oh, that's me. :)  
**\<rehrar>** Ok, so I've been working on the getkovri.org website, specifically trying to make it more accessible for newcomers (i.e. not as many text dump pages everywhere), while also integrating the docs, keeping things easy for translators, and making sure all of this is possible in Jekyll for security.  
**\<rehrar>** And it's still a work in progress (the site map I literally started to change an hour ago because I had a better idea of structuring), but I thought I'd share what I had now for comment.  
**\<rehrar>** https://imgur.com/a/RN8Vy here's an imgur album with some wires and the sitemap at the bottom. Please note that these are NOT designs, but wires. Meaning it is primarily meant for placing information in the page, and not how the end page's design will look.  
**\<rehrar>** If we scroll to the bottom to the sitemap, I'd like to start there  
**\<rehrar>** Feel free to disagree with, comment on, critique, or whatever you want anythning I say btw. All of this is very open and fluid righ tnow.  
**\<rehrar>** \*right  
**\<anonimal>** Niiiice, very cool, rehrar.  
**\<anonimal>** +1  
**\<rehrar>** currently, if we go to getkovri.org all pages are just the docs repurposed for the website  
**\<rehrar>** and a lot of the information, while good and relevant, is difficult to get through, and any change that is made in the docs has to be made for the entire website since the docs ARE the pages  
**\<rehrar>** my plan is to put the docs in their own little section of the site (i.e. getkovri.org/docs) in a similar way as docs are handled by many other organizations  
**\<rehrar>** let me grab an example  
**\<rehrar>** https://docs.mattermost.com/overview/product.html  
**\<rehrar>** as you can see here (and in the docs wire on the imgur album) on the left we'll have the docs titles, and clicking on the one you want will make it appear on the right  
**\<rehrar>** I will be utilizing the same technology utilized in the https://getmonero.org/community/team/ page (no Javascript, and no need for page reload) for this page  
**\<anonimal>** Looks good to me.  
**\<rehrar>** This is the part that may get the most contention  
**\<rehrar>** My plan is the docs that are useable for a user-friendly site (FAQ primarily) will not be included in the Docs section, but rather in the site proper  
**\<rehrar>** (we can include it int he docs section as well, if we want the same info twice on the site, but I'd say nah)  
**\<rehrar>** The FAQ will also be put in sections and dropdowns to make it more easily navigated  
**\<anonimal>** Ok, so what's the possible contention?  
**\<anonimal>** This seems fine.  
**\<rehrar>** Ok, no contention then. :)  
**\<anonimal>** You don't need to change kovri-docs to achieve this, btw.  
**\<rehrar>** Just wondered if some people think all docs should be in the docs section for completeness  
**\<rehrar>** I realize. That's the beauty of it.  
**\<anonimal>** You can simply symlink what's in kovri docs to whatever you need in kovri-site.  
**\<anonimal>** IIRC, unless jekyll is stupid about symlinks?  
**\<rehrar>** I've already done several tests in Jekyll for a lot of this. It's all possible  
**\<anonimal>** Ok  
**\<rehrar>** I suggest combining the Terms and Conditions, Privacy Policy, and Copyright into one page 'Legal'  
**\<rehrar>** similar to this: https://getmonero.org/legal/  
**\<rehrar>** they are sectioned off so they don't run into each other  
**\<anonimal>** Yep, sounds fine.  
**\<rehrar>** If we scroll to the home page in the middle  
**\<ErCiccione>** keeping everything in kovri-docs should also make translations easier right?(at least until we don't get the platform working)  
**\<rehrar>** I'd like to put the upcoming Kovri savandra video on the page  
**\<anonimal>** ErCiccione: yes  
**\<MoroccanMalinois>** getkovri.org will also use "Google analytics" ?  
**\<anonimal>** I hope not.  
**\<rehrar>** But maybe this isn't the best idea since it will also be on I2P. Any thoughts on the video?  
**\<rehrar>** There's an open-sourced, self-hosted analytics tracker that respects people who don't want to be tracked if we wanted to collect anything  
**\<rehrar>** piwik  
**\<rehrar>** but if not, it's not needed  
**\<anonimal>** re: video, yes. We simply don't upload the video and instead serve the file directly.  
**\<rehrar>** similar to how Monero is doing it, right? Or am I misunderstanding?  
**\<anonimal>** Who needs the analytics and for what purpose?  
**\<anonimal>** IIRC monero-site recently started google analytics. I saw the merged PR you submitted.  
**\<rehrar>** *shrug* I wasn't going to include any, but was just mentioning the option since it was brought up. I don't think it's needed tbh, but I've been wrong before.  
**\<rehrar>** oh sorry for confusion. My 'similar to how Monero is doing it" statement referred to the videos  
**\<rehrar>** which are not on any service, they are just on the same server and when the video is clicked it just pulls the file and stuff. Not pulled from YouTube or anywhere  
**\<anonimal>** Ok  
**\<rehrar>** Almost done, I promise. :P  
**\<rehrar>** from my understanding, at the moment people can download the nightlies or build from source using the instructions provided in the docs  
**\<anonimal>** Yes  
**\<rehrar>** so for now we just have that in the home page downloads section, but when the Alpha is released, we can have a downloads page.  
**\<rehrar>** The top two images in the imgur album have to be clicked so the backgrounds aren't black cuz it's a png and imgur is stupid  
**\<anonimal>** Ok this all sounds fine.  
**\<rehrar>** but basically summarizing the docs (basically a Quick Start for Kovri) similar to this page: https://getmonero.org/get-started/using/  
**\<rehrar>** and refers users to the docs if they want more details on options and stuff  
**\<anonimal>** Looks great.  
**\<rehrar>** ande Contribtuion helping people get ocnnected to code, donate, or raise awareness  
**\<rehrar>** I'm done  
**\<anonimal>** Awesome  
**\<anonimal>** Anything else on point 5, website reorg?  
**\<ajs>** good work rehrar  
**\<anonimal>** 6. Code + ticket discussion / Q & A  
**\<anonimal>** MoroccanMalinois: have you read my comment in #723?  
**\<MoroccanMalinois>** Yes  
**\<MoroccanMalinois>** i think it's doable with an "entrypoint"  
**\<serhack>** anonimal  
**\<anonimal>** *whew*, great, MoroccanMalinois.  
**\<serhack>** can you tell me about the script? :)  
**\<anonimal>** Hi serhack, which script?  
**\<serhack>** php script headers  
**\<anonimal>** What about them?  
**\<rehrar>** You just not quite clear on what to do Serhack?  
**\<ajs>** for check.kovri.i2p  
**\<anonimal>** Let's start with basic header output. I thought I already said that.  
**\<serhack>** yeah  
**\<anonimal>** IIRC I did something like that for a test instance but I don't have that script anymore. IIRC it's really easy to do in php.  
**\<serhack>** @rehrar  
**\<rehrar>** Yeah, he's not quite sure what's meant by that, I guess.  
**\<anonimal>** serhack: have you done a search for "php get client request headers"  
**\<serhack>** yeah @anonimal  
**\<anonimal>** Ok, serhack, when a user visits a page, have php echo back the request header sent  
**\<serhack>** oh, cool  
**\<anonimal>** From there we can build off of that to include other information.  
**\<anonimal>** Thanks serhack  
**\* anonimal** we're running out of time, must wrap-up the meeting  
**\<anonimal>** 7. Any additional meeting items  
**\<serhack>** your welcome  
**\<rehrar>** Viva Kovri!  
**\<anonimal>** MoroccanMalinois: I'll make those changes tomorrow or Tuesday so we can throw out the config.  
**\<MoroccanMalinois>** k thanks  
**\<ErCiccione>** ¡Que viva!  
**\<serhack>** yeah Rehrar! Viva Kovri!  
**\<anonimal>** lol lots of vivas  
**\<anonimal>** 8. Confirm next meeting date/time  
**\<moneromooo>** As an addi... too late.  
**\<anonimal>** Friday, Oct. 6th, 18:00?  
**\<anonimal>** hah, moneromooo  
**\<moneromooo>** Sorry :P  
**\<anonimal>** Anything to add moneromooo?  
**\<moneromooo>** I was just going to ask about whether you had had any other thought about a "minimal use" example for kovri's API.  
**\<anonimal>** Yes, we talked about that and agreed upon that. Sounds great. It's on the table.  
**\<moneromooo>** Alright.  
**\<anonimal>** The new testnet is pointing out huge problems that need to be fixed though.  
**\<anonimal>** We'll get there.  
**\<anonimal>** Last point: next meeting on Friday, Oct. 6th, 18:00 or Friday Oct. 13th, 18:00?  
**\<moneromooo>** Sure, I'm not waiting for them in particular now, so no rush of course.  
**\<anonimal>** Ooo, Friday the 13th, haven't seen that in a while.  
**\<anonimal>** k  
**\* anonimal** prefers Oct. 6th, objections?  
**\<MoroccanMalinois>** nope  
**\<anonimal>** Alright, next meeting on Oct. 6th, 18:00.  
**\<anonimal>** Thanks everyone!  
**\<rehrar>** Kthanksbai  