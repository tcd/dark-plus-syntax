import { TextMateRuleData, SemanticColor } from "@lib"

export const toml: TextMateRuleData[] = [
    {
        scope:    ["keyword.key.toml"],
        foreground: "#9cdcfe",
    },
    {
        scope:    ["constant.other.datetime-with-timezone.toml"],
        foreground: "#b5cea8",
    },
    {
        scopes: [
            "meta.tag.table.toml",
            "punctuation.definition.keyValuePair.toml",
        ],
        foreground: "#c586c0",
    },
    {
        scopes: [
            "entity.other.attribute-name.table.array.toml",
            "entity.other.attribute-name.table.toml",
            "constant.other.boolean.toml",
        ],
        foreground: "#569cd6",
    },
    {
        scopes: [
            "source.toml",
            "punctuation.definition.table.toml",
            "punctuation.definition.array.toml",
            "punctuation.definition.table.array.toml",
        ],
        foreground: "#808080",
    },
]
