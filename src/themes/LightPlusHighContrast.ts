import { ThemeSettings, ThemeType } from "@types"
import { LightPlusHighContrastPalette } from "@src/palettes"
import { ui } from "@src/theme/light"

export const LightPlusHighContrast: ThemeSettings = {
    name:     "light-plus-syntax (high contrast)",
    fileName: "light-plus-syntax-high-contrast",
    type:     ThemeType.HighContrast,
    palette:  LightPlusHighContrastPalette,
    uiColors: ui,
}
