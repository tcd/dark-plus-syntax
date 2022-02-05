import { TextMateRuleData, SemanticColor } from "@lib"

export const haskell: TextMateRuleData[] = [
    // {
    //     scopes: [
    //         "constant.other.haskell",
    //     ],
    //    foreground: SemanticColor.Variables,
    // },
    {
        scopes: [
            "meta.preprocessor.haskell",
        ],
        foreground: SemanticColor.DocComments,
    },
    {
        scopes: [
            "storage.type.haskell",
            "support.other.module.haskell",
        ],
        foreground: SemanticColor.Types,
    },
]
