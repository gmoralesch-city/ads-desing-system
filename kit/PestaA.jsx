// figma node: 853:14597 Pestaña (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function PestaA(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "active" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 76,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 2,
        backgroundColor: "rgb(13,194,152)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "8px 12px 8px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10,
          whiteSpace: "nowrap",
          lineHeight: 1,
          color: "rgb(2,51,101)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Protones"}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 76,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 2,
        backgroundColor: "rgb(136,196,200)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "rgb(79,132,136)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "8px 12px 8px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Protones"}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: Property 1=Defaud
    "property1=defaud": __body0,
    // figma: Property 1=Hover
    "property1=hover": __body1,
    // figma: Property 1=Active
    "property1=active": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default PestaA;
