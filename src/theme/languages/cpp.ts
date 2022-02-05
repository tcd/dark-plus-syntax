import { TextMateRuleData, SemanticColor } from "@lib"

export const cpp: TextMateRuleData[] = [
    {
        scopes: [
            "punctuation.separator.namespace.access.cpp",
        ],
        foreground: SemanticColor.Types,
    },
    {
        scopes: [
            "source.cpp keyword.operator.bitwise.shift.c",
        ],
        foreground: SemanticColor.Keywords,
    },
]
