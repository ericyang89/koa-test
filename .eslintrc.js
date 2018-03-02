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

    "import/imports-first": 0,
    "import/newline-after-import": 2,
    "import/no-dynamic-require": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default": 0,
    "import/no-unresolved": 0,
    "import/prefer-default-export": 0,
    "import/extensions": 0,
    "import/no-webpack-loader-syntax": 0,

    "jsx-a11y/aria-props": 2,
    "jsx-a11y/heading-has-content": 0,
    "jsx-a11y/href-no-hash": 2,
    "jsx-a11y/label-has-for": 2,
    "jsx-a11y/mouse-events-have-key-events": 2,
    "jsx-a11y/role-has-required-aria-props": 2,
    "jsx-a11y/role-supports-aria-props": 2,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/img-has-alt": 0,
    "jsx-a11y/anchor-has-content": 0,

    "no-multi-spaces": 0,
    "no-confusing-arrow": 0,
    "no-console": 1,
    "no-script-url": 0,
    "no-use-before-define": 2,
    "no-nested-ternary": 0,
    "no-plusplus": [2, { allowForLoopAfterthoughts: true }],

    "react/forbid-prop-types": 0,
    "react/jsx-first-prop-new-line": [2, "multiline"],
    "react/jsx-filename-extension": 0,
    "react/jsx-no-target-blank": 0,
    "react/require-extension": 0,
    "react/self-closing-comp": 0,
    "react/jsx-curly-spacing": 0,
    "react/prop-types": 0,
    "react/no-string-refs": 0,
    "react/prefer-stateless-function": 0,
    "react/sort-comp": 0,
    "react/no-did-mount-set-state": 0,
    "react/no-array-index-key": 0,
    "react/no-did-update-set-state": 0,
    yoda: 0,
    "no-restricted-syntax": 0,
    "guard-for-in": 0
  }
};
