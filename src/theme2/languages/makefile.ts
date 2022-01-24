import { TextMateRuleData, SemanticColor } from "@lib"

export const makefile: TextMateRuleData[] = [
    {
        scopes: [
            "comment.line.number-sign.makefile",
        ],
        foreground: "#608b4e",
    },
    {
        scopes: [
            "variable.other.makefile",
        ],
        foreground: "#9cdcfe",
    },
    {
        scopes: [
            "variable.language.makefile",
        ],
        foreground: "#569cd6",
    },
    {
        scopes: [
            "entity.name.function.target.makefile",
            "constant.character.escape.continuation.makefile",
        ],
        foreground: "#dcdcaa",
    },
    {
        scopes: [
            "punctuation.separator.key-value.makefile",
            "support.function.foreach.makefile",
            "keyword.control.ifeq.makefile",
            "keyword.control.endif.makefile",
            "constant.character.escape.continuation.makefile",
        ],
        foreground: "#c586c0",
    },
    // =========================================================================
    // CMake
    // =========================================================================
    {
        scopes: [
            "storage.source.cmake",
        ],
        foreground: "#9cdcfe",
    },
]
