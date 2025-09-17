// types/wasm.d.ts
declare module '/hello_wasm.js' {
  const init: (path: string) => Promise<void>;
  export const hello_world: () => void;
  export default init;
}

declare module '*.wasm' {
  const content: string;
  export default content;
}