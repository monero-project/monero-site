---
layout: post
title: Logs for the Community Meeting Held on 2018-02-03
summary: Community highlights, Monero Integrations, Monero outreach initiative, Forum Funding System updates, RFC-HWALLET-1, Localization workgroup, open ideas, and miscellaneous
tags: [dev diaries, crypto]
author: dEBRUYNE / fluffypony
---

# Logs  

**\<sgp>** Meeting time!  
**\<sgp>** 0. Introduction  
**\<sgp>** We would like to welcome everyone to this Monero Community Meeting!  
**\<sgp>** Link to agenda on GitHub: https://github.com/monero-project/meta/issues/170  
**\<sgp>** Monero Community meetings are a discussion place for anything going on in the Monero Community. We use meetings to encourage the community to share ideas and provide support.  
**\<sgp>** 1. Greetings  
**\<xmrscott[m]>** Salutations  
**\<ErCiccione>** Hi  
**\<rehrar>** This guy  
**\<sgp>** @pigeons the mattermost relay is down  
**\<sgp>** 2. Community highlights  
**\<sgp>** For a great weekly summary, please read the Monero Observer: http://monero-observer.com/  
**\<sgp>** 3. Monero Integrations improvements  
**\<sgp>** cryptochangements asked to speak for a few minutes about improvements they have made to existing integrations.  
**\<cryptochangement>** ok i just got here  
**\<cryptochangement>** didnt know mattermost was down  
**\<sgp>** perfect timing :)  
**\<cryptochangement>** okay so basically, I just wanted to share that I have improved on the wordpress plugin from serhack's last FFS and made it easier for merchants to accept Monero  
**\<cryptochangement>** basically it allows people to use their viewkey with a block explorer instead of an rpc waller  
**\<cryptochangement>** \*wallet  
**\<cryptochangement>** here is the reddit post I made with a video demo: https://www.reddit.com/r/Monero/comments/7tkpfu/accepting_monero_with_monerointegrations_just_got/  
**\<cryptochangement>** and several more new merchants have already started using the upgraded version  
**\<cryptochangement>** there is still some concern about using a node that is not yours to validate 0 confirmation transactions which I'm still looking into, but IMO you should really just stick to the "small amounts only" rule when accepting 0 conf transactions.  
**\<cryptochangement>** Any questions?  
**\<cryptochangement>** otherwise we can move on :)  
**\<sgp>** Thanks cryptochangement  
**\<sgp>** 4. Monero outreach initiative  
**\<sgp>** Rehrar asked to discuss his idea about an outreach initiative for this workgroup.  
**\<rehrar>** yeah, and my IRC is being stupid. sec.  
**\<rehrar>** I'll just type from MM.  
**\<sgp>** Ok, looks like Mattermost relay is back up  
**\<cryptochangements>** ok cool  
**\<rehrar>** Alright, so the basic idea of this Outreach, is that we get a small subgroup of interested community members to make a list, identifying other exciting open-source projects. They don't have to be crypto or privacy created. Mostly stuff that is trying to change the world.  
**\<rehrar>** We then do what I'm calling a  
**\<rehrar>** 'Monero bomb' of this project (sorry, pressed enter by accident)  
**\<rehrar>** Where a bunch of us Monero people go to them, see what they need, and do it. Things like translations, website work, infographics, whatever.  
**\<rehrar>** Then we disappear into the night. They've just got "Monero'd"  
**\<rehrar>** The ultimate goal of something like this being to build bridges of relationship with the open source community at large, and solidify Monero's place there.  
**\<rehrar>** In its purest form, open-source is a more-or-less altruistic way to see the world change, and empower people with software, rich and poor.  
**\<rehrar>** In its purest form, it's not about the money.  
**\<rehrar>** Cryptocurrency is very strange, in that, for most projects, it's all about the money, despite being open source. It's a weird bastardization. But you see with the launch of Bitcoin, it was about changing the world by providing a better money, not about making money.  
**\<rehrar>** I like to think Monero subscribes to being like that. We're not about getting rich. We're about changing the world, and there's a lot of other projects that are trying to do that in small ways too  
**\<ArticMine>** This seems to me to e a very worthwhile project  
**\<rehrar>** Monero can show them some love, get our word out there and help them spread theirs at the same time.  
**\<rehrar>** We can help them get set up with Monero donations, etc. etc. etc. What we can accomplish for them is only limited by the skills of the volunteers we have.  
**\<cryptochangement>** sounds good, it would be awesome if we could get the coordination for that  
**\<rehrar>** This also gives a project for the many people who want to help Monero, but don't know how cuz they can't code.  
**\<rehrar>** Either way, that's my idea.  
**\<rehrar>** If we like it, I can start work on it.  
**\<ArticMine>** Of course we can look at Monero as a multi-billion dollar crypto-currency with an elaborate security model based entirely upon software freedom  
**\<cryptochangement>** I for one like it  
**\<cryptochangement>** looks like a small crowd today  
**\<sgp>** @rehrar I think the most difficult part would be finding enough participants  
**\<rehrar>** This is true.  
**\<rehrar>** Which is kind of sad, since Monero community is so big, but that's the way it goes with anything, I think.  
**\<cryptochangement>** I think we could easily find enough people in time, but coordinating volunteers to do stuff like that all together in a short-ish amount of time would probably be the bigger challenge  
**\<sgp>** Maybe a mailing list would help more than subreddit posts. Not sure  
**\<ArticMine>** There is also a lack of awareness in the Monero community as a whole as to the critical role Free Software and software freedom play in Monero  
**\<rehrar>** We can have a 'sign up sheet' where people sign up to receive emails about stuff. They say their skills, and once a month we have a new project to help.  
**\<cryptochangement>** the problem with a r/ post is that most people over there are just scrolling by with short attention spans  
**\<rehrar>** \^ ArticMine  
**\<rehrar>** Most people don't really understand open source as a whole. They know Monero IS open source, but they don't know the ideals of open source, and how it tries to change the world  
**\<cryptochangement>** the 'sign up sheet' sounds like a good idea tho  
**\<sgp>** @rehrar sounds good, as long as you include clear projects for beginners to work on  
**\<rehrar>** Then maybe we can have a sticky in the Community subreddit of the project we're helping this month  
**\<rehrar>** final though from me:  
**\<cryptochangement>** the community subbreddit is nice, but pretty small :/  
**\<rehrar>** even if all this accomplishes is tiny bits of help (financial or otherwise) toward a project, the other thing it accomplishes is spreading the word of open-source as a whole to our community, and generating awareness for other projects that some in the community might find useful  
**\<rehrar>** it's pretty easy to 'catch the vision' of Monero, when you catch the vision of open source as well.  
**\<ArticMine>** ^^ This is critical  
**\<rehrar>** In the end, isn't that the goal of the Community workgroup?  
**\<rehrar>** We try to make a better community  
**\<rehrar>** and a better community, is a community that 'gets it'  
**\<sgp>** Yes, at least imo  
**\<ArticMine>** It can be part of the role of the Monero Community  
**\<rehrar>** so it makes sense that our subreddit and stuff is small  
**\<rehrar>** cuz not many people 'get it' ;)  
**\<sgp>** @rehrar part of it is me mostly using the subreddit only for announcements  
**\<rehrar>** Either way, once again, it will make an outward focus for Monero instead of just an inward ones, which will set us apart from other crypto projects.  
**\<rehrar>** *bows* thank you  
**\<cryptochangement>** *applauds*  
**\<rehrar>** (my rant for the meeting)  
**\<ArticMine>** To me it is a recognition o the debt Monero own the FLOSS communities  
**\<ArticMine>** owes  
**\<sgp>** Yeah, I think it's a good project to have  
**\<serhack>** hi :)  
**\<sgp>** Anything else? What do you need to get started @rehrar?  
**\<rehrar>** I guess some volunteers to work with me to start compiling a list. :)  
**\<rehrar>** I'll make a Taiga for it.  
**\<sgp>** ok cool, look forward to seeing how this project evolves  
**\<rehrar>** also check out the new refreshed getkovri.org website and tell me if anything is broken for you on mobile, desktop, or tablet :D  
**\<cryptochangement>** I'd be glad to volunteer  
**\<serhack>** I like your idea rehrar  
**\<rehrar>** I like my idea too serhack ;)  
**\<cryptochangement>** so you got at least 1 or 2 already :p  
**\<sgp>** 5. FFS updates  
**\<sgp>** There are several FFS updates.  
**\<sgp>** a. Localization workgroup Q&A  
**\<sgp>** Erciccione asked to reserve some time for a localization workgroup Q&A.  
**\<ErCiccione>** thank you sgp i have a couple of things to say  
**\<ErCiccione>** first of all i wanted to apologize to the community, I'm having some personal problems since january. This caused me to work less than i wanted to (and less than what i promised in my ffs) for the localization workgroup  
**\<ErCiccione>** this means i'll recover that time on march (reclaiming the third milestone one week later)  
**\<ErCiccione>** but i have also some good news :)  
**\<ErCiccione>** thanks to rehrar's patch getmonero.org is now ready to be localized, i already set up a guide on taiga and can be found here: https://taiga.getmonero.org/project/erciccione-monero-localization/wiki/translating-monero-website  
**\<ErCiccione>** very soon i will upload on github the itlaian translation, so translator can use that as example for their Pull Requests. Also  
**\<rehrar>** woohoo!  
**\<serhack>** that's nice :)  
**\<ErCiccione>** i will publish this evening or tomorrow a reddit post asking for translators, since also getkovri was just refreshed and need to be checked and updated. The GUI is going great btw  
**\<ErCiccione>** a lot of translators, and if we are lucky we could get even 3 more translations before the code freeze  
**\<cryptochangement>** awesome  
**\<ErCiccione>** this is everything coming in my mind right now, the reddit post will be more verbose..if anybody has any question,, here to answer :)  
**\<cryptochangement>** btw @ErCiccione i'm about to squash commits for that french GUI update so it should be ready to merge soon  
**\<ErCiccione>** great, thanks cryptochangement, will leave my final review after the squash  
**\<sgp>** Thanks ErCiccione  
**\<sgp>** @michael you ready?  
**\<ErCiccione>** thank you guys  
**\<sgp>** b. RFC-HWALLET-1 project progress  
**\<michael>** Almost.  
**\<michael>** On the road problems.  
**\<rehrar>** how much time you need?  
**\<michael>** Five minutes.  
**\<sgp>** Ok, we can move to open ideas time until you are ready. Just jump in whenever  
**\<sgp>** I have an thought!  
**\<sgp>** I'm surprised we haven't discussed the possible overlap between /r/MoneroCommunity and /r/moonero before. Most large communities have fun making content (eg: dogecoin)  
**\<cryptochangement>** *waits suspensfully for sgp's thought*  
**\<cryptochangement>** thats an interesting way of looking at it  
**\<sgp>** Would encouraging people to make memes encourage people to contribute in other ways? Are we actually harming the community by having these two groups separate?  
**\<cryptochangement>** tbh i dont see how making memes will turn into other contributions  
**\<sgp>** It just encourages light-heartedness and lowers the barrier for initial contributions  
**\<michael>** Can only get a hotel network connection on my phone.  
**\<cryptochangement>** its an interesting idea but it might just end up as clutter  
**\<michael>** We had a hardware team meeting since the last community meeting.  
**\<michael>** For which there are minutes.  
**\<michael>** We're working on a new generation prototype, which will integrate one or more new secure elements.  
**\<serhack>** Private elements too?  
**\<msvb-mob>** Finally online, with a charged battery.  
**\<msvb-mob>** serhack: The secure elements lock secrets away from rogue firmware.  
**\<msvb-mob>** serhack: I don't know what a private element is.  
**\<serhack>** Monero is focused on privacy, I think the hardware wallet should be focused on the same goal  
**\<rehrar>** it is, serhack, no worries  
**\<rehrar>** the secure element is an actual piece of hardware  
**\<serhack>** Right.  
**\<ArticMine>** and how open in the hardware? back to the FLOSS question?  
**\<msvb-mob>** The hardware uses common parts, passive resistors, capacitors, and active LDO (power), MOSFET (transistors), and the more complex but also common MCUs and ICs.  
**\<msvb-mob>** All design, including schematic and layout, is licensed according to the CERN license.  
**\<msvb-mob>** We have rejected all NDA (nondisclosure agreements) and have no secret contacts, so this is quite Opensource. In fact even our process (project management and other docs) is.  
**\<msvb-mob>** ArticMine: Sound okay to you?  
**\<msvb-mob>** Any other hardware team questions?  
**\<ArticMine>** Yes this avoids proprietary attacks  
**\<sgp>** Thanks @msvb-mob for your update  
**\<msvb-mob>** ArticMine: Documents state 'copyright The Monero Project.'  
**\<msvb-mob>** sgp: You're welcome.  
**\<ArticMine>** You need a copyright which is then linked to a FLOSS or certain CC license  
**\<msvb-mob>** Yes, the CERN Opensource Hardware (OSH) license.  
**\<ArticMine>** This is a legal requirement in many jurisdictions  
**\<sgp>** ArticMine msvb-mob anything else you want to discuss related to this? They should have most of the details outlines on Taiga  
**\<msvb-mob>** sgp: We're done with the hardware report, thanks.  
**\<sgp>** Thanks msvb-mob  
**\<sgp>** 6. Open ideas time  
**\<sgp>** Does anyone have anything to discuss here?  
**\<ArticMine>** It seems to me this is on the right track  
**\<sgp>** Ok, since it seems quiet today, we can wrap up the meeting  
**\<sgp>** 7. Confirm next meeting date/time  
**\<sgp>** The next community meeting will be two weeks from today on 17 February. The next Coffee Chat will be next week on 10 February: https://github.com/monero-project/meta/issues/173  
**\<sgp>** 8. Conclusion  
**\<sgp>** That’s all! Thanks for attending this Monero Community meeting, and we hope to see you on /r/MoneroCommunity and #monero-community. Take care, and know that change starts with YOU.  