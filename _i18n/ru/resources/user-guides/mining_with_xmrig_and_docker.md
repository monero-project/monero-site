{% assign version = '1.1.0' | split: '.' %}
{% include disclaimer.html translated="true" version=page.version %}
## Вступление

Настоящее руководство имеет две цели: объяснить простоту майнинга посредством дистрибутивов Linux, а также обеспечение дополнительной безопасности майнинга, так как большинство майнеров не проходило аудита по безопасности.

После прочтения этого руководства вы станете засыпать спокойней, зная, что если майнер и будет взломан, это не распространится на вашу ОС.

### Почему Docker

[Docker](https://www.docker.com/) является самым известным, а также, вероятно, уже установленным средством.

В качестве контейнера я использую [alpine-xmrig](https://hub.docker.com/r/bitnn/alpine-xmrig/) в основе которого (что следует из названия) лежит образ [Alpine Linux](https://www.alpinelinux.org/).

Если вы действительно заинтересовались и хотите начать с использования Docker, то здесь вы найдёте некоторые полезные ссылки:
* Arch Linux Wiki: Страница Docker; [Docker Page](https://wiki.archlinux.org/index.php/Docker)
* Container Solutions: Шпаргалка по безопасности; [Security Cheat Sheet](http://container-solutions.com/content/uploads/2015/06/15.06.15_DockerCheatSheet_A2.pdf)
* Digital Oceans: Как пользоваться [Dockerfile Howto](https://www.digitalocean.com/community/tutorials/docker-explained-using-dockerfiles-to-automate-building-of-images).

Материалы по особым способам установки можно найти на веб-сайте [Docker Docs](https://docs.docker.com/engine/installation/).

### Почему XMRig

Я считаю [XMRig](https://github.com/xmrig/xmrig) реально надёжным майнером. Прекрасные результаты и статистика, отсутствие безвкусного сетевого пользовательского интерфейса или зависимостей. Контейнер XMRig занимает всего  около 4 MB, что делает его предельно портабельным.

#### Шаг 1. Майнинг при помощи XMRig

Выполнить следующее:

```bash
# docker run --restart unless-stopped --read-only -m 50M -c 512 bitnn/alpine-xmrig -o POOL01 -o POOL02 -u WALLET -p PASSWORD -k
# docker run --restart unless-stopped --read-only -m 50M -c 512 bitnn/alpine-xmrig -o pool.supportxmr.com:7777 -u 45CJVagd6WwQAQfAkS91EHiTyfVaJn12uM4Su8iz6S2SHZ3QthmFM9BSPHVZY388ASWx8G9Wbz4BA24RQZUpGczb35fnnJz -p docker:secret -k
```

#### Шаг 2. А нет никакого Шага 2

Вы уже сделали всё, что нужно было сделать. Теперь майнинг происходит в XMRig с контейнером Docker. Используйте `ctrl+c`, чтобы выйти из майнера, или добавьте `-d` сразу после `docker run`, чтобы майнер вошёл в фоновый режим.
