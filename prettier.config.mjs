/** @type {import("prettier").Config} */
export default {
  // Astro formatting
  plugins: ["prettier-plugin-astro", "prettier-plugin-astro-organize-imports"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
