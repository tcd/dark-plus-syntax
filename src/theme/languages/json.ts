import { TextMateRuleData, SemanticColor } from "@lib"

export const json: TextMateRuleData[] = [
    {
        scopes: [
            "punctuation.definition.dictionary.begin.json",
            "punctuation.definition.dictionary.end.json",
            "punctuation.separator.dictionary.pair.json",
            "punctuation.separator.dictionary.key-value.json",
            "punctuation.definition.array.begin.json",
            "punctuation.definition.array.end.json",
        ],
        foreground: SemanticColor.Noise,
    },
]
