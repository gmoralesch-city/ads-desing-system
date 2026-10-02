// figma node: 221:2579 funciones/remove
export function FuncionesRemove(_p = {}) {
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
      <svg width={16} height={2} viewBox="0 0 16 2" fill="none" style={{
        position: "absolute",
        left: 4,
        top: 11,
        width: 16,
        height: 2,
      }}>
        <path d={"M 0 1 C 0 0.448 0.448 0 1 0 L 15 0 C 15.552 0 16 0.448 16 1 C 16 1.552 15.552 2 15 2 L 1 2 C 0.448 2 0 1.552 0 1 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default FuncionesRemove;
