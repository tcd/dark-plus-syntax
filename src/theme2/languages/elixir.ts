import { TextMateRuleData, SemanticColor } from "@lib"

export const elixir: TextMateRuleData[] = [
    {
        scopes: [
            "comment.wildcard.elixir",
            "comment.unused.elixir",
        ],
        foreground: SemanticColor.Variables,
        fontStyle:  "italic",
    },
    {
        scopes: [
            "punctuation.section.function.elixir",
        ],
        foreground: SemanticColor.Foreground,
    },
    // {
    //     scopes:    ["comment.documentation.heredoc.elixir"],
    //     foreground: SemanticColor.DocComments,
    // },
    {
        scopes: [
            // "punctuation.definition.constant.elixir",
            "parameter.variable.function.elixir",
            "source.elixir.embedded.source",
            "variable.other.readwrite.module.elixir",
            "variable.other.anonymous.elixir",
        ],
        foreground: SemanticColor.Variables,
    },
    {
        scopes: [
            "punctuation.separator.method.elixir",
        ],
        foreground: SemanticColor.FlowControl,
    },
    {
        scopes: [
        "meta.module.elixir",
        "entity.name.type.module.elixir",
        "variable.other.readwrite.module.elixir",
        "variable.other.constant.elixir",
    ],
        foreground: SemanticColor.Types,
    },
    {
        scopes: [
            "constant.other.symbol.elixir",
            "punctuation.section.embedded.elixir",
            "punctuation.definition.variable.elixir",
            "variable.language.elixir",
            "source.elixir.embedded.source punctuation.section.embedded.elixir",
        ],
        foreground: SemanticColor.Keywords,
    },
    {
        scopes: [
            "constant.other.symbol.elixir",
            "punctuation.definition.constant.elixir",
            "support.function.variable.quoted.single.elixir",
        ],
        foreground: SemanticColor.Chars,
    },
    // =========================================================================
    // eex
    // =========================================================================
    {
        scopes: [
            "punctuation.section.embedded.elixir",
        ],
        foreground: SemanticColor.Types,
    },
]
