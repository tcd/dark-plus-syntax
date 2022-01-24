export const viml: VsCodeTextMate.TextMateRules = [
    {
        "scope": [
            // "constant.character",
            "constant.character.map.rhs.viml",
            "constant.character.map.special.viml",
            "constant.character.map.key.viml",
            "constant.character.map.key.fn.viml",
            "constant.character.map.viml",
        ],
        "settings": {"foreground": "#d7ba7d"},
    },
    {
        "scope": ["punctuation.definition.map.viml"],
        "settings": {"foreground": "#505050"},
    },
]
