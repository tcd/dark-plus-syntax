use std::mem;

fn main() {
    // unsigned 0..255
    let a: u8 = 123; // 8 bits
    println!("a = {}", a);

    // mut
    let mut b: i8 = 0; // mutable
    println!("b = {}", b);
    b = 42;
    println!("b = {}", b);

    let mut c = 123456789; // 32-bit signed i32
    println!("c = {}, size = {} bytes", c, mem::size_of_val(&c));
}
