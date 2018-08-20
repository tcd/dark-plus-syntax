type myInt int

type myStruct struct {
	aaa int
	bbb myInt // "myInt" scoped as "source.go"
	ccc []myInt
	ddd map[myInt]int // "myInt" scoped as "source.go"
	eee
}
