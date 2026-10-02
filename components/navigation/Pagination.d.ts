import * as React from 'react';
export interface PaginationProps {
  page?: number;
  pageCount?: number;
  onChange?: (page: number) => void;
  style?: React.CSSProperties;
}
/** Page navigation with cyan active page (Figma "Página"). */
export function Pagination(props: PaginationProps): JSX.Element;
export default Pagination;
