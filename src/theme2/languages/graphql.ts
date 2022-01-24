import { TextMateRuleData, SemanticColor } from "@lib"

export const graphql: TextMateRuleData[] = [
    {
        scopes: [
            "entity.scalar.graphql",        // prisma-labs/vscode-graphql
            "entity.name.fragment.graphql", // prisma-labs/vscode-graphql
        ],
        foreground: "#4ec9b0",
    },
    {
        scopes: [
            "punctuation.or.graphql",         // prisma-labs/vscode-graphql
            "punctuation.assignment.graphql", // prisma-labs/vscode-graphql
        ],
        foreground: "#c586c0",
    },
    {
        scopes: [
            "graphql.description.SINGLELINE",            // kumarharsh/graphql-for-vscode
            "string.block.description.graphql.DOCSTRING", // kumarharsh/graphql-for-vscode
            "string.description.graphql",
        ],
        foreground: "#608b4e",
    },
]
