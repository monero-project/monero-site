import type { ImageMetadata } from "astro";

import tariLabsLogo from "@/assets/images/sponsors/tarilabs.png";
import cakeLabsLogo from "@/assets/images/sponsors/cakelabs.jpg";
import macStadiumLogo from "@/assets/images/sponsors/macstadium.png";
import cypherStackLogo from "@/assets/images/sponsors/cypherstack.png";
import symasLogo from "@/assets/images/sponsors/symas.png";

export type Sponsor = {
  id: string;
  name: string;
  link?: string;
  logo?: ImageMetadata;
  monochrome?: boolean;
};

export const currentSponsors: Sponsor[] = [
  {
    id: "tari-labs",
    name: "Tari Labs",
    link: "https://tarilabs.com",
    logo: tariLabsLogo,
    monochrome: true,
  },
  {
    id: "cake-wallet",
    name: "Cake Wallet",
    link: "https://cakewallet.com",
    logo: cakeLabsLogo,
  },
  {
    id: "cypher-stack",
    name: "Cypher Stack",
    link: "https://cypherstack.com",
    logo: cypherStackLogo,
    monochrome: true,
  },
  {
    id: "macstadium",
    name: "MacStadium",
    link: "https://macstadium.com",
    logo: macStadiumLogo,
    monochrome: true,
  },
  {
    id: "symas",
    name: "Symas",
    link: "https://symas.com",
    logo: symasLogo,
  },
];

export const pastSponsors: Sponsor[] = [
  {
    id: "majestic-bank",
    name: "MajesticBank",
  },
  {
    id: "globee",
    name: "Globee",
  },
  {
    id: "navicat",
    name: "Navicat",
    link: "https://www.navicat.com",
  },
  {
    id: "forked",
    name: "Forked",
    link: "https://forked.net",
  },
  {
    id: "kitware",
    name: "Kitware",
    link: "https://www.kitware.com",
  },
  {
    id: "dome9",
    name: "Dome9 Security",
    link: "https://dome9.com",
  },
  {
    id: "jetbrains",
    name: "JetBrains",
    link: "https://www.jetbrains.com",
  },
  {
    id: "mymonero",
    name: "MyMonero",
    link: "https://mymonero.com",
  },
];
