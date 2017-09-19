---
layout: post
title: Logs for the Kovri Dev Meeting Held on 2016-10-02
summary: Brief review of what has been completed since last meeting, Salti (a Firefox extension similiar to the Tor Browser Bundle), Kovri Logo, code & open tickets discussion, Kovri API discussion, Kovri and Monero integration
tags: [dev diaries, i2p, crypto]
author: dEBRUYNE / fluffypony
---

### Overview

An overview [can be found on Hello Monero](https://hellomonero.com/article/monero-and-kovri-dev-meeting-note-highlights-2016-10-02)

### Logs

**\<fluffypony>** anonimal: all yours :)  
**\<meeting-bot> [anonimal]** 1. Greetings  
**\<meeting-bot> [anonimal]** 2. Brief review of what's been completed since the previous meeting  
**\<meeting-bot> [anonimal]** 3.  ∫alti https://github.com/EinMByte/salti  
**\<meeting-bot> [anonimal]** 4. "Kovri Garlic Router Project" + logo  
**\<meeting-bot> [anonimal]** 5. #46  
**\<meeting-bot> [anonimal]** 6. #337 https://geti2p.net/en/docs/naming  
**\<meeting-bot> [anonimal]** 7. API discussion with `#monero-dev` (#350 #351)  
**\<meeting-bot> [anonimal]** 8. Code + ticket discussion / Q & A  
**\<meeting-bot> [anonimal]** 9. Any additional meeting items  
**\<meeting-bot> [anonimal]** 10. Confirm next meeting date/time  
**\<meeting-bot> [anonimal]** 1. Greetings  
**\<meeting-bot> [i2p-relay] {-moneromooo}** UDP meeting  
**\<meeting-bot> [anonimal]** Hi  
**\<meeting-bot> [EinMByte]** Hi  
**\<meeting-bot> [anonimal]** 2. Brief review of what's been completed since the previous meeting  
**\<meeting-bot> [anonimal]** Areas of work done or completed since last meeting 3 weeks ago:  
**\<meeting-bot> [anonimal]** - Transports improvements/fixes and EinMByte's SSU branch was merged!  
**\<meeting-bot> [anonimal]** - Client/app improvements/fixes and client-crypto related (client signing type, https ciphers, etc.)  
**\<meeting-bot> [anonimal]** - Almost all Coverity issues resolved, still a handful left  
**\<meeting-bot> [anonimal]** - Fixes/enhancements and more  
**\<meeting-bot> [anonimal]** - pero's fantastic work with the logo  
**\<meeting-bot> [anonimal]** Oh, .ny new open issues - that's a good thing though, right? ;)  
**\<fluffypony>** lol  
**\<meeting-bot> [anonimal]** Anything else did I miss for 2. or move onto 3.?  
**\<meeting-bot> [EinMByte]** No, go ahead. I have only limited time so let's be productive  
**\<fluffypony>** 3 plz  
**\<meeting-bot> * anonimal** having hard time keeping track of all the work that passes over several weeks; its usually a very broad range of areas  
**\<meeting-bot> [anonimal]** 3.  ∫alti https://github.com/EinMByte/salti  
**\<meeting-bot> [anonimal]** So, EinMByte and I are starting preliminary work on a firefox extension that will tremendously help Kovri and I2P  
**\<meeting-bot> [anonimal]** I just want to mention this here in case there are any interested webdevs  
**\<meeting-bot> [anonimal]** Anything you want to add EinMByte?  
**\<fluffypony>** Salti is basically like the Kovri GUI :-P  
**\<meeting-bot> [EinMByte]** fluffypony: No it isn't  
**\<meeting-bot> [EinMByte]** The kovri GUI is called qtoopie  
**\<meeting-bot> [anonimal]** EinMByte: no, the GUI does not exist yet.  
**\<meeting-bot> [anonimal]** qtoopie is an i2pcontrol client.  
**\<meeting-bot> [EinMByte]** Salti is a firefox add-on similar to Tor browser bundle  
**\<fluffypony>** lol  
**\<meeting-bot> [EinMByte]** anonimal: Yes (but see also the relevant zzz.i2p thread from long ago)  
**\* fluffypony** was making a joke  
**\<meeting-bot> * anonimal** doesn't have time to search zzz.i2p, link appreciated  
**\<meeting-bot> [anonimal]** Any webdevs present?  
**\<meeting-bot> * EinMByte** doesn't have time to find zzz.i2p topic  
**\<patthehuman>** i could technically be a webdev  
**\<patthehuman>** im c/c++ swift/obj-c nodejs/MEAN stack  
**\<meeting-bot> [anonimal]** Hi patthehuman. Have you done any work with firefox add-ons?  
**\<patthehuman>** no, however, i dont think it would be very difficult  
**\<meeting-bot> [EinMByte]** We won't be needing very complex stuff by the way, just using the webextensions API  
**\<patthehuman>** would it be chrome and firefox..?  
**\<meeting-bot> [anonimal]** patthehuman: webext I believe could support both? but we're aiming for firefox.  
**\<meeting-bot> [EinMByte]** (we'll be setting a few settings and intercepting a few requests)  
**\<meeting-bot> [EinMByte]** patthehuman: yes  
**\<patthehuman>** mk  
**\<meeting-bot> [anonimal]** patthehuman: we can give more details after the meeting if you idle #kovri-dev  
**\<meeting-bot> [EinMByte]** (although initially firefox, but the API should be mostly the same)  
**\<patthehuman>** ok  
**\<meeting-bot> [anonimal]** Anything else on 3.?  
**\<patthehuman>** ill stick around, interested in hearing full scale  
**\<meeting-bot> [EinMByte]** Let's move to 4  
**\<meeting-bot> [anonimal]** 4. "Kovri Garlic Router Project" + logo  
**\<meeting-bot> [anonimal]** pero: you there?  
**\<pero>** yep  
**\<pero>** want me to take over?  
**\<meeting-bot> [anonimal]** What do you have for us today?  
**\<meeting-bot> [anonimal]** Let's spend very little time with the visual aspect, we have bigger issues to tackle with kovri  
**\<meeting-bot> [anonimal]** Just a run down so everyone knows where we are  
**\<meeting-bot> [anonimal]** And links if possible  
**\<pero>** http://imgur.com/a/ptOHb  
**\<pero>** after a 'long' process we're down to 3 fonts  
**\<pero>** the idea is to pick the font with the best looking letters that comprise the word kovri  
**\<meeting-bot> [anonimal]** And what about https://i.imgur.com/UDsSuTg.png  
**\<pero>** and/or eliminate some concepts  
**\<meeting-bot> [anonimal]** I guess Coral is out of the question  
**\<patthehuman>** lato second from bottom  
**\<pero>** yea coral was cut  
**\<pero>** work sans is largely similar and coral seemed inferior on some letters as well as less versatile at smaller font sizes iirc  
**\<meeting-bot> [EinMByte]** I'd also drop open sans  
**\<pero>** in the 'a' system  
**\<pero>** exo 2 is the logo font - but it doesn't work as well for text  
**\<pero>** so i chose open sans to complement it  
**\<meeting-bot> [EinMByte]** Sorry, I mean the exp 2 / open sans combination  
**\<pero>** a5 features exo2 as subtext so you can see how that would look like  
**\<meeting-bot> [EinMByte]** But overall, the differences are really minor. Just trying to reduce the search space  
**\<pero>** i personally think not going with A or B would be a mistake  
**\<pero>** their K is really nice and adds a subtle touch of personality  
**\<meeting-bot> [anonimal]** pero: its unfair because I can't accurately compare c4 because of orange subtext  
**\<pero>** hmm  
**\<meeting-bot> [anonimal]** I prefer work sans because the k contracts with the orange curve in the garlic  
**\<meeting-bot> [anonimal]** So is our next step font?  
**\<pero>** http://imgur.com/a/DOcyy  
**\<meeting-bot> [anonimal]** Is subtext really that thick with work sans? Eww  
**\* fluffypony** isn't wild about the orange subtext   
**\<pero>** yea the orange subtext sucks imo  
**\<meeting-bot> [EinMByte]** Ok, let's handle this another time  
**\<meeting-bot> [EinMByte]** (or use a random number generator)  
**\<pero>** no it could be thinner  
**\<meeting-bot> [EinMByte]** Let's go with column b then  
**\<meeting-bot> [anonimal]** lol no way on the random gen  
**\<fluffypony>** lol random number gen could be fun  
**\<pero>** imgur is also 'optimizing' the png  
**\<fluffypony>** "best of 3?"  
**\<pero>** keep in mind ^^^  
**\<endogenic>** just my two cents - you probably want the text to be relatively heavier than the logo so it jumps out because it's not an english or otherwise generally known word, and so the logo imo should be visually secondary when composed with the name. think about readability, especially if the user doesn't have 20/20 vision or is in a hurry  
**\<endogenic>** the actual face itself is not a huge issue imo  
**\<meeting-bot> [anonimal]** pero: let's narrow down our options to rows 2, 4, and 6  
**\<meeting-bot> [anonimal]** Can you throw those onto a page?  
**\<pero>** there probably will be instances where the 'router project' text is unnecessary  
**\<fluffypony>** I think rows 3 and 4 won't work because, as endogenic pointed out, kovri is not an English word  
**\<fluffypony>** looks like kavri  
**\<pero>** and just the logo and kovri would suffice  
**\<meeting-bot> [anonimal]** Are we all talking about https://i.imgur.com/Ge1FZTp.png ?  
**\<pero>** ideally as a brand it should be able to stand out on its own  
**\<meeting-bot> [EinMByte]** Yes, the garlic as an "o" could be confusing  
**\<fluffypony>** anonimal no, I'm looking at http://imgur.com/a/DOcyy  
**\<meeting-bot> [anonimal]** Same thing  
**\<endogenic>** pero: for that reason consider favoring options with tighter kerning  
**\<fluffypony>** oh  
**\<fluffypony>** lol  
**\<meeting-bot> [anonimal]** Who in their right mind things that garlic is an 'A'?  
**\<pero>** another thing to add  
**\<meeting-bot> [EinMByte]** So let's narrow it down to 2 and 6  
**\<meeting-bot> [i2p-relay] {-ArticMine}** 2 in Open Sans is the most readable  
**\<pero>** the garlic wasn't designed with this use in mind  
**\<pero>** the garlic could be optimized down the road  
**\<meeting-bot> [EinMByte]** anonimal: Remember that the spectator potentially doesn't know "kovri"  
**\<pero>** ideally after a font has been chosen  
**\<pero>** to more resemble an o and to slide seamlessly into the font  
**\<meeting-bot> [EinMByte]** At least it might add additional confusion, which is bad  
**\<endogenic>** EinMByte: exactly. the question is how it could be confirmed it's not an A  
**\<meeting-bot> [anonimal]** Ok, all in favor of exo2  
**\<pero>** i'm however not qualified to do that  
**\<meeting-bot> [anonimal]** Any votes for exo2/open sans?  
**\<meeting-bot> [i2p-relay] {-ArticMine}** Yes  
**\<meeting-bot> [EinMByte]** exo2 is fine for me, but I also agree that the "Garlic Routing Project" text should be optional  
**\<meeting-bot> [i2p-relay] {-ArticMine}** exo2 is fine  
**\<meeting-bot> [EinMByte]** (So on the website, for example, we should have the text. But potentially not everywhere)  
**\<meeting-bot> [EinMByte]** Any objections against exo2?  
**\<meeting-bot> [anonimal]** I count 2 votes for exo2/open sans.  
**\<meeting-bot> [anonimal]** Any votes for Lato?  
**\<pero>** i vote lato  
**\<meeting-bot> [EinMByte]** Any votes for work sans?  
**\<endogenic>** i also like lato  
**\<fluffypony>** lato from my side  
**\<meeting-bot> [EinMByte]** Ok, let's eliminate work sans.  
**\<meeting-bot> [anonimal]** 3 votes for Lato.  
**\<meeting-bot> [anonimal]** Any votes for Work Sans?  
**\<meeting-bot> [anonimal]** 0 votes for Work Sans  
**\<meeting-bot> [anonimal]** I haven't voted  
**\<meeting-bot> * anonimal** looks  
**\<patthehuman>** i vote for Lato  
**\<meeting-bot> [EinMByte]** Are we going to decide on the logo today or not? If so, we should hurry (if we want to discuss API still)  
**\<meeting-bot> [anonimal]** pero: why does a6 look so fat?  
**\<pero>** shouldn't be that difficult to throw up exo2 versions of lato variants in the future  
**\<pero>** in case that's still up for debatable  
**\<meeting-bot> [anonimal]** EinMByte that's up to moneromooo because I really don't think anyone else there is interested in API chat (afaict)  
**\<pero>** because it is fat :P  
**\<patthehuman>** yb  
**\<meeting-bot> [i2p-relay] {-ArticMine}** I have to leave  
**\<patthehuman> im interested in api cha  
**\<endogenic>** maybe we should have a #monero-design? :)  
**\<meeting-bot> [anonimal]** EinMByte if we don't decide soon, website doesn't get done  
**\<pero>** i went with a heavier weight for that variant arbitrarily  
**\<meeting-bot> [i2p-relay] {-moneromooo}** I have no particular wish about that, don't mind me.  
**\<fluffypony>** let's move ahead  
**\<fluffypony>** the logo already took up the entire last meeting  
**\<meeting-bot> [anonimal]** 3 minutes  
**\<meeting-bot> [anonimal]** Let me vote please!  
**\<meeting-bot> [EinMByte]** We should at least plan when to discuss the API, so let's decide quickly on the logo :)  
**\<patthehuman>** LATO  
**\<meeting-bot> [anonimal]** pero: why should I choose exo2  
**\<pero>** its advantage seems to be technological look  
**\<meeting-bot> [EinMByte]** anonimal: Please decide, we're moving too slowly here  
**\<pero>** a secondary adv is that we can pair with open sans which is extremely versatile  
**\<meeting-bot> [anonimal]** EinMByte, we have 30 minutes, please be patient.  
**\<pero>** can be used at extremely small sizes for things like massive tables of data  
**\<pero>** whereas using open sans to complement a lato branding scheme wouldn't make much sense  
**\<meeting-bot> [anonimal]** pero: how about this: can you whip up another sample for after the meeting but *only* exo2 and lato and doing various sizes that you think are appropriate?  
**\<pero>** i think that makes the most sense as a next step  
**\<meeting-bot> [anonimal]** We can probably come to a final conclusion post-meeting or sometime this week.  
**\<meeting-bot> [anonimal]** Ok, thanks pero.  
**\<meeting-bot> [anonimal]** Moving on,  
**\<meeting-bot> [anonimal]** 5. #46  
**\<meeting-bot> [anonimal]** fluffypony: ^  
**\<meeting-bot> [EinMByte]** fluffypony...  
**\<pero>** did you skip over the 'garlic router' discussion?  
**\<fluffypony>** ok - got a first draft to push up, but need to finish fixing the forum first  
**\<meeting-bot> [anonimal]** pero: just go with it for now but also do without subtext too please  
**\<meeting-bot> [EinMByte]** ETA?  
**\<patthehuman>** whats wrong with the forum?  
**\<pero>** ok  
**\<fluffypony>** EinMByte: no clue  
**\<fluffypony>** patthehuman: PHP7 broke a bunch of stuff  
**\<meeting-bot> [anonimal]** patthehuman: fluffypony is fixing it  
**\<patthehuman> ok  
**\<fluffypony>** some of it was non-obvious until we had a new dep and composer wrecked everything  
**\<patthehuman>** ill be around if you need help  
**\<meeting-bot> [EinMByte]** Let's not discuss the monero forum here  
**\<patthehuman>** php7 wrecked a lot of my shit at work so ive been down this path  
**\<patthehuman>** sure  
**\<meeting-bot> [anonimal]** fluffypony: should EinMByte and I not ask for ETA for website?  
**\<fluffypony>** anonimal: I'll push my changes once the forum is back up, since all static objects are served off that repo anyway  
**\<meeting-bot> [anonimal]** Worst case scenario, we release with just a repo and wiki.  
**\<meeting-bot> [anonimal]** Ok, moving on  
**\<meeting-bot> [anonimal]** 6. #337 https://geti2p.net/en/docs/naming  
**\<meeting-bot> [anonimal]** What happens is that any addresses that are saved with an addresshelper are simply inserted into ./addressbook but not user_hosts.txt (or similar)  
**\<meeting-bot> [anonimal]** There are also various other issues, let me pull up the ticket  
**\<meeting-bot> [anonimal]** "For this ticket, we should discuss if we're to have separate subscription files because we currently only use hosts.txt. Also, if we hand edit the file, it will be overridden upon next fetch from a any publisher.  
**\<meeting-bot> [anonimal]** With a little design work, we can easily implement other files that won't be overridden. There's also the question of whether we want to have separate files for separate publishers."  
**\<meeting-bot> [EinMByte]** Easiest would be to add an additional file that's user-configurable, but maybe it's nicer to just update incrementally  
**\<meeting-bot> [anonimal]** hosts.txt is updated every 12 hours. I think we should have user-configurable too.  
**\<meeting-bot> [EinMByte]** (although that prings additonal problems)  
**\<meeting-bot> [EinMByte]** \*brings additional  
**\<meeting-bot> [Zenified]** >prings?  
**\<meeting-bot> [EinMByte]** So lets have "hosts.txt" and several other files for the different subscriptions?  
**\<meeting-bot> [anonimal]** Yes, that was the idea. I guess the question was how many:  
**\<meeting-bot> [EinMByte]** one for each subscription  
**\<meeting-bot> [EinMByte]** If there's conflicts, they would ideally be reported to the user  
**\<meeting-bot> [anonimal]** That'll be tricky if each publisher calls their subscription hosts.txt, we can rename/adjust as needed or concatenate it into on user_hosts.txt  
**\<meeting-bot> [anonimal]** \*a user_hosts.txt  
**\<meeting-bot> [anonimal]** And duplicates would be wasteful  
**\<meeting-bot> [anonimal]** (this whole I2P naming scheme is annoying)  
**\<meeting-bot> [EinMByte]** We should rename the files locally  
**\<meeting-bot> [anonimal]** You mean expect the user to call it whatever they want?  
**\<meeting-bot> [EinMByte]** The only hosts.txt file would be the one that the user can change?  
**\<meeting-bot> [anonimal]** No, hosts.txt would always be static and provided upstream, always overridden every 12 hours  
**\<meeting-bot> [EinMByte]** No, when downloading a subscription, put it in a dedicated file?  
**\<meeting-bot> [anonimal]** I'm not sure what you're getting at  
**\<meeting-bot> [EinMByte]** Ok, so you want "user_hosts.txt" to be a wile with custom hosts?  
**\<meeting-bot> [EinMByte]** \*file  
**\<meeting-bot> [EinMByte]** That would also work, sure.  
**\<meeting-bot> [anonimal]** We only need 2: one that's always clobbered every 12 hours, and one that's never clobbered  
**\<meeting-bot> [anonimal]** The one that's never clobbered needs a name. It's "custom" and "private" though.  
**\<meeting-bot> [anonimal]** Also, should every address added with i2paddresshelper \*also\* be inserted into said custom file.  
**\<meeting-bot> [EinMByte]** Yes, but we want multiple subscriptions right?  
**\<meeting-bot> [anonimal]** I don't even think java i2p does that, but I think it should be done.  
**\<meeting-bot> [EinMByte]** But not all publishers provide the same set of hosts  
**\<meeting-bot> [EinMByte]** Hence, the need for several hosts.txt files that care clobbered every 12 hours  
**\<meeting-bot> [EinMByte]** \*are  
**\<meeting-bot> [anonimal]** Ok, we'll just have to name subscriptions by uri.host()  
**\<meeting-bot> [EinMByte]** Yes, I guess so  
**\<meeting-bot> [anonimal]** and make a private_hosts.txt that is *never* clobbered  
**\<meeting-bot> [anonimal]** That actually makes the most sense now, imho.  
**\<meeting-bot> [EinMByte]** Yes, that or have an actual database of hosts rather than a bunch of files  
**\<meeting-bot> [anonimal]** We can deal with duplicates and effiency later unless it becomes a massively huge issue.  
**\<meeting-bot> [anonimal]** Yeah, a *real* Db  
**\<meeting-bot> [anonimal]** While we're at it we can consider that for ./NetDb  
**\<meeting-bot> [EinMByte]** But if we get a real database, it should also be used for profiles etc  
**\<meeting-bot> [anonimal]** Didn't i2pcpp do something like that?  
**\<meeting-bot> [EinMByte]** Yes, it used sqlite  
**\<meeting-bot> [anonimal]** Why was that not continued/exploited?  
**\<meeting-bot> [anonimal]** Was it not 'efficient' enough for the magician?  
**\<meeting-bot> [EinMByte]** For the same reason that i2pcpp was not continued  
**\<fluffypony>** you can always use LMDB  
**\<meeting-bot> [EinMByte]** i2pd isn't based on i2pcpp at all  
**\<meeting-bot> [anonimal]** I know, but he obviously looked at it.  
**\<meeting-bot> [anonimal]** I don't like how one can't use network filesystems with LMDB  
**\<meeting-bot> [EinMByte]** Yes, but decided not add the dependency or so  
**\<meeting-bot> [EinMByte]** So let's create an issue for using an actual database?  
**\<meeting-bot> [anonimal]** EinMByte then I think we should research sqlite or LMDB or some other option for a longterm database solution. Sound reasonable?  
**\<meeting-bot> [EinMByte]** Yes  
**\<meeting-bot> [anonimal]** Ok, anything else on addressbook?  
**\<fluffypony>** I think it's all been addressed  
**\<meeting-bot> [EinMByte]** Can you create the issue? If so, let's move on to 7  
**\<meeting-bot> [anonimal]** Done, #385  
**\<meeting-bot> [anonimal]** 7. API discussion with #monero-dev (#350 #351)  
**\<meeting-bot> [EinMByte]** Monero developers here?  
**\<meeting-bot> [i2p-relay] {-moneromooo}** Yes  
**\<meeting-bot> [EinMByte]** What I mainly want is a clear set of requirements for the API  
**\<meeting-bot> [i2p-relay] {-moneromooo}** Oh I see. Oh. Hmm.  
**\<fluffypony>** yes  
**\<meeting-bot> [i2p-relay] {-moneromooo}** Well, I'm not very much acquainted with the way CN P2P works in the first place...  
**\<meeting-bot> [EinMByte]** e.g. do you want to use streaming, I2NP directly, datagrams...?  
**\<meeting-bot> [i2p-relay] {-moneromooo}** It's all TCP, with a simple HTTP server at hte moment.  
**\<meeting-bot> [Zenified]** LMDB is the the real deal  
**\<meeting-bot> [i2p-relay] {-moneromooo}** Doesn't mean it has to stay that way though.  
**\<meeting-bot> [EinMByte]** So you need connections? Probably streaming then  
**\<meeting-bot> [anonimal]** Question: how is monero-core currently talking with monerod?  
**\<meeting-bot> [EinMByte]** The main question to ask is whether you need 1) reliability 2) connections  
**\<meeting-bot> [i2p-relay] {-moneromooo}** fluffypony: did you intend to replace the P2P stuff with 0MQ ?  
**\<meeting-bot> [anonimal]** EinMByte I thought we discussed not doing network-based API  
**\<meeting-bot> [i2p-relay] {-moneromooo}** anonimal: JSON RPC AFAIK.  
**\<fluffypony>** anonimal: JSON RPC API, but we're replacing that with 0MQ  
**\<fluffypony>** but Kovri will serve the p2p layer  
**\<fluffypony>** not the RPC layer  
**\<fluffypony>** moneromooo: yes with ZMTP  
**\<fluffypony>** http://zmtp.org  
**\<fluffypony>** maybe we bundle the ZMTP change and Kovri integration together ?  
**\<meeting-bot> [EinMByte]** anonimal: No, but we need to know what aspects of the API are most important  
**\<meeting-bot> [EinMByte]** e.g. do we need to focus on making I2NP accessible, or on making streaming accessible  
**\<meeting-bot> [EinMByte]** Or does monero want to be able to create tunnels, etc.  
**\<meeting-bot> [anonimal]** I think monero wants something as simple as a SOCKS proxy  
**\<meeting-bot> [i2p-relay] {-moneromooo}** We need to be able to find peers without knowing their address in advance.  
**\<meeting-bot> [anonimal]** If connection isn't made, tough luck and try again later  
**\<meeting-bot> [anonimal]** Oh, nevermind then  
**\<meeting-bot> [i2p-relay] {-moneromooo}** At the moment, this is done by bootstrapping from a seed server.  
**\<fluffypony>** moneromooo: DNS seeds  
**\<meeting-bot> [EinMByte]** So 0MQ would be TCP-based, so would use streaming  
**\<fluffypony>** yeah so we can do the same  
**\<meeting-bot> [i2p-relay] {-moneromooo}** That... might be DNS ? I'm not sure.  
**\<fluffypony>** we get seed nodes from DNS seeds with hardcoded fallbacks  
**\<fluffypony>** and then we connect to their .i2p address on the appropriate port  
**\<meeting-bot> [i2p-relay] {-moneromooo}** And all the DNSSEC or DNScrypt that fluffypony knows about.  
**\<fluffypony>** and request peers  
**\<fluffypony>** and we get a list of .i2p addresses and ports  
**\<meeting-bot> [EinMByte]** Do you want to create a tunnel and then connect to that, or do you want to have a C++ API to also send messages?  
**\<meeting-bot> [anonimal]** Has monero-side drawn up any diagrams for these ideas?  
**\<fluffypony>** anonimal: that's how it currently works, not ideas  
**\<meeting-bot> [i2p-relay] {-moneromooo}** Is there a concept of "multicast", where we could send a query to "whomever it may concern" ?  
**\<meeting-bot> [anonimal]** fluffypony: you currently get a list of .i2p address and ports?  
**\<fluffypony>** EinMByte: we can do either  
**\<meeting-bot> [EinMByte]** moneromooo: No, don't think so  
**\<fluffypony>** anonimal: we currently get ipv4 addresses, but we'd perform exactly the same function to get i2p-based peers  
**\<meeting-bot> [EinMByte]** moneromooo: But I can think about multicast in future I2P and even get a proposal going, but it would take years before we actually get it  
**\<meeting-bot> [i2p-relay] {-moneromooo}** The intent, in this case, would be to request replies from peers that run monero.  
**\<meeting-bot> [i2p-relay] {-moneromooo}** (without having to rely on centralized seeds)  
**\<meeting-bot> [EinMByte]** So for DNS, you could use repliable datagrams or streaming.  
**\<meeting-bot> [anonimal]** EinMByte moneromooo: multicast is mentioned in future work https://geti2p.net/en/docs/how/garlic-routing  
**\<fluffypony>** DNS seed nodes work, I really don't think we need to replace that  
**\<fluffypony>** but what we would do on first sync is get both ipv4 *and* i2p peers  
**\<meeting-bot> [EinMByte]** anonimal: Yes, but there's no decent proposal right now. I also need to check out the LS2 proposal, it somewhat relates  
**\<meeting-bot> [EinMByte]** fluffypony: Ok, assuming you can store I2P addresses in DNS records  
**\<meeting-bot> [anonimal]** moneromooo: proposals also sit there for years so I wouldn't expect anything to happen anytime soon  
**\<fluffypony>** after that a node maintains its own white / black / gray lists, and gets a peerlist every time it connects to a new peer  
**\<fluffypony>** EinMByte: TXT records :)  
**\<meeting-bot> [EinMByte]** fluffypony: Ok.  
**\<meeting-bot> [i2p-relay] {-moneromooo}** It's something that seems fairly self contained anyway, so could be changed at a later date.  
**\<meeting-bot> [EinMByte]** So you need to decide between 1) use I2P direcly with a C++ API 2) create tunnels using a C++ API and then connect to them with SOCKS or so  
**\<meeting-bot> [i2p-relay] {-moneromooo}** I don't know the difference between these options.  
**\<meeting-bot> [anonimal]** I don't think they need to care about creating tunnels  
**\<meeting-bot> [EinMByte]** In any case kovri wants to provide the API to do 1  
**\<fluffypony>** yes - and I'd probably lean towards the C++ API  
**\<meeting-bot> [anonimal]** They need to know if they can get through or not, that's a given though.  
**\<meeting-bot> [EinMByte]** So it looks like monero would be using esentially use the streaming API?  
**\<meeting-bot> [i2p-relay] {-moneromooo}** I'd imagine something that looks like a socket API, just using I2P addresses instead of IP:port :)  
**\<meeting-bot> [EinMByte]** s/use//  
**\<meeting-bot> [i2p-relay] {-moneromooo}** By streaming, do you mean TCP ?  
**\<meeting-bot> [EinMByte]** But maybe for DNS you'd also want repliable datagrams  
**\<meeting-bot> [anonimal]** I can't answer for them until one of them sits down and reads the spec  
**\<meeting-bot> [EinMByte]** moneromooo: streaming is something that looks a lot like TCP but over I2P  
**\<meeting-bot> [i2p-relay] {-moneromooo}** Then that's what we'd use in a straight port, modulo the seed stuff.  
**\<meeting-bot> [EinMByte]** Most applications use streaming one way or another  
**\<meeting-bot> [EinMByte]** I don't know your architecture, but it may be simpler to create a tunnel if you want to route everything to I2P  
**\<meeting-bot> [EinMByte]** \*through  
**\<meeting-bot> [anonimal]** fluffypony moneromooo: what were the arugments against using SOCKS proxy?  
**\<meeting-bot> [i2p-relay] {-moneromooo}** By creating a tunnel, do you mean selecting the hoops directly ?  
**\<fluffypony>** no arguments - we have no idea what you'd recommend :)  
**\<meeting-bot> [anonimal]** EinMByte: KISS  
**\<meeting-bot> [EinMByte]** moneromooo: using tunnel in the client-like context here, like a local SOCKS proxy which delivers to a dedicated I2P endpoint  
**\<meeting-bot> [anonimal]** monero: we have to meet half-way somehow. I'll try to dig into more monero if you guys can dig into more kovri.  
**\<meeting-bot> [EinMByte]** SOCKS seems overly complicaed  
**\<meeting-bot> [EinMByte]** \*complicated  
**\<meeting-bot> [anonimal]** IMHO, we should be more on a level playing field at least term wise by now.  
**\<fluffypony>** anonimal: we'll implement whatever you guys recommend  
**\<meeting-bot> [EinMByte]** If you need many connections, you can't use the "create a local SOCKS proxy" or so  
**\<meeting-bot> [anonimal]** EinMByte: how so? In terms of providing useful feedback and control, yes.  
**\<meeting-bot> [i2p-relay] {-moneromooo}** We need several, yes. They're fairly long term. Some will go down, and will be replaced.  
**\<meeting-bot> [EinMByte]** Then it would be a lot easier to create tunnels (which use e.g. the streaming protocol) using the C++ API  
**\<meeting-bot> [i2p-relay] {-moneromooo}** Both directions, btw. No client/server.  
**\<meeting-bot> [EinMByte]** Streaming is both ways, sure  
**\<meeting-bot> [EinMByte]** datagrams can also be (if repliable)  
**\<meeting-bot> [anonimal]** Ok, so easiest for us is C++ API but is ZMTP worth the extra work?  
**\<meeting-bot> [EinMByte]** anonimal: I don't think ZMTP matters to us.  
**\<meeting-bot> [i2p-relay] {-moneromooo}** I'd imagine ZMTP is a layer above, and kovri would be oblivious to it.  
**\<meeting-bot> [anonimal]** Good.  
**\<meeting-bot> [anonimal]** So streaming or datagrams or both?  
**\<meeting-bot> [EinMByte]** Question is whether using ZMTP would actually be useful when used above I2P, but I'll leave that to monero devs  
**\<meeting-bot> [i2p-relay] {-moneromooo}** Both, please :)  
**\<meeting-bot> [EinMByte]** But let's focus on streaming  
**\<meeting-bot> [EinMByte]** (since most I2P applications currently use streaming)  
**\<meeting-bot> [i2p-relay] {-moneromooo}** But streaming first, yes. We can hardcode peer ids to start with.  
**\<fluffypony>** I guess parts of ZMTP would be useless (eg. end-to-end encryption)  
**\<meeting-bot> [anonimal]** Ok, C++ API for streaming. That's entirely on us then, for starters.  
**\<meeting-bot> [anonimal]** Is this written in stone now EinMByte moneromooo fluffypony?  
**\<meeting-bot> [EinMByte]** Let's say it is and move to 8  
**\<meeting-bot> [i2p-relay] {-moneromooo}** To the extent I know of how CN uses the network... -_- :D  
**\<fluffypony>** yes  
**\<meeting-bot> [anonimal]** Yay, big decision step done.  
**\<yardman>** whats set in stone?  
**\<meeting-bot> [anonimal]** Anything else on 7.?  
**\<meeting-bot> [anonimal]** I have one question:  
**\<fluffypony>** nope  
**\<fluffypony>** yardman: using the i2p C++ API for streaming  
**\<meeting-bot> [anonimal]** What homework can we all do so our next API meeting is more productive?  
**\<meeting-bot> [anonimal]** kovri c++ API  
**\<meeting-bot> [EinMByte]** Design it  
**\<meeting-bot> [i2p-relay] {-moneromooo}** Well, I have that feeling that the next month or two will be spent on rct performance from my side...  
**\<fluffypony>** anonimal: we haven't really focused on our current p2p layer because of the ZMTP plan  
**\<meeting-bot> [anonimal]** moneromooo: you mentioned I should look at networking code?  
**\<yardman>** thanks  
**\<meeting-bot> [i2p-relay] {-moneromooo}** I didn't, I think. I mentioned I should :D  
**\<meeting-bot> [anonimal]** Oh, lol ok  
**\<meeting-bot> [i2p-relay] {-moneromooo}** IIRC that p2p code is also kinda new and unfinished.  
**\<fluffypony>** so I don't know if we should waste much time on analysis of it, or rather look at i2p as a ZMTP transport  
**\<fluffypony>** which could be a VERY nice generalised solution  
**\<fluffypony>** that isn't Monero-specific  
**\<meeting-bot> [anonimal]** Ok, I'll add API for first thing next meeting.  
**\<meeting-bot> [anonimal]** Anything else for 7.?  
**\<fluffypony>** nope  
**\<meeting-bot> [EinMByte]** Nope, 8 please (need to leave soon)  
**\<meeting-bot> [anonimal]** 8. Code + ticket discussion / Q & A  
**\<meeting-bot> [anonimal]** We're in overtime, I have nothing to say at the moment really.  
**\<meeting-bot> [anonimal]** fluffypony I think there's an assigned ticket you can easily close  
**\<meeting-bot> [EinMByte]** Me neither, let's discuss when appropriate  
**\<meeting-bot> [anonimal]** (the codedocs one)  
**\<meeting-bot> [EinMByte]** Will see how much time I get to do v6 peer testing  
**\<fluffypony>** ok will do  
**\<meeting-bot> [anonimal]** I'll get to more assigned tickets as well.  
**\<meeting-bot> [anonimal]** Ok, moving on.  
**\<meeting-bot> [EinMByte]** Also not sure if #187 should still be open  
**\<meeting-bot> [anonimal]** 9. Any additional meeting items  
**\<meeting-bot> [anonimal]** EinMByte, ok I'll take a look after the meeting.  
**\<meeting-bot> [EinMByte]** Ok, no additional meeting items from me  
**\<meeting-bot> [anonimal]** Nor I. fluffypony?  
**\<meeting-bot> [anonimal]** moneromooo?  
**\<fluffypony>** nope  
**\<meeting-bot> [anonimal]** #monero-dev?  
**\<meeting-bot> [i2p-relay] {-moneromooo}** No  
**\<meeting-bot> [anonimal]** 10. Confirm next meeting date/time  
**\<meeting-bot> [anonimal]** Next week or two weeks?  
**\<meeting-bot> [EinMByte]** 2  
**\<meeting-bot> [EinMByte]** (if we want the API on the list of topics)  
**\<fluffypony>** 2 weeks  
**\<fluffypony>** Oct 16  
**\<meeting-bot> [anonimal]** Same for #monero-dev?  
**\<meeting-bot> [anonimal]** I'd like to coincide  
**\<meeting-bot> [anonimal]** fluffypony: ^  
**\<fluffypony>** yes  
**\<meeting-bot> [anonimal]** Ok, 2 weeks works for me.  
**\<meeting-bot> [anonimal]** THANKS EVERYONE!  
**\<fluffypony>** shutting meeting bot down