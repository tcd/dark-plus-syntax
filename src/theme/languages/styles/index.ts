import { css } from "./css"
import { stylus } from "./stylus"
import { styledComponents } from "./styled-components"

export const Styles: VsCodeTextMate.TextMateRules = [
    ...css,
    ...stylus,
    ...styledComponents,
]
