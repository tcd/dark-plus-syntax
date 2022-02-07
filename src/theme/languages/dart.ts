import { TextMateRuleData, SemanticColor } from "@types"

export const dart: TextMateRuleData[] = [
    {
        scopes:     ["keyword.control.new.dart"],
        foreground: SemanticColor.Keywords,
    },
    {
        scopes:     ["punctuation.terminator.dart"],
        foreground: SemanticColor.Tags,
    },
    {
        scopes:     ["punctuation.dot.dart"],
        foreground: SemanticColor.FlowControl,
    },
    {
        scopes:     ["meta.declaration.dart"],
        foreground: SemanticColor.Variables,
    },
]
