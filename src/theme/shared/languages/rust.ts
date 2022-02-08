import { TextMateRuleData, ThemeColor } from "@types"

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
        foreground: ThemeColor.Noise,
    },
    {
        scopes: [
            "meta.attribute.rust",
            "comment.line.documentation.rust",
        ],
        foreground: ThemeColor.DocComments,
    },
    {
        scopes: [
            "keyword.operator.misc.rust",
            "keyword.operator.sigil.rust",
        ],
        foreground: ThemeColor.FlowControl,
    },
    {
        scopes: [
            "storage.modifier.lifetime.rust",
            "entity.name.lifetime.rust",
            "constant.other.placeholder.rust",
        ],
        // fontStyle: "italic",
        foreground: ThemeColor.Variables,
    },
    {
        scopes: [
            "string.quoted.single.rust", // DEPRECATED
            "constant.character.rust",
        ],
        foreground: ThemeColor.Chars,
    },
    {
        scopes: [
            // "constant.other.placeholder.rust", // Deprecated
            "support.constant.core.rust",
            "variable.language.ignored.rust",
            "punctuation.brackets.angle.rust",
        ],
        foreground: ThemeColor.Keywords,
    },
    {
        scopes: [
            "variable.language.rust",
            "variable.language.self.rust",
        ],
        foreground: ThemeColor.Keywords,
        fontStyle:  "italic",
    },
    {
        scopes: [
            "entity.name.type.param.rust punctuation.definition.type.rust",
        ],
        foreground: ThemeColor.Tags,
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
        foreground: ThemeColor.Types,
    },
    {
        scopes: [
            "entity.name.type.param.rust punctuation.other.comma.rust",
            "keyword.operator.path.rust",
        ],
        foreground: ThemeColor.Foreground,
    },
]
