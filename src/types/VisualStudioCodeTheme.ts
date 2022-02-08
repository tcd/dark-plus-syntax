import {
    ThemeType,
    ColorMap,
    TextMateRule,
    VisualStudioCodeThemeColors,
} from "@types"

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
 *   - [vscode.d.ts](https://github.com/microsoft/vscode/blob/main/src/vscode-dts/vscode.d.ts)
 *   - [src/vs/platform/theme/common/](https://github.com/microsoft/vscode/tree/5c2b7b83dfc116c660acea9728129e199ae9f2fd/src/vs/platform/theme/common)
 *     - [themeService.ts](https://github.com/microsoft/vscode/blob/5c2b7b83dfc116c660acea9728129e199ae9f2fd/src/vs/platform/theme/common/themeService.ts)
 *     - [tokenClassificationRegistry](https://github.com/microsoft/vscode/blob/5c2b7b83dfc116c660acea9728129e199ae9f2fd/src/vs/platform/theme/common/tokenClassificationRegistry.ts)
 *   - [inspectEditorTokens.ts](https://github.com/microsoft/vscode/blob/973684056e67153952f495fce93bf50d0ec0b892/src/vs/workbench/contrib/codeEditor/browser/inspectEditorTokens/inspectEditorTokens.ts)
 *   - [TMHelper.ts](https://github.com/microsoft/vscode/blob/5c2b7b83dfc116c660acea9728129e199ae9f2fd/src/vs/workbench/services/textMate/common/TMHelper.ts)
 *   - [colorThemeData.ts](https://github.com/microsoft/vscode/blob/5c2b7b83dfc116c660acea9728129e199ae9f2fd/src/vs/workbench/services/themes/common/colorThemeData.ts)
 *   - [colorThemeSchema.ts](https://github.com/microsoft/vscode/blob/5c2b7b83dfc116c660acea9728129e199ae9f2fd/src/vs/workbench/services/themes/common/colorThemeSchema.ts)
 */
export interface VisualStudioCodeTheme {
    $schema: string
    name: string
    /** Dark, Light, or High Contrast */
    type: ThemeType
    /**
     * Whether semantic highlighting should be enabled for this theme
     */
    semanticHighlighting: boolean
    /**
     * Colors in the workbench
     */
    colors: VisualStudioCodeThemeColors
    /**
     * One of:
     *
     * - Colors for syntax highlighting
     * - Path to a tmTheme file (relative to the current file).
     */
    tokenColors: TextMateRule[]
    /**
     * Colors for semantic tokens.
     */
    semanticTokenColors?: ColorMap
    include?: string
}
