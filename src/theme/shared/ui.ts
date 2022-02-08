import { VisualStudioCodeThemeColors, ThemeColor } from "@types"

export const ui: VisualStudioCodeThemeColors = {
    // "statusBar.background": "#303030",
    // "statusBar.noFolderBackground": "#303030",
    // "statusBar.debuggingBackground": "#303030",

    "list.dropBackground": "#383b3d",

    "editorLineNumber.activeForeground": ThemeColor.Primary,

    "editor.background": ThemeColor.Background,
    "editor.foreground": ThemeColor.Foreground,

    "editor.selectionBackground":          ThemeColor.Selection,
    "editor.selectionHighlightBackground": ThemeColor.Selection,
    "editor.inactiveSelectionBackground":  "#3a3d41",

    "editorIndentGuide.activeBackground": "#707070",
    "editorIndentGuide.background":       "#404040",

    "activityBarBadge.background": ThemeColor.Secondary,
    "sideBarTitle.foreground":     "#bbbbbb",

    // "diffEditor.insertedTextBorder": ThemeColor.Success,,
    // "diffEditor.removedTextBorder": ThemeColor.Error,

    // "editor.findMatchBackground": "#cc00b1",
    // "editor.findMatchHighlightBackground": ThemeColor.Secondary,

    // =========================================================================
    // Minimap
    // =========================================================================

    "minimap.selectionOccurrenceHighlight": ThemeColor.Secondary,

    // =========================================================================
    // Change Indicators
    // =========================================================================

    "editorGutter.addedBackground":           ThemeColor.Success,
    "editorOverviewRuler.addedForeground":    ThemeColor.Success,
    "editorGutter.modifiedBackground":        ThemeColor.Warning,
    "editorOverviewRuler.modifiedForeground": ThemeColor.Warning,
    "editorGutter.deletedBackground":         ThemeColor.Error,
    "editorOverviewRuler.deletedForeground":  ThemeColor.Error,

    // ========================================================================
    // Error, Warning, & Info
    // ========================================================================

    // Error
    "editorError.foreground":              ThemeColor.Error,
    "editorError.border":                  ThemeColor.Background,
    "editorOverviewRuler.errorForeground": ThemeColor.Error,

    // Warning
    "editorWarning.foreground":              ThemeColor.Warning,
    "editorWarning.border":                  ThemeColor.Background,
    "editorOverviewRuler.warningForeground": ThemeColor.Warning,

    // Info
    "editorInfo.foreground":              ThemeColor.Info,
    "editorInfo.border":                  ThemeColor.Background,
    "editorOverviewRuler.infoForeground": "#d4d4d4",

    // ========================================================================
    // Git Colors
    // ========================================================================

    "gitDecoration.modifiedResourceForeground":    "#608b4e",
    "gitDecoration.addedResourceForeground":       "#608b4e",
    "gitDecoration.deletedResourceForeground":     "#d7ba7d",
    "gitDecoration.untrackedResourceForeground":   "#d7ba7d",
    "gitDecoration.ignoredResourceForeground":     "#808080",
    "gitDecoration.conflictingResourceForeground": ThemeColor.Error,

    // ========================================================================
    // Terminal Colors
    // ========================================================================

    "terminal.selectionBackground": ThemeColor.Selection,
    "terminalCursor.foreground":    ThemeColor.Foreground,

    "terminal.background": ThemeColor.Background,
    "terminal.foreground": ThemeColor.Foreground,

    "terminal.ansiBlack":         "#808080",
    "terminal.ansiBrightBlack":   "#808080",
    "terminal.ansiRed":           "#d16969",
    "terminal.ansiBrightRed":     "#d16969",
    "terminal.ansiBlue":          "#569cd6",
    "terminal.ansiBrightBlue":    "#9cdcfe",
    "terminal.ansiGreen":         "#608b4e",
    "terminal.ansiBrightGreen":   "#b5cea8",
    "terminal.ansiCyan":          "#4ec9b0",
    "terminal.ansiBrightCyan":    "#4ec9b0",
    "terminal.ansiYellow":        "#d7ba7d",
    "terminal.ansiBrightYellow":  "#ce9178",
    "terminal.ansiMagenta":       "#c586c0",
    "terminal.ansiBrightMagenta": "#c586c0",
    "terminal.ansiWhite":         "#d4d4d4",
    "terminal.ansiBrightWhite":   "#d4d4d4",
}
