import { TextMateRuleData, SemanticColor } from "@lib"

export const ini: TextMateRuleData[] = [
    {
        scopes: [
            "comment.line.number-sign.ini",
            "punctuation.definition.entity.ini",
        ],
        foreground: "#505050",
    },
    {
        scopes: [
            "keyword.other.definition.ini",
        ],
        foreground: "#9cdcfe",
    },
    // {
    //     scopes: ["entity.name.section.group-title.ini"],
    //     foreground: "#569cd6",
    // },
    {
        scopes: [
            "punctuation.separator.key-value.ini",
        ],
        foreground: "#c586c0",
    },
]
