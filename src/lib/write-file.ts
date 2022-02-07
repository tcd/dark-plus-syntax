import * as fs from "fs"

export const writeJsonFile = (filePath: string, data: any, compact: boolean = false) => {
    try {
        let outData
        if (compact) {
            outData = JSON.stringify(data)
        } else {
            outData = JSON.stringify(data, null, 4)
        }
        fs.writeFileSync(filePath, outData)
        console.log(`file written: ${filePath}`)
    } catch (error) {
       console.log(error)
       process.exit(1)
    }
}

export const writeFile = (filePath: string, data: string) => {
    try {
        fs.writeFileSync(filePath, data)
        console.log(`file written: ${filePath}`)
    } catch (error) {
       console.log(error)
       process.exit(1)
    }
}
