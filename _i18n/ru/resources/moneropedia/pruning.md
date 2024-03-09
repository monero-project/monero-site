---
summary: 'Функция, которая позволяет операторам узлов загружать и синхронизировать только 1/3 блокчейна'
terms: ["pruning", "обрезанием", "Обрезание", "обрезание", "обрезания"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

'Обрезание' позволяет операторам узлов сэкономить 2/3 объёма памяти при
сохранении полной истории транзакций. Обрезание предполагает удаление 7/8
ненужных данных кольцевых подписей. Остающаяся 1/8 данных будет доступна
остальным узлам и будет использоваться для синхронизации с сетью. Остальные
«обрезанные» узлы будут иметь случайную 1/8 данных, которая также будет
доступна сети. Такими обрезанными узлами можно пользоваться без какого-либо
ущерба для анонимности или безопасности.

Существует три способа обрезания:

- *Synchronize a pruned node from scratch:* You will download and sync only
  1/3 of the full blockchain.

- *Prune an existing node:* The already existing blockchain will be pruned,
  but this will not result in a smaller blockchain. Instead, it will mark
  parts of the file as free, so that future data will use that free space,
  causing the file to not grow until free space grows scarce.

- *Create a new pruned blockchain from a full one:* A full blockchain that
  you already have will be used to create a new, pruned blockchain.

Обрезанные узлы довольно полезны, и в качестве @удалённых-узлов лучше
использовать именно их, но, по возможности, пользователям рекомендуется
создавать полные узлы и прибегать к обрезанию только в случае разумной
необходимости.

Возможность 'обрезания базы данных'
[добавлена](https://github.com/monero-project/monero/pull/4843) в январе
2019. Дополнительная информация содержится в соответствующем [посте]({{
site.baseurl }}/2019/02/01/pruning.html).
