import { TextMateRuleData, SemanticColor } from "@lib"

export const javaScript: TextMateRuleData[] = [
    // =========================================================================
    // JavaScript
    // =========================================================================
    {
        scopes: [
            "comment.block",
            "comment.block.documentation.js",
            "comment.block.documentation.js storage.type.class.jsdoc punctuation.definition.block.tag.jsdoc",
            "comment.line.shebang.js",
            // "punctuation.definition.comment.js"
            "comment.block.documentation.js punctuation.definition.comment.js",
        ],
        foreground: "#608b4e",
    },
    {
        scopes: [
            "comment.block.documentation.js storage.type.class.jsdoc punctuation.definition.block.tag.jsdoc",
            "punctuation.definition.bracket.curly.begin.jsdoc",
            "punctuation.definition.bracket.curly.end.jsdoc",
            "storage.type.class.jsdoc",
        ],
        foreground: "#608b4e",
        fontStyle:  "italic",
    },
    {
        scopes: [
            "punctuation.definition.comment.js",
        ],
        foreground: "#404040",
    },
    {
        scopes: [
            "comment.line.double-slash.js",
            "meta.embedded.expression.js source.js.jsx comment.block.js",
        ],
        foreground: "#505050",
    },
    {
        scopes: [
            "variable.language.this",
        ],
        foreground: "#569cd6",
        fontStyle:  "italic",
    },
    {
        scopes: [
            "constant.character.escape.js",
            // "variable.other.constant.object",
            // "variable.other.constant.property",
            // "variable.other.constant",
        ],
        foreground: "#d7ba7d",
    },
    {
        scopes: [
            "keyword.other.template.begin.js",
            "keyword.other.template.end.js",
            "punctuation.definition.string.template.begin.js",
            "punctuation.definition.string.template.begin.ts",
            "punctuation.definition.string.template.end.js",
            "punctuation.definition.string.template.end.ts",
        ],
        foreground: "#ce9178",
    },
    {
        scopes: [
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
            "meta.brace.square.ts",
        ],
        foreground: "#d4d4d4",
    },
    {
        scopes: [
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
            // "keyword.control.as.tsx",
            "meta.brace.angle.tsx",
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
        foreground: "#569cd6",
    },
    {
        scopes: [
            "meta.template.expression.js",
            "meta.template.expression.ts",
            "meta.brace.round.ts",
            "meta.brace.round.js",
            "meta.tag.without-attributes.js meta.jsx.children.js",
            "meta.jsx.children.js",
        ],
        foreground: "#d4d4d4",
    },
    {
        scopes: [
            "support.function.js",
            "meta.function-call.js support.function.js",
            "entity.name.function",
            "meta.function-call entity.name.function",
            "variable.function",
            "meta.function-call.method.with-arguments.js",
            "keyword.control.require.ts",
            "punctuation.decorator.js",
            "punctuation.decorator.ts",
            "meta.decorator.ts",
            "meta.decorator.js",
            "meta.decorator.ts variable.other.readwrite.ts",
            "meta.decorator.js variable.other.readwrite.js",
            "source.ts meta.class.ts meta.method.declaration.ts meta.definition.method.ts entity.name.function.ts",
        ],
        foreground: "#dcdcaa",
    },
    {
        scopes: [
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
            "keyword.operator.expression.of",
            "keyword.operator.expression.in",
            "punctuation.definition.section.case-statement",
        ],
        foreground: "#c586c0",
    },
    {
        scopes: [
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
            "meta.decorator.ts meta.objectliteral.ts meta.object.member.ts variable.other.readwrite.ts",
            "meta.decorator.js meta.objectliteral.js meta.object.member.js variable.other.readwrite.js",
        ],
        foreground: "#9cdcfe",
    },
    {
        scopes: [
            "keyword.operator.optional.ts",
            "support.type.object.module.js",
            "support.type.object.module.js.jsx",
            // "keyword.control.module.reference.js",
            "support.type.object.module keyword.operator.accessor",
            "keyword.operator.type.annotation.ts",
            "keyword.operator.type.annotation.tsx",
            "keyword.operator.definiteassignment.ts",
            "keyword.operator.definiteassignment.tsx",
            "punctuation.type.flowtype",
            "support.variable.dom",
            "support.variable.object",
            "support.variable.object.node",
            "support.variable.object.process",
            "support.variable.property.process",
        ],
        foreground: "#4ec9b0",
    },
    {
        scopes: [
            "support.type.primitive.ts",
            "support.type.primitive.tsx",
        ],
        foreground: "#4ec9b0",
        // fontStyle: "italic",
    },
    // =========================================================================
    // JSX
    // =========================================================================
    {
        scopes: [
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
        foreground: "#4ec9b0",
        // fontStyle: "italic",
    },
    // =========================================================================
    // TSX
    // =========================================================================
    {
        scopes: [
            "string.template.tsx meta.template.expression.tsx meta.embedded.line.tsx meta.brace.round.tsx",
            "punctuation.separator.key-value.tsx",
            "punctuation.accessor.tsx",
        ],
        foreground: "#d4d4d4",
    },
    {
        scopes: [
            "punctuation.accessor.optional.tsx",
            "punctuation.accessor.tsx",
        ],
        foreground: "#C586C0",
    },
    {
        scopes: [
            "keyword.operator.optional.tsx",
        ],
        foreground: "#4EC9B0",
    },
    {
        scopes: [
            "punctuation.definition.binding-pattern.array.tsx",
            "punctuation.definition.typeparameters.begin.tsx",
            "punctuation.definition.typeparameters.end.tsx",
        ],
        foreground: "#569CD6",
    },
    // =========================================================================
    // TypeScript
    // =========================================================================
    {
        scopes: [
            // "comment.block.ts",
            // "meta.tag.ts",
            "comment.line.triple-slash.directive.ts",
            "comment.block.documentation.ts",
        ],
        foreground: "#608b4e",
    },
    {
        scopes: [
            "punctuation.accessor.optional.ts",
        ],
        foreground: "#c586c0",
    },
    // =========================================================================
    // Angular
    // =========================================================================
    {
        scopes: [
            "meta.component.decoration entity.name.label.ts",
        ],
        foreground: "#9cdcfe",
    },
]
