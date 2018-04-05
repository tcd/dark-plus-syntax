module.exports = [
    // SECTION: markup
    {
        "scope": "markup.underline",
        "settings": { "fontStyle": "underline" }
    },
    {
        "scope": [
            "markup.bold",
            "strong"
        ],
        "settings": { "fontStyle": "bold" }
    },
    {
        "scope": [
            "markup.italic",
            "emphasis"
        ],
        "settings": { "fontStyle": "italic" }
    },
    {
        "scope": "markup.heading",
        "settings": {
            "fontStyle": "bold",
            "foreground": "#569cd6"
        }
    },
    {
        "scope": "markup.inserted",
        "settings": { "foreground": "#b5cea8" }
    },
    {
        "scope": "markup.deleted",
        "settings": { "foreground": "#ce9178" }
    },
    {
        "scope": "markup.changed",
        "settings": { "foreground": "#569cd6" }
    },
    {
        "scope": "markup.inline.raw",
        "settings": { "foreground": "#ce9178" }
    },
    {
        "scope": "fenced_code.block.language",
        "settings": { "foreground": "#4ec9b0" }
    },
    {
        "scope": "markup.italic.markdown",
        "settings": {
            "fontStyle": "italic",
            "foreground": "#9cdcfe"
        }
    },
    {
        "scope": [ "markup.bold.markdown" ],
        "settings": {
            "fontStyle": "bold",
            "foreground": "#569cd6"
        }
    },
    {
        "scope": [
            "meta.separator.markdown",
            "entity.name.section.markdown",
            "punctuation.definition.heading.markdown",
        ],
        "settings": { "foreground": "#c586c0" }
    },
    {
        "scope": [
            "markup.quote.markdown"
        ],
        "settings": { "foreground": "#608b4e" }
    },
    {
        "scope": "beginning.punctuation.definition.list.markdown",
        "settings": { "foreground": "#6796e6" }
    },
    {
        "scope": [
                // "meta.link.inline.markdown"
                    "string.other.link.title.markdown"
        ],
        "settings": {"foreground": "#9cdcfe"}
    },
    {
        "scope": [
            "markup.underline.link.markdown",
            "markup.fenced_code.block.markdown punctuation.definition.markdown",
            "punctuation.definition.italic.markdown",
            "punctuation.definition.bold.markdown",
            "punctuation.definition.raw.markdown",
            "beginning.punctuation.definition.quote.markdown",
        ],
        "settings": { "foreground": "#505050" }
    },
    {
        "scope": [
            "constant.other.reference.link.markdown",
            "meta.link.reference.markdown",
            "punctuation.definition.constant.begin.markdown"
        ],
        "settings": { "foreground": "#569cd6" }
    },
    // {
    //     "scope": "meta.separator.markdown",
    //     "settings": { "foreground": "#007acc" }
    // },
]
