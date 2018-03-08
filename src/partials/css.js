module.exports = [
    {
        "name": "Style Selectors",
        "scope": [
            "entity.other.attribute-name.class.css",
            "entity.other.attribute-name.class.mixin.css",
            "entity.other.attribute-name.id.css",
            "entity.other.attribute-name.parent-selector.css",
            "entity.other.attribute-name.pseudo-class.css",
            "entity.other.attribute-name.pseudo-element.css",
            "source.css.less entity.other.attribute-name.id",
            "entity.other.attribute-name.attribute.scss",
            "entity.other.attribute-name.scss"
        ],
        "settings": { "foreground": "#d7ba7d" }
    },
    {
        "scope": "entity.name.tag.css",
        "settings": { "foreground": "#569cd6" }
    },
    {
        "name" : "Variables",
        "scope": [
            "support.type.vendored.property-name",
            "support.type.property-name",
            "variable.css",
            "variable.scss",
            "variable.other.less",
            "source.coffee.embedded"
        ],
        "settings": { "foreground": "#9cdcfe" }
    },
    {
        "name": "CSS property value",
        "scope": [
            "support.constant.property-value",
            "support.constant.font-name",
            "support.constant.media-type",
            "support.constant.media",
            "constant.other.color.rgb-value",
            "constant.other.rgb-value",
            "support.constant.color"
        ],
        "settings": { "foreground": "#ce9178" }
    }
]
