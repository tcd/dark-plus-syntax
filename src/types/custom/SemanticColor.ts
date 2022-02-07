export enum SemanticColor {
    /**
     * Primary foreground color.
     * This color is used if no other rule applies.
     *
     * ## Used to color the following:
     *
     * - Plain Text
     * - Braces & Brackets
     * - Commas & Colons
     */
    Foreground = "Foreground",
    /**
     * Universal background color. Only need one.
     */
    Background = "Background",
    /**
     * Error messages, deprecations, etc.
     */
    Errors = "Errors",
    /**
     * # Regular Expressions
     */
    RegExp = "RegExp",
    /**
     * # Strings
     */
    Strings = "Strings",
    /**
     * # Literal Values
     *
     * ## Used to color the following:
     *
     * - Char values (`'a'`)
     * - Escape Codes (`\n`)
     * - Symbols (as are use by Ruby; ex: `:something`)
     */
    Chars = "Chars",
    /**
     * # Types
     *
     * ## Used to color the following:
     *
     * - type definitions
     * - classes
     * - modules
     * - enums
     * - namespaces
     */
    Types = "Types",
    /**
     * # Variables
     *
     * ## Used to color the following:
     *
     * - variables
     * - class or object properties (but not methods)
     *
     * ## Aliases:
     *
     * - Identifiers
     */
    Variables = "Variables",
    /**
     * # Functions
     *
     * ## Used to color the following:
     *
     * - Functions (definitions & calls)
     * - Methods (definitions & calls)
     */
    Functions = "Functions",
    /**
     * # Numeric Values
     *
     * ## Used to color the following:
     *
     * - Integers
     * - Decimals
     * - Floats
     * - Hex
     */
    Numbers = "Numbers",
    /**
     * # Keywords
     *
     * ## Used to color the following:
     *
     * - Reserved Language Keywords (`true`, `false`, `null`, `nil`)
     * - Storage/Declaration Keywords (`var`, `let`, `const`, `class`, `interface`)
     * - Storage Modifier Keywords (`public`, `private`, `static`)
     * - Boolean values (`[Tt]rue`, `[Ff]alse`)
     *
     * ## Aliases:
     *
     * - Storage
     */
    Keywords = "Keywords",
    /**
     * # Flow Control
     *
     * ## Used to color the following:
     *
     * - Operators (`+`, `-`, `=`, `|`, `&&`, `or`, `and`)
     * - Conditional Keywords
     * - Flow Control (`if`, `else`, `while`, `do`)
     * - Property access (the *dot* in `this.property`)
     */
    FlowControl = "FlowControl",
    /**
     * # Comments
     */
    Comments = "Comments",
    /**
     * ## Used to color the following:
     *
     * - Documentation Comments
     * - TODO Comments
     * - Preprocessor Directives
     */
    DocComments = "DocComments",
    // =========================================================================
    // Less Semantic
    // =========================================================================
    /**
     * HTML Tags
     */
    Tags = "Tags",
    /**
     * For values that don't need to stand out (comments, semicolons, etc)
     */
    Noise = "Noise",
}
