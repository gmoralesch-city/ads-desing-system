// figma node: 221:2549 informativo/circle-remove
export function InformativoCircleRemove(_p = {}) {
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
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 20,
        height: 20,
      }}>
        <path d={"M 10 2 C 5.582 2 2 5.582 2 10 C 2 14.418 5.582 18 10 18 C 14.418 18 18 14.418 18 10 C 18 5.582 14.418 2 10 2 Z M 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 Z M 5 10 C 5 9.448 5.448 9 6 9 L 14 9 C 14.552 9 15 9.448 15 10 C 15 10.552 14.552 11 14 11 L 6 11 C 5.448 11 5 10.552 5 10 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default InformativoCircleRemove;
