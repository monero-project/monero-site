---
layout: post
title: Logs for the Kovri Dev Meeting Held on 2016-05-22
summary: GNU Social status, Kovri website, i2p StackExchange, Coverity for Kovri
tags: [dev diaries, i2p, crypto]
author: dEBRUYNE / fluffypony
---
  
# Logs

**\<fluffypony>** ok starting the meeting relay for the Kovri meeting  
**\<meeting-bot> [anonimal]** Hello.  
**\<fluffypony>** anonimal: all yours :)  
**\<i2p-relay> {-anonimal}** From https://github.com/monero-project/kovri/issues/177  
**\<i2p-relay> {-anonimal}** Proposed meeting items:  
**\<i2p-relay> {-anonimal}** 17:00 (UTC)  
**\<i2p-relay> {-anonimal}** 1. Review assigned open tickets: status, code ideas (if applicable), etc.  
**\<i2p-relay> {-anonimal}** 2. Any additional meeting items  
**\<i2p-relay> {-anonimal}** 3. Confirm next meeting date/time  
**\<i2p-relay> {-anonimal}** Starting with 1., as discussed in private with fluffypony, let's tackle https://github.com/monero-project/kovri/issues/assigned/fluffypony  
**\<fluffypony>** hokay - should we do them one at a time ?  
**\<meeting-bot> [anonimal]** Sure, #105.  
**\<fluffypony>** sec, just opening it up  
**\<meeting-bot> [anonimal]** I'm more curious about status updates and if we'll pursue some of these ideas.  
**\<fluffypony>** ok 107  
**\<fluffypony>** I asked dEBRUYNE and the rest of the social media guys about that in January last  
**\<fluffypony>** dEBRUYNE: have you guys looked at that at all ?  
**\<dEBRUYNE>** I think xmrpromotions was handling that  
**\<meeting-bot> [anonimal]** JFTR: s/107/105/  
**\<dEBRUYNE>** I honestly cannot remember you asking me :-P  
**\* fluffypony** has the IRC logs to prove it :-P  
**\<dEBRUYNE>** regardless, I think xmrpromotions was handling most of that :-P  
**\<fluffypony>** ok - xmrpromotions, did you have a chance to look at GNU Social ?  
**\<ArticMine>** I am looking at GNU social right now  
**\<xmrpromotions>** I am sorry but I have not  
**\<meeting-bot> [anonimal]** Can I ask everone, candidly, what they think of the idea?  
**\<meeting-bot> [anonimal]** Is it something worth pursuing?  
**\<ArticMine>** My initial instinct is yes  
**\<fluffypony>** tbh I had hardly heard about GNU Social till you brought it up  
**\<xmrpromotions>** Are there more details I can read about it? https://github.com/monero-project/kovri/issues/105  
**\<fluffypony>** but I think in terms of providing a more freedom-friendly social presence it's advantageous  
**\<fluffypony>** plus if we can spend the energy maintaining a Facebook page we can definitely justify this... :-P  
**\<ArticMine>** Way better than a Facebook page  
**\<ArticMine>** There are many who dislike the corporate centralization of Facebook in social media  
**\<meeting-bot> [anonimal]** xmrpromotions: A great example of a working instance is https://quitter.se/  
**\<__uguu__>** facebook is currently actively banning users that talk about the censorship too so...  
**\<meeting-bot> [anonimal]** xmrpromortions: For technical details, https://gnu.io/social/  
**\<meeting-bot> [anonimal]** lol, sorry, not auto-completion here  
**\<meeting-bot> [anonimal]** Yes, recent news items re: censorship just get crazier and crazier.  
**\<xmrpromotions>** Thank you I will read the details and be ready to comment later. It is too early for me to commit to anything quite yet  
**\<meeting-bot> [anonimal]** And the social monopolies are finally showing their true colors.  
**\<meeting-bot> [anonimal]** Ok, so #105 is on hold pending xmrpromotions' review?  
**\<fluffypony>** yup  
**\<meeting-bot> [anonimal]** Ok, next ticket.  
**\<fluffypony>** ok  
**\<meeting-bot> [anonimal]** #46  
**\<meeting-bot> [anonimal]** The Kovri website.  
**\<fluffypony>** #46 - does anyone have any strong opinions on whether it should be a page on the Monero website, or a separate site that matches the Monero site's look and feel (maybe with different colours), or a completely unrelated site ?  
**\<fluffypony>** anonimal: and your input on this would be appreciated too  
**\<fluffypony>** I think the relay is wonky  
**\<meeting-bot> [anonimal]** What's the time-cost in terms of managing two sites?  
**\<meeting-bot> [anonimal]** Yes, missed almost everything it looks like.  
**\<fluffypony>** anonimal: it's mostly just the initial work, after that I mostly go hands-off and let the community run with the content  
**\<meeting-bot> [anonimal]** Can anyone read this?  
**\<meeting-bot> [anonimal]** Ok, so could we start small with a page on the website, or maybe subdomain/ and if things get bigger move onto another site?  
**\<fluffypony>** that would be my recommendation  
**\<fluffypony>** we start with a sub-section on the Monero site  
**\<fluffypony>** and forward the kovri site through to it  
**\<fluffypony>** if we feel the need later on we can create a separate site on its own  
**\<meeting-bot> [anonimal]** Ok, sounds good to me. Anyone else?  
**\<xmrpromotions>** Of the three options mentioned a separate site that matches the Monero site's look and feel may help draw a wider audience than a page on the Monero site while at the same time anyone who visits the Kovri page knows that Monero is associated with it  
**\<xmrpromotions>** It seems like a judgement call to me. Either plan sounds reasonable  
**\<fluffypony>** restarting meeting bot  
**\<fluffypony>** in fact, if you want to write up some content for me I'll do it on the plane on Tuesday  
**\<fluffypony>** in fact, I can probably take most of it from the readme  
**\<fluffypony>** in fact, if I say in fact again I'll summon the in-fact-bot  
**\<meeting-bot> [anonimal]** Ok, ideas for content? I can blabber but ideas are welcome.  
**\<meeting-bot> [anonimal]** ping in-fact-bot  
**\<xmrpromotions>** Any thoughts on creating a stackexchange proposal for I2P? Tor has a page now https://area51.stackexchange.com/proposals/56447/tor and we should be able to reach the commitment stage quickly with the same supporters behind the Monero proposal?  
**\<fluffypony>** xmrpromotions: we'd have to run it past zzz, at the very least  
**\<meeting-bot> [fluffypony]** zzz ^^  
**\<xmrpromotions>** sorry for off topic idea. I can table it for later if appropriate  
**\<fluffypony> no I think it's an excellent idea, if the i2p community at large is interested then now is definitely the time  
**\<meeting-bot> [anonimal]** From what I've seen, alot of great ideas come and go through #i2p-dev but it always comes down to resources.  
**\<meeting-bot> [anonimal]** I think we'd all love that but someone will have to take the initiative.  
**\<xmrpromotions>** I will take the initiative on that  
**\<meeting-bot> [anonimal]** AFAICT all i2p-related dev (including Kovri) is in a bit of a dry spell so, priorities.  
**\<meeting-bot> [anonimal]** I like the idea though.  
**\<fluffypony>** anonimal: the advantage is that we can basically get everyone who's committed to the Monero proposal to also back an i2p proposal  
**\<fluffypony>** but now is the time to do so  
**\<fluffypony>** whilst everyone's excited  
**\<meeting-bot> [anonimal]** Ok, so what's the next step?  
**\<xmrpromotions>** If the I2P communty supports it. As fluffypony said now is the time as the synergy will help both I2P and Monero proposals pass faster for REP related reasons  
**\<fluffypony>** so basically next step on the website is let's get a bit of content and I'll put it together on the plane on Tuesday  
**\<fluffypony>** next step on the StackExchange proposal is to wait for feedback from zzz  
**\<xmrpromotions>** sounds good. I wont act until I hear confirmation that zzz is ready to proceed  
**\<meeting-bot> [anonimal]** I dropped a line in #i2p-dev.  
**\<meeting-bot> [anonimal]** We'll see who bites.  
**\<meeting-bot> [anonimal]** Ok, so #46: 1) create content 2) On Tuesday, fluffypony will put something together 3) ETA after that?  
**\<fluffypony>** ok next ticket ?  
**\<fluffypony>** oh  
**\<fluffypony>** once it's pushed to the repo it goes live  
**\<fluffypony>** there's no ETA beyond that  
**\<fluffypony>** or no steps beyond pulling it and rebuilding the Jekyll site  
**\<meeting-bot> [anonimal]** Ok great, I'll paste a note in ticket.  
**\<meeting-bot> [anonimal]** Moving on, #43.  
**\<fluffypony>** ok - can we just use the Monero addresses, or do we want separate addresses?  
**\<meeting-bot> [anonimal]** I'm fine with Monero addresses.  
**\<fluffypony>** ok then they're avialable here, anonimal: http://donate.getmonero.org  
**\<fluffypony>** *available  
**\<meeting-bot> [anonimal]** Ok. Also, I can apply for FFS when needed or include my address somewhere or we can simply put a note in README to donate to either. Sound fair?  
**\<meeting-bot> [anonimal]** Or no?  
**\<othe>** ffs is prolly more efficient  
**\<fluffypony>** FFS is better than direct donations  
**\<fluffypony>** and it's generally more trustworthy because you raise funds for a specific piece of work, and then get paid out on milestones  
**\<meeting-bot> [anonimal]** Ok, we should put a note in README directing to FFS and donation page or just FFS?  
**\<fluffypony>** the readme just needs the donation page  
**\<fluffypony>** if we get large donations we redistribute them to active FFS proposals anyway  
**\<meeting-bot> [anonimal]** fluffypony: Ok, would you like to add that with your wording to the README? Or should I?  
**\<fluffypony>** anonimal: I have to pack tomorrow, and have a bunch of things to do, so if you could that would be appreciated  
**\<meeting-bot> [anonimal]** Ok  
**\<meeting-bot> [anonimal]** Moving on, #27  
**\<fluffypony>** ok #27 is going to have to hold for a week or two, we're busy moving email providers on getmonero.org so I'll sort it out on the new provider  
**\<meeting-bot> [anonimal]** Ok, I'll paste that note.  
**\<meeting-bot> [anonimal]** Onward to #20.  
**\<fluffypony>** 20 - I can try Coverity again, let's see if it gives me the same issue  
**\<fluffypony>** I've not heard from them despite opening tickets etc.  
**\<meeting-bot> [anonimal]** Links? Maybe I can comment/ping them too.  
**\<fluffypony>** anonimal: screenshots and process I followed is in that ticket  
**\<fluffypony>** issue I mean  
**\<meeting-bot> [anonimal]** Ok, well, it may come down to a phone call or two.  
**\<meeting-bot> [anonimal]** Is that something you'd be willing to do?  
**\<meeting-bot> [anonimal]** If not, we can skip the integration and try to do it manually.  
**\<fluffypony>** sure  
**\<meeting-bot> [anonimal]** Ok, next. #90 is not assigned to you but I remember you said you would assign yourself.  
**\<fluffypony>** one second just checking coverity  
**\<meeting-bot> [anonimal]** Is #90 still of interest?  
**\<fluffypony>** oooooh it works  
**\<fluffypony>** they must've fixed it and just not let us know  
**\<fluffypony>** anonimal: I'll PM you with coverity details  
**\<meeting-bot> [anonimal]** Fantastic!  
**\<meeting-bot> [anonimal]** Yay, great. This should be interesting.  
**\<gingeropolous>** will I break things if I create a bridge by connecting simplewallet to the daemon over an i2p tunnel?  
**\<fluffypony>** doubtful  
**\<meeting-bot> [anonimal]** fluffypony: #90?  
**\<fluffypony>** 90 will happen automagically when our GitLab mirror is up  
**\<fluffypony>** it'll have clearnet / Tor / i2p mirrors  
**\<meeting-bot> [anonimal]** Ok then. I've missed any discussions about that in the past, is there an ETA?  
**\<fluffypony>** not at the moment - it's one of those "on the list" things, I lack the time to knuckle down and do it  
**\<fluffypony>** we need a devops team :-P  
**\<meeting-bot> [anonimal]** Indeed. Ok, I'll add a note in ticket.  
**\<meeting-bot> [anonimal]** To whom should we assign #90 then?  
**\<fluffypony>** me  
**\<meeting-bot> [anonimal]** Ok, will do.  
**\<meeting-bot> [anonimal]** Yay, hour long of fluffypony tickets finally tackled! I'm glad we finally had the time. Any other comments them?  
**\<fluffypony>** none from my side  
**\<meeting-bot> [anonimal]** So, since this was the "fluffypony show" meeting, for time-sake I'll sum up my part of 1. with one line:  
**\<meeting-bot> [anonimal]** I'm not working on any tickets ATM but what will most likely be a new ticket soon as I'm working on Transports (mostly NTCP, little SSU): debugging/refactoring/c++14 refactoring where appropriate/some rewrite/some new code/documentation/improved logging  
**\<meeting-bot> [anonimal]** So, that's that for now, I'm sure more code talk can be at the next meeting.  
**\<meeting-bot> [anonimal]** Any additional meeting items (quickly)?  
**\<fluffypony>** nothing more from me  
**\<meeting-bot> [anonimal]** Re: StackExchange, what tl;dr can I give to #i2p-dev?  
**\<meeting-bot> [anonimal]** Aside from pointing a link to the meeting log.  
**\<meeting-bot> [anonimal]** (I've been out of the loop re: the initiative)  
**\<xmrpromotions>** Just say that we are willing to cross promote it to XMR community and expect it to reach the commitment stage fairly fasy  
**\<xmrpromotions>** fast  
**\<meeting-bot> [fluffypony]** just that it's a proposal to have an i2p-specific StackExchange area  
**\<meeting-bot> [anonimal]** So, what should we expect from them?  
**\<xmrpromotions>** from there the I2P and XMR communities can help each other ensure both site reach beta  
**\<xmrpromotions>** Hard for me to make an ETA on that. End result would be an I2P site similar to what Tor has now  
**\<meeting-bot> [anonimal]** fluffypony: should we end meeting?  
**\<meeting-bot> [anonimal]** (or has it ended?)  
**\<meeting-bot> [fluffypony]** yes I think so  
**\<meeting-bot> [fluffypony]** I'll take the bot down  
**\<xmrpromotions>** We need I2P experts to appear during the proposal stage once created to ask good questions  
**\<xmrpromotions>** early questions attract a lot more votes and rise to the top, so quality matters  
**\<meeting-bot> [anonimal]** Ok, I'll chat in #monero-dev.  
**\<i2p-relay> {-anonimal}** * thinking  
**\<i2p-relay> {-anonimal}** xmrpromotions: I can commit to both pages. How many I2P 'experts' would need to commit?  
**\<xmrpromotions>** well we need 40 good questions. each person can only ask 5  
**\<fluffypony>** well before commitment it's just the voting section  
**\<xmrpromotions>** Our initial 40 questions will help with SEO after launch  
**\<fluffypony>** where we need not only good questions asked, but also good questions have to get 10 votes each  
**\<xmrpromotions>** Yes I mean we need to create quality questions to vote on  
**\<xmrpromotions>** If someone wants to create a list of 40 great questions that would be perfect  
**\<i2p-relay> {-anonimal}** 40 great I2P questions, I could do that.  
**\<fluffypony>** they still have to post them though  
**\<xmrpromotions>** then we can divide it up and ask 5 each to make sure no silly questions gain a lot of votes early in the process  
**\<xmrpromotions>** we can find 8 people to post 5 questions each easily  
**\<fluffypony>** yup  
**\<fluffypony>** yeah, then we need a bunch of people to upvote :)  
**\<xmrpromotions>** I dont think voting will be a problem either. XMR users with no rep can be assigned to ask the questions... that will give them 5x10x5 rep (250 each)  
**\<xmrpromotions>** which will give them more than enough for the 200 rep area 51 cutoff for the SE 100 rep account association bonus  
**\<fluffypony>** strategyyyy  
**\<xmrpromotions>** 5q with 10 votes each will earn 5 rep per vote  
**\<i2p-relay> {-anonimal}** Ok, sounds great. Right now, I need to finish post-meeting wrap-up, take a break, get my brain in order and bbl.  
**\<fluffypony>** ok cool  
**\<xmrpromotions>** I will make a post in the getmonero forums. Maybe we can create and agree on a list of 40 questions there before we start  
**\<xmrpromotions>** thanks everyone. have a great weekend  
**\<fluffypony>** cheers