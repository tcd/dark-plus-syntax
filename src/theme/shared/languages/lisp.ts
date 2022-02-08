import { TextMateRuleData, ThemeColor } from "@types"

export const lisp: TextMateRuleData[] = [
    {
        scopes: [
            "storage.type.function-type.lisp",
            "constant.language.lisp",
        ],
        foreground: ThemeColor.Keywords,
    },
    {
        scopes: [
            "keyword.constant.lisp",
        ],
        foreground: ThemeColor.Variables,
    },
    {
        scopes: [
            "keyword.control.lisp",
        ],
        foreground: ThemeColor.FlowControl,
    },
]
