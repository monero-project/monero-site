import type { ImageMetadata } from "astro";

import anoneroLogo from "@/assets/images/wallets/anonero.avif";
import featherLogo from "@/assets/images/wallets/feather.avif";
import monerocomLogo from "@/assets/images/wallets/monerocom.avif";
import monerujoLogo from "@/assets/images/wallets/monerujo.avif";
import monfluoLogo from "@/assets/images/wallets/monfluo.avif";
import cakewalletLogo from "@/assets/images/wallets/cakewallet.avif";
import eigenwalletLogo from "@/assets/images/wallets/eigenwallet.avif";
import stackWalletLogo from "@/assets/images/wallets/stack-wallet.webp";
import unstoppableLogo from "@/assets/images/wallets/unstoppable.avif";
import edgeLogo from "@/assets/images/wallets/edge.avif";
import ledgerLogo from "@/assets/images/wallets/hardware/ledger.avif";
import trezorLogo from "@/assets/images/wallets/hardware/trezor.avif";
import cupcakeLogo from "@/assets/images/wallets/cupcake.avif";
import sidekickLogo from "@/assets/images/wallets/sidekick.avif";
import cuprateLogo from "@/assets/images/nodes/cuprate.avif";

export interface Wallet {
  id: string;
  name: string;
  logo: ImageMetadata;
  link: string;
  tags: {
    desktop?: string[];
    mobile?: string[];
    general?: string[];
  };
}

interface ColdWallet extends Wallet {
  tags: {
    general?: string[];
    mobile?: string[];
  };
}

interface Node extends Wallet {
  tags: {
    desktop?: string[];
    general?: string[];
  };
}

interface CommunityData {
  wallets: {
    moneroOnly: Wallet[];
    multiCoin: Wallet[];
    lws: Wallet[];
  };
  cold: ColdWallet[];
  nodes: Node[];
}

export const community: CommunityData = {
  wallets: {
    moneroOnly: [
      {
        id: "anonero",
        name: "Anonero",
        logo: anoneroLogo,
        link: "https://anonero.io",
        tags: {
          mobile: ["android"],
          general: ["GPL-3.0", "i18n:qrSigning"],
        },
      },
      {
        id: "feather",
        name: "Feather Wallet",
        logo: featherLogo,
        link: "https://featherwallet.org",
        tags: {
          desktop: ["windows", "macos", "linux"],
          general: ["BSD-3", "i18n:qrSigning"],
        },
      },
      {
        id: "monerocom",
        name: "Monero.com",
        logo: monerocomLogo,
        link: "https://monero.com/wallets",
        tags: {
          mobile: ["android", "ios"],
          general: ["MIT", "i18n:qrSigning", "i18n:builtInExchange"],
        },
      },
      {
        id: "monerujo",
        name: "Monerujo",
        logo: monerujoLogo,
        link: "https://monerujo.io",
        tags: {
          mobile: ["android"],
          general: ["Apache 2.0", "i18n:builtInExchange"],
        },
      },
      {
        id: "monfluo",
        name: "Monfluo",
        logo: monfluoLogo,
        link: "https://codeberg.org/acx/monfluo/releases",
        tags: {
          mobile: ["android"],
          general: ["GPL-3.0"],
        },
      },
    ],
    multiCoin: [
      {
        id: "cakewallet",
        name: "Cake Wallet",
        logo: cakewalletLogo,
        link: "https://cakewallet.com",
        tags: {
          desktop: ["windows", "macos", "linux"],
          mobile: ["android", "ios"],
          general: ["GPL-3.0", "i18n:builtInExchange"],
        },
      },
      {
        id: "eigenwallet",
        name: "Eigenwallet",
        logo: eigenwalletLogo,
        link: "https://eigenwallet.org",
        tags: {
          desktop: ["windows", "macos", "linux"],
          general: ["GPL-3.0", "i18n:builtInExchange"],
        },
      },
      {
        id: "stackwallet",
        name: "Stack Wallet",
        logo: stackWalletLogo,
        link: "https://stackwallet.com",
        tags: {
          desktop: ["windows", "macos", "linux"],
          mobile: ["android", "ios"],
          general: ["GPL-3.0", "i18n:builtInExchange"],
        },
      },
      {
        id: "unstoppable",
        name: "Unstoppable Wallet",
        logo: unstoppableLogo,
        link: "https://unstoppable.money",
        tags: {
          mobile: ["android", "ios"],
          general: ["MIT"],
        },
      },
    ],
    lws: [
      {
        id: "edge",
        name: "Edge Wallet",
        logo: edgeLogo,
        link: "https://edge.app/monero-wallet/",
        tags: {
          mobile: ["android", "ios"],
          general: ["BSD-3", "i18n:remoteScanning", "i18n:builtInExchange"],
        },
      },
    ],
  },
  cold: [
    {
      id: "ledger",
      name: "Ledger",
      logo: ledgerLogo,
      link: "https://www.ledger.com/coin/wallet/monero",
      tags: {
        general: ["Nano S", "Nano X", "Flex", "Stax"],
      },
    },
    {
      id: "trezor",
      name: "Trezor",
      logo: trezorLogo,
      link: "https://trezor.io/coins/wallet/monero",
      tags: {
        general: ["Model T", "Safe 3", "Safe 5", "Safe 7"],
      },
    },
    {
      id: "cupcake",
      name: "Cupcake",
      logo: cupcakeLogo,
      link: "https://docs.cakewallet.com/cupcake/",
      tags: {
        general: ["i18n:diy"],
        mobile: ["android", "ios"],
      },
    },
    {
      id: "sidekick",
      name: "Sidekick",
      logo: sidekickLogo,
      link: "https://sidekick.monerujo.app/",
      tags: {
        general: ["i18n:diy"],
        mobile: ["android"],
      },
    },
  ],
  nodes: [
    {
      id: "cuprate",
      name: "Cuprate",
      logo: cuprateLogo,
      link: "https://github.com/Cuprate/cuprate",
      tags: {
        desktop: ["windows", "macos", "linux"],
        general: ["MIT", "AGPL-3.0", "i18n:alphaSoftware"],
      },
    },
  ],
};

export default community;
