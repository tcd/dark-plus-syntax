import { ThemeColorMap } from "./color-types"

const ThemeColors: ThemeColorMap = {
    very_light_gray: "#d4d4d4",
    light_gray:      "#808080",
    atom_gray:       "#282c34",
    very_dark_gray:  "#1e1e1e",
    bright_black:    "#303030",
    dark_red:        "#f44747",
    light_red:       "#d16969",
    orange:          "#ce9178",
    light_yellow:    "#dcdcaa",
    dark_yellow:     "#d7ba7d",
    puke:            "#b5cea8",
    green:           "#608b4e",
    cyan:            "#4ec9b0",
    light_blue:      "#9cdcfe",
    dark_blue:       "#569cd6",
    magenta:         "#c586c0",
    bright_blue:     "#007acc",
    selection:       "#264f78",
    purple:          "#646695",
}

export default ThemeColors

// export default {
//     very_light_gray: "#d4d4d4",
//     light_gray:      "#808080",
//     atom_gray:       "#282c34",
//     very_dark_gray:  "#1e1e1e",
//     bright_black:    "#303030",
//     dark_red:        "#f44747",
//     light_red:       "#d16969",
//     orange:          "#ce9178",
//     light_yellow:    "#dcdcaa",
//     dark_yellow:     "#d7ba7d",
//     puke:            "#b5cea8",
//     green:           "#608b4e",
//     cyan:            "#4ec9b0",
//     light_blue:      "#9cdcfe",
//     dark_blue:       "#569cd6",
//     magenta:         "#c586c0",
//     bright_blue:     "#007acc",
//     selection:       "#264f78",
//     purple:          "#646695",
// } as ThemeColorMap

export interface SemanticThemeColorGroup {
    /** Plain Text, Braces & Brackets, Commas & Colons */
    Foreground: string         // #d4d4d4
    Background: string         // #1e1e1e
    /** Regular Expressions */
    RegularExpressions: string // #d16969
    /** Strings */
    Strings: string            // #ce9178
    /** Char, Escape Codes, Literal Values */
    Chars: string              // #d7ba7d
    /** Types, Classes, Namespaces */
    Types: string              // #4ec9b0
    /** Variables, Identifiers */
    Variables: string          // #9cdcfe
    /** Functions, Methods */
    Functions: string          // #dcdcaa
    /** Integers, Decimals */
    Numbers: string            // #b5cea8
    /** Reserved Language Keywords, Storage/Declarations, Booleans */
    Keywords: string           // #569cd6
    /** Operators, Flow Control, Conditionals, Property Access */
    FlowControl: string        // #c586c0
    Comments: string           // #505050
    DocComments: string        // #608b4e
}
