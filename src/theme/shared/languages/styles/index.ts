import { css } from "./css"
import { stylus } from "./stylus"
import { styledComponents } from "./styled-components"

import { TextMateRuleData, ThemeColor } from "@types"

export const Styles: TextMateRuleData[] = [
    ...css,
    ...stylus,
    ...styledComponents,
]
