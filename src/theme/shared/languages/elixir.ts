import { TextMateRuleData, ThemeColor } from "@types"

/**
 * ## Languages
 *
 *  - Elixir
 *  - EEX
 *
 * ## Extensions
 *
 * - [dunstontc/vscode-elixir-syntax](https://github.com/dunstontc/vscode-elixir-syntax)
 */
export const elixir: TextMateRuleData[] = [
    {
        scopes: [
            "comment.wildcard.elixir",
            "comment.unused.elixir",
        ],
        foreground: ThemeColor.Variables,
        fontStyle:  "italic",
    },
    {
        scopes: [
            "punctuation.section.function.elixir",
        ],
        foreground: ThemeColor.Foreground,
    },
    // {
    //     scopes:    ["comment.documentation.heredoc.elixir"],
    //     foreground: ThemeColor.DocComments,
    // },
    {
        scopes: [
            // "punctuation.definition.constant.elixir",
            "parameter.variable.function.elixir",
            "source.elixir.embedded.source",
            "variable.other.readwrite.module.elixir",
            "variable.other.anonymous.elixir",
        ],
        foreground: ThemeColor.Variables,
    },
    {
        scopes: [
            "punctuation.separator.method.elixir",
        ],
        foreground: ThemeColor.FlowControl,
    },
    {
        scopes: [
        "meta.module.elixir",
        "entity.name.type.module.elixir",
        "variable.other.readwrite.module.elixir",
        "variable.other.constant.elixir",
    ],
        foreground: ThemeColor.Types,
    },
    {
        scopes: [
            "constant.other.symbol.elixir",
            "punctuation.section.embedded.elixir",
            "punctuation.definition.variable.elixir",
            "variable.language.elixir",
            "source.elixir.embedded.source punctuation.section.embedded.elixir",
        ],
        foreground: ThemeColor.Keywords,
    },
    {
        scopes: [
            "constant.other.symbol.elixir",
            "punctuation.definition.constant.elixir",
            "support.function.variable.quoted.single.elixir",
        ],
        foreground: ThemeColor.Chars,
    },
    // =========================================================================
    // eex
    // =========================================================================
    {
        scopes: [
            "punctuation.separator.label.js",
        ],
        foreground: ThemeColor.FlowControl,
    },
    {
        scopes: [
            "punctuation.section.embedded.elixir",
        ],
        foreground: ThemeColor.Types,
    },
]
