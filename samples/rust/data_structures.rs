#![allow(dead_code)]
#![allow(unused_variables)]
mod pm;

fn use_slice(slice: &mut [i32]) {
    println!("first elem is {}, len = {}", slice[0], slice.len());
    slice[0] = 4321;

    // will crash
    //let z = slice[10];
}

fn slices() {
    /// a slice is part of an array
    /// its size is not known at compile time
    let mut data = [1, 2, 3, 4, 5];

    // start w/o mut, borrow as a slice
    use_slice(&mut data[1..4]);
    use_slice(&mut data); // entire array

    println!("data after slice use = {:?}", data);
}

fn strings() {
    /// a slice that always points to a valid UTF-8 sequence
    /// a view into a String
    let s: &'static str = "hi there!"; // &'static str -->
                                       // statically allocated (part of the program)

    // s = "bar"; // cannot reassign immutable

    //let a = s[0]; // cannot index

    for c in s.chars().rev()
    // reversed! also as_bytes()
    {
        println!("{}", c);
    }

    if let Some(first_char) = s.chars().nth(0) {
        println!("first letter is {}", first_char)
    }

    // heap allocated construct
    // Vec<u8>, guaranteed to be valid UTF-8

    let mut letters = String::new();
    let mut a = 'a' as u8;
    while a <= ('z' as u8) {
        letters.push(a as char);
        letters.push_str(","); // note the _str
        a = a + 1;
    }

    println!("{}", letters);

    // str from String
    let u: &str = &letters; // deref conversion
                            // there are situations when the coercion does NOT happen

    // concatenation
    // String + str
    // String + &String

    // String from str
    //let mut abc = String::from("hello world");
    let mut abc = "hello world".to_string();
    abc.remove(0);
    abc.push_str("!!!");
    println!("{}, {}", abc, abc.replace("ello", "goodbye"));
}

fn sum_and_product(x: i32, y: i32) -> (i32, i32) {
    (x + y, x * y)
}

fn tuples() {
    let x = 3;
    let y = 4;
    let sp = sum_and_product(3, 4);

    println!("sp = {:?}", sp);
    println!("{0} + {1} = {2}, {0} * {1} = {3}", x, y, sp.0, sp.1); // try sp.5

    // destructuring
    let (a, b) = sp;
    println!("a = {}, b = {}", a, b);

    // tuple of tuples
    let sp2 = sum_and_product(4, 7);
    let combined = (sp, sp2);
    println!("{:?}", combined);
    println!("last element is {}", (combined.1).1);

    let ((c, d), (e, f)) = combined;

    // tuple of different elements
    let foo = (true, 42.0, -1i8);
    println!("{:?}", foo);

    // tuple of a single element
    let meanings = (42,); // start w/o comma
    println!("{:?}", meanings);
}

fn options() {
    let x = 3.0;
    let y = 0.0;

    let result: Option<f64> = if y != 0.0 { Some(x / y) } else { None };

    match result {
        Some(z) => println!("{}/{}={}", x, y, z),
        None => println!("cannot divide {} by {}", x, y),
    }

    if let Some(z) = result {
        println!("result = {}", z);
    }

    // while let
}

enum Color {
    Red, // unit-like struct
    Green,
    Blue,
    RgbColor(u8, u8, u8), // tuple struct
    CmykColor {
        cyan: u8,
        magenta: u8,
        yellow: u8,
        black: u8,
    },
}

fn enums() {
    let c = Color::CmykColor {
        cyan: 0,
        magenta: 128,
        yellow: 0,
        black: 255,
    };
    //Color::RgbColor(0,0,0);

    match c {
        Color::Red => println!("r"),
        Color::Green => println!("g"),
        Color::Blue => println!("b"),

        Color::RgbColor(0, 0, 0)
        | Color::CmykColor {
            cyan: _,
            magenta: _,
            yellow: _,
            black: 255,
        } => println!("black"),

        Color::RgbColor(r, g, b) => println!("rgb({},{},{}", r, g, b),
        _ => (),
    }
}

struct Point<T> {
    x: T,
    y: T,
}

struct Line<T> {
    start: Point<T>,
    end: Point<T>,
}

fn generics() {
    let a = Point { x: 0.0, y: 0.0 };
    let b = Point { x: 1.2, y: 3.4 };

    /// won't work initially
    /// let myline = Line { start: a, end: b };
}

fn main() {
    //slices();
    //strings();
    //tuples();
    //pm::pattern_matching();
    //generics();
}
