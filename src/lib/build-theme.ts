import {
    ThemeSettings,
    VisualStudioCodeTheme,
} from "@types"
import {
    writeJsonFile,
    buildRules,
    buildUiColors,
} from "@lib"
import {
    Languages,
    defaults,
    ui,
} from "@src/theme"

export const buildTheme  = (settings: ThemeSettings) => {

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

    const fileName = settings?.fileName ?? settings.name
    const outFilePath = `./dist/theme/${fileName}-color-theme.json`

    writeJsonFile(outFilePath, themeData)

    return null
}
