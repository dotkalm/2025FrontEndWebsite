use wasm_bindgen::prelude::*;

// Import the `console.log` function from the `web-sys` crate
#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

// Define a macro for easier console logging
macro_rules! console_log {
    ($($t:tt)*) => (log(&format_args!($($t)*).to_string()))
}

// Export a `hello_world` function from Rust to JavaScript
#[wasm_bindgen]
pub fn hello_world() {
    console_log!("Hello World from Rust and WebAssembly!");
}

// Called when the WASM module is instantiated
#[wasm_bindgen(start)]
pub fn main() {
    console_log!("WASM module loaded!");
}