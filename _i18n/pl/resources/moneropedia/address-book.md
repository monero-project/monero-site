---
layout: moneropedia
entry: "Książka adresowa"
tags: ["kovri"]
terms: ["książka-adresowa", "książce-adresowej", "książki-adresowej"]
summary: "Pozwala na odwiedzanie stron/serwisów w sieci I2P w domenie .i2p."
---

### Podstawy

Aby przeglądać strony i serwisy w sieci @I2P przy użyciu @Kovri, potrzebujesz książki adresowej. Pozwoli ona na przetłumaczenie stron i serwisów I2P, które używają [domeny najwyższego poziomu] `.i2p` (https://en.wikipedia.org/wiki/Top_level_domain), na adres zrozumiały przez sieć I2P.

Bez książki adresowej musiałbyś używać @adresu-base32 za każdą wizytą na stronie sieci I2P, a to nie jest wcale zabawne!

### Szczegółowe informacje

Ponieważ [System Nazywania Domen](https://en.wikipedia.org/wiki/DNS) nie istnieje w sieci I2P, @Kovri również **nie używa** Systemu Nazywania Domen ani żadnego rodzaju rozwiązania @zasadniczego-unikalnego-hostu. Zamiast tego, Kovri łączy @lokalnie-unikalny-host z @adresem-64 w @subskrypcji. Po wypełnieniu książki adresowej subskrypcją, możesz zamienić daną stronę o domenie `.i2p` na łatwą do użycia sieć I2P.

### Tworzenie książki adresowej

Domyślnie przy instalacji otrzymasz publiczną @subskrypcję o nazwie `hosts.txt` w @katalogu-danych. Po uruchomieniu, Kovri ładuje tę subskrypcję i przywołuje wszystkie pozostałe sprecyzowane subskrypcje. Po załadowaniu, twoja książka adresowa zostanie odpowiednio wypełniona. Po więcej szczegółów dotyczących zarządzania subykrypcjami, przejdź do @subsckrypcji.

### Aktualizowanie książki adresowej

Obecnie istnieje kilka sposobów na zaktualizowanie książki adresowej:
1. Użyj @opcji-przeskakiwania, aby wpisać adres I2P do książki adresowej.
2. Użyj @opcji-przeskakiwania, aby skopiować i wkleić adres do twojej prywatnej subskrypcji.
3. Ręczniej dodaj lub odejmij z prywatnej subskrypcji.

**Uwaga: Kovri jest w trakcie rozwoju. W przyszłości *pojawią się* łatwiejsze sposoby na zaktualizowanie książki adresowej.**

### Specyfikacja książki adresowej/nazewnictwa

Aby dowiedzieć się więcej na temat specyfikacji, przejdź do [specyfikacji książki adresowej i nazewnictwa](https://geti2p.net/en/docs/naming).
