import { TextMateRuleData, SemanticColor } from "@lib"

export const stylus: TextMateRuleData[] = [
    {
        scope:    ["punctuation.definition.keyword.stylus"],
        foreground: "#c586c0",
    },
    {
        scope:    ["meta.interpolation.stylus"],
        foreground: "#9cdcfe",
    },
    {
        scope:    ["variable.stylus"],
        foreground: "#4ec9b0",
    },
    {
        scope:    ["entity.other.attribute-name.parent-selector-suffix.stylus"],
        foreground: "#d7ba7d",
    },
    {
        scope:    ["meta.interpolation.stylus meta.brace.curly"],
        foreground: "#569cd6",
    },
]
