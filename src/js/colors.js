const all_colors = {
    "very_light_gray": {
        "hex": "#d4d4d4",
        "rgb": "212, 212, 212",
        "cterm": 188,
    },
    "light_gray": {
        "hex": "#808080",
        "rgb": "128, 128, 128",
        "cterm": 8,
    },
    "atom_gray": {
        "hex": "#282c34",
        "rgb": "40, 44, 52",
        "cterm": 0,
    },
    "very_dark_gray": {
        "hex": "#1e1e1e",
        "rgb": "30, 30, 30",
        "cterm": 234,
    },
    "bright_black": {
        "hex": "#303030",
        "rgb": "48, 48, 48",
        "cterm": 236,
    },
    "dark_red": {
        "hex": "#f44747",
        "rgb": "244, 71, 71",
        "cterm": 203,
    },
    "light_red": {
        "hex": "#d16969",
        "rgb": "209, 109, 105",
        "cterm": 167,
        "context": [
            "RegEx"
        ]
    },
    "orange": {
        "hex": "#ce9178",
        "rgb": "206, 145, 120",
        "cterm": 173,
        "context": [
            "Strings",
        ]
    },
    "light_yellow": {
        "hex": "#dcdcaa",
        "rgb": "220, 220, 170",
        "cterm": 187,
        "context": [
            "Functions",
            "Method Calls",
        ]
    },
    "dark_yellow": {
        "hex": "#d7ba7d",
        "rgb": "215, 186, 125",
        "cterm": 179,
        "context": [
            "Chars",
            "Escapes",
            "Literals",
        ]
    },
    "puke": {
        "hex": "#b5cea8",
        "rgb": "181, 206, 168",
        "cterm": 151,
        "context": [
            "Numbers",
        ]
    },
    "green": {
        "hex": "#608b4e",
        "rgb": "96, 139, 78",
        "cterm": 65,
        "context": [
            "Docs",
            "Comments",
            "Emphasis",
        ],
    },
    "cyan": {
        "hex": "#4ec9b0",
        "rgb": "78, 201, 176",
        "cterm": 43,
        "context": [
            "Type",
            "Class",
        ]
    },
    "light_blue": {
        "hex": "#9cdcfe",
        "rgb": "156, 220, 254",
        "cterm": 117,
        "context": [
            "Identifier",
            "Variable",
        ],
    },
    "dark_blue": {
        "hex": "#569cd6",
        "rgb": "86, 156, 214",
        "cterm": 75,
        "context": [
            "Storage",
            "Keywords",
        ]
    },
    "magenta": {
        "hex": "#c586c0",
        "cterm": 176,
        "context": [
            "Flow Control",
            "Conditionals",
        ]
    },
    "bright_blue": {
        "hex": "#007acc",
        "cterm": 33,
    },
    "selection": {
        "hex": "#264f78",
        "cterm": 73,
    },
    "purple": {
        "hex": "#646695",
        "cterm": 60,
    }
};

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
    puke: "#b5cea8",
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

module.exports = colors;
