# Go


## Storage
- `package`
- `var`
- `:=`
  - Inside a function, the `:=` short assignment statement can be used in place of a `var` declaration with implicit type.
- `const`
  - Constants are declared like variables, but with the const keyword.
  - Constants can be character, string, boolean, or numeric values.
  - Constants cannot be declared using the `:=` syntax.
- `type`


## Flow Control
- `return`
- `for`
  1. init statement:       executed before the first iteration (optional)
  2. condition expression: evaluated before every iteration
  3. post statement:       executed at the end of every iteration (optional)
- `if`
  - `else`
- `switch`
  - `case`
  - `default` - Optional
  - Go only runs the selected case, not all the cases that follow.
  - Go's switch cases need not be constants, and the values involved need not be integers.
  - Switch without a condition is the same as switch true.  This construct can be a clean way to write long if-then-else chains.
- `for`
  - `break`
  - `continue`
- `range`
  - You can use `range` to iterate over an *array*, a *slice*, a *string*, a *map*, or a *channel*.
	- `range` returns one (channel) or two values (array, slice, string, and map).
	- If you only need the value, use the underscore as the key.
- `defer`
  - A defer statement defers the execution of a function until the surrounding function returns.
  - The deferred call's arguments are evaluated immediately, but the function call is not executed until the surrounding function returns.
  - Deferred function calls are pushed onto a stack. When a function returns, its deferred calls are executed in last-in-first-out order.
- `goto`
- `go`
- `select`
  - `case`


## Operators
- `=`
<!-- - `:=` -->
  <!-- - Short Assignment Statement -->
- `*`
- `/`
- `%`
- `+`
- `-`
- `+=`
- `-=`
- `++`
- `--`
- `<-` is the "send" operator when a channel appears on the left.
- `:`
  - Used in switch & select statements
- `&`
  - The `&` operator generates a pointer to its operand.
- `*`


## Data Types
- `bool`
- `string`
- `int`
  - `int8`
  - `int16`
  - `int32`
  - `int64`
- `uint`
  - `uint8`
  - `uint16`
  - `uint32`
  - `uint64`
  - `uintptr`
- `byte`
  - alias for `uint8`
- `rune`
  - Alias for `int32`
  - Represents a Unicode code point
- `float32`, `float64`
- `complex64`, `complex128`

```go
// (Non-ASCII literal. Go source is UTF-8.)
char rune = 'Σ'                  // rune type, an alias for int32, holds a unicode code point.
sentence string = "Hello World"  // string
paragraph string = `
      A "raw" string literal 
      can include line breaks.`  // Same string type.

ToBe bool = true                 // bool
num int = 69                     // int
f float64 = 3.14195              // float64, an IEEE-754 64-bit floating point number.
c complex128 = 3 + 4i            // complex128, represented internally with two float64's.
```


## Data Structures

### Arrays
- The type `[n]T` is an array of `n` values of type `T`.
- An array's length is part of its type, so arrays cannot be resized.
- *Array literals*


### Slices
- A slice is a dynamically-sized, flexible view into the elements of an array. 
- In practice, slices are much more common than arrays.
- **Slices are like references to arrays**
- Slices can contain any type, including slices.

- A slice is formed by specifying two indices, a low and high bound, separated by a colon:
  - `a[low : high]`
  - This selects a half-open range which includes the first element, but excludes the last one.

- *Slice literals*

- *Slice defaults*
  - When slicing, you may omit the high or low bounds to use their defaults instead.
```go
// For the array
var a [10]int

// these slice expressions are equivalent:
a[0:10]
a[:10]
a[0:]
a[:]
```
- A slice has both a *length* and a *capacity*.
  - The *length* of a slice is the number of elements it contains.
  - The *capacity* of a slice is the number of elements in the underlying array, counting from the first element in the slice.
  - The length and capacity of a slice s can be obtained using the expressions `len(s)` and `cap(s)`.

#### Dynamically-Sized Arrays
> Slices can be created with the built-in `make()` function; this is how you create dynamically-sized arrays.

```go
The make function allocates a zeroed array and returns a slice that refers to that array:

a := make([]int, 5)  // len(a)=5
To specify a capacity, pass a third argument to make:

b := make([]int, 0, 5) // len(b)=0, cap(b)=5

b = b[:cap(b)] // len(b)=5, cap(b)=5
b = b[1:]      // len(b)=4, cap(b)=4
```

```go
/** 
 * Slices of Slices:
 * Slices can contain any type, including other slices.
 */
func main() {
    // Create a tic-tac-toe board.
    board := [][]string{
        []string{"_", "_", "_"},
        []string{"_", "_", "_"},
        []string{"_", "_", "_"},
    }

    // The players take turns.
    board[0][0] = "X"
    board[2][2] = "O"
    board[1][2] = "X"
    board[1][0] = "O"
    board[0][2] = "X"

    for i := 0; i < len(board); i++ {
        fmt.Printf("%s\n", strings.Join(board[i], " "))
    }
}
```


### Structs
  - A `struct` is a collection of fields.
  - Struct fields are accessed using a dot.
  - Struct fields can be accessed through a struct pointer.

#### Pointers to Structs
```go
/**
 * To access the field X of a struct when we have the struct pointer p we could write (*p).X. 
 * However, that notation is cumbersome, so the language permits us instead to 
 * write just p.X, without the explicit dereference.
 */
type Vertex struct {
    X int
    Y int
}

func main() {
    v := Vertex{1, 2}
    p := &v
    p.X = 1e9
    fmt.Println(v)
}
```

#### Struct Literals
- A struct literal denotes a newly allocated struct value by listing the values of its fields.
- You can list just a subset of fields by using the Name: syntax. (And the order of named fields is irrelevant.)
- The special prefix & returns a pointer to the struct value.


### Maps
- A map maps keys to values.

```go
/** 
  * Maps are a dynamically growable associative array type, 
  * like the hash or dictionary types of some other languages.
  */
m := map[string]int{"three": 3, "four": 4}
m["one"] = 1
```


## Memory Allocation

###Pointers
Go has pointers. A pointer holds the memory address of a value.

The type `*T` is a pointer to a T value. Its zero value is nil.
```go
var p *int
```

The `&` operator generates a pointer to its operand.
```go
i := 42
p = &i
```

The `*` operator denotes the pointer's underlying value.
```go
fmt.Println(*p) // read i through the pointer p
*p = 21         // set i through the pointer p
                // This is known as "dereferencing" or "indirecting".
```


## Concurrency
```go
// c is a channel, a concurrency-safe communication object.
func inc(i int, c chan int) {
    c <- i + 1 // <- is the "send" operator when a channel appears on the left.
}

// We'll use inc to increment some numbers concurrently.
func learnConcurrency() {
    // Same make function used earlier to make a slice.
    // Make allocates and initializes slices, maps, and channels.
    c := make(chan int)

    /** 
     * Start three concurrent goroutines. Numbers will be incremented
     * concurrently, perhaps in parallel if the machine is capable and
     * properly configured. All three send to the same channel. 
     */
    go inc(0, c) // go is a statement that starts a new goroutine.
    go inc(10, c)
    go inc(-805, c)

    /** 
     * Read three results from the channel and print them out.
     * There is no telling in what order the results will arrive!
     */
    fmt.Println(<-c, <-c, <-c) // channel on right, <- is "receive" operator.

    cs := make(chan string)       // Another channel, this one handles strings.
    ccs := make(chan chan string) // A channel of string channels.
    go func() { c <- 84 }()       // Start a new goroutine just to send a value.
    go func() { cs <- "wordy" }() // Again, for cs this time.

    /**
     * Select has syntax like a switch statement but each case involves a channel operation. 
     * It selects a case at random out of the cases that are ready to communicate.
     */
    select {
    case i := <-c: 
            fmt.Printf("it's a %T", i)    // The value received can be assigned to a variable,
    case <-cs:     
            fmt.Println("it's a string")  // Or the value received can be discarded.
    case <-ccs:    
            fmt.Println("didn't happen.") // Empty channel, not ready for communication.
    }

    /**
     * At this point a value was taken from either c or cs. 
     * One of the two goroutines started above has completed, the other will remain blocked.
     */
}
```


## TODO

- [x] Type Conversions
- [] Composite Literals
- [] Concurrency
  - [] Channels
  - [] Select
- [] HTTPS
- [] Constructors
- [] Variadic Parameters


## Fun Stuff

### built-in
- make()
  - Make allocates and initializes slices, maps, and channels.
- new()
- append()
- inc()
- map[type]type{}
- len()
- cap()

### Zero Value
- `0` for numeric types
- `false` for the boolean type
- `""` (the empty string) for strings
- `nil` for slices

### Decorators
```go
func learnFunctionFactory() {
    // Next two are equivalent, with second being more practical
    fmt.Println(sentenceFactory("summer")("A beautiful", "day!"))

    d := sentenceFactory("summer")
    fmt.Println(d("A beautiful", "day!"))
    fmt.Println(d("A lazy", "afternoon!"))
}

/** 
 * Decorators are common in other languages.
 * Same can be done in Go with function literals that accept arguments.
 */
func sentenceFactory(mystring string) func(before, after string) string {
    return func(before, after string) string {
        return fmt.Sprintf("%s %s %s", before, mystring, after) // new string
    }
}
```
