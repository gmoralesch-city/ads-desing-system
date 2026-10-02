import * as React from 'react';
export interface AccordionItem { title: React.ReactNode; content: React.ReactNode; }
export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  style?: React.CSSProperties;
}
/** Collapsible disclosure list (Figma "Collapseds" / "Detalles"). */
export function Accordion(props: AccordionProps): JSX.Element;
export default Accordion;
