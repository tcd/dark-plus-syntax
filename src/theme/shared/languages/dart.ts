import { TextMateRuleData, ThemeColor } from "@types"

export const dart: TextMateRuleData[] = [
    {
        scopes:     ["keyword.control.new.dart"],
        foreground: ThemeColor.Keywords,
    },
    {
        scopes:     ["punctuation.terminator.dart"],
        foreground: ThemeColor.Tags,
    },
    {
        scopes:     ["punctuation.dot.dart"],
        foreground: ThemeColor.FlowControl,
    },
    {
        scopes:     ["meta.declaration.dart"],
        foreground: ThemeColor.Variables,
    },
]
