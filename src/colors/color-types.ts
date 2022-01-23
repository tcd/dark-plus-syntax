export type very_light_gray = "#d4d4d4"
export type light_gray      = "#808080"
export type atom_gray       = "#282c34"
export type very_dark_gray  = "#1e1e1e"
export type bright_black    = "#303030"
export type dark_red        = "#f44747"
export type light_red       = "#d16969"
export type orange          = "#ce9178"
export type light_yellow    = "#dcdcaa"
export type dark_yellow     = "#d7ba7d"
export type puke            = "#b5cea8"
export type green           = "#608b4e"
export type cyan            = "#4ec9b0"
export type light_blue      = "#9cdcfe"
export type dark_blue       = "#569cd6"
export type magenta         = "#c586c0"
export type bright_blue     = "#007acc"
export type selection       = "#264f78"
export type purple          = "#646695"

// export type HexColor = string

export type HexColor =
    | very_light_gray
    | light_gray
    | atom_gray
    | very_dark_gray
    | bright_black
    | dark_red
    | light_red
    | orange
    | light_yellow
    | dark_yellow
    | puke
    | green
    | cyan
    | light_blue
    | dark_blue
    | magenta
    | bright_blue
    | selection
    | purple


export type ThemeColor =
    | "very_light_gray"
    | "light_gray"
    | "atom_gray"
    | "very_dark_gray"
    | "bright_black"
    | "dark_red"
    | "light_red"
    | "orange"
    | "light_yellow"
    | "dark_yellow"
    | "puke"
    | "green"
    | "cyan"
    | "light_blue"
    | "dark_blue"
    | "magenta"
    | "bright_blue"
    | "selection"
    | "purple"

export type ThemeColorMap = {
    [key in ThemeColor]: HexColor
}
