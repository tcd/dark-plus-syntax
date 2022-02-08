import { TextMateRuleData, ThemeColor } from "@types"

export const makefile: TextMateRuleData[] = [
    {
        scopes: [
            "comment.line.number-sign.makefile",
        ],
        foreground: ThemeColor.DocComments,
    },
    {
        scopes: [
            "variable.other.makefile",
        ],
        foreground: ThemeColor.Variables,
    },
    {
        scopes: [
            "variable.language.makefile",
        ],
        foreground: ThemeColor.Keywords,
    },
    {
        scopes: [
            "entity.name.function.target.makefile",
            "constant.character.escape.continuation.makefile",
        ],
        foreground: ThemeColor.Functions,
    },
    {
        scopes: [
            "punctuation.separator.key-value.makefile",
            "support.function.foreach.makefile",
            "keyword.control.ifeq.makefile",
            "keyword.control.endif.makefile",
            "constant.character.escape.continuation.makefile",
        ],
        foreground: ThemeColor.FlowControl,
    },
    // =========================================================================
    // CMake
    // =========================================================================
    {
        scopes: [
            "storage.source.cmake",
        ],
        foreground: ThemeColor.Variables,
    },
]
