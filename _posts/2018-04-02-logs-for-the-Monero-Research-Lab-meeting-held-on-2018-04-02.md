---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-04-02
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / surae
---

# Logs  

**\<suraeNoether>** meeting time!  
**\<antw081>** i think he is attributing research to his imaginary R&D research group  
**\<sarang>** If he's claiming they're doing the "improved" CT then I am not concerned at all  
**\<sarang>** because that's junk  
**\<antw081>** FFS he is known to basically hate Monero  
**\<suraeNoether>** allrighty, 1) Greetings everyone, 2) what MRL has been up to, 3) what we plan on getting up to. i know it's a really loose agenda, but hey  
**\<antw081>** FFS = FYI  
**\<sarang>** monero loves him too  
**\<suraeNoether>** so, hi!  
**\<suraeNoether>** who's all here?  
**\<rehrar>** Cat of the week, sarang?  
**\<ArticMine>** hi  
**\<rehrar>** also, I'm here.  
**\<sarang>** He's hiding out in the clothes dryer now  
**\<sarang>** and I'd have to get a photo and scrub the metadata first  
**\<oneiric\_>**  hiyo :)  
**\<koe>** hi :)  
**\<hyc>** 12 monekys more like  
**\<hyc>** 12 monkeys was a pretty good film tho  
**\<suraeNoether>** allrighty: sarang, what have you been up to?  
**\<suraeNoether>** https://imgur.com/a/gpv13  
**\<sarang>** A lot of paper reading to stay up to date and learn, released my monthly report on r/Monero and FFS, checking up on moneromooo's recent addition of batch verification to his BP code and tests  
**\<sarang>** Trying to stay afloat with Son of Monerolink  
**\<sarang>** Seems to be a lot of putting out small fires that idiots start  
**\<hyc>** Matthew Green all proud of himself about that  
**\<sarang>** My gods the press coverage has been abysmal  
**\<sarang>** and much of it by people who should absolutely know better  
**\<sarang>** Schneier basically said HEY LOOK A THING I SAW ONLINE  
**\<koe>** negativity sells on a bust  
**\<ArticMine>** but only for a while  
**\<suraeNoether>** This past week I've been working on reviews to the multisig paper. andytoshi has provided me some comments and I'm making some changes consequently  
**\<koe>** what is your timeline for release?  
**\<sarang>** What sorts of changes? I'm curious  
**\<suraeNoether>** the paper in its current form is already on github koe, changes will be uploaded by the end of the week I think  
**\<suraeNoether>** the main large-scale complaint is that I specify stuff that could be chalked up to secure side-channels, and there is some back-and-forth discussion about using fresh multisig keys versus salting and hashing your current user keys  
**\<koe>** oh I dont see it in MRL, is there another spot?  
**\<sarang>** True, there were plenty of discussions during the development about the nature of secure communication between coalition members  
**\<sarang>** I'll be curious to see what updates you make from it  
**\<suraeNoether>** sechttps://github.com/b-g-goodell/research-lab/tree/in-prep/publications/bulletins/MRL-0007-multisig  
**\<suraeNoether>** whoops  
**\<suraeNoether>** https://github.com/b-g-goodell/research-lab/tree/in-prep/publications/bulletins/MRL-0007-multisig  
**\<koe>** cool thanks :)  
**\<sarang>** Tell us about fresh keys vs salting  
**\<suraeNoether>** if the hash function is good, no one could tell the difference between using fresh keys or using hashed ol keys, and the reason to not re-use old addresses is to prevent exclusion attacks where two coalitions collude to remove control of some common coalition members... but if the old keys have been hashed with new salts, that isn't a danger with a good hash function. so ...  
**\<sarang>** right...  
**\<suraeNoether>** for convenience to users, i think it's okay to re-use keys this way, but to describe the scheme for the paper and make it more clear, readable, compact, etc, I think i agree with andytoshi that the salted-then-hashed keys can be at least moved to the end  
**\<suraeNoether>** as a "if users really want to do it this way, they can do it" sort of thing as opposed to built into the scheme  
**\<suraeNoether>** it will make it easier to prove secure too  
**\<suraeNoether>** andytoshi had a variety of other very helpful comments. i'm most concerned about my unforgeability proof at this point, and revisions are still happening.   
**\<sarang>** roger  
**\<suraeNoether>** in addition to all that, i invented what i think is a novel signature scheme in the elliptic curve setting. depending on construction, the security can fall onto the existence of one-way 2nd pre-image resistant group isomorphisms, instead of the discrete log hardness assumption  
**\<hyc>** going for QC-resistance?  
**\<suraeNoether>** current draft descritpion is here; an implementation requires, i think, a really freaking large group, though  
**\<suraeNoether>** hyc no, just had a dream one night. :P  
**\<suraeNoether>** https://www.sharelatex.com/project/5ab98a71234cc910159f828b  
**\<sarang>** Did you make updates to it since you first showed me?  
**\<suraeNoether>** it's been undergoing pretty much constant revision, i don't recommend anyone read it yet. you have the basic idea from the first read-through and until stuff is more formal, it's just me messing around  
**\<suraeNoether>** it'd be nice to be able to pick some folks brains \*in person\* at a whiteboard, though  
**\<sarang>** always is  
**\<rehrar>** suraeNoether: will you bill for your sleeping time since you seem to work then also?  
**\<suraeNoether>** i know andytoshi isn't a formal contributor to MRL, but we enjoy his assistance an awful lot around here...  
**\<suraeNoether>** and since this is a research meeting, andytoshi, would you feel comfortable going over your BP work again for those who missed it earlier?  
**\<suraeNoether>** rehrar: i don't bill by the hour, which is why i can't put work down ever  
**\<hyc>** any chance andytoshi will co-author any papers with you?  
**\<suraeNoether>** hyc maybe if i write something worth publishing. :P oh! my last paper from grad school has been thrown up on arxiv and is seeking publication. not technically an MRL accomplishment, but my co-author let me know he put it on arxiv and submitted it  
**\<suraeNoether>** nuts, i wanted to chat with hyc about random-code POW  
**\<sarang>** Any other updates?  
**\<suraeNoether>** Not from me, not about MRL or research. If anyone has any other research projects they have been working on/would like to discuss, fire away...  
**\<suraeNoether>** or any questions, etc  
**\<sarang>** suraeNoether had mentioned an upcoming conference very relevant to our interests  
**\<antw081>** do you actually get informed if someone references your work in white paper?  
**\<sarang>** Depends on how they're released  
**\<antw081>** ok  
**\<sarang>** Google Scholar can pull citations from a lot of formats, for exampl  
**\<suraeNoether>** antw081 google scholar tracks citations of whitepapers and you can set up alerts.  
**\<sarang>** but for informal non-cached stuff, not necessarily  
**\<suraeNoether>** Ah, yeah, so there's this conference in London in 2 weeks. I would normally just buy tickets and go and then start an FFS for reimbursement (if possible) but tickets are A LOT more than they were when I did the same thing for Switzerland.  
**\<suraeNoether>** and I don't want to just impulsively go to conferences last minute  
**\<sarang>** you should send meeeee  
**\<sarang>** It is a lot though for a one-day  
**\<sarang>** suraeNoether: link?  
**\<sarang>** looks like good talks relevant to cryptocurrency privacy  
**\<suraeNoether>** yes, and the first MAGIC board meeting is in a day or two after that conference  
**\<sarang>** and that's kind of our specialty and junk  
**\<suraeNoether>** http://ieee-sb2018.cs.ucl.ac.uk/#schedule  
**\<sarang>** I was totally unaware of this event until earlier today  
**\<suraeNoether>** so i'm okay with not going to it, but \*i'm totally willing to hop on a plane and jet lag myself later this month\* if that is what this community wants from me. i'm your humble servant, as it were. :P  
**\<suraeNoether>** \*on that note\* I would like to start an MRL calendar or something like that, where we throw up big research conferences in bitcoin, blockchain, cryptocurrencies, and infosec, and our travel plans  
**\<suraeNoether>** any time \*anyone\* sees a conference or an event i htink it'd be cool if folks started to just passively populate this calendar  
**\<sarang>** Just use Github issues?  
**\<antw081>** FFS it, it will get funded  
**\<sarang>** I think it'd be excellent to go  
**\<suraeNoether>** antw081 and if it doesn't, we just simply won't go. :P  
**\<sarang>** I haven't done an international conference for MRL  =p  
**\<suraeNoether>** sarang: start an FFS for both of us, whydon'tya  
**\<sarang>** Wish it were a longer event though, we could talk about this stuff forever  
**\<sarang>** sure thing  
**\<antw081>** FP, FFS a speaking tour, it was funded in no time.  
**\<sarang>** I find it funny to see Monero talks and not know about the contents in advance 0\_0  
**\<suraeNoether>** besides, i would like to be able to chat with some of the organizers in person, since i want to organize a conference for next year  
**\<sarang>** suraeNoether: we can chat after meeting about the FFS detais  
**\<sarang>** see what the community thinks  
**\<suraeNoether>** okay, let's see here... we've covered research, travel, a bit of MAGIC...  
**\<suraeNoether>** later today i'm writing up my FFS end-of-month summary...  
**\<sgp\_[m]>** What's the approx expense?  
**\<rehrar>** sgp\_[m]: will sponsor you  
**\<suraeNoether>** sgp\_[m]: tickets alone for me are 2400USD. doesn't include loding  
**\<sarang>** Airfare for me would be ~1500-1700 USD  
**\<suraeNoether>** lodging\*  
**\<sarang>** This one is not cheap, that's for sure  
**\<suraeNoether>** Okay, the last thing I wanted to chat about   
**\<suraeNoether>** is \*next year of MRL\*  
**\<suraeNoether>** for those of you who recall correctly, I began in June of last year,  
**\<suraeNoether>** aaaand  
**\<suraeNoether>** well, I want to know how folks like the direction we are going, see if anyone thinks we should be taking different directions, perhaps see how community members feel about our resources  
**\<rehrar>** oh shoot, it's time for another Revuo already.  
**\<ArticMine>** My take is that MRL is on the right track  
**\<rehrar>** I think MRL is doing good stuff. Happy with you guys.  
**\<suraeNoether>** I wouldn't mind hiring an additional researcher or two. but I don't want to overly burden the community, though, and  
**\<suraeNoether>** it reminds me of a story, I have no idea who told it to me  
**\<suraeNoether>** but you tell two guys to go dig a ditch and everything is fine. you later hire a third guy to help and tell him he's in charge of the first two and all work totally stops  
**\<suraeNoether>** or send a third guy over and have one of the first two guys be in charge, same thing happens  
**\<suraeNoether>** I'm not sure how sarang feels bout hiring additional folks, if he feels like we could use a person for specific things or not, etc  
**\<antw081>** we can do grants maybe? to do research on Monero related topics  
**\<sarang>** When I started shortly after suraeNoether, our goals seemed pretty broad: figure out what we're doing right, correct what we're doing wrong, and figure out what comes next. The way we're funded always makes me feel guilty about providing good deliverables, but I think the community realizes that's not necessarily the point  
**\<rehrar>** that's an interesting idea antw081. More on a contract basis for specific stuff.  
**\<ArticMine>** but this begs the question do we want to dig a second ditch  
**\<suraeNoether>** antw081: that's sort of hard to fund on a per-project basis.   
**\<suraeNoether>** ArticMine: +1 heh  
**\<suraeNoether>** so, the thing is  
**\<antw081>** it can be general fund  
**\<antw081>** like HackerOne  
**\<rehrar>** question, would a third researcher have unique things to do, or just be another set of eyes on the current stuff?  
**\<antw081>** or Bug Bounty FFS  
**\<sarang>** That also begs the question: what would that mean for my role? Or suraeNoether ?  
**\<sgp\_[m]>** I think grants make the most sense for additional research. Get some people to focus more formally on specific research  
**\<sarang>** Should we move to a per-project funding too/  
**\<rehrar>** I don't think so sarang  
**\<antw081>** ok i gut to ask  
**\<rehrar>** I think having two general researchers that do what they feel needs to be done is beneficial  
**\<antw081>** is there like a group of cryptographers called the: Is there an organisation called Chainmasons?  
**\<sarang>** ?  
**\<koe>** lol  
**\<antw081>** sorry: Chainmasons  
**\<antw081>** what is that  
**\<sarang>** rehrar: I ask because I want to ensure suraeNoether and I are providing value to the community  
**\<oneiric\_>** sarang + suraeNoether = 33rd degree Chainmasons  
**\<antw081>** his guy claims to have formed a group of researchers - referred to as Chainmasons  
**\<rehrar>** In my personal opinion, you the four full time hired people, you two, mooo, and anonimal are good four cornerstones for teh community  
**\<antw081>** his = this  
**\<koe>** it seems like if the MRL didn't exist, Monero would feel a lot more precarious and purposeless  
**\<antw081>** https://bitcointalk.org/index.php?topic=3118418.msg32233166#msg32233166  
**\<sarang>** I view part (certainly not all) of my value as staying afloat of new developments that we don't necessarily have specific projects for  
**\<rehrar>** yes, this is important  
**\<koe>** like, shouldn't there obviously be research into privacy for a privacy focused crypto?  
**\<rehrar>** Monero does not necessarily equal ring sigs, ringct, and stealth addresses  
**\<sarang>** koe: A lot of good research happens academically too  
**\<sarang>** not affiliated with anyone  
**\<sarang>** We often use that work (e.g. BPs)  
**\<sgp\_[m]>** I think at the moment you all are more responding to other research, changes, and looking into thoughts people have. There's definitely value there, but there's also value in allowing people to be focused on certain projects.  
**\<koe>** yeah, but the MRL cares about making that stuff apply to Monero  
**\<rehrar>** I may not speak for the community though, since I'm a privacy idealist, and this stuff you guys do gets me excited :D  
**\<sarang>** sgp\_[m]: definitely  
**\<suraeNoether>** so, the reason i bring all this up is this  
**\<rehrar>** if I had one comment though it would be this:  
**\<sarang>** When I came on, there were some specific projects in that realm, like sublinear ring sigs, but more kept getting added to our plates  
**\<sgp\_[m]>** sarang is the intent for MAGIC to provide research grants? Eg: support one group taking a deep dive into the effectiveness of churning  
**\<rehrar>** I think time should be split fairly evenly between new research, and improving the privacy and security of the stuff we already have implemented. As an example, and as I have stated before, I think designated research into optimal ring sizes, fixed ring size vs non, and other stuff of that nature should be a higher priority than it currently is.  
**\<sarang>** MAGIC is definitely intended to provide research grants as part of its mission  
**\<sarang>** rehrar: agreed, but it sucks that these things are often not so neatly delineated  
**\<rehrar>** I understand.  
**\<suraeNoether>** if i was hired at a university and got a big grant, or if i was hired at a big company and had resources, i would write a budget, hire folks, get a proper lab going where representatives from the lab regularly travel to represent the lab and disseminate results, etc etc. very very different approach from getting hired at a small start-up  
**\<suraeNoether>** and i feel like sarnag and I have spent the first year treating MRL sort of like the start-up approach  
**\<suraeNoether>** but maybe there is a middle way  
**\<sarang>** that's a good analogy  
**\<sarang>** The specific goals were much smaller back then  
**\<suraeNoether>** rehrar: MAGIC can give research grants, but not to open-source software projects (non-profits in america cannot touch OSS)  
**\<sarang>** Now we have more irons in the fire  
**\<ArticMine>** One thing to keep in mined is that this is a very fluid situation  
**\<sarang>** ArticMine: how so  
**\<ArticMine>** A significant change in XMR/USD  
**\<suraeNoether>** yeah, if the market bottoms out further over the next six months, buttholes will get progressively tighter  
**\<sarang>** true  
**\<suraeNoether>** or vice versa, we'll go full goatse at 12,000 USD/XMR  
**\<antw081>** true  
**\<ArticMine>** ... and there is also the flipside  
**\<sgp\_[m]>** As an non-researcher, I think the "best" way forward is to balance both. I think the project will demand that it becomes more formalized  
**\<rehrar>** this is an important thing to consider. The FFS, while working so far, has shown some signs of beginning to sit down to catch its breath  
**\<suraeNoether>** rehrar Yeah, pockets aren't infinitely deep  
**\<sarang>** So we'd have to consider the carrying capacity of the funding network  
**\<rehrar>** this applies to all sorts of people who want to put out more 'FFS propoasls'  
**\<rehrar>** I think as a community we need to gauge what proposals are really worth funding  
**\<suraeNoether>** at the very least, we have 2 months to sort of figure out \*whether\* or \*how much\* our directions shall shift for the second half of 2018. not a super urgent conversation, and 2 months is an eternity in cryptocurrencies  
**\<sgp\_[m]>** There should be a need for people to do what you both do right now  
**\<sarang>** I constantly worry that my FFS will be the last to get fully funded :/  
**\<sgp\_[m]>** But I expect future grant-based research to be more specific  
**\<rehrar>** ye, no job security is indeed one of the downsides of changing the world :P  
**\<suraeNoether>** sarang: same, i'm actually regularly worried fluffypony is going to text me a big unhappy horse pic  
**\<suraeNoether>** so we'll table this discussion for now  
**\<nyeaa>** If I may offer the perspective of an outsider: It is often quite hard to even grasp where to start research, maybe having a list of problems that need to be solved could give more people the opportunity to contribute. We could then just reward people when they solve a problem, based on how hard the problem is. this way anyone can give it a shot without entering a paid commitment, but with the certainty that they will be  
**\<nyeaa>** paid for their work if they are successful  
**\<suraeNoether>** oh, hi heh  
**\<sarang>** This line of reasoning isn't new at all. There are camps that value more "open-ended" research because it often contributes in novel ways, and camps that really want to push specific projects that may or may not have return due to their specificity  
**\<suraeNoether>** nyeaa merely formalizing our problems and characterizing whatever constitutes a solution is a monumental task in itself. :\\  
**\<rehrar>** m2049r[m] is facing a similar issue with his FFS proposal  
**\<sarang>** suraeNoether: many of our open questions on things like churn, optimal ring size, fixed vs variable, are partly due to a lack of formalization of attack vectors IMHO  
**\<sarang>** our attack surface is much different than other projects  
**\<sarang>** thanks to ring sigs and key images  
**\<rehrar>** can't just fall back on all the work done on bitcoin...again  
**\<sarang>** Maybe this also speaks to the need for suraeNoether and I to devote less time to new broad ideas and more to existing fiddly problems  
**\<rehrar>** with a fraction of the third party interest  
**\<suraeNoether>** fwiw i am willing to throw some xmr at m2049r[m] but that's aside the point.  
**\<rehrar>** he really is quite amazing, isn't he? Did alone what nobody did.  
**\<rehrar>** popped out of nowhere :D  
**\<Inge->** I feel a lot mor comfortable using XMR with monerujo than I do using bitcoin.  
**\<rehrar>** clock is ticking, our time is limited boiz  
**\<suraeNoether>** allrighty, let's conclude with this  
**\<rehrar>** (in regards to FFS)  
**\<suraeNoether>** Anyone who is willing to take out Issues on the MRL github for upcoming conferences will be rewarded with admiration  
**\<suraeNoether>** end of the week we should have another iteration of the multisig paper to read  
**\<rehrar>** admiration. A new coin...or...?  
**\<endogenic>** nobody  
**\<suraeNoether>** i got a document camera for making whiteboard videos, too, forgot to mention that  
**\<endogenic>** monero: nobodycoin  
**\<suraeNoether>** okay \</meeting>  
