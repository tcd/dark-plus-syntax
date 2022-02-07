import { assert } from "chai"

import {
    TextMateRuleData,
    SemanticColor,
    buildRules,
    DarkPlusPalette,
} from "@src"

const viml: TextMateRuleData[] = [
    {
        scopes: [
            "constant.character.map.viml",
        ],
        foreground: SemanticColor.Chars,
        fontStyle:  "italic",
    },
]

describe("buildRules", function() {
    it("basic functionality", function() {
        const have = buildRules(DarkPlusPalette, viml)
        const want: VsCodeTextMate.TextMateRules = [
            {
                "scope": [
                    "constant.character.map.viml",
                ],
                "settings": {
                    "foreground": "#d7ba7d",
                    fontStyle:    "italic",
                },
            },
        ]
        assert.deepEqual(have, want)
    })
})
