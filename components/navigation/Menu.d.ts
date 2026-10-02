import * as React from 'react';
export interface MenuItem {
  label: React.ReactNode;
  value?: string | number;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
}
export interface MenuProps {
  items: MenuItem[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  style?: React.CSSProperties;
}
/** Vertical sidebar navigation list (Figma "1Menus" / "Submenus"). */
export function Menu(props: MenuProps): JSX.Element;
export default Menu;
