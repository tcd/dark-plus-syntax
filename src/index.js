const writeJsonFile = require('write-json-file');
const defaults = require('./partials/defaults');
const custom   = require('./partials/custom');
const markup   = require('./partials/markdown');
const python   = require('./partials/python');
const ruby     = require('./partials/ruby');
const stylus   = require('./partials/stylus');

let nothing = [];

let tokenz = nothing.concat(
    defaults,
    custom,
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

writeJsonFile('./test.json', base).then(() => {
	console.log('done');
});
