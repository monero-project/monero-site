export const getDateStringFromSlug = (slug: string): string | null => {
  const match = slug.match(/^\d{4}-\d{2}-\d{2}/)?.[0];
  return match ?? null;
};
