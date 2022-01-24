export const orgMode: VsCodeTextMate.TextMateRules = [
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
]
