import * as React from 'react';
export interface PageHeaderProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}
/** Section/page header band with airy light-weight title (Figma "Cabecera"). */
export function PageHeader(props: PageHeaderProps): JSX.Element;
export default PageHeader;
