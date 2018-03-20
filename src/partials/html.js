module.exports = [
    {
        "scope": [
            "punctuation.definition.tag",
            "meta.tag.sgml.doctype.html",
            "meta.tag.sgml.html",
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
            "punctuation.definition.generic.begin.html",
            "punctuation.definition.generic.end.html",
        ],
        "settings": { "foreground": "#569cd6" }
    },
    {
        "scope": "constant.character.entity.html",
        "settings": { "foreground": "#dcdcaa" }
    },
    {
        "name": "ejs and erb",
        "scope": "invalid.illegal.bad-angle-bracket.html",
        "settings": { "foreground": "#d4d4d4" }
    },
    {
        "scope": "variable.parameter.handlebars",
        "settings": { "foreground": "#9cdcfe" }
    },
    {
        "scope": [
            "meta.directive.vue",
            "expression.embedded.vue",
            "support.constant.handlebars",
            "meta.function.inline.other.handlebars",
            "meta.first-class.jade",
            "meta.control.flow.jade",
            "storage.type.function.jade",
            "storage.type.import.include.jade",
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
    // {
    //     "scope": "meta.embedded.line.erb",
    //     "settings": {
    //         "foreground": "#9CDCFE"
    //     }
    // },
    // {
    //     "scope": [
    //         "punctuation.section.embedded.begin.erb",
    //         "punctuation.section.embedded.end.erb"
    //     ],
    //     "settings": {
    //         "foreground": "#808080"
    //     }
    // },
    // {
    //     "scope": [
    //         "source.ruby",
    //         "text.html.erb",
    //         "text.haml",
    //         "punctuation.separator.object.ruby",
    //         "punctuation.separator.other.ruby"
    //     ],
    //     "settings": {
    //         "foreground": "#d4d4d4"
    //     }
    // },
]
