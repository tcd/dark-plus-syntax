import { SemanticColor, SemanticColorPalette, TextMateRuleData } from "@lib"

export const buildRules = (palette: SemanticColorPalette, rules: TextMateRuleData[]): VsCodeTextMate.TextMateRules => {

    let result: VsCodeTextMate.TextMateRules = rules.map((rule) => {

        let textMateRule: VsCodeTextMate.TextMateRule = {
            scope:    rule.scopes,
            settings: {},
        }

        if (rule.name) {
            textMateRule.name = rule.name
        }

        if (rule.fontStyle) {
            textMateRule.settings.fontStyle = rule.fontStyle
        }

        if (rule.foreground) {
            textMateRule.settings.foreground = palette[rule.foreground]
        }

        return textMateRule
    })

    return result
}
