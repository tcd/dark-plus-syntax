import { TextMateRuleData, ThemeColor } from "@types"

export const stylus: TextMateRuleData[] = [
    {
        scopes:    ["punctuation.definition.keyword.stylus"],
        foreground: ThemeColor.FlowControl,
    },
    {
        scopes:    ["meta.interpolation.stylus"],
        foreground: ThemeColor.Variables,
    },
    {
        scopes:    ["variable.stylus"],
        foreground: ThemeColor.Types,
    },
    {
        scopes:    ["entity.other.attribute-name.parent-selector-suffix.stylus"],
        foreground: ThemeColor.Chars,
    },
    {
        scopes:    ["meta.interpolation.stylus meta.brace.curly"],
        foreground: ThemeColor.Keywords,
    },
]
