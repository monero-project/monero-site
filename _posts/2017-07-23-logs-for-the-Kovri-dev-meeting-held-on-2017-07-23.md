---  
layout: post  
title: Logs for the Kovri Dev Meeting Held on 2017-07-23  
summary: Brief review of what has been completed since last meeting, discussion of meta issues, and code & open tickets discussion  
tags: [dev diaries, i2p, crypto]  
author: dEBRUYNE / fluffypony  
---  
    
# Logs  
  
**\<anonimal>** 1. Greetings  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\<anonimal>** 3. Contributor FFS check-in / status  
**\<anonimal>** 4. Meta Issue #27 : Where should we officially host the IRC server?  
**\<anonimal>** 5. Open Meta issue review https://github.com/monero-project/meta/issues  
**\<anonimal>** 6. Code + ticket discussion / Q & A  
**\<anonimal>** 7. Any additional meeting items  
**\<anonimal>** 8. Confirm next meeting date/time  
**\<anonimal>** SYN -\>  
**\<MoroccanMalinois>** hi  
**\<anonimal>** ACK \<-  
**\<anonimal>** Hi :)  
**\<sgp>** Hi!  
**\<rehrar>** Hi hi  
**\<anonimal>** Hi  
**\<ajs>** Sub  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\<anonimal>** SSU fixes have been merged, testnet fixes/features, new Inno Setup windows installers!, bash installer update (for all platforms), repo + build fixes/work, doc updates, kovri-docs + kovri-site work, resolinvg kovri-site/#6 (joy),  
**\<anonimal>** in addition to that (for me) PM collab work with rehrar on various issues. Did I miss anything?  
**\<rehrar>** 2. Should we name anonimal Kount Kovri?  
**\* anonimal** starts growing fangs  
**\<anonimal>** Anything else on 2.?  
**\<rehrar>** As for me, wife and I have been pouring lots of time into Kovri logo. We've got something new that's super cool (a new one you haven't seen yet anonimal) and I'm super excited to share it.  
**\<rehrar>** But not yet. ;)  
**\<anonimal>** Cool, I look forward to seeing it.  
**\<anonimal>** Was it a development on what you and I worked on earlier?  
**\<rehrar>** Also got my PGP key up to the repo, and am learning not to nuke website history  
**\<rehrar>** No, this one is a brand new, fresh idea. But we're developing the other two as well and have a cool direction for both  
**\<rehrar>** We'll show you guys soon when they're done and we can get opinions.  
**\<anonimal>** Ok  
**\<anonimal>** 3. Contributor FFS check-in / status  
**\<MoroccanMalinois>** i've submited a summary for a milestone  
**\<anonimal>** Link?  
**\<MoroccanMalinois>** https://forum.getmonero.org/9/work-in-progress/87082/proposal-for-kovri-dev  
**\<MoroccanMalinois>** sorry https://forum.getmonero.org/9/work-in-progress/87082/proposal-for-kovri-dev?page=&noscroll=1#post-91407  
**\<anonimal>** Thanks  
**\* anonimal** clicks  
**\<anonimal>** Very nice MoroccanMalinois, congratulations :)  
**\<MoroccanMalinois>** thanks :)  
**\* anonimal** will comment in that post  
**\<anonimal>** When can you start the next milestone (or have you already)?  
**\<MoroccanMalinois>** already started, i have a bunch of commits that just needs some run tests  
**\* MoroccanMalinois** should be full time on kovri for the next month  
**\<anonimal>** Woo hoo!  
**\<anonimal>** Sounds great :)  
**\<MoroccanMalinois>** :)  
**\<ajs>** :+1:  
**\<rehrar>** Goodjob.jpg  
**\<anonimal>** As for me on point 3., I'm at 94.151666666667 billable hours for this milestone but want to get more things resolved before submitting a summary for review.  
**\<anonimal>** Everytime I want to sit down and work on a very specific area, I end up having X number of project responsibilities that take me away from the few things I want to work on for that milestone.  
**\<anonimal>** *But* it's all needed, especially the testnet, so it all works out in the end.  
**\<MoroccanMalinois>** That's exactly what i hated most when i had a company (with employees)  
**\<anonimal>** Note: billable hours *doesn't* include the all the time at my machine when working on the project (most, but not all)  
**\<anonimal>** MoroccanMalinois: I hear you!  
**\<MoroccanMalinois>** :)  
**\<anonimal>** MoroccanMalinois: any thoughts/ideas on how to streamline our productivity?  
**\<anonimal>** We're the MEA now. We have MEAT tokens to take care of ;)  
**\<MoroccanMalinois>** lol  
**\* anonimal** oh wait, we should probably move that topic to the end of meeting, ajs is waiting  
**\<MoroccanMalinois>** k  
**\<anonimal>** Anything else on 3.?  
**\<rehrar>** Nyet  
**\<rehrar>** Нет  
**\<anonimal>** 4. Meta Issue #27 : Where should we officially host the IRC server?  
**\<rehrar>** It's Monero and Kovri right?  
**\* moneromooo** listens  
**\<anonimal>** This is tricky and requires auth from the core dev team. I don't think we have this written anywhere though we should.  
**\<anonimal>** Whoever has the kovri privkeys to the irc server, rules the universe.  
**\<ajs>** Got a test server up and running... Current open issues are here: https://github.com/alvinjoelsantos/ircxmr/issues  
**\<ajs>** It would be best if one of the core members runs the server  
**\<anonimal>** pigeons is running the i2p instance of getkovri, but I wonder if he's up for hosting an irc server too.  
**\<moneromooo>** What are the reasons one might want to host the IRC server elsewhere ?  
**\<anonimal>** To decentralize pigeons' workload/influence? I can't think of any others off the top of my head.  
**\<anonimal>** I don't trust any VPS not owned/ran by/maintained by a monero person.  
**\<anonimal>** \*core team or recommendation by core team  
**\<moneromooo>** OK, I've found the reason in #27.  
**\<moneromooo>** It's just the I2P part.  
**\<pigeons1[m]>** I'm assuming an irc server connected only to irc2p wouldnt be a bad resources and maintenance load, unlike a public ircd  
**\<anonimal>** lol oh yeah, I gave more reasons https://github.com/monero-project/meta/issues/27#issue-195122544  
**\<anonimal>** pigeons1[m]: yes, I don't think it would be as bad on resources or maintenance compared to a public ircd  
**\<anonimal>** I think permissions/jailing could be worked out so a 2nd person can ssh into the box to take care of the ircd instance if needed too.  
**\<anonimal>** And of course exclude them from any access to the kovri/i2p privkeys  
**\<pigeons1[m]>** Actually i heard from fluffy that the project is getting some infrastructure servers so we should be able to run that  
**\<anonimal>** Awesome! Is there an ETA for those machines? Would we have to wait on those before setting up the official ircd instance?  
**\<pigeons1[m]>** I dont know. Soon (tm)  
**\<rehrar>** I too have an interest in the ETA of the infrastructure servers.  
**\<anonimal>** Do we have machine space to start making something official now? pigeons1[m] would you even have the time to start setting that up with ajs?  
**\<pigeons1[m]>** I'll start looking into with ajs  
**\<anonimal>** Alright. ajs are you ok with that?  
**\<ajs>** Okay. Should we go with domain irc.kovri.i2p?  
**\<anonimal>** Yes, I believe I already registered that a long while ago. The keys are waiting to be used.  
**\* anonimal** checks  
**\<anonimal>** Yep.  
**\<anonimal>** Once we're all settled on our end is when we'd give notice to #irc2p about our instance and then integrate with the rest of irc2p. Otherwise we would be running a lone irc server.  
**\<ajs>** With relays?  
**\<anonimal>** Huh?  
**\<anonimal>** I don't understand the question.  
**\<ajs>** To connect with Slack, bots  
**\<ajs>** Or just run solo  
**\<anonimal>** Oh, we wouldn't need to do anything about that because those are regular "users" who simply connect.  
**\<rehrar>** We gun' be moving from Slack btw. It will die a horrible death that should please the OSS gods  
**\<moneromooo>** Oooh, OSS gods. I'll fork my own and play.  
**\<ajs>** Got it  
**\<anonimal>** That's great news. They will be pleased.  
**\<anonimal>** ajs: btw, https://github.com/alvinjoelsantos/ircxmr/blob/master/README.md says "freenet" but that is an actual project/technology. I think you meant "clearnet" instead.  
**\<anonimal>** Anyway, we can chat more about that after the meeting.  
**\<anonimal>** Anything else on 4. and the irc2p issue?  
**\<ajs>** Oops will correct  
**\<anonimal>** 5. Open Meta issue review https://github.com/monero-project/meta/issues  
**\* anonimal** reads  
**\<rehrar>** #70 is concerning  
**\<anonimal>** https://github.com/monero-project/meta/issues/46 \<-- the July 27th date has now been officially rescheduled for August 17th  
**\<anonimal>** 96boards had to reschedule our July 27th date. I got the email re: Aug 17th and it should be a packed show (at least 15 people on the call)  
**\<anonimal>** So we'll monero it up there.  
**\* anonimal** checks #70  
**\<rehrar>** #43 is dependent on the new logo  
**\<anonimal>** re: #70, rehrar what's concerning about it?  
**\<rehrar>** Because I'll be putting a sort of "outreach" package together, and I'd like the new branding nailed down.  
**\<rehrar>** That it's not closed. :P  
**\<anonimal>** lol  
**\<pigeons1[m]>** If anonimal types +resolved on a line by itself as a comment it will close in 10 minutes  
**\<anonimal>** re: #43, ok, but we really don't need to wait for the logo to resolve #43.  
**\<anonimal>** (re: #43, but I don't think anyone will jump at #43 until then anyway)  
**\<moneromooo>** The +resolved bot is live now ?  
**\<anonimal>** pigeons1[m]: yay, thanks pigeons  
**\<rehrar>** Well, other people can Call for Developers too, obviously.  
**\* anonimal** \+resolves moneromooo  
**\<pigeons1[m]>** moneromooo: for the meta repo it is  
**\<moneromooo>** I'm not try /close, nice try :P  
**\<moneromooo>** Oh OK.  
**\<anonimal>** This meta issuebot is nifty.  
**\<rehrar>** Pigeons, am I right in assuming that the new servers mentioned before will also be used for the Taiga and MatterMost?  
**\<pigeons1[m]>** Yes  
**\<rehrar>** Here you go pigeons: https://imgur.com/gallery/hRHyYNh  
**\<anonimal>** rehrar: I enjoyed those test instances of taiga + mattermost.  
**\<pigeons1[m]>** :)  
**\* anonimal** looks forward to going live  
**\<rehrar>** I'm working on an action plan to talk with some local universities and their CS departments regarding Monero/Kovri and will be handing out information packets if I can talk with some professors.  
**\<pigeons1[m]>** I would go over that with surae and surang who have a decent connection to acadamia  
**\<rehrar>** Maybe even see if they wouldn't be willing to give college credit for a student contributing to the project in a measurable way. I remember when I was in college that professors were looking for opportunities like that in the field (though I was in Biology)  
**\<rehrar>** I'll talk to them.  
**\<rehrar>** It's shooting high, and may be improbable, but if you never ask you never know.  
**\<moneromooo>** s/surang/sarang/  
**\<rehrar>** You know what they say, shoot for the moon, if you miss you will be in the deep black void of space and die alone. :(  
**\<rehrar>** Anyone know about opensource.com ?  
**\<anonimal>** Whoever ends up doing that could also expand into non-CS depts. Monero for all (with a computer).  
**\<rehrar>** They run articles every one in a while, and I was thinking about contacting them for maybe asking about what is needed for a Kovri article.  
**\<rehrar>** I don't know how much clout it has, but if frequent OSS contributors look at it (or a similar site), then it may bring us to the attention of some potentially interested people.  
**\<anonimal>** Media interaction is a probably a topic in it's own right. We're out of time though so let's move it to the next meeting or chat more after the meeting.  
**\<rehrar>** Anyways, sorry, just some ideas I've been having regarding outreach to devs.  
**\<anonimal>** Anything else on any open meta issues?  
**\<anonimal>** 6. Code + ticket discussion / Q & A  
**\<anonimal>** MoroccanMalinois and I do almost all code discussion outside of meetings. Anyone else on 6.?  
**\<anonimal>** 7. Any additional meeting items  
**\<rehrar>** No (Spanish for "no")  
**\<anonimal>** Nothing from me since we're out of time. rehrar will you post your idea(s) into #43?  
**\<rehrar>** Sure thing.  
**\<anonimal>** Thank you. We can bring it up at next meeting too if needed (but that sounds like a future issue).  
**\<anonimal>** 8. Confirm next meeting date/time  
**\<anonimal>** August 6th, 18:00 UTC?  
**\<anonimal>** (the ususal  
**\<anonimal>** )  
**\<rehrar>** Ye  
**\<anonimal>** Alright, thanks everyone!  
**\<anonimal>** And thanks dEBRUYNE for logging these meetings.  