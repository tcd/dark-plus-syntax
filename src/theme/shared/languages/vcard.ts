/**
 * - [cstrachan88/vscode-vcard](https://github.com/cstrachan88/vscode-vcard)
 */
import { TextMateRuleData, ThemeColor } from "@types"

export const vcard: TextMateRuleData[] = [
    {
        scopes: [
            "source.vcard support.function.vcard",
        ],
        foreground: ThemeColor.FlowControl,
    },
    {
        scopes: [
            "source.vcard support.function.vcard keyword.control.property.vcard",
        ],
        foreground: ThemeColor.Variables,
    },
    {
        scopes: [
            "source.vcard support.function.vcard entity.name.type.attribute.vcard",
        ],
        foreground: ThemeColor.Strings,
    },
    {
        scopes: [
            "source.vcard support.function.vcard keyword.other.expansion.property.vcard",
        ],
        foreground: ThemeColor.Keywords,
    },
]
