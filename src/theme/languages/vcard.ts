/**
 * [cstrachan88/vscode-vcard](https://github.com/cstrachan88/vscode-vcard)
 */
export const vcard: VsCodeTextMate.TextMateRules = [
    {
        scope: [
            "source.vcard support.function.vcard",
        ],
        settings: { foreground: "#C586C0" }
    },
    {
        scope: [ "source.vcard support.function.vcard keyword.control.property.vcard" ],
        settings: { foreground: "#9CDCFE" }
    },
    {
        scope: [ "source.vcard support.function.vcard entity.name.type.attribute.vcard" ],
        settings: { foreground: "#CE9178" }
    },
    {
        scope: [ "source.vcard support.function.vcard keyword.other.expansion.property.vcard" ],
        settings: { foreground: "#569CD6" }
    },
]
