import { TextMateRuleData, SemanticColor } from "@lib"

export const lisp: TextMateRuleData[] = [
    {
        scopes: [
            "storage.type.function-type.lisp",
            "constant.language.lisp",
        ],
        foreground: "#569cd6",
    },
    {
        scopes: [
            "keyword.constant.lisp",
        ],
        foreground: "#9cdcfe",
    },
    {
        scopes: [
            "keyword.control.lisp",
        ],
        foreground: "#c586c0",
    },
]
