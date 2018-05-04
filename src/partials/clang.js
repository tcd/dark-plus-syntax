module.exports = [
    // {
    //     "scope": [
    //         // "keyword.operator.sizeof.c",
    //         "support.function.C99.c",
    //         // "constant.language.c",
    //         // "storage.modifier.c",
    //     ],
    //     "settings": {
    //         "foreground": "#dcdcaa",
    //         "fontStyle": "italic",
    //     },
    // },
    {
        "scope": [
            "entity.name.function.c",
            "meta.function-call.c",
        ],
        "settings": {"foreground": "#dcdcaa"},
    },
    {
        "scope": [
            "comment.block.c",
            "punctuation.terminator.statement.c",
        ],
        "settings": {
            "foreground": "#505050",
        },
    },
    {
        "scope": [
        ],
        "settings": {"foreground": "#608b4e"},
    },
    {
        "scope": [
            "constant.other.variable.mac-classic.c",
            "constant.other.placeholder.c",
            "string.quoted.double.include.c",
            "string.quoted.other.lt-gt.include.c",
        ],
        "settings": {"foreground": "#9cdcfe"},
    },
    {
        "scope": [
            "punctuation.separator.pointer-access.c",
        ],
        "settings": {"foreground": "#c586c0"},
    },
    {
        "scope": [
            "storage.type.c",
            "support.type.mac-classic.c",
        ],
        "settings": {"foreground": "#4ec9b0"},
    },
    {
        "scope": [
            "support.function.C99.c",
            "constant.language.c",
            "keyword.operator.sizeof.c",
            "keyword.control.directive.include.c",
        ],
        "settings": {"foreground": "#569cd6"},
    },
];
