import * as React from 'react';
/** Tabs — horizontal nav with cyan active underline. */
export interface TabsProps {
  tabs?: string[];
  active?: number;
  onChange?: (index: number) => void;
  style?: React.CSSProperties;
}
export function Tabs(props: TabsProps): JSX.Element;
export default Tabs;
