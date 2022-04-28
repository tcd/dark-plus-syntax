import { TextMateRuleData, ThemeColor } from "@types"

export const c: TextMateRuleData[] = [
    {
        scopes: [
            "support.function.C99.c",
            "entity.name.function.c",
            // "meta.function-call.c",
        ],
        foreground: ThemeColor.Functions,
    },
    {
        scopes: [
            "comment.block.c",
            "punctuation.terminator.statement.c",
        ],
        foreground: ThemeColor.Comments,
    },
    {
        scopes: [
            "string.quoted.single.c",
        ],
        foreground: ThemeColor.Chars,
    },
    {
        scopes: [
            // "meta.preprocessor.include.c string.quoted.other.lt-gt.include.c punctuation.definition.string.begin.c",
            // "meta.preprocessor.include.c string.quoted.other.lt-gt.include.c punctuation.definition.string.end.c",
            [
                "meta.preprocessor.include.c",
                "string.quoted.other.lt-gt.include.c",
                "punctuation.definition.string.begin.c",
            ],
            [
                "meta.preprocessor.include.c",
                "string.quoted.other.lt-gt.include.c",
                "punctuation.definition.string.end.c",
            ],
        ],
        foreground: ThemeColor.Tags,
    },
    {
        scopes: [
            [
                "arguments.begin.bracket.round.c",
                "arguments.end.bracket.round.c",
                "parens.begin.bracket.round.c",
                "parens.end.bracket.round.c",
                "parameters.begin.bracket.round.c",
                "parameters.end.bracket.round.c",
            ].map(x => `punctuation.section.${x}`),
            // "punctuation.section.arguments.begin.bracket.round.c",
            // "punctuation.section.arguments.end.bracket.round.c",
            // "punctuation.section.parens.begin.bracket.round.c",
            // "punctuation.section.parens.end.bracket.round.c",
            // "punctuation.section.parameters.begin.bracket.round.c",
            // "punctuation.section.parameters.end.bracket.round.c",
            // "meta.function-call.c punctuation.separator.delimiter.c",
            "punctuation.separator.delimiter.c",
        ],
        foreground: ThemeColor.Foreground,
    },
    {
        scopes: [
            // "meta.function.c",
            "constant.other.variable.mac-classic.c",
            "string.quoted.double.include.c",
            "string.quoted.other.lt-gt.include.c",
            "meta.preprocessor.include.c string.quoted.other.lt-gt.include.c",
        ],
        foreground: ThemeColor.Variables,
    },
    {
        scopes: [
            "punctuation.separator.pointer-access.c",
            "keyword.control.directive.include.c",
        ],
        foreground: ThemeColor.FlowControl,
    },
    {
        scopes: [
            "storage.type.c",
            "support.type.mac-classic.c",
        ],
        foreground: ThemeColor.Types,
    },
    {
        scopes: [
            "constant.other.placeholder.c",
            "constant.language.c",
            "keyword.operator.sizeof.c",
        ],
        foreground: ThemeColor.Keywords,
    },
]
