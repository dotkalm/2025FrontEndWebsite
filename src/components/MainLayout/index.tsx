import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Logo from '@/components/Logo'

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box className="main-layout">
        <Link href="/">
          <Logo />
        </Link>
      {children}
    </Box>
  );
};

export default MainLayout;