export const kotlin: VsCodeTextMate.TextMateRules = [
    {
        scope: [
            "storage.type.builtin.kotlin",
            "storage.type.builtin.collection.kotlin",
            "entity.name.package.kotlin",
        ],
        settings: { foreground: "#4ec9b0" },
    },
    {
        scope: [
            "meta.template.expression.kotlin",
        ],
        settings: { foreground: "#9cdcfe" },
    },
    {
        scope: [
            "keyword.hard.kotlin",
        ],
        settings: { foreground: "#c586c0" },
    },
]
