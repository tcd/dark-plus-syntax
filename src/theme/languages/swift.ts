export const swift: VsCodeTextMate.TextMateRules = [
    {
        "scope": ["comment.punctuation.comma.swift"],
        "settings": { "foreground": "#d4d4d4" },
    },
    {
        "scope": [
            "keyword.statement.swift",
        ],
        "settings": { "foreground": "#c586c0" },
    },
    {
        "scope": [
            "string-interpolation keyword.operator.swift",
            "punctuation.section.embedded.begin.swift",
            "punctuation.section.embedded.end.swift",
        ],
        "settings": {"foreground": "#569cd6"},
    },
    {
        "scope": [
            "variable.language.self.swift",
            "keyword.expressions-and-types.swift",
        ],
        "settings": {
            "foreground": "#569cd6",
            "fontStyle": "italic",
        },
    },
    {
        "scope": [
            "meta.embedded.line.swift",
        ],
        "settings": { "foreground": "#9cdcfe" },
    },
]
