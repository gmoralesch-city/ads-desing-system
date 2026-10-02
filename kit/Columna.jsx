import { FlechasCaretDown } from './FlechasCaretDown.jsx';
import { FlechasCaretUp } from './FlechasCaretUp.jsx';

// figma node: 575:6108 Columna (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "estado=" + __venc(p.estado);

export function Columna(_p = {}) {
  const props = { ..._p, estado: _p.estado ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(120,120,120)",
        flexShrink: 0,
      }}>{props.text1 ?? "Columna 2"}</span>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <FlechasCaretUp />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(120,120,120)",
        flexShrink: 0,
      }}>{props.text1 ?? "Columna 2"}</span>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <FlechasCaretDown />}</div>
    </div>
  );
  const __impls = {
    // figma: Estado=Hover2
    "estado=hover2": __body0,
    // figma: Estado=Active
    "estado=active": __body0,
    // figma: Estado=Hover1
    "estado=hover1": __body1,
    // figma: Estado=Default
    "estado=default": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Columna;
