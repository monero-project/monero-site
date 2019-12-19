{% assign version = '1.1.0' | split: '.' %}
{% include disclaimer.html translated="true" version=page.version %}
# تأكد من ملفات التسطيب علي ويندوز (للمُبتدئين)

التأكد من صحه ملفات التثبيت يجب أن يكون قبل فك الضغط أو التثبيت أو إستخدام البرامج. هذه هي الطريقه الوحيده للتأكد من حصولك علي البرامج الرسميه. إذا حصلت علي ملفات تثبيت مزيفه ( مثال هجمات التصيد و إختراق الإتصال وخلافه) بمتابعه هذا لدليل سوف تحمي نفسك من الوقوع ضحيه لهذه الملفات.

لحماية تكامل الثنائيات ، يوفر فريق مونيرو قائمة موقعة مشفرة لكل الملفات [SHA256] (https://en.wikipedia.org/wiki/SHA-2). إذا تم العبث بالملف الذي تم تنزيله ، فسيتم إنتاجه [هاش مختلف] (https://en.wikipedia.org/wiki/File_verification) عن الموجود في الملف.


هذا هو دليل المبتدئين لنظام التشغيل ويندوز وسوف يستخدم واجهه المستخدم الرسوميه بشكل حصري. وسيوجهك خلال عملية تثبيت البرنامج المطلوب واستيراد مفتاح التوقيع وتنزيل الملفات الضرورية وأخيرًا التحقق من صحة ملف التثبيت.

## قائمه المحتويات

### [1. Gpg4win مُثبِت](#1-using-gpg4win-installer)
  - [1.1. الحصول علي مُثبت Gpg4win ](#11-getting-gpg4win-installer)
    + [1.1.1. تنزيل Gpg4win](#111-download-gpg4win)
    + [1.1.2. تشغيل Gpg4win](#112-launch-gpg4win)
  - [1.2. إستخدام مُثبت Gpg4win](#12-use-gpg4win-installer)
### [2. إستيراد مفتاح التوقيع ](#2-monero-signing-key)
  - [2.1. تنزيل مفتاح التوقيع ](#21-download-signing-key)
  - [2.2. تهيئة Kleopatra](#22-initialize-kleopatra)
    + [2.2.1. إستيراد مفتاح التوقيع](#221-import-signing-key)
    + [2.2.2. إنشاء زوج مفتاح](#222-create-key-pair)
  - [2.3. تحقق من مفتاح التوقيع](#23-verify-signing-key)
### [3. تحقق من ملف الهاش](#3-hash-file-verification)
  - [3.1. تحميل ملف الهاش ](#31-download-hash-file)
  - [3.2. تحقق من ملف الهاش](#32-verify-hash-file)
### [4. التحقق من ملف التثبيت](#4-binary-file-verification)
  - [4.1. تحميل ملف التثبيت](#41-download-binary)
  - [4.2. التحقق من ملف التثبيت](#42-verify-binary)

## 1. إستخدام مُثبت Gpg4win

سيغطي هذا القسم تثبيت برنامج التشفير. لا يأتي مع ويندوز الأدوات المطلوبة للتحقق من الملفات. لتثبيت هذه الأدوات يمكنك استخدام مثبت Gpg4win.

### 1.1. الحصول علي مُثبت Gpg4win

#### 1.1.1. تنزيل Gpg4win

في المتصفح إذهب إلي [gpg4win.org](https://gpg4win.org) وقم بتنزيل المُثبت بالضغط علي الزر الأخضر.

![gpg4win download button](png/verify_binary_windows_beginner/verify-win_gpg4win-site-downloadbutton.png)

سيتم نقلك إلى صفحة التبرع إذا كنت لا ترغب في التبرع فحدد `$ 0` ثم ستتمكن من النقر فوق `download`.

![gpg4win site donation](png/verify_binary_windows_beginner/verify-win_gpg4win-site-donation.png)

إضغط `Save File`.

![gpg4win site save file](png/verify_binary_windows_beginner/verify-win_gpg4win-site-savefile.png)

إختار مكان التنزيل ثم إضغط `Save`.

![gpg4win site download location](png/verify_binary_windows_beginner/verify-win_gpg4win-site-savefile-location.png)

#### 1.1.2. تشغيل Gpg4win

عند انتهاء التنزيل ، افتح المجلد المُحدد.

![gpg4win site open folder](png/verify_binary_windows_beginner/verify-win_gpg4win-site-savefile-openfolder.png)

انقر نقرًا مزدوجًا على ملف gpg4win الذي تم تنزيله للتشغيل.

![gpg4win launch](png/verify_binary_windows_beginner/verify-win_gpg4win-launch.png)

### 1.2. إستخدام مُثبت Gpg4win

سيتم عرض شاشة التحقق الأمني ، انقر فوق "Run".

![gpg4win installer security](png/verify_binary_windows_beginner/verify-win_gpg4win-install-security.png)

إختار اللغه ثم إضغط `OK`.

![gpg4win installer language](png/verify_binary_windows_beginner/verify-win_gpg4win-install-language.png)

ستظهر شاشة الترحيب ، انقر فوق `Next`.

![gpg4win installer welcome](png/verify_binary_windows_beginner/verify-win_gpg4win-install-welcome.png)

الآن سترى شاشة اختيار المُكونات ، يجب عليك على الأقل إختيار `Kleopatra` لهذا الدليل. قم بعمل اختياراتك ، انقر فوق `Next`.

![gpg4win installer components](png/verify_binary_windows_beginner/verify-win_gpg4win-components.png)

من الأفضل ترك موقع التثبيت الافتراضي ، انقر فوق `Install`.

![gpg4win installer location](png/verify_binary_windows_beginner/verify-win_gpg4win-install.png)

اكتمل التثبيت, انقر علي `Next`.

![gpg4win installer complete](png/verify_binary_windows_beginner/verify-win_gpg4win-install-complete.png)

أنقر علي `Finish`.

![gpg4win installer finish](png/verify_binary_windows_beginner/verify-win_gpg4win-install-finish.png)

## 2. مُفتاح توقيع مونيرو

سيٌغطي هذا القسم تنزيل مفتاح توقيع مونيرو والتأكد من أن المفتاح صحيح و إستيراد المفتاح إلي برنامج التوقيع الخاص بك. ملف الهاش الذي يُستخدم للتحقق من ملفات التثبيت يتم توقيعه بواسطه مفتاح توقيع مونيرو. حتي تتمكن من التحقق من الملفات يجب الحصول علي مفتاح التوقيع.

### 2.1. تنزيل مفتاح التوقيع

في متصفح الويب إذهب إلي [Fluffypony's GPG key](https://raw.githubusercontent.com/monero-project/monero/master/utils/gpg_keys/fluffypony.asc) لتنزيل المفتاح المُستخدم في توقيع ملفات تثبيت مونيرو. ثم قم بحفظ الصفحه عن طريق النقر بزر الفاره الأيمن وإختيار `Save Page As`.

![getkey right click](png/verify_binary_windows_beginner/verify-win_getkey-rightclick.png)

أترك المكان الإفتراضي وإنقر `Save`.

![getkey save file](png/verify_binary_windows_beginner/verify-win_getkey-savefilename.png)

### 2.2. تهيئه Kleopatra

إذا كانت هذه هي المرة الأولى التي تستخدم فيها Kleopatra ، فسيتعين عليك إنشاء زوج مفاتيح لنفسك.

تشغيل Kleopatra.

![kleo launch](png/verify_binary_windows_beginner/verify-win_kleopatra-launch.png)

#### 2.2.1. استيراد مفتاح التوقيع

أنقر `Import`.

![kleo firstrun import](png/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-importkey.png)

إدخل مجلد `Downloads` وإختر `fluffypony` وإضغط `Open`.

![kleo firstrun key location](png/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-import-location.png)

ابدأ عملية اعتماد المفتاح من خلال النقر `Yes`.

![kleo firstrun start process](png/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-startverifyprocess.png)

#### 2.2.2. إنشاء زوج مفتاح

ابدأ عملية إنشاء المفتاح بالنقر فوق `Yes`.

![kleo firstrun start key create](png/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-createkeysnow.png)

املأ بعض التفاصيل لـ `Name` و `Email`, وانقر `Next`.

![kleo firstrun key details](png/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-createkeydetails.png)

تحقق من التفاصيل ، انقر فوق `Create`.

![kleo firstrun verify key details](png/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-verifykeydetails.png)

تعيين كلمة مرور ، انقر فوق `OK`.

![kleo firstrun set key pass](png/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-createkeys-pinentry.png)

إنقر `Finish`.

![kleo firstrun finish create key](png/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-keycreate-success.png)

### 2.3. تحقق من مفتاح التوقيع

تحقق بصريا أن بصمة المفتاح الذي ينتمي إلى ريكاردو هو `BDA6BD7042B721C467A9759D7455C5E3C0CDCEB9`.

![kleo certify fingerprint](png/verify_binary_windows_beginner/verify-win_kleopatra-certify-fingerprint.png)

إذا كانت البصمه **مُتطابقه** إضغط 'Next'.

إذا كانت البصمه **غير مُتطابقه** **لا تُكمل** بل إحذف الملف `fluffypony` من مجلد `Downloads`وعُد إلي  [القسم 2.1](#21-download-signing-key).

إترك `Certify only for myself` مُختاره وإنقر `Certify`.

![kleo certify for self](png/verify_binary_windows_beginner/verify-win_kleopatra-certify-forself.png)

أدخل كلمة المرور الخاصة بك وإنقر `OK`.

![kleo certify pass](png/verify_binary_windows_beginner/verify-win_kleopatra-certify-pinentry.png)

إنقر `Finish`.

![kleo certify finish](png/verify_binary_windows_beginner/verify-win_kleopatra-certify-finish.png)

## 3. التحقق من ملف الهاش

سيغطي هذا القسم تنزيل الملف الموقّع للهاشات المعروفة والتحقق من صحته.

### 3.1. تنزيل ملف الهاش

في متصفح الويب ، انتقل إلى [صفحة الهاش getmonero.org] ({{ site.baseurl }}/downloads/hashes.txt). انقر بزر الماوس الأيمن على الصفحة ، وحدد `Save Page As`.

![hashes right click](png/verify_binary_windows_beginner/verify-win_hashes-getmonero-rightclick.png)

اترك الموقع الافتراضي ، انقر فوق `Save`.

![hashes save file](png/verify_binary_windows_beginner/verify-win_hashes-getmonero-savename.png)

### 3.2. تأكد من ملف الهاش

في Kleopatra إنقر علي زر `Decrypt/Verify`.

![hashes kleo verify button](png/verify_binary_windows_beginner/verify-win_hashes-kleo-verify-button.png)

إذهب إلي مجلد 'Downloads' وإختار ملف 'hashes' وإنقر 'open'.

![hashes kleo open file](png/verify_binary_windows_beginner/verify-win_hashes-kleo-verify-button-filename.png)

سوف يعلمك Kleopatra إذا كان توقيع الملفات صالحًا.

إذا كان التوقيع ** صحيح ** سترى هذا:

![hashes kleo goodsig](png/verify_binary_windows_beginner/verify-win_hashes-kleo-goodsig.png)

إذا كان التوقيع ** غير صحيح ** سترى هذا:

![hashes kleo badsig](png/verify_binary_windows_beginner/verify-win_hashes-kleo-badsig.png)

إذا كان التوقيع **صحيح** إنقر علي `Discard` ثم إنتقل.

إذا كان التوقيع **غير صحيح** , **لا تُكمل** وإحذف ملف hashes` من مجلد `Downloads` وعد إلي  [القسم 3.1](#31-download-hash-file).

## 4. التحقق من ملفات التثبيت

سيغطي هذا القسم تنزيل ملف تثبيت مونيرو والتحقق من صحته.

### 4.1. تنزيل ملف التثبيت

في المتصفح إذهب إلي [getmonero.org فصحه التنزيلات ]({{ site.baseurl }}/downloads/#windows), وإختر الملف المناسب لنظام تشغيلك.

![binary getmonero](png/verify_binary_windows_beginner/verify-win_binary-getmonero-windowsfiles.png)

إترك `Save File` مُختاره وإنقر  `OK`.

![binary getmonero save](png/verify_binary_windows_beginner/verify-win_binary-getmonero-save-file.png)

اترك الموقع الافتراضي ، انقر فوق `Save`.

![binary getmonero save location](png/verify_binary_windows_beginner/verify-win_binary-getmonero-save-location.png)

### 4.2. تأكد من ملف التثبيت

في مدير الملفات انتقل إلى دليل "Downloads" وافتح ملف `hashes` باستخدام معالج النصوص.

![binary open hashes.txt](png/verify_binary_windows_beginner/verify-win_binary-word-hashfile.png)

إفتح سطر الأوامر (`cmd.exe`).

![binary launch term](png/verify_binary_windows_beginner/verify-win_binary-cmd-launch.png)

إذهب إلي مجلد 'Downloads' بإستخدام أمر : `cd Downloads`.

![binary cmd cd](png/verify_binary_windows_beginner/verify-win_binary-cmd-cd.png)

إحسب الهاش الخاص بملف تثبيت مونيرو بالأمر التالي : `certUtil -hashfile monero-gui-win-x64-v0.11.1.0.zip SHA256`  ( إذا قمت بتنزيل واجهه سطر الأوامر قم  بتبديل `monero-gui-win-x64-v0.11.1.0.zip` وفقاً لذلك)

![binary cmd certutil](png/verify_binary_windows_beginner/verify-win_binary-cmd-certutil.png)

قارن الهاش من سطر الأوامر بالهاش في الملف . يجب أن يكونوا متطابقين (يُمكن تجاهل المسافات).

![binary compare hashes](png/verify_binary_windows_beginner/verify-win_binary-word-cmd-compare.png)

إذا كان الهاش **متطابق** تكون قد إنتهيت من التحقق! يُمكنك التأكد أن ملفات التثبيت لديك أصليه, يمكنك الأن فك الضغط والبدأ في التثبيت وإستخدام الملفات بشكل طبيعي.

إذا كان الهاش **غير متطابق** **لا تُكمل** قم بمسح ملف التثبيت من مجلد 'Downloads' وإرجع إلي [القسم 4.1](#41-download-binary).
