import { fileURLToPath } from "node:url";
import sharp from "sharp";

type Dimensions = { width: number; height: number };

export async function getPublicImageDimensions(
  path?: string,
): Promise<Dimensions> {
  if (!path) return { width: 0, height: 0 };

  const normalized = path.startsWith("/") ? path.slice(1) : path;
  const fileUrl = new URL(`../../public/${normalized}`, import.meta.url);
  const filePath = fileURLToPath(fileUrl);

  const { width, height } = await sharp(filePath).metadata();
  if (!width || !height) {
    throw new Error(`Unable to determine dimensions for ${path}`);
  }
  return { width, height };
}
