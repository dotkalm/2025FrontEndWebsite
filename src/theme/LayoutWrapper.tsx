'use client';
import { Suspense } from 'react';
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
        <Suspense fallback={<div></div>}>
          <NavMenu />
        </Suspense>
        {children}
      </MainLayout>
    </ThemeDataProvider>
  );
}