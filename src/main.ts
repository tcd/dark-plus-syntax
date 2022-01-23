import { writeJsonFile } from "write-json-file"

import * as Languages from "./theme/languages"
import { ui } from "./theme/ui"

const tokenColors = (Languages as unknown as any[]).flatMap(x => x)

const theme: VsCodeTextmate.VsCodeTheme = {
    name: "dark-plus-syntax",
    type: "dark",
    colors: ui,
    tokenColors: tokenColors,
}

const writeTheme = (theme): void => {
    const outFilePath = "./themes/dark-plus-syntax-color-theme.json"
    writeJsonFile(outFilePath, theme).then(() => {
        console.log("=== build successful ===\n")
    })
}

writeTheme(theme)
