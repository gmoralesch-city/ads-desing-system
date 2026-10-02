import * as React from 'react';
export interface FilterProps {
  title?: React.ReactNode;
  defaultOpen?: boolean;
  count?: number;
  onClear?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
/** Collapsible filter panel (Figma "Filtros"). */
export function Filter(props: FilterProps): JSX.Element;
export default Filter;
