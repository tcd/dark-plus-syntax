import { assert } from "chai"

import {
    ThemeColor,
    TextMateRule,
    TextMateRuleData,
} from "../../src/types"

import {
    buildRules,
    DarkPlusPalette,
} from "../../src"

const viml: TextMateRuleData[] = [
    {
        scopes: [
            "constant.character.map.viml",
        ],
        foreground: ThemeColor.Chars,
        fontStyle:  "italic",
    },
]

describe("buildRules", function() {
    it("basic functionality", function() {
        const have = buildRules(DarkPlusPalette, viml)
        const want: TextMateRule[] = [
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
