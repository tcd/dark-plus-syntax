# [WIP] Contributing

> I recently rewrote the code for this theme.
>
> I'm in the process of updating this page accordingly.

The code is split up (mainly by language) into individual TypeScript files, which live in `src/partials`.
So if you wanted to see the Ruby colors, for example, those are in `src/partials/ruby.js`.
Those files are imported, merged, and written out to `dist/themes/dark-plus-syntax-color-theme.json`


## To make changes

1. Clone the project
2. Run `npm install` to install development dependencies.
2. Probably make changes in `src/theme/languages`
3. Run `npm run build` to build the theme file with the new changes.
4. Go to  the *Debug* dropdown and click *Start Debugging* to run the new version of the theme locally.


## Resources & References

- [Microsoft/vscode-textmate](https://github.com/Microsoft/vscode-textmate)
- [Scope Naming](https://www.sublimetext.com/docs/3/scope_naming.html)
- [VSCode Theme Colors](https://code.visualstudio.com/api/references/theme-color)

