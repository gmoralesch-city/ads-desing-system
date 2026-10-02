const { Modal: MModal, Button: MButton, Input: MInput, Select: MSelect, Checkbox: MCheckbox, Badge: MBadge, Icon: MIcon, Textarea: MTextarea } = window.AseguradoraDelSurDesignSystem_031691;

/* ---------- Detalle de cotización (abre desde el ojo o el menú de fila) ------- */
function DetalleModal({ row, onClose, onReport }) {
  const D = window.ADSConsola;
  if (!row) return null;
  const campos = [
    ['N° de Cotización', row.cotizacion], ['N° de Identificación', row.identificacion],
    ['Ramo', row.ramo], ['Tipo de plan', row.plan], ['Canal', row.canal], ['Sucursal', row.sucursal],
    ['Vendedor', row.vendedor], ['Ejecutivo', row.ejecutivo],
    ['Deducible', D.money(row.deducible)], ['Vigencia', row.fecha.toLocaleDateString('es-EC', { day: '2-digit', month: 'long', year: 'numeric' })],
  ];
  return (
    <MModal open={true} onClose={onClose} width={560} title={row.cliente}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        <MBadge tone="warning">{row.tipo}</MBadge>
        <MBadge tone={D.estadoTone(row.estado)}>{row.estado}</MBadge>
      </div>
      <div style={{ background: 'var(--teal-100)', borderRadius: 'var(--radius-md)', padding: '20px 24px', marginBottom: 20 }}>
        <p style={{ margin: 0, fontFamily: 'var(--font-brand)', fontSize: 14, color: 'var(--text-muted)' }}>Valor de cotización</p>
        <p style={{ margin: '4px 0 0', fontFamily: 'var(--font-brand)', fontWeight: 300, fontSize: 40, lineHeight: 1, color: 'var(--text-strong)' }}>{D.money(row.valor)}</p>
      </div>
      <dl className="detalle-grid">
        {campos.map(([k, v]) => <React.Fragment key={k}><dt>{k}</dt><dd>{v}</dd></React.Fragment>)}
      </dl>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 24 }}>
        <MButton variant="primary" iconLeft={<MIcon name="FuncionesDownload" size={18} />}>Descargar</MButton>
        <MButton variant="secondary" onClick={() => onReport(row)} iconLeft={<MIcon name="ObjetosClipboardList" size={18} />}>Reportar siniestro</MButton>
      </div>
    </MModal>
  );
}

/* ---------- Reportar siniestro: formulario con validaciones ------------------- */
const RAMOS_SINIESTRO = ['Vehículos', 'Fianzas', 'Vida', 'Asistencia médica'];
function SiniestroModal({ row, onClose, onSubmit }) {
  const [f, setF] = React.useState({ cedula: '', poliza: row ? row.cotizacion : '', ramo: '', email: '', fecha: '', relato: '' });
  const [touched, setTouched] = React.useState({});
  const set = (k, v) => { setF(s => ({ ...s, [k]: v })); setTouched(t => ({ ...t, [k]: 1 })); };
  const errors = {
    cedula: !f.cedula ? 'Ingresa tu cédula.' : !/^\d{10}$/.test(f.cedula) ? 'La cédula debe tener 10 dígitos.' : '',
    poliza: !f.poliza ? 'Ingresa el número de póliza.' : '',
    ramo: !f.ramo ? 'Elige el ramo del siniestro.' : '',
    email: !f.email ? 'Ingresa tu correo.' : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email) ? 'Revisa el formato del correo.' : '',
    fecha: !f.fecha ? 'Ingresa la fecha del siniestro.' : new Date(f.fecha) > new Date() ? 'La fecha no puede ser futura.' : '',
    relato: f.relato.trim().length < 20 ? 'Cuéntanos qué pasó (mínimo 20 caracteres).' : '',
  };
  const valid = Object.values(errors).every(e => !e);
  const show = k => (touched[k] ? errors[k] : '') || undefined;
  const submit = () => {
    setTouched({ cedula: 1, poliza: 1, ramo: 1, email: 1, fecha: 1, relato: 1 });
    if (valid) onSubmit(f);
  };
  return (
    <MModal open={true} onClose={onClose} width={560} title="Reportar siniestro"
      footer={<React.Fragment>
        <MButton variant="secondary" onClick={onClose}>Cancelar</MButton>
        <MButton variant="primary" onClick={submit}>Enviar reporte</MButton>
      </React.Fragment>}>
      <p style={{ margin: '0 0 20px', color: 'var(--text-muted)' }}>Completa los datos y te contactamos en menos de 24 horas.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
        <MInput label="Cédula" value={f.cedula} error={show('cedula')} onChange={e => set('cedula', e.target.value.replace(/\D/g, '').slice(0, 10))} />
        <MInput label="N° de póliza" value={f.poliza} error={show('poliza')} onChange={e => set('poliza', e.target.value)} />
        <MSelect label="Ramo" value={f.ramo} options={RAMOS_SINIESTRO} placeholder="Elige un ramo" error={show('ramo')} onChange={e => set('ramo', e.target.value)} />
        <MInput label="Correo" type="email" value={f.email} error={show('email')} onChange={e => set('email', e.target.value)} />
        <MInput label="Fecha del siniestro" type="date" value={f.fecha} error={show('fecha')} onChange={e => set('fecha', e.target.value)} />
      </div>
      <div style={{ marginTop: 16 }}>
        <MTextarea label="¿Qué pasó?" value={f.relato} error={show('relato')} rows={4} onChange={e => set('relato', e.target.value)} />
      </div>
    </MModal>
  );
}

/* ---------- Términos y Condiciones: scroll + aceptación obligatoria ---------- */
const TERMINOS_TXT = 'Los siguientes términos y condiciones rigen el uso que usted como usuario le dé al contenido de este sitio web. En cualquier momento se producirán cambios en los Términos y Condiciones sin notificación alguna, para dar cumplimiento con lo establecido en la normativa, dichos cambios serán debidamente publicados en este sitio web.';
function TerminosModal({ onClose, onAccept }) {
  const [ok, setOk] = React.useState(false);
  const [leido, setLeido] = React.useState(false);
  return (
    <MModal open={true} onClose={onClose} width={440} title={" "} style={{ borderRadius: 8 }}>
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <h3 style={{ margin: 0, fontFamily: 'var(--font-brand)', fontWeight: 500, fontSize: 28, lineHeight: 1.1, color: '#484848' }}>Términos y Condiciones</h3>
        <p style={{ margin: '8px 0 0', fontFamily: 'var(--font-brand)', fontWeight: 500, fontSize: 16, color: '#787878' }}>Para continuar con la contratación es necesario que aceptes</p>
      </div>
      <div onScroll={e => { const el = e.currentTarget; if (el.scrollTop + el.clientHeight >= el.scrollHeight - 8) setLeido(true); }}
        style={{ height: 245, overflowY: 'auto', fontFamily: 'var(--font-brand)', fontWeight: 500, fontSize: 16, textAlign: 'justify', color: '#787878', paddingRight: 12 }}>
        <p style={{ marginTop: 0 }}>{TERMINOS_TXT}</p>
        <h4 style={{ fontSize: 16, color: '#484848' }}>Renuncia de Garantía</h4>
        <p>Usted comprende y acepta expresamente que asume en su totalidad, el riesgo del uso de los servicios, los cuales se proporcionan en sus condiciones originales y según su disponibilidad. Aseguradora del Sur renuncia expresamente a todas las garantías de cualquier tipo, ya sean expresas o implícitas.</p>
        <h4 style={{ fontSize: 16, color: '#484848' }}>Limitación de responsabilidad</h4>
        <p>Usted acepta que Aseguradora del Sur, en ningún caso, será responsable por pérdida o daño de todo tipo, ya sea por pérdida de beneficios, negocios, falla de la computadora o pérdida de cualquier tipo de información.</p>
        <h4 style={{ fontSize: 16, color: '#484848' }}>Leyes Aplicables</h4>
        <p>Aseguradora del Sur controla y opera el sitio web desde Ecuador. Los usuarios que accedan desde otros lugares lo harán por su propia decisión y son responsables del cumplimiento de las leyes locales aplicables.</p>
      </div>
      <div style={{ marginTop: 20 }}>
        <MCheckbox checked={ok} disabled={!leido} onChange={setOk} label="He leído y acepto los términos y condiciones" />
        {!leido && <p style={{ margin: '8px 0 0', fontFamily: 'var(--font-brand)', fontSize: 12, color: 'var(--text-muted)' }}>Desplázate hasta el final para poder aceptar.</p>}
      </div>
      <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
        <MButton variant="secondary" fullWidth onClick={onClose}>Cancelar</MButton>
        <MButton variant="primary" fullWidth disabled={!ok} onClick={onAccept}>Continuar</MButton>
      </div>
    </MModal>
  );
}

/* ---------- Confirmación destructiva ---------------------------------------- */
function ConfirmarModal({ mensaje, onClose, onConfirm }) {
  return (
    <MModal open={true} onClose={onClose} width={420} title="¿Confirmas la acción?"
      footer={<React.Fragment>
        <MButton variant="secondary" onClick={onClose}>No, volver</MButton>
        <MButton variant="primary" onClick={onConfirm}>Sí, continuar</MButton>
      </React.Fragment>}>
      {mensaje}
    </MModal>
  );
}

Object.assign(window, { DetalleModal, SiniestroModal, TerminosModal, ConfirmarModal });
