import { FontStyleString, HexColorString } from "@types"

/**
 * Colors and styles for a rule.
 *
 * At least one value (`foreground` or `fontStyle`) must be present.
 */
export interface TokenStyleData {
    /**
     * Foreground color
     */
    foreground?: HexColorString | undefined
    /**
     * Any combination of the following values:
     *
     * - "italic"
     * - "bold"
     * - "underline"
     * - "strikethrough"
     *
     * An empty string unsets inherited settings.
     */
    fontStyle?: FontStyleString | undefined
}
