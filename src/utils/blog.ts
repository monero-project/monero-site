export const idToDateSlug = (id: string): string => {
  const [year, month, day, ...rest] = id.split("-");
  const title = rest.join("-");

  return `${year}/${month.padStart(2, "0")}/${day.padStart(2, "0")}/${title}`;
};

export const getDateStringFromId = (id: string): string | undefined => {
  const m = id.match(/^(\d{4})\/(\d{2})\/(\d{2})/);
  return m ? `${m[1]}-${m[2]}-${m[3]}` : undefined;
};
