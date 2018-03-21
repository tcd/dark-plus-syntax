module.exports = [
    {
        "scope": [
            "variable.other.ruby"
        ],
        "settings": { "foreground": "#9cdcfe" },
    },
    {
        "scope": "constant.character.escape.ruby",
        "settings": { "foreground": "#d7ba7d" }
    },
    {
        "scope": [ "variable.language.self.ruby", ],
        "settings": {
            "foreground": "#569cd6",
            "fontStyle": "italic",
        }
    },
    {
        "scope": [
            "variable.language.ruby",
            "constant.other.symbol.ruby",
            "punctuation.separator.method.ruby",
            "punctuation.definition.constant.ruby",
        ],
        "settings": { "foreground": "#569cd6" }
    },
    // {
    //     "scope": [
    //         "punctuation.separator.method.ruby",
    //     ],
    //     "settings": { "foreground": "#dcdcaa" }
    // },
    {
        "scope": [
            "meta.class.ruby",
            "support.class.ruby",
            "entity.name.type.class.ruby",
            "entity.other.inherited-class.ruby",
            "punctuation.separator.inheritance.ruby",
        ],
        "settings": { "foreground": "#4ec9b0" }
    },
    {
        "scope": [
            "keyword.control.def.ruby",
            "keyword.control.class.ruby",
        ],
        "settings": { "foreground": "#c586c0" }
    },
    {
        "scope": [
            "keyword.operator.other.ruby",
            "keyword.operator.assignment.ruby",
            "punctuation.definition.constant.ruby",
            "punctuation.separator.other.ruby",
            "keyword.control.pseudo-method.ruby",
            "keyword.operator.comparison.ruby",
            "keyword.operator.arithmetic.ruby",
        ],
        "settings": { "foreground": "#c586c0" }
    },
    {
        "scope": [
            "punctuation.separator.method.ruby",
            "punctuation.separator.object.ruby",
            "punctuation.separator.arguments.ruby",
            "punctuation.section.function.ruby",
            "punctuation.section.scope.begin.ruby",
            "punctuation.section.scope.end.ruby",
            "punctuation.section.array.begin.ruby",
            "punctuation.section.array.end.ruby",
        ],
        "settings": { "foreground": "#808080" }
    },
    {
        "scope": "meta.section.attributes.plain.haml constant.other.symbol.ruby",
        "settings": { "foreground": "#9cdcfe" }
    },
    // =========================================================================
    // erb
    // =========================================================================
    {
        "scope": "meta.embedded.line.erb",
        "settings": {
            "foreground": "#9CDCFE"
        }
    },
    {
        "scope": [
            "punctuation.section.embedded.begin.erb",
            "punctuation.section.embedded.end.erb"
        ],
        "settings": {
            "foreground": "#569cd6"
        }
    },
    // {
        //     "scope": [
    //         "text.html.erb",
    //         "text.haml",
    //         "punctuation.separator.object.ruby",
    //         "punctuation.separator.other.ruby"
    //     ],
    //     "settings": {
        //         "foreground": "#d4d4d4"
        //     }
        // },

    ]
