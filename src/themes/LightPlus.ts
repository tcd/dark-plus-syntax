import { ThemeSettings, ThemeType } from "@types"
import { LightPlusPalette } from "@src/palettes"
import { ui } from "@src/theme/light"

export const LightPlus: ThemeSettings = {
    name:     "light-plus-syntax",
    type:     ThemeType.Light,
    palette:  LightPlusPalette,
    uiColors: ui,
}
