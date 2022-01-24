import { TextMateRuleData, SemanticColor } from "@lib"

export const styledComponents: TextMateRuleData[] = [
    {
        scopes: [
            "punctuation.semi-colon.css",
            "meta.brace.curly.css",
        ],
        foreground: "#505050",
    },
    {
        scopes: [
            "constant.hex.css",
            "meta.identifier.css",
        ],
        foreground: "#ce9178",
    },
    {
        scopes: [
            "constant.percentage.units.css",
            "constant.length.units.css",
            "entity.other.keyframe-offset.percentage.css",
        ],
        foreground: "#b5cea8",
    },
    {
        scopes: [
            "entity.name.tag.styledcss.js",
        ],
        foreground: "#4ec9b0",
    },
]
