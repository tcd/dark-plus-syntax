import { TextMateRuleData, SemanticColor } from "@lib"

export const erlang: TextMateRuleData[] = [
    {
        scopes: [
            "punctuation.definition.placeholder.erlang",
            "constant.other.placeholder.erlang",
        ],
        foreground: SemanticColor.Chars,
    },
    {
        scopes: [
            "punctuation.separator.parameters.erlang",
        ],
        foreground: SemanticColor.Foreground,
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
        foreground: SemanticColor.FlowControl,
    },
    {
        scopes: [
            "punctuation.separator.clauses.erlang",
            "punctuation.terminator.function.erlang",
        ],
        foreground: SemanticColor.Tags,
    },
    {
        scopes: [
            "punctuation.separator.function-arity.erlang",
            "variable.language.omitted.erlang",
            // "punctuation.separator.clause-head-body.erlang",
            // "keyword.operator.symbolic.erlang",
        ],
        foreground: SemanticColor.Keywords,
    },
    {
        scopes: [
            "variable.other.erlang",
            // "constant.other.symbol.unquoted.erlang",
        ],
        foreground: SemanticColor.Variables,
    },
]
