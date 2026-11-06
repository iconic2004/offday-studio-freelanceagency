import { defineConfig, globalIgnores } from "eslint/config";
import tsParser from "@typescript-eslint/parser";

export default defineConfig([
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  {
    files: ["**/*.{js,mjs,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      "no-unreachable": "error",
    },
  },
]);
