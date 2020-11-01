const writeJsonFile = require('write-json-file');

const c          = require('./src/partials/c');
const cfml       = require('./src/partials/cfml');
const crystal    = require('./src/partials/crystal');
const csharp     = require('./src/partials/cs');
const css        = require('./src/partials/css');
const csv        = require('./src/partials/csv');
const defaults   = require('./src/partials/defaults');
const elixir     = require('./src/partials/elixir');
const graphql    = require('./src/partials/graphql');
const golang     = require('./src/partials/go');
const html       = require('./src/partials/html');
const java       = require('./src/partials/java');
const javascript = require('./src/partials/javascript');
const markup     = require('./src/partials/markdown');
const make       = require('./src/partials/make');
const misc       = require('./src/partials/misc');
const python     = require('./src/partials/python');
const rust       = require('./src/partials/rust');
const ruby       = require('./src/partials/ruby');
const regex      = require('./src/partials/regex');
const swift      = require('./src/partials/swift');
const todo       = require('./src/partials/todo');
const terraform  = require('./src/partials/terraform');

const ui_colors  = require('./src/partials/ui-colors');

const theme = {
    "name": "dark-plus-syntax",
    "type": "dark",
    "colors": ui_colors,
    "tokenColors": [
        ...defaults,
        ...c,
        ...cfml,
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

const out_file = './themes/dark-plus-syntax-color-theme.json';

writeJsonFile(out_file, theme).then(console.log("=== build successful ===\n"));
