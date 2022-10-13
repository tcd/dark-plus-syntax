import { TextMateRuleData, ThemeColor } from "@types"

export const googleSheets: TextMateRuleData[] = [
    {
        scopes: [
            "source.sheets constant.character",
            "constant.character.format.google-sheets",
            "punctuation.definition.placeholder.google-sheets",
        ],
        foreground: ThemeColor.Keywords,
    },
    {
        scopes: [
            "punctuation.definition.string.google-sheets",
        ],
        foreground: ThemeColor.Strings,
    },
    {
        scopes: [
            "variable.sheet.google-sheets",
        ],
        foreground: ThemeColor.Types,
    },
    {
        scopes: [
            "storage.type.reference.absolute.google-sheets",
            "meta.placeholder.google-sheets",
        ],
        foreground: ThemeColor.Types,
    },
]
