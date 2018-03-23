const writeJsonFile = require('write-json-file');
const cs            = require('./src/partials/cs');
const css           = require('./src/partials/css');
const defaults      = require('./src/partials/defaults');
const go            = require('./src/partials/go');
const html          = require('./src/partials/html');
const java          = require('./src/partials/java');
const javascript    = require('./src/partials/javascript');
const markup        = require('./src/partials/markdown');
const misc          = require('./src/partials/misc');
const python        = require('./src/partials/python');
const ruby          = require('./src/partials/ruby');

let nop = [];

let tokenz = nop.concat(
    defaults,
    cs,
    css,
    go,
    java,
    javascript,
    markup,
    python,
    ruby,
    misc,
    html,
)

let base = {
    "name": "dark-plus-syntax",
    "type": "dark",
    "colors": {
        "list.dropBackground": "#383b3d",

        "editor.background": "#1e1e1e",
        "editor.foreground": "#d4d4d4",
        "editor.selectionHighlightBackground": "#add6ff26",

        "editor.inactiveSelectionBackground": "#3a3d41",

        "editorIndentGuide.background": "#404040",

        "activityBarBadge.background": "#007acc",

        "sideBarTitle.foreground": "#bbbbbb",

        "diffEditor.insertedTextBorder": "#608b4e",
        "diffEditor.removedTextBorder": "#d16969",

        // "editor.findMatchBackground": "#cc00b1",
        // "editor.findMatchHighlightBackground": "#007acc",

        "editorGutter.addedBackground": "#608b4e",
        "editorGutter.modifiedBackground": "#d7ba7d",
        "editorGutter.deletedBackground": "#d16969",
        "editorOverviewRuler.addedForeground": "#608b4e",
        "editorOverviewRuler.modifiedForeground": "#d7ba7d",
        "editorOverviewRuler.deletedForeground": "#d16969",

        "gitDecoration.modifiedResourceForeground": "#608b4e",
        "gitDecoration.deletedResourceForeground": "#d7ba7d",
        "gitDecoration.untrackedResourceForeground": "#d7ba7d",
        "gitDecoration.ignoredResourceForeground": "#808080",
        "gitDecoration.conflictingResourceForeground": "#d16969",

        // "terminal.background": "#1e1e1e",
        // "terminal.foreground": "#d4d4d4",
        // "terminal.ansiBlack": "#808080",
        // "terminal.ansiBrightBlack": "#808080",
        // "terminal.ansiRed": "#d16969",
        // "terminal.ansiBrightRed": "#d16969",
        // "terminal.ansiBlue": "#569cd6",
        // "terminal.ansiBrightBlue": "#569cd6",
        // "terminal.ansiGreen": "#608b4e",
        // "terminal.ansiBrightGreen": "#608b4e",
        // "terminal.ansiCyan": "#4ec9b0",
        // "terminal.ansiBrightCyan": "#4ec9b0",
        // "terminal.ansiYellow": "#d7ba7d",
        // "terminal.ansiBrightYellow": "#d7ba7d",
        // "terminal.ansiMagenta": "#c586c0",
        // "terminal.ansiBrightMagenta": "#c586c0",
        // "terminal.ansiWhite": "#d4d4d4",
        // "terminal.ansiBrightWhite": "#d4d4d4",
        // "terminal.selectionBackground": "#add6ff26",
        // "terminalCursor.foreground": "#808080",

        // "statusBar.background": "#303030",
        // "statusBar.noFolderBackground": "#303030",
        // "statusBar.debuggingBackground": "#303030",
    },
    "tokenColors": tokenz
}

let output = './themes/dark-plus-syntax-color-theme.json';

/* https://github.com/sindresorhus/write-json-file */
writeJsonFile(output, base).then(() => {
    console.log('=== Done! ===\n');
});
