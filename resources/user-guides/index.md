---
layout: custom
title: titles.userguides
---
{% t global.lang_tag %}
<div class="guides">
    <section class="container">
        <div class="row">
            <div class="left half no-pad-sm col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="info-block">
                    <div class="row center-xs">
                        <div class="col">
                            <h2>{% t user-guides.general %}</h2>
                        </div>
                    </div>
                    <div class="row start-xs">
                        <p>
                            <a href="{{site.baseurl}}/resources/user-guides/Offline_Backup.html">{% t user-guides.offline-backup %}</a>
                            <a href="{{site.baseurl}}/resources/user-guides/vps_run_node.html">{% t user-guides.vps-node %}</a>
                            <a href="{{site.baseurl}}/resources/user-guides/importing_blockchain.html">{% t user-guides.import-blockchain %}</a>
                            <a href="{{site.baseurl}}/resources/user-guides/monero_tools.html">{% t user-guides.monero-tools %}</a>
                            <a href="{{site.baseurl}}/resources/user-guides/securely_purchase.html">{% t user-guides.purchasing-storing %}</a>
                            <a href="{{site.baseurl}}/resources/user-guides/verification-allos-advanced.html">{% t user-guides.verify-allos %}</a>
                            <a href="{{site.baseurl}}/resources/user-guides/verification-windows-beginner.html">{% t user-guides.verify-windows %}</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="right half col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="info-block">
                    <div class="row center-xs">
                        <div class="col">
                            <h2>{% t user-guides.mining %}</h2>
                        </div>
                    </div>
                    <div class="row start-xs">
                        <p>
                            <a href="{{site.baseurl}}/resources/user-guides/mine-to-pool.html">{% t user-guides.mine-on-pool %}</a>
                            <a href="{{site.baseurl}}/resources/user-guides/solo_mine_GUI.html">{% t user-guides.solo-mine %}</a>
                            <a href="{{site.baseurl}}/resources/user-guides/mining_with_xmrig_and_docker.html">{% t user-guides.mine-docker %}</a>
                            <a href="{{site.baseurl}}/resources/user-guides/How-to-mine-Monero-XMR-without-a-mining-equipment.html">{% t user-guides.nicehash %}</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="container">
        <div class="row">
            <div class="left half no-pad-sm col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="info-block">
                    <div class="row center-xs">
                        <div class="col">
                            <h2>{% t user-guides.recovery %}</h2>
                        </div>
                    </div>
                    <div class="row start-xs">
                        <p>
                            <a href="{{site.baseurl}}/resources/user-guides/howto_fix_stuck_funds.html">{% t user-guides.locked-funds %}</a>
                            <a href="{{site.baseurl}}/resources/user-guides/restore_account.html">{% t user-guides.restore-account %}</a>
                            <a href="{{site.baseurl}}/resources/user-guides/restore_from_keys.html">{% t user-guides.restore-from-keys %}</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="right half col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="info-block">
                    <div class="row center-xs">
                        <div class="col">
                            <h2>{% t user-guides.wallets %}</h2>
                        </div>
                    </div>
                    <div class="row start-xs">
                        <p>
                            <a href="{{site.baseurl}}/resources/user-guides/cli_wallet_daemon_isolation_qubes_whonix.html">{% t user-guides.qubes %}</a>
                            <a href="{{site.baseurl}}/resources/user-guides/monero-wallet-cli.html">{% t user-guides.cli-wallet %}</a>
                            <a href="{{site.baseurl}}/resources/user-guides/remote_node_gui.html">{% t user-guides.remote-node-gui %}</a>
                            <a href="{{site.baseurl}}/resources/user-guides/view_only.html">{% t user-guides.view-only %}</a>
                            <a href="{{site.baseurl}}/resources/user-guides/prove-payment.html">{% t user-guides.prove-payment %}</a>
                            <a href="{{site.baseurl}}/resources/user-guides/ledger-wallet-cli.html">{% t user-guides.ledger-wallet-cli %}</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<div class="untranslated {% t user-guides.translated %}">
    <p>{% t global.untranslated %} <a class="untranslated-link" href="https://repo.getmonero.org/monero-project/monero-site/blob/master/README.md#140-how-to-translate-a-page">README</a>.</p>
</div>