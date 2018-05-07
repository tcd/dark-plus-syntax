mod english;
mod japanese;

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
