---
layout: post
title: Logs for the Community Meeting Held on 2018-02-17
summary: Community highlights, Forum Funding System updates, RFC-HWALLET-1, Localization workgroup, March HF, chain split discussion (e.g. MoneroV), and miscellaneous
tags: [dev diaries, crypto]
author: dEBRUYNE / fluffypony
---

# Logs  

**\<sgp>** All right, meeting time :)  
**\<sgp>** xmrscott rehrar ErCiccione serhack cryptochangement msvb-mob  
**\<serhack>** Hello!  
**\<sgp>** 0. Introduction  
**\<cryptochangements>** Estoy aquì  
**\<sgp>** We would like to welcome everyone to this Monero Community Meeting!  
**\<sgp>** Link to agenda on GitHub: https://github.com/monero-project/meta/issues/178  
**\<msvb-mob>** Hello.  
**\<xmrscott[m]>** Salutations  
**\<cryptochangements>** Hey everyone  
**\<ErCiccione>** Hi!  
**\<sgp>** Whoops, wrong link  
**\<muchso>** hi all  
**\<rehrar>** nah, let's discuss buildbot  
**\<sgp>** Link to agenda on GitHub: https://github.com/monero-project/meta/issues/181  
**\<sgp>** Monero Community meetings are a discussion place for anything going on in the Monero Community. We use meetings to encourage the community to share ideas and provide support.  
**\<sgp>** 1. Greetings (continued)  
**\<muchso>** who maintains buildbot? no source code?  
**\<muchso>** need to add macos one  
**\<cryptochangements>** Pigeons does builds afaik  
**\<sgp>** 2. Community highlights  
**\<sgp>** For a great weekly summary, please read the Monero Observer: http://monero-observer.com/  
**\<sgp>** It seems like they are behind by a few weeks. Anyone have any large updates?  
**\<rehrar>** I'm working on a big super secret project that is taking up basically 100% of my non-free time  
**\<xmrscott[m]>** You'd want to ping moneroobydoo  
**\<rehrar>** consider this a preannouncement  
**\<sgp>** Thanks for the pre-announcement rehrar lol  
**\<cryptochangements>** PUMP on the way  
**\<rehrar>** *actual announcement* Monero popsicles!!  
**\<cryptochangements>** Rehrar-gate anybody?  
**\<sgp>** All right, we can jump into FFS updates  
**\<sgp>** 3. FFS updates  
**\<sgp>** There are several FFS updates.  
**\<sgp>** a. RFC-HWALLET-1 project progress  
**\<msvb-mob>** sgp: Thanks.  
**\<msvb-mob>** We received our permanent USB product identifiers from pidcodes (a Opensource USB allocation.)  
**\<msvb-mob>** We've studied current off chain bearer bond designs, for future Monero hardware  
**\<msvb-mob>** projects.  
**\<sgp>** msvb-mob msvb-lab  
**\<msvb-mob>** Monerujo developer(s) really engaged with the hardware team to produce firmware in a new monerujo-hw project (online in their repository now.)  
**\<msvb-mob>** Layout work is underway to create a new prototype, along the lines of the very first one called 'Breakneck.'  
**\<msvb-mob>** Serhack helped us identify a cool graphical documentation system called 'board explorer' that we'll likely use in future web apps.  
**\<msvb-mob>** The last few Julian Candy (second generation prototypes) are still available, in case somebody didn't get theirs.  
**\<msvb-mob>** We're testing and learning about post restante, a method of blind delivery.  
**\<msvb-mob>** Lastly, we have professional photos ready for production of a promotional video, but need help with that.  
**\<sgp>** ooooh, sounds exciting :D  
**\<msvb-mob>** In case anyone has the right tools and some time to make a video of prototypes with a background and music, like a one minute thing.  
**\<msvb-mob>** sgp: Thanks a lot, I'm excited as well. That's all for us, I think.  
**\<sgp>** Thanks msvb-mob. Does anyone have any questions for the hardware wallet team?  
**\<msvb-mob>** Any questions?  
**\<serhack>** amazing msvb-mob, did you try to contact savandra for the video?  
**\<snorlax>** Yes, what timeline do you need for production of said 1 minute promotional video?  
**\<fkjldsy>** is it prison wallet friendly? ie no hard corners  
**\<msvb-mob>** By the way, I created a project landing page for Vegas 2018:  
**\<msvb-mob>** https://taiga.getmonero.org/project/michael-vegas-august-2018/  
**\<msvb-mob>** ...in case we need to organize for events there this year.  
**\<xmrscott[m]>** Cool. I'll probably be at Vegas for Defcon again this year. If you need any help from me, ping me  
**\<sgp>** @msvb-mob what is the timeline for the video? When do you hope to have it out by?  
**\<msvb-mob>** Am I still connected?  
**\<sgp>** I got the "am I still connected" message  
**\<muchso>** me too (irc)  
**\<muchso>** has the discussion stopped on irc?  
**\<sgp>** Ok, well if he gets back online he can jump in again. For the sake of time, I'll move on to the second part  
**\<sgp>** b. Localization workgroup Q&A  
**\<sgp>** ErCiccione, do you have anything to discuss?  
**\<ErCiccione>** yes,thanks sgp just a couple of things  
**\<ErCiccione>** Localizations are going very well, a lot of volunteers these weeks. We basically filled the welcome page with flags. so Next release of the GUI will be available in a lot more languages. I don't remember the exact number but should be aboout 20  
**\<ErCiccione>** Also about the GUI, all language files have been refreshed, these means that we need toupdate every language we already have. You can find a list of the languages and more info here: https://github.com/monero-project/monero-gui/issues/1116  
**\<msvb-mob>** My connection is really poor, I'm just seeing the questions now and missed that chance to answer. Sorry.  
**\<ErCiccione>** I also want to remind that to keep track of the work of the localization workgroup, there is everything on taiga (wikis and tutorials as well), and subscribe if you wish  
**\<ErCiccione>** https://taiga.getmonero.org/project/erciccione-monero-localization/  
**\<cryptochangements>** All languages have been updated since #1076 ?  
**\<muchso>** from the git page looks like only two  
**\<serhack>** I would like to remember that the getmonero.org website is going to be available in italian language! You can translate getmonero.org website by following these instructions! https://taiga.getmonero.org/project/erciccione-monero-localization/wiki/translating-monero-website  
**\<ErCiccione>** cryptochangement: no, but many are in progress, theissue i linked to is for the missing languages  
**\<serhack>** Let's translate Monero for everyone!  
**\<ordtrogen>** Swedis will be done tomorrah  
**\<cryptochangements>** Ok cool  
**\<ordtrogen>** (misplaced an 'h' there)  
**\<ErCiccione>** as serhack reminded us, we also need people to translate the website. On taiga every info, or please ask  
**\<ErCiccione>** thanks serhack btw :)  
**\<ErCiccione>** cryptochangements: also on taiga there is a list of WIP translations for everything. GUI, CLI ecc  
**\<rehrar>** woo! go localization people!  
**\<sgp>** Anything else ErCiccione?  
**\<ErCiccione>** that's it from me. if anybody have any question...  
**\<sgp>** Thanks ErCicicone and all the volunteers for the localization project!  
**\<sgp>** Does anyone else have a FFS update?  
**\<sgp>** All right, continuing on to  4. Hardfork discussion  
**\<cryptochangements>** I've been adding a lot of stuff to https://github.com/monero-integrations/monerophp  
**\<sgp>** Cool @cryptochangements  
**\<serhack>** Hello! It's not a FFS update but an update about my work on the book! At the moment I have 112 pages of full text about Monero (and its community!). I am working hard on the content! Expect some news about my work next week!  
**\<sgp>** Thanks serhack  
**\<serhack>** :)  
**\<sgp>** moneromooo, can you please discuss the major changes people should expect to see for the March hardfork?  
**\<moneromooo>** There was pretty much nothing, so we just changed the PoW.  
**\<moneromooo>** The one big thing there might have been is bulletproofs, but they were pushed to the subsequent one.  
**\<muchso>** any date scheduled? need to know for the node-js pool  
**\<moneromooo>** The PoW changes are minor, it stays mostly Cryptonight, we're just going to start tweaking it every fork as an extra preemptive defense against ASICs.  
**\<moneromooo>** No height yet.  
**\<sgp>** Ok moneromooo. So the other changes are improvements not related to consensus  
**\<moneromooo>** It'll be in march, probably first half.  
**\<moneromooo>** Non consensus changes... subaddresses. And multisig.  
**\<moneromooo>** Subaddresses will need both sides of a tx to know about them, so it might take a while for, say, exchanges, to allow them.  
**\<moneromooo>** Multisig, only the multi-signing party needs to.  
**\<rehrar>** So all this talk about March 7th being the fork date is just a rumor moneromooo?  
**\<moneromooo>** Yes.  
**\<moneromooo>** Who said that ?  
**\<cryptochangements>** I think thats what hyc said  
**\<rehrar>** hold up  
**\<rehrar>** https://www.reddit.com/r/Monero/comments/7y6cbl/when_is_the_hard_fork_of_monero/  
**\<moneromooo>** Then maybe hyc's planning to do it :)  
**\<sgp>** The update should also enable compact “fluffy” blocks by default, automatically send with the lowest priority to save on fees when the blocks have extra space, and a bootstrapping service where people can specify a remote node to use while the daemon is still syncing, correct?  
**\<moneromooo>** Yes. I forgot aobut the bootstrap thing. I'm not sure the GUI will know about it yet, but there's another implementation of this already AFAIK.  
**\<sgp>** Alright, thanks moneromooo  
**\<sgp>** To those who are unaware, hardforks can be thought of as “protocol upgrades”.  
**\<sgp>** Note that your coins are not at risk during this hardfork. All you need to do is update your software before you can send your coins again. You should update before the hardfork. Files will be available soon.  
**\<sgp>** Now is the time for you to ask any questions regarding the hardfork :)  
**\<rehrar>** when MoneroV?  
**\<snorlax>** never, hopefully...  
**\<moneromooo>** BTW, if your daemon is pestering you to update, that's because it's time based. Let it moan and update when the update is out.  
**\<muchso>** yes the daemon shows it's time to update  
**\<Dhjucjnejrfjf>** Speaking of monerov would it be appropriate to plan to add any exchange that supports it to the monero wiki avoid list since they are in essence helping to enable a privacy attack on monero?  
**\<muchso>** that's ridiculous. just don't feed them  
**\<ArticMine>** MoneroV should be a separate topic from out HF  
**\<xmrscott[m]>** I would be in favor of that  
**\<sgp>** Yeah, MoneroV will be up in a sec  
**\<snorlax>** It's not ridiculous, but I have no opinion on it (sorry for spam.)  
**\<sgp>** Looks like we're ready to move on to that section though. One last chance to ask a question about the Monero scheduled hardfork  
**\<snorlax>** It's not ridiculous, but I have no opinion whether it should be done either way (sorry for spam.)  
**\<sgp>** 5. Chain split discussion  
**\<sgp>** Onslaught of text coming in, sorry :)  
**\<sgp>** Another project plans to split Monero into their own project at some point in the future. This chain split has the potential to have significant consequences for the Monero network, since transactions that are made on both forks may share the same key image. With this information, they can link these transactions to the same sender, and they can likely learn which inputs in the ring signature are the real ones. Even wors  
**\<sgp>**  will have the chain reaction of invalidating this now-known input across other transactions that include it as a decoy.  
**\<sgp>** I outlined these risks in a video I made yesterday: https://www.youtube.com/watch?v=TlVsMTeT_nE  
**\<sgp>** Before you panic, there are several things worth noting:  
**\<sgp>** 1. The attack will only be possible if many people use the fork  
**\<sgp>** 2. The current mandatory minimum ringsize of 5 provides significant protection. For a chain reaction to occur, all 4 other inputs must be known false. A larger minimum ringsize would provide more protection.  
**\<muchso>** I watched the video. is there a way to change the image key? will that be a problem with double spending?  
**\<sgp>** 3. Historically, people tend to spend Monero in 2 days. It is likely that the attack will be mostly over after 2 days. However, this is not a given.  
**\<sgp>** 4. If people do not spend their funds normally as discussed in #3, we should be able to figure this out and evaluate the risk potential.  
**\<sgp>** What can you do? In one word, wait. Just wait after the split to see what is happening. Reasonably expect to wait a few days before sending funds. Stay updated during and after the split to see what other people are doing and what they recommend.  
**\<sgp>** You can help the network by sending transactions to yourself. Make sure you do this among wallets you entirely control (eg: not exchanges, MyMonero). In this case, it doesn’t matter if the decoys are invalidated since you don’t need the protection of ring signatures when sending funds to yourself. Furthermore, you will generate new inputs that will not be invalidated that others can select.  
**\<sgp>** All right, onslaught of text over. Any questions?  
**\<sgp>** @muchso I do not believe changing the key image is possible, at least to our knowledge  
**\<moneromooo>** "You can help the network by sending transactions to yourself." Can you elaborate on that ?  
**\<muchso>** If the forkers change the way the image key is created, wouldn't that prevent it?  
**\<endogenic>** moneromooo: i think he means generating more new txs  
**\<endogenic>** outputs  
**\<ArticMine>** The attack can be mitigated by using the same mixins on both chains for pre split inputs  
**\<Dhjucjnejrfjf>** Good summary? Opinions on suggestion above for Reddit wiki avoid list exchange deterrent?  
**\<endogenic>** mixable outputs\*  
**\<sgp>** moneromooo if you churn after the fork, you create new outputs that will not be compromised later that other people can select  
**\<rehrar>** since the key images are per output, ye?  
**\<Dhjucjnejrfjf>** Let's let the exchanges know that the monero community will unite to boycott exchanges that support monerov  
**\<sgp>** Of course, people don't know which ones are generated by churning, but if inputs are selected randomly, it will still help out  
**\<ArticMine>** This requires that a pre fork input only use pre fork mixins  
**\<rehrar>** so the key images will only be the same for the moments when the fork happens  
**\<snorlax>** @ArticMine: what tools exist for that?  Also @sgp elaborated on that point in the latter portion of his video: it's not a surefire way to protect yourself  
**\<ArticMine>** I say mitigate not protect  
**\<ArticMine>** We need th tools  
**\<sgp>** @ArticMine, you are in favor of creating tools that allow people to select their own inputs manually?  
**\<rehrar>** I think one tool that should be considered is a higher ringsize  
**\<moneromooo>** It's really not clear to me that spamming the chain is useful.  
**\<sgp>** @rehrar I have not run the speicifc numbers, but a higher ringsize would help. A higher proportion of inputs would have to be "compromised"  
**\<cryptochangements>** I honestly dont know if that kind of tool would work. The average user simply wont use it and people mostly just want to dump the forked coins for "free money"  
**\<rehrar>** I realize in the event that one output is the same for a given tx across the forks, that that is the real one, but even a marginal chance of having another common output when 'randomly' chosen is helpful  
**\<rehrar>** would probably take the chance from 0.000001 to 0.000002% though :P  
**\<moneromooo>** Spamming *their* chain with newly created outputs, though... ^\_^  
**\<sgp>** @moneromooo that would be potentially damaging to Monero  
**\<snorlax>** If every new transaction in a chain reduces the confidence of analysis by (ringsize) that appears useful to me, especially when my effective ringsize is going to be decreased by fork claims  
**\<moneromooo>** Maybe, but that's not clear to me either. It's a complex system.  
**\<sgp>** A higher ringsize means more inputs need to be compromised before the real input is known and chain reactions occur  
**\<snorlax>** ... and more transactions means the same, yes?  
**\<ArticMine>** I do not see how a higher ringsize helps if the input is compromised  
**\<pca>** Is this MoneroV a bonafide adversarial attack vector?  If so, does MRL have any input on this?  Is the problem well understood?  What is the worst case scenario?  (apologies for all the questions)  
**\<snorlax>** Add it to the mile-high stack of topics for the MRL to consider ^\_^  
**\<sgp>** @ArticMine you're looking at the first wave of attack. I'm looking at the second  
**\<muchso>** pca - was brought into attention only a week ago  
**\<moneromooo>** AFAICT, it's a con vs users. Normally, to expose outputs, you'd need to generate lots of new outputs, paying fees. Here, they incentivize others to pay the fees for them, in return for promise of money... that they don't have to pay you.  
**\<sgp>** @ArticMine a higher ringsize has NO impact if people reuse key images on both chains. The real input will be known regardless of the ringsize  
**\<rehrar>** ArticMine since knowing a real output doesn't just affect the tx where the real output is spent, but also other rings that use that output as a ring member  
**\<moneromooo>** So they rely on people thinking this has any value.  
**\<moneromooo>** Which people will, because shitcoins.  
**\<rehrar>** it's more to help prevent the domino effect from hurting too many people  
**\<rehrar>** exactly, and the thing is, we cannot prevent this kind of fork from happening again and again and again  
**\<sgp>** @ArticMine however, ince this input is known, it means all other transactions with this input are using it as a decoy. People can know this input is fake  
**\<moneromooo>** It's quite clever, and machiavellian.  
**\<cryptochangements>** As far as i understand it, a higher ringsize cant help people who reuse their own keys, but could help to protect other people who are minging their own business  
**\<rehrar>** and even if the first twenty of them fail, what's to say the 21st won't catch on?  
**\<rehrar>** since this is basically a free attack technologically (not socially)  
**\<sgp>** @ArticMine Higher ringsizes reduce the risk of transactions having all decoys invalidated  
**\<ArticMine>** The economics are very problematic. If people do not spend their MoneroV they are in effect propping up the value  
**\<xmrscott[m]>** Hopefully MRL prioritizes it though given the chain split happens in roughly a month. This could all be averted if MoneroV created their own chain from avnew genisis  instead of splitting  
**\<ArticMine>** sgp yes but with after split inputs  
**\<sgp>** Yes ArticMine  
**\<cryptochangements>** xmrscott: But the 10x airdrop is the basis of their scam lol  
**\<muchso>** most people are speculators they simply don't care  
**\<rehrar>** xmrscott[m] we can never hope that people will act in good faith. In fact, when individuals are presented evidence of potential harm, and they choose to move forward anyways, we must assume bad faith  
**\<snorlax>** I've seen several very good solutions that MoneroV could implement in order to maintain both our and their privacy.  Perhaps extending those suggestions to them in a semi-official manner could mitigate the damage?  
**\<snorlax>** Well, not solutions, but mitigations  
**\<sgp>** @snorlax we need to assume they won't do anything to help out. In fact, we should assume they are attackers, since an attacker could try the same thing  
**\<rehrar>** and even if MoneroV eventually does comply and has a new genesis block, that doesn't prevent a bad actor from doing what MoneroV is doing now in the future, and they will not be able to be convinced since they want nothing more than Monero's downfall  
**\<ArticMine>** Which is the longer term issue the MRL can look into  
**\<ArticMine>** Ehen they have some time  
**\<ArticMine>** When  
**\<muchso>** what solutions? MRL says it can't be mitigated  
**\<snorlax>** @sgp I agree of course, but they have a vested interest in at least appearing legitimate.  Extending a semi-official (read: via Monero contributors) solution for maintaining privacy at least puts the onus on them to implement, or get pointed out (again) as frauds  
**\<rehrar>** as I see it, this is a huge hole and flaw in the Stealth addresses/RingCT/Ring signature coin, and, if not able to be solved, may be destructive enough over several iterations of this attack to move to another scheme  
**\<rehrar>** but that's me thinking way in the future  
**\<snorlax>** @muchso variations on forcing initial MoneroV transactions to use alternate rules or constructions in order to mostly-cleanly split the chains  
**\<snorlax>** similar to the conversion of outputs from pre- to post-RingCT  
**\<endogenic>** i tend to agree rehrar  
**\<ErCiccione>** snorlax has a valid point imo. Even if it's very probable they won't to anything, it still worth to talk with them if there is a way to mitigate the problem  
**\<ArticMine>** Yes but we must treat MoneroV as fully adversarial if we are to develop a solution from our end  
**\<pca>** yep  
**\<endogenic>** also agree  
**\<snorlax>** Agreed with ArcticMine, pero... por que no los dos?  
**\<rehrar>** See what we can do with MoneroV, but even if they agree, plan on MoneroV not being the last one  
**\<ErCiccione>** ArticMine: absolutely  
**\<rehrar>** and take this threat seriously  
**\<sgp>** For these attacks to be serverely damaging, they need to control a large number of outputs  
**\<rehrar>** Please note: while MoneroV is the first one to do this kind of attack, this is not a MoneroV attack per se, but a weakness of our current scheme.  
**\<snorlax>** step one to controlling a large amount of outputs: dangle shitcoincash  
**\<sgp>** So the priority should be convincing wallet providers and exchanges from supporting the fork  
**\<rehrar>** So while it's upsetting that MoneroV is doing it, if they didn't, someone else would  
**\<sgp>** @snorlax they need to possess a lot of Monero  
**\<snorlax>** @sgp no they don't, they just need to entice users to reuse their key images.  Or am I mistaken there?  
**\<pca>** I dont think social intervention is the answer. (convincing exchanges, etc to not support it)  
**\<sgp>** @snorlax yes, but they need to entice a large portion of the outputs  
**\<snorlax>** I was alluding to the point above that previously, attacks cost tx fees (and/or XMR itself, in order to control/know outputs.)  Now they're enticing users to reveal themselves  
**\<muchso>** yeah that's not good. you seem to try to prevent users from getting their shitcoins  
**\<snorlax>** @sgp I think we're on the same page, sorry  
**\<rehrar>** pca while this is true, the whole point of Monero and crypto in general is that we should not need to rely on social answers, but rather replace these elements with potential for weakness in human corruption with provable cryptography, so as to be truly trustless  
**\<ArticMine>** I am not sure about the exchange issue. I can see legal liability for exchanges if they do not at least allow users to Withdraw their MoneroV  
**\<pca>** rehrar, I know that, hence my statement.  
**\<rehrar>** ye, I agree that now social measures are the only action that can be taken with this specific instance of MoneroV  
**\<rehrar>** but having to rely so heavily on it calls into question (at least for me) the strength of the current scheme  
**\<moneromooo>** That shojuld never be the case. It's not users', since they don't have the secret keys.  
**\<endogenic>** rehrar i agree it indicates something about Monero  
**\<sgp>** Unless we agreed upon a larger ringsize  
**\<muchso>** but a larger ringsize won't help would it?  
**\<moneromooo>** Otherwise it puts the onus of all exchanges and other similar things to expend unbounded effort to give people what they think they're due.  
**\<rehrar>** social measures should not be used indefinitely, but just temporarily while cryptography is developed so it's not needed anymore  
**\<snorlax>** It helps if you don't reuse key images, but doesn't help you if you reuse your key image, @muchso.  Larger ringsize concurrent with bulletproofs seems the way to go, imo  
**\<sgp>** @muchso it would help mitigate the impact these compromised inputs have on other transactions  
**\<muff1nman>** only issue being rehrar, is that temporary solutions set a precedence that is hard to overcome for future situations  
**\<sgp>** We definitely have an issue here where the economic incentive will be to claim the coins. Which will harm privacy and the network  
**\<rehrar>** the precedent is completely nullified when replaced with provable cryptography so the social measure that set the precedent is not needed period  
**\<snorlax>** in lieu of a finalized cryptographic solution, however, the question of "why not both?" applies nonetheless--with MoneroV coming up within weeks, a bandaid--as temporary and ultimately unsatisfactory as it may be--may help nonetheless  
**\<rehrar>** yes, snorlax, I agree.  
**\<snorlax>** in lieu of a finalized cryptographic solution, however, the question of "why not both?" applies nonetheless--with MoneroV coming up within weeks, a bandaid--as temporary and ultimately unsatisfactory as it may be--may still help  
**\<rehrar>** I believe temporary solutions SHOULD be utilized while research is done into permanent ones  
**\<snorlax>** in lieu of a finalized cryptographic solution, however, the question of "why not both?" applies nonetheless: with MoneroV coming up within weeks, a bandaid--as temporary and ultimately unsatisfactory as it may be--may still help  
**\<jeet.sidhu>** at least to reduce the damage  
**\<rehrar>** in any case, I think MRL needs to focus on related research for the next while  
**\<ArticMine>** The is a need for both. Short term mitigation and a long term solution  
**\<rehrar>** and may constitute the need for an emergency hard fork after bulletproof schemes are vetted, so we can both reduce fees and raise ringsize when it's ready to help mitigate the domino effect  
**\<sgp>** I'll try to come up with some models to quantify the attack better, but I'm not really an expert  
**\<rehrar>** and all of the above is just a temporary solution while we look at either mitigating this attack entirely, or, if not possible, find a new scheme  
**\<sgp>** The attack can happen in one of two ways:  
**\<sgp>** 1. The attacker attempts to concentrate the reuse of key images to a certain point. Eg: claim your coins TODAY. This will have a stronger, but short-term impact  
**\<sgp>** 2. Tries to spread them out. This will have a weaker, more long-term impact  
**\<ArticMine>** 2) actually concerns me the most  
**\<rehrar>** I think it's important to remember that, in the event that this attack cannot be reasonably mitigated, a failure of the current scheme is not a failure of Monero. :)  
**\<sgp>** Case #1 actually concerns me the most. It increases the change of the ripple affect.  
**\<rehrar>** the only failure of 'Monero' as a movement, would be if we fail to adapt  
**\<rehrar>** Attacks are discovered all the time for all security and privacy software  
**\<Guest70452>** telling people what to do with their private keys sounds desperate.  
**\<ArticMine>** I have to agree  
**\<sgp>** @rehrar with a very large ringsize, the only impact someone reusing their own key image has is on their own transactions  
**\<ArticMine>** with Guest70452  
**\<rehrar>** understood  
**\<sgp>** Assuming that not everyone claims this reward. But even with a substantial portion, it can be mitigated with a large ringsize  
**\<rehrar>** if the theoretical ring was the full number of outputs on the blockchain, then it would only hurt people making their own transactions  
**\<muchso>** ringsize larger than 100 sometimes fail  
**\<moneromooo>** Stop making me hungry rehrar.  
**\<sgp>** @rehrar basically yes  
**\<rehrar>** my primary concern is several insidious projects concurrently doing the same thing  
**\<sgp>** So we need to come up with a number we feel mostly comfortable with. Suppose 25% claim the reward. 50%. 75%. 90%. Etc  
**\<rehrar>** *shrug* sell Monero, buy Verge  
**\<muff1nman>** even with much larger ring sizes, isnt the problem that you have two key images where there is a single matching input?  
**\<rehrar>** too much drama  
**\<sgp>** @muff1nman yes, but that only impacts the user who reveals this info  
**\<rehrar>** yes muff1nman, but that affects the tx in question being made only, but there are other effects  
**\<muff1nman>** ah okay thx  
**\<rehrar>** such as when other ring signatures use that now 'known real' output as one of their ring members  
**\<rehrar>** now you can discount that one as fake for sure, making the ringsize effectively one smaller  
**\<muff1nman>** ah so in the case of a larger ringsize, using that ring member would have less of an account  
**\<rehrar>** from 4 other ring members to 3 is a pretty dramatic decrease percentage-wise when compared with something like 10 down to 9  
**\<muff1nman>** sure  
**\<rehrar>** alright, we've run this through, let's move on? :)  
**\<rehrar>** way over time here :D  
**\<sgp>** We often go over for large discussions like these. Better than just cutting them off  
**\<jeet.sidhu>** Does anyone know where to look for historical data on airdrops or forks? Like how many people claimed their bitcoin cash?  
**\<rehrar>** yeah, but at this point everyone got out everything that can be said in a discussion like this  
**\<sgp>** Any final thoughts? I'll look into this further and come up with some more data-driven thoughts  
**\<ArticMine>** Excellent  
**\<ErCiccione>** let'sclose this discussion with this tweet https://twitter.com/monero_v/status/964823517777850368  
**\<sgp>** Good thoughts @jeet.sidhu. I will see what data is available  
**\<ErCiccione>** you FUDers  
**\<snorlax>** @jeet.sidhu see https://forks.network  
**\<rehrar>** I agree with that tweet  
**\<rehrar>** 100% agree  
**\<rehrar>** better to have the flaw visible to thousands than known by a few  
**\<pca>** One thing to keep in mind, is if there is a problem with Monero, MoneroV also inherits the problem.  (and I bet they dont have the right people to fix it)  
**\<muchso>** yep  
**\<snorlax>** @jeet.sidhu you can see both BCH and BTG claims on that site  
**\<sgp>** Ok, for the sake of time we will conclude the meeting.  
**\<sgp>** 7. Confirm next meeting date/time  
**\<rehrar>** tomorrow  
**\<sgp>** The next community meeting will be two weeks from today on 3 March. The next Coffee Chat will be on 10 March.  
**\<rehrar>** fine  
**\<sgp>** Lol, you can hold your own special meeting tomorrow if you want. Just let people know about it :)  
**\<sgp>** 8. Conclusion  
**\<sgp>** That’s all! Thanks for attending this Monero Community meeting, and we hope to see you on /r/MoneroCommunity and #monero-community. Take care, and know that change starts with YOU.  