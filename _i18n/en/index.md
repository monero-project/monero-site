<div class="site-wrap">
        <section class="container full col-xs-12">
            <div class="info-block info-block-main">
                <div class="row middle-xs">
                    <div class="col-lg-7 col-md-7 col-xs-12 main-video">
                        <div class="monero-video">
                            <!--iframe width="560" height="315" src="https://www.youtube.com/embed/TZi9xx6aiuY" frameborder="0" allowfullscreen></iframe-->
                            <video controls poster="img/monero-community.png" onclick="this.paused ? this.play() : this.pause();" preload="none">
                                <source src="/media/Monero_Promo.m4v">
                            </video>
                        </div>
                        
                    </div>
                    <div class="col-lg-5 col-md-5 col-xs-12">
                        <div class="main-info">
                            <h1 id="main-h1">Monero</h1>
                            <h2 id="main-h2">Private Digital Currency</h2>
                            <p id="main-text">Monero is cash for a connected world. It’s fast, private, and secure. With Monero, you are your own bank. You can spend safely, knowing that others cannot see your balances or track your activity.</p>
                            <p><a href="{{site.baseurl}}/get-started/using/" class="btn-link btn-auto btn-primary">Get Started</a></p>
                        </div>
                    </div>
                </div>
            </div>
          </section>
      
    <!-- FULL WIDTH BLOCK -->
        
        <section class="container about-main full col-xs-12">
                <div class="info-block">
                    <div class="row center-xs">
                        <div class="col"><h2>Why Monero is different</h2></div>
                    </div>
                    <div class="row middle-xs info-block-row private">
                        <div class="col-lg-6 col-md-6 col-sm-8 col-xs-12  why-text">
                            <h3>Monero is secure</h3>
                                <p>Monero is a decentralized cryptocurrency, meaning it is secure digital cash operated by a network of users. Transactions are confirmed by distributed consensus and then immutably recorded on the blockchain. Third-parties do not need to be trusted to keep your Monero safe. </p>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-4 col-xs-12 last-sm first-xs center-xs">
                            <img src="/img/secure-monero.png" alt="Secure safe" class="main-icon">
                        </div>
                    </div>
                    <div class="row middle-xs info-block-row">
                        <div class="col-lg-6 col-md-6 col-sm-4 col-xs-12 center-xs">
                            <img src="/img/private-monero.png" alt="No surveillance" class="main-icon">
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-8 col-xs-12 why-text">
                            <h3>Monero is private</h3>
                            <p>Monero uses ring signatures, ring confidential transactions, and stealth addresses to obfuscate the origins, amounts, and destinations of all transactions. Monero provides all the benefits of a decentralized cryptocurrency, without any of the typical privacy concessions. </p>
                        </div>
                        
                    </div>
                    <div class="row middle-xs info-block-row">
                        <div class="col-lg-6 col-md-6 col-sm-8 col-xs-12 why-text">
                            <h3>Monero is untraceable</h3>
                            <p>Sending and receiving addresses as well as transacted amounts are obfuscated by default. Transactions on the Monero blockchain cannot be linked to a particular user or real-world identity.</p>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-4 col-xs-12 last-sm first-xs center-xs">
                            <img src="/img/untraceable-monero.png" alt="Untraceable Monero paths" class="main-icon">
                        </div>
                    </div>
                    <div class="row middle-xs info-block-row">
                        <div class="col-lg-6 col-md-6 col-sm-4 col-xs-12 center-xs">
                            <img src="/img/fungible-monero.png" alt="Monero gold" class="main-icon">
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-8 col-xs-12 why-text">
                            <h3>Monero is fungible</h3>
                            <p> Monero is <a href="{{site.baseurl}}/resources/moneropedia/fungibility.html">fungible</a> because it is private by default. Units of Monero cannot be blacklisted by vendors or exchanges due to their association in previous transactions.</p>
                        </div>
                    </div>
                </div>
        </section>
        
    <!-- END FULL WIDTH BLOCK -->
        
        
        
    <!-- TWO THIRDS & ONE THIRD BLOCKS ROW -->
        
        <section class="container">
            <div class="row">
                <!-- left two-thirds block-->
                <div class="left two-thirds col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    <div class="info-block">
                        <div class="row center-xs">
                            <div class="col"><h2>Downloads</h2></div>
                        </div>
                            <div class="row around-xs">
                                <div class="col">
                                    <p><a href="{{site.baseurl}}/downloads#windows" class="btn-link btn-fixed"><span class="icon-windows"></span>Monero for Windows</a></p>
                                </div>
                                <div class="col">
                                    <p><a href="{{site.baseurl}}/downloads#mac" class="btn-link btn-fixed"><span class="icon-apple"></span>Monero for Mac</a></p>
                                </div>
                            </div>
                            <div class="row around-xs">
                                <div class="col">
                                    <p><a href="{{site.baseurl}}/downloads#linux" class="btn-link btn-fixed"><span class="icon-linux"></span>Monero for Linux</a></p>
                                </div>
                                <div class="col">
                                    <p><a href="{{site.baseurl}}/downloads#source" class="btn-link btn-fixed"><span class="icon-blockchain"></span>Latest Blockchain</a></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12"><p class="main-downloads">Need it for a different operating system? <a href="{{site.baseurl}}/downloads/">View all available downloads here.</a></p>
                            </div>
                            </div>
                </div>
                </div>
                <!-- end left two-thirds block-->
                
                <!-- right one-third block-->
                <div class="right one-third col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div class="info-block">
                        <div class="row center-xs">
                            <div class="col"><h2>Latest News</h2></div>
                        </div>
                        <div class="info-block-row">
                              {% for post in site.posts limit:2 %}
                              <div class="row start-xs">
                                                    <div class="col">
                                                        <p><a href="{{site.baseurl}}{{ post.url }}">{{ post.title }}</a></p>
                                                    </div>
                                                </div>
                              {% endfor %}
                       
 
                            <div class="row end-xs">
                                <div class="col">
                                    <p><a href="{{site.baseurl}}/blog/">More news</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end right one-third block-->
            </div>
        </section>
        
        <!-- END TWO THIRDS & ONE THIRD BLOCKS ROW -->
        
        <!-- 3 ONE-THIRD BLOCKS ROW -->
        
        <section class="container">
            <div class="row">
                <!-- left one-third block-->
                <div class="left one-third col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div class="info-block">
                        <div class="row center-xs">
                            <div class="col">
                                <h2>Moneropedia</h2>
                                <p class="main-resources">Would you like to look up the meanings of the terms and concepts used in Monero? Here you will find an alphabetical guide to terms and their meanings from both the Monero and Kovri projects.</p>
                                <p><a href="{{site.baseurl}}/resources/moneropedia/" class="btn-link btn-auto">Read Moneropedia</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end left one-third block-->
                
                <!-- center one-third block-->
                <div class="center one-third col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div class="info-block">
                        <div class="row center-xs">
                            <div class="col">
                                <h2>User Guides</h2>
                                <p class="main-resources">Step-by-step guides to all things Monero are separated by category and cover everything from creating a wallet to supporting the network, and even how to edit this website.</p>
                                <p><a href="{{site.baseurl}}/resources/user-guides/" class="btn-link btn-auto">Read user guides</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end center one-third block-->
                
                <!-- right one-third block-->
                <div class="right one-third col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div class="info-block">
                        <div class="row center-xs">
                            <div class="col">
                                <h2>FAQ</h2>
                                <p class="main-resources">We've heard a lot of questions over the years and have compiled, for your convenience, a thorough and varied FAQ. Don't worry, if your questions are not on here, you can always ask the community.</p>
                                <p><a href="{{site.baseurl}}/get-started/faq/" class="btn-link btn-auto">Read answers</a></p>
                            </div>
                        </div>         
                    </div>
                </div>
                <!-- end right one-third block-->
            </div>
        </section>
        
        <!-- END 3 ONE-THIRD BLOCKS ROW -->
</div>
