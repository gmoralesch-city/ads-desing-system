import * as React from 'react';
export interface TableColumn {
  key?: string;
  label: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  render?: (row: any) => React.ReactNode;
}
export interface TableProps {
  columns: TableColumn[];
  rows: any[];
  keyField?: string;
  onRowClick?: (row: any) => void;
  style?: React.CSSProperties;
}
/**
 * Data table with light-blue header wash and row hover (Figma "Data" / "Columna").
 */
export function Table(props: TableProps): JSX.Element;
export default Table;
