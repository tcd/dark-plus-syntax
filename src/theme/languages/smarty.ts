import { TextMateRuleData, SemanticColor } from "@types"

export const smarty: TextMateRuleData[] = [
    {
        scopes: [
            "support.function.built-in.smarty",
        ],
        // foreground: SemanticColor.Keywords,
        foreground: SemanticColor.FlowControl,
    },
    {
        scopes: [
            "source.smarty punctuation.section.embedded.begin.smarty",
            "source.smarty punctuation.section.embedded.end.smarty",
        ],
        foreground: SemanticColor.Tags,
    },
    {
        scopes: [
            "source.smarty",
        ],
        foreground: SemanticColor.Types,
    },
]
