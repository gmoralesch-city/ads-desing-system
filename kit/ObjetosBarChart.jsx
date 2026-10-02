// figma node: 221:2819 objetos/bar-chart
export function ObjetosBarChart(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(13,13,13)",
      ...props.style,
    }}>
      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
        position: "absolute",
        left: 3,
        top: 3,
        width: 18,
        height: 18,
      }}>
        <path d={"M 0 2 C 0 0.895 0.895 0 2 0 L 16 0 C 17.105 0 18 0.895 18 2 L 18 16 C 18 17.105 17.105 18 16 18 L 2 18 C 0.895 18 0 17.105 0 16 L 0 2 Z M 16 2 L 2 2 L 2 16 L 16 16 L 16 2 Z M 9 4 C 9.552 4 10 4.448 10 5 L 10 13 C 10 13.552 9.552 14 9 14 C 8.448 14 8 13.552 8 13 L 8 5 C 8 4.448 8.448 4 9 4 Z M 13 6 C 13.552 6 14 6.448 14 7 L 14 13 C 14 13.552 13.552 14 13 14 C 12.448 14 12 13.552 12 13 L 12 7 C 12 6.448 12.448 6 13 6 Z M 5 8 C 5.552 8 6 8.448 6 9 L 6 13 C 6 13.552 5.552 14 5 14 C 4.448 14 4 13.552 4 13 L 4 9 C 4 8.448 4.448 8 5 8 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default ObjetosBarChart;
