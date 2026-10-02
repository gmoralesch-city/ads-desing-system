// figma node: 221:2555 informativo/circle-arrow-right
export function InformativoCircleArrowRight(_p = {}) {
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
        <path d={"M 10 2 C 5.582 2 2 5.582 2 10 C 2 14.418 5.582 18 10 18 C 14.418 18 18 14.418 18 10 C 18 5.582 14.418 2 10 2 Z M 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 Z M 10.293 5.293 C 10.683 4.902 11.317 4.902 11.707 5.293 L 15.707 9.293 C 16.098 9.683 16.098 10.317 15.707 10.707 L 11.707 14.707 C 11.317 15.098 10.683 15.098 10.293 14.707 C 9.902 14.317 9.902 13.683 10.293 13.293 L 12.586 11 L 5 11 C 4.448 11 4 10.552 4 10 C 4 9.448 4.448 9 5 9 L 12.586 9 L 10.293 6.707 C 9.902 6.317 9.902 5.683 10.293 5.293 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default InformativoCircleArrowRight;
