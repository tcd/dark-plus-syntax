export const crystal = [
    {
        scope: [
            "keyword.operator.macro.crystal",
        ],
        settings: {
            // "foreground": "#569cd6",
            "fontStyle": "italic",
        },
    },
    // {
    //     "scope": [
    //         "punctuation.section.function.crystal",
    //     ],
    //     "settings": {"foreground": "#808080"},
    // },
    {
        "scope": [
            "string.regexp.group.crystal punctuation.definition.group.crystal",
        ],
        "settings": {"foreground": "#808080"},
    },
    {
        "scope": [
            "punctuation.separator.variable.crystal", // |var|
            "punctuation.separator.object.crystal",
            "punctuation.definition.parameters.crystal",
        ],
        "settings": {"foreground": "#d4d4d4"},
    },
    {
        "scope": [
            "source.crystal.embedded.source",
            // "variable.other.crystal",
        ],
        "settings": {"foreground": "#9cdcfe"},
    },
    {
        "scope": [
            "punctuation.separator.method.crystal", // .
        ],
        "settings": {"foreground": "#c586c0"},
    },
    {
        "scope": [
            "support.class.crystal",
            "punctuation.separator.other.crystal",            // ::/:
        ],
        "settings": {"foreground": "#4ec9b0"},
    },
    {
        "scope": [
            "variable.language.crystal",
            "punctuation.section.embedded.crystal",           // #{}
            "punctuation.section.embedded.begin.crystal",     // #{}
            "punctuation.section.embedded.end.crystal",       // #{}
            "keyword.control.special-method.crystal",         // new/include/extend/raise
            "source.crystal punctuation.separator.key-value", // =>
        ],
        "settings": {"foreground": "#569cd6"},
    },
    {
        "scope": [
            "string.quoted.single.crystal",
            "constant.other.symbol.crystal",                  // :symbol
        ],
        "settings": {"foreground": "#d7ba7d"},
    },
]
