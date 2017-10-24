---
layout: post
title: Logs for the Kovri Dev Meeting Held on 2017-08-20
summary: Brief review of what has been completed since last meeting, discussion of meta issues, and code & open tickets discussion
tags: [dev diaries, i2p, crypto]
author: dEBRUYNE / fluffypony
---

# Logs  

**\<anonimal>** 1. Greetings  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\<anonimal>** 3. Contributor FFS check-in / status  
**\<anonimal>** 4. Code + ticket discussion / Q & A  
**\<anonimal>** 5. Any additional meeting items  
**\<anonimal>** 6. Confirm next meeting date/time  
**\<anonimal>** Well hello  
**\<MoroccanMalinois>** hi  
**\<anonimal>** Just you and me, eh MoroccanMalinois?  
**\<moneromooo>** I'm here too, but I'm just reading.  
**\<rehrar>** I'm here  
**\<ajs>** here  
**\<rehrar>** bam, attendance more than doubled  
**\<anonimal>** Well there you go  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\<anonimal>** We had the 96boards webcast this past Thursday, so that was certainly a highlight.  
**\<anonimal>** It was nice to have that done since I had started coordinating it toward the beginning of this year.  
**\<rehrar>** I continued work on the new Kovri logo, but that has been put on hold indefinitely. I switched gears and started working on the Reddits. Got good amounts of work done and we are fixing to release the Monero subreddit new CSS here pretty soon. Kovri isn't far behind it. Then recently I'm also working on redoing the website a bit. Just a small restructure. Putting together some new wires for the pages.  
**\<anonimal>** I've finally back to NTCP work (yay). Various fixes and rewriting. Now working on a phaser implementation and separating messaging from session code.  
**\<ajs>** I passed along information to Pigeons about the irc server set up. He is looking into putting it up on a vps.  
**\<anonimal>** I've noticed various little issues along the way that will be fixed along the way  
**\<anonimal>** rehrar ajs: awesome  
**\<pigeons1[m]>** No not a vps a vm on a dedicated machine we just got  
**\<anonimal>** Oh even better  
**\<ajs>** cool  
**\<rehrar>** pigeons1[m]: fluffypony, any update on the infrastructure? :)  
**\<rehrar>** oh, maybe that was just the update :P sorry  
**\<pigeons1[m]>** rehrar: we got the machines and are moving things and configuring things. You can send me config info  
**\<rehrar>** I'll talk to Snipa and get them. He did the setting up and debugging.  
**\<rehrar>** I'm assuming it'd be too big a breach to have him help out?  
**\<anonimal>** Let's stay on track here  
**\<rehrar>** k sorry  
**\<anonimal>** re: brief review, I've been playing PM tag with sarang but finally have began email comms  
**\<anonimal>** I had sent him/her/it (assuming him) a list of various research related issues  
**\<anonimal>** but will now work him to hone in on specific areas of research.  
**\<anonimal>** I'm looking forward to this very much +1  
**\<anonimal>** Anything else for brief review?  
**\<anonimal>** Alrighty, 3. Contributor FFS check-in / status  
**\<anonimal>** I'm here. Busy as usual.  
**\<MoroccanMalinois>** nothing for this time  
**\<MoroccanMalinois>** (was mostly on vacation)  
**\<anonimal>** A well-deserved one too, I'm sure.  
**\<rehrar>** Back in full swing. Wife healed nicely.  
**\<MoroccanMalinois>** :)  
**\<anonimal>** MoroccanMalinois: was milestone 2 settled (payment, etc.)?  
**\<MoroccanMalinois>** nope  
**\<anonimal>** rehrar: good to hear  
**\<anonimal>** Uh oh, why not MoroccanMalinois?  
**\<MoroccanMalinois>** Not enough work :)  
**\<endogenic>** anonimal: re sarang i'm pleased to hear that  
**\<anonimal>** Oh, when I say milestone 2 I mean *your* milestone 1.  
**\<anonimal>** Because the FFS proposal is in 3 tranches, you took up the 2nd one (though it was your first).  
**\<anonimal>** \*2nd one and 3rd one (because 1st one was completed)  
**\<MoroccanMalinois>** ah  
**\<MoroccanMalinois>** i thought u were talking about the 3rd milestone  
**\<MoroccanMalinois>** that will be done tomorrow  
**\<anonimal>** re: sarang, my thanks to endogenic for coordinating our first connection  
**\<endogenic>** didn't do anything :P  
**\<anonimal>** MoroccanMalinois: ok so 2nd is all settled?  
**\<MoroccanMalinois>** No i have not contacted luigi yet (will do it tonight)  
**\<anonimal>** ok  
**\<anonimal>** Anything else on FFS check-in/status?  
**\<bigreddmachine>** (I'm here, nothing to report on the ff extension side, been very busy IRL)  
**\<anonimal>** I haven't read sarang's FFS (I hear he put out a new prorposal?)  
**\<anonimal>** Hi bigreddmachine, good to hear from you  
**\<anonimal>** re: FFS topic, does anyone have any specific input on what they'd want sarang to work on/look at re: kovri?  
**\<anonimal>** I had a healthy list for him but I think he'll want me to narrow down things.  
**\<rehrar>** I don't see a new one.  
**\* anonimal** has no idea, I probably shouldn't assume that  
**\<endogenic>** he's a network + crypto dude so i figured it might be possible to collaborate with him to produce a more elegant and simple form of i2p  
**\<bigreddmachine>** You talked on Thursday about simplifying the crypto smorgasbord in kovri... That might be a good place for sarang to focus at some point  
**\<anonimal>** Well when I was playing tag with him, I did ask him if he wanted to work on the anonymity system aspect or crypto; and he did say crypto.  
**\<anonimal>** But he's also more of a math guy, and the reduction of kovri crypto is almost entirely implementation defined (so he wouldn't need to do any work on that).  
**\<anonimal>** The cryptosystems we use could be looked at though, yes, for sure.  
**\<endogenic>** yeah i bet he could help vet the water tightness of existing or new schemes  
**\<endogenic>** and probably suggest alternate techniques for elements  
**\<endogenic>** just guessing  
**\<anonimal>** We'll see. Maybe he'll work on something before the next meeting.  
**\<anonimal>** I'd like him to look at our DSA prime for example. I'm sure that's something he could do.  
**\<anonimal>** But since we use libraries for most of our crypto, he may end up reviewing them.  
**\* anonimal** shrugs, we'll see  
**\<anonimal>** Anything else on FFS check-in?  
**\<anonimal>** k, 4. Code + ticket discussion / Q & A  
**\<MoroccanMalinois>** i have almost finished fixing #684. Will push later today  
**\<anonimal>** Cool +1  
**\<anonimal>** I'll merge #690. re: #690, I asked surae to look at my algo for aes-256 expanded key size but he didn't have time to look too deeply  
**\<anonimal>** The constant doesn't change, so it's not a huge deal, but things like this would be nice for sarang to review/chime-in with from time-to-time.  
**\<anonimal>** (yes, I said surae for first sentence and sarang for second)  
**\<anonimal>** (so confusing!)  
**\<anonimal>** Anything else on point 4.? I want to get to other points that rehrar and bigreddmachine were talking about.  
**\<anonimal>** MoroccanMalinois: \^  
**\<MoroccanMalinois>** nope  
**\<anonimal>** k  
**\<anonimal>** 5. Any additional meeting items  
**\<anonimal>** bigreddmachine: are you still planning on doing a podcast?  
**\<bigreddmachine>** Yes. I've had a busy summer so had to tick off some low hanging fruit with episodes. But I really think a talk with you (and any other key contribs) would be super.  
**\<bigreddmachine>** Maybe time it to be right around alpha release date?  
**\<anonimal>** Ok sure. Do you have a link to previous episodes (I didn't know you did them regularly/semi-regularly)?  
**\<bigreddmachine>** MoneroMonitor.com  
**\<i2p-relay> {-pigeons}** cool I didn't know about that one.  
**\<bigreddmachine>** Some probably more interesting that others to this crowd :)  
**\<anonimal>** Wow cool!  
**\<anonimal>** Do we have a podcast section on the monero site?  
**\<bigreddmachine>** Not sure. The Monero Missives were once the pseudo-official podcast  
**\<bigreddmachine>** But that's at least a year defunct now.  
**\<anonimal>** It would be nice to have links to things like this so they don't get flushed down the memory hole.  
**\<anonimal>** I'm not sure where they'd go though. Somewhere in the community section I imagine.  
**\<anonimal>** rehrar \^  
**\<bigreddmachine>** Yes I agree. But haven't been sure where either so haven't done a PR.  
**\<anonimal>** bigreddmachine: what's the best way to get in contact with you?  
**\<rehrar>** I'll think about it and see if we can't squeeze you into a place. :)  
**\<bigreddmachine>** In the near future I was to do episodrs on Love, Mimblewimble, with Surae, and probably Zooko on Zcash. And rehrar and I had discussed one too  
**\<rehrar>** Indeed.  
**\<bigreddmachine>** Anonimal, Securely or no?  
**\<anonimal>** Either or is fine. Secure by default? Over the months I've tried pinging you on IRC but you weren't around (I just wanted to ask about the podcast).  
**\<bigreddmachine>** moneromonitor@tutanota.com is a good email  
**\<bigreddmachine>** Yeah I can't log into irc at work... Got in trouble for that hah  
**\<anonimal>** oops!  
**\<anonimal>** Ok, will email you there when needed.  
**\<bigreddmachine>** If you ping me on irc with an "@" in front then slack should notify me though on my phone.  
**\<rehrar>** Imma hafta split here pretty soon. What do we need from me? :)  
**\<anonimal>** @bigreddmachine alright  
**\<bigreddmachine>** Yeah that worked perfect  
**\<anonimal>** rehrar: meeting ends in 4 minutes. You started talking infrastructure so if you had any more comments/questions?  
**\<bigreddmachine>** And then I can log into irc with encryption on that you taught me.  
**\<rehrar>** Oh, no. Not unless pigeons has anything more for me.  
**\<anonimal>** bigreddmachine: that fantabulous cryptos!  
**\<rehrar>** Oh, my question regarding Snipa. I'm assuming you'd just rather us shoot you config thingies? :)  
**\<anonimal>** (you \=\= pigeons?)  
**\<rehrar>** Oh, yes. Sorry for the confusion.  
**\<Snipa>** There's not much config needed for mattermost.  I pretty well did a basic clean install, then setup matterbridge with the guides on the site.  
**\<Snipa>** Hardest part was getting the webhooks to play nicely with each other, and seeing how they integrated.  
**\<rehrar>** The man himself, ladies and gentlemen!  
**\<anonimal>** Hi Snipa  
**\<rehrar>** And the Taiga? And then the Taiga  / MatterMost connection?  
**\<anonimal>** So we're 100% doing mattermost? I saw a few comments from people questioning/complaining.  
**\<Snipa>** That's the webhooks.  If there's a specific question, I'll be glad to answer it of course, but a direct copy of the configs won't be useful, as I very much deployed them quick and dirty.  
**\<rehrar>** As far as I know, yes. We got a second successful test and everything worked perfectly.  
**\<anonimal>** k  
**\<rehrar>** And we'll make a push to get people away from Slack  
**\<anonimal>** +1  
**\<anonimal>** Any other additional meeting items?  
**\<rehrar>** Not from me for the time being.  
**\<bigreddmachine>** Nope  
**\<MoroccanMalinois>** nope  
**\<hyc>** hey anonimal  
**\<anonimal>** Hi hyc  
**\<hyc>** on the 96boards mtg you suggested that only rsa4096 was needed  
**\<hyc>** why that instead of one of the EC mechs?  
**\<anonimal>** For reseed, yes.  
**\<anonimal>** I'll need to see what the reseed servers are capable of / require.  
**\<hyc>** afaik EC is smaller/faster/better  
**\* anonimal** agrees  
**\<hyc>** ok, just wondered and wanted to make sure  
**\<anonimal>** Awesome, thanks for the question :) I'll put on my TODO list  
**\<anonimal>** 6. Confirm next meeting date/time  
**\<anonimal>** Same time, two weeks from now?  
**\<bigreddmachine>** Sure I won't be there but thats not a big deal. I'll catch up with the minutes.  
**\<anonimal>** Ok  
**\<anonimal>** Thank you again everyone!  