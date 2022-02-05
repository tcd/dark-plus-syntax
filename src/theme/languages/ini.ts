import { TextMateRuleData, SemanticColor } from "@lib"

export const ini: TextMateRuleData[] = [
    {
        scopes: [
            "comment.line.number-sign.ini",
            "punctuation.definition.entity.ini",
        ],
        foreground: SemanticColor.Tags,
    },
    {
        scopes: [
            "keyword.other.definition.ini",
        ],
        foreground: SemanticColor.Variables,
    },
    // {
    //     scopes: ["entity.name.section.group-title.ini"],
    //     foreground: SemanticColor.Keywords,
    // },
    {
        scopes: [
            "punctuation.separator.key-value.ini",
        ],
        foreground: SemanticColor.FlowControl,
    },
]
