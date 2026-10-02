import * as React from 'react';
export interface BreadcrumbItem { label: React.ReactNode; href?: string; onClick?: () => void; }
export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  style?: React.CSSProperties;
}
/** Path navigation with chevron separators (Figma "Breadcrumb"). */
export function Breadcrumb(props: BreadcrumbProps): JSX.Element;
export default Breadcrumb;
