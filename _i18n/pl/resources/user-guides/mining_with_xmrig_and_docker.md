## Wprowadzenie

Ten przewodnik jest dwojaki: opisuje łatwość użycia do wydobycia w dystrybucjach Linuksa oraz dodatkowe zabezpieczenia wydobycia, ponieważ większość koparek nie miała przeprowadzonego audytu bezpieczeństwa. Po jego przeczytaniu będziesz mógł spać spokojniej, wiedząc, że wyeksploatowana koparka nie migruje do systemu operacyjnego.

### Dlaczego Docker?

[Docker](https://www.docker.com/) jest używany ze względu na to, że jest najbardziej znaną platformą i istnieje szansa, że został już zainstalowany.

Kontener, którego używam, to [alpine-xmrig](https://hub.docker.com/r/bitnn/alpine-xmrig/) i, jak sama nazwa wskazuje, został zbudowany na wzór [Alpine Linux](https://www.alpinelinux.org/).

Jeśli jesteś zainteresowany rozpoczęciem wydobywania z Dockerem, znajdziesz tu kilka dobrych referencji na początek.
* Arch Linux Wiki [strona Dockera](https://wiki.archlinux.org/index.php/Docker)
* Container Solutions [ściągawka na temat bezpieczeństwa](http://container-solutions.com/content/uploads/2015/06/15.06.15_DockerCheatSheet_A2.pdf)
* Digital Oceans [przewodnik po plikach Dockera](https://www.digitalocean.com/community/tutorials/docker-explained-using-dockerfiles-to-automate-building-of-images).

Aby zainstalować na konkretną dystrybucję, przejdź do strony [dokumentów Dockera](https://docs.docker.com/engine/installation/).

### Dlaczego XMRig?

[XMRig](https://github.com/xmrig/xmrig) według mnie jest porządną koparką. Posiada niezłą wydajność i statystyki i nie ma krzykliwego interfejsu i zależności. Kontener XMRig ma tylko ~4MB, co czyni go bardzo portatywnym.

#### Krok 1: Wydobywanie z XMRig

Uruchom następującą komendę:

```bash
# docker run --restart unless-stopped --read-only -m 50M -c 512 bitnn/alpine-xmrig -o POOL01 -o POOL02 -u WALLET -p PASSWORD -k
# docker run --restart unless-stopped --read-only -m 50M -c 512 bitnn/alpine-xmrig -o pool.supportxmr.com:7777 -u 45CJVagd6WwQAQfAkS91EHiTyfVaJn12uM4Su8iz6S2SHZ3QthmFM9BSPHVZY388ASWx8G9Wbz4BA24RQZUpGczb35fnnJz -p docker:secret -k
```

#### Krok 2: Nie istnieje krok 2

Zrobiłeś już wszystko, co trzeba. Zacząłeś właśnie wydobywanie w kontenerze Dockera przy użyciu XMRig. Wpisz `ctrl+c`, aby wyjść z koparki lub dodaj `-d` zaraz po `docker run`, aby uruchomić wydobywanie w tle.
