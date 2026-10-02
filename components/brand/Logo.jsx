import React from 'react';

/**
 * Logo — ADS / Sur One wordmark set in brand type (Figma "Imagotipo").
 * The real marks are raster/SVG assets in assets/logos/; this renders a
 * type-based wordmark for safe use anywhere. Pass `src` to use a real asset.
 */
export function Logo({
  brand = 'ads',          // 'ads' | 'surone'
  color = 'auto',         // 'auto' | 'light' (for dark backgrounds)
  size = 28,
  src,
  style = {},
}) {
  if (src) return <img src={src} alt={brand === 'surone' ? 'Sur One' : 'Aseguradora del Sur'} style={{ height: size * 1.6, width: 'auto', display: 'block', ...style }} />;

  if (brand === 'surone') {
    return (
      <span style={{ fontFamily: 'var(--font-surone)', fontWeight: 800, fontSize: size, letterSpacing: '-0.01em', display: 'inline-flex', ...style }}>
        <span style={{ color: color === 'light' ? '#fff' : 'var(--surone-purple)' }}>Sur</span>
        <span style={{ color: 'var(--surone-pink)' }}>One</span>
      </span>
    );
  }
  const strong = color === 'light' ? '#fff' : 'var(--blue-900)';
  return (
    <span style={{ display: 'inline-flex', flexDirection: 'column', lineHeight: 0.95, fontFamily: 'var(--font-brand)', ...style }}>
      <span style={{ fontWeight: 800, fontSize: size, color: strong, letterSpacing: '-0.01em' }}>aseguradora</span>
      <span style={{ fontWeight: 300, fontSize: size, color: 'var(--color-brand)', letterSpacing: '0.02em' }}>del sur</span>
    </span>
  );
}

export default Logo;
