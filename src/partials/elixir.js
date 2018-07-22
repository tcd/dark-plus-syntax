module.exports = [
    {
        "scope": [
            "comment.wildcard.elixir",
            "comment.unused.elixir",
        ],
        "settings": {
            "foreground": "#9cdcfe",
            "fontStyle": "italic",
        },
    },
    {
        "scope": [
            "punctuation.section.function.elixir",
        ],
        "settings": {"foreground": "#d4d4d4"},
    },
    // {
    //     "scope": ["comment.documentation.heredoc.elixir"],
    //     "settings": {"foreground": "#608b4e"},
    // },
    {
        "scope": [
            // "punctuation.definition.constant.elixir",
            "parameter.variable.function.elixir",
            "source.elixir.embedded.source",
            "variable.other.readwrite.module.elixir",
            "variable.other.anonymous.elixir",
        ],
        "settings": {"foreground": "#9cdcfe"},
    },
    {
        "scope": ["punctuation.separator.method.elixir"],
        "settings": {"foreground": "#c586c0"},
    },
    {
        "scope": [
        "meta.module.elixir",
        "entity.name.type.module.elixir",
        "variable.other.readwrite.module.elixir",
        "variable.other.constant.elixir",
    ],
        "settings": {"foreground": "#4ec9b0"},
    },
    {
        "scope": [
            "constant.other.symbol.elixir",
            "punctuation.section.embedded.elixir",
            "punctuation.definition.variable.elixir",
            "variable.language.elixir",
            "source.elixir.embedded.source punctuation.section.embedded.elixir",
        ],
        "settings": {"foreground": "#569cd6"},
    },
    {
        "scope": [
            "constant.other.symbol.elixir",
            "punctuation.definition.constant.elixir",
            "support.function.variable.quoted.single.elixir"
        ],
        "settings": {"foreground": "#d7ba7d"},
    },
    // =========================================================================
    // eex
    // =========================================================================
    {
        "scope": [
            "punctuation.section.embedded.elixir",
        ],
        "settings": {"foreground": "#4ec9b0"},
    },
    // =========================================================================
    // Erlang
    // =========================================================================
    {
        "scope": [
            "punctuation.definition.placeholder.erlang",
            "constant.other.placeholder.erlang",
        ],
        "settings": {"foreground": "#d7ba7d"},
    },
    {
        "scope": ["punctuation.separator.parameters.erlang"],
        "settings": {"foreground": "#d4d4d4"},
    },
    {
        "scope": [
            "punctuation.section.directive.begin.erlang",
            "punctuation.section.directive.end.erlang",
            "punctuation.separator.module-function.erlang",
            "punctuation.separator.record-field.erlang",
            "punctuation.separator.list.erlang",
            "keyword.operator.symbolic.erlang",
            "punctuation.separator.clause-head-body.erlang",
        ],
        "settings": {"foreground": "#c586c0"},
    },
    {
        "scope": [
            "punctuation.separator.clauses.erlang",
            "punctuation.terminator.function.erlang",
        ],
        "settings": {"foreground": "#808080"},
    },
    {
        "scope": [
            "punctuation.separator.function-arity.erlang",
            "variable.language.omitted.erlang",
            // "punctuation.separator.clause-head-body.erlang",
            // "keyword.operator.symbolic.erlang",
        ],
        "settings": {"foreground": "#569cd6"},
    },
    {
        "scope": [
            "variable.other.erlang",
            // "constant.other.symbol.unquoted.erlang",
        ],
        "settings": {"foreground": "#9cdcfe"},
    },
];
