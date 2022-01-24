import "mylib"

type myInt int

type myStruct struct {
	aaa       // looks good
	bbb myInt // "myInt" scoped as "source.go"
	ccc []myInt
	ddd map[myInt]int // "myInt" scoped as "source.go"

	locks      *myLib.myRune
	globalLock myLib.myRune
}
