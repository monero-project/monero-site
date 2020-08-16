---
terms: ["daemon", "демон"]
summary: "Фоновый процесс, который запускает и управляет узлом Monero"
---

{% include disclaimer.html translated="no" translationOutdated="no" %}
'Daemon' is the general term for a piece of software running in the background. In Monero, the Daemon is started through the 'monerod' program. If you run the Daemon locally, you are running a local @node. If the Daemon is running on another device it's a @remote-node. A @wallet, like the CLI or the GUI, needs to connect to a Daemon (local or remote) to relay @transactions to the network.

Также, существует возможность отправлять команды демону напрямую или через интерфейс RPC. Ознакомьтесь с [Руководством по демону RPC]({{ site.baseurl_root }}/resources/developer-guides/daemon-rpc.html), которое содержит подробное руководство (с примерами) с доступными вызовами RPC. Для получения подробной технической информации о демоне перейдите по ссылке на Monerodocs внизу этой страницы.

---

##### Прочие ресурсы
<sub>1. [monerod на Monerodocs.org](https://monerodocs.org/interacting/monerod-reference/)</sub><br>
<sub>2. Статья 'демон' на [Wikipedia](https://ru.wikipedia.org/wiki/Демон_(программа))</sub><br>
<sub>3. Вопросы с тегом monerod [на StackExchange](https://monero.stackexchange.com/?tags=monerod)</sub>
