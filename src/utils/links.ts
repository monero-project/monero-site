export function isExternal(href: string, rootDomain: string): boolean {
  try {
    const hostname = new URL(href, `https://${rootDomain}`).hostname;
    return !(hostname === rootDomain || hostname.endsWith(`.${rootDomain}`));
  } catch {
    return false;
  }
}
