import { TextMateRuleData, ThemeColor } from "@types"

export const nginx: TextMateRuleData[] = [
    {
        scopes: [
            "source.nginx constant.character.brace",
            "source.nginx constant.character.paren",
        ],
        foreground: ThemeColor.Foreground,
    },
    {
        scopes: [
            "source.nginx constant.character.brace",
            "source.nginx constant.character.end",
        ],
        foreground: ThemeColor.Tags,
    },
    // {
    //     scopes: [
    //         // "source.nginx ",
    //         "source.nginx constant.language.directive.module.events",
    //         "source.nginx constant.language.directive.module.main",
    //         "source.nginx constant.language.module.http.log",
    //         "source.nginx constant.language.module.http.fastcgi",
    //         "source.nginx constant.language.directive.module.http",
    //
    //     ],
    //     foreground: ThemeColor.Keywords,
    // },
    // {
    //     scopes: [
    //         // "source.nginx ",
    //         // "source.nginx constant.language.directive.module.events",
    //         // "source.nginx constant.language.module.http.log",
    //         // "source.nginx constant.language.module.http.fastcgi",
    //         // // "source.nginx constant.language.directive.module.http",
    //     ],
    //     foreground: ThemeColor.Variables,
    // },
]
