import { TextMateRuleData, SemanticColor } from "@lib"

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
