import { TextMateRuleData, ThemeColor } from "@types"

/**
 * ## Extensions
 *
 * - [dunstontc/viml](https://github.com/dunstontc/viml)
 */
export const viml: TextMateRuleData[] = [
    {
        scopes: [
            // "constant.character",
            "constant.character.map.rhs.viml",
            "constant.character.map.special.viml",
            "constant.character.map.key.viml",
            "constant.character.map.key.fn.viml",
            "constant.character.map.viml",
        ],
        foreground: ThemeColor.Chars,
    },
    {
        scopes: [
            "punctuation.definition.map.viml",
    ],
        foreground: ThemeColor.Tags,
    },
]
