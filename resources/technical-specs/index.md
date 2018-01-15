---
layout: custom
title: "Technical Specs"
---

<div class="about-monero">
    <section class="container">
        <div class="row">
            <!-- left two-thirds block-->
            <div class="full col-xs-12">
                <div class="info-block text-adapt">

                    <div class="row">
                        <div class="col">
                            <h3>No premine, no instamine, no token</h3>
                        </div>
                    </div>

<div markdown="1">
* Monero had no premine or instamine
* Monero did not sell any token
* Monero had no presale of any kind
</div>

                    <div class="row">
                        <div class="col">
                            <h3>Proof of Work</h3>
                        </div>
                    </div>

<div markdown="1">
* CryptoNight
* may change in the future
</div>

                    <div class="row">
                        <div class="col">
                            <h3>Difficulty retarget</h3>
                        </div>
                    </div>

<div markdown="1">
* every block
* based on the last 720 blocks, excluding 20% of the timestamp outliers
</div>

                    <div class="row">
                        <div class="col">
                            <h3>Block time</h3>
                        </div>
                    </div>

<div markdown="1">
* 2 minutes
* may change in the future as long as emission curve is preserved
</div>

                    <div class="row">
                        <div class="col">
                            <h3>Block reward</h3>
                        </div>
                    </div>

<div markdown="1">
* smoothly decreasing and subject to penalties for blocks greater than median size of the last 100 blocks (M100)
* see the [latest block](https://moneroblocks.info/) coinbase transaction amount for current reward
</div>

                    <div class="row">
                        <div class="col">
                            <h3>Block size</h3>
                        </div>
                    </div>

<div markdown="1">
* dynamic, maximum of 2 * M100
</div>

                    <div class="row">
                        <div class="col">
                            <h3>Emission curve</h3>
                        </div>
                    </div>

<div markdown="1">
* first, main curve: ~18.132 million coins by the end of May 2022
* then, tail curve: 0.6 XMR per 2-minute block, kicks in once main emission is done, translates to <1% inflation decreasing over time
* see [charts and details](https://www.reddit.com/r/Monero/comments/512kwh/useful_for_learning_about_monero_coin_emission/)
</div>

                    <div class="row">
                        <div class="col">
                            <h3>Max supply</h3>
                        </div>
                    </div>

<div markdown="1">
* infinite
</div>

                    <div class="row">
                        <div class="col">
                            <h3>Sender privacy</h3>
                        </div>
                    </div>

<div markdown="1">
* Ring signatures
</div>

                    <div class="row">
                        <div class="col">
                            <h3>Recipient privacy</h3>
                        </div>
                    </div>

<div markdown="1">
* Stealth addresses
</div>

                    <div class="row">
                        <div class="col">
                            <h3>Amount obfuscation</h3>
                        </div>
                    </div>

<div markdown="1">
* Ring confidential transactions
</div>

                </div>
            </div>
            <!-- end right one-third block-->
        </div>
        
    </section>
</div>
