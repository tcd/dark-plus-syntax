import { TextMateRuleData, SemanticColor } from "@lib"

export const erlang: TextMateRuleData[] = [
    {
        scopes: [
            "punctuation.definition.placeholder.erlang",
            "constant.other.placeholder.erlang",
        ],
        foreground: "#d7ba7d",
    },
    {
        scopes: [
            "punctuation.separator.parameters.erlang",
        ],
        foreground: "#d4d4d4",
    },
    {
        scopes: [
            "punctuation.section.directive.begin.erlang",
            "punctuation.section.directive.end.erlang",
            "punctuation.separator.module-function.erlang",
            "punctuation.separator.record-field.erlang",
            "punctuation.separator.list.erlang",
            "keyword.operator.symbolic.erlang",
            "punctuation.separator.clause-head-body.erlang",
        ],
        foreground: "#c586c0",
    },
    {
        scopes: [
            "punctuation.separator.clauses.erlang",
            "punctuation.terminator.function.erlang",
        ],
        foreground: "#808080",
    },
    {
        scopes: [
            "punctuation.separator.function-arity.erlang",
            "variable.language.omitted.erlang",
            // "punctuation.separator.clause-head-body.erlang",
            // "keyword.operator.symbolic.erlang",
        ],
        foreground: "#569cd6",
    },
    {
        scopes: [
            "variable.other.erlang",
            // "constant.other.symbol.unquoted.erlang",
        ],
        foreground: "#9cdcfe",
    },
]
