import * as React from 'react';
export interface StepperProps {
  steps: React.ReactNode[];
  /** Index of the current (active) step. */
  current?: number;
  style?: React.CSSProperties;
}
/**
 * Horizontal numbered progress stepper (Figma "Steppers").
 */
export function Stepper(props: StepperProps): JSX.Element;
export default Stepper;
