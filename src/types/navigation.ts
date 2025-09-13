// Types for NavigationMenu
export interface TNavigationMenuResponse {
  allNavigationMenu: NavigationMenu[];
}
export interface NavigationMenu {
  _id: string;
  title: string;
  items: NavigationMenuItem[];
}

export interface NavigationMenuItem {
  url?: string;
  route?: string;
  linkType?: string;
  label: string;
  _key: string;
  _type: string;
  current?: NavigationMenuSubItem;
  past?: NavigationMenuSubItem;
}

export interface NavigationMenuSubItem {
  label: string;
  route: string;
}
