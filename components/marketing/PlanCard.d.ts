import * as React from 'react';
export interface PlanCardProps {
  name: React.ReactNode;
  price: React.ReactNode;
  period?: React.ReactNode;
  tier?: 'bronce' | 'plata' | 'oro' | 'brand';
  features?: React.ReactNode[];
  featured?: boolean;
  cta?: React.ReactNode;
  onCta?: () => void;
  note?: React.ReactNode;
  style?: React.CSSProperties;
}
/**
 * Insurance plan/tier pricing card (Figma "Tarjetas").
 */
export function PlanCard(props: PlanCardProps): JSX.Element;
export default PlanCard;
