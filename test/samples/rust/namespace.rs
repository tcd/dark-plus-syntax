//! This is documentation for the `foo` crate.
//!
//! The foo crate is meant to be used for bar.



extern crate communicator;

fn main() {
    communicator::client::connect();
}


/// uno contains example *1*
pub mod uno;
mod english;
mod japanese;
pub mod pig_latin;

// Module names follow the conventions for other Rust identifiers: lower_snake_case.
mod english {
    mod greetings {
        fn hello() -> String {
            "Hello!".to_string()
        }
    }
    mod farewells {
        fn goodbye() -> String {
            "Goodbye.".to_string()
        }
    }
}

mod japanese {
    mod greetings {
        fn hello() -> String {
            "こんにちは".to_string()
        }
    }
    mod farewells {
        fn goodbye() -> String {
            "さようなら".to_string()
        }
    }
}
