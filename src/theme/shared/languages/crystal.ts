import { TextMateRuleData, ThemeColor } from "@types"

/**
 * ## Extensions
 *
 * - [crystal-lang-tools/vscode-crystal-lang](https://github.com/crystal-lang-tools/vscode-crystal-lang)
 * - [dunstontc/vscode-crystal-syntax](https://github.com/dunstontc/vscode-crystal-syntax)
 *   - Not much here
 */
export const crystal: TextMateRuleData[] = [
    {
        scopes: [
            "keyword.operator.macro.crystal",
        ],
        // foreground: ThemeColor.Keywords,
        fontStyle: "italic",
    },
    // {
    //     scopes: [
    //         "punctuation.section.function.crystal",
    //     ],
    //     foreground: ThemeColor.Tags,
    // },
    {
        scopes: [
            [
                "string.regexp.group.crystal",
                "punctuation.definition.group.crystal",
            ],
        ],
        foreground: ThemeColor.Tags,
    },
    {
        scopes: [
            "punctuation.separator.variable.crystal", // |var|
            "punctuation.separator.object.crystal",
            "punctuation.definition.parameters.crystal",
        ],
        foreground: ThemeColor.Foreground,
    },
    {
        scopes: [
            "source.crystal.embedded.source",
            // "variable.other.crystal",
        ],
        foreground: ThemeColor.Variables,
    },
    {
        scopes: [
            "punctuation.separator.method.crystal", // .
        ],
        foreground: ThemeColor.FlowControl,
    },
    {
        scopes: [
            "support.class.crystal",
            "punctuation.separator.other.crystal",            // ::/:
        ],
        foreground: ThemeColor.Types,
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
        foreground: ThemeColor.Keywords,
    },
    {
        scopes: [
            "string.quoted.single.crystal",
            "constant.other.symbol.crystal",                  // :symbol
        ],
        foreground: ThemeColor.Chars,
    },
]
