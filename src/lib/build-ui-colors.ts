import { ThemeColorPalette, VisualStudioCodeThemeColors } from "@types"

export const buildUiColors = (palette: ThemeColorPalette, uiColors: VisualStudioCodeThemeColors): VisualStudioCodeThemeColors => {

    let result = {}

    for (const [key, value] of Object.entries(uiColors)) {
        if (palette[value]) {
            result[key] = palette[value]
        } else {
            result[key] = value
        }
    }

    return result
}
