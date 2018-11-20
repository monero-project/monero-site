---
layout: custom
title: titles.accepting
permalink: /get-started/accepting/index.html
---
{% t global.lang_tag %}
<section class="container">
    <div class="row">
    <!-- left two-thirds block-->
        <div class="full">
            <div class="info-block text-adapt">
                <div class="row center-xs">
                    <div class="col">
                        <h2>{% t accepting.title %}</h2>
                    </div>
                </div>
                <div>
                    <h3>{% t accepting.basics %}</h3>
                    <p>{% t accepting.basics_para1 %}</p>
                    <p>{% t accepting.basics_para2 %}</p>
                    <p>{% t accepting.basics_para3 %}</p>
                    <div class="highlighter-rouge">
                        <div class="highlight">
                            <pre class="highlight"><code>666c75666679706f6e7920697320746865206265737420706f6e792065766572</code></pre>
                        </div>
                    </div>
                    <h3>{% t accepting.checking %}</h3>
                    <p>{% t accepting.checking_para1 %}</p>
                    <div class="highlighter-rouge">
                        <div class="highlight">
                            <pre class="highlight"><code>[wallet 49VNLa]: payments 666c75666679706f6e7920697320746865206265737420706f6e792065766572
           payment                           transaction               height     amount     unlock time
666c75666679706f6e79206973207     7ba4cd810c9b4096869849458181e98e     441942     30.00000   0
[wallet 49VNLa]: █</code></pre>
                        </div>
                    </div>
                    <p>{% t accepting.checking_para2 %}</p>
                    <h3>{% t accepting.receiving %}</h3>
                    <ul>
                        <li>{% t accepting.receiving_list1 %}</li>
                        <li>{% t accepting.receiving_list2 %}</li>
                        <li>{% t accepting.receiving_list3 %}</li>
                    </ul>
                    <h3 id="checking-for-a-payment-programmatically">{% t accepting.program %}</h3>
                    <p>{% t accepting.program_para1 %}</p>
                    <p><em>get_payments</em>: {% t accepting.program_para2 %}</p>
                    <p><em>get_bulk_payments</em>: {% t accepting.program_para3 %}</p>
                    <p>{% t accepting.program_para4 %}</p>
                    <div class="highlighter-rouge">
                        <div class="highlight">
                            <pre class="highlight"><code>[ monero-&gt;~ ]$ curl -X POST http://127.0.0.1:18500/json_rpc -d '{"jsonrpc":"2.0","method":"get_bulk_payments","id":"test", "params":{"payment_ids": ["666c75666679706f6e7920697320746865206265737420706f6e792065766572"]}}' -H "Content-Type: application/json"
{
  "id": "test",
  "jsonrpc": "2.0",
  "result": {
    "payments": [{
      "amount": 30000000000000,
      "block_height": 441942,
      "payment_id": "666c75666679706f6e7920697320746865206265737420706f6e792065766572",
      "tx_hash": "7ba4cd810c9b4096869849458181e98e18b6474ab66415de0f4ccf7ab1162fdf",
      "unlock_time": 0
    }]
  }
}</code></pre>
                        </div>
                    </div>
                    <p>{% t accepting.program_para5 %}</p>
                    <p>{% t accepting.program_para6 %}</p>
                    <h3 id="programatically-scanning-for-payments">{% t accepting.scanning %}</h3>
                    <ul>
                        <li>{% t accepting.scanning_list1 %}</li>
                        <li>{% t accepting.scanning_list2 %}</li>
                        <li>{% t accepting.scanning_list3 %}</li>
                        <li>{% t accepting.scanning_list4 %}</li>
                    </ul>
                </div>
            </div>
        </div>                
        <!-- end right one-third block-->
    </div>
</section>

<div class="untranslated {% t accepting.translated %}">
    <p>{% t global.untranslated %} <a class="untranslated-link" href="https://repo.getmonero.org/monero-project/monero-site/blob/master/README.md#140-how-to-translate-a-page">README</a>.</p>
</div>