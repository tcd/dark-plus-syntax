package main

import (
	"encoding/json"
	"fmt"
	"strings"
)

type person struct {
	First       string
	Last        string
	Age         int
	notExported int
}

var j uint64
var i, rounds uint64
var wg sync.WaitGroup
var tpl *template.Template

var magicCipherData = []byte{
	0x4f,
	0x72,
	0x70,
	0x68,
}

func main() {
	var p1 person

	rdr := strings.NewReader(`{"First":"James", "Last":"Bond", "Age":20}`)
	json.NewDecoder(rdr).Decode(&p1)

	fmt.Println(p1.First)
	fmt.Println(p1.Last)
	fmt.Println(p1.Age)
}
