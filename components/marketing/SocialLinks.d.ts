import * as React from 'react';
export interface SocialLink { type: 'facebook' | 'instagram' | 'x' | 'youtube' | 'linkedin' | 'whatsapp'; href?: string; }
export interface SocialLinksProps {
  links: SocialLink[];
  size?: number;
  style?: React.CSSProperties;
}
/** Row of circular social buttons (Figma "Social"). */
export function SocialLinks(props: SocialLinksProps): JSX.Element;
export default SocialLinks;
