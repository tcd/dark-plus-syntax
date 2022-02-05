import { TextMateRuleData, SemanticColor } from "@lib"

/**
 * ## Extensions
 *
 * - [dustypomerleau/rust-syntax](https://github.com/dustypomerleau/rust-syntax)
 */
export const rust: TextMateRuleData[] = [
    {
        scopes: [
            "punctuation.semi.rust",
        ],
        foreground: SemanticColor.Noise,
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
            "punctuation.brackets.angle.rust",
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
            "entity.name.module.rust",
            "storage.type.core.rust",
            "storage.class.std.rust",
            "punctuation.separator.type.rust",
            "keyword.operator.return-type.rust",
            "meta.type_params.rust",
            // "keyword.operator.path.rust",
            // "keyword.operator.namespace.rust",
            "entity.name.namespace.rust",
            "meta.import.rust",
            "meta.function.definition.rust keyword.operator.key-value.rust",
            "keyword.operator.arrow.skinny.rust",
            "punctuation.definition.lifetime.rust", // Not sure on this one
        ],
        foreground: SemanticColor.Types,
    },
    {
        scopes: [
            "entity.name.type.param.rust punctuation.other.comma.rust",
            "keyword.operator.path.rust",
        ],
        foreground: SemanticColor.Foreground,
    },
]
