import { TextMateRuleData, ThemeColor } from "@types"

/**
 * ## Languages
 *
 * - HTML
 * - Handlebars
 * - Jinja
 * - Nunjucks
 * - Liquid
 * - Angular Templates
 * - Slim
 * - Jade/Pug
 * - jsont (SquareSpace)
 *
 * ## Extensions
 *
 * - [angular/vscode-ng-language-service](https://github.com/angular/vscode-ng-language-service)
 * - [samuelcolvin/jinjahtml-vscode](https://github.com/samuelcolvin/jinjahtml-vscode)
 *
 * ## Resources
 *
 * - [Pug Docs](https://pugjs.org/api/getting-started.html)
 */
export const html: TextMateRuleData[] = [
    {
        scopes: [
            "punctuation.definition.tag",
        ],
        foreground: ThemeColor.Tags,
    },
    {
        scopes: [
            "entity.other.attribute-name",
        ],
        foreground: ThemeColor.Variables,
    },
    {
        scopes: [
            "punctuation.definition.string.begin.html",
            "punctuation.definition.string.end.html",
        ],
        foreground: ThemeColor.Strings,
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
        foreground: ThemeColor.Keywords,
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
        foreground: ThemeColor.Foreground,
    },
    {
        scopes: [
            // Custom Elements
            "meta.tag.custom.start.html entity.name.tag.html",
            "meta.tag.custom.end.html entity.name.tag.html",
            "text.html.derivative meta.tag.custom.end.html entity.name.tag.html",
            "text.html.derivative meta.tag.custom.start.html entity.name.tag.html",
        ],
        foreground: ThemeColor.Types,
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
    //     foreground: ThemeColor.Keywords,
    // },
    {
        scopes: [
            "constant.character.entity.html",
        ],
        foreground: ThemeColor.Chars,
    },
    {
        "name":     "don't highlight ejs and erb as errors",
        scopes:     ["invalid.illegal.bad-angle-bracket.html"],
        foreground: ThemeColor.Foreground,
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
        foreground: ThemeColor.Types,
    },
    // =========================================================================
    // Jade/Pug
    // =========================================================================
    {
        name:   "Mustaches",
        scopes: [
            "string.interpolated.jade",
        ],
        foreground: ThemeColor.Types,
    },
    {
        scopes: [
            "meta.control.flow.jade",
            "meta.first-class.jade",
            "storage.type.function.jade",
            "storage.type.function.pug",
            "storage.type.import.include.jade",
            "meta.control.flow.pug storage.type.function.pug",
            "storage.type.import.include.pug",
        ],
        foreground: ThemeColor.FlowControl,
    },
    {
        scopes: [
            // "storage.type.function.pug",
        ],
        foreground: ThemeColor.Functions,
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
        foreground: ThemeColor.FlowControl,
    },
    {
        scopes: [
            "support.constant.handlebars",
            // "meta.tag.mustache.js",
        ],
        foreground: ThemeColor.Types,
    },
    {
        scopes: [
            "variable.parameter.handlebars",
        ],
        foreground: ThemeColor.Variables,
    },
    {
        scopes: [
            "support.constant.handlebars",
        ],
        foreground: ThemeColor.Functions,
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
        foreground: ThemeColor.Types,
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
        foreground: ThemeColor.Foreground,
    },
    {
        scopes: [
            "text.html.ejs keyword.operator.expression.typeof.js",
            "text.html.ejs keyword.operator.expression.instanceof.js",
        ],
        foreground: ThemeColor.FlowControl,
    },
    // =========================================================================
    // Vue
    // =========================================================================
    {
        scopes: [
            "text.html.vue-html meta.brace.round.js",
        ],
        foreground: ThemeColor.Foreground,
    },
    {
        scopes: [
            "text.html.vue-html meta.tag.other.html",
        ],
        foreground: ThemeColor.Tags,
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
        foreground: ThemeColor.Types,
    },
    // {
    // scopes: [],
    // foreground: ThemeColor.FlowControl,
    // },
    // =========================================================================
    // Jinja2
    // =========================================================================
    {
        scopes: [
            "entity.other.jinja.delimiter.tag",
        ],
        foreground: ThemeColor.Tags,
    },
    {
        scopes: [
            "entity.other.jinja.delimiter.variable",
        ],
        foreground: ThemeColor.Types,
    },
    {
        scopes: [
            "variable.other.jinja",
            // "variable.other.jinja.block"
        ],
        foreground: ThemeColor.Variables,
    },
    {
        scopes: [
            "variable.language.jinja",
        ],
        foreground: ThemeColor.Keywords,
    },
    // =========================================================================
    // Liquid
    // =========================================================================
    {
        scopes: [
            "punctuation.tag.liquid",
        ],
        foreground: ThemeColor.Tags,
    },
    {
        scopes: [
            "support.variable.liquid",
            "support.class.liquid",
            "punctuation.output.liquid",

        ],
        foreground: ThemeColor.Variables,
    },
    {
        scopes: [
            // "punctuation.output.liquid",
            // "support.class.liquid",
            "punctuation.tag.liquid punctuation.definition.tag.begin.liquid",
            "punctuation.tag.liquid punctuation.definition.tag.end.liquid",
            "punctuation.output.liquid punctuation.definition.tag.begin.liquid",
            "punctuation.output.liquid punctuation.definition.tag.end.liquid",
        ],
        foreground: ThemeColor.Types,
    },
    {
        scopes: [
            "entity.name.tag.liquid",
            "keyword.operator.liquid",
            "keyword.other.colon.liquid",
            "keyword.separator.pipe.liquid",
            "punctuation.output.liquid",
            "punctuation.tag.liquid",
        ],
        foreground: ThemeColor.FlowControl,
    },
    // =========================================================================
    // Slim
    // =========================================================================
    {
        scopes: [
            "meta.line.ruby.slim",
        ],
        foreground: ThemeColor.FlowControl,
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
            "text.html.derivative expression.ng keyword.operator.logical.ts",
        ],
        foreground: ThemeColor.Types,
    },
    {
        scopes: [
            "entity.other.ng-binding-name.ngFor.html",
            "entity.other.ng-binding-name.ngIf.html",
        ],
        foreground: ThemeColor.FlowControl,
    },
    // {
    //     scopes: [
    //         "text.html.derivative expression.ng keyword.operator.logical.ts",
    //     ],
    //     foreground: ThemeColor.Functions,
    // },
    {
        scopes: [
            // directives
            "entity.other.ng-binding-name.property.html", // [title], [value]
            "entity.other.ng-binding-name.event.html",    // (click), (ngSubmit)
            "entity.other.ng-binding-name.template.html", // *ngIf, *ngFor
            "entity.other.ng-binding-name.two-way.html",  // [(ngModel)]
        ],
        foreground: ThemeColor.Variables,
        // fontStyle: "italic",
    },
    {
        scopes: [
            // =
            // "meta.ng-binding.event.html punctuation.separator.key-value.html",
            // "meta.ng-binding.property.html punctuation.separator.key-value.html",
            // "meta.ng-binding.template.html punctuation.separator.key-value.html",
            // "meta.ng-binding.two-way.html punctuation.separator.key-value.html",
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
        foreground: ThemeColor.Types,
    },
    // =========================================================================
    // Nunjucks
    // =========================================================================
    {
        scopes: [
            "punctuation.tag.njk entity.name.tag.njk",
        ],
        foreground: ThemeColor.FlowControl,
    },
    {
        scopes: [
            "punctuation.tag.njk punctuation.definition.tag.begin.njk",
            "punctuation.tag.njk punctuation.definition.tag.end.njk",
            "punctuation.output.njk punctuation.definition.tag.begin.njk",
            "punctuation.output.njk punctuation.definition.tag.end.njk",
        ],
        foreground: ThemeColor.Types,
    },
    {
        scopes: [
            "support.class.njk",
        ],
        foreground: ThemeColor.Variables
    },
    // =========================================================================
    // jsont (SquareSpace)
    // =========================================================================
    {
        scopes: [
            "support.class.jsont",
        ],
        foreground: ThemeColor.Functions,
    },
    {
        scopes: [
            "string.quoted.double.html punctuation.section.tag.jsont",
            "punctuation.section.tag.jsont",
        ],
        foreground: ThemeColor.Types,
    },
    {
        scopes: [
            "text.html.jsont punctuation.separator.key-value.html",
        ],
        foreground: ThemeColor.FlowControl,
    },
]
