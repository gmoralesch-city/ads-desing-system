// figma node: 221:2539 informativo/circle-warning
export function InformativoCircleWarning(_p = {}) {
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
        <path d={"M 10 2 C 5.582 2 2 5.582 2 10 C 2 14.418 5.582 18 10 18 C 14.418 18 18 14.418 18 10 C 18 5.582 14.418 2 10 2 Z M 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 10 12 C 9.448 12 9 11.552 9 11 L 9 5 C 9 4.448 9.448 4 10 4 C 10.552 4 11 4.448 11 5 L 11 11 C 11 11.552 10.552 12 10 12 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 8.5 14.5 C 8.5 13.672 9.172 13 10 13 C 10.828 13 11.5 13.672 11.5 14.5 C 11.5 15.328 10.828 16 10 16 C 9.172 16 8.5 15.328 8.5 14.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default InformativoCircleWarning;
