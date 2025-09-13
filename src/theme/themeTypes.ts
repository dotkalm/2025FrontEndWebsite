import '@mui/material/styles';
import { spacing, mediaQueries } from './responsiveLayout';

declare module '@mui/material/styles' {
  interface Theme {
    customSpacing: typeof spacing;
    mediaQueries: typeof mediaQueries;
  }

  interface ThemeOptions {
    customSpacing?: typeof spacing;
    mediaQueries?: typeof mediaQueries;
  }
}
