## Systèmes d'exploitation : Windows, Linux, Mac

### Application de comptabilité :  monero-wallet-cli

- Récupérez votre @mnemonic-seed de 25 mots que vous avez sauvegardé lorsque vous avez créé votre ancien @wallet Monero ;

- Ouvrez une invite de commande et naviguez sur le disque et dans le répertoire contenant monero-wallet-cli ;

- Dans l'invite de commande, tapez :  `monero-wallet-cli --restore-deterministic-wallet` ;

- Une fois que vous aurez appuyé sur la touche Entrée, un nom de portefeuille vous sera demandé. Donnez le nom de votre choix au portefeuille ;

- Appuyez de nouveau sur la touche Entrée afin que le mot de passe vous soit demandé. Fournissez un nouveau et long mot de passe ;

- Appuyez de nouveau sur la touche Entrée et répéter votre mot de passe ;

- Appuyez de nouveau sur la touche Entrée saisissez les 25 mots type electrum de votre phrase mnemonique que vous avez récupéré plus tôt ;

- On vous demandera alors la hauteur de bloc de restauration "Restore from specific blockchain height (optional, default 0):" La valeur par défaut lancera le processus de restauration à partir du début de la chaîne de blocs. Si vous ne connaissez pas la hauteur de bloc spécifique, appuyez simplement sur la touche Entrée. (Spécifier une hauteur de bloc lancera le processus de restauration à partir de cette hauteur spécifique. Cela évitera un peut de temps d'analyse si vous savez à partir de quelle hauteur de bloc vos fonds initiaux ont été transféré pour ce compte)

Après avoir saisit les 25 mots de la phrase mnamonique et avoir choisit la hauteur de bloc, monero-wallet-cli va généré la même adresse publique et clef d'audit que pour votre ancien portefeuille et commancera le processus de réfraichissement automatiquement. (Soyez patient car le processus de rafraichissement peut être long)

