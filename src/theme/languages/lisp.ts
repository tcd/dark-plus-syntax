import { TextMateRuleData, SemanticColor } from "@lib"

export const lisp: TextMateRuleData[] = [
    {
        scopes: [
            "storage.type.function-type.lisp",
            "constant.language.lisp",
        ],
        foreground: SemanticColor.Keywords,
    },
    {
        scopes: [
            "keyword.constant.lisp",
        ],
        foreground: SemanticColor.Variables,
    },
    {
        scopes: [
            "keyword.control.lisp",
        ],
        foreground: SemanticColor.FlowControl,
    },
]
