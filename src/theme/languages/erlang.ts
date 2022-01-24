export const erlang: VsCodeTextMate.TextMateRules = [
    {
        scope: [
            "punctuation.definition.placeholder.erlang",
            "constant.other.placeholder.erlang",
        ],
        settings: {
            foreground: "#d7ba7d",
        },
    },
    {
        scope: [
            "punctuation.separator.parameters.erlang",
        ],
        settings: {
            foreground: "#d4d4d4",
        },
    },
    {
        scope: [
            "punctuation.section.directive.begin.erlang",
            "punctuation.section.directive.end.erlang",
            "punctuation.separator.module-function.erlang",
            "punctuation.separator.record-field.erlang",
            "punctuation.separator.list.erlang",
            "keyword.operator.symbolic.erlang",
            "punctuation.separator.clause-head-body.erlang",
        ],
        settings: {
            foreground: "#c586c0",
        },
    },
    {
        scope: [
            "punctuation.separator.clauses.erlang",
            "punctuation.terminator.function.erlang",
        ],
        settings: {
            foreground: "#808080",
        },
    },
    {
        scope: [
            "punctuation.separator.function-arity.erlang",
            "variable.language.omitted.erlang",
            // "punctuation.separator.clause-head-body.erlang",
            // "keyword.operator.symbolic.erlang",
        ],
        settings: {
            foreground: "#569cd6",
        },
    },
    {
        scope: [
            "variable.other.erlang",
            // "constant.other.symbol.unquoted.erlang",
        ],
        settings: {
            foreground: "#9cdcfe",
        },
    },
]
