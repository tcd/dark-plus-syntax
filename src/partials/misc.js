module.exports = [
    {
        "scope": [
            "punctuation.definition.variable.begin.gitignore",
            "punctuation.definition.variable.end.gitignore",
        ],
        "settings": { "foreground": "#505050"},
    },
    {
        "scope": [
            "entity.other.document.begin.yaml",
            "entity.other.document.end.yaml",
            "punctuation.definition.block.sequence.item.yaml",
            // "punctuation.separator.key-value.mapping.yaml",
        ],
        "settings": { "foreground": "#c586c0" },
    },
    {
        "scope": [ "comment.line.number-sign.makefile" ],
        "settings": { "foreground": "#608b4e" },
    },
    {
        "scope": [ "variable.other.makefile" ],
        "settings": { "foreground": "#9cdcfe" },
    },
    {
        "scope": [ "variable.language.makefile" ],
        "settings": { "foreground": "#569cd6" },
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
    {
        "scope": [
            "entity.name.function.target.makefile",
            "constant.character.escape.continuation.makefile",
        ],
        "settings": { "foreground": "#dcdcaa" },
    },
    {
        "scope": [
            "entity.name.section.terraform",
            // "punctuation.definition.variable.makefile",
            // "variable.language.makefile",
            "constant.language.boolean.yaml",
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
            "entity.name.tag.yaml",
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
    // =========================================================================
    // TOML
    // =========================================================================
    {
        "scope": [
            // "meta.tag.table.toml",
            // "meta.tag.table.toml entity.other.attribute-name.table.toml",
            // "meta.tag.table.array.toml entity.other.attribute-name.table.array.toml",
        ],
        "settings": { "foreground": "#569cd6" },
    },
    {
        "scope": [
            // "keyword.key.toml",
            // "entity.other.attribute-name.table.toml",
        ],
        "settings": { "foreground": "#9cdcfe" },
    },
    {
        "scope": [
            // "punctuation.definition.table.array.toml",
            // "punctuation.definition.table.toml",
            "punctuation.definition.array.toml",
            "constant.other.boolean.toml",
            "punctuation.definition.keyValuePair.toml",
        ],
        "settings": { "foreground": "#c586c0" },
    },
    {
        "scope": [
            "punctuation.definition.table.array.toml",
            "punctuation.definition.table.toml",
        ],
        "settings": { "foreground": "#606060" },
    },
    // =========================================================================
    // Lisp
    // =========================================================================
    {
        "scope": [
            "storage.type.function-type.lisp",
            "constant.language.lisp",
        ],
        "settings": { "foreground": "#569cd6" },
    },
    {
        "scope": [
            "keyword.constant.lisp",
        ],
        "settings": { "foreground": "#9cdcfe" },
    },
    {
        "scope": [
            "keyword.control.lisp",
        ],
        "settings": { "foreground": "#c586c0" },
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
        "settings": { "foreground": "#d7ba7d" },
    },
    {
        "scope": [
            "punctuation.definition.map.viml",
        ],
        "settings": { "foreground": "#505050" },
    },
    // =========================================================================
    // Crystal
    // =========================================================================
    {
        "scope": [
            "punctuation.separator.variable.crystal", // `|var|`
        ],
        "settings": {"foreground": "#d4d4d4"},
    },
    {
        "scope": [
            "source.crystal.embedded.source",
        ],
        "settings": {"foreground": "#9cdcfe"},
    },
    {
        "scope": [
            "punctuation.separator.method.crystal", // `.`
        ],
        "settings": { "foreground": "#c586c0" },
    },
    {
        "scope": [
            "support.class.crystal",
        ],
        "settings": { "foreground": "#4ec9b0" },
    },
    {
        "scope": [
            "constant.other.symbol.crystal",                  // `:symbol`
            "punctuation.section.embedded.crystal",           // `#{}`
            // "punctuation.separator.other.crystal",            // `::/:`
            "keyword.control.special-method.crystal",         // `new/include/extend/raise`
            "source.crystal punctuation.separator.key-value", // `=>`
        ],
        "settings": {"foreground": "#569cd6"},
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
        "settings": { "foreground": "#505050"},
    },
    // =========================================================================
    // Java/Kotlin/Groovy/Scala
    // =========================================================================
    {
        "scope": [
            "punctuation.separator.period.java",
        ],
        "settings": { "foreground": "#c586c0" },
    },
    {
        "scope": [
            "storage.type.builtin.kotlin",
            "storage.type.builtin.collection.kotlin",
            "storage.type.scala",
            "storage.type.primitive.scala",
            "meta.colon.scala",
        ],
        "settings": { "foreground": "#4ec9b0" },
    },
];
