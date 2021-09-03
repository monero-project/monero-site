---
summary: 'funzionalmente simile ad un conto bancario, contiene tutte le transazioni in ingresso e in uscita'
terms: ["account", "accounts", "wallet", "wallets", "conto", "conti", "portafoglio", "portafogli"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Le Basi

Coloro che hanno familiarità con i predecessori di Monero, e con le
criptovalute in generale, conosceranno probabilmente il termine
*portafoglio*. In Monero il portafoglio viene descritto più propriamente col
termine account, ed esso costituisce un conto privato di proprietà di e
gestito da un utente Monero.

Un account di tua proprietà contiene tutte le @transazioni Monero che hai
inviato e ricevuto. Il saldo del tuo account è pari alla somma di tutti i
Monero che hai ricevuto meno la somma dei Monero che hai inviato. Quando usi
Monero, potresti notare che il tuo account presenta due saldi, un saldo
bloccato e un saldo sbloccato. Il saldo sbloccato contiene fondi che possono
essere spesi immediatamente, mentre il saldo bloccato contiene fondi che non
possono al momento essere spesi. Potresti aver ricevuto una transazione con
un @tempo-di-sblocco impostato, o potresti aver inviato una transazione e
sei in attesa che il @resto torni nel tuo portafoglio: queste sono due
situazioni che possono generare fondi bloccati per un certo periodo.

Una differenza fondamentale fra la valuta elettronica tradizionale e Monero
è che il tuo account si trova sotto il tuo totale controllo, in genere sul
tuo computer, e ad esso non può accedere nessun altro tranne te, se vengono
seguite delle [pratiche di buona sicurezza](#pratiche-di-buona-sicurezza).

### Account Multipli

Non sono previsti costi aggiuntivi per la creazione di un account Monero e
non vi sono commissioni addebitate, ad eccezione delle singole commissioni
legate alle @transazioni, commissioni che vengono incassate dai @minatori.

Ciò significa che chiunque può facilmente creare un account Monero per se
stesso/a, un account comune da condividere con il proprio partner e account
individuali per i propri figli. Allo stesso modo, un'azienda potrebbe creare
account separati per ogni divisione o gruppo. Poiché le commissioni di
@transazione di Monero sono piuttosto basse, lo spostamento di fondi fra
account non è un esercizio costoso.

### Chiavi Crittografiche

Monero si basa in gran parte su un principio crittografico noto come
*crittografia a chiave pubblica/privata* o *crittografia asimmetrica*,
concetto dettagliatamente descritto in [questo articolo di
Wikipedia](https://it.wikipedia.org/wiki/Crittografia_asimmetrica).

Il tuo account è basato su due coppie di chiavi, la coppia relativa alla
"chiave di spesa" (@spend-key) e la coppia relativa alla "chiave di
visualizzazione" (@view-key). La chiave di spesa è speciale in quanto viene
richiesta per spendere i fondi Monero, mentre la chiave di visualizzazione
ti consente di rivelare le tue @transazioni a terzi, ad esempio per scopi di
controllo (audit) o contabilità. Queste chiavi, utilizzate nel tuo account,
svolgono anche un ruolo molto importante nella privacy delle @transazioni di
Monero.

Le chiavi private di spesa e di visualizzazione devono essere protette da te
al fine di mantenere intatta la privacy del tuo account; le chiavi pubbliche
di spesa e di visualizzazione, invece, sono ovviamente pubbliche (fanno
parte dell'indirizzo del tuo account Monero). Usando la normale crittografia
a chiave pubblica/privata, qualcuno potrebbe inviarti un messaggio privato
cifrandolo con una delle tue chiavi pubbliche e tu saresti l'unico in grado
di decifrarlo con le tue chiavi private.

### Fare il Backup del tuo Account

Quando gestisci il tuo account Monero con la chiave di spesa (@spend-key)
privata, sei l'unico responsabile della sicurezza dei tuoi
fondi. Fortunatamente, Monero rende molto semplice effettuare il backup del
tuo account. Quando crei un account Monero per la prima volta ti verrà dato
un @mnemonic-seed unico per il tuo account che consiste di 13 o 25 parole
nella lingua di tua scelta. **Questo seed è l'unica cosa di cui hai bisogno
per eseguire il backup del tuo account**, quindi è assolutamente necessario,
una volta comunicatoti, annotarlo ed archiviarlo in modo sicuro. Non
conservare mai questo seed in una forma o in un luogo tale da consentire a
qualcun altro di vederlo!

```
List of available languages for your wallet's seed:
0 : Deutsch
1 : English
2 : Español
3 : Français
4 : Italiano
5 : Nederlands
6 : Português
7 : русский язык
8 : 日本語
9 : 简体中文 (中国)
10 : Esperanto
Enter the number corresponding to the language of your choice: 1
Generated new wallet: 4B15ZjveuttEaTmfZjLVioPVw7bfSmRLpSgB33CJbuC6BoGtZrug9TDAmhZEWD6XoFDGz55bgzisT9Dnv61sbsA6Sa47TYu
view key: 4130fa26463d9451781771a8baa5d0b8085c47c4500cefe4746bab48f1d15903
**********************************************************************
Your wallet has been generated.
To start synchronizing with the @daemon, use "refresh" command.
Use "help" command to see the list of available commands.
Always use "exit" command when closing monero-wallet-cli to save your
current session's state. Otherwise, you might need to synchronize
your wallet again (your wallet keys are NOT at risk in any case).

PLEASE NOTE: the following 25 words can be used to recover access to your wallet. Please write them down and store them somewhere safe and secure. Please do not store them in your email or on file storage services outside of your immediate control.

aunt knuckle italics moisture hawk thorn iris abort
chlorine smog uphill glass aptitude nowhere sewage plywood
dual relic fierce divers anvil nodes bubble cabin abort
**********************************************************************
Starting refresh...
Refresh done, blocks received: 21939                            
Balance: 0.000000000000, unlocked balance: 0.000000000000
Background refresh thread started
[wallet 4B15Zj]: █
```

Come riporta l'interfaccia dell'esempio, è estremamente importante
memorizzare queste parole in un luogo sicuro. Se il rischio legato ad una
potenziale perdita del seed ti preoccupa, potresti ad esempio trovar
conveniente conservare una seconda copia del seed presso lo studio di un
notaio o in una cassetta di sicurezza. Si consiglia inoltre di conservare il
seed in un modo che non sia possibile dimostrare che si tratta del *tuo*
seed, quindi è consigliabile scriverlo in una lettera o come frammento di
altre note.

### Pratiche di Buona Sicurezza

Oltre ad eseguire il backup del @mnemonic-seed in modo da poter accedere al
tuo account in caso di perdita di dati, è importante anche adottare delle
pratiche di buona sicurezza. Utilizza una password sicura quando crei un
account Monero in locale (non utilizzato su [MyMonero](https://mymonero.com)
o altri sistemi di accounting basati sul Web).

Non dare mai la password del tuo account Monero a nessuno, in quanto essa
può essere utilizzata per accedere a Monero sul tuo computer senza conoscere
il tuo @mnemonic-seed. Allo stesso modo, assicurati di avere un antivirus
attivo e aggiornato, specialmente su un sistema operativo Windows. Infine,
fai attenzione quando fai clic sui link nelle e-mail o su siti Web
sconosciuti e non attendibili, poiché il malware installato sul tuo computer
può stare fermo ad aspettare l'accesso al tuo account Monero prima di
prelevare tutti i fondi da esso.

### Lasciare il tuo Account in eredità

Lasciare in eredità il tuo account Monero è facile come effettuare un
backup. Lascia ai tuoi ereditieri il @mnemonic-seed del tuo account nel
testamento, o conserva il seed in un luogo sicuro cui i tuoi ereditieri
avranno accesso a seguito dell'esecuzione delle tue ultime volontà. Il
vantaggio di questa scelta è che i tuoi ereditieri non dovranno attendere
mesi prima che una terza parte svincoli i fondi legati all'eredità.
