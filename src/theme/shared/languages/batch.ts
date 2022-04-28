import { TextMateRuleData, ThemeColor } from "@types"

const rules: TextMateRuleData[] = [
    {
        "scopes": [
            "punctuation.definition.variable.begin.batchfile",
            "punctuation.definition.variable.end.batchfile",
            // "punctuation.definition.variable.batchfile",
        ],
            "foreground": ThemeColor.Variables,
            "fontStyle":  "italic",
    },
    {
        "scopes": [
            "variable.parameter.batchfile",
            "punctuation.definition.variable.batchfile",
        ],

            "foreground": ThemeColor.Keywords,
            "fontStyle":  "italic",
    },
    {
        "scopes": [
            "keyword.operator.at.batchfile",
        ],
        "foreground": ThemeColor.FlowControl,
    },
    {
        "scopes": [
            "keyword.other.special-method.batchfile",
            "punctuation.separator.batchfile",
        ],
        "foreground": ThemeColor.Functions,
    },
    {
        "scopes": [
            "keyword.command.rem.batchfile",
            "punctuation.separator.batchfile",
        ],
        "foreground": ThemeColor.Functions,
    },
    {
        "scopes": [
            "comment.line.rem.batchfile",
            [
                "comment.line.rem.batchfile",
                "keyword.command.rem.batchfile",
            ],
        ],
        "foreground": ThemeColor.Comments,
    },
]

export default rules
