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

// Toggle the `Done` attribute of a Todo.
func Toggle(date string, tds Todos) {
	index := getIndex(date, tds)
	td := tds[index]
	td.toggle()
}

// Drop a todo from Todos.
// This is a poor way to go about this. Needs much improvement.
func Drop(date string, tds Todos) Todos {
	var result Todos
	for _, v := range tds {
		if v.Date != date {
			result = append(result, v)
		}
	}
	return result
}
