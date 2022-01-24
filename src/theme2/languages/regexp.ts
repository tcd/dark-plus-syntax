import { TextMateRuleData, SemanticColor } from "@lib"

export const regexp: TextMateRuleData[] = [
    // {
    //     scopes: [
    //     ],
    //     foreground: "#9cdcfe",,
    // },
    {
        scopes: [
            "keyword.operator.quantifier.regexp",
            "keyword.operator.quantifier.regexp.js",
        ],
        foreground: "#b5cea8",
    },
    {
        scopes: [
            "string.regexp",
            // "constant.regexp",
            // "constant.character.regexp",
        ],
        foreground: "#d16969",
    },
    {
        scopes: [
            "string.regexp constant.character.escape.backslash.regexp",
        ],
        foreground: "#ce9178",
    },
    {
        scopes: [
            "constant.other.character-class.regexp",
        ],
        foreground: "#4ec9b0",
    },
    {
        scopes: [
            "keyword.control.anchor.regexp",
            "constant.other.character-class.regexp",
        ],
        foreground: "#569cd6",
    },
    {
        scopes: [
            "punctuation.definition.group.regexp",
            "punctuation.definition.character-class.regexp",
        ],
        foreground: "#909090",
    },
]
