---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2016-04-24
summary: A review and discussion of open PRs, moving forward with Ring CT
tags: [dev diaries, core, crypto]
author: dEBRUYNE / fluffypony
---
  
# Logs
 
**\<hyc>** hey what's on our agenda for today anyway  
**\<hyc>** slideshow from fluffypony's trip to Asia?  
**\<dEBRUYNE>** we could do that :D  
**\<dEBRUYNE>** hyc: More seriously, I suppose some Ring CT stuff + something about the performance branch  
**\<fluffypony>** lol  
**\<dEBRUYNE>** hyc: Plus I think there are still some PRs open for review  
**\<hyc>** sounds good. looking at NobleSir's DB schema, doesn't seem like there's much new needed on the DB side of things  
**\<dEBRUYNE>** hyc, fluffypony: I could make a list of which PRs are still open for review if you want?  
**\<hyc>** 13 open right now  
**\<dEBRUYNE>** all right  
**\<hyc>** moneromooo already reviewed PR#806  
**\<dEBRUYNE>** Oh yeah this is easier to spot -> https://github.com/monero-project/bitmonero/pulls  
**\<dEBRUYNE>** :-P  
**\<hyc>** yep  
**\<dEBRUYNE>** smooth and moneromooo had a little chat about 818 & 819 earlier today  
**\<hyc>** I've browsed thru them but frankly don't know enough about how things work to know their implications  
**\<moneromooo>** I felt like that abour your/warp's DB perf branch :P  
**\<hyc>** ;)  
**\<hyc>** looking at git history I'd guess tewinget or NoodleDoodle would have breezed thru them  
**\<fluffypony>** hokay  
**\<fluffypony>** t -1 hour  
**\<dEBRUYNE>** t -5 min  
**\<ArticMine>** hello  
**\<JonathanD_>** hi  
**\<hyc>** hola  
**\<smooth>** bonjour  
**\<xmrpromotions>** bonjour  
**\<fluffypony>** Comment allez-vous ?  
**\<fluffypony>** la réunion d'aujourd'hui aura lieu en français  
**\<bigreddmachine>** laissez les bon temps rouler  
**\<fluffypony>** lol  
**\<xmrpromotions>** Konnichiwa  
**\<fluffypony>** ok so  
**\<fluffypony>** welcome to the dev meeting  
**\<fluffypony>** after a brief intermission we're back on every 2 weeks  
**\<luigi1112>** I'm here but not really  
**\<fluffypony>** I've been trying to keep up whilst travelling, but there's some backlog I didn't read  
**\<fluffypony>** I think before we discuss #805 and the performance PR, let's just touch base on the smaller ones  
**\<fluffypony>** #810, #814, #818, all seem to have been reviewed and are ready for merge  
**\<moneromooo>** smooth had reservations about 810.  
**\<moneromooo>** Or hyc. Or both.  
**\<fluffypony>** smooth / hyc: any new thoughts beyond the one comment on the PR?  
**\<hyc>** both I think, but I don't remember smooth's comments  
**\<moneromooo>** I think it was just extra complexity htat might not be worth it.  
**\<hyc>** my point - the current pool code calls getblocktemplate 1/second but doesn't do anything with the response if the height is the same as before  
**\<hyc>** the pool code ought to just call getblockcount in that case, which executes in 0ms  
**\<dEBRUYNE>** smooth commented on #810 -> https://github.com/monero-project/bitmonero/pull/810  
**\* DaveyJones**: quotes deBRUYNE from yesterday : dEBRUYNE pages othe, NoodleDoodle, smooth, tewinget, binaryFate  
**\<fluffypony>** so then the pool code is bad, right ?  
**\<hyc>** yeah, in my perspective anyway  
**\<xmrpromotions>** No comment on the code for https://github.com/monero-project/bitmonero/pull/794 but is there some way we can reach out to the family of warptangent to let them know we are very greatful for his contributions?  
**\<smooth>** i added a comment to 810  
**\<dEBRUYNE>** ^ His dad commented in the thread  
**\<fluffypony>** xmrpromotions: they're already speaking to us, and we've let them know  
**\<dEBRUYNE>** but let's stick to -dev decisions for now  
**\<smooth>** 818 i think needs review by a cryptographer before we release that feature  
**\<fluffypony>** agreed  
**\<smooth>** hyc> the pool code ought to just call getblockcount in that case <= this is incorrect as we discussed before, but not relevant to 810  
**\<moneromooo>** getinfo returns top hash.  
**\<moneromooo>** And seems fairly lightweight.  
**\<smooth>** it should check the top block hash, not height, but in any case even calling getblocktemplate 1/second isn't obvious to me would be a performance issue at all  
**\<moneromooo>** Maybe PCFiL can test. He reported high CPU use when there were like 15 txes in the pool, and calming down at ~3.  
**\<moneromooo>** Or I could test it actually, just curl that URI.  
**\<smooth>** maybe we should look at why it takes so long then. when happens when there are 500?  
**\<hyc>** fair enough, re: getinfo. still, it seems like this cache should be unnecessary  
**\<fluffypony>** we can pack a bunch of transactions into testnet's mempool to see  
**\<smooth>** next topic?  
**\<hyc>** sounds like a good plan. perf optimizations should always have before/after metrics.  
**\<fluffypony>** 811 / 812 / 813, any thoughts or objections on them ?  
**\<hyc>** 811 seems pretty straightforward  
**\<hyc>** tho moneromooo mentioned that the test in question never actually gets run  
**\<hyc>** anyway, compiling unit tests is broken without it, so 811 needs to go in  
**\<fluffypony>** ok  
**\<fluffypony>** 812 seems fine too  
**\<smooth>** those all look fine, noting that the net code is a complete black box to me so i can't really have an opinion there  
**\<fluffypony>** ok - has anyone tested 815?  
**\<moneromooo>** Well, I did :)  
**\<fluffypony>** lol  
**\<fluffypony>** 816 is also pretty straightforward  
**\<fluffypony>** I'll review 817 later when I'm merging  
**\<fluffypony>** and 819 is obvious  
**\<moneromooo>** 818 won't apply once 816 is merged (duplicate -8 new error code), I'll update once this is done.  
**\<hyc>** yeah 816 looks fine  
**\<fluffypony>** I wouldn't bother yet - wait until there's been an MRL review on 818, moneromooo  
**\<moneromooo>** OK  
**\<fluffypony>** 810 I'll hold off on and let it bounce around, final decision at the next meeting if not before  
**\<fluffypony>** ok so 806, the PR that fixes issue 805 - any final thoughts on it or can I merge?  
**\<hyc>** works for me ;)  
**\<moneromooo>** Seems fine. I didn' try it though.  
**\<hyc>** it will make starting up a new wallet less painful for new users  
**\<fluffypony>** oh and then unwind, I forgot about that - moneromooo you commented today that you're going to do some more work on that, do you want to merge and then submit further PRs for improvement, or work off that PR?  
**\<moneromooo>** Leave it out for now.  
**\<fluffypony>** k  
**\<fluffypony>** so then performance  
**\<fluffypony>** are we going to merge it, or leave it for 0.10.0 ?  
**\<hyc>** conclusion - migrating DB schema in-place is much slower than just export/reimport from scratch  
**\<fluffypony>** hyc: yeah I know, the conversion tool was always horrendously slow by comparison  
**\<smooth>** im not sure that invalidates it  
**\<fluffypony>** but in-place migration has its place  
**\<fluffypony>** eg. when running as a service  
**\<smooth>** easy of use matters, and if advanced users want to do it faster they can use th etools  
**\<fluffypony>** agreed  
**\<smooth>** sync from scratch is an option too, if they dont care about bandwidth  
**\<fluffypony>** I guess the overriding factor here is that we suck at communicating with the end users that are running nodes  
**\<fluffypony>** the fork taught me that, at any rate, so we have to assume people won't be reading release notes  
**\<hyc>** ok. but are they going to notice that their newly restarted server isn't talking to anyone on the network for 1+ hour?  
**\<fluffypony>** I don't think they'll care if it's an unattended server  
**\<fluffypony>** we do need a way to universally respond to RPC calls with an error that explains that it's busy and this is the conversion % or something  
**\<hyc>** ok  
**\<gingeropolous>** i guess the use case to consider is shapeshift  
**\<fluffypony>** yeah  
**\<moneromooo>** RPC calls that care about this do return busy.  
**\<moneromooo>** If not, file a bug with details.  
**\<fluffypony>** moneromooo: a conversion will lock almost everything out, though ?  
**\<fluffypony>** except I guess blindly broadcasting transactions  
**\<moneromooo>** Oh, nevermind.  
**\<smooth>** even then it probably has to verify them  
**\<fluffypony>** yeah so I think the entire RPC interface has to error with a status  
**\<moneromooo>** I'm guessing the RPC server will not be up yet if it's converting the db.  
**\<hyc>** yeah, the conversion is firing up from db open  
**\<hyc>** I don't think anything else is up yet  
**\<fluffypony>** ah point  
**\<smooth>** whats the problem with refusing to start until they do something with their db?  
**\<smooth>** i mean error out at startup, no conversion  
**\<smooth>** you can either delete/rename it (and therefore resync) or convert it  
**\<fluffypony>** smooth: because in background mode / windows service mode you won't know that it's dying  
**\<smooth>** you'll know its not working, there must be some way to indicate a reason  
**\<fluffypony>** so practically: I have Bitcoin and Monero on a Windows node  
**\<smooth>** maybe leave a message file behind and the cli can report the message  
**\<moneromooo>** system("xmessage \"help\"")  
**\<fluffypony>** and at some point the Bitcoin DB got corrupted (multiple times)  
**\<fluffypony>** I have the service set to restart on fail, and eventually restart the whole machine  
**\<fluffypony>** so it was restarting the machine every 15 minutes, and since I was only using the Monero node on it I had no idea  
**\<gingeropolous>** right, so the overarching question is monero's philosophy on un-managed nodes  
**\<gingeropolous>** (perhaps)  
**\<hyc>** if truly no one is monitoring, then the daemon can do its conversion in however many hours it takes and no one will be bothered  
**\<hyc>** if anyone is doing a health check they're gonig to wonder why it's not responding  
**\<hyc>** Aside from that I'd feel more comfortable if someone besides me has tested the current branch with migration happening  
**\<fluffypony>** I will  
**\<hyc>** we know the perf code itself, not counting the migrate bit, is working fine  
**\<fluffypony>** hyc: if I start it up with a current blockchain it'll just convert, right?  
**\<hyc>** yep  
**\<fluffypony>** ok I'll give it a spin on a few devices  
**\<fluffypony>** so then I guess the final question is whether this goes into 0.9.x or 0.10.0 ?  
**\<othe>** perf code itself i run on multiple nodes, from 32 bit arm to 64bit x86 - works absolutely flaweless here  
**\<gingeropolous>** peanut gallery here - makes more sense to call it 0.9.x . big number change seems appropriate for consensus mechanism changes (i.e., ringct)  
**\<bigreddmachine>** yeah i agree with gingeropolous in general... iterate the version on huge changes, subversion on consensus changes, and point on small changes that don't break consensus.  
**\<fluffypony>** gingeropolous: I don't disagree, I'm also leaning towards it being a point release  
**\<ArticMine>** Also if there is down time for the nodes during conversion a more gradual approach in 0.9.x is preferable  
**\<bigreddmachine>** that maintains the idea that all 0.9.x are compatible, and not compatible for 0.10.x  
**\<fluffypony>** well with a 0.9.x release everyone won't update at once  
**\<hyc>** well, they're compatible on the wire, at least  
**\<bigreddmachine>** and that's what matters in the long run... say 2-3 years from now there are lots of companies with various implementations and such, like in Bitcoin. a switch to 0.10.x indicates to them "get your stuff together or be left behind"  
**\<fluffypony>** yeah  
**\<bigreddmachine>** so might as well use that precedence earlier rather than later.  
**\<fluffypony>** ok I think that's it from my side - does anyone have anything they want to ask / add / discuss ?  
**\<smooth>** i think anything with a conversion process like that should be branded as a major/semi-major upgrade, especially since you can't easily downgrade  
**\<dEBRUYNE>** perhaps a bit about ring CT? Though hyc kind of already said something about that before the discussion  
**\<dEBRUYNE>** more specifically -> \<hyc> sounds good. looking at NobleSir's DB schema, doesn't seem like there's much new needed on the DB side of things  
**\<fluffypony>** smooth: can definitely make that clear in the release  
**\<dEBRUYNE>** oh and fluffypony, perhaps a bit about the 0MQ stuff as well?  
**\<fluffypony>** hyc is better suited to update us on RingCT  
**\<smooth>** 0mq is kind of a big issue i think, maybe leave for the next meeting  
**\<xmrpromotions>** Is omq the only/primary reason why work is still being done on master instead of dev branch?  
**\<smooth>** thats part of the whole issue of how the repo is organized and the workflow  
**\<fluffypony>** yeah I think that's a discussion we can have at the next meeting  
**\<hyc>** sorry I've got very little intelligent to say about ringct  
**\<hyc>** i've compiled the code and run the test successfully  
**\<hyc>** but I don't really think i'm in position to merge it, don't understand the pieces  
**\<moneromooo>** I'm better acquainted with monero in general, though less with the db side.  
**\<moneromooo>** And IANAC.  
**\<fluffypony>** you are not a cat ?  
**\<fluffypony>** obviously, you're a moo!  
**\<moneromooo>** That is true.  
**\<moneromooo>** Maybe we can get riddick on the job.  
**\<fluffypony>** that's riddick-ulous  
**\<moneromooo>** OK then. No cats.  
**\<moneromooo>** Thing is, I'm wary of starting a large piece of work these days, as I don't have as much free time as I used to.  
**\<dEBRUYNE_>** hyc, moneromooo: Perhaps the two of you could collaborate with NobleSir on it  
**\<bigreddmachine>** Once the meeting is adjourned, can i hijack everyone/someone's attention for 2 mins to ask a question? it's not an official dev question, but still related i guess.  
**\<othe>** just throw it out  
**\<xmrpromotions>** can I ask about multi sig? Am I right that ring ct will be a prerequisit for it? I ask because it sounds like it will be needed for bitsquare (at least to be used as intended)  
**\<othe>** no ringct is no prerequesite for multisig  
**\<othe>** and no bitshares doesnt need it  
**\<othe>** bitsquare  
**\<fluffypony>** lol bitshares  
**\<smooth>** notsquares  
**\<othe>** all they need is some gui changes like payment id support or alternatively its enough to use integrated addresses instead  
**\<othe>** and then they need support for the spendkey stuff to proof a payment, thats it  
**\<moneromooo>** Multisig happens as a byproduct of ringct withou much extra work though AIUI.  
**\<fluffypony>** yeah  
**\<xmrpromotions>** ok thank you. maybe I read about dev priorities and misinterpreted a comment about ringct coming before multi sig  
**\<bigreddmachine>** Can I get someone's opinion on something? The "incoming\_transfers" simplewallet method with "all" as the type returns a list of all transfers with in XMR coming into the wallet, including change from outgoing txs. For the wallet i've been working on, I have introduced a way to track outgoing transactions locally and store them using IndexedDB, since there’s not a good way to do that over rpc. I’d like  
**\<bigreddmachine>**  to present users with a "pseudo-ledger" so-to-speak that showed incoming txs and outgoing txs, and should add up to the balance for a wallet. Would it be correct/good/valid for me to check the returns from "incoming\_transfers" to see if any tx\_ids match those from the outgoing transfers database, and if they do match, don't display them? That would result in the displayed "incoming transfers" to only be  
**\<bigreddmachine>** transfers from another source.  
**\<moneromooo>** incoming\_transfers shows the raw outputs. So you need to subtract those coming back from the ones leaving with the same txid.  
**\<moneromooo>** But I'll add RPC for the others in the near future.  
**\<binaryFate>** moneromooo can you be more explicit, what do you intend to add?  
**\<bigreddmachine>** Well, the data i record in the database is only the amount that leaves the wallet (it is ignorant of the fact that there is change leaving and coming back). Although, come to think of it, it also is ignorant of the fee paid... hmm, okay, i'll need to think on this more  
**\<moneromooo>** RPC for getting the same info that show\_transfers displays.  
**\<binaryFate>** ok  
**\<bigreddmachine>** ^that would solve all my issues and i'd love you forever. in a manly way.  
**\<dEBRUYNE_>** othe: afaik Bitsquare needs it if you want XMR/fiat markets  
**\<othe>** altcoins are the fiat markets in bitsquares atm i think  
**\<bigreddmachine>** dEBRUYNE_: that's correct. but based on the interview on daily decrypt, i don't think he plans to have fiat markets other than BTC anytime soon. he kind of alluded to that.  
**\<bigreddmachine>** he said in the interview that if you wanted to trade an altcoin for fiat, you'd have to go through bitcoin because that's what has the best liquidity and what multisig is implemented in the market  
**\<othe>** correct  
