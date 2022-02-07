import { TextMateRuleData, SemanticColor } from "@types"

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
