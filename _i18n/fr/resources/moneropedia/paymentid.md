---
summary: 'Une option supplémentaire que est ajouté pour identifier les transactions avec les commerçants, se composant de 64 caractères hexadécimaux'
terms: ["payment-ID", "payment-IDs", "ID-de-paiement", IDs-de-paiement]
---

{% include disclaimer.html translated="yes" translationOutdated="yes" %}

*Note:* Long Payment IDs have been removed since release 0.15; it's not possible to use them anymore. More info in the [blog post]({{ site.baseurl_root }}/2019/06/04/Long-Payment-ID-Deprecation.html) that announced their deprecation.

### Les Bases

L'ID de transaction est une annexe **arbitraire** et **optionnelle** d'une
transaction qui se compose de 32 octets (64 caractères hexadécimaux) ou 8
octets (dans le cas d'une adresse intégrée).

L'ID de paiement est habituellement utilisé pour identifier des transactions
auprès de commerçants ou bourses : A cause des fonctionnalité de
confidentialités intrinsèques de Monero, ou une seule adresse publique est
habituellement utilisée pour les transactions entrantes, l'ID de paiement
est particulièrement utile pour lier les paiements entrant à des comptes
utilisateurs.

### IDs de paiement compactes et adresses intégrées

Depuis la version 0.9 Hydrogen Helix, les IDs de paiement peuvent être
chiffrés et incorporés dans une adresse de paiement. Les IDs de paiement de
ce type devraient être de 64 octets et son chiffrés avec une clef à usage
unique aléatoire connue uniquement de l'émetteur et du destinataire.

### Créer un ID de paiement

Il est recommandé d'utilisé la commande `integrated_address` du portefeuille
officiel pour générer automatiquement les adresses intégrées qui contiennent
les IDs de paiement compacts. Si vous voulez utilisez la ligne de commande,
vous pouvez générer des IDs de paiement comme suit :

Créer un ID de paiement compact pour une adresse intégrée :

```# openssl rand -hex 8```

Créer un ID de paiement de l'ancien type :

```# openssl rand -hex 32```
