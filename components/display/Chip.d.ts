import * as React from 'react';
export interface ChipProps {
  children?: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
  iconLeft?: React.ReactNode;
  onRemove?: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}
/** Selectable filter/category pill (Figma "Chips"). */
export function Chip(props: ChipProps): JSX.Element;
export default Chip;
