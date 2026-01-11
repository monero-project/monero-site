export type ExchangeType = "decentralized" | "aggregator" | "centralized";

export type KycReq = "required" | "optional" | "not-required";

export type Exchange = {
  type: ExchangeType;
  id: string;
  name: string;
  img: string;
  alt: string;
  fiat: boolean;
  crypto: boolean;
  userFriendly?: boolean;
  url: string;
  kycClass?: string;
  kycReq?: KycReq;
};

export type ExchangesData = {
  decentralizedExchanges: Exchange[];
  swapAggregators: Exchange[];
  centralizedExchanges: Exchange[];
};

const exchanges: ExchangesData = {
  decentralizedExchanges: [
    {
      type: "decentralized",
      id: "basicswapdex",
      name: "BasicSwapDEX",
      img: "/media/exchanges/basicswapdex.jpg",
      alt: "BasicSwapDEX logo",
      fiat: false,
      crypto: true,
      url: "https://basicswapdex.com",
    },
    {
      type: "decentralized",
      id: "bisq",
      name: "Bisq",
      img: "/media/exchanges/bisq.png",
      alt: "Bisq logo",
      fiat: false,
      crypto: true,
      url: "https://bisq.network",
    },
    {
      type: "decentralized",
      id: "eigenwallet",
      name: "Eigenwallet",
      img: "/media/wallets/eigenwallet.avif",
      alt: "Eigenwallet logo",
      fiat: true,
      crypto: true,
      userFriendly: true,
      url: "https://eigenwallet.org",
    },
    {
      type: "decentralized",
      id: "retoswap",
      name: "RetoSwap",
      img: "/media/exchanges/retoswap.jpg",
      alt: "RetoSwap logo",
      fiat: true,
      crypto: true,
      url: "https://retoswap.com",
    },
  ],
  swapAggregators: [
    {
      type: "aggregator",
      id: "cyphergoat",
      name: "CypherGoat",
      img: "/media/exchanges/cyphergoat.png",
      alt: "CypherGoat logo",
      fiat: false,
      crypto: true,
      url: "https://cyphergoat.com",
    },
    {
      type: "aggregator",
      id: "orangefren",
      name: "OrangeFren",
      img: "/media/exchanges/orangefren.jpg",
      alt: "OrangeFren logo",
      fiat: true,
      crypto: true,
      url: "https://orangefren.com",
    },
    {
      type: "aggregator",
      id: "trocador",
      name: "Trocador",
      img: "/media/exchanges/trocador-logo.webp",
      alt: "Trocador logo",
      fiat: false,
      crypto: true,
      url: "https://trocador.app",
    },
  ],
  centralizedExchanges: [
    {
      type: "centralized",
      id: "bitfinex",
      name: "Bitfinex",
      img: "/media/exchanges/bitfinex.png",
      alt: "Bitfinex logo",
      kycClass: "kyc-required",
      kycReq: "required",
      fiat: true,
      crypto: true,
      url: "https://bitfinex.com",
    },
    {
      type: "centralized",
      id: "kraken",
      name: "Kraken",
      img: "/media/exchanges/kraken.png",
      alt: "Kraken logo",
      kycClass: "kyc-required",
      kycReq: "required",
      fiat: true,
      crypto: true,
      url: "https://kraken.com",
    },
    {
      type: "centralized",
      id: "kucoin",
      name: "KuCoin",
      img: "/media/exchanges/kucoin.png",
      alt: "KuCoin logo",
      kycClass: "kyc-required",
      kycReq: "required",
      fiat: true,
      crypto: true,
      url: "https://kucoin.com",
    },
  ],
};

export default exchanges;
