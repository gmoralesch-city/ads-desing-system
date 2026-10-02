// figma node: 221:2710 flechas/caret-down
export function FlechasCaretDown(_p = {}) {
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
      <svg width={10} height={6} viewBox="0 0 10 6" fill="none" style={{
        position: "absolute",
        left: 7,
        top: 10,
        width: 10,
        height: 6,
      }}>
        <path d={"M 10 0 L 5 6 L 0 0 L 10 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default FlechasCaretDown;
