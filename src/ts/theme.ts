/**
 * Colors for base syntax groups into which all scope definitions can be organized.
 *
 * Defining a theme using this interface rather than colors directly allows for any color theme
 * to target the same groups.
 */
export interface Theme {
    /**
     * Single and multi-line comments.
     */
    Comment: string; // light_gray
    /**
     * JavaDoc, JSDoc, YARD, etc.
     */
    DocComment: string; // green
    /** Normal text. */
    PlainText: string; // very_light_gray
    /**
     * Mainly related to flow control like `if`, `while`, `return`, `continue`, etc.
     *
     * Subgroups:
     * - Operator
     * - Conditional
     * - Repeat
     */
    Control: string; // magenta
    /**
     * Escape Sequences like `\n` or `\\\\\\`. Also literal control characters like `^m`.
     *
     * Subgroups:
     * - Char
     */
    Escape: string; // dark_yellow
    /**
     * The Name of a function or method in both definitions/declarations and calls.
     */
    Function: string; // light_yellow
    /**
     * Any numeric value.
     *
     * Subgroups:
     * - Int
     * - Float
     */
    Number: string; // light_green
    /**
     * Operators can either be textual (e.g. `or`) or be characters (e.g. `||`).
     */
    Operator: string; // magenta
    /** Regular Expressions */
    RegEx: string; // light_red
    /**
     * String values
     *
     * Subgroups:
     * - Quote
     */
    String: string; // orange
    /**
     * Assignment keywords like `let`, `var`, `new`, `const`, `func`, `function`, `class`, `enum`, `struct` etc.
     *
     * Subgroups:
     * - Label
     * - Include
     * - Define
     */
    Storage: string; // dark_blue
    /**
     * Reserved language variables like `this`, `super`, `self`, etc.
     *
     * Subgroups:
     * - Keyword
     * - Constant
     * - Boolean
     * - PreProcessor Statements
     */
    Language: string; // dark_blue
    /**
     * Type or Class names.
     *
     * Subgroups:
     * - Type (*Typedef*)
     * - Class
     * - Module
     * - Namespace
     */
    Type: string; // cyan
    /**
     * Variable names.
     */
    Identifier: string; // light_blue
    /**
     * HTML and XML tags.
     */
    Tags: string; // light_gray
    /** Colons */
    Delimiter: string; // light_gray

    /** Color for file diffs. */
    Added: string; // green
    /** Color for file diffs. */
    Changed: string; // light_yellow
    /** Color for file diffs. */
    Removed: string; // light_red

    /** Error messages and indicators. */
    Error: string; // light_red
    /** Warning messages and indicators. */
    Warning: string; // light_yellow or orange
    /** Info messages and indicators. */
    Info: string; // light_blue
}
