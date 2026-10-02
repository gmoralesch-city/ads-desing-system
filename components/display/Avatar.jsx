import React from 'react';

/** Avatar — circular user mark. Shows image when src given, else initials on navy. */
export function Avatar({ src, name = '', size = 40, style = {} }) {
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return (
    <span style={{
      width: size, height: size, borderRadius: '50%', overflow: 'hidden',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--blue-900)', color: '#fff', flex: '0 0 auto',
      fontFamily: 'var(--font-brand)', fontWeight: 'var(--fw-bold)', fontSize: size * 0.38,
      ...style,
    }}>
      {src ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : (initials || '?')}
    </span>
  );
}

export default Avatar;
