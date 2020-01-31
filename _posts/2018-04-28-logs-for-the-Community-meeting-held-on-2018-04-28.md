---
layout: post
title: Logs for the Community Meeting Held on 2018-04-28
summary: Community highlights, Forum Funding System updates, Localization workgroup Q&A, Monero Integrations, Monero QR GUI discussion, and miscellaneous
tags: [dev diaries, crypto]
author: el00ruobuob / SamsungGalaxyPlayer
---

# Logs  

**\<ErCiccione>** It's meeting time!  
**\<endogenic>** what up y'all  
**\<ErCiccione>** ping sarang  
**\<Osiris1>** poc poc  
**\<sarang>** yo yo  
**\<ErCiccione>** 0. Introduction  
**\<midipoet>** hey hey  
**\<ErCiccione>** Welcome everyone to this Monero Community Meeting!  
**\<ErCiccione>** Link to agenda on GitHub: https://github.com/monero-project/meta/issues/214  
**\<ErCiccione>** Monero Community meetings are a discussion place for anything going on in the Monero Community. We use meetings to encourage the community to share ideas and provide support, so... let's begin!  
**\<ErCiccione>** 1. Greetings  
**\<msvb-lab>** Hello.  
**\<ArticMine>** Hi  
**\<cryptochangement>** hello everyone  
**\<Osiris1>** hello  
**\<sarang>** heyo  
**\<\_Slack> \<sean>** Hello  
**\<\_Slack> \<alexmu>** Hi  
**\<serhack>** Hi :)  
**\<nasawelder>** hi (QR GUI guy)  
**\<gingeropolous>** hi  
**\<onodera>** hello  
**\<xmrscott[m]>** Hello  
**\<onodera>** can anyone tell me what kind of stuff gets discussed here?  
**\<midipoet>** hi everyone  
**\<ErCiccione>** onodera: agenda on GitHub: https://github.com/monero-project/meta/issues/214  
**\<serhack>** onodera: this is the community meeting for the Monero Community workgroup. Here we are going to discuss about community updates and ideas!  
**\<ErCiccione>** lot of people today. good!  
**\<endogenic>** onodera: exactly!  
**\<onodera>** interesting, thanks ErCiccione and serhack  
**\<ErCiccione>** 2. Community highlights  
**\<ErCiccione>** m2049r's FFS proposal has been completely funded, this means 3 more months of Monerujo developing! Congratulations!  
**\<ErCiccione>** Link to the FFS proposal: https://forum.getmonero.org/8/funding-required/90038/m2049r-part-time-for-3-months  
**\<ErCiccione>** also, fluffypony merged a lot of PRs few hours ago, new cool stuff for the next release!  
**\<ErCiccione>** Anybody have updates to share? don't be shy!  
**\<cryptochangement>** me me  
**\<cryptochangement>** oh wait not yet lol  
**\<endogenic>** too late  
**\<cryptochangement>** well if nobody else has something to mention...  
**\<onodera>** I've been working on a self-hosted web-wallet for Monero the past few months: it's really not anything usable yet but it's starting to take shape: https://github.com/onodera-punpun/sako  
**\<ErCiccione>** let's wait a minute cryptochangement :)  
**\<onodera>** dont' know if this is relevant to what should be discussed here? :)  
**\<cryptochangement>** agreed ErCiccione  
**\<midipoet>** i have something to mention, but was going to wait till 'ideas' time  
**\<cryptochangement>** onodera: that sounds interesting. how does it differ from say openmonero?  
**\<onodera>** cryptochangement: the idea is that it's self hosted, so you don't depend on a third party  
**\<endogenic>** onodera: same with openmonero  
**\<ErCiccione>** midipoet: noted for open ideas later  
**\<onodera>** so kind of like the transmission (torrent client) web interface  
**\<onodera>** ah I suppose that I made it myself hehe  
**\<onodera>** I mainly just started this project to learn more about Go and the monero RPC methods  
**\<endogenic>** good way to learn those  
**\<serhack>** +1 onodera :)  
**\<ErCiccione>** well, the more the better. Looking forward to see some updates on that onodera  
**\<hrumag>** OT: Guys, relay on mattermost does not work  
**\<ErCiccione>** hrumag: thanks, can you write that on mattermost, so who wants to attend the meeting can use another platform  
**\<ErCiccione>** any other question for onodera and his self hosted web wallet?  
**\<hrumag>** erciccione: of course  
**\<ErCiccione>** 3. FFS updates  
**\<ErCiccione>** There are several Forum Funding System updates today:  
**\<ErCiccione>** a. Monero Integrations  
**\<ErCiccione>** serhack and cryptochangement asked to reserve some time to discuss their integrations, so please guys go ahead :)  
**\<cryptochangement>** ok cool  
**\<cryptochangement>** so basically our Opencart payment gateway is complete  
**\<cryptochangement>** you can find it here https://github.com/monero-integrations.com/monerocart  
**\<endogenic>** 404  
**\<cryptochangement>** that also completes the final milestone of our FFS  
**\<endogenic>** https://github.com/monero-integrations/monerocart  
**\<serhack>** ty endogenic!  
**\<endogenic>** np  
**\<cryptochangement>** oops thanks  
**\<cryptochangement>** any questions?  
**\<endogenic>** cryptochangement with the php-fu  
**\<cryptochangement>** :p  
**\<cryptochangement>** if nobody has questions we can move on :)  
**\<endogenic>** clear you guys did a lot of work on this  
**\<serhack>** endogenic: I can confirm. Cryptochangements and sneurlax did a lot of work on php library!  
**\<endogenic>** oh would it be possible to https-ify http://monerointegrations.com?  
**\<endogenic>** serhack: srsly..  
**\<cryptochangement>** it should have ssl  
**\<cryptochangement>** https://monerointegrations.com  
**\<endogenic>** your github profile link lacks ssl, fyi  
**\<serhack>** it is :/  I have to redirect, thanks endogenic!  
**\<endogenic>** ah ok  
**\<ErCiccione>** let's move on!  
**\<ErCiccione>** b. IEEE Security & Privacy on the Blockchain workshop  
**\<sarang>** yes  
**\<ErCiccione>** sarang attended the SPB in London, an event focused on scaling, privacy, and applications of blockchain technologies and distributed ledgers, focusing particularly on the security and efficiency of current and future implementations. He is going to give us a brief update.  
**\<ErCiccione>** link to the funded FFS proposal: https://forum.getmonero.org/9/work-in-progress/90165/noether-brothers-ieee-workshop  
**\<sarang>** Thanks to the community for funding my presence (and Surae's) at the workshop  
**\<endogenic>** serhack: i think it could be cool to show on your homepage shops which are using the libs  
**\<sarang>** There was a great audience of academics here, and two talks directly addressing Monero  
**\<sarang>** One was an update on a paper discussing ways to efficiently describe ring members, which could be useful if/when we move to much larger ring sizes  
**\<sarang>** had some great discussions with the author  
**\<cryptochangement>** endogenic: that's a good idea  
**\<sarang>** the other was a talk on possible attacks by a malicious remote node  
**\<sarang>** the ideas had been disclosed to us  
**\<sarang>** We have some reasonable mitigations in place, but it highlights the importance of trusting a remote node anyway  
**\<sarang>** Between talks, we spoke with a Purdue researcher whose student has a proposal for altering our ring sigs to support refund txns  
**\<endogenic>** serhack: you can just put a note saying "tell us if you use the lib and we'll feature you" so you can avoid some kind of contact info collection  
**\<sarang>** There's a preprint draft not publicly available, and we're working on the math/security of it all  
**\<endogenic>** whoa neat  
**\<serhack>** great suggestion endogenic  
**\<sarang>** It would be a great step to side payment channels  
**\<nasawelder>** refund txs ELi5?  
**\<endogenic>** sarang what's the gist of how that would work?  
**\<sarang>** I send two outputs instead of one... one directed to you, one directed elsewhere, and a trigger block height  
**\<sarang>** only one output is usable at a time, depending on the current block height  
**\<sarang>** It required a modification to our key images  
**\<endogenic>** ah  
**\<sarang>** We have a way to do it that allows for combining refund outputs and standard outputs in the same ring sig  
**\<sarang>** As always, conferences are great both for the presentations and for the discussions with other researchers  
**\<endogenic>** i wonder if there's an attack lurking there with refunds :P  
**\<sarang>** The increase in third-party Monero research is also welcome  
**\<sarang>** endogenic: it's the same style of output generation  
**\<sarang>** the only real trick is in the key image  
**\<sarang>** and that uses a common DHKE method that's well understood  
**\<sarang>** No guarantee this will be implemented, but it's well worth the study  
**\<endogenic>** i'm just thinking back to zerocoin's recent thing  
**\<sarang>** We'll have a writeup later on the method  
**\<sarang>** It's a small tweak to the signature scheme  
**\<sarang>** quite elegant  
**\<sarang>** and it's optional  
**\<sarang>** if you don't want refund outputs, nothing changes  
**\<sarang>** and for payment channels, refund outs are only used if something hits the fan  
**\<sarang>** Anyway, that's my update! My thanks for the support  
**\<ErCiccione>** questions for sarang?  
**\<sarang>** I can't share the preprint yet but it'll come out eventually  
**\<ErCiccione>** c. Monero QR GUI discussion  
**\<ErCiccione>** About a month ago, nasawelder introduced Lunlumo, a method of using a series of QR codes to send funds from an airgapped computer. See the original discussion here: https://www.reddit.com/r/Monero/comments/81tjrg/introducing\_lunlumo\_send\_monero\_from\_an\_airgapped/  
**\<monerobux>** [REDDIT] Introducing Lunlumo, send Monero from an air-gapped computer via QR codes (self.Monero) | 100 points (98.0%) | 57 comments | Posted by NASA\_Welder | Created at 2018-03-03 - 22:33:35  
**\<ErCiccione>** Since they are still interested in pursuing this idea, I offered to reserve some meeting time to get more community consensus. Sometimes ideas need persistence to move to funding required. Here is the FFS link: https://forum.getmonero.org/7/open-tasks/89997/lunlumo-cold-signing-automation-via-qr-code-full-gui-python-cli-wrapper-library  
**\<ErCiccione>** nasawelder, the floor is yours  
**\<sarang>** I must take off now... cheers to all  
**\<ErCiccione>** thanks sarang!  
**\<nasawelder>** My interests are in automation and security  
**\<endogenic>** see you, sarang  
**\<nasawelder>** Lunlumo currently can do tx's from cold computer  
**\<nasawelder>** i want to add multisig support  
**\<nasawelder>** it will be easy to bolt on features since it wraps the CLI  
**\<nasawelder>** for instance, wallet address book transfer, other minor stuff  
**\<nasawelder>** it could also be used to keep harware wallet itself cold  
**\<nasawelder>** not sure what else to say...  
**\<nasawelder>** it's a raspberry pi GUI, also, which doesn't exist  
**\<\_Slack> \<alexmu>** Do the cold and hot computers look at each other screens?  
**\<nasawelder>** Yes they looki at each others screens via webcam  
**\<\_Slack> \<alexmu>** Cool.  
**\<nasawelder>** ideal use case would be raspi to android phone  
**\<\_Slack> \<alexmu>** Makes sense.  
**\<nasawelder>** like a checking account to back-pocket wallet withdrawal/top-up  
**\<ErCiccione>** That sounds cool, i would love to see the proposal moved to funding required  
**\<endogenic>** nasawelder: can you build it as an embeddable library?  
**\<endogenic>** transfer via qr code is common among ecosystem apps  
**\<nasawelder>** the CLI backend is a standalone library (API not stable  
**\<endogenic>** i meant the QR streaming stuff  
**\<nasawelder>** endogenic: explain a bot more your question  
**\<nasawelder>** bit  
**\<nasawelder>** i plan to make a standalone QR com library to  
**\<endogenic>** are you writing it so that others can use your code?  
**\<nasawelder>** if that is what you meant  
**\<nasawelder>** yes  
**\<nasawelder>** it's all open source  
**\<endogenic>** cool. mymonero i don't think is interested in it at the moment but i think others are  
**\<nasawelder>** source: https://github.com/nasaWelder/lunlumo  
**\<endogenic>** yes  
**\<endogenic>** perhaps you can get a partnership going  
**\<nasawelder>** I've reached out to monerujo, cake and Xwallet  
**\<nasawelder>** and provided interface spec (see source)  
**\<nasawelder>** ope to establish a formal protocol  
**\<nasawelder>** (explained therin)  
**\<nasawelder>** hope*  
**\<msvb-lab>** nasawelder: We're using qr in the hardware wallet firmware as well.  
**\<nasawelder>** (not that we talk about exchange rates) I'm working on adding air gapp to trading bot  
**\<endogenic>** you could try asking at a monero-dev meeting whether it makes sense to integrate into the official codebase somehow  
**\<endogenic>** aside from that, how can the community help you?  
**\<nasawelder>** endogenic: originally this was an idea i had for monero codebase proper, but I just decided to make it with everyone being so busy, and i only know python  
**\<nasawelder>** I know how to complete my roadmap, the only thing I don'y know how to do is bundle all dependencies with my source  
**\<nasawelder>** it uses some "sudo apt-get install" dependencies  
**\<nasawelder>** msvb-lab: have I made something redundant?  
**\<msvb-lab>** nasawelder: I didn't mean redundancy, instead I would like to indicate interest in having a good QR library available for firmware as well.  
**\<nasawelder>** (also) lunlumo itself is pure python, so no need to install it compiled, (transparency +1)  
**\<endogenic>** the streaming is not redundant aside from other people having implemented it  
**\<endogenic>** in other projects  
**\<nasawelder>** msvb-lab: I'm interested in helping  
**\<endogenic>** nasawelder: go for it in c++ i say. someone is working on it in monero gui right now  
**\<nasawelder>** endo: i gotcha, well the streaming is automated within tx workflow which is like 5 steps, so that's what I'm selling : user experience  
**\<endogenic>** people will support you  
**\<msvb-lab>** nasawelder: If you want to help in firmware, please become a team member to make communication easier:  
**\<msvb-lab>** taiga.getmonero.org/project/michael-rfc-hwallet-1-implementation/  
**\<nasawelder>** will do  
**\<endogenic>** nasawelder: any reason it cant be done in the gui?  
**\<nasawelder>** the official monero gui?  
**\<endogenic>** yes. a build variant  
**\<nasawelder>** no, just I don't know c++ so i made it in python  
**\<endogenic>** i mean the codebase is large  
**\<endogenic>** and so many different ppl work on it  
**\<nasawelder>** original goal was to inspire it into the official GUI,k hopefully I've blazed a trail, at least  
**\<endogenic>** but i'm certain we can work it out modularly  
**\<endogenic>** nasawelder: think it's all you bro  
**\<endogenic>** but hey there's always hope  
**\<endogenic>** the c++ has examples in the codebase already  
**\<endogenic>** you know python so you're fine  
**\<endogenic>** i believe in you  
**\<nasawelder>** anyways, thanks y'all  
**\<ErCiccione>** anything you want to add nasawelder?  
**\<nasawelder>** CLI features can be added to lunlumo very quickly as they come out  
**\<nasawelder>** so that's why i like python  
**\<nasawelder>** that's all  
**\<endogenic>** i rly meant it fwiw  
**\<nasawelder>** it's ok, I have a toddler, so someone else can pick up the c++ torch  
**\<ErCiccione>** ok, let's see if there are further questions and then we can move on to open ideas time  
**\<ErCiccione>** no wait, there's my update before open ideas :P  
**\<msvb-lab>** My idea is to upload a video of the latest status of the hardware wallet, but I don't know how to find the right place.  
**\<msvb-lab>** ...in open ideas, but possibly my question came too early?  
**\<endogenic>** youtube? or are they evil  
**\<endogenic>** and does it matter  
**\<endogenic>** :p  
**\<msvb-lab>** endogenic: There is a media.getmonero.org or something.  
**\<ErCiccione>** msvb-lab: one last FFS update then we can move on, but before you midipoet had something to say  
**\<ErCiccione>** d. Localization workgroup Q&A  
**\<msvb-lab>** ErCiccione: Yes, thanks. No problem.  
**\<midipoet>** thanks!  
**\<ErCiccione>** ok, about localization  
**\<ErCiccione>** the localization of monerujo is going very well, you can see on taiga what's in progress and ready.. a lot of stuff:  
**\<ErCiccione>** https://taiga.getmonero.org/project/erciccione-monero-localization/us/163?milestone=28  
**\<endogenic>** msvb-lab: seems long lived for transient media  
**\<endogenic>** msvb-lab: plus hosting there will burden server - may want to find a CDN  
**\<endogenic>** msvb-lab: but maybe ask rehrar  
**\<ErCiccione>** endogenic: please, let's wait for that  
**\<ErCiccione>** the monero GUI is being refactored so we will need to refresh it again, this will happen probably next week during a code freeze. i will open an issue on github when the time will come  
**\<ErCiccione>** nothing more to add  
**\<ErCiccione>** any question?  
**\<ErCiccione>** ooook  
**\<hrumag>** yeah, i've got one. the refreshing of the original strings of monero GUI is the same of monerujo?  
**\<ErCiccione>** hrumag: no it works quite differently, it will be easier 'cause i will make the refresh and translators will only need to translate the new strings  
**\<hrumag>** erciccione: good to know  
**\<ErCiccione>** Does anyone else have a FFS update or any last question?  
**\<Alex\_LocalMonero>** Workgroup meeting still on?  
**\<endogenic>** you know it  
**\<msvb-lab>** endogenic: Is there a media server or not? I'm confused.  
**\<endogenic>** no idea  
**\<endogenic>** ErCiccione: when monero ffs ico?  
**\<msvb-lab>** I thought there was something like media.getmonero.org, I'm just getting the URL name wrong  
**\<ErCiccione>** msvb-lab: endogenic: there is, don't remember the exact link now, but i'm sure it exists  
**\<msvb-lab>** ErCiccione: Same with me, I saw the URL in some place, but have forgotten it.  
**\<msvb-lab>** Nobody here knows the media server URL?  
**\<ErCiccione>** let's finish the meeting first msvb-lab then we can investigate :)  
**\<ErCiccione>** 4. Open ideas time  
**\<ErCiccione>** It’s open ideas time! Feel free to propose your ideas to this discussion group, and feel free to comment on others’ ideas. If you disagree with the idea, please reply with constructive criticism. Thank you!  
**\<ErCiccione>** midipoet, you first. msvb-lab then  
**\<midipoet>** great thanks!  
**\<midipoet>** I am going to try and keep this relatively short, but am open to any follow on questions through here, through email, or through reddit (same username).  
**\<midipoet>** I am currently involved in an academic research project. Its concern is Privacy, and more specifically, perspectives of privacy within blockchain.  
**\<midipoet>** I have proposed to use the Monero community to gather qualitative data (through semi-structured anonymous interviews - probably over some text based platform). This is mainly because a number of key groups can be found here (users, cryptographers, protocol designers), and i know this community, and some know me.  
**\<endogenic>** midipoet: what field of academia? sociology sort of thing?  
**\<midipoet>** Information Science  
**\<midipoet>** Researching emerging financial technology  
**\<midipoet>** so probably more soft science, than hard....  
**\<midipoet>** From the interviews, perspectives will be compared with others from the industry (corporate blockchain architects, legislators, and regulators). With the help of university i am based at (University College Cork, Ireland) i have access to a lot of these groups. Mainly HyperLedger developers, employees at the Central Bank of Ireland, and some members from the GDPR committee.  
**\<midipoet>** The idea is to try and figure out what different groups actually think Privacy is or is not, and then compare them.  
**\<midipoet>** It’s all well and good that all these different groups approach and negotiate aspects of privacy through blockchain, but most of the time groups (or individuals) don’t actually know what others think privacy is, or is not (and it often changes from individual to individual, context to context, culture to culture, etc etc).  
**\<endogenic>** lol  
**\<midipoet>** (yeah these are all pre-typed to save time)  
**\<endogenic>** do people really differ on defining the term privacy?  
**\<midipoet>** yes, i think there is massive spectrum  
**\<midipoet>** certainly my initial research has shown this  
**\<endogenic>** curious to hear two of your datapoints  
**\<midipoet>** I have written two papers already. one is theory lite  
**\<endogenic>** what is the range?  
**\<midipoet>** https://pastebin.com/QirgSE1b  
**\<midipoet>** and one is theory heavy  
**\<midipoet>** https://pastebin.com/7r0RR0rr  
**\<midipoet>** it depends your perspective on what privacy is. some people see it as right, some as value based commodity, some as cognitive concept  
**\<midipoet>** and so on...  
**\<midipoet>** some a mixture of all the above  
**\<endogenic>** you said definition of privacy though  
**\<midipoet>** the core differences come (and most interestingly) on what levels of privacy should be afforded  
**\<endogenic>** ok  
**\<midipoet>** and also, whether its state or system that should protect it (if its a right)  
**\<midipoet>** I have mentioned this research to the MRL, and they have been supportive. I am hoping members of the dev team and cryptographers will engage with the qualitative interview process (i will also be in the MRL meeting on the 30th to talk further with them)  
**\<midipoet>** What i am hoping is that members of the wider community will also get involved. And this is why i am here….basically to ask if anyone is interested in talking about what they believe privacy is, why it is important, what the context is, who should protect it, what system should protect it, is it a right, etc etc etc.  
**\<endogenic>** dont think anyone here is interested in privacy  
**\<midipoet>** lol  
**\<midipoet>** i think that's kind of it. i know that's a barrage of info, and i apologise. but any questions?  
**\<ErCiccione>** this is extremely interesting, i would love to participate and i'm sure also many community members will  
**\<midipoet>** thanks  
**\<ErCiccione>** contact rehrar, he would love this  
**\<ErCiccione>** \*will  
**\<endogenic>** midipoet: do you use surveys, mainly?  
**\<midipoet>** i also think its really interesting. I am aiming for top level journals and conferences, as i think Monero deserves it.  
**\<midipoet>** endogenic: it is semi structured interviews, in an explorative study  
**\<midipoet>** mainly using Monero as a sort of 'index case'  
**\<midipoet>** or the Monero community, i should say  
**\<xmrmatterbridge> \<cypherperro>** I would also love to contribute  
**\<midipoet>** Personally i think it is important that we negotiate the ideological aspects of privacy as a community, together. Especially as legislation and regulation is bound to appear in the future (and has started to already).  
**\<ErCiccione>** ^^ +1  
**\<serhack>** Privacy is fundamental.  
**\<serhack>** Nobody can stop us!  
**\<midipoet>** I think if we are able to put forward and compare and contrast across social groups/stakeholders, privacy rights can be negotiated  
**\<UkoeHB>** I think Olufunmilayo would like to get that interview. You can find in #monero sometimes  
**\<endogenic>** midipoet: what principle do you use in interpreting and organizing answers?  
**\<midipoet>** endogenic: i am not sure i understand the question. If you are asking what methodology for interpreting? The IS literature points to open axial coding  
**\<midipoet>** to be honest, IS methodology is not my strong point (but is my supervisors), who is an old friend of mine  
**\<midipoet>** as its an exploratory study, i think strong methodology can emerge as i go  
**\<midipoet>** as i am sure themes will emerge as i go  
**\<midipoet>** so can i ask, for whoever wants to contribute to email me? is that fair?  
**\<midipoet>** if more anonymity is required, you can also contact me on Reddit.  
**\<midipoet>** i can also provide a PGP key if needed  
**\<endogenic>** well this is no longer relevant but i'm curious about IS and would expect there was some way to confirm the precision of identification of codes in the first place  
**\<ErCiccione>** sure it is midipoet, leave here your contacts if you wish,  
**\<endogenic>** good luck  
**\<midipoet>** rrenwick01@qub.ac.uk  
**\<midipoet>** u/midipoet on Reddit  
**\<midipoet>** Thanks for listening....  
**\<ErCiccione>** perfect, it's getting late now, you can keep talking about this after the meeting if you want  
**\<endogenic>** longest community mtg ever :P  
**\<ErCiccione>** thank you midipoet  
**\<midipoet>** thankyou  
**\<ErCiccione>** msvb-lab: so, about this video.. :)  
**\<ErCiccione>** endogenic: yep, lot of stuff today :P  
**\<msvb-lab>** Yes.  
**\<ErCiccione>** we will have to ask to rehrar for that link, what was your idea btw?  
**\<ErCiccione>** well, the 30 minutes for the open ideas time are over folks, let's wrap this meeting up  
**\<ErCiccione>** 5. Confirm next meeting date/time  
**\<ErCiccione>** The next community meeting will be two weeks from today on 28 April.  
**\<ErCiccione>** 6. Conclusion  
**\<ErCiccione>** That’s all! Thanks for attending this Monero Community meeting, we hope to see you on /r/MoneroCommunity and #monero-community. Take care and remember there is only one Monero, stay away from all those scammy forks!  
**\<ErCiccione>** See you around!  
**\<ErCiccione>** the meeting is over, but please, don't let the discussion die, if you have anything you want to talk about... please do!  
**\<serhack>** thank you Erciccione!  
**\<midipoet>** yes, thank you Erciccione  
**\<serhack>** https://www.reddit.com/r/Monero/comments/8flnzi/finally\_released\_monero\_payment\_gateway\_for/  
**\<monerobux>** [REDDIT] Finally released Monero Payment Gateway for OpenCart (self.Monero) | 2 points (100.0%) | 0 comments | Posted by serhack | Created at 2018-04-28 - 18:15:41  
**\<ErCiccione>** whoo, this was a long one still within the 1.5 hrs tho :P  
**\<ErCiccione>** thank you guys :)  
**\<\_Slack> \<alexmu>** Long and great. Thank you.