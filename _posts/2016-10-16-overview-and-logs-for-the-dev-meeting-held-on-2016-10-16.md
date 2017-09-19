---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2016-10-16
summary: Review and discussion of Open PRs, contribution guidelines, and official GUI
tags: [dev diaries, core, crypto, 0mq]
author: dEBRUYNE / fluffypony
---

### Overview  
  
An overview [can be found on Hello Monero](https://hellomonero.com/article/monero-dev-meeting-note-highlights-2016-10-16).  

### Logs  

**\<moneromooo>** So, fluffypony asked if I could talk. I have no relay bot, so #kovri-dev will have to be here to listen.  
**\<moneromooo>** He suggested I talk about guidelines for submitting patches. So we'll see if everyone mostly agrees.  
**\<+hyc>** cool  
**\<moneromooo>** I would like to encourage people to make clean changes, which mean:  
**\<moneromooo>** - try to keep patches self contained where appropriate  
**\<moneromooo>** - no random whitespace changes interspersed with other changes  
**\<moneromooo>** - sensible commit message (ie, no "update wallet.cpp")  
**\<moneromooo>** - properly rebased patches (ie, if you authored three patches in a PR, don't send 20 patches from someone else at the same time, so "git rebase master" first)  
**\<+hyc>** that all makes sense  
**\<moneromooo>** If you make a buggy patch and then fix it in a second patch, squash those (see git rebase -i, but that starts being a bit complex)  
**\<moneromooo>** Does anyone disagree ?  
**\<_Slack> \<nanoakron>** Nope  
**\<Jaquee_>** nope  
**\<tompole>** nope  
**\<+hyc>** no disagreement here. that's standard stuff.  
**\<_Slack> \<nanoakron>** Can I ask a little more about what you mean by ‘self contained'  
**\<moneromooo>** (We'll make an exception for tewinget who's got a massive non rebased patchset for 0mq though)  
**\<+hyc>** sure, patches of such large scope are going to have their exceptions  
**\<moneromooo>** I mean, if you've got two changes, make them two patches. I like small patches, one per "logical change".  
**\<_Slack> \<nanoakron>** Makes sense. Single-issue patches.  
**\<moneromooo>** It's easier to review, to debug, to revert it necessary.  
**\<+hyc>** but usually PRs should be one issue per patch, one patch per issue  
**\<moneromooo>** Yes. However, when in the middle of a large thing, you sometimes see something that needs fixing and would otherwise conflict. That can go (as a separate patch) in that PR, depends on the circumstances.  
**\<moneromooo>** especially for those PRs that can take weeks to be merged.  
**\<+hyc>** sure  
**\<_Slack> \<nanoakron>** OK  
**\<moneromooo>** But yes, 1/1 in general.  
**\<moneromooo>** So, nobody seems to disagree, I'll write a little thingie about this for the repo. Thanks.  
**\<moneromooo>** So, I guess... anyone has anything to say about progress, or other dev related stuff ? :)  
**\<Fireice>** I've got a question to the devs - do you think Monero is mature enough for applications improving usability?  I'm an independent software dev, and I'm thinking of committing about 6 months of full-time work on Monero. First application that I'm thinking of is a lightweight Windows GUI wallet for Monero.  
**\<moneromooo>** Another one, yay! :)  
**\<moneromooo>** First, read up on what lightweight may involve for monero.  
**\<_Slack> \<nanoakron>** Do we have a common wiki or other info page for devs to describe things like prefixes e.g. m_ and others  
**\<TedTheFicus>** Yes, this is needed  
**\<_Slack> \<nanoakron>** stuff  
**\<moneromooo>** And mature enough is pretty subjective. It can be used, for sure.  
**\<Fireice>** lol, bazaar project usually have a lot of traffic  
**\<moneromooo>** There is none. Some people use m_ for class data members.  
**\<hiall>** hi all  
**\<_Slack> \<nanoakron>** What would you think about standardising that aspect of development? Variable/class/etc. nomenclature?  
**\<moneromooo>** Fireice: also, ask athan (or ethan), he's got a wallte in development which you might want to have a look at.  
**\<hiall>** when is meeting starting?  
**\<dEBRUYNE>** it already started  
**\<+hyc>** nanoakron: that sounds like a lot of busywork  
**\<hiall>** where is it?  
**\<moneromooo>** Well, my opinion on that is to follow the existing, but I'm not super bothered about it. I certaonly don't subscribe to the minutiae crap. But I know many disagree :)  
**\<Fireice>** ok will do, how do i get hold of him?  
**\<_Slack> \<nanoakron>** Fireice: Take a look at how the existing GUI wallet is coming along at https://github.com/monero-project/monero-core - maybe integration into an existing service such as open bazaar would be cool  
**\<moneromooo>** Fireice: he's around on IRC pretty often.  
**\<_Slack> \<nanoakron>** hyc: I know :( But standards can be good too  
**\<moneromooo>** integration would need th plugin system first. That is yet to be design.  
**\<moneromooo>** designed.  
**\<dEBRUYNE>** Fireice: His contact details are on Github too: https://github.com/athanclark  
**\<imans>** There is no instruction for windows compilation in the github  
**\<endogenic>** I tend to agree with nanoakron in the sense that changes to the API, especially w/o corresponding documentation updates, makes integration pretty darn tough and not necessarily viable for third parties  
**\<moneromooo>** Well, that's true. It's not API stable, that's certain.  
**\<dEBRUYNE>** imans: https://monero.stackexchange.com/questions/2346/compiling-gui-from-source-differences-by-os  
**\<+hyc>** not at the binary level, and not even at the RPC level  
**\<moneromooo>** The RPC is *mostly* backward compatible though.  
**\<endogenic>** Fireice: that may be your answer then :)  
**\<imans>** ty dEBRUYNE  
**\<_Slack> \<nanoakron>** @hyc or @moneromooo on a similar note, is there a list of all available functions? E.g. call tools::simplewallet::is_it_true() to clean true/false user inputs  
**\<+hyc>** I think it's OK to establish guidelines now for future development  
**\<Fireice>** ty for your help, do you know if the qt wallet targets win and linux systems or just linux?  
**\<+hyc>** but it's too early to make hard rules  
**\<hiall>** is this the meeting?  
**\<pero>** conference, dev conference  
**\<moneromooo>** A list of all available functions, beyond the source ?  
**\<jaquee>** Fireice: the official targets linux, osx and windows  
**\<dEBRUYNE>** Fireice: The official GUI will be available for Linux, os x, and windows  
**\<moneromooo>** That sounds like it'd go stale pretty fast.  
**\<moneromooo>** But no, there is none.  
**\<endogenic>** perhaps the API documentation stuff should wait until the 0mq changes have been made?  
**\<+hyc>** at least that, yes  
**\<+hyc>** (endogenic)  
**\<_Slack> \<nanoakron>** @moneromooo yes. I don’t think you’re going to find key functions going stale that fast, so long as you require people who update or add functions to make corresponding changes to the documentation before their PR gets accepted.  
**\<moneromooo>** I think tewinget is doing doc as he codes.  
**\<imans>** IMO third party integrations must be made simple and easy to plug with any kind of party or platform  
**\<moneromooo>** I'm not sure holding PRs for documentation is best, but I'm a bit on the fence tbh.  
**\<moneromooo>** What do people think ?  
**\<+hyc>** sounds like a Would Be Nice when there is a larger developer base  
**\<+hyc>** and the dev base is certainly growing now  
**\<_Slack> \<nanoakron>** Documentation is boring bullshit but necessary to make it easier for new devs to get involved. We don’t want to get into a situation like a certain other coin where only an inner cabal actually knows the code without deep reading  
**\<TedTheFicus>** If documentation is going to make it easier to attract API + other users than I think we need it up to date always  
**\<endogenic>** moneromooo: documentation should be done by particularly able people IMHO  
**\<gingeropolous>** so, not accepting a pull request because of poor documentation?  
**\<xmrcoma>** tewinget practice of documenting while coding is a best practice  
**\<endogenic>** and it can degrade in quality if an owner or class of developer is not designated  
**\<imans>** I do agree with that. good documentation can seemlessly help new devs get involved easily  
**\<_Slack> \<nanoakron>** @gingeropoulos I mean something like ‘I’ve written this new function to calculate X but haven’t given any documentation’ and then 2 months later someone new comes along, never realised that function existed because there was no documentation, and then just trying to rewrite their own version.  
**\<moneromooo>** But how would you find it in the doc, if you don't find it in the source ?  
**\<_Slack> \<nanoakron>** What we need is a common documentation site and to pay someone to do about a week’s work to pore over the code and fully document every function  
**\<+hyc>** exactly  
**\<+hyc>** new devs must search, regardless.  
**\<moneromooo>** (not saying it's a bad idea here, mind)  
**\<gingeropolous>** nanoakron, i think thats what tewinget was up to at one point :)  
**\<+hyc>** on the other hand, I like tools like doxygen, document as you code is always a good approach  
**\<_Slack> \<nanoakron>** Would be easier to search a wiki for ‘check hard fork version’ and get a bunch of matching functions from which you can pick  
**\<moneromooo>** I do: git grep check.*hard.*fork :)  
**\<moneromooo>** But ok, fair enough.  
**\<moneromooo>** I think encouraging doc is good, ust not sure it should be enforced, at least for now.  
**\<_Slack> \<nanoakron>** But again, it’s a bit chicken and egg - good documentation begets good documentation. It’s getting over that original hurdle to actually make it happen  
**\<gingeropolous>** yeah I think its a "Would Be Nice" thing, and during a PR review, it would be noted - like "hey, you should totally comment this up"  
**\<gingeropolous>** and then if the dev doesn't comment it up, then its a judgement call over how important the feature is  
**\<_Slack> \<nanoakron>** I agree moneromooo, we can’t enforce without a good standard or common place to record the documentation  
**\<endogenic>** nanoakron: +1  
**\<+hyc>** I'm cool with mandating Doxygen comments, moving forward.  
**\<moneromooo>** I agree than modifying a function with a doxygen doc thing should also change to doc thing to match. That's a NAK offense :)  
**\<endogenic>** another thing to consider is that git commit messages are a kind of documentation. maybe we need to codify the standards in a public official place  
**\<moneromooo>** So I'll add language to encourage documenting stuff.  
**\<_Slack> \<nanoakron>** Starting off a forum funding goal for someone to pull together all the function, variable and class lists would be worthwhile  
**\<+hyc>** nanoakron: I disagree.  
**\<_Slack> \<nanoakron>** Could you also add language telling us how to do the documentation - I’ve never used doxygen  
**\<+hyc>** lots of effort to maintain a moving target.  
**\<moneromooo>** I just copy/paste an existing one and adapt.  
**\<TedTheFicus>** Yes, I'd contribute funding to that  
**\<+hyc>** but that's the sort of thing doxygen already takes care of  
**\<moneromooo>** And I agree with hyc here. An inventory now would be wasted, mostly.  
**\<+hyc>** so if we start using it now, then over time it will build itself  
**\<_Slack> \<nanoakron>** The target won’t move though. Let me choose a random example. Do you really think cryptonote_core::blockchain::pop_block_from_blockchain is going to be deprecated any time soon?  
**\<_Slack> \<nanoakron>** Someone had to write the domesday book...  
**\<imans>** But, this is going to be a big sub project if you document everything. You need lot of time and effort  
**\<moneromooo>** Unlikely. I would look suspiciously at a patch using it though :P  
**\<_Slack> \<nanoakron>** In which case the person patching could just fix up the doc at the same time :slightly_smiling_face:  
**\<+hyc>** indeed, most of the existing functions only have legitimate use internally, not by 3rd parties  
**\<imans>** If you add use cases it would be very much helpful  
**\<moneromooo>** But hey, if you want to do that, feel free. Maybe it will turn out to be a great idea in retrospect.  
**\<endogenic>** what are the problems for which we need to provide documentation at this moment? if we categorize the instances of those problems we might find that it can work quite well to have task- or case-based documentation as a distinct project from going through the source and applying doxygen comments to everything for a whole-API reference  
**\<_Slack> \<nanoakron>** Do we have anywhere common where I can read about doxygen or using doxygen wrt monero now?  
**\<moneromooo>** Well, applying doxygen comments is, by itself, pointless (even worse, as it makes it harder to read the API). Semantics in the doxygen comments are what's good, and that needs understanding of the code.  
**\<imans>** An errata list is good which will help people to trace out the errors they meet  
**\<+hyc>** what errata list? the github issues list?  
**\<imans>** Also, a stackexchange like documentation system which will enable users to post their comments and also raise issues they face.  
**\<imans>** Yes, hyc similar to that  
**\<moneromooo>** endogenic: I think nanoakron originally wanted a map from "I want to do that" to "use this". I think.  
**\<_Slack> \<nanoakron>** @moneromooo yes  
**\<_Slack> \<nanoakron>** @imans Not entirely sure how that would be different from the existing github  
**\<imans>** It will not be different. But it aids new comers and users to interact more closely  
**\<_Slack> \<nanoakron>** @imans ...  
**\<endogenic>** imans: thought we already have a SE?  
**\<imans>** I mean it for API + third party integrations  
**\<endogenic>** why not just create a new category?  
**\<+hyc>** yes, at a certain point, new devs are just going to have to learn to use the tools that already exist  
**\<imans>** yes, the same I say  
**\<+hyc>** otherwise we spin our wheels adding infrastructure instead of functionality  
**\<_Slack> \<nanoakron>** @hyc That’s absolutely fine…so long as those tools themselves are well documented :slightly_smiling_face:  
**\<gingeropolous>** well the github wiki was requested for (i think) something related to this purpose, and it hasn't received any attention  
**\<_Slack> \<nanoakron>** afk 10 mins  
**\<moneromooo>** That sounds like a good idea. Start with a "list of useful functions someone may need" in that wiki. See how it goes.  
**\<moneromooo>** And it doesn't seem like a huge waste of time.  
**\<gingeropolous>** yeah, i mean if a random dev stumbles into monero, presumably they goto the github for code, so that wiki is probably where they'll go first  
**\<+hyc>** I've never seen it... :P  
**\<moneromooo>** I've only seen it because I was given  alink to it :D  
**\<gingeropolous>** hehehe. at the minimu, I can dump the rpc documentation thats on getmonero.org into it via the power of copy and paste  
**\<+hyc>** sounds like a good start  
**\<+hyc>** most 3rd party integrations should be RPC anyway  
**\<gingeropolous>** so i missed the beginning. is this the general topic of "where's the docs?"  
**\<imans>** If development work for API is finished and you want it to take to third parties. Create illustrations about integration for every industry you want to focus or you think monero should be a partner with. Attach it to the wiki  
**\<moneromooo>** And that's going to totally change soon.  
**\<gingeropolous>** right.  
**\<moneromooo>** Anyway, any other arguments/ideas about documentation ?  
**\<gingeropolous>** well the 2 will co-exist for a while, right?  
**\<moneromooo>** Yes.  
**\<imans>** I think documentation is not the main focus for this meeting? What is aimed to discuss today?  
**\<moneromooo>** Whatever development related stuff people want to talk about.  
**\<pero>** the documentary i think  
**\<imans>** nice  
**\<moneromooo>** hyc: have you had some more thoughts about how to make a lmdb based wallet data file ?  
**\<medusa_>** i have nothing to say about documentation, but i want to encourage everybody to build and try the gui :-)  
**\<dEBRUYNE>** **\<moneromooo>** Whatever development related stuff people want to talk about. \<= jaquee and I can give a few GUI updates soon^tm  
**\<+hyc>** I've been thinking about how to integrate encryption, yes  
**\<+hyc>** but no new code written yet  
**\<pero>** soon is a little ambiguous - closer to 10min or 10weeks?  
**\<dEBRUYNE>** pero: whenever the current topic of the meeting is finished :P  
**\<moneromooo>** Well, let's have dEBRUYNE and jaquee then.  
**\<dEBRUYNE>** So right now  
**\<dEBRUYNE>** Ok so, fluffypony is in the process of building beta binaries  
**\<dEBRUYNE>** Building went fine, but there is a little issue on windows with hardware acceleration, i.e., the GUI won't run if that is disabled  
**\<dEBRUYNE>** However, we suspect that on "normal" systems it won't be an issue, because it's enabled by default there  
**\<moneromooo>** Mesa might help ?  
**\<dEBRUYNE>** luigi and Articmine are going to test this tomorrow when Fluffypony returns  
**\<moneromooo>** Cool, thanks all :)  
**\<+hyc>** sheesh, it's a wallet nota videogame. what acceleration does it want...  
**\<xmrcoma>** lets waive a magic want that will cause all windows users worldwide to swtich to linux overnight. issue solved  
**\<moneromooo>** It's using OpenGL for its widget set apparently.  
**\<dEBRUYNE>** It's fairly trivial to enable too on windows systems  
**\<moneromooo>** Got had by this when I tried it a few days back.  
**\<dEBRUYNE>** Fluffypony ran into the issue because he was building on a windows server  
**\<@ArticMine>** Basically Windows computers with really ancient graphics and certain virtual machine implementations of Windows have this hardware acceleration issue  
**\<eyejay>** a clear deal breaker. it's ded  
**\<jaquee>** exactly. so it's not a really big issue imo  
**\<+hyc>** QT is requiring this dependency?  
**\<@ArticMine>** Windows server is the other case since it uses very minimal graphics by design  
**\<jaquee>** yes some  QT widgets  requires it  
**\<@ArticMine>** Yes the dependency is from QT on Windows  
**\<moneromooo>** http://stackoverflow.com/questions/18794201/using-qt-without-opengl seems to imply Qt can be built without opengl.  
**\<+hyc>** nuts... I mean, OpenGL isn't even intended for 2D graphics. It's 3D gaming stuff.  
**\<gingeropolous>** based on my statistical analysis of the clouds I'm sure 95% of people requiring windows GUI are running windows 10 because they upgrade because it told them to  
**\<gingeropolous>** that said, the remaining 5% will be the loudest  
**\<medusa_>** i bet its that truning thing when refreshing  
**\<moneromooo>** AFAICT, 2D acceleration in new GPUs is a bit shit, and using 3D with orthonormal projection is actually faster.  
**\<imans>** isn't it designed to support all windows version?  
**\<@ArticMine>** Windows 10 is not an issue unless some very special customization's are made  
**\<iDunk>** but all windows versions are not designed to support it  
**\<imans>** Haha, iDunk clever  
**\<iDunk>** ;)  
**\<imans>** Enable switches or options to turn on/off opengl support and its related stuff in the wallet.  
**\<dEBRUYNE>** I think realistically speaking, only a negligible percentage of users will run into the issue  
**\<@ArticMine>** Well XP will support it on most later XP computers  
**\<dEBRUYNE>** And they can turn it on fairly easy  
**\<dEBRUYNE>** (in the rare case it's disabled by default)  
**\<moneromooo>** Anything else about the GUI ?  
**\<pero>** i was hoping the default file path -related issues on linux would be fixed before any binaries got into the wild - the github issues are still open so i take it that hasn't happened?  
**\<dEBRUYNE>** **\<moneromooo>** Anything else about the GUI ? \<= I think jaquee wanted to tell a bit on what he is working on and what he'll be working on in the future  
**\<jaquee>** yes  
**\<moneromooo>** jaquee: please do :)  
**\<imans>** Well, I would also like to add another option. Add an option to sync from the local blockchain or simply act as a light wallet. This will help the gui to both work as light or core wallet.  
**\<moneromooo>** (14 minutes till kovri meeting)  
**\<imans>** okay, waiting  
**\<TedTheFicus>** Yes, that is a good idea  
**\<jaquee>** i'm currently working on the wallet selector issue  
**\<jaquee>** open wallet form file... switch wallet etc  
**\<imans>** good to hear  
**\<jaquee>** and i will also fix the default path on linux  
**\<imans>** fine.  
**\<jaquee>** hower i won't be finished today  
**\<pero>** o/  
**\<jaquee>** so it has ot wait until next release  
**\<imans>** It won't be an issue  
**\<xmrcoma>** no neeed to finish today jaquee. thanks for your hard work. From a strategic point of view GUI release before Oct 28 (zcash release) would be helpful  
**\<jaquee>** if the windows binaries gets built tomorrow  
**\<jaquee>** and after that i'm gonna work on whatever the commuity feels most prioritized  
**\<moneromooo>** That's cool, thanks jaquee.  
**\<jaquee>** like the plugin system or better integration with daemon  
**\<TedTheFicus>** Can anyone in the know comment on (xmrcomas) statement?  
**\<moneromooo>** If we're going to have binaries flying around, I think things like validation, avoiding user being dumb, etc, are a good thing to focus on.  
**\<jaquee>** yes. we could improve the ux with better validation  
**\<moneromooo>** About what ? Wanting binaries before 28 ?  
**\<imans>** Create use cases  
**\<medusa_>** yes personally i think all the dangerous stuff is fixed, at least im not aware of any  
**\<endogenic>** i was also concerned to see that someone attempting to run a macos binary of the gui wallet the other day got a crash about a dynamic library not having been able to be loaded -- and i believe we found out that it was boost which wasn't installed -- for the gui release, will there be an installer for mac os to take care of such dependencies?  
**\<medusa_>** the mian thing is that the "open from keys file" usecase is missing and windows suers chan not easily switch wallets  
**\<moneromooo>** Niece. Thanks for testing medusa_ :)  
**\<moneromooo>** Probably just build boost statically.  
**\<jaquee>** endogenic: I think that's a build issue. Won't affect the binaries afaik  
**\<+hyc>** shouldn't we be building this with statically linked libboost?  
**\<endogenic>** jaquee: ok, excellent  
**\<hiall>** when official gui wallet out?  
**\<gingeropolous>** about 2 weeks  
**\<moneromooo>** Anything else you want to add, jaquee ?  
**\<jaquee>** nope  
**\<TedTheFicus>** There is no date, it was just discussed now and testing is being done.  
**\<moneromooo>** Anyone else want to talk about dev stuff for 6 minutes ?  
**\<dEBRUYNE>** hiall: Read the backlogs :P  
**\<_Slack> \<nanoakron>** Thanks @jaquee for all the GUI work. Two other issues I wanted to raise during this meeting were (a) killing dead issues on github and (b) formalising the log levels. WRT log levels, I don’t mind going through the code and changing all log outputs to the correct level if we can agree what those should be, in advance of a better programmer changing the logging subsystem itself. Please see and comment on https://github.com/monero-project/monero  
**\<tompole>** Can someone confirm that the languages page has been scrubbed from the GUI?  
**\<endogenic>** i do want to mention i don't think any normal user would install boost on their own -- and the crash itself wouldn't be acceptable as a graceful failure fmpov as a product guy  
**\<moneromooo>** I'd leave any level change till after the log system change, let's not waste work.  
**\<hiall>** so GUI release this month? :O  
**\<_Slack> \<nanoakron>** @moneromooo OK makes sense  
**\<moneromooo>** tompole: it's here as of today, just with only en_US IIRC.  
**\<dEBRUYNE>** \<tompole>** Can someone confirm that the languages page has been scrubbed from the GUI? **\<= Yeah, translations aren't done yet  
**\<jaquee>** tompole: yes we've removed all languages except english for now until translations are finsihed  
**\<sdgsdug9sd>** if the issues with hardware acceleration get fixed in time, the gui should come out before oct 28 right?  
**\<_Slack> \<nanoakron>** Still inviting comments on the discussion though  
**\<tompole>** Okay cool, thanks.  
**\<dEBRUYNE>** I'll put the strings on transifex next week  
**\<dEBRUYNE>** Such that the community can help translating  
**\<dEBRUYNE>** then we can enable them again  
**\<moneromooo>** As for killing closed bugs, that'll happen, once the pony gets a minute. He has logs with issues list.  
**\<imans>** I just started to compile one for my ubuntu 15.10  
**\<endogenic>** i'm curious to know how qt was chosen as the gui lib, if anyone can comment  
**\<moneromooo>** For people wanting to read the kovri meeting a 3 minutes, that'll be on #kovri-dev  
**\<+hyc>** qt is multi-platform, seems a reasonable choice  
**\<_Slack> \<nanoakron>** Thanks all. See you around!  
**\<moneromooo>** The other main one is GTK. Or.. custom :D  
**\<moneromooo>** WxWidgets maybe.  
**\<i2p-relay>** {-anonimal} #kovri-dev topics today will be API and resolving the logo.  
**\<+hyc>** gtk is atrocious. yeah mebbe wxwidgets  
**\<moneromooo>** Java :o  
**\<_Slack> \<dadude>** libgui?  
**\<hiall>** so there is a possibility that we see gui before end of october?  
**\<sdgsdug9sd>** expected date for release of the gui?  
**\<_Slack> \<dadude>** libui sorry https://github.com/andlabs/libui  
**\<gingeropolous>** there's always a possibility  
**\<moneromooo>** Oh my. Maybe in november.  
**\<TedTheFicus>** It is possible yes. Have a look on GitHub under project MonerCore to gauge the status  
**\<moneromooo>** December, otherwise.  
**\<medusa_>** next year guys  
**\<sdgsdug9sd>** lol  
**\<tompole>** 2018  
**\<@ArticMine>** hiall A possibility Yes; Promises: No  
**\<gingeropolous>** now the probability of that possibility is a different story  
**\<xmrcoma>** 2018 sounds like fud. I say 2017 at the latest  
**\<TedTheFicus>** Thanks for all your hard work everyone!  
**\<moneromooo>** For people wanting to read the kovri meeting 1 a minute, that'll be on #kovri-dev  
**\<moneromooo>** Thanks all  
**\<tompole>** Monero doesn't need to be concerned with tending to deadlines that relate to other projects.  
**\<gingeropolous>** ONWARD MONERO!  
**\<kali_>** Thanks guys!  
**\<+hyc>** bye all  
**\<@ArticMine>** I am going there now.  
**\<medusa_>** thaks people, good luck and rock on  
**\<sdgsdug9sd>** on a serious note though, can someone just tell whats the anticipated date for gui release?  
**\<gingeropolous>** no  
**\<kkhugs>** @moneromoo thanks for that address verification wallet API pr  
**\<sdgsdug9sd>** why?  
**\<gingeropolous>** because development  
**\<notyomomma>** monero should be concerned with the needs of the user - which is the gui.  I think the questions on timing are relevant  
**\<_Slack> \<xmr_eric>** lol  
**\<xmrcoma>** gui will be done when it is done. not 1 day before or after  
**\<moneromooo>** sdgsdug9sd: apparently tomorrow  
**\<xmrcoma>** soon. tm  
**\<moneromooo>** (or so I read above)  
**\<gingeropolous>** well, its been 2.5 years  
**\<pero>** before the documentary  
**\<pero>** i think everyone can commit to that?  
**\<dEBRUYNE>** Like I said above, luigi & ArticMine will test on windows systems tomorrow  
**\<moneromooo>** it's a bit rickety still though  
**\<dEBRUYNE>** if there is no issue there, I see no reason to not put the beta release out  
**\<endogenic>** exciting  
**\<dEBRUYNE>** there can be a subsequent release when the linux path issue, wallet choosing issue, are fixed  
**\<xmrcoma>** I saw forget windows. just release for linux and make everyone convert:)  
**\<sdgsdug9sd>** hmmm, not sure im getting this clear. so, its expected to be released tomorrow but no later than oct 28?  
**\<xmrcoma>** f miscrosoft  
**\<moneromooo>** Unless tomorrow forgets to end, I guess.  
**\<xmrcoma>** sdg 2017 at the latest  
**\<pero>** the reason behind the prioritizing the file paths is that we'll see an influx of 'noobs' asking if this or that directory can be safely deleted  
**\<xmrcoma>** but maybe tomorrow:)  
**\<gingeropolous>** moneromooo, lulz  
**\<dEBRUYNE>** No testing is tomorrow, if that is fine the bins can be put out  
**\<dEBRUYNE>** but that isn't necesarily tomorrow too  
**\<dEBRUYNE>** :P  
**\<hiall>** gui testing tomorrow?  
**\<moneromooo>** Oh, multi day testing. Fair enough. Ignore me.  
**\<ontario>** noob question here , when the gui is released can we mine directly to gui wallet?  
**\<moneromooo>** Later, yes. Not yet.  
**\<sdgsdug9sd>** alrighty, what about kovri release? shouldnt it be december 2016?  
**\<dEBRUYNE>** moneromooo: you could put your GUI wallet address in the daemon though  
**\<xmrcoma>** can someone comment on this? https://www.youtube.com/watch?v=dQw4w9WgXcQ  
**\<moneromooo>** dEBRUYNE: what do you mean ?  
**\<_Slack> \<dadude>** rickrooool!  
**\<dEBRUYNE>** moneromooo: just start_mining in the daemon  
**\<_Slack> \<dadude>** it ends in XcQ  
**\<dEBRUYNE>** and then your GUI address  
**\<dEBRUYNE>** you need a daemon running to use the GUi anyway  
**\<moneromooo>** Hmm, yes. That was not the question though I think.  
**\<dEBRUYNE>** But that's more of a way around :P I think the guy meant mining directly in the GUI  
**\<moneromooo>** Oh, *to*, actually you're right.  
**\<tompole>** You mean you still need a terminal window open in order for the GUI to work?  
  
  
  