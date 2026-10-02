import React from 'react';

/**
 * Calendar — month grid date picker (Figma "Calendario" / "Dias" / "Semanas").
 * Cyan selected day, wash for today, neutral out-of-month days.
 */
export function Calendar({ value, onChange, month, year, style = {} }) {
  const today = new Date();
  const [view, setView] = React.useState(() => ({
    m: month ?? (value ? value.getMonth() : today.getMonth()),
    y: year ?? (value ? value.getFullYear() : today.getFullYear()),
  }));
  const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const DOW = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
  const first = new Date(view.y, view.m, 1);
  const startDow = (first.getDay() + 6) % 7; // Monday-first
  const days = new Date(view.y, view.m + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < startDow; i++) cells.push(null);
  for (let d = 1; d <= days; d++) cells.push(d);
  const isSel = d => value && value.getDate() === d && value.getMonth() === view.m && value.getFullYear() === view.y;
  const isToday = d => today.getDate() === d && today.getMonth() === view.m && today.getFullYear() === view.y;
  const nav = delta => setView(v => { const nm = v.m + delta; return { m: (nm + 12) % 12, y: v.y + Math.floor(nm / 12) }; });
  const arrow = dir => (
    <button onClick={() => nav(dir)} aria-label={dir < 0 ? 'Anterior' : 'Siguiente'} style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--color-brand-dark)', padding: 4, display: 'inline-flex' }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points={dir < 0 ? '15 18 9 12 15 6' : '9 18 15 12 9 6'}/></svg>
    </button>
  );
  return (
    <div style={{ width: 280, background: '#fff', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', padding: 16, fontFamily: 'var(--font-brand)', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
        {arrow(-1)}
        <span style={{ fontWeight: 'var(--fw-bold)', fontSize: 15, color: 'var(--text-strong)' }}>{MONTHS[view.m]} {view.y}</span>
        {arrow(1)}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 2 }}>
        {DOW.map((d, i) => <div key={'h' + i} style={{ textAlign: 'center', fontSize: 11, fontWeight: 'var(--fw-bold)', color: 'var(--text-muted)', padding: '4px 0' }}>{d}</div>)}
        {cells.map((d, i) => d === null ? <div key={i} /> : (
          <button key={i} onClick={() => onChange && onChange(new Date(view.y, view.m, d))} style={{
            aspectRatio: '1', border: 'none', cursor: 'pointer', borderRadius: '50%',
            fontFamily: 'var(--font-brand)', fontSize: 13, fontWeight: isSel(d) ? 'var(--fw-bold)' : 'var(--fw-medium)',
            background: isSel(d) ? 'var(--color-brand)' : isToday(d) ? 'var(--color-brand-wash)' : 'transparent',
            color: isSel(d) ? '#fff' : 'var(--text-body)', transition: 'var(--transition-action)',
          }}>{d}</button>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
