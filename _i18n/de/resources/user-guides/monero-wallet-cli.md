{% include disclaimer.html translated="yes" translationOutdated="no" %}

# monero-wallet-cli

`monero-wallet-cli` ist die im Monero-Baum enthaltene Wallet-Software, die als Konsolenprogramm ein Konto verwaltet. Während ein Bitcoin-Wallet sowohl das Konto als auch die Blockchain verwaltet, ist dies bei Monero getrennt: `monerod` ist für die Blockchain, `monero-wallet-cli` für das Konto zuständig.

Wie verschiedene Vorgänge ausgehend von der Benutzeroberfläche des `monero-wallet-cli` - die Befehlszeile - gesteuert werden, wird in dieser Anleitung erklärt. Es wird angenommen, dass du die neueste Version Moneros nutzt und mithilfe anderer Anleitungen bereits ein Konto erstellt hast.

## Guthaben überprüfen

Da die Zuständigkeiten für Blockchain und Wallet bei verschiedenen Programmen liegen, benötigen einige Dienste des `monero-wallet-cli` eine Verbindung mit einem Hintergrunddienst (darunter die Suche nach eingehenden Transaktionen). 
Sobald du sowohl `monero-wallet-cli` wie auch `monerod` gestartet hast, kannst du `balance` eingeben.

Beispiel: 

Dies lädt Blöcke aus dem Hintergrunddienst, welche dein Wallet vielleicht noch nicht gesehen hat, und aktualisiert dein Guthaben entsprechend. Dieser Vorgang läuft normalerweise etwa jede Minute im Hintergrund ab. Um dein Guthaben ohne Aktualisierung anzuzeigen:

    balance
    Balance: 64.526198850000, unlocked balance: 44.526198850000, including unlocked dust: 0.006198850000

In diesem Beispiel ist `Balance` dein gesamtes Guthaben. `unlocked balance` steht für den Betrag, den du derzeit ausgeben kannst; neu eingehende Transaktionen benötigen zunächst zehn Bestätigungen innerhalb der Blockchain, bevor sie entsperrt und für dich freigegeben werden. Der `unlocked dust` sind die Kleinstbeträge nichtausgegebener Outputs, die sich auf deinem Konto angesammelt haben.

## Monero versenden

Du brauchst hierzu die Standardadresse, an die du deine Monero senden möchtest (eine lange, mit einer '4' beginnende Zeichenkette), und zudem möglicherweise eine Zahlungs-ID, falls der Empfänger eine solche benötigt. Im letzteren Fall kann dir dieser stattdessen eine integrierte Adresse zukommen lassen, die sowohl die Standardadresse als auch eine Zahlungs-ID in einer einzelnen Adresse vereint. 

### An eine Standardadresse senden

    transfer ADDRESS AMOUNT PAYMENTID

Ersetze `ADDRESS` mit der Adresse, an die du senden möchtest, `AMOUNT` mit dem Betrag der Monero, die du versenden wirst und `PAYMENTID` mit der dir bereitgestellten Zahlungs-ID. Zahlungs-IDs sind optional: Wenn der Empfänger keine benötigt, kannst du sie einfach weglassen.

### An eine integrierte Adresse senden

    transfer ADDRESS AMOUNT

In diesem Fall ist die Zahlungs-ID in die integrierte Adresse inkludiert.

### Die Anzahl an Outputs für eine Transaktion festlegen

    transfer RINGSIZE ADDRESS AMOUNT

Ersetze `RINGSIZE` mit der Anzahl an Outputs, die du verwenden möchtest. **Die Standardeinstellung ist 11, wenn nichts anderes festgelegt wird.** Es ist ratsam, die voreingestellte Ringgröße zu verwenden; du kannst die Zahl aber auch erhöhen, wenn du mehr Outputs beifügen möchtest. Je größer die Zahl ist, desto größer ist auch die Transaktion und die mit ihr einhergehenden Gebühren.

## Monero empfangen

Wenn du eine eigene Monero-Adresse hast, kannst du jemandem ganz einfach deine Standardadresse geben.

Diese findest du heraus mit:

    address

Da Monero anonym ist, wirst du die Ursprungsadresse deiner empfangenen Gelder nicht sehen können. Wenn du sie aber doch aus irgendeinem Grund (beispielsweise, um einen besonderen Kunden zu honorieren) wissen möchtest, musst du dem Sender mitteilen, dass er eine Zahlungs-ID verwenden soll. Diese ist ein willkürlicher, optionaler Tag, mit welchem die Transaktion versehen wird. Um es dir einfach zu machen, kannst du eine Adresse erstellen, die bereits eine zufällige Zahlungs-ID enthält:

    integrated_address

Dies generiert eine zufällige Zahlungs-ID und gibt eine Adresse aus, welche dein eigenes Konto und zudem ebendiese Zahlungs-ID enthält. Wenn du eine bestimmte Zahlungs-ID verwenden möchtest, kannst du das folgendermaßen machen:

    integrated_address 12346780abcdef00

An eine von deinem Konto aus generierte integrierte Adresse gesendete Zahlungen gehen mit der Zahlungs-ID markiert auf dein Konto. Auf diese Weise kannst du Zahlungen unterscheiden.

## Getätigte Zahlungen gegenüber Dritten nachweisen

Solltest du einen Händler bezahlt haben, dieser aber bestreiten, das Geld empfangen zu haben, kann es passieren, dass du deine Zahlung gegenüber Dritten nachweisen musst - oder sogar gegenüber des Händlers, sofern es ein ehrlicher Fehler seinerseits war. Da Monero privat ist und man nicht ausmachen kann, wer Gelder empfangen oder gesendet hat, kannst du nicht einfach auf deine Transaktion in der Blockchain verweisen. Durch Bereitstellen des privaten, pro Transaktion vertraulichen Schlüssels ist es Dritten allerdings möglich, zu sehen, ob in dieser Transaktion Monero an die jeweilige Adresse gesendet wurden. Beachte, dass das Abspeichern dieser Transaktionsschlüssel standardmäßig deaktiviert ist. Wenn du denkst, du könntest diese Funktion gebrauchen, musst du sie vor dem Senden einschalten:

    set store-tx-info 1

Du kannst den Transaktionsschlüssel einer früheren Transaktion abrufen:

    get_tx_key 1234567890123456789012345678901212345678901234567890123456789012

Gib die Transaktions-ID, deren Schlüssel du benötigst, ein. Vergiss nicht, dass eine Zahlung mit verschiedenen Einzeltransaktionen getätigt werden kann; es kann also sein, dass du mehrere Schlüssel brauchst. Du kannst diese(n) Schlüssel (zusammen mit der Transaktions-ID und der Empfangsadresse) anschließend an denjenigen schicken, dem du einen Nachweis über deine Transaktion erbringen möchtest. Bedenke, dass der entsprechende Dritte - sollte er deine eigene Adresse kennen - sehen kann, wie viel Wechselgeld an dich zurückgegangen ist.

Wenn du dieser Dritte bist (weil dir jemand beweisen möchte, dass er Monero an eine Adresse gesendet hat), kannst du den Nachweis folgendermaßen überprüfen:

    check_tx_key TXID TXKEY ADDRESS

Ersetze `TXID`, `TXKEY` und `ADDRESS` mit der dir bereitgestellten Transaktions-ID, dem jeweiligen Transaktionsschlüssel und der Zieladresse. monero-wallet-cli überprüft nun diese Transaktion und teilt dir mit, wie viele Monero in dieser Transaktion an die vorgegebene Adresse gesendet wurden.

## Möglichkeit des Bestätigens/Abbrechens von Zahlungen einrichten

Wenn du eine finale Bestätigungsmöglichkeit beim Senden einer Zahlung möchtest:

    set always-confirm-transfers 1


## Eine an dich gehende Zahlung finden

Hast du eine Zahlung mit einer bestimmten Zahlungs-ID erhalten, kannst du diese folgendermaßen aufsuchen:

    payments PAYMENTID

Du kannst auch mehr als eine Zahlungs-ID eingeben.

Grundsätzlich kannst du ein- und ausgehende Zahlungen wie folgt prüfen:

    show_transfers

Du kannst zur Anzeige jüngerer Transaktionen eine bestimmte Höhe setzen und nur eingehende oder nur ausgehende Transaktionen abfragen, zum Beispiel zeigt

    show_transfers in 650000

nur die eingegangen Transaktionen nach dem Block 650000 an. Du kannst außerdem einen Höhenbereich festlegen.

Falls du minen möchtest, kannst du dies vom Wallet aus tun:

    start_mining 2

Hierdurch startet das Mining mit dem Hintergrunddienst unter Gebrauch zweier Threads. Bedenke, dass dieses Solomining eine Weile dauern kann, bis du einen Block findest. Du beendest das Minen mit

    stop_mining

