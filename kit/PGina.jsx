// figma node: 853:14598 Página (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function PGina(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "active" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 124,
      borderRadius: 4,
      backgroundColor: "rgba(238,246,255,0.2)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 16px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: 1.440000057220459,
          color: "rgb(79,132,136)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Tipografía"}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 124,
      borderRadius: 4,
      backgroundColor: "rgba(0,174,239,0)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 16px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: 1.440000057220459,
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Tipografía"}</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 124,
      borderRadius: 4,
      backgroundColor: "rgba(0,174,239,0.08)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 16px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(232,244,244)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Tipografía"}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: Property 1=Active
    "property1=active": __body0,
    // figma: Property 1=Defauld
    "property1=defauld": __body1,
    // figma: Property 1=Hover
    "property1=hover": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default PGina;
