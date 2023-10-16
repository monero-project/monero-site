---
summary: 'Узлы Monero, которые работают в другой сети или на другом компьютере отдельно от кошелька. Удаленные узлы позволяют начать использовать Monero, без загрузки локальной копии блокчейна'
terms: ["remote-node", "remote-nodes", "удаленный-узел", "удалённый-узел", "удалённые-узлы", "удалённых-узлов", "удалённому-узлу", "удалёнными-узлами"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

@Узел, работающий не на той же машине, на которой установлен @кошелёк
Monero, называется «удалённым узлом» и может быть как приватным, так и
открытым.

**Приватный удалённый узел** работает не на вашей локальной машине, но
контролируется вами. Классическим примером может служить узел, работающий на
VPS или на сервере. В этом случае узел не установлен на вашей машине, но вы
полностью контролируете его. Вы даже можете сделать его открытым узлом и
разрешить другим людям пользоваться им.

**Открытый удалённый узел** может использоваться теми людьми, которые в силу
каких-либо причин (как правило это ограничения, связанные с аппаратным
обеспечением, недостаточным объёмом жёсткого диска, или другие технические
причины) не могут или не хотят создавать и использовать собственный узел и
предпочитают полагаться на публично доступный узел в сети Monero. Открытые
удалённые узлы часто называют просто «удалёнными узлами».

Использование открытого узла обеспечивает возможность практически
мгновенного проведения @транзакций в силу отсутствия необходимости в
предварительном скачивании @блoкчейна и синхронизации с сетью Monero, но это
подразумевает утрату контроля над вашей анонимностью. Сообщество Monero
рекомендует постоянно использовать собственный узел, так как это
обеспечивает максимально возможную анонимность, а также способствует
децентрализации сети.

### Публичные узлы

Открытые узлы — это здорово, поскольку, как уже было сказано выше, они
позволяют людям, не пользующимся собственными узлами, быстро подсоединяться
к сети Monero. Существует два основных способа соединения с открытым узлом:
найти кого-то и попросить «поделиться» своим узлом, попросить этого человека
«открыть» свой узел и предоставить его IP-адрес и номер порта, или же можно
просто воспользоваться публичным узлом.

Публичные узлы можно найти в сети по двум системам:

- **Node aggregators**, which are basically lists of open remote nodes. The
  operators of those nodes decided to add them to the aggregator so that
  other people can use them. The aggregator will provide to the person who
  want to use a remote node a simple URL. This URL connects to one of the
  nodes in the list and will need to be inserted in the Monero wallet (GUI
  or CLI). The wallet will then contact one of the nodes provided by the URL
  and will allow the end user to immediately receive and send
  transactions. One of the most famous node aggregators is
  [MoneroWorld](https://moneroworld.com/#nodes).

- **Native public nodes**. This is one of the new coolest features the
  Monero devs came up with to improve the user experience and to make easier
  to connect to the network. The @daemon allows to make a node public by
  simply adding the flag `--public-node`. Doing so, it will be advertised on
  the P2P network and people will be able to connect to it (or to another
  public node advertising itself in the same way) using the related option
  in the GUI and CLI wallets.

Следует помнить о том, что использование публичных узлов связано с
определёнными рисками. Оператор узла может связать ваши транзакции с вашим
IP-адресом. Этого можно избежать, но по возможности лучше не пользоваться
публичными узлами. Лучше создавайте собственный узел и пользуйтесь им!
