import { TokenScopes, TokenStyleData } from "@types"

/**
 * A TextMate theming rule used to set colors and styles.
 */
export class TextMateRule {
    /**
     * Description of the rule. Optional.
     */
    name?: string
    /**
     * Scope selector against which this rule matches.
     */
    scope: TokenScopes
    /**
     * Colors and styles for the rule.
     */
    settings: TokenStyleData
}
