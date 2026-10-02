import * as React from 'react';
export interface SliderProps {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  label?: React.ReactNode;
  formatValue?: (value: number) => React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
}
/** Range slider with cyan filled track (Figma "Slider"). */
export function Slider(props: SliderProps): JSX.Element;
export default Slider;
