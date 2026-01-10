export type Sponsor = {
  id: string;
  name: string;
  link?: string;
  logo?: string;
  monochrome?: boolean;
};

export const currentSponsors: Sponsor[] = [
  {
    id: "tari-labs",
    name: "Tari Labs",
    link: "https://tarilabs.com",
    logo: "/media/brands/tarilabs.png",
    monochrome: true,
  },
  {
    id: "cake-wallet",
    name: "Cake Wallet",
    link: "https://cakewallet.com",
    logo: "/media/brands/cakelabs.jpg",
  },
  {
    id: "cypher-stack",
    name: "Cypher Stack",
    link: "https://cypherstack.com",
    logo: "/media/brands/cypherstack.png",
    monochrome: true,
  },
  {
    id: "macstadium",
    name: "MacStadium",
    link: "https://macstadium.com",
    logo: "/media/brands/macstadium.png",
    monochrome: true,
  },
  {
    id: "symas",
    name: "Symas",
    link: "https://symas.com",
    logo: "/media/brands/symas.png",
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
    name: "My Monero",
    link: "https://mymonero.com",
  },
];
