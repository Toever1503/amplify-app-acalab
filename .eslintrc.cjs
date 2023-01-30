/* eslint-env node */
// eslint-disable-next-line import/no-extraneous-dependencies
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "airbnb-base",
    "@vue/eslint-config-prettier",
  ],
  rules: {
    "prefer-destructuring": "off",
    "vue/multi-word-component-names": "off",
  },
  overrides: [
    {
      files: ["cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}"],
      extends: ["plugin:cypress/recommended"],
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
};
