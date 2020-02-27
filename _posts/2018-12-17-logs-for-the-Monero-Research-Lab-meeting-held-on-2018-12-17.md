---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-12-17
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / surae
---

# Logs  

**\<suraeNoether>** howdy everyone  
**\<sarang>** heyo  
**\<suraeNoether>** i've been sick all weekend  
**\<suraeNoether>** I'M BACK THO  
**\<suraeNoether>** not really  
**\<suraeNoether>** still exhausted but INCREMENTALLY GETTING BETTER  
**\<sarang>** just like monero  
**\<suraeNoether>** heh  
**\<suraeNoether>** allrighty everyone: as usual, we'll open with questions, then discuss the work we've done the past weeks since our last update  
**\<suraeNoether>** does anyone have any questions before we open up?  
**\<suraeNoether>** okay. cool :) we'll ask for questions as we go  
**\<suraeNoether>** since last we met I received and started reviewing sarang's version of the matching paper, and I attended the coincenter workshop in san fransisco, and I met isthmus in person  
**\<suraeNoether>** i paid for that trip out of pocket to not burden the community, fwiw  
**\<sarang>** Anything more about the coincenter workshop? You had mentioned it a bit before  
**\<suraeNoether>** so, to refresh the audience, coincenter writes policy reports to help inform lawmakers and regulators about cryptocurrency technologies, their true capabilities, and to advocate on behalf of financial privacy, to try to persuade lawmakers to not make stupid decisions  
**\<suraeNoether>** if anyone saw the CFTC commissioner's speech in october: there was a small freakout that the CFTC may be prosecuting developers of smart contracts eventually: these are the sorts of things that coincenter is trying to advocate \*against\*  
**\<suraeNoether>** the reports are extremely well written and contain some of the best arguments, in my mind, that financial privacy is necessary for an open society and that large-scale surveillance of financial transactions is basically antithetical to a free and open society  
**\<sarang>** What did you bring to the table from your perspective?  
**\<suraeNoether>** i brought a few arguments favoring privacy that i like a lot, tbh  
**\<suraeNoether>** for example  
**\<kayront>** clearly preserving financial privacy is a step in the right direction, but how to reconciliate regulator acceptance of something like monero, in a world of guilty by default, aml/kyc, FATCA and CRS? if you were to transpose the banking rules as they stand today to the crypto space, then it seems evident (unfortunately) that the general population having access to the famous swiss bank account in their pocket would go against the  
**\<kayront>** direction of the last decade or two, which is granting government the ability to track anything and everything digital (specifically in regards to money flows in this discussion)  
**\<suraeNoether>** i love it when fluffypony talks about how monero can be used to buy banned books in totalitarian regimes like north korea, for example, because it illustrates that \*using a technology that is morally neutral, and can be used for good or for evil\* is not inherently wrong or criminal, and can be used to do ostensibly "good" things for society  
**\<suraeNoether>** kayront: actually  
**\<suraeNoether>** not to hashtag-actually yoiu  
**\<suraeNoether>** the thing is that the banking rules as they stand today give exhcanges like coinbase plenty of power and ability to comply  
**\<sarang>** Exchanges are waiting for super-conservative Coinbase  
**\<sarang>** I'm not convinced that accepting Zcash was a step in the right direction or not  
**\<suraeNoether>** every single cryptocurrency, zcash and monero included, if you are using KYC/AML exchanges, can totally de-anonymize you. so you may ask a better question which is: "why are law enforcement asking for MORE power and control over this new technology?"  
**\<sarang>** lol because they can  
**\<suraeNoether>** for example kayront  
**\<suraeNoether>** sarang: yeah the answer is obvious  
**\<suraeNoether>** hence the political pushback and advocacy  
**\<suraeNoether>** so, for example kayront, a bank today only needs to file a suspicious activity report about information that's happening inside their own bank  
**\<kayront>** suraeNoether: "totally"? sure, they'll be able to track when you get in and out of monero, but after that, the ship has sailed  
**\<suraeNoether>** the guys at Chase arent' responsible for filing an SAR about stuff that happened on Wells Fargo accounts, and vice versa  
**\<kayront>** transfer to your own wallet, churn as you please for increased peace of mind, do whatever you want  
**\<sarang>** I think he's saying that you give them your name and address and bank info, so of course the exchange knows who you are  
**\<kayront>** i think this sort of thing scares the regulator  
**\<sarang>** Sure it does  
**\<suraeNoether>** so the recent trend where pols and law enforcement officials are asking for additional view key access is in contradiction with their current ability to comply  
**\<suraeNoether>** with classic/traditional assets  
**\<suraeNoether>** if Chase doesn't need to report anything beyond one hop outside their bank, why should Monero give outgoing view key access, for example? stuff like that  
**\<sarang>** We need to convince exchanges that they can already comply  
**\<suraeNoether>** so the coincenter workshop was a day of very smart and stimulating people from various coin projects and various non-profits around the world discussing how to convince lawmakers of stuff like this  
**\<sarang>** but regulators are being super cagey about specifics  
**\<kayront>** i find the whole argument very fallible, so don't misunderstand, of course I don't stand for that .. i don't quite understand how sending money to anyone you want to without asking for permission isn't basically the same as chatting up anyone online as you please without permission  
**\<sarang>** kayront: ?  
**\<kayront>** in fact, if you ask me, it opens up a whole new ocean of possibilities  
**\<kayront>** i mean the "guilty until proven innocent" spin on things  
**\<suraeNoether>** kayront there is a strong argumetn from the 1st and 4th amendment right that these financial transactions are free speech and demanding financial histories doesn't jive with the 4th amendment  
**\<sarang>** That's much broader than financial regulation  
**\<suraeNoether>** anyway  
**\<suraeNoether>** not totally relevant  
**\<sarang>** ya  
**\<suraeNoether>** it's interesting  
**\<sarang>** So... good meeting, I take it?  
**\<oneiric\_>** what does MRL think about using hashcash or a reduced monero PoW (like pool mining shares) to secure anonymity networks for p2p?  
**\<suraeNoether>** and political science-y, so we can call it research :D  
**\<sarang>** And you had said that the documents will be published?  
**\<kayront>** :D  
**\<sarang>** oneiric\_: what does that mean exactly?  
**\<suraeNoether>** yeah, sarang, i walked away feeling like it was a room full of allies both for financial privacy in general and for the twin monero-zcash ecosystems. i wasn't expecting that at all, tbqh  
**\<sarang>** nice  
**\<suraeNoether>** sarang: yes, all the reports will be made public on coincenter.org soon  
**\<suraeNoether>** oneiric\_: if you elaborate i could form an opinion :D  
**\<sarang>** In the meantime, anything else to share suraeNoether of interest?  
**\<lurkinandlearnin>** Sounds really interesting. I'll look into those reports when they drop  
**\<suraeNoether>** oneiric\_: i know that stellar uses a weird concensus mechanism involving picking neighbors to form a quorum vote, but rather than being a networking tool, it's intended to replace POW/POS  
**\<lurkinandlearnin>** Hadn't even heard of coincenter until now  
**\<suraeNoether>** sarang: I read the recent andrew miller paper on probing network topology blindly in bitcoin  
**\<oneiric\_>** so, anonymity networks (and ipv6) make it much easier for attackers to perform sybil attacks by spinning up many addresses (nodes) for little cost. adding some form of PoW would help mitigate that possibility by adding some effort to spinning up a node  
**\<sarang>** Interesting, I'd be interested to see how that would work  
**\<sarang>** and how a PoW integrates to it  
**\<suraeNoether>** sarang which is SUPER clever and it could be used similarly for boostrapping blockchain downloads or kovri networking or something like that, if a similar sort of feature can be exploited as in that paper  
**\<sarang>** suraeNoether: link?  
**\<sarang>** Not sure I saw that paper  
**\<suraeNoether>** https://www.cs.umd.edu/projects/coinscope/coinscope.pdf  
**\<sarang>** How new is it? Didn't see on IACR  
**\<suraeNoether>** i saw it tweeted end of last week iirc  
**\<sarang>** word  
**\<suraeNoether>** it's clever: it uses inputs with no known outputs and a bitcoin node's behavior when it receives such an input  
**\<suraeNoether>** it can't be relayed because it doesn't appear valid  
**\<sarang>** Huh, I shall read it today, thanks  
**\<suraeNoether>** yeha, they use a purposeful double spend attempt to suss out which nodes you are \*really\* connected to  
**\<suraeNoether>** anyway: that paper, plus sarang and my matching paper, comprise most of my time last week and this week other htan the workshop  
**\<suraeNoether>** (surae is done now)\\  
**\<sarang>** The matching paper is under its reasonably final review  
**\<sarang>** we'll post here for internal review soon, and then off to the presses  
**\<suraeNoether>** although at the end of the meeting i have a small community announcement  
**\<suraeNoether>** sarang we should also consider whether we want to publish our matching paper \*specifically in a journal\* or leave it as an MRL bulletin  
**\<sarang>** I also spent a good deal of time on that, but kudos to surae for a lot of work on it  
**\<sarang>** Right  
**\<suraeNoether>** i feel like it would be valuable to publish in an applied graph theory journal  
**\<lurkinandlearnin>** Sorry to interupt but could you explain what exactly "matching" means in this context?  
**\<sarang>** And it opens up to additional matching/weighting work too  
**\<suraeNoether>** lurkinandlearnin: ah, good question  
**\<sarang>** lurkinandlearnin: you can apply graph theory to a transaction graph  
**\<sarang>** and this means questions of Monero analysis can be reframed to known graph theory problems  
**\<suraeNoether>** lurkinandlearnin: the idea is basically to link transactions in a transaction graph. if it's just a plain old graph with no additional information, mathematicians call it a "matching problem" or an "assignment problem" or sometimes a "marriage problem"  
**\<sarang>** suraeNoether formalizes this  
**\<sarang>** soon (tm)  
**\<suraeNoether>** lurkinandlearnin: so we are applying known techniques to our graph, to get an overall sense of "how bad" our linkability really is, disregarding less complete approaches previous researchers have used  
**\<sarang>** Once again, a "please stop publishing on this" to others =p  
**\<lurkinandlearnin>** I see. So it's to abstract the data we can get from the blockchain to a form where these established techniques and theories can be applied?  
**\<sarang>** Right, we don't have to reinvent the graph-theoretic wheel  
**\<sarang>** and it also provides bounds  
**\<suraeNoether>** yeah, the number one problem with ring signatures and monero going back years is small anon set sizes. fluffypony makes this an important part of almost every talk he gives, but people still regularly publish papers that re-invent the wheel over and over again. "look, if two signatures have the same ring, you can ... you can... oh boy! i'ma publish!"  
**\<suraeNoether>** the novelty of our approach is we are able to find a lower bound on some specific instances of the matching problem  
**\<sarang>** It's basically how other types of security proofs go... if you could break X, it'd mean you would have solved Famous Math Problem Y  
**\<suraeNoether>** previous approaches have been able to say "well, matching monero is \*no worse\* than sharp P. https://en.wikipedia.org/wiki/%E2%99%AFP  
**\<lurkinandlearnin>** Interesting. So is the paper "groundwork" towards using these techniques or have you already got findings?  
**\<suraeNoether>** but that's like saying "it's no worse than the worst possible problemt hat God himself couldn't solve"  
**\<suraeNoether>** lurkinandlearnin: we are sort of generalizing many previous techniques at once and showing how they fit under a common umbrella  
**\<sarang>** We have some algorithmic findings  
**\<sarang>** Again, it'll be posted here for internal review soon  
**\<suraeNoether>** yerp  
**\<suraeNoether>** it's a good paper  
**\<suraeNoether>** i like it a lot  
**\<suraeNoether>** it really highlights how linkable Monero will be until we get larger anon set authentications  
**\<sarang>** Aside from that, Badass Benedikt Bunz put out a new paper on batching in accumulators: https://eprint.iacr.org/2018/1188  
**\<sarang>** Unfortunately it applies most directly to RSA accumulators, which are a no-go for us  
**\<lurkinandlearnin>** Thanks for the explanations. I'll look forward to it.  
**\<sarang>** np  
**\<sarang>** I'm working a ZtM update regarding spend proofs, which I realized are useful but missing from the tech documentation  
**\<sarang>** as well as some arithmetic circuit research  
**\<sarang>** Otherwise, just trucking along with lit review and code  
**\<sarang>** A side note that several funding requests are open, including those that fund MRL and other developers: https://forum.getmonero.org/8/funding-required  
**\<sarang>** In a bear market, pockets tend to shrink unfortunately :(  
**\<sarang>** (disclaimer: one of those requests is for me)  
**\<lurkinandlearnin>** Ain't that the truth  
**\<sarang>** Loki Foundation is still willing to help fund one of us  
**\<sarang>** to the tune of 15K USD total  
**\<sarang>** If the funding requests don't complete, I would consider accepting the fiat donation under the right conditions  
**\<kayront>** the bear spares no one  
**\<lurkinandlearnin>** Loki Foundation?  
**\<sarang>** Foundation associated to this group: https://loki.network/  
**\<sarang>** Monero-based, so they wish to support researchers (and no doubt it's good PR too)  
**\<sarang>** The Foundation as a legal entity is not allowed to donate in cryptoassets  
**\<sarang>** so they'd have to donate directly in fiat  
**\<lurkinandlearnin>** haha I searched before you answered and only found a german record label  
**\<sarang>** Anyway, I welcome comments on such an arrangement  
**\<sarang>** I would insist that there be no additional strings that wouldn't apply to any other FFS donor  
**\<sarang>** to ensure research independence  
**\<lurkinandlearnin>** Well I've never heard of them but if it can be guaranteed no strings then I don't see the problem  
**\<sarang>** My goal would be to ensure that it doesn't change the nature of MRL's support  
**\<sarang>** It wouldn't become MRL Brought To You By Loki Foundation  
**\<sarang>** Anyway, it could be a moo point if the FFS are funded; then Loki would be interested in supporting a new researcher if one came around  
**\<sarang>** Anyone else have interesting work to share with the group?  
**\<ilyaAldanov>** I do!  
**\<sarang>** carry on  
**\<ilyaAldanov>** But I guess the important stuff should go first.  
**\<ilyaAldanov>** I can go on after the meeting.  
**\<sarang>** Nonsense, all researchers are welcome here  
**\<sarang>** I'm finished with my update, please go ahead  
**\<sarang>** This is the point of the meeting  
**\<ilyaAldanov>** Today I want to present the return addresses.  
**\<ilyaAldanov>** Return address is a GREAT idea.  
**\<ilyaAldanov>** It's also MY idea, but that is unrelated.  
**\<ilyaAldanov>** It's quite simple: include sender's subaddress to every transaction header.  
**\<ilyaAldanov>** To make transactions unlinkable generate the subaddress from transaction's public key and sender's private key.  
**\<ilyaAldanov>** This way it's trivial to generate corresponding private key even after wallet restore.  
**\<sarang>** I was thinking about this earlier in the context of other timelock schemes  
**\<ilyaAldanov>** What good a return addresses for?  
**\<ilyaAldanov>** Many things!  
**\<ilyaAldanov>** The most obvious one: a full or partial refund (interactive).  
**\<ilyaAldanov>** A merchant can send you funds back without asking for your address.  
**\<kayront>** i'm sodl  
**\<ilyaAldanov>** Another one: an exchange can return funds that it can't bind to any account.  
**\<ilyaAldanov>** the famous PaymentID problem.  
**\<ilyaAldanov>** Or if the account is closed for some reason.  
**\<ilyaAldanov>** There can be non-interactive services.  
**\<ArticMine>** or AML / KYC  
**\<ilyaAldanov>** Like micro-credits.  
**\<kayront>** .. or returning unused FFS monies to their owners  
**\<ilyaAldanov>** You send a coin to the public address and get two in a month.  
**\<ilyaAldanov>** But even more!  
**\<kayront>** more, you say!  
**\<ilyaAldanov>** You send money to a specific address and receive a password to something in the dust.  
**\<sarang>** It'd be ~2% increase in a 2-2 txn size  
**\<ilyaAldanov>** Yes. But it's per-transaction, not per-output or per-input.  
**\<suraeNoether>** ilyaAldanov: it's a very interesting idea. if it works out, that means we have two possible ways of going about doing some sort of return functionality  
**\<ilyaAldanov>** It's the only 100% reliable link back to transaction owner.  
**\<lurkinandlearnin>** This is a 10/10 idea. The usefulness of these features could help push the more general adoption of subaddresses (which imo is a urgent goal).  
**\<sarang>** It'd be a fingerprinting method, as usual  
**\<ilyaAldanov>** Yes, but I want to stress out that my return addresses is not limited to refunds.  
**\<ilyaAldanov>** sarang ?  
**\<sarang>** Anytime some transactions include data that not all do, it distinguishes them  
**\<suraeNoether>** it'd be easy to discern who is using these return addresses and who isn't  
**\<ilyaAldanov>** Every transaction should have one.  
**\<ilyaAldanov>** No exceptions.  
**\<suraeNoether>** i can see why you would say that  
**\<suraeNoether>** or suggest it i mean  
**\<sarang>** Yes, but of course you can't make randomness enforced  
**\<lurkinandlearnin>** yes but you could see that the subaddress in the header has received funds in a future transaction, correct?  
**\<suraeNoether>** its essentially, what, 32 Bytes additional per transaction? not so bad at all given the functionality that would come out of it  
**\<sarang>** lurkinandlearnin: no, but you'd see an output in a ring  
**\<sarang>** 64 bytes  
**\<sarang>** 2% add-on to a 2-2 txn  
**\<suraeNoether>** rihgt  
**\<ilyaAldanov>** The return address is just a subaddress - nobody sees when it is used except the owner.  
**\<lurkinandlearnin>** yes sorry that's what I meant  
**\<suraeNoether>** i think we need a write-up before we can really judge how it's supposed to work, but it's v promising  
**\<sarang>** There is one  
**\<sarang>** not published tho  
**\<ilyaAldanov>** I don't publish it because a) it's a draft b) don't want the coins I don't like to implement it first.  
**\<sarang>** The construction of the subaddress is clever ilyaAldanov  
**\<sarang>** Heh, Monero doesn't need to be first, just best  
**\<suraeNoether>** sarang: there's a write-up for ilyaAldanov's idea?  
**\<sarang>** It was sent privately during discussions  
**\<kayront>** fwiw i find this a very interesting idea as well  
**\<sarang>** The more we discuss it, the more I like it  
**\<kayront>** opens up a lot of functionality  
**\<ilyaAldanov>** I sent it to Sarang and Isthmus. Can send to you as well.  
**\<suraeNoether>** seems less disruptive than DLSAG  
**\<kayront>** if it can be made to work without meta/data leakage, sounds like a no brainer  
**\<sarang>** Yes, but doesn't solve the same problems  
**\<oneiric\_>** +1 sounds like a great improvment over payment id  
**\<suraeNoether>** sarang: right, no timelock/block height stuff built in  
**\<sarang>** oneiric\_: it doesn't really solve payment ID either  
**\<sarang>** it acts as a band-aid for when they require payment ID and you forget it  
**\<sarang>** also it's interactive  
**\<sarang>** I'm just saying this is orthogonal to DLSAG  
**\<suraeNoether>** would they be do-able together or would it be one or the other only?  
**\<kayront>** DLSAG = ?  
**\<sarang>** You could probably do a separate return subaddress per output address  
**\<sarang>** MRL-0008: https://ww.getmonero.org/resources/research-lab/  
**\<ilyaAldanov>** If you ask me, I came up with many more use cases for return addresses.  
**\<sarang>** I definitely see the usefulness  
**\<suraeNoether>** DLSAG = dual-output linkable spontaneous anonymous group signatures  
**\<sarang>** But it's our job to rip every idea apart  
**\<ilyaAldanov>** I want to talk about one exceptionally useful case tomorrow.  
**\<sarang>** Not today?  
**\<ilyaAldanov>** One feature per day!  
**\<suraeNoether>** i.e.: usual ringCT but with two output keys and a trigger block before which the recipient of the first can spend the first and after which the recipient of the second can spend the second.  
**\<ilyaAldanov>** There was Hybrid Mining and Emission Curve days already.  
**\<sarang>** ilyaAldanov: it would be necessary to post the construction here for review  
**\<sarang>** this would need to be public, of course  
**\<ilyaAldanov>** Yes, of course.  
**\<sarang>** After you'd brought it up earlier, I started considering the effects this would have if it were optional (or effectively optional), especially on fake selections  
**\<ilyaAldanov>** But right now it's a draft. I really appreciate some comments, especially negative.  
**\<sarang>** This is an important consideration  
**\<sarang>** Even if it's mandatory, you should assume that wallets not using the functionality would be stupid and include all zeros or something  
**\<ilyaAldanov>** It'd be useless if optional.  
**\<lurkinandlearnin>** I like the fact that subaddresses have found another potential use.  
**\<sarang>** and determine what an adversary would do if it saw ring inputs from txns that include a "fake" return address vs a "true" one  
**\<sarang>** ilyaAldanov: I know, but you can't make randomness a consensus issue  
**\<ilyaAldanov>** That's a perspective I didn't think about. Thanks.  
**\<sarang>** It came up with payment IDs a while ago  
**\<suraeNoether>** ilyaAldanov: think about it this way: someone publishes a txn with the return key 000000000000001  
**\<suraeNoether>** how can you tell that's not genuinely random?  
**\<suraeNoether>** should it be blacklisted and not propagated?  
**\<suraeNoether>** what about 000..0?  
**\<ilyaAldanov>** Yep, I get the idea.  
**\<suraeNoether>** or what about 10101110010100111?  
**\<suraeNoether>** coolio  
**\<sarang>** The goal would be to ensure that even if wallets do this, it doesn't affect other users' rings  
**\<ilyaAldanov>** But there're many places where wallets can misbehave.  
**\<sarang>** Yes  
**\<ilyaAldanov>** Like in the change output.  
**\<sarang>** So we should assume they'll be awful and minimize the damage  
**\<sarang>** ilyaAldanov: if you approve, I can send your document to suraeNoether  
**\<ilyaAldanov>** I approve.  
**\<suraeNoether>** or just email it to me at surae@getmonero.org  
**\<ilyaAldanov>** But I want feedback!  
**\<sarang>** Sure; you'll get the best feedback if/when you release the draft publicly, tho  
**\<ilyaAldanov>** Are there any spies of the coins I don't like here?  
**\<suraeNoether>** ilyaAldanov: probably, but they also are not very good at their jobs :D  
**\<sarang>** probably  
**\<ilyaAldanov>** I don't like coins with premines, developer's rewards and obnoxious leaders.  
**\<sarang>** Welcome to Club Monero  
**\<sarang>** I assume Monono will steal this, but I'm ok with that  
**\<sarang>** So our time is nearly up... anyone else have info to share?  
**\<nioc>**  a while ago there was a request for a recommended ring size for the next hard fork which is April and the code freeze is Jan.  I know research has been done to address this request.  Where do we stand in regards to a possible ring size increase?  
**\<sarang>** suraeNoether: you'd indicated you had a community announcement  
**\<lurkinandlearnin>** I am a spy  
**\<ilyaAldanov>** I'll publish it, just to put one more section about Shared Secret.  
**\<sarang>** cool  
**\<lurkinandlearnin>** oh wait I wasn't meant to say that out loud  
**\<sarang>** I do not see a reason to increase at this time  
**\<nioc>** but more is better   :D  
**\<suraeNoether>** nioc: recent research suggests that increasing ring size \*may not\* be super helpful, even though \*the min time required\* to generate a guess at the true Monero transaction history is proportional to r: double r and you double that min time required  
**\<suraeNoether>** which sounds great  
**\<suraeNoether>** but it's not very efficient  
**\<suraeNoether>** i would rather: increase r by 1 and the difficulty doubles  
**\<sarang>** suraeNoether: your community annoucement? (I don't want to go over if people need to leave)  
**\<sarang>** Hmm he has vanished  
**\<lurkinandlearnin>** Community announcement: https://www.youtube.com/watch?v=CiRu\_W9tzM8  
