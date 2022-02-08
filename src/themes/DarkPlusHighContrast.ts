import { ThemeSettings, ThemeType } from "@types"
import { DarkPlusHighContrastPalette } from "@src/palettes"
import { DarkHighContrastUi } from "@src/theme"

export const DarkPlusHighContrast: ThemeSettings = {
    name:     "dark-plus-syntax (high contrast)",
    fileName: "dark-plus-syntax-high-contrast",
    type:     ThemeType.HighContrast,
    palette:  DarkPlusHighContrastPalette,
    uiColors: DarkHighContrastUi,
}
