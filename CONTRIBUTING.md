# [WIP] Contributing

> I recently rewrote the code for this theme.
>
> I'm in the process of updating this page accordingly.

The code is split up (mainly by language) into individual TypeScript files, which live in `src/theme`.
So if you wanted to see the Ruby rules, for example, those are in `src/theme/languages/ruby.js`.

The language rules are exported as a single array from `src/theme/languages/index.ts`.

Those files are imported, merged, and written out to `dist/themes/dark-plus-syntax-color-theme.json`

## Building locally

1. Clone the project
2. Run `npm install` to install development dependencies.
3. Run `npm run build` to build the theme file with the new changes.

## Developing

It'll be helpful to install the [Highlight](https://github.com/fabiospampinato/vscode-highlight) plugin. \
There are local vscode settings that configure it to color specific TypeScript constants to match the color values they represent.


## Resources & References

- [Microsoft/vscode-textmate](https://github.com/Microsoft/vscode-textmate)
- [Scope Naming](https://www.sublimetext.com/docs/3/scope_naming.html)
- [VSCode Theme Colors](https://code.visualstudio.com/api/references/theme-color)

├── dist/
│   ├── assets/
│   └── theme/
├── src/
│   ├── lib/
│   ├── palettes/
│   │   └── scratch/
│   ├── theme/
│   │   ├── shared/
│   │   │   └── languages/
│   │   └── ui/
│   ├── themes/
│   └── types/
│       └── custom/
└── test/
    ├── fixtures/
    ├── samples/
    └── tests/
