import { TextMateRuleData, SemanticColor } from "@types"

export const graphql: TextMateRuleData[] = [
    {
        scopes: [
            "entity.scalar.graphql",        // prisma-labs/vscode-graphql
            "entity.name.fragment.graphql", // prisma-labs/vscode-graphql
        ],
        foreground: SemanticColor.Types,
    },
    {
        scopes: [
            "punctuation.or.graphql",         // prisma-labs/vscode-graphql
            "punctuation.assignment.graphql", // prisma-labs/vscode-graphql
        ],
        foreground: SemanticColor.FlowControl,
    },
    {
        scopes: [
            "graphql.description.SINGLELINE",            // kumarharsh/graphql-for-vscode
            "string.block.description.graphql.DOCSTRING", // kumarharsh/graphql-for-vscode
            "string.description.graphql",
        ],
        foreground: SemanticColor.DocComments,
    },
]
