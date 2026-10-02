import { TabBase } from './TabBase.jsx';

// figma node: 498:2234 Tab (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "estado=" + __venc(p.estado);

export function Tab(_p = {}) {
  const props = { ..._p, estado: _p.estado ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <TabBase
        style={{
          position: "relative",
          height: 40,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        icono={true}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      opacity: 0.4,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <TabBase style={{
          position: "relative",
          height: 40,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <TabBase style={{
          position: "relative",
          height: 40,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }} />
    </div>
  );
  const __impls = {
    // figma: Estado=Default
    "estado=default": __body0,
    // figma: Estado=Disabled
    "estado=disabled": __body1,
    // figma: Estado=Hover
    "estado=hover": __body2,
    // figma: Estado=Active
    "estado=active": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Tab;
