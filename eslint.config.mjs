import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint-define-config";

export default defineConfig([
  js.configs.recommended,
  {
    plugins: {
      react: pluginReact,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true, // ✅ Enable JSX parsing
        },
      },
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
    },
    rules: {
      // your custom rules here
    },
    settings: {
      react: {
        version: "detect", // auto-detects the React version
      },
    },
  },
]);
