// This file allows TypeScript to recognize the WASM module imports
declare module '*.wasm' {
  const content: any;
  export default content;
}

declare module '/hello_wasm.js' {
  export function hello_world(): void;
  export function main(): void;
  export function add(a: number, b: number): number;
  const init: (wasmUrl: string) => Promise<any>;
  export default init;
}

declare module '../../../public/hello_wasm.js' {
  export function hello_world(): void;
  export function main(): void;
  export function add(a: number, b: number): number;
  const init: (wasmUrl: string) => Promise<any>;
  export default init;
}