import { TextMateRuleData, SemanticColor } from "@lib"

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
        foreground: "#608b4e",
    },
    {
        scopes: [
            "constant.numeric.date.todo",
        ],
        foreground: "#b5cea8",
    },
    {
        scopes: [
            "string.quoted.single.todo",
            "string.quoted.double.todo",
        ],
        foreground: "#4ec9b0",
    },
    // {
    //     scopes: [
    //     ],
    //     foreground: "#606060",
    // },
    {
        scope:    ["meta.item.priority.a.todo"],
        foreground: "#f44747",
    },
    {
        scope:    ["meta.item.priority.b.todo"],
        foreground: "#d16969",
    },
    {
        scope:    ["meta.item.priority.c.todo"],
        foreground: "#ce9178",
    },
    {
        scope:    ["meta.item.priority.d.todo"],
        foreground: "#d7ba7d",
    },
    {
        scope:    ["meta.item.priority.e.todo"],
        foreground: "#dcdcaa",
    },
]
