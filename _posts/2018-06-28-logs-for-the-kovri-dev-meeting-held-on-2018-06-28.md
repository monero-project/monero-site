---
layout: post
title: Overview and Logs for the Kovri Dev Meeting Held on 2018-06-28
summary: Discussion of the latest Kovri development updates and the alpha release
tags: [dev diaries, i2p, crypto]
author: selsta / anonimal
---

# Logs

**\<anonimal>** 1. Greetings  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\<anonimal>** 3. Contributor FFS check-in / status  
**\<anonimal>** 4. Alpha release discussion  
**\<anonimal>** 5. Public relations discussion  
**\<anonimal>** 6. Code + ticket discussion / Q & A  
**\<anonimal>** 7. Any additional meeting items  
**\<anonimal>** 8. Confirm next meeting date/time  
**\<anonimal>** howdy  
**\<oneiric\_>** hi there  
**\<anonimal>** rehrar are you going to miss the 2nd meeting that you helped setup? :/  
**\<anonimal>** He's busy with things. This I do know.  
**\<anonimal>** But what if I decided to not show up to meetings because I was busy, and didn't reschedule?  
**\<anonimal>** Life's questions.  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\<anonimal>** When was the last meeting?  
**\<anonimal>** Oh, only 3 weeks ago?  
**\<anonimal>** Seems longer than that.  
**\<oneiric\_>** I put together a small summary of stuff from ~last month:  
**\<oneiric\_>** anonimal improved and/or fixed builds, tests, the testnet, logging, CLI arguments, and documentation. In addition, anonimal spent a significant amount of time mentoring oneiric.  
**\<oneiric\_>** tmoravec is a new contributor, and fixed a number of Coverity bugs & build warnings.  
**\<oneiric\_>** ordtrogen is a new contributor, and improved build instructions in the README.  
**\<oneiric\_>** RichAyotte is a new contributor, and updated the user guide documentation.  
**\<oneiric\_>** ErCiccione added a TOC to the Kovri multilingual README.  
**\<oneiric\_>** rahkimov improved a core data structure (Tag), and fixed a dependency in the Kovri README.  
**\<oneiric\_>** oneiric improved tests, router key creation (w/ anonimal), core data structures (Tag/InputByteStream), and fixed build warnings.  
**\<oneiric\_>** rehrar updated the multilingual implementation for the Kovri site, and merged a number of commits from documentation.  
**\<oneiric\_>** monerorus is a new contributor to the kovri site, and translated the site into Russian.  
**\<oneiric\_>** el00ruobuob is a new contributor to the Kovri site, and translated the site into French.  
**\<oneiric\_>** For details see merged PRs on github:  
**\<oneiric\_>** kovri: https://github.com/monero-project/kovri/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Aclosed+is%3Amerged  
**\<oneiric\_>** kovri-site: https://github.com/monero-project/kovri-site/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Aclosed+is%3Amerged  
**\<oneiric\_>** kovri-docs: https://github.com/monero-project/kovri-docs/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Aclosed+is%3Amerged  
**\<anonimal>** lol, thanks oneiric\_  
**\<anonimal>** Also see open PRs.  
**\<oneiric\_>** lol, no problem anonimal  
**\<anonimal>** I implemented tweetnacl / dropped supercop, in #909. There are other open PRs too.  
**\<anonimal>** oneiric\_: that was an awesome summary btw  
**\<anonimal>** ^ irc summary  
**\<anonimal>** reminds me of my gusto circa 2015  
**\<anonimal>** which has disappeared in the wind of time.  
**\<anonimal>** So thanks for doing that  
**\<oneiric\_>** thanks, I'll try to keep that up for good communication  
**\<oneiric\_>** no worries :)  
**\<anonimal>** 3. Contributor FFS check-in / status  
**\<anonimal>** oneiric\_'s FFS has moved to funding required  
**\<anonimal>** https://forum.getmonero.org/8/funding-required/90300/oneiric-june-august-part-time-kovri-junior-developer  
**\<anonimal>** Congratulations on 73.36% funding oneiric\_  
**\<oneiric\_>** thanks anonimal, and huge thank you to everyone who has contributed!  
**\<oneiric\_>** means a lot to me to have the community's support  
**\<anonimal>** I don't think people realize how much of my time I donate. Regardless, if the remaining balance isn't filled soon then I'll donate.  
**\<anonimal>** Anything else on the FFS topic?  
**\<anonimal>** Oh, my FFS.  
**\<oneiric\_>** that's awesome, thank you! I do know, at least partly, how much time you spend, and that's hugely appreciated on it's own  
**\<anonimal>** I could go into detail for any lurkers or people with questions but I don't know who are around.  
**\<anonimal>** From an outsider's perspective, I don't think they realize how far you've come oneiric\_ in such a short amount of time.  
**\<anonimal>** Ok, not to derail my FFS, I've recently finished another milestone http://forum.getmonero.org/9/work-in-progress/86967/anonimal-s-kovri-full-time-development-funding-thread?page=&noscroll=1#post-94875  
**\<anonimal>** Continuing as scheduled.  
**\<anonimal>** Any questions/comments on the FFS checkin?  
**\<anonimal>** 4. Alpha release discussion  
**\<Corklander>** Here  
**\<anonimal>** Hi Corklander, thanks for dropping in. I know the relays are offline.  
**\<oneiric\_>** Just that the comment about mentoring is not an understatement, and I appreciate your time spent with me  
**\<anonimal>** We'll have to upload the meeting log. Maybe selsta is around?  
**\<anonimal>** Thanks oneiric\_, likewise.  
**\<oneiric\_>** Hi there, Corklander!  
**\<anonimal>** Continuing to the release discussion, any questions before I start?  
**\<oneiric\_>** none from me  
**\<anonimal>** Ok, so off the top of my head,  
**\<anonimal>** I'm imagining a release date of August 1st. Completed release, on website, binaries rolled out, etc.  
**\<anonimal>** Codefreeze two weeks before that at most.  
**\<anonimal>** Or, more realistically, codefreeze the night before :)  
**\<oneiric\_>** lol  
**\<anonimal>** But let's aim for two weeks prior.  
**\<anonimal>** Not like it will matter much. Everyone will still 99.9% be advised to build from master.  
**\<anonimal>** But, if we have these dates, we can tell pigeons and hopefully he can make sure all the backend issues are resolved so we can actually *have* a release.  
**\<oneiric\_>** Will there be a release branch to make bugfix pulls against?  
**\<anonimal>** Good question. We can do that. Or not. We can also just do a featurefreeze instead.  
**\<oneiric\_>** Ok, I'm good with either way.  
**\<anonimal>** I personally don't like a cluttered tree, and considering alpha and lots of numbers that will need to be released...  
**\<anonimal>** We can decide as the time approaches. Sound fair?  
**\<oneiric\_>** Definitely, sounds fair.  
**\<anonimal>** ok  
**\<anonimal>** About the website, that too will need to be updated and ready to go.  
**\<anonimal>** Just FYI. Not my territory though.  
**\<anonimal>** Any more questions/comments about alpha release?  
**\<oneiric\_>** Ok, I was hoping rehrar would be here. Wanted to ask questions about his preference for docs PRs  
**\<anonimal>** Did you want to PR some things?  
**\<oneiric\_>** Yeah, the router size notes we discussed in #627  
**\<selsta>** anonimal: if I have time I’ll PR it :)  
**\<anonimal>** k  
**\<anonimal>** oneiric\_: I'm basically running that repo. What was the question?  
**\<anonimal>** I'm thinking we move kovri moneropedia entires onto kovri-site btw  
**\<anonimal>** and then from there we can add directly to the website  
**\<oneiric\_>** Ok, would you prefer me to make a PR directly to kovri-site, or to kovri-docs, then merge that into kovri-site?  
**\<oneiric\_>** Oh, got it, so just PR to moneropedia?  
**\<anonimal>** Good questions. If we had more active website development I would say just PR to the website  
**\<anonimal>** *kovri-site  
**\<anonimal>** What would the title of the document be?  
**\<oneiric\_>** Good question, I haven't thought about it, yet.  
**\<anonimal>** Ok, let's talk more. This would be the perfect opportunity to have a simple developer notes section somewhere.  
**\<anonimal>** Then again, the java i2p docs could simply be written better. Yes, I've voiced complaints/concerns. Beating dead horse.  
**\<anonimal>** oneiric\_: can we talk more about this after the meeting?  
**\<oneiric\_>** Absolutely  
**\<anonimal>** k  
**\<anonimal>** 5. Public relations discussion  
**\<anonimal>** Well, our volunteer PR guy who was here for 3 seconds decided to rage quit, so, here we are.  
**\<anonimal>** Any questions/comments on point 5?  
**\<anonimal>** We're in a time where PR doesn't require product anymore. I personally don't agree with this but the trend is being set.  
**\<oneiric\_>** Is xmrhaelan, the Monero PR/outreach guy, available to help with Kovri?  
**\<oneiric\_>** We're in a time where PR doesn't require product anymore. < what do you mean?  
**\<anonimal>** We're available. We have communications channels. We have very little outreach but c'est la vie.  
**\<anonimal>** oneiric\_: one can put vast amounts of money into a PR team and not need to have a product. See ICOs.  
**\<oneiric\_>** Oh, yeah vaporware is king there  
**\<anonimal>** I don't know if xmrhaelan is around. I keep thinking of Van Halen everytime I read his name.  
**\<oneiric\_>** lol  
**\<anonimal>** "Got it baaddd, got it baaad, got it baaadd, got hots for teacher"  
**\<anonimal>** Anything else on point 5.?  
**\<Corklander>** Is there a strategy?  
**\<anonimal>** I could go on, this is a chat-worthy topic but, preaching to the choir here.  
**\<Corklander>** As in, was there a plan to have an alpha now, a beta in 1 year, etc.  
**\<anonimal>** These are all just names. We could've had alpha a year ago. Names and numbers used to denote quality and reliability but most of that concept has disappeared.  
**\<anonimal>** The steaming pile of shit that we forked had multiple "full releases" even before we forked.  
**\<anonimal>** So, we can say whatever we'd like. I'm just trying to be as honest as possible.  
**\<anonimal>** But yes, strategy would be good.  
**\<Corklander>** Ah, yeah.  
**\<anonimal>** I would think we need an extra pair of hands to fulfill a strategy though.  
**\<anonimal>** Corklander: do you have any ideas/thoughts on how to improve PR?  
**\<Corklander>** Well, I think PR is always targeted to get needed people involved  
**\<Corklander>** There's got to be existing projects that are fumbling with Tor, etc. that could use a better API.  
**\<anonimal>** Good point, I haven't thought about that.  
**\<Corklander>** If we just throw together a list, then go through and announce the alpha to them, that would generate interest on its own.  
**\<anonimal>** I'd always thought that stem and their existing api was good enough for most people.  
**\<anonimal>** e.g., socks proxy :)  
**\<anonimal>** Ok, that sounds interesting.  
**\<Corklander>** It's the I2P routing that sold me though. Tor is too wild to provide services.  
**\<anonimal>** I'd really like to hear more about your perspective Corklander. My head's been in this too long to have a fresh/newcomer perspective.  
**\<Corklander>** i.e. If I want to make an app with a connection to a relaible backend and prove no knowledge of the requestor then I2P might work.  
**\<anonimal>** Would you like to chat more about this after the meeting? Or in a separate meeting or side-channel? And/or inperson?  
**\<Corklander>** Sure.  
**\<anonimal>** Ok, I don't understand the zero knowledge requester part so I'll ask about that.  
**\<Corklander>** Well, I'll be at DEFCON so we'll have a chance to go into details anyway.  
**\<Corklander>** Yup.  
**\<anonimal>** Ok. Any other questions/comments on the PR topic?  
**\<oneiric\_>** < None here  
**\<anonimal>** 6. Code + ticket discussion / Q & A  
**\<anonimal>** oneiric\_: I'll get to reviewing the remaining open PRs today  
**\<oneiric\_>** Ok, I added a WIP tag to #917, to rebase on top of a merged #926  
**\<anonimal>** ok  
**\<oneiric\_>** Have a hunch about what might be causing the assert firing for #909, think related to RI stuff  
**\<oneiric\_>** Getting closer to figuring out the SSU overread issue. Is the SSU fragment code from pre-fork?  
**\<anonimal>** ok good. After I merge 926 into my bandcaps branch I'll need to fix a couple of RI bugs that are getting in the way. I don't think it will affect that assertion though, TBD.  
**\<anonimal>** The SSU fragment and data code, yes.  
**\<oneiric\_>** Alright, was just a hunch.  
**\<oneiric\_>** re: SSU code, thought so. much spaget  
**\<anonimal>** lol  
**\<anonimal>** yes  
**\<anonimal>** ok, running out of time, anything else for 6.?  
**\<oneiric\_>** Can talk later, or on GH  
**\<anonimal>** k  
**\<anonimal>** I'm not 100% thrilled about the new utility buffer. I'd like to see a more work on it before it's deployed out of the simple RI case.  
**\<anonimal>** 7. Any additional meeting items  
**\<anonimal>** Corklander: selsta may be able to upload the meeting. If he can't then I'll upload a paste.  
**\<anonimal>** 8. Confirm next meeting date/time  
**\<anonimal>** Two weeks? Sooner?  
**\<oneiric\_>** Two weeks, cause code freeze, I'm good for sooner, too.  
**\<anonimal>** ok. Corklander?  
**\<Corklander>** Anytime is good with me.  
**\<anonimal>** ok  
**\<Corklander>** (It'll take me at least that much time before I can cover the entire codebase and be ready to add.)  
**\<anonimal>** Alright, let's set a date for 2 weeks, same time, and we can chat here frequently when needed.  
**\<anonimal>** Sound good?  
**\<oneiric\_>** +1  
**\<Corklander>** +1  
**\<oneiric\_>** Corklander: are you on Coverity?  
**\<anonimal>** Thanks everyone  
