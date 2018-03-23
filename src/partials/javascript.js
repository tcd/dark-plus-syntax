module.exports = [
    {
        "scope": [
            "comment.block.documentation.js",
            "comment.block.js",
            "meta.tag.ts",
            "comment.line.triple-slash.directive.ts",
            "comment.block.documentation.ts",
            "comment.line.shebang.js",
            // "punctuation.definition.comment.js"
        ],
        "settings": { "foreground": "#608b4e", },
    },
    {
        "scope": "punctuation.definition.comment.js",
        "settings": { "foreground": "#404040", },
    },
    {
        "scope": [
            "comment.line.double-slash.js",
        ],
        "settings": { "foreground": "#505050", },
    },
    {
        "scope": [
            "variable.language.this.js",
            "variable.language.this.ts",
            "variable.language.this.tsx",
        ],
        "settings": {
            "foreground": "#569cd6",
            "fontStyle": "italic",
        },
    },
    {
        "scope": "constant.character.escape.js",
        "settings": { "foreground": "#d7ba7d", },
    },
    {
        "scope": [
            "punctuation.separator.key-value.js",
            "punctuation.definition.block.js",
            "punctuation.separator.comma.js",
            // "keyword.operator.accessor.js",
            // "meta.brace.square.js",
            "entity.quasi.element.js",
        ],
        "settings": { "foreground": "#d4d4d4", },
    },
    {
        "scope": [
            "new.expr.js",
            "meta.arrow.js",
            "keyword.operator.new.js",
            "storage.type.function.arrow.js",
            "support.type.object.module.js",
            "keyword.operator.module.all.js",
            "keyword.control.module.reference.js",
            "keyword.control.as.ts",
            "keyword.operator.optional.ts",
            "comment.line.triple-slash.directive.ts",
            "punctuation.definition.tag.directive.ts",
        ],
        "settings": { "foreground": "#569cd6", },
    },
    {
        "name": "JavaScript string interpolation ${}",
        "scope": [
            "punctuation.definition.string.template.begin.ts",
            "punctuation.definition.string.template.end.ts",
            "punctuation.definition.template-expression.begin.js",
            "punctuation.definition.template-expression.begin.ts",
            "punctuation.definition.template-expression.end.ts",
            "punctuation.definition.template-expression.end.js",
            "punctuation.definition.template-expression.begin.tsx",
            "punctuation.definition.template-expression.end.tsx",
            "punctuation.quasi.element.end.js",
            "punctuation.quasi.element.begin.js",
            "punctuation.section.embedded.begin.jsx",
            "punctuation.section.embedded.end.jsx",
            "punctuation.section.embedded.coffee",
        ],
        "settings": { "foreground": "#569cd6", },
    },
    {
        "scope": [
            "meta.template.expression.js",
            "meta.template.expression.ts",
            "meta.brace.round.ts",
            "meta.brace.round.js",
        ],
        "settings": { "foreground": "#d4d4d4", },
    },
    {
        "scope": [
            "meta.function-call.method.with-arguments.js",
            "variable.function.js",
            "keyword.control.require.ts",
        ],
        "settings": { "foreground": "#dcdcaa", },
    },
    {
        "scope": [
            "punctuation.accessor.js",
            "punctuation.accessor.ts",
            "punctuation.decorator.js",
            "keyword.operator.js",
            "keyword.operator.typeof.js",
            "keyword.operator.logical.js",
            "keyword.operator.in.js",
            "keyword.operator.arithmetic.js",
            "keyword.operator.assignment.js",
            "keyword.operator.comparison.js",
            "keyword.operator.relational.js",
            "keyword.operator.expression.of.js",
            "keyword.operator.expression.in.js",
        ],
        "settings": { "foreground": "#c586c0", },
    },
    {
        "scope": [
            "meta.object-literal.key",
            "string.unquoted.js",
            "string.unquoted.label.js",
            "meta.property.object.js",
            "constant.other.object.key.js",
            "meta.object-literal.key.js string.quoted.single.js",
            "meta.object-literal.key.js string.quoted.double.js",
            "string.quoted.single.js meta.object-literal.key.js ",
            "string.quoted.double.js meta.object-literal.key.js ",
        ],
        "settings": { "foreground": "#9cdcfe", },
    },
    {
        "scope": [
            "keyword.operator.type.annotation.ts",
            "keyword.operator.type.annotation.tsx",
            // "storage.type.namespace.ts",
            "punctuation.decorator.ts",
            "meta.decorator.ts",
            "punctuation.type.flowtype",
        ],
        "settings": { "foreground": "#4ec9b0",},
    },
    {
        "scope": [
            "keyword.operator.type.annotation.ts",
            "keyword.operator.type.annotation.tsx",
            // "storage.type.namespace.ts",
            "punctuation.decorator.ts",
            "meta.decorator.ts",
            "punctuation.type.flowtype",
        ],
        "settings": {
            "foreground": "#4ec9b0",
            "fontStyle": "italic",
        },
    },
];
