import DOMPurify from "isomorphic-dompurify";
import { marked } from "marked";

export const parse = (markdown: string): string => {
  return DOMPurify.sanitize(marked.parse(markdown) as string);
};

export const parseInline = (markdown: string): string => {
  return DOMPurify.sanitize(marked.parseInline(markdown) as string);
};

export default {
  parse,
  parseInline,
};
