fn largest_i32(list: &[i32]) -> i32 {

    let mut largest = list[0];

    for &item in list.iter() {
        if item > largest {
            largest = item;
        }
    }

    largest
}

fn largest_char(list: &[char]) -> char {
    let mut largest = list[0];

    for &item in list.iter() {
        if item > largest {
            largest = item;
        }
    }

    largest
}

/// OHHH *shit* boi
/// looky hya
/// ## BOOYAKASHA
/// now that `shit` is **TIGHT**
/// lol [Generic Types, Traits, and Lifetimes](https://doc.rust-lang.org/book/second-edition/ch10-00-generics.html#generic-types-traits-and-lifetimes)
fn main() {
    let number_list = vec![34, 50, 25, 100, 65];

    let result = largest_i32(&number_list);
    println!("The largest number is {}", result);

    let char_list = vec!['y', 'm', 'a', 'q'];

    let result = largest_char(&char_list);
    println!("The largest char is {}", result);
}
