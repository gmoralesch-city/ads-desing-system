// figma node: 221:2541 informativo/circle-error
export function InformativoCircleError(_p = {}) {
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
        <path d={"M 10 2 C 5.582 2 2 5.582 2 10 C 2 14.418 5.582 18 10 18 C 14.418 18 18 14.418 18 10 C 18 5.582 14.418 2 10 2 Z M 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 Z M 5.793 5.793 C 6.183 5.402 6.817 5.402 7.207 5.793 L 10 8.586 L 12.793 5.793 C 13.183 5.402 13.817 5.402 14.207 5.793 C 14.598 6.183 14.598 6.817 14.207 7.207 L 11.414 10 L 14.207 12.793 C 14.598 13.183 14.598 13.817 14.207 14.207 C 13.817 14.598 13.183 14.598 12.793 14.207 L 10 11.414 L 7.207 14.207 C 6.817 14.598 6.183 14.598 5.793 14.207 C 5.402 13.817 5.402 13.183 5.793 12.793 L 8.586 10 L 5.793 7.207 C 5.402 6.817 5.402 6.183 5.793 5.793 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default InformativoCircleError;
