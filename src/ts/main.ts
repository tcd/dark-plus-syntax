import * as fs from "fs";

export default class Theme2 {

    name: string = "dark-plus-syntax";
    /**
     * Used to hold the list of files containing theme settings.
     */
    nop: Array<string> = [];
    content: JSON;

    compile() {
        return (JSON.stringify(this.content) + '\n');
    }
}
