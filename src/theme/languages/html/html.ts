export const html: VsCodeTextMate.TextMateRules = [
    {
        scope: [
            "punctuation.definition.tag",
        ],
        settings: { foreground: "#808080" },
    },
    {
        scope: [
            "entity.other.attribute-name",
        ],
        settings: { foreground: "#9cdcfe" },
    },
    {
        scope: [
            "punctuation.definition.string.begin.html",
            "punctuation.definition.string.end.html",
        ],
        settings: { foreground: "#ce9178" },
    },
    {
        scope: [
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
        settings: { foreground: "#569cd6" },
    },
    {
        scope: [
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
        settings: { foreground: "#d4d4d4" },
    },
    {
        scope: [
            // Custom Elements
            "meta.tag.custom.start.html entity.name.tag.html",
            "meta.tag.custom.end.html entity.name.tag.html",
            "text.html.derivative meta.tag.custom.end.html entity.name.tag.html",
            "text.html.derivative meta.tag.custom.start.html entity.name.tag.html",
        ],
        settings: { foreground: "#4ec9b0" },
    },
    // {
    //     "name": "Template Tags",
    //     scope: [
    //         "string.interpolated.jade",
    //         "punctuation.section.embedded.begin.php",
    //         "punctuation.section.embedded.end.php",
    //         "meta.tag.template.value.twig",
    //         "punctuation.section.tag.twig",
    //     ],
    //     settings: { foreground: "#569cd6" }
    // },
    {
        scope: [
            "constant.character.entity.html",
        ],
        settings: { foreground: "#d7ba7d" },
    },
    {
        "name":     "don't highlight ejs and erb as errors",
        scope:    ["invalid.illegal.bad-angle-bracket.html"],
        settings: { foreground: "#d4d4d4" },
    },
    {
        scope: [
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
        settings: { foreground: "#4ec9b0" },
    },
    // =========================================================================
    // Jade/Pug
    // =========================================================================
    {
        "name":  "Mustaches",
        scope: [
            "string.interpolated.jade",
        ],
        settings: { foreground: "#4ec9b0" },
    },
    {
        scope: [
            "meta.control.flow.jade",
            "meta.first-class.jade",
            "storage.type.function.jade",
            "storage.type.import.include.jade",
        ],
        settings: { foreground: "#c586c0" },
    },
    // =========================================================================
    // Handlebars
    // =========================================================================
    // "support.constant.handlebars",
    // "keyword.annotation.handlebars",
    // "meta.function.block.stardt.handlebars",
    // "meta.function.block.end.handlebars",
    {
        scope: [
            // "text.html.handlebars",
            // "meta.function.inline.other.handlebars",
            "meta.function.block.start.handlebars",
            "meta.function.block.end.handlebars",
            "meta.function.block.start.handlebars support.constant.handlebars",
            "meta.function.block.end.handlebars support.constant.handlebars",
        ],
        settings: { foreground: "#c586c0" },
    },
    {
        scope: [
            "support.constant.handlebars",
            // "meta.tag.mustache.js",
        ],
        settings: { foreground: "#4ec9b0" },
    },
    {
        scope: [
            "variable.parameter.handlebars",
        ],
        settings: { foreground: "#9cdcfe" },
    },
    // =========================================================================
    // ejs
    // =========================================================================
    {
        scope: [
            "keyword.begin.tag.ejs",
            // "text.html.ejs keyword.begin.tag.ejs punctuation.accessor.js",
            // "text.html.ejs keyword.begin.tag.ejs keyword.operator.arithmetic.js",
        ],
        settings: { foreground: "#4ec9b0" },
    },
    {
        scope: [
            "text.html.ejs keyword.begin.tag.ejs meta.group.braces.round.js meta.brace.round.begin.js",
            "text.html.ejs keyword.begin.tag.ejs meta.group.braces.round.js meta.brace.round.end.js",
            "text.html.ejs keyword.begin.tag.ejs meta.group.braces.round.js",

            "text.html.ejs meta.brace.round.js",
            "text.html.ejs meta.brace.square.js",
            // "text.html.ejs punctuation.definition.block.js",
            "text.html.ejs punctuation.definition.parameters.begin.js",
            "text.html.ejs punctuation.definition.parameters.end.js",
        ],
        settings: { foreground: "#d4d4d4" },
    },
    {
        scope: [
            "text.html.ejs keyword.operator.expression.typeof.js",
            "text.html.ejs keyword.operator.expression.instanceof.js",
        ],
        settings: { foreground: "#c586c0" },
    },
    // =========================================================================
    // Vue
    // =========================================================================
    {
        scope: [
            "text.html.vue-html meta.brace.round.js",
        ],
        settings: { foreground: "#d4d4d4" },
    },
    {
        scope: [
            "text.html.vue-html meta.tag.other.html",
        ],
        settings: { foreground: "#808080" },
    },
    {
        scope: [
            "text.html.vue-html source.directive.vue punctuation.definition.string.begin.html",
            "text.html.vue-html source.directive.vue punctuation.definition.string.end.html",
            // "source.vue text.html.vue-html meta.tag.inline.any.html meta.directive.vue entity.other.attribute-name.html",
            "meta.tag.inline.any.html meta.directive.vue entity.other.attribute-name.html",
            "meta.directive.vue punctuation.separator.key-value.html",
            "meta.directive.vue entity.other.attribute-name.html",
        ],
        settings: { foreground: "#4ec9b0" },
    },
    // {
    // scope: [],
    // settings: { foreground: "#c586c0" },
    // },
    // =========================================================================
    // Jinja2
    // =========================================================================
    {
        scope: [
            "entity.other.jinja.delimiter.tag",
        ],
        settings: { foreground: "#606060" },
    },
    {
        scope: [
            "entity.other.jinja.delimiter.variable",
        ],
        settings: { foreground: "#4ec9b0" },
    },
    {
        scope: [
            "variable.other.jinja",
            // "variable.other.jinja.block"
        ],
        settings: { foreground: "#9cdcfe" },
    },
    {
        scope: [
            "variable.language.jinja",
        ],
        settings: { foreground: "#569cd6" },
    },
    // =========================================================================
    // Liquid
    // =========================================================================
    {
        scope: [
            "punctuation.tag.liquid",
        ],
        settings: { foreground: "#606060" },
    },
    {
        scope: [
            "punctuation.output.liquid",
            // "support.class.liquid",
        ],
        settings: { foreground: "#4ec9b0" },
    },
    {
        scope: [
            "support.variable.liquid",
            "support.class.liquid",

        ],
        settings: { foreground: "#9cdcfe" },
    },
    {
        scope: [
            "punctuation.tag.liquid",
            "keyword.operator.liquid",
            "entity.name.tag.liquid",
        ],
        settings: { foreground: "#c586c0" },
    },
    // =========================================================================
    // Angular Templates
    // =========================================================================
    {
        scope: [
            // {{ mustaches }}
            "text.html.derivative punctuation.definition.block.ts",
            // Angular pipe "|"
            "text.html.derivative expression.ng keyword.operator.logical.ts",
            // Directive Punctuation
            "punctuation.definition.ng-binding-name.begin.html",
            "punctuation.definition.ng-binding-name.end.html",
        ],
        settings: { foreground: "#4ec9b0" },
    },
    // {
    //     scope: [
    //         // {{ ; }} ¯\_(ツ)_/¯
    //         "expression.ng",
    //     ],
    //     settings: { foreground: "#c586c0" },
    // },
    {
        scope: [
            // directives
            "entity.other.ng-binding-name.property.html", // [title], [value]
            "entity.other.ng-binding-name.event.html",    // (click), (ngSubmit)
            "entity.other.ng-binding-name.template.html", // *ngIf, *ngFor
            "entity.other.ng-binding-name.two-way.html",  // [(ngModel)]
        ],
        settings: {
            foreground: "#9cdcfe",
            // fontStyle: "italic",
        },
    },
    {
        scope: [
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
        settings: {
            foreground: "#4ec9b0",
        },
    },
]
