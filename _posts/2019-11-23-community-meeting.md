---  
layout: post
title: Logs for the Community Meeting Held on 2019-11-23
tags: [dev diaries, crypto]
author: asymptotically / SamsungGalaxyPlayer
---

# Logs

**\<sgp\_\>** Meeting time  
**\<sgp\_\>** 0. Introduction  
**\<needmonero90\>** Hi diego  
**\<sgp\_\>** Welcome to the Emergency Response Process and Compromised Binaries Post-Mortem Meeting. Today, we shall discuss the information we know so far about the compromised binaries and introduce ideas to better respond to emergencies in the future.  
**\<sgp\_\>** It’s later than most of our meetings, so thank you for coming at this unusual time.  
**\<sgp\_\>** 1. Greetings  
**\<needmonero90\>** Hello!  
**\<M5M400\>** Servus!  
**\<rehrar\>** h'lo  
**\<binaryFate\>** hi  
**\<pizzaburger\>** Good day!  
**\<anhdres2\>** hola!  
**\<mrpublic\>** top o the mornin'  
**\<intj440\>** Hello  
**\<needmonero90\>** Is the fluffiest pony here this evening?  
**\<sgp\_\>** Welcome everyone! There is a lot to cover, so let's move methodically so that we can respect those staying up late  
**\<sgp\_\>** https://github.com/monero-project/meta/issues/413  
**\<sgp\_\>** 2. Website compromised facts and review  
**\<el00ruobuob\_[m]\>** Hi  
**\<ArticMine\>** hi  
**\<sgp\_\>** long set of text incoming describing the situation, including new information  
**\<almutasim\>** Hello.  
**\<sgp\_\>** Here is a short timeline of the events that unfolded earlier this week:  
**\<sgp\_\>** Relevant blog post: https://getmonero.org/2019/11/19/warning-compromised-binaries.html  
**\<sgp\_\>** The CLI binaries were compromised for approximately 35 minutes on Monday  
**\<sgp\_\>** The attackers did not modify the hashes on the website  
**\<needmonero90\>** Is that time frame known for certain?  
**\<sgp\_\>** Core team member binaryFate created a Reddit post and messaged me about it on IRC. He shared it on his personal Twitter account  
**\<needmonero90\>** Did the logs get pulled?  
**\<sgp\_\>** needmonero90: I will cover the exact time frame near the end of this wall :)  
**\<needmonero90\>** Mmk  
**\<sgp\_\>** Reddit link: https://www.reddit.com/r/Monero/comments/dyfozs/security\_warning\_cli\_binaries\_available\_on/  
— needmonero90 waits patiently   
**\<sgp\_\>** I found it likely that this was true given binaryFate’s position and that it was shared on three different mediums. Thus, I immediately sent Blockfolio, CoinGecko, and Delta notifications. I created a tweet from the Monero Twitter account  
**\<sgp\_\>** Note that although I have partial access to the Monero Twitter account, I am not the primary owner or maintainer of it, and the tweet I created was an exception for the circumstances  
**\<sgp\_\>** I also contacted the other moderators of r/CryptoCurrency, who agreed to allow an announcement about the situation in r/CryptoCurrency  
**\<sgp\_\>** ErCiccione authored an announcement on the website about 14 hours after the incident was initially reported. An email to the Monero-announce mailing list went out around the same time.  
**\<sgp\_\>** Approximately 12 hours after the sending the Blockfolio notification, it had 14,673 impressions and 259 clicks. Today, it has 25,308 impressions and 326 clicks. I don't have numbers for the other portfolio platforms.  
**\<sgp\_\>** The Reddit thread has nearly 300 upvotes and nearly 300 comments.  
**\<sgp\_\>** Twitter reports that the initial tweet has 100,918 impressions and 1,455 engagements.  
**\<sgp\_\>** Major and minor news sites picked up on the story, including Naked Security, Crypto Briefing, The Next Web, Ars Technica, ZDNet, CoinGeek, Fossbytes, CoinTelegraph, Bleeping Computer, AMBCrypto, Bitcoinist, Coingape, Finder, and Decrypt.  
**\<sgp\_\>** There are a few writeups on the content of the malware:  
**\<sgp\_\>** Bartblaze: https://bartblaze.blogspot.com/2019/11/monero-project-compromised.html  
**\<sgp\_\>** serhack: https://serhack.me/articles/cli-binaries-compromised-monero-analysis/  
**\<sgp\_\>** They both determined that the malware was a simple coin stealer. KnifeOfPi also came to the same determination.  
**\<sgp\_\>** Now, on to the website information.  
**\<sgp\_\>** I can answer a few more questions than I could before, but I can’t answer everything yet, including how the website was compromised. I have no insider info there  
**\<sgp\_\>** Security professionals have been working to learn more information. The security team has promised their post-mortem when they have more details.  
**\<sgp\_\>** The downloads are served by two sources: the CDN and the source. The CDN binaries were not affected, which are the preferred sources. The source is fallback.  
**\<sgp\_\>** After the hack, the security admins temporarily turned logging on with the DR download box (which was switched to) in case someone was trying to hack it. A benefit of this is that we learned there are typically fewer than 10 wallet downloads per hour from the direct source.  
**\<sgp\_\>** I can also confirm that 35 minutes is the \*maximum\* time that the malicious binaries were served. The file integrity monitor (FIM) was killed 35 minutes before fluffypony initiated the failover to the backup DR box. If the attackers replaced the files immediately after, then the website was compromised for 35 minutes.  
**\<sgp\_\>** Full timeline:  
**\<sgp\_\>** The FIM’s last log entry was at 16:04 UTC (10:04 CST) - malicious binaries were not served before this point  
**\<sgp\_\>** A Github issue was created at 16:21 UTC  
**\<sgp\_\>** A community member privately informed site admins at 16:30 UTC  
**\<sgp\_\>** fluffypony switched to the failover at 16:40 UTC  
**\<sgp\_\>** The maximum compromised time was between 16:04 UTC and 16:40 UTC Monday November 18  
**\<sgp\_\>** Since they were served for only 35 minutes, it’s highly likely that fewer than 10 malicious downloads were served. Among these, some were presumably updating their nodes, not running wallets.  
**\<sgp\_\>** and that brings us to the end of the wall of text  
**\<sgp\_\>** Does anyone have questions or comments on what happened? I won’t be able to answer some of them unfortunately but I’ll do my best.  
**\<M5M400\>** one question comes to mind: HOW?  
**\<needmonero90\>** The security researchers are dealing with the box atm  
**\<needmonero90\>** We'll probably only know after their analysis  
**\<sgp\_\>** M5M400: that's an important question that I don't really have the answer to  
**\<sgp\_\>** But I am certain that a dedicated team is digging through the boxes  
**\<DarkDotFail\>** Hi Justin - What does "DR" stand for?  
**\<M5M400\>** disaster recovery  
**\<needmonero90\>** Disaster Recovery  
**\<DarkDotFail\>** "it’s highly likely that fewer than 10 malicious downloads were served" - I assume this is based on logs? How confident are you in this count?  
**\<sgp\_\>** I find it remarkable that two independent community members reported on the issue within 30 minutes  
**\<M5M400\>** when did fluffy upload the original files? ie, how long did it take them from upload to replacment?  
**\<Supportoi\>** Sio  
**\<sgp\_\>** DarkDotFail: unless there was a significant anomaly (3+ sd downloads over that period), then I am very confident. So I'd say \>95% confident  
**\<Supportoi\>** Any news?  
**\<HungryForAvo420\>** Are there any plans to periodically check sha256 hashes?  
**\<sgp\_\>** There are almost never more than 10 downloads/hr. And it was compromised for 35 minutes  
**\<DarkDotFail\>** Who has server access, and what is the process for giving someone server access?  
**\<Supportoi\>** I read about hacking this is Russian hackers  
**\<sgp\_\>** Supportoi: there is no evidence I know of that suggests this  
**\<anhdres\>** is it my non-techie impression or we got very lucky here? I mean we only realized it because someone that downloaded the CLI checked the hashes AND they didn't change the hashes accordingly  
**\<Supportoi\>** I downloaded this fkng cli  
**\<needmonero90\>** Changing the hashes would have required compromising a second box  
**\<Supportoi\>** I'm not infected?  
**\<Supportoi\>** My money not stolen  
**\<sgp\_\>** Supportoi: when did you download the cli exactly?  
**\<Supportoi\>** But I worry about my PC  
**\<anhdres\>** needmonero90, ok  
**\<Supportoi\>** 18th  
**\<sgp\_\>** DarkDotFail: I do not have a full list  
**\<sgp\_\>** Supportoi: what time and what time zone?  
**\<DarkDotFail\>** and regarding the process of granting access, how is it determined who should have access?  
**\<needmonero90\>** As few people as is realistically possible  
**\<Supportoi\>** SHA is eq to SHA of infected files  
**\<almutasim\>** It's really good that changing the hashes requires hacking a second box.  
**\<rehrar\>** DarkDotFail Tari or Globee hosts the getmonero infrastructure  
**\<xmrscott[m]\>** Supportoi: Verify your hashes, that will conclusively tell you if it's the nalicious binary  
**\<rehrar\>** the details would have to be asked of them  
**\<anhdres\>** is there a way to have a bot somewhere else doing just what the human user did by chance? I mean downlaoding the files regularly and checking the hashes to see they match, and if they don't issue an alarm?  
**\<DarkDotFail\>** anhdres: I am working on precisely that :)  
**\<sgp\_\>** anhdres: while technically possible, this service would probably be blocked as a DoS attack  
**\<needmonero90\>** That would be a tiny DOS on the server, and if done with a consistent IP, it's possible to serve uninfected binaries to the pollers  
**\<Supportoi\>** Fkng Russian hackers  
**\<anhdres\>** mmmm...  
**\<sgp\_\>** there are a stupid number of people who constantly are trying to download the 55GB blockchain.raw  
**\<M5M400\>** when did fluffy upload the original files? ie, how long did it take them from original upload to replacment with compromised bins?  
**\<needmonero90\>** Supportoi: please keep on topic, speculation on who did this is unwarranted at the moment.  
**\<needmonero90\>** We will know more after the post mortem  
**\<Supportoi\>** I reading news and founded article about some hacking russian forum  
**\<DarkDotFail\>** sgp\_: Is there any indication yet that the server was compromised, and how?  
**\<sgp\_\>** M5M400: are you referring to the time between the 0.15 safe binary uploads and them being compromised?  
**\<M5M400\>** sgp\_: yes  
**\<Supportoi\>** Where they have article about monero hacking  
**\<binaryFate\>** M5M400 the malicious binaires were compiled from sources, they are not obtained based on the original ones. So it's indepedendant from original upload time.  
**\<Supportoi\>** Russian hackerssssssss omg  
**\<sgp\_\>** DarkDotFail: yes, I can state that the website WAS compromised, though I do not yet have details on how  
**\<anhdres\>** good thing it wasn't the GUI, because those would have been less technical users and therefore less probable they checked the hashes. We need a fool-proof official tutorial to teach how to check them.  
**\<needmonero90\>** Supportoi: last warning.  
**\<DarkDotFail\>** sgp\_: Has law enforcement been notified about this breach?  
**\<pizzaburger\>** Is there a possibility that the attackers were after something else and we just haven't noticed their ulterior motives?  
**\<PewPewPewPew\>** ^^  
**\<M5M400\>** binaryFate: trying to gauge how premeditated this attack was... ie if they had everything ready and possibly already access to the box for a while, just waiting for new bins to be uploaded and then quickly replacing them...  
**\<sgp\_\>** DarkDotFail: no, and we have not yet found a strong reason to. I will make a recommendation that the security researchers do (in addition to their own assessments) if there's a clear reason to. I do not have knowledge on the state of the investigation to make a recommendation  
**\<HungryForAvo420\>** What is the decommission schedule for source box? CDN was not impacted, but am wondering what the maintanance is like for Source.  
**\<needmonero90\>** I would like to point out that the attack felt rushed/incomplete, from reports I'm hearing. There were many things that could have been done that weren't (infecting the GUI dls for example)  
**\<sgp\_\>** pizzaburger: while we can never know for sure what their motivations were, we know the security researchers only found a relatively primitive coin stealer included in the wallet software  
**\<Supportoi\>** I'm worry about my privacy.  I'm not programmer but I know some in programming and security. My antivirus not detected danger, I runned this file.  
**\<DarkDotFail\>** How long has FIM been installed, and has it ever detected other anomalies?  
**\<Supportoi\>** And I readed about this forum. This forum contains information about CLI replace  
**\<sgp\_\>** DarkDotFail: I do not know for how long, but FIM was disabled by the attacker  
**\<Supportoi\>** Somebody know some about this?  
**\<DarkDotFail\>** Has FIM ever detected other anomalies?  
**\<needmonero90\>** Supportoi: this has nothing to do with the issue at hand. Please stay in topic for the meeting.  
**\<PlasmaPower\>** I know you don't know how it was compromised yet, but what were the potential avenues of attack for the box other than an insider threat? The web server, maybe SSH, maybe a cloud provider?  
**\<M5M400\>** needmonero90: that's my gut feeling aswell. that's why I was asking how long it took them to replace the bins after initial upload... but I don't seem to get an answer :)  
**\<sgp\_\>** DarkDotFail: I do not know about the test environment in which it was tested, but I know there were no other anomalies on the live version of the site  
**\<DarkDotFail\>** Thank you. that's very good.  
**\<Supportoi\>** I payed 50$ in xmr to body from comments and they gived me screenshot  
\* Supportoi was kicked by needmonero90 (Supportoi)  
**\<sgp\_\>** M5M400: I don't know when the original 0.15 binaries were uploaded, but that's something we can check on I suppose  
**\<sgp\_\>** Any other questions? Sorry to not have juicy details yet on how this happened  
**\<binaryFate\>** this reddit post suggest the 9th: https://www.reddit.com/r/Monero/comments/dtt2j3/cli\_v01500\_carbon\_chamaeleon\_released/  
**\<DarkDotFail\>** I want to quickly commend Justin and team for the quick response. My complaint is that the public website took over 14 hours to update after the breach, and I suggest we get a quicker "post an alert to the website" process in place. Going AFK for now, but be safe everyone.  
**\<M5M400\>** binaryFate: that would speak for the less premeditated "uh, new release. let's try to hack that box and replace with our coinstealer" theory  
**\<rehrar\>** honestly, the timing of this seems too good for it to not be premeditated  
**\<xmrscott[m]\>** binaryFate: Also semi-verified going off of WebArchive for getmonero  
**\<needmonero90\>** Processes are being put in place to expedite updates of the public site in the event of a security event. 14 hours was excessive, but we can do better.  
**\<ZaiRoX\>** Strange of them not waiting for the GUI release though  
**\<M5M400\>** rehrar: why wait 5 days then?  
**\<rehrar\>** honestly, who updates CLI early? Exchanges. Services.  
**\<rehrar\>** I think they were hoping for big fish.  
**\<binaryFate\>** Agree website update has the largest room for improvement.  
**\<M5M400\>** rehrar: agreed.  
**\<anhdres\>** would a stupid but useful security measure to suggest to newbie users for them to wait a few hours before running a downloaded binary and see if there's any warning on an official channel?  
**\<needmonero90\>** Hash checking should be sufficient  
**\<needmonero90\>** And signature ofc  
**\<sarang\>** With signature verification you know the file is what it is expected to be  
**\<rehrar\>** M5M400 you asked why wait 5 days after the new CLI was released?  
**\<needmonero90\>** I think prioritizing teaching people how to verify signatures is infinitely better than having them wait for a few hours and hope someone notices  
**\<rehrar\>** because if you release ASAP, everyone is downloading and testing. They will catch it right away.  
**\<needmonero90\>** That's just me tho  
**\<sgp\_\>** they also compromised the website at a relatively convenient time  
**\<M5M400\>** rehrar: makes sense  
**\<sgp\_\>** time of day  
**\<PlasmaPower\>** frankly, even Monero's "beginner" guide to signature verification on Windows is way too long  
**\<anhdres\>** ok, and based on that "hacking" the hash to match the compromised binary would be too difficult to pull of, right?  
**\<M5M400\>** rehrar: good thing the "big fish" are usually the laziest in updating, I guess...  
**\<rehrar\>** PlasmaPower I just spoke about this with another individual that does website stuff.  
**\<sgp\_\>** anhdres: it's more realistic to check the hashes haven't changed  
**\<rehrar\>** We need to separate verification user guides into three. Linux, Mac, and Windows.  
**\<rehrar\>** They won't be so long or scary then.  
**\<sgp\_\>** rehrar: good, that's a specific action item  
**\<rehrar\>** I was literally helping a person on Telegram and told him to verify hashes and he got scared by how big the page was and how much CLI commands there were  
**\<anhdres\>** sgp\_, needmonero90 : got it thanks  
**\<pizzaburger\>** Thank you for the information and hard work. Best of luck to the Monero team, bye!  
**\<PlasmaPower\>** rehrar: the Windows specific guide is still long, though not scary except the small part that requires command prompt  
**\<xmrscott[m]\>** FWIW with respect to timing, domain was bought 11/14. Arguments could be made that a purchase so close to delivering the attack means it wasn't pre-meditated, but best to wait for the official report  
**\<M5M400\>** xmrscott[m]: ah, I forgot about that domain info. makes perfectly sense  
**\<justalurk3r\>** sgp\_: I, too, have downloaded the compromised binaries. If my browser history is right, then it must have happened at 12:24 CET  
**\<anhdres\>** would it be too cumbersome to develop a little monero-branded, hash-checking program for windows that required no installation so a very noob could use it practically guide-less?  
**\<M5M400\>** sgp\_: any info which hosting company the infected box belongs to?  
**\<sgp\_\>** M5M400: I don't know that  
**\<PlasmaPower\>** anhdres: I thought about that too, but then what if that binary gets compromised :P  
**\<needmonero90\>** Andrhes: and if they compromise that?  
**\<needmonero90\>** Jinx  
**\<anhdres\>** well, it needs to be in a third box  
**\<sgp\_\>** the malicious software would just say "I'm totally safe"  
**\<needmonero90\>** 🤔  
**\<cbster\>** Yeah, were it too simple I think they'd just change that program too  
**\<anhdres\>** if screwing with the hash is "safe" we could do the same with the app  
**\<sarang\>** The only guarantee is a full hash and signature check  
**\<needmonero90\>** ^  
**\<sarang\>** Only doing hash checks is potentially vulnerable  
**\<cbster\>** Agreed, a lot of people leave off the signature check  
**\<sarang\>** It's annoying but important  
**\<tevador\>** one positive aspect of this incident is that people are more likely to verify the hashes from now on  
**\<M5M400\>** sgp\_: is there any intersection in the groups of people who research the breach and the group who had access to the box?  
**\<rehrar\>** honestly, the entire cryptography space is long overdue for a good UX GUI for hash checking and verification  
**\<rehrar\>** one that could be used for all of the programs ever  
**\<needmonero90\>** Pgp is pretty good  
**\<anhdres\>** rehrar: yes, please  
**\<needmonero90\>** ...not  
**\<sarang\>** However if you're confident that externally hosted trusted hash lists have not been modified, then a hash check is ok  
**\<PlasmaPower\>** Are GitHub release assets generally deemed safer than the website downloads? I don't think they're GPG signed (though the tags themselves can be).  
**\<sgp\_\>** PlasmaPower: it's simpler to hack a Github account probably  
**\<HungryForAvo420\>** Any consideration in using GitLab? have seen MS owned github drop some repos in some countries  
**\<pca\>** Just arrived.  How was the box compromised, or does anybody know that information yet?  
**\<tevador\>** are we signing git tags?  
**\<sgp\_\>** HungryForAvo420: Monero already partially uses Gitlab, but this is mostly irrelevant for the conversation at hand  
**\<M5M400\>** pca: not yet  
**\<sgp\_\>** For the sake of time, I'm going to warp up this section soon. Most of these questions have been answered in Reddit  
**\<rehrar\>** kthanksbai  
**\<PlasmaPower\>** tevador: I just checked, yes at least the latest tag was signed and most commits seem to be signed too.  
**\<needmonero90\>** Thanks for hosting sgp\_  
**\<sgp\_\>** just this section lol  
**\<sgp\_\>** still have a few more  
**\<needmonero90\>** Oh rip  
**\<sgp\_\>** that was just the update and clarification portion  
**\<xmrscott[m]\>** I was going to, still plenty left to discuss nm90 ;)  
**\<sgp\_\>** now time to do actual work  
— needmonero90 nods sheepishly  
**\<sgp\_\>** 3. Introduction of emergency procedure  
**\<M5M400\>** ah, the big red button  
**\<sgp\_\>** I would like to introduce a project to draft more formalized emergency procedures. This procedure will help the community understand what to do if another emergency occurs.  
**\<anhdres2\>** haha everybody was "ok good one see ya" and Justin still had the cake untouched  
**\<sgp\_\>** https://github.com/monero-project/meta/issues/412  
**\<sgp\_\>** We can pull from existing resources, including the Monero Vulnerability Response Process and the Monero Malware Response Workgroup.  
**\<sgp\_\>** I know that the Monero community has significant concerns about centralization, and these are justified and should be considered carefully. Nevertheless, there are many was that this process can help organize a proper response without having many centralization advantages. And to be clear, it’s not like we can force people to follow a set procedure anyway. All participants’ involvement is entirely voluntary  
**\<sgp\_\>** and subject to their own best judgments.  
**\<sgp\_\>** I'm currently breaking the procedure into main topic areas: a) safe verification of the emergency, b) classification of the severity, c) communication, d) incident response, e) regular tests/audits, and f) responsible roles, including alternates in case of inactivity.  
**\<sgp\_\>** Let’s open discussion on the 6 points that I have above, one at a time. We can talk about what processes (even if informal) we already have, and what you think is a good idea to help with these. If you feel there are any missed topics (likely), please reserve them for later.  
**\<sgp\_\>** a. safe verification of the emergency  
**\<sgp\_\>** in this case, we didn't have signed messages saying "this was compromised." We simply relied on several trusted accounts. What are our thoughts on this?  
**\<sgp\_\>** also related: if people want to contact someone about an emergency, is there a clear disclosure process?  
**\<needmonero90\>** The people who would verify signatures of warnings would verify signatures of their binaries  
**\<PlasmaPower\>** you mean from the perspective of the user verifying the emergency, not the Monero team verifying the emergency?  
**\<needmonero90\>** Trust-y auth is fine here.  
**\<M5M400\>** I'm less worried about "fake news" as about response time, so I guess reputable community members breaking the news is fine  
**\<anhdres2\>** agree  
**\<cbster\>** I agree, even were there a false alarm I can't foresee harm from it  
**\<sgp\_\>** needmonero90: is there a certain threshold where you would personally say "hold on a minute, I need some extra verification"?  
**\<sgp\_\>** false alerts are unprofessional and also harm the project potentially  
**\<ArticMine\>** Provided one relies on decentralization for alarm security  
**\<needmonero90\>** If the person was in my web of trust, no. If they were not, I would manually verify sigs  
**\<xmrscott[m]\>** Wouldn't hurt to have public keys of core members on getmonero  
**\<needmonero90\>** Personal webs of trust are fine here, theyre probably just as effective (and faster) than signatures  
**\<sgp\_\>** they're definitely faster  
**\<needmonero90\>** And that's what should be prioritized imo  
**\<cff97476\>** hello to everyone  
**\<needmonero90\>** If there's questions, the warning can say it's a question mark  
**\<sgp\_\>** I received binaryFate's RC PM and was sending out notifications 2 minutes later  
**\<cff97476\>** any news?  
**\<needmonero90\>** I had a post stickied on the sub a minute after I got your ping  
**\<sgp\_\>** cff97476: scroll up and find section 2  
**\<sgp\_\>** ok, so we are all ok with relatively basic identity checks here  
**\<M5M400\>** +1  
**\<sgp\_\>** no need to require something that would delay the process  
**\<cbster\>** +  
**\<sgp\_\>** ok, so the second question  
**\<needmonero90\>** False positives are better than delayed warnings  
**\<ArticMine\>** yes there is enough redundancy  
**\<sgp\_\>** do we have a clear disclosure process? who should people contact?  
**\<sgp\_\>** how does the discoverer know how to initiate the process of raising the alarm?  
**\<binaryFate\>** I don't think we can assume much from people finding out something is wrong. It's not like programmers finding bugs who are technical and educated about response.  
**\<sgp\_\>** surely long-time Monero members would probably contact people by DM and have personal relationships  
**\<cbster\>** My first thought would be to turn to Reddit, but not everyone knows the site  
**\<sgp\_\>** but the first person to raise the alarm in this case did so through a Github issue  
**\<anhdres2\>** I would have used Reddit but I'm not technical  
**\<needmonero90\>** I suspect regardless of where it was posted (irc, github, gitlab, reddit), it would have percolate quickly  
**\<needmonero90\>** We have lots of lurkers  
**\<needmonero90\>** Percolated\*  
**\<cbster\>** There could be a section added to the site clarifying what to do in an emergency  
**\<binaryFate\>** I think everyone's first thought will be different, and they are not going to dig for information to know how to disclose. Most people would think they are doing something wrong rather than recognize there is an actual issue  
**\<cbster\>** Perhaps detailing the subreddit, the GitHub and a few handles of core members  
**\<sgp\_\>** something in the github readme may be appropriate imo  
**\<cbster\>** Although that could also lead to false alarms, not everyone understands emergencies  
**\<sgp\_\>** I'm sure many users will report false alarms  
**\<PlasmaPower\>** I think that might send too much "spam" (users who think they have an emergency but don't) their way  
**\<PlasmaPower\>** yeah  
**\<ArticMine\>** across multiple platforms for redundancy  
**\<almutasim\>** False alarms have a price, too.  
**\<M5M400\>** binaryFate: agreed.  
**\<binaryFate\>** I find it more important to have an "internal" response process so that however this is disclosed, it then quickly gets put on the right rails by community members  
**\<M5M400\>** +1  
**\<ArticMine\>** +1  
**\<OWLHACKATHON\>** hello world  
**\<PewPewPewPew\>** is it safe to assume if someone found a problem like this again they would be technical enough to know about git and irc  
**\<sgp\_\>** should we just point people who are new to #monero or something?  
**\<M5M400\>** PewPewPewPew: no  
**\<needmonero90\>** Don't we already?  
**\<cbster\>** I think it's wise to assume  
**\<cbster\>** Unwise\*  
**\<needmonero90\>** Getting people to use IRC is like pulling teeth  
**\<sgp\_\>** needmonero90: just something that clearly says to go to #monero in the case of an emergency  
**\<needmonero90\>** Ah I see  
**\<needmonero90\>** That could work  
**\<sgp\_\>** eg: what if it's an exchange or mining pool who never talks to anyone  
\* ChanServ set +o needmonero90  
**\<needmonero90\>** Oops  
**\<OWLHACKATHON\>** go to #churchofmonero ;)  
\* needmonero90 set -v OWLHACKATHON  
**\<binaryFate\>** Harmless but still a lot of people never used IRC whatsoever  
**\<cbster\>** It's always an option, we could offer multiple channels of reporting  
**\<cbster\>** I think IRC is a good start  
**\<needmonero90\>** binaryFate: linking to kiwiirc would work  
**\<sgp\_\>** agreed, this is just something I think people should think about since not all the people who will notice major anomalies are always active  
**\<needmonero90\>** Webirc portal  
**\<needmonero90\>** No downloads, no logins  
**\<\_XeN\_\>** love IRC =)  
**\<binaryFate\>** It's fine to give them suggestions, but we should not assume they will follow nicely  
**\<sgp\_\>** binaryFate: of course not, we just want to make it easier for people to know what they're supposed to do  
**\<sgp\_\>** Anything else on a)?  
**\<PlasmaPower\>** There's a good amount of posts on r/Monero about people who lost funds because of something that was their fault like a fake web wallet, so I don't think telling people to DM the Monero team for emergencies is a good idea. A public location like IRC is probably the best idea.  
**\<cbster\>** Good point  
**\<sgp\_\>** b. classification of the severity  
**\<sgp\_\>** should we use low - medium - high, and how? who determines?  
**\<fluffyunicorn\>** ALL YOUR BASE ARE BELONG TO OWL  
**\<fluffyunicorn\>** \>)\>  
**\<fluffyunicorn\>** WEEEEEEE  
**\<needmonero90\>** Er  
**\<needmonero90\>** Can you not? This is a meeting  
**\<fluffyunicorn\>** IM HERE TO HACK STUFF  
**\<xmrscott[m]\>** (Sorry didn't look up in advance, re: A it may be good to look at Tails/Qubes escaltion process)  
\* needmonero90 set channel modes +b fluffyunicorn!\*@\*  
\* fluffyunicorn was kicked by needmonero90 (fluffyunicorn)  
**\<needmonero90\>** I'll remove after the meeting.  
**\<sgp\_\>** xmrscott[m]: yes, it's important to look at what other people are doing too  
**\<sgp\_\>** these classifications are common in projects and in the industry  
**\<cbster\>** I think low, high and critical give more emphasis  
**\<sgp\_\>** we use it for HackerOne  
**\<sgp\_\>** is there anyone who thinks this classification is unnecessary?  
**\<binaryFate\>** what is the purpose? Public disclosure later? Internal while we work on issue?  
**\<sgp\_\>** binaryFate: depends on how it's used. could be either or both  
**\<sgp\_\>** how do you envision it being used?  
**\<anhdres2\>** do the classifications change how / which channels are used ? or are they only informative?  
**\<cbster\>** I think they'd stay standard across platforms  
**\<binaryFate\>** I don't find it very useful for either, simply because these incidents are so rare  
\* needmonero90 set channel modes +b \*!18cdb83a@gateway/web/cgi-irc/kiwiirc.com/ip.24.205.184.58  
**\<sgp\_\>** anhdres2: they could  
**\<anhdres2\>** for example only critical are pushed to all channels and low ones only stick in reddit  
**\<cbster\>** Mind you, as Monero grows, they may not stay so rare  
\* satoshijnakamoto was kicked by needmonero90 (satoshijnakamoto)  
**\<sgp\_\>** indeed, these should happen rarely / never  
**\<xmrscott[m]\>** If they are used for escalation though the user may not know what the proper flag is, etc  
**\<PlasmaPower\>** Does anyone have an example of a low severity emergency? I'm thinking that things that send out a notification, like delta direct, shouldn't be used for those.  
**\<anhdres2\>** exactly  
**\<PlasmaPower\>** but I'm not quite sure what a low severity emergency would be, assuming that we aren't including 3rd party services  
**\<anhdres2\>** yellow warnings are usability or network related  
**\<anhdres2\>** red warnings are those when funds might be in danger and therefore are  not reversible  
**\<anhdres2\>** for example  
**\<sgp\_\>** maybe something low would be like after RingCT was first added, where blocks were super full  
**\<sgp\_\>** no attack necessarily, but degraded network experience  
**\<anhdres2\>** something like that yes  
**\<binaryFate\>** wasn't really about an emergency response  
**\<sgp\_\>** unless there are other topics on this, we can move on from b)  
**\<ArticMine\>** It was a good cover for an emergency response  
**\<sgp\_\>** c. communication (internal and public)  
**\<sgp\_\>** this is communication standards and processes  
**\<sgp\_\>** eg: do we all need to be available on a specific platform (mattermost users can't DM IRC users)  
**\<sgp\_\>** also, using services like Twitter, Reddit, Blockfolio  
**\<needmonero90\>** I'm generally available. My ringer is generally on even when I'm asleep, so I can resoond when stuff happens  
— needmonero90 should consider getting paid for this availability  
**\<sgp\_\>** we took too long this time to get the website notification up and the monero-announce mailing list email out  
**\<M5M400\>** yes, the website should be a priority  
**\<asymptotically\>** !tip needmonero90 0.001  
**\<tippero\>** asymptotically has tipped needmonero90 1 millinero (0.001 Monero)  
**\<binaryFate\>** internal communication between community members to deal with issue was very efficient I found  
**\<sgp\_\>** are there other platforms we forgot about this time? ones we felt were mostly a hassle and not very beneficial?  
**\<xmrscott[m]\>** Where was the roadblock though in getting the site annoucement up  
**\<M5M400\>** it's traditionally generally slacking, but in this case updates need to be of high priority  
**\<needmonero90\>** Your generosity will not be forgotten  
**\<xmrscott[m]\>** Was it in getting approval after erc drafted it?  
**\<xmrscott[m]\>** etc  
**\<binaryFate\>** we'd need a website specific timeline of events  
**\<xmrscott[m]\>** Exactly  
**\<sgp\_\>** can we build in notification systems with Cake Wallet, Monerujo, etc?  
**\<xmrscott[m]\>** (Which may be best done after the meeting)  
**\<needmonero90\>** I think we just blanked on updating the site  
**\<needmonero90\>** It was an oversight  
**\<needmonero90\>** Once we were clued in it was updated fairly quickly  
**\<sgp\_\>** indeed, which is why the process is important. it gives us a checklist to help us remember  
**\<asymptotically\>** sgp\_: bitcoin-qt used to have a built in notification system, but it kind of sucked and got removed  
**\<M5M400\>** sgp\_: like a emergency broadcast system that pushes out to multiple outlets with minimal effort?  
**\<anhdres2\>** sgp\_ I don't see how unless it adds a centralized element.  
**\<cbster\>** I think built-in notification systems would be smart, but their use would be limited as those affected are probably not using them (they downloaded the core wallet)  
**\<xmrscott[m]\>** Built in notifications introduce a point of attack  
**\<M5M400\>** yeah. super amplified FUD  
**\<cbster\>** If the binaries are comprised for that, I'd be unsure of its reliability to relay notifications  
**\<PlasmaPower\>** Bitcoin's now retired system: https://en.bitcoin.it/wiki/Alert\_system  
**\<sgp\_\>** PlasmaPower: thanks for the reference  
**\<xmrscott[m]\>** Hey, wallet is compromised, download at this new (malicious) website  
**\<PlasmaPower\>** cbster: yeah, though for e.g. an active linking attack it could be helpful  
**\<cbster\>** I think you're right, could prove more troublesome than what it solves  
**\<sgp\_\>** ok, no additional platforms coming up. keep thinking about better ways to reach people  
**\<sgp\_\>** \*coming to mind  
**\<sgp\_\>** d. incident response  
**\<M5M400\>** I'd like to throw the mailinglist in the ring. who's got access to post there besides the big fluff?  
**\<sgp\_\>** M5M400: good q\> I don't know  
**\<binaryFate\>** everyone can post, but emails are approved on a case basis (pigeon and maybe fluffy too)  
**\<M5M400\>** maybe take a note for later. I think it is a good medium, but worthless when notifications get sent out a day or two late  
**\<binaryFate\>** in this case there was a misunderstanding between fluffy and myself. He thought I would send email, I thought he would  
**\<binaryFate\>** (I did not have access to my PGP key in time)  
**\<M5M400\>** fair enough  
**\<sgp\_\>** an example of the communication process helping in that case could be specifically assigning tasks to people  
**\<PlasmaPower\>** is there any generally applicable "incident response" besides communication?  
**\<sgp\_\>** PlasmaPower: nice segway, thanks  
**\<sgp\_\>** an example of an incident response process, though extreme, could be something like getting the opinion and help of an independent firm  
**\<M5M400\>** sgp\_: that's not extreme. it's common practice to have security incidents assessed by independent parties to minimize the risk of compromized entities being part of the investigation  
**\<sgp\_\>** right, so how do we do that without writing a $10m check to Deloitte?  
**\<M5M400\>** hence my question earlier if the people disecting the box also had access at the time of breach  
**\<asymptotically\>** write me a $9m check instead  
**\<needmonero90\>** I'll do it for $8m  
**\<M5M400\>** sgp\_: that's the $8m question  
**\<PlasmaPower\>** I definitely agree that's a good step when a server is compromised. Would it also be applicable to e.g. an RCE in the protocol? I'm not sure how useful an investigation would be there, besides a `git blame`.  
**\<needmonero90\>** And by do it I mean delegate  
**\<binaryFate\>** I don't see that as possible or useful in an emergency situation. Maybe for investigations later. No firm will be hired (with what funds?), get to the case and help us in a couple hours  
**\<PlasmaPower\>** true  
**\<sgp\_\>** binaryFate: right, which is why I'm looking for realistic procedures  
**\<binaryFate\>** Since we are not a company and we do not have people around the clock 24/7, I think we should realistically focus on procedures indeed. Not even assigned them strictly so we do not have bottleneck if someone is afk  
**\<M5M400\>** sgp\_: community internal segregation of duties would be a start  
**\<sgp\_\>** M5M400: can you elaborate a bit more?  
**\<M5M400\>** seperate publishing teams and forensic teams  
**\<binaryFate\>** Maping the current capabilities (mostly website update) would be good too. What processes are required for each steps and who has the permissions currently to do them?  
**\<sgp\_\>** binaryFate: good one  
**\<sgp\_\>** basic access control stuff  
**\<PlasmaPower\>** though probably keep that documentation internal  
**\<M5M400\>** not sure how it's organized right now, so can't elaborate in detail. but from previous conversations it seems that it's not even totally clear who even had access to the comped box. (probably multiple people)  
**\<PlasmaPower\>** you don't want to provide attackers with a guide of who to attack  
**\<M5M400\>** PlasmaPower: internal is a pretty fuzzy thing... where do you draw the line in the circle of trust an opensource project?  
**\<M5M400\>** anyone in here could be a potential attacker  
**\<sgp\_\>** M5M400: I agree in this case it's pretty industry-standard to have some discussions like this kept in the dl  
**\<PlasmaPower\>** M5M400: it's going to be somewhat arbitrary of course, and IDK how the Monero team is currently organized, but whoever has access to the GitHub is a good place to start.  
**\<sgp\_\>** any other incident response comments? we will need to revisit this much more later  
**\<sgp\_\>** e. regular tests/audits  
**\<sgp\_\>** ideally, we will assess the existing processes and suggest improvements. then we can test them to see how effective these processes are  
**\<sgp\_\>** that's why schools have fire drills  
**\<binaryFate\>** I want to highlight that people that trust each other getting on an IRC channel to discuss the situation at hand remains by far the most efficient decision process. I find it more important to remove potential bottlenecks in terms of who can do what, than to try to guide too much said decision process.  
**\<binaryFate\>** Have to go now, thanks everyone, thanks sgp\_ for meeting  
**\<sgp\_\>** binaryFate: thanks for coming  
**\<M5M400\>** +1 on the removing bottlenecks thing  
**\<M5M400\>** cu  
**\<sgp\_\>** ideally this would be its own workgroup, but I also don't know how realistic this is  
**\<sgp\_\>** ok, people are pretty quiet on this one. we can keep going  
**\<sgp\_\>** f. responsible roles, including alternates  
**\<sgp\_\>** it's an open-source project without people getting paid for things, so people will be asleep, on vacation, etc  
**\<M5M400\>** regarding fire drills... we could regularly publish emergency broadcast test posts on the outlets and have people go to a website, click on a button or something to assess message reception depth  
**\<sgp\_\>** it's important imo to have a list of primary and secondary contacts  
**\<M5M400\>** sorry, I'm slow. it's late.  
**\<needmonero90\>** One solution is to create a hired role for this.  
— needmonero90 puts his name into the hat  
**\<sgp\_\>** needmonero90: I'll give you $1  
**\<needmonero90\>** 🤔  
**\<needmonero90\>** I can do a writeup of role requirements later  
**\<sgp\_\>** that would be very beneficial  
**\<sgp\_\>** eg: Justin is the primary for Blockfolio, secondary for Twitter, etc  
**\<sgp\_\>** any other ideas? we're getting close to finishing this long meeting  
**\<M5M400\>** would those roles be published somewhere?  
**\<sgp\_\>** M5M400: I recommend they're only given to trusted people  
**\<sgp\_\>** give people only what they need to see  
**\<sgp\_\>** g. missed topics and frameworks  
**\<sgp\_\>** If you have any topics you feel were not covered or some other better framework to consider going forward, please mention these now for discussion.  
**\<M5M400\>** \<void\>  
**\<ArticMine\>** I would raise the question of post incident hardening  
**\<M5M400\>** good one  
**\<asymptotically\>** is there a post mortem of how the bad wallet binary actually ended up on the site? or is that not known yet  
**\<M5M400\>** but probably needs the forensics to complete first  
**\<asymptotically\>** ok nvm that answered my question :p  
**\<M5M400\>** though it begs the question what makes the DR host more secure than the comped box at this point in time  
**\<needmonero90\>** Nothing left on my end  
**\<ArticMine\>** Yes that is the case, but for example hardening the the binary verification process  
**\<ArticMine\>** Such as rehrar suggested but going further  
**\<ArticMine\>** binary verification for android  
**\<ArticMine\>** Free BSD etc  
**\<M5M400\>** still awake - but I can't contribute to this  
**\<sgp\_\>** ArticMine: I don't have anything to add here, but I'll note the process  
**\<sgp\_\>** Any final thoughts?  
**\<sgp\_\>** 4. Action items  
**\<sgp\_\>** I will compile the recommendations in 3 into a document and share the initial draft version  
**\<sgp\_\>** Once shared, please comment on the draft  
**\<sgp\_\>** Please think about specific roles you would feel comfortable filling, even in a backup role  
**\<sgp\_\>** rehrar named an action item 1000 years ago when the meeting started but I forget what it was  
**\<sgp\_\>** then there's the action item of identifying who has access to what parts of the server (or making sure the core team has that info already)  
**\<sgp\_\>** Anything else?  
**\<ArticMine\>** It was about improving the guides for binary verification  
**\<ArticMine\>** Making them easier to understand for users  
**\<rehrar\>** Goodness! This is still going?  
**\<sgp\_\>** ok, add that :)  
**\<sgp\_\>** very nearly done rehrar, we were very productive  
**\<xmrscott[m]\>** Write up website notification timeline to figure out what the major contributors were ro thevdelay  
**\<asymptotically\>** maybe openbsd signify would be easier than a pgp signed shasums file?  
**\<sgp\_\>** xmrscott[m]: good, have a timeline so we can see what took the longest  
**\<sgp\_\>** last chance to say something  
**\<sgp\_\>** 5. Conclusion  
**\<sgp\_\>** Thank you for participating in this extremely important discussion for Monero  
**\<almutasim\>** Thank you.  
**\<M5M400\>** thx  
**\<sgp\_\>** I was extremely pleased at the dedication for this emergency response, and with some organization, I think we can set a gold standard for other projects to follow  
**\<sgp\_\>** See you all later :)  
**\<needmonero90\>** Great :)  
\* needmonero90 set channel modes -b \*!18cdb83a@gateway/web/cgi-irc/kiwiirc.com/ip.24.205.184.58  
\* needmonero90 set channel modes -b \*!18cdb83a@gateway/web/cgi-irc/kiwiirc.com/ip.24.205.184.58  
\* needmonero90 set channel modes -b fluffyunicorn!\*@\*
