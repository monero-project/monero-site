---
summary: 'Opcjonalny znacznik dodawany w celu identyfikacji transakcji pomiędzy użytkownikami, składający się z 64 heksadecymalnych znaków'
terms: ["payment-ID", "payment-IDs", "numer-identyfikacyjny-płatności", "numeru-identyfikacyjnego-płatności", "numerem-identyfikacyjnym-płatności", "numerze-identyfikacyjnym-płatności", "numery-identyfikacyjne-płatności", "numerom-identyfikacyjnym-płatności", "numerach-identyfikacyjnych-płatności"]
---

{% include disclaimer.html translated="yes" translationOutdated="yes" %}

*Note:* Long Payment IDs have been removed since release 0.15; it's not possible to use them anymore. More info in the [blog post]({{ site.baseurl_root }}/2019/06/04/Long-Payment-ID-Deprecation.html) that announced their deprecation.

### Podstawy

Numer identyfikacyjny płatności jest **arbitralnym** i **opcjonalnym**
załącznikiem transakcji składającym się z 32 bitów (64 heksadecymalnych
znaków) lub z 8 bitów (w przypadku adresów zintegrowanych).

Numer identyfikacyjny płatności jest zazwyczaj używany do identyfikacji
transakcji pomiędzy użytkownikami oraz na giełdzie. Ze względu na
nieodłączną charakterystykę Monero polegającą na korzystaniu z pojedynczego
adresu publicznego do transakcji przychodzących, numer identyfikacyjny
płatności jest szczególnie użyteczny w łączeniu płatności przychodzących z
kontem użytkownika.

### Kompaktowy numer identyfikacyjny płatności a adresy zintegrowane

Począwszy od wersji 0.9 Hydrogen Helix, numery identyfikacyjne płatności
mogą zostać zaszyfrowane i włączone do adresu płatności. Numery
identyfikacyjne tego rodzaju powinny być 64-bitowe oraz muszą być
zaszyfrowane losowym jednorazowym kluczem, znanym jedynie nadawcy i
odbiorcy.

### Tworzenie numeru identyfikacyjnego płatności

Zaleca się korzystanie z oficjalnej funkcji portfela `integrated_address` do
automatycznego wygenerowania adresu zintegrowanego zawierającego kompaktowy
numer identyfikacyjny płatności. Jeśli chcesz użyć wiersza poleceń, postępuj
jak poniżej:

Tworzenie kompaktowego numeru identyfikacyjnego dla adresu zintegrowanego:

```# openssl rand -hex 8```

Tworzenie tradycyjnego numeru identyfikacyjnego:

```# openssl rand -hex 32```
