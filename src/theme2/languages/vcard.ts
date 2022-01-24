/**
 * [cstrachan88/vscode-vcard](https://github.com/cstrachan88/vscode-vcard)
 */
import { TextMateRuleData, SemanticColor } from "@lib"

export const vcard: TextMateRuleData[] = [
    {
        scopes: [
            "source.vcard support.function.vcard",
        ],
        foreground: "#C586C0",
    },
    {
        scopes: [
            "source.vcard support.function.vcard keyword.control.property.vcard",
        ],
        foreground: "#9CDCFE",
    },
    {
        scopes: [
            "source.vcard support.function.vcard entity.name.type.attribute.vcard",
        ],
        foreground: "#CE9178",
    },
    {
        scopes: [
            "source.vcard support.function.vcard keyword.other.expansion.property.vcard",
        ],
        foreground: "#569CD6",
    },
]
