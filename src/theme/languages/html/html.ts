import { TextMateRuleData, SemanticColor } from "@lib"

export const html: TextMateRuleData[] = [
    {
        scopes: [
            "punctuation.definition.tag",
        ],
        foreground: SemanticColor.Tags,
    },
    {
        scopes: [
            "entity.other.attribute-name",
        ],
        foreground: SemanticColor.Variables,
    },
    {
        scopes: [
            "punctuation.definition.string.begin.html",
            "punctuation.definition.string.end.html",
        ],
        foreground: SemanticColor.Strings,
    },
    {
        scopes: [
            "entity.tag",
            "entity.name.tag",
            "string.interpolated.jade",
            "support.constant.handlebars",
            "keyword.annotation.handlebars",
            "meta.function.block.start.handlebars",
            "meta.function.block.end.handlebars",
            "punctuation.section.embedded.begin.php",
            "punctuation.section.embedded.end.php",
            "meta.tag.template.value.twig",
            "punctuation.section.tag.twig",
        ],
        foreground: SemanticColor.Keywords,
    },
    {
        scopes: [
            // JS in html
            "text.html.basic meta.brace.round.js",
            "text.html.basic meta.brace.square.js",
            "text.html.basic punctuation.separator.comma.js",
            "text.html.basic punctuation.definition.block.js",
            "text.html.basic punctuation.definition.parameters.begin.js",
            "text.html.basic punctuation.definition.parameters.end.js",
            // JS in jinja
            "text.html.jinja punctuation.definition.parameters.begin.js",
            "text.html.jinja punctuation.definition.parameters.end.js",
            "text.html.jinja meta.brace.round.js",
            "text.html.jinja meta.brace.square.js",
            "text.html.jinja punctuation.definition.block.js",
            "text.html.jinja punctuation.separator.comma.js",
        ],
        foreground: SemanticColor.Foreground,
    },
    {
        scopes: [
            // Custom Elements
            "meta.tag.custom.start.html entity.name.tag.html",
            "meta.tag.custom.end.html entity.name.tag.html",
            "text.html.derivative meta.tag.custom.end.html entity.name.tag.html",
            "text.html.derivative meta.tag.custom.start.html entity.name.tag.html",
        ],
        foreground: SemanticColor.Types,
    },
    // {
    //     "name": "Template Tags",
    //     scopes: [
    //         "string.interpolated.jade",
    //         "punctuation.section.embedded.begin.php",
    //         "punctuation.section.embedded.end.php",
    //         "meta.tag.template.value.twig",
    //         "punctuation.section.tag.twig",
    //     ],
    //     foreground: SemanticColor.Keywords,
    // },
    {
        scopes: [
            "constant.character.entity.html",
        ],
        foreground: SemanticColor.Chars,
    },
    {
        "name":     "don't highlight ejs and erb as errors",
        scopes:    ["invalid.illegal.bad-angle-bracket.html"],
        foreground: SemanticColor.Foreground,
    },
    {
        scopes: [
            // "entity.name.tag.template.html",
            "punctuation.section.embedded.begin.php",
            "punctuation.section.embedded.end.php",
            "meta.directive.vue",
            "expression.embedded.vue",
            "punctuation.definition.generic.begin.html",
            "punctuation.definition.generic.end.html",
            "punctuation.section.embedded.begin.smarty",
            "punctuation.section.embedded.end.smarty",
        ],
        foreground: SemanticColor.Types,
    },
    // =========================================================================
    // Jade/Pug
    // =========================================================================
    {
        "name":  "Mustaches",
        scopes: [
            "string.interpolated.jade",
        ],
        foreground: SemanticColor.Types,
    },
    {
        scopes: [
            "meta.control.flow.jade",
            "meta.first-class.jade",
            "storage.type.function.jade",
            "storage.type.import.include.jade",
        ],
        foreground: SemanticColor.FlowControl,
    },
    // =========================================================================
    // Handlebars
    // =========================================================================
    // "support.constant.handlebars",
    // "keyword.annotation.handlebars",
    // "meta.function.block.stardt.handlebars",
    // "meta.function.block.end.handlebars",
    {
        scopes: [
            // "text.html.handlebars",
            // "meta.function.inline.other.handlebars",
            "meta.function.block.start.handlebars",
            "meta.function.block.end.handlebars",
            "meta.function.block.start.handlebars support.constant.handlebars",
            "meta.function.block.end.handlebars support.constant.handlebars",
        ],
        foreground: SemanticColor.FlowControl,
    },
    {
        scopes: [
            "support.constant.handlebars",
            // "meta.tag.mustache.js",
        ],
        foreground: SemanticColor.Types,
    },
    {
        scopes: [
            "variable.parameter.handlebars",
        ],
        foreground: SemanticColor.Variables,
    },
    // =========================================================================
    // ejs
    // =========================================================================
    {
        scopes: [
            "keyword.begin.tag.ejs",
            // "text.html.ejs keyword.begin.tag.ejs punctuation.accessor.js",
            // "text.html.ejs keyword.begin.tag.ejs keyword.operator.arithmetic.js",
        ],
        foreground: SemanticColor.Types,
    },
    {
        scopes: [
            "text.html.ejs keyword.begin.tag.ejs meta.group.braces.round.js meta.brace.round.begin.js",
            "text.html.ejs keyword.begin.tag.ejs meta.group.braces.round.js meta.brace.round.end.js",
            "text.html.ejs keyword.begin.tag.ejs meta.group.braces.round.js",

            "text.html.ejs meta.brace.round.js",
            "text.html.ejs meta.brace.square.js",
            // "text.html.ejs punctuation.definition.block.js",
            "text.html.ejs punctuation.definition.parameters.begin.js",
            "text.html.ejs punctuation.definition.parameters.end.js",
        ],
        foreground: SemanticColor.Foreground,
    },
    {
        scopes: [
            "text.html.ejs keyword.operator.expression.typeof.js",
            "text.html.ejs keyword.operator.expression.instanceof.js",
        ],
        foreground: SemanticColor.FlowControl,
    },
    // =========================================================================
    // Vue
    // =========================================================================
    {
        scopes: [
            "text.html.vue-html meta.brace.round.js",
        ],
        foreground: SemanticColor.Foreground,
    },
    {
        scopes: [
            "text.html.vue-html meta.tag.other.html",
        ],
        foreground: SemanticColor.Tags,
    },
    {
        scopes: [
            "text.html.vue-html source.directive.vue punctuation.definition.string.begin.html",
            "text.html.vue-html source.directive.vue punctuation.definition.string.end.html",
            // "source.vue text.html.vue-html meta.tag.inline.any.html meta.directive.vue entity.other.attribute-name.html",
            "meta.tag.inline.any.html meta.directive.vue entity.other.attribute-name.html",
            "meta.directive.vue punctuation.separator.key-value.html",
            "meta.directive.vue entity.other.attribute-name.html",
        ],
        foreground: SemanticColor.Types,
    },
    // {
    // scopes: [],
    // foreground: SemanticColor.FlowControl,
    // },
    // =========================================================================
    // Jinja2
    // =========================================================================
    {
        scopes: [
            "entity.other.jinja.delimiter.tag",
        ],
        foreground: SemanticColor.Tags,
    },
    {
        scopes: [
            "entity.other.jinja.delimiter.variable",
        ],
        foreground: SemanticColor.Types,
    },
    {
        scopes: [
            "variable.other.jinja",
            // "variable.other.jinja.block"
        ],
        foreground: SemanticColor.Variables,
    },
    {
        scopes: [
            "variable.language.jinja",
        ],
        foreground: SemanticColor.Keywords,
    },
    // =========================================================================
    // Liquid
    // =========================================================================
    {
        scopes: [
            "punctuation.tag.liquid",
        ],
        foreground: SemanticColor.Tags,
    },
    {
        scopes: [
            "punctuation.output.liquid",
            // "support.class.liquid",
        ],
        foreground: SemanticColor.Types,
    },
    {
        scopes: [
            "support.variable.liquid",
            "support.class.liquid",

        ],
        foreground: SemanticColor.Variables,
    },
    {
        scopes: [
            "punctuation.tag.liquid",
            "keyword.operator.liquid",
            "entity.name.tag.liquid",
        ],
        foreground: SemanticColor.FlowControl,
    },
    // =========================================================================
    // Angular Templates
    // =========================================================================
    {
        scopes: [
            // {{ mustaches }}
            "text.html.derivative punctuation.definition.block.ts",
            // Angular pipe "|"
            "text.html.derivative expression.ng keyword.operator.logical.ts",
            // Directive Punctuation
            "punctuation.definition.ng-binding-name.begin.html",
            "punctuation.definition.ng-binding-name.end.html",
        ],
        foreground: SemanticColor.Types,
    },
    // {
    //     scopes: [
    //         // {{ ; }} ¯\_(ツ)_/¯
    //         "expression.ng",
    //     ],
    //     foreground: SemanticColor.FlowControl,
    // },
    {
        scopes: [
            // directives
            "entity.other.ng-binding-name.property.html", // [title], [value]
            "entity.other.ng-binding-name.event.html",    // (click), (ngSubmit)
            "entity.other.ng-binding-name.template.html", // *ngIf, *ngFor
            "entity.other.ng-binding-name.two-way.html",  // [(ngModel)]
        ],
        foreground: SemanticColor.Variables,
        // fontStyle: "italic",
    },
    {
        scopes: [
            // =
            "meta.ng-binding.event.html punctuation.separator.key-value.html",
            "meta.ng-binding.property.html punctuation.separator.key-value.html",
            "meta.ng-binding.template.html punctuation.separator.key-value.html",
            "meta.ng-binding.two-way.html punctuation.separator.key-value.html",
            // String punctuation
            "meta.ng-binding.event.html punctuation.definition.string.begin.html",
            "meta.ng-binding.event.html punctuation.definition.string.end.html",
            "meta.ng-binding.property.html punctuation.definition.string.begin.html",
            "meta.ng-binding.property.html punctuation.definition.string.end.html",
            "meta.ng-binding.template.html punctuation.definition.string.begin.html",
            "meta.ng-binding.template.html punctuation.definition.string.end.html",
            "meta.ng-binding.two-way.html punctuation.definition.string.begin.html",
            "meta.ng-binding.two-way.html punctuation.definition.string.end.html",
        ],
        foreground: SemanticColor.Types,
    },
]
