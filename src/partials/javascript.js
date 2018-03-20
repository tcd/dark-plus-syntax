module.exports = [
    {
        "scope": [
            "comment.block.documentation.js",
            // "punctuation.definition.comment.js"
        ],
        "settings": { "foreground": "#608b4e" }
    },
    {
        "scope": "punctuation.definition.comment.js",
        "settings": { "foreground": "#404040" }
    },
    {
        "scope": [
            "comment.line.double-slash.js",
        ],
        "settings": { "foreground": "#505050" }
    },
    {
        "scope": "variable.language.this.js",
        "settings": {
            "foreground": "#569cd6",
            "fontStyle": "italic",
        }
    },
    {
        "scope": "constant.character.escape.js",
        "settings": { "foreground": "#9cdcfe" }
    },
    {
        "scope": [
            "punctuation.separator.key-value.js",
            "entity.quasi.element.js",
        ],
        "settings": { "foreground": "#d4d4d4" }
    },
    {
        "scope": [
            "support.type.object.module.js",
            "storage.type.function.arrow.js",
            "new.expr.js",
            "meta.arrow.js",

        ],
        "settings": { "foreground": "#569cd6" }
    },
    {
        "name": "JavaScript string interpolation ${}",
        "scope": [
            "punctuation.definition.template-expression.begin.js",
            "punctuation.definition.template-expression.begin.ts",
            "punctuation.definition.template-expression.end.ts",
            "punctuation.definition.template-expression.end.js",
            "punctuation.quasi.element.end.js",
            "punctuation.quasi.element.begin.js",
            "punctuation.section.embedded.begin.jsx",
            "punctuation.section.embedded.end.jsx",
            "punctuation.section.embedded.coffee"
        ],
        "settings": { "foreground": "#569cd6" }
    },
    {
        "name": "Reset JavaScript string interpolation expression",
        "scope": [
            "meta.template.expression.js",
            "meta.template.expression.ts"
        ],
        "settings": { "foreground": "#d4d4d4" }
    },
    {
        "scope": [
            "meta.function-call.method.with-arguments.js",
            "variable.function.js",
        ],
        "settings": { "foreground": "#dcdcaa" }
    },
    {
        "scope": [
            "keyword.operator.js",
            "keyword.operator.typeof.js",
            "keyword.operator.logical.js",
            "keyword.operator.in.js",
            "keyword.operator.arithmetic.js",
            "keyword.operator.assignment.js",
            "keyword.operator.comparison.js",
            "keyword.operator.relational.js",
            "keyword.operator.expression.of.js",
            "keyword.operator.expression.in.js"
        ],
        "settings": { "foreground": "#c586c0" }
    },
    {
        "scope": [
            "string.unquoted.js",
            "string.unquoted.label.js",
            "meta.property.object.js",
            "constant.other.object.key.js",
            "meta.object-literal.key.js string.quoted.double.js",
        ],
        "settings": { "foreground": "#9cdcfe" }
    },
]
