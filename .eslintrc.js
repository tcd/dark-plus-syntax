/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
    root: true,
    env:  {
        node: true,
    },
    parserOptions: {
        ecmaVersion: 13,
        // ecmaFeatures: { "jsx": false },
        // sourceType: "module",
    },
    parser:  "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint",
        "jsdoc",
    ],
    rules: {
        // Solid
        "no-mixed-spaces-and-tabs":      ["error"], // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
        "linebreak-style":               ["error", "unix"], // https://eslint.org/docs/rules/linebreak-style
        "eol-last":                      ["warn", "always"], // https://eslint.org/docs/rules/eol-last
        "no-trailing-spaces":            ["warn"], // https://eslint.org/docs/rules/no-trailing-spaces
        "spaced-comment":                ["warn", "always", { "exceptions": ["-", "="] }], // https://eslint.org/docs/rules/spaced-comment
        "no-var":                        ["warn"], // https://eslint.org/docs/rules/no-var
        "semi":                          ["warn", "never"], // https://eslint.org/docs/rules/semi
        "comma-dangle":                  ["warn", "always-multiline"], // https://eslint.org/docs/rules/comma-dangle
        "quotes":                        ["warn", "double", { "avoidEscape": true, "allowTemplateLiterals": true }], // https://eslint.org/docs/rules/quotes
        "func-call-spacing":             ["warn", "never"], // https://eslint.org/docs/rules/func-call-spacing
        "space-in-parens":               ["warn", "never"], // https://eslint.org/docs/rules/space-in-parens
        "curly":                         ["warn", "all"], // https://eslint.org/docs/rules/curly
        // In Review
        "space-before-function-paren":   ["error", "never"], // https://eslint.org/docs/rules/space-before-function-paren
        "template-curly-spacing":        ["error"], // https://eslint.org/docs/rules/template-curly-spacing
        "space-before-blocks":           ["error"], // https://eslint.org/docs/rules/space-before-blocks
        "comma-spacing":                 ["warn", { "before": false, "after": true }], // https://eslint.org/docs/rules/comma-spacing
        "array-bracket-spacing":         ["warn", "never", { "singleValue": false }], // https://eslint.org/docs/rules/array-bracket-spacing
        "block-spacing":                 ["warn", "always"], // https://eslint.org/docs/rules/block-spacing
        "computed-property-spacing":     ["error", "never"], // https://eslint.org/docs/rules/computed-property-spacing
        "dot-location":                  ["error", "object"], // https://eslint.org/docs/rules/dot-location
        "rest-spread-spacing":           ["error", "never"], // https://eslint.org/docs/rules/rest-spread-spacing
        // Figuring out settings
        /**
         * Appropreate setting is probably `"key-spacing": ["warn", { "beforeColon": false }]`
         */
        "key-spacing":                   ["warn", { "align": "value" }], // ♥️ https://eslint.org/docs/rules/key-spacing
        // "object-curly-spacing":          ["warn", "always"], // https://eslint.org/docs/rules/object-curly-spacing
        // Not as importang
        "brace-style":                   ["warn", "1tbs", { "allowSingleLine": true }], // https://eslint.org/docs/rules/brace-style
        // "multiline-comment-style":     ["warn", "starred-block"], // https://eslint.org/docs/rules/multiline-comment-style
        // TODO
        // https://eslint.org/docs/rules/keyword-spacing
        // https://eslint.org/docs/rules/newline-per-chained-call
        // https://eslint.org/docs/rules/new-parens
        // Plugins
        "jsdoc/check-alignment":         ["warn"], // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-alignment
        "jsdoc/require-asterisk-prefix": ["warn", "always"], // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-asterisk-prefix
        "jsdoc/multiline-blocks":        ["warn", { "noZeroLineText": true, "noSingleLineBlocks": false }], // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-multiline-blocks
        "jsdoc/check-line-alignment":    ["off"], // ["warn", "always"],
        "jsdoc/check-indentation":       ["off"], // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-indentation
    },
}
