const path = require( "path" );
const writeJsonFile = require('write-json-file');

const c          = require('./partials/c');
const crystal    = require('./partials/crystal');
const csharp     = require('./partials/cs');
const css        = require('./partials/css');
const csv        = require('./partials/csv');
const defaults   = require('./partials/defaults');
const elixir     = require('./partials/elixir');
const graphql    = require('./partials/graphql');
const golang     = require('./partials/go');
const html       = require('./partials/html');
const java       = require('./partials/java');
const javascript = require('./partials/javascript');
const markup     = require('./partials/markdown');
const make       = require('./partials/make');
const misc       = require('./partials/misc');
const python     = require('./partials/python');
const rust       = require('./partials/rust');
const ruby       = require('./partials/ruby');
const regex      = require('./partials/regex');
const swift      = require('./partials/swift');
const todo       = require('./partials/todo');
const terraform  = require('./partials/terraform');

const ui_colors  = require('./partials/ui-colors');

const theme = {
    "name": "dark-plus-syntax",
    "type": "dark",
    "colors": ui_colors,
    "tokenColors": [
        ...defaults,
        ...c,
        ...crystal,
        ...csharp,
        ...css,
        ...csv,
        ...elixir,
        ...golang,
        ...graphql,
        ...java,
        ...javascript,
        ...make,
        ...markup,
        ...python,
        ...ruby,
        ...rust,
        ...swift,
        ...todo,
        ...terraform,
        ...misc,
        ...html,
        ...regex,
    ],
};

const out_file = path.resolve('themes/dark-plus-syntax-color-theme.json');

writeJsonFile(out_file, theme).then(console.log("=== build successful ===\n"));
