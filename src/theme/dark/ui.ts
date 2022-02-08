import { VisualStudioCodeThemeColors, ThemeColor } from "@types"
import { ui as defaultUiColors } from "@src/theme/shared/ui"

export const ui: VisualStudioCodeThemeColors = {
    ...defaultUiColors,
    "statusBar.background":          "#303030",
    "statusBar.noFolderBackground":  "#303030",
    "statusBar.debuggingBackground": "#303030",
}
