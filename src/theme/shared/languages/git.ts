import { TextMateRuleData, ThemeColor } from "@types"

export const git: TextMateRuleData[] = [
    {
        scopes: [
            "punctuation.definition.variable.begin.gitignore",
            "punctuation.definition.variable.end.gitignore",
        ],
        foreground: ThemeColor.Tags,
    },
    {
        scopes: [
            "support.function.git-rebase",
        ],
        foreground: ThemeColor.Variables,
    },
    {
        scopes: [
            "constant.sha.git-rebase",
        ],
        foreground: ThemeColor.Numbers,
    },
]
