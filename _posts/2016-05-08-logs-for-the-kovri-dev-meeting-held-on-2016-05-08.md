---
layout: post
title: Logs for the Kovri Dev Meeting Held on 2016-05-08
summary: Mac / BSD support moving forward
tags: [dev diaries, i2p, crypto]
author: dEBRUYNE / fluffypony
---
  
# Logs

**\<anonimal>** Hi fluffypony  
**\<fluffypony>** hiiii  
**\<fluffypony>** was just about to check if you're around :)  
**\<anonimal>** Hi everyone, I think meeting-bot is still online  
**\<fluffypony>** yes it is  
**\<fluffypony>** coming through loud and clear on this side  
**\* anonimal** reading backlog  
**\<anonimal>** Hi moneromoo.  
**\<anonimal>** Hi psi, uncrustify configs? Can you explain?  
**\<psi>** uncrustify is a code styler for c/c++  
**\<fluffypony>** I've never heard of it, plz tell me more psi?  
**\<psi>** it auto formats the code  
**\* psi** gets relevant links  
**\<psi>** https://github.com/uncrustify/uncrustify  
**\<anonimal>** I know that psi, but why for *.conf?  
**\<psi>** i don;t understand?  
**\<psi>** what about *.conf?  
**\<fluffypony>** oh anonimal  
**\<fluffypony>** not for *.conf  
**\<fluffypony>** he means conf file for uncrustify matching our coding style  
**\<psi>** damn lag  
**\* psi** waits to catch up  
**\<psi>** fluffypony: right  
**\* anonimal** back  
**\<fluffypony>** wb  
**\<anonimal>** To answer the question, no I don't have an uncrustify config for kovri.  
**\<anonimal>** Just a simple .vimrc.  
**\<anonimal>** I can take a look at creating a config after #174 is resolved.  
**\<anonimal>** fluffypony: I saw your comment in #56, what system are you runnning?  
**\<fluffypony>** anonimal: Ubuntu 14.04  
**\<fluffypony>** and there's no Boost 1.59 / 1.60 available  
**\<fluffypony>** but that little hack worked  
**\<anonimal>** 1.54 should work though  
**\* anonimal** triple checks  
**\<fluffypony>** I can't use 1.54  
**\<fluffypony>** incompatible with Monero  
**\<psi>** monero needs .56 or higher ?  
**\<fluffypony>** .55 or higher  
**\<psi>** kk  
**\<fluffypony>** so basically .59 or higher if you want both  
**\<anonimal>** I need about 5-15 minutes to build on bsd and osx so I can open the new linkage error tickets I talked about in #174  
**\<fluffypony>** kk  
**\<psi>** :\  
**\* anonimal** the only time I have is now and a bit later but the meeting is now so I want to throw it into the topic  
**\* anonimal** still compiling, should be done in 5 or so  
**\<anonimal>** #monero-dev, FYI, our meetings have always been more organized, on-point, and I've almost always been prepared.  
**\<anonimal>** This one caught me off guard.  
**\<anonimal>** (last minute suggestion by fluffypony)  
**\<anonimal>** Sorry for the wait.  
**\<fluffypony>** don't stress, ours are always by the seat of our pants  
**\* anonimal** opening tickets  
**\<anonimal>** Hmf, I need to work with the bsd a bit more before posting.  
**\<anonimal>** Anyway, https://github.com/monero-project/kovri/issues/175  
**\<anonimal>** I'm only sitting with this again since I left off < 24 hours or so ago so,  
**\<anonimal>** I haven't drawn any conclusions yet.  
**\<anonimal>** Has anyone seen this before? #monero-dev?  
**\* fluffypony** clicks  
**\<fluffypony>** moneromooo: seen anything like that before ?  
**\<fluffypony>** "Undefined symbols for architecture x86_64"  
**\<anonimal>** The usual 'Undefined symbols for architecture x86_64' has been an osx complaint on this machine in the past.  
**\<moneromooo>** Not as such. I've seen plenty of really annoying linking issues though.  
**\<fluffypony>** this is gcc on OS X tho, right ?  
**\<anonimal>** fluffypony: Yes.  
**\<fluffypony>** maybe we're chasing our tails on that  
**\<anonimal>** I don't have time to deal with clang. If we want multi-distro builds, I need to streamline our process.  
**\<anonimal>** for macosx, clang won't build because it doesn't like the things I did for the reseed rewrite and,  
**\<anonimal>** I don't have time to keep-up with llvm development.  
**\<anonimal>** So, thoughts?  
**\<fluffypony>** rewrite everything in C :-P  
**\<anonimal>** lol  
**\<fluffypony>** ok my suggestion is that we eschew OS X / BSD compatibility for the moment  
**\<fluffypony>** until we can fix Clang support  
**\<anonimal>** Thanks moneromoo. I'm glad this isn't just a kovri thing.  
**\<fluffypony>** rather than trying to fudge it  
**\<anonimal>** Well that's the problem, this won't be the only issue.  
**\<fluffypony>** yeah I know  
**\<anonimal>** And I'll end up wasting time juggling compilers instead of working on other things.  
**\<fluffypony>** I mean that can be a later piece of work  
**\<fluffypony>** let's focus on getting it working on one Linux and Windows, where we're running gcc and it's fine  
**\<anonimal>** fluffypony: what part will be the later piece of work?  
**\<fluffypony>** anonimal: fixing Clang incompatibilities  
**\<moneromooo>** I don't use OSX btw, so kinda ignore what I said above.  
**\<anonimal>** Ok sounds great, I'll focus on linux/win building.  
**\<anonimal>** Should we remove osx/bsd build instructions from BUILDING.md?  
**\<anonimal>** Or I'll just open the bsd ticket and maybe someone will see it?  
**\<fluffypony>** yeah, I think let's make a note that it's broken on OS X / BSD for the moment, and that contributors are welcome to fix  
**\<fluffypony>** kk  
**\<anonimal>** Ok, I'll add the note.  
**\<anonimal>** Any other questions/comments on #175?  
**\<fluffypony>** no not yet  
**\<fluffypony>** I mean no not atm, lol  
**\<anonimal>** Ok, I'll add a note in #174 about what we discussed.  
**\<anonimal>** And part 1) in #174, apparently there is an env variable I can set to get it to work.  
**\<anonimal>** Not the first travis issue I've had to deal with.  
**\<anonimal>** Oh well, they are growing quite nicely IMHO.  
**\<fluffypony>** travis issues are growing quite nicely ?  
**\<anonimal>** lol, yes, and I meant their project as a whole.  
**\<fluffypony>** lol  
**\<anonimal>** Ok, hour is up. Anything else pressing?  
**\<fluffypony>** I don't think so - this was kinda an interim meeting because Kovri's was last week  
**\<fluffypony>** so this brings them into line  
**\<fluffypony>** next one on May 22nd, same time  
**\<anonimal>** Ok, I'll mark the calendar.  
**\<anonimal>** Thanks everyone.  
**\<fluffypony>** thank you