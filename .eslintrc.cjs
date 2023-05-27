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
    "@typescript-eslint/no-use-before-define": "off",
    "import/no-extraneous-dependencies": "off",
    "react/jsx-pascal-case": "off",
    "max-lines-per-function": "off",
    "import/extensions": [
      "error",
      "always",
      { ts: "never", tsx: "never", json: "always" },
    ],
    "import/no-cycle": "off",
  },
});
