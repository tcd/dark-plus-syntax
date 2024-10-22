import { TextMateRuleData, ThemeColor } from "@types"


/**
 * ## Extensions
 *
 * - [rubyide/vscode-ruby](https://github.com/rubyide/vscode-ruby)
 * - Cucumber
 *   - [alexkrechik/VSCucumberAutoComplete](https://github.com/alexkrechik/VSCucumberAutoComplete)
 *   - [euclidity/vscode-cucumber](https://github.com/euclidity/vscode-cucumber)
 */
export const ruby: TextMateRuleData[] = [
    {
        scopes: [
            "punctuation.definition.string.begin.ruby",
            "punctuation.definition.string.end.ruby",
            "source.ruby string.quoted.double.interpolated.ruby",
        ],
        foreground: ThemeColor.Strings,
    },
    {
        scopes: [
            "variable.other.ruby",
            "variable.other.constant.ruby",
            "constant.other.symbol.hashkey.ruby",
            "constant.language.symbol.hashkey.ruby punctuation.definition.constant.ruby",
            "constant.language.symbol.hashkey.ruby",
            "constant.language.symbol.hashkey.parameter.function.ruby",
            "variable.other.readwrite.instance.ruby punctuation.definition.variable.ruby",
            "meta.function.method.with-arguments.ruby constant.other.symbol.hashkey.parameter.function.ruby",
         ],
        foreground: ThemeColor.Variables,
    },
    {
        scopes: [
            "variable.other.readwrite.instance.ruby",
            "variable.other.readwrite.class.ruby",
        ],
        fontStyle: "italic",
    },
    {
        scopes: [
            "constant.other.symbol.ruby",
            "constant.character.escape.ruby",
            "constant.language.symbol.ruby",
            "punctuation.definition.constant.ruby",
        ],
        foreground: ThemeColor.Chars,
    },
    {
        scopes: [
            "variable.language.self.ruby",
        ],
        foreground: ThemeColor.Keywords,
        fontStyle:  "italic",
    },
    {
        scopes: [
            // "constant.other.symbol.hashkey.ruby",
            // "constant.language.symbol.hashkey.ruby",
            "meta.embedded.line.ruby",
         ],
        foreground: ThemeColor.Foreground,
    },
    {
        scopes: [
            "entity.name.function.ruby",
            "support.function.kernel.ruby",
         ],
        foreground: ThemeColor.Functions,
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
        foreground: ThemeColor.Keywords,
    },
    {
        scopes: [
            "meta.class.ruby",
            "support.class.ruby",
            "entity.name.type.class.ruby",
            "entity.other.inherited-class.ruby",
            // "punctuation.separator.namespace.ruby",
            // "variable.other.constant.ruby",
        ],
        foreground: ThemeColor.Types,
    },
    {
        scopes: [
            // "punctuation.separator.method.ruby",
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
            "punctuation.separator.namespace.ruby",
        ],
        foreground: ThemeColor.FlowControl,
    },
    {
        scopes: [
            // "punctuation.separator.namespace.ruby",
            "punctuation.separator.object.ruby",
            "punctuation.separator.arguments.ruby",
            "punctuation.section.function.ruby",
            "punctuation.section.scope.begin.ruby",
            "punctuation.section.scope.end.ruby",
            "punctuation.section.array.begin.ruby",
            "punctuation.section.array.end.ruby",
        ],
        foreground: ThemeColor.Foreground,
    },
    {
        scopes: [
            "punctuation.definition.group.ruby",
            "punctuation.definition.character-class.ruby",
            "punctuation.definition.character-class.begin.ruby",
            "punctuation.definition.character-class.end.ruby",
        ],
        foreground: ThemeColor.Tags,
    },
    {
        scopes: [
            "punctuation.section.regexp.begin.ruby",
            "punctuation.section.regexp.end.ruby",
        ],
        foreground: ThemeColor.RegExp,
    },
    {
        scopes: [
            "keyword.operator.quantifier.ruby",
            "string.regexp.arbitrary-repetition.ruby",
        ],
        foreground: ThemeColor.Numbers,
    },
    {
        scopes: [
            "punctuation.definition.string.begin.ruby",
            "punctuation.definition.string.end.ruby",
            "source.ruby string.quoted.double.interpolated.ruby",
            "string.quoted.double.interpolated.ruby",
        ],
        foreground: ThemeColor.Strings,
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
    //      foreground: ThemeColor.DocComments,
    //      // fontStyle: "italic",
    // },
    // {
    //     scopes: [
    //         "comment.line.type.yard.ruby",
    //     ],
    //     foreground: ThemeColor.Types,
    // },
    // {
    //     scopes: [
    //         "comment.line.parameter.yard.ruby",
    //      ],
    //     foreground: ThemeColor.Variables,
    // },
    // {
    //     scopes: [
    //         "comment.line.punctuation.yard.ruby",
    //      ],
    //      foreground: ThemeColor.Tags,
    // },
    // =========================================================================
    // erb
    // =========================================================================
    {
        scopes: [
            "meta.section.attributes.plain.haml constant.other.symbol.ruby",
            "meta.embedded.line.erb",
        ],
        foreground: ThemeColor.Variables,
    },
    {
        scopes: [
            "text.html.erb punctuation.section.embedded.begin.erb",
            "text.html.erb punctuation.section.embedded.end.erb",
        ],
        foreground: ThemeColor.Types,
    },
    // =========================================================================
    // Cucumber (Gherkin)
    // =========================================================================
    {
        scopes: [
            "keyword.language.gherkin.feature.step",
        ],
        foreground: ThemeColor.FlowControl,
    },
    // {
    //     scopes: [
    //         "keyword.control.cucumber.table",
    //     ],
    //     foreground: ThemeColor.Strings
    // },
    // {
    //     scopes: [
    //         "string.language.gherkin.scenario.title.title",
    //     ],
    //     foreground: ThemeColor.Variables,
    // },
    {
        scopes: [
        "text.gherkin.feature entity.name.type.class.tsx",
        ],
        foreground: ThemeColor.Types,
    },
]
