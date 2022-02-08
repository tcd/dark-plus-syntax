import { TextMateRuleData, ThemeColor } from "@types"

export const smarty: TextMateRuleData[] = [
    {
        scopes: [
            "support.function.built-in.smarty",
        ],
        // foreground: ThemeColor.Keywords,
        foreground: ThemeColor.FlowControl,
    },
    {
        scopes: [
            "source.smarty punctuation.section.embedded.begin.smarty",
            "source.smarty punctuation.section.embedded.end.smarty",
        ],
        foreground: ThemeColor.Tags,
    },
    {
        scopes: [
            "source.smarty",
        ],
        foreground: ThemeColor.Types,
    },
]
