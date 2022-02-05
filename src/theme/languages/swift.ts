import { TextMateRuleData, SemanticColor } from "@lib"

export const swift: TextMateRuleData[] = [
    {
        scopes:    ["comment.punctuation.comma.swift"],
        foreground: SemanticColor.Foreground,
    },
    {
        scopes: [
            "keyword.statement.swift",
        ],
        foreground: SemanticColor.FlowControl,
    },
    {
        scopes: [
            "string-interpolation keyword.operator.swift",
            "punctuation.section.embedded.begin.swift",
            "punctuation.section.embedded.end.swift",
        ],
        foreground: SemanticColor.Keywords,
    },
    {
        scopes: [
            "variable.language.self.swift",
            "keyword.expressions-and-types.swift",
        ],
        foreground: SemanticColor.Keywords,
        fontStyle:  "italic",
    },
    {
        scopes: [
            "meta.embedded.line.swift",
        ],
        foreground: SemanticColor.Variables,
    },
]
