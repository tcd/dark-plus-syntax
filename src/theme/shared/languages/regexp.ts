import { TextMateRuleData, ThemeColor } from "@types"

export const regexp: TextMateRuleData[] = [
    // {
    //     scopes: [
    //     ],
    //     foreground: ThemeColor.Variables,,
    // },
    {
        scopes: [
            "keyword.operator.quantifier.regexp",
            "keyword.operator.quantifier.regexp.js",
        ],
        foreground: ThemeColor.Numbers,
    },
    {
        scopes: [
            "string.regexp",
            // "constant.regexp",
            // "constant.character.regexp",
        ],
        foreground: ThemeColor.RegExp,
    },
    {
        scopes: [
            "string.regexp constant.character.escape.backslash.regexp",
        ],
        foreground: ThemeColor.Strings,
    },
    {
        scopes: [
            "constant.other.character-class.regexp",
        ],
        foreground: ThemeColor.Types,
    },
    {
        scopes: [
            "keyword.control.anchor.regexp",
            "constant.other.character-class.regexp",
        ],
        foreground: ThemeColor.Keywords,
    },
    {
        scopes: [
            "punctuation.definition.group.regexp",
            "punctuation.definition.character-class.regexp",
        ],
        foreground: ThemeColor.Tags,
    },
]
