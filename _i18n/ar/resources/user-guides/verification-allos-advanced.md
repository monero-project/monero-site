{% include disclaimer.html translated="yes" translationOutdated="no" %}

التأكد من صحه ملفات التثبيت يجب أن يكون قبل فك الضغط أو التثبيت أو إستخدام
البرامج. هذه هي الطريقه الوحيده للتأكد من حصولك علي البرامج الرسميه. إذا
حصلت علي ملفات تثبيت مزيفه ( مثال هجمات التصيد و إختراق الإتصال وخلافه)
بمتابعه هذا لدليل سوف تحمي نفسك من الوقوع ضحيه لهذه الملفات.

لحماية تكامل الثنائيات ، يوفر فريق مونيرو قائمة موقعة مشفرة لكل الملفات
[SHA256] (https://en.wikipedia.org/wiki/SHA-2). إذا تم العبث بالملف الذي تم
تنزيله ، فسيتم إنتاجه [هاش مختلف]
(https://en.wikipedia.org/wiki/File_verification) عن الموجود في الملف.

هذا دليل متقدم يستخدم سطر الأوامر لنُظم تشغيل لينُكس وويندوز وماك سيوجهك
خلال عملية تثبيت البرامج المطلوبه واستيراد مفتاح التوقيع وتنزيل الملفات
الضرورية وأخيرًا التحقق من صحة ملفات التثبيت.

## Table of Contents:

### - [Install GnuPG](#installing-gnupg)

### - [Verify & Import Signing Key](#verify-and-import-signing-key)

### - [Download & Verify Hash File](#download-and-verify-hash-file)

### - [Download & Verify Binary](#download-and-verify-binary)

## Installing GnuPG

+ في ويندوز انتقل إلى صفحة التنزيل [Gpg4win]
(https://gpg4win.org/download.html) واتبع الإرشادات الخاصة بالتثبيت.

+ في ماك انتقل إلى صفحة تنزيل [Gpgtools] (https://gpgtools.org/) واتبع
الإرشادات الخاصة بالتثبيت.

+ في ليُنكس ، GnuPG مُثبّت افتراضيًا.

## Verify and Import Signing Key

سيغطي هذا القسم الحصول على مفتاح توقيع مونيرو والتأكد من صحته واستيراد
المفتاح إلى GnuPG.

### Get Signing Key

علي ويندوز أو ماك إذهب إلي [binaryFate's GPG
key](https://raw.githubusercontent.com/monero-project/monero/master/utils/gpg_keys/binaryfate.asc)
لتحميل المُفتاح المُستخدم في توقيع الملفات وقم بحفظه بإسم `binaryfate.asc`
في مجلدك الرئيسي.

في ليُنكس يمكنك تحميل ملف مفتاح التوقيع من خلال الأمر التالي :

```
wget -O binaryfate.asc
https://raw.githubusercontent.com/monero-project/monero/master/utils/gpg_keys/binaryfate.asc
```

### Verify Signing Key

في جميع أنظمة التشغيل ، تحقق من بصمة `binaryfate.asc` بإصدار الأمر التالي في
سطر الأوامر :

``` gpg --keyid-format long --with-fingerprint binaryfate.asc ```


تحقق من تطابق البصمه بالتالي :

```
pub   rsa4096/F0AF4D462A0BDF92 2019-12-12 [SCEA]
      Key fingerprint = 81AC 591F E9C4 B65C 5806  AFC3 F0AF 4D46 2A0B DF92
uid                           binaryFate <binaryfate@getmonero.org>
```

إذا كانت البصمه **صحيحه** يمكنك المُتابعه.

إذا كانت البصمه ** غير متطابقه ** **لا تُكمل** بل قم بحذف ملف
`binaryfate.asc` وإذهب إلي [فصل 2.1](#21-get-signing-key).

### Import Signing Key

من سطر الأوامر ، قم باستيراد مفتاح التوقيع:

``` gpg --import binaryfate.asc ```

إذا كانت هذه هي المرة الأولى التي تستورد فيها المفتاح ، فسيبدو الناتج كما
يلي:

```
gpg: key F0AF4D462A0BDF92: 2 signatures not checked due to missing keys
gpg: key F0AF4D462A0BDF92: public key "binaryFate <binaryfate@getmonero.org>" imported
gpg: Total number processed: 1
gpg:               imported: 1
gpg: marginals needed: 3  completes needed: 1  trust model: pgp
```

إذا قمت باستيراد المفتاح مسبقًا ، فسيبدو الناتج كما يلي:

```
gpg: key F0AF4D462A0BDF92: "binaryFate <binaryfate@getmonero.org>" not changed
gpg: Total number processed: 1
gpg:              unchanged: 1
```

## Download and Verify Hash File

سيغطي هذا القسم تنزيل ملف الهاش والتحقق من صحته.

### Get Hash File

على نظام ويندوز أو ماك انتقل إلى [ملف الهاشات على getmonero.org] ({{
site.baseurl }}/downloads/hashes.txt) واحفظ الصفحة كـ `hashes.txt` إلى مجلدك
الرئيسي.

في ليُنكس يمكنك تنزيل ملف الهاشات الموقّع عن طريق إصدار الأمر التالي:

``` wget -O hashes.txt https://www.getmonero.org/downloads/hashes.txt ```

### Verify Hash File

ملف الهاش موقع بمفتاح `81AC 591F E9C4 B65C 5806 AFC3 F0AF 4D46 2A0B DF92`,
كما هو موضح في الناتج أدناه.

في جميع أنظمة التشغيل ، تحقق من توقيع ملف التجزئة عن طريق إصدار الأمر التالي
في سطر الأوامر:

``` gpg --verify hashes.txt ```

إذا كان الملف صحيح ، سيبدو الناتج كما يلي:

```
gpg:                using RSA key 81AC591FE9C4B65C5806AFC3F0AF4D462A0BDF92
gpg: Good signature from "binaryFate <binaryfate@getmonero.org>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: 81AC 591F E9C4 B65C 5806  AFC3 F0AF 4D46 2A0B DF92
```

إذا كان الناتج يُظهر ** Good signature ** كما هو موضح في المثال فيمكنك
المتابعة.

إذا كان الناتج **BAD signature** **لا تُكمل** بل قم بحذف ملف `hashes.txt`
وإرجع إلي [القسم 3.1](#31-get-hash-file).

## Download and Verify Binary

سيغطي هذا القسم تنزيل برنامج مونيرو لنظام التشغيل الخاص بك ، والحصول على هاش
`SHA256` من التنزيل الخاص بك ، والتحقق من صحته.

### Get Monero binary

On Windows or Mac, go to [getmonero.org]({{ site.baseurl_root }}/downloads/)
and download the correct file for your operating system. Save the file to
your home directory. **Do not extract the files yet.**

في Linux ، يمكنك تنزيل واجهه سطر الأوامر عن طريق إصدار الأمر التالي:

```
wget -O monero-linux-x64-v0.15.0.1.tar.bz2 https://downloads.getmonero.org/cli/linux64
```

### Binary Verification on Linux or Mac

هذه الخطوات لنظامي تشغيل لينُكس وماك. من سطر الأوامر إحصل علي هاش `SHA256`
لملف التثبيت. كمثال سيستخدم هذا الدليل واجهه المستخدم الرسوميه علي ليُنكس ,
إستبدل `monero-gui-linux-x64-v0.15.0.1.tar.bz2` بإسم ملف التثبيت الذي قمت
بتنزيله في [الفصل 4.1](#41-get-monero-binary).

```
shasum -a 256 monero-linux-x64-v0.15.0.1.tar.bz2
```

سيبدو الناتج كهذا ، ولكن سيكون مختلفًا لكل ملف. يجب أن يتطابق هاش `SHA256`
الخاصة بك مع الهاش في القائمة المدرجة في ملف` hashes.txt` لملف التثبيت.

```
8d61f992a7e2dbc3d753470b4928b5bb9134ea14cf6f2973ba11d1600c0ce9ad 
monero-linux-x64-v0.15.0.1.tar.bz2
```

إذا كان الهاش **مُتطابق** يمكنك الأن فك الضفط والتثبيت.

إذا كان الهاش **غير مُتطابق** , ** لا تُكمل ** بل إحذف ملف التثبيت وإرجع إلي
[القسم 4.1](#41-get-monero-binary).

### Binary Verification on Windows

من سطر الأوامر احصل على هاش `SHA256` من ملف التثبيت الذي تم تنزيله. على سبيل
المثال ، سيستخدم هذا الدليل ثنائي واجهة المستخدم الرسومية لنظام ويندوز ، 64
بت. استبدل `monero-gui-win-x64-v0.15.0.1.zip` باسم الملف الذي قمت بتنزيله في
[القسم 4.1](#41-get-monero-binary).

``` certUtil -hashfile monero-gui-win-x64-v0.12.0.0.zip SHA256 ```

سيبدو الناتج كهذا ، ولكن سيكون مختلفًا لكل ملف. يجب أن يتطابق هاش `SHA256`
الخاصة بك مع الهاش في القائمة المدرجة في ملف` hashes.txt` لملف التثبيت.

```
SHA256 hash of file monero-gui-win-x64-v0.12.0.0.zip: 4b 9f 31 68 6e ca
ad 97 cd b1 75 e6 57 4b f3 07 f8 d1 c4 10 42 78 25 f4 30 4c 21 da 8a ac 18
64 CertUtil: -hashfile command completed successfully. 
```

إذا كان الهاش **مُتطابق** يمكنك الأن فك الضفط والتثبيت.

إذا كان الهاش **غير مُتطابق** , ** لا تُكمل ** بل إحذف ملف التثبيت وإرجع إلي
[القسم 4.1](#41-get-monero-binary).
