import { Chip } from '../components/display/Chip.jsx';

// figma node: 509:2394 Chips (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "estado=" + __venc(p.estado);

export function Chips(_p = {}) {
  const props = { ..._p, estado: _p.estado ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      opacity: 0.4,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 60,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Chip />}</div>
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
      <Chip style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 60,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Chip />}</div>
    </div>
  );
  const __impls = {
    // figma: Estado=Disabled
    "estado=disabled": __body0,
    // figma: Estado=Active
    "estado=active": __body1,
    // figma: Estado=Hover
    "estado=hover": __body2,
    // figma: Estado=Default
    "estado=default": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default Chips;
