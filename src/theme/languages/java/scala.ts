import { TextMateRuleData, SemanticColor } from "@types"

export const scala: TextMateRuleData[] = [
    {
        scopes: [
            "storage.type.scala",
            "storage.type.primitive.scala",
            "meta.colon.scala",
        ],
        foreground: SemanticColor.Types,
    },
]
