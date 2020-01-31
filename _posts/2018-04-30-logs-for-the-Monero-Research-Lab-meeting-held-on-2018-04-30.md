---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-04-30
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / surae
---

# Logs  

**\<sarang>** dingdingding  
**\<sarang>** it's time  
**\<rehrar>** h'lo  
**\<suraeNoether>** Hi everyone~  
**\<suraeNoether>** Welcome to our research meeting  
**\<UkoeHB>** g day  
**\<suraeNoether>** One week ago today, Sarang and I were in London  
**\<midipoet>** hello  
**\<suraeNoether>** thanks to this generous community  
**\<sarang>** It seems as if it were only a week ago  
**\<suraeNoether>** heh  
**\<sarang>** It was highly productive  
**\<sgp\_[m]>** Hello  
**\<sarang>** We got to meet some London meetup organizers before the event, which was great  
**\<suraeNoether>** yes, this is where we spoke with Pedro Moren-Sanchez, who together with his student (who goes by donut in here) invented refund adresses for Monero  
**\<sarang>** I'm analyzing some preliminary material from them  
**\<sarang>** There's some question about the applicability of hiding block heights  
**\<sarang>** and whether this provides sufficiently better information obscurity to make it worthwhile  
**\<sgp\_[m]>** Great sarang! Glad you could make that work  
**\<suraeNoether>** Since then, other than recovering from jetlag, I've been working non-stop on the multisig paper, which has come a long way... but I've run into a roadblock on the proof of unforgeability, involving the key image, the signing oracle, and access to a discrete logarithm oracle  
**\<sarang>** it involves a change to the ring signatures and key images  
**\<suraeNoether>** in addition to that, I brought rehrar, sgp\_[m], and sarang out to Denver to meet with me and my wife about MAGIC, Multidisciplinary Academic Grants in Cryptocurrencies  
**\<midipoet>** whats MAGIC?  
**\<midipoet>** or rather, can you elaborate..  
**\<suraeNoether>** MAGIC is (or will be) a 501(c)3 non-profit based in Colorado, USA  
**\<sarang>** a Colorado nonprofit organization dedicated to empowering the next generation of people in this space  
**\<midipoet>** nice  
**\<suraeNoether>** our goal is to promote education and scientific research, as well as community and educational outreach, in privacy infrastructure for the public good  
**\<midipoet>** that is actually pretty awesome  
**\<suraeNoether>** the basic idea will be to take some of the capital flowing into cryptocurrencies and close the loop back toward education. provide scholarships, provide research grants to researchers and infrastructure grants to schools, and to host conferences on privacy enhancing technologies  
**\<sarang>** It will help boost education (which is great for many reasons) and also can help to promote privacy in the eyes of the public  
**\<sarang>** I'm not one for focusing solely on PR, but it could help  
**\<suraeNoether>** \*nod\*  
**\<sarang>** Kudos to suraeNoether for all the planning on this  
**\<sarang>** it's a ton of work  
**\<suraeNoether>** well, so is math, and this is a way for me to procrastinate on one by being productive in another, and vice versa. :P  
**\<midipoet>** i think if you can redirect some of the capital flows alone towards solid scientific research you are doing a great service already  
**\<midipoet>** there is a lof of greed in crypto  
**\<suraeNoether>** thanks midipoet   
**\<sarang>** Our goal is focus first on education, and then on research  
**\<sarang>** The research side overlaps a bit with some other groups (which is totally fine and beneficial)  
**\<rehrar>** MAGIC focuses on ecological conservation and saving the whales  
**\<midipoet>** lol  
**\<sarang>** hehe  
**\<rehrar>** oh wait, I think I dreamed that (no joke) after our meeting  
**\<suraeNoether>** our first year we don't expect to get enough money to provide a substantial amount towards research, which is pretty expensive. the first year we are going to focus on scholarships, hosting a conference, and hopefully building a computer lab or a library for some impoverished primary schools  
**\<sarang>** Hopefully the 501(c)(3) process goes smoothly. It's very... federal  
**\<suraeNoether>** I'll have more info on that later this week  
**\<suraeNoether>** tomorrow, it's lawyer meetin' time  
**\<sarang>** excellent  
**\<midipoet>** nice  
**\<sarang>** It's worth noting that donors are free to remain anonymous, in the spirit of Monero  
**\<sarang>** but the 501 status will allow donations to be tax-deductible in the U.S. if donors reveal themselves  
**\<midipoet>** creating goodwill around crypto is needed. a lot of people have a very strange view of it, especially since the whole ICO thing  
**\<sarang>** midipoet: definitely  
**\<sarang>** The only other group I know of trying a similar-ish thing is the Zcash Foundation  
**\<sarang>** We'll certainly apply for one of their grants if possible  
**\<sarang>** This work transcends silly interproject politics  
**\<midipoet>** i could tell you a sad story about what computer science kids thought crypto is about in nigeria  
**\<madLyfe>** yay!  
**\<sarang>** crypto = ca$hmoney  
**\<madLyfe>** https://i.imgur.com/J2Vyl27.png  
**\<midipoet>** pretty much sarang  
**\<suraeNoether>** So, from sarang's research we've been looking at refund addresses. from mine, I'm struggling with signing oracles, key images, and discrete logarithms in our unforgeability proofs of multisig (ahem). from educational outreach, we have several folks from the monero research lab and the monero community participating. We even got dinner with Zooko to get ideas on including more independent folks, and I'm  
**\<suraeNoether>** reaching out to two possible additional board members later today  
**\<hyc>** ... silly politics is based on technological assessment tho  
**\<madLyfe>** wrong channel. sorry.  
**\<sarang>** hyc: I totally see that side of it  
**\<sarang>** But for the purposes of this organization it's all silly  
**\<sarang>** I should have clarified  
**\<sarang>** We'll take donations where we can find them if it means helping more students and communities  
**\<suraeNoether>** on another note, a representative from the ZCash foundation asked if we know of anyone in the Monero community who would be willing to serve on the ZCash Foundation board of directors. Because ZCash Foundation, despite the name, is independent of ZCashCo, is a non-profit focused on internet payment and privacy infrastructure also, even if one disagrees with the zcash design philosophy (which is totally fair)  
**\<suraeNoether>** you could still contribute to the privacy community as a whole  
**\<suraeNoether>** hyc maybe you should do it :D  
**\<suraeNoether>** of course, no one from Monero \*needs\* to go and attempt that, but I think it's nice that they reached out  
**\<midipoet>** would you not lose some street cred sitting on that board?  
**\<rehrar>** I second hyc  
**\<rehrar>** he has the good looks and charisma necessary  
**\<suraeNoether>** midipoet: almost certainly.   
**\<suraeNoether>** rehrar: and the fiddlin' talent  
**\<sarang>** midipoet: maybe, but that's up to the individual  
**\<rehrar>** midipoet: street cred is for shmuks  
**\<suraeNoether>** rehrar: ^ +1  
**\<midipoet>** schmuks in Zcash suits  
**\<sarang>** It's worth noting their organization documents include language specifically mentioning supporting the Zcash network  
**\<sarang>** FWIW  
**\<rehrar>** I don't agree with many things of the Zcash implementation, but they're pushing the privacy scene forward  
**\<rehrar>** in a similar way that we are as well with our work  
**\<sarang>** I choose to believe that better research and public perception of privacy will help us all  
**\<rehrar>** right, even if this whole cryptocurrency experiment fails, the world can learn  
**\<midipoet>** yeah, i agree as well. just sceptical  
**\<sarang>** and they're literally making free money available for research and other helpful projects  
**\<suraeNoether>** personally, i think that in 20 years or so, we'll look at the different currency teams in the same way we look at IBM vs. microsoft. it's not weird for IBM guys to get lunch with microsoft guys, or for them to do business together, and probably any market forces that improve one will lead to improving the other.  
**\<suraeNoether>** i mean  
**\<suraeNoether>** there's a positive covariance in market performance across most of the big cryptocurrencies, so high tides lift all the boats, so to speak  
**\<sarang>** It's like commercial airlines... the management types see each other as the devil, but the pilots all help each other out since they're out to get people there safely  
**\<sarang>** maybe  
**\<suraeNoether>** lol maybe  
**\<rehrar>** that said: https://www.youtube.com/watch?v=A51Bl3jkF0c  
**\<sneurlax>** to continue that analogy, it's like Google using Java for Android, which was made (or maybe its IP is just now owned) by Oracle  
**\<rehrar>** ^ continues to be one of my favorite videos (10 seconds long)  
**\<suraeNoether>** sneurlax: sure lol  
**\<sarang>** anyway  
**\<midipoet>** aha  
**\<suraeNoether>** ok, so that covers the basic research from the last week, and our educational outreach, and the various political-ish connections MRL has made with other projects  
**\<sarang>** My monthly report details a few other things we've been doing: https://www.reddit.com/r/Monero/comments/8fzfzx/april\_monthly\_report\_from\_sarang\_noether/  
**\<suraeNoether>** has anyone done anything else they want to chat about? interesting simulations? I know silur has expressed some interest in getting more involved at MRL, but he is suffering under the delusion that one of us is in charge  
**\<sarang>** The audit has begun for the two larger groups  
**\<suraeNoether>** oh! audit! yeah!  
**\<sarang>** Nothing to report there, just reviewers getting their hands dirty  
**\<sarang>** but it's good news  
**\<suraeNoether>** good, good, it's before May so that's pretty good  
**\<sneurlax>** uh, yeah, what's your favorite programming language with which to verify claims/reports? Python?  
**\<midipoet>** i want to signpost the research i am doing. some of you will have heard it a million times, but formal requests for interviews with devs/cryptographers will be coming very soon. so warning!  
**\<sarang>** sneurlax: I dig Python for tools  
**\<sarang>** We also need to have fee structure discussions sooner rather than later  
**\<sarang>** and decide precisely how that will change with the BP deployment  
**\<rehrar>** oh shoot, that's a big conversation that we don't want to leave for the last minute  
**\<sarang>** yes  
**\<sarang>** We keep almost having the conversation  
**\<sarang>** Fees are probably the most publicly-visible part of the BP thing  
**\<rehrar>** as well, would there be work for an undergrad mathematician (well versed in statistics)? I know of one that would probably want to get involved over the summer. Would be at the disposal of our MRL PhDs  
**\<sarang>** One thing I would like is a clean Python library giving data structure access to transaction trees  
**\<suraeNoether>** sarang let's talk about fees later today or tomorrow?  
**\<suraeNoether>** rehrar: what sarang said: visualization of transaction histories  
**\<sarang>** i.e. this transaction has these inputs in its ring, and those trace back to other rings, etc.  
**\<sarang>** not even visualizations  
**\<sarang>** just a library giving clean data structures  
**\<sarang>** we can do all sorts of things with that  
**\<sneurlax>** sarang: suraeNoether: that is the basis of my tool  
**\<suraeNoether>** yeah, fair enough, i'm more interested in various statistical properties of those things  
**\<sarang>** Yeah I wanted to ask about details with that  
**\<suraeNoether>** sneurlax: want to talk about it, since it came up?  
**\<sneurlax>** I can port that to Python. the more information/specs you can proivide, the less questions I'll have later  
**\<sarang>** Sure, let's chat after the meeting sneurlax  
**\<sneurlax>** perfect  
**\<sarang>** Even if it's not Python, having something easy to implement will be great  
**\<suraeNoether>** yeah, i mean from my point of view  
**\<nioc>** always check with ArticMine when it comes to fees  
**\<suraeNoether>** i'm interested in things like the distribution of sizes of transaction trees, how often outputs are re-used within the same, tree, stuff like that  
**\<sarang>** Yes, it's a discussion for many people  
**\<suraeNoether>** nioc: yeah, he has something written up already  
**\<sarang>** but one that needs to be had  
**\<suraeNoether>** iirc  
**\<sarang>** Any other interesting work lately?  
**\<sarang>** (BTW we should arrange some time in -dev meeting for fee talks)  
**\<nioc>** should be a dev meeting this coming Sun  
**\<nioc>** rehrar: ^^^ ??  
**\<rehrar>** yes nioc  
**\<sgp\_[m]>** Was this discussed? https://github.com/moneroexamples/key\_images\_comparison  
**\<suraeNoether>** it has not been  
**\<suraeNoether>** wow!  
**\<suraeNoether>** much smaller numbers than I was expecting  
**\<suraeNoether>** you know, endogenic earlier asked about the plausibility of long-term blackballing  
**\<suraeNoether>** and I responded with a silly analogy, comparing the monero blockchain to a pile of radioactive material: outputs have half-lives of their anonymity as bad actors perform more and more blockchain forensics, they expose more and more old outputs...  
**\<sgp\_[m]>** Thoughts on the proportion used, and the proportion that used the tool? I actually felt that 10% of reused key images using a special tool to pair outputs was unusually high  
**\<hyc>** lol pretty sure Zcash team has me blacklisted  
**\<suraeNoether>** i meant the % that have at least one re-used key  
**\<suraeNoether>** hyc it's what you get for being such a lovely violinist  
**\<hyc>** harhar  
**\<sneurlax>** @sgp\_:matrix.org would you mind linking your previous work on key image reuse impacts at ... what was it, % reuse?  
**\<suraeNoether>** if we make it clear which outputs are provably spent, then what we are doing is relying on economic activity frontloading this radioactive decay process, hoping that a big mass of anonymous outputs stand between us and the back end, as blockchain forensics unravel the blockchain from the genesis block moving forward. so the only way this sort of thing is sustainable is if we have economic activity outpacing  
**\<suraeNoether>** forensics efforts  
**\<midipoet>** thats quite interesting  
**\<sneurlax>** I just ask because I liked the work, sqp  
**\<suraeNoether>** it highlights that ring sigs, or at least "small anon set" methods, need to be replaced  
**\<sneurlax>** that big mass probably has a lot of dead ends that'll confound that unravelling. who knows how many keys have been lost.  
**\<sgp\_[m]>** sneurlax here's the Google Sheet (logout of Google): https://docs.google.com/spreadsheets/d/1iLa\_yklutjHqn\_DrOlO\_eTb00l4YDAezijX2J5r6P14/edit?usp=sharing  
**\<midipoet>** or there is some critical mass of privacy enaction that provides protection...  
**\<sneurlax>** there are definitely outputs which will never be reused because their owners forgot about them, lost their keys, etc.  
**\<sneurlax>** thank you!  
**\<suraeNoether>** okay, does anyone else have any questions, concerns? i need to bother andytoshi about key images and this discrete log problem I'm having before I'm more comfortable with where our multisig scheme is at  
**\<hyc>** so those outputs will always be ambiguous, never proven spent  
**\<UkoeHB>** they could be proven unspent  
**\<suraeNoether>** hyc unless all outputs that refer to it can be proven to be linked to another output  
**\<suraeNoether>** right  
**\<hyc>** ok  
**\<sarang>** OK, meeting is officially adjourned, but feel free to stick around for further discussion  
