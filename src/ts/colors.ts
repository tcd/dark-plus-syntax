import { Theme } from "./theme";

const colors = {
    very_light_gray: "#d4d4d4",
    light_gray: "#808080",
    atom_gray: "#282c34",
    very_dark_gray: "#1e1e1e",
    bright_black: "#303030",
    dark_red: "#f44747",
    // RegEx
    light_red: "#d16969",
    // Strings
    orange: "#ce9178",
    // Functions
    // Method Calls
    light_yellow: "#dcdcaa",
    // Chars
    // Escapes
    // Literals
    dark_yellow: "#d7ba7d",
    // Numbers
    light_green: "#b5cea8",
    // Docs
    // Comments
    // Emphasis
    green: "#608b4e",
    // Type
    // Class
    cyan: "#4ec9b0",
    // Identifier
    // Variable
    light_blue: "#9cdcfe",
    // Storage
    // Keywords
    dark_blue: "#569cd6",
    // Flow Control
    // Conditionals
    magenta: "#c586c0",
    bright_blue: "#007acc",
    selection: "#264f78",
    purple: "#646695",
};

/** dark-plus-syntax */
const DarkPlus: Theme = {
    Comment: colors.light_gray,
    DocComment: colors.green,
    PlainText: colors.very_light_gray,
    Control: colors.magenta,
    Escape: colors.dark_yellow,
    Function: colors.light_yellow,
    Number: colors.light_green,
    Operator: colors.magenta,
    RegEx: colors.light_red,
    String: colors.orange,
    Storage: colors.dark_blue,
    Language: colors.dark_blue,
    Type: colors.cyan,
    Identifier: colors.light_blue,
    Tags: colors.light_gray,
    Delimiter: colors.light_gray,
    Added: colors.green,
    Changed: colors.light_yellow,
    Removed: colors.light_red,
    Error: colors.light_red,
    Warning: colors.light_yellow,
    Info: colors.light_blue,
}
