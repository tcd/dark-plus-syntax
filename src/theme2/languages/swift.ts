import { TextMateRuleData, SemanticColor } from "@lib"

export const swift: TextMateRuleData[] = [
    {
        scope:    ["comment.punctuation.comma.swift"],
        foreground: "#d4d4d4",
    },
    {
        scopes: [
            "keyword.statement.swift",
        ],
        foreground: "#c586c0",
    },
    {
        scopes: [
            "string-interpolation keyword.operator.swift",
            "punctuation.section.embedded.begin.swift",
            "punctuation.section.embedded.end.swift",
        ],
        foreground: "#569cd6",
    },
    {
        scopes: [
            "variable.language.self.swift",
            "keyword.expressions-and-types.swift",
        ],
        foreground: "#569cd6",
        fontStyle:  "italic",
    },
    {
        scopes: [
            "meta.embedded.line.swift",
        ],
        foreground: "#9cdcfe",
    },
]
