module.exports = [
    {
        "settings": {
            "foreground": "#d4d4d4ff",
            "background": "#1e1e1eff"
        }
    },
    {
        "scope": "comment",
        "settings": { "foreground": "#505050" }
    },
    {
        "scope": "punctuation.definition.comment.js",
        "settings": { "foreground": "#404040" }
    },
    {
        "name": "Curly Braces, etc.",
        "scope": [
            "meta.structure.dictionary.json",
            "punctuation.definition.array.begin.json",
            "punctuation.separator.array.json",
            "punctuation.terminator.statement.js",
            "punctuation.separator.statement.ruby",
            "meta.property-list.scss",
            "punctuation.terminator.rule.css",
            "punctuation.section.property-list.begin.bracket.curly.css",
            "punctuation.section.property-list.end.bracket.curly.css",
            "punctuation.definition.string.begin.markdown",
            "punctuation.definition.string.end.markdown",
            "punctuation.definition.metadata.markdown",
            "invalid.illegal.bad-comments-or-CDATA.html",
            "punctuation.definition.italic.markdown",
            "punctuation.definition.bold.markdown"
        ],
        "settings": { "foreground": "#505050" }
    },
    {
        "scope": "constant.character.escape.js",
        "settings": { "foreground": "#9cdcfe" }
    },
    {
        "scope": "constant.character.escape.backslash.regexp",
        "settings": { "foreground": "#9cdcfe" }
    },
    {
        "scope": "constant.other.character-class.regexp",
        "settings": { "foreground": "#4ec9b0" }
    },
    {
        "scope": "constant.character.entity.html",
        "settings": { "foreground": "#dcdcaa" }
    },
    {
        "name": "ejs and erb",
        "scope": "invalid.illegal.bad-angle-bracket.html",
        "settings": { "foreground": "#d4d4d4" }
    },
    {
        "scope": "variable.parameter.handlebars",
        "settings": { "foreground": "#9cdcfe" }
    },
    {
        "scope": [
            "support.constant.handlebars",
            "expression.embedded.vue",
            "punctuation.decorator.js",
            "meta.function.inline.other.handlebars"
        ],
        "settings": { "foreground": "#c586c0" }
    },
    {
        "scope": [
            "support.constant.handlebars",
            "keyword.annotation.handlebars",
            "meta.function.block.start.handlebars",
            "meta.function.block.end.handlebars",
            "punctuation.definition.generic.begin.html",
            "punctuation.definition.generic.end.html",
            "support.type.object.module.js",
        ],
        "settings": { "foreground": "#569cd6" }
    },


    // {
    //     "scope": "meta.embedded.line.erb",
    //     "settings": {
    //         "foreground": "#9CDCFE"
    //     }
    // },
    // {
    //     "scope": [
    //         "punctuation.section.embedded.begin.erb",
    //         "punctuation.section.embedded.end.erb"
    //     ],
    //     "settings": {
    //         "foreground": "#808080"
    //     }
    // },
    // {
    //     "scope": [
    //         "source.ruby",
    //         "text.html.erb",
    //         "text.haml",
    //         "punctuation.separator.object.ruby",
    //         "punctuation.separator.other.ruby"
    //     ],
    //     "settings": {
    //         "foreground": "#d4d4d4"
    //     }
    // },
    // {
    //     "scope": "string.interpolated.jade",
    //     "settings": {
    //         "foreground": "#569cd6" //#9cdcfe
    //     }
    // }
]
