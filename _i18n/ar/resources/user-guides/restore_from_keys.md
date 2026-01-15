{% include disclaimer.html translated="yes" translationOutdated="no" %}

إستعاده المحفظه من المفاتيح أمر بسيط للغايه إذا توافرت لديك البيانات اللازمه
هذا الدليل سيُساعدك علي إستعاده محفظتك. ملاحظه: كلمه المرور غير ضروريه
لإستعاده المحفظه من المفاتيح.

يجب أن يكون لديك 3 أجزاء من البيانات لإستعاده المحفظه أو ملف .keys الذي
يحتوي على هذه المعلومات وكلمة المرور لفك تشفيره. مكونات المحفظة الثلاثة التي
تحتاجها هي:

1. **العنوان**
2. **مفتاح الإنفاق الخاص**
3. **مفتاح الرؤيه الخاص**


#### واجهه سطر الأوامر (CLI)

شغّل المحفظه بهذا الأمر:

`./monero-wallet-cli --generate-from-keys New_Wallet_Name.abc`

سيتم سؤالك عن العنوان و مفتاح الإنفاق و مفتاح الرؤيه , وأخيراً تعيين كلمه سر
جديده حتي يتم إعاده إنشاء المحفظه.

تشغيل هذا الأمر سيؤدي إلي إعاده إنشاء محفظتك والسماح لك بتعيين كلمه مرور
جديده.

إذا واجهت أي مشكله تشغيل الأمر `./monero-wallet-cli --help` سيقوم بعرض
الخيارات المتاحه أمامك عند بدء تشغيل المحفظه.بمجرد دخولك إلي المحفظه تشغيل
الأمر `help` سيقوم بعرض قائمه الأوامر المتاحه لك داخل المحفظه.

#### الواجهه الرسوميه (GUI)

شغّل `monero-wallet-gui`. إذا كانت هذه هي المره الأولي التي تقوم فيها
بتشغيلها فإذهب إلي الخطوه التاليه, غير ذلك إضغط `إلغاء`:

![cancel
opening](/img/resources/user-guides/en/restore_from_keys/cancel-opening.avif)

إختر 'إستعاده المحفظه من المفاتيح أو كلمات الإستعاده':

![choose
restore](/img/resources/user-guides/en/restore_from_keys/choose-restore.avif)

Select `Restore from keys`, give your wallet a name & storage location, and
complete the `Account address (public)`, `View key (private)` & `Spend key
(private)`. Optionally, specify a `Restore height (optional)` to avoid
scanning of oldest blocks. Then click the `Next` button:

![restore
wallet](/img/resources/user-guides/en/restore_from_keys/restore-wallet.avif)

On the next page, give your wallet a strong password and confirm it before
clicking the `Next` button:

![wallet
password](/img/resources/user-guides/en/restore_from_keys/wallet-password.avif)

Specify your daemon settings and click the `Next` button:

![daemon
settings](/img/resources/user-guides/en/restore_from_keys/daemon-settings.avif)

Click on `Create wallet` to complete the restoration process:

![all set
up](/img/resources/user-guides/en/restore_from_keys/all-set-up.avif)
