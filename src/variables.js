let name = 'dark-plus-syntax'

let type = 'dark'

let colors = {
    "list.dropBackground": "#383b3d",
    "editor.background": "#1e1e1e",
    "editor.foreground": "#d4d4d4",
    "editor.inactiveSelectionBackground": "#3a3d41",
    "editor.selectionHighlightBackground": "#add6ff26",
    "editorIndentGuide.background": "#404040",
    "activityBarBadge.background": "#007acc",
    "sideBarTitle.foreground": "#bbbbbb"
}

let settings = {
    "foreground": "#d4d4d4ff",
    "background": "#1e1e1eff"
}

let tokenKulers = [{
        name: "",
        scope: "emphasis",
    },
    {
        name: "",
        scope: "strong",
    },
    {
        name: "",
        scope: "header",
    },
    {
        name: "",
        scope: "comment",
    },
    {
        name: "",
        scope: "constant.language",
    },
    {
        name: "",
        scope: "constant.numeric",
    },
    {
        name: "",
        scope: "constant.regexp",
    },
    {
        name: "",
        scope: "entity.name.tag",
    },
    {
        name: "",
        scope: "entity.name.tag.css",
    },
    {
        name: "",
        scope: "entity.other.attribute-name",
    },
    {
        name: "",
        scope: [
            "entity.other.attribute-name.class.css",
            "entity.other.attribute-name.class.mixin.css",
            "entity.other.attribute-name.id.css",
            "entity.other.attribute-name.parent-selector.css",
            "entity.other.attribute-name.pseudo-class.css",
            "entity.other.attribute-name.pseudo-element.css",
            "source.css.less entity.other.attribute-name.id",
            "entity.other.attribute-name.attribute.scss",
            "entity.other.attribute-name.scss"
        ],
    },
    {
        name: "",
        scope: "invalid",
    },
    {
        name: "",
        scope: "markup.underline",
    },
    {
        name: "",
        scope: "markup.italic",
    },
    {
        name: "",
        scope: "markup.inserted",
    },
    {
        name: "",
        scope: "markup.deleted",
    },
    {
        name: "",
        scope: "markup.changed",
    },
    {
        name: "",
        scope: "beginning.punctuation.definition.quote.markdown",
    },
    {
        name: "",
        scope: "beginning.punctuation.definition.list.markdown",
    },
    {
        name: "",
        scope: "markup.inline.raw",
    },
    {
        name: "",
        scope: "meta.selector",
    },
    {
        name: "brackets of XML/HTML tags",
        scope: "punctuation.definition.tag",
    },
    {
        name: "",
        scope: "meta.preprocessor",
    },
    {
        name: "",
        scope: "meta.preprocessor.string",
    },
    {
        name: "",
        scope: "meta.preprocessor.numeric",
    },
    {
        name: "",
        scope: "meta.structure.dictionary.key.python",
    },
    {
        name: "",
        scope: "meta.diff.header",
    },
    {
        name: "",
        scope: "storage",
    },
    {
        name: "",
        scope: "storage.type",
    },
    {
        name: "",
        scope: "storage.modifier",
    },
    {
        name: "",
        scope: "string",
    },
    {
        name: "",
        scope: "string.tag",
    },
    {
        name: "",
        scope: "string.value",
    },
    {
        name: "",
        scope: "string.regexp",
    },
    {
        name: "JavaScript string interpolation ${}",
        scope: [
            "punctuation.definition.template-expression.begin.js",
            "punctuation.definition.template-expression.begin.ts",
            "punctuation.definition.template-expression.end.ts",
            "punctuation.definition.template-expression.end.js",
            "punctuation.section.embedded.coffee"
        ],
    },
    {
        name: "Reset JavaScript string interpolation expression",
        scope: [
            "meta.template.expression.js",
            "meta.template.expression.ts"
        ],
    },
    {
        name: "",
        scope: [
            "support.type.vendored.property-name",
            "support.type.property-name",
            "variable.css",
            "variable.scss",
            "variable.other.less",
            "source.coffee.embedded"
        ],
    },
    {
        name: "Function declarations",
        scope: [
            "entity.name.function",
            "support.function",
            "support.constant.handlebars"
        ],
    },
    {
        name: "Types declaration and references",
        scope: [
            "meta.return-type",
            "support.class",
            "support.type",
            "entity.name.type",
            "entity.name.class",
            "storage.type.cs",
            "storage.type.generic.cs",
            "storage.type.modifier.cs",
            "storage.type.variable.cs",
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
            "storage.type.primitive.groovy"
        ],
    },
    {
        name: "Types declaration and references, TS grammar specific",
        scope: [
            "meta.type.cast.expr",
            "meta.type.new.expr",
            "support.constant.math",
            "support.constant.dom",
            "support.constant.json",
            "entity.other.inherited-class"
        ],
    },
    {
        name: "Control flow keywords",
        scope: "keyword.control",
    },
    {
        name: "Variable and parameter name",
        scope: [
            "variable",
            "meta.definition.variable.name",
            "support.variable"
        ],
    },
    {
        name: "Object keys, TS grammar specific",
        scope: [
            "meta.object-literal.key",
            "meta.object-literal.key entity.name.function"
        ],
    },
    {
        name: "CSS property value",
        scope: [
            "support.constant.property-value",
            "support.constant.font-name",
            "support.constant.media-type",
            "support.constant.media",
            "constant.other.color.rgb-value",
            "constant.other.rgb-value",
            "support.constant.color"
        ],
    },
    {
        name: "",
        scope: "token.info-token",
    },
    {
        name: "",
        scope: "token.warn-token",
    },
    {
        name: "",
        scope: "token.error-token",
    },
    {
        name: "",
        scope: "token.debug-token",
    },
    {
        name: "",
        scope: "keyword",
    },
    {
        name: "",
        scope: "keyword.control",
    },
    {
        name: "",
        scope: "keyword.operator",
    },
    {
        name: "",
        scope: [
            "keyword.operator.new",
            "keyword.operator.expression",
            "keyword.operator.cast",
            "keyword.operator.sizeof",
            "keyword.operator.logical.python"
        ],
    },
    {
        name: "",
        scope: "keyword.other.unit",
    },
    {
        name: "",
        scope: [
            "punctuation.section.embedded.begin.php",
            "punctuation.section.embedded.end.php"
        ],
    },
    {
        name: "",
        scope: "support.function.git-rebase",
    },
    {
        name: "",
        scope: "constant.sha.git-rebase",
    },
    {
        name: "coloring of the Java import and package identifiers",
        scope: [
            "storage.modifier.import.java",
            "variable.language.wildcard.java",
            "storage.modifier.package.java"
        ],
    },
    {
        name: "this.self",
        scope: "variable.language",
    }

]

let tokenColors = {
    // "scope": "emphasis",
    // "scope": "strong",
    // "scope": "header",
    // "scope": "comment",
    // "scope": "constant.language",
    // "scope": "constant.numeric",
    // "scope": "constant.regexp",
    // "scope": "entity.name.tag",
    // "scope": "entity.name.tag.css",
    // "scope": "entity.other.attribute-name",
    // "scope": [
    //     "entity.other.attribute-name.class.css",
    //     "entity.other.attribute-name.class.mixin.css",
    //     "entity.other.attribute-name.id.css",
    //     "entity.other.attribute-name.parent-selector.css",
    //     "entity.other.attribute-name.pseudo-class.css",
    //     "entity.other.attribute-name.pseudo-element.css",
    //     "source.css.less entity.other.attribute-name.id",
    //     "entity.other.attribute-name.attribute.scss",
    //     "entity.other.attribute-name.scss"
    // ],
    // "scope": "invalid",
    // "scope": "markup.underline",
    // "scope": "markup.italic",
    // "scope": "markup.inserted",
    // "scope": "markup.deleted",
    // "scope": "markup.changed",
    // "scope": "beginning.punctuation.definition.quote.markdown",
    // "scope": "beginning.punctuation.definition.list.markdown",
    // "scope": "markup.inline.raw",
    // "scope": "meta.selector",
    // "brackets of XML/HTML tags": "punctuation.definition.tag",
    // "scope": "meta.preprocessor",
    // "scope": "meta.preprocessor.string",
    // "scope": "meta.preprocessor.numeric",
    // "scope": "meta.structure.dictionary.key.python",
    // "scope": "meta.diff.header",
    // "scope": "storage",
    // "scope": "storage.type",
    // "scope": "storage.modifier",
    // "scope": "string",
    // "scope": "string.tag",
    // "scope": "string.value",
    // "scope": "string.regexp",
    // "JavaScript string interpolation ${}": [
    //     "punctuation.definition.template-expression.begin.js",
    //     "punctuation.definition.template-expression.begin.ts",
    //     "punctuation.definition.template-expression.end.ts",
    //     "punctuation.definition.template-expression.end.js",
    //     "punctuation.section.embedded.coffee"
    // ],
    // "Reset JavaScript string interpolation expression": [
    //     "meta.template.expression.js",
    //     "meta.template.expression.ts"
    // ],
    // "scope": [
    //     "support.type.vendored.property-name",
    //     "support.type.property-name",
    //     "variable.css",
    //     "variable.scss",
    //     "variable.other.less",
    //     "source.coffee.embedded"
    // ],
    // "scope": "keyword",
    // "scope": "keyword.control",
    // "scope": "keyword.operator",
    // "scope": [
    //     "keyword.operator.new",
    //     "keyword.operator.expression",
    //     "keyword.operator.cast",
    //     "keyword.operator.sizeof",
    //     "keyword.operator.logical.python"
    // ],
    // "scope": "keyword.other.unit",
    // "scope": [
    //     "punctuation.section.embedded.begin.php",
    //     "punctuation.section.embedded.end.php"
    // ],
    // "scope": "support.function.git-rebase",
    // "scope": "constant.sha.git-rebase",
    // "coloring of the Java import and package identifiers": [
    //     "storage.modifier.import.java",
    //     "variable.language.wildcard.java",
    //     "storage.modifier.package.java"
    // ],
    // "this.self": "variable.language",
    // "name": "Function declarations",
    // "scope": [
    //     "entity.name.function",
    //     "support.function",
    //     "support.constant.handlebars"
    // ],
    // "name": "Types declaration and references",
    // "scope": [
    //     "meta.return-type",
    //     "support.class",
    //     "support.type",
    //     "entity.name.type",
    //     "entity.name.class",
    //     "storage.type.cs",
    //     "storage.type.generic.cs",
    //     "storage.type.modifier.cs",
    //     "storage.type.variable.cs",
    //     "storage.type.annotation.java",
    //     "storage.type.generic.java",
    //     "storage.type.java",
    //     "storage.type.object.array.java",
    //     "storage.type.primitive.array.java",
    //     "storage.type.primitive.java",
    //     "storage.type.token.java",
    //     "storage.type.groovy",
    //     "storage.type.annotation.groovy",
    //     "storage.type.parameters.groovy",
    //     "storage.type.generic.groovy",
    //     "storage.type.object.array.groovy",
    //     "storage.type.primitive.array.groovy",
    //     "storage.type.primitive.groovy"
    // ],
    // "name": "Types declaration and references, TS grammar specific",
    // "scope": [
    //     "meta.type.cast.expr",
    //     "meta.type.new.expr",
    //     "support.constant.math",
    //     "support.constant.dom",
    //     "support.constant.json",
    //     "entity.other.inherited-class"
    // ],
    // "name": "Control flow keywords",
    // "scope": "keyword.control",
    // "name": "Variable and parameter name",
    // "scope": [
    //     "variable",
    //     "meta.definition.variable.name",
    //     "support.variable"
    // ],
    // "name": "Object keys, TS grammar specific",
    // "scope": [
    //     "meta.object-literal.key",
    //     "meta.object-literal.key entity.name.function"
    // ],
    // "name": "CSS property value",
    // "scope": [
    //     "support.constant.property-value",
    //     "support.constant.font-name",
    //     "support.constant.media-type",
    //     "support.constant.media",
    //     "constant.other.color.rgb-value",
    //     "constant.other.rgb-value",
    //     "support.constant.color"
    // ],
    // "scope": "token.info-token",
    // "scope": "token.warn-token",
    // "scope": "token.error-token",
    // "scope": "token.debug-token",

}

let thiss = [{
        "scope": "punctuation.definition.comment.js",
        "settings": {
            "foreground": "#404040"
        }
    },
    {
        "scope": "meta.structure.dictionary.json",
        "settings": {
            "foreground": "#505050"
        }
    },
    {
        "scope": "punctuation.terminator.statement.js",
        "settings": {
            "foreground": "#505050"
        }
    },

    {
        "scope": "meta.property-list.scss",
        "settings": {
            "foreground": "#505050"
        }
    },
    {
        "scope": "punctuation.terminator.rule.css",
        "settings": {
            "foreground": "#505050"
        }
    },
    {
        "scope": "punctuation.section.property-list.begin.bracket.curly.css",
        "settings": {
            "foreground": "#505050"
        }
    },
    {
        "scope": "punctuation.section.property-list.end.bracket.curly.css",
        "settings": {
            "foreground": "#505050"
        }
    },
    {
        "scope": "constant.character.entity.html",
        "settings": {
            "foreground": "#DCDCAA"
        }
    }, {
        "scope": "invalid.illegal.bad-angle-bracket.html",
        "settings": {
            "foreground": "#D4D4D4"
        }
    },
    {
        "scope": "punctuation.definition.metadata.markdown",
        "settings": {
            "foreground": "#505050"
        }
    },
    {
        "scope": "punctuation.definition.string.begin.markdown",
        "settings": {
            "foreground": "#505050"
        }
    },
    {
        "scope": "punctuation.definition.string.end.markdown",
        "settings": {
            "foreground": "#505050"
        }
    },
    {
        "scope": "meta.link.inline.markdown",
        "settings": {
            "foreground": "#CE9178"
        }
    },
    {
        "scope": "string.other.link.title.markdown",
        "settings": {
            "foreground": "#9CDCFE"
        }
    },
    {
        "scope": "meta.separator.markdown",
        "settings": {
            "foreground": "#6796e6"
        }
    },
    {
        "scope": "punctuation.definition.keyword.stylus",
        "settings": {
            "foreground": "#C586C0"
        }
    },
    {
        "scope": "meta.interpolation.stylus",
        "settings": {
            "foreground": "inherit"
        }
    },
    {
        "scope": "variable.stylus",
        "settings": {
            "foreground": "#4EC9B0"
        }
    },
    {
        "scope": [
            "meta.interpolation.stylus meta.brace.curly"
        ],
        "settings": {
            "foreground": "#569CD6"
        }
    }, {
        "scope": "constant.character.escape.backslash.regexp",
        "settings": {
            "foreground": "#9CDCFE"
        }
    },
    {
        "scope": "entity.other.attribute-name.parent-selector-suffix.stylus",
        "settings": {
            "foreground": "#D7BA7D"
        }
    },
    {
        "scope": "constant.other.character-class.regexp",
        "settings": {
            "foreground": "#4EC9B0"
        }
    }
]
