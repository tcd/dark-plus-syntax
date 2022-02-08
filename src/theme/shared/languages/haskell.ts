import { TextMateRuleData, ThemeColor } from "@types"

export const haskell: TextMateRuleData[] = [
    // {
    //     scopes: [
    //         "constant.other.haskell",
    //     ],
    //    foreground: ThemeColor.Variables,
    // },
    {
        scopes: [
            "meta.preprocessor.haskell",
        ],
        foreground: ThemeColor.DocComments,
    },
    {
        scopes: [
            "storage.type.haskell",
            "support.other.module.haskell",
        ],
        foreground: ThemeColor.Types,
    },
]
