// figma node: 221:2595 funciones/menu
export function FuncionesMenu(_p = {}) {
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
      <svg width={16} height={12} viewBox="0 0 16 12" fill="none" style={{
        position: "absolute",
        left: 4,
        top: 6,
        width: 16,
        height: 12,
      }}>
        <path d={"M 0 1 C 0 0.448 0.448 0 1 0 L 15 0 C 15.552 0 16 0.448 16 1 C 16 1.552 15.552 2 15 2 L 1 2 C 0.448 2 0 1.552 0 1 Z M 0 6 C 0 5.448 0.448 5 1 5 L 15 5 C 15.552 5 16 5.448 16 6 C 16 6.552 15.552 7 15 7 L 1 7 C 0.448 7 0 6.552 0 6 Z M 0 11 C 0 10.448 0.448 10 1 10 L 15 10 C 15.552 10 16 10.448 16 11 C 16 11.552 15.552 12 15 12 L 1 12 C 0.448 12 0 11.552 0 11 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default FuncionesMenu;
