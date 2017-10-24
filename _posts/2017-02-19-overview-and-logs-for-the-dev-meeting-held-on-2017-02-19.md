---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2017-02-19
summary: 0MQ, 10.2 release, and background mining
tags: [dev diaries, core, crypto, 0mq]
author: dEBRUYNE / fluffypony
---

### Logs  

**\<fluffypony>** 1. Greetings  
**\<fluffypony>** 2. Brief review of what's been completed since the previous meeting  
**\<fluffypony>** 3. Code + ticket discussion / Q & A  
**\<fluffypony>** 4. Any additional meeting items  
**\<fluffypony>** 5. Confirm next meeting date/time  
**\<hyc>** hola  
**\<fluffypony>** so greetings  
**\<fluffypony>** hi!  
**\<ArticMine>** hi  
**\<tewinget>** (here)  
**\<vtnerd>** also present  
**\<moneromooo>** hi  
**\<tewinget>** I'll be sorta afk for the next 5ish minutes, but I'm around.  
**\<fluffypony>** ok  
**\<fluffypony>** 2. Brief review of what's been completed since the previous meeting  
**\<fluffypony>** so  
**\<fluffypony>** second meeting of the year  
**\<fluffypony>** and we've been pushing ahead solidly  
**\<fluffypony>** we've had a bunch of PRs by newcomers  
**\<jollymort>** once you go solid state you never go back  
**\<fluffypony>** including tpltnt, and IPGlider has also pushed a few PRs  
**\<fluffypony>** we switched to EasyLogging++, which is a pretty big change  
**\<fluffypony>** and MoroccanMalinois made Android builds happen  
**\<fluffypony>** tdprime also pushed their first PR  
**\<fluffypony>** and then the usual rash of PRs from moneromooo, vtnerd, hyc, NanoAkron, and Jaquee  
**\<fluffypony>** (I've probably missed someone)  
**\<pigeons>** reveler with the background mining  
**\<hyc>** revler  
**\<fluffypony>** yes thanks pigeons  
**\<fluffypony>** oh and pigeons had a PR too  
**\<jollymort>** kenshi84 disposable addresses  
**\<fluffypony>** and kenshi84  
**\<fluffypony>** ok - anything else major I missed that happened in the last two weeks before we move on to 3?  
**\<moneromooo>** All the new one time address stuff from knaccc, randomrun, kenshi, jollymort.  
**\<knaccc>** yes subaddresses are back!  
**\<moneromooo>** And luigi.  
**\<fluffypony>** moneromooo: I was going to get to that in 3  
**\<hyc>** ok, sounds like we move on to 3  
**\<fluffypony>** since it's in the MRL repo  
**\<fluffypony>** 3. Code + ticket discussion / Q & A  
**\<jollymort>** I wasn't following that discussion, focused on study on fees atm  
**\<fluffypony>** ok so there have been a few long-form discussions going on in various issues  
**\<jollymort>** also the one for ring size  
**\<fluffypony>** yeah the ring size one is one I wanted to bring up  
**\<fluffypony>** I think the discussion has mostly been positive, nobody's gotten crazy out-of-hand or anything  
**\<fluffypony>** it *is* a complex topic  
**\<fluffypony>** and I think that we have enough time to figure out a good route forward  
**\<fluffypony>** does anyone have an objection to it continuing in the GitHub issue?  
**\<hyc>** seems like all the context is there  
**\<hyc>** so it should continue there  
**\<jollymort>** I feel like it's more suitable for an issue under MRL, any thoughts of moving it there (if possible)?  
**\<jwinterm>** I haven't been following the issue too closely, but is there still some sentiment building around fixing ring size for all txs?  
**\<fluffypony>** jollymort: I think the GH issue is fine, it can kinda be anywhere, but if we're going to turn that into a publication that explores the various options and reasons for recommendations then it would develop as PRs to the research-lab repo  
**\* jwinterm** goes to github  
**\<jollymort>** I meant, keep it as a GH issue, but under another repo so it doesn't get buried under all code/bug related issues  
**\<jwinterm>** as someone not following the issue, it does kind of get lost in the noise with 164 open issues  
**\<jwinterm>** #1673?  
**\<fluffypony>** yeah it would be nice if GH let you subscribe to just a single issue  
**\<fluffypony>** I'm not opposed to moving it to the research-lab repo  
**\<fluffypony>** how would we do that tho  
**\<hyc>** no idea  
**\<pero>** someone creates a synopsis of where the discussion is at currently in the new ticket and links back to older ticket  
**\<hyc>** yeah, new text  
**\<hyc>** with @mentions of original participants  
**\<fluffypony>** ok I'll suggest it in the thread  
**\<fluffypony>** then on the topic of discussion  
**\<fluffypony>** I'd like to encourage us to also take some Q&A / discussion items to StackExchange where we can  
**\<fluffypony>** and to redirect people who open issues to just ask a question to StackExchange  
**\<hyc>** hm, I would expect that SE is for "settled" questions  
**\<fluffypony>** SE is a great place for canonical information that is updated over years  
**\<jollymort>** I'd just like to add that SE is not really a format for discussions, more for things with an actual answer existing  
**\<fluffypony>** hyc: nope, anyone can edit an accepted answer with new information  
**\<jollymort>** like hyc said  
**\<jollymort>** there's SE chat, though - which nobody uses  
**\<fluffypony>** jollymort: some of the questions on GitHub issues are perfect for SE  
**\<jollymort>** sure  
**\<fluffypony>** https://github.com/monero-project/monero/issues/1751 as an example  
**\<hyc>** monero clone?  
**\<fluffypony>** hyc: probably, I thought that too  
**\<fluffypony>** but that's a good question for SE  
**\<fluffypony>** which also has a larger group of answer-ers than the GH repo  
**\<taushet>** it is already answered though, sort of http://monero.stackexchange.com/questions/2886/how-can-i-create-a-new-monero-genesis-block  
**\<fluffypony>** taushet: yes but SE has tools to close as a duplicate and redirect them to the answer  
**\<fluffypony>** and moderators can do that without us needing to  
**\<taushet>** fluffypony - agreed. also the 'issue' was not so much an issue with the code as much as it was a question but a user/tinkerer who could not get something to work  
**\<taushet>** anyway  
**\<fluffypony>** yeah exactly  
**\<Slack> \<nanoakron>** What if someone went through and opened parallel SE questions for all those types of question, redirected the original asker, then we shut the issue?  
**\<hyc>** sounds good  
**\<fluffypony>** @NanoAkron yes that's exactly my recommendation  
**\<Slack> \<nanoakron>** Ok I might see what I can do if I get any free time tonight  
**\<fluffypony>** then you even get SE karma or points or rep or whatever it's called  
**\<Slack> \<nanoakron>** Woo!  
**\<fluffypony>** gamification ftw!  
**\<fluffypony>** ok anything else under Q&A ?  
**\<hyc>** specific tickets?  
**\<hyc>** like 0MQ PR?  
**\<fluffypony>** yep I believe tewinget said he had to check if it was working with RingCT  
**\<fluffypony>** tewinget: ^^  
**\<Slack> \<nanoakron>** Any thoughts about 0.10.2?  
**\<fluffypony>** @NanoAkron yes  
**\<fluffypony>** we've been discussing it  
**\<fluffypony>** because it will coincide with beta 2 of the GUI  
**\<Slack> \<nanoakron>** Oh nice  
**\<fluffypony>** as we're marrying daemon / GUI versions  
**\<Slack> \<nanoakron>** Makes good sense. Will #1746 be addressed too?  
**\<jollymort>** do you intend to code in stuff for the next HF in 0.10.2?  
**\<Slack> \<nanoakron>** I.e. Auto starting daemon  
**\<fluffypony>** there are a few things that need to be done in the daemon / GUI before the next release  
**\<tewinget>** sry  
**\<fluffypony>** jollymort: no  
**\<fluffypony>** we only have to finalise that by like July  
**\<tewinget>** just got my second monitor back from a friend, was setting it up real quick.  
**\<jollymort>** ok, thanks  
**\<fluffypony>** @NanoAkron I don't see why we can't make sure 1746 is sorted, Jaquee any thoughts ?  
**\<tewinget>** so Snipa was kind enough to chuck a battery of tests at my zmq branch, which is great.  It seems there are a couple things I need to look at, which is expected, but his tests seem rather comprehensive, so once those are passing it should be good to go.  
**\<moneromooo>** Does this keep a backward compat layr for the current JSON API ?  
**\<tewinget>** moneromooo: currently it neither replaces nor modifies any current RPCs  
**\<Slack> \<nanoakron>** Esp since the number of rpc commands has increased  
**\<fluffypony>** moneromooo: long term yes - the current JSON API will be in its own binary, like monero-rpc-server, and that will use 0MQ to communicate with the daemon  
**\<tewinget>** but also short-term yes because I haven't done anything to the existing RPCs  
**\<Slack> \<nanoakron>** I heard it would be passing plaintext commands/JSON and not binary. Or am I mistaken?  
**\<tewinget>** nanoakron: that is correct, everything is marshalled via json  
**\<tewinget>** this is so that higher-level languages have no problem using the RPC  
**\<pigeons>** or jaxx :P  
**\<tewinget>** as the (de)serialization takes no time at all compared to the computations/fetching  
**\<tewinget>** pigeons: hope springs eternal  
**\<hyc>** this is for wallet-style client RPCs only then  
**\<Slack> \<nanoakron>** Doesn't that mean that there are now two sets of commands to maintain in sync - JSON-RPC (won't be deprecated) and JSON-over-ZMQ?  
**\<fluffypony>** JSON-RPC *will* be deprecated for the daemon  
**\<fluffypony>** we won't add new RPC commands to it  
**\<fluffypony>** JSON RPC for the wallet will continue to evolve and exist  
**\<fluffypony>** because web apps rely on it  
**\<fluffypony>** communication with the daemon will be relegated to 0MQ only  
**\<moneromooo>** !bookie no-json-rpc-added-ever-again yes no  
**\<Slack> \<nanoakron>** But in JSON format  
**\<moneromooo>** aw...  
**\<fluffypony>** (eventually)  
**\<fluffypony>** @NanoAkron yes  
**\<fluffypony>** so existing apps that interact with the daemon, eg. pool software, can continue by adding a 0MQ library  
**\<fluffypony>** and modifying any calls that have changed  
**\<tewinget>** (which won't be many, there were just a few that seemed silly in some ways, and changed accordingly, but none of that is set in stone)  
**\<fluffypony>** anything else?  
**\<fluffypony>** or I guess we can include that in the next item on the agenda  
**\<fluffypony>** 4. Any additional meeting items  
**\<Slack> \<nanoakron>** Neigh  
**\<fluffypony>** lol  
**\<fluffypony>** we should use HAY and NEIGH instead of ACK and NACK  
**\<Slack> \<nanoakron>** Lol  
**\<tewinget>** I'll keep updating over the next couple days, fwiw.  Gotta get with Snipa to see if he can make a couple of modifications to the tests for me to make issues track-down-able, but he's afk until tomorrow.  
**\<moneromooo>** Hmm, range sig reduction... multisig... fee formula change...  
**\<Slack> \<nanoakron>** Yes  
**\<pigeons>** Snipa: are these tests in your github?  
**\<fluffypony>** oh I have an item for brief discussion  
**\<jollymort>** it's not just the fee, penalty needs tweaking  
**\<fluffypony>** as everyone knows, the dynamic block adjuster isn't adjusting very well since the txs became larger  
**\<pero>** snipa is afk until tmrw iirc  
**\<jollymort>** either by increasing the min. blocksize, or having a transition formula  
**\<fluffypony>** does everyone think we should leave it as-is until September, with the occasional backlog  
**\<fluffypony>** or should we have some intermediary hard fork ?  
**\<ArticMine>** We may need one  
**\<hyc>** If we have a fix now, would be nice to deplot it sooner  
**\<hyc>** deploy  
**\<Slack> \<nanoakron>** But it has to be smart enough to account for potential future changes in range proof and therefore Tx size  
**\<jollymort>** it accounts :)  
**\<pero>** september is a long time away  
**\<Slack> \<nanoakron>** As well as ring size. Txes will become much more standardised in size and non-parametrically distributed  
**\<fluffypony>** ok I think that's reasonable consensus, as soon as we have something workable we'll put it out to the community as a hard fork and see how they feel  
**\<Slack> \<nanoakron>** So medians etc may not make statistical sense  
**\<DaveyJones>** you could HF at around the time when originally the ringct hf was supposed to happen  
**\<ArticMine>** nanoakron We are looking at a fall in tx size?  
**\<Slack> \<nanoakron>** Hopefully. Size would fall will range proof improvements, but distribution of sizes would flatten with ring size standardisation. Parametric statistics would no longer apply.  
**\<fluffypony>** DaveyJones: that's in March, too soon for a planned fork  
**\<Slack> \<nanoakron>** So adjusting based on moving medians would be meaningless. We'd need to deploy alternate statistical tests.  
**\<moneromooo>** Can you explain that ?  
**\<fluffypony>** ok  
**\<fluffypony>** anything else before we close the meeting ?  
**\<fluffypony>** (we can discuss specifics after the meeting)  
**\<Slack> \<nanoakron>** Even now with a mix of rct and non-rct transactions the median is meaningless because the size distribution is non parametric  
**\<jollymort>** it's some typical size which is most important, currently at 13kB  
**\<hyc>** calculate two separate medians. one for rct and one for non-rct.  
**\<jollymort>** doesn't matter if it's +/- 1kB  
**\<Slack> \<nanoakron>** It's instead bimodal  
**\<hyc>** sounds like we're done with the meeting side of things then  
**\<jollymort>** I mean, if you roll out some change to TX format, you already know the next typical size it will cause  
**\<fluffypony>** last item is the next meeting time  
**\<jollymort>** and you will need to HF anyway, so all you'd need to do is adjust one parameter for the dynamic blocksize/fee  
**\<fluffypony>** 2 weeks from now  
**\<fluffypony>** March 5th  
**\<hyc>** cool  
**\<fluffypony>** I will be on a plane to London, but should have wifi and should be able to attend the meeting  
**\<fluffypony>** thanks guys  