## Comment

> Single and multi-line comments.

#### Subgroups:

- Single line comment
- Block Comment / Multiline Comment

## DocComment

> JavaDoc, JSDoc, YARD, etc.

## PlainText

#### Subgroups:

- Punctuation

## Control

> Mainly related to flow control like `if`, `while`, `return`, `continue`, etc.

#### Subgroups:

- Operator
- Conditional
- Repeat

## Escape

> Escape Sequences like `\n` or `\\\\\\`. Also literal control characters like `^m`.

#### Subgroups:

- Char

## Function

> The Name of a function or method in both definitions/declarations and calls.

### Subgroups

- Function
- Method

## Number

> Any numeric value.

#### Subgroups:

- Int
- Float

## Operator

> Operators can either be textual (e.g. `or`) or be characters (e.g. `||`).

## RegEx

> Regular Expressions

## String

> String values

#### Subgroups:

- Quote

## Storage

> Assignment keywords like `let`, `var`, `new`, `const`, `func`, `function`, `class`, `enum`, `struct` etc.

#### Subgroups:

- Label
- Include
- Define

## Language

> Reserved language variables like `this`, `super`, `self`, etc.

## Subgroups:

- Keyword
- Constant
- Boolean
- PreProcessor Statements

## Type

> Type or Class names.

#### Subgroups:

- Type (*Typedef*)
- Class
- Module
- Namespace

## Identifier

> Variable names.

## Tags

> HTML and XML tags.

## Delimiter

> Mainly colons

## Added

## Changed

## Removed

## Error

## Warning

## Info

## UI

### Subgroups

- Main Foreground
- Main Background


```js
module.exports = [
    // =========================================================================
    // C
    // =========================================================================
    {
        "scope": [
            "support.function.C99.c",
            "entity.name.function.c",
            // "meta.function-call.c",
        ],
        "settings": {"foreground": "#dcdcaa"},
    },
    {
        "scope": [
            "comment.block.c",
            "punctuation.terminator.statement.c",
        ],
        "settings": {"foreground": "#505050"},
    },
    {
        "scope": [
            "string.quoted.single.c",
        ],
        "settings": {"foreground": "#d7ba7d"},
    },
    {
        "scope": [
            "meta.preprocessor.include.c string.quoted.other.lt-gt.include.c punctuation.definition.string.begin.c",
            "meta.preprocessor.include.c string.quoted.other.lt-gt.include.c punctuation.definition.string.end.c",
        ],
        "settings": {"foreground": "#808080"},
    },
    {
        "scope": [
            "punctuation.section.arguments.begin.bracket.round.c",
            "punctuation.section.arguments.end.bracket.round.c",
            "punctuation.section.parens.begin.bracket.round.c",
            "punctuation.section.parens.end.bracket.round.c",
            "punctuation.section.parameters.begin.bracket.round.c",
            "punctuation.section.parameters.end.bracket.round.c",
            // "meta.function-call.c punctuation.separator.delimiter.c",
            "punctuation.separator.delimiter.c",

        ],
        "settings": {"foreground": "#d4d4d4"},
    },
    {
        "scope": [
            // "meta.function.c",
            "constant.other.variable.mac-classic.c",
            "string.quoted.double.include.c",
            "string.quoted.other.lt-gt.include.c",
            "meta.preprocessor.include.c string.quoted.other.lt-gt.include.c",
        ],
        "settings": {"foreground": "#9cdcfe"},
    },
    {
        "scope": [
            "punctuation.separator.pointer-access.c",
            "keyword.control.directive.include.c",
        ],
        "settings": {"foreground": "#c586c0"},
    },
    {
        "scope": [
            "storage.type.c",
            "support.type.mac-classic.c",
        ],
        "settings": {"foreground": "#4ec9b0"},
    },
    {
        "scope": [
            "constant.other.placeholder.c",
            "constant.language.c",
            "keyword.operator.sizeof.c",
        ],
        "settings": {"foreground": "#569cd6"},
    },
    // =========================================================================
    // C++
    // =========================================================================
    {
        "scope": [
            "punctuation.separator.namespace.access.cpp",
        ],
        "settings": {"foreground": "#4ec9b0"},
    },
    {
        "scope": [
            "source.cpp keyword.operator.bitwise.shift.c",
        ],
        "settings": {"foreground": "#569cd6"},
    },
];
module.exports = [
    // =========================================================================
    // Crystal
    // =========================================================================
    {
        scope: [
            "keyword.operator.macro.crystal",
        ],
        settings: {
            // "foreground": "#569cd6",
            "fontStyle": "italic",
        },
    },
    // {
    //     "scope": [
    //         "punctuation.section.function.crystal",
    //     ],
    //     "settings": {"foreground": "#808080"},
    // },
    {
        "scope": [
            "string.regexp.group.crystal punctuation.definition.group.crystal",
        ],
        "settings": {"foreground": "#808080"},
    },
    {
        "scope": [
            "punctuation.separator.variable.crystal", // |var|
            "punctuation.separator.object.crystal",
            "punctuation.definition.parameters.crystal",
        ],
        "settings": {"foreground": "#d4d4d4"},
    },
    {
        "scope": [
            "source.crystal.embedded.source",
            // "variable.other.crystal",
        ],
        "settings": {"foreground": "#9cdcfe"},
    },
    {
        "scope": [
            "punctuation.separator.method.crystal", // .
        ],
        "settings": {"foreground": "#c586c0"},
    },
    {
        "scope": [
            "support.class.crystal",
            "punctuation.separator.other.crystal",            // ::/:
        ],
        "settings": {"foreground": "#4ec9b0"},
    },
    {
        "scope": [
            "variable.language.crystal",
            "punctuation.section.embedded.crystal",           // #{}
            "punctuation.section.embedded.begin.crystal",     // #{}
            "punctuation.section.embedded.end.crystal",       // #{}
            "keyword.control.special-method.crystal",         // new/include/extend/raise
            "source.crystal punctuation.separator.key-value", // =>
        ],
        "settings": {"foreground": "#569cd6"},
    },
    {
        "scope": [
            "string.quoted.single.crystal",
            "constant.other.symbol.crystal",                  // :symbol
        ],
        "settings": {"foreground": "#d7ba7d"},
    },
];
module.exports = [
    {
        "scope": [
            "entity.name.tag.localname.cs",
            "punctuation.definition.tag.cs",
            "punctuation.terminator.statement.cs",
            "source.cs comment.block.documentation.cs punctuation.definition.comment.cs",
            "source.cs comment.block.documentation.cs meta.tag.cs punctuation.separator.equals.cs",
        ],
        "settings": { "foreground": "#505050" },
    },
    {
        "scope": [
            "string.bracers.round.cshtml",
            "punctuation.curlybrace.open.cs",
            "punctuation.curlybrace.close.cs",
            "punctuation.squarebracket.open.cs",
            "punctuation.squarebracket.close.cs",
        ],
        "settings": { "foreground": "#d4d4d4" },
    },
    {
        "scope": [
            "entity.name.variable.property.cs",
            "entity.name.variable.parameter.cs",
            "entity.name.variable.field.cs",
            "entity.name.variable.local.cs",
            "meta.interpolation.cs variable.other.object.property.cs",
        ],
        "settings": { "foreground": "#9cdcfe" },
    },
    // {
    //     "scope": [
    //         "variable.other.object.property.cs",
    //     ],
    //     "settings": {
    //         "foreground": "#9cdcfe",
    //         "fontStyle": "italic",
    //     },
    // },
    {
        "scope": [
            "keyword.type.cs",
            "storage.type.cs",
            "storage.type.generic.cs",
            "storage.type.modifier.cs",
            "storage.type.variable.cs",
        ],
        "settings": {
            "foreground": "#4ec9b0" },
    },
    {
        "scope": [
            // "storage.modifier.cs",
            "keyword.other.this.cs",
        ],
        "settings": {
            "foreground": "#569cd6",
            "fontStyle": "italic",
        },
    },
    {
        "scope": [
            "keyword.other.new.cs",
            "keyword.other.var.cs",
            "keyword.other.as.cs",
            "keyword.other.is.cs",  // control? I don't think so.
            "keyword.other.base.cs",
            "keyword.other.where.cs",
            "keyword.other.typeof.cs",
            "keyword.other.default.cs",
            "keyword.operator.arrow.cs",
            "keyword.other.namespace.cs",
            "punctuation.separator.colon.cs",  // class extension
            "punctuation.separator.question-mark.cs", // nullable
            "punctuation.definition.typeparameters.begin.cs",
            "punctuation.definition.typeparameters.end.cs",
            "punctuation.definition.interpolation.begin.cs",
            "punctuation.definition.interpolation.end.cs",
        ],
        "settings": { "foreground": "#569cd6" },
    },
    {
        "scope": [
            "keyword.other.get.cs",
            "keyword.other.set.cs",
        ],
        "settings": { "foreground": "#dcdcaa" },
    },
    {
        "scope": [
            // "keyword.other.using.cs",
            "meta.preprocessor.cs punctuation.separator.hash.cs",
            "punctuation.accessor.cs",
            "keyword.other.await.cs",
            "keyword.operator.assignment.cs",
            "keyword.operator.comparison.cs",
            // "keyword.operator.logical.cs",
            // "keyword.operator.null-conditional.cs",
        ],
        "settings": { "foreground": "#c586c0" },
    },
];
module.exports = [
    {
        "scope": [
            "meta.property-list.scss",
            "punctuation.terminator.rule.css",
            "punctuation.terminator.rule.scss",
            "punctuation.separator.key-value.css",
            "punctuation.separator.list.comma.css",
            "punctuation.section.property-list.begin.bracket.curly",
            "punctuation.section.property-list.end.bracket.curly",
            "punctuation.section.media.begin.bracket.curly",
            "punctuation.section.media.end.bracket.curly",
            "punctuation.section.keyframes.begin.bracket.curly.scss",
            "punctuation.section.keyframes.end.bracket.curly.scss",
            "source.css.scss meta.at-rule.keyframes.scss punctuation.section.keyframes.begin.scss",
            "source.css.scss meta.at-rule.keyframes.scss punctuation.section.keyframes.end.scss",
            "punctuation.section.supports.begin.bracket.curly",
            "punctuation.section.supports.end.bracket.curly",
        ],
        "settings": { "foreground": "#505050" },
    },
    {
        "scope": [
            "keyword.other.important.css",
            "keyword.other.important.sass",
            "keyword.other.important.scss",
            "keyword.other.important.less",

            "keyword.other.default.scss",
            "keyword.other.default.sass",
        ],
        "settings": {"fontStyle": "italic"},
    },
    {
        "scope": [
            "entity.other.attribute-name.class.css",
            "entity.other.attribute-name.class.mixin.css",
            "entity.other.attribute-name.id.css",
            "entity.other.attribute-name.parent-selector.css",
            "entity.other.attribute-name.pseudo-class.css",
            "entity.other.attribute-name.pseudo-element.css",
            "source.css.less entity.other.attribute-name.id",
            "entity.other.attribute-name.attribute.scss",
            "entity.other.attribute-name.scss",
            "meta.at-rule.keyframes.stylus entity.other.attribute-name.stylus",
            "meta.at-rule.keyframes.scss entity.other.attribute-name.scss",
        ],
        "settings": { "foreground": "#d7ba7d" },
    },
    {
        "scope": [
            "invalid.deprecated.color.system.css",
            "punctuation.section.function.begin.bracket.round.css",
            "punctuation.section.function.end.bracket.round.css",
            "punctuation.definition.media-query.begin.bracket.round",
            "punctuation.definition.media-query.end.bracket.round",
            "punctuation.definition.pseudo-class.begin.bracket.round",
            "punctuation.definition.pseudo-class.end.bracket.round",
            "meta.property-value.scss",
            "meta.property-name.scss",
            "meta.at-rule.extend",
            "meta.at-rule.extend.sass",
            "meta.at-rule.extend.scss",
            "punctuation.section.function.scss",
            "punctuation.section.keyframes.begin.scss",
            "punctuation.section.keyframes.end.scss",
            "constant.other.scss",
        ],
        "settings": { "foreground": "#d4d4d4" },
    },
    {
        "scope": [
            "entity.name.tag.css",
            "keyword.other.important.css",
            "keyword.other.default.scss",
            "punctuation.definition.interpolation.begin.bracket.curly",
            "punctuation.definition.interpolation.end.bracket.curly",
        ],
        "settings": { "foreground": "#569cd6" },
    },
    {
        "name" : "Variables",
        "scope": [
            "support.type.property-name.media.css",
            "support.type.property-name",
            "variable.css",
            "variable.scss",
            "variable.other.less",
            "support.type.vendored.property-name.css",
            "meta.at-rule.include.scss",
            "support.constant.vendored.property-value.css",
        ],
        "settings": { "foreground": "#9cdcfe" },
    },
    {
        "scope": [
            "meta.attribute-selector.css",
        ],
        "settings": { "foreground": "#4ec9b0" },
    },
    {
        "name": "CSS property value",
        "scope": [
            "support.constant.property-value",
            "support.constant.font-name",
            "support.constant.media-type",
            "support.constant.media",
            "constant.other.color.rgb-value",
            "constant.other.rgb-value",
            "support.constant.color",
        ],
        "settings": { "foreground": "#ce9178" },
    },
    {
        "scope": [
            "entity.other.attribute-name.pseudo-element.css punctuation.definition.entity.css",
            "meta.selector.css entity.other.attribute-name.pseudo-class.css punctuation.definition.entity.css",
            "punctuation.definition.entity.begin.bracket.square.css",
            "punctuation.definition.entity.end.bracket.square.css",
            "entity.other.attribute-name.pseudo-element.css",
            "entity.other.attribute-name.pseudo-class.css",
            // "text.html.basic meta.embedded.block.html source.css meta.selector.css entity.other.attribute-name.pseudo-class.css"
        ],
        "settings": { "foreground": "#c586c0" },
    },
    // =========================================================================
    // Stylus
    // =========================================================================
    {
        "scope": "punctuation.definition.keyword.stylus",
        "settings": { "foreground": "#c586c0" },
    },
    {
        "scope": "meta.interpolation.stylus",
        "settings": { "foreground": "#9cdcfe" },
    },
    {
        "scope": "variable.stylus",
        "settings": { "foreground": "#4ec9b0" },
    },
    {
        "scope": "entity.other.attribute-name.parent-selector-suffix.stylus",
        "settings": { "foreground": "#d7ba7d" },
    },
    {
        "scope": "meta.interpolation.stylus meta.brace.curly",
        "settings": { "foreground": "#569cd6" },
    },
    // =========================================================================
    // Styled Components
    // =========================================================================
    {
        "scope": [
            "punctuation.semi-colon.css",
            "meta.brace.curly.css",
        ],
        "settings": { "foreground": "#505050" },
    },
    {
        "scope": [
           "constant.hex.css",
           "meta.identifier.css",
        ],
        "settings": { "foreground": "#ce9178" },
    },
    {
        "scope": [
            "constant.percentage.units.css",
            "constant.length.units.css",
            "entity.other.keyframe-offset.percentage.css",
        ],
        "settings": { "foreground": "#b5cea8" },
    },
    {
        "scope": [
            "entity.name.tag.styledcss.js",
        ],
        "settings": { "foreground": "#4ec9b0" },
    },
];
module.exports = [
    {
        "scope": "invalid.rainbow10",
        "settings": { "foreground": "#c586c0" },
        // "settings": { "foreground": "#d16969" },
    },
    {
        "scope": "markup.bold.rainbow9",
        "settings": { "foreground": "#007acc" },
        // "settings": { "foreground": "#ce9178" },
    },
    {
        "scope": "entity.name.type.rainbow8",
        "settings": {"foreground": "#569cd6"},
        // "settings": { "foreground": "#d7ba7d" },
    },
    {
        "scope": "constant.numeric.rainbow7",
        "settings": { "foreground": "#9cdcfe" },
        // "settings": { "foreground": "#dcdcaa" },
    },
    {
        "scope": "variable.parameter.rainbow6",
        "settings": { "foreground": "#4ec9b0" },
        // "settings": {"foreground": "#608b4e"},
    },
    {
        "scope": "string.rainbow5",
        "settings": {"foreground": "#608b4e"},
        // "settings": { "foreground": "#4ec9b0" },
    },
    {
        "scope": "comment.rainbow4",
        "settings": { "foreground": "#dcdcaa" },
        // "settings": { "foreground": "#9cdcfe" },
    },
    {
        "scope": "entity.name.function.rainbow3",
        "settings": { "foreground": "#d7ba7d" },
        // "settings": {"foreground": "#569cd6"},
    },
    {
        "scope": "keyword.rainbow2",
        "settings": { "foreground": "#ce9178" },
        // "settings": { "foreground": "#007acc" },
    },
    {
        "scope": "rainbow1",
        "settings": { "foreground": "#d16969" },
        // "settings": { "foreground": "#c586c0" },
    },
];
module.exports = [
    {
        "scope": [
            "comment",
            "comment.line.double-slash.js",
            "comment.block.html",
            "comment.block.handlebars",
        ],
        "settings": {"foreground": "#505050"},
    },
    {
        "name": "Special Comments",
        "scope": [
            "comment.block.js",
            "comment.line.shebang.js",
            "comment.line.number-sign.shebang.shell",
            "comment.block.documentation.js",
            "comment.block.go",
            "comment.block.documentation.ts",
            "comment.line.number-sign.ini",
            "comment.line.number-sign.yaml",
        ],
        "settings": {"foreground": "#608b4e"},
    },
    {
        "name": "Curly Braces, Semicolons, etc.",
        "scope": [
            "meta.tag.sgml.html",
            "meta.tag.sgml.doctype.html",
            "meta.tag.sgml.html punctuation.definition.tag.html",
            "meta.structure.dictionary.json",
            "punctuation.definition.array.begin.json",
            "punctuation.definition.array.end.json",
            "punctuation.separator.array.json",
            "punctuation.terminator",
            "punctuation.definition.string.begin.markdown",
            "punctuation.definition.string.end.markdown",
            "punctuation.definition.metadata.markdown",
            "invalid.illegal.bad-comments-or-CDATA.html",
            "punctuation.definition.italic.markdown",
            "punctuation.definition.bold.markdown",
        ],
        "settings": {"foreground": "#505050"},
    },
    {
        "scope": ["meta.embedded.block.sql"],
        "settings": {"foreground": "#d4d4d4"},
    },
    {
        "scope": [
            "constant.numeric",
            "keyword.other.unit",
            "meta.preprocessor.numeric",
        ],
        "settings": {"foreground": "#b5cea8"},
    },
    {
        "scope": "invalid",
        "settings": {"foreground": "#f44747"},
    },
    {
        "scope": [
            "meta.selector",
            "constant.character",
            "constant.other.symbol",
            "constant.character.escape",
        ],
        "settings": {"foreground": "#d7ba7d"},
    },
    {
        "scope": "meta.diff.header",
        "settings": {"foreground": "#569cd6"},
    },
    {
        "scope": [
            "string",
            "string.tag",
            "string.value",
            "meta.preprocessor.string",
        ],
        "settings": {"foreground": "#ce9178"},
    },
    {
        "scope": [
            "storage",
            "storage.type",
            "storage.modifier",
            "constant.other.placeholder",
            "keyword",
            "keyword.control",
            "meta.preprocessor",
            "keyword.control.new",
            "constant.language",
            "keyword.operator.new",
            "keyword.operator.expression",
            "keyword.operator.cast",
            "keyword.operator.sizeof",
        ],
        "settings": {"foreground": "#569cd6"},
    },
    {
        "scope": [
            "entity.name.function",
            "support.function",
            "support.constant.handlebars",
        ],
        "settings": {"foreground": "#dcdcaa"},
    },
    {
        "name": "Type declaration and references",
        "scope": [
            "meta.return-type",
            "support.class",
            "support.type",
            "entity.name.type",
            "entity.name.class",
            "storage.type.annotation.java",
            "storage.type.generic.java",
            "storage.type.java",
            "storage.type.object.array.java",
            "storage.type.primitive.array.java",
            "storage.type.primitive.java",
            "storage.type.token.java",
            "storage.type.groovy",
            "storage.type.annotation.groovy",
            "storage.type.parameters.groovy",
            "storage.type.generic.groovy",
            "storage.type.object.array.groovy",
            "storage.type.primitive.array.groovy",
            "storage.type.primitive.groovy",
        ],
        "settings": {"foreground": "#4ec9b0"},
    },
    {
        "name": "Types declaration and references, TS grammar specific",
        "scope": [
            "meta.type.cast.expr",
            "meta.type.new.expr",
            "support.constant.math",
            "support.constant.dom",
            "support.constant.json",
            "entity.other.inherited-class",
        ],
        "settings": {"foreground": "#4ec9b0"},
    },
    {
        "scope": [
            "keyword.control",
            "keyword.operator",
        ],
        "settings": {"foreground": "#C586C0"},
    },
    {
        "scope": [
            "variable",
            "support.variable",
            "meta.definition.variable.name",
        ],
        "settings": {"foreground": "#9cdcfe"},
    },

    {
        "scope": [
            "code-runner.output code-runner.running string",
            "code-runner.running code-runner.done string",
        ],
        "settings": {
            "foreground": "#ce9178",
            "fontStyle": "italic",
        },
    },
    {
        "scope": "token.info-token",
        "settings": {"foreground": "#569cd6"},
    },
    {
        "scope": "token.warn-token",
        "settings": {"foreground": "#d7ba7d"},
    },
    {
        "scope": "token.error-token",
        "settings": {"foreground": "#f44747"},
    },
    {
        "scope": "token.debug-token",
        "settings": {"foreground": "#c586c0"},
    },
];

module.exports = [
    {
        "scope": [
            "comment.wildcard.elixir",
            "comment.unused.elixir",
        ],
        "settings": {
            "foreground": "#9cdcfe",
            "fontStyle": "italic",
        },
    },
    {
        "scope": [
            "punctuation.section.function.elixir",
        ],
        "settings": {"foreground": "#d4d4d4"},
    },
    // {
    //     "scope": ["comment.documentation.heredoc.elixir"],
    //     "settings": {"foreground": "#608b4e"},
    // },
    {
        "scope": [
            // "punctuation.definition.constant.elixir",
            "parameter.variable.function.elixir",
            "source.elixir.embedded.source",
            "variable.other.readwrite.module.elixir",
            "variable.other.anonymous.elixir",
        ],
        "settings": {"foreground": "#9cdcfe"},
    },
    {
        "scope": ["punctuation.separator.method.elixir"],
        "settings": {"foreground": "#c586c0"},
    },
    {
        "scope": [
        "meta.module.elixir",
        "entity.name.type.module.elixir",
        "variable.other.readwrite.module.elixir",
        "variable.other.constant.elixir",
    ],
        "settings": {"foreground": "#4ec9b0"},
    },
    {
        "scope": [
            "constant.other.symbol.elixir",
            "punctuation.section.embedded.elixir",
            "punctuation.definition.variable.elixir",
            "variable.language.elixir",
            "source.elixir.embedded.source punctuation.section.embedded.elixir",
        ],
        "settings": {"foreground": "#569cd6"},
    },
    {
        "scope": [
            "constant.other.symbol.elixir",
            "punctuation.definition.constant.elixir",
            "support.function.variable.quoted.single.elixir"
        ],
        "settings": {"foreground": "#d7ba7d"},
    },
    // =========================================================================
    // eex
    // =========================================================================
    {
        "scope": [
            "punctuation.section.embedded.elixir",
        ],
        "settings": {"foreground": "#4ec9b0"},
    },
    // =========================================================================
    // Erlang
    // =========================================================================
    {
        "scope": [
            "punctuation.definition.placeholder.erlang",
            "constant.other.placeholder.erlang",
        ],
        "settings": {"foreground": "#d7ba7d"},
    },
    {
        "scope": ["punctuation.separator.parameters.erlang"],
        "settings": {"foreground": "#d4d4d4"},
    },
    {
        "scope": [
            "punctuation.section.directive.begin.erlang",
            "punctuation.section.directive.end.erlang",
            "punctuation.separator.module-function.erlang",
            "punctuation.separator.record-field.erlang",
            "punctuation.separator.list.erlang",
            "keyword.operator.symbolic.erlang",
            "punctuation.separator.clause-head-body.erlang",
        ],
        "settings": {"foreground": "#c586c0"},
    },
    {
        "scope": [
            "punctuation.separator.clauses.erlang",
            "punctuation.terminator.function.erlang",
        ],
        "settings": {"foreground": "#808080"},
    },
    {
        "scope": [
            "punctuation.separator.function-arity.erlang",
            "variable.language.omitted.erlang",
            // "punctuation.separator.clause-head-body.erlang",
            // "keyword.operator.symbolic.erlang",
        ],
        "settings": {"foreground": "#569cd6"},
    },
    {
        "scope": [
            "variable.other.erlang",
            // "constant.other.symbol.unquoted.erlang",
        ],
        "settings": {"foreground": "#9cdcfe"},
    },
];
module.exports = [
    {
        scope: [
            "keyword.operator.assignment.go",
            "keyword.operator.arithmetic.go",
            "keyword.operator.comparison.go",
            "keyword.operator.address.go",
            "keyword.operator.arithmetic.bitwise.go",
            "punctuation.terminator.go",
            "punctuation.other.colon.go",
            "punctuation.other.period.go",
            "keyword.control.gotemplate",
        ],
        settings: {
            "foreground": "#c586c0",
        },
    },
    {
        scope: [
            "string.quoted.double.gotemplate",
        ],
        settings: { "foreground": "#ce9178" },
    },
    // {
    //     scope: [
    //         "constant.other.rune.go",
    //     ],
    //     settings: { "fontStyle": "italic" },
    // },
    {
        scope: [
            "source.go storage.type",
            // These don't need to be defined explicitly, the above scope covers them. I just left them to be thorough.
            "storage.type.boolean.go",
            "storage.type.byte.go",
            "storage.type.numeric.go",
            "storage.type.string.go",
            "storage.type.error.go",
            "storage.type.rune.go",
        ],
        settings: {
            "foreground": "#4ec9b0",
        },
    },
    {
        scope: [
            "constant.other.rune.go",
            "constant.character.escape.go",
            "string.quoted.rune.go punctuation.definition.string.begin.go",
            "string.quoted.rune.go punctuation.definition.string.end.go",
        ],
        settings: {
            "foreground": "#d7ba7d",
        },
    },
    // {
    //     scope: [
    //         "punctuation.terminator.go",
    //     ],
    //     settings: {
    //         "foreground": "#d4d4d4",
    //     },
    // },
    {
        scope: [
            "constant.other.placeholder.go",
            "variable.other.blank.go",
            "keyword.operator.pointer.go",
            "keyword.operator.address.go",
            "keyword.operator.ellipsis.go",
        ],
        settings: {
            "foreground": "#569cd6",
        },
    },
    // Templates
    {
        scope: [
            "punctuation.section.embedded.begin.gotemplate",
            "punctuation.section.embedded.end.gotemplate",
        ],
        settings: {
            "foreground": "#4ec9b0",
        },
    },
    {
        scope: [
            "entity.alias.import.go",
        ],
        settings: {
            "foreground": "#9cdcfe",
        },
    },
];
module.exports = [
    // =========================================================================
    // GraphQL
    // =========================================================================
    {
        "scope": [
            "entity.scalar.graphql",        // prisma-labs/vscode-graphql
            "entity.name.fragment.graphql", // prisma-labs/vscode-graphql
        ],
        "settings": { "foreground": "#4ec9b0" },
    },
    {
        "scope": [
            "punctuation.or.graphql",         // prisma-labs/vscode-graphql
            "punctuation.assignment.graphql", // prisma-labs/vscode-graphql
        ],
        "settings": { "foreground": "#c586c0" },
    },
    {
        "scope": [
            "graphql.description.SINGLELINE",            // kumarharsh/graphql-for-vscode
            "string.block.description.graphql.DOCSTRING", // kumarharsh/graphql-for-vscode
            "string.description.graphql"
        ],
        "settings": {"foreground": "#608b4e"},
    },
];
module.exports = [
    {
        "scope": [
            "punctuation.definition.tag",
        ],
        "settings": { "foreground": "#808080" },
    },
    {
        "scope": "entity.other.attribute-name",
        "settings": { "foreground": "#9cdcfe" },
    },
    {
        "scope": [
            "punctuation.definition.string.begin.html",
            "punctuation.definition.string.end.html",
        ],
        "settings": { "foreground": "#ce9178" },
    },
    {
        "scope": [
            "entity.tag",
            "entity.name.tag",
            "string.interpolated.jade",
            "support.constant.handlebars",
            "keyword.annotation.handlebars",
            "meta.function.block.start.handlebars",
            "meta.function.block.end.handlebars",
            "punctuation.section.embedded.begin.php",
            "punctuation.section.embedded.end.php",
            "meta.tag.template.value.twig",
            "punctuation.section.tag.twig",
        ],
        "settings": { "foreground": "#569cd6" },
    },
    {
        "scope": [
            // JS in html
            "text.html.basic meta.brace.round.js",
            "text.html.basic meta.brace.square.js",
            "text.html.basic punctuation.separator.comma.js",
            "text.html.basic punctuation.definition.block.js",
            "text.html.basic punctuation.definition.parameters.begin.js",
            "text.html.basic punctuation.definition.parameters.end.js",
            // JS in jinja
            "text.html.jinja punctuation.definition.parameters.begin.js",
            "text.html.jinja punctuation.definition.parameters.end.js",
            "text.html.jinja meta.brace.round.js",
            "text.html.jinja meta.brace.square.js",
            "text.html.jinja punctuation.definition.block.js",
            "text.html.jinja punctuation.separator.comma.js",
        ],
        "settings": { "foreground": "#d4d4d4" },
    },
    // {
    //     "name": "Template Tags",
    //     "scope": [
    //         "string.interpolated.jade",
    //         "punctuation.section.embedded.begin.php",
    //         "punctuation.section.embedded.end.php",
    //         "meta.tag.template.value.twig",
    //         "punctuation.section.tag.twig",
    //     ],
    //     "settings": { "foreground": "#569cd6" }
    // },
    {
        "scope": "constant.character.entity.html",
        "settings": { "foreground": "#d7ba7d" },
    },
    {
        "name": "don't highlight ejs and erb as errors",
        "scope": "invalid.illegal.bad-angle-bracket.html",
        "settings": { "foreground": "#d4d4d4" },
    },
    {
        "scope": [
            // "entity.name.tag.template.html",
            "punctuation.section.embedded.begin.php",
            "punctuation.section.embedded.end.php",
            "meta.directive.vue",
            "expression.embedded.vue",
            "punctuation.definition.generic.begin.html",
            "punctuation.definition.generic.end.html",
            "punctuation.section.embedded.begin.smarty",
            "punctuation.section.embedded.end.smarty",
        ],
        "settings": { "foreground": "#4ec9b0" },
    },
    // =========================================================================
    // Jade/Pug
    // =========================================================================
    {
        "name": "Mustaches",
        "scope": [
            "string.interpolated.jade",
        ],
        "settings": { "foreground": "#4ec9b0" },
    },
    {
        "scope": [
            "meta.control.flow.jade",
            "meta.first-class.jade",
            "storage.type.function.jade",
            "storage.type.import.include.jade",
        ],
        "settings": { "foreground": "#c586c0" },
    },
    // =========================================================================
    // Handlebars
    // =========================================================================
    // "support.constant.handlebars",
    // "keyword.annotation.handlebars",
    // "meta.function.block.stardt.handlebars",
    // "meta.function.block.end.handlebars",
    {
        "scope": [
            // "text.html.handlebars",
            // "meta.function.inline.other.handlebars",
            "meta.function.block.start.handlebars",
            "meta.function.block.end.handlebars",
            "meta.function.block.start.handlebars support.constant.handlebars",
            "meta.function.block.end.handlebars support.constant.handlebars",
        ],
        "settings": { "foreground": "#c586c0" },
    },
    {
        "scope": [
            "support.constant.handlebars",
            // "meta.tag.mustache.js",
        ],
        "settings": { "foreground": "#4ec9b0" },
    },
    {
        "scope": [
            "variable.parameter.handlebars",
        ],
        "settings": { "foreground": "#9cdcfe" },
    },
    // =========================================================================
    // ejs
    // =========================================================================
    {
        "scope": [
            "keyword.begin.tag.ejs",
            // "text.html.ejs keyword.begin.tag.ejs punctuation.accessor.js",
            // "text.html.ejs keyword.begin.tag.ejs keyword.operator.arithmetic.js",
        ],
        "settings": { "foreground": "#4ec9b0" },
    },
    {
        "scope": [
            "text.html.ejs keyword.begin.tag.ejs meta.group.braces.round.js meta.brace.round.begin.js",
            "text.html.ejs keyword.begin.tag.ejs meta.group.braces.round.js meta.brace.round.end.js",
            "text.html.ejs keyword.begin.tag.ejs meta.group.braces.round.js",

            "text.html.ejs meta.brace.round.js",
            "text.html.ejs meta.brace.square.js",
            // "text.html.ejs punctuation.definition.block.js",
            "text.html.ejs punctuation.definition.parameters.begin.js",
            "text.html.ejs punctuation.definition.parameters.end.js",
        ],
        "settings": { "foreground": "#d4d4d4" },
    },
    {
        "scope": [
            "text.html.ejs keyword.operator.expression.typeof.js",
            "text.html.ejs keyword.operator.expression.instanceof.js",
        ],
        "settings": { "foreground": "#c586c0" },
    },
    // =========================================================================
    // Vue
    // =========================================================================
    {
        "scope": [
            "text.html.vue-html meta.brace.round.js",
        ],
        "settings": { "foreground": "#d4d4d4" },
    },
    {
        "scope": [
            "text.html.vue-html meta.tag.other.html",
        ],
        "settings": { "foreground": "#808080" },
    },
    {
        "scope": [
            "text.html.vue-html source.directive.vue punctuation.definition.string.begin.html",
            "text.html.vue-html source.directive.vue punctuation.definition.string.end.html",
            // "source.vue text.html.vue-html meta.tag.inline.any.html meta.directive.vue entity.other.attribute-name.html",
            "meta.tag.inline.any.html meta.directive.vue entity.other.attribute-name.html",
            "meta.directive.vue punctuation.separator.key-value.html",
            "meta.directive.vue entity.other.attribute-name.html",
        ],
        "settings": { "foreground": "#4ec9b0" },
    },
    // {
    // "scope": [],
    // "settings": { "foreground": "#c586c0" },
    // },
    // =========================================================================
    // Jinja2
    // =========================================================================
    {
        "scope": [
            "entity.other.jinja.delimiter.tag",
        ],
        "settings": { "foreground": "#606060" },
    },
    {
        "scope": [
            "entity.other.jinja.delimiter.variable",
        ],
        "settings": { "foreground": "#4ec9b0" },
    },
    {
        "scope": [
            "variable.other.jinja",
            // "variable.other.jinja.block"
        ],
        "settings": { "foreground": "#9cdcfe" },
    },
    {
        "scope": [
            "variable.language.jinja",
        ],
        "settings": { "foreground": "#569cd6" },
    },
    // =========================================================================
    // Liquid
    // =========================================================================
    {
        "scope": [
            "punctuation.tag.liquid",
        ],
        "settings": { "foreground": "#606060" },
    },
    {
        "scope": [
            "punctuation.output.liquid",
            // "support.class.liquid",
        ],
        "settings": { "foreground": "#4ec9b0" },
    },
    {
        "scope": [
            "support.variable.liquid",
            "support.class.liquid",

        ],
        "settings": { "foreground": "#9cdcfe" },
    },
    {
        "scope": [
            "punctuation.tag.liquid",
            "keyword.operator.liquid",
            "entity.name.tag.liquid",
        ],
        "settings": { "foreground": "#c586c0" },
    },
];
module.exports = [
    {
        "scope": [
            "storage.modifier.import.java",
            "variable.language.wildcard.java",
            "storage.modifier.package.java",
        ],
        "settings": {"foreground": "#d4d4d4"},
    },
    {
        "scope": [
            "punctuation.separator.period.java",
        ],
        "settings": {"foreground": "#c586c0"},
    },
    // =========================================================================
    // Kotlin
    // =========================================================================
    {
        "scope": [
            "storage.type.builtin.kotlin",
            "storage.type.builtin.collection.kotlin",
            "entity.name.package.kotlin",
        ],
        "settings": {"foreground": "#4ec9b0"},
    },
    {
        "scope": [
            "meta.template.expression.kotlin",
        ],
        "settings": { "foreground": "#9cdcfe" },
    },
    {
        "scope": [
            "keyword.hard.kotlin",
        ],
        "settings": {"foreground": "#c586c0"},
    },
    // =========================================================================
    // Scala
    // =========================================================================
    {
        "scope": [
            "storage.type.scala",
            "storage.type.primitive.scala",
            "meta.colon.scala",
        ],
        "settings": {"foreground": "#4ec9b0"},
    },
    // =========================================================================
    // Groovy
    // =========================================================================
    {
        "scope": [
            // "constant.other.key.groovy",
            "source.groovy.embedded.source",
        ],
        "settings": {"foreground": "#9cdcfe"},
    },
    {
        "scope": [
            "keyword.operator.assignment.groovy",
            "keyword.operator.arithmetic.groovy",
            "keyword.control.exception.groovy",
        ],
        "settings": {"foreground": "#c586c0"},
    },
    {
        "scope": [
            "punctuation.section.embedded.groovy",
            "constant.other.groovy",
        ],
        "settings": {"foreground": "#569cd6"},
    },
    {
        "scope": [
            "meta.method.groovy",
            // "meta.method-call.groovy",
        ],
        "settings": {"foreground": "#dcdcaa"},
    },
    {
        "scope": "constant.character.escape.groovy",
        "settings": {"foreground": "#d7ba7d"},
    },
]
module.exports = [
    {
        scope: [
            "comment.block",
            "comment.block.documentation.js",
            "comment.block.documentation.js storage.type.class.jsdoc punctuation.definition.block.tag.jsdoc",
            // "comment.block.js",
            // "comment.block.ts",
            // "meta.tag.ts",
            "comment.line.triple-slash.directive.ts",
            "comment.block.documentation.ts",
            "comment.line.shebang.js",
            // "punctuation.definition.comment.js"
        ],
        settings: {"foreground": "#608b4e"},
    },
    {
        scope: [
            "comment.block.documentation.js storage.type.class.jsdoc punctuation.definition.block.tag.jsdoc",
            "punctuation.definition.bracket.curly.begin.jsdoc",
            "punctuation.definition.bracket.curly.end.jsdoc",
            "storage.type.class.jsdoc",
        ],
        settings: {
            "foreground": "#608b4e",
            "fontStyle": "italic",
        },
    },
    {
        scope: "punctuation.definition.comment.js",
        settings: {"foreground": "#404040"},
    },
    {
        scope: [
            "comment.line.double-slash.js",
            "meta.embedded.expression.js source.js.jsx comment.block.js",
        ],
        settings: {"foreground": "#505050"},
    },
    {
        scope: [
            "variable.language.this",
        ],
        settings: {
            "foreground": "#569cd6",
            "fontStyle": "italic",
        },
    },
    {
        scope: [
            "constant.character.escape.js",
            // "variable.other.constant.object",
            // "variable.other.constant.property",
            // "variable.other.constant",
        ],
        settings: {"foreground": "#d7ba7d"},
    },
    {
        scope: [
            "keyword.other.template.begin.js",
            "keyword.other.template.end.js",
            "punctuation.definition.string.template.begin.js",
            "punctuation.definition.string.template.begin.ts",
            "punctuation.definition.string.template.end.js",
            "punctuation.definition.string.template.end.ts",
        ],
        settings: {"foreground": "#ce9178"},
    },
    {
        scope: [
            "punctuation.separator.key-value.js",
            "punctuation.separator.key-value.ts",
            "punctuation.definition.block.js",
            "punctuation.definition.block.ts",
            "punctuation.separator.comma.js",
            "punctuation.separator.comma.ts",
            "punctuation.separator.parameter",
            "punctuation.definition.parameters.begin",
            "punctuation.definition.parameters.end",
            "meta.brace.square.js",
            "entity.quasi.element.js",
            "comment.block.documentation.js keyword.operator.accessor.js",
            "punctuation.definition.binding-pattern.object",
        ],
        settings: {"foreground": "#d4d4d4"},
    },
    {
        scope: [
            "new.expr.js",
            "meta.arrow.js",
            "keyword.operator.new.js",
            "storage.type.extends.js",  // storage.modifier
            "variable.language.super",
            // "variable.language.super.js",
            // "variable.language.super.jsx",
            // "variable.language.super.ts",
            // "variable.language.super.tsx",
            "storage.type.function.arrow.js",
            "keyword.operator.spread",
            "keyword.operator.rest",
            "keyword.operator.module.all.js",
            "meta.brace.angle.ts",
            // "keyword.control.as.js",
            // "keyword.control.as.ts",
            "meta.brace.angle.tsx",
            "keyword.control.as.tsx",
            "comment.line.triple-slash.directive.ts",
            "punctuation.definition.tag.directive.ts",
            "punctuation.definition.typeparameters.begin.ts",
            "punctuation.definition.typeparameters.end.ts",
            "punctuation.definition.template-expression.begin.js",
            "punctuation.definition.template-expression.end.js",
            "punctuation.definition.template-expression.begin.ts",
            "punctuation.definition.template-expression.end.ts",
            "punctuation.definition.template-expression.begin.tsx",
            "punctuation.definition.template-expression.end.tsx",
            "punctuation.quasi.element.end.js",
            "punctuation.quasi.element.begin.js",
            "punctuation.section.embedded.coffee",
            "punctuation.definition.binding-pattern.object",
            // "meta.import.js meta.block.js punctuation.definition.block.js",
            // "variable.other.constant.object.js",
            // "variable.other.constant.property.js",
            // "variable.other.constant.js",
        ],
        settings: {"foreground": "#569cd6"},
    },
    {
        scope: [
            "meta.template.expression.js",
            "meta.template.expression.ts",
            "meta.brace.round.ts",
            "meta.brace.round.js",
            "meta.tag.without-attributes.js meta.jsx.children.js",
            "meta.jsx.children.js",
        ],
        settings: {"foreground": "#d4d4d4"},
    },
    {
        scope: [
            "variable.function.js",
            "meta.function-call.method.with-arguments.js",
            "keyword.control.require.ts",
            "punctuation.decorator.js",
            "punctuation.decorator.ts",
        ],
        settings: {"foreground": "#dcdcaa"},
    },
    {
        scope: [
            "keyword.operator.js",
            "punctuation.accessor.js",
            "punctuation.accessor.ts",
            "keyword.operator.typeof.js",
            "keyword.operator.logical.js",
            "keyword.operator.in.js",
            "keyword.operator.arithmetic.js",
            "keyword.operator.assignment.js",
            "keyword.operator.comparison.js",
            "keyword.operator.relational.js",
            "keyword.operator.expression.of.js",
            "keyword.operator.expression.of.ts",
            "keyword.operator.expression.in.js",
            "keyword.operator.expression.in.ts",
            "punctuation.definition.section.case-statement.js",
        ],
        settings: {"foreground": "#c586c0"},
    },
    {
        scope: [
            "string.unquoted.js",
            "string.unquoted.label.js",
            "meta.object-literal.key",
            "meta.property.object.js",
            "constant.other.object.key.js",
            "constant.other.object.key string.quoted.double",
            "meta.object-literal.key string.quoted.single",
            "meta.object-literal.key string.quoted.double",
            "string.quoted.single meta.object-literal.key",
            "string.quoted.double meta.object-literal.key",
        ],
        settings: {"foreground": "#9cdcfe"},
    },
    {
        scope: [
            "keyword.operator.optional.ts",
            "support.type.object.module.js",
            "support.type.object.module.js.jsx",
            // "keyword.control.module.reference.js",
            "support.type.object.module keyword.operator.accessor",
            "keyword.operator.type.annotation.ts",
            "keyword.operator.type.annotation.tsx",
            "punctuation.type.flowtype",
            "support.variable.dom",
            "support.variable.object",
            "support.variable.object.node",
            "support.variable.object.process",
            "support.variable.property.process",
        ],
        settings: {"foreground": "#4ec9b0"},
    },
    {
        scope: [
            "support.type.primitive.ts",
            "support.type.primitive.tsx",
        ],
        settings: {
            "foreground": "#4ec9b0",
            // "fontStyle": "italic",
        },
    },
    // =========================================================================
    // JSX
    // =========================================================================
    {
        scope: [
            "punctuation.section.embedded.begin.js.jsx",
            "punctuation.section.embedded.end.js.jsx",
            "punctuation.section.embedded.begin.jsx",
            "punctuation.section.embedded.end.jsx",
            "punctuation.section.embedded.begin.tsx",
            "punctuation.section.embedded.end.tsx",
            "meta.tag.js meta.jsx.children.js meta.tag.js meta.jsx.children.js meta.embedded.expression.js punctuation.section.embedded.begin.js",
            "meta.tag.js meta.jsx.children.js meta.tag.js meta.jsx.children.js meta.embedded.expression.js punctuation.section.embedded.end.js",
            "meta.tag.js punctuation.section.embedded.begin.js",
            "meta.tag.js punctuation.section.embedded.end.js",
            "meta.tag.without-attributes.js punctuation.section.embedded.begin.js",
            "meta.tag.without-attributes.js punctuation.section.embedded.end.js",
        ],
        settings: {
            "foreground": "#4ec9b0",
            // "fontStyle": "italic",
        },
    },
    // =========================================================================
    // Angular
    // =========================================================================
    {
        scope: [
            "meta.component.decoration entity.name.label.ts",
        ],
        settings: {"foreground": "#9cdcfe"},
    },
];
module.exports = [
    // =========================================================================
    // Makefile
    // =========================================================================
    {
        "scope": ["comment.line.number-sign.makefile"],
        "settings": {"foreground": "#608b4e"},
    },
    {
        "scope": ["variable.other.makefile"],
        "settings": {"foreground": "#9cdcfe"},
    },
    {
        "scope": ["variable.language.makefile"],
        "settings": {"foreground": "#569cd6"},
    },
    {
        "scope": [
            "entity.name.function.target.makefile",
            "constant.character.escape.continuation.makefile",
        ],
        "settings": { "foreground": "#dcdcaa" },
    },
    {
        "scope": [
            "punctuation.separator.key-value.makefile",
            "support.function.foreach.makefile",
            "keyword.control.ifeq.makefile",
            "keyword.control.endif.makefile",
            "constant.character.escape.continuation.makefile",
        ],
        "settings": { "foreground": "#c586c0" },
    },
    // =========================================================================
    // CMake
    // =========================================================================
    {
        "scope": ["storage.source.cmake"],
        "settings": {"foreground": "#9cdcfe"},
    },
];
module.exports = [
    // =========================================================================
    // Markup
    // =========================================================================
    {
        "scope": "markup.underline",
        "settings": { "fontStyle": "underline" },
    },
    {
        "scope": [
            "markup.bold",
            "strong",
        ],
        "settings": { "fontStyle": "bold" },
    },
    {
        "scope": [
            "markup.italic",
            "emphasis",
        ],
        "settings": { "fontStyle": "italic" },
    },
    {
        "scope": "markup.heading",
        "settings": {
            // "fontStyle": "bold",
            "foreground": "#569cd6",
        },
    },
    {
        "scope": "markup.inserted",
        "settings": { "foreground": "#b5cea8" },
    },
    {
        "scope": "markup.deleted",
        "settings": { "foreground": "#ce9178" },
    },
    {
        "scope": "markup.changed",
        "settings": { "foreground": "#569cd6" },
    },
    {
        "scope": "markup.inline.raw",
        "settings": { "foreground": "#ce9178" },
    },
    {
        "scope": "fenced_code.block.language",
        "settings": { "foreground": "#4ec9b0" },
    },

    // =========================================================================
    // Markdown
    // =========================================================================
    {
        "scope": "markup.italic.markdown",
        "settings": {
            "fontStyle": "italic",
            "foreground": "#9cdcfe",
        },
    },
    {
        "scope": [ "markup.bold.markdown" ],
        "settings": {
            "fontStyle": "bold",
            "foreground": "#569cd6",
        },
    },
    {
        "scope": [
            "meta.separator.markdown",
            "entity.name.section.markdown",
            "punctuation.definition.heading.markdown",
        ],
        "settings": { "foreground": "#c586c0" },
    },
    {
        "scope": [
            "markup.quote.markdown",
        ],
        "settings": { "foreground": "#608b4e" },
    },
    {
        "scope": [
            "beginning.punctuation.definition.list.markdown",
            "punctuation.definition.list.begin.markdown",
        ],
        "settings": { "foreground": "#6796e6" },
    },
    {
        "scope": [
            // "meta.link.inline.markdown"
            "string.other.link.description.markdown",
            "string.other.link.title.markdown",
        ],
        "settings": {"foreground": "#9cdcfe"},
    },
    {
        "scope": [
            "markup.underline.link.markdown",
            "markup.underline.link.image.markdown",
        ],
        "settings": { "foreground": "#404040" },
    },
    {
        "scope": [
            "markup.fenced_code.block.markdown punctuation.definition.markdown",
            "punctuation.definition.italic.markdown",
            "punctuation.definition.bold.markdown",
            "punctuation.definition.raw.markdown",
            "beginning.punctuation.definition.quote.markdown",
            "meta.link.reference.def.markdown punctuation.definition.constant.markdown",
            "meta.link.reference.def.markdown punctuation.separator.key-value.markdown",
            "meta.link.reference.markdown punctuation.definition.constant.begin.markdown",
            "meta.link.reference.markdown punctuation.definition.constant.end.markdown",
            "meta.image.reference.markdown punctuation.definition.constant.markdown",
            "block-dollars",
            "inline-dollars",
        ],
        "settings": { "foreground": "#303030" },
    },
    {
        "scope": [
            // "meta.link.reference.markdown",
            "meta.link.reference.def.markdown constant.other.reference.link.markdown",
            // "punctuation.definition.constant.begin.markdown",
        ],
        "settings": { "foreground": "#569cd6" },
    },
    {
        "scope": [
            "meta.link.reference.markdown constant.other.reference.link.markdown",
            "meta.image.reference.markdown constant.other.reference.link.markdown",
        ],
        "settings": {
            "fontStyle": "italic",
            "foreground": "#404040",
        },
    },
    {
        "scope": [
            "meta.link.reference.def.markdown markup.underline.link.markdown",
        ],
        "settings": { "foreground": "#ce9178" },
    },
    // =========================================================================
    // Org Mode
    // =========================================================================
    {
        scope: [
            "source.org comment.line",
            "source.org punctuation.definition.comment",
            "meta.link.inline.org punctuation.definition.string.begin.org",
            "meta.link.inline.org punctuation.definition.string.end.org",
            "meta.link.inline.org markup.underline.link.org",
        ],
        settings: { "foreground": "#505050" },
    },
];
module.exports = [
    {
        "scope": [
            "punctuation.definition.variable.begin.gitignore",
            "punctuation.definition.variable.end.gitignore",
        ],
        "settings": {"foreground": "#505050"},
    },
    {
        "scope": "support.function.git-rebase",
        "settings": { "foreground": "#9cdcfe" },
    },
    {
        "scope": "constant.sha.git-rebase",
        "settings": { "foreground": "#b5cea8" },
    },
    // =========================================================================
    // Properties/INI
    // =========================================================================
    {
        "scope": [
            "comment.line.number-sign.ini",
            "punctuation.definition.entity.ini",
        ],
        "settings": {"foreground": "#505050"},
    },
    {
        "scope": ["keyword.other.definition.ini"],
        "settings": {"foreground": "#9cdcfe"},
    },
    // {
    //     "scope": ["entity.name.section.group-title.ini"],
    //     "settings": {"foreground": "#569cd6"},
    // },
    {
        "scope": ["punctuation.separator.key-value.ini"],
        "settings": {"foreground": "#c586c0"},
    },
    // =========================================================================
    // YAML
    // =========================================================================
    {
        "scope": [
            "comment.line.number-sign.yaml",
            "punctuation.separator.key-value.mapping.yaml",    // `:`
        ],
        "settings": {"foreground": "#505050"},
    },
    // {
    //     "scope": [
    //         "punctuation.definition.block.sequence.item.yaml", // `-`
    //         "punctuation.separator.key-value.mapping.yaml",    // `:`
    //     ],
    //     "settings": {"foreground": "#d4d4d4d4"},
    // },
    {
        "scope": [
            "constant.other.timestamp.yaml",
        ],
        "settings": {"foreground": "#b5cea8"},
    },

    {
        "scope": [
            "punctuation.definition.sequence.begin.yaml", // Square brackets
            "punctuation.definition.sequence.end.yaml",   // Square brackets
            "punctuation.definition.mapping.begin.yaml",  // Curly brackets
            "punctuation.definition.mapping.end.yaml",    // Curly brackets
            "punctuation.separator.sequence.yaml",        // Commas
            "punctuation.separator.mapping.yaml",         // Commas
        ],
        "settings": {"foreground": "#d4d4d4"},
    },
    {
        "scope": [
            "storage.type.tag-handle.yaml",
            "meta.property.yaml",
            "punctuation.definition.alias.yaml",    // "*" - (<<: *user_defaults)
            "keyword.control.flow.alias.yaml",      // "*" - (<<: *user_defaults)
            "variable.other.alias.yaml",            // "user_defaults" - (<<: *user_defaults)
            // "entity.name.type.anchor.yaml",         // "Default" - (default: &default)
        ],
        "settings": {"foreground": "#4ec9b0"},
    },
    {
        "scope": [
            // "constant.language.boolean.yaml", // `true`, `false`, `yes`, `no`, `on`, and `off`
            // "constant.language.null.yaml", // `null` and `~`
            "keyword.control.property.anchor.yaml",  //  "&" - (default: &default)
            "constant.language.merge.yaml",          // "<<" - (<<: *user_defaults)
            "punctuation.definition.alias.yaml",     // "*" - (<<: *user_defaults)
            "keyword.control.flow.alias.yaml",       // "*" (<<: *user_defaults)
            "support.other.directive.reserved.yaml",       // "RESERVED" - (%RESERVED name parameter #comment)
            "punctuation.definition.directive.begin.yaml", // "%" - (%RESERVED name parameter #comment)
        ],
        "settings": {"foreground": "#569cd6"},
    },
    {
        "scope": [
            "constant.language.boolean.yaml", // `true`, `false`, `yes`, `no`, `on`, and `off`
            "constant.language.null.yaml",    // `null` and `~`
        ],
        "settings": {
            "foreground": "#569cd6",
            "fontStyle": "italic",
        },
    },
    // {
    //     "scope": ["entity.name.tag.yaml"],
    //     "settings": {"foreground": "#9cdcfe"},
    // },
    {
        "scope": [
            "entity.other.document.begin.yaml", // `---`
            "entity.other.document.end.yaml",   // `...`
            "keyword.control.flow.block-scalar.literal.yaml", // `|`
            "storage.modifier.chomping-indicator.yaml", // (`-` in `|-`) or (`+` in `|+`)
            "punctuation.definition.block.sequence.item.yaml", // `-`
        ],
        "settings": { "foreground": "#c586c0" },
    },
    // =========================================================================
    // TOML
    // =========================================================================
    {
        "scope": ["keyword.key.toml"],
        "settings": {"foreground": "#9cdcfe"},
    },
    {
        "scope": ["constant.other.datetime-with-timezone.toml"],
        "settings": {"foreground": "#b5cea8"},
    },
    {
        "scope": [
            "meta.tag.table.toml",
            "punctuation.definition.keyValuePair.toml",
        ],
        "settings": {"foreground": "#c586c0"},
    },
    {
        "scope": [
            "entity.other.attribute-name.table.array.toml",
            "entity.other.attribute-name.table.toml",
            "constant.other.boolean.toml",
        ],
        "settings": {"foreground": "#569cd6"},
    },
    {
        "scope": [
            "source.toml",
            "punctuation.definition.table.toml",
            "punctuation.definition.array.toml",
            "punctuation.definition.table.array.toml",
        ],
        "settings": {"foreground": "#808080"},
    },
    // =========================================================================
    // Lisp
    // =========================================================================
    {
        "scope": [
            "storage.type.function-type.lisp",
            "constant.language.lisp",
        ],
        "settings": {"foreground": "#569cd6"},
    },
    {
        "scope": ["keyword.constant.lisp"],
        "settings": {"foreground": "#9cdcfe"},
    },
    {
        "scope": ["keyword.control.lisp"],
        "settings": {"foreground": "#c586c0"},
    },
    // =========================================================================
    // Viml
    // =========================================================================
    {
        "scope": [
            // "constant.character",
            "constant.character.map.rhs.viml",
            "constant.character.map.special.viml",
            "constant.character.map.key.viml",
            "constant.character.map.key.fn.viml",
            "constant.character.map.viml",
        ],
        "settings": {"foreground": "#d7ba7d"},
    },
    {
        "scope": ["punctuation.definition.map.viml"],
        "settings": {"foreground": "#505050"},
    },
    // =========================================================================
    // Haskell
    // =========================================================================
    // {
    //     "scope": [
    //         "constant.other.haskell",
    //     ],
    //     "settings": {"foreground": "#9cdcfe"},
    // },
    {
        "scope": [
            "meta.preprocessor.haskell",
        ],
        "settings": {"foreground": "#608b4e"},
    },
    {
        "scope": [
            "storage.type.haskell",
            "support.other.module.haskell",
        ],
        "settings": {"foreground": "#4ec9b0"},
    },
    // =========================================================================
    // Dart
    // =========================================================================
    {
        "scope": ["keyword.control.new.dart"],
        "settings": {"foreground": "#569cd6"},
    },
    {
        "scope": ["punctuation.terminator.dart"],
        "settings": {"foreground": "#505050"},
    },
    {
        "scope": ["punctuation.dot.dart"],
        "settings": {"foreground": "#c586c0"},
    },
    {
        "scope": ["meta.declaration.dart"],
        "settings": {"foreground": "#9cdcfe"},
    },
    // =========================================================================
    // Elm
    // =========================================================================
    // // {
    // //     "scope": [
    //
    // //     ],
    // //     "settings": {"foreground": "#c586c0"},
    // // },
    // {
    //     "scope": [
    //         "punctuation.separator.comma.elm",
    //         "meta.declaration.exports.elm",
    //     ],
    //     "settings": {"foreground": "#d4d4d4"},
    // },
    // {
    //     "scope": [
    //         "constant.other.elm",
    //         // "meta.declaration.module.elm meta.declaration.exports.elm",
    //     ],
    //     "settings": {"foreground": "#9cdcfe"},
    // },
    // {
    //     "scope": [
    //         "support.constant.elm",
    //     ],
    //     "settings": {"foreground": "#569cd6"},
    // },
    // {
    //     "scope": [
    //         "storage.type.elm",
    //         "support.other.module.elm",
    //         "constant.language.empty-list.elm",
    //     ],
    //     "settings": {"foreground": "#4ec9b0"},
    // },
    // =========================================================================
    // nginx
    // =========================================================================
    {
        "scope": [
            "source.nginx constant.character.brace",
            "source.nginx constant.character.paren",
        ],
        "settings": {"foreground": "#d4d4d4"},
    },
    {
        "scope": [
            "source.nginx constant.character.brace",
            "source.nginx constant.character.end",
        ],
        "settings": {"foreground": "#808080"},
    },
    // {
    //     "scope": [
    //         // "source.nginx ",
    //         "source.nginx constant.language.directive.module.events",
    //         "source.nginx constant.language.directive.module.main",
    //         "source.nginx constant.language.module.http.log",
    //         "source.nginx constant.language.module.http.fastcgi",
    //         "source.nginx constant.language.directive.module.http",
    //
    //     ],
    //     "settings": {"foreground": "#569cd6"},
    // },
    // {
    //     "scope": [
    //         // "source.nginx ",
    //         // "source.nginx constant.language.directive.module.events",
    //         // "source.nginx constant.language.module.http.log",
    //         // "source.nginx constant.language.module.http.fastcgi",
    //         // // "source.nginx constant.language.directive.module.http",
    //     ],
    //     "settings": {"foreground": "#9cdcfe"},
    // },
    // =========================================================================
    // Smarty
    // =========================================================================
    {
        "scope": [
            "support.function.built-in.smarty",
        ],
        // "settings": { "foreground": "#569cd6" },
        "settings": { "foreground": "#c586c0" },
    },
    {
        "scope": [
            "source.smarty punctuation.section.embedded.begin.smarty",
            "source.smarty punctuation.section.embedded.end.smarty",
        ],
        "settings": { "foreground": "#808080" },
    },
    {
        "scope": [
            "source.smarty",
        ],
        "settings": { "foreground": "#4ec9b0" },
    },
];

module.exports = [
    // =========================================================================
    // eamodio/vscode-gitlens
    // =========================================================================
    "gitlens.gutterBackgroundColor",	            // Specifies the background color of the gutter blame annotations	                            #FFFFFF13	#0000000C	#FFFFFF13
    "gitlens.gutterForegroundColor",	            // Specifies the foreground color of the gutter blame annotations	                            #BEBEBE	    #747474	    #BEBEBE
    "gitlens.gutterUncommittedForegroundColor",	    // Specifies the foreground color of an uncommitted line in the gutter blame annotations	    #00BCF299	#00BCF299	#00BCF2FF
    "gitlens.trailingLineBackgroundColor",	        // Specifies the background color of the blame annotation for the current line	#00000000	    #00000000	#00000000
    "gitlens.trailingLineForegroundColor",	        // Specifies the foreground color of the blame annotation for the current line	                #99999959	#99999959	#99999999
    "gitlens.lineHighlightBackgroundColor",	        // Specifies the background color of the associated line highlights in blame annotations	    #00BCF233	#00BCF233	#00BCF233
    "gitlens.lineHighlightOverviewRulerColor",	    // Specifies the overview ruler color of the associated line highlights in blame annotations	#00BCF299	#00BCF299	#00BCF299
    {
        "scope": [],
        "settings": { "foreground": "#c586c0" },
    },
    {
        "scope": [],
        "settings": { "foreground": "#ce9178" },
    },
    {
        "scope": [],
        "settings": {"foreground": "#569cd6"},
    },
    {
        "scope": [],
        "settings": { "foreground": "#9cdcfe" },
    },
    {
        "scope": [],
        "settings": { "foreground": "#4ec9b0" },
    },
    {
        "scope": [],
        "settings": {"foreground": "#608b4e"},
    },
    {
        "scope": [],
        "settings": { "foreground": "#dcdcaa" },
    },
    {
        "scope": [],
        "settings": { "foreground": "#d7ba7d" },
    },
    {
        "scope": [],
        "settings": { "foreground": "#ce9178" },
    },
    {
        "scope": [],
        "settings": { "foreground": "#d16969" },
    },
];
module.exports = [
    {
        "scope": [
            "string.quoted.docstring.multi.python",
            // "string.quoted.docstring.single.python",
            "string.quoted.docstring.multi.python keyword.control.flow.python",
        ],
        "settings": {"foreground": "#608b4e"},
    },
    {
        "scope": [
            "variable.language.special.self.python",
            "support.function.magic.python",
            "support.variable.magic.python",
            "storage.type.string.python",
            "variable.parameter.function.language.special.self.python",
            "meta.function.decorator.python support.type.python",
        ],
        "settings": {"fontStyle": "italic"},
    },
    {
        "scope": [
            "meta.function-call.arguments.python",
            "keyword.operator.assignment.python",
            "punctuation.separator.period.python",
            "punctuation.separator.element.python",
            "punctuation.separator.dict.python",
            "punctuation.separator.parameters.python",
            "punctuation.separator.arguments.python",
            "punctuation.section.class.begin.python",
            "punctuation.section.function.begin.python",
            "punctuation.section.function.end.python",
            "punctuation.definition.inheritance.begin.python",
            "punctuation.definition.inheritance.end.python",
            "punctuation.definition.parameters.begin.python",
            "punctuation.definition.parameters.end.python",
            "punctuation.definition.arguments.begin.python",
            "punctuation.definition.arguments.end.python",
            "punctuation.definition.list.begin.python",
            "punctuation.definition.list.end.python",
            "punctuation.definition.dict.begin.python",
            "punctuation.definition.dict.end.python",
            "punctuation.parenthesis.begin.python",
            "punctuation.parenthesis.end.python",
            // "punctuation.separator.colon.python",
            "punctuation.separator.dict.python",
            "punctuation.section.function.begin.python",
            "meta.function.parameters.begin.python",
            "meta.function.parameters.end.python",
            // "meta.function.parameters.python",
        ],
        "settings": { "foreground": "#d4d4d4" },
    },
    {
        "scope": [
            "punctuation.section.function.begin.python",
            "punctuation.section.class.begin.python",
            "variable.language.special.self.python",
            "variable.parameter.function.language.special.self.python",
            "constant.character.format.placeholder.other.python",
            "keyword.operator.unpacking.parameter.python",
            "keyword.operator.unpacking.arguments.python",
        ],
        "settings": { "foreground": "#569cd6" },
    },
    {
        "scope": [
            "meta.function-call.python",
            "meta.function-call.generic.python",
            "meta.function.decorator.python support.type.python",
        ],
        "settings": { "foreground": "#dcdcaa" },
    },
    {
        "scope": [
            "variable.parameter.function-call.python",
            "meta.structure.dictionary.key.python",
            "meta.function-call.arguments.python",
            "meta.function.parameters.python",
            // "meta.item-access.python",
            "constant.other.caps.python",
        ],
        "settings": { "foreground": "#9cdcfe" },
    },
    {
        "scope": [
            "support.type.python",
            "entity.name.type.class.python",
            "punctuation.separator.annotation.python",
            "punctuation.separator.annotation.result.python",
        ],
        "settings": { "foreground": "#4ec9b0" },
    },
    {
        "scope": [
            "punctuation.separator.period.python",
            "keyword.operator.comparison.python",
            "keyword.operator.assignment.python",
            "keyword.operator.logical.python",
            "punctuation.separator.slice.python",
            "punctuation.separator.colon.python",
        ],
        "settings": { "foreground": "#c586c0" },
    },
    {
        "scope": [
            "constant.character.escape.python",
            "string.quoted.binary.single.python"
        ],
        "settings": { "foreground": "#d7ba7d" },
    },
];
module.exports = [
    // {
    //     "scope": [
    //     ],
    //     "settings": { "foreground": "#9cdcfe", },
    // },
    {
        "scope": [
            "keyword.operator.quantifier.regexp",
            "keyword.operator.quantifier.regexp.js",
        ],
        "settings": { "foreground": "#b5cea8" },
    },
    {
        "scope": [
            "string.regexp",
            // "constant.regexp",
            // "constant.character.regexp",
        ],
        "settings": { "foreground": "#d16969" },
    },
    {
        "scope": [
            "string.regexp constant.character.escape.backslash.regexp",
        ],
        "settings": { "foreground": "#ce9178" },
    },
    {
        "scope": [
            "constant.other.character-class.regexp",
        ],
        "settings": { "foreground": "#4ec9b0" },
    },
    {
        "scope": [
            "keyword.control.anchor.regexp",
            "constant.other.character-class.regexp",
        ],
        "settings": { "foreground": "#569cd6" },
    },
    {
        "scope": [
            "punctuation.definition.group.regexp",
            "punctuation.definition.character-class.regexp",
        ],
        "settings": { "foreground": "#909090" },
    },
];
module.exports = [
    {
        "scope": [
            "punctuation.definition.string.begin.ruby",
            "punctuation.definition.string.end.ruby",
        ],
        "settings": {"foreground": "#ce9178"},
    },
    {
        "scope": [
            "variable.other.ruby",
            "variable.other.constant.ruby",
            "constant.language.symbol.hashkey.ruby",
            "constant.language.symbol.hashkey.parameter.function.ruby",
            "variable.other.readwrite.instance.ruby punctuation.definition.variable.ruby",
         ],
        "settings": {"foreground": "#9cdcfe"},
    },
    {
        "scope": ["variable.other.readwrite.instance.ruby"],
        "settings": {"fontStyle": "italic"},
    },
    {
        "scope": [
            "constant.character.escape.ruby",
            "constant.other.symbol.ruby",
            "constant.language.symbol.ruby",
            "punctuation.definition.constant.ruby",
        ],
        "settings": {"foreground": "#d7ba7d"},
    },
    {
        "scope": [
            "variable.language.self.ruby",
        ],
        "settings": {
            "foreground": "#569cd6",
            "fontStyle": "italic",
        },
    },
    {
        "scope": [
            "constant.other.symbol.hashkey.ruby",
            // "constant.language.symbol.hashkey.ruby",
            "meta.embedded.line.ruby",
         ],
        "settings": {"foreground": "#d4d4d4"},
    },
    {
        "scope": [
            "entity.name.function.ruby",
            "support.function.kernel.ruby",
         ],
        "settings": {"foreground": "#dcdcaa"},
    },
    {
        "scope": [
            "variable.language.ruby",
            // "constant.other.symbol.ruby",
            // "constant.language.symbol.ruby",
            "variable.other.readwrite.global.ruby",
            // "punctuation.definition.constant.ruby",
            "punctuation.definition.variable.ruby",
            "punctuation.separator.inheritance.ruby",
            "punctuation.section.embedded.begin.ruby",
            "punctuation.section.embedded.end.ruby",
            "variable.other.readwrite.global.pre-defined.ruby",
            "string.quoted.double.interpolated.ruby punctuation.section.embedded.begin.ruby",
            "string.quoted.double.interpolated.ruby punctuation.section.embedded.end.ruby",
            "string.regexp.interpolated.ruby meta.embedded.line.ruby punctuation.section.embedded.begin.ruby",
            "string.regexp.interpolated.ruby meta.embedded.line.ruby punctuation.section.embedded.end.ruby",
        ],
        "settings": {"foreground": "#569cd6"},
    },
    {
        "scope": [
            "meta.class.ruby",
            "support.class.ruby",
            "entity.name.type.class.ruby",
            "entity.other.inherited-class.ruby",
            // "punctuation.separator.namespace.ruby",
        ],
        "settings": {"foreground": "#4ec9b0"},
    },
    {
        "scope": [
            // "punctuation.separator.method.ruby",
            // "punctuation.separator.namespace.ruby",
            "keyword.control.def.ruby",
            "keyword.control.class.ruby",
            "keyword.operator.other.ruby",
            "keyword.operator.assignment.ruby",
            "punctuation.separator.other.ruby",
            "keyword.control.pseudo-method.ruby",
            "keyword.operator.comparison.ruby",
            "keyword.operator.arithmetic.ruby",
            "punctuation.separator.method.ruby",
            "constant.language.symbol.hashkey.ruby punctuation.definition.constant.hashkey.ruby",
            "constant.language.symbol.hashkey.parameter.function.ruby punctuation.definition.constant.hashkey.ruby",
            "source.ruby punctuation.separator.key-value",
        ],
        "settings": {"foreground": "#c586c0"},
    },
    {
        "scope": [
            "punctuation.separator.namespace.ruby",
            "punctuation.separator.object.ruby",
            "punctuation.separator.arguments.ruby",
            "punctuation.section.function.ruby",
            "punctuation.section.scope.begin.ruby",
            "punctuation.section.scope.end.ruby",
            "punctuation.section.array.begin.ruby",
            "punctuation.section.array.end.ruby",
        ],
        "settings": {"foreground": "#d4d4d4"},
    },
    {
        "scope": [
            "punctuation.section.regexp.begin.ruby",
            "punctuation.section.regexp.end.ruby",
            "punctuation.definition.group.ruby",
            "punctuation.definition.character-class.ruby",
            "punctuation.definition.character-class.begin.ruby",
            "punctuation.definition.character-class.end.ruby",
        ],
        "settings": {"foreground": "#808080"},
    },
    {
        "scope": [
            "keyword.operator.quantifier.ruby",
            "string.regexp.arbitrary-repetition.ruby",
        ],
        "settings": {"foreground": "#b5cea8"},
    },
    // =========================================================================
    // yard
    // =========================================================================
    // {
    //     "scope": [
    //         "comment.line.keyword.punctuation.yard.ruby",
    //         "comment.line.keyword.yard.ruby",
    //         "comment.line.parameter.yard.ruby",
    //         "comment.line.type.yard.ruby",
    //         "comment.line.string.yard.ruby",
    //         // "comment.line.punctuation.yard.ruby",
    //      ],
    //     "settings": {
    //         "foreground": "#608b4e",
    //         // "fontStyle": "italic",
    //     },
    // },
    // {
    //     "scope": [
    //         "comment.line.type.yard.ruby",
    //     ],
    //     "settings": {"foreground": "#4ec9b0"},
    // },
    // {
    //     "scope": [
    //         "comment.line.parameter.yard.ruby",
    //      ],
    //     "settings": {"foreground": "#9cdcfe"},
    // },
    // {
    //     "scope": [
    //         "comment.line.punctuation.yard.ruby",
    //      ],
    //     "settings": {"foreground": "#505050"},
    // },
    // =========================================================================
    // erb
    // =========================================================================
    {
        "scope": [
            "meta.section.attributes.plain.haml constant.other.symbol.ruby",
            "meta.embedded.line.erb",
        ],
        "settings": {"foreground": "#9CDCFE"},
    },
    {
        "scope": [
            "text.html.erb punctuation.section.embedded.begin.erb",
            "text.html.erb punctuation.section.embedded.end.erb",
        ],
        "settings": {"foreground": "#4ec9b0"},
    },
    // =========================================================================
    // Cucumber (Gherkin)
    // =========================================================================
    {
        "scope": [
            "keyword.language.gherkin.feature.step",
        ],
        "settings": {"foreground": "#c586c0"},
    },
    // {
    //     "scope": [
    //         "keyword.control.cucumber.table",
    //     ],
    //     "settings": {"foreground": "#ce9178"},
    // },
    // {
    //     "scope": [
    //         "string.language.gherkin.scenario.title.title",
    //     ],
    //     "settings": {"foreground": "#9CDCFE"},
    // },
    {
        "scope": [
        "text.gherkin.feature entity.name.type.class.tsx",
        ],
        "settings": {"foreground": "#4ec9b0"},
    },
];
module.exports = [
    // =========================================================================
    // Rust
    // =========================================================================
    {
        "scope": [
            "entity.name.type.param.rust punctuation.other.comma.rust",
            "keyword.operator.path.rust",
        ],
        "settings": {"foreground": "#d4d4d4"},
    },
    {
        "scope": [
            "meta.attribute.rust",
            "comment.line.documentation.rust",
        ],
        "settings": {"foreground": "#608b4e"},
    },
    {
        "scope": [
            "keyword.operator.misc.rust",
            "keyword.operator.sigil.rust",
        ],
        "settings": {"foreground": "#c586c0"},
    },
    {
        "scope": [
            "storage.modifier.lifetime.rust",
            "entity.name.lifetime.rust",
            "constant.other.placeholder.rust",
        ],
        "settings": {
            // "fontStyle": "italic",
            "foreground": "#9cdcfe",
        },
    },
    {
        "scope": [
            "string.quoted.single.rust", // DEPRECATED
            "constant.character.rust",
        ],
        "settings": {"foreground": "#d7ba7d"},
    },
    {
        "scope": [
            // "constant.other.placeholder.rust", // Deprecated
            "support.constant.core.rust",
            "variable.language.ignored.rust",
        ],
        "settings": {"foreground": "#569cd6"},
    },
    {
        "scope": [
            "variable.language.rust",
            "variable.language.self.rust",
        ],
        "settings": {
            "foreground": "#569cd6",
            "fontStyle": "italic",
        },
    },
    {
        "scope": [
            "entity.name.type.param.rust punctuation.definition.type.rust",
        ],
        "settings": { "foreground": "#808080" },
    },
    {
        "scope": [
            "entity.name.type.rust",
            "storage.type.core.rust",
            "storage.class.std.rust",
            "punctuation.separator.type.rust",
            "keyword.operator.return-type.rust",
            "meta.type_params.rust",
            // "keyword.operator.path.rust",
        ],
        "settings": {"foreground": "#4ec9b0"},
    },
];
module.exports = [
    // =========================================================================
    // Swift
    // =========================================================================
    {
        "scope": ["comment.punctuation.comma.swift"],
        "settings": { "foreground": "#d4d4d4" },
    },
    {
        "scope": [
            "keyword.statement.swift",
        ],
        "settings": { "foreground": "#c586c0" },
    },
    {
        "scope": [
            "string-interpolation keyword.operator.swift",
            "punctuation.section.embedded.begin.swift",
            "punctuation.section.embedded.end.swift",
        ],
        "settings": {"foreground": "#569cd6"},
    },
    {
        "scope": [
            "variable.language.self.swift",
            "keyword.expressions-and-types.swift",
        ],
        "settings": {
            "foreground": "#569cd6",
            "fontStyle": "italic",
        },
    },
    {
        "scope": [
            "meta.embedded.line.swift",
        ],
        "settings": { "foreground": "#9cdcfe" },
    },
    // {
    //     "scope": [],
    //     "settings": { "foreground": "#4ec9b0" },
    // },
    // {
    //     "scope": [],
    //     "settings": {"foreground": "#608b4e"},
    // },
    // {
    //     "scope": [],
    //     "settings": { "foreground": "#dcdcaa" },
    // },
    // {
    //     "scope": [],
    //     "settings": { "foreground": "#d7ba7d" },
    // },
    // {
    //     "scope": [],
    //     "settings": { "foreground": "#ce9178" },
    // },
    // {
    //     "scope": [],
    //     "settings": { "foreground": "#d16969" },
    // },
];
module.exports = [
    {
        "scope": [
            "entity.name.section.terraform",
        ],
        "settings": { "foreground": "#c586c0" },
    },
    {
        "scope": [
            "keyword.other.section.begin.terraform",
            "keyword.other.section.end.terraform",
            "keyword.other.function.inline.terraform",
        ],
        "settings": { "foreground": "#dcdcaa" },
    },
    {
        "scope": [
            "storage.type.function.terraform",
            "entity.tag.embedded.start.terraform",
            "entity.tag.embedded.end.terraform",
        ],
        "settings": { "foreground": "#569cd6" },
    },
    {
        "scope": [
            "entity.other.attribute-name.terraform",
            "source.terraform.embedded.source",
        ],
        "settings": { "foreground": "#9cdcfe" },
    },
];
module.exports = [
    {
        "scope": [
            "meta.item.done.todo",
            "meta.item.done.todo variable.priority.todo",
            "meta.item.done.todo variable.other",
            "meta.item.done.todo constant.numeric.date.todo",
            "meta.item.done.todo string.quoted.single.todo",
            "meta.item.done.todo string.quoted.double.todo",
        ],
        "settings": { "foreground": "#608b4e" },
    },
    {
        "scope": [
            "constant.numeric.date.todo",
        ],
        "settings": { "foreground": "#b5cea8" },
    },
    {
        "scope": [
            "string.quoted.single.todo",
            "string.quoted.double.todo",
        ],
        "settings": { "foreground": "#4ec9b0" },
    },
    // {
    //     "scope": [
    //     ],
    //     "settings": { "foreground": "#606060" },
    // },
    {
        "scope": "meta.item.priority.a.todo",
        "settings": { "foreground": "#f44747" },
    },
    {
        "scope": "meta.item.priority.b.todo",
        "settings": { "foreground": "#d16969" },
    },
    {
        "scope": "meta.item.priority.c.todo",
        "settings": { "foreground": "#ce9178" },
    },
    {
        "scope": "meta.item.priority.d.todo",
        "settings": { "foreground": "#d7ba7d" },
    },
    {
        "scope": "meta.item.priority.e.todo",
        "settings": { "foreground": "#dcdcaa" },
    },
];
module.exports = {
    // "statusBar.background": "#303030",
    // "statusBar.noFolderBackground": "#303030",
    // "statusBar.debuggingBackground": "#303030",

    "list.dropBackground": "#383b3d",

    "editor.background": "#1e1e1e",
    "editor.foreground": "#d4d4d4",
    "editor.selectionHighlightBackground": "#add6ff26",
    "editor.inactiveSelectionBackground": "#3a3d41",
    "editorIndentGuide.background": "#404040",
    "activityBarBadge.background": "#007acc",
    "sideBarTitle.foreground": "#bbbbbb",

    // "diffEditor.insertedTextBorder": "#608b4e",
    // "diffEditor.removedTextBorder": "#d16969",

    // "editor.findMatchBackground": "#cc00b1",
    // "editor.findMatchHighlightBackground": "#007acc",

    // "notificationCenter.border": "", // Notification Center border color.
    // "notificationCenterHeader.foreground": "", // Notification Center header foreground color.
    // "notificationCenterHeader.background": "", // Notification Center header background color.
    // "notificationToast.border": "", // Notification toast border color.
    // "notifications.foreground": "", // Notification foreground color.
    // "notifications.background": "", // Notification background color.
    // "notifications.border": "", // Notification border color separating from other notifications in the Notification Center.
    // "notificationLink.foreground": "", // Notification links foreground color.

    // "editorOverviewRuler.border": "", // Color of the overview ruler border.
    // "editorOverviewRuler.findMatchForeground": "", // Overview ruler marker color for find matches. The color must not be opaque to not hide underlying decorations.
    // "editorOverviewRuler.rangeHighlightForeground": "", //Overview ruler marker color for highlighted ranges, like by the Quick Open, Symbol in File and Find features. The color must not be opaque to not hide underlying decorations.
    // "editorOverviewRuler.selectionHighlightForeground": "", //Overview ruler marker color for selection highlights. The color must not be opaque to not hide underlying decorations.
    // "editorOverviewRuler.wordHighlightForeground": "", //Overview ruler marker color for symbol highlights. The color must not be opaque to not hide underlying decorations.
    // "editorOverviewRuler.wordHighlightStrongForeground": "", // Overview ruler marker color for write-access symbol highlights. The color must not be opaque to not hide underlying decorations.

    // =========================================================================
    // Change Indicators
    // =========================================================================

    "editorGutter.addedBackground": "#608b4e",
    "editorOverviewRuler.addedForeground": "#608b4e", // Overview ruler marker color for added content.
    "editorGutter.modifiedBackground": "#d7ba7d",
    "editorOverviewRuler.modifiedForeground": "#d7ba7d", // Overview ruler marker color for modified content.
    "editorGutter.deletedBackground": "#d16969",
    "editorOverviewRuler.deletedForeground": "#d16969", // Overview ruler marker color for deleted content.


    // ========================================================================
    // Error, Warning, & Info
    // ========================================================================

    // Error
    "editorError.foreground": "#d16969", // Error squiggles
    // "editorError.border": "#d16969",
    "editorOverviewRuler.errorForeground": "#d16969", // Overview ruler marker color for errors.

    // Warning
    "editorWarning.foreground": "#d7ba7d", // Warning squiggles
    // "editorWarning.border": "#d7ba7d",
    "editorOverviewRuler.warningForeground": "#d7ba7d", // Overview ruler marker color for warnings.

    // Info
    "editorInfo.foreground": "#9cdcfe",  // Info squiggles
    // "editorInfo.border": "#9cdcfe",
    "editorOverviewRuler.infoForeground": "#d4d4d4", // Overview ruler marker color for infos.

    // ========================================================================
    // Git Colors
    // ========================================================================

    "gitDecoration.modifiedResourceForeground": "#608b4e",
    "gitDecoration.addedResourceForeground": "#608b4e",
    "gitDecoration.deletedResourceForeground": "#d7ba7d",
    "gitDecoration.untrackedResourceForeground": "#d7ba7d",
    "gitDecoration.ignoredResourceForeground": "#808080",
    "gitDecoration.conflictingResourceForeground": "#d16969",
    // "gitDecoration.submoduleResourceForeground": "",

    // "diffEditor.insertedTextBackground": "#608b4e", /// Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations.
    // "diffEditor.insertedTextBorder": "#608b4e",     // Outline color for the text that got inserted.
    // "diffEditor.removedTextBackground": "#d16969",  // Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations.
    // "diffEditor.removedTextBorder": "#d16969",      // Outline color for text that got removed.
    // "diffEditor.border": "",                 // Border color between the two text editors.

    // "merge.currentHeaderBackground": "",                 // Current header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
    // "merge.currentContentBackground": "",                // Current content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
    // "merge.incomingHeaderBackground": "",                // Incoming header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
    // "merge.incomingContentBackground": "",               // Incoming content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
    // "merge.border": "",                                  // Border color on headers and the splitter in inline merge conflicts.
    // "merge.commonContentBackground": "",                 // Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
    // "merge.commonHeaderBackground": "",                  // Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
    // "editorOverviewRuler.currentContentForeground": "",  // Current overview ruler foreground for inline merge conflicts.
    // "editorOverviewRuler.incomingContentForeground": "", // Incoming overview ruler foreground for inline merge conflicts.
    // "editorOverviewRuler.commonContentForeground": "",   // Common ancestor overview ruler foreground for inline merge conflicts.

    // ========================================================================
    // Terminal Colors
    // ========================================================================

    "terminal.selectionBackground": "#add6ff26",
    "terminalCursor.foreground": "#808080",

    "terminal.background": "#1e1e1e",
    "terminal.foreground": "#d4d4d4",
    "terminal.ansiBlack": "#1e1e1e",
    "terminal.ansiBrightBlack": "#808080",
    "terminal.ansiRed": "#d16969",
    "terminal.ansiBrightRed": "#d16969",
    "terminal.ansiBlue": "#569cd6",
    "terminal.ansiBrightBlue": "#9cdcfe",
    "terminal.ansiGreen": "#608b4e",
    "terminal.ansiBrightGreen": "#b5cea8",
    "terminal.ansiCyan": "#4ec9b0",
    "terminal.ansiBrightCyan": "#4ec9b0",
    "terminal.ansiYellow": "#d7ba7d",
    "terminal.ansiBrightYellow": "#ce9178",
    "terminal.ansiMagenta": "#c586c0",
    "terminal.ansiBrightMagenta": "#c586c0",
    "terminal.ansiWhite": "#d4d4d4",
    "terminal.ansiBrightWhite": "#808080",
}

```
