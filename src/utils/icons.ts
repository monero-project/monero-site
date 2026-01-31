import type { ImageMetadata } from "astro";

type Mod = { default: ImageMetadata };

function buildMap(glob: Record<string, Mod>, stripPrefix: string) {
  const map: Record<string, ImageMetadata> = {};
  for (const [path, mod] of Object.entries(glob)) {
    const i = path.lastIndexOf(stripPrefix);
    const key = path.slice(i + stripPrefix.length).replace(/\.avif$/, "");
    map[key] = mod.default;
  }
  return map;
}

const maskIcons = buildMap(
  import.meta.glob<Mod>("@/assets/icons/mask/**/*.avif", { eager: true }),
  "mask/",
);

const lightIcons = buildMap(
  import.meta.glob<Mod>("@/assets/icons/color/light/*.avif", { eager: true }),
  "light/",
);

const darkIcons = buildMap(
  import.meta.glob<Mod>("@/assets/icons/color/dark/*.avif", { eager: true }),
  "dark/",
);

const colorRoot = buildMap(
  import.meta.glob<Mod>("@/assets/icons/color/*.avif", { eager: true }),
  "color/",
);

export const icons = {
  mask(name: string): ImageMetadata {
    const m = maskIcons[name];
    if (!m) throw new Error(`Unknown mask icon: "${name}"`);
    return m;
  },

  color(name: string): { light: ImageMetadata; dark?: ImageMetadata } {
    const light = lightIcons[name] ?? colorRoot[name];
    if (!light) throw new Error(`Unknown color icon: "${name}"`);
    return { light, dark: darkIcons[name] ?? light };
  },
};
