import { TextMateRuleData, ThemeColor } from "@types"

// ColdFusion Markup Language
//
// God help you if you have to use this. I wish you the best.
export const cfml: TextMateRuleData[] = [
    {
        scopes: [
            "comment.block.cfml",
            "comment.line.cfml",
        ],
        foreground: ThemeColor.DocComments,
    },
    {
        scopes: [
            "punctuation.definition.template-expression.begin.cfml",
            "punctuation.definition.template-expression.end.cfml",
            "constant.character.hash.cfml.start", // ilich/vscode-coldfusion
            "constant.character.hash.cfml.end",   // ilich/vscode-coldfusion
        ],
        foreground: ThemeColor.Keywords,
    },
    {
        scopes: [
            "meta.property.cfml",
            "meta.property.constant.cfml",
        ],
        foreground: ThemeColor.Variables,
    },
    {
        scopes: [
            // "entity.name.tag.cfml",
            "punctuation.accessor.cfml",
        ],
        foreground: ThemeColor.FlowControl,
    },
    {
        scopes: [
            "entity.name.tag.custom.cfml",
        ],
        foreground: ThemeColor.Types,
    },
    {
        scopes: [
            "entity.name.tag.cfml",
        ],
        foreground: ThemeColor.Keywords,
    },
    {
        scopes: [
            "punctuation.definition.tag.begin.cfml",
            "punctuation.definition.tag.end.cfml",
        ],
        foreground: ThemeColor.Tags,
    },
]
