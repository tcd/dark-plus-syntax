export const git: VsCodeTextMate.TextMateRules = [
    {
        scope: [
            "punctuation.definition.variable.begin.gitignore",
            "punctuation.definition.variable.end.gitignore",
        ],
        settings: {
            foreground: "#505050",
        },
    },
    {
        scope: [
            "support.function.git-rebase",
        ],
        settings: {
            foreground: "#9cdcfe",
        },
    },
    {
        scope: [
            "constant.sha.git-rebase",
        ],
        settings: {
            foreground: "#b5cea8",
        },
    },
]
