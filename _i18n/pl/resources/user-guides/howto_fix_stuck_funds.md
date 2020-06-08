{% include disclaimer.html translated="yes" translationOutdated="no" %}

Czasami twoje fundusze utkną - część z nich zostanie zablokowana i nigdy nie odblokowana. Oto jak to naprawić:

- Załaduj swój portfel w monero-wallet-cli.

- Wpisz:

> seed

do wiersza polecenia. Wpisz swój 25-słowny kod mnemoniczny, jeśli jeszcze tego nie zrobiłeś. To najlepszy sposób na zapewnienie ciągłego dostępu do twoich funduszy.

- Zamnkij monero-wallet-cli, wpisując:

> exit

- Utwórz kopię zapasową wszystkich plików związanych z twoim portfelem, czyli:

> yourwalletname.bin
> yourwalletname.bin.keys
> yourwalletname.bin.address.txt

Możesz tego dokonać, kopiując pliki do nowego folderu.

Czasami przy zakładaniu portfela mogłeś go nazwać bez końcówki ".bin". W takim przypadku plik portfela będzie się nazywał nazwaportfela - bez końcówki ".bin".

- Usuń nazwaportfela.bin.

- Załaduj monero-wallet-cli, wpisz nazwę portfela, który właśnie usunąłeś.

- Wpisz hasło. Portfel zostanie teraz zaktualizowany, a twoje zablokowane fundusze zostaną odblokowane.
