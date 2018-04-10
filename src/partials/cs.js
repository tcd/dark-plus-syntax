module.exports = [
    {
        "scope": [
            "string.bracers.round.cshtml",
            "punctuation.curlybrace.open.cs",
            "punctuation.curlybrace.close.cs",
            "punctuation.terminator.statement.cs",
            "punctuation.squarebracket.open.cs",
            "punctuation.squarebracket.close.cs",
        ],
        "settings": { "foreground": "#d4d4d4" },
    },
    {
        "scope": [
            "entity.name.variable.property.cs",
            "entity.name.variable.parameter.cs",
            "entity.name.variable.field.cs",
            "entity.name.variable.local.cs",
            "meta.interpolation.cs variable.other.object.property.cs",
        ],
        "settings": { "foreground": "#9cdcfe" },
    },
    // {
    //     "scope": [ "keyword.type.cs" ],
    //     "settings": {
    //         "foreground": "#4ec9b0",
    //         "fontStyle": "italic",
    //     },
    // },
    {
        "scope": [
            "keyword.type.cs",
            "storage.type.cs",
            "storage.type.generic.cs",
            "storage.type.modifier.cs",
            "storage.type.variable.cs",
        ],
        "settings": {
            "foreground": "#4ec9b0" },
    },
    {
        "scope": [
            "storage.modifier.cs",
        ],
        "settings": {
            "foreground": "#569cd6",
            // "fontStyle": "italic",
        },
    },
    {
        "scope": [
            "keyword.other.new.cs",
            "keyword.other.var.cs",
            "keyword.operator.arrow.cs",
            "keyword.other.namespace.cs",
            "punctuation.definition.typeparameters.begin.cs",
            "punctuation.definition.typeparameters.end.cs",
            "punctuation.definition.interpolation.begin.cs",
            "punctuation.definition.interpolation.end.cs",
        ],
        "settings": { "foreground": "#569cd6" },
    },
    {
        "scope": [
            "keyword.other.get.cs",
            "keyword.other.set.cs",
        ],
        "settings": { "foreground": "#dcdcaa" },
    },
    {
        "scope": [
            // "keyword.other.using.cs",
            "punctuation.accessor.cs",
            "keyword.operator.assignment.cs",
            "keyword.operator.comparison.cs",
            "keyword.other.await.cs",
        ],
        "settings": { "foreground": "#c586c0" },
    },
];
