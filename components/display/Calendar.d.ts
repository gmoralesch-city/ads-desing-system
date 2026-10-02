import * as React from 'react';
export interface CalendarProps {
  value?: Date;
  onChange?: (date: Date) => void;
  month?: number;
  year?: number;
  style?: React.CSSProperties;
}
/** Month-grid date picker (Figma "Calendario" / "Dias" / "Semanas"). */
export function Calendar(props: CalendarProps): JSX.Element;
export default Calendar;
