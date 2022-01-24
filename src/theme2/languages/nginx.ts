import { TextMateRuleData, SemanticColor } from "@lib"

export const nginx: TextMateRuleData[] = [
    {
        scopes: [
            "source.nginx constant.character.brace",
            "source.nginx constant.character.paren",
        ],
        foreground: "#d4d4d4",
    },
    {
        scopes: [
            "source.nginx constant.character.brace",
            "source.nginx constant.character.end",
        ],
        foreground: "#808080",
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
    //     foreground: "#569cd6",
    // },
    // {
    //     scopes: [
    //         // "source.nginx ",
    //         // "source.nginx constant.language.directive.module.events",
    //         // "source.nginx constant.language.module.http.log",
    //         // "source.nginx constant.language.module.http.fastcgi",
    //         // // "source.nginx constant.language.directive.module.http",
    //     ],
    //     foreground: "#9cdcfe",
    // },
]
