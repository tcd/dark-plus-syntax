import { TextMateRuleData, ThemeColor } from "@types"

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
        foreground: ThemeColor.Keywords,
    },
    {
        scopes: ["markup.inserted"],
        foreground: ThemeColor.Numbers,
    },
    {
        scopes: ["markup.deleted"],
        foreground: ThemeColor.Strings,
    },
    {
        scopes: ["markup.changed"],
        foreground: ThemeColor.Keywords,
    },
    {
        scopes: ["markup.inline.raw"],
        foreground: ThemeColor.Strings,
    },
    // =========================================================================
    // Markdown
    // =========================================================================
    {
        scopes: ["fenced_code.block.language"],
        foreground: ThemeColor.Types,
    },
    {
        scopes: ["markup.italic.markdown"],
        fontStyle: "italic",
        foreground: ThemeColor.Variables,
    },
    {
        scopes: ["markup.bold.markdown"],
        foreground: ThemeColor.Keywords,
        fontStyle:  "bold",
    },
    {
        scopes: [
            "meta.separator.markdown",
            "entity.name.section.markdown",
            "punctuation.definition.heading.markdown",
        ],
        foreground: ThemeColor.FlowControl,
    },
    {
        scopes: [
            "markup.quote.markdown",
        ],
        foreground: ThemeColor.DocComments,
    },
    // FIXME: extra color #6796e6
    {
        scopes: [
            "beginning.punctuation.definition.list.markdown",
            "punctuation.definition.list.begin.markdown",
        ],
        foreground: ThemeColor.Keywords,
    },
    {
        scopes: [
            // "meta.link.inline.markdown"
            "string.other.link.description.markdown",
            "string.other.link.title.markdown",
        ],
        foreground: ThemeColor.Variables,
    },
    {
        scopes: [
            "markup.underline.link.markdown",
            "markup.underline.link.image.markdown",
            "meta.link.email.lt-gt.markdown",
        ],
        foreground: ThemeColor.Noise,
    },
    {
        scopes: [
            "punctuation.definition.string.begin.markdown",
            "punctuation.definition.string.end.markdown",
            "punctuation.definition.metadata.markdown",
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
        foreground: ThemeColor.Noise,
    },
    {
        scopes: [
            // "meta.link.reference.markdown",
            "meta.link.reference.def.markdown constant.other.reference.link.markdown",
            // "punctuation.definition.constant.begin.markdown",
            "text.html.markdown meta.paragraph.markdown meta.link.inet.markdown markup.underline.link.markdown",
        ],
        foreground: ThemeColor.Keywords,
    },
    {
        scopes: [
            "meta.link.reference.markdown constant.other.reference.link.markdown",
            "meta.image.reference.markdown constant.other.reference.link.markdown",
        ],
        foreground: ThemeColor.Noise,
        fontStyle:  "italic",
    },
    {
        scopes: [
            "meta.link.reference.def.markdown markup.underline.link.markdown",
        ],
        foreground: ThemeColor.Strings,
    },
]
