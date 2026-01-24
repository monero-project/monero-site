import type { ImageMetadata } from "astro";

import cryptwerkLogo from "@/assets/images/directories/cryptwerk.jpg";
import monericaLogo from "@/assets/images/directories/monerica-logo.png";
import xmrbazaarLogo from "@/assets/images/directories/xmrbazaar.jpg";
import kycnotmeLogo from "@/assets/images/directories/kycnotme.jpg";

export type Merchant = {
  id: string;
  name: string;
  logo: ImageMetadata;
  link: string;
  onionLink?: string;
};

const merchants: Merchant[] = [
  {
    id: "cryptwerk",
    name: "Cryptwerk",
    logo: cryptwerkLogo,
    link: "https://cryptwerk.com/pay-with/xmr",
  },
  {
    id: "monerica",
    name: "Monerica",
    logo: monericaLogo,
    link: "https://monerica.com",
    onionLink:
      "http://67w4f46nfrfigohl4ypgpo7cjnftl57rorha3zmn4xkll5jvmi6mi4qd.onion",
  },
  {
    id: "xmrbazaar",
    name: "XMRBazaar",
    logo: xmrbazaarLogo,
    link: "https://xmrbazaar.com",
  },
  {
    id: "kycnotme",
    name: "KYCNot.me",
    logo: kycnotmeLogo,
    link: "https://kycnot.me/?currency-mode=or&currencies=xmr",
    onionLink:
      "http://kycnotmezdiftahfmc34pqbpicxlnx3jbf5p7jypge7gdvduu7i6qjqd.onion/?currency-mode=or&currencies=xmr",
  },
];

export default merchants;
