import { ThemeColorPalette, TextMateRuleData, TextMateRule } from "@types"

export const buildRules = (palette: ThemeColorPalette, rules: TextMateRuleData[]): TextMateRule[] => {

    let result: TextMateRule[] = rules.map((rule) => {

        let textMateRule: TextMateRule = {
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
