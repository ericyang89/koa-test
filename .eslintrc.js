// const path = require("path");
module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true
  },
  extends: ["airbnb", "prettier"],
  globals: {
    // Set each global variable name equal to true to allow the variable to be
    // overwritten or false to disallow overwriting.
  },
  plugins: ["prettier"],

  rules: {
    "prettier/prettier": "error",
    "key-spacing": [
      "off",
      {
        beforeColon: false
      }
    ],
    "array-callback-return": 0,
    "arrow-parens": 0,
    "arrow-body-style": [2, "as-needed"],
    "spaced-comment": 0,
    "comma-dangle": 0,
    "linebreak-style": ["off"],
    "object-curly-spacing": 0,
    "max-len": 0,
    "newline-per-chained-call": 0,
    "prefer-template": 0,
    "class-methods-use-this": 0,
    "require-yield": 0,
    "consistent-return": 0,
    "func-names": 0,
    "no-empty": [
      "off",
      {
        allowEmptyCatch: true
      }
    ],

    "no-multi-spaces": 0,
    "no-confusing-arrow": 0,
    "no-console": 1,
    "no-script-url": 0,
    "no-use-before-define": 2,
    "no-nested-ternary": 0,
    "no-plusplus": [2, { allowForLoopAfterthoughts: true }],

    yoda: 0,
    "no-restricted-syntax": 0,
    "guard-for-in": 0
  }
};
