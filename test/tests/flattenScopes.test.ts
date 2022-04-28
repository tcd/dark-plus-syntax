import { assert } from "chai"

// import {
//     SemanticColor,
//     TextMateRule,
//     TextMateRuleData,
// } from "@types"

import {
    flattenScopes,
} from "../helpers/lib.export"

type TestCases<Input, Output> = {
    input: Input
    output: Output
}[]

const cases: TestCases<any[], any[]> = [
    {
        input: [
            {
                "source.cs": {
                    "comment.block.documentation.cs": [
                        "punctuation.definition.comment.cs",
                        {"meta.tag.cs": [
                            "punctuation.separator.equals.cs",
                        ]},
                    ],
                },
            },
        ],
        output: [
            "source.cs comment.block.documentation.cs punctuation.definition.comment.cs",
            "source.cs comment.block.documentation.cs meta.tag.cs punctuation.separator.equals.cs",
        ],
    },
    {
        input: [
            {
                "source.cs": {
                    "comment.block.documentation.cs": {
                        "punctuation.definition.comment.cs": null,
                        "meta.tag.cs": {
                            "punctuation.separator.equals.cs": null,
                        },
                    },
                },
            },
        ],
        output: [
            "source.cs comment.block.documentation.cs punctuation.definition.comment.cs",
            "source.cs comment.block.documentation.cs meta.tag.cs punctuation.separator.equals.cs",
        ],
    },
    {
        input: [
            "entity.name.tag.localname.cs",
            ["source.cs", "comment.block.documentation.cs", "punctuation.definition.comment.cs"],
            ["source.cs", "comment.block.documentation.cs", "meta.tag.cs", "punctuation.separator.equals.cs"],
        ],
        output: [
            "entity.name.tag.localname.cs",
            "source.cs comment.block.documentation.cs punctuation.definition.comment.cs",
            "source.cs comment.block.documentation.cs meta.tag.cs punctuation.separator.equals.cs",
        ],
    },
    {
        input: [
            "punctuation.squarebracket.close.cs",
            ["string.quoted.double.cs", "meta.interpolation.cs punctuation.parenthesis.open.cs"],
            ["string.quoted.double.cs", "meta.interpolation.cs punctuation.parenthesis.close.cs"],
        ],
        output: [
            "punctuation.squarebracket.close.cs",
            "string.quoted.double.cs meta.interpolation.cs punctuation.parenthesis.open.cs",
            "string.quoted.double.cs meta.interpolation.cs punctuation.parenthesis.close.cs",
        ],
    },
]

describe("flattenScopes", function() {
    let i = 0
    for (const testCase of cases) {
        i++
        it(`test case #${i}`, function() {
            const have = flattenScopes(testCase.input)
            const want = testCase.output
            assert.deepEqual(have, want)
            // assert(true)
        })
    }
})
