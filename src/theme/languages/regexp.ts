import { TextMateRuleData, SemanticColor } from "@lib"

export const regexp: TextMateRuleData[] = [
    // {
    //     scopes: [
    //     ],
    //     foreground: SemanticColor.Variables,,
    // },
    {
        scopes: [
            "keyword.operator.quantifier.regexp",
            "keyword.operator.quantifier.regexp.js",
        ],
        foreground: SemanticColor.Numbers,
    },
    {
        scopes: [
            "string.regexp",
            // "constant.regexp",
            // "constant.character.regexp",
        ],
        foreground: SemanticColor.RegExp,
    },
    {
        scopes: [
            "string.regexp constant.character.escape.backslash.regexp",
        ],
        foreground: SemanticColor.Strings
    },
    {
        scopes: [
            "constant.other.character-class.regexp",
        ],
        foreground: SemanticColor.Types,
    },
    {
        scopes: [
            "keyword.control.anchor.regexp",
            "constant.other.character-class.regexp",
        ],
        foreground: SemanticColor.Keywords,
    },
    {
        scopes: [
            "punctuation.definition.group.regexp",
            "punctuation.definition.character-class.regexp",
        ],
        foreground: SemanticColor.Tags,
    },
]
