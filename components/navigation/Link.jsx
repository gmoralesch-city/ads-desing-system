import React from 'react';

/**
 * Link — text link in the ADS style (Figma "Links"). Cyan-dark, underline on
 * hover; optional trailing arrow; inline or standalone.
 */
export function Link({ children, href = '#', onClick, iconRight, muted = false, style = {}, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const color = muted ? 'var(--text-muted)' : 'var(--text-link)';
  return (
    <a href={href} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 4,
        fontFamily: 'var(--font-brand)', fontWeight: 'var(--fw-medium)', fontSize: 'inherit',
        color, textDecoration: hover ? 'underline' : 'none', textUnderlineOffset: 3,
        cursor: 'pointer', transition: 'var(--transition-action)', ...style,
      }} {...rest}>
      {children}{iconRight}
    </a>
  );
}

export default Link;
