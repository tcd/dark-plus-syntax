import { TextMateRuleData, ThemeColor } from "@types"

export const scala: TextMateRuleData[] = [
    {
        scopes: [
            "storage.type.scala",
            "storage.type.primitive.scala",
            "meta.colon.scala",
        ],
        foreground: ThemeColor.Types,
    },
]
