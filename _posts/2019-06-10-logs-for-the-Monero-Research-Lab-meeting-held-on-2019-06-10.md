---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-06-10
summary: Surae work, Sarang work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** Shall we begin the meeting?  
**\<sarang>** GREETINGS  
**\<rehrar>** hi  
**\<sarang>** Who's present?  
**\<kinghat>** ✋  
**\<rehrar>** rehrar is present  
**\<sarang>** I added a special agenda item to discuss CLSAG  
**\<sarang>** Here's the status of it...  
**\<sarang>** the preprint is finished and is posted (with identical content) in the MRL archive and the IACR archive  
**\<sarang>** This does \_not\_ mean it has received formal peer review, because it hasn't  
**\<suraeNoether>** ^  
**\<sarang>** Our friend moneromooo has made excellent progress on a full codebase integration  
**\<sarang>** I'm assisting as needed  
**\<sarang>** I have also reached out to potential auditors to get both the crypto and the implementation checked  
**\<suraeNoether>** preprints like IACR and arxiv are not peer reviewed articles, but they are often treated that way  
**\<sarang>** and am waiting to hear back with details  
**\<rehrar>** anyone who doesn't understand the concept of peer-reviewed doesn't understand science  
**\<sarang>** In theory, if audits happened speedy quick and the code is ready, it \_could\_ be an October thing, but I consider that unlikely  
**\<sarang>** In the meantime, we'll forge ahead and see where the timeline takes us  
**\<sarang>** But barring any big revelations in the process, it's looking good for being integrated into the protocol and code  
**\<rehrar>** sarang: I don't think people like smooth would go for that anyways. There were people that when bps came out, wanted it to exist in the wild a little longer before implementation  
**\<rehrar>** CLSAG is similar. It's existence is young.  
**\<sarang>** Having the preprint out longer doesn't really do much unless it receives implementation  
**\<sarang>** Random thorough review by a qualified person is unlikely, IMO  
**\<rehrar>** and thus we circle back to the same conversation as bps :D  
**\<suraeNoether>** step one: convince wownero to install it wholesale  
**\<needmoney90>** I was about to say that  
**\<wowario>** we can do it, np  
**\<sarang>** Fortunately, the math behind CLSAG is \_much\_ simpler than that of BPs  
**\<sarang>** by a long shot  
**\<suraeNoether>** won't mitigate the need for an audit  
**\<rehrar>** coo'  
**\<suraeNoether>** yeah, i think unlike bulletproofs, this is still an LSAG-based signature, which have been around for awhile  
**\<rehrar>** sarang: is there any way to follow up on the audit requests then? Who knows. Maybe we can speed this along indeed.  
**\<sarang>** The informal review that I have received (won't name names, to avoid the appearance of endorsement) has all been positive  
**\<sarang>** rehrar: I made the requests over the weekend  
**\<sarang>** I'll give a few days :D  
**\<rehrar>** Minko.to should fund the audits since they're single handedly responsible for larger blocks :P  
**\<sarang>** heh  
**\<sarang>** Any other questions on CLSAG?  
**\<sarang>** Otherwise, I'll carry on with audit SoW requests and assisting moneromooo with implementation  
**\<sarang>** Let us move to ROUNDTABLE  
**\<sarang>** suraeNoether: care to go first?  
**\<suraeNoether>** well, my live has turned temporarily into konferenco administrivia  
**\<suraeNoether>** life\*  
**\<suraeNoether>** badges have been ordered, swag bags have been ordered, etc  
**\<sarang>** nice  
**\<suraeNoether>** i'm scrambling behind the scenes to finish up some reimbursement of speakers, etc.  
**\<suraeNoether>** everything is going smoothly and no catastrophes yet to report  
**\<suraeNoether>** we are 12 days out from the event, and i'm eager to start doing non-administrative stuff after the conference  
**\<sarang>** https://www.youtube.com/watch?v=7trn91xkJ0w  
**\<suraeNoether>** 14 days from now, my schedule is wiiiiide open  
**\<sarang>** Any questions for suraeNoether ?  
**\<suraeNoether>** my action items for MRL specifically that are not konferenco-related are urgent, though: finish up my research reports and begin my request for funding for the next quarter  
**\<suraeNoether>** these are both on my plate \*as we speak\*  
**\<sarang>** I've begun comparative analysis of sublinear transaction protocols  
**\<sarang>** In particular, did a prototype integration of Monero-to-Lelantus output migration to get better numbers on it  
**\<sarang>** I have to modify my Omniring analysis a bit once I realized that the protocol doesn't natively support plaintext fees  
**\<sarang>** it's a simple change to include them as a separate account, and perhaps built-in support can be made more efficient  
**\<sarang>** (I've brought this up to the authors)  
**\<sarang>** Otherwise, my monthly report for May has been up for a bit: https://repo.getmonero.org/monero-project/ccs-proposals/merge\_requests/34#note\_6373  
**\<sarang>** and my 2019 Q3 funding request is also open now: https://ccs.getmonero.org/proposals/sarang-2019-q3.html  
**\<sarang>** (note that this request, like the 2019 Q2 request, will be paid out immediately when funded)  
**\<rehrar>** how'd that work out for you this time sarang?  
**\<sarang>** I am also working on my Konferenco presentation, of course, on transaction efficiency  
**\<rehrar>** pleased with that?  
**\<sarang>** rehrar: it has gone very well  
**\<sarang>** I think that method of payout provides the most fair value to donors and recipients, provided the trust is there  
**\<sarang>** One last item: there were suggestions to have MRL-type people write up summaries of some of the methods of attack and analysis presented in Breaking Monero  
**\<sarang>** including an assessment of risk  
**\<sarang>** This could provide good information to people who want to know such things  
**\<sarang>** I'm always wary of making claims regarding risk that might not apply to a particular individual's threat model  
**\<sarang>** but posting these as summaries of Breaking Monero topics makes a lot of sense  
**\<sarang>** thoughts on this from the room?  
**\<suraeNoether>** i think it's a good outreach project that augments breaking monero, which is, in turn, a good outreach project  
**\<dEBRUYNE>** sarang: As long as you lay out the risks and what mitigations users can utilize then it should be fine  
**\<sarang>** Right  
**\<dEBRUYNE>** ^ for that we don't need to specify a risk level imo  
**\<suraeNoether>** i feel like this would be a good project for someone interested in learning more about Monero  
**\<sarang>** The complication is that the overall risk depends heavily on what different types of information/ability an adversary has  
**\<sarang>** Modifying the assumptions on your adversary can change a lot  
**\<sarang>** so in no way can this be completely comprehensive  
**\<suraeNoether>** the drawback to that is the delicacy of the various ideas involved, but maybe we could have someone work on some blog post summaries in a back-and-forth workshop style approach, someone who is interested in getting more involved at MRL  
**\<dEBRUYNE>** We can list the assumptions needed to potentially weaken privacy right?  
**\<sarang>** Sure, but a full assessment of the risks of every combination of analysis/attack methods is infeasible  
**\<rehrar>** Perhaps one day somebody can make three common threat models, and look at risk for each of those defined three?  
**\<rehrar>** and people can decide if they fall within or without  
**\<sarang>** If Entity X and Entity Y collude and the user has Z transaction types and computation is very strong...  
**\<rehrar>** and we can have tables and graphs and other science-y stuf  
**\<sarang>** A big issue is always that you don't know what heuristics are "bad enough" for a given use case  
**\<dEBRUYNE>** sarang: Yes, I understand it is a bit of a slippery slope  
**\<sarang>** But anyway, presenting the analysis methods is, at its heart, a good thing  
**\<sarang>** provided it's done very carefully and as honestly as possible  
**\<sarang>** The goal is neither to scare people away nor try to push aside all claims of weaknesses  
**\<sarang>** Any questions on my recent work?  
**\<sarang>** Or, alternatively, does anyone else have other work to present?  
**\<sarang>** righto  
**\<sarang>** Well, on to ACTION ITEMS perhaps  
**\<sarang>** suraeNoether already provided his  
**\<suraeNoether>** \<3  
**\<sarang>** Mine are to complete my Konferenco presentation on transaction efficiency, continue assisting with final CLSAG codebase integration, and continue with sublinear transaction protocol analysis  
**\<sarang>** I just read that the Lelantus author had made some changes to make transaction proving more efficient, but didn't see any details... so I'd also like to find out more about that for my analysis  
**\<sarang>** The author and I have had some great discussions so far about making the protocol more efficient  
**\<sarang>** in particular about making batching speedyfast  
**\<sarang>** OK, any last thoughts, questions, or comments before we formally adjourn?  
**\<rehrar>** nah  
**\<sarang>** going once  
**\<sarang>** going twice  
**\<sarang>** adjourned!  
**\<sarang>** Logs will be posted shortly to the agenda issue on github  
**\<sarang>** Thanks to everyone for joining in  
