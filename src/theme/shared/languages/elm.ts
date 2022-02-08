import { TextMateRuleData, ThemeColor } from "@types"

/**
 * ## Extensions
 *
 * - [elm-tooling/elm-language-client-vscode](https://github.com/elm-tooling/elm-language-client-vscode)
 *   - elm (Elm)
 */
export const elm: TextMateRuleData[] = [
    {
        scopes: [
            "comment.line.double-dash.elm",
        ],
        foreground: ThemeColor.Comments,
    },
    {
        scopes: [
            // "meta.module.name.elm keyword.other.period.elm",
            "meta.declaration.module.elm",
            "keyword.other.elm",
            "keyword.other.period.elm",
            "keyword.pipe.elm",
        ],
        foreground: ThemeColor.FlowControl,
    },
    {
        scopes: [
            // "meta.value.elm", // this applies to function calls too
            "entity.name.record.field.accessor.elm",
            "entity.name.record.field.elm",
            // "constant.other.elm",
            // "meta.declaration.module.elm meta.declaration.exports.elm",
        ],
        foreground: ThemeColor.Variables,
    },
    {
        scopes: [
            // "support.constant.elm",
            // "constant.type-constructor.elm",
        ],
        foreground: ThemeColor.Keywords,
    },
    {
        scopes: [
            "keyword.unused.elm",
        ],
        foreground: ThemeColor.Keywords,
        fontStyle: "italic",
    },
    {
        scopes: [
            "storage.type.elm",
            "constant.type-constructor.elm",
            // "support.other.module.elm",
            // "constant.language.empty-list.elm",
            "support.module.elm",
            // "source.elm meta.module.name.elm support.module.elm",
            // "source.elm meta.import.elm support.module.elm",
            "meta.function.type-declaration.elm keyword.other.colon.elm",
        ],
        foreground: ThemeColor.Types,
    },
]
