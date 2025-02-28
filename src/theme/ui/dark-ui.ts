import { VisualStudioCodeThemeColors, ThemeColor } from "@types"
import { ui as defaultUiColors } from "@src/theme/shared/ui"

export const DarkUi: VisualStudioCodeThemeColors = {
    ...defaultUiColors,
    "statusBar.background":          "#303030",
    "statusBar.noFolderBackground":  "#303030",
    "statusBar.debuggingBackground": "#303030",
    // "editor.lineHighlightBorder":    ThemeColor.Selection,
}
