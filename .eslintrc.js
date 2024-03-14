module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "parserOptions": {
    "ecmaVersion": 10,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "plugins": ["react-hooks", "@typescript-eslint/eslint-plugin", "testing-library"],
  "env": {
    "es6": true,
    "browser": true,
    "jest": true,
    "node": true
  },
  "rules": {
    "no-unused-vars": "off",
    "react/self-closing-comp": [
      "error",
      {
        "component": true,
        "html": true
      }
    ],
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/jsx-boolean-value": "error",
    "react/prop-types": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "typeLike",
        "format": ["PascalCase"]
      }
    ]
  },
  "overrides": [
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "parserOptions": {
        "project": ["./tsconfig.lint.json"]
      }
    }
  ]
}
