import { TextMateRuleData, ThemeColor } from "@types"

export const terraform: TextMateRuleData[] = [
    {
        scopes: [
            "entity.name.section.terraform",
        ],
        foreground: ThemeColor.FlowControl,
    },
    {
        scopes: [
            "keyword.other.section.begin.terraform",
            "keyword.other.section.end.terraform",
            "keyword.other.function.inline.terraform",
        ],
        foreground: ThemeColor.Functions,
    },
    {
        scopes: [
            "storage.type.function.terraform",
            "entity.tag.embedded.start.terraform",
            "entity.tag.embedded.end.terraform",
        ],
        foreground: ThemeColor.Keywords,
    },
    {
        scopes: [
            "entity.other.attribute-name.terraform",
            "source.terraform.embedded.source",
        ],
        foreground: ThemeColor.Variables,
    },
]
