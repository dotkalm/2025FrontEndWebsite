'use client';
import { usePathname } from "next/navigation";
import {
  type NavigationMenu, 
  type Gallery,
  type TDesignTokens,
  ROOT_ROUTES,
  type ExhibitionMin as TExhibitionMin,
} from "@/types";
import NavMenu from '@/components/NavigationMenu';
import MainLayout from "@components/MainLayout";
import ThemeDataProvider from "./ThemeDataProvider";

interface LayoutWrapperProps {
  children: React.ReactNode;
  navigationMenu: NavigationMenu;
  galleryData: Gallery;
  designTokens: TDesignTokens;
  exhibitionSlugs: string[];
  exhibitionMin: TExhibitionMin[];
}

export default function LayoutWrapper({
  children,
  navigationMenu,
  galleryData,
  designTokens,
  exhibitionSlugs,
  exhibitionMin,
}: LayoutWrapperProps) {
  const pathname = usePathname();
  const infoPage: boolean = pathname === `/${ROOT_ROUTES.INFO}` || pathname === `/${ROOT_ROUTES.INFO}/`;
  const { turnOffFooter } = galleryData.about;
  return (
    <ThemeDataProvider designTokens={designTokens}>
      <MainLayout>
        <NavMenu 
          exhibitionSlugs={exhibitionSlugs} 
          exhibitionMin={exhibitionMin}
          {...navigationMenu} 
        />
        {children}
      </MainLayout>
    </ThemeDataProvider>
  );
}