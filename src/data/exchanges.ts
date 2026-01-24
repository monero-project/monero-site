import type { ImageMetadata } from "astro";

import basicswapdexImg from "@/assets/images/exchanges/basicswapdex.jpg";
import bisqImg from "@/assets/images/exchanges/bisq.png";
import retoswapImg from "@/assets/images/exchanges/retoswap.jpg";
import cyphergoatImg from "@/assets/images/exchanges/cyphergoat.png";
import orangefrenImg from "@/assets/images/exchanges/orangefren.jpg";
import trocadorImg from "@/assets/images/exchanges/trocador-logo.webp";
import bitfinexImg from "@/assets/images/exchanges/bitfinex.png";
import krakenImg from "@/assets/images/exchanges/kraken.png";
import kucoinImg from "@/assets/images/exchanges/kucoin.png";
import eigenwalletImg from "@/assets/images/wallets/eigenwallet.avif";

export type ExchangeType = "decentralized" | "aggregator" | "centralized";

export type KycReq = "required" | "optional" | "not-required";

export type Exchange = {
  type: ExchangeType;
  id: string;
  name: string;
  img: ImageMetadata;
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
      img: basicswapdexImg,
      alt: "BasicSwapDEX logo",
      fiat: false,
      crypto: true,
      url: "https://basicswapdex.com",
    },
    {
      type: "decentralized",
      id: "bisq",
      name: "Bisq",
      img: bisqImg,
      alt: "Bisq logo",
      fiat: false,
      crypto: true,
      url: "https://bisq.network",
    },
    {
      type: "decentralized",
      id: "eigenwallet",
      name: "Eigenwallet",
      img: eigenwalletImg,
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
      img: retoswapImg,
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
      img: cyphergoatImg,
      alt: "CypherGoat logo",
      fiat: false,
      crypto: true,
      url: "https://cyphergoat.com",
    },
    {
      type: "aggregator",
      id: "orangefren",
      name: "OrangeFren",
      img: orangefrenImg,
      alt: "OrangeFren logo",
      fiat: true,
      crypto: true,
      url: "https://orangefren.com",
    },
    {
      type: "aggregator",
      id: "trocador",
      name: "Trocador",
      img: trocadorImg,
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
      img: bitfinexImg,
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
      img: krakenImg,
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
      img: kucoinImg,
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
