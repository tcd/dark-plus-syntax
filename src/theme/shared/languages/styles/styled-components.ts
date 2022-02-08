import { TextMateRuleData, ThemeColor } from "@types"

export const styledComponents: TextMateRuleData[] = [
    {
        scopes: [
            "punctuation.semi-colon.css",
            "meta.brace.curly.css",
        ],
        foreground: ThemeColor.Tags,
    },
    {
        scopes: [
            "constant.hex.css",
            "meta.identifier.css",
        ],
        foreground: ThemeColor.Strings,
    },
    {
        scopes: [
            "constant.percentage.units.css",
            "constant.length.units.css",
            "entity.other.keyframe-offset.percentage.css",
        ],
        foreground: ThemeColor.Numbers,
    },
    {
        scopes: [
            "entity.name.tag.styledcss.js",
        ],
        foreground: ThemeColor.Types,
    },
]
