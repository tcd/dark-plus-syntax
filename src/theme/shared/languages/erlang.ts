import { TextMateRuleData, ThemeColor } from "@types"

export const erlang: TextMateRuleData[] = [
    {
        scopes: [
            "punctuation.definition.placeholder.erlang",
            "constant.other.placeholder.erlang",
        ],
        foreground: ThemeColor.Chars,
    },
    {
        scopes: [
            "punctuation.separator.parameters.erlang",
        ],
        foreground: ThemeColor.Foreground,
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
        foreground: ThemeColor.FlowControl,
    },
    {
        scopes: [
            "punctuation.separator.clauses.erlang",
            "punctuation.terminator.function.erlang",
        ],
        foreground: ThemeColor.Tags,
    },
    {
        scopes: [
            "punctuation.separator.function-arity.erlang",
            "variable.language.omitted.erlang",
            // "punctuation.separator.clause-head-body.erlang",
            // "keyword.operator.symbolic.erlang",
        ],
        foreground: ThemeColor.Keywords,
    },
    {
        scopes: [
            "variable.other.erlang",
            // "constant.other.symbol.unquoted.erlang",
        ],
        foreground: ThemeColor.Variables,
    },
]
