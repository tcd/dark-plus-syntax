import { deepMap } from "react-children-utilities"

type TocItem = any

/**
 * @see [React Children Utilities - `deepMap()`](https://fernandopasik.com/react-children-utilities/deep-map)
 */
export const buildToc = <T = any,>(children: T): [children: T, toc: TocItem[]] => {
    return [children, []]
}
