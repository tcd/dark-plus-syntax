import { TextMateRuleData, SemanticColor } from "@lib"

export const smarty: TextMateRuleData[] = [
    {
        scopes: [
            "support.function.built-in.smarty",
        ],
        // foreground: "#569cd6",
        foreground: "#c586c0",
    },
    {
        scopes: [
            "source.smarty punctuation.section.embedded.begin.smarty",
            "source.smarty punctuation.section.embedded.end.smarty",
        ],
        foreground: "#808080",
    },
    {
        scopes: [
            "source.smarty",
        ],
        foreground: "#4ec9b0",
    },
]
