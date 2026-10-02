// figma node: 853:14407 Estado
export function Estado(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 40,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 80,
        height: 80,
        borderRadius: "50%",
        backgroundColor: "rgb(132,187,13)",
        flexShrink: 0,
      }} />
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 800,
        fontSize: 100,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(132,187,13)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Estado"}</span>
    </div>
  );
}
export default Estado;
