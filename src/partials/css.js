module.exports = [
    {
        "scope": [
            "meta.property-list.scss",
            "punctuation.terminator.rule.css",
            "punctuation.terminator.rule.scss",
            "punctuation.separator.key-value.css",
            "punctuation.separator.list.comma.css",
            "punctuation.section.property-list.begin.bracket.curly",
            "punctuation.section.property-list.end.bracket.curly",
            "punctuation.section.media.begin.bracket.curly",
            "punctuation.section.media.end.bracket.curly",
            "punctuation.section.keyframes.begin.bracket.curly.scss",
            "punctuation.section.keyframes.end.bracket.curly.scss",
            "source.css.scss meta.at-rule.keyframes.scss punctuation.section.keyframes.begin.scss",
            "source.css.scss meta.at-rule.keyframes.scss punctuation.section.keyframes.end.scss",
            "punctuation.section.supports.begin.bracket.curly",
            "punctuation.section.supports.end.bracket.curly",
        ],
        "settings": { "foreground": "#505050" },
    },
    {
        "scope": [
            "entity.other.attribute-name.class.css",
            "entity.other.attribute-name.class.mixin.css",
            "entity.other.attribute-name.id.css",
            "entity.other.attribute-name.parent-selector.css",
            "entity.other.attribute-name.pseudo-class.css",
            "entity.other.attribute-name.pseudo-element.css",
            "source.css.less entity.other.attribute-name.id",
            "entity.other.attribute-name.attribute.scss",
            "entity.other.attribute-name.scss",
            "meta.at-rule.keyframes.stylus entity.other.attribute-name.stylus",
            "meta.at-rule.keyframes.scss entity.other.attribute-name.scss",
        ],
        "settings": { "foreground": "#d7ba7d" },
    },
    {
        "scope": [
            "invalid.deprecated.color.system.css",
            "punctuation.section.function.begin.bracket.round.css",
            "punctuation.section.function.end.bracket.round.css",
            "punctuation.definition.media-query.begin.bracket.round",
            "punctuation.definition.media-query.end.bracket.round",
            "punctuation.definition.pseudo-class.begin.bracket.round",
            "punctuation.definition.pseudo-class.end.bracket.round",
            "meta.property-value.scss",
            "meta.property-name.scss",
            "meta.at-rule.extend",
            "meta.at-rule.extend.sass",
            "meta.at-rule.extend.scss",
            "punctuation.section.function.scss",
            "punctuation.section.keyframes.begin.scss",
            "punctuation.section.keyframes.end.scss",
            "constant.other.scss",
        ],
        "settings": { "foreground": "#d4d4d4" },
    },
    {
        "scope": [
            "entity.name.tag.css",
            "keyword.other.important.css",
            "keyword.other.default.scss",
            "punctuation.definition.interpolation.begin.bracket.curly",
            "punctuation.definition.interpolation.end.bracket.curly",
        ],
        "settings": { "foreground": "#569cd6" },
    },
    {
        "name" : "Variables",
        "scope": [
            "support.type.property-name.media.css",
            "support.type.property-name",
            "variable.css",
            "variable.scss",
            "variable.other.less",
            "support.type.vendored.property-name.css",
            "support.constant.vendored.property-value.css",
        ],
        "settings": { "foreground": "#9cdcfe" },
    },
    {
        "scope": [
            "meta.attribute-selector.css",
        ],
        "settings": { "foreground": "#4ec9b0" },
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
            "support.constant.color",
        ],
        "settings": { "foreground": "#ce9178" },
    },
    {
        "scope": [
            "entity.other.attribute-name.pseudo-element.css punctuation.definition.entity.css",
            "meta.selector.css entity.other.attribute-name.pseudo-class.css punctuation.definition.entity.css",
            "punctuation.definition.entity.begin.bracket.square.css",
            "punctuation.definition.entity.end.bracket.square.css",
            "entity.other.attribute-name.pseudo-element.css",
            "entity.other.attribute-name.pseudo-class.css",
            // "text.html.basic meta.embedded.block.html source.css meta.selector.css entity.other.attribute-name.pseudo-class.css"
        ],
        "settings": { "foreground": "#c586c0" },
    },
    // =========================================================================
    // Stylus
    // =========================================================================
    {
        "scope": "punctuation.definition.keyword.stylus",
        "settings": { "foreground": "#c586c0" },
    },
    {
        "scope": "meta.interpolation.stylus",
        "settings": { "foreground": "#9cdcfe" },
    },
    {
        "scope": "variable.stylus",
        "settings": { "foreground": "#4ec9b0" },
    },
    {
        "scope": "entity.other.attribute-name.parent-selector-suffix.stylus",
        "settings": { "foreground": "#d7ba7d" },
    },
    {
        "scope": "meta.interpolation.stylus meta.brace.curly",
        "settings": { "foreground": "#569cd6" },
    },
    // =========================================================================
    // Styled Components
    // =========================================================================
    {
        "scope": [
            "punctuation.semi-colon.css",
            "meta.brace.curly.css",
        ],
        "settings": { "foreground": "#505050" },
    },
    {
        "scope": [
           "constant.hex.css",
           "meta.identifier.css",
        ],
        "settings": { "foreground": "#ce9178" },
    },
    {
        "scope": [
            "constant.percentage.units.css",
            "constant.length.units.css",
            "entity.other.keyframe-offset.percentage.css",
        ],
        "settings": { "foreground": "#b5cea8" },
    },
    {
        "scope": [
            "entity.name.tag.styledcss.js",
        ],
        "settings": { "foreground": "#4ec9b0" },
    },
];
