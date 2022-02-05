import { css } from "./css"
import { stylus } from "./stylus"
import { styledComponents } from "./styled-components"

import { TextMateRuleData, SemanticColor } from "@lib"

export const Styles: TextMateRuleData[] = [
    ...css,
    ...stylus,
    ...styledComponents,
]
