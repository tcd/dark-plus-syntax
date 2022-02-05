import { TextMateRuleData, SemanticColor } from "@lib"

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
        ],
        foreground: SemanticColor.FlowControl,
    },
]
