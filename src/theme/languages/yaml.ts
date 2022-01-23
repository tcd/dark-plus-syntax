export const yaml = [
    {
        "scope": [
            "comment.line.number-sign.yaml",
            "punctuation.separator.key-value.mapping.yaml",    // `:`
        ],
        "settings": {"foreground": "#505050"},
    },
    // {
    //     "scope": [
    //         "punctuation.definition.block.sequence.item.yaml", // `-`
    //         "punctuation.separator.key-value.mapping.yaml",    // `:`
    //     ],
    //     "settings": {"foreground": "#d4d4d4d4"},
    // },
    {
        "scope": [
            "constant.other.timestamp.yaml",
        ],
        "settings": {"foreground": "#b5cea8"},
    },

    {
        "scope": [
            "punctuation.definition.sequence.begin.yaml", // Square brackets
            "punctuation.definition.sequence.end.yaml",   // Square brackets
            "punctuation.definition.mapping.begin.yaml",  // Curly brackets
            "punctuation.definition.mapping.end.yaml",    // Curly brackets
            "punctuation.separator.sequence.yaml",        // Commas
            "punctuation.separator.mapping.yaml",         // Commas
        ],
        "settings": {"foreground": "#d4d4d4"},
    },
    {
        "scope": [
            "storage.type.tag-handle.yaml",
            "meta.property.yaml",
            "punctuation.definition.alias.yaml",    // "*" - (<<: *user_defaults)
            "keyword.control.flow.alias.yaml",      // "*" - (<<: *user_defaults)
            "variable.other.alias.yaml",            // "user_defaults" - (<<: *user_defaults)
            // "entity.name.type.anchor.yaml",         // "Default" - (default: &default)
        ],
        "settings": {"foreground": "#4ec9b0"},
    },
    {
        "scope": [
            // "constant.language.boolean.yaml", // `true`, `false`, `yes`, `no`, `on`, and `off`
            // "constant.language.null.yaml", // `null` and `~`
            "keyword.control.property.anchor.yaml",  //  "&" - (default: &default)
            "constant.language.merge.yaml",          // "<<" - (<<: *user_defaults)
            "punctuation.definition.alias.yaml",     // "*" - (<<: *user_defaults)
            "keyword.control.flow.alias.yaml",       // "*" (<<: *user_defaults)
            "support.other.directive.reserved.yaml",       // "RESERVED" - (%RESERVED name parameter #comment)
            "punctuation.definition.directive.begin.yaml", // "%" - (%RESERVED name parameter #comment)
        ],
        "settings": {"foreground": "#569cd6"},
    },
    {
        "scope": [
            "constant.language.boolean.yaml", // `true`, `false`, `yes`, `no`, `on`, and `off`
            "constant.language.null.yaml",    // `null` and `~`
        ],
        "settings": {
            "foreground": "#569cd6",
            "fontStyle": "italic",
        },
    },
    // {
    //     "scope": ["entity.name.tag.yaml"],
    //     "settings": {"foreground": "#9cdcfe"},
    // },
    {
        "scope": [
            "entity.other.document.begin.yaml", // `---`
            "entity.other.document.end.yaml",   // `...`
            "keyword.control.flow.block-scalar.literal.yaml", // `|`
            "storage.modifier.chomping-indicator.yaml", // (`-` in `|-`) or (`+` in `|+`)
            "punctuation.definition.block.sequence.item.yaml", // `-`
        ],
        "settings": { "foreground": "#c586c0" },
    },
]
