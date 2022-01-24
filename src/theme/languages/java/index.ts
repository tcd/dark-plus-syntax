import { groovy } from "./groovy"
import { java   } from "./java"
import { kotlin } from "./kotlin"
import { scala  } from "./scala"

export const Java: VsCodeTextMate.TextMateRules = [
    ...groovy,
    ...java,
    ...kotlin,
    ...scala,
]
