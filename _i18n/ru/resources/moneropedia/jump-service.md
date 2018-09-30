---
tags: ["kovri"]
terms: ["Jump-Service", "служба-переключения"]
summary: "Сервис веб-сайтов I2P, который добавляет веб-сайт в вашу адресную книгу"
---

### Основная информация

Конфигурированный под @I2P веб-браузер позволяет использовать службу Jump Service для *переключения* на @I2P адрес, которого нет в вашей @адресной-книге. Как только вы *переключитесь* на него, он будет занесён в вашу @адресную-книгу.

### Углублённая информация

Через конфигурированный под @I2P браузер зайдите на страницу http://stats.i2p/i2p/lookup.html (ссылка любезно предоставлена ведущим разработчиком @Java-I2P *zzz*)

Вам будут предложены две опции:

1. Опция *Hostname lookup* (поиск по имени хост-узла) позволит вам найти адрес, по которому вы хотите перейти, вручную скопировать / вставить результаты
2. Опция *Jump* (переключиться) позволит перейти на @I2P веб-сайт. Для этого будет необходимо ввести имя @I2P хоста (**рекомендуется**)

### Как использовать опцию Hostname lookup

Например, вы можете ввести (и затем подтвердить) `pinkpaste.i2p` в диалоговое окно *Hostname lookup*, в результате чего получите:

```
pinkpaste.i2p=m-HrPrIAsdxts0WM~P4mE8mt9P7g-QTaBvu7Gc6Nl0UX7Vwck-i~RvOPfK6W~kfdRvwhNTqevkBL2UF5l36We02Aiywu7kB2xOHRkze68h-Tg2ewvRVwokohguCD2G3wwAEz~7FVda2avYDCb9-N6TfuzxKLnmhPMvbNSjGL7ZsD2p-h207R3-2kvuMV9bfu-K~w9NI9XJhIyufvUnFYc2jnTVg8PbaR4UP57cNaOO2YIMPkbr6~yTcIu9B1sUfHK6-N~6virQDOxW4M-62rjnZkLpaCtkOsXslmCwZI--TkZ6hKi1kXZvNmJRE1rYfffYRFn38zhaqszeETX8HiIvahZhXF5fNumBziYdmLdw8hkuN1A~emU6Xz9g~a1Ixfsq1Qr~guYoOtaw-0rOFxNRS9yMehE-2LCb8c-cAg6z5OdlN4qJDl~ZHgru4d~EHp~BpAK3v7u2Gi-8l1ygVW-1CHVna~fwnbOPN3ANPwh6~~yUit0Cx1f54XiNRn6-nPBQAEAAcAAA==
```

Скопируйте / вставьте этот парный Base64 адрес хост-узла в вашу **приватную** @подписку

### Переключение напрямую

Например, после введения (и последующего подтверждения) вами  `pinkpaste.i2p` вы будете автоматически перенаправлены на веб-сайт, а адрес @локально-уникального-хоста будет также автоматически записан в @адресную-книгу.
