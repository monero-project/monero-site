---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2017-04-09
summary: 0.10.3.2 release, repository naming, website redesign, decoy output selection algorithm, and static ring sizes
tags: [dev diaries, core, crypto]
author: dEBRUYNE / fluffypony
---

### Overview  

An overview [can be found on MoneroBase](https://monerobase.com/wiki/DevMeeting_2017-04-09).  

### Logs  

**\<fluffypony>** ok  
**\<fluffypony>** 2. Brief review of what's been completed since the previous meeting  
**\<fluffypony>** so the main thing was the 0.10.3.1 release  
**\<fluffypony>** which has mostly been fine, no major breaking issues  
**\<fluffypony>** there are some GUI fixes that will go into 0.10.3.2, which we aim to tag and release soon  
**\<medusa>** before or after the fork ?  
**\<fluffypony>** which brings us to  
**\<moneromooo>** There's this bug with not merging destinations, which is overeager in not merging.  
**\<fluffypony>** 3. Code + ticket discussion / Q & A  
**\<fluffypony>** medusa: probably before, due to the thing that moneromooo just pointed out, which is a bit of an annoyance for exchanges  
**\<medusa>** allright thats good. i think a possible bugfix release after the fork shoudl be completely seperate too  
**\<fluffypony>** medusa: is there something you're expecting will break at the fork? :-P  
**\<medusa>** lets hope nothing is needed \<3  
**\<medusa>** no  
**\<fluffypony>** ok shew  
**\<fluffypony>** I'm planning on merging PRs over the next couple of days  
**\<fluffypony>** are there any that are don't-merge-yet?  
**\<vtnerd1112>** The one I have outstanding for bin2hex  
**\<xmr\_eric>** Before merging the PR to name Monero GUI back to Monero Core, I thought it would be good to have a discussion here about that. But perhaps that can be saved for the end of today's meeting.  
**\<moneromooo>** Oh, I'd kinda forgot-ish about that one...  
**\<Jaquee>** #658 and #667 obviously  
**\<vtnerd1112>** It's currently unmergeable and I don't know if anyone looked at it recently  
**\<fluffypony>** xmr\_eric - we can discuss it now, it's part of this section anyway  
**\<vtnerd1112>** monermooo I will revise and push later today  
**\<luigi1112>** is he copying me  
**\<vtnerd1112>** rebase, damn phone  
**\<fluffypony>** vtnerd1112: I haven't since looking at it the first time, sounds good  
**\<endogenic>** lol  
**\<fluffypony>** luigi1112: yes  
**\<fluffypony>** /nick fluffypony1112  
**\<xmr\_eric>** Ok, well I'd like to hear from Jaquee. But my thoughts are that we rename Monero GUI back to Monero Core. Gingeropolous originally named it back to Monero GUI at the time, which was a decent idea, but I think in the end the central Monero software that the public is going to use should be called Core  
**\<fluffypony>** @xmr\_eric that was among the reasons for calling it Core initially  
**\<xmr\_eric>** I spent some time yesterday trying to find a word other than Core to differentiate ourselves from Bitcoin, like Monero Essentials or something, but none really work as well.  
**\<xmr\_eric>** Right. I think we should go back to that.  
**\<fluffypony>** also because I think that the current monero repo will become libmonero  
**\<pero>** and then monero-cli?  
**\<fluffypony>** yeah  
**\<pero>** makes sense  
**\<Jaquee>** so we end up with 3 repos?  
**\<Jaquee>** gui, cli and lib?  
**\<fluffypony>** Jaquee: yes eventually  
**\<Jaquee>** ok cool  
**\<fluffypony>** Jaquee: what are your thoughts on GUI vs. Core  
**\<Jaquee>** libwallet API is only used by gui for now. so i'm thining it could be moved to gui repo.  
**\<Jaquee>** i would prefer GUI  
**\<Jaquee>** https://github.com/monero-project/monero-core/issues/663  
**\<endogenic>** how about 'official' instead of 'core'? cause it'll be specified as the official 'gui', cli etc  
**\<xmr\_eric>** This isn't just naming the repo, this is naming the piece of software the repo produces  
**\<bigreddmachine>** As for names, I assume "Monero Qt" is out? That was once the standard for cryptocurrency wallets but seems to have lost favor.  
**\<xmr\_eric>** Essentially, it is branding  
**\<pero>** if we're going to have lib and cli, and those seems like the optimal nomenclature for those, then i think the logical one for the gui is gui  
**\<Jaquee>** +1  
**\<endogenic>** or maybe core gui..  
**\<xmr\_eric>** The public doesn't think in terms of CLI GUI  
**\<xmr\_eric>** People won't know what GUI means  
**\<Jaquee>** do they know what core means?  
**\<Jaquee>** i don't :P  
**\<pero>** yea but core is kind of confusing since core seems to be lib  
**\<fluffypony>** pero: I was thinking more like libmonero, monero-tools, monero-core  
**\<bigreddmachine>** pero: i'd argue the optimal name for a gui should *not* have "gui" in the name. They aren't called FireFox GUI, Chrome GUI, Word GUI, etc  
**\<gingeropolous>** just Monero  
**\<xmr\_eric>** No, but the point is Core is a word that people will begin to associate with that piece of software  
**\<hrumag2>** gingeropulos I agree  
**\<xmr\_eric>** What does Linux mean?  
**\<jwinterm>** I think core does have a bit of stench to it now  
**\<hyc>** at worst, monero app  
**\<hrumag2>** The application has to be the most atomic  
**\<jwinterm>** bigreddmachine: there's no lynx like version of firefox or chrome tho  
**\<jwinterm>** that I'm aware of  
**\<hrumag2>** To the public I mean  
**\<xmr\_eric>** The problem with naming it just Monero is that no other piece of software gets to be called Monero  
**\<xmr\_eric>** Which I'm ok with  
**\<pero>** yes i can see reason in that argument bigreddmachine  
**\<hyc>** MoneroUser  
**\<xmr\_eric>** But it isn't good from a nomenclature standpoint  
**\<bigreddmachine>** "Monero Wallet"?  
**\<pero>** what's monero-tools fluffypony ? the cli?  
**\<fluffypony>** pero: yes  
**\<fluffypony>** especially since they ship with the GUI  
**\<sgp>** ^ anyone can make their own wallet  
**\<moneromooo>** Could we maybe get on with the *dev* meeting...  
**\<fluffypony>** so that seems to make some sense  
**\<fluffypony>** ok let's table this for the next meeting, we can open a thread or discuss it further under an existing one  
**\<fluffypony>** s/thread/issue  
**\<xmr\_eric>** Great  
**\<hrumag2>** At least "Monero node", "Monero wallet cli", "Monero wallet gui"  
**\<gingeropolous>** moneromooo, I like this bike shed. It can fit many bikes  
**\<fluffypony>** and then we'll make a decision at the next meeting  
**\<Jaquee>** sounds good  
**\<anonimal>** Two cents: 2 repos: libmonero and monero. monero has optional cli build alongside gui.  
**\<fluffypony>** ok so 4. GetMonero.org redesign discussion  
**\<fluffypony>** rehrar wanted to show us the designs and get our input on it  
**\<rehrar>** I don't want to take much time. Just want to get a special opinion from all the devs about the two proposed designs.  
**\<rehrar>** If you haven't seen them already, you can find them here  
**\<rehrar>** Design 1: http://imgur.com/a/MwyxX  
**\<rehrar>** Design 2: http://imgur.com/a/H9i3z  
**\<anonimal>** github link too?  
**\<unknownids>** design 1 third draft imo  
**\<rehrar>** The idea will be to redesign the current website and also to make an assets document that will have the HTML and CSS framework that we make so anyone can easily make more pages.  
**\<i2p-relay> {-olark}** Will these sites still be usable with javascript disabled?  
**\<rehrar>** No JavaScript will be used.  
**\<anonimal>** https://github.com/monero-project/monero-site/issues/245  
**\<rehrar>** All in Jekyll  
**\<rehrar>** Sorry, thank you anonimal  
**\<vertp>** design 1 - draft 3 is the most popular on reddit. Most people are asking to add some of the community sponsored youtube vids to the homepage as well.  
**\<hrumag2>** 1 totally. Marketing addicted  
**\<pero>** im pretty big on the 2nd one  
**\<gingeropolous>** will these sites still be editable via github by random people, like the current site?  
**\<fluffypony>** design 2 is nice, but a little too clean  
**\<fluffypony>** gingeropolous: yes  
**\<pero>** the first one is too generic and reminds me of shitty webapps/startups  
**\<pero>** first one with some tweaks  
**\<pero>** erm  
**\<endogenic>** i agree, maybe some pretty-fication to #2  
**\<aerbax>** I think it's important to include one of the Monero introductory videos on the frontpage of whatever design is chosen.  
**\<pero>** second one\*  
**\<i2p-relay> {-olark}** Ok  
**\<endogenic>** cause it's an OSS / tech project after all  
**\<fluffypony>** vertp: I don't know if we really need multiple videos on the home page, just the intro one  
**\<rehrar>** I think the second design is the most modular and easy to adapt to others making more pages as the site progresses after I'm done with it.  
**\<Jaquee>** i also prefer #2  
**\<sgp>** As I mentioned, I still like 1.3 the best. 2 is still better than what we have right now though  
**\<anonimal>** Since no one here will probably read that github issue, #2 looks like a tech spec but #1 can be worked with. If reddit has good response for #1 draft 3 then that direction is something to consider.  
**\<fluffypony>** endogenic / pero: I'm leaning that way too  
**\<tewinget>** didn't realize we were doing a meeting this week; I'll be around in like an hour, have to catch a bus.  
**\<vertp>** fluffypony: yes, good point. shouldn't have used the plural tense.  
**\<rehrar>** We were playing with adding some color to design 2  
**\<fluffypony>** anonimal: otoh we can take some of the elements from design 1, draft 3 and incorporate them into design 2 - @rehrar?  
**\<rehrar>** And I think we have a good idea of how to do it.  
**\<rehrar>** We should have something for it soon.  
**\<rehrar>** Yes, we'll work on that.  
**\<pero>** site should be an information portal ultimately, the first design is getting the user to download an app asap imo  
**\<rehrar>** Any particular things from that design to Port?  
**\<pero>** it is not aligned with what the site's goals should be  
**\<gingeropolous>** i like #2  
**\<rehrar>** I agree.  
**\<anonimal>** Site's goals? It's a website.  
**\<pero>** yes the goal of providing information  
**\<rehrar>** Monero is a unique project, and having a standard site is doing Monero a disservice imo.  
**\<fluffypony>** @rehrar the world background and the different sections are nice  
**\<fluffypony>** backgrounds for different sections I mean  
**\<rehrar>** I agree that design 2 is a bit sterilized.  
**\<anonimal>** Old people need to be able to use this too. Old people don't like to read most of the time because fonts are too small and if they are computer illiterate they don't know how to zoom.  
**\<anonimal>** Technical illiteracy = most of planet earth.  
**\<xmr\_eric>** Websites are absolutely about a main goal first. That's what good design is about. Funneling people into a path that they already want to go. Eg "What is this Monero thing?"  
**\<pero>** that argument is pointless anonimal  
**\<pero>** old people that are actively using the internet have learned how to deal with those issues  
**\<fluffypony>** anonimal: old people aren't going to use Monero, they'll use some L2 or L3 system on top of it  
**\<anonimal>** pero this is a dev meeting, feel free to leave anytime.  
**\<anonimal>** You are not a dev.  
**\<pero>** else they wouldnt be using it  
**\<pero>** lol  
**\<fluffypony>** so it's also got to serve the target audience  
**\<moneromooo>** Yeah, maybe we could have dev meeting and monero meeting.  
**\<rehrar>** If the overwhelming majority thinks design 1 even after draft 3 of design 2 then I will probably go with it  
**\<fluffypony>** moneromooo: this is specifically to get dev input on the design  
**\<rehrar>** But we're going to add some color to the design 2.  
**\<hrumag2>** I think it should be given more underlining about how to buy Monero. Where do you think to put the link?  
**\<rehrar>** Monero just has very...Specific branding colors. XD  
**\<fluffypony>** @rehrar let's see what you come up with on design 2 and then see  
**\<rehrar>** Aight. Will do.  
**\<fluffypony>** hrumag2: no, definitely not, that sort of funnel makes us liable  
**\<hrumag2>** ... more than "get involved" I think  
**\<anonimal>** When I say 'old', I mean plebeian elders of planet earth.  
**\<rehrar>** That's all from me.  
**\<rehrar>** Any last second opinions?  
**\<pero>** i have a concern with project scope/budget  
**\<pero>** i think the work effort is being underestimated and it's underbudgeted  
**\<rehrar>** Not underestimated, but underbudgeted for sure.  
**\<fluffypony>** @rehrar well we do a second FFS if needed, let's see how it goes  
**\<rehrar>** On purpose. Part of it is my donation to the community. I believe in it.  
**\<rehrar>** Ok. :)  
**\<fluffypony>** ok on that note  
**\<fluffypony>** let's move on to 5. Any additional meeting items  
**\<fluffypony>** only thing I want to ask is just to find out from Jaquee if he managed to get hold of Qt  
**\<Jaquee>** no, sorry. i've had a busy week  
**\<moneromooo>** Well, I had this list of bugs I think can be closed. Which should be greppable with mooo.\*bug.\*clos  
**\<Jaquee>** will take care of that issue in a couple of days  
**\<fluffypony>** np  
**\<fluffypony>** moneromooo: yep I'll be closing issues in the next few days too  
**\<moneromooo>** Thanks.  
**\<fluffypony>** anything else?  
**\<bigreddmachine>** I have a Q: What is the "correct" way to propose an improvement / protocol change to Monero? Bitcoin has the BIP system, whereas for Monero things are basically handled via GitHub issues in the main repo. That means that, though discussions are documented permanently, they can be difficult to find and track over time. Is Monero getting to where it is big enough and has enough contributors that maybe we s  
**\<bigreddmachine>** hould have a BIP-like process?  
**\<fluffypony>** bigreddmachine: easiest way is just for us to have a label on Github (for consensus-critical changes)  
**\<i2p-relay> {-olark}** I have a few things I would like to talk about regarding https://github.com/monero-project/monero/issues/1673 I should post another update soon  
**\<i2p-relay> {-olark}** I can wait  
**\<bigreddmachine>** fluffypony: but is that the ideal way to do it? after getting merged, closed, etc, those discussions are very tough to find. Something like BIP is a much better long-term place for those discussions  
**\<fluffypony>** bigreddmachine: I think that changes should be written up as an MRL paper  
**\<bigreddmachine>** I'm not asking because I have a specific proposal to make, but because it seems we don't have an ideal system that can grow well  
**\<bigreddmachine>** fluffypony: and submitted to MRL?  
**\<fluffypony>** yes  
**\<fluffypony>** available permanently as an MRL research bulletin, which makes recommendations to the implementors, and exists as a living document  
**\<bigreddmachine>** okay - then shouldn't that be the case for anything consensus changing?  
**\<bigreddmachine>** what got me thinking about it is that the discussions behind this month's hard fork are very tough to find. i know it's a small change, but i feel like we don't have a precedent set  
**\<fluffypony>** bigreddmachine: mostly yes, although I think some things are a little small to write up and might have to be bundled together  
**\<fluffypony>** let's give that a spin and see how it goes, we can always change the process later on  
**\<bigreddmachine>** what makes something "too small" though? I guess my point is that maybe we need to add guidelines to the main repo that explain all this for people to see in the future  
**\<fluffypony>** olark: do you want to discuss 1673 now? we still have 19 mins before the Kovri meeting  
**\<bigreddmachine>** I am happy to do that and make the PR,  
**\<i2p-relay> {-olark}** Sure  
**\<i2p-relay> {-olark}** I just wanted to talk about a couple quick things  
**\<fluffypony>** bigreddmachine: it's subjective - when we changed the block time from 1 min to 2 mins, for eg., the reasons were obvious - yes please do write it up and PR it  
**\<i2p-relay> {-olark}** What people think about having 3 static ringsizes for monero similar to how we have static fee priorities.  
**\<i2p-relay> {-olark}** This was an idea moneromooo had brought up in the issue  
**\<sgp>** What ringsizes are you proposing?  
**\<i2p-relay> {-olark}** To protect users from making foolish mistakes reusing irregular ringsizes  
**\<moneromooo>** I was about to write "I like it", so I now see why I do... :D  
**\<fluffypony>** olark: I like it because it removes fingerprinting / metadata leaks  
**\<i2p-relay> {-olark}** Well if September is mandatory 4 i was thinking like 4, 12, 50 or something similar the details don't matter at this moment but just what people think about having this in place.  
**\<fluffypony>** I'm fine with it, but 4 is way too small as the minimum, even per the old MRL recommendations  
**\<i2p-relay> {-olark}** The other thing was since I have been surveying the bitcoin blockchain for a while there is large bias for spent outputs in the past day  
**\<bigreddmachine>** to clarify - unlike fees, which *could* be changed on the user-end to something else, this will make non-standard ring sizes be against the consensus protocol?  
**\<i2p-relay> {-olark}** and how this affects the attack in MRL-001  
**\<fluffypony>** bigreddmachine: yes  
**\<moneromooo>** We could wait to see luigi1112's final ringct sizes, then see how those vary with increasing mixin.  
**\<fluffypony>** moneromooo: agreed  
**\<jwinterm>** why only three choices?  
**\<fluffypony>** jwinterm: so that people actually use the two other than the default  
**\<moneromooo>** To avoid splitting txes in too many classes.  
**\<sgp>** So how about 10, 20, 50, 100? Something like that. Pending the research of course  
**\<fluffypony>** you want to get lost in the mix, remember :)  
**\<vtnerd1112>** So fireice\_uk is working on the rpc download changes before any crypto stuff ... ?  
**\<i2p-relay> {-olark}** The assumption in MRL-001 is that an attacker would need roughly 80% of outputs in the entire blockchain to de-anon a transaction but in reality if we use an output selection algo similar to what my survey results convey than in reality an attacker would only need 70%ish of spent outputs in the past day to reliably de-anon  some transactions  
**\<vtnerd1112>** Oops thought that topic was done  
**\<sgp>** ^ with what ringsize?  
**\<fluffypony>** vtnerd1112: yes - we decided in the last meeting that he'd switch milestone orders around  
**\<moneromooo>** Oh, that ought to be done on 0MQ then.  
**\<i2p-relay> {-olark}** Smooth and myself had come to a conclusion that mixin 4 is fine but if the attack in MRL-001 is made easier with a selection algo like I am suggesting we may need to increase the mandatory ringsizes to protect against an attack like MRL-001  
**\<fluffypony>** olark: this changes with zipf, right?  
**\<fluffypony>** ie. a great portion of the ring uses the past day's outputs  
**\<vtnerd1112>** Ok, pigeons told me mymonero seemed to be under lots of load. Ive got some preliminary work done that he could continue to completion  
**\<vtnerd1112>** Just enough to give mymonero a bump hopefully  
**\<fluffypony>** vtnerd1112: that's fine, maybe ping him and tell him that? fireice\_uk never attends dev meetings and is never on IRC  
**\<moneromooo>** Maybe that's not actually bad.  
**\<i2p-relay> {-olark}** What to increase it to is up in the air obviously. Still have more work to do  
**\<i2p-relay> {-olark}** fluffypony: Yes. Based on the survey I have done so far roughly 70% of spent outputs are from the past day. Future surveying will be going over 2011-2012 to see if there is any change in the distributions.  
**\<fluffypony>** ok I'm fine with that - olark, what are your thoughts on writing it up as an MRL paper later on once the discussion is finalised?  
**\<moneromooo>** I think current min is still 2. We could go to 4 in september, and still increase later.  
**\<sgp>** I think we should increase it >4 in September  
**\<bigreddmachine>** -olark: is there a way to see what the distribution looks like for txs not related to mining? i'd guess a lot of the quickness in spending is from pools transfering out coins to miners, but in the future this might be a much smaller proportion  
**\<xmr\_eric>** Are we still playing around with having a static ringsize?  
**\<moneromooo>** Pool payment txes are often with more than 2 outputs.  
**\<sgp>** @xmr\_eric yes  
**\<xmr\_eric>** Cool  
**\<fluffypony>** moneromooo: with the new range proofs etc. it might be worthwhile just making the min based on that  
**\<moneromooo>** Not a guarantee of course. Especially now -\_-  
**\<i2p-relay> {-olark}** fluffypony: Sure I can write an MRL paper once I have more of it fleshed out.  
**\<fluffypony>** can always use like a 10 output tx as a measuring bar  
**\<moneromooo>** fluffypony: sounds good  
**\<gingeropolous>** ^ interesting  
**\<i2p-relay> {-olark}** xmr\_eric: The idea is having 3 static ringsizes for varying levels of paranoia similar to the different fee priorities we have.  
**\<xmr\_eric>** Right  
**\<bigreddmachine>** moneromooo: if we're just looking for a filter on pool txs, we can always use the pools' apis to get txids. my point was those txs might be 50% of all txs now, but 5% two years from now, which impacts the math.  
**\<gingeropolous>** are disposable / one-time addresses happening? I didn't see it make the list of things not to pull in.  
**\<moneromooo>** That allows me to...  
**\<moneromooo>** luigi1112: is kenshi84's disposable address patch ready in the theoretical sense, you think ? ie, can I go over it again assuming the math/crypto's final ?  
**\<fluffypony>** I haven't looked at it in a while, I'll have to re-review the PR to both the MRL and normal repos  
**\<fluffypony>** ok we need to wrap up - let's discuss it further later on  
**\<fluffypony>** 6. Confirm next meeting date/time  
**\<fluffypony>** April 23