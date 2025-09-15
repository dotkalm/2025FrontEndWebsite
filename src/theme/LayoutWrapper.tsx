'use client';
import NavMenu from '@/components/NavigationMenu';
import MainLayout from "@components/MainLayout";
import ThemeDataProvider from "./ThemeDataProvider";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({
  children,
}: LayoutWrapperProps) {
  return (
    <ThemeDataProvider>
      <MainLayout>
        <NavMenu />
        {children}
      </MainLayout>
    </ThemeDataProvider>
  );
}