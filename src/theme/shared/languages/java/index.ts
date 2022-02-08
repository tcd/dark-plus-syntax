import { groovy } from "./groovy"
import { java   } from "./java"
import { kotlin } from "./kotlin"
import { scala  } from "./scala"

import { TextMateRuleData, ThemeColor } from "@types"

export const Java: TextMateRuleData[] = [
    ...groovy,
    ...java,
    ...kotlin,
    ...scala,
]
