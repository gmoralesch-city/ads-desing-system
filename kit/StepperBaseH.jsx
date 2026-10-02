import { FuncionesFavorite } from './FuncionesFavorite.jsx';

// figma node: 515:2375 Stepper base - H (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "estado=" + __venc(p.estado);

export function StepperBaseH(_p = {}) {
  const props = { ..._p, estado: _p.estado ?? "completo" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 10,
        top: 8,
        width: 20,
        height: 24,
        fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        textAlign: "center",
        lineHeight: "100%",
        color: "rgb(0,174,239)",
      }}>{props.text1 ?? "1"}</span>
      <span style={{
        position: "absolute",
        left: 1,
        top: 44,
        width: 38,
        height: 19,
        fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(0,0,0)",
        textDecoration: "underline",
      }}>{props.text2 ?? "Paso"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 8,
      backgroundColor: "rgb(0,174,239)",
      boxShadow: "inset 0 0 0 2px rgb(0,174,239)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 8,
          top: 8,
          width: 24,
          height: 24,
        }}>{props.icon1 ?? <FuncionesFavorite />}</div>
      <span style={{
        position: "absolute",
        left: 1,
        top: 44,
        width: 38,
        height: 19,
        fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(0,0,0)",
      }}>{props.text1 ?? "Paso"}</span>
    </div>
  );
  const __impls = {
    // figma: Estado=Pendiente
    "estado=pendiente": __body0,
    // figma: Estado=Actual
    "estado=actual": __body0,
    // figma: Estado=Completo
    "estado=completo": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default StepperBaseH;
