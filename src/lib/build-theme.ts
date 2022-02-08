import { join } from "path"

import {
    ThemeSettings,
    VisualStudioCodeTheme,
} from "@types"
import {
    writeJsonFile,
    buildRules,
    buildUiColors,
    Config,
} from "@lib"
import {
    Languages,
    defaults,
    ui,
} from "@src/theme"

const outFilePath = (settings: ThemeSettings): string => {
    const fileName = settings?.fileName ?? settings.name
    let root = "./dist/theme"
    if (Config.Development && Config.buildLocalExt) {
        root = Config.localExtDistFolder
    }
    const file = `${fileName}-color-theme.json`
    return join(root, file)
}

export const buildTheme = (settings: ThemeSettings) => {

    const tokenColors = buildRules(settings.palette, [...defaults, ...Languages])

    const uiRules = settings.uiColors ?? ui
    const uiColors = buildUiColors(settings.palette, uiRules)

    const themeData: VisualStudioCodeTheme = {
        $schema:              "vscode://schemas/color-theme",
        name:                 settings.name,
        type:                 settings.type,
        semanticHighlighting: false,
        colors:               uiColors,
        tokenColors,
    }

    const outPath = outFilePath(settings)

    writeJsonFile(outPath, themeData)

    return null
}
