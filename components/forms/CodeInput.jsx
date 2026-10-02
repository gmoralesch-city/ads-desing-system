import React from 'react';

/**
 * CodeInput — one-time-code / verification entry (Figma "Codes").
 * N boxed digits, cyan border on the active box; auto-advance.
 */
export function CodeInput({ length = 4, value = '', onChange, error = false, size = 'lg', style = {} }) {
  const sm = size === 'sm';
  const refs = React.useRef([]);
  const chars = Array.from({ length }, (_, i) => value[i] || '');
  function set(i, v) {
    const d = v.replace(/\D/g, '').slice(-1);
    const next = chars.slice();
    next[i] = d;
    onChange && onChange(next.join(''));
    if (d && refs.current[i + 1]) refs.current[i + 1].focus();
  }
  function onKey(i, e) {
    if (e.key === 'Backspace' && !chars[i] && refs.current[i - 1]) refs.current[i - 1].focus();
  }
  return (
    <div style={{ display: 'inline-flex', gap: 12, ...style }}>
      {chars.map((c, i) => (
        <input key={i} ref={el => refs.current[i] = el} value={c} inputMode="numeric" maxLength={1}
          onChange={e => set(i, e.target.value)} onKeyDown={e => onKey(i, e)}
          onFocus={e => e.target.select()}
          style={{
            width: sm ? 52 : 65, height: sm ? 64 : 80, textAlign: 'center', boxSizing: 'border-box',
            fontFamily: 'var(--font-brand)', fontSize: sm ? 36 : 44, fontWeight: 'var(--fw-light)', lineHeight: '100%', color: 'var(--text-strong)',
            border: `1px solid ${error ? 'var(--color-danger)' : c ? 'var(--color-brand)' : '#B4B4B4'}`,
            borderRadius: 'var(--radius-sm)', outline: 'none', background: '#fff', caretColor: 'var(--color-brand)',
            transition: 'var(--transition-action)',
          }}
          onFocusCapture={e => e.currentTarget.style.borderColor = 'var(--color-brand)'} />
      ))}
    </div>
  );
}

export default CodeInput;
