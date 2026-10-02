import * as React from 'react';

/**
 * Button — primary call-to-action for Aseguradora del Sur.
 * Cyan brand fill, rounded 8px, Mulish medium.
 *
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. @default 'primary' */
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  /** Control height. @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Optional leading icon node. */
  iconLeft?: React.ReactNode;
  /** Optional trailing icon node. */
  iconRight?: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button(props: ButtonProps): JSX.Element;
export default Button;
