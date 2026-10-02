import * as React from 'react';
export interface SummaryRow { label: React.ReactNode; value: React.ReactNode; }
export interface SummaryProps {
  title?: React.ReactNode;
  rows: SummaryRow[];
  total?: { label?: React.ReactNode; value: React.ReactNode };
  style?: React.CSSProperties;
}
/** Key/value summary panel with highlighted total (Figma "Resumen"). */
export function Summary(props: SummaryProps): JSX.Element;
export default Summary;
