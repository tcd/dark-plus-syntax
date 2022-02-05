import { TextMateRuleData, SemanticColor } from "@lib"

/**
 * ## Extensions
 *
 * - [bpruitt-goddard/vscode-mermaid-syntax-highlight](https://github.com/bpruitt-goddard/vscode-mermaid-syntax-highlight)
 * - [goessner/mdmath](https://github.com/goessner/mdmath)
 */
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
        foreground: SemanticColor.Keywords,
    },
    {
        scopes: ["markup.inserted"],
        foreground: SemanticColor.Numbers,
    },
    {
        scopes: ["markup.deleted"],
        foreground: SemanticColor.Strings,
    },
    {
        scopes: ["markup.changed"],
        foreground: SemanticColor.Keywords,
    },
    {
        scopes: ["markup.inline.raw"],
        foreground: SemanticColor.Strings,
    },
    // =========================================================================
    // Markdown
    // =========================================================================
    {
        scopes: ["fenced_code.block.language"],
        foreground: SemanticColor.Types,
    },
    {
        scopes: ["markup.italic.markdown"],
        fontStyle: "italic",
        foreground: SemanticColor.Variables,
    },
    {
        scopes: ["markup.bold.markdown"],
        foreground: SemanticColor.Keywords,
        fontStyle:  "bold",
    },
    {
        scopes: [
            "meta.separator.markdown",
            "entity.name.section.markdown",
            "punctuation.definition.heading.markdown",
        ],
        foreground: SemanticColor.FlowControl,
    },
    {
        scopes: [
            "markup.quote.markdown",
        ],
        foreground: SemanticColor.DocComments,
    },
    // FIXME: extra color #6796e6
    {
        scopes: [
            "beginning.punctuation.definition.list.markdown",
            "punctuation.definition.list.begin.markdown",
        ],
        foreground: SemanticColor.Keywords,
    },
    {
        scopes: [
            // "meta.link.inline.markdown"
            "string.other.link.description.markdown",
            "string.other.link.title.markdown",
        ],
        foreground: SemanticColor.Variables,
    },
    {
        scopes: [
            "markup.underline.link.markdown",
            "markup.underline.link.image.markdown",
        ],
        foreground: SemanticColor.Noise,
    },
    {
        scopes: [
            "punctuation.definition.metadata.markdown",
            "punctuation.definition.raw.markdown",
            "punctuation.definition.link.markdown",
            "punctuation.definition.italic.markdown",
            "punctuation.definition.bold.markdown",
            "punctuation.definition.raw.markdown",
            "beginning.punctuation.definition.quote.markdown",
            "markup.fenced_code.block.markdown punctuation.definition.markdown",
            "meta.link.reference.def.markdown punctuation.definition.constant.markdown",
            "meta.link.reference.def.markdown punctuation.separator.key-value.markdown",
            "meta.link.reference.markdown punctuation.definition.constant.begin.markdown",
            "meta.link.reference.markdown punctuation.definition.constant.end.markdown",
            "meta.image.reference.markdown punctuation.definition.constant.markdown",
            "punctuation.definition.link.title.begin.markdown",
            "punctuation.definition.link.title.end.markdown",
            "block-dollars",
            "inline-dollars",
        ],
        foreground: SemanticColor.Noise,
    },
    {
        scopes: [
            // "meta.link.reference.markdown",
            "meta.link.reference.def.markdown constant.other.reference.link.markdown",
            // "punctuation.definition.constant.begin.markdown",
            "text.html.markdown meta.paragraph.markdown meta.link.inet.markdown markup.underline.link.markdown",
        ],
        foreground: SemanticColor.Keywords,
    },
    {
        scopes: [
            "meta.link.reference.markdown constant.other.reference.link.markdown",
            "meta.image.reference.markdown constant.other.reference.link.markdown",
        ],
        foreground: SemanticColor.Noise,
        fontStyle:  "italic",
    },
    {
        scopes: [
            "meta.link.reference.def.markdown markup.underline.link.markdown",
        ],
        foreground: SemanticColor.Strings,
    },
]
