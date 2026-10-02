// figma node: 221:2831 objetos/credit-card
export function ObjetosCreditCard(_p = {}) {
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
        <path d={"M 20 2 C 20 0.895 19.105 0 18 0 L 2 0 C 0.895 0 0 0.895 0 2 L 0 14 C 0 15.105 0.895 16 2 16 L 18 16 C 19.105 16 20 15.105 20 14 L 20 2 Z M 18 4 L 2 4 L 2 2 L 18 2 L 18 4 Z M 2 7 L 18 7 L 18 14 L 2 14 L 2 7 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default ObjetosCreditCard;
