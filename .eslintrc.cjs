const { init } = require("@fullstacksjs/eslint-config/init");

module.exports = init({
  modules: {
    auto: true,
    import: true,
    typescript: {
      parserProject: ["./tsconfig.json"],
      resolverProject: ["./tsconfig.json"],
    },
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "global-require": 0,
    "@typescript-eslint/no-unsafe-enum-comparison": "off",
    "no-let": "off",
  },
});
