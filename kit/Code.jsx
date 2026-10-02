// figma node: 640:7897 Code
export function Code(_p = {}) {
  const props = { ..._p, cDigo: _p.cDigo ?? "1" };
  return (
    <div className={props.className} style={{
      width: 65,
      height: 80,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 65,
        height: 80,
        borderRadius: 8,
        backgroundColor: "rgb(217,217,217)",
      }} />
      <span style={{
        position: "absolute",
        left: 13,
        top: 17,
        width: 40,
        height: 44,
        fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        lineHeight: "100%",
        color: "rgb(120,120,120)",
      }}>{props.cDigo}</span>
    </div>
  );
}
export default Code;
