import { TextMateRuleData, SemanticColor } from "@types"

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
        foreground: SemanticColor.Chars,
    },
    {
        scopes: [
            "punctuation.definition.map.viml",
    ],
        foreground: SemanticColor.Tags,
    },
]
