import {
    NavigationMenu,
    TDesignTokens,
} from '@/types'

export interface TSettingsResponse {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: "settings";
  _updatedAt: string;
  designTokens: TDesignTokens;
  navigationMenu: NavigationMenu;
}