import * as React from 'react';
export interface BannerProps {
  tone?: 'brand' | 'navy' | 'teal';
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Trailing CTA slot (e.g. a Button). */
  action?: React.ReactNode;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}
/**
 * Full-width promo / notification band (Figma "Banner").
 */
export function Banner(props: BannerProps): JSX.Element;
export default Banner;
