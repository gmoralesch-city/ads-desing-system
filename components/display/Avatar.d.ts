import * as React from 'react';
/** Avatar — circular user mark with image or initials. */
export interface AvatarProps {
  src?: string;
  name?: string;
  /** Pixel diameter. @default 40 */
  size?: number;
  style?: React.CSSProperties;
}
export function Avatar(props: AvatarProps): JSX.Element;
export default Avatar;
