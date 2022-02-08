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
