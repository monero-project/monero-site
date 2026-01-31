/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard", "stylelint-config-html/astro"],
  plugins: ["stylelint-no-unsupported-browser-features"],
  rules: {
    "selector-pseudo-class-no-unknown": [
      true,
      { ignorePseudoClasses: ["global"] },
    ],
    "custom-property-pattern": null,
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
