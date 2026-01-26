import moneroCppLogo from "@/assets/images/dev-tools/monero-cpp.png";
import moneroJavaLogo from "@/assets/images/dev-tools/monero-java.png";
import moneroOxideLogo from "@/assets/images/dev-tools/monero-oxide.png";
import moneroPythonLogo from "@/assets/images/dev-tools/monero-python.png";
import monerophpLogo from "@/assets/images/dev-tools/monerophp.png";
import moneroTsLogo from "@/assets/images/dev-tools/monero-ts.png";
import goMoneroRpcLogo from "@/assets/images/dev-tools/go-monero-rpc-client.png";

import btcpayLogo from "@/assets/images/payment-gateways/btcpayserver.png";
import nowPaymentsLogo from "@/assets/images/payment-gateways/nowpayments.png";
import bitcartLogo from "@/assets/images/payment-gateways/bitcart.png";
import coinpaymentsLogo from "@/assets/images/payment-gateways/coinpayments.png";
import cryptowooLogo from "@/assets/images/payment-gateways/cryptowoo.jpg";
import monerowpLogo from "@/assets/images/dev-tools/monerowp.png";

export interface Tool {
  id: string;
  title: string;
  href: string;
  onionHref?: string;
  logo?: ImageMetadata;
}

export const blockExplorers: Tool[] = [
  {
    id: "p2poolObserver",
    title: "P2Pool Observer",
    href: "https://blocks.p2pool.observer/",
  },
  {
    id: "p2poolIo",
    title: "P2Pool.io Explorer",
    href: "https://p2pool.io/explorer/",
    onionHref:
      "http://yucmgsbw7nknw7oi3bkuwudvc657g2xcqahhbjyewazusyytapqo4xid.onion/explorer/",
  },
  {
    id: "moneroHash",
    title: "MoneroHash",
    href: "https://monerohash.com/explorer/",
  },
  {
    id: "xmrchain",
    title: "xmrchain.net",
    href: "https://xmrchain.net",
  },
  {
    id: "localMonero",
    title: "LocalMonero Explorer",
    href: "https://localmonero.co/blocks",
  },
  {
    id: "monerowat",
    title: "Monerowat.ch",
    href: "https://monerowat.ch",
  },
  {
    id: "xmrmx",
    title: "xmr.mx",
    href: "https://xmr.mx",
    onionHref:
      "http://ravfxexpx76quysu77pbvao4ng5qnyo46gguklfwlafhllrujwdgqtyd.onion/",
  },
];

export const networkTools: Tool[] = [
  {
    id: "moneroFail",
    title: "Monero.fail",
    href: "https://monero.fail",
  },
  {
    id: "ditatompel",
    title: "ditatompel",
    href: "https://www.ditatompel.com/monero/remote-node",
  },
  {
    id: "moneroHashNodes",
    title: "monerohash.com",
    href: "https://monerohash.com/nodes-distribution.html",
  },
  {
    id: "txStreet",
    title: "TxStreet",
    href: "https://txstreet.com/v/xmr",
  },
  {
    id: "nowNodes",
    title: "NOWNodes",
    href: "https://nownodes.io",
  },
  {
    id: "getBlock",
    title: "GetBlock",
    href: "https://getblock.io",
  },
];

export const utilities: Tool[] = [
  {
    id: "llcoins",
    title: "xmr.llcoins.net",
    href: "https://xmr.llcoins.net",
  },
  {
    id: "monerotech",
    title: "monerotech.info",
    href: "https://monerotech.info",
  },
  {
    id: "moneroHow",
    title: "Monero.how",
    href: "https://www.monero.how",
  },
  {
    id: "moneroLogs",
    title: "MoneroLogs",
    href: "https://monerologs.net",
  },
];

export const developerLibraries: Tool[] = [
  {
    id: "moneroTs",
    title: "monero-ts",
    href: "https://github.com/monero-ecosystem/monero-ts",
    logo: moneroTsLogo,
  },
  {
    id: "moneroPython",
    title: "monero-python",
    href: "https://github.com/monero-ecosystem/monero-python",
    logo: moneroPythonLogo,
  },
  {
    id: "moneroOxide",
    title: "monero-oxide",
    href: "https://github.com/monero-oxide/monero-oxide",
    logo: moneroOxideLogo,
  },
  {
    id: "moneroJava",
    title: "monero-java",
    href: "https://github.com/monero-ecosystem/monero-java",
    logo: moneroJavaLogo,
  },
  {
    id: "moneroCpp",
    title: "monero-cpp",
    href: "https://github.com/monero-ecosystem/monero-cpp",
    logo: moneroCppLogo,
  },
  {
    id: "monerophp",
    title: "monerophp",
    href: "https://github.com/monero-integrations/monerophp",
    logo: monerophpLogo,
  },
  {
    id: "goMoneroRpc",
    title: "Go Monero RPC Client",
    href: "https://github.com/omani/go-monero-rpc-client",
    logo: goMoneroRpcLogo,
  },
];

export const paymentGateways: Tool[] = [
  {
    id: "btcPayServer",
    title: "BTCPayServer",
    href: "https://btcpayserver.org",
    logo: btcpayLogo,
  },
  {
    id: "nowPayments",
    title: "NOWPayments",
    href: "https://nowpayments.io",
    logo: nowPaymentsLogo,
  },
  {
    id: "bitcart",
    title: "Bitcart",
    href: "https://bitcart.ai",
    logo: bitcartLogo,
  },
  {
    id: "coinPayments",
    title: "CoinPayments",
    href: "https://www.coinpayments.net",
    logo: coinpaymentsLogo,
  },
  {
    id: "cryptoWoo",
    title: "CryptoWoo",
    href: "https://www.cryptowoo.com",
    logo: cryptowooLogo,
  },
  {
    id: "moneroWooCommerce",
    title: "Monero WooCommerce",
    href: "https://github.com/monero-integrations/monerowp",
    logo: monerowpLogo,
  },
];

export const exploreCount =
  blockExplorers.length + networkTools.length + utilities.length;
export const developCount = developerLibraries.length;
export const acceptCount = paymentGateways.length;
