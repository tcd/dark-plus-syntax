import { TextMateRuleData, SemanticColor } from "@lib"

export const git: TextMateRuleData[] = [
    {
        scopes: [
            "punctuation.definition.variable.begin.gitignore",
            "punctuation.definition.variable.end.gitignore",
        ],
        foreground: SemanticColor.Tags,
    },
    {
        scopes: [
            "support.function.git-rebase",
        ],
        foreground: SemanticColor.Variables,
    },
    {
        scopes: [
            "constant.sha.git-rebase",
        ],
        foreground: SemanticColor.Numbers,
    },
]
