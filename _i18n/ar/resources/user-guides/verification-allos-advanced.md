{% assign version = '1.1.0' | split: '.' %}
{% include disclaimer.html translated="true" version=page.version %}
#  التأكد من ملفات التثبيت : ليُنكس وماك وويندوز بإستخدام واجهه سطر الأوامر (مُتطور)

التأكد من صحه ملفات التثبيت يجب أن يكون قبل فك الضغط أو التثبيت أو إستخدام البرامج. هذه هي الطريقه الوحيده للتأكد من حصولك علي البرامج الرسميه. إذا حصلت علي ملفات تثبيت مزيفه ( مثال هجمات التصيد و إختراق الإتصال وخلافه) بمتابعه هذا لدليل سوف تحمي نفسك من الوقوع ضحيه لهذه الملفات.

لحماية تكامل الثنائيات ، يوفر فريق مونيرو قائمة موقعة مشفرة لكل الملفات [SHA256] (https://en.wikipedia.org/wiki/SHA-2). إذا تم العبث بالملف الذي تم تنزيله ، فسيتم إنتاجه [هاش مختلف] (https://en.wikipedia.org/wiki/File_verification) عن الموجود في الملف.

هذا دليل متقدم يستخدم سطر الأوامر لنُظم تشغيل لينُكس وويندوز وماك سيوجهك خلال عملية تثبيت البرامج المطلوبه واستيراد مفتاح التوقيع وتنزيل الملفات الضرورية وأخيرًا التحقق من صحة ملفات التثبيت.

## قائمه المحتوي:

### [1. تثبيت GnuPG](#1-installing-gnupg)
### [2. تأكيد & إستيراد ملف مفتاح التوقيع](#2-verify-and-import-signing-key)
  + [2.1. إحصل علي مفتاح التوقيع ](#21-get-signing-key)
  + [2.2. تأكد من مفتاح التوقيع ](#22-verify-signing-key)
  + [2.3. إستيراد مفتاح التوقيع ](#23-import-signing-key)
### [3. تنزيل & تأكد من ملف الهاش](#3-download-and-verify-hash-file)
  + [3.1. إحصل علي ملف الهاش ](#31-get-hash-file)
  + [3.2. تأكد من ملف الهاش ](#32-verify-hash-file)
### [4. تحميل & تأكد من ملفات التسطيب ](#4-download-and-verify-binary)
  + [4.1. الحصول علي ملفات التسطيب](#41-get-monero-binary)
  + [4.2. تأكد من الملفات علي ليُنكس اوماك ](#42-binary-verification-on-linux-or-mac)
  + [4.3. تأكد من الملفات علي ويندوز](#43-binary-verification-on-windows)

## 1. تثبيت GnuPG

+ في ويندوز انتقل إلى صفحة التنزيل [Gpg4win] (https://gpg4win.org/download.html) واتبع الإرشادات الخاصة بالتثبيت.

+ في ماك انتقل إلى صفحة تنزيل [Gpgtools] (https://gpgtools.org/) واتبع الإرشادات الخاصة بالتثبيت.

+ في ليُنكس ، GnuPG مُثبّت افتراضيًا.

## 2. تأكيد & إستيراد ملف مفتاح التوقيع

سيغطي هذا القسم الحصول على مفتاح توقيع مونيرو والتأكد من صحته واستيراد المفتاح إلى GnuPG.

### 2.1. إحصل علي مفتاح التوقيع

علي ويندوز أو ماك إذهب إلي [Fluffypony's GPG key](https://raw.githubusercontent.com/monero-project/monero/master/utils/gpg_keys/fluffypony.asc) لتحميل المُفتاح المُستخدم في توقيع الملفات وقم بحفظه بإسم `fluffypony.asc` في مجلدك الرئيسي.

في ليُنكس يمكنك تحميل ملف مفتاح التوقيع من خلال الأمر التالي :

```
wget -O fluffypony.asc https://raw.githubusercontent.com/monero-project/monero/master/utils/gpg_keys/fluffypony.asc
```

### 2.2. تأكد من مفتاح التوقيع

في جميع أنظمة التشغيل ، تحقق من بصمة `fluffypony.asc` بإصدار الأمر التالي في سطر الأوامر :

```
gpg --keyid-format long --with-fingerprint fluffypony.asc
```


تحقق من تطابق البصمه بالتالي :

```
pub  2048R/7455C5E3C0CDCEB9 2013-04-08 Riccardo Spagni <ric@spagni.net>
      Key fingerprint = BDA6 BD70 42B7 21C4 67A9  759D 7455 C5E3 C0CD CEB9
sub  2048R/55432DF31CCD4FCD 2013-04-08
```

إذا كانت البصمه **صحيحه** يمكنك المُتابعه.

إذا كانت البصمه ** غير متطابقه ** **لا تُكمل** بل قم بحذف ملف `fluffypony.asc` وإذهب إلي [فصل 2.1](#21-get-signing-key).

### 2.3. إستيراد مفتاح التوقيع

من سطر الأوامر ، قم باستيراد مفتاح التوقيع:

```
gpg --import fluffypony.asc
```

إذا كانت هذه هي المرة الأولى التي تستورد فيها المفتاح ، فسيبدو الناتج كما يلي:

```
gpg: key 0x7455C5E3C0CDCEB9: 2 signatures not checked due to missing keys
gpg: key 0x7455C5E3C0CDCEB9: public key "Riccardo Spagni <ric@spagni.net>" importe
d
gpg: Total number processed: 1
gpg:               imported: 1
gpg: no ultimately trusted keys found
```

إذا قمت باستيراد المفتاح مسبقًا ، فسيبدو الناتج كما يلي:

```
gpg: key 0x7455C5E3C0CDCEB9: "Riccardo Spagni <ric@spagni.net>" not changed
gpg: Total number processed: 1
gpg:              unchanged: 1
```

## 3. تنزيل & تأكد من ملف الهاش

سيغطي هذا القسم تنزيل ملف الهاش والتحقق من صحته.

### 3.1. إحصل علي ملف الهاش

على نظام ويندوز أو ماك انتقل إلى [ملف الهاشات على getmonero.org] ({{ site.baseurl }}/downloads/hashes.txt) واحفظ الصفحة كـ `hashes.txt` إلى مجلدك الرئيسي.

في ليُنكس يمكنك تنزيل ملف الهاشات الموقّع عن طريق إصدار الأمر التالي:

```
wget -O hashes.txt {{ site.baseurl }}/downloads/hashes.txt
```

### 3.2. تأكد من ملف الهاش

ملف الهاش موقع بمفتاح  `94B7 38DD 3501 32F5 ACBE  EA1D 5543 2DF3 1CCD 4FCD`, الذي هو مفتاح فرعي من المفتاح `BDA6 BD70 42B7 21C4 67A9  759D 7455 C5E3 C0CD CEB9` (كما هو موضح في الناتج أدناه).

في جميع أنظمة التشغيل ، تحقق من توقيع ملف التجزئة عن طريق إصدار الأمر التالي في سطر الأوامر:

```
gpg --verify hashes.txt
```

إذا كان الملف صحيح ، سيبدو الناتج كما يلي:

```
gpg: Signature made Thu 05 Apr 2018 06:07:35 AM MDT
gpg:                using RSA key 94B738DD350132F5ACBEEA1D55432DF31CCD4FCD
gpg: Good signature from "Riccardo Spagni <ric@spagni.net>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: BDA6 BD70 42B7 21C4 67A9  759D 7455 C5E3 C0CD CEB9
     Subkey fingerprint: 94B7 38DD 3501 32F5 ACBE  EA1D 5543 2DF3 1CCD 4FCD
```

إذا كان الناتج يُظهر ** Good signature ** كما هو موضح في المثال فيمكنك المتابعة.

إذا كان الناتج **BAD signature** **لا تُكمل** بل قم بحذف ملف `hashes.txt` وإرجع إلي [القسم 3.1](#31-get-hash-file).

## 4. تحميل & تأكد من ملفات التسطيب

سيغطي هذا القسم تنزيل برنامج مونيرو لنظام التشغيل الخاص بك ، والحصول على هاش `SHA256` من التنزيل الخاص بك ، والتحقق من صحته.

### 4.1. الحصول علي ملفات التسطيب

علي ويندوز أو ماك توجه إلي [getmonero.org]({{ site.baseurl }}/downloads/) وقم بتنزيل الملف الخاص بنظام التشغيل الخاص بك. قم بحفظ الملف لمجلدك الرئيسي. **لا تقم بفك الضغط **

في Linux ، يمكنك تنزيل واجهه سطر الأوامر عن طريق إصدار الأمر التالي:

```
wget -O monero-linux-x64-v0.12.0.0.tar.bz2 https://downloads.getmonero.org/cli/linux64
```

### 4.2. تأكد من الملفات علي ليُنكس اوماك

هذه الخطوات لنظامي تشغيل لينُكس وماك. من سطر الأوامر إحصل علي هاش  `SHA256` لملف التثبيت. كمثال سيستخدم هذا الدليل واجهه المستخدم الرسوميه علي ليُنكس , إستبدل `monero-gui-linux-x64-v0.12.0.0.tar.bz2` بإسم ملف التثبيت الذي قمت بتنزيله في [الفصل 4.1](#41-get-monero-binary).

```
shasum -a 256 monero-gui-linux-x64-v0.12.0.0.tar.bz2
```

سيبدو الناتج كهذا ، ولكن سيكون مختلفًا لكل ملف. يجب أن يتطابق هاش `SHA256` الخاصة بك مع الهاش في القائمة المدرجة في ملف` hashes.txt` لملف التثبيت.

```
fb0f43387b31202f381c918660d9bc32a3d28a4733d391b1625a0e15737c5388  monero-gui-linux-x64-v0.12.0.0.tar.bz2
```

إذا كان الهاش **مُتطابق** يمكنك الأن فك الضفط والتثبيت.

إذا كان الهاش **غير مُتطابق** , ** لا تُكمل ** بل إحذف ملف التثبيت وإرجع إلي [القسم 4.1](#41-get-monero-binary).

### 4.3. تأكد من الملفات علي ويندوز

من سطر الأوامر احصل على هاش `SHA256` من ملف التثبيت الذي تم تنزيله. على سبيل المثال ، سيستخدم هذا الدليل ثنائي واجهة المستخدم الرسومية لنظام ويندوز ، 64 بت. استبدل `monero-gui-win-x64-v0.12.0.0.zip` باسم الملف الذي قمت بتنزيله في [القسم 4.1](#41-get-monero-binary).

```
certUtil -hashfile monero-gui-win-x64-v0.12.0.0.zip SHA256
```
سيبدو الناتج كهذا ، ولكن سيكون مختلفًا لكل ملف. يجب أن يتطابق هاش `SHA256` الخاصة بك مع الهاش في القائمة المدرجة في ملف` hashes.txt` لملف التثبيت.

```
SHA256 hash of file monero-gui-win-x64-v0.12.0.0.zip:
4b 9f 31 68 6e ca ad 97 cd b1 75 e6 57 4b f3 07 f8 d1 c4 10 42 78 25 f4 30 4c 21 da 8a ac 18 64
CertUtil: -hashfile command completed successfully.
```

إذا كان الهاش **مُتطابق** يمكنك الأن فك الضفط والتثبيت.

إذا كان الهاش **غير مُتطابق** , ** لا تُكمل ** بل إحذف ملف التثبيت وإرجع إلي [القسم 4.1](#41-get-monero-binary).
