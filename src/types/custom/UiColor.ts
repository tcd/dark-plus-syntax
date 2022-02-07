export enum UiColor {
    /**
     * Primary theme color.
     *
     * ## Used to color the following:
     *
     * - Active line number
     */
    Primary = "Primary",
    /**
     * Primary foreground color.
     * This color is used if no other rule applies.
     *
     * ## Used to color the following:
     *
     * - Plain Text
     * - Braces & Brackets
     * - Commas & Colons
     */
    Foreground = "Foreground",
    /**
     * Universal background color. Only need one.
     */
    Background = "Background",
    /**
     * Selected text.
     */
    Selection = "Selection",
    Error     = "Error",
    Warning   = "Warning",
    Info      = "Info",
    Success   = "Success",
}
