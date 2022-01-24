import { TextMateRuleData, SemanticColor } from "@lib"

export const groovy: TextMateRuleData[] = [
    {
        scopes: [
            // "constant.other.key.groovy",
            "source.groovy.embedded.source",
        ],
        foreground: "#9cdcfe",
    },
    {
        scopes: [
            "keyword.operator.assignment.groovy",
            "keyword.operator.arithmetic.groovy",
            "keyword.control.exception.groovy",
        ],
        foreground: "#c586c0",
    },
    {
        scopes: [
            "punctuation.section.embedded.groovy",
            "constant.other.groovy",
        ],
        foreground: "#569cd6",
    },
    {
        scopes: [
            "meta.method.groovy",
            // "meta.method-call.groovy",
        ],
        foreground: "#dcdcaa",
    },
    {
        scopes: [
            "constant.character.escape.groovy",
        ],
        foreground: "#d7ba7d",
    },
]
