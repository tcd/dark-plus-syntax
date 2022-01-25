import { SemanticColor, SemanticColorPalette, TextMateRuleData } from "@lib"
import { DarkPlusPalette } from "@src/palettes"

export const buildRules = (palette: SemanticColorPalette, rules: TextMateRuleData[]): VsCodeTextMate.TextMateRules => {
    let result: VsCodeTextMate.TextMateRules = rules.map((rule) => {
        let textMateRule: VsCodeTextMate.TextMateRule = {
            scope: rule.scopes,
            settings: {
                foreground: palette[rule.foreground],
                fontStyle:  rule.fontStyle,
            },
        }
        return textMateRule
    })
    return result
}

const _exceptions = [
    {
        scopes: [
            "beginning.punctuation.definition.list.markdown",
            "punctuation.definition.list.begin.markdown",
        ],
        foreground: "#6796e6",
    },
    {
        scopes:    ["makup.bold.rainbow9"],
        foreground: "#007acc",
    },
]
