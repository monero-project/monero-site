<div class="tab">
    <input id="tab-one" type="checkbox" name="tabs" class="accordion">
    <label for="tab-one" class="accordion">Come fa Monero ad avere valore?</label>
    
<div class="tab-content" markdown="1">

Monero ha valore perché le persone sono disposte a comprarlo. Se nessuno fosse disposto a comprare Monero, Monero non avrebbe alcun valore. Il prezzo di Monero aumenta se la domanda è superiore all'offerta; diminuisce, invece, se l'offerta è superiore alla domanda.

</div>

</div>

<div class="tab">
    <input id="tab-two" type="checkbox" name="tabs" class="accordion">
    <label for="tab-two" class="accordion">Come posso ottenere Monero?</label>
    
<div class="tab-content" markdown="1">

Puoi acquistare Monero da un "exchange" (cambiavalute) o da un privato.
Alternativamente puoi provare a minare Monero per ottenere monete come ricompensa in seguito alla risoluzione del blocco.
</div>

</div>

<div class="tab">
    <input id="tab-three" type="checkbox" name="tabs" class="accordion">
    <label for="tab-three" class="accordion">Cos'è un seed mnemonico?</label>
    
<div class="tab-content" markdown="1">

Un seed mnemonico (mnemonic seed) è una sequenza di 25 parole che può essere utilizzata per recuperare il tuo conto dovunque tu voglia. Tieni queste parole al sicuro e non condividerle con nessuno. Puoi usare questo seed per recupeare il tuo conto, anche se il tuo computer si rompe.
</div>

</div>

<div class="tab">
    <input id="tab-four" type="checkbox" name="tabs" class="accordion">
    <label for="tab-four" class="accordion">In cosa è diversa la privacy offerta da Monero rispetto a quella offerta dalle altre criptovalute?</label>
    
<div class="tab-content" markdown="1">

Monero utilizza tre differenti tecnologie mirate alla privacy: "ring signatures" (firme ad anello), "ring confidential transactions" (RingCT, transazioni confidenziali ad anello) e "stealth addresses" (indirizzi stealth). Queste tre tecnologie mascherano rispettivamente il mittente, l'ammontare ed il destinatario della transazione. Tutte le transazioni sulla rete Monero sono private: non c'è alcuna possibilità di effettuare, neanche accidentalmente, una transazione trasparente. Questa caratteristica è tipica solo di Monero. Non hai bisogno di dare fiducia ad alcuno per mantenere la tua privacy.
</div>

</div>

<div class="tab">
    <input id="tab-five" type="checkbox" name="tabs" class="accordion">
    <label for="tab-five" class="accordion">Perché il mio portafoglio impiega così tanto tempo per sincronizzarsi?</label>
    
<div class="tab-content" markdown="1">

Se stai facendo girare un nodo locale, il nodo ha bisogno di copiare l'intera blockchain sul tuo computer. Questo processo può durare parecchio tempo, specialmente se il computer ha un disco rigido datato o non può contare su una connessione internet veloce. Se stai usando un nodo remoto, anche se il tuo computer non deve scaricare la blockchain, ha comunque bisogno di richiedere una copia di tutti gli output, azione che può richiedere diverse ore. Sii paziente, e se sei disposto/a a sacrificare un po' di privacy a fronte di tempi di sincronizzazione ridotti, valuta l'utilizzo di un portafoglio leggero (lightweight wallet).

</div>

</div>

<div class="tab">
    <input id="tab-six" type="checkbox" name="tabs" class="accordion">
    <label for="tab-six" class="accordion">Che differenza c'è fra un portafoglio normale e uno leggero?</label>
    
<div class="tab-content" markdown="1">

In un portafoglio leggero, consegni la tua chiave di visualizzazione ad un nodo remoto, che scansiona la blockchain e cerca transazioni in ingresso al tuo conto. Questo nodo è in grado di sapere quando ricevi denaro, ma non sa quanto denaro ricevi, da chi lo ricevi e a chi lo stai inviando.
A seconda del software che gestisce il tuo portafoglio, puoi decidere di usare un nodo di tua proprietà al fine di evitare problemi di privacy. Per avere il più alto grado di privacy, utilizza un portafoglio normale, che può essere associato al tuo nodo locale.

</div>

</div>

<div class="tab">
    <input id="tab-seven" type="checkbox" name="tabs" class="accordion">
    <label for="tab-seven" class="accordion">In cosa Monero è differente da Bitcoin?</label>
    
<div class="tab-content" markdown="1">

Monero non è basato su Bitcoin. E' basato sul protocollo CryptoNote. Bitcoin è un sistema completamente trasparente, in cui le persone possono vedere esattamente quanto denaro viene inviato da un utente all'altro. Monero offusca queste informazioni al fine di proteggere la privacy degli utenti in ogni transazione. Inoltre, Monero ha una dimensione dinamica dei blocchi e prevede commissioni variabili, un algoritmo di mining proof-of-work resistente agli ASIC ed un'emissione monetaria di coda. Questi sono alcuni esempi fra i tanti per cui Monero è diverso da Bitcoin.

</div>

</div>

<div class="tab">
    <input id="tab-eight" type="checkbox" name="tabs" class="accordion">
    <label for="tab-eight" class="accordion">Monero prevede un limite nella dimensione dei blocchi?</label>
    
<div class="tab-content" markdown="1">

No, Monero non ha un limite sulla dimensione dei blocchi. Al contrario, la dimensione dei blocchi può aumentare o diminuire nel tempo a seconda del numero di transazioni da validare. Esiste un limite sulla velocità di crescita della dimensione del blocco al fine di evitare tassi di crescita eccessivi.
</div>

</div>

<div class="tab">
    <input id="tab-nine" type="checkbox" name="tabs" class="accordion">
    <label for="tab-nine" class="accordion">Cos'è la blockchain?</label>
    
<div class="tab-content" markdown="1">

La "blockchain" (catena di blocchi) è un sistema grazie al quale è possibile mantenere una copia di tutta la storia delle transazioni sulla rete Monero. Ogni due minuti, viene aggiunto alla blockchain un nuovo blocco contenente le informazioni sulle ultime transazioni. Questa catena consente alla rete di verificare la quantità di denaro in circolazione e di essere resiliente ad attacchi e tentativi di centralizzazione.
</div>

</div>

<div class="tab">
    <input id="tab-ten" type="checkbox" name="tabs" class="accordion">
    <label for="tab-ten" class="accordion">Cos'è Kovri?</label>
    
<div class="tab-content" markdown="1">

Kovri è un router I2P sviluppato in C++. I2P è un network anonimo, come Tor, ma presenta parecchie differenze tecnologiche. Kovri è un progetto indipendente da Monero, ma funzionerà con Monero così come con altri progetti. Kovri offusca la trasmissione delle transazioni in modo tale che gli altri nodi non possano risalire a chi ha iniziato la transazione. In scenari ostili, Kovri può essere usato per offuscare tutto il traffico Monero attraverso I2P, in modo tale che non possa essere dimostrato l'utilizzo di Monero. Kovri è al momento in versione alpha e non è ancora pienamente integrato con Monero. Maggiori informazioni su Kovri sul [sito di progetto.](https://getkovri.org)
</div>

</div>

<div class="tab">
    <input id="tab-eleven" type="checkbox" name="tabs" class="accordion">
    <label for="tab-eleven" class="accordion">Cosa è la fungibilità? E perché è così importante?</label>
    
<div class="tab-content" markdown="1">

La fungibilità è una semplice proprietà di una moneta secondo cui non esistono differenze fra due unità monetarie. Se due persone si scambiano una moneta da 10 per due da 5, nessuno perde nulla. Supponiamo però che tutti siano a conoscenza del fatto che la moneta da 10 è stata usata precedentemente in un attacco ransomware. La persona che cede le due monete da 5 per quella da 10 sarebbe ancora disposta ad effettuare il cambio? Probabilmente no, anche se la persona che possiede la moneta da 10 non ha nulla a che vedere con l'attacco ransomware. Questo è un problema, dal momento che chi riceve denaro deve costantemente controllare che il denaro ricevuto non sia "segnato". Monero è fungibile, il che significa che chi lo utilizza non ha bisogno di effettuare questi controlli.
</div>

</div>

<div class="tab">
    <input id="tab-twelve" type="checkbox" name="tabs" class="accordion">
    <label for="tab-twelve" class="accordion">Se Monero è così privato come facciamo ad essere sicuri che non venga creata moneta dal nulla?</label>
    
<div class="tab-content" markdown="1">

In Monero, ogni output della transazione è associato in modo univoco con un'immagine chiave (key image) che può essere generata solamente dal detentore di quell'output. 
Immagini chiave che sono usate più di una volta vengono rigettate dai minatori in quanto ritenute tentativi di double-spending e non possono essere aggiunte ad un blocco valido. Quando la rete riceve una nuova transazione, i minatori verificano che l'immagine chiave associata alla transazione non esista già e non sia già stata associata ad una transazione precedente per assicurarsi che non si tratti di un double-spend.

E' anche possibile verificare la validità dell'ammontare della transazione anche se il valore degli input che si stanno spendendo ed il valore degli output che si stanno inviando sono cifrati (offuscati per tutti tranne che per il destinatario della transazione). Poiché l'ammontare è cifrato mediante l'utilizzo dei "Pedersen commitment", gli osservatori, seppur non in grado di risalire all'ammontare della transazione, tramite la matematica alla base dei "Pedersen commitment" sono in grado di verificare che non vengano creati Monero dal nulla. 

Fintanto che la somma degli output cifrati è uguale alla somma degli input cifrati che vengono spesi (la somma degli output include un output per il destinatario, il resto verso chi ha iniziato la transazione e la commissione non cifrata per la transazione), la transazione è considerata legittima e nessun Monero viene creato dal nulla. I "Pedersen commitment" consentono la verifica di uguaglianza delle somme in ingresso e in uscita della transazione senza conoscere i valori che singolarmente sono indeterminabili.
</div>

</div>
