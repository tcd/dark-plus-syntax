<div align="center">

  <h1>dark-plus-syntax</h1>

  <a href="https://marketplace.visualstudio.com/items?itemName=dunstontc.dark-plus-syntax">
    <img alt="version" src="https://vsmarketplacebadge.apphb.com/version-short/dunstontc.dark-plus-syntax.svg?style=flat&color=blue" />
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=dunstontc.dark-plus-syntax">
    <img alt="Visual Studio Marketplace" src="https://vsmarketplacebadge.apphb.com/installs-short/dunstontc.dark-plus-syntax.svg?style=flat&color=blue" />
  </a>
  <a href="https://github.com/tcd/dark-plus-syntax/issues">
    <img alt="issues" src="https://img.shields.io/github/issues/dunstontc/dark-plus-syntax.svg" />
  </a>
  <a href="https://github.com/tcd/dark-plus-syntax/blob/master/LICENSE.md">
    <img alt="license" src="https://img.shields.io/badge/license-MIT-blue.svg" />
  </a>

  <br/>
  <br/>

  <a href="https://github.com/Microsoft/vscode">
    <img src="https://raw.githubusercontent.com/dunstontc/dark-plus-syntax/master/dist/assets/512.png" alt="logo">
  </a>

</div>


## Why

I really like VS Code's "Dark+ (default dark)" color theme. 
<br/>
Unfortunately, it's unrealistic to expect the maintainers to support:

- The vast number of languages with which Visual Studio Code is used
- Visual Studio Code's ever-expanding catalog of extensions

So I made a theme that does.

<!-- This theme also tries to highlight features (ex: strings, variables, functions, classes) uniformly across languages. -->


## Supported Languages

- C#
- C/C++
- Crystal
- CSS
    - SCSS
    - Stylus
- Elixir
- Erlang
- Go
- Haskell
- HTML
    - ECR/EEX/EJS/ERB
    - Handlebars
    - Jinja2
    - Pug/Jade
    - Twig
    - Liquid
    - CFML
- Java
    <!-- - Kotlin -->
    <!-- - Groovy -->
    <!-- - Scala -->
- JavaScript
    - TypeScript
    - JSX
    - TSX
- Markdown
- Protocol Buffers
- Python
- Ruby
    - Vagrant
    - Cucumber (Gherkin)
- Rust
- Swift
- Misc.
    - CMake
    - CSV/TSV
    - GraphQL
    - Makefile
    - NGINX
    - Terraform
    - JSON
    - TOML
    - YAML


> If this theme doesn't support a certain language or extension that you use, 
> feel free to [open an issue](https://github.com/tcd/dark-plus-syntax/issues/new) and I'll look into it.
>
> **Please use one of the issue templates.**

## Italic Comments & Overrides

This theme doesn't have italic comments, but you can get them by adding the following snippet to your `settings.json` file:

```json
{
  "editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        "scope": [ "comment" ],
        "settings": { "fontStyle": "italic" },
      },
    ]
  },
}
```

Additionally, [UI colors](https://code.visualstudio.com/api/references/theme-color) can be overwritten using the `"workbench.colorCustomizations"` setting:

```json
{
  "workbench.colorCustomizations": {
    "editor.lineHighlightBorder": "#264f78",
  },
}
```



## Issues

**Please use one of the [issue templates](https://github.com/tcd/dark-plus-syntax/issues/new)** when opening a new issue.


## Contributing

See [CONTRIBUTING.md](https://github.com/tcd/dark-plus-syntax/blob/master/CONTRIBUTING.md)



## License

Copyright © Clay Dunston <dunstontc@gmail.com>

Licensed under the [MIT](https://github.com/tcd/dark-plus-syntax/blob/master/LICENSE.md) license
