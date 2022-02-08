import { TextMateRuleData, ThemeColor } from "@types"

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
        foreground: ThemeColor.Foreground,
    },
    {
        scopes: [
            "keyword.key.toml",
        ],
        foreground: ThemeColor.Variables,
    },
    {
        scopes: [
            "constant.other.datetime-with-timezone.toml",
            "constant.other.time.datetime.offset.toml",
        ],
        foreground: ThemeColor.Numbers,
    },
    {
        scopes: [
            "meta.tag.table.toml",
            "punctuation.eq.toml",
            "punctuation.definition.keyValuePair.toml",
        ],
        foreground: ThemeColor.FlowControl,
    },
    {
        scopes: [
            "entity.other.attribute-name.table.array.toml",
            "entity.other.attribute-name.table.toml",
            "constant.other.boolean.toml",
        ],
        foreground: ThemeColor.Keywords,
    },
    {
        scopes: [
            // "source.toml",
            "punctuation.definition.table.toml",
            "punctuation.definition.array.table.toml",
        ],
        foreground: ThemeColor.Tags,
    },
]
