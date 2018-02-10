module.exports = [
    {
        "scope": "emphasis",
        "settings": {"fontStyle": "italic"}
    },
    {
        "scope": "strong",
        "settings": {"fontStyle": "bold"}
    },
    {
        "scope": "markup.italic.markdown",
        "settings": {
            "fontStyle": "italic",
            "foreground": "#9cdcfe"
        }
    },
    {
        "scope": ["markup.bold.markdown"],
        "settings": {
            "fontStyle": "bold",
            "foreground": "#569cd6"
        }
    },
    {
        "scope": [
            "entity.name.section.markdown",
            "punctuation.definition.heading.markdown",
        ],
        "settings": {"foreground": "#c586c0"}
    },
    {
        "scope": "beginning.punctuation.definition.quote.markdown",
        "settings": {"foreground": "#608b4e"}
    },
    {
        "scope": "beginning.punctuation.definition.list.markdown",
        "settings": {"foreground": "#6796e6"}
    },
    // {
    //     "scope": [
    //         "meta.link.inline.markdown"
    //     ],
    //     "settings": {"foreground": "#9cdcfe"}
    // },
    {
        "scope": [
            "markup.underline.link.markdown",
            "punctuation.definition.italic.markdown",
            "punctuation.definition.bold.markdown"
        ],
        "settings": {"foreground": "#505050"}
    },
    {
        "scope": "string.other.link.title.markdown",
        "settings": {"foreground": "#9cdcfe"}
    },
    {
        "scope": [
            "constant.other.reference.link.markdown",
            "meta.link.reference.markdown",
            "punctuation.definition.constant.begin.markdown"
        ],
        "settings": {"foreground": "#569cd6"}
    },
    {
        "scope": "meta.separator.markdown",
        "settings": {"foreground": "#007acc"}
    },
]
