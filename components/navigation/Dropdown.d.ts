import * as React from 'react';
export interface DropdownItem {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  danger?: boolean;
  divider?: boolean;
}
export interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  align?: 'left' | 'right';
  style?: React.CSSProperties;
}
/** Click-to-open menu (Figma "Dropdowns" / "Submenus"). */
export function Dropdown(props: DropdownProps): JSX.Element;
export default Dropdown;
