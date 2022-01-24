import { TextMateRuleData, SemanticColor } from "@lib"

export const terraform: TextMateRuleData[] = [
    {
        scopes: [
            "entity.name.section.terraform",
        ],
        foreground: "#c586c0",
    },
    {
        scopes: [
            "keyword.other.section.begin.terraform",
            "keyword.other.section.end.terraform",
            "keyword.other.function.inline.terraform",
        ],
        foreground: "#dcdcaa",
    },
    {
        scopes: [
            "storage.type.function.terraform",
            "entity.tag.embedded.start.terraform",
            "entity.tag.embedded.end.terraform",
        ],
        foreground: "#569cd6",
    },
    {
        scopes: [
            "entity.other.attribute-name.terraform",
            "source.terraform.embedded.source",
        ],
        foreground: "#9cdcfe",
    },
]
