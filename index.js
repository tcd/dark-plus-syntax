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
    make,
    markup,
    python,
    ruby,
    rust,
    swift,
    todo,
    terraform,
    misc,
    html,
    regex,
);

let base = {
    "name": "dark-plus-syntax",
    "type": "dark",
    "colors": ui_colors,
    "tokenColors": tokenz,
};

const output = './themes/dark-plus-syntax-color-theme.json';

let now = new Date();
let timestamp = `  ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
const complete = `=============\n${timestamp}\n=== Done! ===\n`;

writeJsonFile(output, base).then(() => console.log(complete));
