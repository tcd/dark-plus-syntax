module.exports = [
    {
        "scope": [
            "entity.name.variable.property.cs",
            "entity.name.variable.parameter.cs",
            "entity.name.variable.field.cs",
            "entity.name.variable.local.cs",
        ],
        "settings": { "foreground": "#9cdcfe" },
    },
    {
        "scope": "keyword.type.cs",
        "settings": {
            "foreground": "#4ec9b0",
            "fontStyle": "italic"
        }
    },
    {
        "scope": [
            "keyword.other.get.cs",
            "keyword.other.set.cs"
        ],
        "settings": { "foreground": "#dcdcaa" },
    },
    {
        "scope": [
            "keyword.operator.arrow.cs",
        ],
        "settings": { "foreground": "#569cd6" },
    },
    {
        "scope": [
            // "keyword.other.using.cs",
            "keyword.operator.assignment.cs",
            "keyword.operator.comparison.cs",
            "keyword.other.await.cs",
        ],
        "settings": { "foreground": "#c586c0" }
    },
    {
        "scope": [
            "string.bracers.round.cshtml"
        ],
        "settings": { "foreground": "#d4d4d4" },
    },
]
