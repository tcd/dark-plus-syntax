module.exports = [
    {
        "scope": [ "variable.other.ruby" ],
        "settings": { "foreground": "#9cdcfe" },
    },
    {
        "scope": [ "constant.character.escape.ruby" ],
        "settings": { "foreground": "#d7ba7d" },
    },
    {
        "scope": [ "variable.language.self.ruby" ],
        "settings": {
            "foreground": "#569cd6",
            "fontStyle": "italic",
        },
    },
    {
        "scope": [
            "punctuation.separator.method.ruby",
            "punctuation.separator.namespace.ruby",
            "constant.language.symbol.hashkey.ruby punctuation.definition.constant.hashkey.ruby",
         ],
        "settings": { "foreground": "#c586c0" },
    },
    {
        "scope": [
            "variable.language.ruby",
            "constant.other.symbol.ruby",
            "constant.language.symbol.ruby",
            "punctuation.definition.constant.ruby",
            "punctuation.definition.variable.ruby",
            "source.ruby punctuation.separator.key-value", // `=>` lambda
            "string.quoted.double.interpolated.ruby punctuation.section.embedded.begin.ruby",
            "string.quoted.double.interpolated.ruby punctuation.section.embedded.end.ruby",
            "string.regexp.interpolated.ruby meta.embedded.line.ruby punctuation.section.embedded.begin.ruby",
            "string.regexp.interpolated.ruby meta.embedded.line.ruby punctuation.section.embedded.end.ruby",
        ],
        "settings": { "foreground": "#569cd6" },
    },
    {
        "scope": [
            "meta.class.ruby",
            "support.class.ruby",
            "entity.name.type.class.ruby",
            "entity.other.inherited-class.ruby",
            "punctuation.separator.inheritance.ruby",
        ],
        "settings": { "foreground": "#4ec9b0" },
    },
    {
        "scope": [
            "keyword.control.def.ruby",
            "keyword.control.class.ruby",
            "keyword.operator.other.ruby",
            "keyword.operator.assignment.ruby",
            "punctuation.separator.other.ruby",
            "keyword.control.pseudo-method.ruby",
            "keyword.operator.comparison.ruby",
            "keyword.operator.arithmetic.ruby",
        ],
        "settings": { "foreground": "#c586c0" },
    },
    {
        "scope": [
            "punctuation.separator.object.ruby",
            "punctuation.separator.arguments.ruby",
            "punctuation.section.function.ruby",
            "punctuation.section.scope.begin.ruby",
            "punctuation.section.scope.end.ruby",
            "punctuation.section.array.begin.ruby",
            "punctuation.section.array.end.ruby",
            "constant.other.symbol.hashkey.ruby",
        ],
        "settings": { "foreground": "#d4d4d4" },
    },
    {
        "scope": [
            "punctuation.section.regexp.begin.ruby",
            "punctuation.section.regexp.end.ruby",
            "punctuation.definition.group.ruby",
            "punctuation.definition.character-class.ruby",
        ],
        "settings": { "foreground": "#808080" },
    },
    // =========================================================================
    // erb
    // =========================================================================
    {
        "scope": [
            "meta.section.attributes.plain.haml constant.other.symbol.ruby",
            "meta.embedded.line.erb",
        ],
        "settings": {
            "foreground": "#9CDCFE",
        },
    },
    {
        "scope": [
            "text.html.erb punctuation.section.embedded.begin.erb",
            "text.html.erb punctuation.section.embedded.end.erb",
        ],
        "settings": {
            "foreground": "#808080",
        },
    },
];
