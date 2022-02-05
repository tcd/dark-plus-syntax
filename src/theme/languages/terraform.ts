import { TextMateRuleData, SemanticColor } from "@lib"

export const terraform: TextMateRuleData[] = [
    {
        scopes: [
            "entity.name.section.terraform",
        ],
        foreground: SemanticColor.FlowControl,
    },
    {
        scopes: [
            "keyword.other.section.begin.terraform",
            "keyword.other.section.end.terraform",
            "keyword.other.function.inline.terraform",
        ],
        foreground: SemanticColor.Functions,
    },
    {
        scopes: [
            "storage.type.function.terraform",
            "entity.tag.embedded.start.terraform",
            "entity.tag.embedded.end.terraform",
        ],
        foreground: SemanticColor.Keywords,
    },
    {
        scopes: [
            "entity.other.attribute-name.terraform",
            "source.terraform.embedded.source",
        ],
        foreground: SemanticColor.Variables,
    },
]
