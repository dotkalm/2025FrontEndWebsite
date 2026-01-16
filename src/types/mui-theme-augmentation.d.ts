// types/mui-theme-augmentation.d.ts
import '@mui/material/styles';
import '@mui/material/Typography';
import { TDesignTokens } from '@/types';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    fontWeightBlack: number;
  }

  interface TypographyVariantsOptions {
    fontWeightBlack?: number;
    h1Italic: React.CSSProperties;
    h2Italic: React.CSSProperties;
    h3Italic: React.CSSProperties;
    h4Italic: React.CSSProperties;
    h5Italic: React.CSSProperties;
    h6Italic: React.CSSProperties;
    body1Italic: React.CSSProperties;
    body2Italic: React.CSSProperties;
  }

  // Allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    h1Italic?: React.CSSProperties;
    h2Italic?: React.CSSProperties;
    h3Italic?: React.CSSProperties;
    h4Italic?: React.CSSProperties;
    h5Italic?: React.CSSProperties;
    h6Italic?: React.CSSProperties;
    body1Italic?: React.CSSProperties;
    body2Italic?: React.CSSProperties;
  }

  // If you're using custom colors in your palette
  interface Palette {
    customColors: {
      black: string;
      gray: string;
      red: string;
      white: string;
      background: string;
      coverBackground: string;
      tableBackground: string;
      articleBackground: string;
      buttonColor: string;
      textColor: string;
      borderColor: string;
      headerBackground: string;
      h1Color: string;
    };
  }

  interface PaletteOptions {
    customColors?: {
      black?: string;
      gray?: string;
      red?: string;
      white?: string;
      background?: string;
      coverBackground?: string;
      tableBackground?: string;
      articleBackground?: string;
      buttonColor?: string;
      textColor?: string;
      borderColor?: string;
      headerBackground?: string;
      h1Color?: string;
    };
  }

  interface Theme {
    customTokens: TDesignTokens;
  }

  interface ThemeOptions {
    customTokens?: TDesignTokens;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1Italic: true;
    h2Italic: true;
    h3Italic: true;
    h4Italic: true;
    h5Italic: true;
    h6Italic: true;
    body1Italic: true;
    body2Italic: true;
  }
}