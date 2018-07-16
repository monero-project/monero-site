## مُقدمه

هذا الدليل ذو شقين ، سهولة التعدين في توزيعات لينكس وبعض الأمان الإضافي حول التعدين حيث أن معظم هذه البرامج لم تخضع للتدقيق الأمني.

في نهايه هذا الدليل ستكون قادراً علي علي النوم بطمأنينه أكثر علماً بأنه إذا تم إختراق برنامج التعدين فسيكون نظام التشغيل الخاص بك بمأمن.

### لماذا Docker

[Docker](https://www.docker.com/) يتم استخدامه حيث أنه الأكثر شهرة وغالباً ستجده مُثبت بالفعل.

الكونتينر المُستخدم هو [alpine-xmrig](https://hub.docker.com/r/bitnn/alpine-xmrig/) كما هو مُسمي هو مبني علي صوره [Alpine Linux](https://www.alpinelinux.org/) .

إذا كنت مهتمًا ببدء استخدام Docker ، فإليك بعض مراجع البدء الجيدة .
* Arch Linux Wiki [Docker Page](https://wiki.archlinux.org/index.php/Docker)
* Container Solutions [Security Cheat Sheet](http://container-solutions.com/content/uploads/2015/06/15.06.15_DockerCheatSheet_A2.pdf)
* Digital Oceans [Dockerfile Howto](https://www.digitalocean.com/community/tutorials/docker-explained-using-dockerfiles-to-automate-building-of-images).

للتثبيت الخاص بتوزيعه معينه يرجعي الرجوع إلي موقع  [Docker Docs](https://docs.docker.com/engine/installation/) .

### لماذا XMRig

[XMRig](https://github.com/xmrig/xmrig) هو برنامج تعدين قوي. نواتج وإحصائيات سلسه, لا يحتاج إلي تبعيات وحجمه هو حوالي ~4MB مما يجعله سهل التشغيل.

#### الخطوه 1: التعدين بواسطه XMRig

شَغِل التالي:

```bash
# docker run --restart unless-stopped --read-only -m 50M -c 512 bitnn/alpine-xmrig -o POOL01 -o POOL02 -u WALLET -p PASSWORD -k
# docker run --restart unless-stopped --read-only -m 50M -c 512 bitnn/alpine-xmrig -o pool.supportxmr.com:7777 -u 45CJVagd6WwQAQfAkS91EHiTyfVaJn12uM4Su8iz6S2SHZ3QthmFM9BSPHVZY388ASWx8G9Wbz4BA24RQZUpGczb35fnnJz -p docker:secret -k
```

#### الخطوه 2: لا يوجد خطوه أخري

لقد قمت بما يجب القيام به بالفعل. تقوم الأن بالتعدين بواسطه البرنامج إضغط  `ctrl+c` للخروج من برنامج التعدين او قم بإضافه  `-d` بعد  `docker run` حتي يعمل البرنامج في الخلفيه.

