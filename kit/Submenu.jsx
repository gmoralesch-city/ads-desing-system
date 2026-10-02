import { FlechasCaretDown } from './FlechasCaretDown.jsx';

// figma node: 1296:17112 Submenu
export function Submenu(_p = {}) {
  const props = { ..._p, icono: _p.icono ?? false };
  return (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "28px 20px 26px 20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 24,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "1px 0px 1px 0px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(120,120,120)",
            flexShrink: 0,
          }}>{props.text1 ?? "Cultura de seguros"}</span>
        </div>
        {props.icono && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.imagen ?? <FlechasCaretDown />}</div>
        )}
      </div>
      <div style={{
        position: "relative",
        height: 2,
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
}
export default Submenu;
