import { ThemeSettings, ThemeType } from "@types"
import { DarkPlusHighContrastPalette } from "@src/palettes"
import { ui } from "@src/theme/dark"

export const DarkPlusHighContrast: ThemeSettings = {
    name:     "dark-plus-syntax (high contrast)",
    fileName: "dark-plus-syntax-high-contrast",
    type:     ThemeType.HighContrast,
    palette:  DarkPlusHighContrastPalette,
    uiColors: ui,
}
