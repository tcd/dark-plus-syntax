import { ThemeColorPalette } from "@types"

const darkRed    = "#f44747"
const darkYellow = "#d7ba7d"
const green      = "#608b4e"
const lightBlue  = "#9cdcfe"

export const DarkPlusPalette: ThemeColorPalette = {
    // Semantic
    Errors:      "#f44747",
    RegExp:      "#d16969",
    Strings:     "#ce9178",
    Chars:       "#d7ba7d",
    Types:       "#4ec9b0",
    Variables:   "#9cdcfe",
    Functions:   "#dcdcaa",
    Numbers:     "#b5cea8",
    Keywords:    "#569cd6",
    FlowControl: "#c586c0",
    Comments:    "#505050",
    DocComments: "#608b4e",
    Tags:        "#808080",
    Noise:       "#404040",
    // UI
    Foreground:  "#d4d4d4",
    Background:  "#1e1e1e",
    Selection:   "#add6ff26",
    Primary:     green,
    Secondary:   "#007acc",
    Error:       darkRed,
    Warning:     darkYellow,
    Info:        lightBlue,
    Success:     green,
}
