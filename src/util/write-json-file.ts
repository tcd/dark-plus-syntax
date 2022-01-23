import * as fs from "fs"

export const writeJsonFile = (filePath, data) => {
    try {
        let outData = JSON.stringify(data, null, 2)
        fs.writeFileSync(filePath, outData)
        console.log(`file written: ${filePath}`)
    } catch (error) {
       console.log(error)
       process.exit(1)
    }
}
