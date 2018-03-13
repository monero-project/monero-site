<div markdown="1" class="text-center container description">
Monero topluluğu çeşitli ve farklıdır. Fiziksel olarak dağınık  olsak da buluşup vakit geçirdiğimiz özel yerler yok değil. Bunların birçoğunu altta bulabilirsiniz. Bize katılın!
</div>

<div class="hangouts">
    <section class="container">   
        <ul class="row center-xs">
            <li>
                <a href="https://twitter.com/monerocurrency" target="_blank" rel="noreferrer noopener"><div class="social-icon twitter"></div></a>
            </li>
            <li>
                <a href="https://reddit.com/r/monero" target="_blank" rel="noreferrer noopener"><div class="social-icon reddit"></div></a>
            </li>
            <li>
                <a href="https://www.facebook.com/monerocurrency/" target="_blank" rel="noreferrer noopener"><div class="social-icon facebook"></div></a>
            </li>
            <li>
                <a href="https://github.com/monero-project" target="_blank" rel="noreferrer noopener"><div class="social-icon github"></div></a>
            </li>
        </ul>
    </section>

    <section class="container">
          <div class="row">
                <!-- left two-thirds block-->
               <div class="left two-thirds col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div class="col-xs-12">
                        <div class="info-block">
                            <div class="row center-xs">
                                <div class="col">
                                    <h2>İş Grubu Kaynakları</h2>
                                </div>
                            </div>
                            <div class="row center-xs">
                                <p>Monero, organik iş gruplarını desteklemek amacıyla topluluk üyelerinin buluşup proje planlayabilecekleri çeşitli kaynaklar sunmakta. Mattermost’da Monero ile ilgili popüler IRC kanalları bulmanız mümkün.</p>
                            </div>
                            <div class="row relays around-xs">
                                <div class="col-md-4 col-sm-4 col-xs-4">
                                    <p><a href="https://monero.slack.com/" class="btn-link btn-fixed">Slack</a></p>
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-4">
                                    <p><a href="https://mattermost.getmonero.org/" class="btn-link btn-fixed">Mattermost</a></p>
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-4">
                                    <p><a href="https://taiga.getmonero.org/" class="btn-link btn-fixed">Taiga</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="info-block">
                            <div class="row center-xs">
                                <div class="col">
                                    <h2>IRC Kanalları</h2>
                                </div>
                            </div>
                            <div class="row start-xs">
                                <p>Monero topluluğu, çeşitli amaçlara hizmet eden birçok IRC kanalı kullanmaktadır. Bazısı iş, bazısıysa muhabbet edip takılmak için. Popüler olanları altta bulabilirsiniz.</p>
                            </div>
                            <div class="row irc">
                                {% for channel in site.data.irc %}
                                    <div class="col-md-4 col-xs-12">
                                        <a href="irc://chat.freenode.net/#{{ channel.channel }}">#{{ channel.channel }}</a>
                                        <p>{{ channel.description }}</p>
                                    </div>
                                {% endfor %}
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end left two-thirds block-->

                <!-- right one-third block-->
               <div class="right one-third col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div class="info-block">
                            <div class="row center-xs">
                                <div class="col"><h2>Stack Exchange</h2></div>
                            </div>
                            <div class="row start-xs">
                                <p>Monero Stack Exchange soru sorup cevap almanızın hızlı bir yoludur. Altta bazı sıkça sorulan kaliteli soruları ve verilen cevapları bulacağınız bağlantıları bulabilirsiniz.</p>
                            </div>
                            <div class="row start-xs sequestions">
                                <a href="https://monero.stackexchange.com/questions/4277/why-does-monero-have-higher-transaction-fees-than-bitcoin">Monero’nun işlem ücreti neden Bitcoin’den daha yüksek?</a>
                                <a href="https://monero.stackexchange.com/questions/4335/what-does-moneros-scaling-roadmap-look-like">Monero’nun ölçeklenebilirlik yol haritası nedir?</a>
                                <a href="https://monero.stackexchange.com/questions/4302/what-cryptography-primitives-concepts-other-than-the-basic-ones-does-monero-us">Temel kriptografi ve kavramları dışında Monero başka bir yöntem kullanıyor mu?</a>
                                <a href="https://monero.stackexchange.com/questions/4242/how-to-extract-data-from-local-blockchain">Blok zincirinden nasıl veri çekebilirim?</a>
                                <a href="https://monero.stackexchange.com/questions/4302/what-cryptography-primitives-concepts-other-than-the-basic-ones-does-monero-us">Monero madencilerinden TCP trafiği gizleme.</a>
                            </div>  
                            <div class="row center-xs">
                                <p><a href="https://monero.stackexchange.com" class="btn-link btn-auto">Stack Exchange'e Gidin</a></p>
                            </div>
                        </div>
               </div>
               <!-- end right one-third block-->
           </div>
        </section>

</div>
