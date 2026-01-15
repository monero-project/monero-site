---
summary: 'Группа криптографических подписей по крайней мере с одним реальным участником, без возможности определения, какой из них является реальным, поскольку все они кажутся реальными'
terms: ["ring-signature", "ring-signatures", "кольцевых-подписей", "кольцевые-подписи"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Основная информация

В криптографии кольцевая подпись является видом цифровой подписи, которую
может создать любой член группы пользователей, в которой у каждого есть
ключи. Следовательно, сообщение, подписанное кольцевой подписью, фактически
будет подписано кем-то из определённой группы людей. Одно из безопасных
свойств кольцевой подписи состоит в том, что нереально путём вычислений
*определить* какие из ключей членов группы были использованы для того, чтобы
составить подпись.

Например, кольцевую подпись можно было бы использовать в качестве анонимной
подписи "какого-нибудь высокопоставленного чиновника из Белого дома", при
этом нельзя было бы выяснить, какой именно чиновник подписал
сообщение. Кольцевые подписи предназначены именно для этого, так как
анонимность кольцевой подписи нельзя отменить, а поскольку состав группы
членов кольцевой подписи может быть совершенно произвольным (не требует
предварительной настройки).

### Применительно к Monero

A ring signature makes use of your @account keys and a number of public keys
(also known as outputs) pulled from the @blockchain using a gamma
distribution method. Over the course of time, past outputs could be used
multiple times to form possible signer participants. In a "ring" of possible
signers, all ring members are equal and valid. There is no way an outside
observer can tell which of the possible signers in a signature group belongs
to your @account. So, ring signatures ensure that transaction outputs are
untraceable. Moreover, there are no @fungibility issues with Monero given
that every transaction output has plausible deniability (e.g. the network
can not tell which outputs are spent or unspent).

Чтобы узнать о свойстве Monero, используемом по умолчанию (несвязываемость),
см. страницу @скрытые-адреса.
