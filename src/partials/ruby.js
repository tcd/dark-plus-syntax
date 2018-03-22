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
            "constant.other.symbol.hashkey.ruby",
            "punctuation.definition.constant.ruby",
            "punctuation.definition.variable.ruby",
            "constant.language.symbol.ruby",
            "string.quoted.double.interpolated.ruby punctuation.section.embedded.begin.ruby",
            "string.quoted.double.interpolated.ruby punctuation.section.embedded.end.ruby",
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
            "punctuation.separator.namespace.ruby",
            "punctuation.separator.inheritance.ruby",
        ],
        "settings": { "foreground": "#4ec9b0" }
    },
    // {
    // "scope": [
    // ],
    // "settings": { "foreground": "#c586c0" }
    // },
        {
            "scope": [
            "keyword.control.def.ruby",
            "keyword.control.class.ruby",
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
            "punctuation.separator.object.ruby",
            "punctuation.separator.arguments.ruby",
            "punctuation.section.function.ruby",
            "punctuation.section.scope.begin.ruby",
            "punctuation.section.scope.end.ruby",
            "punctuation.section.array.begin.ruby",
            "punctuation.section.array.end.ruby",
        ],
        "settings": { "foreground": "#d4d4d4" }
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
            "text.html.erb punctuation.section.embedded.begin.erb",
            "text.html.erb punctuation.section.embedded.end.erb",
            // "text.html.erb string.quoted.double.interpolated.ruby punctuation.section.embedded.begin.ruby",
            // "text.html.erb string.quoted.double.interpolated.ruby punctuation.section.embedded.end.ruby",
        ],
        "settings": {
            "foreground": "#808080"
        }
    },
    // {
    //     "scope": [
    //         "text.html.erb string.quoted.double.interpolated.ruby punctuation.section.embedded.begin.ruby",
    //         "text.html.erb string.quoted.double.interpolated.ruby punctuation.section.embedded.end.ruby",
    //     ],
    //     "settings": {
    //         "foreground": "#808080"
    //     }
    // },
    // {
    //         "scope": [
    //         // "text.html.erb",
    //         // "text.haml",
    //         // "punctuation.separator.object.ruby",
    //         // "punctuation.separator.other.ruby"
    //         // "text.html.erb keyword.control.ruby"
    //     ],
    //     "settings": {
    //             "foreground": "#d4d4d4",
    //             "fontStyle": "italic",
    //         }
    //     },

    ]
