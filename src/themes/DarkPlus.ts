import { ThemeSettings, ThemeType } from "@types"
import { DarkPlusPalette } from "@src/palettes"
import { DarkUi } from "@src/theme"

export const DarkPlus: ThemeSettings = {
    name:     "dark-plus-syntax",
    type:     ThemeType.Dark,
    palette:  DarkPlusPalette,
    uiColors: DarkUi,
}
