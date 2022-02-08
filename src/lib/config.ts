import * as dotenv from "dotenv"

dotenv.config()

export enum NodeEnvironment {
    Development = "development",
    Test        = "test",
    Production  = "production",
}

export class Configuration {

    public env: NodeJS.ProcessEnv
    public nodeEnvironment: NodeEnvironment
    public localExtDistFolder: string
    public buildLocalExt: boolean

    constructor() {
        this.env = process.env
        this.nodeEnvironment = process.env.NODE_ENV as NodeEnvironment
        this.localExtDistFolder = process.env.LOCALLY_INSTALLED_THEME_FILE
        this.buildLocalExt = (process.env.BUILD_LOCAL_EXT ?? "") === "true"
    }

    public get Development() { return this.nodeEnvironment === NodeEnvironment.Development }
    public get Test()        { return this.nodeEnvironment === NodeEnvironment.Test        }
    public get Production()  { return this.nodeEnvironment === NodeEnvironment.Production  }

}

export const Config = new Configuration()
