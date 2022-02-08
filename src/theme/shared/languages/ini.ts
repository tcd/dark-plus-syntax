import { TextMateRuleData, ThemeColor } from "@types"

export const ini: TextMateRuleData[] = [
    {
        scopes: [
            "comment.line.number-sign.ini",
            "punctuation.definition.entity.ini",
        ],
        foreground: ThemeColor.Tags,
    },
    {
        scopes: [
            "keyword.other.definition.ini",
        ],
        foreground: ThemeColor.Variables,
    },
    // {
    //     scopes: ["entity.name.section.group-title.ini"],
    //     foreground: ThemeColor.Keywords,
    // },
    {
        scopes: [
            "punctuation.separator.key-value.ini",
        ],
        foreground: ThemeColor.FlowControl,
    },
]
