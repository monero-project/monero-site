{% include disclaimer.html translated="no" translationOutdated="no" %}

If you have sent or received Monero and it is not appearing in your wallet, you can scan for the specific transaction using its ID.
After scanning is complete, Monero should be removed or added to your balance. WARNING: this operation may reveal the txids to the remote node and affect your privacy

### Monero GUI

1) With your wallet open, click on `Settings` -> `Wallet` -> `Scan transaction`

![Scan TXID GUI](/img/resources/user-guides/en/scan-txid/scan_tx_1.png){:width="600px"}

2) Enter the transaction ID you want to scan and click OK.

![Enter TXID GUI](/img/resources/user-guides/en/scan-txid/scan_tx_2.png)

3) If anything was found, your balance will update, and the transaction will appear in your history.

![Updated Balance GUI](/img/resources/user-guides/en/scan-txid/scan_tx_3.png){:width="600px"}

### Monero CLI

1) With your wallet open, simply enter `scan_tx` followed by the transaction ID.

![Scan TXID CLI](/img/resources/user-guides/en/scan-txid/scan_tx_4.png){:width="600px"}
