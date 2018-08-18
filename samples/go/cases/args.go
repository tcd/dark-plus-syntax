package main

import (
	"fmt"
)

// Simple Struct
type person struct {
	Name string
}

// Basic Method
func (p person) Greeting() {
	fmt.Println("I'm just a regular person.")
}

func (p *person) phoneHome(count int) {
	fmt.Println("Home: %v", p)
}
