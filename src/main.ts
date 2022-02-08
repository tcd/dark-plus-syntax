import { buildTheme } from "@lib"
import {
    DarkPlus,
    LightPlus,
    DarkPlusHighContrast,
    LightPlusHighContrast,
} from "@src/themes"

const themes = [
    DarkPlus,
    LightPlus,
    DarkPlusHighContrast,
    LightPlusHighContrast,
]

themes.forEach(theme => buildTheme(theme))
