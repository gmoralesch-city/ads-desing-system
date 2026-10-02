// figma node: 592:4265 Point (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "estado=" + __venc(p.estado);

export function Point(_p = {}) {
  const props = { ..._p, estado: _p.estado ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 8,
      position: "relative",
      color: "rgb(241,245,255)",
      ...props.style,
    }}>
      <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 8,
      }}>
        <path d={"M 24 4 C 24 8 24 8 12 8 C 0 8 0 8 0 4 C 0 0 0 0 12 0 C 24 0 24 0 24 4 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 8,
      position: "relative",
      color: "rgb(0,139,191)",
      ...props.style,
    }}>
      <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 8,
      }}>
        <path d={"M 24 4 C 24 8 24 8 12 8 C 0 8 0 8 0 4 C 0 0 0 0 12 0 C 24 0 24 0 24 4 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 8,
      position: "relative",
      color: "rgb(32,190,255)",
      ...props.style,
    }}>
      <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 8,
      }}>
        <path d={"M 24 4 C 24 8 24 8 12 8 C 0 8 0 8 0 4 C 0 0 0 0 12 0 C 24 0 24 0 24 4 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 8,
      position: "relative",
      color: "rgb(0,174,239)",
      ...props.style,
    }}>
      <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 8,
      }}>
        <path d={"M 24 4 C 24 8 24 8 12 8 C 0 8 0 8 0 4 C 0 0 0 0 12 0 C 24 0 24 0 24 4 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
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
    "estado=default": __body3,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default Point;
