/**
 * - [cstrachan88/vscode-vcard](https://github.com/cstrachan88/vscode-vcard)
 */
import { TextMateRuleData, SemanticColor } from "@lib"

export const vcard: TextMateRuleData[] = [
    {
        scopes: [
            "source.vcard support.function.vcard",
        ],
        foreground: SemanticColor.FlowControl,
    },
    {
        scopes: [
            "source.vcard support.function.vcard keyword.control.property.vcard",
        ],
        foreground: SemanticColor.Variables,
    },
    {
        scopes: [
            "source.vcard support.function.vcard entity.name.type.attribute.vcard",
        ],
        foreground: SemanticColor.Strings
    },
    {
        scopes: [
            "source.vcard support.function.vcard keyword.other.expansion.property.vcard",
        ],
        foreground: SemanticColor.Keywords,
    },
]
