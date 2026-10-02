// figma node: 221:2813 objetos/calendar
export function ObjetosCalendar(_p = {}) {
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
      <svg width={18} height={19} viewBox="0 0 18 19" fill="none" style={{
        position: "absolute",
        left: 3,
        top: 2,
        width: 18,
        height: 19,
      }}>
        <path d={"M 6 0 C 6.552 0 7 0.448 7 1 L 7 2 L 11 2 L 11 1 C 11 0.448 11.448 0 12 0 C 12.552 0 13 0.448 13 1 L 13 2 L 16 2 C 17.105 2 18 2.895 18 4 L 18 17 C 18 18.105 17.105 19 16 19 L 2 19 C 0.895 19 0 18.105 0 17 L 0 4 C 0 2.895 0.895 2 2 2 L 5 2 L 5 1 C 5 0.448 5.448 0 6 0 Z M 5 4 L 2 4 L 2 7 L 16 7 L 16 4 L 13 4 L 13 5 C 13 5.552 12.552 6 12 6 C 11.448 6 11 5.552 11 5 L 11 4 L 7 4 L 7 5 C 7 5.552 6.552 6 6 6 C 5.448 6 5 5.552 5 5 L 5 4 Z M 16 9 L 2 9 L 2 17 L 16 17 L 16 9 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default ObjetosCalendar;
