---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-07-16
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** Welcome to everyone; greetings  
**\<suraeNoether>** hi  
**\<sarang>** Let us go with brief updates  
**\<sarang>** The initial draft report from Kudelski has arrived, with generally positive results  
**\<sarang>** A few small things to address  
**\<sarang>** I am working on some prototyping code for a sublinear RingCT proposal that's progressing very nicely  
**\<sarang>** I delivered a talk on fungibility in Portland (in the airport right now about to depart)  
**\<sarang>** Other reports?  
**\<suraeNoether>** I wrote a thing... it was sort of a whim  
**\<suraeNoether>** endogenic and I started talking about comparing addresses when sending a transaction  
**\<suraeNoether>** humans tend to only check the first five or sex and last five or six characters in an address  
**\<suraeNoether>** there are graphical representations of random data so people can visually compare them  
**\<suraeNoether>** one way to do this is using seashells, since they are easily parameterizable  
**\<sarang>** (e.g. randomart)  
**\<suraeNoether>** https://github.com/b-g-goodell/research-lab/tree/master/source-code/iseeseashells  
**\<sarang>** nice  
**\<suraeNoether>** so i wrote a thing that takes an address, hashes it, breaks the hash into 4-byte pieces  
**\<suraeNoether>** uses each of those pieces to define a parameter of a seashell  
**\<suraeNoether>** and then plot it  
**\<suraeNoether>** so if we could get something going client-side with each transaction, with a javascript renderer, it would work like this  
**\<suraeNoether>** i want to send xmr to a bitcoin address using xmr.to  
**\<suraeNoether>** i fire up my xmr wallet and copy-paste my xmr.to address into it, and a seashell appears. i compare it to the seashell on the xmr.to website. they look the same, and the characters seem to mostly match, so i send the transaction  
**\<suraeNoether>** (same thing for firing up my bitcoin wallet to  verify i'm sending to myself appropriately)  
**\<sarang>** So you effectively treat the shell as a fingerprint  
**\<suraeNoether>** yeah, pretty much  
**\<suraeNoether>** there are collision issues  
**\<sarang>** its use being similar to key fingerprints in other places  
**\<suraeNoether>** but i think if we do it appropriately, it's less likely than for other approaches  
**\<sarang>** Right, so it's not a primary check  
**\<knaccc>** very cool, can you paste an example seashell ascii art please?  
**\<suraeNoether>** in addition to that, i wrote a thing on churn that is 3+ pages long. it's statistics-heavy, still internal, will be shared later this week. it'll help inform us on our ring size choices, etc, for the next fork  
**\<suraeNoether>** not ascii :D  
**\<suraeNoether>** but one sec  
**\<knaccc>** oh it's not ascii art? so won't work in the CLI?  
**\<suraeNoether>** correct, it  is a 3d rendering  
**\<knaccc>** oh cool  
**\<moneromooo>** You can have cli shells there.  
**\<suraeNoether>** so it'd have to be a javascript client side rendering sort of deal  
**\<knaccc>** hehe  
**\<suraeNoether>** let me find where i saved some of the cool ones last night  
**\<sarang>** will it work in bash, or just in csh =p  
**\<endogenic>** you could render it easily enough  
**\<moneromooo>** :)  
**\<endogenic>** and could also scan a render  
**\<endogenic>** rotated of course  
**\<sarang>** FYI will have to leave meeting early in 20 min to catch plane  
**\<knaccc>** 3d renderings sound much more useful than the kind of ssh-keygen fingerprint ascii art  
**\<suraeNoether>** https://usercontent.irccloud-cdn.com/file/vM0sXAXB/Figure\_1.png  
**\<suraeNoether>** https://usercontent.irccloud-cdn.com/file/RKtCkotV/Figure\_1-1.png  
**\<suraeNoether>** so, 1) i'm using matplotlib in python, so it's ugly  
**\<knaccc>** oooh that's lovely! much better than this:  
**\<knaccc>** +---[RSA 2048]----+  
**\<knaccc>** |       .++       |  
**\<knaccc>** |       .+..     .|  
**\<suraeNoether>** ikr  
**\<knaccc>** |     . .   . . ..|  
**\<knaccc>** |    . .     .E.. |  
**\<moneromooo>** ...  
**\<knaccc>** |     ...S     .  |  
**\<knaccc>** |      o+.        |  
**\<knaccc>** |     +..o        |  
**\<knaccc>** |  o B .o.        |  
**\<knaccc>** | . + +..         |  
**\<knaccc>** +------[MD5]------+  
**\<sarang>** omg stahp  
**\<sarang>** the ascii, it hurts  
**\<knaccc>** haha  
**\<suraeNoether>** so, all the formulaes and everything need to be tweaked to make them prettier and more shell-like... and a good javascript person could use the marching cubes algorithm to render these really easily. someone could mess with textures and colors using the hashes, too  
**\<moneromooo>** Or we could generate rogue rooms...  
**\<suraeNoether>** but i'm essentially \*not\* going to put more effort into it: my goal was to construct parameterizations of these surfaces, the math heavy end of things, so someone else can take it and run with it  
**\<sarang>** To jump in quickly due to time... any questions lingering about the audit results? The initial stuff has been picked up by a few sites, generally reported badly  
**\<sarang>** We'll respond to the findings and they'll issue a final report, and then get the rest of their payment from OSTIF  
**\<sarang>** The initial draft doesn't mention OSTIF, which is an oversight on Kudelski's part  
**\<suraeNoether>** sarang I was going to ask about how money was transferred to OSTIF without tax exposure to the monero project or whatever  
**\<suraeNoether>** i was thinking about \*how to pay for the monero conference\*  
**\<suraeNoether>** like, will we need to start an LLC for each conference? maybe  
**\<endogenic>** didn't seem like anyone found the keyspace validation issue.. is that correct  
**\<endogenic>** ?  
**\<suraeNoether>** endogenic: you mean the multiply-by-8 stuff?  
**\<endogenic>** mm  
**\<sarang>** endogenic: kudelski did not mention the subgroup checks  
**\<endogenic>** oh wiat one did  
**\<sarang>** quarkslab did note it in an email to me  
**\<endogenic>** i think  
**\<endogenic>** k \*zips it\*  
**\<sarang>** suraeNoether: what about taxes?  
**\<endogenic>** scoobybejesus ^  
**\<suraeNoether>** sarang: well, some entity has to pay another entity  
**\<suraeNoether>** example: to pay for a venue  
**\<sarang>** I mean for the audits  
**\<sarang>** The payment for the audit was from OSTIF, a nonprofit, to Kudelski, a private company  
**\<suraeNoether>** ah, so we paid OSTIF in monero, and OSTIF is dealing with it  
**\<nioc>** when is QuarksLab expected to be finished?  
**\<suraeNoether>** and since they are non-profit, tax reports must be made but they aren't exposed to the taxes. i get it. but now i'm thinking about how to funnel money from the monero project towards something like a venue expenditure  
**\<sarang>** Correct; OSTIF does the transfer to Kudelski's preferred fiat  
**\<suraeNoether>** which is a different question  
**\<sarang>** the phrase "funnel money" sounds like a Very Bad Thing  
**\<sarang>** nioc: I had expected it this past week  
**\<charuto>** Probably a bad idea to make the audits public one at a time  
**\<sarang>** charuto: I've been posting public audit information as I receive it, in the interest of open disclosure  
**\<suraeNoether>** i can see the argument that it foils some of the independence of the teams  
**\<sarang>** and IMHO we should fix issues openly as we find them  
**\<moneromooo>** Well, if they'd found something bad, we'd have wanted to wait till a release anyway.  
**\<moneromooo>** (without piping up)  
**\<sarang>** true, good point  
**\<sarang>** Their issues were only minor  
**\<charuto>** the last team to release their results could have done nothing and waited to see the other team's results to copy them  
**\<sarang>** I suppose  
**\<suraeNoether>** charuto while that's technically possible, it's more likely that hte second report will merely be \*bigger\* than the first, including everything the first does, plus more.   
**\<charuto>** Imagine like a student assignment where students make their work public before the assignment is due  
**\<suraeNoether>** yeah, except these firms make their living off repeat business and word of mouth  
**\<sarang>** Except that I trust these groups to operate in good faith  
**\<suraeNoether>** it's not a great incentive to screw over one small software project for a relatively small amount of money, when all of them are on twitter all the time trolling zooko  
**\<suraeNoether>** yeah, the incentive structure for them to not do their jobs isn't really there the way it is in high school or college  
**\<silur>** hey guys sorry for being late :(  
**\<sarang>** hullo  
**\<sarang>** Anyway, other questions on the audits?  
**\<sarang>** We shall make changes as necessary and continue the plan toward a release  
**\<suraeNoether>** i have one last quick question on that  
**\<sarang>** go  
**\<suraeNoether>** i know we signed contracts wtih K and QL  
**\<suraeNoether>** or did we just accept their SOW?  
**\<sarang>** We signed the statements of work regarding scope and payment  
**\<sarang>** y?  
**\<suraeNoether>** either way, i'm curious about what we have for Buenz. in terms of "what happens if he just gets busy and phones it in? do we still owe him 10k if he does that?"  
**\<sarang>** We have an SoW for Benedikt  
**\<sarang>** There is no defined metric for what counts as "phoning it in"  
**\<suraeNoether>** k i'll read through it again  
**\<sarang>** It is assumed that he will operate in good faith, just as we assume this for the other reviewers  
**\<suraeNoether>** yep  
**\<sarang>** part of the reason he and the others were chosen was for this reason  
**\<suraeNoether>** yep, just curiuos.   
**\<nioc>** When is QuarksLab expected to be finished?  
**\<moneromooo>** He gave bulletproofs research for free already. No reason why he'd try and screw us here.  
**\<sarang>** I emailed a few days ago to QL asking for a status update; no word yet  
**\<nioc>** thx  
**\<sarang>** I am not pleased with their lack of communication this week  
**\<moneromooo>** Well, not "no reason", that is too strong.  
**\<suraeNoether>** moneromooo: i'm not assuming malice, but densely packed schedules, the priorities and prerogatives of grad students, etc  
**\<sarang>** suraeNoether: he waited for summer term  
**\<sarang>** partly because of scheduling  
**\<suraeNoether>** yeah i know\\  
**\<suraeNoether>** i'm not making any accusations, i was just curious. gosh guys  
**\<sarang>** lol  
**\<suraeNoether>** i'm going to re-iterate my request that future audits have a "suggested unit testing" section to their reports, though. if we're going to be forking over lots of cash for someone to audit our code, and they are going to spend time saying "gee, this HERE would have been an easy test to write" then... may as well  
**\<suraeNoether>** anyway, that's all i have: seashells, churn paper (and small delay on multisig for churn analysis last week, but I've been communicating with Yannick of musig regarding our multisig paper, so that's still moving too)  
**\<suraeNoether>** oh, if anyone is curious on the churn paper, and they are tolerant of \*incorrect statistics\* (NEVER BE TOLERANT OF THIS) then you can read my crapdraft here: https://v2.overleaf.com/read/rznczkmdmchy  
**\<endogenic>** lol  
**\<endogenic>** all statistics are incorrect  
**\<endogenic>** got 'em  
**\<sarang>** OK, I need to board my plane now  
**\<sarang>** I'll be back online in the air  
**\<sarang>** because we're living in the freaking future  
**\<endogenic>** man can't believe they make people actually catch the planes these days  
**\<sarang>** they don't taxi that fast  
**\<endogenic>** maybe if you're riding a pony  
**\<silur>** last time border police didn't let me on my flight..... again  
**\<silur>** #beingstateless  
**\<suraeNoether>** Okay, does anyone have any other things they want to discuss?  
**\<silur>** yep, any news from the new-new-new-updated rtrs?  
**\<suraeNoether>** silur yes, sarang is getting permission to post it on his github  
**\<silur>** shall we merge the implementation too there?  
**\<suraeNoether>** he has finished around half the algorihtms required, and has been messing around wtih an ed25519 library in python  
**\<silur>** oh it's AN implementation  
**\<silur>** thought only text  
**\<suraeNoether>** no, no, friend  
**\<suraeNoether>** sarang has been ON THIS  
**\<suraeNoether>** okay, any other questions before we call it?  
**\<sarang>** Yeah code is making good progress, waiting on permission to include on my repo  
**\<silur>** I kinda don't want to progress with mine if the reference is outdated but glad to hear the py version is goin good  
**\<sarang>** I don't have an opinion on it yet  
**\<sarang>** The code is basically to help me better understand the setup and efficiency  
**\<endogenic>** i'm curious to bring up the question of bindings to C/C++  
**\<sarang>** It's also not even remotely optimized  
**\<endogenic>** but i know it's work  
**\<endogenic>** the mem mgmt could be made v simple  
**\<endogenic>** guess it can be a future goal  
**\<silur>** @endogenic my implementation is pure C with openssl dependency  
**\<suraeNoether>** endogenic: yeah, all we are doing right now is trying to prototype it to get a \*sense\* of asymptotic properties of verification time, etc beyond the statistics described in the paper  
**\<endogenic>** i mean for various util libs so the usage of a specific language for r&d isn't indicated by the existence of those shared libs  
**\<endogenic>** r&d as in prototyping, sims, etc  
**\<suraeNoether>** alllrighty, well, it appears as if we have run out of stuff to talk about. Any final questions?  
**\<suraeNoether>** I love you all  
**\<endogenic>** no i mean that's unsolved  
**\<suraeNoether>** ?  
**\<endogenic>** sarang chose a specific language to work in because there were libs in that language already  
**\<endogenic>** even if it wasn't the preferred language  
**\<endogenic>** just saying there are alternatives and asking how recently they've been investigated  
**\<suraeNoether>** oh, gosh  
**\<suraeNoether>** i don't know!  
**\<suraeNoether>** last time i checked... which was last year when knaccc and i were working on ruffct  
**\<suraeNoether>** i believe there weren't better options available at the time  
**\<suraeNoether>** but since it's just prototyping, i'm not sure it matters too much  
**\<endogenic>** yeah, just a matter of language preference for him..  
**\<suraeNoether>** okay, \</meeting>  
