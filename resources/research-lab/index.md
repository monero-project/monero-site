---
layout: custom
title: "Monero Research Lab"
---
<div class="container description">
<p>Monero is not only committed to making a fungible currency, but also to continued research into the realm of financial privacy as it involves cryptocurrencies. Below you'll find the work of our very own Monero Research Lab, with more papers to come.</p>
</div>

<section class="container">
            <div class="row">
                <!-- left two-thirds block-->
                <div class="left two-thirds col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    <div class="info-block research-paper">
                        <div class="row center-xs">
                            <div class="col"><h2>Monero Research Lab Papers</h2></div>
                        </div>
                        <div class="tab">
                              <input id="tab-one" type="checkbox" name="tabs" class="accordion" checked="checked">
                              <label for="tab-one" class="accordion">MRL-0001: A Note on Chain Reactions in Traceability in CryptoNote 2.0</label>
                              <div class="tab-content">
                                <p><strong>Abstract:</strong> This research bulletin describes a plausible attack on a ring-signature based
                                    anonymity system. We use as motivation the cryptocurrency protocol CryptoNote
                                    2.0 ostensibly published by Nicolas van Saberhagen in 2012. It has been
                                    previously demonstrated that the untraceability obscuring a one-time key pair can
                                    be dependent upon the untraceability of all of the keys used in composing that
                                    ring signature. This allows for the possibility of chain reactions in traceability
                                    between ring signatures, causing a critical loss in untraceability across the whole
                                    network if parameters are poorly chosen and if an attacker owns a sufficient
                                    percentage of the network. The signatures are still one-time, however, and any
                                    such attack will still not necessarily violate the anonymity of users. However, such
                                    an attack could plausibly weaken the resistance CryptoNote demonstrates against
                                    blockchain analysis. This research bulletin has not undergone peer review, and
                                    reflects only the results of internal investigation.
                                    <br>
                                    <br>
                                    <a target="_blank" href="https://lab.getmonero.org/pubs/MRL-0001.pdf">Read Paper</a>
                               </p>
                              </div>
                            </div>
                            <div class="tab">
                              <input id="tab-two" type="checkbox" name="tabs" class="accordion">
                              <label for="tab-two" class="accordion">MRL-0002: Counterfeiting via Merkle Tree Exploits within Virtual Currencies Employing the CryptoNote Protocol</label>
                              <div class="tab-content">
                                <p><strong>Abstract:</strong> On 4 September 2014, an unusual and novel attack was executed against the
                                    Monero cryptocurrency network. This attack partitioned the network into two
                                    distinct subsets which refused to accept the legitimacy of the other subset. This
                                    had myriad effects, not all of which are yet known. The attacker had a short
                                    window of time during which a sort of counterfeiting could occur, for example.
                                    This research bulletin describes deficiencies in the CryptoNote reference code
                                    allowing for this attack, describes the solution initially put forth by Rafal Freeman
                                    from Tigusoft.pl and subsequently by the CryptoNote team, describes the current
                                    fix in the Monero code base, and elaborates upon exactly what the offending
                                    block did to the network. This research bulletin has not undergone peer review,
                                    and reflects only the results of internal investigation.<br>
                                    <br>
                                    <a target="_blank" href="https://lab.getmonero.org/pubs/MRL-0002.pdf">Read Paper</a></p>
                                    
                              </div>
                            </div>
                            <div class="tab">
                              <input id="tab-three" type="checkbox" name="tabs" class="accordion">
                              <label for="tab-three" class="accordion">MRL-0003: Monero is Not That Mysterious</label>
                              <div class="tab-content">
                                <p><strong>Introduction:</strong> Recently, there have been some vague fears about the CryptoNote source code and
                                    protocol floating around the internet based on the fact that it is a more complicated
                                    protocol than, for instance, Bitcoin. The purpose of this note is to try and clear
                                    up some misconceptions, and hopefully remove some of the mystery surrounding
                                    Monero Ring Signatures. I will start by comparing the mathematics involved in
                                    CryptoNote ring signatures (as described in [CN]) to the mathematics in [FS], on
                                    which CryptoNote is based. After this, I will compare the mathematics of the ring
                                    signature to what is actually in the CryptoNote codebase.<br>
                                    <br>
                                    <a target="_blank" href="https://lab.getmonero.org/pubs/MRL-0003.pdf">Read Paper</a></p>
                              </div>
                            </div>
                            <div class="tab">
                              <input id="tab-four" type="checkbox" name="tabs" class="accordion">
                              <label for="tab-four" class="accordion">MRL-0004: Improving Obfuscation in the CryptoNote Protocol</label>
                              <div class="tab-content">
                                <p><strong>Abstract:</strong> We identify several blockchain analysis attacks available to degrade the
untraceability of the CryptoNote 2.0 protocol. We analyze possible solutions,
discuss the relative merits and drawbacks to those solutions, and recommend
improvements to the Monero protocol that will hopefully provide long-term
resistance of the cryptocurrency against blockchain analysis. Our recommended
improvements to Monero include a protocol-level network-wide minimum mix-in
policy of
n
= 2
foreign outputs per ring signature, a protocol-level increase of this
value to
n
= 4
after two years, and a wallet-level default value of
n
= 4
in the
interim. We also recommend a torrent-style method of sending Monero output.
We also discuss a non-uniform, age-dependent mix-in selection method to
mitigate the other forms of blockchain analysis identified herein, but we make no
formal recommendations on implementation for a variety of reasons. The
ramifications following these improvements are also discussed in some detail.
This research bulletin has not undergone peer review, and reflects only the
results of internal investigation.<br>
                                    <br>
                                    <a target="_blank" href="https://lab.getmonero.org/pubs/MRL-0004.pdf">Read Paper</a></p>
                              </div>
                            </div>
                            <div class="tab">
                              <input id="tab-five" type="checkbox" name="tabs" class="accordion">
                              <label for="tab-five" class="accordion">MRL-0005: Ring Signature Confidential Transactions</label>
                              <div class="tab-content">
                                <p><strong>Abstract:</strong> This article introduces a method of hiding transaction amounts in the strongly
decentralized anonymous cryptocurrency Monero. Similar to Bitcoin, Monero is a
cryptocurrency which is distributed through a proof of work “mining” process.
The original Monero protocol was based on CryptoNote, which uses ring
signatures and one-time keys to hide the destination and origin of transactions.
Recently the technique of using a commitment scheme to hide the amount of a
transaction has been discussed and implemented by Bitcoin Core Developer
Gregory Maxwell. In this article, a new type of ring signature, A Multi-layered
Linkable Spontaneous Anonymous Group signature is described which allows for
hidden amounts, origins and destinations of transactions with reasonable
efficiency and verifiable, trustless coin generation. Some extensions of the
protocol are provided, such as Aggregate Schnorr Range Proofs, and Ring
Multisignature. The author would like to note that early drafts of this were
publicized in the Monero Community and on the bitcoin research irc channel.
Blockchain hashed drafts are available in [14] showing that this work was started
in Summer 2015, and completed in early October 2015. An eprint is also
available at
http://eprint.iacr.org/2015/1098
.<br>
                                    <br>
                                    <a href="https://lab.getmonero.org/pubs/MRL-0005.pdf" target="_blank">Read Paper</a></p>
                              </div>
                            </div>
                          </div>
                    </div>
                <!-- end left two-thirds block-->
                
                <!-- right one-third block-->
                <div class="right one-third col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div class="info-block">
                        <div class="row center-xs">
                            <div class="col">
                                <h2>Cryptonote Whitepapers</h2>
                            </div>
                            
                        </div>
<div markdown="1">

[Cryptonote Whitepaper](https://cryptonote.org/whitepaper.pdf)

This is the original cryptonote paper written by the cryptonote team. Reading it will give an understanding about how the cryptonote algorithm works in general.

[Annotated Whitepaper](https://downloads.getmonero.org/whitepaper_annotated.pdf)

The Monero Research Lab released an annotated version of the cryptonote whitepaper. This is sort of like an informal review of the claims that are made line-by-line of the whitepaper. It also explains some of the harder concepts in relatively easy to understand terms.

[Surae Noether's Whitepaper Review](https://downloads.getmonero.org/whitepaper_review.pdf)

This paper is a formal review of the original cryptonote paper by MRL researcher Brandon Goodell. He takes an in-depth look at the claims and mathematics presented in the cryptonote paper. 

</div>
                    </div>
                </div>
                <!-- end right one-third block-->
            </div>
</section>
