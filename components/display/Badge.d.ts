import * as React from 'react';
/** Badge — pill label for statuses, tags & counts. */
export interface BadgeProps {
  children?: React.ReactNode;
  /** @default 'brand' */
  tone?: 'brand' | 'success' | 'warning' | 'danger' | 'teal' | 'neutral';
  /** @default 'soft' */
  variant?: 'soft' | 'solid';
  iconLeft?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;
export default Badge;
