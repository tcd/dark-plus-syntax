import { TextMateRuleData, SemanticColor } from "@lib"

export const elixir: TextMateRuleData[] = [
    {
        scopes: [
            "comment.wildcard.elixir",
            "comment.unused.elixir",
        ],
        foreground: "#9cdcfe",
        fontStyle:  "italic",
    },
    {
        scopes: [
            "punctuation.section.function.elixir",
        ],
        foreground: "#d4d4d4",
    },
    // {
    //     scope:    ["comment.documentation.heredoc.elixir"],
    //     foreground: "#608b4e",
    // },
    {
        scopes: [
            // "punctuation.definition.constant.elixir",
            "parameter.variable.function.elixir",
            "source.elixir.embedded.source",
            "variable.other.readwrite.module.elixir",
            "variable.other.anonymous.elixir",
        ],
        foreground: "#9cdcfe",
    },
    {
        scopes: [
            "punctuation.separator.method.elixir",
        ],
        foreground: "#c586c0",
    },
    {
        scopes: [
        "meta.module.elixir",
        "entity.name.type.module.elixir",
        "variable.other.readwrite.module.elixir",
        "variable.other.constant.elixir",
    ],
        foreground: "#4ec9b0",
    },
    {
        scopes: [
            "constant.other.symbol.elixir",
            "punctuation.section.embedded.elixir",
            "punctuation.definition.variable.elixir",
            "variable.language.elixir",
            "source.elixir.embedded.source punctuation.section.embedded.elixir",
        ],
        foreground: "#569cd6",
    },
    {
        scopes: [
            "constant.other.symbol.elixir",
            "punctuation.definition.constant.elixir",
            "support.function.variable.quoted.single.elixir",
        ],
        foreground: "#d7ba7d",
    },
    // =========================================================================
    // eex
    // =========================================================================
    {
        scopes: [
            "punctuation.section.embedded.elixir",
        ],
        foreground: "#4ec9b0",
    },
]
