module.exports = [
    {
        scope: [
            "keyword.operator.assignment.go",
            "keyword.operator.arithmetic.go",
            "keyword.operator.comparison.go",
            "keyword.operator.address.go",
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
            "storage.type.boolean.go",
            "storage.type.byte.go",
            "storage.type.numeric.go",
            "storage.type.string.go",
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
    {
        scope: "entity.name.package.go",
        settings: {
            "foreground": "#9cdcfe",
        },
    },
    {
        scope: [
            "constant.other.placeholder.go",
            "keyword.operator.address.go",
            "keyword.operator.arithmetic.bitwise.go",
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
