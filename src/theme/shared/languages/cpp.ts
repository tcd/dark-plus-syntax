import { TextMateRuleData, ThemeColor } from "@types"

export const cpp: TextMateRuleData[] = [
    {
        scopes: [
            "punctuation.separator.namespace.access.cpp",
        ],
        foreground: ThemeColor.Types,
    },
    {
        scopes: [
            [
                "source.cpp",
                "keyword.operator.bitwise.shift.c",
            ],
        ],
        foreground: ThemeColor.Keywords,
    },
]
