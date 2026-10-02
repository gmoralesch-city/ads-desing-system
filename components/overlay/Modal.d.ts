import * as React from 'react';
export interface ModalProps {
  open: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Footer action row (e.g. Button cluster). */
  footer?: React.ReactNode;
  width?: number;
  style?: React.CSSProperties;
}
/** Centered dialog on a dark scrim (Figma "Modals"). */
export function Modal(props: ModalProps): JSX.Element | null;
export default Modal;
