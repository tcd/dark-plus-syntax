module.exports = {
    "root": true,
    "env": {
      "browser": true,
      "node": true,
    },
    "parserOptions": {
      "ecmaVersion": 2017,
      "ecmaFeatures": {
          "jsx": true
      },
      "sourceType": "module"
    },
    "rules": {
    //   "comma-dangle": ["error", "always"], // I don't like this one
      "comma-dangle": "off",
      "curly": "error",
      "eqeqeq": "off",
      "id-length": ["error", { "min": 4 }],
      "indent": ["error", 2],
      "linebreak-style": ["error", "unix"],
      "no-inline-comments": "off",
      "no-console": "off",
    //   "quotes": ["warn", "single"],
      "semi": ["error", "always"],
    }
  }
