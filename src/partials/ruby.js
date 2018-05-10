module.exports = [
    {
        "scope": [ "variable.other.ruby" ],
        "settings": {"foreground": "#9cdcfe"},
    },
    {
        "scope": [
            "variable.other.readwrite.instance.ruby",
        ],
        "settings": {"fontStyle": "italic"},
    },
    {
        "scope": [ "constant.character.escape.ruby" ],
        "settings": {"foreground": "#d7ba7d"},
    },
    {
        "scope": [
            "variable.language.self.ruby",
            "variable.other.readwrite.global.pre-defined.ruby",
        ],
        "settings": {
            "foreground": "#569cd6",
            "fontStyle": "italic",
        },
    },
    {
        "scope": [
            // "punctuation.separator.method.ruby",
            // "punctuation.separator.namespace.ruby",
         ],
        "settings": {"foreground": "#c586c0"},
    },
    {
        "scope": [
            "constant.other.symbol.hashkey.ruby",
            "constant.language.symbol.hashkey.ruby",
         ],
        "settings": {"foreground": "#d4d4d4"},
    },
    {
        "scope": [
            "entity.name.function.ruby",
            "support.function.kernel.ruby",
         ],
        "settings": {"foreground": "#dcdcaa"},
    },
    {
        "scope": [
            "variable.language.ruby",
            "constant.other.symbol.ruby",
            "constant.language.symbol.ruby",
            "variable.other.readwrite.global.ruby",
            "punctuation.definition.constant.ruby",
            "punctuation.definition.variable.ruby",
            "punctuation.separator.inheritance.ruby",
            "string.quoted.double.interpolated.ruby punctuation.section.embedded.begin.ruby",
            "string.quoted.double.interpolated.ruby punctuation.section.embedded.end.ruby",
            "string.regexp.interpolated.ruby meta.embedded.line.ruby punctuation.section.embedded.begin.ruby",
            "string.regexp.interpolated.ruby meta.embedded.line.ruby punctuation.section.embedded.end.ruby",
        ],
        "settings": {"foreground": "#569cd6"},
    },
    {
        "scope": [
            "meta.class.ruby",
            "support.class.ruby",
            "entity.name.type.class.ruby",
            "variable.other.constant.ruby",
            "entity.other.inherited-class.ruby",
        ],
        "settings": {"foreground": "#4ec9b0"},
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
        "settings": {"foreground": "#c586c0"},
    },
    {
        "scope": [
            "punctuation.separator.namespace.ruby",
            "punctuation.separator.object.ruby",
            "punctuation.separator.arguments.ruby",
            "punctuation.section.function.ruby",
            "punctuation.section.scope.begin.ruby",
            "punctuation.section.scope.end.ruby",
            "punctuation.section.array.begin.ruby",
            "punctuation.section.array.end.ruby",
            "source.ruby punctuation.separator.key-value", // `=>` lambda
            "constant.language.symbol.hashkey.ruby punctuation.definition.constant.hashkey.ruby",
        ],
        "settings": {"foreground": "#d4d4d4"},
    },
    {
        "scope": [
            "punctuation.section.regexp.begin.ruby",
            "punctuation.section.regexp.end.ruby",
            "punctuation.definition.group.ruby",
            "punctuation.definition.character-class.ruby",
        ],
        "settings": {"foreground": "#808080"},
    },
    // =========================================================================
    // erb
    // =========================================================================
    {
        "scope": [
            "meta.section.attributes.plain.haml constant.other.symbol.ruby",
            "meta.embedded.line.erb",
        ],
        "settings": {"foreground": "#9CDCFE"},
    },
    {
        "scope": [
            "text.html.erb punctuation.section.embedded.begin.erb",
            "text.html.erb punctuation.section.embedded.end.erb",
        ],
        "settings": {"foreground": "#4ec9b0"},
    },
];
