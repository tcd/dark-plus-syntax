import { TextMateRuleData, SemanticColor } from "@types"

export const makefile: TextMateRuleData[] = [
    {
        scopes: [
            "comment.line.number-sign.makefile",
        ],
        foreground: SemanticColor.DocComments,
    },
    {
        scopes: [
            "variable.other.makefile",
        ],
        foreground: SemanticColor.Variables,
    },
    {
        scopes: [
            "variable.language.makefile",
        ],
        foreground: SemanticColor.Keywords,
    },
    {
        scopes: [
            "entity.name.function.target.makefile",
            "constant.character.escape.continuation.makefile",
        ],
        foreground: SemanticColor.Functions,
    },
    {
        scopes: [
            "punctuation.separator.key-value.makefile",
            "support.function.foreach.makefile",
            "keyword.control.ifeq.makefile",
            "keyword.control.endif.makefile",
            "constant.character.escape.continuation.makefile",
        ],
        foreground: SemanticColor.FlowControl,
    },
    // =========================================================================
    // CMake
    // =========================================================================
    {
        scopes: [
            "storage.source.cmake",
        ],
        foreground: SemanticColor.Variables,
    },
]
