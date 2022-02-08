import { FontStyleString, ThemeColor, TokenScopes } from "@types"

export interface TextMateRuleData {
    name?: string
    scopes: TokenScopes
    /**
     * Foreground color
     */
    foreground?: ThemeColor
    /**
     * Any combination of the following values:
     *
     * - "italic"
     * - "bold"
     * - "underline"
     * - "strikethrough"
     */
    fontStyle?: FontStyleString | undefined
}
