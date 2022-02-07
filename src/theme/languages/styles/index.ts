import { css } from "./css"
import { stylus } from "./stylus"
import { styledComponents } from "./styled-components"

import { TextMateRuleData, SemanticColor } from "@types"

export const Styles: TextMateRuleData[] = [
    ...css,
    ...stylus,
    ...styledComponents,
]
