import * as React from 'react';
/** Card — white surface with ADS elevation. */
export interface CardProps {
  children?: React.ReactNode;
  /** @default 'md' */
  elevation?: 'flat' | 'sm' | 'md';
  padding?: string;
  radius?: string;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
export default Card;
