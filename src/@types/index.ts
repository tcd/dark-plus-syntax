export type Tokens = string[]

export class Scope {
    scope: Tokens
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
