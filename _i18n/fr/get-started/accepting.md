<section class="container">
            <div class="row">
                <!-- left two-thirds block-->
                <div class="full">
                    <div class="info-block text-adapt">
                        <div class="row center-xs">
                            <div class="col">
                                <h2>Instructions pour l'Interface en Ligne de Commande (CLI)</h2>
                            </div>
                        </div>
<div markdown="1">

### Les Bases

Monero fonctionne légèrement différemment de ce dont vous pourriez avoir l'habitude avec les autres @cryptocurrencies. Dans le cas d'une monnaie digitale comme Bitcoin ou ses nombreux dérivés, les systèmes de paiements des commerçants devront habituellement créer une nouvelle @address de destinataire pour chaque paiement ou chaque utilisateur.

Cependant, comme Monero utilise des @stealth-addresses il n'y a pas de nécessité à disposer d'adresses de destinataires séparées pour chaque paiement ou utilisateur, et une seule adresse de @account peut être publiée. A la place, lors de la réception d'un paiement un commerçant va fournir un "ID de Paiement" à la personne effectuant ce paiement.

Un @payment-ID est une chaine de caractère héxédécimale de 64 caractères, et est normalement créer de manière aléatoire par le commerçant. Voici un exemple d'ID de Paiement :
```
666c75666679706f6e7920697320746865206265737420706f6e792065766572
```

### Vérifier un ID de Paiement dans monero-wallet-cli

Si vous voulez vérifier un paiement en utilisant monero-wallet-cli vous pouvez utiliser la commande "payments" suivit de l'ID, ou des IDs, de Paiement que vous voulez vérifier. Par exemple :

```
[wallet 49VNLa]: payments 666c75666679706f6e7920697320746865206265737420706f6e792065766572
            payment                           transaction               height     amount     unlock time
 666c75666679706f6e79206973207     7ba4cd810c9b4096869849458181e98e     441942     30.00000   0
[wallet 49VNLa]: █
```

Si vous avez besoin de vérifier les paiements de manière programmatique, vous trouverez les détails après la section suivante.

### Recevoir un Paiement Pas-à-Pas

* Générer aléatoirement une chaine de 64 caractères hexadécimaux pour le paiement
* Fournir l'ID de paiement et l'adresse Monero à l'individu qui effectue le paiement
* Vérifier le paiement en utilisant la commande "payments" dans monero-wallet-cli

### Vérifier un Paiement de manière Programmatique

Afin de vérifier un paiement de manière programmatique, vous pouvez utiliser les requêtes get_payments ou get_bulk_payments de l'API JSON RPC.

*get_payments* : nécessite un paramètre payment_id contenant un unique ID de Paiement.

*get_bulk_payments* : méthode privilégiée, nécessitant deux paramètres, un payment_ids - un tableau JSON d'IDs de Paiement - et un min_block_height optionel - la hauteur de bloc à partir de laquelle effectuer la recherche.

Voici un exemple de donné renvoyée :

```
[ monero->~ ]$ curl -X POST http://127.0.0.1:18500/json_rpc -d '{"jsonrpc":"2.0","method":"get_bulk_payments","id":"test", "params":{"payment_ids": ["666c75666679706f6e7920697320746865206265737420706f6e792065766572"]}}' -H "Content-Type: application/json"
{
  "id": "test",
  "jsonrpc": "2.0",
  "result": {
    "payments": [{
      "amount": 30000000000000,
      "block_height": 441942,
      "payment_id": "666c75666679706f6e7920697320746865206265737420706f6e792065766572",
      "tx_hash": "7ba4cd810c9b4096869849458181e98e18b6474ab66415de0f4ccf7ab1162fdf",
      "unlock_time": 0
    }]
  }
}
```

Il est important de noter que les montant sont retournés en unités Monero de base et pas en unités normalement utilisées dans les applications pour utilisateurs-finaux. De plus, dans la mesure où une transaction aura typiquement de multiples sorties qui s'ajoutent pour obtenir le total requis pour le paiement, les montants devraient être groupés pax tx_hash ou par payment_id afin de les additionner. Enfin, comme de multiples sorties peuvent avoir le même montant, il est impératif de ne pas essayer de filter les résultat d'une unique requête get_bulk_payments.

Avant de rechercher un paiement, il peut être utile de vérifier auprès du démon RPC API (avec une requête RPC get_info) si de nouveaux blocs ont été reçus. Typiquement, vous voudrez n'effectuer la recherche qu'à partir de ce bloc en le spécifiant comme paramètre min_block_height lors de la requête get_bulk_payments.

### Rechercher des Paiement de manière programmatique

* Récupérer la hauteur actuelle de bloc auprès du démon, et ne procéder à la recherche que si celle-ci à augmentée depuis la dernière recherche
* Lancer une requête API RPC get_bulk_payments avec cette dernière hauteur de bloc et la liste de tous les IDs de paiement à rechercher
* Enregistrer la hauteur de bloc actuelle en tant que dernière hauteur de bloc recherchée
* Supprimer les doublons en fonction des hachages de transaction déjà reçus et traités

</div>
                    </div>
                </div>


                <!-- end right one-third block-->
            </div>
        </section>
