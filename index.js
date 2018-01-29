const writeJsonFile = require('write-json-file');
const defaults = require('./src/partials/defaults');
const cs       = require('./src/partials/cs');
const custom   = require('./src/partials/custom');
const markup   = require('./src/partials/markdown');
const python   = require('./src/partials/python');
const ruby     = require('./src/partials/ruby');
const stylus   = require('./src/partials/stylus');

let nothing = [];

let tokenz = nothing.concat(
    defaults,
    custom,
    cs,
    markup,
    python,
    ruby,
    stylus,
)


const base = {
    "name": "dark-plus-syntax",
	"type": "dark",
	"colors": {
		"list.dropBackground"                : "#383b3d",
		"editor.background"                  : "#1e1e1e",
		"editor.foreground"                  : "#d4d4d4",
		"editor.inactiveSelectionBackground" : "#3a3d41",
		"editor.selectionHighlightBackground": "#add6ff26",
		"editorIndentGuide.background"       : "#404040",
		"activityBarBadge.background"        : "#007acc",
		"sideBarTitle.foreground"            : "#bbbbbb"
    },
    "tokenColors": tokenz
}

writeJsonFile('./themes/dark-plus-syntax-color-theme.json', base).then(() => {
	console.log('done');
});
