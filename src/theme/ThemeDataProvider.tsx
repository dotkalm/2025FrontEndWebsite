'use client';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactNode } from 'react';
import { createMuiTheme } from '@/utils/createTheme';
interface ThemeDataProviderProps {
  children: ReactNode;
}

export default function ThemeDataProvider({ 
  children, 
}: ThemeDataProviderProps) {

  return (
    <AppRouterCacheProvider>
      <ThemeProvider 
        theme={createMuiTheme()}
      >
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}