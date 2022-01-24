import { TextMateRuleData, SemanticColor } from "@lib"

export const kotlin: TextMateRuleData[] = [
    {
        scopes: [
            "storage.type.builtin.kotlin",
            "storage.type.builtin.collection.kotlin",
            "entity.name.package.kotlin",
        ],
        foreground: "#4ec9b0",
    },
    {
        scopes: [
            "meta.template.expression.kotlin",
        ],
        foreground: "#9cdcfe",
    },
    {
        scopes: [
            "keyword.hard.kotlin",
        ],
        foreground: "#c586c0",
    },
]
