import { TextMateRuleData, SemanticColor } from "@lib"

export const markdown: TextMateRuleData[] = [
    // =========================================================================
    // Markup
    // =========================================================================
    {
        scopes: [
            "markup.underline",
        ],
        fontStyle: "underline",
    },
    {
        scopes: [
            "markup.bold",
            "strong",
        ],
        fontStyle: "bold",
    },
    {
        scopes: [
            "markup.italic",
            "emphasis",
        ],
        fontStyle: "italic",
    },
    {
        scopes: ["markup.heading"],
        // fontStyle: "bold",
        foreground: "#569cd6",
    },
    {
        scopes: ["markup.inserted"],
        foreground: "#b5cea8",
    },
    {
        scopes: ["markup.deleted"],
        foreground: "#ce9178",
    },
    {
        scopes: ["markup.changed"],
        foreground: "#569cd6",
    },
    {
        scopes: ["markup.inline.raw"],
        foreground: "#ce9178",
    },
    // =========================================================================
    // Markdown
    // =========================================================================
    {
        scopes: ["fenced_code.block.language"],
        foreground: "#4ec9b0",
    },
    {
        scopes: ["markup.italic.markdown"],
        fontStyle: "italic",
        foreground: "#9cdcfe",
    },
    {
        scopes: ["markup.bold.markdown"],
        foreground: "#569cd6",
        fontStyle:  "bold",
    },
    {
        scopes: [
            "meta.separator.markdown",
            "entity.name.section.markdown",
            "punctuation.definition.heading.markdown",
        ],
        foreground: "#c586c0",
    },
    {
        scopes: [
            "markup.quote.markdown",
        ],
        foreground: "#608b4e",
    },
    {
        scopes: [
            "beginning.punctuation.definition.list.markdown",
            "punctuation.definition.list.begin.markdown",
        ],
        foreground: "#6796e6",
    },
    {
        scopes: [
            // "meta.link.inline.markdown"
            "string.other.link.description.markdown",
            "string.other.link.title.markdown",
        ],
        foreground: "#9cdcfe",
    },
    {
        scopes: [
            "markup.underline.link.markdown",
            "markup.underline.link.image.markdown",
        ],
        foreground: "#404040",
    },
    {
        scopes: [
            "markup.fenced_code.block.markdown punctuation.definition.markdown",
            "punctuation.definition.italic.markdown",
            "punctuation.definition.bold.markdown",
            "punctuation.definition.raw.markdown",
            "beginning.punctuation.definition.quote.markdown",
            "meta.link.reference.def.markdown punctuation.definition.constant.markdown",
            "meta.link.reference.def.markdown punctuation.separator.key-value.markdown",
            "meta.link.reference.markdown punctuation.definition.constant.begin.markdown",
            "meta.link.reference.markdown punctuation.definition.constant.end.markdown",
            "meta.image.reference.markdown punctuation.definition.constant.markdown",
            "block-dollars",
            "inline-dollars",
        ],
        foreground: "#303030",
    },
    {
        scopes: [
            // "meta.link.reference.markdown",
            "meta.link.reference.def.markdown constant.other.reference.link.markdown",
            // "punctuation.definition.constant.begin.markdown",
        ],
        foreground: "#569cd6",
    },
    {
        scopes: [
            "meta.link.reference.markdown constant.other.reference.link.markdown",
            "meta.image.reference.markdown constant.other.reference.link.markdown",
        ],
        foreground: "#404040",
        fontStyle:  "italic",
    },
    {
        scopes: [
            "meta.link.reference.def.markdown markup.underline.link.markdown",
        ],
        foreground: "#ce9178",
    },
]
