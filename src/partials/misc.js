module.exports = [
    {
        "scope": [ "entity.other.document.begin.yaml" ],
        "settings": { "foreground": "#c586c0" }
    },
    {
        "scope": [ "comment.line.number-sign.makefile" ],
        "settings": { "foreground": "#608b4e" }
    },
    {
        "scope": [ "variable.other.makefile" ],
        "settings": { "foreground": "#9cdcfe" }
    },
    {
        "scope": [ "variable.language.makefile" ],
        "settings": { "foreground": "#569cd6" }
    },
    {
        "scope": [
            "punctuation.separator.key-value.makefile",
            "support.function.foreach.makefile",
            "keyword.control.ifeq.makefile",
            "keyword.control.endif.makefile",
            "constant.character.escape.continuation.makefile",
        ],
        "settings": { "foreground": "#c586c0" }
    },
    {
        "scope": [
            "entity.name.function.target.makefile",
            "constant.character.escape.continuation.makefile",
        ],
        "settings": { "foreground": "#dcdcaa" }
    },
    {
        "scope": [
            "entity.name.section.terraform",
            // "punctuation.definition.variable.makefile",
            // "variable.language.makefile",
        ],
        "settings": { "foreground": "#c586c0" }
    },
    {
        "scope": [
            "keyword.other.section.begin.terraform",
            "keyword.other.section.end.terraform",
            "keyword.other.function.inline.terraform",
        ],
        "settings": { "foreground": "#dcdcaa" }
    },
    {
        "scope": [
            "storage.type.function.terraform",
            "entity.tag.embedded.start.terraform",
            "entity.tag.embedded.end.terraform",
        ],
        "settings": { "foreground": "#569cd6" }
    },
    {
        "scope": [
            "entity.other.attribute-name.terraform",
            "source.terraform.embedded.source",
        ],
        "settings": { "foreground": "#9cdcfe" }
    },

]
