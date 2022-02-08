import { TextMateRuleData, ThemeColor } from "@types"

export const todoTxt: TextMateRuleData[] = [
    {
        scopes: [
            "meta.item.done.todo",
            "meta.item.done.todo variable.priority.todo",
            "meta.item.done.todo variable.other",
            "meta.item.done.todo constant.numeric.date.todo",
            "meta.item.done.todo string.quoted.single.todo",
            "meta.item.done.todo string.quoted.double.todo",
        ],
        foreground: ThemeColor.DocComments,
    },
    {
        scopes: [
            "constant.numeric.date.todo",
        ],
        foreground: ThemeColor.Numbers,
    },
    {
        scopes: [
            "string.quoted.single.todo",
            "string.quoted.double.todo",
        ],
        foreground: ThemeColor.Types,
    },
    {
        scopes: [
            "meta.item.priority.a.todo",
        ],
        foreground: ThemeColor.Error,
    },
    {
        scopes: [
            "meta.item.priority.b.todo",
        ],
        foreground: ThemeColor.RegExp,
    },
    {
        scopes: [
            "meta.item.priority.c.todo",
        ],
        foreground: ThemeColor.Strings,
    },
    {
        scopes: [
            "meta.item.priority.d.todo",
        ],
        foreground: ThemeColor.Chars,
    },
    {
        scopes: [
            "meta.item.priority.e.todo",
        ],
        foreground: ThemeColor.Functions,
    },
]
