/*Package main provides lines. */
package main

import (
	"fmt"
	"time"
)

func main() {
	fmt.Print(hide())
	fmt.Print(show())

}

func mySleepFunc() {
	//sleeps for 3 seconds
	time.Sleep(3 * time.Second)
	fmt.Println("My func out of sleep, but its executed concurrently\n")
}

var esc = '\x1b'
var return = "\u2318"

/* https://github.com/ahmetb/go-cursor/blob/master/cursor.go */

// Show returns ANSI escape sequence to show the cursor
func show() string {
	// fmt.Print("%c%s", esc, fmt.Sprintf("[?25h"))
	return fmt.Sprintf("%c%s", '\x1b', fmt.Sprintf("[?25h"))
}

// Hide returns ANSI escape sequence to hide the cursor
func hide() string {
	return fmt.Sprintf("%c%s", '\x1b', fmt.Sprintf("[?25l"))
}
