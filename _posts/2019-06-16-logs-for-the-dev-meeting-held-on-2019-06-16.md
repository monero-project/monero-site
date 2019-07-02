---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2019-06-16
summary: Development status, Code & ticket discussion, payment ID, CLSAG, and miscellaneous
tags: [dev diaries, core, crypto]
author: el00ruobuob / rehrar
---

# Logs  

**\<rehrar>** Meeting time! Who all is here?  
**\<rbrunner>** Hi all  
**\<hyc>** hey  
**\<fullmetalScience>** Hi  
**\<dEBRUYNE>** Here  
**\<rehrar>** 2. Brief review of what's been completed since the previous meeting  
**\<hyc>** v0.14.1.0 is out in the world  
**\<rbrunner>** CLI so far, yes ...  
**\<rehrar>** so I hear. And I even hear deterministic builds are doing their thing ok  
**\<jtgrassie>** hi  
**\<hyc>** they are being deterministic now, yes  
**\<dEBRUYNE>** Some small improvements still for deterministic builds, but I'd argue it was a excellent first round :P  
**\<rehrar>** nothing left to be done on the CLI front then for this little release?  
**\<rehrar>** but then also, looking to the next release, what's going on, do we know?  
**\<rehrar>** for 0.15  
**\<rbrunner>** little release is actually a pretty big release  
**\<rbrunner>** feature-wise  
**\<hyc>** there may be a few small bug reports for v0.14.1. might want a v0.14.1.1  
**\<dEBRUYNE>** I think the intention was to release it way earlier this time, because we can already add all the consensus changes early on  
**\<dEBRUYNE>** Unless CLSAG is also going to go in I guess  
**\<moneromooo>** It'll depend on whether it gets a review I think.  
**\<hyc>** Is 0.15 the October release?  
**\<moneromooo>** (in time)  
**\<rehrar>** sarang suraeNoether, can you speak to the potential timeline of review for CLSAG?  
**\<dEBRUYNE>** hyc: Yeah  
**\<rehrar>** dsc\_ selsta dEBRUYNE anything from GUI?  
**\<dEBRUYNE>** hyc: So we have about four months left I guess  
**\<dEBRUYNE>** GUI v0.14.1.0 has been tagged and fluffypony is working on the builds  
**\<hyc>** so when are we expecting to freeze 0.15 ?  
**\<dEBRUYNE>** rehrar: Some new stuff for the GUI:  
**\<dEBRUYNE>** - White theme  
**\<dEBRUYNE>** - Addressbook redesign  
**\<dEBRUYNE>** - History redesign  
**\<dEBRUYNE>** - Trezor and Ledger Nano X support  
**\<dEBRUYNE>** - Fiat price conversion  
**\<dEBRUYNE>** - macOS fullscreen support  
**\<dEBRUYNE>** Also an update checker + Hindi translation  
**\<dEBRUYNE>** And xiphon did a lot of work on improving the communication between the (integrated) daemon and the GUI  
**\<rehrar>** oooooh. Looks juicy. thanks dEBRUYNE  
**\<rehrar>** so it'll be faster?  
**\<dEBRUYNE>** hyc: I guess that is going to depend on whether we want to add CLSAG. If not, we could do a first 0.15 release after RandomX has been merged (e.g. in August)  
**\<dEBRUYNE>** And then another point release a month before the fork  
**\<dEBRUYNE>** rehrar: Yes and less 'laggy'  
**\<moneromooo>** Does someone want to review the share-rpc (pay for RPC service) branch ? :)  
**\<moneromooo>** It goes well with a CPU friendly PoW...  
**\<hyc>** I may take a look after I get back from konferenco  
**\<rehrar>** I assume we don't have any core team here?  
**\<moneromooo>** \\o/  
**\<rehrar>** but if not, we can still kind of talk about Payment ID stuff  
**\<dEBRUYNE>** Btw moneromooo, you already coded up a rough implementation of CLSAG right?  
**\<rehrar>** which is number 4.  
**\<moneromooo>** Yes.  
**\<moneromooo>** Well, sarang did, and I plugged it in.  
**\<dEBRUYNE>** rehrar: That's kind of my fault, I forgot to ping them in advance (I did earlier today, but probably too late :/)  
**\<dEBRUYNE>** Anyway, we can still discuss it, as there is plenty of opinions on the meta ticket  
**\<hyc>** rough? is it something you'd deploy for real, and what we'd submit to auditors to review?  
**\<moneromooo>** Both, assuming the review passes.  
**\<hyc>** ok  
**\<dEBRUYNE>** hyc: With 'rough' I kind of meant that, as far as I could see, it wasn't fully finished yet  
**\<moneromooo>** If you have suggestions for changes, go for it.  
**\<dEBRUYNE>** moneromooo: I just thought it wasn't fully finished yet, if it is I stand corrected :-P  
**\<moneromooo>** Well, I don't know what you've seen before, but AFAIK it is finished now, unless comments.  
**\<rehrar>** alright, let's discuss the whole PID thing then, if we can, with the people represented here giving their opinions as well.  
**\<dEBRUYNE>** I see, thanks for clarifying  
**\<rehrar>** dEBRUYNE: is correct that actually  many of core had made their opinions known on the meta discussion  
**\<rehrar>** can you link that real fast dEBRUYNE ?  
**\<moneromooo>** Did any exchange/merchant switch from long payment ids since... half a year ago, say ?  
**\<dEBRUYNE>** I think some smaller ones did, but the big ones (Bittrex, Bitfinex, Binance) did not  
**\<dEBRUYNE>** rehrar: sure  
**\<dEBRUYNE>** smooth: https://github.com/monero-project/meta/issues/356#issuecomment-500187077 & https://github.com/monero-project/meta/issues/356#issuecomment-501168062  
**\<dEBRUYNE>** binaryFate: https://github.com/monero-project/meta/issues/356#issuecomment-499968785  
**\<rehrar>** at the end of the thread in particular, ArticMine brings up his revised opinion about potentially looking at removing tx\_extra  
**\<dEBRUYNE>** ArticMine: https://github.com/monero-project/meta/issues/356#issuecomment-501347185  
**\<ErCiccione[m]>** some big ones like kraken already use subadresses moneromooo, iirc  somebody as a list of the status of some exhanges and services  
**\<dEBRUYNE>** https://github.com/monero-project/meta/issues/356#issuecomment-499936642 & https://github.com/monero-project/meta/issues/356#issuecomment-499948904  
**\<rbrunner>** Yeah, but it would be interesting to see whether somebody \*switched\*  
**\<ErCiccione[m]>** maybe sgp\_?  
**\<dEBRUYNE>** rehrar: As far as I can see, people don't like temporary banning payment IDs by parsing tx\_extra  
**\<dEBRUYNE>** As it is essentially a slippery slope  
**\<dEBRUYNE>** So that leaves us with (i) Phase them out by removing all support from the official software or (ii) banning the tx\_extra field entirely  
**\<rehrar>** dEBRUYNE: agreed. I see that reflected as well.  
**\<rehrar>** yes ^  
**\<sgp\_>** I had a list in January, not sure if it is up-to-date anymore  
**\<rehrar>** can I ask people to give opinions on the above two options presented by dEBRUYNE?  
**\<dEBRUYNE>** rbrunner: The announcement has only been up for 10 days though  
**\<rehrar>** I particularly want to hear arguments for or against removing tx\_extra  
**\<rbrunner>** dEBRUYNE: Yes, saw it, but we make noises a lot longer :)  
**\<sgp\_>** rehrar: I have personally head some arguments against removing tx\_extra from legacy financial services  
**\<dEBRUYNE>** The arguments for are, for example, (i) a clean and definitive way to phase out long payment IDs and (ii) improves fungibility  
**\<sgp\_>** Zcash has an encrypted memo field that they use to claim support for many traditional remittance services  
**\<rehrar>** dEBRUYNE: I think (ii) is kind of massive, given that's our shtick  
**\<dEBRUYNE>** moneromooo: I vaguely remember you working on some kind of encrypted memo field too, is that correct?  
**\<sgp\_>** ftr I only support parsing for current payment ID behavior to force services to switch. I am not for the removal of tx\_extra in its entirety  
**\<dsc\_>** \< rehrar> dsc\_ selsta dEBRUYNE anything from GUI? \<== Past 4 days been working on development related tooling to support QML development, this is unrelated to my CCS  
**\<moneromooo>** I have a partial patch for this somewhere. I stopped because it's a bit chicken and egg since you need tx tx key to decrypt the rest and I was not sure what to do yet.  
**\<rbrunner>** Likewise. Erasing tx\_extra completey is going overboard somehow for me  
**\<rehrar>** sgp\_ rbrunner are there any other reasons for keeping it around?  
**\<sgp\_>** rehrar: mostly flexibility  
**\<dEBRUYNE>** sgp\_: How is that field used exactly in that context?  
**\<rehrar>** and is there a good reason why something like it can't be kept track of externally via third party, and why it needs to be on the base currency?  
**\<rbrunner>** Up to a point, it should be possible for the users of the currency to do like they want ... to a certain degree, with a single field  
**\<sgp\_>** See "what people will do with this" https://electriccoin.co/blog/encrypted-memo-field/  
**\<dEBRUYNE>** On the other hand, do we want to give people the ability to potentially hurt privacy of other participants on the network?  
**\<rbrunner>** And who knows, maybe one day we will have some emergency and want to put something in there ourselves. A currency with exactly zero flexibility ... I don't know  
**\<sgp\_>** When I was doing payment ID research back in January, someone specifically asked that tx\_extra remained for this flexibility  
**\<rehrar>** let me look at the dollar. Does the dollar have this field?  
**\<rbrunner>** Marking one's own txs is quite a small privacy risks for others, if you ask me  
**\<rehrar>** or are memos and stuff kept and integrated in dollar management software?  
**\<rbrunner>** Yes, bank transfers have something like a short memo, right?  
**\<sgp\_>** rehrar: I'm not an expert here, I'm just relaying some information to say the flexibility could be useful  
**\<rehrar>** rbrunner: sure, but that isn't built into the dollar bill itself  
**\<rehrar>** which is my point  
**\<rehrar>** is this necessary as a part of Monero itself? Or can monero management software be built to have these memos?  
**\<rehrar>** My initial thoughts are the latter  
**\<rbrunner>** Hmm, I think that comparison limps a little ..  
**\<sgp\_>** my personal opinion is that the flexibility shouldn't be removed unless there's a problem, and we should try to address that more head-on. If we already tried to kill payment IDs and they used a different format in tx\_extra, that would be one thing. But we're in a situation now where we are trying it for the first time and I think a simple parsing would be successful at making people switch over  
**\<rbrunner>** Uh, no, several incompatible memo transfer systems will crop up for sure  
**\<rbrunner>** Why not fill \*every\* tx\_extra with fake data, if that's such a problem?  
**\<rehrar>** hyc, dEBRUYNE, moneromooo? care to chime in at all?  
**\<moneromooo>** Not really.  
**\<sgp\_>** rbrunner: that's basically what zcash does with the encrypted memo field  
**\<moneromooo>** We've gone over that enough for me.  
**\<rbrunner>** Yes, and we now with the short payment ids, right?  
**\<hyc>** as a protocol guy I tend to favor having extensiblity  
**\<hyc>** there's certainly a risk of dumping tons of spam into the chain with a totally open-ended extention field  
**\<hyc>** might want to constrain it to "any individual tx\_extra can't be greater than N bytes" etc  
**\<moneromooo>** That could be made to weigh extra for the fee fwiw.  
**\<hyc>** N=512, 1024, dunno  
**\<rehrar>** isn't that what minergate does when they find a block or is that somethign different?  
**\<rehrar>** I recall somebody saying they add a bunch of weird data  
**\<moneromooo>** They did.  
**\<dEBRUYNE>** sgp\_: Lots of people are opposed to parsing though, I don't think that is going to find consensus  
**\<rehrar>** alright well, anything else to say on this topic?  
**\<rehrar>** we can continue in the issue  
**\<dEBRUYNE>** rehrar: In general I am kind of ambivalent, I think we can achieve a lot by removing all functionality from the software  
**\<sgp\_>** dEBRUYNE: I understand, I just personally think there is some middle ground that doesn't need to include full tx\_extra. I think we've exhausted this topic for now  
**\<dEBRUYNE>** Currently, we removed it, but it is easily to reenable  
**\<sgp\_>** \*full tx\_extra removal  
**\<luigi1111>** instead of command line, move to compile time  
**\<dEBRUYNE>** Next step could be that they need to add code theirselves for payment ID support  
**\<hyc>** VARIANT\_TAG(binary\_archive, cryptonote::tx\_extra\_merge\_mining\_tag, TX\_EXTRA\_MERGE\_MINING\_TAG);  
**\<rbrunner>** But the code would be missing at the people's systems, where the exchanges could not get it in again  
**\<hyc>** if tx\_extra is needed to support merge mining then removing it is kinda out of the question, no?  
**\<dEBRUYNE>** rbrunner: Yes, that as well  
**\<dEBRUYNE>** But there may be some third party wallets that retain support  
**\<rbrunner>** As long as they don't threaten to fork and come up with MoneroLPID (long payment id variant) ...  
**\<rehrar>** alright, let's go ahead and move along  
**\<rehrar>** there is also    discussion blocked out for this meeting  
**\<rehrar>** but we talked about it a bit, and I don't see any MRL people here  
**\<hyc>** seems like there are a lot of current valid uses for tx\_extra, so you can't remove it outright  
**\<rehrar>** still want to discuss, or table?  
**\<hyc>** CLSAG can wait for next meeting I think  
**\<rehrar>** ok  
**\<rehrar>** any additional items?  
**\<hyc>** surae is busy taking care of konferenco now anyway  
**\<rehrar>** code/ticket discussion?  
**\<moneromooo>** Anyone else than hyc wants to review share-rpc ? :)  
**\<moneromooo>** Or even use it as backend to add pay-for-downloading-torrents or whatever.  
**\<rehrar>** I lack the skills :)  
**\<rehrar>** \*:(  
**\<rehrar>** alright everyone, I think we can call it here  
**\<rehrar>** two weeks from now?  
**\<rehrar>** thanks for coming! have a good couple weeks.  
