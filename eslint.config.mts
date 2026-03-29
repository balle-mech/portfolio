import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // 1) JS 推奨
  js.configs.recommended,

  // 2) TS 推奨（parser 等も設定される）
  ...tseslint.configs.recommended,

  // 3) React 推奨（新JSXトランスフォーム向け）
  pluginReact.configs.flat["jsx-runtime"],

  // 4) 最後に共通設定（必要なら）
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      // "react/react-in-jsx-scope": "off",
      // "react/jsx-uses-react": "off",
    },
  },
]);
