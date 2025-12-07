import type { Element } from "hast";

export function isExternal(
  nodeOrHref: Element | string,
  rootDomain: string,
): boolean {
  let href: string;
  if (typeof nodeOrHref === "string") {
    href = nodeOrHref;
  } else {
    const nodeHref = nodeOrHref.properties?.href;
    if (typeof nodeHref !== "string") return false;
    href = nodeHref;
  }

  try {
    const hostname = new URL(href, `https://${rootDomain}`).hostname;
    return !(hostname === rootDomain || hostname.endsWith(`.${rootDomain}`));
  } catch {
    return false;
  }
}
