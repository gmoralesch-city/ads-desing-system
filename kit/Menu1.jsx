import { ObjetosBarChart } from './ObjetosBarChart.jsx';

// figma node: 530:5583 1Menu
export function Menu1(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 87,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <svg width={80} height={2} viewBox="0 -1 80 2" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,1,-1,0,0,0)",
        transformOrigin: "0 0",
        width: 80,
        height: 2,
        color: "rgb(180,180,180)",
      }}>
        <path d={"M 1 -2 C 0.448 -2 0 -1.552 0 -1 C 0 -0.448 0.448 0 1 0 L 1 -2 Z M 79 0 C 79.552 0 80 -0.448 80 -1 C 80 -1.552 79.552 -2 79 -2 L 79 0 Z M 1 0 L 79 0 L 79 -2 L 1 -2 L 1 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 32,
            height: 32,
            flexShrink: 0,
          }}>{props.icon1 ?? <ObjetosBarChart style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          lineHeight: "100%",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Comisiones"}</span>
      </div>
      <svg width={80} height={1} viewBox="0 -0.500 80 1" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,1,-1,0,86,0)",
        transformOrigin: "0 0",
        width: 80,
        height: 1,
        color: "rgb(0,0,0)",
      }}>
        <path d={"M 0.5 -1 L 0 -1 L 0 0 L 0.5 0 L 0.5 -1 Z M 79.5 0 L 80 0 L 80 -1 L 79.5 -1 L 79.5 0 Z M 0.5 0 L 79.5 0 L 79.5 -1 L 0.5 -1 L 0.5 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default Menu1;
