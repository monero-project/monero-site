---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-05-06
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** OK, let's begin  
**\<sarang>** ping suraeNoether et al.  
**\<sarang>** First on the agenda, GREETINGS  
**\<sarang>** hello  
**\<sgp\_>** hello  
**\<sarang>** I'll wait a couple of minutes to see if others join  
**\<suraeNoether>** hey guys  
**\<suraeNoether>** thank you for your patience  
**\<sarang>** Since suraeNoether went first last time, I'll go first in the ROUNDTABLE  
**\<sarang>** the DLSAG signature paper has been submitted to a conference in a short form, and the IACR preprint is forthcoming  
**\<sarang>** Thanks to our coauthors for their excellent work on this  
**\<sarang>** The submission process is arduous and irritating  
**\<sarang>** Zcoin published an intriguing Zerocoin protocol flaw recently: https://zcoin.io/cryptographic-description-of-zerocoin-attack/  
**\<sarang>** Sooooo we won't be switching to Zerocoin anytime soon!  
**\<sarang>** My monthly report is available on CCS: https://repo.getmonero.org/monero-project/ccs-proposals/merge\_requests/34#note\_5903  
**\<suraeNoether>** is there an issue with DLSAG key images that will impact the publication process?  
**\<sarang>** I updated the CLSAG protocol code to reflect key prefixing, which had been left out mistakenly  
**\<sarang>** Doubtful  
**\<sarang>** It's an interesting construction regardless  
**\<sarang>** moneromooo asked about doing a CLSAG key image offset (like we do in BPs) to save time while avoiding subgroup issues  
**\<sarang>** Doing so would save ~315 us per signature on my test machine  
**\<sarang>** But it was also noted that there could easily be room for error depending on implementation  
**\<sarang>** Note that the CLSAG test code already performs this offset on the auxiliary key image, but this isn't used for linking anyway  
**\<sarang>** I had also been interested in BP generalizations to arbitrary input lengths  
**\<sarang>** I have code for it: https://github.com/SarangNoether/skunkworks/tree/pybullet-np2  
**\<sarang>** Unfortunately this requires the verifier to compute all inner product rounds and loses computational efficiency  
**\<sarang>** It may be possible to modify the algorithm to do the single-round version, but it is not clear to me how to do so cleanly  
**\<sarang>** Currently, I'm working on updating some formal definitions for suraeNoether for CLSAG, and have been doing some code and timing tests for a paper that was presented to me  
**\<sarang>** Any particular questions on this work?  
**\<suraeNoether>** just curious when you sleep :D  
**\<sarang>** lol  
**\<sarang>** Go ahead, suraeNoether !  
**\<suraeNoether>** my update is shorter: unforgeability proof for CLSAG is nearly complete, but I'm holding off on continuing to write on this before I get some comments back from sarang. some of my protocols as described have a few mismatches with our current approaches, and I don't want to write proofs for the wrong protocols.  
**\<suraeNoether>** i'm working on my talk for the magical crypto conference (i'm leaving tomorrow for that and I'll be back home on sunday)  
**\<sarang>** Well, they'd be correct for our implementation AFAICT, but not for a neat generalization you were working on  
**\<suraeNoether>** oh! well, still  
**\<suraeNoether>** since the proofs will be for the general case  
**\<sarang>** Right  
**\<suraeNoether>** anyway, i'm also trying to solve a problem with the dlsag key images that I thought had been solved, and I'm continuing to review a semi-secret paper for a colleague  
**\<suraeNoether>** (the last semi-secret paper ended up being DLSAG, which is the groundwork for monero lightning, so y'all know if we're keeping it semi-secret it's pretty neato burrito)  
**\<dEBRUYNE>** Is that semi-secrit paper related to Monero?  
**\<suraeNoether>** my action items for today involve a breaking monero episode, further DLSAG research, further semi-secret research, and writing my MCC talk  
**\<suraeNoether>** dEBRUYNE: yes  
**\<dEBRUYNE>** Cool  
**\<suraeNoether>** but i can't go further yet  
**\<sgp\_>** when is the earliest you expect to switch back to the bipartite graph paper?  
**\<suraeNoether>** in being public about the contents, I mean  
**\<suraeNoether>** sgp\_: thank you for reminding me about that, this is an ongoing project, sgp\_, and I've been putting in work regularly on that paper to try to get my simulations working appropriately.  
**\<suraeNoether>** actually putting work regularly into the simulations, because the paper is on hold until the sims are done  
**\<suraeNoether>** sarang and I are trading some projects back and forth; when i hand him clsag or dlsag, i work on MRL11 until he hands me something back, and it's like the tides  
**\<suraeNoether>** :P  
**\<suraeNoether>** i don't have a good timeline on completing it and getting results, however  
**\<sgp\_>** All I'm doing is making sure is that it doesn't fall by the wayside. There are a million things to do, I just want to make sure this remains in the top 3  
**\<suraeNoether>** ^ absolutely  
**\<suraeNoether>** i'll make a little descriptive blurb and make a link to it here later today so that people can see the current state of the thing  
**\<sarang>** perfect  
**\<sarang>** Any other questions for suraeNoether ?  
**\<suraeNoether>** i want to ensure that folks in the community are aware of the progress on each of these projects, and we definitely have a \*lot\* of projects/spinning plates  
**\<sarang>** If anyone else has relevant research to present, now is a great time  
**\<sgp\_>** none from me. looking forward to seeing the MCC recording/slides  
**\<sarang>** As am I  
**\<sarang>** Ok, how about ACTION ITEMS  
**\<sarang>** I'll be rewriting some definitions today to streamline suraeNoether's CLSAG generalization for the proofs  
**\<sarang>** Finishing up that timing data I mentioned earlier  
**\<sarang>** getting another couple of Breaking Monero out the door  
**\<sarang>** Reviewing some output selection stuff  
**\<sarang>** etc.  
**\<sarang>** Others?  
**\<suraeNoether>** I mentioned mine already  
**\<sarang>** that you did  
**\<suraeNoether>** and sgp\_  reminded me to re-add matching to my list  
**\<suraeNoether>** does anyone have any questions about konferenco or complaints or more action items to be added to the list of stuff to do for the research conference?  
**\<suraeNoether>**  i'm asking this because sgp\_ just reminded me how human and fallible my memory is for big lists of stuff to do :D  
**\<sarang>** The speaking agenda for the conference is all set?  
**\<suraeNoether>** yep, i believe i'm waiting on two TBA titles. i need to add two sponsors to our list, Tari and Symas  
**\<sarang>** I'm excited to speak and serve as panel moderator  
**\<suraeNoether>** those sponsors are on the t-shirt design, but not the website  
**\<suraeNoether>** oh man that's going to be a good panel  
**\<suraeNoether>** i'm anticipating pretty rough questions for Voorhees and Gavigan actually  
**\<sarang>** FYI questions for the panel will be submitted by the audience and then selected by moderators  
**\<sarang>** to ensure quality and avoid the inevitable "a few follow-up questions..."  
**\<sarang>** Since we have time, here's an open question... now that the next point release is being finalized, any thoughts from the room about desired changes for the next network upgrade?  
**\<suraeNoether>** ^ i'm curious about this a lot  
**\<suraeNoether>** the other day sarang asked me what i want to see in the next upgrade  
**\<sgp\_>** another ringsize revisit. 2 output min. payment ID stuff  
**\<suraeNoether>** the next big change i want to see is CLSAG, since it'll be basically cutting our blockchain rate of growth by half  
**\<sarang>** 25%  
**\<suraeNoether>** but 2-out min and deprecating pay\_id is on my list also  
**\<sarang>** ish  
**\<suraeNoether>** oh yeah there are some constants  
**\<sgp\_>** any chance for dandelion++? I don't know how long this would take  
**\<sarang>** Probably not by fall, but it's not consensus  
**\<sarang>** any client release could do it  
**\<sgp\_>** right, jut curious  
**\<sgp\_>** are you anticipating any work on your end for RandomX? code is frozen and needs to be reviewed  
**\<suraeNoether>** i heard a rumor that tari is looking into ristretto and monero's protocol  
**\<suraeNoether>** i'm thinking we should invite someone from tari to give us an update on that for the meeting after next or something like that  
**\<sarang>** sgp\_: I'm working with hyc to solicit statements of work from reviewers  
**\<sarang>** We have 4 interested firms  
**\<sgp\_>** great!  
**\<sarang>** Once we get publicly-releasable statements we can put them on GitHub  
**\<sgp\_>** do you expect those within the month?  
**\<sarang>** yes  
**\<suraeNoether>** i'm very excited about that  
**\<suraeNoether>** are the firms all auditing firms? should we consider trying to bring in a hardware firm to assess that end of the implementation?  
**\<suraeNoether>** like, code-auditing i mean  
**\<sarang>** We're getting reviewers with backgrounds in hardware design  
**\<sarang>** It's tough because at some level "can this be built into hardware efficiently" is answered by designing such hardware  
**\<sarang>** Part of the process will be getting feedback on which reviewers' experience aligns most closely with our goals  
**\<suraeNoether>** fair nuff  
**\<sgp\_>** I don't have any other consensus-related questions and comments  
**\<sarang>** Anyone else have any?  
**\<sarang>** Righto!  
**\<sarang>** In that case, thanks to everyone for participating today. Logs will be posted shortly to the GitHub agenda issue  
**\<sgp\_>** I have a really quick announcement  
**\<sarang>** sure  
**\<sgp\_>** If you are interested in speaking, running a workshop, and/or volunteering at the Monero Village at Defcon in August, please fill out the CFP by June 3: http://monerovillage.org  
**\<sgp\_>** We already have some good submissions  
**\<sgp\_>** (done)  
**\<sarang>** When https?  
**\<sgp\_>** whenever rehrar gets the time  
**\<sarang>** :D  
**\<sarang>** OK, we are now adjourned  
