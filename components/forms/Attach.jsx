import React from 'react';

/**
 * Attach — file attachment row / dropzone (Figma "Attach"). Underline-style
 * trigger with paperclip; lists attached files with a remove control.
 */
export function Attach({ label = 'Adjuntar archivo', files = [], onAdd, onRemove, hint, style = {} }) {
  const inputRef = React.useRef(null);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', ...style }}>
      <button type="button" onClick={() => inputRef.current && inputRef.current.click()} style={{
        display: 'inline-flex', alignItems: 'center', gap: 10, alignSelf: 'flex-start',
        padding: '10px 16px', border: '1.5px dashed var(--border-strong)', borderRadius: 'var(--radius-sm)',
        background: 'var(--surface-subtle)', cursor: 'pointer',
        fontFamily: 'var(--font-brand)', fontWeight: 'var(--fw-medium)', fontSize: 14, color: 'var(--color-brand-dark)',
        transition: 'var(--transition-action)',
      }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-brand)'; e.currentTarget.style.background = 'var(--color-brand-wash)'; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.background = 'var(--surface-subtle)'; }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
        {label}
      </button>
      <input ref={inputRef} type="file" multiple style={{ display: 'none' }} onChange={e => onAdd && onAdd(Array.from(e.target.files))} />
      {hint && <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-caption)', color: 'var(--text-muted)' }}>{hint}</span>}
      {files.map((f, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', borderRadius: 'var(--radius-sm)', background: '#fff', boxShadow: 'var(--shadow-sm)' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand)" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          <span style={{ flex: 1, fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-strong)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.name || f}</span>
          {onRemove && <button onClick={() => onRemove(i)} aria-label="Quitar" style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--text-muted)', fontSize: 18, lineHeight: 1 }}>×</button>}
        </div>
      ))}
    </div>
  );
}

export default Attach;
