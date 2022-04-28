import { ThemeColorPalette, TextMateRuleData, TextMateRule } from "@types"

export const buildRules = (palette: ThemeColorPalette, rules: TextMateRuleData[]): TextMateRule[] => {

    let result: TextMateRule[] = rules.map((rule) => {

        const scopes = rule.scopes.map((scope) => {
            if (Array.isArray(scope)) { return scope.join(" ") }
            else                      { return scope           }
        })

        let textMateRule: TextMateRule = {
            scope:    scopes,
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
