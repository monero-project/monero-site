export interface Tool {
  title: string;
  subtitle: string;
  href: string;
  onionHref?: string;
  logo?: string;
}

export const blockExplorers: Tool[] = [
  {
    title: "P2Pool Observer",
    subtitle:
      "Unconventional explorer with miner proof verification (hides uncontested blocks)",
    href: "https://blocks.p2pool.observer/",
  },
  {
    title: "P2Pool.io Explorer",
    subtitle: "Traditional Monero block explorer",
    href: "https://p2pool.io/explorer/",
    onionHref:
      "http://yucmgsbw7nknw7oi3bkuwudvc657g2xcqahhbjyewazusyytapqo4xid.onion/explorer/",
  },
  {
    title: "MoneroHash",
    subtitle: "Popular Monero block explorer",
    href: "https://monerohash.com/explorer/",
  },
  {
    title: "xmrchain.net",
    subtitle: "Popular open-source Monero block explorer",
    href: "https://xmrchain.net",
  },
  {
    title: "LocalMonero Explorer",
    subtitle: "Block explorer by LocalMonero",
    href: "https://localmonero.co/blocks",
  },
  {
    title: "Monerowat.ch",
    subtitle: "Monero block explorer",
    href: "https://monerowat.ch",
  },
  {
    title: "xmr.mx",
    subtitle: "Monero block explorer",
    href: "https://xmr.mx",
    onionHref:
      "http://ravfxexpx76quysu77pbvao4ng5qnyo46gguklfwlafhllrujwdgqtyd.onion/",
  },
];

export const networkTools: Tool[] = [
  {
    title: "Monero.fail",
    subtitle: "Comprehensive node list and network map",
    href: "https://monero.fail",
  },
  {
    title: "ditatompel",
    subtitle: "Monero remote node list",
    href: "https://www.ditatompel.com/monero/remote-node",
  },
  {
    title: "monerohash.com",
    subtitle: "Interactive Monero node map",
    href: "https://monerohash.com/nodes-distribution.html",
  },
  {
    title: "TxStreet",
    subtitle: "Live transaction and block visualizer",
    href: "https://txstreet.com/v/xmr",
  },
  {
    title: "NOWNodes",
    subtitle: "Blockchain node APIs for developers",
    href: "https://nownodes.io",
  },
  {
    title: "GetBlock",
    subtitle: "Blockchain nodes provider",
    href: "https://getblock.io",
  },
];

export const utilities: Tool[] = [
  {
    title: "xmr.llcoins.net",
    subtitle: "Offline wallet and address generator",
    href: "https://xmr.llcoins.net",
  },
  {
    title: "monerotech.info",
    subtitle: "Tool to inspect wallet keys and addresses",
    href: "https://monerotech.info",
  },
  {
    title: "Monero.how",
    subtitle: "Statistics and educational resources",
    href: "https://www.monero.how",
  },
  {
    title: "MoneroLogs",
    subtitle: "Archive of Monero IRC channels",
    href: "https://monerologs.net",
  },
];

export const developerLibraries: Tool[] = [
  {
    title: "monero-ts",
    subtitle: "TypeScript/JavaScript library for Node.js and browsers",
    href: "https://github.com/monero-ecosystem/monero-ts",
    logo: "/media/dev-tools/monero-ts.png",
  },
  {
    title: "monero-python",
    subtitle: "Python library with RPC and native bindings",
    href: "https://github.com/monero-ecosystem/monero-python",
    logo: "/media/dev-tools/monero-python.png",
  },
  {
    title: "monero-oxide",
    subtitle: "Rust implementation of the Monero blockchain protocol",
    href: "https://github.com/monero-oxide/monero-oxide",
    logo: "/media/dev-tools/monero-oxide.png",
  },
  {
    title: "monero-java",
    subtitle: "Java library for Monero wallet and daemon RPC",
    href: "https://github.com/monero-ecosystem/monero-java",
    logo: "/media/dev-tools/monero-java.png",
  },
  {
    title: "monero-cpp",
    subtitle: "C++ library for Monero wallet and daemon",
    href: "https://github.com/monero-ecosystem/monero-cpp",
    logo: "/media/dev-tools/monero-cpp.png",
  },
  {
    title: "monerophp",
    subtitle: "PHP library for Monero wallet RPC",
    href: "https://github.com/monero-integrations/monerophp",
    logo: "/media/dev-tools/monerophp.png",
  },
  {
    title: "Go Monero RPC Client",
    subtitle: "Go client for Monero wallet and daemon RPC",
    href: "https://github.com/omani/go-monero-rpc-client",
    logo: "/media/dev-tools/go-monero-rpc-client.png",
  },
];

export const paymentGateways: Tool[] = [
  {
    title: "BTCPayServer",
    subtitle: "Self-hosted, open-source payment processor",
    href: "https://btcpayserver.org",
    logo: "/media/payment-gateways/btcpayserver.png",
  },
  {
    title: "NOWPayments",
    subtitle: "Non-custodial crypto payment gateway",
    href: "https://nowpayments.io",
    logo: "/media/payment-gateways/nowpayments.png",
  },
  {
    title: "Bitcart",
    subtitle: "Open-source cryptocurrency payment platform",
    href: "https://bitcart.ai",
    logo: "/media/payment-gateways/bitcart.png",
  },
  {
    title: "CoinPayments",
    subtitle: "Multi-cryptocurrency payment gateway",
    href: "https://www.coinpayments.net",
    logo: "/media/payment-gateways/coinpayments.png",
  },
  {
    title: "CryptoWoo",
    subtitle: "WooCommerce Monero plugin",
    href: "https://www.cryptowoo.com",
    logo: "/media/payment-gateways/cryptowoo.jpg",
  },
  {
    title: "Monero WooCommerce",
    subtitle: "PHP extension for WooCommerce stores",
    href: "https://github.com/monero-integrations/monerowp",
    logo: "/media/dev-tools/monerowp.png",
  },
];

export const exploreCount =
  blockExplorers.length + networkTools.length + utilities.length;
export const developCount = developerLibraries.length;
export const acceptCount = paymentGateways.length;
