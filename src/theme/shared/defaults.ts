import { TextMateRuleData, ThemeColor } from "@types"

export const defaults: TextMateRuleData[] = [
    {
        scopes: [
            "comment",
            "comment.line.double-slash.js",
            "comment.block.html",
            "comment.block.handlebars",
        ],
        foreground: ThemeColor.Comments,
    },
    {
        "name": "Special Comments",
        scopes: [
            "comment.block.js",
            "comment.line.shebang.js",
            "comment.line.number-sign.shebang.shell",
            "comment.block.documentation.js",
            "comment.block.go",
            "comment.block.documentation.ts",
            "comment.line.number-sign.ini",
            "comment.line.number-sign.yaml",
        ],
        foreground: ThemeColor.DocComments,
    },
    {
        "name": "Curly Braces, Semicolons, etc.",
        scopes: [
            "meta.tag.sgml.html",
            "meta.tag.sgml.doctype.html",
            "meta.tag.sgml.html punctuation.definition.tag.html",
            "meta.structure.dictionary.json",
            "punctuation.terminator",
            "invalid.illegal.bad-comments-or-CDATA.html",
        ],
        foreground: ThemeColor.Tags,
    },
    {
        scopes: [
            "punctuation.terminator",
        ],
        foreground: ThemeColor.Noise,
    },
    {
        scopes: [
            "meta.embedded.block.sql",
        ],
        foreground: ThemeColor.Foreground,
    },
    {
        scopes: [
            "constant.numeric",
            "keyword.other.unit",
            "meta.preprocessor.numeric",
        ],
        foreground: ThemeColor.Numbers,
    },
    {
        scopes: [
            "invalid",
        ],
        foreground: ThemeColor.Error,
    },
    {
        scopes: [
            "meta.selector",
            "constant.character",
            "constant.other.symbol",
            "constant.character.escape",
        ],
        foreground: ThemeColor.Chars,
    },
    {
        scopes: [
            "meta.diff.header",
        ],
        foreground: ThemeColor.Secondary,
    },
    {
        scopes: [
            "string",
            "string.tag",
            "string.value",
            "meta.preprocessor.string",
        ],
        foreground: ThemeColor.Strings,
    },
    {
        scopes: [
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
        foreground: ThemeColor.Keywords,
    },
    {
        scopes: [
            "entity.name.function",
            "support.function",
        ],
        foreground: ThemeColor.Functions,
    },
    {
        "name": "Type declaration and references",
        scopes: [
            "meta.return-type",
            "support.class",
            "support.type",
            "entity.name.type",
            "entity.name.class",
        ],
        foreground: ThemeColor.Types,
    },
    {
        "name": "Types declaration and references, TS grammar specific",
        scopes: [
            "meta.type.cast.expr",
            "meta.type.new.expr",
            "support.constant.math",
            "support.constant.dom",
            "support.constant.json",
            "entity.other.inherited-class",
        ],
        foreground: ThemeColor.Types,
    },
    {
        scopes: [
            "keyword.control",
            "keyword.operator",
        ],
        foreground: ThemeColor.FlowControl,
    },
    {
        scopes: [
            "variable",
            "support.variable",
            "meta.definition.variable.name",
        ],
        foreground: ThemeColor.Variables,
    },

    {
        scopes: [
            "code-runner.output code-runner.running string",
            "code-runner.running code-runner.done string",
        ],
        foreground: ThemeColor.Strings,
        fontStyle:  "italic",
    },
    {
        scopes: [
            "token.info-token",
        ],
        foreground: ThemeColor.Info,
    },
    {
        scopes: [
            "token.warn-token",
        ],
        foreground: ThemeColor.Warning,
    },
    {
        scopes: [
            "token.error-token",
        ],
        foreground: ThemeColor.Error,
    },
    {
        scopes: [
            "token.debug-token",
        ],
        foreground: ThemeColor.FlowControl,
    },
]

