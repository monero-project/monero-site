<div class="tab">
    <input id="tab-one" type="checkbox" name="tabs" class="accordion">
    <label for="tab-one" class="accordion">Pourquoi Monero a de la valeur ?</label>

<div class="tab-content" markdown="1">

Monero a de la valeur car des personnes veulent en acheter. Si personne ne voulait acheter Monero, alors il n'aurait pas de valeur. Le prix du Monero augmente lorsque la demande dépasse l'offre et diminue lorsque l'offre dépasse la demande.

</div>

</div>

<div class="tab">
    <input id="tab-two" type="checkbox" name="tabs" class="accordion">
    <label for="tab-two" class="accordion">Comment puis-je obtenir du Monero ?</label>

<div class="tab-content" markdown="1">

Vous pouvez acheter du Monero sur une bourse ou auprès d'un individu. Sinon, vous pouvez essayer de miner Monero pour obtenir des pièces de monnaie grâce à la prime de bloc (block reward).
</div>

</div>

<div class="tab">
    <input id="tab-three" type="checkbox" name="tabs" class="accordion">
    <label for="tab-three" class="accordion">Qu'est-ce qu'une Phrase mnémonique (mnemonic seed) ?</label>

<div class="tab-content" markdown="1">

Une Phrase mnémonique est un lot de 25 mots qui peut être utilisé pour restaurer votre compte n'importe où. Conservez ces mots en lieux sûr et ne les partagez avec personne. Vous pouvez utiliser cette phrase pour restaurer votre compte, même si votre ordinateur plante.
</div>

</div>

<div class="tab">
    <input id="tab-four" type="checkbox" name="tabs" class="accordion">
    <label for="tab-four" class="accordion">Pourquoi la confidentialité de Monero est différente de celle des autres cryptomonnaies ?</label>

<div class="tab-content" markdown="1">

Monero s'appuie sur trois technologies différentes : les signature de cercle (ring signatures), les transaction confidentielles de cercle (RingCT) et les adresses furtives (stealth addresses). Celles-ci masquent respectivement l'émetteur, le montant et le destinataire d'une transaction. Toutes les transaction sur le réseaux sont ainsi obligatoirement sécurisées. Il est impossible de faire une transaction non-sécurisée par accident. Cette fonctionnalité est une exclusivité de Monero. Votre confidentialité ne repose pas sur la confiance que vous devriez avoir en qui que ce soit.
</div>

</div>

<div class="tab">
    <input id="tab-five" type="checkbox" name="tabs" class="accordion">
    <label for="tab-five" class="accordion">Pourquoi mon portefeuille met-il si longtemps à se synchroniser ?</label>

<div class="tab-content" markdown="1">

Si vous faites fonctionner un nœud complet localement, vous devez copier la totalité de la chaîne de blocs sur votre ordinateur. Cela peut prendre très longtemps, particulièrement sur un vieux disque dur ou derrière une connection internet lente. Si vous utilisez un nœud distant, votre ordinateur doit tout de même demander une copie de toutes les sorties, ce qui peut prendre plusieurs heures. Soyez patients, et si vous préférez sacrifier votre confidentialité pour de meilleurs temps de synchronisation, considérer plutôt l'utilisation d'un portefeuille léger.
</div>

</div>

<div class="tab">
    <input id="tab-six" type="checkbox" name="tabs" class="accordion">
    <label for="tab-six" class="accordion">Quelle est la différence entre un portefeuille léger et un portefeuille ordinaire ?</label>

<div class="tab-content" markdown="1">

Pour un portefeuille léger, vous communiquer votre clef publique d'audit à un nœud, qui recherche pour vous les transactions qui vous sont adressées sur la chaîne de blocs. Ce nœud saura quand vous aurez reçu des fonds, mais ne saura pas combien, de la part de qui, ou à destination de qui. Selon l'application de portefeuille, vous pourriez pouvoir disposer d'un nœud que vous contrôleriez pour vous prémunir des fuites de confidentialité. Pour plus de confidentialité, utilisez un portefeuille traditionnel qui peut être utilisé avec votre propre nœud.
</div>

</div>

<div class="tab">
    <input id="tab-seven" type="checkbox" name="tabs" class="accordion">
    <label for="tab-seven" class="accordion">Quelles sont les différences de Monero avec Bitcoin ?</label>

<div class="tab-content" markdown="1">

Monero n'est pas basé sur Bitcoin. Il est basé sur le protocole CryptoNote. Bitcoin est un système totalement transparent, où chacun peut voir quel est le montant exacte d'une transaction envoyé d'un utilisateur à un autre. Monero masque ces informations afin de protéger la confidentialité de ses utilisateurs dans toutes les transactions. Il dispose également d'une taille de bloc et de frais de transferts dynamiques, d'une preuve de travail (proof of work) résistant aux ASICs, d'une émission de queue de pièces de monnaies, ainsi que d'autres changements.
</div>

</div>

<div class="tab">
    <input id="tab-eight" type="checkbox" name="tabs" class="accordion">
    <label for="tab-eight" class="accordion">Est-ce que la taille de bloc de Monero a une limite ?</label>

<div class="tab-content" markdown="1">

Non, Monero n'a pas de taille de bloc limite fixe. Au lieu de cela, la taille de bloc peut augmenter ou diminuer au fil du temps selon la demande. Son rythme d'augementation est cependant limité afin d'éviter une croissance scandaleuse.
</div>

</div>

<div class="tab">
    <input id="tab-nine" type="checkbox" name="tabs" class="accordion">
    <label for="tab-nine" class="accordion">Qu"est ce qu'une chaîne de blocs ?</label>

<div class="tab-content" markdown="1">

Une chaîne de blocs est un système qui enregistre une copie de tous l'historique de transaction du réseau Monero. Toutes les deux minutes, un nouveau bloc contenant les dernières transactions est ajouté à la chaîne de blocs. Cette chaine permet au réseau de vérifier la quantité d'argent dont disposent les comptes et le rend resistant aux attaques et tentatives de centralisation.
</div>

</div>

<div class="tab">
    <input id="tab-ten" type="checkbox" name="tabs" class="accordion">
    <label for="tab-ten" class="accordion">Qu'est ce que Kovri ?</label>

<div class="tab-content" markdown="1">

Kovri est un routeur I2P écrit en C++. I2P est un réseau caché comme Tor avec quelques différences techniques. Kovri est un projet indépendant de Monero, mais fonctionnera avec Monero et quelques autres projets. Kovri masque les diffusions des transactions, de sorte que les autres nœuds ne puisse savoir qui a créé les transactions. En condition adverses, Kovri peut être utilisé pour masquer tous le trafic de Monero à travers I2P, empêchant de savoir que Monero est en cours d'utilisation. Kovri est actuellement en version alpha, et n'est toujours pas pleinement intégré à Monero. Découvrez-en plus sur Kovri sur le [Site web du projet.](https://getkovri.org)
</div>

</div>

<div class="tab">
    <input id="tab-eleven" type="checkbox" name="tabs" class="accordion">
    <label for="tab-eleven" class="accordion">Quest-ce que la fongibilité, et pourquoi est-elle importante ?</label>

<div class="tab-content" markdown="1">

La fongibilité est une propriété basique de la monnaie selon laquelle il n'y a pas de différence entre deux montants de la même valeur. Si deux personnes échange 10 contre deux fois 5, personne n'y perd. Cependant, supposons que tout le monde sache que le 10 a été utilisé lors d'une attack par ransomware. Est-ce que la seconde personne sera toujours d'accord pour procéder à l'échange ? Probablement pas, même si la personne au 10 n'a aucun lien avec le ransomware. C'est un problème, puisqu'une personne recevant de l'argent devra constamment vérifier si cet argent n'est pas de l'argent sale. Monero est fongible, ce qui signifie qu'il n'est pas nécessaire d'appliquer ces mesures.
</div>

</div>

<div class="tab">
    <input id="tab-twelve" type="checkbox" name="tabs" class="accordion">
    <label for="tab-twelve" class="accordion">Si Monero est si confidentiel, comment sait-on qu'il ne sont pas créés à partir de rien ?</label>

<div class="tab-content" markdown="1">
Avec Monero, chaque sortie de transaction est uniquement associée à une image clé qui ne peut être générée que par le détenteur de cette sortie. Les images clés qui sont utilisées plus d'une fois sont rejetées par les mineurs en tant que doubles dépenses et ne peuvent pas être ajoutées à un bloc valide. Lorsqu'une nouvelle transaction est reçue, les mineurs vérifient que l'image clé n'existe pas déjà pour une transaction précédente afin de s'assurer qu'il ne s'agit pas d'une double dépense.

Nous pouvons également savoir que les montants des transactions sont valides même si la valeur des entrées que vous dépensez et la valeur des sorties que vous envoyez sont chiffrées (celles-ci sont masquées pour tous, sauf le destinataire). Parce que les montants sont chiffrés en utilisant les engagements de Pedersen, cela signifie qu'aucun observateur ne peut dire le montant des entrées et des sorties, mais ils peuvent faire des calculs sur les engagements de Pedersen pour déterminer qu'aucun Monero n'a été créé à partir de rien.

Tant que les montants de sortie chiffrés que vous créez sont égaux à la somme des entrées dépensées (qui incluent une sortie pour le destinataire, une sortie de changement revenant vers vous et les frais de transaction non chiffrés), vous avez une transaction légitime et savez qu'aucun Monero ne s'est créé à partir de rien. Les engagements de Pedersen signifient que les sommes peuvent être vérifiées comme étant égales, mais la valeur de Monero de chacune des sommes et la valeur de Monero des entrées et des sorties individuellement sont indéterminables.
</div>

</div>
