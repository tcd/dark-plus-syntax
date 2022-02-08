import { VisualStudioCodeThemeColors, ThemeColor } from "@types"
import { ui as defaultUiColors } from "@src/theme/shared/ui"

export const DarkHighContrastUi: VisualStudioCodeThemeColors = {
    ...defaultUiColors,

    "editorIndentGuide.activeBackground": ThemeColor.Foreground,
    "editorIndentGuide.background":       ThemeColor.Foreground,

    "activityBarBadge.background": ThemeColor.Background,
    // "editor.selectionBackground":          "#ffffff",
    // "editor.selectionHighlightBackground": "#ffffff",
    // "minimap.selectionOccurrenceHighlight": ThemeColor.Background,

    // =========================================================================
    // Status Bar
    // =========================================================================

    "statusBar.background":          ThemeColor.Background,
    "statusBar.noFolderBackground":  ThemeColor.Background,
    "statusBar.debuggingBackground": ThemeColor.Background,

    // =========================================================================
    // Side Bar
    // =========================================================================

    "sideBarTitle.foreground": ThemeColor.Foreground,

    // =========================================================================
    // Borders
    // =========================================================================

    "sideBar.border":           ThemeColor.Background,
    "tab.border":               ThemeColor.Background,
    "tab.activeBorder":         ThemeColor.Background,
    "panel.border":             ThemeColor.Background,
    "activityBar.border":       ThemeColor.Background,
    "statusBar.border":         ThemeColor.Background,
    "editorGroupHeader.border": ThemeColor.Background,
    // "button.border": "#00deaf",
    // "dropdown.border": "#00deaf",
    // "activityBar.dropBorder": "#00deaf",
    // "editorGroup.border": "#00deaf",
    // "editorGroupHeader.tabsBorder": "#00deaf",
    // "tab.lastPinnedBorder": "#00deaf",
    // "editorWidget.border": "#00deaf",

    // "titleBar.border": "#00deaf",
    // "debugToolBar.border": "#00deaf",
    // "pickerGroup.border": "#00deaf",
    // "menu.border": "#00deaf",
    // "statusBar.debuggingBorder": "#00deaf",
    // "contrastBorder": ThemeColor.Background,
    "list.inactiveFocusOutline": ThemeColor.Background,
}
