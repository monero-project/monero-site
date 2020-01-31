---
layout: post
title: Logs for the Hardware Meeting Held on 2018-01-05
summary: Poll conducted, Reddit summaries, status report(s), conclusion of name search, highlights of 34C3 in Leipzig, etherpads for groups, test plan discussion, recent firmware & FPGA research, mechanical engineering, recent logo contributions, and miscellaneous
tags: [dev diaries, crypto]
author: dEBRUYNE / fluffypony
---

# Logs  

**\<rehrar>** Hellooooo hardware peeps!  
**\<luigi1111w>** I thought next friday  
**\<msvb-lab>** luigi1111w: Yes, right now for an hour.  
**\<luigi1111w>** ok  
**\<nioc>** today and next Fri for software  
**\<msvb-lab>** General hw team meeting, but Friday may or may not (to be decided) be s focus seesion on firmware.  
**\<rehrar>** So we got a lot of ground to cover today, so let's hop into it.  
**\<msvb-lab>** https://taiga.getmonero.org/project/michael-rfc-hwallet-1-implementation/wiki/meet/  
**\<msvb-lab>** Is the agenda.  
**\<rehrar>** So from my understanding, because we'll be moving quite quickly, we'll have to not spend tons of time on discussion per topic  
**\<rehrar>** We can either talk after the meeting (if we want to continue conversation)  
**\<msvb-lab>** rehrar: Yes, that's right. In fact, #1 is already done.  
**\<rehrar>** or perhaps utilize another channel to have side conversations about stuff  
**\<msvb-lab>** And #2 is cancelled.  
**\<msvb-lab>** At the 30 minute mark we break into subgroups, that will be clear as we get to the point.  
**\<rehrar>** Well then, we're already scurrying along.  
**\<rehrar>** The third item on the agenda is the poll that is conducted?  
**\<i-a>** hello!  
**\<rehrar>** Are we talking about how it was conducted, or...? :)  
**\<msvb-lab>** Just that the poll is always conducted on doodle and we have a choice when to hold meetings.  
**\<msvb-lab>** This one there are at least three that can't make it due to time zone differences, too bad.  
**\<i-a>** luigi1111w: today its more about logo, enclosure and a lot of different stuff. Meeting about firmware is lanned to be next friday.  
**\<rehrar>** That's sad, indeed. Is there nothing that can be done?  
**\<i-a>** \*planned  
**\<luigi1111w>** ahh, ok  
**\<rehrar>** Maybe a terrible idea, but what if two meetings were held covering the same agenda?  
**\<msvb-lab>** We can try to build friendships with those folks in other timezones and keep them informed.  
**\<luigi1111w>** I will just watch then  
**\<rehrar>** One that is good for one set of timezones, and then next 12 hours later  
**\<rehrar>** Alright, either way, we can discuss that later. Moving on!  
**\<kamminke>** So, which item on the long agenda we discuss now first?  
**\<rehrar>** we're at 4. Reddit summaries  
**\<rehrar>** I was asked to go ahead and look through the Reddit threads that talk about Hardware  
**\<rehrar>** the provided links are just two examples, although they are some of the bigger ones  
**\<rehrar>** to give a brief summary: there is still a lot of people not understanding that the end result of this hardware project will not necessarily be this workgroup selling hardware wallets  
**\<rehrar>** Perhaps we can discuss at a later time whether (once firmware is complete) this workgroup would like to take on the task of making (funded via FFS of course) a number of hardware wallets for the community  
**\<m2049r[m]>** what are they understanding?  
**\<rehrar>** They're asking about pre-orders, how to order, etc.  
**\<rehrar>** They understand that at the end of this project will, the end result is a deliverable hardware wallet product  
**\<sebgus>** rehrar: Sounds like a good idea. I could assist in this task (hardware assembly).  
**\<dEBRUYNE>** There's a huge business opportunity though if you can actually deliver them for a decent price  
**\<sebgus>** But maybe we want something on a more mass-produced scale, msvb?  
**\<rehrar>** second thing I gleaned: tons of people want hardware wallet support yesterday. Comes as no surprise, but yeah. Thought I'd throw that in there.  
**\<rehrar>** Thirdly: People are very supportive and impressed with the progress and work of this workgroup  
**\<rehrar>** so congratulations are in order there  
**\<rehrar>** and lastly: the obvious comparisons that occur between the goals of this workgroup and ledger/trezor come up very very often  
**\<rehrar>** By reading the Reddit threads, this is the general pulse of how the community is viewing hardware development and this workgroup  
**\<anhdres>** I suppose we'll need to have as good as a mertic of how many wallets could be sold before thinking about mass producing  
**\<cslashm>** is there any sheet comparison of HW wallets projects?  
**\<kamminke>** And, IMHO we have to become more secure as competitors.  
**\<m2049r[m]>** (that & having a product which does something)  
**\<rehrar>** it's hard to gauge without getting preorders, which would require an ahead-of-time commitment to such a thing from a group or individual  
**\<rehrar>** It also does NOT have to be the job of this workgroup to produce and ship them  
**\<rehrar>** there can be another workgroup tasked with that  
**\<anhdres>** rehrar, yeah, a la kickstarter  
**\<i-a>** (please dont think too much about selling stuff which doesnt exist yet)  
**\<rehrar>** leaving this workgroup to continue to innovate and push forward in the hardware field  
**\<rehrar>** \^ a great point  
**\<anhdres>** agree  
**\<serhack>** +1  
**\<rehrar>** let's finish the tasks at hand first, then further discussions could commence  
**\<msvb-lab>** Sorry.  
**\<rehrar>** moving on  
**\<rehrar>** 5. Status reports  
**\<dEBRUYNE>** cslashm: There's Trezor, this group, and Ledger (you). Or didn't you mean it like that?  
**\<rehrar>** first up, board additions  
**\<msvb-lab>** We're still on track with two main editions.  
**\<msvb-lab>** A developer (D) edition, larger and more complex good for devs.  
**\<msvb-lab>** A consumer (C) edition, with excellent aesthetics and easy to use.  
**\<rehrar>** we can continue conversations on previous points in #monero-hardware-aside. It'll just be used temporarily for this meeting  
**\<msvb-lab>** Secure too, ahem.  
**\<cslashm>** dEBRUYNE: juste ask if what the differenciator of each project is written down  
**\<msvb-lab>** Is that okay with everyone else?  
**\<eruheran>** dEBRUYNE, cslashm there is also KeepKey  
**\<rehrar>** (I urge cslashm and dEBRUYNE to continue there :) )  
**\<msvb-lab>** And Digital Bitbox, my favourite.  
**\<msvb-lab>** The dividend results were namely that if folks were willing to give a mailing address, they got a play toy for the holiday season.  
**\<sebgus>** msvb: Sounds reasonable with two versions.  
**\<sebgus>** editions\*  
**\<msvb-lab>** Regarding secure elements, we've had a mix of failure and success with diverse vendors.  
**\<msvb-lab>** Most promising right now is ATECC608A, CEC1702, and nRF42850.  
**\<msvb-lab>** Gemalto and ST Micro are more or less out, and most other vendors have no offering.  
**\<msvb-lab>** Zylinkx sells a FPGA for 120 EUR.  
**\<msvb-lab>** Any questions about secure elements, enclaves, or hardware security modules?  
**\<tat>** hello i am a bit late to the meeting, my name is Morris and i meet Michael on the 34C3,  
**\<msvb-lab>** tat: Super that you made it, thanks for tuning in.  
**\<msvb-lab>** anhdres: Would you please announce our new repository/project name?  
**\<tat>** I have read up during the last days on ledger history and i have a idea about a secure element that would work without NDA and is very cheap to come by.  
**\<m2049r[m]>** yes - i doubt the need for a secure element  
**\<jbdatko>** Hi, I'm Josh, new to this group. I've worked with the ATECC series a lot and recently the Xilinx zynq so I can answer questions on those secure element options if y'all have any  
**\<m2049r[m]>** unless mabye it does curve25519 in hardware  
**\<anhdres>** msvb-lab, sure?  
**\<anhdres>** nah, you do it  
**\<msvb-lab>** jbdatko: So this is quite an honour. Josh is the creator (almost 100%) of our Breakneck board, the developer edition.  
**\<msvb-lab>** jbdatko: Welcome.  
**\<i-a>** jbdatko: hello, nice to see you here!  
**\* jbdatko** waves  
**\<kamminke>** Still the same questions - does the secure elements support the right curve for signing?  
**\<msvb-lab>** anhdres: Okay you nerd. I'll tell the world about our new mistake, the name for our sekura rejected repository is...  
**\<msvb-lab>** kamminke: Yes, they have the curves ed25519.  
**\<msvb-lab>** ...drummrolllll.  
**\<rehrar>** YAY, what a name!  
**\<rehrar>** oh  
**\<msvb-lab>** The name is drumroll.  
**\<rehrar>** I thought: kamminke: Yes, they have the curves ed25519. was it  
**\<i-a>** m2049r[m]: I am also skeptical about secure elements, but if we make hw wallet secure by design, we can still enhance it by adding a storage for keys (and store them encrypted there)  
**\* sarang** locates a drum  
**\<msvb-lab>** KASTRATELO!  
**\<msvb-lab>** Just joking. It's Katelo.  
**\<i-a>** :D  
**\<anhdres>** jaja  
**\<rehrar>** Kastelo :P  
**\<anhdres>** Kastelo  
**\<msvb-lab>** Crap, I mean Kastelo. rehrar yes.  
**\<rehrar>** this is why you don't let msvb-lab announce these things  
**\<msvb-lab>** Well that went over quite clearly.  
**\<tat>** My idea was a programmable smartcard that is embedded as a simcard within the wallet  
**\<m2049r[m]>** we can use any eeprom for that  
**\<serhack>** Kastratelo is a bad word in italy  
**\<rehrar>** Ok. Epic! luigi1111 and luigi1111w we would be thrilled if some changes to the Sekura repo could be made  
**\<cslashm>** About SE, you should consider the scope of HW and side channel attack. SE help for that  
**\<tat>** they are very secure, nxp states they use more then 4000 anty tempering technics in there curent generation of java smartcards  
**\<kamminke>** do you trust smartcards?  
**\<luigi1111w>** aren't we the same person  
**\<msvb-lab>** luigi1111w, yes you and the other luigi are the same person. Look in the mirror.  
**\<sarang>** I always figured luigi1111 was some kind of secret society  
**\<rehrar>** https://github.com/monero-project/meta/issues/136 is a good starting point  
**\<i-a>** The wallet must be secure by design, please lets use secure elements only to enhance allready secure design.  
**\<rehrar>** with the addition of changing the repo name to "Kastelo"  
**\<rehrar>** alright, moving on.  
**\<rehrar>** Again, conversation from older points can continue in #monero-hardware-aside  
**\<rehrar>** 7. Highlights of 34C3 in Leipzig  
**\<m2049r[m]>** an attack is only possible if you can make the device use your key - if you can do that ONCE, then you transfer the funds away and dont care about the key. no?  
**\<msvb-lab>** i-a: Good point. jbdatko Josh do you believe that we can make a hardware wallet that's secure by design in that even when running a roque firmware the secrets remain safe?  
**\<msvb-lab>** Ups, Josh not der.  
**\<msvb-lab>** Okay, who wants to give a 34C3 summary?  
**\<kamminke>** all algorithmen on CPUs you can easy attack with power analysis  
**\<jbdatko>** hmm, the ultimate question yes? ;) Secure elements (try) to keep the private key from leaking but unfortunately with rogue firmware you also have to worry about somebody using the key. Rephrased: you don't have to leak the key to lose money you just have leak control of the key  
**\<msvb-lab>** jbdatko: Interesting, and that's quite clear. So not the holy grail, yet possibly an instrument to use in securing.  
**\<jbdatko>** But combing user input with a KDF passhprase that unlocks the SE I think is the design pattern  
**\<cslashm>** Power Analysis is your enemi  
**\<i-a>** It is a tradeof, (1) having secure elements which could be accessible only through a binary blob uploaded in flash, or having code which could possibly be attacked by side channel. I am not sure how to handle this.  
**\<msvb-lab>** Does anyone want to give a summary about 34C3 in Leipzig?  
**\<tat>**  jbdatko: make the user confirm every transaction in an way that can not be tempered with  
**\<cslashm>** I worked on cerfified product (ID)  
**\<msvb-lab>** rehrar: Let's skip 34C3, as I think most people don't know what it is.  
**\<rehrar>** sounds good  
**\<msvb-lab>** Really not that big a deal probably.  
**\<rehrar>** Well, next is Etherpads for the group  
**\<msvb-lab>** Yes, we're at #8 and half way through.  
**\<rehrar>** https://taiga.getmonero.org/project/michael-rfc-hwallet-1-implementation/wiki/meet  
**\<rehrar>** this is the agenda for the meeting if you missed it  
**\<anhdres>** I wish they released the videos from 34c3  
**\<anhdres>** they're taking ages  
**\<rehrar>** if you scroll down to item 8, you will see the different Etherpads set up for this group  
**\<msvb-lab>** Each of us now takes a moment and if we wish, we can devote part of the next half hour (like an extra open browser window) to one of the subgroups.  
**\<i-a>** 34c3 was incredibly good event, I have met many interesting people, I have given some boards and I am waiting for contributions! msvb-lab did a nice talk about hw wallet, also there was nice talk about monerujo android wallet, both should be online in a month.  
**\<rehrar>** They're topic specific, and just another way to communicate, talk, and exchange ideas  
**\<msvb-lab>** See the part after #8 Main project, QA test, Firmware...?  
**\<rehrar>** Choose your Etherpad, and start disucssion?  
**\<msvb-lab>** I'm going to click on Mechanics since I did meet more than a few interested in mechanical engineering.  
**\<msvb-lab>** rehrar: We continue here in parallel with Test plan I think. Do you think it will work?  
**\<rehrar>** *shrug* never tried it, but should be fun  
**\<msvb-lab>** In the right hand side chat of the etherpads, if you want to be named, click the top most 'people' button and add your name there.  
**\<i-a>** haha, how to make the crowd to disappear? show them etherpads:))  
**\<m2049r[m]>** what is the exact attack vector we are addressing with a secure element?  
**\<msvb-lab>** i-a: Yes, it seems this idea is either very good or very bad. No idea.  
**\<m2049r[m]>** i-a: btw. i did all you said - its still broken  
**\<msvb-lab>** Control over secrets is the attack vector.  
**\<m2049r[m]>** thats too vague for me. how?  
**\<i-a>** m2049r[m]: trying to PM you but i cannot, please could you try to pm me?  
**\<m2049r[m]>** someone has to have phsyical access to the device. then what?  
**\<msvb-lab>** m2049r[m]: Decapsulation is what I would attempt, it depends on many things.  
**\<i-a>** m2049r[m]: "You must log in with services to message this user"  
**\<kamminke>** We have to avoid, that someone, even with physical access to the hardware wallet, gets the key pair to sign transactions.  
**\<msvb-lab>** i-a: That usually means you haven't set up a password with chat.freenode.net.  
**\<rehrar>** i-a maybe you can try on the mattermost guys?  
**\<msvb-lab>** kamminke: That's right, according to Josh it's not enough to fool all attackers all the time, but it's certainly a goal for us to block access to stealing the actual secret away from silicon.  
**\<m2049r[m]>** decapsulation will not help you if the key is password-encoded  
**\<msvb-lab>** Seems mechanical engineers and quality assurance folks are not the chatting types?  
**\<msvb-lab>** Those etherpads are blowing crickets.  
**\<m2049r[m]>** i-a: come to mattermost  
**\<i-a>** m2049r[m]: I never did it, i am trying it now.  
**\<sarang>** How would the key be encrypted?  
**\<msvb-lab>** sarang: Symetric cypher.  
**\<msvb-lab>** I'm not sure if that's how other wallets do it, but that's how SSH does for example.  
**\<msvb-lab>** Wallets alway have these nasty mnemonic thingies, so that throws a curve.  
**\<msvb-lab>** But encrypting a key is no problem. Not that I agree it allows us to avoid a secure element.  
**\<jbdatko>** When in doubt, use libsodium (NaCl) based stuff -- there is a KDF and a PKDF function there that could be ported to bare-metal C (I think it's close already just some linux-y calls)  
**\<msvb-lab>** By that theory we could use a magnetic hard drive and be safe enough.  
**\<sarang>** If you want to avoid someone lifting the encrypted blob and hammering away at it, a simple symmetric cipher without a KDF would be very bad  
**\<sarang>** jbdatko: yes, a KDF is essential  
**\<msvb-lab>** jbdatko: To encrypt a ed25519 secret, we could use a ATECC608A because it has PKDF right?  
**\<jbdatko>** so the 608A does have HKDF so you could use it to create a key tree of sorts  
**\<msvb-lab>** sarang: It's golden when monero-hardware is teaming MRL folks a lesson. Har har har.  
**\<sarang>** PBKDF2 is useful for low-memory settings  
**\<sarang>** ?  
**\<jbdatko>** The biggest issue I would think for this project with the 608a, while I like it, is that it's a NDA datasheet :/  
**\<msvb-lab>** sarang: It's possible the sec eng IC mix we get can do quite a bit with low mem and low power.  
**\<sarang>** msvb-lab: ha, nice try  
**\<msvb-lab>** We won't get lucky enough to use an easy I2C IC for ed25519, but we can use one of those for a number of other security games.  
**\<jbdatko>** PBKD2 I don't think would do well on an ARM M4. I don't think it's memory bound but it takes seconds on a i7. to get the same number of rounds it might take a very long time  
**\<msvb-lab>** I shamelessly copied Josh's concepts to our proj mgmt task 166:  
**\<jbdatko>** Although TREZOR does some kinda of PBKDF so I might be mistaken  
**\<msvb-lab>** https://taiga.getmonero.org/project/michael-rfc-hwallet-1-implementation/task/166/  
**\<kamminke>** I would even prefer asymmetric crypto for the keys, the host encrypt with the public key the key to store, but only the right wallet with his private key can open the stored keyring.  
**\<i-a>** m2049r[m]: https://docs.mattermost.com/install/install-debian-88.html this, really?  
**\<msvb-lab>** jbdatko: A second on key generation, derivation, or verification?  
**\<msvb-lab>** I would assume those are all very different benchmarks.  
**\<jbdatko>** PBKDF2 on high end processors takes seconds by design to derive the key from the passphrase  
**\<m2049r[m]>** i-a: no! this: mattermost.getmonero.org  
**\<sarang>** you can the number of rounds to take as long as you want based on estimated processing speeds  
**\<sarang>** \*you can tune  
**\<rehrar>** alright everyone. Settle down. Settle down. I know it's been a crazy meeting so far, but we got more to get through.  
**\<msvb-lab>** There's plenty of crypto going on in #monero-hardware-aside, for extended discussion about that.  
**\<rehrar>** Let's wrap up our discussions on the Etherpads and come back here for:  
**\<rehrar>** 14. Free to choose topics (Q&A)  
**\<m2049r[m]>** i think what we are aiming for is preventing a casual thief and his hacker friends from access to your funds. anyone else will lock you in their cellar until you tell them the passphrase/key.  
**\<msvb-lab>** It would be nice to give folks a chance at asking 'how do I use my new holiday prototype device?'  
**\<msvb-lab>** I assume it's clear what's been given out in the package:  
**\<msvb-lab>** https://taiga.getmonero.org/media/attachments/0/9/e/f/c3076b82874b6d9805dfcabca2c31e78e884536d2e98b54d3b4abc4045d0/protojulcan-2.png  
**\<msvb-lab>** And that the screen plugs in this direction:  
**\<msvb-lab>** https://taiga.getmonero.org/media/attachments/8/b/a/e/9b16894e088ee64c505dbf0fbc15788e8c5bfb18b1e0ead7056d7acf6332/protoledjc-0b.png  
**\<anhdres>** m2049r[m]: there should be a second (fake) password that shows a decoy wallet  
**\<i-a>** m2049r[m]: trying pm mattermost  
**\<msvb-lab>** ...and that each of us who received a prototype must have read a disclaimer stating that it does not support hardware wallet functions.  
**\<msvb-lab>** It's useless for storing value.  
**\<msvb-lab>** rehrar: Do you have comments or questions for revuo?  
**\<rehrar>** I'm starting to block it out, so not yet.  
**\<rehrar>** Last month was completely monopolized with multilingual implementations on Kovri and Monero websites  
**\<rehrar>** *cough* luigi1111w almost time to merge?  
**\<rehrar>** I'll be back here in like two days though :P  
**\<rehrar>** I wish I had questions for this meeting, but I'm sorry that I don't atm.  
**\<rehrar>** I do have a question though:  
**\<rehrar>** I did (or didn't?) receive a prototype board, what now?  
**\<msvb-lab>** rehrar: It's clear a lot is going on in your corner, not to mention multisig work, globee, and ebooks.  
**\<msvb-lab>** Man.  
**\<sebgus>** rehrar: I'll hook you up with one.  
**\<msvb-lab>** My impression is that test folks don't take to IRC well, so it seems we don't get questions from them.  
**\<msvb-lab>** sebgus: rehrar was retyping the text out of the agenda.  
**\<msvb-lab>** Ha.  
**\<sebgus>** aha  
**\<rehrar>** And a followup question to that: How do I create a pull request in the official Github repository?  
**\<rehrar>** This is where msvb-lab says "I'm glad you asked," and then explains in song and dance  
**\<msvb-lab>** rehrar: Ah yes, we can do a pull request tutorial.  
**\<msvb-lab>** We even have the pro teacher right here with us.  
**\<msvb-lab>** Ms/Mr pro?  
**\<msvb-lab>** First of all, is there at least one person who wants to know how to get their sekura/kastelo changes into the official repository?  
**\<msvb-lab>** There needs to be at least one indication 'yes' or else we do no tutorial.  
**\<anhdres>** I already did once for the logos, I guess I'll do the same again in the future  
**\<tat>** msvb-lab: is this about how to make a PR ?  
**\<m2049r[m]>** yes  
**\<msvb-lab>** tat: Yes, have you ever made one before?  
**\<msvb-lab>** Okay, lesson starting.  
**\<msvb-lab>** Where is sebgus and i-a?  
**\<tat>** msvb-lab: i make about 3 a day, i work as a software developer in my day job.  
**\<rehrar>** lesson = https://try.github.io/levels/1/challenges/1  
**\<msvb-lab>** So if I want to make changes to the sekura/kastelo official repository, I first clone it to my own GitHub user account (I must be signed in to already.)  
**\<msvb-lab>** https://github.com/monero-project/sekura/  
**\<sebgus>** I'm here!  
**\<msvb-lab>** I clone it in the usual way.  
**\<msvb-lab>** Since I like the command line, for me this is:  
**\<m2049r[m]>** i another question; qhats the status of the self-destruct idea?  
**\<m2049r[m]>** have  
**\<msvb-lab>** \$ git clone https://github.com/monero-project/sekura.git  
**\<msvb-lab>** cd sekura  
**\<msvb-lab>** Now I make changes:  
**\<msvb-lab>** \$ vim weirdolameness.txt  
**\<msvb-lab>** Now I commit:  
**\<msvb-lab>** \$ git commit weirdolameness.txt  
**\<msvb-lab>** ...which puts changes into only my personal cloned copy of the official repo.  
**\<msvb-lab>** Actually I missed a step which is:  
**\<msvb-lab>** \$ git push  
**\<rehrar>** If you need more help with git or github, you can ask many people here  
**\<msvb-lab>** These things are all basic to any git (this is not yet GitHub pull request specific)  
**\<msvb-lab>** Now comes the specific part...  
**\<rehrar>** I'm sure we'd be happy to lend a hand  
**\<msvb-lab>** I navigate to the official repository:  
**\<msvb-lab>** https://github.com/monero-project/sekura/  
**\<msvb-lab>** and click next to 'Branch' on the left side the button 'New pull request.'  
**\<msvb-lab>** That means, click the 'New pull request' button.  
**\<msvb-lab>** Can somebody else explain the rest, I actually can't remember what follows.  
**\<rehrar>** After you click New Pull Request? You type your changes in the provided box, and click "Submit Pull Request" or something  
**\<rehrar>** there may be requested changes by the maintainer, but that's pretty much it  
**\<tat>** You should add a short title explaining the PR content and some meaningfull description of the changes.  
**\<rehrar>** alrighty peeps, we're 5 minutes after  
**\<tat>** The smaller a pull request the betterm usually one change at a time. It is easyer for people to review those changes.  
**\<msvb-lab>** rehrar: Yes, let's close the door.  
**\<msvb-lab>** Anyway, regarding PR, please read:  
**\<msvb-lab>** https://github.com/monero-project/sekura/blob/master/CONTRIBUTING.md  
**\<msvb-lab>** https://github.com/monero-project/sekura/blob/master/PULL_REQUEST_TEMPLATE.md  
**\<rehrar>** I think it's about time to wrap up so we can move on in this little ordeal we call life  
**\<rehrar>** Thanks for a fun, if not somewhat chaotic, hardware meeting  
**\<msvb-lab>** Kerchunck. Gavel landed.  
**\<rehrar>** We'll hopefully havae another one sometime soon. As needed basis? Once a month?  
**\<msvb-lab>** rehrar: Maybe, I guess regularity might be nice.  
**\<rehrar>** You are all released from servitude. Have a great rest of your day.  
**\<msvb-lab>** Not sure what others think. Should we just meet when there's a lot to talk about or regularly?  
**\<rehrar>** We can try for next month?  
**\<rehrar>** Regular XMR meetings happen once every two weeks. Think that's too much?  
**\<anhdres>** nice talk eveybody!  
**\<msvb-lab>** rehrar: Yes, we'll do that. But unlike sgp's flow it is not part of this meeting to decide the next.  
**\<rehrar>** it might help there not be so many topics and discussions to crunch into one meeting if it was regular  
**\<rehrar>** Meeting is technically over ;)  
**\<rehrar>** So we are outside meeting flow atm  
**\<msvb-lab>** rehrar: Cool beans.  
**\<rehrar>** and discussing this casually  
**\<kamminke>** every 2 weeks is fine - enough time to has something to show which is new  
**\<msvb-lab>** kamminke: I think you're right, and instead of a sgp style decide during meetings we'll keep the email/doodle vote. You think that's okay too?  
**\<i-a>** msvb-lab: I am here! Was setting up something on mattermost.  
**\<rehrar>** Ok. We can do another doodle  
**\<rehrar>** Alright, catch you all later.  
**\<i-a>** I like doodle voting also, but I will also try to make firmware meeting next friday. I will inform abut it in monero-friendly channels around.  
**\<m2049r[m]>** msvb-lab: hows the self-destruct idea maturing? i think thats the only way to be secure.  
**\<msvb-lab>** m2049r[m]: Thank you! You're the only one who has taken interest in my wild james bond action feature so far.  
**\<msvb-lab>** I think it's actually possible, but a number of research steps are needed.  
**\<tat>** msvb-lab: how would it be triggered ?  
**\<msvb-lab>** For example, it's going to be real hard to pass enough current through those tiny wires in order to destroy the whole die without simply burning a VCC line or something.  
**\<msvb-lab>** tat: I assume a combo of caps, fuses, and a relay will do the job.  
**\<msvb-lab>** That is the idio prehistoric concept though.  
**\<tat>** msvb-lab: but what is the triggering event  
**\<msvb-lab>** There may be a much more elegant solution, we just haven't started researching it enough yet to know.  
**\<msvb-lab>** The triggering event is typically a timer.  
**\<msvb-lab>** Use case is a honest person like you or me crosses a border and is searched.  
**\<msvb-lab>** But before doing so, we set a timer on the wallet.  
**\<msvb-lab>** Seven minutes, twenty, whatever.  
**\<msvb-lab>** After which time, the cap charges, discharges, and burnes an important circuit like the secure element.  
**\<msvb-lab>** Crazy no? I'm really not sure it will work.  
**\<tat>** msvb-lab: i have been reading up on stuff the last days, and there is virtually nothing really good without NDA to secure the keys, the only really good thing that is out there are smart cards.  
**\<i-a>** tat: could you please give me a link to some smart card element worth considering?  
**\<m2049r[m]>** cant be difficult to put a smartcard reader in there - they cant be attacked?  
**\<tat>** i-a: well there is allready a bitcoin implementation  
**\<tat>** https://www.ledgerwallet.com/products/6-ledger-unplugged  
**\<tat>** they discontinued that product because of NFC problems  
**\<msvb-lab>** tat i-a: Smartcards brings us into Javacard world, not sure we want to go there.  
**\<sarang>** when has java ever gone wrong  
**\<msvb-lab>** tat: Do you think those NFC problems could become ours as well?  
**\<tat>** msvb-lab: i know java sounds ugly, but it can be pretty safe  
**\<msvb-lab>** We need to learn from their mistakes.  
**\<tat>** msvb-lab: we wouldn't use NFC  
**\<tat>** we use the smartcard processor, there are plenty of wyays to cumminicate  
**\<kamminke>** Smartcards running a small OS, which runs a hypervisor, inside there is another OS and the JavaVM .. I thinks it is security through obscurity  
**\<tat>** i show you guyes something:  
**\<tat>** https://ftsafe.com/Products/BlockChain  
**\<tat>** you can call it security by obscurity, and when it comes to the die it always is, but these stuff has been hardened for decades.  
**\<tat>** It is very very difficult to build a good and reliable attack against that kind of devices.  
**\<kamminke>** Well, your passphrase you can lost in that moment the friendly border officer requested it - your fingerprint he gets with a twist of your arm..  
**\<i-a>** (I really LIKE so many opinions here, well done:)  
**\<msvb-lab>** i-a: Pretty cool, no?  
**\<msvb-lab>** And I even think the etherpads thingie went okay. We won't do it every time, but at least the seasoned meeting participants know how it works now.  
**\<msvb-lab>** And anyone can jump into those pads at any time before, during, or after a meeting.  
**\<msvb-lab>** I'm out of here, going afk. Have a good one everybody. Thanks again.  
**\<kamminke>** I like to investigate, how Lattice stores the configuration for the iCE40 FPGA on the die - we are talking about 40nm transistors, which is fair below the Abbe-limit, no optical microscope helps anymore.  
**\<msvb-lab>** @+ 73 chao pescado  
**\<msvb-lab>** I'll put minutes up later, unless somebody else wants to do it. See the wiki/meet/ page.  
**\<i-a>** kamminke: i am not sure if yu know clifford.at, but this guy seems to be incredibly aware of everything inside lattice FPGA, maybe ask him..  
**\<kamminke>** I already talked with him at 34c3 - he gives us support for Dual-Rail Logic while synthsis, if I give him a very good analysis how I can avoid power analysis with that technique  
**\<i-a>** ok,)  
**\<kamminke>** BTW, the faitian wallet use the smartcard from infineon - I remember this are the company with the weak random generation last month in the tech news, right?  
**\<jbdatko>** It was an RSA attack -- ROCA I beleive  
**\<i-a>** i must go, thank you all for nice inputs and see yu next time:)  
**\<m2049r[m]>** kamminke: please tell me why power analysis is relevant here?  
**\<tat>** m2049r[m]: could that be related to side channel attacks by listening to the power line?  
**\<tat>** And one more question, i have seen that there is some research into using an FPGA, isn't that kind of die horribly expensive compared to other options.  
**\<m2049r[m]>** tat: as i understand it, yes - but  think it is irrelevant - because if this attack is useful, the attacker has already made the device do something with the key. so they might as well make the device transfer the funds out.  
**\<m2049r[m]>** other options seem to be thin.  
**\<tat>** i have one of the small devboards, and i connected the usb-c connector to my macbook power supply, it wouldn't work, only if i use an adapter with a regular usb power supply.  
**\<tat>** Is it possible that the usb is actually a usb interface with a usb type c plug, as far as i understood usb-c uses a protocol to handle the voltage needed  
**\<i-a>** tat: Yes, it is just normal usb rewired to usbc. Usbc funkcionalities are not implemented.  
**\<tat>** i-a: so usb-c plugs won't work then, you will always need a adapter to micro or something and a usb psu  
**\<tat>** i-a: i mean usb-c cables won't work  
**\<i-a>** no,I am using original usbc cable  and it works.. probably there is something how apple handle usb, it probably recognises usbc and is expecting something different..    