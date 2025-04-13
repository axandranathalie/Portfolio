import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  skipFormatting,
  {
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }], // Prevent unused variables while ignoring intentional `_` placeholders
      eqeqeq: "error", // Enforce strict equality checks (=== and !==)
      curly: "error", // Require braces for all control structures for clarity
      "default-case": "error", // Ensure switch statements have a default case to handle unexpected values
      "no-implicit-globals": "error", // Prevent global variable declarations to avoid conflicts
      "no-var": "error", // Enforce `let` or `const` instead of `var` for block scoping
      "prefer-const": "error", // Prefer `const` for variables that are not reassigned
      "no-lone-blocks": "error", // Disallow unnecessary nested blocks
      "no-multi-spaces": "error", // Disallow multiple spaces for cleaner formatting
      semi: ["error", "always"], // Enforce semicolons at the end of statements
      quotes: ["error", "double", { avoidEscape: true }], // Use single quotes unless escaping
      camelcase: ["error", { properties: "never" }], // Enforce camelCase for variable and function names
      "keyword-spacing": ["error", { before: true, after: true }], // Enforce consistent spacing before/after keywords
      "import/order": ["error", { "groups": [["builtin", "external", "internal"]] }]
    },
  },
);
