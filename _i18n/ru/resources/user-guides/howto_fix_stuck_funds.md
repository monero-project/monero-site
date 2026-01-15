{% include disclaimer.html translated="yes" translationOutdated="no" %}

Случается так, что ваши средства «застревают», то есть у вас появляются
заблокированные средства, которые никогда не будут разблокированы. И вот
способ решения этой проблемы.

- Load your wallet in monero-wallet-cli.

- Type

> seed

в окне ввода команды. Ввести свою мнемоническую фразу, состоящую из 25 слов,
если этого ещё не было сделано. Это наилучший способ убедиться в том, что вы
не утратите доступа к собственным средствам.

- Close monero-wallet-cli by typing

> exit

- Backup all of your wallet related files. These include:

> yourwalletname.bin
> yourwalletname.bin.keys
> yourwalletname.bin.address.txt

Это можно сделать, скопировав все файлы в новую папку.

Иногда при создании кошелька вы можете назвать его как-нибудь так, что часть
.bin будет отсутствовать. В этом случае файл кошелька должен называться
yourwalletname без .bin на конце.

- Delete yourwallet.bin

- Load monero-wallet-cli, type in the name of the wallet you just deleted

- Enter password. The wallet will now refresh and hopefully your locked
  funds will now become unlocked.

