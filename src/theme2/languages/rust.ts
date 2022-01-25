import { TextMateRuleData, SemanticColor } from "@lib"

export const rust: TextMateRuleData[] = [
    {
        scopes: [
            "entity.name.type.param.rust punctuation.other.comma.rust",
            "keyword.operator.path.rust",
        ],
        foreground: SemanticColor.Foreground,
    },
    {
        scopes: [
            "meta.attribute.rust",
            "comment.line.documentation.rust",
        ],
        foreground: SemanticColor.DocComments,
    },
    {
        scopes: [
            "keyword.operator.misc.rust",
            "keyword.operator.sigil.rust",
        ],
        foreground: SemanticColor.FlowControl,
    },
    {
        scopes: [
            "storage.modifier.lifetime.rust",
            "entity.name.lifetime.rust",
            "constant.other.placeholder.rust",
        ],
        // fontStyle: "italic",
        foreground: SemanticColor.Variables,
    },
    {
        scopes: [
            "string.quoted.single.rust", // DEPRECATED
            "constant.character.rust",
        ],
        foreground: SemanticColor.Chars,
    },
    {
        scopes: [
            // "constant.other.placeholder.rust", // Deprecated
            "support.constant.core.rust",
            "variable.language.ignored.rust",
        ],
        foreground: SemanticColor.Keywords,
    },
    {
        scopes: [
            "variable.language.rust",
            "variable.language.self.rust",
        ],
        foreground: SemanticColor.Keywords,
        fontStyle:  "italic",
    },
    {
        scopes: [
            "entity.name.type.param.rust punctuation.definition.type.rust",
        ],
        foreground: SemanticColor.Tags,
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
        foreground: SemanticColor.Types,
    },
]
