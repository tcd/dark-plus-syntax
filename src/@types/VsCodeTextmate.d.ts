/**
 * VSCode's syntax highlighting (along with Sublime's) were initially modeled after [TextMate](https://macromates.com/)'s syntax highlighting.
 *
 * Resources & References:
 *
 * - VSCode Docs
 *   - [VSCode Docs: Color Themes](https://code.visualstudio.com/docs/getstarted/themes)
 *   - [VSCode Docs: Create a new Color Theme](https://code.visualstudio.com/api/extension-guides/color-theme#create-a-new-color-theme)
 *   - [VSCode Docs: Syntax Highlight Guide](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide#semantic-theming)
 * - TextMate Docs
 *   - [TextMate - Language Grammars](https://macromates.com/manual/en/language_grammars)
 */
declare namespace VsCodeTextmate {

    export class Scope {
        scope: Array<string>
        settings: any
    }

    export interface ScopeSettings {
        foreground?: String
        fontStyle?: String
    }

    export type UiColors = {
        [key: string]: string
    }

    export interface VsCodeTheme {
        name: string
        type: "light" | "dark"
        colors: UiColors
        tokenColors: Scope[]
    }

}
