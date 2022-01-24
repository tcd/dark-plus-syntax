export const haskell: VsCodeTextMate.TextMateRules = [
    // {
    //     scope: [
    //         "constant.other.haskell",
    //     ],
    //     settings: {foreground: "#9cdcfe"},
    // },
    {
        scope: [
            "meta.preprocessor.haskell",
        ],
        settings: { foreground: "#608b4e" },
    },
    {
        scope: [
            "storage.type.haskell",
            "support.other.module.haskell",
        ],
        settings: { foreground: "#4ec9b0" },
    },
]
