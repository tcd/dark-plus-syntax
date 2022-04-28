export const isBlank = (data: any): boolean => {

    // Null or undefined
    if (data == undefined) { return true }
    if (data == null)      { return true }

    // Empty string
    if (data === "") {
        return true
    }

    // Empty array
    if (Array.isArray(data) && data.length === 0) {
        return true
    }

    // Empty object
    // if (JSON.stringify(data) === "{}") {
    //     return true
    // }

    // Empty object
    if (data.constructor === Object && Object.keys(data).length === 0) {
        return true
    }

    // Looks like there is a value
    return false
}
