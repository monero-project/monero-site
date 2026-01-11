export type Merchant = {
  id: string;
  name: string;
  logo: string;
  link: string;
  onionLink?: string;
};

const merchants: Merchant[] = [
  {
    id: "cryptwerk",
    name: "Cryptwerk",
    logo: "/media/directories/cryptwerk.jpg",
    link: "https://cryptwerk.com/pay-with/xmr",
  },
  {
    id: "monerica",
    name: "Monerica",
    logo: "/media/directories/monerica-logo.png",
    link: "https://monerica.com",
    onionLink:
      "http://67w4f46nfrfigohl4ypgpo7cjnftl57rorha3zmn4xkll5jvmi6mi4qd.onion",
  },
  {
    id: "xmrbazaar",
    name: "XMRBazaar",
    logo: "/media/directories/xmrbazaar.jpg",
    link: "https://xmrbazaar.com",
  },
  {
    id: "kycnotme",
    name: "KYCNot.me",
    logo: "/media/directories/kycnotme.jpg",
    link: "https://kycnot.me/?currency-mode=or&currencies=xmr",
    onionLink:
      "http://kycnotmezdiftahfmc34pqbpicxlnx3jbf5p7jypge7gdvduu7i6qjqd.onion/?currency-mode=or&currencies=xmr",
  },
];

export default merchants;
