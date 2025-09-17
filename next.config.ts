import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizePackageImports: ['@mui/material', '@mui/icons-material'],
  },
  // Add proper MIME types for WASM files
  async headers() {
    return [
      {
        source: '/:path*.wasm',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/wasm',
          },
        ],
      },
      {
        source: '/hello_wasm.js',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/javascript',
          },
        ],
      },
    ];
  },
  // for better tree shaking and hydration consistency
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },
  // for better MUI optimization
  compiler: {
    emotion: {
      // Enable emotion's source map in development
      sourceMap: true,
      // Auto label components in development
      autoLabel: 'dev-only',
      // Label format for better debugging
      labelFormat: '[local]',
    },
  },
  webpack: (config) => {
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    };
    return config;
  },
};
export default nextConfig;