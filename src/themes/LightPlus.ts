import { ThemeSettings, ThemeType } from "@types"
import { LightPlusPalette } from "@src/palettes"
import { LightHighContrastUi } from "@src/theme"

export const LightPlus: ThemeSettings = {
    name:     "light-plus-syntax",
    type:     ThemeType.Light,
    palette:  LightPlusPalette,
    uiColors: LightHighContrastUi,
}
