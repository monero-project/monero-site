export interface AssetSize {
  label: string;
  url: string;
}

export interface AssetVariant {
  label: string;
  sizes: AssetSize[];
}

export interface BrandAsset {
  name: string;
  description: string;
  preview: string;
  variants: AssetVariant[];
  vectorUrl?: string;
}

export interface PressDocument {
  title: string;
  description: string;
  url: string;
}

export interface MarketingResource {
  title: string;
  description: string;
  url: string;
}

export const brandAssets: BrandAsset[] = [
  {
    name: "Monero Symbol",
    description: "The Monero 'M' symbol for use in icons and compact spaces.",
    preview: "/media/press-kit/symbols/monero-symbol-480.png",
    variants: [
      {
        label: "Transparent",
        sizes: [
          {
            label: "Small",
            url: "/media/press-kit/symbols/monero-symbol-480.png",
          },
          {
            label: "Medium",
            url: "/media/press-kit/symbols/monero-symbol-800.png",
          },
          {
            label: "Large",
            url: "/media/press-kit/symbols/monero-symbol-1280.png",
          },
        ],
      },
      {
        label: "White Background",
        sizes: [
          {
            label: "Small",
            url: "/media/press-kit/symbols/monero-symbol-on-white-480.png",
          },
          {
            label: "Medium",
            url: "/media/press-kit/symbols/monero-symbol-on-white-800.png",
          },
          {
            label: "Large",
            url: "/media/press-kit/symbols/monero-symbol-on-white-1280.png",
          },
        ],
      },
    ],
    vectorUrl: "/media/press-kit/symbols/monero-symbol.ai",
  },
  {
    name: "Monero Logo",
    description: "Full Monero logo with wordmark for general use.",
    preview: "/media/press-kit/logos/monero-logo-480.png",
    variants: [
      {
        label: "Transparent",
        sizes: [
          {
            label: "Small",
            url: "/media/press-kit/logos/monero-logo-480.png",
          },
          {
            label: "Medium",
            url: "/media/press-kit/logos/monero-logo-800.png",
          },
          {
            label: "Large",
            url: "/media/press-kit/logos/monero-logo-1280.png",
          },
        ],
      },
      {
        label: "White Background",
        sizes: [
          {
            label: "Small",
            url: "/media/press-kit/logos/monero-logo-on-white-480.png",
          },
          {
            label: "Medium",
            url: "/media/press-kit/logos/monero-logo-on-white-800.png",
          },
          {
            label: "Large",
            url: "/media/press-kit/logos/monero-logo-on-white-1280.png",
          },
        ],
      },
    ],
    vectorUrl: "/media/press-kit/logos/monero-logo.ai",
  },
];

export const pressDocuments: PressDocument[] = [
  {
    title: "Quick-Facts Sheet",
    description:
      "Everything about Monero: history, key differentiating factors, technical fundamentals, and features in development.",
    url: "/media/press-kit/Monero_QuickFacts_June_2024.pdf",
  },
  {
    title: "Monero Timeline",
    description: "A timeline of key developments in the Monero history.",
    url: "https://resilience365.com/monero-timeline/",
  },
];

export const marketingResources: MarketingResource[] = [
  {
    title: "Don't Buy Monero Sticker",
    description:
      "Spread Monero everywhere with this sticker. Available in multiple languages and formats.",
    url: "https://github.com/monero-ecosystem/dont-buy-monero-sticker",
  },
  {
    title: "Promotional Graphics",
    description:
      "Badges and stickers for websites created by TheMonera for merchants and enthusiasts.",
    url: "https://themonera.art/",
  },
  {
    title: "Monero Graphics Collection",
    description:
      "Posters, illustrations, wallpapers, and stickers that can be used by everyone.",
    url: "https://monero.graphics/",
  },
];
