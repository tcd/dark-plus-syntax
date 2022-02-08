import { VisualStudioCodeThemeColors, ThemeColor } from "@types"
import { ui as defaultUiColors } from "@src/theme/shared/ui"

export const LightHighContrastUi: VisualStudioCodeThemeColors = {
    ...defaultUiColors,
    // "sideBar.background": ThemeColor.Background,
    "activityBar.background": ThemeColor.Background,
    "activityBar.foreground": ThemeColor.Foreground,
    "statusBar.background":   ThemeColor.Background,
    "statusBar.foreground":   ThemeColor.Foreground,
}
