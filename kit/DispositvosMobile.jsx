// figma node: 221:2477 dispositvos/mobile
export function DispositvosMobile(_p = {}) {
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
      <svg width={12} height={18} viewBox="0 0 12 18" fill="none" style={{
        position: "absolute",
        left: 6,
        top: 3,
        width: 12,
        height: 18,
      }}>
        <path d={"M 0 2 C 0 0.895 0.895 0 2 0 L 10 0 C 11.105 0 12 0.895 12 2 L 12 16 C 12 17.105 11.105 18 10 18 L 2 18 C 0.895 18 0 17.105 0 16 L 0 2 Z M 10 2 L 2 2 L 2 16 L 10 16 L 10 2 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 7 14 C 7 14.552 6.552 15 6 15 C 5.448 15 5 14.552 5 14 C 5 13.448 5.448 13 6 13 C 6.552 13 7 13.448 7 14 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default DispositvosMobile;
