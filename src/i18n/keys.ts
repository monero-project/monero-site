import { locales } from "./config";

export const localeKeys = Object.keys(locales);
export const localePrefixRe = new RegExp(`^/(${localeKeys.join("|")})(?=/|$)`);
