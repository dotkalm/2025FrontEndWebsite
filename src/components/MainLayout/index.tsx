import { ReactNode } from 'react';
import Box from '@mui/material/Box';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box className="main-layout">
      {children}
    </Box>
  );
};

export default MainLayout;