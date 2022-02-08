import { TextMateRuleData, ThemeColor } from "@types"

/**
 * ## Extensions
 *
 * - [mechatroner/vscode_rainbow_csv](https://github.com/mechatroner/vscode_rainbow_csv)
 */
export const csv: TextMateRuleData[] = [
    {
        scopes:     ["invalid.rainbow10"],
        foreground: ThemeColor.FlowControl,
    },
    // FIXME: extra color
    // {
    //     scopes:    ["makup.bold.rainbow9"],
    //     foreground: "#007acc",
    // },
    {
        scopes:     ["entity.name.type.rainbow8"],
        foreground: ThemeColor.Keywords,
    },
    {
        scopes:     ["constant.numeric.rainbow7"],
        foreground: ThemeColor.Variables,
    },
    {
        scopes:     ["variable.parameter.rainbow6"],
        foreground: ThemeColor.Types,
    },
    {
        scopes:     ["string.rainbow5"],
        foreground: ThemeColor.DocComments,
    },
    {
        scopes:     ["comment.rainbow4"],
        foreground: ThemeColor.Functions,
    },
    {
        scopes:     ["entity.name.function.rainbow3"],
        foreground: ThemeColor.Chars,
    },
    {
        scopes:     ["keyword.rainbow2"],
        foreground: ThemeColor.Strings,
    },
    {
        scopes:     ["rainbow1"],
        foreground: ThemeColor.RegExp,
    },
]
