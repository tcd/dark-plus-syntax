import { TextMateRuleData, SemanticColor } from "@types"

/**
 * ## Extensions
 *
 * - [fwcd/vscode-kotlin](https://github.com/fwcd/vscode-kotlin)
 *   - pretty bare bones
 */
export const kotlin: TextMateRuleData[] = [
    {
        scopes: [
            "storage.type.builtin.kotlin",
            "storage.type.builtin.collection.kotlin",
            "entity.name.package.kotlin",
        ],
        foreground: SemanticColor.Types,
    },
    {
        scopes: [
            "meta.template.expression.kotlin",
        ],
        foreground: SemanticColor.Variables,
    },
    {
        scopes: [
            "keyword.hard.kotlin",
            "keyword.operator.kotlin",
        ],
        foreground: SemanticColor.FlowControl,
    },
]
