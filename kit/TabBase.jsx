import { FuncionesFavorite } from './FuncionesFavorite.jsx';

// figma node: 498:1982 Tab base
export function TabBase(_p = {}) {
  const props = { ..._p, icono: _p.icono ?? true };
  return (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      overflow: "hidden",
      borderRadius: "4px 4px 0px 0px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "8px 20px 8px 20px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.icono && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <FuncionesFavorite />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(0,0,0)",
          flexShrink: 0,
        }}>{props.text1 ?? "Tab 1"}</span>
      </div>
      <svg height={1} viewBox="0 -0.500 111 1" fill="none" style={{
        position: "relative",
        height: 1,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0.5 -1 L 0 -1 L 0 0 L 0.5 0 L 0.5 -1 Z M 110.5 0 L 111 0 L 111 -1 L 110.5 -1 L 110.5 0 Z M 0.5 0 L 110.5 0 L 110.5 -1 L 0.5 -1 L 0.5 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default TabBase;
