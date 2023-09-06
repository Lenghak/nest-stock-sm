/** @type {import("prettier").Config} */
module.exports = {
  arrowParens: "always",
  bracketSpacing: true,
  htmlWhitespaceSensitivity: "css",
  jsxSingleQuote: false,
  singleAttributePerLine: true,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  parser: "typescript",
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
  importOrder: [
    "^@/modules/(.*)$",
    "^@/lib/(.*)$",
    "^@/server/(.*)$",
    "^@/db/(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^[./]",
    "^@/types/(.*)$",
  ],
  importOrderParserPlugins: ["typescript", "decorators-legacy"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  overrides: [
    {
      files: "*.json",
      options: { parser: "json" },
    },
  ],
};
