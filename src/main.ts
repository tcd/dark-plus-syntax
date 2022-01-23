import { writeJsonFile } from "./util"

import { VsCodeTheme } from "@types"

import { Languages } from "./theme/languages"
import { defaults } from "./theme/defaults"
import { ui } from "./theme/ui"

// console.log(typeof(Languages))
// const scopes = Object.values(Languages)[0]
// console.log(scopes)
// console.log(typeof(scopes))
// const tokenColors = scopes.flat()
// console.log(tokenColors)

const theme: VsCodeTheme = {
    name: "dark-plus-syntax",
    type: "dark",
    colors: ui,
    tokenColors: [
        ...defaults,
        ...Languages,
    ],
}

// console.log(theme)

const writeTheme = (theme): void => {
    const outFilePath = "./themes/dark-plus-syntax-color-theme.json"
    writeJsonFile(outFilePath, theme)
    console.log("=== build successful ===\n")
}

writeTheme(theme)
