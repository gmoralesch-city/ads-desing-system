// figma node: 221:2684 flechas/arrow-right
export function FlechasArrowRight(_p = {}) {
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
      <svg width={16} height={14} viewBox="0 0 16 14" fill="none" style={{
        position: "absolute",
        left: 4,
        top: 5,
        width: 16,
        height: 14,
      }}>
        <path d={"M 8.293 0.293 C 8.683 -0.098 9.317 -0.098 9.707 0.293 L 15.707 6.293 C 15.895 6.48 16 6.735 16 7 C 16 7.265 15.895 7.52 15.707 7.707 L 9.707 13.707 C 9.317 14.098 8.683 14.098 8.293 13.707 C 7.902 13.317 7.902 12.683 8.293 12.293 L 12.586 8 L 1 8 C 0.448 8 0 7.552 0 7 C 0 6.448 0.448 6 1 6 L 12.586 6 L 8.293 1.707 C 7.902 1.317 7.902 0.683 8.293 0.293 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default FlechasArrowRight;
