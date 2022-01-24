import { TextMateRuleData, SemanticColor } from "@lib"

export const cfml: TextMateRuleData[] = [
    // =========================================================================
    // ColdFusion Markup Language
    // =========================================================================
    {
        scopes: [
            "comment.block.cfml",
            "comment.line.cfml",
        ],
        foreground: "#608B4E",
    },
    {
        scopes: [
            "punctuation.definition.template-expression.begin.cfml",
            "punctuation.definition.template-expression.end.cfml",
            "constant.character.hash.cfml.start", // ilich/vscode-coldfusion
            "constant.character.hash.cfml.end",   // ilich/vscode-coldfusion
        ],
        foreground: "#569CD6",
    },
    {
        scopes: [
            "meta.property.cfml",
            "meta.property.constant.cfml",
        ],
        foreground: "#9CDCFE",
    },
    {
        scopes: [
            // "entity.name.tag.cfml",
            "punctuation.accessor.cfml",
        ],
        foreground: "#C586C0",
    },
    {
        scopes: [
            "entity.name.tag.custom.cfml",
        ],
        foreground: "#4EC9B0",
    },
    {
        scopes: [
            "entity.name.tag.cfml",
        ],
        foreground: "#808080",
    },
    {
        scopes: [
            "punctuation.definition.tag.begin.cfml",
            "punctuation.definition.tag.end.cfml",
        ],
        foreground: "#505050",
    },
]
