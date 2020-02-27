---
layout: post
title: Logs for the Community Meeting Held on 2017-11-11
summary: Community highlights, Forum Funding System updates, RFC-HWALLET-1, Monero December, upcoming meetups, growing involvement, and miscellaneous
tags: [dev diaries]
author: dEBRUYNE / fluffypony
---

# Logs  

**\<sgp>** 0. Introduction  
**\<ArticMine>** hi  
**\<sgp>** We would like to welcome everyone to this Monero Community Meeting!  
**\<sgp>** Link to agenda on GitHub: https://github.com/monero-project/meta/issues/134  
**\<sgp>** Monero Community meetings are a discussion place for anything going on in the Monero Community. We use meetings to encourage the community to share ideas and provide support.  
**\<sgp>** 1. Greetings  
**\<cryptochangement>** hello all!  
**\<ArticMine>** I jumped the gun  
**\<rehrar>** We still love you ArticMine  
**\<rehrar>** and 'hello'  
**\<sarang>** sarang here, is this the channel for the meeting?  
**\<ordtrogen>** Hej allihopa  
**\<rehrar>** indeed it is  
**\<sgp>** @sarang yes  
**\<sarang>** Just joined the channel, so I can't follow history  
**\<cryptochangement>** we just started greetings, you didnt miss anything  
**\<sarang>** excellent  
**\<sgp>** 2. Community highlights  
**\<sgp>** For a great weekly summary, please read the Monero Observer: http://monero-observer.com/  
**\<rehrar>** sarang: https://github.com/monero-project/meta/issues/134  
**\<sgp>** This publication is funded by community donations  
**\<sgp>** 3. FFS updates  
**\<sgp>** There are several FFS updates.  
**\<msvb-mob>** Hello folks.  
**\<sgp>** First, we have msvb-lab who will speak about the hardware wallet project  
**\<sgp>** a. RFC-HWALLET-1 project progress  
**\<sgp>** Take the floor, msvb-lab  
**\<sgp>** or msvb-mob  
**\<msvb-mob>** sgp: I need a bit of time, can somebody else go first?  
**\<sgp>** Sure, does anyone else have a FFS update they would like to talk about?  
**\<msvb-mob>** Uploading photos of the fresh Monero hardware wallet board...  
**\<sgp>** sweet  
**\<cryptochangement>** i can go first  
**\<cryptochangement>** alog with serhack if he is here  
**\<cryptochangement>** ping serhack  
**\<sgp>** Sure, go ahead  
**\<sgp>** cryptochangement  
**\<cryptochangement>** ok give me a sec to type it all out :p  
**\<cryptochangement>** okay, so first of all, if you had seen my last update my big complaint (about my own work) was that the paymentbox for the magento2 plugin that is in the works was not at all visually appealing, but thanks to TheMonera we have a much nicer looking design that has been implemented on several of the Monero-Integrations plugins  
**\<cryptochangement>** you can see it here https://imgur.com/a/0buLW  
**\<cryptochangement>** also  
**\<serhack>** Hey  
**\<serhack>** Hello everyone  
**\<cryptochangement>** the magento2 plugin is currently functional and you can check it out here: https://github.com/monero-project/monero ill have install instructions on the README later today but it is pretty straight forward if you already user composer with magento  
**\<serhack>** Monero Integrations are going well  
**\<serhack>** I would make an announcement  
**\<serhack>** I have contacted OpenBazaar Team  
**\<serhack>** And I am trying to implement Monero for Openbazaar  
**\<serhack>** It will be a difficult task  
**\<serhack>** But there is no mission impossible for serhack  
**\<sgp>** cryptochangement is that the correct GitHub direcotry? That's for the Monero project itself  
**\<cryptochangement>** crap wrong link sgp  
**\<cryptochangement>** https://github.com/monero-integrations/moneromagento  
**\<cryptochangement>** \^ thats bette  
**\<sgp>** serhack great news!  
**\<sgp>** cryptochangement also great news!  
**\<serhack>** :)  
**\<cryptochangement>** i think thats all from us now  
**\<sgp>** I look forward to see how these projects develop  
**\<serhack>** Yep confirmed  
**\<sgp>** msvb-lab are you ready?  
**\<cryptochangement>** if there are no questions i think msvb-mobcan take the floor  
**\<ordtrogen>** @cryptochangement  does the input field for amount get larger when typing decimals? I'm guessing  
**\<ordtrogen>** just wanted to add it looks good  
**\<sgp>** We can move on to the next topic until msvb-lab/msvb-mob is ready  
**\<cryptochangement>** yeah, it would adjust as needed. i just grabbed the picture last minute  
**\<sgp>** 4. Monero December  
**\<sgp>** The RIAT team would like to discuss the events happening in Vienna this December.  
**\<msvb-mob>** sgp: I think so, Taiga slurping graphic data over slow HTTPS.  
**\<sgp>** Ok, let's hold off on 4 then and have msvb-mob go  
**\<msvb-mob>** parasew[m] pablonero[m]: Oh yes, I'm quite interested to hear official plans.  
**\<serhack>** msvb-mob: you can use imgue  
**\<serhack>** Imgur  
**\<msvb-mob>** parasew[m] pablonero[m]: You around to chat about RIAT hosting Monero December?  
**\<sgp>** It doesn't look like they are in the channel  
**\<msvb-mob>** Okay, so we finally have some exciting results on the hardware front.  
**\<sgp>** \o/  
**\<msvb-mob>** A wallet design with custom firmware and JTAG programming the lot.  
**\<vp11>** yehaa!  
**\<msvb-mob>** https://taiga.getmonero.org/project/michael-rfc-hwallet-1-implementation/  
**\<msvb-mob>** Photos got uploaded finally.  
**\<msvb-mob>** The board is demonstrated connected to a mobile phone over USB OTG, but eventually it may run on battery or even photovoltaic (solar) power.  
**\<sgp>** ooh, fancy  
**\<cryptochangement>** that looks awesome  
**\<msvb-mob>** The URL displayed on the hardware wallet's screen is fake, says 'Go hwal.getmonero.org'  
**\<vp11>** looking good!  
**\<msvb-mob>** cryptochangement: It's a good start. We only got this far by having contributions.  
**\<msvb-mob>** The team now consists of a handful of folks, some specialising in FPGA development, legal matters and documentation (a real attorney), core hw devs, and most important testers.  
**\<msvb-mob>** I mention testers because if the current rate of development progress keeps pace, we'll be able to produce a handful (or more) of working boards soon for testing purposes.  
**\<msvb-mob>** So whoever likes the idea of testing hardware (which is not useful for storing your real money please!) then sign up.  
**\<sgp>** I'm excitied to hear you are making excellent progress  
**\<msvb-mob>** You can read about the preliminary device delivery plans in:  
**\<msvb-mob>** https://taiga.getmonero.org/project/michael-rfc-hwallet-1-implementation/wiki/preview  
**\<msvb-mob>** ...and the main idea is simply become a member of the Taiga project, so you can contribute opinions and reports after testing.  
**\<serhack>** msvb-mob: WOW.  
**\<msvb-mob>** To do that, go to the main project page and click 'Contact the project'.  
**\<msvb-mob>** https://taiga.getmonero.org/project/michael-rfc-hwallet-1-implementation/  
**\<serhack>** Can I share images into Telegram groups?  
**\<vp11>** in fact, you should post an update on reddit with the images and the progress  
**\<msvb-mob>** If you do this without being logged in, then make sure to provide your email address so we can invite you to be a tester.  
**\<vp11>** the community will be really happy to see how fast you guys are advancing  
**\<msvb-mob>** Otherwise, if you're already logged into Taiga, click the contact button and it goes more smoothly.  
**\<serhack>** vp11 is right  
**\<serhack>** Community loves updates on reddit  
**\<msvb-mob>** vp11 serhack: Thanks, it's due to the level of enthusiasm and great contributions.  
**\<sgp>** Yeah this will easily get reactions  
**\<msvb-mob>** Any questions? If not, I'll pass the baton.  
**\<msvb-mob>** serhack: I'm a braindead idiot about reddit, as well as having no Facebook or Twittie accounts either.  
**\<serhack>** Oh  
**\<msvb-mob>** serhack: Actually we do need a reddit representative, if anyone wants to pick up that role.  
**\<serhack>** Who will post updates about hardware projects?  
**\<sgp>** Is there anyone here to speak about the Monero events in Vienna?  
**\<vp11>** you really need someone to represent the project on reddit, msvb-mob  
**\<msvb-mob>** serhack: We're doing that right now, and officially (according to the forum proposal) status reports shouold happen at each dev meeting.  
**\<serhack>** okay  
**\<vp11>** every two days someone asks about development in ledger or trezor  
**\<msvb-mob>** We changed from dev meetings to community meetins though.  
**\<vp11>** these people should know there are progress on our own hardware wallet  
**\<vp11>** people will get crazy about it and it might even bring more contributors  
**\<serhack>** We have 36k readers on reddit  
**\<vp11>** reddit is a very useful tool and exploring it will benefit everyone :)  
**\<msvb-mob>** vp11: I'm meeting the Digital Bitbox folks in Zuerich in two weeks, let's not forget them.  
**\<msvb-mob>** Their two founders are Monero fans.  
**\<rehrar>** msvb-mob: I can handle PR for hardware project if you'd like  
**\<vp11>** indeed! let's not forget anyone then :)  
**\<sgp>** @msvb-mob do you feel comfortable with someone sharing these updates on Reddit? The logs are posted there anyway  
**\<vp11>** ohhh no one better than rehrar  
**\<msvb-mob>** rehrar: You will be the angel of reddit.  
**\<serhack>** :)  
**\<vp11>** i vote for rehrar for PR of this project  
**\<msvb-mob>** How was it that fluffypony said 'chief reddit officer.'  
**\<serhack>** @rehrar is our hero  
**\<rehrar>** We'll be in contact.  
**\<serhack>** I vote for rehrar  
**\<msvb-mob>** rehrar: By the way, you made an excellent mention of the hardware wallet project in your coffee table chat, and thank you so much for telling people that Monero is not just about XMR but also about Kovir and a bunch of other stuff.  
**\<msvb-mob>** Right on there.  
**\<vp11>** the hero we don't deserve, but the one we need.  
**\<sgp>** Since no one is here to discuss the Vienna events, we will proceed to #5. We can come back if they show up later  
**\<rehrar>** thanks guys :) sgp, what's next?  
**\<sgp>** 5. Upcoming Meetups  
**\<sgp>** Monero Toronto has a meetup on Wednesday 29 November https://www.meetup.com/Toronto-Monero-Meetup/events/242746564/  
**\<sgp>** Monero London has a meetup on Thursday 16 November https://www.meetup.com/Monero-London/events/244993948/  
**\<msvb-mob>** sgp: I'm quite comfortable in broadcasting in every direction.  
**\<sgp>** Monero Portugal has several meetups on Wednesday 15 November and Sunday 19 November. Join #monero-pt (IRC only, no relays) or PM /u/M-alMen for details and to confirm attendance https://www.reddit.com/r/Monero/comments/7c59jy/monero_meetup_in_portugal_15_and_19_november_join/  
**\<sgp>** There will be a Monero meetup in Munich on Wednesday 22 November https://www.reddit.com/r/Monero/comments/7c9dz0/the_first_monero_munich_meetup_takes_place_on/  
**\<sgp>** There will be more meetups not listed here for many of the groups receiving the Meetup Kits. I will post all these meetups to /r/MoneroCommunity as soon as I receive more details. Keep an eye out for them. List of groups receiving a kit: https://taiga.getmonero.org/project/sgp-monero-meetup-kit/wiki/selected-organizations  
**\<sgp>** Does anyone know of other events coming up, or would like to speak about one of these?  
**\<msvb-mob>** You think we can keep our events page up to date?  
**\<msvb-mob>** None of those cool meetings are advertised.  
**\<msvb-mob>** https://getmonero.org/community/events/  
**\<vp11>** I'll talk with the guys on #monero-pt and see if someone wants to talk something about the meetup, one minute.  
**\<sgp>** That page definitely needs some love  
**\<serhack>** I think we should update that page  
**\<msvb-mob>** sgp: How did you find out about these meetings, like in Munich?  
**\<rehrar>** Luigi is doing a good job of merging stuff  
**\<msvb-mob>** ...because maybe we can just do a batch copy of info from that place to the events page.  
**\<sgp>** msvb-lab people post on Reddit typically  
**\<rehrar>** onto the site, so I think it shouldn't be a problem if there is a concerted effort to update the Events page  
**\<sgp>** rehrar is there a simple way for people to simply click a "+" sign and add the details of their event to a template which then becomes a pull request?  
**\<rehrar>** https://github.com/monero-project/monero-site#90-how-to-make-an-event  
**\<vp11>** msvb-mob you gotta go more on reddit, you know you can do it semi-anonymously right? :P  
**\<msvb-mob>** vp11: I'm just swimming in work and doing full time hw dev, so maintaining presence on IRC is about my max now.  
**\<sgp>** I'm going to move on, since we can have the discussion of how to use this page better later  
**\<sgp>** 6. Growing Involvement  
**\<sgp>** We have seen many new, interested users these past few months. However, this doesn’t necessarily translate into more people who want to help. I think we should have a discussion regarding how we can encourage people to make the switch from being a Monero fan to being a Monero contributor.  
**\<sgp>** I think that tools like Tagia will help plan activities and allow people to more easily contribute to these. Especially for those who are not developers. We are using Taiga for the Meetup Kit project to see how it goes.  
**\<msvb-mob>** vp11: There's no problem with reddit, I hope we get exposure there.  
**\<sgp>** I think it will be helpful for us to brainstorm some ways to increase involvement.  
**\<serhack>** You know a way sgp  
**\<sgp>** Since we have a lot of interest. Let's translate this into action  
**\<serhack>** I'm going to help a lot community  
**\<msvb-mob>** sgp: This is a bit far fetched, but maybe a gamification idea?  
**\<msvb-mob>** Something like a bounty program but made for baby steps (beginning with hello world) and more fun.  
**\<vp11>** I believe we should have a very solid platform so people can "easily" become a contributor. As sgp mentioned, Taiga has been helping with that. We need to make sure we master the tool so we can organise ourselves and invite people to become contributors on projects they'd have an interest.  
**\<msvb-mob>** sgp: And the coffee table hour gained dozens of watchers, so that's a place to keep focus on?  
**\<sgp>** I think the Coffee Hour is great for gathering interest. I don't know how much of the interest translates into action  
**\<sgp>** Though I think it's a clear positive  
**\<vp11>** Once we have a good foundation it will be easier for people to join the initiatives. Maybe get a bigger exposure of the Taiga platform. I know we've been using it for only a couple of months now (or not even that), but it's a good way for people to see what's going on.  
**\<msvb-mob>** sgp: Is it possible to do screenscraping during the coffee hour?  
**\<msvb-mob>** Like a person editing a code file and speaking what it means?  
**\<vp11>** More exposure of Taiga could be on the Monero website, reddit, and of course mentioning it whenever we can (Coffee Hour, Community Meetings, etc)  
**\<sgp>** It should work, though we have not tested it much  
**\<rehrar>** I'll make a suggestion.  
**\<cryptochangement>** msvb-mob: thats actually an amazing idea for the coffeechat  
**\<rehrar>** I think it would be very helpful to have a quarterly 'Monero Workshop'.  
**\<rehrar>** We want people to get involved, but we want them to also understand what The Monero Project is about, the different projects available, and why Monero is awesome  
**\<serhack>** Monero Hackathon  
**\<msvb-mob>** cryptochangement: It might require a regular coder to hang out in coffee, but if every week there is a five minute slot dedicated to a hello world level review of a source code file, that might entice folks.  
**\<rehrar>** Having a completely open three(ish) hour workshop that explains everything I just mentioned (and the privacy tech Monero uses) hosted online would be great for education and outreach  
**\<msvb-mob>** serhack: Yes a hackathon. That would be best in the location where the most Monero enthusiasts live. Where is that?  
**\<serhack>** Germany  
**\<sgp>** serhack that's a discussion that we had in another (maybe research lab?) meeting. I'm seeing if I can host one here in Minnesota  
**\<vp11>** rehrar that's not only a very good idea, but we can also record these and make them available on YouTube later, so people can "enrol on the fly".  
**\<sgp>** I think it's a great idea too  
**\<serhack>** :)  
**\<rehrar>** It's not supposed to be a community interaction thing, but more like a seminar  
**\<rehrar>** questions can be had at the end of each section, of course  
**\<rehrar>** Many of us got involved in Monero because we realized how great the Project is, and how solid the technology behind it is  
**\<vp11>** and since it's only quarterly it will also be a good moment to announce the progress on different fronts the development team has been working. I only see benefits.  
**\<sgp>** I think a seminar is great for people who REALLY want to  learn more and get involved  
**\<rehrar>** I propose that if we educate the 'fan' about these things, they might not know them after all, that they will be like that inovled too  
**\<msvb-mob>** rehrar sgp: Is there a way to hand out one shirt to the most motivated person at typical events?  
**\<serhack>** It's a cool idea  
**\<msvb-mob>** ...since it seems we have quite a few meetings coming up.  
**\<sgp>** msvb-mob nothing really stopping that, no  
**\<msvb-mob>** If we print a few dozen shirts and consider one shirt to be part of each meetup kit?  
**\<sgp>** I didn't include shirts in the Meetup Kit though since they are bulky  
**\<vp11>** for the general public I still believe Taiga is a very good "entrance door". maybe we can tweak it a little bit more, make it easy for people to discern "official projects" from "community projects", but it's a good place to start to get involved.  
**\<vp11>** otherwise, a quarterly workshop really is a great opportunity for people who wants to get "deep" into Monero  
**\<sgp>** I would like to see these thoughts outlined in Taiga  
**\<serhack>** What are the Official projects?  
**\<rehrar>** dude, we should have a fun Monero ARG with like, ten XMR at the end of it  
**\<msvb-mob>** vp11: Some have had complaints about Taiga being nonintuitive, but it might just be a learning curve of Agile.  
**\<serhack>** Anyway we should share Taiga everywhere  
**\<vp11>** rehrar I would fund this idea, not even joking  
**\<vp11>** love myself some ARGs  
**\<msvb-mob>** What's an ARG?  
**\<rehrar>** ARG = Alternate Reality Game  
**\<vp11>** msvb-mob indeed, many people don't know Agile and I'm sure we could improve Taiga's presentation.  
**\<rehrar>** for our purposes you can consider it like an online treasure hunt  
**\<sgp>** This is why these brainstorming ideas are great. Now we have projects to work on for the next several months :p  
**\<cryptochangement>** from my personal expirience, taiga is a bit of a learnig curve, but it is nicer to look at then github  
**\<rehrar>** Secrets and codes embedded into various websites, videos, and photos  
**\<rehrar>** leading to the next clue, and ultimately, leading to the 'treasure'  
**\<msvb-mob>** rehrar: Yes, a treasure hunt, capture the flag, or similar thing. That's what I meant by gamification.  
**\<cryptochangement>** honestly i would contribute to fundng without question  
**\<vp11>** we're still learning how to organise ourselves on Taiga, it's a very recent addition. once we get it figured out we will be able to introduce people easily. things will be more organised, etc.  
**\<sarang>** We considered it for the Research Lab as well  
**\<sarang>** To help organize our many projects  
**\<sgp>** msvb-mob pushed me to get organized on Taiga. Thanks for that  
**\<sgp>** The project is much better organzied from this change  
**\<msvb-mob>** sgp: Cool, you're welcome. I think we need to thank penguin though, isn't (s)he the one who set it up?  
**\<sgp>** sarang I would look into it. It's a great idea  
**\<sarang>** sgp: Would like to chat later about tiaga if possible  
**\<msvb-mob>** I mean pigeons.  
**\<sgp>** pigeons haha  
**\<rehrar>** I'm around for chatting about it sarang :)  
**\<sarang>** Ah ok! Anyone involved with it  
**\<sgp>** sarang sure. I'll be on mobile but can still chat  
**\<sarang>** I'm on mobile now too  
**\<sarang>** Not ideal for long types!  
**\<rehrar>** Running short on time here, anything else?  
**\<sgp>** Any last thoughts for this meeting? Lots of great ideas  
**\<sarang>** Glad to answer any MRL related topics too  
**\<sarang>** Now or later  
**\<sgp>** let's do that after confirming the next meeting time  
**\<sgp>** 8. Confirm next meeting date/time  
**\<sgp>** Should we have it again in 2 weeks? Thanksgiving weekend  
**\<sgp>** Or delay for a week after that  
**\<sarang>** Recommend delaying  
**\<sgp>** We could have both the Coffee Chat and meeting on the same day (4 December)  
**\<cryptochangement>** i also recommend delaying  
**\<rehrar>** The Americans will be tired from shopping their Black Friday  
**\<vp11>** how many people here live in US? no thanksgiving issues here :P  
**\<sgp>** whoops, 2 December  
**\<sarang>** Ha, I'm clearly too US centered...  
**\<rehrar>** 'Murica  
**\<cryptochangement>** vp11: we get it yall canadians already haf thanksgiving  
**\<ArticMine>** So November 25 17:00 UTC?  
**\<cryptochangement>** and that time acounts for the clock change?  
**\<ArticMine>** no  
**\<cryptochangement>** ok  
**\<sgp>** Yes, the meeting will actually be at 17:00 UTC  
**\<cryptochangement>** cool  
**\<sgp>** Not 18:00 UTC like this one  
**\<vp11>** I'm up for whatever is decided. If the majority is in US we can delay, I see no issues in delaying.  
**\<ArticMine>** Dec 02 is not good for me  
**\<rehrar>** Let's have it 25th  
**\<sgp>** Let's try for two weeks from now on the 25th  
**\<cryptochangement>** ok 17:00 UTC sounds good  
**\<sarang>** Roger  
**\<sgp>** Great  
**\<serhack>** It's okay for me  
**\<sgp>** 9. Conclusion  
**\<sgp>** That’s all! Thanks for attending this Monero Community meeting, and we hope to see you on /r/MoneroCommunity and #monero-community. Take care, and know that change starts with YOU.  