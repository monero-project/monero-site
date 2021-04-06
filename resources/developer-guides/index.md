---
layout: custom
title: titles.developerguides
permalink: /resources/developer-guides/index.html
---

{% t global.lang_tag %}
<div class="guides">
    <div class="center-xs container description">
        <p class="text-center">{% t developer-guides.head %}</p>
    </div>
    <section class="container full">
        <div class="row">
            <div class="left half no-pad-sm col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="info-block">
                    <div class="row center-xs">
                        <div class="col">
                            <h2>{% t developer-guides.rpc %}</h2>
                        </div>
                    </div>
                    <p><i>{% t developer-guides.outdated %}</i></p>
                    <h3><span class="icon-page"></span><a href="{{ site.baseurl_root }}/resources/developer-guides/daemon-rpc.html">{% t developer-guides.daemonrpc %}</a></h3>
                        <p>{% t developer-guides.daemonrpc_descr %}</p>
                    <h3><span class="icon-page"></span><a href="{{ site.baseurl_root }}/resources/developer-guides/wallet-rpc.html">{% t developer-guides.walletrpc %}</a></h3>
                        <p>{% t developer-guides.walletrpc_descr %}</p>
                </div>
            </div>
            <div class="right half no-pad-sm col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="info-block">
                    <div class="row center-xs">
                        <div class="col">
                            <h2>{% t developer-guides.external %}</h2>
                        </div>
                    </div>
                    <p><i>{% t developer-guides.external_head %}</i></p>
                    <h3><span class="icon-globe"></span><a href="https://monerodocs.org/">Monerodocs.org</a></h3>
                        <p>{% t developer-guides.monerodocs %}</p>
                    <h3><a href="https://github.com/moneroexamples"><span class="icon-github"></span>Moneroexamples</a></h3>
                        <p>{% t developer-guides.moneroexamples %}</p>
                    <h3><a href="https://github.com/monero-ecosystem"><span class="icon-github"></span>Monero Ecosystem project</a></h3>
                        <p>{% t developer-guides.moneroecosystem %}</p>
                    <h3><span class="icon-globe"></span><a href="https://monero.stackexchange.com">Monero StackExchange</a></h3>
                        <p>{% t developer-guides.monerose %}</p>
                </div>
            </div>
            <div class="full container">
                <div class="info-block">
                    <div class="row center-xs">
                        <h2>{% t developer-guides.libraries %}</h2>
                    </div>
                    <p>{% t developer-guides.libraries_para %} <a href="https://github.com/monero-project/monero-site/issues">GitHub</a>.</p>
                <ul class="logo">
                    <h3>Node.js</h3>
                        <li><a href="https://github.com/monero-ecosystem/monero-javascript">monero-javascript (Monero Ecosystem)</a> - {% t developer-guides.monero-javascript %}</li>
                        <li><a href="https://github.com/PsychicCat/monero-nodejs">monero-nodejs</a> - {% t developer-guides.monero-nodejs %}</li>
                    <h3>PHP</h3>
                        <li><a href="https://github.com/monero-integrations/monerophp">monerophp (Monero Integrations)</a> - {% t developer-guides.monerophp %}</li>
                        <li><a href="https://github.com/monero-integrations/monerowp">monerowp (Monero Integrations)</a> - {% t developer-guides.monerowp %}</li>
                    <h3>Python</h3>
                        <li><a href="https://github.com/monero-ecosystem/monero-python">monero-python (Monero Ecosystem)</a> - {% t developer-guides.monero-python %}</li>
                        <li><a href="https://github.com/monero-ecosystem/moneriote-python">moneriote-python (Monero Ecosystem)</a> - {% t developer-guides.moneriote-python %}</li>
                    <h3>Java</h3>
                        <li><a href="https://github.com/00-matt/monerorpc">monerorpc</a> - {% t developer-guides.monerorpc %}</li>
                        <li><a href="https://github.com/monero-ecosystem/monero-java">monero-java (Monero Ecosystem)</a> - {% t developer-guides.monero-java %}</li>
                    <h3>C++</h3>
                        <li><a href="https://github.com/monero-ecosystem/monero-cpp">monero-cpp (Monero Ecosystem)</a> - {% t developer-guides.monero-cpp %}</li>
                    <h3>Golang</h3>
                        <li><a href="https://github.com/monero-ecosystem/vanity-monero">vanity-monero (Monero Ecosystem)</a> - {% t developer-guides.vanity-monero %}</li>
                        <li><a href="https://github.com/monero-ecosystem/go-monero-rpc-client">go-monero-rpc-client (Monero Ecosystem)</a> - {% t developer-guides.go-monero-rpc-client %}</li>
                    <h3>Rust</h3>
                        <li><a href="https://github.com/monero-rs/monero-rs">monero-rs</a> - {% t developer-guides.monero-rs %}</li>
                    <h3>C#</h3>
                        <li><a href="https://github.com/monero-ecosystem/csharp-monero-rpc-client">csharp-monero-rpc-client (Monero Ecosystem)</a> - {% t developer-guides.csharp-monero %}</li>
                </ul>
                </div>
            </div>
        </div>
    </section>
</div>
