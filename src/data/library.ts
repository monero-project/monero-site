import type { ImageMetadata } from "astro";

import masteringMoneroCover from "@/assets/images/masteringmonero.avif";
import zeroToMonero1stCover from "@/assets/images/z2m-1st.avif";
import zeroToMonero2ndCover from "@/assets/images/z2m-2nd.avif";

export interface Book {
  title: string;
  subtitle?: string;
  description: string;
  cover?: ImageMetadata;
  coverAlt?: string;
  link: string;
  translations?: {
    locale: string;
    url: string;
  }[];
}

export interface Cheatsheet {
  title: string;
  description: string;
  url: string;
}

export interface Newsletter {
  title: string;
  description: string;
  url: string;
  logo?: string;
}

export const books: Book[] = [
  {
    title: "Zero to Monero",
    subtitle: "Second Edition",
    description:
      "A comprehensive conceptual and technical explanation of Monero. Learn how Monero works at a deep level and discover how beautiful cryptography can be.",
    cover: zeroToMonero2ndCover,
    coverAlt: "Zero to Monero Second Edition cover",
    link: "/library/Zero-to-Monero-2-0-0.pdf",
    translations: [
      {
        locale: "ru",
        url: "/library/Zero-to-Monero-2-0-0-ru.pdf",
      },
      {
        locale: "pt",
        url: "/library/Zero-to-Monero-2-0-0-pt.pdf",
      },
      {
        locale: "it",
        url: "/library/Zero-to-Monero-2-0-0-it.pdf",
      },
    ],
  },
  {
    title: "Zero to Monero",
    subtitle: "First Edition",
    description:
      "The original technical explanation of Monero, providing foundational knowledge of the protocol and its cryptographic principles.",
    cover: zeroToMonero1stCover,
    coverAlt: "Zero to Monero First Edition cover",
    link: "/library/Zero-to-Monero-1-0-0.pdf",
  },
  {
    title: "Mastering Monero",
    subtitle: "Your guide to Monero",
    description:
      "A guide through the world of Monero, covering everything from blockchain basics to advanced technical concepts like Bulletproofs and multisig.",
    cover: masteringMoneroCover,
    coverAlt: "Mastering Monero cover",
    link: "https://masteringmonero.com/free-download.html",
  },
];

export const cheatsheets: Cheatsheet[] = [
  {
    title: "Monero Addresses",
    description:
      "A single-page recap of keys, addresses, scopes and their relations.",
    url: "/library/MoneroAddressesCheatsheet20201206.pdf",
  },
  {
    title: "Rings",
    description:
      "From generic legacy signature to CLSAG, a visual journey through ring flavours.",
    url: "/library/RctCheatsheet20210604.pdf",
  },
  {
    title: "RingCT",
    description:
      "The recipe of a delicious RingCT Type 5 transaction with all its ingredients.",
    url: "/library/RingsCheatsheet20210301.pdf",
  },
  {
    title: "ZK Basics",
    description:
      "Theoretical foundations for Bulletproof and other Zero-Knowledge features.",
    url: "/library/ZKbasicsCheatsheet20220621.pdf",
  },
];

export const newsletters: Newsletter[] = [
  {
    title: "Monero Observer",
    description:
      "Daily coverage of Monero's latest developments with practical guides and weekly/monthly highlights.",
    url: "https://monero.observer/",
  },
  {
    title: "Revuo Monero",
    description:
      "A weekly newsletter with the most recent Monero news and updates.",
    url: "https://revuo-xmr.com/",
  },
  {
    title: "This Week in Monero",
    description:
      "Weekly insights and updates from the Monero ecosystem on the latest developments and news.",
    url: "https://cyphergoat.com/this-week-in-monero",
  },
  {
    title: "The Monero Standard",
    description:
      "Weekly publication with news, price charts, mining pool stats, blockchain statistics, and memes.",
    url: "https://localmonero.co/the-monero-standard",
  },
];
