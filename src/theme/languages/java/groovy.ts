import { TextMateRuleData, SemanticColor } from "@lib"

export const groovy: TextMateRuleData[] = [
    {
        scopes: [
            // "constant.other.key.groovy",
            "source.groovy.embedded.source",
        ],
        foreground: SemanticColor.Variables,
    },
    {
        scopes: [
            "keyword.operator.assignment.groovy",
            "keyword.operator.arithmetic.groovy",
            "keyword.control.exception.groovy",
        ],
        foreground: SemanticColor.FlowControl,
    },
    {
        scopes: [
            "punctuation.section.embedded.groovy",
            "constant.other.groovy",
        ],
        foreground: SemanticColor.Keywords,
    },
    {
        scopes: [
            "meta.method.groovy",
            // "meta.method-call.groovy",
        ],
        foreground: SemanticColor.Functions,
    },
    {
        scopes: [
            "constant.character.escape.groovy",
        ],
        foreground: SemanticColor.Chars,
    },
]
