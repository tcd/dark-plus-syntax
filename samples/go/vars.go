package main

import (
	"fmt"
)

var x = 42

func main() {
	fmt.Println(x)

	a := 43
	fmt.Println(a)

	var b = &a
	fmt.Println(&a)
}
