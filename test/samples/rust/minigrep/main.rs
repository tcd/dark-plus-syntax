extern crate minigrep;
use minigrep::Config;

extern crate ansi_term;
use ansi_term::Color::Red;

use std::env;
use std::process;

fn main() {
    let args: Vec<String> = env::args().collect();

    let config = Config::new(&args).unwrap_or_else(|err| {
        println!("Problem parsing arguments: {}", Red.paint(err).to_string());
        process::exit(1);
    });

    if let Err(err) = minigrep::run(config) {
        println!("Application error: {}", Red.paint(err.to_string()));
        process::exit(1);
    }

}


