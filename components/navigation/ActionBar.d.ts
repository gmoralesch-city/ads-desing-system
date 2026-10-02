import * as React from 'react';
export interface Action {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  danger?: boolean;
  disabled?: boolean;
  iconOnly?: boolean;
}
export interface ActionBarProps {
  actions: Action[];
  align?: 'flex-start' | 'center' | 'flex-end';
  style?: React.CSSProperties;
}
/** Row of icon/label actions (Figma "Acciones"). */
export function ActionBar(props: ActionBarProps): JSX.Element;
export default ActionBar;
