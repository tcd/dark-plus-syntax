import { TextMateRuleData, SemanticColor } from "@lib"

export const crystal: TextMateRuleData[] = [
    {
        scopes: [
            "keyword.operator.macro.crystal",
        ],
        // foreground: "#569cd6",
        fontStyle: "italic",
    },
    // {
    //     scopes: [
    //         "punctuation.section.function.crystal",
    //     ],
    //     foreground: "#808080",
    // },
    {
        scopes: [
            "string.regexp.group.crystal punctuation.definition.group.crystal",
        ],
        foreground: "#808080",
    },
    {
        scopes: [
            "punctuation.separator.variable.crystal", // |var|
            "punctuation.separator.object.crystal",
            "punctuation.definition.parameters.crystal",
        ],
        foreground: "#d4d4d4",
    },
    {
        scopes: [
            "source.crystal.embedded.source",
            // "variable.other.crystal",
        ],
        foreground: "#9cdcfe",
    },
    {
        scopes: [
            "punctuation.separator.method.crystal", // .
        ],
        foreground: "#c586c0",
    },
    {
        scopes: [
            "support.class.crystal",
            "punctuation.separator.other.crystal",            // ::/:
        ],
        foreground: "#4ec9b0",
    },
    {
        scopes: [
            "variable.language.crystal",
            "punctuation.section.embedded.crystal",           // #{}
            "punctuation.section.embedded.begin.crystal",     // #{}
            "punctuation.section.embedded.end.crystal",       // #{}
            "keyword.control.special-method.crystal",         // new/include/extend/raise
            "source.crystal punctuation.separator.key-value", // =>
        ],
        foreground: "#569cd6",
    },
    {
        scopes: [
            "string.quoted.single.crystal",
            "constant.other.symbol.crystal",                  // :symbol
        ],
        foreground: "#d7ba7d",
    },
]
