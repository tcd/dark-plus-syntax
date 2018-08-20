type myInt int

type myStruct struct {
	aaa map[myInt]myInt // "map" scoped as "keyword.map.go"
}

var m1 map[myInt]myInt     // "map" scoped as "entity.name.type.go"
var m2, m3 map[myInt]myInt // "map" scoped as "keyword.map.go"

func foo(arg map[myInt]myInt) { // "map" scoped as "keyword.map.go"
}
