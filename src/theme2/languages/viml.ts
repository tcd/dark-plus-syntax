import { TextMateRuleData, SemanticColor } from "@lib"

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
        foreground: "#d7ba7d",
    },
    {
        scopes: [
            "punctuation.definition.map.viml",
    ],
        foreground: "#505050",
    },
]
