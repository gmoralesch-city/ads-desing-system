// figma node: 562:12270 Dias (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "estado=" + __venc(p.estado);

export function Dias(_p = {}) {
  const props = { ..._p, estado: _p.estado ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 20,
        height: 20,
        opacity: 0.4,
        borderRadius: 80,
        backgroundColor: "rgb(255,255,255)",
      }}>
        <span style={{
          position: "absolute",
          left: 2,
          top: 3,
          width: 16,
          height: 15,
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          lineHeight: "100%",
          color: "rgb(120,120,120)",
        }}>{props.text1 ?? "1"}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 20,
        height: 20,
        backgroundColor: "rgb(232,244,244)",
      }}>
        <span style={{
          position: "absolute",
          left: 2,
          top: 3,
          width: 16,
          height: 15,
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          lineHeight: "100%",
          color: "rgb(120,120,120)",
        }}>{props.text1 ?? "1"}</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 20,
        height: 20,
        borderRadius: 4,
        backgroundColor: "rgb(0,174,239)",
      }}>
        <span style={{
          position: "absolute",
          left: 2,
          top: 3,
          width: 16,
          height: 15,
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          lineHeight: "100%",
          color: "rgb(255,255,255)",
        }}>{props.text1 ?? "1"}</span>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 20,
        height: 20,
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
      }}>
        <span style={{
          position: "absolute",
          left: 2,
          top: 3,
          width: 16,
          height: 15,
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          lineHeight: "100%",
          color: "rgb(120,120,120)",
        }}>{props.text1 ?? "1"}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: Estado=Disabled
    "estado=disabled": __body0,
    // figma: Estado=Focus
    "estado=focus": __body1,
    // figma: Estado=Active
    "estado=active": __body2,
    // figma: Estado=Hover
    "estado=hover": __body3,
    // figma: Estado=Default
    "estado=default": __body3,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default Dias;
