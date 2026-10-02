// figma node: 221:2519 comunicación/email
export function ComunicaciNEmail(_p = {}) {
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
      <svg width={20} height={16} viewBox="0 0 20 16" fill="none" style={{
        position: "absolute",
        left: 2,
        top: 4,
        width: 20,
        height: 16,
      }}>
        <path d={"M 0 2 C 0 0.895 0.895 0 2 0 L 18 0 C 19.105 0 20 0.895 20 2 L 20 14 C 20 15.105 19.105 16 18 16 L 2 16 C 0.895 16 0 15.105 0 14 L 0 2 Z M 3.519 2 L 10 7.671 L 16.481 2 L 3.519 2 Z M 18 3.329 L 10.659 9.753 C 10.281 10.082 9.719 10.082 9.341 9.753 L 2 3.329 L 2 14 L 18 14 L 18 3.329 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default ComunicaciNEmail;
