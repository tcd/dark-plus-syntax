export const defaults = [
    {
        "scope": [
            "comment",
            "comment.line.double-slash.js",
            "comment.block.html",
            "comment.block.handlebars",
        ],
        "settings": {"foreground": "#505050"},
    },
    {
        "name": "Special Comments",
        "scope": [
            "comment.block.js",
            "comment.line.shebang.js",
            "comment.line.number-sign.shebang.shell",
            "comment.block.documentation.js",
            "comment.block.go",
            "comment.block.documentation.ts",
            "comment.line.number-sign.ini",
            "comment.line.number-sign.yaml",
        ],
        "settings": {"foreground": "#608b4e"},
    },
    {
        "name": "Curly Braces, Semicolons, etc.",
        "scope": [
            "meta.tag.sgml.html",
            "meta.tag.sgml.doctype.html",
            "meta.tag.sgml.html punctuation.definition.tag.html",
            "meta.structure.dictionary.json",
            "punctuation.definition.array.begin.json",
            "punctuation.definition.array.end.json",
            "punctuation.separator.array.json",
            "punctuation.terminator",
            "punctuation.definition.string.begin.markdown",
            "punctuation.definition.string.end.markdown",
            "punctuation.definition.metadata.markdown",
            "invalid.illegal.bad-comments-or-CDATA.html",
            "punctuation.definition.italic.markdown",
            "punctuation.definition.bold.markdown",
        ],
        "settings": {"foreground": "#505050"},
    },
    {
        "scope": ["meta.embedded.block.sql"],
        "settings": {"foreground": "#d4d4d4"},
    },
    {
        "scope": [
            "constant.numeric",
            "keyword.other.unit",
            "meta.preprocessor.numeric",
        ],
        "settings": {"foreground": "#b5cea8"},
    },
    {
        "scope": "invalid",
        "settings": {"foreground": "#f44747"},
    },
    {
        "scope": [
            "meta.selector",
            "constant.character",
            "constant.other.symbol",
            "constant.character.escape",
        ],
        "settings": {"foreground": "#d7ba7d"},
    },
    {
        "scope": "meta.diff.header",
        "settings": {"foreground": "#569cd6"},
    },
    {
        "scope": [
            "string",
            "string.tag",
            "string.value",
            "meta.preprocessor.string",
        ],
        "settings": {"foreground": "#ce9178"},
    },
    {
        "scope": [
            "storage",
            "storage.type",
            "storage.modifier",
            "constant.other.placeholder",
            "keyword",
            "keyword.control",
            "meta.preprocessor",
            "keyword.control.new",
            "constant.language",
            "keyword.operator.new",
            "keyword.operator.expression",
            "keyword.operator.cast",
            "keyword.operator.sizeof",
        ],
        "settings": {"foreground": "#569cd6"},
    },
    {
        "scope": [
            "entity.name.function",
            "support.function",
            "support.constant.handlebars",
        ],
        "settings": {"foreground": "#dcdcaa"},
    },
    {
        "name": "Type declaration and references",
        "scope": [
            "meta.return-type",
            "support.class",
            "support.type",
            "entity.name.type",
            "entity.name.class",
            "storage.type.annotation.java",
            "storage.type.generic.java",
            "storage.type.java",
            "storage.type.object.array.java",
            "storage.type.primitive.array.java",
            "storage.type.primitive.java",
            "storage.type.token.java",
            "storage.type.groovy",
            "storage.type.annotation.groovy",
            "storage.type.parameters.groovy",
            "storage.type.generic.groovy",
            "storage.type.object.array.groovy",
            "storage.type.primitive.array.groovy",
            "storage.type.primitive.groovy",
        ],
        "settings": {"foreground": "#4ec9b0"},
    },
    {
        "name": "Types declaration and references, TS grammar specific",
        "scope": [
            "meta.type.cast.expr",
            "meta.type.new.expr",
            "support.constant.math",
            "support.constant.dom",
            "support.constant.json",
            "entity.other.inherited-class",
        ],
        "settings": {"foreground": "#4ec9b0"},
    },
    {
        "scope": [
            "keyword.control",
            "keyword.operator",
        ],
        "settings": {"foreground": "#C586C0"},
    },
    {
        "scope": [
            "variable",
            "support.variable",
            "meta.definition.variable.name",
        ],
        "settings": {"foreground": "#9cdcfe"},
    },

    {
        "scope": [
            "code-runner.output code-runner.running string",
            "code-runner.running code-runner.done string",
        ],
        "settings": {
            "foreground": "#ce9178",
            "fontStyle": "italic",
        },
    },
    {
        "scope": "token.info-token",
        "settings": {"foreground": "#569cd6"},
    },
    {
        "scope": "token.warn-token",
        "settings": {"foreground": "#d7ba7d"},
    },
    {
        "scope": "token.error-token",
        "settings": {"foreground": "#f44747"},
    },
    {
        "scope": "token.debug-token",
        "settings": {"foreground": "#c586c0"},
    },
]

