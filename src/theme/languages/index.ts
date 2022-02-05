import { Html } from "./html"
import { Java } from "./java"
import { Styles } from "./styles"

import { c } from "./c"
import { cfml } from "./cfml"
import { cpp } from "./cpp"
import { crystal } from "./crystal"
import { cs } from "./cs"
import { dart } from "./dart"
import { elixir } from "./elixir"
import { elm } from "./elm"
import { erlang } from "./erlang"
import { git } from "./git"
import { go } from "./go"
import { graphql } from "./graphql"
import { haskell } from "./haskell"
import { ini } from "./ini"
import { javaScript } from "./javascript"
import { lisp } from "./lisp"
import { makefile } from "./makefile"
import { markdown } from "./markdown"
import { nginx } from "./nginx"
import { orgMode } from "./org-mode"
import { python } from "./python"
import { regexp } from "./regexp"
import { ruby } from "./ruby"
import { rust } from "./rust"
import { smarty } from "./smarty"
import { swift } from "./swift"
import { terraform } from "./terraform"
import { todoTxt } from "./todo-txt"
import { toml } from "./toml"
import { vcard } from "./vcard"
import { viml } from "./viml"

import { TextMateRuleData } from "@lib"

export const Languages: TextMateRuleData[] = [
    ...Html,
    ...Java,
    ...Styles,
    ...c,
    ...cfml,
    ...cpp,
    ...crystal,
    ...cs,
    ...dart,
    ...elixir,
    ...elm,
    ...erlang,
    ...git,
    ...go,
    ...graphql,
    ...haskell,
    ...ini,
    ...javaScript,
    ...lisp,
    ...makefile,
    ...markdown,
    ...nginx,
    ...orgMode,
    ...python,
    ...regexp,
    ...ruby,
    ...rust,
    ...smarty,
    ...swift,
    ...terraform,
    ...todoTxt,
    ...toml,
    ...vcard,
    ...viml,
]
