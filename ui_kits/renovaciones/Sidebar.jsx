// Sidebar — collapsed icon rail with stacked icon+label nav items
function Sidebar({ active = 0, onSelect }) {
  const items = [
    { icon: 'clipboard-list', label: 'Renovación' },
    { icon: 'file-text', label: 'Reportes' },
    { icon: 'bar-chart-3', label: 'Ventas cruzadas' },
    { icon: 'database', label: 'Contabilización' },
    { icon: 'wallet', label: 'Comisiones' },
  ];
  return (
    <aside style={{
      width: 120, flex: '0 0 auto', background: '#fff', borderRight: '1px solid var(--border-subtle)',
      display: 'flex', flexDirection: 'column', paddingTop: 'var(--space-8)', gap: 'var(--space-2)',
    }}>
      {items.map((it, i) => {
        const on = i === active;
        return (
          <button key={i} type="button" onClick={() => onSelect && onSelect(i)} style={{
            position: 'relative', appearance: 'none', border: 'none', background: 'transparent', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: '14px 4px',
          }}>
            <span style={{
              width: 44, height: 44, borderRadius: 'var(--radius-md)',
              background: on ? 'var(--cyan-100)' : 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'var(--transition-action)',
            }}>
              <i data-lucide={it.icon} style={{ width: 22, height: 22, color: on ? 'var(--color-brand-dark)' : 'var(--text-muted)' }}></i>
            </span>
            <span style={{
              fontFamily: 'var(--font-brand)', fontSize: 11, fontWeight: on ? 700 : 500, textAlign: 'center',
              color: on ? 'var(--text-strong)' : 'var(--text-muted)', lineHeight: 1.2,
            }}>{it.label}</span>
            {on && <span style={{ position: 'absolute', right: 0, top: 8, bottom: 8, width: 3, borderRadius: 3, background: 'var(--color-brand)' }}></span>}
          </button>
        );
      })}
    </aside>
  );
}
window.Sidebar = Sidebar;
