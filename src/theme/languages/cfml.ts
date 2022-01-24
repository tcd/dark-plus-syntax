export const cfml: VsCodeTextMate.TextMateRules = [
    // =========================================================================
    // ColdFusion Markup Language
    // =========================================================================
    {
        "scope": [
            "comment.block.cfml",
            "comment.line.cfml",
        ],
        "settings": { "foreground": "#608B4E" },
    },
    {
        "scope": [
            "punctuation.definition.template-expression.begin.cfml",
            "punctuation.definition.template-expression.end.cfml",
            "constant.character.hash.cfml.start", // ilich/vscode-coldfusion
            "constant.character.hash.cfml.end",   // ilich/vscode-coldfusion
        ],
        "settings": { "foreground": "#569CD6" },
    },
    {
        "scope": [
            "meta.property.cfml",
            "meta.property.constant.cfml",
        ],
        "settings": { "foreground": "#9CDCFE" },
    },
    {
        "scope": [
            // "entity.name.tag.cfml",
            "punctuation.accessor.cfml",
        ],
        "settings": { "foreground": "#C586C0" },
    },
    {
        "scope": [
            "entity.name.tag.custom.cfml",
        ],
        "settings": { "foreground": "#4EC9B0" },
    },
    {
        "scope": [
            "entity.name.tag.cfml",
        ],
        "settings": { "foreground": "#808080" },
    },
    {
        "scope": [
            "punctuation.definition.tag.begin.cfml",
            "punctuation.definition.tag.end.cfml",
        ],
        "settings": { "foreground": "#505050" },
    },
]
