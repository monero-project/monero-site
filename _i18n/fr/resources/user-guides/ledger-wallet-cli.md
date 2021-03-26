{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Table des Matières

* [Windows](#windows)
* [Mac OS X](#mac-os-x)
* [Linux](#linux)
* [Remarques Finales](#quelques-remarques-finales)

### Windows

Nous devons nous assurer d'être suffisamment préparé. Cela implique ce qui suit :

- Ce guide suppose que vous avez déjà initialisé votre portefeuille Ledger et par conséquent généré une phrase mnémonique de 24 mots.

- Vous devez lancer / utiliser la CLI v0.12.2.0, qui peut être récupérée <a href="{{site.baseurl}}/downloads/">ici</a>.

- Vous avez besoin d'installer et de configurer l'application de portefeuille Monero de Ledger. Vous trouverez les instructions [ici](https://github.com/LedgerHQ/blue-app-monero/blob/master/doc/user/bolos-app-monero.pdf) (sections 3.1.1 et 3.2.3 en particulier). De plus, assurez-vous de configurer le réseau sur `Mainnet`.

- Votre Ledger doit être connecté et l'application Monero de Ledger en cours d'exécution.

- Vous devez soit avoir votre démon (`monerod.exe`) lancé et de préférence totalement synchronisé, soit vous connecter à un nœud distant.

Maintenant que nous sommes suffisamment préparé, commençons !

- Allez dans le répertoire / dossier où sont situés monerod.exe et monero-wallet-cli.exe.

- Ouvrez une nouvelle invite de commande / fenêtre powershell. Vous pouvez faire cela en vous assurant que votre curseur n'est pas positionné sur un fichier, puis en faisant consécutivement SHUFT + Click Droit. Une nouvelle option "Ouvrir une fenêtre de commande ici" vous sera proposée. Si vous utilisez Windows 10 en dernière version, l'option sera "Ouvrir la fenêtre PowerShell ici".

- Saisissez maintenant :

`monero-wallet-cli.exe --generate-from-device <new-wallet-name> --subaddress-lookahead 3:200` (Win 7 + 8)

`.\monero-wallet-cli.exe --generate-from-device <new-wallet-name> --subaddress-lookahead 3:200` (Win 10)

Remarquez qu'il s'agit simplement d'un emplacement pour le nom effectif du portefeuille. Si vous vouliez, par exemple, nommer votre portefeuille `MoneroWallet`, la commande serait la suivante :

`monero-wallet-cli.exe --generate-from-device MoneroWallet --subaddress-lookahead 3:200` (Win 7 + 8)

`.\monero-wallet-cli.exe --generate-from-device MoneroWallet --subaddress-lookahead 3:200` (Win 10)

- Après avoir exécutée la commande susmentionnée, la CLI va vous demander de saisir un mot de passe. Assurez-vous de saisir un mot de passe robuste, puis confirmez-le.

- Le Ledger vous demandera si vous souhaitez ou non exporter la clef privée d'audit. Avant tout, vos fonds ne peuvent pas être compromis uniquement avec la clef privée d'audit. Exporter la clef privée d'audit permet au client (sur l'ordinateur - Monero v0.12.2.0) de scanner les blocs à la recherche de transactions appartenant à votre portefeuille / adresse. Si cette option n'est pas utilisée, le périphérique (Ledger) scannera les blocs, ce qui est considérablement plus lent. Il y a cependant une mise en garde : si votre système est compromis, un ennemi serait potentiellement en mesure de compromettre également votre clef privée d'audit, au détriment de votre confidentialité. C'est pratiquement impossible lorsque votre clef privée d'audit n'est pas exportée.

- Vous pourriez avoir besoin de confirmer deux fois avant qu'il ne procède.

- Votre portefeuille Monero Ledger va maintenant être généré. Notez que cela pourrait prendre de 5 à 10 minutes. De plus, il n'y aura pas de retour immédiat, ni sur la CLI ni sur Ledger.

- `monero-wallet-cli` va se réactualiser. Patientez jusqu'à la fin de cette opération.

Félicitations, vous pouvez maintenant utiliser votre portefeuille Monero Ledger conjointement avec la CLI.

### Mac OS X

Nous devons nous assurer d'être suffisamment préparé. Cela implique ce qui suit :

- Ce guide suppose que vous avez déjà initialisé votre portefeuille Ledger et par conséquent généré une phrase mnémonique de 24 mots.

- Vous devez lancer / utiliser la CLI v0.12.2.0, qui peut être récupérée <a href="{{site.baseurl}}/downloads/">ici</a>.

- Vous avez besoin d'installer et de configurer l'application de portefeuille Monero de Ledger. Vous trouverez les instructions [ici](https://github.com/LedgerHQ/blue-app-monero/blob/master/doc/user/bolos-app-monero.pdf) (sections --1 et --2 en particulier). De plus, assurez-vous de configurer le réseau sur `Mainnet`.

- Remarquez que les instructions pour la configuration du système (section --2) sur Mac OS X sont assez compliquées et peuvent être perçues comme quelque peu alambiqués. Par chance, tficharmers a écrit un guide [ici](https://monero.stackexchange.com/questions/8438/how-do-i-make-my-macos-detect-my-ledger-nano-s-when-plugged-in) que vous pouvez utiliser pour vous aider.

- Votre Ledger doit être connecté et l'application Monero de Ledger en cours d'exécution.

- Vous devez soit avoir votre démon (`monerod`) lancé et de préférence totalement synchronisé, soit vous connecter à un nœud distant.

Maintenant que nous sommes suffisamment préparé, commençons !

- Utilisez Finder pour naviguer dans le répertoire / dossier où se situe `monero-wallet-cli` (CLI v0.12.2.0).

- Allez sur votre bureau.

- Ouvrez un nouveau terminal (Si vous ne savez pas comment ouvrir un terminal, allez voir [ici](https://apple.stackexchange.com/a/256263)).

- Glissez-déposez `monero-wallet-cli` dans le terminal. Cela devrait ajouter le chemin complet au terminal. N'appuyez pas sur la touche Entrée.

- Saisissez maintenant :

`--generate-from-device <new-wallet-name> --subaddress-lookahead 3:200`

Remarquez qu'il s'agit simplement d'un emplacement pour le nom effectif du portefeuille. Si vous vouliez, par exemple, nommer votre portefeuille `MoneroWallet`, la commande serait la suivante :

`--generate-from-device MoneroWallet --subaddress-lookahead 3:200`

Remarquez que le texte susmentionné sera ajouté au chemin de `monero-wallet-cli`. Donc, avant que vous n'appuyez sur la touche Entrée, votre terminal devrait ressembler à cela :

`/chemin/complet/vers/monero-wallet-cli --generate-from-device <new-wallet-name> --subaddress-lookahead 3:200`

Où le chemin complet est, comme son nom l'indique, le chemin actuel sur votre Mac OS X.

- Après avoir exécutée la commande susmentionnée, la CLI va vous demander de saisir un mot de passe. Assurez-vous de saisir un mot de passe robuste puis confirmez-le. 

- Le Ledger vous demandera si vous souhaitez ou non exporter la clef privée d'audit. Avant tout, vos fonds ne peuvent pas être compromis uniquement avec la clef privée d'audit. Exporter la clef privée d'audit permet au client (sur l'ordinateur - Monero v0.12.2.0) de scanner les blocs à la recherche de transactions appartenant à votre portefeuille / adresse. Si cette option n'est pas utilisée, le périphérique (Ledger) scannera les blocs, ce qui est considérablement plus lent. Il y a cependant une mise en garde : si votre système est compromis, un ennemi serait potentiellement en mesure de compromettre également votre clef privée d'audit, au détriment de votre confidentialité. C'est pratiquement impossible lorsque votre clef privée d'audit n'est pas exportée.

- Vous pourriez avoir besoin de confirmer deux fois avant qu'il ne procède.

- Votre portefeuille Monero Ledger va maintenant être généré. Notez que cela pourrait prendre de 5 à 10 minutes. De plus, il n'y aura pas de retour immédiat, ni sur la CLI ni sur Ledger.

- `monero-wallet-cli` va se réactualiser. Patientez jusqu'à la fin de cette opération.

- Félicitations, vous pouvez maintenant utiliser votre portefeuille Monero Ledger conjointement avec la CLI.

### Linux

Nous devons nous assurer d'être suffisamment préparé. Cela implique ce qui suit :

- Ce guide suppose que vous avez déjà initialisé votre portefeuille Ledger et par conséquent généré une phrase mnémonique de 24 mots.

- Vous devez lancer / utiliser la CLI v0.12.2.0, qui peut être récupérée <a href="{{site.baseurl}}/downloads/">ici</a>.

- Vous avez besoin d'installer et de configurer l'application de portefeuille Monero de Ledger. Vous trouverez les instructions [ici](https://github.com/LedgerHQ/blue-app-monero/blob/master/doc/user/bolos-app-monero.pdf) (sections --1 et --1 en particulier). De plus, assurez-vous de configurer le réseau sur `Mainnet`.

- Votre Ledger doit être connecté et l'application Monero de Ledger en cours d'exécution.

- Vous devez soit avoir votre démon (`monerod`) lancé et de préférence totalement synchronisé, soit vous connecter à un nœud distant.

Maintenant que nous sommes suffisamment préparé, commençons !

- Allez dans le répertoire / dossier où sont situés monero-wallet-cli et monerod.

- Ouvrir un nouveau terminal

- Saisissez maintenant :

`./monero-wallet-cli --generate-from-device <new-wallet-name> --subaddress-lookahead 3:200`

Remarquez qu'il s'agit simplement d'un emplacement pour le nom effectif du portefeuille. Si vous vouliez, par exemple, nommer votre portefeuille `MoneroWallet`, la commande serait la suivante :

`./monero-wallet-cli --generate-from-device MoneroWallet --subaddress-lookahead 3:200`

- Après avoir exécutée la commande susmentionnée, la CLI va vous demander de saisir un mot de passe. Assurez-vous de saisir un mot de passe robuste, puis confirmez-le.

- Le Ledger vous demandera si vous souhaitez ou non exporter la clef privée d'audit. Avant tout, vos fonds ne peuvent pas être compromis uniquement avec la clef privée d'audit. Exporter la clef privée d'audit permet au client (sur l'ordinateur - Monero v0.12.2.0) de scanner les blocs à la recherche de transactions appartenant à votre portefeuille / adresse. Si cette option n'est pas utilisée, le périphérique (Ledger) scannera les blocs, ce qui est considérablement plus lent. Il y a cependant une mise en garde : si votre système est compromis, un ennemi serait potentiellement en mesure de compromettre également votre clef privée d'audit, au détriment de votre confidentialité. C'est pratiquement impossible lorsque votre clef privée d'audit n'est pas exportée.

- Vous pourriez avoir besoin de confirmer deux fois avant qu'il ne procède.

- Votre portefeuille Monero Ledger va maintenant être généré. Notez que cela pourrait prendre de 5 à 10 minutes. De plus, il n'y aura pas de retour immédiat, ni sur la CLI ni sur Ledger.

- `monero-wallet-cli` va se réactualiser. Patientez jusqu'à la fin de cette opération.

Félicitations, vous pouvez maintenant utiliser votre portefeuille Monero Ledger conjointement avec la CLI.

### Quelques remarques finales

- Nous vous recommandons fortement de d'abord tester la totalité du processus. C'est à dire, envoyer un petit montant au portefeuille et le restaurer consécutivement (en utilisant le guide susmentionné) pour vérifier que vous pouvez récupérer le portefeuille. Remarquez que, lors de la recréation / restauration d'un portefeuille, vous devez ajouter l'option `--restore-height` (avec la hauteur de bloc de la première transaction de ce portefeuille) à la commande de l'étape 3 (Windows), l'étape 5 (Mac OS X) ou l'étape 3 (Linux). Vous trouverez plus d'information concernant la hauteur de restauration et la manière de l'estimer [ici](https://monero.stackexchange.com/questions/7581/what-is-the-relevance-of-the-restore-height).

- Si vous utilisez un nœud distant, ajoutez l'option `--daemon-address host:port` à la commande de l'étape 3 (Windows), l'étape 5 (Mac OS X) ou l'étape 3 (Linux).

- Si vous les souhaitez, vous pouvez personnaliser la valeur de l'option `--subaddress-lookahead`. La première valeur correspond au nombre de comptes et la seconde au nombre de sous-adresses par compte. ainsi, si par exemple vous voulez pré-générer 5 comptes avec 100 sous-adresses chacun, utilisez `--subaddress-lookahead 5:100`. Gardez à l'esprit que plus vous pré-générez de sous-adresses, plus le temps de création de votre portefeuille sur le Ledger sera long.

- Vous n'avez à utiliser l'option `--generate-from-device` qu'une seule fois (c-à-d lors de la création du portefeuille). Ultérieurement vous l'utiliserez d'une façon similaire à la CLI habituelle, c'est à dire :
   - Vous assurer que votre Ledge est connecté et que l'application Monro est démarrée ;
   - Ouvrir `monero-wallet-cli`.
   - Entrer le nom de votre portefeuille Monero Ledger ;
   - Entrer le mot de passe pour ouvrir le portefeuille.

   Si les fichiers du portefeuille Ledger ne sont pas dans le même répertoire que `monero-wallet-cli`, vous devez ouvrir `monero-wallet-cli` avec l'option `--wallet-file /chemin/vers/fichier/clefs.portefeuille`. Sinon, vous pouvez copier les fichiers du portefeuille Ledger dans le même répertoire que `monero-wallet-cli`.

- Si vous avez des questions, ou besoin d'aide, ajoutez un commentaire sur l'article d'origine sur [StackExchange](https://monero.stackexchange.com/questions/8503/how-do-i-generate-a-ledger-monero-wallet-with-the-cli-monero-wallet-cli).
