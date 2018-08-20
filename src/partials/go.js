module.exports = [
    {
        scope: [
            "keyword.operator.assignment.go",
            "keyword.operator.arithmetic.go",
            "keyword.operator.comparison.go",
            "keyword.operator.address.go",
            "keyword.operator.arithmetic.bitwise.go",
            "punctuation.terminator.go",
            "punctuation.other.colon.go",
            "punctuation.other.period.go",
            "keyword.control.gotemplate",
        ],
        settings: {
            "foreground": "#c586c0",
        },
    },
    {
        scope: [
            "string.quoted.double.gotemplate",
        ],
        settings: { "foreground": "#ce9178" },
    },
    // {
    //     scope: [
    //         "constant.other.rune.go",
    //     ],
    //     settings: { "fontStyle": "italic" },
    // },
    {
        scope: [
            "source.go storage.type",
            // These don't need to be defined explicitly, the above scope covers them. I just left them to be thorough.
            "storage.type.boolean.go",
            "storage.type.byte.go",
            "storage.type.numeric.go",
            "storage.type.string.go",
            "storage.type.error.go",
            "storage.type.rune.go",
        ],
        settings: {
            "foreground": "#4ec9b0",
        },
    },
    {
        scope: [
            "constant.other.rune.go",
            "constant.character.escape.go",
            "string.quoted.rune.go punctuation.definition.string.begin.go",
            "string.quoted.rune.go punctuation.definition.string.end.go",
        ],
        settings: {
            "foreground": "#d7ba7d",
        },
    },
    // {
    //     scope: [
    //         "punctuation.terminator.go",
    //     ],
    //     settings: {
    //         "foreground": "#d4d4d4",
    //     },
    // },
    {
        scope: [
            "constant.other.placeholder.go",
            "variable.other.blank.go",
            "keyword.operator.pointer.go",
            "keyword.operator.address.go",
            "keyword.operator.ellipsis.go",
        ],
        settings: {
            "foreground": "#569cd6",
        },
    },
    // Templates
    {
        scope: [
            "punctuation.section.embedded.begin.gotemplate",
            "punctuation.section.embedded.end.gotemplate",
        ],
        settings: {
            "foreground": "#4ec9b0",
        },
    },
    {
        scope: [
            "entity.alias.import.go",
        ],
        settings: {
            "foreground": "#9cdcfe",
        },
    },
];
