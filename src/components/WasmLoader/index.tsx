'use client';

import { useEffect, useState } from 'react';

interface WasmModule {
  hello_world: () => void;
  add?: (a: number, b: number) => number;
}

export default function WasmLoader() {
  const [wasm, setWasm] = useState<WasmModule | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
        async function loadWasm() {
      // This works with zero additional dependencies
      const wasmModule = await import('../../../public/hello_wasm.js');
      await wasmModule.default('/hello_wasm_bg.wasm');
      
      // Use your WASM functions
      const result = wasmModule.add(5, 3);
      setWasm(result);
    }
    loadWasm();
  }, []);

  const handleClick = () => {
    if (wasm) {
      wasm.hello_world();
      console.log('Called hello_world function');
    } else {
      console.error('WASM module not loaded');
    }
  };

  if (loading) {
    return <div>Loading WASM module...</div>;
  }
  
  if (error) {
    return <div>Error loading WASM: {error}</div>;
  }

  return (
    <div>
      <h2>Rust WebAssembly Demo</h2>
      <button onClick={handleClick} className="px-4 py-2 bg-blue-500 text-white rounded">
        Call hello_world()
      </button>
      <p>Check the browser console for output!</p>
    </div>
  );
}