export interface AssetSize {
  labelKey: string;
  url: string;
}

export interface AssetVariant {
  labelKey: string;
  sizes: AssetSize[];
}

export interface BrandAsset {
  id: string;
  preview: string;
  variants: AssetVariant[];
  vectorUrl?: string;
}

export interface PressDocument {
  id: string;
  url: string;
}

export interface MarketingResource {
  id: string;
  url: string;
}

export const brandAssets: BrandAsset[] = [
  {
    id: "moneroSymbol",
    preview: "/media/press-kit/symbols/monero-symbol-480.png",
    variants: [
      {
        labelKey: "transparent",
        sizes: [
          {
            labelKey: "small",
            url: "/media/press-kit/symbols/monero-symbol-480.png",
          },
          {
            labelKey: "medium",
            url: "/media/press-kit/symbols/monero-symbol-800.png",
          },
          {
            labelKey: "large",
            url: "/media/press-kit/symbols/monero-symbol-1280.png",
          },
        ],
      },
      {
        labelKey: "whiteBackground",
        sizes: [
          {
            labelKey: "small",
            url: "/media/press-kit/symbols/monero-symbol-on-white-480.png",
          },
          {
            labelKey: "medium",
            url: "/media/press-kit/symbols/monero-symbol-on-white-800.png",
          },
          {
            labelKey: "large",
            url: "/media/press-kit/symbols/monero-symbol-on-white-1280.png",
          },
        ],
      },
    ],
    vectorUrl: "/media/press-kit/symbols/monero-symbol.ai",
  },
  {
    id: "moneroLogo",
    preview: "/media/press-kit/logos/monero-logo-480.png",
    variants: [
      {
        labelKey: "transparent",
        sizes: [
          {
            labelKey: "small",
            url: "/media/press-kit/logos/monero-logo-480.png",
          },
          {
            labelKey: "medium",
            url: "/media/press-kit/logos/monero-logo-800.png",
          },
          {
            labelKey: "large",
            url: "/media/press-kit/logos/monero-logo-1280.png",
          },
        ],
      },
      {
        labelKey: "whiteBackground",
        sizes: [
          {
            labelKey: "small",
            url: "/media/press-kit/logos/monero-logo-on-white-480.png",
          },
          {
            labelKey: "medium",
            url: "/media/press-kit/logos/monero-logo-on-white-800.png",
          },
          {
            labelKey: "large",
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
    id: "quickFacts",
    url: "/media/press-kit/Monero_QuickFacts_June_2024.pdf",
  },
  {
    id: "timeline",
    url: "https://resilience365.com/monero-timeline/",
  },
];

export const marketingResources: MarketingResource[] = [
  {
    id: "dontBuySticker",
    url: "https://github.com/monero-ecosystem/dont-buy-monero-sticker",
  },
  {
    id: "promotionalGraphics",
    url: "https://themonera.art/",
  },
  {
    id: "graphicsCollection",
    url: "https://monero.graphics/",
  },
];
