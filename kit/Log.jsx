import { FlechasCaretDown } from './FlechasCaretDown.jsx';

// figma node: 527:5433 Log
export function Log(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 20px 8px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-976aab5ef5cbe343" style={{
        position: "relative",
        width: 32,
        borderRadius: 8,
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <span style={{
        position: "relative",
        fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(0,174,239)",
        flexShrink: 0,
      }}>{props.text1 ?? "Victor"}</span>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <FlechasCaretDown style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
}
export default Log;
