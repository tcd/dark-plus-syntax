module.exports = [
    // =========================================================================
    // Rust
    // =========================================================================
    {
        "scope": ["meta.attribute.rust"],
        "settings": {"foreground": "#608b4e"},
    },
    {
        "scope": ["keyword.operator.misc.rust"],
        "settings": {"foreground": "#c586c0"},
    },
    {
        "scope": ["entity.name.lifetime.rust"],
        "settings": {"fontStyle": "italic"},
    },
    {
        "scope": ["string.quoted.single.rust"],
        "settings": {"foreground": "#d7ba7d"},
    },
    {
        "scope": [
            "constant.other.placeholder.rust",
        ],
        "settings": {"foreground": "#569cd6"},
    },
    {
        "scope": [
            "variable.language.rust",
            "variable.language.self.rust",
            "support.constant.core.rust",
        ],
        "settings": {
            "foreground": "#569cd6",
            "fontStyle": "italic",
        },
    },
    {
        "scope": [
            "entity.name.type.rust",
            "storage.type.core.rust",
            "storage.class.std.rust",
            "meta.type_params.rust",
        ],
        "settings": {"foreground": "#4ec9b0"},
    },
];
