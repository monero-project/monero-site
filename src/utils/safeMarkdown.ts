import DOMPurify from "isomorphic-dompurify";
import { marked } from "marked";

const purifyConfig = {
  ALLOWED_ATTR: [
    "href",
    "target",
    "rel",
    "class",
    "id",
    "title",
    "alt",
    "src",
    "width",
    "height",
    "style",
  ],
};

export const parse = (markdown: string): string => {
  return DOMPurify.sanitize(marked.parse(markdown) as string, purifyConfig);
};

export const parseInline = (markdown: string): string => {
  return DOMPurify.sanitize(
    marked.parseInline(markdown, { breaks: true }) as string,
    purifyConfig,
  );
};

export default {
  parse,
  parseInline,
};
