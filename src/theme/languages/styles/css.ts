import { TextMateRuleData, SemanticColor } from "@lib"

/**
 * CSS and SCSS
 *
 * ## Extensions
 *
 * - [robinbentley/vscode-sass-indented](https://github.com/robinbentley/vscode-sass-indented)
 */
export const css: TextMateRuleData[] = [
    {
        scopes: [
            "meta.property-list.scss",
            "punctuation.separator.key-value.css",
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
        foreground: SemanticColor.Tags,
    },
    {
        scopes: [
            "punctuation.terminator.rule.css",
            "punctuation.terminator.rule.scss",
        ],
        foreground: SemanticColor.Noise,
    },
    {
        scopes: [
            "keyword.other.important.css",
            "keyword.other.important.sass",
            "keyword.other.important.scss",
            "keyword.other.important.less",

            "keyword.other.default.scss",
            "keyword.other.default.sass",
        ],
        fontStyle: "italic",
    },
    {
        scopes: [
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
        foreground: SemanticColor.Chars,
    },
    {
        scopes: [
            "invalid.deprecated.color.system.css",
            "punctuation.separator.list.comma.css",
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
            "punctuation.separator.key-value.css",
            "punctuation.separator.key-value.scss",
            "constant.other.scss",
            // "meta.property-list.css punctuation.separator.key-value.css",
        ],
        foreground: SemanticColor.Foreground,
    },
    {
        scopes: [
            "entity.name.tag.css",
            "keyword.other.important.css",
            "keyword.other.default.scss",
            "punctuation.definition.interpolation.begin.bracket.curly",
            "punctuation.definition.interpolation.end.bracket.curly",
        ],
        foreground: SemanticColor.Keywords,
    },
    {
        // "name":  "Variables",
        scopes: [
            "support.type.property-name.media.css",
            "support.type.property-name",
            "variable.css",
            "variable.scss",
            "variable.other.less",
            "support.type.vendored.property-name.css",
            "meta.at-rule.include.scss",
            "support.constant.vendored.property-value.css",
        ],
        foreground: SemanticColor.Variables,
    },
    {
        "name":  "Real Variables",
        scopes: [
            "variable.css",
            "variable.argument.css",
            "variable.scss",
            "variable.other.less",
        ],
        foreground: SemanticColor.Types,
    },
    {
        scopes: [
            "source.css meta.at-rule.keyframes.body.css entity.other.keyframe-offset.css",
        ],
        foreground: SemanticColor.Variables,
        fontStyle:  "italic",
    },
    {
        scopes: [
            "meta.attribute-selector.css",
        ],
        foreground: SemanticColor.Types,
    },
    {
        "name":  "CSS property value",
        scopes: [
            "support.constant.property-value",
            "support.constant.font-name",
            "support.constant.media-type",
            "support.constant.media",
            "constant.other.color.rgb-value",
            "constant.other.rgb-value",
            "support.constant.color",
        ],
        foreground: SemanticColor.Strings,
    },
    {
        scopes: [
            "entity.other.attribute-name.pseudo-element.css punctuation.definition.entity.css",
            "meta.selector.css entity.other.attribute-name.pseudo-class.css punctuation.definition.entity.css",
            "punctuation.definition.entity.begin.bracket.square.css",
            "punctuation.definition.entity.end.bracket.square.css",
            "entity.other.attribute-name.pseudo-element.css",
            "entity.other.attribute-name.pseudo-class.css",
            "support.constant.mathematical-symbols.scss",
            // "text.html.basic meta.embedded.block.html source.css meta.selector.css entity.other.attribute-name.pseudo-class.css"
        ],
        foreground: SemanticColor.FlowControl,
    },
]
