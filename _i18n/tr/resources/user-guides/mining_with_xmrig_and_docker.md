## Giriş

Bu rehber iki bölümdür, Linux dağıtımlarda kolay kullanım ve madenciler için ekstra güvenlik (madencilerin çoğu güvenlik denetlemesinden geçmediği için).

Madencinizin kötüye kullanılması durumunda işletim sisteminize zarar gelmeyeceğini bildiğinizden, bu rehberi okuduktan sonra daha rahat uyuyabileceksiniz.

### Neden Docker

[Docker](https://www.docker.com/) en bilinen ve hali hazırda yüklenmiş olma ihtimali olan bir container olduğundan tercih edilmektedir.

Benim şu anda kullandığım container [alpine-xmrig](https://hub.docker.com/r/bitnn/alpine-xmrig/). İsmini [Alpine Linux](https://www.alpinelinux.org/) imajından almaktadır.

Docker’a başlamak için daha fazla bilgiyi, alttaki birkaç iyi referans dökümanında bulabilirsiniz.
* Arch Linux Wiki [Docker Page](https://wiki.archlinux.org/index.php/Docker)
* Container Solutions [Security Cheat Sheet](http://container-solutions.com/content/uploads/2015/06/15.06.15_DockerCheatSheet_A2.pdf)
* Digital Oceans [Dockerfile Howto](https://www.digitalocean.com/community/tutorials/docker-explained-using-dockerfiles-to-automate-building-of-images).

Dağıtım bazlı kurulum için lütfen [Docker Docs](https://docs.docker.com/engine/installation/) web sayfasına bakınız.

### Neden XMRig

[XMRig](https://github.com/xmrig/xmrig) bana göre çok sağlam bir madenci yazılımı. İyi çıktı ve istatistikler, gösterişsiz bir web arayüzü var ve herhangi bir bağımlılığı yok. Boyutu da sadece ~4MB, ki bu onu oldukça taşınabilir hale getirmekte.

#### 1. Adım: XMRig ile Madencilik

Alttaki komutları çalıştırın

```bash
# docker run --restart unless-stopped --read-only -m 50M -c 512 bitnn/alpine-xmrig -o POOL01 -o POOL02 -u WALLET -p PASSWORD -k
# docker run --restart unless-stopped --read-only -m 50M -c 512 bitnn/alpine-xmrig -o pool.supportxmr.com:7777 -u 45CJVagd6WwQAQfAkS91EHiTyfVaJn12uM4Su8iz6S2SHZ3QthmFM9BSPHVZY388ASWx8G9Wbz4BA24RQZUpGczb35fnnJz -p docker:secret -k
```

#### 2. Adım: 2. Adım Yok

Yapmanız gereken her şeyi yaptınız. Artık docker container kullanarak XMRig ile madencilik yapıyorsunuz. Madenciden çıkmak için `ctrl+c` yapın veya `docker run` komutunun arkasına `-d` ekleyerek madenciyi arka planda çalıştırın.
