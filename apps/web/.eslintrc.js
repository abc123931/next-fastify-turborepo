module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: { project: "./tsconfig.json", extraFileExtensions: [".mjs"] },
  settings: { tailwindcss: { groupByResponsive: true } },
  plugins: ["simple-import-sort", "tailwindcss", "import-access"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended",
    "next/core-web-vitals",
    "prettier",
  ],
  rules: {
    "no-console": ["error", { allow: ["warn", "info", "error"] }],
    "no-restricted-syntax": [
      "error",
      { selector: "TSEnumDeclaration", message: "Don't declare enums" },
    ],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "func-style": ["error", "expression"],
    "arrow-body-style": ["error", "always"],
    "no-restricted-imports": [
      "error",
      { paths: [{ name: "react", importNames: ["default"] }] },
    ],

    // react
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/display-name": "error",
    "react/jsx-handler-names": [
      "error",
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on",
        checkLocalVariables: true,
        checkInlineFunction: true,
      },
    ],
    "react/destructuring-assignment": ["error", "never"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // next
    "@next/next/no-img-element": "off",

    // import
    "import/newline-after-import": "error",
    "import/no-default-export": "error",
    "import-access/jsdoc": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

    // @typescript-eslint
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      { prefer: "type-imports" },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      { selector: ["typeAlias", "typeParameter"], format: ["PascalCase"] },
      { selector: ["method"], format: ["camelCase"] },
      { selector: ["property"], format: ["camelCase", "snake_case"] },
      {
        selector: "variable",
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: ["no", "is", "has", "should"],
        filter: { regex: "^_", match: false },
      },
    ],

    // a11y
    "jsx-a11y/no-autofocus": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
  },
  overrides: [
    {
      files: ["pages/**/*.tsx", "pages/api/**/*.ts", "next.config.mjs"],
      rules: { "import/no-default-export": "off" },
    },
    {
      files: ["pages/**/*.tsx", "pages/api/**/*.ts"],
      rules: {
        "import/no-default-export": "off",
        "@typescript-eslint/naming-convention": [
          "error",
          { selector: ["typeAlias", "typeParameter"], format: ["PascalCase"] },
          {
            selector: ["classProperty", "typeProperty", "method"],
            format: ["camelCase"],
          },
          {
            selector: "variable",
            types: ["boolean"],
            format: ["PascalCase"],
            prefix: ["is", "has", "should"],
          },
        ],
      },
    },
    {
      files: ["src/type/**/*.d.ts"],
      rules: {
        "@typescript-eslint/naming-convention": [
          "error",
          { selector: ["typeAlias", "typeParameter"], format: ["PascalCase"] },
          { selector: ["classProperty", "method"], format: ["camelCase"] },
          {
            selector: "variable",
            types: ["boolean"],
            format: ["PascalCase"],
            prefix: ["is", "has", "should"],
          },
        ],
      },
    },
  ],
};
