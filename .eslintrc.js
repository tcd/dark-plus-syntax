module.exports = {
    root: true,
    env: {
        node: true,
    },
    parserOptions: {
        ecmaVersion: 13,
        ecmaFeatures: { "jsx": false },
        sourceType: "module",
    },
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint",
    ],
    rules: {
        semi: ["warn", "never"],
        "comma-dangle": ["warn", "always-multiline"],
        "linebreak-style": ["error", "unix"],
        quotes: ["warn", "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
    },
}
