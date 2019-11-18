module.exports = [
    {
        "scope": [
            "punctuation.definition.variable.begin.gitignore",
            "punctuation.definition.variable.end.gitignore",
        ],
        "settings": {"foreground": "#505050"},
    },
    {
        "scope": "support.function.git-rebase",
        "settings": { "foreground": "#9cdcfe" },
    },
    {
        "scope": "constant.sha.git-rebase",
        "settings": { "foreground": "#b5cea8" },
    },
    // =========================================================================
    // Properties/INI
    // =========================================================================
    {
        "scope": [
            "comment.line.number-sign.ini",
            "punctuation.definition.entity.ini",
        ],
        "settings": {"foreground": "#505050"},
    },
    {
        "scope": ["keyword.other.definition.ini"],
        "settings": {"foreground": "#9cdcfe"},
    },
    // {
    //     "scope": ["entity.name.section.group-title.ini"],
    //     "settings": {"foreground": "#569cd6"},
    // },
    {
        "scope": ["punctuation.separator.key-value.ini"],
        "settings": {"foreground": "#c586c0"},
    },
    // =========================================================================
    // YAML
    // =========================================================================
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
    // =========================================================================
    // TOML
    // =========================================================================
    {
        "scope": ["keyword.key.toml"],
        "settings": {"foreground": "#9cdcfe"},
    },
    {
        "scope": ["constant.other.datetime-with-timezone.toml"],
        "settings": {"foreground": "#b5cea8"},
    },
    {
        "scope": [
            "meta.tag.table.toml",
            "punctuation.definition.keyValuePair.toml",
        ],
        "settings": {"foreground": "#c586c0"},
    },
    {
        "scope": [
            "entity.other.attribute-name.table.array.toml",
            "entity.other.attribute-name.table.toml",
            "constant.other.boolean.toml",
        ],
        "settings": {"foreground": "#569cd6"},
    },
    {
        "scope": [
            "source.toml",
            "punctuation.definition.table.toml",
            "punctuation.definition.array.toml",
            "punctuation.definition.table.array.toml",
        ],
        "settings": {"foreground": "#808080"},
    },
    // =========================================================================
    // Lisp
    // =========================================================================
    {
        "scope": [
            "storage.type.function-type.lisp",
            "constant.language.lisp",
        ],
        "settings": {"foreground": "#569cd6"},
    },
    {
        "scope": ["keyword.constant.lisp"],
        "settings": {"foreground": "#9cdcfe"},
    },
    {
        "scope": ["keyword.control.lisp"],
        "settings": {"foreground": "#c586c0"},
    },
    // =========================================================================
    // Viml
    // =========================================================================
    {
        "scope": [
            // "constant.character",
            "constant.character.map.rhs.viml",
            "constant.character.map.special.viml",
            "constant.character.map.key.viml",
            "constant.character.map.key.fn.viml",
            "constant.character.map.viml",
        ],
        "settings": {"foreground": "#d7ba7d"},
    },
    {
        "scope": ["punctuation.definition.map.viml"],
        "settings": {"foreground": "#505050"},
    },
    // =========================================================================
    // Haskell
    // =========================================================================
    // {
    //     "scope": [
    //         "constant.other.haskell",
    //     ],
    //     "settings": {"foreground": "#9cdcfe"},
    // },
    {
        "scope": [
            "meta.preprocessor.haskell",
        ],
        "settings": {"foreground": "#608b4e"},
    },
    {
        "scope": [
            "storage.type.haskell",
            "support.other.module.haskell",
        ],
        "settings": {"foreground": "#4ec9b0"},
    },
    // =========================================================================
    // Dart
    // =========================================================================
    {
        "scope": ["keyword.control.new.dart"],
        "settings": {"foreground": "#569cd6"},
    },
    {
        "scope": ["punctuation.terminator.dart"],
        "settings": {"foreground": "#505050"},
    },
    {
        "scope": ["punctuation.dot.dart"],
        "settings": {"foreground": "#c586c0"},
    },
    {
        "scope": ["meta.declaration.dart"],
        "settings": {"foreground": "#9cdcfe"},
    },
    // =========================================================================
    // Elm
    // =========================================================================
    // // {
    // //     "scope": [
    //
    // //     ],
    // //     "settings": {"foreground": "#c586c0"},
    // // },
    // {
    //     "scope": [
    //         "punctuation.separator.comma.elm",
    //         "meta.declaration.exports.elm",
    //     ],
    //     "settings": {"foreground": "#d4d4d4"},
    // },
    // {
    //     "scope": [
    //         "constant.other.elm",
    //         // "meta.declaration.module.elm meta.declaration.exports.elm",
    //     ],
    //     "settings": {"foreground": "#9cdcfe"},
    // },
    // {
    //     "scope": [
    //         "support.constant.elm",
    //     ],
    //     "settings": {"foreground": "#569cd6"},
    // },
    // {
    //     "scope": [
    //         "storage.type.elm",
    //         "support.other.module.elm",
    //         "constant.language.empty-list.elm",
    //     ],
    //     "settings": {"foreground": "#4ec9b0"},
    // },
    // =========================================================================
    // nginx
    // =========================================================================
    {
        "scope": [
            "source.nginx constant.character.brace",
            "source.nginx constant.character.paren",
        ],
        "settings": {"foreground": "#d4d4d4"},
    },
    {
        "scope": [
            "source.nginx constant.character.brace",
            "source.nginx constant.character.end",
        ],
        "settings": {"foreground": "#808080"},
    },
    // {
    //     "scope": [
    //         // "source.nginx ",
    //         "source.nginx constant.language.directive.module.events",
    //         "source.nginx constant.language.directive.module.main",
    //         "source.nginx constant.language.module.http.log",
    //         "source.nginx constant.language.module.http.fastcgi",
    //         "source.nginx constant.language.directive.module.http",
    //
    //     ],
    //     "settings": {"foreground": "#569cd6"},
    // },
    // {
    //     "scope": [
    //         // "source.nginx ",
    //         // "source.nginx constant.language.directive.module.events",
    //         // "source.nginx constant.language.module.http.log",
    //         // "source.nginx constant.language.module.http.fastcgi",
    //         // // "source.nginx constant.language.directive.module.http",
    //     ],
    //     "settings": {"foreground": "#9cdcfe"},
    // },
    // =========================================================================
    // Smarty
    // =========================================================================
    {
        "scope": [
            "support.function.built-in.smarty",
        ],
        // "settings": { "foreground": "#569cd6" },
        "settings": { "foreground": "#c586c0" },
    },
    {
        "scope": [
            "source.smarty punctuation.section.embedded.begin.smarty",
            "source.smarty punctuation.section.embedded.end.smarty",
        ],
        "settings": { "foreground": "#808080" },
    },
    {
        "scope": [
            "source.smarty",
        ],
        "settings": { "foreground": "#4ec9b0" },
    },
];

