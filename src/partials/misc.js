module.exports = [
    {
        "scope": [ "variable.other.makefile" ],
        "settings": { "foreground": "#9cdcfe" }
    },
    {
        "scope": [ "variable.language.makefile" ],
        "settings": {
            "foreground": "#9cdcfe",
            "fontStyle": "italic"
        }
    },
    {
        "scope": [
            "punctuation.separator.key-value.makefile",
            "support.function.foreach.makefile",
            "keyword.control.ifeq.makefile",
            "keyword.control.endif.makefile",
            // "constant.character.escape.continuation.makefile",
        ],
        "settings": { "foreground": "#c586c0" }
    },
    {
        "scope": [
            "punctuation.definition.variable.makefile",
            "variable.language.makefile",
        ],
        "settings": { "foreground": "#569cd6" }
    },
    {
        "scope": [
            "entity.name.function.target.makefile",
            "constant.character.escape.continuation.makefile",

        ],
        "settings": { "foreground": "#dcdcaa" }
    },
]
