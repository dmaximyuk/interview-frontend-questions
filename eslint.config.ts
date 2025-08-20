import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

import { fixupConfigRules } from "@eslint/compat";

import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import solid from "eslint-plugin-solid";
import prettier from "eslint-plugin-prettier/recommended";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import unicorn from "eslint-plugin-unicorn";

export default defineConfig([
  prettier,

  ...fixupConfigRules(jsxA11y.flatConfigs.recommended),

  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser },
    extends: [js.configs.recommended],
  },

  {
    files: ["**/*.{ts,tsx,mts,cts}"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: dirname(fileURLToPath(import.meta.url)),
      },
      globals: globals.browser,
    },
    extends: [
      js.configs.recommended,
      ...(tseslint.configs.recommendedTypeChecked as any),
      solid.configs["flat/typescript"],
    ],
    plugins: {
      import: importPlugin,
      unicorn,
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: false },
      ],
      "@typescript-eslint/no-unsafe-member-access": "warn",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-return": "warn",
      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/no-unsafe-call": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "after-used",
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: false,
        },
      ],

      "solid/no-react-specific-props": "error",
      "solid/jsx-no-duplicate-props": "error",
      "solid/no-destructure": "error",
      "solid/event-handlers": "error",
      "solid/no-innerhtml": "error",
      "solid/prefer-for": "warn",

      "import/no-cycle": "error",
      "import/no-mutable-exports": "error",
      "import/order": "off",

      "unicorn/prefer-optional-catch-binding": "error",
      "unicorn/prefer-top-level-await": "off",
      "unicorn/explicit-length-check": "warn",
      "unicorn/no-for-loop": "warn",
      "unicorn/no-array-reduce": "off",
      "unicorn/no-null": "off",

      "no-console": "warn",
      "no-debugger": "error",
      "no-alert": "error",
      "no-param-reassign": "error",
      eqeqeq: ["error", "always"],
      "object-shorthand": ["error", "always"],
      "prefer-template": "error",
      "no-return-await": "error",
      "no-eval": "error",
      "no-var": "error",
      "no-undef": "error",
      "prefer-const": ["error", { destructuring: "all" }],

      complexity: ["warn", 10],
      "max-depth": ["warn", 4],
      "max-lines": ["warn", 350],
      "max-params": ["warn", 5],
      "max-statements": ["warn", 25],

      "arrow-body-style": "off",
      "default-param-last": "off",
    },
  },

  { ignores: ["dist", "node_modules", "coverage", "public"] },
]);
