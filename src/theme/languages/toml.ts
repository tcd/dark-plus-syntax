import { TextMateRuleData, SemanticColor } from "@lib"

export const toml: TextMateRuleData[] = [
    {
        scopes:    ["keyword.key.toml"],
        foreground: SemanticColor.Variables,
    },
    {
        scopes:    ["constant.other.datetime-with-timezone.toml"],
        foreground: SemanticColor.Numbers,
    },
    {
        scopes: [
            "meta.tag.table.toml",
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
            "source.toml",
            "punctuation.definition.table.toml",
            "punctuation.definition.array.toml",
            "punctuation.definition.table.array.toml",
        ],
        foreground: SemanticColor.Tags,
    },
]
