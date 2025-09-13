'use client';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactNode } from 'react';
import { createMuiTheme } from '@/utils/createTheme';
import { TDesignTokens } from '@/types';

interface ThemeDataProviderProps {
  children: ReactNode;
  designTokens: TDesignTokens;
}

export default function ThemeDataProvider({ 
  children, 
  designTokens 
}: ThemeDataProviderProps) {
  const theme = createMuiTheme(designTokens);

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}