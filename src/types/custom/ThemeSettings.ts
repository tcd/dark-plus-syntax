import { ThemeColorPalette, ThemeType, VisualStudioCodeThemeColors } from "@types"

export interface ThemeSettings {
    name: string
    fileName?: string
    type: ThemeType
    palette: ThemeColorPalette
    uiColors?: VisualStudioCodeThemeColors
}
