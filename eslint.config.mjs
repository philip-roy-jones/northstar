// eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser },
    },
    settings: {
      "import/resolver": {
        node: { extensions: [".js", ".mjs", ".cjs"] },
      },
    },
    rules: {},
  },
  prettier,
];
