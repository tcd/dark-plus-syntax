import { TextMateRuleData, ThemeColor } from "@types"

export const dictionary: TextMateRuleData[] = [
    {
        scopes: [
            "string.word.dictionary",
        ],
        foreground: ThemeColor.DocComments,
    },
    {
        scopes: [
            "variable.flagged.dictionary",
            "keyword.operator.flag.dictionary",
        ],
        foreground: ThemeColor.RegExp,
    },
]
