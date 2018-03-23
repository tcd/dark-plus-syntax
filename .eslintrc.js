module.exports = {
    "root": true,
    "env": {
      "node": true,
    },
    "parserOptions": {
      "ecmaVersion": 2017,
      "ecmaFeatures": {
          "jsx": false
      },
      "sourceType": "module"
    },
    "rules": {
      "comma-dangle": ["error", "always"],
      "curly": "error",
      "eqeqeq": "off",
      "id-length": ["error", { "min": 3 }],
      "indent": ["error", 4],
      "linebreak-style": ["error", "unix"],
      "no-inline-comments": "off",
      "no-console": "off",
      "quotes": "off",
      "semi": ["error", "always"],
    }
  }
