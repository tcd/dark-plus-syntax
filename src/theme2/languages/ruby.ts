import { TextMateRuleData, SemanticColor } from "@lib"

export const ruby: TextMateRuleData[] = [
    {
        scopes: [
            "punctuation.definition.string.begin.ruby",
            "punctuation.definition.string.end.ruby",
            "source.ruby string.quoted.double.interpolated.ruby",
        ],
        foreground: "#ce9178",
    },
    {
        scopes: [
            "variable.other.ruby",
            "variable.other.constant.ruby",
            "constant.language.symbol.hashkey.ruby",
            "constant.language.symbol.hashkey.parameter.function.ruby",
            "variable.other.readwrite.instance.ruby punctuation.definition.variable.ruby",
            "meta.function.method.with-arguments.ruby constant.other.symbol.hashkey.parameter.function.ruby",
         ],
        foreground: "#9cdcfe",
    },
    {
        scope:    ["variable.other.readwrite.instance.ruby"],
        fontStyle: "italic",
    },
    {
        scopes: [
            "constant.character.escape.ruby",
            "constant.other.symbol.ruby",
            "constant.language.symbol.ruby",
            "punctuation.definition.constant.ruby",
        ],
        foreground: "#d7ba7d",
    },
    {
        scopes: [
            "variable.language.self.ruby",
        ],
        foreground: "#569cd6",
        fontStyle:  "italic",
    },
    {
        scopes: [
            "constant.other.symbol.hashkey.ruby",
            // "constant.language.symbol.hashkey.ruby",
            "meta.embedded.line.ruby",
         ],
        foreground: "#d4d4d4",
    },
    {
        scopes: [
            "entity.name.function.ruby",
            "support.function.kernel.ruby",
         ],
        foreground: "#dcdcaa",
    },
    {
        scopes: [
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
        foreground: "#569cd6",
    },
    {
        scopes: [
            "meta.class.ruby",
            "support.class.ruby",
            "entity.name.type.class.ruby",
            "entity.other.inherited-class.ruby",
            // "punctuation.separator.namespace.ruby",
        ],
        foreground: "#4ec9b0",
    },
    {
        scopes: [
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
        foreground: "#c586c0",
    },
    {
        scopes: [
            "punctuation.separator.namespace.ruby",
            "punctuation.separator.object.ruby",
            "punctuation.separator.arguments.ruby",
            "punctuation.section.function.ruby",
            "punctuation.section.scope.begin.ruby",
            "punctuation.section.scope.end.ruby",
            "punctuation.section.array.begin.ruby",
            "punctuation.section.array.end.ruby",
        ],
        foreground: "#d4d4d4",
    },
    {
        scopes: [
            "punctuation.definition.group.ruby",
            "punctuation.definition.character-class.ruby",
            "punctuation.definition.character-class.begin.ruby",
            "punctuation.definition.character-class.end.ruby",
        ],
        foreground: "#808080",
    },
    {
        scopes: [
            "punctuation.section.regexp.begin.ruby",
            "punctuation.section.regexp.end.ruby",
        ],
        foreground: "#d16969",
    },
    {
        scopes: [
            "keyword.operator.quantifier.ruby",
            "string.regexp.arbitrary-repetition.ruby",
        ],
        foreground: "#b5cea8",
    },
    {
        scopes: [
            "punctuation.definition.string.begin.ruby",
            "punctuation.definition.string.end.ruby",
            "source.ruby string.quoted.double.interpolated.ruby",
            "string.quoted.double.interpolated.ruby",
        ],
        foreground: "#ce9178",
    },
    // =========================================================================
    // yard
    // =========================================================================
    // {
    //     scopes: [
    //         "comment.line.keyword.punctuation.yard.ruby",
    //         "comment.line.keyword.yard.ruby",
    //         "comment.line.parameter.yard.ruby",
    //         "comment.line.type.yard.ruby",
    //         "comment.line.string.yard.ruby",
    //         // "comment.line.punctuation.yard.ruby",
    //      ],
    //      foreground: "#608b4e",
    //      // fontStyle: "italic",
    // },
    // {
    //     scopes: [
    //         "comment.line.type.yard.ruby",
    //     ],
    //     foreground: "#4ec9b0",
    // },
    // {
    //     scopes: [
    //         "comment.line.parameter.yard.ruby",
    //      ],
    //     foreground: "#9cdcfe",
    // },
    // {
    //     scopes: [
    //         "comment.line.punctuation.yard.ruby",
    //      ],
    //     foreground: "#505050",
    // },
    // =========================================================================
    // erb
    // =========================================================================
    {
        scopes: [
            "meta.section.attributes.plain.haml constant.other.symbol.ruby",
            "meta.embedded.line.erb",
        ],
        foreground: "#9CDCFE",
    },
    {
        scopes: [
            "text.html.erb punctuation.section.embedded.begin.erb",
            "text.html.erb punctuation.section.embedded.end.erb",
        ],
        foreground: "#4ec9b0",
    },
    // =========================================================================
    // Cucumber (Gherkin)
    // =========================================================================
    {
        scopes: [
            "keyword.language.gherkin.feature.step",
        ],
        foreground: "#c586c0",
    },
    // {
    //     scopes: [
    //         "keyword.control.cucumber.table",
    //     ],
    //     foreground: "#ce9178",
    // },
    // {
    //     scopes: [
    //         "string.language.gherkin.scenario.title.title",
    //     ],
    //     foreground: "#9CDCFE",
    // },
    {
        scopes: [
        "text.gherkin.feature entity.name.type.class.tsx",
        ],
        foreground: "#4ec9b0",
    },
]
