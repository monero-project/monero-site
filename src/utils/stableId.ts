import { createHash } from "node:crypto";

export const stableId = (input: string | string[], length = 12): string => {
  const data = typeof input === "string" ? input : JSON.stringify(input);
  return createHash("sha256").update(data).digest("hex").slice(0, length);
};
