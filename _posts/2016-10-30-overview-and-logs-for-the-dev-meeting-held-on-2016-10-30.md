---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2016-10-30
summary: Fluffy blocks, crypto libs
tags: [dev diaries, core, crypto, 0mq]
author: dEBRUYNE / fluffypony
---

### Overview

An overview [can be found on Hello Monero](https://hellomonero.com/article/monerokovri-dev-meeting-note-highlights-2016-10-30).  

### Logs

**\<Jaquee>** it takes quite long time to open/close wallets with this mempool size. Could the mempool be saved in wallet cache?  
**\<Jaquee>** or is that a bad idea?  
**\<Jaquee>** doesnt really affect closing wallets. my bad. but opening takes longer than normal i think?  
**\<realsony>** test  
**\<moneromooo>** You can test that easily by logging something before and after loading.  
**\<moneromooo>** It's in src/cryptonote_core/tx_pool.cpp  
**\<hyc>** is it mtg time yet?  
**\<moneromooo>** Yes  
**\<pero>** romero dev conference  
**\<Jaquee>** all right. the gui def takes longer time top open because of mempool. And it also waits for mempool to be synced before closing.  
**\<hyc>** why is that different from CLI behavior?  
**\<Jaquee>** not sure yet  
**\<Jaquee>** opening seems the same  
**\<pero>** mooo you're a whitespace nazi  
**\<Slack> \<nanoakron>** Is there a way that git PRs could be run through a common parser on the server-side to standardise any whitespace?  
**\<moneromooo>** Not really, since it'll invariably try to reformat irrelevant stuff.  
**\<moneromooo>** That said, if it could run on the diffs, it might work.  
**\<Slack> \<nanoakron>** And WRT mempool size - would fluffy blocks as standard across the network (e.g. if included in HF4) make things better?  
**\<revler1082>** i don't think so, it just helps with not sending txs again when a block is found, the mempool size is unaffected  
**\<moneromooo>** So... if the pony isn't here... anyone wants to say something dev related ?  
**\<Slack> \<nanoakron>** OK yes I see. But it should allow us to avoid some of the issues that bitcoin is having - if all mempools are synched and a miner wants to eat all the transactions into a single megablock, it would propagate much more quickly than without  
**\<Slack> \<nanoakron>** I’m a tinkerer rather than a dev :slightly_smiling_face:  
**\<revler1082>** yea so the bigger the blocks (assuming mempools are aligned), the greater the savings  
**\<Slack> \<nanoakron>** Which would be an extra cool reason for making fluffy blocks compulsory in a hard fork  
**\<revler1082>** hmm, I saw monero-moo's latest comments on the fluffy-block stuff, so I was going to go through those, but I don't have much else.  
**\<revler1082>** if you guys would like me to change anything, etc, feel free to ask/comment  
**\<Slack> \<nanoakron>** My only ‘dev issue’ is with the growing number of dead issues on github  
**\<Slack> \<nanoakron>** We should probably only be at 60 or so live issues  
**\<moneromooo>** I think at this point, it's testing. Especially that one about the array of txes noit in the pool but not requested again.  
**\<realsony>** may i as what a dead issue is?  
**\<realsony>** ask  
**\<Slack> \<nanoakron>** One that’s been solved  
**\<realsony>** ty  
**\<dEBRUYNE>** monero-core has a lot of those too fwiw  
**\<dEBRUYNE>** I can give you a list for monero-core fluffypony   
**\<hyc>** typically I would not close an issue until the fix is in a tagged release  
**\<hyc>** (at least, on other projects.)  
**\<pero>** ^ +1  
**\<Slack> \<nanoakron>** Or where the codebase has evolved onwards but the original person who has raised the issue has not tested to see if it’s still active  
**\<pero>** or at the very least merged  
**\<Slack> \<nanoakron>** @hyc can I ask - completely separate issue, have you considered offering your skills to port Bitcoin Unlimited to LMDB? They’ve got $500k in the bank...  
**\<hyc>** I hadn't heard anything about that nanoakron  
**\<Slack> \<nanoakron>** @hyc ask around - I’m sure their users would want to offer an even better reason to switch their node software away from core  
**\<ArticMine>** Bitcoin unlimited will be insecure once the emission runs out  
**\<Slack> \<nanoakron>** And I think the entire ecosystem will benefit  
**\<Slack> \<nanoakron>** As for dead issues - there are still ones hanging around from before 0.10.0 which either haven’t been updated by their issuers or have been addressed  
**\<hyc>** would definitely be a good idea to go thru and close any that havve been fixed  
**\<revler1082>** @moneromooo i had left a comment in the code about whether I was double verifying since all the transactions were already in the pool, anything on that?  
**\<revler1082>** could speed things up a bit  
**\<moneromooo>** I'll have a look soon. String to grep for ?  
**\<revler1082>** "Do I need to do this" lol  
**\<moneromooo>** ok  
**\<Slack> \<nanoakron>** lol  
**\<Slack> \<malmen>** How is 0qm work?  
**\<moneromooo>** proxmr: you'll know in ~30 min when anonimal's around for the kovri meeting.  
**\<moneromooo>** tewinget: around ?  
**\<Slack> \<nanoakron>** So the big themes I see in current development are: ZMQ, GUI, final touches to RingCT (?), changing the crypto library, changing the logging system and fluffy blocks. Any others?  
**\<Slack> \<malmen>** What is fluffy blocks? I am missing something here  
**\<iDunk>** dynamic fees  
**\<revler1082>** @mailmen just a compact block implementation for monero  
**\<moneromooo>** It's just sending txes from a block only if a peer doens't have them already.  
**\<Slack> \<malmen>** Hmmmm, so, instead of sending all tx the block will contain only the reference of the tx that is in another block?  
**\<Slack> \<nanoakron>** No, reference to the local mempool  
**\<Slack> \<malmen>** Ahh  
**\<revler1082>** no, it just sends the tx hashes, and since most nodes have the transactions in the mempool, it just gets the full tx from there  
**\<Slack> \<nanoakron>** And if it’s not in there then you receive the missing Tx  
**\<revler1082>** if it's missing any, it'll ask for those  
**\<Slack> \<malmen>** Nice  
**\<Slack> \<nanoakron>** Really nice :slightly_smiling_face:  
**\<Slack> \<malmen>** It is implemented in any place already or we will be the first ones to have it?  
**\<Slack> \<nanoakron>** Bitcoin has it  
**\<revler1082>** yep, multiple implementations, xthin/compact blocks  
**\<Slack> \<nanoakron>** but because they’re a dirty mix of hard and soft forked rules, and have a stupid mempool policy preventing network-wide synchronisation, they won’t see as much benefit as we will  
**\<revler1082>** there's some way to save even more space based on some of the stuff you guys shared with me, where you send just some prefix of the tx_hash since there's unlikely to be collisions, but I think sacrificing some space to keep things simple is ok  
**\<Slack> \<malmen>** Hmmm, nice... And about the way the db save the blocks, I was thinking in the other day  
**\<Slack> \<nanoakron>** @revler1082 you should contact the original devs of XThin and ask them about those issues :slightly_smiling_face:  
**\<moneromooo>** I don't know how the bitcoin ones work, but given what you wrote, I'd send the index of the tx you don't have. Possibly differential encoded.  
**\<Slack> \<nanoakron>** @hyc is your db guy  
**\<Slack> \<malmen>** Instead of the block on the the database save the full tx, can it be save the reference to other block with tx? It will use more disk io and cpu,  but can save space  
**\<revler1082>** thanks @moneromooo that's a good one  
**\<moneromooo>** I'm guessing there might be a good reason why they don't do that though.  
**\<Slack> \<nanoakron>** Well that’s an interesting point - if you’re pulling in other transactions to build your ring signature, do you do that from the mempool or from historic data stored in the local db? I’m not sure myself  
**\<ArticMine>** The idea if I understand this is to save bandwidth  
**\<revler1082>** @ArticMine correct  
**\<revler1082>** not much difference now, but when monero takes over the world, savings should increase  
**\<ArticMine>** You pull from the historic data not the mempool  
**\<Slack> \<nanoakron>** So not many dev issues today which is good. Just really revler and moneromooo co-reviewing fluffy block code, and maybe closing old issues?  
**\<moneromooo>** We can't close old issues. We can just make lists and wait for fluffypony to have time :)  
**\<Slack> \<nanoakron>** True  
**\<revler1082>** What's the crypto-lib replacement? I could maybe help with that, I mean my crypto skills are le garbage, but I can change function calls, lol  
**\<Slack> \<nanoakron>** Would you think about the logging system in that case? The crypto currently works well enough  
**\<moneromooo>** The main problem is choosing the best one. And that needs people who know them. The pony does I think.  
**\<revler1082>** logging or crypto? or both?  
**\<Slack> \<nanoakron>** Moneromooo, do you have any thoughts on where revler can best help after fluffy blocks are finished?  
**\<moneromooo>** We'll need some crypto lib with a good PRNG, to replace the keccak construction we use now.  
**\<Slack> \<nanoakron>** https://github.com/monero-project/monero/issues/1271  
**\<Slack> \<nanoakron>** That’s what we’re referencing here revler - already some good discussion to review there  
**\<moneromooo>** Wherever revler1082 is comfortable, really. If the previous bit changed was network stuff, then maybe more of it ?  
**\<Slack> \<nanoakron>** What do you think the issues are with current network code?  
**\<moneromooo>** fluffypony wanted to switch the P2P protocol to... er... something... name escapes me.  
**\<Slack> \<nanoakron>** ;)  
**\<moneromooo>** ZMTP.  
**\<Slack> \<nanoakron>** ooh…sounds fancy. How about maybe helping with ZMQ??  
**\<iDunk>** jesus  
**\<moneromooo>** It's based on epee, from the CN people.  
**\<Slack> \<nanoakron>** @iDunk you rang?  
**\<revler1082>** all sounds good, i'll look into it and help where I can  
**\<moneromooo>** The P2P code is really hard to understand, though that is subjective, mayube others like it more.  
**\<iDunk>** yeah, I'm on the verge of really saying something  
**\<moneromooo>** There are a few bugs, mainly that it leaks sockets.  
**\<revler1082>** if i ever get my spaces and tabs passed @moneromooo  
**\<Slack> \<nanoakron>** hehe  
**\<Slack> \<nanoakron>** What’s up iDunk?  
**\<moneromooo>** Well, it boils down to "don't change what you don't change".  
**\<iDunk>** nanoakron: take it easy, man  
**\<moneromooo>** But I agree I may be a bit too sold on clean diffs without extraneous stuff.  
**\<moneromooo>** Those things are easy to fix though.  
**\<revler1082>** lol, @moneromooo just messin, I want to kick myself when I push and see those in the diff, like mother ..  
**\<Slack> \<nanoakron>** Revler wants to help with network related stuff and I’m just saying what’s in the codebase that is being worked on  
**\<moneromooo>** And maybe helping with 0MQ, I guess it'll need some testing and fixing once tewinget's done with it to a point where it can be merged.  
**\<fluffypony>** yes ZMTP  
**\<moneromooo>** pony!  
**\<Slack> \<nanoakron>** Woo!  
**\<fluffypony>** apologies  
**\<fluffypony>** had the meeting down for 7pm not 6pm  
**\<Slack> \<nanoakron>** Do you guys change your clocks today down there in SA?  
**\<Slack> \<nanoakron>** Ours went back last night. It’s now dark at 5pm. Misery.  
**\<fluffypony>** no, we don't do DST  
**\<fluffypony>** OH that's why  
**\<fluffypony>** everything is confusing  
**\<DaveyJones>** thought sth like this :p  
**\<fluffypony>** re: closing issues  
**\<fluffypony>** I'm happy to close them from lists  
**\<fluffypony>** and I don't think we need to wait for them to be in a tagged release per se  
**\<Slack> \<nanoakron>** Cool  
**\<fluffypony>** have we discussed the compact blocks thing ?  
**\<fluffypony>** I see there's some backlog on it  
**\<Slack> \<nanoakron>** Briefly  
**\<pero>** what prevents dupes then?  
**\<pero>** might be better to tag issues with 'fixed in next release' or something and keep them open?  
**\<revler1082>** all the verification is the asme, it's just saving from re-sending txs?  
**\<fluffypony>** pero: dupe issues?  
**\<revler1082>** oh  
**\<pero>** yea  
**\<fluffypony>** lol  
**\<fluffypony>** revler1082: I was also confused  
**\<pero>** sorry =/  
**\<fluffypony>** np  
**\<fluffypony>** pero raises a good point  
**\<fluffypony>** I can flag them instead  
**\<moneromooo>** If people don't search the bugs list, they'll file a dupe whether it's closed or open, no ?  
**\<Slack> \<nanoakron>** Take https://github.com/monero-project/monero/issues/1256 as an example  
**\<Slack> \<nanoakron>** May be a dupe, may not be...  
**\<moneromooo>** I'm fine with bugs being opened when in doubt.  
**\<Slack> \<nanoakron>** @moneromooo - yes they will  
**\<dEBRUYNE>** \<fluffypony> everything is confusing <= Oh I didn't notice too  
**\<pero>** but they likely won't experience the issue if it's in a release  
**\<dEBRUYNE>** That link I posted on reddit says 17:00 Europe time lol  
**\<fluffypony>** lol  
**\<fluffypony>** ok so re: compact blocks  
**\<revler1082>** got some fixes and ideas from @moneromooo that i'm gonna try  
**\<fluffypony>** do we put it in a fork wrapper so that it only activates in Jan? or are we using the versionbits and making it available from now?  
**\<revler1082>** only big thing is do we want backwards compatibility and a little messier code, or alter existing stuff/cleaner?  
**\<Slack> \<nanoakron>** The good thing about hard forks is that we don’t need backwards compatibility  
**\<moneromooo>** I'd rather have it in testnet first.  
**\<Slack> \<nanoakron>** Yes  
**\<revler1082>** definitely  
**\<fluffypony>** ok let's finish the compact blocks discussion  
**\<fluffypony>** PowerFlower: pleasure :)  
**\<moneromooo>** I'd like to know what the changes are going to be with sodium/NaCl/cryptocpp/whatever. I don't know them, so I don't have useful input.  
**\<Jaquee>** PowerFlower: Thank you. bye  
**\<moneromooo>** Compact blocks: pretty good, not much to change, will need lots of testing though.  
**\<revler1082>** yep  
**\<fluffypony>** re: backwards compatibility, I don't think we need to support an environment where compact blocks isn't supported - a node that doesn't want to use it can just never claim to already have txs  
**\<dEBRUYNE>** revler1082: Have you tested it on a personal private testnet?  
**\<revler1082>** yea, and on mainnet with the backwards stuff  
**\<dEBRUYNE>** oh cool  
**\<fluffypony>** since we have a testnet reorg coming up we can use the opportunity to test wrapping it in a fork  
**\<moneromooo>** We need to have both block types in the code at the same time though.  
**\<moneromooo>** So if we do, conditional use isn't much more.  
**\<moneromooo>** BTW, syncing from scratch uses a different set of messages, right ?  
**\<revler1082>** yes i believe so  
**\<moneromooo>** A possible optimization would be to always include txes with too low fee, since these would have been mined by the local host.  
**\<realsony>** So men i read everything, didnt understand 97% :) convinces me that XMR has the best alt dev team :)  
**\<moneromooo>** But that's really not needed now.  
**\<revler1082>** yea, there's a few tweaks we can make, i like your send tx index instead of hash for missing  
**\<moneromooo>** Yes, it sounds like a no brainer, so I'm suspicious that bitcoin is not doing it for non obvious reasons...  
**\<moneromooo>** fluffypony: do you know why they use siphash hashes and not indices in the block ?  
**\<moneromooo>** (since you linked to that doc, I think you might know :P)  
**\<fluffypony>** moneromooo: I have no idea  
**\<ontario>** noob suggestion: for the next meeting how about disabling other chat unless dev when the meeting bot started?  
**\<fluffypony>** btcdrak might have an idea  
**\<fluffypony>** ontario: if the room goes +m then only people with +v can speak, and then it becomes a closed meeting  
**\<fluffypony>** better for it to stay open, we can handle the occasional interruption  
**\<btcdrak>** yeah that's what to do  
**\<ontario>** lol sry dont know much about irc things  
**\<fluffypony>** btcdrak: moneromooo had a question about compact blocks, and why it uses siphash hashes instead of indices  
**\<moneromooo>** (note, I know very little about bitcoin, so it could be tx indices don't make sense in bitcoin)  
**\<btcdrak>** moneromooo: ask in #bitcoin-core-dev  
**\<moneromooo>** OK, I will, thanks.  
**\<i2p-relay> {-anonimal}** moneromooo: re: crypto, https://cryptopp.com/ has a list of all supported schemes. I know monero will have to keep supercop/ref10 impl but most others look covered (though I can't say *all* because I haven't yet looked at all monero crypto yet)  
**\<fluffypony>** my thinking is that we can offload the sensitive stuff to TweetNaCl (ie. crypto_ops), as it's currently using SUPERCOP ref10  
**\<fluffypony>** then we offload everything else to cryptocpp, including random  
**\<fluffypony>** and then *if* we're seeing performance bottlenecking in something specific, we can use ASM implementations *only* in the places it's bottlenecking  
**\<moneromooo>** Since we use part of... libsodium ? Does this not do everything we need ?  
**\<fluffypony>** moneromooo: the libsodium source isn't even complete, so we'd have to make changes anyway  
**\<fluffypony>** libsodium isn't as full-featured as cryptocpp anyway  
**\<fluffypony>** and not as audited as TweetNaCl  
**\<moneromooo>** Anything else to talk about ?  
**\<fluffypony>** well  
**\<i2p-relay> {-anonimal}** So there won't be a one-size-fits-all crypto solution, eh?  
**\<fluffypony>** btw moneromooo  
**\<fluffypony>** https://en.wikipedia.org/wiki/NaCl_(software)  
**\<fluffypony>** so TweetNaCl implements all of those  
**\<fluffypony>** as does libsodium  
**\<fluffypony>** that libsodium can do a handful of extra things is neither here nor there  
**\<fluffypony>** https://en.wikipedia.org/wiki/Comparison_of_cryptography_libraries  
**\<moneromooo>** I'm curious to know why they made many versions of hte same thing.  
**\<fluffypony>** the advantage is that cryptocpp can do a TON of stuff, it's FIPS 140 validates, and it uses the Boost license  
**\<moneromooo>** That sounds like a recipe for pita.  
**\<fluffypony>** moneromooo: of NaCl?  
**\<moneromooo>** Yes.  
**\<fluffypony>** they only made NaCl, and then they made TweetNaCl specifically to be extremely simple and auditable (so that it could be formally verified)  
**\<fluffypony>** NaCl was forked and thus begat libsodium  
**\<fluffypony>** so the original NaCl reference implementation has been replaced by libsodium, effectively  
**\<moneromooo>** crypto++ is the same as cryptopp ?  
**\<fluffypony>** yes  
**\<fluffypony>** also has AES-NI support, which is great  
**\<fluffypony>** doesn't have ARMv8 crypto support yet  
**\<fluffypony>** "Unix (OpenBSD, Linux, OS X, etc.), Win32, Win64, Android, iOS, ARM"  
**\<Slack> \<nanoakron>** Not may Cortex-A53 ARMv8 systems in the wild seem to have hardware crypto so far…apparently they need to pay for an extra license to enable it  
**\<Slack> \<nanoakron>** Pine64 may do, but I’ve not bought one yet  
**\<pero>** pine64 does  
**\<moneromooo>** So if we were to switch to cryptopp, would be still keep the existing low level crypto code, or just use for new stuff ?  
**\<moneromooo>** Though I guess we have a readily available test suite actually :)  
**\<i2p-relay> {-anonimal}** fluffypony: I believe there is limited(?) armv8 support, or do you mean specifically aes-ni?  
**\<i2p-relay> {-anonimal}** \* going off of memory, would need to confirm  
**\<fluffypony>** anonimal: it's not NB right now  
**\<fluffypony>** moneromooo: we'd switch  
**\<fluffypony>** even if it's piecemeal  
**\<Slack> \<nanoakron>** Sorry to ask about stuff that’s already been covered - what’s the final decision for integrating fluffy blocks? Implement as-is on testnet, then with version flags for 0.10.0, then with forking code for January, then finally abandon backwards compatible code at HF 5?  
**\<Slack> \<nanoakron>** So that all nodes at HF5 will use compact blocks (of whatever improved flavour comes along in the interim)  
**\<pigeons>** its not "forking code" though right?  
**\<fluffypony>** no it's not  
**\<Slack> \<nanoakron>** So it could in fact be made compulsory at HF 4 without backwards compatible code?  
**\<fluffypony>** and I mistakenly forgot that we need to keep both block formats anyway for sync up  
**\<fluffypony>** so not worth putting it in an HF wrapper  
**\<Slack> \<nanoakron>** Unless we checkpoint at the next HF...  
**\<moneromooo>** Not for 4. Seriously...  