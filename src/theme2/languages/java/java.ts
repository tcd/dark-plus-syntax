import { TextMateRuleData, SemanticColor } from "@lib"

export const java: TextMateRuleData[] = [
    {
        scopes: [
            "storage.modifier.import.java",
            "variable.language.wildcard.java",
            "storage.modifier.package.java",
        ],
        foreground: SemanticColor.Foreground,
    },
    {
        scopes: [
            "punctuation.separator.period.java",
        ],
        foreground: SemanticColor.FlowControl,
    },
]
