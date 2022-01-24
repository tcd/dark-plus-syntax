import { TextMateRuleData, SemanticColor } from "@lib"

export const rust: TextMateRuleData[] = [
    {
        scopes: [
            "entity.name.type.param.rust punctuation.other.comma.rust",
            "keyword.operator.path.rust",
        ],
        foreground: "#d4d4d4",
    },
    {
        scopes: [
            "meta.attribute.rust",
            "comment.line.documentation.rust",
        ],
        foreground: "#608b4e",
    },
    {
        scopes: [
            "keyword.operator.misc.rust",
            "keyword.operator.sigil.rust",
        ],
        foreground: "#c586c0",
    },
    {
        scopes: [
            "storage.modifier.lifetime.rust",
            "entity.name.lifetime.rust",
            "constant.other.placeholder.rust",
        ],
        // fontStyle: "italic",
        foreground: "#9cdcfe",
    },
    {
        scopes: [
            "string.quoted.single.rust", // DEPRECATED
            "constant.character.rust",
        ],
        foreground: "#d7ba7d",
    },
    {
        scopes: [
            // "constant.other.placeholder.rust", // Deprecated
            "support.constant.core.rust",
            "variable.language.ignored.rust",
        ],
        foreground: "#569cd6",
    },
    {
        scopes: [
            "variable.language.rust",
            "variable.language.self.rust",
        ],
        foreground: "#569cd6",
        fontStyle:  "italic",
    },
    {
        scopes: [
            "entity.name.type.param.rust punctuation.definition.type.rust",
        ],
        foreground: "#808080",
    },
    {
        scopes: [
            "entity.name.type.rust",
            "storage.type.core.rust",
            "storage.class.std.rust",
            "punctuation.separator.type.rust",
            "keyword.operator.return-type.rust",
            "meta.type_params.rust",
            // "keyword.operator.path.rust",
        ],
        foreground: "#4ec9b0",
    },
]
