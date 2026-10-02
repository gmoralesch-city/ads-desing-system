import React from 'react';

/**
 * SocialLinks — row of circular social buttons (Figma "Social").
 * Navy line icons in neutral chips; cyan fill on hover.
 */
export function SocialLinks({ links = [], size = 40, style = {} }) {
  const ICONS = {
    facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>,
    instagram: <><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></>,
    x: <path d="M4 4l16 16M20 4L4 20"/>,
    youtube: <><path d="M22 8.6a3 3 0 0 0-2-2C18.2 6 12 6 12 6s-6.2 0-8 .6a3 3 0 0 0-2 2A31 31 0 0 0 2 12a31 31 0 0 0 .5 3.4 3 3 0 0 0 2 2C6.2 18 12 18 12 18s6.2 0 8-.6a3 3 0 0 0 2-2A31 31 0 0 0 22 12a31 31 0 0 0-.5-3.4z"/><polygon points="10 9 15 12 10 15" fill="currentColor" stroke="none"/></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-11h4v1.5"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
    whatsapp: <path d="M21 11.5a8.5 8.5 0 0 1-12.7 7.4L3 21l2.1-5.3A8.5 8.5 0 1 1 21 11.5z"/>,
  };
  return (
    <div style={{ display: 'inline-flex', gap: 12, ...style }}>
      {links.map((l, i) => (
        <a key={i} href={l.href || '#'} aria-label={l.type} title={l.type} style={{
          width: size, height: size, borderRadius: '50%',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          background: 'var(--neutral-100)', color: 'var(--surface-navy)',
          transition: 'var(--transition-action)',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-brand)'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--neutral-100)'; e.currentTarget.style.color = 'var(--surface-navy)'; }}>
          <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {ICONS[l.type] || ICONS.facebook}
          </svg>
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
