import { TextMateRuleData, SemanticColor } from "@types"

export const nginx: TextMateRuleData[] = [
    {
        scopes: [
            "source.nginx constant.character.brace",
            "source.nginx constant.character.paren",
        ],
        foreground: SemanticColor.Foreground,
    },
    {
        scopes: [
            "source.nginx constant.character.brace",
            "source.nginx constant.character.end",
        ],
        foreground: SemanticColor.Tags,
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
    //     foreground: SemanticColor.Keywords,
    // },
    // {
    //     scopes: [
    //         // "source.nginx ",
    //         // "source.nginx constant.language.directive.module.events",
    //         // "source.nginx constant.language.module.http.log",
    //         // "source.nginx constant.language.module.http.fastcgi",
    //         // // "source.nginx constant.language.directive.module.http",
    //     ],
    //     foreground: SemanticColor.Variables,
    // },
]
