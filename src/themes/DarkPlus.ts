import { ThemeSettings, ThemeType } from "@types"
import { DarkPlusPalette } from "@src/palettes"
import { ui } from "@src/theme/dark"

export const DarkPlus: ThemeSettings = {
    name:     "dark-plus-syntax",
    type:     ThemeType.Dark,
    palette:  DarkPlusPalette,
    uiColors: ui,
}
