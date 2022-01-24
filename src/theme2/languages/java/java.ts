import { TextMateRuleData, SemanticColor } from "@lib"

export const java: TextMateRuleData[] = [
    {
        scopes: [
            "storage.modifier.import.java",
            "variable.language.wildcard.java",
            "storage.modifier.package.java",
        ],
        foreground: "#d4d4d4",
    },
    {
        scopes: [
            "punctuation.separator.period.java",
        ],
        foreground: "#c586c0",
    },
]
