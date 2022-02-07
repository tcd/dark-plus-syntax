import { TextMateRuleData, SemanticColor } from "@types"

/**
 * ## Extensions
 *
 * - [tamasfe/taplo](https://github.com/tamasfe/taplo)
 */
export const toml: TextMateRuleData[] = [
    {
        scopes: [
            "punctuation.definition.array.toml",
            "punctuation.separator.array.toml",
        ],
        foreground: SemanticColor.Foreground,
    },
    {
        scopes: [
            "keyword.key.toml",
        ],
        foreground: SemanticColor.Variables,
    },
    {
        scopes: [
            "constant.other.datetime-with-timezone.toml",
            "constant.other.time.datetime.offset.toml",
        ],
        foreground: SemanticColor.Numbers,
    },
    {
        scopes: [
            "meta.tag.table.toml",
            "punctuation.eq.toml",
            "punctuation.definition.keyValuePair.toml",
        ],
        foreground: SemanticColor.FlowControl,
    },
    {
        scopes: [
            "entity.other.attribute-name.table.array.toml",
            "entity.other.attribute-name.table.toml",
            "constant.other.boolean.toml",
        ],
        foreground: SemanticColor.Keywords,
    },
    {
        scopes: [
            // "source.toml",
            "punctuation.definition.table.toml",
            "punctuation.definition.array.table.toml",
        ],
        foreground: SemanticColor.Tags,
    },
]
