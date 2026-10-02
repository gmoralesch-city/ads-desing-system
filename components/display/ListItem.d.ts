import * as React from 'react';
export interface ListItemProps {
  leading?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  trailing?: React.ReactNode;
  onClick?: () => void;
  divider?: boolean;
  style?: React.CSSProperties;
}
/** List row with leading/trailing slots (Figma "Items"). */
export function ListItem(props: ListItemProps): JSX.Element;
export default ListItem;
