import { TextMateRuleData, SemanticColor } from "@lib"

export const haskell: TextMateRuleData[] = [
    // {
    //     scopes: [
    //         "constant.other.haskell",
    //     ],
    //    foreground: "#9cdcfe",
    // },
    {
        scopes: [
            "meta.preprocessor.haskell",
        ],
        foreground: "#608b4e",
    },
    {
        scopes: [
            "storage.type.haskell",
            "support.other.module.haskell",
        ],
        foreground: "#4ec9b0",
    },
]
