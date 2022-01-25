import { TextMateRuleData, SemanticColor } from "@lib"

export const cs: TextMateRuleData[] = [
    {
        scopes: [
            "meta.comment.razor comment.block.razor",
            "meta.comment.razor keyword.control.razor.comment.star",
            "meta.comment.razor keyword.control.cshtml.transition",
        ],
        foreground: SemanticColor.DocComments,
    },
    {
        scopes: [
            "meta.preprocessor.cs",
            "meta.preprocessor.cs string.unquoted.preprocessor.message.cs",
            "meta.preprocessor.cs punctuation.separator.hash.cs",
            "meta.preprocessor.cs keyword.preprocessor.region.cs",
            "meta.preprocessor.cs keyword.preprocessor.endregion.cs",
        ],
        foreground: SemanticColor.DocComments,
        fontStyle:  "italic",
    },
    {
        scopes: [
            "entity.name.tag.localname.cs",
            "punctuation.definition.tag.cs",
            "punctuation.terminator.statement.cs",
            "source.cs comment.block.documentation.cs punctuation.definition.comment.cs",
            "source.cs comment.block.documentation.cs meta.tag.cs punctuation.separator.equals.cs",
        ],
        foreground: SemanticColor.Comments,
    },
    {
        scopes: [
            "string.bracers.round.cshtml",
            "punctuation.curlybrace.open.cs",
            "punctuation.curlybrace.close.cs",
            "punctuation.squarebracket.open.cs",
            "punctuation.squarebracket.close.cs",
            "string.quoted.double.cs meta.interpolation.cs punctuation.parenthesis.open.cs",
            "string.quoted.double.cs meta.interpolation.cs punctuation.parenthesis.close.cs",
        ],
        foreground: SemanticColor.Foreground,
    },
    {
        scopes: [
            "entity.name.variable.property.cs",
            "entity.name.variable.parameter.cs",
            "entity.name.variable.field.cs",
            "entity.name.variable.local.cs",
            "meta.interpolation.cs variable.other.object.property.cs",
            "entity.name.variable.tuple-element.cs",
            "entity.name.variable.enum-member.cs",
        ],
        foreground: SemanticColor.Variables,
    },
    // {
    //     scopes: [
    //         "variable.other.object.property.cs",
    //     ],
    //     foreground: SemanticColor.Variables,
    //     fontStyle: "italic",
    // },
    {
        scopes: [
            "keyword.type.cs",
            "storage.type.cs",
            "storage.type.generic.cs",
            "storage.type.modifier.cs",
            "storage.type.variable.cs",
            // "variable.other.object.cs",
        ],
        foreground: SemanticColor.Types,
    },
    {
        scopes: [
            // "storage.modifier.cs",
            "keyword.other.this.cs",
        ],
        foreground: SemanticColor.Keywords,
        fontStyle:  "italic",
    },
    {
        scopes: [
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
        foreground: SemanticColor.Keywords,
    },
    {
        scopes: [
            "keyword.other.get.cs",
            "keyword.other.set.cs",
        ],
        foreground: SemanticColor.Functions,
    },
    {
        scopes: [
            // "keyword.other.using.cs",
            "meta.preprocessor.cs punctuation.separator.hash.cs",
            "punctuation.accessor.cs",
            "keyword.other.await.cs",
            "keyword.operator.assignment.cs",
            "keyword.operator.comparison.cs",
            // "keyword.operator.logical.cs",
            // "keyword.operator.null-conditional.cs",
        ],
        foreground: SemanticColor.FlowControl,
    },
    // {
    //     scopes: [
    //         "keyword.other.base.cs",
    //     ],
    //     fontStyle: "italic",
    // },
]
