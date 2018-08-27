package main

import (
	"io"
	"net/http"
)

func myName(w http.ResponseWriter, req *http.Request) {
	io.WriteString(w, "hello mcleod")
}

func sum(vals ...int) int {
	total := 0
	for _, val := range vals {
		total += val
	}
	return total
}

func filter(numbers []int, callback func(int) bool) []int {
	var xs []int
	for _, n := range numbers {
		if callback(n) {
			xs = append(xs, n)
		}
	}
	return xs
}
