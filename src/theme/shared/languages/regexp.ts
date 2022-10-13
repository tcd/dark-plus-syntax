import { TextMateRuleData, ThemeColor } from "@types"

export const regexp: TextMateRuleData[] = [
    {
        scopes: [
            "meta.assertion.look-ahead.regexp",
            "meta.assertion.look-behind.regexp",
            "punctuation.definition.group.no-capture.regexp",
        ],
        foreground: ThemeColor.FlowControl,
    },
    {
        scopes: [
            "constant.character.escape.backslash.regexp",
            "string.regexp.ts constant.character.escape.backslash.regexp",
            "meta.group.assertion.regexp constant.character.escape.backslash.regexp",
            // "meta.group.assertion.regexp constant.character.escape.backslash.regexp",
        ],
        foreground: ThemeColor.Chars,
    },
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
