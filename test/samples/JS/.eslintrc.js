module.exports = {
    "extends": ["eslint:recommended", "google"],
    "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module"
    },
    "env": {
      "browser": true
    },
    "plugins": [
      "html"
    ],
    "rules": {
      "brace-style": "off",
      "new-cap": ["error", { "capIsNewExceptions": ["Polymer"] }],
      "no-var": "off",
      "require-jsdoc": "off"
    },
    "globals": {
      "Polymer": true
    }
  };
