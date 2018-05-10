const writeJsonFile = require('write-json-file');

const clang      = require('./src/partials/clang');
const crystal    = require('./src/partials/crystal');
const csharp     = require('./src/partials/cs');
const css        = require('./src/partials/css');
const csv        = require('./src/partials/csv');
const defaults   = require('./src/partials/defaults');
const elixir     = require('./src/partials/elixir');
const golang     = require('./src/partials/go');
const html       = require('./src/partials/html');
const java       = require('./src/partials/java');
const javascript = require('./src/partials/javascript');
const markup     = require('./src/partials/markdown');
const misc       = require('./src/partials/misc');
const python     = require('./src/partials/python');
const rust       = require('./src/partials/rust');
const ruby       = require('./src/partials/ruby');
const regex      = require('./src/partials/regex');
const todo       = require('./src/partials/todo');
const terraform  = require('./src/partials/terraform');

let nop = [];
let tokenz = nop.concat(
    defaults,
    clang,
    crystal,
    csharp,
    css,
    csv,
    elixir,
    golang,
    java,
    javascript,
    markup,
    python,
    ruby,
    rust,
    misc,
    todo,
    terraform,
    html,
    regex,
);

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

        // "editorOverviewRuler.border": "", // Color of the overview ruler border.
        // "editorOverviewRuler.findMatchForeground": "", // Overview ruler marker color for find matches. The color must not be opaque to not hide underlying decorations.
        // "editorOverviewRuler.rangeHighlightForeground": "", //Overview ruler marker color for highlighted ranges, like by the Quick Open, Symbol in File and Find features. The color must not be opaque to not hide underlying decorations.
        // "editorOverviewRuler.selectionHighlightForeground": "", //Overview ruler marker color for selection highlights. The color must not be opaque to not hide underlying decorations.
        // "editorOverviewRuler.wordHighlightForeground": "", //Overview ruler marker color for symbol highlights. The color must not be opaque to not hide underlying decorations.
        // "editorOverviewRuler.wordHighlightStrongForeground": "", // Overview ruler marker color for write-access symbol highlights. The color must not be opaque to not hide underlying decorations.
        // "editorOverviewRuler.modifiedForeground": "", // Overview ruler marker color for modified content.
        // "editorOverviewRuler.addedForeground": "", // Overview ruler marker color for added content.
        // "editorOverviewRuler.deletedForeground": "", // Overview ruler marker color for deleted content.
        // "editorOverviewRuler.errorForeground": "", // Overview ruler marker color for errors.
        // "editorOverviewRuler.warningForeground": "", // Overview ruler marker color for warnings.
        // "editorOverviewRuler.infoForeground": "", // Overview ruler marker color for infos.

        // "editorError.foreground": "#d16969",
        // "editorError.border": "#d16969",
        // "editorWarning.foreground": "#d7ba7d",
        // "editorWarning.border": "#d7ba7d",
        // "editorInfo.foreground": "#608b4e",
        // "editorInfo.border": "#608b4e",

        // "notificationCenter.border": "", // Notification Center border color.
        // "notificationCenterHeader.foreground": "", // Notification Center header foreground color.
        // "notificationCenterHeader.background": "", // Notification Center header background color.
        // "notificationToast.border": "", // Notification toast border color.
        // "notifications.foreground": "", // Notification foreground color.
        // "notifications.background": "", // Notification background color.
        // "notifications.border": "", // Notification border color separating from other notifications in the Notification Center.
        // "notificationLink.foreground": "", // Notification links foreground color.

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

    "tokenColors": tokenz,
};

const output = './themes/dark-plus-syntax-color-theme.json';

let now = new Date();
let timestamp = `  ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
const complete = `=============\n${timestamp}\n=== Done! ===\n`;

writeJsonFile(output, base).then(() => console.log(complete));
