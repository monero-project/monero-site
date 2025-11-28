/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-html/astro"],
  plugins: ["stylelint-no-unsupported-browser-features"],
  rules: {
    "plugin/no-unsupported-browser-features": [
      true,
      {
        browsers: ["> 1% and last 1 versions and not dead", "Firefox ESR"],
        severity: "error",
        ignore: ["flexbox", "vw", "vh"],
        ignorePartialSupport: true,
      },
    ],
  },
};
