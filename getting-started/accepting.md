---
layout: static_page
title: "Accepting Monero Payments"
title-pre-kick: "Accepting Monero"
title-kick: "Payments"
title-post-kick: ""
kick-class: "kicks"
icon: "icon_accepting"
attribution: "<!-- Icon is based on work by Icons8 (http://www.icons8.com) and is licensed under Creative Commons BY 3.0 -->"
---

### {% t gs.accepting.basics %}

{% t gs.accepting.basics_text_1 %}

{% t gs.accepting.basics_text_2 %}

{% t gs.accepting.basics_text_3 %}

### {% t gs.accepting.checking_sw %}

{% t gs.accepting.checking_sw_text_1 %}

{:.cli-code}
<span style="color: yellow;">[wallet 49VNLa]:</span> payments 666c75666679706f6e7920697320746865206265737420706f6e792065766572
            payment                           transaction               height     amount     unlock time
<span style="color: lime;"><666c75666679706f6e79206973207>   <7ba4cd810c9b4096869849458181e98e>    441942     30.00000   0</span>
<span style="color: yellow;">[wallet 49VNLa]:</span> <span style="color: gray;">█</span><br><br><br><br><br><br>

{% t gs.accepting.checking_sw_text_2 %}

### {% t gs.accepting.receiving %}

<i class="fa fa-level-up fa-rotate-90 fa-lg instruction-list"></i> {% t gs.accepting.receiving_text_1 %}
<i class="fa fa-level-up fa-rotate-90 fa-lg instruction-list"></i> {% t gs.accepting.receiving_text_2 %}  
<i class="fa fa-level-up fa-rotate-90 fa-lg instruction-list"></i> {% t gs.accepting.receiving_text_3 %}

### {% t gs.accepting.checking_prog %}

{% t gs.accepting.checking_prog_text_1 %}

{% t gs.accepting.checking_prog_text_2 %}

{% t gs.accepting.checking_prog_text_3 %}

{% t gs.accepting.checking_prog_text_4 %}

{:.cli-code}
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18500/json_rpc -d '{"jsonrpc":"2.0","method":"get_bulk_payments","id":"test", "params":{"payment_ids": ["666c75666679706f6e7920697320746865206265737420706f6e792065766572"]}}' -H "Content-Type: application/json"
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
}

{% t gs.accepting.checking_prog_text_5 %}

{% t gs.accepting.checking_prog_text_6 %}

### {% t gs.accepting.scanning %}

<i class="fa fa-level-up fa-rotate-90 fa-lg instruction-list"></i> {% t gs.accepting.scanning_text_1 %} 
<i class="fa fa-level-up fa-rotate-90 fa-lg instruction-list"></i> {% t gs.accepting.scanning_text_2 %}  
<i class="fa fa-level-up fa-rotate-90 fa-lg instruction-list"></i> {% t gs.accepting.scanning_text_3 %}
<i class="fa fa-level-up fa-rotate-90 fa-lg instruction-list"></i> {% t gs.accepting.scanning_text_4 %}
