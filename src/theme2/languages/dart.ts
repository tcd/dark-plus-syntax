import { TextMateRuleData, SemanticColor } from "@lib"

export const dart: TextMateRuleData[] = [
    {
        scope:    ["keyword.control.new.dart"],
        foreground: "#569cd6",
    },
    {
        scope:    ["punctuation.terminator.dart"],
        foreground: "#505050",
    },
    {
        scope:    ["punctuation.dot.dart"],
        foreground: "#c586c0",
    },
    {
        scope:    ["meta.declaration.dart"],
        foreground: "#9cdcfe",
    },
]
