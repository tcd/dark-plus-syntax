import { TextMateRuleData, SemanticColor } from "@types"

export const c: TextMateRuleData[] = [
    {
        scopes: [
            "support.function.C99.c",
            "entity.name.function.c",
            // "meta.function-call.c",
        ],
        foreground: SemanticColor.Functions,
    },
    {
        scopes: [
            "comment.block.c",
            "punctuation.terminator.statement.c",
        ],
        foreground: SemanticColor.Comments,
    },
    {
        scopes: [
            "string.quoted.single.c",
        ],
        foreground: SemanticColor.Chars,
    },
    {
        scopes: [
            "meta.preprocessor.include.c string.quoted.other.lt-gt.include.c punctuation.definition.string.begin.c",
            "meta.preprocessor.include.c string.quoted.other.lt-gt.include.c punctuation.definition.string.end.c",
        ],
        foreground: SemanticColor.Tags,
    },
    {
        scopes: [
            "punctuation.section.arguments.begin.bracket.round.c",
            "punctuation.section.arguments.end.bracket.round.c",
            "punctuation.section.parens.begin.bracket.round.c",
            "punctuation.section.parens.end.bracket.round.c",
            "punctuation.section.parameters.begin.bracket.round.c",
            "punctuation.section.parameters.end.bracket.round.c",
            // "meta.function-call.c punctuation.separator.delimiter.c",
            "punctuation.separator.delimiter.c",

        ],
        foreground: SemanticColor.Foreground,
    },
    {
        scopes: [
            // "meta.function.c",
            "constant.other.variable.mac-classic.c",
            "string.quoted.double.include.c",
            "string.quoted.other.lt-gt.include.c",
            "meta.preprocessor.include.c string.quoted.other.lt-gt.include.c",
        ],
        foreground: SemanticColor.Variables,
    },
    {
        scopes: [
            "punctuation.separator.pointer-access.c",
            "keyword.control.directive.include.c",
        ],
        foreground: SemanticColor.FlowControl,
    },
    {
        scopes: [
            "storage.type.c",
            "support.type.mac-classic.c",
        ],
        foreground: SemanticColor.Types,
    },
    {
        scopes: [
            "constant.other.placeholder.c",
            "constant.language.c",
            "keyword.operator.sizeof.c",
        ],
        foreground: SemanticColor.Keywords,
    },
]
