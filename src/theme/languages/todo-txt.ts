import { TextMateRuleData, SemanticColor } from "@types"

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
        foreground: SemanticColor.DocComments,
    },
    {
        scopes: [
            "constant.numeric.date.todo",
        ],
        foreground: SemanticColor.Numbers,
    },
    {
        scopes: [
            "string.quoted.single.todo",
            "string.quoted.double.todo",
        ],
        foreground: SemanticColor.Types,
    },
    {
        scopes:    ["meta.item.priority.a.todo"],
        foreground: SemanticColor.Errors,
    },
    {
        scopes:    ["meta.item.priority.b.todo"],
        foreground: SemanticColor.RegExp,
    },
    {
        scopes:    ["meta.item.priority.c.todo"],
        foreground: SemanticColor.Strings,
    },
    {
        scopes:    ["meta.item.priority.d.todo"],
        foreground: SemanticColor.Chars,
    },
    {
        scopes:    ["meta.item.priority.e.todo"],
        foreground: SemanticColor.Functions,
    },
]
