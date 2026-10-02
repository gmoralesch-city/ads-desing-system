import React from 'react';

/** Tabs — horizontal nav with a cyan active underline. */
export function Tabs({ tabs = [], active = 0, onChange, style = {} }) {
  return (
    <div style={{ display: 'flex', gap: 'var(--space-6)', borderBottom: '1px solid var(--border-default)', ...style }}>
      {tabs.map((t, i) => {
        const on = i === active;
        return (
          <button
            key={i}
            type="button"
            onClick={() => onChange && onChange(i)}
            style={{
              appearance: 'none', border: 'none', background: 'transparent', cursor: 'pointer',
              padding: '0 0 12px', marginBottom: -1,
              fontFamily: 'var(--font-brand)', fontSize: 'var(--fs-body)',
              fontWeight: on ? 'var(--fw-bold)' : 'var(--fw-medium)',
              color: on ? 'var(--text-strong)' : 'var(--text-muted)',
              borderBottom: `3px solid ${on ? 'var(--color-brand)' : 'transparent'}`,
              transition: 'var(--transition-action)',
            }}
          >
            {t}
          </button>
        );
      })}
    </div>
  );
}

export default Tabs;
