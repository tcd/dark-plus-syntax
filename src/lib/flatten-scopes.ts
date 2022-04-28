import { isString, isNumber, isBoolean } from "lodash"
import { isBlank } from "@lib"

const isObject = (x: any): boolean => {

    if (x === null)      { return false }
    if (x === undefined) { return false }

    if (isString(x))      { return false }
    if (isNumber(x))      { return false }
    if (isBoolean(x))     { return false }
    if (Array.isArray(x)) { return false }

    return true
}

// const isStringArray = (x: any): boolean => {
//     if (!Array.isArray(x)) { return false }
//     for (const y of x) {
//         if (!isString(y)) { return false }
//     }
//     return true
// }

const flattenObject = (obj: any, prefix = "") => {
  return Object.keys(obj).reduce((acc, k) => {
    const pre = prefix?.length ? (prefix + ".") : ""
    if (typeof obj[k] === "object") {
        Object.assign(acc, flattenObject(obj[k], pre + k))
    } else {
        acc[pre + k] = obj[k]
    }
    return acc
  }, {})
}

interface ScopeFlatteningData {
    scopeList: string[]
    fullScopes: string[]
    // currentLevelNumber: number
    // currentLevelData: any
}

const defaultFlatteningData: ScopeFlatteningData = {
    /** Scope tokens to join together */
    scopeList:  [],
    /** Final, flattened data */
    fullScopes: [],
    // currentLevelNumber: 0,
    // currentLevelData:   null,
}

const flattenScopesObjectOrArray = (scopes: any, data: ScopeFlatteningData): any => {
    const flatScopes = []

    if (isBlank(data)) {
        data = defaultFlatteningData
    }

    if (Array.isArray(scopes)) {
        for (const scope of scopes) {

        }
    }

    if (isObject(scopes)) {
        for (const [key, value] of Object.entries(scopes)) {
            if (value == null) {
                data.fullScopes.push([...data.scopeList, key].join(" "))
            }
            continue
        }
    }

    return flatScopes
}

export const flattenScopes = (scopes: any): any => {
    const flatScopes = []

    // if (Array.isArray(scopes)) {
    //     for (const scope of scopes) {
    //
    //     }
    // }

    for (const scope of scopes) {

        if (isString(scope)) {
            flatScopes.push(scope)
            continue
        }

        if (Array.isArray(scope)) {
            if (scope.every(x => isString(x))) {
                flatScopes.push(scope.join(" "))
                continue
            }
            continue
        }

        if (isObject(scope)) {
            continue
        }

        // Otherwise
        console.log({
            message: "unable to determine type",
            scope:   scope,
        })
        process.exit(1)
    }

    return flatScopes
}
