import { Alert } from '../components/feedback/Alert.jsx';

// figma node: 81:145 Alerts (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mensaje=" + __venc(p.mensaje);

export function Alerts(_p = {}) {
  const props = { ..._p, mensaje: _p.mensaje ?? "informativo" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <Alert
        style={{
          position: "relative",
          width: 496,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        cTA={false}
        link={true}
        salir={false}
        icono={true}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <Alert
        style={{
          position: "relative",
          width: 496,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        link={true}
        salir={false}
      />
    </div>
  );
  const __impls = {
    // figma: Mensaje=Advertencia
    "mensaje=advertencia": __body0,
    // figma: Mensaje=Informativo
    "mensaje=informativo": __body1,
    // figma: Mensaje=Exitoso
    "mensaje=exitoso": __body1,
    // figma: Mensaje=Fallido
    "mensaje=fallido": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Alerts;
