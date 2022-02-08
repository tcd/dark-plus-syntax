import { TextMateRuleData, ThemeColor } from "@types"

/**
 * Protocol Buffers
 *
 * ## Extensions
 *
 * - [zxh0/vscode-proto3](https://github.com/zxh0/vscode-proto3)
 */
export const protobuf: TextMateRuleData[] = [
    {
        scopes: [
            "constant.language.proto",
            "keyword.other.proto",
            "storage.type.proto",
            "storage.modifier.proto",
            "punctuation.definition.typeparameters.begin.proto",
            "punctuation.definition.typeparameters.end.proto",
        ],
        foreground: ThemeColor.Keywords,
    },
    {
        scopes: [
            "entity.name.class.proto",
            "entity.name.class.message.proto",
        ],
        foreground: ThemeColor.Types,
    },
    {
        scopes: [
            "punctuation.separator.key-value.proto",
        ],
        foreground: ThemeColor.FlowControl,
    },
    {
        scopes: [
            "variable.other.proto",
        ],
        foreground: ThemeColor.Variables,
    },
    {
        scopes: [
            "constant.numeric.proto",
        ],
        foreground: ThemeColor.Numbers,
    },
]
