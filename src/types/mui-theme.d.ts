import { TDesignTokens } from '@/types';

declare module '@mui/material/styles' {
  interface Theme {
    customTokens: TDesignTokens;
  }
  
  interface ThemeOptions {
    customTokens?: TDesignTokens;
  }
  
  // Augment the palette to include your custom colors
  interface Palette {
    customColors: TDesignTokens['colors'];
  }
  
  interface PaletteOptions {
    customColors?: TDesignTokens['colors'];
  }
}