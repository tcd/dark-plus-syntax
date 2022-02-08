import { TextMateRuleData, ThemeColor } from "@types"

export const python: TextMateRuleData[] = [
    {
        scopes: [
            "string.quoted.docstring.multi.python",
            // "string.quoted.docstring.single.python",
            "string.quoted.docstring.multi.python keyword.control.flow.python",
        ],
        foreground: ThemeColor.DocComments,
    },
    {
        scopes: [
            "variable.language.special.self.python",
            "support.function.magic.python",
            "support.variable.magic.python",
            "storage.type.string.python",
            "variable.parameter.function.language.special.self.python",
            "meta.function.decorator.python support.type.python",
        ],
        fontStyle: "italic",
    },
    {
        scopes: [
            "meta.function-call.arguments.python",
            "keyword.operator.assignment.python",
            "punctuation.separator.period.python",
            "punctuation.separator.element.python",
            "punctuation.separator.dict.python",
            "punctuation.separator.parameters.python",
            "punctuation.separator.arguments.python",
            "punctuation.section.class.begin.python",
            "punctuation.section.function.begin.python",
            "punctuation.section.function.end.python",
            "punctuation.definition.inheritance.begin.python",
            "punctuation.definition.inheritance.end.python",
            "punctuation.definition.parameters.begin.python",
            "punctuation.definition.parameters.end.python",
            "punctuation.definition.arguments.begin.python",
            "punctuation.definition.arguments.end.python",
            "punctuation.definition.list.begin.python",
            "punctuation.definition.list.end.python",
            "punctuation.definition.dict.begin.python",
            "punctuation.definition.dict.end.python",
            "punctuation.parenthesis.begin.python",
            "punctuation.parenthesis.end.python",
            // "punctuation.separator.colon.python",
            "punctuation.separator.dict.python",
            "punctuation.section.function.begin.python",
            "meta.function.parameters.begin.python",
            "meta.function.parameters.end.python",
            // "meta.function.parameters.python",
        ],
        foreground: ThemeColor.Foreground,
    },
    {
        scopes: [
            "punctuation.section.function.begin.python",
            "punctuation.section.class.begin.python",
            "variable.language.special.self.python",
            "variable.parameter.function.language.special.self.python",
            "constant.character.format.placeholder.other.python",
            "keyword.operator.unpacking.parameter.python",
            "keyword.operator.unpacking.arguments.python",
        ],
        foreground: ThemeColor.Keywords,
    },
    {
        scopes: [
            "meta.function-call.python",
            "meta.function-call.generic.python",
            "meta.function.decorator.python support.type.python",
            "entity.name.function.decorator.python",
            "meta.function.decorator.python support.type.python",
        ],
        foreground: ThemeColor.Functions,
    },
    {
        scopes: [
            "variable.parameter.function-call.python",
            "meta.structure.dictionary.key.python",
            "meta.function-call.arguments.python",
            "meta.function.parameters.python",
            // "meta.item-access.python",
            "constant.other.caps.python",
            "meta.attribute.python",
        ],
        foreground: ThemeColor.Variables,
    },
    {
        scopes: [
            "support.type.python",
            "entity.name.type.class.python",
            "punctuation.separator.annotation.python",
            "punctuation.separator.annotation.result.python",
        ],
        foreground: ThemeColor.Types,
    },
    {
        scopes: [
            "punctuation.separator.period.python",
            "keyword.operator.comparison.python",
            "keyword.operator.assignment.python",
            "keyword.operator.logical.python",
            "punctuation.separator.slice.python",
            "punctuation.separator.colon.python",
        ],
        foreground: ThemeColor.FlowControl,
    },
    {
        scopes: [
            "constant.character.escape.python",
            "string.quoted.binary.single.python",
        ],
        foreground: ThemeColor.Chars,
    },
]