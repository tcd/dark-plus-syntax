/**
 * VSCode's syntax highlighting (along with Sublime's) were initially modeled after [TextMate](https://macromates.com/)'s syntax highlighting.
 *
 * Resources & References:
 *
 * - TextMate Docs
 *   - [TextMate - Language Grammars](https://macromates.com/manual/en/language_grammars)
 * - VSCode Docs
 *   - [VSCode Docs: Color Themes](https://code.visualstudio.com/docs/getstarted/themes)
 *   - [VSCode Docs: Create a new Color Theme](https://code.visualstudio.com/api/extension-guides/color-theme#create-a-new-color-theme)
 *   - [VSCode Docs: Syntax Highlight Guide](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide#semantic-theming)
 * - VSCode Source Code
 *   - [src/vs/platform/theme/common/](https://github.com/microsoft/vscode/tree/5c2b7b83dfc116c660acea9728129e199ae9f2fd/src/vs/platform/theme/common)
 *     - [themeService.ts](https://github.com/microsoft/vscode/blob/5c2b7b83dfc116c660acea9728129e199ae9f2fd/src/vs/platform/theme/common/themeService.ts)
 *     - [tokenClassificationRegistry](https://github.com/microsoft/vscode/blob/5c2b7b83dfc116c660acea9728129e199ae9f2fd/src/vs/platform/theme/common/tokenClassificationRegistry.ts)
 *   - [inspectEditorTokens.ts](https://github.com/microsoft/vscode/blob/973684056e67153952f495fce93bf50d0ec0b892/src/vs/workbench/contrib/codeEditor/browser/inspectEditorTokens/inspectEditorTokens.ts)
 *   - [colorThemeData.ts](https://github.com/microsoft/vscode/blob/5c2b7b83dfc116c660acea9728129e199ae9f2fd/src/vs/workbench/services/themes/common/colorThemeData.ts)
 *   - [TMHelper.ts](https://github.com/microsoft/vscode/blob/5c2b7b83dfc116c660acea9728129e199ae9f2fd/src/vs/workbench/services/textMate/common/TMHelper.ts)
 */
declare namespace VsCodeTextmate{

    /**
     * [vscode - TokenClassificationRegistry](https://github.com/microsoft/vscode/blob/main/src/vs/platform/theme/common/tokenClassificationRegistry.ts#L308-L322)
     */
    export type FontStyleString =
        | "italic"
        | "bold"
        | "underline"
        | "strikethrough"
        | "italic bold"
        | "italic underline"
        | "italic strikethrough"
        | "bold underline"
        | "bold strikethrough"
        | "underline strikethrough"
        | "italic bold underline"
        | "italic bold strikethrough"
        | "italic underline strikethrough"
        | "bold underline strikethrough"
        | "italic bold underline strikethrough"

    export type HexColorString = string

    /**
    * At least one value (`foreground` or `fontStyle`) must be present.
    */
    export interface TokenStyleData {
        foreground?: HexColorString
        fontStyle?: FontStyleString
    }

    export type TokenScopes = string[]

    export class ThemeToken {
        scope: TokenScopes
        settings: TokenStyleData
    }

    export type UiColors = {
        [key: string]: string
    }

    export interface VsCodeTheme {
        name: string
        type: "light" | "dark"
        colors: UiColors
        tokenColors: ThemeToken[]
    }

}
