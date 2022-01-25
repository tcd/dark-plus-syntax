import { TextMateRuleData, SemanticColor } from "@lib"

export const csv: TextMateRuleData[] = [
    {
        scopes:    ["invalid.rainbow10"],
        foreground: SemanticColor.FlowControl,
    },
    // FIXME: extra color
    // {
    //     scopes:    ["makup.bold.rainbow9"],
    //     foreground: "#007acc",
    // },
    {
        scopes:    ["entity.name.type.rainbow8"],
        foreground: SemanticColor.Keywords,
    },
    {
        scopes:    ["constant.numeric.rainbow7"],
        foreground: SemanticColor.Variables,
    },
    {
        scopes:    ["variable.parameter.rainbow6"],
        foreground: SemanticColor.Types,
    },
    {
        scopes:    ["string.rainbow5"],
        foreground: SemanticColor.DocComments,
    },
    {
        scopes:    ["comment.rainbow4"],
        foreground: SemanticColor.Functions,
    },
    {
        scopes:    ["entity.name.function.rainbow3"],
        foreground: SemanticColor.Chars,
    },
    {
        scopes:    ["keyword.rainbow2"],
        foreground: SemanticColor.Strings
    },
    {
        scopes:    ["rainbow1"],
        foreground: SemanticColor.RegExp,
    },
]
