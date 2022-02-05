import { TextMateRuleData, SemanticColor } from "@lib"

// ColdFusion Markup Language
//
// God help you if you have to use this. I wish you the best.
export const cfml: TextMateRuleData[] = [
    {
        scopes: [
            "comment.block.cfml",
            "comment.line.cfml",
        ],
        foreground: SemanticColor.DocComments,
    },
    {
        scopes: [
            "punctuation.definition.template-expression.begin.cfml",
            "punctuation.definition.template-expression.end.cfml",
            "constant.character.hash.cfml.start", // ilich/vscode-coldfusion
            "constant.character.hash.cfml.end",   // ilich/vscode-coldfusion
        ],
        foreground: SemanticColor.Keywords,
    },
    {
        scopes: [
            "meta.property.cfml",
            "meta.property.constant.cfml",
        ],
        foreground: SemanticColor.Variables,
    },
    {
        scopes: [
            // "entity.name.tag.cfml",
            "punctuation.accessor.cfml",
        ],
        foreground: SemanticColor.FlowControl,
    },
    {
        scopes: [
            "entity.name.tag.custom.cfml",
        ],
        foreground: SemanticColor.Types,
    },
    {
        scopes: [
            "entity.name.tag.cfml",
        ],
        foreground: SemanticColor.Keywords,
    },
    {
        scopes: [
            "punctuation.definition.tag.begin.cfml",
            "punctuation.definition.tag.end.cfml",
        ],
        foreground: SemanticColor.Tags,
    },
]
