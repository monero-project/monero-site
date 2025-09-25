---
summary: 'Хост, определенный вами и разрешенный только вами'
terms: ["Locally-unique-host", "локально-уникальным-хостом", "локально-уникальному-хосту", "локально-уникальный-хост", "локально-уникального-хоста"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Основная информация

Локально уникальным хостом является
[FQDN](https://en.wikipedia.org/wiki/FQDN), определяемый и разрешаемый
**вами** подобно тому, как реализуется
[хост-файл](https://en.wikipedia.org/wiki/Hosts_(file). Не следует путать с
@канонически-уникальным-хостом.

### Углублённая информация

Вы можете поделиться собственной интерпретацией разрешения хоста (например,
`localhost` всегда будет иметь разрешение `127.0.0.1`), но разрешение не
является канонически принудительным (например, кто-то может присвоить
значение `localhost` любому произвольному IP-адресу).

В сети I2P хосты в публичной подписке могут рассматриваться как канонически
уникальные, однако в конечном счёте вы можете определять их так, как вам
будет угодно.

### Примечания

- Monero primarily uses @canonically-unique-host resolution while I2P only
  uses @locally-unique-host resolution.

- I2P's and @Kovri's assigned top-level domain is currently `.i2p` and
  @Kovri intends to only process/use the `.i2p` [top-level
  domain](https://en.wikipedia.org/wiki/Top_level_domain)
