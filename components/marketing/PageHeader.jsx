import React from 'react';

/**
 * PageHeader — section/page header band (Figma "Cabecera"). Eyebrow, title,
 * optional description and a trailing action slot. Airy light-weight title.
 */
export function PageHeader({ eyebrow, title, description, action, align = 'left', style = {} }) {
  const center = align === 'center';
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', fontFamily: 'var(--font-brand)', ...style }}>
      <div style={{ textAlign: center ? 'center' : 'left', maxWidth: center ? 680 : 'none', margin: center ? '0 auto' : 0 }}>
        {eyebrow && <div style={{ fontWeight: 'var(--fw-bold)', fontSize: 12, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--color-accent-teal)', marginBottom: 8 }}>{eyebrow}</div>}
        <h2 style={{ margin: 0, fontWeight: 'var(--fw-light)', fontSize: 40, lineHeight: 1.05, color: 'var(--text-strong)', letterSpacing: '-0.01em' }}>{title}</h2>
        {description && <p style={{ margin: '12px 0 0', fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.5, color: 'var(--text-muted)' }}>{description}</p>}
      </div>
      {action && !center && <div style={{ flexShrink: 0, paddingBottom: 4 }}>{action}</div>}
    </div>
  );
}

export default PageHeader;
