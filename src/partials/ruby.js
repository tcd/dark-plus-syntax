module.exports = [
    {
        "scope": [
            "punctuation.definition.string.begin.ruby",
            "punctuation.definition.string.end.ruby",
            "source.ruby string.quoted.double.interpolated.ruby",
        ],
        "settings": {"foreground": "#ce9178"},
    },
    {
        "scope": [
            "variable.other.ruby",
            "variable.other.constant.ruby",
            "constant.language.symbol.hashkey.ruby",
            "constant.language.symbol.hashkey.parameter.function.ruby",
            "variable.other.readwrite.instance.ruby punctuation.definition.variable.ruby",
            "meta.function.method.with-arguments.ruby constant.other.symbol.hashkey.parameter.function.ruby",
         ],
        "settings": {"foreground": "#9cdcfe"},
    },
    {
        "scope": ["variable.other.readwrite.instance.ruby"],
        "settings": {"fontStyle": "italic"},
    },
    {
        "scope": [
            "constant.character.escape.ruby",
            "constant.other.symbol.ruby",
            "constant.language.symbol.ruby",
            "punctuation.definition.constant.ruby",
        ],
        "settings": {"foreground": "#d7ba7d"},
    },
    {
        "scope": [
            "variable.language.self.ruby",
        ],
        "settings": {
            "foreground": "#569cd6",
            "fontStyle": "italic",
        },
    },
    {
        "scope": [
            "constant.other.symbol.hashkey.ruby",
            // "constant.language.symbol.hashkey.ruby",
            "meta.embedded.line.ruby",
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
            // "constant.other.symbol.ruby",
            // "constant.language.symbol.ruby",
            "variable.other.readwrite.global.ruby",
            // "punctuation.definition.constant.ruby",
            "punctuation.definition.variable.ruby",
            "punctuation.separator.inheritance.ruby",
            "punctuation.section.embedded.begin.ruby",
            "punctuation.section.embedded.end.ruby",
            "variable.other.readwrite.global.pre-defined.ruby",
            // "string.quoted.double.interpolated.ruby punctuation.section.embedded.begin.ruby",
            // "string.quoted.double.interpolated.ruby punctuation.section.embedded.end.ruby",
            "punctuation.section.embedded.begin.ruby",
            "punctuation.section.embedded.end.ruby",
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
            "entity.other.inherited-class.ruby",
            // "punctuation.separator.namespace.ruby",
        ],
        "settings": {"foreground": "#4ec9b0"},
    },
    {
        "scope": [
            // "punctuation.separator.method.ruby",
            // "punctuation.separator.namespace.ruby",
            "keyword.control.def.ruby",
            "keyword.control.class.ruby",
            "keyword.operator.other.ruby",
            "keyword.operator.assignment.ruby",
            "punctuation.separator.other.ruby",
            "keyword.control.pseudo-method.ruby",
            "keyword.operator.comparison.ruby",
            "keyword.operator.arithmetic.ruby",
            "punctuation.separator.method.ruby",
            "constant.language.symbol.hashkey.ruby punctuation.definition.constant.hashkey.ruby",
            "constant.language.symbol.hashkey.parameter.function.ruby punctuation.definition.constant.hashkey.ruby",
            "meta.function.method.with-arguments.ruby constant.other.symbol.hashkey.parameter.function.ruby punctuation.definition.constant.ruby",
            "source.ruby punctuation.separator.key-value",
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
        ],
        "settings": {"foreground": "#d4d4d4"},
    },
    {
        "scope": [
            "punctuation.definition.group.ruby",
            "punctuation.definition.character-class.ruby",
            "punctuation.definition.character-class.begin.ruby",
            "punctuation.definition.character-class.end.ruby",
        ],
        "settings": {"foreground": "#808080"},
    },
    {
        "scope": [
            "punctuation.section.regexp.begin.ruby",
            "punctuation.section.regexp.end.ruby",
        ],
        "settings": {"foreground": "#d16969"},
    },
    {
        "scope": [
            "keyword.operator.quantifier.ruby",
            "string.regexp.arbitrary-repetition.ruby",
        ],
        "settings": {"foreground": "#b5cea8"},
    },
    {
        "scope": [
            "punctuation.definition.string.begin.ruby",
            "punctuation.definition.string.end.ruby",
            "source.ruby string.quoted.double.interpolated.ruby",
            "string.quoted.double.interpolated.ruby",
        ],
        "settings": {"foreground": "#ce9178"},
    },
    // =========================================================================
    // yard
    // =========================================================================
    // {
    //     "scope": [
    //         "comment.line.keyword.punctuation.yard.ruby",
    //         "comment.line.keyword.yard.ruby",
    //         "comment.line.parameter.yard.ruby",
    //         "comment.line.type.yard.ruby",
    //         "comment.line.string.yard.ruby",
    //         // "comment.line.punctuation.yard.ruby",
    //      ],
    //     "settings": {
    //         "foreground": "#608b4e",
    //         // "fontStyle": "italic",
    //     },
    // },
    // {
    //     "scope": [
    //         "comment.line.type.yard.ruby",
    //     ],
    //     "settings": {"foreground": "#4ec9b0"},
    // },
    // {
    //     "scope": [
    //         "comment.line.parameter.yard.ruby",
    //      ],
    //     "settings": {"foreground": "#9cdcfe"},
    // },
    // {
    //     "scope": [
    //         "comment.line.punctuation.yard.ruby",
    //      ],
    //     "settings": {"foreground": "#505050"},
    // },
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
    // =========================================================================
    // Cucumber (Gherkin)
    // =========================================================================
    {
        "scope": [
            "keyword.language.gherkin.feature.step",
        ],
        "settings": {"foreground": "#c586c0"},
    },
    // {
    //     "scope": [
    //         "keyword.control.cucumber.table",
    //     ],
    //     "settings": {"foreground": "#ce9178"},
    // },
    // {
    //     "scope": [
    //         "string.language.gherkin.scenario.title.title",
    //     ],
    //     "settings": {"foreground": "#9CDCFE"},
    // },
    {
        "scope": [
        "text.gherkin.feature entity.name.type.class.tsx",
        ],
        "settings": {"foreground": "#4ec9b0"},
    },
];
