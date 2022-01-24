export const rust: VsCodeTextMate.TextMateRules = [
    {
        "scope": [
            "entity.name.type.param.rust punctuation.other.comma.rust",
            "keyword.operator.path.rust",
        ],
        "settings": { "foreground": "#d4d4d4" },
    },
    {
        "scope": [
            "meta.attribute.rust",
            "comment.line.documentation.rust",
        ],
        "settings": { "foreground": "#608b4e" },
    },
    {
        "scope": [
            "keyword.operator.misc.rust",
            "keyword.operator.sigil.rust",
        ],
        "settings": { "foreground": "#c586c0" },
    },
    {
        "scope": [
            "storage.modifier.lifetime.rust",
            "entity.name.lifetime.rust",
            "constant.other.placeholder.rust",
        ],
        "settings": {
            // "fontStyle": "italic",
            "foreground": "#9cdcfe",
        },
    },
    {
        "scope": [
            "string.quoted.single.rust", // DEPRECATED
            "constant.character.rust",
        ],
        "settings": { "foreground": "#d7ba7d" },
    },
    {
        "scope": [
            // "constant.other.placeholder.rust", // Deprecated
            "support.constant.core.rust",
            "variable.language.ignored.rust",
        ],
        "settings": { "foreground": "#569cd6" },
    },
    {
        "scope": [
            "variable.language.rust",
            "variable.language.self.rust",
        ],
        "settings": {
            "foreground": "#569cd6",
            "fontStyle":  "italic",
        },
    },
    {
        "scope": [
            "entity.name.type.param.rust punctuation.definition.type.rust",
        ],
        "settings": { "foreground": "#808080" },
    },
    {
        "scope": [
            "entity.name.type.rust",
            "storage.type.core.rust",
            "storage.class.std.rust",
            "punctuation.separator.type.rust",
            "keyword.operator.return-type.rust",
            "meta.type_params.rust",
            // "keyword.operator.path.rust",
        ],
        "settings": { "foreground": "#4ec9b0" },
    },
]
