import { TextMateRuleData, SemanticColor } from "@lib"

export const stylus: TextMateRuleData[] = [
    {
        scopes:    ["punctuation.definition.keyword.stylus"],
        foreground: SemanticColor.FlowControl,
    },
    {
        scopes:    ["meta.interpolation.stylus"],
        foreground: SemanticColor.Variables,
    },
    {
        scopes:    ["variable.stylus"],
        foreground: SemanticColor.Types,
    },
    {
        scopes:    ["entity.other.attribute-name.parent-selector-suffix.stylus"],
        foreground: SemanticColor.Chars,
    },
    {
        scopes:    ["meta.interpolation.stylus meta.brace.curly"],
        foreground: SemanticColor.Keywords,
    },
]
