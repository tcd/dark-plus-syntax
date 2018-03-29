module.exports = [
    {
        "scope": [
            "punctuation.definition.tag",
        ],
        "settings": { "foreground": "#808080", },
    },
    {
        "scope": "entity.other.attribute-name",
        "settings": { "foreground": "#9cdcfe", },
    },
    {
        "scope": [
            "punctuation.definition.string.begin.html",
            "punctuation.definition.string.end.html",
        ],
        "settings": { "foreground": "#ce9178", },
    },
    {
        "scope": [
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
        "settings": { "foreground": "#569cd6", },
    },
    {
        "scope": [
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
        "settings": { "foreground": "#d4d4d4", },
    },
    // {
    //     "name": "Template Tags",
    //     "scope": [
    //         "string.interpolated.jade",
    //         "punctuation.section.embedded.begin.php",
    //         "punctuation.section.embedded.end.php",
    //         "meta.tag.template.value.twig",
    //         "punctuation.section.tag.twig",
    //     ],
    //     "settings": { "foreground": "#569cd6" }
    // },
    {
        "scope": "constant.character.entity.html",
        "settings": { "foreground": "#dcdcaa", },
    },
    {
        "name": "don't highlight ejs and erb as errors",
        "scope": "invalid.illegal.bad-angle-bracket.html",
        "settings": { "foreground": "#d4d4d4", },
    },
    {
        "name": "Mustaches",
        "scope": [
            "meta.directive.vue",
            "expression.embedded.vue",
            "punctuation.definition.generic.begin.html",
            "punctuation.definition.generic.end.html",
        ],
        "settings": { "foreground": "#4ec9b0", },
    },
    // =========================================================================
    // Jade/Pug
    // =========================================================================
    {
        "name": "Mustaches",
        "scope": [
            "string.interpolated.jade",
        ],
        "settings": { "foreground": "#4ec9b0", },
    },
    {
        "scope": [
            "meta.control.flow.jade",
            "meta.first-class.jade",
            "storage.type.function.jade",
            "storage.type.import.include.jade",
        ],
        "settings": { "foreground": "#c586c0", },
    },
    // =========================================================================
    // Handlebars
    // =========================================================================
    // "support.constant.handlebars",
    // "keyword.annotation.handlebars",
    // "meta.function.block.stardt.handlebars",
    // "meta.function.block.end.handlebars",
    {
        "scope": [
            // "text.html.handlebars",
            // "meta.function.inline.other.handlebars",
            "meta.function.block.start.handlebars",
            "meta.function.block.end.handlebars",
            "meta.function.block.start.handlebars support.constant.handlebars",
            "meta.function.block.end.handlebars support.constant.handlebars",
        ],
        "settings": { "foreground": "#c586c0", },
    },
    {
        "scope": [
            "support.constant.handlebars",
            // "meta.tag.mustache.js",
        ],
        "settings": { "foreground": "#4ec9b0", },
    },
    {
        "scope": [
            "variable.parameter.handlebars",
        ],
        "settings": { "foreground": "#9cdcfe", },
    },
    // =========================================================================
    // ejs
    // =========================================================================
    {
        "scope": [
            "keyword.begin.tag.ejs",
            // "text.html.ejs keyword.begin.tag.ejs punctuation.accessor.js",
            // "text.html.ejs keyword.begin.tag.ejs keyword.operator.arithmetic.js",
        ],
        "settings": { "foreground": "#4ec9b0", },
    },
    {
        "scope": [
            "text.html.ejs keyword.begin.tag.ejs meta.group.braces.round.js meta.brace.round.begin.js",
            "text.html.ejs keyword.begin.tag.ejs meta.group.braces.round.js meta.brace.round.end.js",
            "text.html.ejs keyword.begin.tag.ejs meta.group.braces.round.js",

            "text.html.ejs meta.brace.round.js",
            "text.html.ejs meta.brace.square.js",
            // "text.html.ejs punctuation.definition.block.js",
            "text.html.ejs punctuation.definition.parameters.begin.js",
            "text.html.ejs punctuation.definition.parameters.end.js",
        ],
        "settings": { "foreground": "#d4d4d4", },
    },
    {
        "scope": [
            "text.html.ejs keyword.operator.expression.typeof.js",
            "text.html.ejs keyword.operator.expression.instanceof.js",
        ],
        "settings": { "foreground": "#c586c0", },
    },
    // =========================================================================
    // Vue
    // =========================================================================
    {
        "scope": [
            "text.html.vue-html meta.brace.round.js",
        ],
        "settings": { "foreground": "#d4d4d4", },
    },
    {
        "scope": [
            "text.html.vue-html meta.tag.other.html",
        ],
        "settings": { "foreground": "#808080", },
    },
    {
        // punctuation.definition.string.begin.html
        // source.directive.vue
        // meta.directive.vue
        // meta.tag.inline.any.html
        // text.html.vue-html
        "scope": [
            "text.html.vue-html source.directive.vue punctuation.definition.string.begin.html",
            "text.html.vue-html source.directive.vue punctuation.definition.string.end.html",
        ],
        "settings": { "foreground": "#4ec9b0", },
    },
    // =========================================================================
    // Jinja2
    // =========================================================================
    {
        "scope": [
            "entity.other.jinja.delimiter.tag",
        ],
        "settings": { "foreground": "#606060", },
    },
    {
        "scope": [
            "entity.other.jinja.delimiter.variable",
        ],
        "settings": { "foreground": "#4ec9b0", },
    },
    {
        "scope": [
            "variable.other.jinja",
            // "variable.other.jinja.block"
        ],
        "settings": { "foreground": "#9cdcfe", },
    },
    {
        "scope": [
            "variable.language.jinja",
        ],
        "settings": { "foreground": "#569cd6", },
    },
];
