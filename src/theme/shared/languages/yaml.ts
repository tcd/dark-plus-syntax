import { TextMateRuleData, ThemeColor } from "@types"

export const yaml: TextMateRuleData[] = [
    {
        scopes: [
            "comment.line.number-sign.yaml",
        ],
        foreground: ThemeColor.Comments,
    },
    // {
    //     scopes: [
    //         "punctuation.definition.block.sequence.item.yaml", // `-`
    //         "punctuation.separator.key-value.mapping.yaml",    // `:`
    //     ],
    //     foreground: ThemeColor.Foreground,
    // },
    {
        scopes: [
            "constant.other.timestamp.yaml",
        ],
        foreground: ThemeColor.Numbers,
    },
    {
        scopes: [
            "punctuation.definition.sequence.begin.yaml", // Square brackets
            "punctuation.definition.sequence.end.yaml",   // Square brackets
            "punctuation.definition.mapping.begin.yaml",  // Curly brackets
            "punctuation.definition.mapping.end.yaml",    // Curly brackets
            "punctuation.separator.sequence.yaml",        // Commas
            "punctuation.separator.mapping.yaml",         // Commas
        ],
        foreground: ThemeColor.Foreground,
    },
    {
        scopes: [
            "storage.type.tag-handle.yaml",
            "meta.property.yaml",
            "punctuation.definition.alias.yaml",    // "*" - (<<: *user_defaults)
            "keyword.control.flow.alias.yaml",      // "*" - (<<: *user_defaults)
            "variable.other.alias.yaml",            // "user_defaults" - (<<: *user_defaults)
            // "entity.name.type.anchor.yaml",         // "Default" - (default: &default)
        ],
        foreground: ThemeColor.Types,
    },
    {
        scopes: [
            // "constant.language.boolean.yaml", // `true`, `false`, `yes`, `no`, `on`, and `off`
            // "constant.language.null.yaml", // `null` and `~`
            "keyword.control.property.anchor.yaml",  //  "&" - (default: &default)
            "constant.language.merge.yaml",          // "<<" - (<<: *user_defaults)
            "punctuation.definition.alias.yaml",     // "*" - (<<: *user_defaults)
            "keyword.control.flow.alias.yaml",       // "*" (<<: *user_defaults)
            "support.other.directive.reserved.yaml",       // "RESERVED" - (%RESERVED name parameter #comment)
            "punctuation.definition.directive.begin.yaml", // "%" - (%RESERVED name parameter #comment)
        ],
        foreground: ThemeColor.Keywords,
    },
    {
        scopes: [
            "constant.language.boolean.yaml", // `true`, `false`, `yes`, `no`, `on`, and `off`
            "constant.language.null.yaml",    // `null` and `~`
        ],
        foreground: ThemeColor.Keywords,
        fontStyle:  "italic",
    },
    // {
    //     scopes: ["entity.name.tag.yaml"],
    //     foreground: ThemeColor.Variables,
    // },
    {
        scopes: [
            "entity.other.document.begin.yaml", // `---`
            "entity.other.document.end.yaml",   // `...`
            "keyword.control.flow.block-scalar.literal.yaml", // `|`
            "storage.modifier.chomping-indicator.yaml", // (`-` in `|-`) or (`+` in `|+`)
            "punctuation.definition.block.sequence.item.yaml", // `-`
            "punctuation.separator.key-value.mapping.yaml", // `:`
        ],
        foreground: ThemeColor.FlowControl,
    },
    {
        scopes: [
            "string.unquoted.plain.out.yaml entity.name.tag.yaml",
            "meta.flow-pair.key.yaml string.unquoted.plain.in.yaml entity.name.tag.yaml",
            "meta.flow-mapping.yaml string.quoted.double.yaml",
        ],
        foreground: ThemeColor.Variables,
    },
    {
        scopes: [
            "source.yaml string.quoted.double.yaml",
            "meta.flow-pair.value.yaml string.quoted.double.yaml",
        ],
        foreground: ThemeColor.Strings,
    },
]
