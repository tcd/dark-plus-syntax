import { TextMateRuleData, SemanticColor } from "@lib"

export const git: TextMateRuleData[] = [
    {
        scopes: [
            "punctuation.definition.variable.begin.gitignore",
            "punctuation.definition.variable.end.gitignore",
        ],
        foreground: "#505050",
    },
    {
        scopes: [
            "support.function.git-rebase",
        ],
        foreground: "#9cdcfe",
    },
    {
        scopes: [
            "constant.sha.git-rebase",
        ],
        foreground: "#b5cea8",
    },
]
