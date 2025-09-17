// Extend the Window interface to include our WASM module
interface Window {
  wasmModule?: {
    init: (wasmPath: string) => Promise<void>;
    hello_world: () => void;
    main?: () => void;
    [key: string]: any;
  };
  wasmLoaded?: boolean;
  wasmError?: Error | string;
}