module.exports = [
    {
        "scope": [
            "punctuation.definition.tag",
        ],
        "settings": { "foreground": "#808080" }
    },
    {
        "scope": "entity.other.attribute-name",
        "settings": { "foreground": "#9cdcfe" }
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
        "settings": { "foreground": "#569cd6" }
    },
    {
        "scope": "constant.character.entity.html",
        "settings": { "foreground": "#dcdcaa" }
    },
    {
        "name": "don't highlight ejs and erb as errors",
        "scope": "invalid.illegal.bad-angle-bracket.html",
        "settings": { "foreground": "#d4d4d4" }
    },
    {
        "scope": [
            "variable.parameter.handlebars",
        ],
        "settings": { "foreground": "#9cdcfe" }
    },
    {
        "name": "Mustaches",
        "scope": [
            "punctuation.definition.generic.begin.html",
            "punctuation.definition.generic.end.html",
            "meta.function.inline.other.handlebars",
            "support.constant.handlebars",
            "expression.embedded.vue",
            "meta.directive.vue",
            "storage.type.import.include.jade",
            "storage.type.function.jade",
            "meta.control.flow.jade",
            "meta.first-class.jade",
        ],
        "settings": { "foreground": "#c586c0" }
    },
    {
        "scope": [
            "punctuation.definition.string.begin.html",
            "punctuation.definition.string.end.html",
        ],
        "settings": { "foreground": "#ce9178" }
    },
]
