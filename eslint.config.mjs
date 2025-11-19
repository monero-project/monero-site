// @ts-check

import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  {
    name: "ignores",
    ignores: ["dist/**", ".astro/**", "node_modules/**"],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  ...eslintPluginAstro.configs.recommended,

  eslintConfigPrettier,
]);
