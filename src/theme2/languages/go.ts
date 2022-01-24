import { TextMateRuleData, SemanticColor } from "@lib"

export const go: TextMateRuleData[] = [
    {
        scopes: [
            "keyword.operator.assignment.go",
            "keyword.operator.arithmetic.go",
            "keyword.operator.comparison.go",
            "keyword.operator.address.go",
            "keyword.operator.arithmetic.bitwise.go",
            "punctuation.terminator.go",
            "punctuation.other.colon.go",
            "punctuation.other.period.go",
            "keyword.control.gotemplate",
        ],
        foreground: "#c586c0",
    },
    {
        scopes: [
            "string.quoted.double.gotemplate",
        ],
        foreground: "#ce9178",
    },
    // {
    //     scopes: [
    //         "constant.other.rune.go",
    //     ],
    //     fontStyle: "italic",
    // },
    {
        scopes: [
            "source.go storage.type",
            // These don't need to be defined explicitly, the above scope covers them. I just left them to be thorough.
            "storage.type.boolean.go",
            "storage.type.byte.go",
            "storage.type.numeric.go",
            "storage.type.string.go",
            "storage.type.error.go",
            "storage.type.rune.go",
        ],
        foreground: "#4ec9b0",
    },
    {
        scopes: [
            "constant.other.rune.go",
            "constant.character.escape.go",
            "string.quoted.rune.go punctuation.definition.string.begin.go",
            "string.quoted.rune.go punctuation.definition.string.end.go",
        ],
        foreground: "#d7ba7d",
    },
    // {
    //     scopes: [
    //         "punctuation.terminator.go",
    //     ],
    //     foreground: "#d4d4d4",
    // },
    {
        scopes: [
            "constant.other.placeholder.go",
            "variable.other.blank.go",
            "keyword.operator.pointer.go",
            "keyword.operator.address.go",
            "keyword.operator.ellipsis.go",
        ],
        foreground: "#569cd6",
    },
    // Templates
    {
        scopes: [
            "punctuation.section.embedded.begin.gotemplate",
            "punctuation.section.embedded.end.gotemplate",
        ],
        foreground: "#4ec9b0",
    },
    {
        scopes: [
            "entity.alias.import.go",
        ],
        foreground: "#9cdcfe",
    },
]
