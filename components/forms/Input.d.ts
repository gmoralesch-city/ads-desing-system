import * as React from 'react';

export type InputState =
  | 'default'
  | 'focus'
  | 'active'
  | 'fill'
  | 'fail'
  | 'inactive'
  | 'disabled'
  | 'disabled-fill';

/**
 * Input — boxed text field (Figma "Inputs" atom: 254×47, 8px radius, white fill,
 * 1px stroke). Eight states: default (#B4B4B4 border, label centred at 16px),
 * focus/active/fill (#00AEEF border, label floated to 12px cyan), fail
 * (#E44B40 border + label + help text), inactive / disabled / disabled-fill
 * (same borders at 0.4 opacity). State is derived from focus/value/error/disabled
 * or forced via `state`. Optional 24px leading and trailing icons.
 */
export interface InputProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  /** 24px icon rendered before the text */
  iconLeft?: React.ReactNode;
  /** 24px icon rendered after the text (search, eye, calendar…) */
  iconRight?: React.ReactNode;
  helper?: string;
  /** Any non-empty string puts the field in the `fail` state and prints below */
  error?: string;
  disabled?: boolean;
  /** Read-only → `inactive` state (0.4 opacity, grey border) */
  readOnly?: boolean;
  required?: boolean;
  /** Force a state for specimens/documentation instead of deriving it */
  state?: InputState;
  style?: React.CSSProperties;
}
export function Input(props: InputProps): JSX.Element;
export default Input;
