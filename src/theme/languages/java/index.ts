import { groovy } from "./groovy"
import { java   } from "./java"
import { kotlin } from "./kotlin"
import { scala  } from "./scala"

import { TextMateRuleData, SemanticColor } from "@lib"

export const Java: TextMateRuleData[] = [
    ...groovy,
    ...java,
    ...kotlin,
    ...scala,
]
