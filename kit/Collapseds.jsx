import { FuncionesCheck } from './FuncionesCheck.jsx';

// figma node: 523:8125 Collapseds (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "estado=" + __venc(p.estado);

export function Collapseds(_p = {}) {
  const props = { ..._p, estado: _p.estado ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 4px 0px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <FuncionesCheck />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(120,120,120)",
        flexShrink: 0,
      }}>{props.text1 ?? "Desplegado 1"}</span>
    </div>
  );
  const __impls = {
    // figma: Estado=Hover
    "estado=hover": __body0,
    // figma: Estado=Default
    "estado=default": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Collapseds;
