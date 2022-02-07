import { writeJsonFile, buildRules } from "@lib"
import { Languages } from "./theme/languages"
import { defaults } from "./theme/defaults"
import { ui } from "./theme/ui"
import { DarkPlusPalette } from "./palettes"

const tokenColors = buildRules(DarkPlusPalette, [...defaults, ...Languages])

const theme: VsCodeTextMate.VsCodeTheme = {
    name:   "dark-plus-syntax",
    type:   "dark",
    colors: ui,
    tokenColors,
}

const writeTheme = (theme: any): void => {
    const outFilePath = "./dist/theme/dark-plus-syntax-color-theme.json"
    writeJsonFile(outFilePath, theme)
    console.log("=== build successful ===\n")
}

writeTheme(theme)
