// figma node: 221:2537 informativo/circle-information
export function InformativoCircleInformation(_p = {}) {
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
        <path d={"M 10 8 C 10.552 8 11 8.448 11 9 L 11 15 C 11 15.552 10.552 16 10 16 C 9.448 16 9 15.552 9 15 L 9 9 C 9 8.448 9.448 8 10 8 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 11.5 5.5 C 11.5 6.328 10.828 7 10 7 C 9.172 7 8.5 6.328 8.5 5.5 C 8.5 4.672 9.172 4 10 4 C 10.828 4 11.5 4.672 11.5 5.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default InformativoCircleInformation;
