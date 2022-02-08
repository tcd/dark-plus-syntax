import { TextMateRuleData, ThemeColor } from "@types"

export const groovy: TextMateRuleData[] = [
    {
        scopes: [
            // "constant.other.key.groovy",
            "source.groovy.embedded.source",
        ],
        foreground: ThemeColor.Variables,
    },
    {
        scopes: [
            "keyword.operator.assignment.groovy",
            "keyword.operator.arithmetic.groovy",
            "keyword.control.exception.groovy",
        ],
        foreground: ThemeColor.FlowControl,
    },
    {
        scopes: [
            "punctuation.section.embedded.groovy",
            "constant.other.groovy",
        ],
        foreground: ThemeColor.Keywords,
    },
    {
        scopes: [
            "meta.method.groovy",
            // "meta.method-call.groovy",
        ],
        foreground: ThemeColor.Functions,
    },
    {
        scopes: [
            "constant.character.escape.groovy",
        ],
        foreground: ThemeColor.Chars,
    },
    {
        "name":  "Type declaration and references",
        scopes: [
            "storage.type.groovy",
            "storage.type.annotation.groovy",
            "storage.type.parameters.groovy",
            "storage.type.generic.groovy",
            "storage.type.object.array.groovy",
            "storage.type.primitive.array.groovy",
            "storage.type.primitive.groovy",
        ],
        foreground: ThemeColor.Types,
    },
]
