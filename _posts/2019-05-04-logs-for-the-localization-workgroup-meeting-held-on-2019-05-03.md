---
layout: post
title: Logs for the Monero Localization Workgroup meeting held on 2018-05-03
summary: Translation's workflow improvements and future of Pootle
tags: [dev diaries, crypto]
author: erciccione
---

# Logs

**\<ErCiccione>** Let's start this meeting. Copy-pasted text incoming:   
**\<ErCiccione>** Hi folks, welcome to this meeting of the Monero Localization Workgroup!  
**\<ErCiccione>** The agenda can be found here: https://github.com/monero-ecosystem/monero-translations/issues/51  
**\<ErCiccione>** First of all, let's make a quick round of greetings to have an idea of who is here.  
**\<ErCiccione>** Hi everybody!  
**\<dsc_>** hi  
**\<lafudoci[m]>** Hi  
**\<xmrscott[m]>** Hola (on mobile)  
**\<ErCiccione>** alright, not really crowded atm, let's hope somebody else will join soon. Some more copy-pasted stuff:  
**\<kico>** yellow  
**\<ErCiccione>** So, the two main questions we should answer during this meeting are: How to improve the workflow of our localization system? What's the role of Pootle in all this?  
**\<ErCiccione>** Thanks to Pootle, the whole process is much easier for translators, since they can directly submit the translated strings using an easy  
**\<ErCiccione>** user interface. This was a big improvement from the past and the result is that  
**\<ErCiccione>** we reached an all-time-high peak of Monero contributors and translators during the last hard fork (about 60 translators worked on GUI and/or CLI),  
**\<ErCiccione>** and we managed to translate and review thousands of strings in about 48 hours. I consider that a huge achievement.  
**\<ErCiccione>** First of all, I think it's necessary to give a quick overview of how the translation process works at the moment (using the GUI as example):  
**\<ErCiccione>** 1. code gets updated all the time, adding and removing strings. About once a month i update the git repository on pootle's server.  
**\<ErCiccione>** 2. translators continuosly suggest new strings, which i technically review one by one. Some languages have "language coordinators", which are trusted members of the localization workgroup with the power of reviewing and push translations. They don't review their own translations.  
**\<ErCiccione>** 3. once a good amount of strings are reviewed i sync them with the git reository on pootle, i refresh the language files with lupdate and then open the PR. This way i'm opening a PR with the code synced with the last changes that happened during the time translators worked on the strings.  
**\<ErCiccione>** 4. Right after, i upload the new synced languages on Pootle, so that translators will work on the updated strings.  
**\<ErCiccione>** 5. the circle repeats.  
**\<ErCiccione>** The bigger issues with this system are 2:  
**\<ErCiccione>** - if some big chuncks of code (with new strings) get merged right before a release, translators will have very few time to translate and i have few time to review  
**\<ErCiccione>** - Every time the code gets changed, the number of the line referred in the language files changes as well. This means that even if a translation exists, QT won't see it if the right string is not referred.   
**\<ErCiccione>** This is very annoying, but right now is resolved doing a round of lupdate (which sync the language files with the code) as last PR before tagging the release.  
**\<ErCiccione>** Selsta mentioned the possibility of removing line numbers and avoid this problem (https://github.com/monero-ecosystem/monero-translations/issues/51#issuecomment-487793419), but i don't know if it's doable, i hope our QT people can answer on this;  
**\<selsta>** Hi  
**\<ErCiccione>** About this workflow, i think with a proper code freeze of 1-2 weeks most of these issue are solved, especially since i sync the code every month or so, keeping a continuous flow of translations, but if there are better options/suggestion, please feel free to suggest them.  
**\<ErCiccione>** so, are there any suggestions/ideas?   
\* selsta reading backlog  
**\<ErCiccione>** (end of first copy-pasted chunk of text about point 1)  
**\<selsta>** Who set up the current GUI translation system?  
**\<ErCiccione>** selsta: i did  
**\<xmrscott[m]>** Could maybe the uploads be automated via a python script or something allowing for higher frequency?  
**\<ErCiccione>** wait, if you mean QT itself, that was already there when i arrived  
**\<selsta>** Can you try running lupdate with `-locations none`?  
**\<selsta>** (after the meeting)  
**\<selsta>** I think it should solve the problem you described above.  
**\<ErCiccione>** xmrscott: they could, yes, but it's not going to be a big improvement, since i would have to manually commit anyway  
**\<ErCiccione>** selsta: i will try locally after the meeting, sure, but el00ruobuob had soum doubts about that method, did you read his answer on the issue?  
**\<selsta>** I guess the same strings don’t have multiple translations?  
**\<selsta>** I don’t really understand el00ruobuob’s comment.  
**\<ErCiccione>** selsta: you mean for the same language? they don't.  
**\<xmrscott[m]>** ErCiccione: Would it be possible to run it on a cron job though and have a bot account or whatever handle the commiting?  
**\<selsta>** I think running lupdate manually is fine.  
**\<ErCiccione>** xmrscott: I thought about it, but i really don't feel to confident in giving access to my GPG key to a bot (maybe i'm paranoid tho), and i would prefer review to review and test translations anyway before committing (again, could be just paranoy)  
**\<selsta>** We could also add lupdate to the build script meaning that every commit would also include the translation changes, not sure if we want that though.  
**\<xmrscott[m]>** I'm probably more focused on #1 since that seems to be the larger issue, the refresh cadence  
**\<xmrscott[m]>** Not so much the commiting back to master  
**\<ErCiccione>** selsta: yes, thank you, thjat's something i forgot to mention:  
**\<ErCiccione>** the problem of syncing strings would be eaily resolvable if the cmake script would run lupdate before every build  
**\<ErCiccione>** right now it only runs lrelease  
**\<selsta>** You’d still have to manually update pootle?  
**\<lafudoci[m]>** I guess el00ruobuob was asking how does qt pickup string if there is no line numbers. And what happen to those duplicated string.  
**\<selsta>** Scan all the sources for strings and add a single translation per language to each string.  
**\<ErCiccione>** selsta: yes, but it would fix the problem of the non-synced translations if some PR (even if they don't add/remove strings) get merged-, since the makefile will sync them before building .  
**\<selsta>** I don’t know what lupdate -location none does though.  
**\<ErCiccione>** I think we should really make the makefile run lupdate in any case, that would make unnecessary the last PR to sync the language files after the bugfixes  
**\<selsta>** dsc_: Opinion?  
**\<dsc_>** Yes.  
**\<dsc_>** Sorry I did not follow the conversation, please continue ill read up  
**\<selsta>** ErCiccione: We’ll have to test it.  
**\<ErCiccione>** dsc_: the main question is: could you (or somebody else) make run lupdate right before lrelease when building (everything is in the makefile)  
**\<dsc_>** Sure  
**\<dsc_>** (We can try)  
**\<ErCiccione>** Ok, great, thanks. That would solve the second. Let's keep in touch about that dsc_, i will open an issue on -gui to keep track of the development.  
**\<dsc_>** Yeah sorry I just got back from abroad  
**\<dsc_>** im following convo tho  
**\<ErCiccione>** no worries man :)  
**\<ErCiccione>** What about the first point? i'm really convinced that a proper code freeze of at least one week (so, only bugfixes get merged) , would mostly resolve that point.  
**\<dsc_>** Would be nice if Pootle would sync itself and figure out the mappings  
**\<dsc_>** So, instead of once a month, it would update continuously  
**\<dsc_>** So in the situation that GUI has a code freeze, we can still do a bugfix that changes some lines - but there wont be a Pootle PR neccesary  
**\<ErCiccione>** Pootle doesn't have this feature AFAIK, but i could be wrong. In any case, i don't know the importance of that, since we don't need the strings to be continuously up to date, the important is that they are for the release.  
**\<ErCiccione>** dsc_: if we integrate lupdate in the building process, we can push bugfixes with no issues at all from that side, since if we don't add/remove strings, there is no problem  
**\<dsc_>** right  
**\<dsc_>** maybe I should set up Pootle myself on a server  
**\<ErCiccione>** the important is that we don't add a shitload of strings 2 days before the release, like it happened last hard fork :P  
**\<dsc_>** (to see how it works)  
**\<dsc_>** right  
**\<ErCiccione>** dsc_: FWIW Pootle has a nice integrated webserver that make the testing process in a non-production environment very quick and easy.  
**\<dsc_>** ill look into that  
**\<ErCiccione>** If nobody else has comment on this first meeting point, i would pass to the second one, which is Pootle itself and how to deal with it (will explain what i mean)  
**\<ErCiccione>** thanks dsc_.  
**\<ErCiccione>** alright, let's go on. Some more copy-pasted text incoming.  
**\<ErCiccione>** Second big point of this meeting is Pootle itself.  
**\<ErCiccione>** The project is nice and at the moment has every feature we need, the problem is that development is basically dead. I asked support for some minor issues for months without answer.  
**\<ErCiccione>** When they finally did answer, they basically told me the project is developed "when they have time" and even offered to hand it over if i was interested. See https://github.com/translate/pootle/issues/6893.  
**\<ErCiccione>** The point is: i don't think other localization platforms would change in a substantial way our workflow. I used Weblate in past (which would be the first candidate if we replace Pootle) to translate Riot in Italian and they use a workflow similar to ours, with the difference that they automatically push commits to their repo.  
**\<ErCiccione>** Since i'm not a core team member, automatically commiting is out of question and i honestly don't mind opening PRs manually, since it allows me to review and test locally, which helps with my perpetual anxia :P.  
**\<ErCiccione>** It's also true that it's not optimal to use a platform which is basically abandoned, from both a security and functional point of view (weblate has more features than Pootle).  
**\<ErCiccione>** I would like to hear the opinion of the community at large about this, since integrating Pootle required a good amount of resources and i understand that would be annoying to replace it after a so short period of time, but i personally am not a fan of th idea of using an abandoned project. Also,  
**\<ErCiccione>** if we decide to try another platform (as said, i would try weblate, but other suggestions are welcome), i would have to dedicate time to that, which will obviously slow down some other things.  
**\<ErCiccione>** Anyway, in case, i'm confident i could manage to have a working new platform before the end of my CCS (beginning of June), since i already tested weblate in past and i already have access to the translate.getmonero server.  
**\<ErCiccione>** In the meantime, we would keep using Pootle until the new platform is ready. Thoughts?   
**\<xmrscott[m]>** My vote is to transition to Weblate. Notable features for more casual users  
**\<ErCiccione>** yes, weblate has some nice feature would be nice to have (like a better commenting system for every string)   
**\<xmrscott[m]>** Namely, ability to get emails when new strings are added; not everyone monitors #monero-translations or r/monero like a hack for new strngs announcements  
**\<xmrscott[m]>** https://docs.weblate.org/en/latest/admin/continuous.html  
**\<dsc_>** I think that ultimately you are the person to make such decision  
**\<dsc_>** as authority on all things translations  
**\<xmrscott[m]>** *like a hawk  
**\<dsc_>** I doubt anyone has better insight in such systems :P  
**\<ErCiccione>** xmrscott: true. Just FYI, the first choice at the time was weblate, we went for pootle because me, serhack and rehrar had all problems with making weblate's webserver work properly, but that was about a year ago and now we have many more developers who could take a look at it.  
**\<ErCiccione>** dsc_: thank you for your trust :) but i thought that since there is my CCS involved, more opinions on this would be really appreciated  
**\<ErCiccione>** (i wrote an year ago, but it's actually less, six months maybe? or something like that)  
**\<ErCiccione>** don;t really remember i should check the backlogs  
**\<ErCiccione>** There seem to be no strong opinions on this point, so i think i will just try weblate locally or in a vps, then will keep you all updated about it, without spending too much time on it at first. Sounds good?  
**\<xmrscott[m]>** Yep yep!  
**\<lafudoci[m]>** yes  
**\<ErCiccione>** Alright, if somebody has questions/ideas/random thoughts, please go ahead, otherwise we can just end the meeting.  
**\<ErCiccione>** Let's wrap it up then. Thank you all for coming, especially if it's morning in your country and you are at work :P. Have a good day and see you around!  
