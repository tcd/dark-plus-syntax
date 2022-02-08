import { TextMateRuleData, ThemeColor } from "@types"

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
        foreground: ThemeColor.Types,
    },
    {
        scopes: [
            "meta.template.expression.kotlin",
        ],
        foreground: ThemeColor.Variables,
    },
    {
        scopes: [
            "keyword.hard.kotlin",
            "keyword.operator.kotlin",
        ],
        foreground: ThemeColor.FlowControl,
    },
]
