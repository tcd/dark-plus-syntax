import { TextMateRuleData, SemanticColor } from "@types"

export const styledComponents: TextMateRuleData[] = [
    {
        scopes: [
            "punctuation.semi-colon.css",
            "meta.brace.curly.css",
        ],
        foreground: SemanticColor.Tags,
    },
    {
        scopes: [
            "constant.hex.css",
            "meta.identifier.css",
        ],
        foreground: SemanticColor.Strings,
    },
    {
        scopes: [
            "constant.percentage.units.css",
            "constant.length.units.css",
            "entity.other.keyframe-offset.percentage.css",
        ],
        foreground: SemanticColor.Numbers,
    },
    {
        scopes: [
            "entity.name.tag.styledcss.js",
        ],
        foreground: SemanticColor.Types,
    },
]
