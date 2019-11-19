module.exports = [
    // =========================================================================
    // Makefile
    // =========================================================================
    {
        "scope": ["comment.line.number-sign.makefile"],
        "settings": {"foreground": "#608b4e"},
    },
    {
        "scope": ["variable.other.makefile"],
        "settings": {"foreground": "#9cdcfe"},
    },
    {
        "scope": ["variable.language.makefile"],
        "settings": {"foreground": "#569cd6"},
    },
    {
        "scope": [
            "entity.name.function.target.makefile",
            "constant.character.escape.continuation.makefile",
        ],
        "settings": { "foreground": "#dcdcaa" },
    },
    {
        "scope": [
            "punctuation.separator.key-value.makefile",
            "support.function.foreach.makefile",
            "keyword.control.ifeq.makefile",
            "keyword.control.endif.makefile",
            "constant.character.escape.continuation.makefile",
        ],
        "settings": { "foreground": "#c586c0" },
    },
    // =========================================================================
    // CMake
    // =========================================================================
    {
        "scope": ["storage.source.cmake"],
        "settings": {"foreground": "#9cdcfe"},
    },
];
