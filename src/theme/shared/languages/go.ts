import { TextMateRuleData, ThemeColor } from "@types"

/**
 * ## Extensions
 *
 * - [Microsoft/vscode-go](https://github.com/Microsoft/vscode-go)
 *   - very poor syntax provided
 * - [dunstontc/vscode-go-syntax](https://github.com/dunstontc/vscode-go-syntax)
 *   - `go`
 *   - `gohtml`
 *   - `gotemplate`
 *
 * ## File Types
 *
 * - `go`
 * - `gohtml`
 * - `gotemplate`
 */
export const go: TextMateRuleData[] = [
    {
        scopes: [
            "keyword.operator.assignment.go",
            "keyword.operator.arithmetic.go",
            "keyword.operator.comparison.go",
            "keyword.operator.address.go",
            "keyword.operator.arithmetic.bitwise.go",
            "punctuation.terminator.go",
            "punctuation.other.colon.go",
            "punctuation.other.period.go",
            "keyword.control.gotemplate",
        ],
        foreground: ThemeColor.FlowControl,
    },
    {
        scopes: [
            "string.quoted.double.gotemplate",
        ],
        foreground: ThemeColor.Strings,
    },
    // {
    //     scopes: [
    //         "constant.other.rune.go",
    //     ],
    //     fontStyle: "italic",
    // },
    {
        scopes: [
            "source.go storage.type",
            // These don't need to be defined explicitly, the above scope covers them. I just left them to be thorough.
            "storage.type.boolean.go",
            "storage.type.byte.go",
            "storage.type.numeric.go",
            "storage.type.string.go",
            "storage.type.error.go",
            "storage.type.rune.go",
            "entity.name.package.go",
        ],
        foreground: ThemeColor.Types,
    },
    {
        scopes: [
            "constant.other.rune.go",
            "constant.character.escape.go",
            "string.quoted.rune.go punctuation.definition.string.begin.go",
            "string.quoted.rune.go punctuation.definition.string.end.go",
        ],
        foreground: ThemeColor.Chars,
    },
    // {
    //     scopes: [
    //         "punctuation.terminator.go",
    //     ],
    //     foreground: ThemeColor.Foreground,
    // },
    {
        scopes: [
            "constant.other.placeholder.go",
            "variable.other.blank.go",
            "keyword.operator.pointer.go",
            "keyword.operator.address.go",
            "keyword.operator.ellipsis.go",
        ],
        foreground: ThemeColor.Keywords,
    },
    // Templates
    {
        scopes: [
            "punctuation.section.embedded.begin.gotemplate",
            "punctuation.section.embedded.end.gotemplate",
        ],
        foreground: ThemeColor.Types,
    },
    {
        scopes: [
            "entity.alias.import.go",
        ],
        foreground: ThemeColor.Variables,
    },
]
