import { TextMateRuleData, ThemeColor } from "@types"

export const swift: TextMateRuleData[] = [
    {
        scopes:    ["comment.punctuation.comma.swift"],
        foreground: ThemeColor.Foreground,
    },
    {
        scopes: [
            "keyword.statement.swift",
        ],
        foreground: ThemeColor.FlowControl,
    },
    {
        scopes: [
            "string-interpolation keyword.operator.swift",
            "punctuation.section.embedded.begin.swift",
            "punctuation.section.embedded.end.swift",
        ],
        foreground: ThemeColor.Keywords,
    },
    {
        scopes: [
            "variable.language.self.swift",
            "keyword.expressions-and-types.swift",
        ],
        foreground: ThemeColor.Keywords,
        fontStyle:  "italic",
    },
    {
        scopes: [
            "meta.embedded.line.swift",
        ],
        foreground: ThemeColor.Variables,
    },
]
